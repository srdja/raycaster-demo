// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.draw');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
raycaster_demo.draw.tile_map_2d = (function tile_map_2d(context,viewport,tile_map){context.save();
var seq__5417 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tile_map));var chunk__5418 = null;var count__5419 = (0);var i__5420 = (0);while(true){
if((i__5420 < count__5419))
{var tile = cljs.core._nth.call(null,chunk__5418,i__5420);var index_5423 = cljs.core.nth.call(null,tile,(0));var color_5424 = cljs.core.nth.call(null,tile,(1));var side_5425 = new cljs.core.Keyword(null,"side","side",389652279).cljs$core$IFn$_invoke$arity$1(tile_map);var view_5426 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(viewport);var width_5427 = (view_5426 / side_5425);var x_5428 = (width_5427 * cljs.core.rem.call(null,index_5423,side_5425));var y_5429 = (width_5427 * ((index_5423 / side_5425) | (0)));context.beginPath();
context.rect(x_5428,y_5429,width_5427,width_5427);
var G__5421_5430 = color_5424;switch (G__5421_5430) {
case (1):
(context["fillStyle"] = "#2D4535");

break;
case (2):
(context["fillStyle"] = "#80FCDE");

break;
case (3):
(context["fillStyle"] = "#E7F4F0");

break;
case (4):
(context["fillStyle"] = "#6DE69B");

break;
case (5):
(context["fillStyle"] = "#73AD82");

break;
default:
(context["fillStyle"] = "black");

}
context.fill();
context.restore();
{
var G__5432 = seq__5417;
var G__5433 = chunk__5418;
var G__5434 = count__5419;
var G__5435 = (i__5420 + (1));
seq__5417 = G__5432;
chunk__5418 = G__5433;
count__5419 = G__5434;
i__5420 = G__5435;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5417);if(temp__4126__auto__)
{var seq__5417__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5417__$1))
{var c__4316__auto__ = cljs.core.chunk_first.call(null,seq__5417__$1);{
var G__5436 = cljs.core.chunk_rest.call(null,seq__5417__$1);
var G__5437 = c__4316__auto__;
var G__5438 = cljs.core.count.call(null,c__4316__auto__);
var G__5439 = (0);
seq__5417 = G__5436;
chunk__5418 = G__5437;
count__5419 = G__5438;
i__5420 = G__5439;
continue;
}
} else
{var tile = cljs.core.first.call(null,seq__5417__$1);var index_5440 = cljs.core.nth.call(null,tile,(0));var color_5441 = cljs.core.nth.call(null,tile,(1));var side_5442 = new cljs.core.Keyword(null,"side","side",389652279).cljs$core$IFn$_invoke$arity$1(tile_map);var view_5443 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(viewport);var width_5444 = (view_5443 / side_5442);var x_5445 = (width_5444 * cljs.core.rem.call(null,index_5440,side_5442));var y_5446 = (width_5444 * ((index_5440 / side_5442) | (0)));context.beginPath();
context.rect(x_5445,y_5446,width_5444,width_5444);
var G__5422_5447 = color_5441;switch (G__5422_5447) {
case (1):
(context["fillStyle"] = "#2D4535");

break;
case (2):
(context["fillStyle"] = "#80FCDE");

break;
case (3):
(context["fillStyle"] = "#E7F4F0");

break;
case (4):
(context["fillStyle"] = "#6DE69B");

break;
case (5):
(context["fillStyle"] = "#73AD82");

break;
default:
(context["fillStyle"] = "black");

}
context.fill();
context.restore();
{
var G__5449 = cljs.core.next.call(null,seq__5417__$1);
var G__5450 = null;
var G__5451 = (0);
var G__5452 = (0);
seq__5417 = G__5449;
chunk__5418 = G__5450;
count__5419 = G__5451;
i__5420 = G__5452;
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
raycaster_demo.draw.ray = (function ray(context,viewport,ray__$1){var side = (32);var view = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(viewport);var width = (view / side);var org_x = (width * cljs.core.nth.call(null,new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(ray__$1),(0)));var org_y = (width * cljs.core.nth.call(null,new cljs.core.Keyword(null,"org","org",1495985).cljs$core$IFn$_invoke$arity$1(ray__$1),(1)));var end_x = (width * cljs.core.nth.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(ray__$1),(0)));var end_y = (width * cljs.core.nth.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(ray__$1),(1)));context.save();
context.beginPath();
context.moveTo(org_x,org_y);
context.lineTo(end_x,end_y);
(context["lineWidth"] = (1));
(context["strokeStyle"] = "white");
context.stroke();
return context.restore();
});
raycaster_demo.draw.eye = (function eye(context,viewport,eye__$1){context.save();
return context.restore();
});

//# sourceMappingURL=draw.js.map