// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.ray');
goog.require('cljs.core');
goog.require('raycaster_demo.math');
goog.require('raycaster_demo.math');
goog.require('raycaster_demo.map');
goog.require('raycaster_demo.map');
raycaster_demo.ray.quadrant = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$18,(0),cljs.core.constant$keyword$17,(0),cljs.core.constant$keyword$19,(0),cljs.core.constant$keyword$26,(0)], null);
raycaster_demo.ray.ray = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$20,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$21,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$35,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$29,(0),cljs.core.constant$keyword$27,(0),cljs.core.constant$keyword$28,(0)], null);
raycaster_demo.ray.parent_quadrant = (function parent_quadrant(org,dir){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(raycaster_demo.ray.quadrant,cljs.core.constant$keyword$18,(((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)) > (0)))?(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(org,(0)) | (0)):Math.ceil((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(org,(0)) - (1)))),cljs.core.array_seq([cljs.core.constant$keyword$17,(((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)) > (0)))?(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(org,(1)) | (0)):Math.ceil((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(org,(1)) - (1)))),cljs.core.constant$keyword$19,(1),cljs.core.constant$keyword$26,(1)], 0));
});
raycaster_demo.ray.sub_quadrant = (function sub_quadrant(paren,org,dir){var org_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(org,(0));var org_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(org,(1));var width = (((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)) < (0)))?(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(paren) - org_x):((cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(paren) + cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(paren)) - org_x));var height = (((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)) < (0)))?(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(paren) - org_y):((cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(paren) + cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(paren)) - org_y));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(raycaster_demo.ray.quadrant,cljs.core.constant$keyword$18,org_x,cljs.core.array_seq([cljs.core.constant$keyword$17,org_y,cljs.core.constant$keyword$19,width,cljs.core.constant$keyword$26,height], 0));
});
raycaster_demo.ray.next_grid_intersect = (function next_grid_intersect(quad,ray_dir){var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ray_dir,(0));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ray_dir,(1));var w = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(quad);var h = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(quad);var d = Math.sqrt(((w * w) + (h * h)));var angle_a = Math.abs(Math.asin((h / d)));var angle_b = Math.abs(Math.asin(y));var scale = ((((angle_b <= angle_a)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))))?(w / x):((((angle_b > angle_a)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))))?(h / y):(1)
));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(quad) + (x * scale)),(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(quad) + (y * scale))], null);
});
raycaster_demo.ray.end_grid_point = (function end_grid_point(map,org,dir){var p = org;while(true){
var par = raycaster_demo.ray.parent_quadrant(p,dir);if((raycaster_demo.map.point_is_solid(map,par)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)),(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)),(0)))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,par], null);
} else
{{
var G__5018 = raycaster_demo.ray.next_grid_intersect(raycaster_demo.ray.sub_quadrant(par,p,dir),dir);
p = G__5018;
continue;
}
}
break;
}
});
raycaster_demo.ray.cast = (function cast(map,org,dir,seq,ang){var ep = raycaster_demo.ray.end_grid_point(map,org,dir);var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ep,(0));var par = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ep,(1));var clr = raycaster_demo.map.color_at(map,cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(par),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(par));var len = raycaster_demo.math.point_distance(org,end);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(raycaster_demo.ray.ray,cljs.core.constant$keyword$20,org,cljs.core.array_seq([cljs.core.constant$keyword$21,end,cljs.core.constant$keyword$35,dir,cljs.core.constant$keyword$29,(len * Math.cos(raycaster_demo.math.to_radians(ang))),cljs.core.constant$keyword$27,seq,cljs.core.constant$keyword$28,clr], 0));
});
raycaster_demo.ray.cast_fan = (function cast_fan(map,org,fw,fov,n){var angle_start = ((-1) * (fov / (2)));var angle_step = (fov / n);var dir_start = raycaster_demo.math.vector_rotate(fw,angle_start);var step = (0);var rays = cljs.core.PersistentVector.EMPTY;while(true){
var dir = raycaster_demo.math.vector_rotate(dir_start,(step * angle_step));var ang = (angle_start + (step * angle_step));var ray = raycaster_demo.ray.cast(map,org,dir,step,ang);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(step,n))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rays,ray);
} else
{{
var G__5019 = (step + (1));
var G__5020 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rays,ray);
step = G__5019;
rays = G__5020;
continue;
}
}
break;
}
});
