(ns raycaster-demo.core
  (:require [goog.string.format]
            [goog.string :as gstr]
            [raycaster-demo.ray :as ray]
            [raycaster-demo.map :as map]
            [raycaster-demo.math :as math]
            [raycaster-demo.draw :as draw]
            [raycaster-demo.time :as time]
            [raycaster-demo.input :as input]))


(def surface (.getElementById js/document "surface"))

;; Drawing context
(def context (.getContext surface "2d"))

;; Viewport
(def viewport {:w 512 :h 512}) ;; should be passed to drawing functions
;; mouse yaw


(defn eye-to-map-coords
  [eye]
  [(/ (nth (:pos eye) 0) 16)
   (/ (nth (:pos eye) 1) 16)])


(def eye
  {:pos [64 64]
   :dir [0 0]
   :fw  [1 0]
   :fov 90
   :speed 50
   :turn-speed 40}) ;; degrees per second


(defn get-direction
  [keys]
  (math/vector-normalize
   (map +
        (:w keys)
        (:a keys)
        (:s keys)
        (:d keys))))


(defn get-fov
  [keys]
  (:fov keys))


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
      (and l (not r)) 1
      (and r (not l)) -1
      (not (or r l)) 0
      (and r l) 0)))


(defn apply-inputs
  [eye keys time]
  (let [dir (get-direction keys)
        yaw (get-yaw keys)
        fov (get-fov keys)
        fw  (new-forward-vector (:fw eye)
                                yaw
                                (:turn-speed eye)
                                time)
        pos (new-position (:pos eye)
                          dir
                          (:speed eye)
                          time)]
    (assoc eye
           :pos pos
           :dir dir
           :fw fw
           :fov fov)))


(def state
  (atom {:timer-start (.now js/Date)
         :eye eye
         :rays []}))


(defn draw
  [state]
  (do (.clearRect context 0 0 (:w viewport) (:h viewport))
      (draw/tile-map-2d context viewport map/tile-map)
;;      (draw/ray context viewport (ray/cast map/tile-map (eye-to-map-coords (:eye state)) (:fw (:eye state))))
      (draw/rays context viewport (:rays state))
      state))


(defn update-frame
  []
  (do (reset! state
              (let [time-now   (.now js/Date)
                    time-delta (- time-now (:timer-start @state))
                    eye        (apply-inputs (:eye @state) @input/keys-down time-delta)
                    eye-coord  (eye-to-map-coords eye)
                    rays       (ray/radial-cast map/tile-map eye-coord (:fw eye) (:fov eye) 256)
                    end-state  (assoc @state
                                      :timer-start time-now
                                      :eye eye
                                      :rays rays)]
                (draw end-state)))
      (.requestAnimationFrame js/window update-frame)))

(.requestAnimationFrame js/window update-frame)
