// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.math');
goog.require('cljs.core');
raycaster_demo.math.vector_normalize = (function vector_normalize(v){var x = cljs.core.nth.call(null,v,(0));var y = cljs.core.nth.call(null,v,(1));if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,y,(0))))
{return v;
} else
{var l = Math.sqrt(((x * x) + (y * y)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((1) / l) * x),(((1) / l) * y)], null);
}
});
/**
* [v] normalized vector to be rotated by angle [a]
*/
raycaster_demo.math.vector_rotate = (function vector_rotate(v,a){var rad = ((a * 3.141592) / (180));var cos_a = Math.cos(rad);var sin_a = Math.sin(rad);var isin_a = ((-1) * sin_a);var x = cljs.core.nth.call(null,v,(0));var y = cljs.core.nth.call(null,v,(1));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cos_a * x) + (isin_a * y)),((sin_a * x) + (cos_a * y))], null).call(null);
});

//# sourceMappingURL=math.js.map