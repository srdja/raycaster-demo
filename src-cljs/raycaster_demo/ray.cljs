(ns raycaster-demo.ray
  (:require [raycaster-demo.map :as map]
            [raycaster-demo.math :as math]))


(def cell
  {:x 0
   :y 0
   :w 0
   :h 0})


(def ray
  {:org [0 0]
   :end [0 0]
   :dir [0 0]
   :len 0
   :seq 0
   :tile-id 0})


(defn parent-cell
  [org dir]
  (assoc cell
         :x (if (> (nth dir 0) 0)
              (int (nth org 0))
              (.ceil js/Math (- (nth org 0) 1)))
         :y (if (> (nth dir 1) 0)
              (int (nth org 1))
              (.ceil js/Math (- (nth org 1) 1)))
         :w 1
         :h 1))


(defn sub-cell
  [paren org dir]
  (let [org-x  (nth org 0)
        org-y  (nth org 1)
        width  (if (< (nth dir 0) 0)
                 (- (:x paren) org-x)
                 (- (+ (:x paren) (:w paren)) org-x))
        height (if (< (nth dir 1) 0)
                 (- (:y paren) org-y)
                 (- (+ (:y paren) (:h paren)) org-y))]
    (assoc cell
           :x org-x
           :y org-y
           :w width
           :h height)))


(defn traverse-cell
  [quad ray-dir]
  (let [x (nth ray-dir 0)
        y (nth ray-dir 1)
        w (:w quad)
        h (:h quad)
        d (.sqrt js/Math (+ (* w w) (* h h)))
        diagonal-angle (.asin js/Math (/ h d))
        ray-angle      (.asin js/Math y)]
    (let [scale (if (and (>= ray-angle 0) (>= diagonal-angle 0))
                  (cond
                    (and (<= ray-angle diagonal-angle) (not= x 0)) (/ w x)
                    (and (>  ray-angle diagonal-angle) (not= y 0)) (/ h y)
                    :else 1)
                  (cond
                    (and (>= ray-angle diagonal-angle) (not= x 0)) (/ w x)
                    (and (<  ray-angle diagonal-angle) (not= y 0)) (/ h y)
                    :else 1))]
      [(+ (:x quad) (* x scale))
       (+ (:y quad) (* y scale))])))


(defn final-point
  [map org dir]
  (loop [p org]
    (let [par (parent-cell p dir)]
      (if (or (map/point-is-solid map par)
              (and (= (nth dir 0) 0) (= (nth dir 1) 0)))
        [p par]
        (recur
         (traverse-cell (sub-cell par p dir) dir))))))


(defn cast
  [map org dir seq ang]
  (let [fp  (final-point map org dir)
        end (nth fp 0)
        par (nth fp 1)
        id  (map/tile-id-at map (:x par) (:y par))
        len (math/point-distance org end)]
    (assoc ray
           :dir dir
           :org org
           :end end
           :len (* len (.cos js/Math (math/to-radians ang)))
           :seq seq
           :tile-id rid)))


(defn cast-fan
  [map org fw fov n]
  (let [angle-start (* -1 (/ fov 2))
        angle-step  (/ fov n)
        dir-start   (math/vector-rotate fw angle-start)]
    (loop [step 0 rays []]
      (let [dir (math/vector-rotate dir-start (* step angle-step))
            ang (+ angle-start (* step angle-step))
            ray (cast map org dir step ang)]
        (if (= step n)
          (conj rays ray)
          (recur (inc step) (conj rays ray)))))))
