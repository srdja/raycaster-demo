(ns raycaster-demo.core
  (:require [goog.string.format]
            [goog.string :as gstr]
            [raycaster-demo.ray :as ray]
            [raycaster-demo.map :as map]
            [raycaster-demo.math :as math]
            [raycaster-demo.draw :as draw]
            [raycaster-demo.input :as input]))


(def surface (.getElementById js/document "surface"))
(def context (.getContext surface "2d"))


(def d3-viewport {:x 0.5 :y 0 :w 512 :h 512})
(def d2-viewport {:x 512 :y 0 :w 512 :h 512})
(def full-viewport {:x 0 :y 0 :w 1024 :h 512})


(defn eye-to-map-coords
  [eye viewport]
  (let [p-x (nth (:pos eye) 0)
        p-y (nth (:pos eye) 1)
        x (/ p-x 16)
        y (/ p-y 16)]
    [x y]))


(def eye
  {:pos [64 64]
   :dir [0 0]
   :fw  [1 0]
   :fov 60
   :rays 128
   :speed 50
   :turn-speed 40}) ;; degrees per second


(defn get-direction
  [keys fw]
  (let [l (if (:a keys) (math/vector-rotate fw -90) [0 0])
        r (if (:d keys) (math/vector-rotate fw  90) [0 0])
        f (if (:w keys) fw [0 0])
        b (if (:s keys) (math/vector-rotate fw 180) [0 0])]
    (math/vector-normalize
     (map + l r f b))))


(defn get-fov
  [keys]
  (:fov keys))


(defn get-rays
  [keys]
  (:rays keys))


(defn new-forward-vector
  [fw yaw speed time]
  (let [angle (* yaw (* speed (/ time 1000)))]
    (math/vector-rotate fw angle)))


(defn new-position
  [pos dir speed time]
  (let [x (nth pos 0)
        y (nth pos 1)
        s (* speed (/ time 1000))
        moved-x (* s (nth dir 0))
        moved-y (* s (nth dir 1))
        new-x   (+ x moved-x)
        new-y   (+ y moved-y)]
    [new-x new-y]))


(defn get-yaw
  [keys]
  (let [l (:left keys)
        r (:right keys)]
    (cond
      (and l (not r)) -1  ;; canvas y axis is flipped
      (and r (not l))  1  ;;
      (not (or r l)) 0
      (and r l) 0)))


(defn apply-inputs
  [eye keys time]
  (let [yaw (get-yaw keys)
        fov (get-fov keys)
        ray (get-rays keys)
        fw  (new-forward-vector (:fw eye)
                                yaw
                                (:turn-speed eye)
                                time)
        dir (get-direction keys fw)
        pos (new-position (:pos eye)
                          dir
                          (:speed eye)
                          time)]
    (assoc eye
           :pos pos
           :dir dir
           :fw fw
           :rays ray
           :fov fov)))


(def state
  (atom {:timer-start (.now js/Date)
         :eye eye
         :rays []
         :fps 0}))


(defn draw-frame
  [state]
  (do (.clearRect context 0 0 1024 512)
      (draw/tile-map-2d context d2-viewport map/render-map)
      (draw/rays context d2-viewport (:rays state))
      (draw/fill-floor context d3-viewport)
      (draw/columns context d3-viewport (:rays state))
      (draw/eye context d2-viewport (:eye state))
      (draw/info context d3-viewport {:fps (:fps state)
                                      :fov (:fov (:eye state))
                                      :rays (:rays (:eye state))})
      (draw/frame context full-viewport)
      state))


(defn next-frame
  [state inputs]
  (let [time-now   (.now js/Date)
        time-delta (- time-now (:timer-start state))
        eye        (apply-inputs (:eye state) inputs time-delta)
        eye-coord  (eye-to-map-coords eye d3-viewport)
        rays       (ray/cast-fan map/collision-map eye-coord (:fw eye) (:fov eye) (:rays eye))
        fps        (/ 1000 time-delta)
        end-state  (assoc state
                          :timer-start time-now
                          :eye eye
                          :rays rays
                          :fps fps)]
    (draw-frame end-state)))


(defn update-frame
  []
  (do (reset! state (next-frame @state @input/keys-down))
      (.requestAnimationFrame js/window update-frame)))


(.requestAnimationFrame js/window update-frame)
