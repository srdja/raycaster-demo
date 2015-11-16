// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.math');
goog.require('cljs.core');
raycaster_demo.math.to_radians = (function to_radians(angle){return ((angle * Math.PI) / (180));
});
raycaster_demo.math.vector_normalize = (function vector_normalize(v){var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))))
{return v;
} else
{var l = Math.sqrt(((x * x) + (y * y)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((1) / l) * x),(((1) / l) * y)], null);
}
});
/**
* [v] normalized vector to be rotated by angle [a]
*/
raycaster_demo.math.vector_rotate = (function vector_rotate(v,a){var rad = raycaster_demo.math.to_radians(a);var cos_a = Math.cos(rad);var sin_a = Math.sin(rad);var isin_a = ((-1) * sin_a);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cos_a * x) + (isin_a * y)),((sin_a * x) + (cos_a * y))], null);
});
raycaster_demo.math.vector_scale = (function vector_scale(v,x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)) * x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)) * y)], null);
});
raycaster_demo.math.vector_translate = (function vector_translate(v,x,y){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)) + x),(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)) + y)], null);
});
raycaster_demo.math.vector_length = (function vector_length(v){var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1));return ((x * x) + (y * y)).sqrt();
});
raycaster_demo.math.vector_add = (function vector_add(v1,v2){return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,v1,v2);
});
raycaster_demo.math.point_distance = (function point_distance(p1,p2){var a = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1,(0)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p2,(0)));var b = (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1,(1)) - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p2,(1)));return Math.sqrt(((a * a) + (b * b)));
});
