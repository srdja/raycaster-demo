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


(def eye
  {:pos [4 4]
   :dir [1 0]
   :yaw [1 0]
   :fov 90
   :speed 3
   :turn-speed 3}) ;; degrees per second


(def state (atom {:timer time/time :eye eye}))


(defn draw
  [state]
  (do (draw/tile-map-2d context viewport map/tile-map)
      (draw/ray context viewport (ray/cast map/tile-map [3 3] [1 0]))
      state))


(defn update-frame
  []
  (do (reset! state
              (let [time-d (time/delta (:time @state))
                    drawn  (draw @state)
                    time-s (time/start time-d)]
                drawn))
      (.requestAnimationFrame js/window update-frame)))

(.requestAnimationFrame js/window update-frame)
