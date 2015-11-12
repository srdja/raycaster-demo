(ns raycaster-demo.ray
  (:require [raycaster-demo.map :as map]
            [raycaster-demo.math :as math]))


(def quadrant
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
   :color 0})


(defn parent-quadrant
  "Returns the parent quadrant of the [org] point and direction [dir]
   If a point sits on a grid point the direction is used to determine
   to which grid cell does the point belong"
  [org dir]
  (assoc quadrant
         ;; Since a border point can belong to both quadrants
         :x (if (> (nth dir 0) 0)
              (int (nth org 0))
              (.ceil js/Math (- (nth org 0) 1)))
         :y (if (> (nth dir 1) 0)
              (int (nth org 1))
              (.ceil js/Math (- (nth org 1) 1)))
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
  [paren org dir]
  (let [org-x (nth org 0)
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
    (let [par (parent-quadrant p dir)]
      (if (or (map/point-is-solid map par)
              (and (= (nth dir 0) 0) (= (nth dir 1) 0)))
        [p par]
        (recur
         (next-grid-intersect (sub-quadrant par p dir) dir))))))


(defn cast
  [map org dir seq ang]
  (let [ep  (end-grid-point map org dir)
        end (nth ep 0)
        par (nth ep 1)
        clr (map/color-at map (:x par) (:y par))
        len (math/point-distance org end)]
    (assoc ray
           :org org
           :end end
           :dir dir
           :len (* len (.cos js/Math (math/to-radians ang)))
           :seq seq
           :color clr)))


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
