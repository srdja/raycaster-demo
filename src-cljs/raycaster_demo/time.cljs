(ns raycaster-demo.time)


(def time
  {:start (.now js/Date)
   :delta 0
   :current 0})


(defn delta
  [time]
  (assoc time :delta (- (.now js/Date) (:start time))))


(defn start
  [time]
  (assoc time :start (:current time)))
