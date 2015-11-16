// Compiled by ClojureScript 0.0-2322
goog.provide('raycaster_demo.input');
goog.require('cljs.core');
raycaster_demo.input.W = (87);
raycaster_demo.input.A = (65);
raycaster_demo.input.S = (83);
raycaster_demo.input.D = (68);
raycaster_demo.input.LEFT = (37);
raycaster_demo.input.RIGHT = (39);
raycaster_demo.input.I = (73);
raycaster_demo.input.O = (79);
raycaster_demo.input.K = (75);
raycaster_demo.input.L = (76);
raycaster_demo.input.keys_down = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$19,false,cljs.core.constant$keyword$30,false,cljs.core.constant$keyword$31,false,cljs.core.constant$keyword$32,false,cljs.core.constant$keyword$33,false,cljs.core.constant$keyword$34,false,cljs.core.constant$keyword$25,(60),cljs.core.constant$keyword$24,(128)], null)) : cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$19,false,cljs.core.constant$keyword$30,false,cljs.core.constant$keyword$31,false,cljs.core.constant$keyword$32,false,cljs.core.constant$keyword$33,false,cljs.core.constant$keyword$34,false,cljs.core.constant$keyword$25,(60),cljs.core.constant$keyword$24,(128)], null)));
raycaster_demo.input.fov_inc = (function fov_inc(fov_val){return (fov_val + (1));
});
raycaster_demo.input.fov_dec = (function fov_dec(fov_val){return (fov_val - (1));
});
raycaster_demo.input.rays_inc = (function rays_inc(rays){if((rays < (512)))
{return (rays * (2));
} else
{return rays;
}
});
raycaster_demo.input.rays_dec = (function rays_dec(rays){if((rays > (16)))
{return (rays / (2));
} else
{return rays;
}
});
raycaster_demo.input.update_key_down = (function update_key_down(event){var keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(raycaster_demo.input.keys_down) : cljs.core.deref.call(null,raycaster_demo.input.keys_down));var pred__5025 = cljs.core._EQ_;var expr__5026 = (event["keyCode"]);if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.W,expr__5026) : pred__5025.call(null,raycaster_demo.input.W,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$19], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$19], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.A,expr__5026) : pred__5025.call(null,raycaster_demo.input.A,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$30], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$30], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.S,expr__5026) : pred__5025.call(null,raycaster_demo.input.S,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$31], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$31], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.D,expr__5026) : pred__5025.call(null,raycaster_demo.input.D,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$32], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$32], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.LEFT,expr__5026) : pred__5025.call(null,raycaster_demo.input.LEFT,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$33], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$33], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.RIGHT,expr__5026) : pred__5025.call(null,raycaster_demo.input.RIGHT,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34], null),((function (pred__5025,expr__5026,keys){
return (function (){return true;
});})(pred__5025,expr__5026,keys))
)));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.I,expr__5026) : pred__5025.call(null,raycaster_demo.input.I,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$25], null),raycaster_demo.input.fov_inc,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(keys))) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$25], null),raycaster_demo.input.fov_inc,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(keys))));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.O,expr__5026) : pred__5025.call(null,raycaster_demo.input.O,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$25], null),raycaster_demo.input.fov_dec,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(keys))) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$25], null),raycaster_demo.input.fov_dec,cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(keys))));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.K,expr__5026) : pred__5025.call(null,raycaster_demo.input.K,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24], null),raycaster_demo.input.rays_inc,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(keys))) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24], null),raycaster_demo.input.rays_inc,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(keys))));
} else
{if(cljs.core.truth_((pred__5025.cljs$core$IFn$_invoke$arity$2 ? pred__5025.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.L,expr__5026) : pred__5025.call(null,raycaster_demo.input.L,expr__5026))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24], null),raycaster_demo.input.rays_dec,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(keys))) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$24], null),raycaster_demo.input.rays_dec,cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(keys))));
} else
{return event;
}
}
}
}
}
}
}
}
}
}
});
raycaster_demo.input.update_key_up = (function update_key_up(event){var keys = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(raycaster_demo.input.keys_down) : cljs.core.deref.call(null,raycaster_demo.input.keys_down));var pred__5031 = cljs.core._EQ_;var expr__5032 = (event["keyCode"]);if(cljs.core.truth_((pred__5031.cljs$core$IFn$_invoke$arity$2 ? pred__5031.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.W,expr__5032) : pred__5031.call(null,raycaster_demo.input.W,expr__5032))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$19], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$19], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)));
} else
{if(cljs.core.truth_((pred__5031.cljs$core$IFn$_invoke$arity$2 ? pred__5031.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.A,expr__5032) : pred__5031.call(null,raycaster_demo.input.A,expr__5032))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$30], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$30], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)));
} else
{if(cljs.core.truth_((pred__5031.cljs$core$IFn$_invoke$arity$2 ? pred__5031.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.S,expr__5032) : pred__5031.call(null,raycaster_demo.input.S,expr__5032))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$31], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$31], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)));
} else
{if(cljs.core.truth_((pred__5031.cljs$core$IFn$_invoke$arity$2 ? pred__5031.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.D,expr__5032) : pred__5031.call(null,raycaster_demo.input.D,expr__5032))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$32], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$32], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)));
} else
{if(cljs.core.truth_((pred__5031.cljs$core$IFn$_invoke$arity$2 ? pred__5031.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.LEFT,expr__5032) : pred__5031.call(null,raycaster_demo.input.LEFT,expr__5032))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$33], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$33], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)));
} else
{if(cljs.core.truth_((pred__5031.cljs$core$IFn$_invoke$arity$2 ? pred__5031.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.RIGHT,expr__5032) : pred__5031.call(null,raycaster_demo.input.RIGHT,expr__5032))))
{return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)) : cljs.core.reset_BANG_.call(null,raycaster_demo.input.keys_down,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$34], null),((function (pred__5031,expr__5032,keys){
return (function (){return false;
});})(pred__5031,expr__5032,keys))
)));
} else
{return event;
}
}
}
}
}
}
});
(window["onkeydown"] = raycaster_demo.input.update_key_down);
(window["onkeyup"] = raycaster_demo.input.update_key_up);
