(ns raycaster-demo.draw
  (:require [goog.string.format]
            [goog.string :as gstr]))


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
            x     (* width (rem index side))
            y     (* width (int (/ index side)))]
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
        view (:w viewport)
        width (/ view side)
        org-x (* width (nth (:org ray) 0))
        org-y (* width (nth (:org ray) 1))
        end-x (* width (nth (:end ray) 0))
        end-y (* width (nth (:end ray) 1))]
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
      (.rect context (nth (:pos eye) 0) (nth (:pos eye) 1) 1 1)
      (aset context "fillStyle" "red")
      (.fill context)
      (.restore context)))


(defn fps
  [context viewport frames]
  (do (.save context)
      (aset context "font" "20px Sans")
      (aset context "fillStyle" "white")
      (.fillText context (gstr/format "fps: %.2f" frames) 20 35)
      (.restore context)))
