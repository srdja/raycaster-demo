(ns raycaster-demo.map)

(def raw-map
  [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 5 5 5 0 0 0 0 0 0 1 1 2 2 0 0 0 0 0 2 2 2 0 0 0 0 1
   1 0 0 0 0 0 5 5 0 0 0 0 0 0 0 1 1 0 1 0 0 0 0 0 2 2 2 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 2 2 2 0 0 0 0 3 3 3 3 3 3 3 3 3 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 2 2 2 0 0 0 0 3 0 0 0 0 0 0 0 0 3 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 2 2 2 0 0 0 0 3 0 0 0 0 0 0 0 0 0 3 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 3 3 0 3 3 3 0 0 3 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 0 0 0 0 3 3 3 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 3 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 4 0 0 0 0 0 0 0 1
   1 3 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4 4 4 4 0 0 0 0 0 0 0 0 1
   1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 4 4 4 4 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 0 1
   1 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 2 2 2 2 0 1
   1 0 0 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 0 0 0 0 0 1
   1 0 0 2 2 2 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 2 1 1 1 0 0 2 0 1 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1
   1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 2 0 2 3 1
   1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1])


;; Only include drawable tiles
(def render-map
  {:data (into [] (let [indexed (map-indexed (fn [idx itm] [idx itm]) raw-map)]
                    (filter (fn [n] (not= (nth n 1) 0)) indexed)))
   :side 32})


;; Vector of vectors for faster access
(def collision-map
  (into [] (map #(into [] %) (partition 32 raw-map))))


(defn point-is-solid
  [map quad]
  (let [row  (nth map (:y quad))
        col  (nth row (:x quad))]
    (if (not= col 0)
      true
      false)))


(defn color-at
  [map x y]
  (nth (nth map y) x))