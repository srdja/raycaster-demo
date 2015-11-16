// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.core');
goog.require('cljs.core');
goog.require('raycaster_demo.input');
goog.require('raycaster_demo.draw');
goog.require('raycaster_demo.draw');
goog.require('raycaster_demo.map');
goog.require('raycaster_demo.math');
goog.require('raycaster_demo.math');
goog.require('goog.string');
goog.require('raycaster_demo.ray');
goog.require('raycaster_demo.time');
goog.require('goog.string.format');
goog.require('raycaster_demo.input');
goog.require('raycaster_demo.map');
goog.require('goog.string');
goog.require('raycaster_demo.ray');
goog.require('raycaster_demo.time');
raycaster_demo.core.surface = document.getElementById("surface");
raycaster_demo.core.context = raycaster_demo.core.surface.getContext("2d");
raycaster_demo.core.d3_viewport = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$18,0.5,cljs.core.constant$keyword$17,(0),cljs.core.constant$keyword$19,(512),cljs.core.constant$keyword$26,(512)], null);
raycaster_demo.core.d2_viewport = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$18,(512),cljs.core.constant$keyword$17,(0),cljs.core.constant$keyword$19,(512),cljs.core.constant$keyword$26,(512)], null);
raycaster_demo.core.full_viewport = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$18,(0),cljs.core.constant$keyword$17,(0),cljs.core.constant$keyword$19,(1024),cljs.core.constant$keyword$26,(512)], null);
raycaster_demo.core.eye_to_map_coords = (function eye_to_map_coords(eye,viewport){var p_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(eye),(0));var p_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(eye),(1));var x = (p_x / (16));var y = (p_y / (16));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
raycaster_demo.core.eye = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$22,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(64)], null),cljs.core.constant$keyword$35,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.constant$keyword$39,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),cljs.core.constant$keyword$25,(60),cljs.core.constant$keyword$24,(128),cljs.core.constant$keyword$40,(50),cljs.core.constant$keyword$41,(40)], null);
raycaster_demo.core.get_direction = (function get_direction(keys,fw){var l = (cljs.core.truth_(cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(keys))?raycaster_demo.math.vector_rotate(fw,(-90)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));var r = (cljs.core.truth_(cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(keys))?raycaster_demo.math.vector_rotate(fw,(90)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));var f = (cljs.core.truth_(cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(keys))?fw:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));var b = (cljs.core.truth_(cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(keys))?raycaster_demo.math.vector_rotate(fw,(180)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));return raycaster_demo.math.vector_normalize(cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,l,r,f,cljs.core.array_seq([b], 0)));
});
raycaster_demo.core.get_fov = (function get_fov(keys){return cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(keys);
});
raycaster_demo.core.get_rays = (function get_rays(keys){return cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(keys);
});
raycaster_demo.core.new_forward_vector = (function new_forward_vector(fw,yaw,speed,time){var angle = (yaw * (speed * (time / (1000))));return raycaster_demo.math.vector_rotate(fw,angle);
});
raycaster_demo.core.new_position = (function new_position(pos,dir,speed,time){var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(0));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(1));var s = (speed * (time / (1000)));var moved_x = (s * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(0)));var moved_y = (s * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dir,(1)));var new_x = (x + moved_x);var new_y = (y + moved_y);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null);
});
raycaster_demo.core.get_yaw = (function get_yaw(keys){var l = cljs.core.constant$keyword$33.cljs$core$IFn$_invoke$arity$1(keys);var r = cljs.core.constant$keyword$34.cljs$core$IFn$_invoke$arity$1(keys);if(cljs.core.truth_((function (){var and__3548__auto__ = l;if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.not(r);
} else
{return and__3548__auto__;
}
})()))
{return (-1);
} else
{if(cljs.core.truth_((function (){var and__3548__auto__ = r;if(cljs.core.truth_(and__3548__auto__))
{return cljs.core.not(l);
} else
{return and__3548__auto__;
}
})()))
{return (1);
} else
{if(cljs.core.not((function (){var or__3560__auto__ = r;if(cljs.core.truth_(or__3560__auto__))
{return or__3560__auto__;
} else
{return l;
}
})()))
{return (0);
} else
{if(cljs.core.truth_((function (){var and__3548__auto__ = r;if(cljs.core.truth_(and__3548__auto__))
{return l;
} else
{return and__3548__auto__;
}
})()))
{return (0);
} else
{return null;
}
}
}
}
});
raycaster_demo.core.apply_inputs = (function apply_inputs(eye,keys,time){var yaw = raycaster_demo.core.get_yaw(keys);var fov = raycaster_demo.core.get_fov(keys);var ray = raycaster_demo.core.get_rays(keys);var fw = raycaster_demo.core.new_forward_vector(cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(eye),yaw,cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(eye),time);var dir = raycaster_demo.core.get_direction(keys,fw);var pos = raycaster_demo.core.new_position(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(eye),dir,cljs.core.constant$keyword$40.cljs$core$IFn$_invoke$arity$1(eye),time);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(eye,cljs.core.constant$keyword$22,pos,cljs.core.array_seq([cljs.core.constant$keyword$35,dir,cljs.core.constant$keyword$39,fw,cljs.core.constant$keyword$24,ray,cljs.core.constant$keyword$25,fov], 0));
});
raycaster_demo.core.state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$42,Date.now(),cljs.core.constant$keyword$43,raycaster_demo.core.eye,cljs.core.constant$keyword$24,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$23,(0)], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$42,Date.now(),cljs.core.constant$keyword$43,raycaster_demo.core.eye,cljs.core.constant$keyword$24,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$23,(0)], null)));
raycaster_demo.core.draw_frame = (function draw_frame(state){raycaster_demo.core.context.clearRect((0),(0),(1024),(512));
raycaster_demo.draw.tile_map_2d(raycaster_demo.core.context,raycaster_demo.core.d2_viewport,raycaster_demo.map.render_map);
raycaster_demo.draw.rays(raycaster_demo.core.context,raycaster_demo.core.d2_viewport,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(state));
raycaster_demo.draw.fill_floor(raycaster_demo.core.context,raycaster_demo.core.d3_viewport);
raycaster_demo.draw.columns(raycaster_demo.core.context,raycaster_demo.core.d3_viewport,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(state));
raycaster_demo.draw.eye(raycaster_demo.core.context,raycaster_demo.core.d2_viewport,cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(state));
raycaster_demo.draw.info(raycaster_demo.core.context,raycaster_demo.core.d3_viewport,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$23,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(state),cljs.core.constant$keyword$25,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(state)),cljs.core.constant$keyword$24,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(state))], null));
raycaster_demo.draw.frame(raycaster_demo.core.context,raycaster_demo.core.full_viewport);
return state;
});
raycaster_demo.core.next_frame = (function next_frame(state,inputs){var time_now = Date.now();var time_delta = (time_now - cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(state));var eye = raycaster_demo.core.apply_inputs(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(state),inputs,time_delta);var eye_coord = raycaster_demo.core.eye_to_map_coords(eye,raycaster_demo.core.d3_viewport);var rays = raycaster_demo.ray.cast_fan(raycaster_demo.map.collision_map,eye_coord,cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(eye),cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(eye),cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(eye));var fps = ((1000) / time_delta);var end_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.constant$keyword$42,time_now,cljs.core.array_seq([cljs.core.constant$keyword$43,eye,cljs.core.constant$keyword$24,rays,cljs.core.constant$keyword$23,fps], 0));return raycaster_demo.core.draw_frame(end_state);
});
raycaster_demo.core.update_frame = (function update_frame(){(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.core.state,raycaster_demo.core.next_frame((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(raycaster_demo.core.state) : cljs.core.deref.call(null,raycaster_demo.core.state)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(raycaster_demo.input.keys_down) : cljs.core.deref.call(null,raycaster_demo.input.keys_down)))) : cljs.core.reset_BANG_.call(null,raycaster_demo.core.state,raycaster_demo.core.next_frame((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(raycaster_demo.core.state) : cljs.core.deref.call(null,raycaster_demo.core.state)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(raycaster_demo.input.keys_down) : cljs.core.deref.call(null,raycaster_demo.input.keys_down)))));
return window.requestAnimationFrame(update_frame);
});
window.requestAnimationFrame(raycaster_demo.core.update_frame);
