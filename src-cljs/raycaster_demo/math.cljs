(ns raycaster-demo.math)


(defn to-radians
  [angle]
  (/ (* angle Math/PI) 180))


(defn vector-normalize
  [v]
  (let [x (nth v 0)
        y (nth v 1)]
    (if (or (= x 0) (= y 0))
      v
      (let [l (.sqrt js/Math (+ (* x x)
                                (* y y)))]
        [(* (/ 1 l) x)
         (* (/ 1 l) y)]))))


(defn vector-rotate
  "[v] normalized vector to be rotated by angle [a]"
  [v a]
  (let [rad    (to-radians a)
        cos-a  (.cos js/Math rad)
        sin-a  (.sin js/Math rad)
        isin-a (* -1 sin-a)
        x      (nth v 0)
        y      (nth v 1)]
    [(+ (* cos-a x) (* isin-a y))
     (+ (* sin-a x) (* cos-a  y))]))


(defn vector-scale
  [v x y]
  [(* (nth v 0) x)
   (* (nth v 1) y)])


(defn vector-translate
  [v x y]
  [(+ (nth v 0) x)
   (+ (nth v 1) y)])


(defn vector-length
  [v]
  (let [x (nth v 0)
        y (nth v 1)]
    (.sqrt (+ (* x x) (* y y)))))


(defn vector-add
  [v1 v2]
  (map + v1 v2))


(defn point-distance
  [p1 p2]
  (let [a (- (nth p1 0) (nth p2 0))
        b (- (nth p1 1) (nth p2 1))]
    (.sqrt js/Math (+ (* a a) (* b b)))))
