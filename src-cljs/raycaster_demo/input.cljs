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
  (atom {:w false
         :a false
         :s false
         :d false
         :left false
         :right false
         :fov 60}))


(defn fov-inc
  [fov-val]
  (inc fov-val))


(defn fov-dec
  [fov-val]
  (dec fov-val))


(defn update-key-down
  [event]
  (let [keys @keys-down]
    (condp = (aget event "keyCode")
      W     (reset! keys-down (update-in keys [:w] (fn [] true)))
      A     (reset! keys-down (update-in keys [:a] (fn [] true)))
      S     (reset! keys-down (update-in keys [:s] (fn [] true)))
      D     (reset! keys-down (update-in keys [:d] (fn [] true)))
      LEFT  (reset! keys-down (update-in keys [:left] (fn [] true)))
      RIGHT (reset! keys-down (update-in keys [:right] (fn [] true)))
      I     (reset! keys-down (update-in keys [:fov] fov-inc (:fov keys)))
      O     (reset! keys-down (update-in keys [:fov] fov-dec (:fov keys)))
      event)))


(defn update-key-up
  [event]
  (let [keys @keys-down]
    (condp = (aget event "keyCode")
      W     (reset! keys-down (update-in keys [:w] (fn [] false)))
      A     (reset! keys-down (update-in keys [:a] (fn [] false)))
      S     (reset! keys-down (update-in keys [:s] (fn [] false)))
      D     (reset! keys-down (update-in keys [:d] (fn [] false)))
      LEFT  (reset! keys-down (update-in keys [:left] (fn [] false)))
      RIGHT (reset! keys-down (update-in keys [:right] (fn [] false)))
      event)))


(aset js/window "onkeydown" update-key-down)
(aset js/window "onkeyup" update-key-up)
