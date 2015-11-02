(ns raycaster-demo.time)


(def time
  {:start (.now js/Date)
   :delta 0
   :current 0})


(defn delta
  [time]
  (- (.now js/Date) (:start time)))
