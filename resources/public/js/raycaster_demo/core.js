// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.core');
goog.require('cljs.core');
goog.require('raycaster_demo.draw');
goog.require('raycaster_demo.draw');
goog.require('raycaster_demo.map');
goog.require('raycaster_demo.math');
goog.require('raycaster_demo.math');
goog.require('goog.string');
goog.require('raycaster_demo.ray');
goog.require('goog.string.format');
goog.require('raycaster_demo.map');
goog.require('goog.string');
goog.require('raycaster_demo.ray');
raycaster_demo.core.keys_down = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"left","left",-399115937),false,new cljs.core.Keyword(null,"right","right",-452581833),false], null));
raycaster_demo.core.update_key_down = (function update_key_down(event){var keys = cljs.core.deref.call(null,raycaster_demo.core.keys_down);var G__5454 = (event["keyCode"]);switch (G__5454) {
case (87):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),((function (G__5454,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
});})(G__5454,keys))
));

break;
case (65):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),((function (G__5454,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
});})(G__5454,keys))
));

break;
case (83):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),((function (G__5454,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
});})(G__5454,keys))
));

break;
case (68):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null),((function (G__5454,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
});})(G__5454,keys))
));

break;
case (37):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937)], null),((function (G__5454,keys){
return (function (){return true;
});})(G__5454,keys))
));

break;
case (39):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833)], null),((function (G__5454,keys){
return (function (){return true;
});})(G__5454,keys))
));

break;
default:
return event;

}
});
raycaster_demo.core.update_key_up = (function update_key_up(event){var keys = cljs.core.deref.call(null,raycaster_demo.core.keys_down);var G__5457 = (event["keyCode"]);switch (G__5457) {
case (87):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001)], null),((function (G__5457,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5457,keys))
));

break;
case (65):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),((function (G__5457,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5457,keys))
));

break;
case (83):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918)], null),((function (G__5457,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5457,keys))
));

break;
case (68):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424)], null),((function (G__5457,keys){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
});})(G__5457,keys))
));

break;
case (37):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937)], null),((function (G__5457,keys){
return (function (){return false;
});})(G__5457,keys))
));

break;
case (39):
return cljs.core.reset_BANG_.call(null,raycaster_demo.core.keys_down,cljs.core.update_in.call(null,keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833)], null),((function (G__5457,keys){
return (function (){return false;
});})(G__5457,keys))
));

break;
default:
return event;

}
});
(window["onkeydown"] = raycaster_demo.core.update_key_down);
(window["onkeyup"] = raycaster_demo.core.update_key_up);
raycaster_demo.core.surface = document.getElementById("surface");
raycaster_demo.core.context = raycaster_demo.core.surface.getContext("2d");
raycaster_demo.core.viewport = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(512),new cljs.core.Keyword(null,"h","h",1109658740),(512)], null);
raycaster_demo.core.position = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
raycaster_demo.core.time = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),Date.now(),new cljs.core.Keyword(null,"delta","delta",108939957),(0),new cljs.core.Keyword(null,"current","current",-1088038603),(0)], null);
raycaster_demo.core.eye = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"yaw","yaw",-1791898389),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"fov","fov",-12463282),(90),new cljs.core.Keyword(null,"speed","speed",1257663751),(3),new cljs.core.Keyword(null,"turn-speed","turn-speed",1171307229),(3)], null);
raycaster_demo.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timer","timer",-1266967739),raycaster_demo.core.time,new cljs.core.Keyword(null,"eye","eye",-1788770007),raycaster_demo.core.eye], null));
raycaster_demo.core.time_delta = (function time_delta(time){return cljs.core.assoc.call(null,time,new cljs.core.Keyword(null,"delta","delta",108939957),(Date.now() - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(time)));
});
raycaster_demo.core.time_start = (function time_start(time){return cljs.core.assoc.call(null,time,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(time));
});
raycaster_demo.core.zrak = raycaster_demo.ray.cast.call(null,raycaster_demo.map.tile_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
raycaster_demo.core.draw = (function draw(state){raycaster_demo.draw.tile_map_2d.call(null,raycaster_demo.core.context,raycaster_demo.core.viewport,raycaster_demo.map.tile_map);
raycaster_demo.draw.ray.call(null,raycaster_demo.core.context,raycaster_demo.core.viewport,raycaster_demo.ray.cast.call(null,raycaster_demo.map.tile_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)));
return state;
});
raycaster_demo.core.update_frame = (function update_frame(){cljs.core.reset_BANG_.call(null,raycaster_demo.core.state,(function (){var time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,raycaster_demo.core.state));var time_d = raycaster_demo.core.time_delta.call(null,time);var drawn = raycaster_demo.core.draw.call(null,cljs.core.deref.call(null,raycaster_demo.core.state));var time_s = raycaster_demo.core.time_start.call(null,time_d);return drawn;
})());
return window.requestAnimationFrame(update_frame);
});
window.requestAnimationFrame(raycaster_demo.core.update_frame);

//# sourceMappingURL=core.js.map