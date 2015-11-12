(ns raycaster-demo.draw
  (:require [goog.string.format]
            [goog.string :as gstr]
            [raycaster-demo.map :as map]))


(defn tile-map-2d
  [context viewport tile-map]
  (do
    (.save context)
    (doseq [tile (:data tile-map)]
      (let [index (nth tile 0)
            color (nth tile 1)
            side  (:side tile-map)
            view  (:w viewport)
            width (/ view side)
            x     (+ (:x viewport) (* width (rem index side)))
            y     (+ (:y viewport) (* width (int (/ index side))))]
        (do
          (.beginPath context)
          (.rect context x y width width)
          (case color
            1 (aset context "fillStyle" "#2D4535")
            2 (aset context "fillStyle" "#80FCDE")
            3 (aset context "fillStyle" "#E7F4F0")
            4 (aset context "fillStyle" "#6DE69B")
            5 (aset context "fillStyle" "#73AD82")
            (aset context "fillStyle" "black"))
          (.fill context)))
      (.restore context))))


(defn ray
  [context viewport ray]
  (let [side 32
        view  (:w viewport)
        width (/ view side)
        vp-x  (:x viewport)
        vp-y  (:y viewport)
        org-x (+ vp-x (* width (nth (:org ray) 0)))
        org-y (+ vp-y (* width (nth (:org ray) 1)))
        end-x (+ vp-x (* width (nth (:end ray) 0)))
        end-y (+ vp-y (* width (nth (:end ray) 1)))]
    (do (.save context)
        (.translate context 0.5 0.5)
        (.beginPath context)
        (aset context "lineWidth" 1)
        (aset context "strokeStyle" "white")
        (.moveTo context org-x org-y)
        (.lineTo context end-x end-y)
        (.stroke context)
        (.restore context))))


(defn rays
  [context viewport rays]
    (doseq [r rays]
      (ray context viewport r)))


(defn eye
  [context viewport eye]
  (do (.save context)
      (.beginPath context)
      (.rect context
             (+ (:x viewport) (nth (:pos eye) 0))
             (+ (:y viewport) (nth (:pos eye) 1)) 1 1)
      (aset context "fillStyle" "red")
      (.fill context)
      (.restore context)))


(defn info
  [context viewport info]
  (let [fps  (:fps info)
        rays (:rays info)
        fov  (:fov info)
        vp-x (:x viewport)
        vp-y (:y viewport)]
    (do (.save context)
        (aset context "font" "14px Sans")
        (aset context "fillStyle" "white")
        (.fillText context (gstr/format "fps: %.2f,  fov: %d°,  rays: %d"
                                        fps, fov, rays)
                   (+ vp-x 20)
                   (+ vp-y 35))
        (.restore context))))


(defn columns
  [context viewport rays]
  (do (.save context)
      (let [vp-x    (:x viewport)
            vp-y    (:y viewport)
            vp-h    (:h viewport)
            vp-w    (:w viewport)
            horizon (/ vp-h 2)
            n-rays  (count rays)
            width   (/ vp-w n-rays)]
        (doseq [ray rays]
          (let [n     (:seq ray)
                color (:color ray)
                h     (/ vp-h (:len ray))
                x     (+ vp-x (* n width))
                y     (/ (- vp-h h) 2)]
            (do (.beginPath context)
                (.rect context x y width h)
                (case color
                  1 (aset context "fillStyle" "#2D4535")
                  2 (aset context "fillStyle" "#80FCDE")
                  3 (aset context "fillStyle" "#E7F4F0")
                  4 (aset context "fillStyle" "#6DE69B")
                  5 (aset context "fillStyle" "#73AD82")
                  (aset context "fillStyle" "black"))
                (.fill context)
;;                (aset context "lineWidth" 1)
;;                (aset context "strokeStyle" "")
;;                (.stroke context)))))
      (.restore context)))))))


(defn fill-floor
  [context viewport]
  (let [x (:x viewport)
        y (/ (:h viewport) 2)
        w (:w viewport)]
    (do (.save context)
        (.rect context x y w y)
        (aset context "fillStyle" "grey")
        (.fill context)
        (.restore context))))
