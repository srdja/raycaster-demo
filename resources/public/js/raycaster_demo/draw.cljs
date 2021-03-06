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
        (.beginPath context)
        (.moveTo context org-x org-y)
        (.lineTo context end-x end-y)
        (aset context "lineWidth" 1)
        (aset context "strokeStyle" "white")
        (.stroke context)
        (.restore context))))


(defn eye
  [context viewport eye]
  (do (.save context)
      (.restore context)))
