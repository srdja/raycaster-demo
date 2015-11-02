(ns raycaster-demo.input)

(def ^:const W     87)
(def ^:const A     65)
(def ^:const S     83)
(def ^:const D     68)
(def ^:const LEFT  37)
(def ^:const RIGHT 39)
(def ^:const I     73)
(def ^:const O     79)


(def keys-down
  (atom {:w [0 0]
         :a [0 0]
         :s [0 0]
         :d [0 0]
         :left false
         :right false
         :fov 100}))


(defn fov-inc
  [fov-val]
  (if (< 180 fov-val)
    (inc fov-val)
    fov-val))


(defn fov-dec
  [fov-val]
  (if (> 60 fov-val)
    (dec fov-val)
    fov-val))

(defn test
  []
  (.log js/console "This works!"))


(defn update-key-down
  [event]
  (let [keys @keys-down]
    (condp = (aget event "keyCode")
      W     (reset! keys-down (update-in keys [:w] (fn [] [ 0 -1])))
      A     (reset! keys-down (update-in keys [:a] (fn [] [-1  0])))
      S     (reset! keys-down (update-in keys [:s] (fn [] [ 0  1])))
      D     (reset! keys-down (update-in keys [:d] (fn [] [ 1  0])))
      LEFT  (reset! keys-down (update-in keys [:left] (fn [] true)))
      RIGHT (reset! keys-down (update-in keys [:right] (fn [] true)))
      I     (reset! keys-down (update-in keys [:fov] fov-inc))
      O     (reset! keys-down (update-in keys [:fov] fov-dec))
      event)))


(defn update-key-up
  [event]
  (let [keys @keys-down]
    (condp = (aget event "keyCode")
      W     (reset! keys-down (update-in keys [:w] (fn [] [0 0])))
      A     (reset! keys-down (update-in keys [:a] (fn [] [0 0])))
      S     (reset! keys-down (update-in keys [:s] (fn [] [0 0])))
      D     (reset! keys-down (update-in keys [:d] (fn [] [0 0])))
      LEFT  (reset! keys-down (update-in keys [:left] (fn [] false)))
      RIGHT (reset! keys-down (update-in keys [:right] (fn [] false)))
      event)))


(aset js/window "onkeydown" update-key-down)
(aset js/window "onkeyup" update-key-up)
