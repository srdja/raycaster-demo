// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.draw');
goog.require('cljs.core');
goog.require('raycaster_demo.map');
goog.require('raycaster_demo.map');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
raycaster_demo.draw.get_color = (function get_color(id){var G__5035 = id;switch (G__5035) {
case (1):
return "#3c5068";

break;
case (2):
return "#ed405c";

break;
case (3):
return "#6f8cac";

break;
case (4):
return "#434180";

break;
case (5):
return "#2a3b4d";

break;
default:
return "black";

}
});
raycaster_demo.draw.tile_map_2d = (function tile_map_2d(context,viewport,tile_map){context.save();
var seq__5041 = cljs.core.seq(cljs.core.constant$keyword$15.cljs$core$IFn$_invoke$arity$1(tile_map));var chunk__5042 = null;var count__5043 = (0);var i__5044 = (0);while(true){
if((i__5044 < count__5043))
{var tile = chunk__5042.cljs$core$IIndexed$_nth$arity$2(null,i__5044);var index_5045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tile,(0));var color_5046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tile,(1));var side_5047 = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(tile_map);var view_5048 = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(viewport);var width_5049 = (view_5048 / side_5047);var x_5050 = (cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport) + (width_5049 * cljs.core.rem(index_5045,side_5047)));var y_5051 = (cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport) + (width_5049 * ((index_5045 / side_5047) | (0))));context.beginPath();
context.rect(x_5050,y_5051,width_5049,width_5049);
(context["fillStyle"] = raycaster_demo.draw.get_color(color_5046));
context.fill();
context.restore();
{
var G__5052 = seq__5041;
var G__5053 = chunk__5042;
var G__5054 = count__5043;
var G__5055 = (i__5044 + (1));
seq__5041 = G__5052;
chunk__5042 = G__5053;
count__5043 = G__5054;
i__5044 = G__5055;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__5041);if(temp__4126__auto__)
{var seq__5041__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5041__$1))
{var c__4316__auto__ = cljs.core.chunk_first(seq__5041__$1);{
var G__5056 = cljs.core.chunk_rest(seq__5041__$1);
var G__5057 = c__4316__auto__;
var G__5058 = cljs.core.count(c__4316__auto__);
var G__5059 = (0);
seq__5041 = G__5056;
chunk__5042 = G__5057;
count__5043 = G__5058;
i__5044 = G__5059;
continue;
}
} else
{var tile = cljs.core.first(seq__5041__$1);var index_5060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tile,(0));var color_5061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tile,(1));var side_5062 = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(tile_map);var view_5063 = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(viewport);var width_5064 = (view_5063 / side_5062);var x_5065 = (cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport) + (width_5064 * cljs.core.rem(index_5060,side_5062)));var y_5066 = (cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport) + (width_5064 * ((index_5060 / side_5062) | (0))));context.beginPath();
context.rect(x_5065,y_5066,width_5064,width_5064);
(context["fillStyle"] = raycaster_demo.draw.get_color(color_5061));
context.fill();
context.restore();
{
var G__5067 = cljs.core.next(seq__5041__$1);
var G__5068 = null;
var G__5069 = (0);
var G__5070 = (0);
seq__5041 = G__5067;
chunk__5042 = G__5068;
count__5043 = G__5069;
i__5044 = G__5070;
continue;
}
}
} else
{return null;
}
}
break;
}
});
raycaster_demo.draw.ray = (function ray(context,viewport,ray__$1){var side = (32);var view = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(viewport);var width = (view / side);var vp_x = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport);var vp_y = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport);var org_x = (vp_x + (width * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(ray__$1),(0))));var org_y = (vp_y + (width * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(ray__$1),(1))));var end_x = (vp_x + (width * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(ray__$1),(0))));var end_y = (vp_y + (width * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(ray__$1),(1))));context.save();
context.translate(0.5,0.5);
context.beginPath();
(context["lineWidth"] = (1));
(context["strokeStyle"] = "white");
context.moveTo(org_x,org_y);
context.lineTo(end_x,end_y);
context.stroke();
return context.restore();
});
raycaster_demo.draw.rays = (function rays(context,viewport,rays__$1){var seq__5075 = cljs.core.seq(rays__$1);var chunk__5076 = null;var count__5077 = (0);var i__5078 = (0);while(true){
if((i__5078 < count__5077))
{var r = chunk__5076.cljs$core$IIndexed$_nth$arity$2(null,i__5078);raycaster_demo.draw.ray(context,viewport,r);
{
var G__5079 = seq__5075;
var G__5080 = chunk__5076;
var G__5081 = count__5077;
var G__5082 = (i__5078 + (1));
seq__5075 = G__5079;
chunk__5076 = G__5080;
count__5077 = G__5081;
i__5078 = G__5082;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__5075);if(temp__4126__auto__)
{var seq__5075__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5075__$1))
{var c__4316__auto__ = cljs.core.chunk_first(seq__5075__$1);{
var G__5083 = cljs.core.chunk_rest(seq__5075__$1);
var G__5084 = c__4316__auto__;
var G__5085 = cljs.core.count(c__4316__auto__);
var G__5086 = (0);
seq__5075 = G__5083;
chunk__5076 = G__5084;
count__5077 = G__5085;
i__5078 = G__5086;
continue;
}
} else
{var r = cljs.core.first(seq__5075__$1);raycaster_demo.draw.ray(context,viewport,r);
{
var G__5087 = cljs.core.next(seq__5075__$1);
var G__5088 = null;
var G__5089 = (0);
var G__5090 = (0);
seq__5075 = G__5087;
chunk__5076 = G__5088;
count__5077 = G__5089;
i__5078 = G__5090;
continue;
}
}
} else
{return null;
}
}
break;
}
});
raycaster_demo.draw.eye = (function eye(context,viewport,eye__$1){context.save();
context.beginPath();
context.rect((cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(eye__$1),(0))),(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(eye__$1),(1))),(1),(1));
(context["fillStyle"] = "red");
context.fill();
return context.restore();
});
raycaster_demo.draw.info = (function info(context,viewport,info__$1){var fps = cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(info__$1);var rays = cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(info__$1);var fov = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(info__$1);var vp_x = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport);var vp_y = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport);context.save();
(context["font"] = "14px Sans");
(context["fillStyle"] = "white");
context.fillText(goog.string.format("fps: %.2f,  fov: %d\u00B0,  rays: %d",fps,fov,rays),(vp_x + (20)),(vp_y + (35)));
return context.restore();
});
raycaster_demo.draw.columns = (function columns(context,viewport,rays){context.save();
var vp_x = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport);var vp_y = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport);var vp_h = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(viewport);var vp_w = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(viewport);var horizon = (vp_h / (2));var n_rays = cljs.core.count(rays);var width = (vp_w / n_rays);var seq__5095 = cljs.core.seq(rays);var chunk__5096 = null;var count__5097 = (0);var i__5098 = (0);while(true){
if((i__5098 < count__5097))
{var ray = chunk__5096.cljs$core$IIndexed$_nth$arity$2(null,i__5098);var n_5099 = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ray);var color_5100 = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(ray);var h_5101 = (vp_h / cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(ray));var x_5102 = Math.ceil((vp_x + (n_5099 * width)));var y_5103 = ((vp_h - h_5101) / (2));context.beginPath();
(context["fillStyle"] = raycaster_demo.draw.get_color(color_5100));
context.rect(x_5102,y_5103,width,h_5101);
context.fill();
context.closePath();
context.beginPath();
(context["lineWidth"] = (1));
(context["strokeStyle"] = "black");
context.moveTo(x_5102,y_5103);
context.lineTo((x_5102 + width),y_5103);
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(x_5102,(y_5103 + h_5101));
context.lineTo((x_5102 + width),(h_5101 + y_5103));
context.stroke();
context.closePath();
context.restore();
{
var G__5104 = seq__5095;
var G__5105 = chunk__5096;
var G__5106 = count__5097;
var G__5107 = (i__5098 + (1));
seq__5095 = G__5104;
chunk__5096 = G__5105;
count__5097 = G__5106;
i__5098 = G__5107;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__5095);if(temp__4126__auto__)
{var seq__5095__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5095__$1))
{var c__4316__auto__ = cljs.core.chunk_first(seq__5095__$1);{
var G__5108 = cljs.core.chunk_rest(seq__5095__$1);
var G__5109 = c__4316__auto__;
var G__5110 = cljs.core.count(c__4316__auto__);
var G__5111 = (0);
seq__5095 = G__5108;
chunk__5096 = G__5109;
count__5097 = G__5110;
i__5098 = G__5111;
continue;
}
} else
{var ray = cljs.core.first(seq__5095__$1);var n_5112 = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(ray);var color_5113 = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(ray);var h_5114 = (vp_h / cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(ray));var x_5115 = Math.ceil((vp_x + (n_5112 * width)));var y_5116 = ((vp_h - h_5114) / (2));context.beginPath();
(context["fillStyle"] = raycaster_demo.draw.get_color(color_5113));
context.rect(x_5115,y_5116,width,h_5114);
context.fill();
context.closePath();
context.beginPath();
(context["lineWidth"] = (1));
(context["strokeStyle"] = "black");
context.moveTo(x_5115,y_5116);
context.lineTo((x_5115 + width),y_5116);
context.stroke();
context.closePath();
context.beginPath();
context.moveTo(x_5115,(y_5116 + h_5114));
context.lineTo((x_5115 + width),(h_5114 + y_5116));
context.stroke();
context.closePath();
context.restore();
{
var G__5117 = cljs.core.next(seq__5095__$1);
var G__5118 = null;
var G__5119 = (0);
var G__5120 = (0);
seq__5095 = G__5117;
chunk__5096 = G__5118;
count__5097 = G__5119;
i__5098 = G__5120;
continue;
}
}
} else
{return null;
}
}
break;
}
});
raycaster_demo.draw.fill_floor = (function fill_floor(context,viewport){var x = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport);var y = (cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(viewport) / (2));var w = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(viewport);context.save();
context.rect(x,y,w,y);
(context["fillStyle"] = "grey");
context.fill();
return context.restore();
});
raycaster_demo.draw.frame = (function frame(context,viewport){var x = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(viewport);var y = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(viewport);var w = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(viewport);var h = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(viewport);context.save();
context.beginPath();
context.rect(x,y,w,h);
(context["lineWidth"] = (1));
(context["strokeStyle"] = "white");
context.stroke();
return context.restore();
});
