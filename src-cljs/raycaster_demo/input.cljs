(ns raycaster-demo.input)

;; TODO add keys for fov+, fov-
(def keys-down (atom {:w [0 0] :a [0 0] :s [0 0] :d [0 0] :left false :right false}))


(defn update-key-down
  [event]
  (let [keys @keys-down]
    (case (aget event "keyCode")
      87 (reset! keys-down (update-in keys [:w] (fn [] [ 0 -1])))
      65 (reset! keys-down (update-in keys [:a] (fn [] [-1  0])))
      83 (reset! keys-down (update-in keys [:s] (fn [] [ 0  1])))
      68 (reset! keys-down (update-in keys [:d] (fn [] [ 1  0])))
      37 (reset! keys-down (update-in keys [:left] (fn [] true)))
      39 (reset! keys-down (update-in keys [:right] (fn [] true)))
      event)))


(defn update-key-up
  [event]
  (let [keys @keys-down]
    (case (aget event "keyCode")
      87 (reset! keys-down (update-in keys [:w] (fn [] [0 0])))
      65 (reset! keys-down (update-in keys [:a] (fn [] [0 0])))
      83 (reset! keys-down (update-in keys [:s] (fn [] [0 0])))
      68 (reset! keys-down (update-in keys [:d] (fn [] [0 0])))
      37 (reset! keys-down (update-in keys [:left] (fn [] false)))
      39 (reset! keys-down (update-in keys [:right] (fn [] false)))
      event)))


(aset js/window "onkeydown" update-key-down)
(aset js/window "onkeyup" update-key-up)
