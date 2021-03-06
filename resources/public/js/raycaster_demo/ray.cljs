(ns raycaster-demo.ray
  (:require [raycaster-demo.map :as map]))


(def quadrant
  {:x 0
   :y 0
   :w 0
   :h 0})


(def ray
  {:org [0 0]
   :end [0 0]
   :dir [0 0]
   :len 0})


(defn parent-quadrant
  "Returns the parent quadrant of the [org] point and direction [dir]
   If a point sits on a grid point the direction is used to determine
   to which grid cell does the point belong"
  [org dir]
  (assoc quadrant
         ;; Since a border point can belong to both quadrants
         :x (if (> (nth dir 0) 0)
              (int (nth org 0))
              (- (int (nth org 0)) 1))
         :y (if (> (nth dir 1) 0)
              (int (nth org 1))
              (- (int (nth org 1)) 1))
         :w 1
         :h 1))


(defn sub-quadrant
  "Returns a sub-quadrant of a quadrant through which the ray
  is traveling. The x and y of the sub-quadrant represent the
  origin of the ray.

  [f]    function that returns the quadrant of [org]
  [org]  ray origin vector
  [dir]  ray direction vector
  "
  [f org dir]
  (let [paren (f org dir)
        org-x (nth org 0)
        org-y (nth org 1)
        width (if (< (nth dir 0) 0)                    ;; -x
                 (* -1 (- org-x (:x paren)))
                 (- (+ (:x paren) (:w paren)) org-x))
        height (if (< (nth dir 1) 0)                   ;; -y
                 (* -1 (- org-y (:y paren)))
                 (- (+ (:y paren) (:h paren)) org-y))]
    (assoc quadrant
           :x org-x
           :y org-y
           :w width
           :h height)))


;; FIXME - names
(defn next-grid-intersect
  "Returns the next point on the grid that the ray would pass"
  [quad ray-dir]
  (let [x (nth ray-dir 0)
        y (nth ray-dir 1)
        w (:w quad)
        h (:h quad)
        d (.sqrt js/Math (+ (* w w) (* h h)))
        angle-a (.abs js/Math (.asin js/Math (/ h d))) ;; diagonal angle
        angle-b (.abs js/Math (.asin js/Math y))]      ;; direction angle
    (let [scale (cond
                  (and (<= angle-b angle-a) (not= x 0)) (/ w x)
                  (and (>  angle-b angle-a) (not= y 0)) (/ h y)
                  :else 1)]
      [(+ (:x quad) (* x scale))
       (+ (:y quad) (* y scale))])))


(defn end-grid-point
  "Casts a ray across the grid and returns the end point"
  [map org dir]
  (loop [p org]
    (if (map/point-is-solid map (parent-quadrant p dir))
      p
      (recur
       (next-grid-intersect (sub-quadrant parent-quadrant p dir)
                            dir)))))


(defn cast
  "Returns a ray "
  [map org dir]
  (let [end (end-grid-point map org dir)
        len (let [a (- (nth end 0) (nth org 0))
                  b (- (nth end 1) (nth org 1))]
              (.sqrt js/Math (+ (* a a) (* b b))))]
  (assoc ray
         :org org
         :end end
         :dir dir
         :len len)))
