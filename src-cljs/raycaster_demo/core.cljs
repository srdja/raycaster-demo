(ns raycaster-demo.core
  (:require [goog.string.format]
            [goog.string :as gstr]
            [raycaster-demo.ray :as ray]
            [raycaster-demo.map :as map]
            [raycaster-demo.math :as math]
            [raycaster-demo.draw :as draw]))


;; vector scale = (map * vector [1 1])

;; TODO add keys for fov+, fov-
(def keys-down (atom {:w [0 0] :a [0 0] :s [0 0] :d [0 0] :left false :right false}))


(defn update-key-down
  [event]
  (let [keys @keys-down]
    (case (aget event "keyCode")
      87 (reset! keys-down (update-in keys [:w] (fn [] [ 0 -1])))
      65 (reset! keys-down (update-in keys [:a] (fn [] [-1  0])))
      83 (reset! keys-down (update-in keys [:s] (fn [] [ 0  1])))
      68 (reset! keys-down (update-in keys [:d] (fn [] [ 1  0])))
      37 (reset! keys-down (update-in keys [:left] (fn [] true)))
      39 (reset! keys-down (update-in keys [:right] (fn [] true)))
      event)))


(defn update-key-up
  [event]
  (let [keys @keys-down]
    (case (aget event "keyCode")
      87 (reset! keys-down (update-in keys [:w] (fn [] [0 0])))
      65 (reset! keys-down (update-in keys [:a] (fn [] [0 0])))
      83 (reset! keys-down (update-in keys [:s] (fn [] [0 0])))
      68 (reset! keys-down (update-in keys [:d] (fn [] [0 0])))
      37 (reset! keys-down (update-in keys [:left] (fn [] false)))
      39 (reset! keys-down (update-in keys [:right] (fn [] false)))
      event)))


(aset js/window "onkeydown" update-key-down)
(aset js/window "onkeyup" update-key-up)


(def surface (.getElementById js/document "surface"))

;; Drawing context
(def context (.getContext surface "2d"))


;; Viewport
(def viewport {:w 512 :h 512}) ;; should be passed to drawing functions
;; mouse yaw

(def position {:x 0 :y 0})

(def time
  {:start (.now js/Date)
   :delta 0
   :current 0})


(def eye
  {:pos [4 4]
   :dir [1 0]
   :yaw [1 0]
   :fov 90
   :speed 3
   :turn-speed 3}) ;; degrees per second


(def state (atom {:timer time :eye eye}))


(defn time-delta
  [time]
  (assoc time :delta (- (.now js/Date) (:start time))))


(defn time-start
  [time]
  (assoc time :start (:current time)))

(def zrak (ray/cast map/tile-map [3 3] [1 0]))

(defn draw
  [state]
  (do (draw/tile-map-2d context viewport map/tile-map)
      (draw/ray context viewport (ray/cast map/tile-map [3 3] [1 0]))
      state))


(defn update-frame
  []
  (do (reset! state
              (let [time   (:time @state)
                    time-d (time-delta time)
                    drawn  (draw @state)
                    time-s (time-start time-d)]
                drawn))
      (.requestAnimationFrame js/window update-frame)))

(.requestAnimationFrame js/window update-frame)
