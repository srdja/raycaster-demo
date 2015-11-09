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
        p
        (recur
         (next-grid-intersect (sub-quadrant par p dir) dir))))))


(defn cast
  [map org dir]
  (let [end (end-grid-point map org dir)
        len (math/point-distance org end)]
    (assoc ray
           :org org
           :end end
           :dir dir
           :len len)))


(defn radial-cast
  [map org fw fov n]
  (let [angle-start (* -1 (/ fov 2))
        angle-step  (/ fov n)
        cam-length  (.sin js/Math (/ (* (/ fov 2) Math/PI) 180))
        cam-line    (math/vector-scale (math/vector-rotate fw 90) cam-length cam-length)
        cam-seg     (/ cam-length (/ n 2))
        cam-step    (math/vector-scale cam-line cam-seg cam-seg)
        cam-start   (math/vector-scale cam-line -1 -1)
        dir-start   (math/vector-rotate fw angle-start)]
    (loop [step 0 rays [] cam-next cam-start]
      (let [dir (math/vector-rotate dir-start (* step angle-step))
            cam (math/vector-add org cam-next)
            ray (cast map cam dir)]
        (if (= step n)
          (conj rays ray)
          (recur (inc step) (conj rays ray) (math/vector-add cam-next cam-step)))))))
