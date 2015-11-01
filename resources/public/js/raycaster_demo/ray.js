// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.ray');
goog.require('cljs.core');
goog.require('raycaster_demo.map');
goog.require('raycaster_demo.map');
raycaster_demo.ray.quadrant = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),(0),new cljs.core.Keyword(null,"h","h",1109658740),(0)], null);
raycaster_demo.ray.ray = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"org","org",1495985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"len","len",1423657078),(0)], null);
/**
* Returns the parent quadrant of the [org] point and direction [dir]
* If a point sits on a grid point the direction is used to determine
* to which grid cell does the point belong
*/
raycaster_demo.ray.parent_quadrant = (function parent_quadrant(org,dir){return cljs.core.assoc.call(null,raycaster_demo.ray.quadrant,new cljs.core.Keyword(null,"x","x",2099068185),(((cljs.core.nth.call(null,dir,(0)) > (0)))?(cljs.core.nth.call(null,org,(0)) | (0)):((cljs.core.nth.call(null,org,(0)) | (0)) - (1))),new cljs.core.Keyword(null,"y","y",-1757859776),(((cljs.core.nth.call(null,dir,(1)) > (0)))?(cljs.core.nth.call(null,org,(1)) | (0)):((cljs.core.nth.call(null,org,(1)) | (0)) - (1))),new cljs.core.Keyword(null,"w","w",354169001),(1),new cljs.core.Keyword(null,"h","h",1109658740),(1));
});
/**
* Returns a sub-quadrant of a quadrant through which the ray
* is traveling. The x and y of the sub-quadrant represent the
* origin of the ray.
* 
* [f]    function that returns the quadrant of [org]
* [org]  ray origin vector
* [dir]  ray direction vector
* 
*/
raycaster_demo.ray.sub_quadrant = (function sub_quadrant(f,org,dir){var paren = f.call(null,org,dir);var org_x = cljs.core.nth.call(null,org,(0));var org_y = cljs.core.nth.call(null,org,(1));var width = (((cljs.core.nth.call(null,dir,(0)) < (0)))?((-1) * (org_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(paren))):((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(paren) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(paren)) - org_x));var height = (((cljs.core.nth.call(null,dir,(1)) < (0)))?((-1) * (org_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(paren))):((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(paren) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(paren)) - org_y));return cljs.core.assoc.call(null,raycaster_demo.ray.quadrant,new cljs.core.Keyword(null,"x","x",2099068185),org_x,new cljs.core.Keyword(null,"y","y",-1757859776),org_y,new cljs.core.Keyword(null,"w","w",354169001),width,new cljs.core.Keyword(null,"h","h",1109658740),height);
});
/**
* Returns the next point on the grid that the ray would pass
*/
raycaster_demo.ray.next_grid_intersect = (function next_grid_intersect(quad,ray_dir){var x = cljs.core.nth.call(null,ray_dir,(0));var y = cljs.core.nth.call(null,ray_dir,(1));var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(quad);var h = new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(quad);var d = Math.sqrt(((w * w) + (h * h)));var angle_a = Math.abs(Math.asin((h / d)));var angle_b = Math.abs(Math.asin(y));var scale = ((((angle_b <= angle_a)) && (cljs.core.not_EQ_.call(null,x,(0))))?(w / x):((((angle_b > angle_a)) && (cljs.core.not_EQ_.call(null,y,(0))))?(h / y):(1)
));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(quad) + (x * scale)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(quad) + (y * scale))], null);
});
/**
* Casts a ray across the grid and returns the end point
*/
raycaster_demo.ray.end_grid_point = (function end_grid_point(map,org,dir){var p = org;while(true){
if(raycaster_demo.map.point_is_solid.call(null,map,raycaster_demo.ray.parent_quadrant.call(null,p,dir)))
{return p;
} else
{{
var G__5293 = raycaster_demo.ray.next_grid_intersect.call(null,raycaster_demo.ray.sub_quadrant.call(null,raycaster_demo.ray.parent_quadrant,p,dir),dir);
p = G__5293;
continue;
}
}
break;
}
});
/**
* Returns a ray
*/
raycaster_demo.ray.cast = (function cast(map,org,dir){var end = raycaster_demo.ray.end_grid_point.call(null,map,org,dir);var len = (function (){var a = (cljs.core.nth.call(null,end,(0)) - cljs.core.nth.call(null,org,(0)));var b = (cljs.core.nth.call(null,end,(1)) - cljs.core.nth.call(null,org,(1)));return Math.sqrt(((a * a) + (b * b)));
})();return cljs.core.assoc.call(null,raycaster_demo.ray.ray,new cljs.core.Keyword(null,"org","org",1495985),org,new cljs.core.Keyword(null,"end","end",-268185958),end,new cljs.core.Keyword(null,"dir","dir",1734754661),dir,new cljs.core.Keyword(null,"len","len",1423657078),len);
});

//# sourceMappingURL=ray.js.map