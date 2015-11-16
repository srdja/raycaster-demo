if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

;(function(){
var k;
function r(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
ga.prototype.Ia = "";
ga.prototype.append = function(a, b, c) {
  this.Ia += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ia += arguments[d];
    }
  }
  return this;
};
ga.prototype.toString = function() {
  return this.Ia;
};
var ia = null;
function ja() {
  return new ka(null, 5, [ma, !0, na, !0, oa, !1, pa, !1, sa, null], null);
}
function u(a) {
  return null != a && !1 !== a;
}
function ta(a) {
  return u(a) ? !1 : !0;
}
function v(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function ua(a) {
  return null == a ? null : a.constructor;
}
function x(a, b) {
  var c = ua(b), c = u(u(c) ? c.wb : c) ? c.vb : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function wa(a) {
  var b = a.vb;
  return u(b) ? b : "" + y.b(a);
}
function xa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ya = {}, za = {};
function Ba(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = Ba[r(null == a ? null : a)];
  if (!b && (b = Ba._, !b)) {
    throw x("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Ca(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = Ca[r(null == a ? null : a)];
  if (!c && (c = Ca._, !c)) {
    throw x("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Da = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.V : a) {
      return a.V(a, b, c);
    }
    var g;
    g = z[r(null == a ? null : a)];
    if (!g && (g = z._, !g)) {
      throw x("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.I : a) {
      return a.I(a, b);
    }
    var c;
    c = z[r(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw x("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ha = {};
function A(a) {
  if (a ? a.W : a) {
    return a.W(a);
  }
  var b;
  b = A[r(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw x("ISeq.-first", a);
  }
  return b.call(null, a);
}
function D(a) {
  if (a ? a.Z : a) {
    return a.Z(a);
  }
  var b;
  b = D[r(null == a ? null : a)];
  if (!b && (b = D._, !b)) {
    throw x("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ia = {}, Ja = function() {
  function a(a, b, c) {
    if (a ? a.K : a) {
      return a.K(a, b, c);
    }
    var g;
    g = Ja[r(null == a ? null : a)];
    if (!g && (g = Ja._, !g)) {
      throw x("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = Ja[r(null == a ? null : a)];
    if (!c && (c = Ja._, !c)) {
      throw x("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ka(a, b, c) {
  if (a ? a.Ja : a) {
    return a.Ja(a, b, c);
  }
  var d;
  d = Ka[r(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw x("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Na = {}, Oa = {};
function Pa(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = Pa[r(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw x("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Qa(a) {
  if (a ? a.bb : a) {
    return a.bb();
  }
  var b;
  b = Qa[r(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw x("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Ta(a, b, c) {
  if (a ? a.Ya : a) {
    return a.Ya(a, b, c);
  }
  var d;
  d = Ta[r(null == a ? null : a)];
  if (!d && (d = Ta._, !d)) {
    throw x("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Ua(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = Ua[r(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw x("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Va = {};
function Wa(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Wa[r(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw x("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Ya = {};
function Za(a, b) {
  if (a ? a.R : a) {
    return a.R(a, b);
  }
  var c;
  c = Za[r(null == a ? null : a)];
  if (!c && (c = Za._, !c)) {
    throw x("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var $a = {}, ab = function() {
  function a(a, b, c) {
    if (a ? a.U : a) {
      return a.U(a, b, c);
    }
    var g;
    g = ab[r(null == a ? null : a)];
    if (!g && (g = ab._, !g)) {
      throw x("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.T : a) {
      return a.T(a, b);
    }
    var c;
    c = ab[r(null == a ? null : a)];
    if (!c && (c = ab._, !c)) {
      throw x("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function bb(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = bb[r(null == a ? null : a)];
  if (!c && (c = bb._, !c)) {
    throw x("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function cb(a) {
  if (a ? a.H : a) {
    return a.H(a);
  }
  var b;
  b = cb[r(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw x("IHash.-hash", a);
  }
  return b.call(null, a);
}
var db = {};
function eb(a) {
  if (a ? a.Q : a) {
    return a.Q(a);
  }
  var b;
  b = eb[r(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw x("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var fb = {};
function E(a, b) {
  if (a ? a.fb : a) {
    return a.fb(0, b);
  }
  var c;
  c = E[r(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw x("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var gb = {};
function hb(a, b, c) {
  if (a ? a.G : a) {
    return a.G(a, b, c);
  }
  var d;
  d = hb[r(null == a ? null : a)];
  if (!d && (d = hb._, !d)) {
    throw x("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function ib(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(0, b, c);
  }
  var d;
  d = ib[r(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw x("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function jb(a) {
  if (a ? a.Ka : a) {
    return a.Ka(a);
  }
  var b;
  b = jb[r(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw x("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function kb(a, b) {
  if (a ? a.Ra : a) {
    return a.Ra(a, b);
  }
  var c;
  c = kb[r(null == a ? null : a)];
  if (!c && (c = kb._, !c)) {
    throw x("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function lb(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = lb[r(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw x("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function ob(a, b, c) {
  if (a ? a.Ma : a) {
    return a.Ma(a, b, c);
  }
  var d;
  d = ob[r(null == a ? null : a)];
  if (!d && (d = ob._, !d)) {
    throw x("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function pb(a, b, c) {
  if (a ? a.cb : a) {
    return a.cb(0, b, c);
  }
  var d;
  d = pb[r(null == a ? null : a)];
  if (!d && (d = pb._, !d)) {
    throw x("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function qb(a) {
  if (a ? a.Za : a) {
    return a.Za();
  }
  var b;
  b = qb[r(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw x("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function sb(a) {
  if (a ? a.Va : a) {
    return a.Va(a);
  }
  var b;
  b = sb[r(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw x("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.Wa : a) {
    return a.Wa(a);
  }
  var b;
  b = tb[r(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw x("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function ub(a) {
  if (a ? a.Ua : a) {
    return a.Ua(a);
  }
  var b;
  b = ub[r(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw x("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function vb(a, b) {
  if (a ? a.qb : a) {
    return a.qb(a, b);
  }
  var c;
  c = vb[r(null == a ? null : a)];
  if (!c && (c = vb._, !c)) {
    throw x("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var wb = function() {
  function a(a, b, c, d, e) {
    if (a ? a.ub : a) {
      return a.ub(a, b, c, d, e);
    }
    var n;
    n = wb[r(null == a ? null : a)];
    if (!n && (n = wb._, !n)) {
      throw x("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.tb : a) {
      return a.tb(a, b, c, d);
    }
    var e;
    e = wb[r(null == a ? null : a)];
    if (!e && (e = wb._, !e)) {
      throw x("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.sb : a) {
      return a.sb(a, b, c);
    }
    var d;
    d = wb[r(null == a ? null : a)];
    if (!d && (d = wb._, !d)) {
      throw x("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.rb : a) {
      return a.rb(a, b);
    }
    var c;
    c = wb[r(null == a ? null : a)];
    if (!c && (c = wb._, !c)) {
      throw x("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, g, h, l, m) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, h);
      case 4:
        return b.call(this, e, g, h, l);
      case 5:
        return a.call(this, e, g, h, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.c = c;
  e.j = b;
  e.w = a;
  return e;
}();
function xb(a) {
  this.xb = a;
  this.t = 0;
  this.l = 1073741824;
}
xb.prototype.fb = function(a, b) {
  return this.xb.append(b);
};
function yb(a) {
  var b = new ga;
  a.G(null, new xb(b), ja());
  return "" + y.b(b);
}
var zb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ab(a) {
  a = zb(a, 3432918353);
  return zb(a << 15 | a >>> -15, 461845907);
}
function Bb(a, b) {
  var c = a ^ b;
  return zb(c << 13 | c >>> -13, 5) + 3864292196;
}
function Cb(a, b) {
  var c = a ^ b, c = zb(c ^ c >>> 16, 2246822507), c = zb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
var Db = {}, Eb = 0;
function Fb(a) {
  255 < Eb && (Db = {}, Eb = 0);
  var b = Db[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = zb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Db[a] = b;
    Eb += 1;
  }
  return a = b;
}
function Gb(a) {
  a && (a.l & 4194304 || a.Ab) ? a = a.H(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Fb(a), 0 !== a && (a = Ab(a), a = Bb(0, a), a = Cb(a, 4))) : a = null == a ? 0 : cb(a);
  return a;
}
function Hb(a) {
  var b;
  b = a.name;
  var c;
  a: {
    c = 1;
    for (var d = 0;;) {
      if (c < b.length) {
        var e = c + 2, d = Bb(d, Ab(b.charCodeAt(c - 1) | b.charCodeAt(c) << 16));
        c = e;
      } else {
        c = d;
        break a;
      }
    }
    c = void 0;
  }
  c = 1 === (b.length & 1) ? c ^ Ab(b.charCodeAt(b.length - 1)) : c;
  b = Cb(c, zb(2, b.length));
  a = Fb(a.ba);
  return b ^ a + 2654435769 + (b << 6) + (b >> 2);
}
function Ib(a, b) {
  if (u(F.a ? F.a(a, b) : F.call(null, a, b))) {
    return 0;
  }
  var c = ta(a.ba);
  if (u(c ? b.ba : c)) {
    return-1;
  }
  if (u(a.ba)) {
    if (ta(b.ba)) {
      return 1;
    }
    c = Jb.a ? Jb.a(a.ba, b.ba) : Jb.call(null, a.ba, b.ba);
    return 0 === c ? Jb.a ? Jb.a(a.name, b.name) : Jb.call(null, a.name, b.name) : c;
  }
  return Jb.a ? Jb.a(a.name, b.name) : Jb.call(null, a.name, b.name);
}
function Kb(a, b, c, d, e) {
  this.ba = a;
  this.name = b;
  this.Aa = c;
  this.Da = d;
  this.Ha = e;
  this.l = 2154168321;
  this.t = 4096;
}
k = Kb.prototype;
k.G = function(a, b) {
  return E(b, this.Aa);
};
k.H = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Hb(this);
};
k.R = function(a, b) {
  return new Kb(this.ba, this.name, this.Aa, this.Da, b);
};
k.O = function() {
  return this.Ha;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ja.c(c, this, null);
      case 3:
        return Ja.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Ja.c(c, this, null);
  };
  a.c = function(a, c, d) {
    return Ja.c(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return Ja.c(a, this, null);
};
k.a = function(a, b) {
  return Ja.c(a, this, b);
};
k.F = function(a, b) {
  return b instanceof Kb ? this.Aa === b.Aa : !1;
};
k.toString = function() {
  return this.Aa;
};
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.l & 8388608 || a.Db)) {
    return a.Q(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Lb(a, 0);
  }
  if (v(db, a)) {
    return eb(a);
  }
  throw Error("" + y.b(a) + " is not ISeqable");
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.l & 64 || a.La)) {
    return a.W(null);
  }
  a = H(a);
  return null == a ? null : A(a);
}
function K(a) {
  return null != a ? a && (a.l & 64 || a.La) ? a.Z(null) : (a = H(a)) ? D(a) : Ob : Ob;
}
function L(a) {
  return null == a ? null : a && (a.l & 128 || a.Cb) ? a.wa(null) : H(K(a));
}
var F = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || bb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (L(e)) {
            a = d, d = I(e), e = L(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.q = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
      return c(b, d, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 2;
  b.m = c.m;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.h = c.h;
  return b;
}();
function Pb(a, b) {
  var c = Ab(a), c = Bb(0, c);
  return Cb(c, b);
}
function Qb(a) {
  var b = 0, c = 1;
  for (a = H(a);;) {
    if (null != a) {
      b += 1, c = zb(31, c) + Gb(I(a)) | 0, a = L(a);
    } else {
      return Pb(c, b);
    }
  }
}
function Rb(a) {
  var b = 0, c = 0;
  for (a = H(a);;) {
    if (null != a) {
      b += 1, c = c + Gb(I(a)) | 0, a = L(a);
    } else {
      return Pb(c, b);
    }
  }
}
za["null"] = !0;
Ba["null"] = function() {
  return 0;
};
Date.prototype.F = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
bb.number = function(a, b) {
  return a === b;
};
Va["function"] = !0;
Wa["function"] = function() {
  return null;
};
ya["function"] = !0;
cb._ = function(a) {
  return a[ba] || (a[ba] = ++ea);
};
function Sb(a) {
  this.ca = a;
  this.t = 0;
  this.l = 32768;
}
Sb.prototype.Xa = function() {
  return this.ca;
};
function Tb(a) {
  return a instanceof Sb;
}
function Wb(a) {
  return Ua(a);
}
var Xb = function() {
  function a(a, b, c, d) {
    for (var l = Ba(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d));
        if (Tb(c)) {
          return Ua(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = Ba(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l));
        if (Tb(c)) {
          return Ua(c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = Ba(a);
    if (0 === c) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l));
        if (Tb(d)) {
          return Ua(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}(), Yb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]);
        if (Tb(c)) {
          return Ua(c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]);
        if (Tb(c)) {
          return Ua(c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]);
        if (Tb(d)) {
          return Ua(d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}();
function Zb(a) {
  return a ? a.l & 2 || a.ib ? !0 : a.l ? !1 : v(za, a) : v(za, a);
}
function $b(a) {
  return a ? a.l & 16 || a.$a ? !0 : a.l ? !1 : v(Da, a) : v(Da, a);
}
function Lb(a, b) {
  this.g = a;
  this.n = b;
  this.l = 166199550;
  this.t = 8192;
}
k = Lb.prototype;
k.toString = function() {
  return yb(this);
};
k.I = function(a, b) {
  var c = b + this.n;
  return c < this.g.length ? this.g[c] : null;
};
k.V = function(a, b, c) {
  a = b + this.n;
  return a < this.g.length ? this.g[a] : c;
};
k.wa = function() {
  return this.n + 1 < this.g.length ? new Lb(this.g, this.n + 1) : null;
};
k.S = function() {
  return this.g.length - this.n;
};
k.H = function() {
  return Qb(this);
};
k.F = function(a, b) {
  return ac.a ? ac.a(this, b) : ac.call(null, this, b);
};
k.T = function(a, b) {
  return Yb.j(this.g, b, this.g[this.n], this.n + 1);
};
k.U = function(a, b, c) {
  return Yb.j(this.g, b, c, this.n);
};
k.W = function() {
  return this.g[this.n];
};
k.Z = function() {
  return this.n + 1 < this.g.length ? new Lb(this.g, this.n + 1) : Ob;
};
k.Q = function() {
  return this;
};
k.N = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
var bc = function() {
  function a(a, b) {
    return b < a.length ? new Lb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), M = function() {
  function a(a, b) {
    return bc.a(a, b);
  }
  function b(a) {
    return bc.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
bb._ = function(a, b) {
  return a === b;
};
var dc = function() {
  function a(a, b) {
    return null != a ? Ca(a, b) : Ca(Ob, b);
  }
  var b = null, c = function() {
    function a(b, d, h) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (u(e)) {
          a = b.a(a, d), d = I(e), e = L(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.q = 2;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
      return c(b, d, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return cc;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 2;
  b.m = c.m;
  b.r = function() {
    return cc;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.h = c.h;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.l & 2 || a.ib)) {
      a = a.S(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (v(za, a)) {
            a = Ba(a);
          } else {
            a: {
              a = H(a);
              for (var b = 0;;) {
                if (Zb(a)) {
                  a = b + Ba(a);
                  break a;
                }
                a = L(a);
                b += 1;
              }
              a = void 0;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var ec = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if ($b(a)) {
        return z.c(a, b, c);
      }
      if (H(a)) {
        a = L(a), b -= 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (H(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if ($b(a)) {
        return z.a(a, b);
      }
      if (H(a)) {
        var c = L(a), g = b - 1;
        a = c;
        b = g;
      } else {
        throw Error("Index out of bounds");
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.l & 16 || a.$a)) {
      return a.V(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (v(Da, a)) {
      return z.a(a, b);
    }
    if (a ? a.l & 64 || a.La || (a.l ? 0 : v(Ha, a)) : v(Ha, a)) {
      return ec.c(a, b, c);
    }
    throw Error("nth not supported on this type " + y.b(wa(ua(a))));
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.l & 16 || a.$a)) {
      return a.I(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (v(Da, a)) {
      return z.a(a, b);
    }
    if (a ? a.l & 64 || a.La || (a.l ? 0 : v(Ha, a)) : v(Ha, a)) {
      return ec.a(a, b);
    }
    throw Error("nth not supported on this type " + y.b(wa(ua(a))));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    return null != a ? a && (a.l & 256 || a.lb) ? a.K(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : v(Ia, a) ? Ja.c(a, b, c) : c : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.l & 256 || a.lb) ? a.J(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : v(Ia, a) ? Ja.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), gc = function() {
  function a(a, b, c) {
    if (null != a) {
      a = Ka(a, b, c);
    } else {
      a: {
        a = [b];
        c = [c];
        b = a.length;
        var g = 0, h;
        for (h = jb(fc);;) {
          if (g < b) {
            var l = g + 1;
            h = h.Ma(null, a[g], c[g]);
            g = l;
          } else {
            a = lb(h);
            break a;
          }
        }
        a = void 0;
      }
    }
    return a;
  }
  var b = null, c = function() {
    function a(b, d, h, l) {
      var m = null;
      3 < arguments.length && (m = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, h, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), u(l)) {
          d = I(l), e = I(L(l)), l = L(L(l));
        } else {
          return a;
        }
      }
    }
    a.q = 3;
    a.m = function(a) {
      var b = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var l = I(a);
      a = K(a);
      return c(b, d, l, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.h(b, e, f, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 3;
  b.m = c.m;
  b.c = a;
  b.h = c.h;
  return b;
}();
function hc(a) {
  var b = "function" == r(a);
  return b ? b : a ? u(u(null) ? null : a.hb) ? !0 : a.Ib ? !1 : v(ya, a) : v(ya, a);
}
function ic(a, b) {
  this.e = a;
  this.p = b;
  this.t = 0;
  this.l = 393217;
}
k = ic.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B, S, $) {
    a = this;
    return jc.Qa ? jc.Qa(a.e, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B, S, $) : jc.call(null, a.e, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B, S, $);
  }
  function b(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B, S) {
    a = this;
    return a.e.ta ? a.e.ta(b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B, S) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B, S);
  }
  function c(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B) {
    a = this;
    return a.e.sa ? a.e.sa(b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, B);
  }
  function d(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J) {
    a = this;
    return a.e.ra ? a.e.ra(b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J);
  }
  function e(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G) {
    a = this;
    return a.e.qa ? a.e.qa(b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G);
  }
  function f(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C) {
    a = this;
    return a.e.pa ? a.e.pa(b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C);
  }
  function g(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w) {
    a = this;
    return a.e.oa ? a.e.oa(b, c, d, e, f, g, h, l, m, n, p, q, s, t, w) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w);
  }
  function h(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t) {
    a = this;
    return a.e.na ? a.e.na(b, c, d, e, f, g, h, l, m, n, p, q, s, t) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s, t);
  }
  function l(a, b, c, d, e, f, g, h, l, m, n, p, q, s) {
    a = this;
    return a.e.ma ? a.e.ma(b, c, d, e, f, g, h, l, m, n, p, q, s) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q, s);
  }
  function m(a, b, c, d, e, f, g, h, l, m, n, p, q) {
    a = this;
    return a.e.la ? a.e.la(b, c, d, e, f, g, h, l, m, n, p, q) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, h, l, m, n, p) {
    a = this;
    return a.e.ka ? a.e.ka(b, c, d, e, f, g, h, l, m, n, p) : a.e.call(null, b, c, d, e, f, g, h, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, h, l, m, n) {
    a = this;
    return a.e.ja ? a.e.ja(b, c, d, e, f, g, h, l, m, n) : a.e.call(null, b, c, d, e, f, g, h, l, m, n);
  }
  function q(a, b, c, d, e, f, g, h, l, m) {
    a = this;
    return a.e.va ? a.e.va(b, c, d, e, f, g, h, l, m) : a.e.call(null, b, c, d, e, f, g, h, l, m);
  }
  function s(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.e.ua ? a.e.ua(b, c, d, e, f, g, h, l) : a.e.call(null, b, c, d, e, f, g, h, l);
  }
  function t(a, b, c, d, e, f, g, h) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, g, h) : a.e.call(null, b, c, d, e, f, g, h);
  }
  function w(a, b, c, d, e, f, g) {
    a = this;
    return a.e.L ? a.e.L(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.e.w ? a.e.w(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function G(a, b, c, d, e) {
    a = this;
    return a.e.j ? a.e.j(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function J(a, b, c, d) {
    a = this;
    return a.e.c ? a.e.c(b, c, d) : a.e.call(null, b, c, d);
  }
  function S(a, b, c) {
    a = this;
    return a.e.a ? a.e.a(b, c) : a.e.call(null, b, c);
  }
  function $(a, b) {
    a = this;
    return a.e.b ? a.e.b(b) : a.e.call(null, b);
  }
  function Ga(a) {
    a = this;
    return a.e.r ? a.e.r() : a.e.call(null);
  }
  var B = null, B = function(B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb, Ma, nb, sc, Ub, Vb) {
    switch(arguments.length) {
      case 1:
        return Ga.call(this, B);
      case 2:
        return $.call(this, B, Z);
      case 3:
        return S.call(this, B, Z, aa);
      case 4:
        return J.call(this, B, Z, aa, ca);
      case 5:
        return G.call(this, B, Z, aa, ca, da);
      case 6:
        return C.call(this, B, Z, aa, ca, da, ha);
      case 7:
        return w.call(this, B, Z, aa, ca, da, ha, la);
      case 8:
        return t.call(this, B, Z, aa, ca, da, ha, la, qa);
      case 9:
        return s.call(this, B, Z, aa, ca, da, ha, la, qa, va);
      case 10:
        return q.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra);
      case 11:
        return p.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa);
      case 12:
        return n.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea);
      case 13:
        return m.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa);
      case 14:
        return l.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La);
      case 15:
        return h.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa);
      case 16:
        return g.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa);
      case 17:
        return f.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb);
      case 18:
        return e.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb, Ma);
      case 19:
        return d.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb, Ma, nb);
      case 20:
        return c.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb, Ma, nb, sc);
      case 21:
        return b.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb, Ma, nb, sc, Ub);
      case 22:
        return a.call(this, B, Z, aa, ca, da, ha, la, qa, va, ra, Aa, Ea, Fa, La, Sa, Xa, mb, Ma, nb, sc, Ub, Vb);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  B.b = Ga;
  B.a = $;
  B.c = S;
  B.j = J;
  B.w = G;
  B.L = C;
  B.Y = w;
  B.ua = t;
  B.va = s;
  B.ja = q;
  B.ka = p;
  B.la = n;
  B.ma = m;
  B.na = l;
  B.oa = h;
  B.pa = g;
  B.qa = f;
  B.ra = e;
  B.sa = d;
  B.ta = c;
  B.kb = b;
  B.Qa = a;
  return B;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.r = function() {
  return this.e.r ? this.e.r() : this.e.call(null);
};
k.b = function(a) {
  return this.e.b ? this.e.b(a) : this.e.call(null, a);
};
k.a = function(a, b) {
  return this.e.a ? this.e.a(a, b) : this.e.call(null, a, b);
};
k.c = function(a, b, c) {
  return this.e.c ? this.e.c(a, b, c) : this.e.call(null, a, b, c);
};
k.j = function(a, b, c, d) {
  return this.e.j ? this.e.j(a, b, c, d) : this.e.call(null, a, b, c, d);
};
k.w = function(a, b, c, d, e) {
  return this.e.w ? this.e.w(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
k.L = function(a, b, c, d, e, f) {
  return this.e.L ? this.e.L(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
k.Y = function(a, b, c, d, e, f, g) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g);
};
k.ua = function(a, b, c, d, e, f, g, h) {
  return this.e.ua ? this.e.ua(a, b, c, d, e, f, g, h) : this.e.call(null, a, b, c, d, e, f, g, h);
};
k.va = function(a, b, c, d, e, f, g, h, l) {
  return this.e.va ? this.e.va(a, b, c, d, e, f, g, h, l) : this.e.call(null, a, b, c, d, e, f, g, h, l);
};
k.ja = function(a, b, c, d, e, f, g, h, l, m) {
  return this.e.ja ? this.e.ja(a, b, c, d, e, f, g, h, l, m) : this.e.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.ka = function(a, b, c, d, e, f, g, h, l, m, n) {
  return this.e.ka ? this.e.ka(a, b, c, d, e, f, g, h, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n);
};
k.la = function(a, b, c, d, e, f, g, h, l, m, n, p) {
  return this.e.la ? this.e.la(a, b, c, d, e, f, g, h, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p);
};
k.ma = function(a, b, c, d, e, f, g, h, l, m, n, p, q) {
  return this.e.ma ? this.e.ma(a, b, c, d, e, f, g, h, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q);
};
k.na = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s) {
  return this.e.na ? this.e.na(a, b, c, d, e, f, g, h, l, m, n, p, q, s) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s);
};
k.oa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t) {
  return this.e.oa ? this.e.oa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t);
};
k.pa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w) {
  return this.e.pa ? this.e.pa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w);
};
k.qa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C) {
  return this.e.qa ? this.e.qa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C);
};
k.ra = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G) {
  return this.e.ra ? this.e.ra(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G);
};
k.sa = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J) {
  return this.e.sa ? this.e.sa(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J);
};
k.ta = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S) {
  return this.e.ta ? this.e.ta(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S);
};
k.kb = function(a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $) {
  return jc.Qa ? jc.Qa(this.e, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $) : jc.call(null, this.e, a, b, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $);
};
k.hb = !0;
k.R = function(a, b) {
  return new ic(this.e, b);
};
k.O = function() {
  return this.p;
};
function kc(a, b) {
  return hc(a) && !(a ? a.l & 262144 || a.Gb || (a.l ? 0 : v(Ya, a)) : v(Ya, a)) ? new ic(a, b) : null == a ? null : Za(a, b);
}
function nc(a) {
  var b = null != a;
  return(b ? a ? a.l & 131072 || a.nb || (a.l ? 0 : v(Va, a)) : v(Va, a) : b) ? Wa(a) : null;
}
function oc(a) {
  return null == a ? !1 : a ? a.l & 1024 || a.Bb ? !0 : a.l ? !1 : v(Na, a) : v(Na, a);
}
function pc(a) {
  return a ? a.l & 16384 || a.Fb ? !0 : a.l ? !1 : v(Ra, a) : v(Ra, a);
}
function qc(a) {
  return a ? a.t & 512 || a.zb ? !0 : !1 : !1;
}
function rc(a) {
  var b = [];
  fa(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function tc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
function uc(a) {
  return u(a) ? !0 : !1;
}
function Jb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ua(a) === ua(b)) {
    return a && (a.t & 2048 || a.Oa) ? a.Pa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  throw Error("compare on non-nil objects of different types");
}
var vc = function() {
  function a(a, b, c, g) {
    for (;;) {
      var h = Jb(P.a(a, g), P.a(b, g));
      if (0 === h && g + 1 < c) {
        g += 1;
      } else {
        return h;
      }
    }
  }
  function b(a, b) {
    var f = O(a), g = O(b);
    return f < g ? -1 : f > g ? 1 : c.j(a, b, f, 0);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}(), xc = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c));
        if (Tb(b)) {
          return Ua(b);
        }
        c = L(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? wc.c ? wc.c(a, I(c), L(c)) : wc.call(null, a, I(c), L(c)) : a.r ? a.r() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), wc = function() {
  function a(a, b, c) {
    return c && (c.l & 524288 || c.pb) ? c.U(null, a, b) : c instanceof Array ? Yb.c(c, a, b) : "string" === typeof c ? Yb.c(c, a, b) : v($a, c) ? ab.c(c, a, b) : xc.c(a, b, c);
  }
  function b(a, b) {
    return b && (b.l & 524288 || b.pb) ? b.T(null, a) : b instanceof Array ? Yb.a(b, a) : "string" === typeof b ? Yb.a(b, a) : v($a, b) ? ab.a(b, a) : xc.a(a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function yc(a) {
  return function() {
    function b(b, c) {
      return a.a ? a.a(b, c) : a.call(null, b, c);
    }
    function c() {
      return a.r ? a.r() : a.call(null);
    }
    var d = null, d = function(a, d) {
      switch(arguments.length) {
        case 0:
          return c.call(this);
        case 1:
          return a;
        case 2:
          return b.call(this, a, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.r = c;
    d.b = function(a) {
      return a;
    };
    d.a = b;
    return d;
  }();
}
var zc = function() {
  function a(a, b, c, g) {
    a = a.b ? a.b(yc(b)) : a.call(null, yc(b));
    c = wc.c(a, c, g);
    c = a.b ? a.b(Tb(c) ? Ua(c) : c) : a.call(null, Tb(c) ? Ua(c) : c);
    return Tb(c) ? Ua(c) : c;
  }
  function b(a, b, f) {
    return c.j(a, b, b.r ? b.r() : b.call(null), f);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.j = a;
  return c;
}(), Ac = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var h = null;
      2 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, h);
    }
    function d(b, c, d) {
      return wc.c(a, b + c, d);
    }
    b.q = 2;
    b.m = function(a) {
      var b = I(a);
      a = L(a);
      var c = I(a);
      a = K(a);
      return d(b, c, a);
    };
    b.h = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.h(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.q = 2;
  a.m = b.m;
  a.r = function() {
    return 0;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.h = b.h;
  return a;
}();
function Bc(a) {
  return a - 1;
}
function Cc(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.b ? Math.floor.b(c) : Math.floor.call(null, c) : Math.ceil.b ? Math.ceil.b(c) : Math.ceil.call(null, c);
}
function Oc(a, b) {
  var c = Cc(a, b);
  return a - b * c;
}
function Pc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Qc(a) {
  var b = 1;
  for (a = H(a);;) {
    if (a && 0 < b) {
      b -= 1, a = L(a);
    } else {
      return a;
    }
  }
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var h = null;
      1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, h);
    }
    function c(a, d) {
      for (var e = new ga(b.b(a)), l = d;;) {
        if (u(l)) {
          e = e.append(b.b(I(l))), l = L(l);
        } else {
          return e.toString();
        }
      }
    }
    a.q = 1;
    a.m = function(a) {
      var b = I(a);
      a = K(a);
      return c(b, a);
    };
    a.h = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 1;
  b.m = c.m;
  b.r = function() {
    return "";
  };
  b.b = a;
  b.h = c.h;
  return b;
}();
function ac(a, b) {
  var c;
  if (b ? b.l & 16777216 || b.Eb || (b.l ? 0 : v(fb, b)) : v(fb, b)) {
    if (Zb(a) && Zb(b) && O(a) !== O(b)) {
      c = !1;
    } else {
      a: {
        c = H(a);
        for (var d = H(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && F.a(I(c), I(d))) {
            c = L(c), d = L(d);
          } else {
            c = !1;
            break a;
          }
        }
        c = void 0;
      }
    }
  } else {
    c = null;
  }
  return uc(c);
}
function Rc(a, b, c, d, e) {
  this.p = a;
  this.first = b;
  this.xa = c;
  this.count = d;
  this.o = e;
  this.l = 65937646;
  this.t = 8192;
}
k = Rc.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.p;
};
k.wa = function() {
  return 1 === this.count ? null : this.xa;
};
k.S = function() {
  return this.count;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  return this.first;
};
k.Z = function() {
  return 1 === this.count ? Ob : this.xa;
};
k.Q = function() {
  return this;
};
k.R = function(a, b) {
  return new Rc(b, this.first, this.xa, this.count, this.o);
};
k.N = function(a, b) {
  return new Rc(this.p, b, this, this.count + 1, null);
};
function Sc(a) {
  this.p = a;
  this.l = 65937614;
  this.t = 8192;
}
k = Sc.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.p;
};
k.wa = function() {
  return null;
};
k.S = function() {
  return 0;
};
k.H = function() {
  return 0;
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  return null;
};
k.Z = function() {
  return Ob;
};
k.Q = function() {
  return null;
};
k.R = function(a, b) {
  return new Sc(b);
};
k.N = function(a, b) {
  return new Rc(this.p, b, null, 1, null);
};
var Ob = new Sc(null), Tc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Lb && 0 === a.n) {
      b = a.g;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.W(null)), a = a.wa(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Ob;;) {
      if (0 < a) {
        var f = a - 1, e = e.N(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.q = 0;
  a.m = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
function Uc(a, b, c, d) {
  this.p = a;
  this.first = b;
  this.xa = c;
  this.o = d;
  this.l = 65929452;
  this.t = 8192;
}
k = Uc.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.p;
};
k.wa = function() {
  return null == this.xa ? null : H(this.xa);
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  return this.first;
};
k.Z = function() {
  return null == this.xa ? Ob : this.xa;
};
k.Q = function() {
  return this;
};
k.R = function(a, b) {
  return new Uc(b, this.first, this.xa, this.o);
};
k.N = function(a, b) {
  return new Uc(null, b, this, this.o);
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.l & 64 || b.La)) ? new Uc(null, a, b, null) : new Uc(null, a, H(b), null);
}
function R(a, b, c, d) {
  this.ba = a;
  this.name = b;
  this.za = c;
  this.Da = d;
  this.l = 2153775105;
  this.t = 4096;
}
k = R.prototype;
k.G = function(a, b) {
  return E(b, ":" + y.b(this.za));
};
k.H = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Hb(this) + 2654435769 | 0;
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Q.a(c, this);
      case 3:
        return Q.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Q.a(c, this);
  };
  a.c = function(a, c, d) {
    return Q.c(c, this, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return Q.a(a, this);
};
k.a = function(a, b) {
  return Q.c(a, this, b);
};
k.F = function(a, b) {
  return b instanceof R ? this.za === b.za : !1;
};
k.toString = function() {
  return ":" + y.b(this.za);
};
var Wc = function() {
  function a(a, b) {
    return new R(a, b, "" + y.b(u(a) ? "" + y.b(a) + "/" : null) + y.b(b), null);
  }
  function b(a) {
    if (a instanceof R) {
      return a;
    }
    if (a instanceof Kb) {
      var b;
      if (a && (a.t & 4096 || a.ob)) {
        b = a.ba;
      } else {
        throw Error("Doesn't support namespace: " + y.b(a));
      }
      return new R(b, Vc.b ? Vc.b(a) : Vc.call(null, a), a.Aa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new R(b[0], b[1], a, null) : new R(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Xc(a, b, c, d) {
  this.p = a;
  this.Ga = b;
  this.A = c;
  this.o = d;
  this.t = 0;
  this.l = 32374988;
}
k = Xc.prototype;
k.toString = function() {
  return yb(this);
};
function Yc(a) {
  null != a.Ga && (a.A = a.Ga.r ? a.Ga.r() : a.Ga.call(null), a.Ga = null);
  return a.A;
}
k.O = function() {
  return this.p;
};
k.wa = function() {
  eb(this);
  return null == this.A ? null : L(this.A);
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  eb(this);
  return null == this.A ? null : I(this.A);
};
k.Z = function() {
  eb(this);
  return null != this.A ? K(this.A) : Ob;
};
k.Q = function() {
  Yc(this);
  if (null == this.A) {
    return null;
  }
  for (var a = this.A;;) {
    if (a instanceof Xc) {
      a = Yc(a);
    } else {
      return this.A = a, H(this.A);
    }
  }
};
k.R = function(a, b) {
  return new Xc(b, this.Ga, this.A, this.o);
};
k.N = function(a, b) {
  return N(b, this);
};
function Zc(a, b) {
  this.Ta = a;
  this.end = b;
  this.t = 0;
  this.l = 2;
}
Zc.prototype.S = function() {
  return this.end;
};
Zc.prototype.add = function(a) {
  this.Ta[this.end] = a;
  return this.end += 1;
};
Zc.prototype.da = function() {
  var a = new $c(this.Ta, 0, this.end);
  this.Ta = null;
  return a;
};
function $c(a, b, c) {
  this.g = a;
  this.B = b;
  this.end = c;
  this.t = 0;
  this.l = 524306;
}
k = $c.prototype;
k.T = function(a, b) {
  return Yb.j(this.g, b, this.g[this.B], this.B + 1);
};
k.U = function(a, b, c) {
  return Yb.j(this.g, b, c, this.B);
};
k.Za = function() {
  if (this.B === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new $c(this.g, this.B + 1, this.end);
};
k.I = function(a, b) {
  return this.g[this.B + b];
};
k.V = function(a, b, c) {
  return 0 <= b && b < this.end - this.B ? this.g[this.B + b] : c;
};
k.S = function() {
  return this.end - this.B;
};
var ad = function() {
  function a(a, b, c) {
    return new $c(a, b, c);
  }
  function b(a, b) {
    return new $c(a, b, a.length);
  }
  function c(a) {
    return new $c(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function bd(a, b, c, d) {
  this.da = a;
  this.ha = b;
  this.p = c;
  this.o = d;
  this.l = 31850732;
  this.t = 1536;
}
k = bd.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.p;
};
k.wa = function() {
  if (1 < Ba(this.da)) {
    return new bd(qb(this.da), this.ha, this.p, null);
  }
  var a = eb(this.ha);
  return null == a ? null : a;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.W = function() {
  return z.a(this.da, 0);
};
k.Z = function() {
  return 1 < Ba(this.da) ? new bd(qb(this.da), this.ha, this.p, null) : null == this.ha ? Ob : this.ha;
};
k.Q = function() {
  return this;
};
k.Va = function() {
  return this.da;
};
k.Wa = function() {
  return null == this.ha ? Ob : this.ha;
};
k.R = function(a, b) {
  return new bd(this.da, this.ha, b, this.o);
};
k.N = function(a, b) {
  return N(b, this);
};
k.Ua = function() {
  return null == this.ha ? null : this.ha;
};
function cd(a, b) {
  return 0 === Ba(a) ? b : new bd(a, b, null, null);
}
function dd(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = L(a);
    } else {
      return b;
    }
  }
}
function ed(a, b) {
  if (Zb(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = L(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var gd = function fd(b) {
  return null == b ? null : null == L(b) ? H(I(b)) : N(I(b), fd(L(b)));
}, hd = function() {
  function a(a, b) {
    return new Xc(null, function() {
      var c = H(a);
      return c ? qc(c) ? cd(sb(c), d.a(tb(c), b)) : N(I(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Xc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Xc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function p(a, b) {
        return new Xc(null, function() {
          var c = H(a);
          return c ? qc(c) ? cd(sb(c), p(tb(c), b)) : N(I(c), p(K(c), b)) : u(b) ? p(I(b), L(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.q = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, g, h) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.h(d, g, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.q = 2;
  d.m = e.m;
  d.r = c;
  d.b = b;
  d.a = a;
  d.h = e.h;
  return d;
}(), id = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var p = null;
      4 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, p);
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, gd(f)))));
    }
    a.q = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var n = I(a);
      a = K(a);
      return b(c, d, e, n, a);
    };
    a.h = b;
    return a;
  }(), c = function(c, f, g, h, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return N(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, h);
      default:
        return d.h(c, f, g, h, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = 4;
  c.m = d.m;
  c.b = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.c = b;
  c.j = a;
  c.h = d.h;
  return c;
}(), jd = function() {
  function a() {
    return jb(cc);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = kb(a, c), u(d)) {
          c = I(d), d = L(d);
        } else {
          return a;
        }
      }
    }
    a.q = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return a.call(this);
      case 1:
        return b;
      case 2:
        return kb(b, e);
      default:
        return c.h(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 2;
  b.m = c.m;
  b.r = a;
  b.b = function(a) {
    return a;
  };
  b.a = function(a, b) {
    return kb(a, b);
  };
  b.h = c.h;
  return b;
}(), kd = function() {
  var a = null, b = function() {
    function a(c, f, g, h) {
      var l = null;
      3 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, h) {
      for (;;) {
        if (a = ob(a, c, d), u(h)) {
          c = I(h), d = I(L(h)), h = L(L(h));
        } else {
          return a;
        }
      }
    }
    a.q = 3;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var h = I(a);
      a = K(a);
      return b(c, g, h, a);
    };
    a.h = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return ob(a, d, e);
      default:
        return b.h(a, d, e, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.q = 3;
  a.m = b.m;
  a.c = function(a, b, e) {
    return ob(a, b, e);
  };
  a.h = b.h;
  return a;
}();
function ld(a, b, c) {
  var d = H(c);
  if (0 === b) {
    return a.r ? a.r() : a.call(null);
  }
  c = A(d);
  var e = D(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = A(e), f = D(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(f), g = D(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(g), h = D(g);
  if (4 === b) {
    return a.j ? a.j(c, d, e, f) : a.j ? a.j(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = A(h), l = D(h);
  if (5 === b) {
    return a.w ? a.w(c, d, e, f, g) : a.w ? a.w(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = A(l), m = D(l);
  if (6 === b) {
    return a.L ? a.L(c, d, e, f, g, h) : a.L ? a.L(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = A(m), n = D(m);
  if (7 === b) {
    return a.Y ? a.Y(c, d, e, f, g, h, l) : a.Y ? a.Y(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var m = A(n), p = D(n);
  if (8 === b) {
    return a.ua ? a.ua(c, d, e, f, g, h, l, m) : a.ua ? a.ua(c, d, e, f, g, h, l, m) : a.call(null, c, d, e, f, g, h, l, m);
  }
  var n = A(p), q = D(p);
  if (9 === b) {
    return a.va ? a.va(c, d, e, f, g, h, l, m, n) : a.va ? a.va(c, d, e, f, g, h, l, m, n) : a.call(null, c, d, e, f, g, h, l, m, n);
  }
  var p = A(q), s = D(q);
  if (10 === b) {
    return a.ja ? a.ja(c, d, e, f, g, h, l, m, n, p) : a.ja ? a.ja(c, d, e, f, g, h, l, m, n, p) : a.call(null, c, d, e, f, g, h, l, m, n, p);
  }
  var q = A(s), t = D(s);
  if (11 === b) {
    return a.ka ? a.ka(c, d, e, f, g, h, l, m, n, p, q) : a.ka ? a.ka(c, d, e, f, g, h, l, m, n, p, q) : a.call(null, c, d, e, f, g, h, l, m, n, p, q);
  }
  var s = A(t), w = D(t);
  if (12 === b) {
    return a.la ? a.la(c, d, e, f, g, h, l, m, n, p, q, s) : a.la ? a.la(c, d, e, f, g, h, l, m, n, p, q, s) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s);
  }
  var t = A(w), C = D(w);
  if (13 === b) {
    return a.ma ? a.ma(c, d, e, f, g, h, l, m, n, p, q, s, t) : a.ma ? a.ma(c, d, e, f, g, h, l, m, n, p, q, s, t) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t);
  }
  var w = A(C), G = D(C);
  if (14 === b) {
    return a.na ? a.na(c, d, e, f, g, h, l, m, n, p, q, s, t, w) : a.na ? a.na(c, d, e, f, g, h, l, m, n, p, q, s, t, w) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w);
  }
  var C = A(G), J = D(G);
  if (15 === b) {
    return a.oa ? a.oa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C) : a.oa ? a.oa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C);
  }
  var G = A(J), S = D(J);
  if (16 === b) {
    return a.pa ? a.pa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G) : a.pa ? a.pa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G);
  }
  var J = A(S), $ = D(S);
  if (17 === b) {
    return a.qa ? a.qa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J) : a.qa ? a.qa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J);
  }
  var S = A($), Ga = D($);
  if (18 === b) {
    return a.ra ? a.ra(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S) : a.ra ? a.ra(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S);
  }
  $ = A(Ga);
  Ga = D(Ga);
  if (19 === b) {
    return a.sa ? a.sa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $) : a.sa ? a.sa(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $);
  }
  var B = A(Ga);
  D(Ga);
  if (20 === b) {
    return a.ta ? a.ta(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $, B) : a.ta ? a.ta(c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $, B) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, s, t, w, C, G, J, S, $, B);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var jc = function() {
  function a(a, b, c, d, e) {
    b = id.j(b, c, d, e);
    c = a.q;
    return a.m ? (d = ed(b, c + 1), d <= c ? ld(a, d, b) : a.m(b)) : a.apply(a, dd(b));
  }
  function b(a, b, c, d) {
    b = id.c(b, c, d);
    c = a.q;
    return a.m ? (d = ed(b, c + 1), d <= c ? ld(a, d, b) : a.m(b)) : a.apply(a, dd(b));
  }
  function c(a, b, c) {
    b = id.a(b, c);
    c = a.q;
    if (a.m) {
      var d = ed(b, c + 1);
      return d <= c ? ld(a, d, b) : a.m(b);
    }
    return a.apply(a, dd(b));
  }
  function d(a, b) {
    var c = a.q;
    if (a.m) {
      var d = ed(b, c + 1);
      return d <= c ? ld(a, d, b) : a.m(b);
    }
    return a.apply(a, dd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, s) {
      var t = null;
      5 < arguments.length && (t = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, t);
    }
    function b(a, c, d, e, f, g) {
      c = N(c, N(d, N(e, N(f, gd(g)))));
      d = a.q;
      return a.m ? (e = ed(c, d + 1), e <= d ? ld(a, e, c) : a.m(c)) : a.apply(a, dd(c));
    }
    a.q = 5;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var g = I(a);
      a = K(a);
      return b(c, d, e, f, g, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, h, l, m, n, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, l);
      case 4:
        return b.call(this, e, h, l, m);
      case 5:
        return a.call(this, e, h, l, m, n);
      default:
        return f.h(e, h, l, m, n, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = 5;
  e.m = f.m;
  e.a = d;
  e.c = c;
  e.j = b;
  e.w = a;
  e.h = f.h;
  return e;
}(), md = function() {
  function a(a, b) {
    return!F.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, h) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return ta(jc.j(F, a, c, d));
    }
    a.q = 2;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = K(a);
      return b(c, d, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.h(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 2;
  b.m = c.m;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.h = c.h;
  return b;
}();
function nd(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    if (u(a.b ? a.b(I(b)) : a.call(null, I(b)))) {
      var c = a, d = L(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function od(a) {
  return a;
}
function pd(a) {
  return function c(d, e) {
    return new Xc(null, function() {
      var f = H(e);
      if (f) {
        if (qc(f)) {
          for (var g = sb(f), h = O(g), l = new Zc(Array(h), 0), m = 0;;) {
            if (m < h) {
              var n = a.a ? a.a(d + m, z.a(g, m)) : a.call(null, d + m, z.a(g, m));
              l.add(n);
              m += 1;
            } else {
              break;
            }
          }
          return cd(l.da(), c(d + h, tb(f)));
        }
        return N(a.a ? a.a(d, I(f)) : a.call(null, d, I(f)), c(d + 1, K(f)));
      }
      return null;
    }, null, null);
  }(0, qd);
}
function rd(a, b, c, d) {
  this.state = a;
  this.p = b;
  this.yb = c;
  this.gb = d;
  this.l = 6455296;
  this.t = 16386;
}
k = rd.prototype;
k.H = function() {
  return this[ba] || (this[ba] = ++ea);
};
k.eb = function(a, b, c) {
  a = H(this.gb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.I(null, f), h = P.c(g, 0, null), g = P.c(g, 1, null);
      g.j ? g.j(h, this, b, c) : g.call(null, h, this, b, c);
      f += 1;
    } else {
      if (a = H(a)) {
        qc(a) ? (d = sb(a), a = tb(a), h = d, e = O(d), d = h) : (d = I(a), h = P.c(d, 0, null), g = P.c(d, 1, null), g.j ? g.j(h, this, b, c) : g.call(null, h, this, b, c), a = L(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
k.O = function() {
  return this.p;
};
k.Xa = function() {
  return this.state;
};
k.F = function(a, b) {
  return this === b;
};
var ud = function() {
  function a(a) {
    return new rd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var h = null;
      1 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, h);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.l & 64 || c.La || (c.l ? 0 : v(Ha, c)) : v(Ha, c)) ? jc.a(sd, c) : c, e = Q.a(d, td), d = Q.a(d, oa);
      return new rd(a, d, e, null);
    }
    a.q = 1;
    a.m = function(a) {
      var c = I(a);
      a = K(a);
      return b(c, a);
    };
    a.h = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.h(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.q = 1;
  b.m = c.m;
  b.b = a;
  b.h = c.h;
  return b;
}();
function T(a, b) {
  if (a instanceof rd) {
    var c = a.yb;
    if (null != c && !u(c.b ? c.b(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + y.b(Gd.b ? Gd.b(Tc(new Kb(null, "validate", "validate", 1439230700, null), new Kb(null, "new-value", "new-value", -1567397401, null))) : Gd.call(null, Tc(new Kb(null, "validate", "validate", 1439230700, null), new Kb(null, "new-value", "new-value", -1567397401, null)))));
    }
    c = a.state;
    a.state = b;
    null != a.gb && ib(a, c, b);
    return b;
  }
  return vb(a, b);
}
var Hd = function() {
  function a(a, b, c, d) {
    return a instanceof rd ? T(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : wb.j(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof rd ? T(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : wb.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof rd ? T(a, b.b ? b.b(a.state) : b.call(null, a.state)) : wb.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, p) {
      var q = null;
      4 < arguments.length && (q = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, q);
    }
    function b(a, c, d, e, f) {
      return a instanceof rd ? T(a, jc.w(c, a.state, d, e, f)) : wb.w(a, c, d, e, f);
    }
    a.q = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.h = b;
    return a;
  }(), d = function(d, g, h, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, l);
      default:
        return e.h(d, g, h, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.q = 4;
  d.m = e.m;
  d.a = c;
  d.c = b;
  d.j = a;
  d.h = e.h;
  return d;
}(), Id = function() {
  function a(a, b, c, d) {
    return new Xc(null, function() {
      var f = H(b), p = H(c), q = H(d);
      return f && p && q ? N(a.c ? a.c(I(f), I(p), I(q)) : a.call(null, I(f), I(p), I(q)), e.j(a, K(f), K(p), K(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Xc(null, function() {
      var d = H(b), f = H(c);
      return d && f ? N(a.a ? a.a(I(d), I(f)) : a.call(null, I(d), I(f)), e.c(a, K(d), K(f))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Xc(null, function() {
      var c = H(b);
      if (c) {
        if (qc(c)) {
          for (var d = sb(c), f = O(d), p = new Zc(Array(f), 0), q = 0;;) {
            if (q < f) {
              var s = a.b ? a.b(z.a(d, q)) : a.call(null, z.a(d, q));
              p.add(s);
              q += 1;
            } else {
              break;
            }
          }
          return cd(p.da(), e.a(a, tb(c)));
        }
        return N(a.b ? a.b(I(c)) : a.call(null, I(c)), e.a(a, K(c)));
      }
      return null;
    }, null, null);
  }
  function d(a) {
    return function(b) {
      return function() {
        function c(d, e) {
          return b.a ? b.a(d, a.b ? a.b(e) : a.call(null, e)) : b.call(null, d, a.b ? a.b(e) : a.call(null, e));
        }
        function d(a) {
          return b.b ? b.b(a) : b.call(null, a);
        }
        function e() {
          return b.r ? b.r() : b.call(null);
        }
        var f = null, q = function() {
          function c(a, b, e) {
            var f = null;
            2 < arguments.length && (f = M(Array.prototype.slice.call(arguments, 2), 0));
            return d.call(this, a, b, f);
          }
          function d(c, e, f) {
            return b.a ? b.a(c, jc.c(a, e, f)) : b.call(null, c, jc.c(a, e, f));
          }
          c.q = 2;
          c.m = function(a) {
            var b = I(a);
            a = L(a);
            var c = I(a);
            a = K(a);
            return d(b, c, a);
          };
          c.h = d;
          return c;
        }(), f = function(a, b, f) {
          switch(arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, a);
            case 2:
              return c.call(this, a, b);
            default:
              return q.h(a, b, M(arguments, 2));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.q = 2;
        f.m = q.m;
        f.r = e;
        f.b = d;
        f.a = c;
        f.h = q.h;
        return f;
      }();
    };
  }
  var e = null, f = function() {
    function a(c, d, e, f, g) {
      var s = null;
      4 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, s);
    }
    function b(a, c, d, f, g) {
      var h = function w(a) {
        return new Xc(null, function() {
          var b = e.a(H, a);
          return nd(od, b) ? N(e.a(I, b), w(e.a(K, b))) : null;
        }, null, null);
      };
      return e.a(function() {
        return function(b) {
          return jc.a(a, b);
        };
      }(h), h(dc.h(g, f, M([d, c], 0))));
    }
    a.q = 4;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, h, l, m, n) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, h);
      case 3:
        return b.call(this, e, h, l);
      case 4:
        return a.call(this, e, h, l, m);
      default:
        return f.h(e, h, l, m, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = 4;
  e.m = f.m;
  e.b = d;
  e.a = c;
  e.c = b;
  e.j = a;
  e.h = f.h;
  return e;
}(), Jd = function() {
  function a(a, b) {
    return new Xc(null, function() {
      if (0 < a) {
        var f = H(b);
        return f ? N(I(f), c.a(a - 1, K(f))) : null;
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = Ua(a), l = Hd.a(a, Bc), h = 0 < h ? b.a ? b.a(d, g) : b.call(null, d, g) : d;
            return 0 < l ? h : new Sb(h);
          }
          function d(a) {
            return b.b ? b.b(a) : b.call(null, a);
          }
          function l() {
            return b.r ? b.r() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.r = l;
          m.b = d;
          m.a = c;
          return m;
        }();
      }(ud.b(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Kd = function() {
  function a(a, b) {
    return new Xc(null, function(c) {
      return function() {
        return c(a, b);
      };
    }(function(a, b) {
      for (;;) {
        var c = H(b);
        if (0 < a && c) {
          var d = a - 1, c = K(c);
          a = d;
          b = c;
        } else {
          return c;
        }
      }
    }), null, null);
  }
  function b(a) {
    return function(b) {
      return function(a) {
        return function() {
          function c(d, g) {
            var h = Ua(a);
            Hd.a(a, Bc);
            return 0 < h ? d : b.a ? b.a(d, g) : b.call(null, d, g);
          }
          function d(a) {
            return b.b ? b.b(a) : b.call(null, a);
          }
          function l() {
            return b.r ? b.r() : b.call(null);
          }
          var m = null, m = function(a, b) {
            switch(arguments.length) {
              case 0:
                return l.call(this);
              case 1:
                return d.call(this, a);
              case 2:
                return c.call(this, a, b);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          m.r = l;
          m.b = d;
          m.a = c;
          return m;
        }();
      }(ud.b(a));
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Ld = function() {
  function a(a, b) {
    return new Xc(null, function() {
      var f = H(b);
      if (f) {
        if (qc(f)) {
          for (var g = sb(f), h = O(g), l = new Zc(Array(h), 0), m = 0;;) {
            if (m < h) {
              if (u(a.b ? a.b(z.a(g, m)) : a.call(null, z.a(g, m)))) {
                var n = z.a(g, m);
                l.add(n);
              }
              m += 1;
            } else {
              break;
            }
          }
          return cd(l.da(), c.a(a, tb(f)));
        }
        g = I(f);
        f = K(f);
        return u(a.b ? a.b(g) : a.call(null, g)) ? N(g, c.a(a, f)) : c.a(a, f);
      }
      return null;
    }, null, null);
  }
  function b(a) {
    return function(b) {
      return function() {
        function c(f, g) {
          return u(a.b ? a.b(g) : a.call(null, g)) ? b.a ? b.a(f, g) : b.call(null, f, g) : f;
        }
        function g(a) {
          return b.b ? b.b(a) : b.call(null, a);
        }
        function h() {
          return b.r ? b.r() : b.call(null);
        }
        var l = null, l = function(a, b) {
          switch(arguments.length) {
            case 0:
              return h.call(this);
            case 1:
              return g.call(this, a);
            case 2:
              return c.call(this, a, b);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        l.r = h;
        l.b = g;
        l.a = c;
        return l;
      }();
    };
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Md = function() {
  function a(a, b, c) {
    a && (a.t & 4 || a.jb) ? (b = zc.j(b, kb, jb(a), c), b = lb(b), a = kc(b, nc(a))) : a = zc.j(b, dc, a, c);
    return a;
  }
  function b(a, b) {
    var c;
    null != a ? a && (a.t & 4 || a.jb) ? (c = wc.c(kb, jb(a), b), c = lb(c), c = kc(c, nc(a))) : c = wc.c(Ca, a, b) : c = wc.c(dc, Ob, b);
    return c;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Nd = function() {
  function a(a, b, c, h) {
    return new Xc(null, function() {
      var l = H(h);
      if (l) {
        var m = Jd.a(a, l);
        return a === O(m) ? N(m, d.j(a, b, c, Kd.a(b, l))) : Ca(Ob, Jd.a(a, hd.a(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Xc(null, function() {
      var h = H(c);
      if (h) {
        var l = Jd.a(a, h);
        return a === O(l) ? N(l, d.c(a, b, Kd.a(b, h))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.c(a, a, b);
  }
  var d = null, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.j = a;
  return d;
}(), U = function() {
  function a(a, b, c, d, f, p) {
    var q = P.c(b, 0, null);
    return(b = Qc(b)) ? gc.c(a, q, e.L(Q.a(a, q), b, c, d, f, p)) : gc.c(a, q, c.j ? c.j(Q.a(a, q), d, f, p) : c.call(null, Q.a(a, q), d, f, p));
  }
  function b(a, b, c, d, f) {
    var p = P.c(b, 0, null);
    return(b = Qc(b)) ? gc.c(a, p, e.w(Q.a(a, p), b, c, d, f)) : gc.c(a, p, c.c ? c.c(Q.a(a, p), d, f) : c.call(null, Q.a(a, p), d, f));
  }
  function c(a, b, c, d) {
    var f = P.c(b, 0, null);
    return(b = Qc(b)) ? gc.c(a, f, e.j(Q.a(a, f), b, c, d)) : gc.c(a, f, c.a ? c.a(Q.a(a, f), d) : c.call(null, Q.a(a, f), d));
  }
  function d(a, b, c) {
    var d = P.c(b, 0, null);
    return(b = Qc(b)) ? gc.c(a, d, e.c(Q.a(a, d), b, c)) : gc.c(a, d, c.b ? c.b(Q.a(a, d)) : c.call(null, Q.a(a, d)));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, s, t) {
      var w = null;
      6 < arguments.length && (w = M(Array.prototype.slice.call(arguments, 6), 0));
      return b.call(this, c, d, e, f, g, s, w);
    }
    function b(a, c, d, f, g, h, t) {
      var w = P.c(c, 0, null);
      return(c = Qc(c)) ? gc.c(a, w, jc.h(e, Q.a(a, w), c, d, f, M([g, h, t], 0))) : gc.c(a, w, jc.h(d, Q.a(a, w), f, g, h, M([t], 0)));
    }
    a.q = 6;
    a.m = function(a) {
      var c = I(a);
      a = L(a);
      var d = I(a);
      a = L(a);
      var e = I(a);
      a = L(a);
      var f = I(a);
      a = L(a);
      var g = I(a);
      a = L(a);
      var t = I(a);
      a = K(a);
      return b(c, d, e, f, g, t, a);
    };
    a.h = b;
    return a;
  }(), e = function(e, h, l, m, n, p, q) {
    switch(arguments.length) {
      case 3:
        return d.call(this, e, h, l);
      case 4:
        return c.call(this, e, h, l, m);
      case 5:
        return b.call(this, e, h, l, m, n);
      case 6:
        return a.call(this, e, h, l, m, n, p);
      default:
        return f.h(e, h, l, m, n, p, M(arguments, 6));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.q = 6;
  e.m = f.m;
  e.c = d;
  e.j = c;
  e.w = b;
  e.L = a;
  e.h = f.h;
  return e;
}();
function Od(a, b) {
  this.v = a;
  this.g = b;
}
function Pd(a) {
  return new Od(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Qd(a) {
  a = a.k;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Rd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Pd(a);
    d.g[0] = c;
    c = d;
    b -= 5;
  }
}
var Td = function Sd(b, c, d, e) {
  var f = new Od(d.v, xa(d.g)), g = b.k - 1 >>> c & 31;
  5 === c ? f.g[g] = e : (d = d.g[g], b = null != d ? Sd(b, c - 5, d, e) : Rd(null, c - 5, e), f.g[g] = b);
  return f;
};
function Ud(a, b) {
  throw Error("No item " + y.b(a) + " in vector of length " + y.b(b));
}
function Vd(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.g[0];
    } else {
      return b.g;
    }
  }
}
function Wd(a, b) {
  if (b >= Qd(a)) {
    return a.M;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.g[b >>> d & 31], d = e
    } else {
      return c.g;
    }
  }
}
function Xd(a, b) {
  return 0 <= b && b < a.k ? Wd(a, b) : Ud(b, a.k);
}
var Zd = function Yd(b, c, d, e, f) {
  var g = new Od(d.v, xa(d.g));
  if (0 === c) {
    g.g[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = Yd(b, c - 5, d.g[h], e, f);
    g.g[h] = b;
  }
  return g;
};
function V(a, b, c, d, e, f) {
  this.p = a;
  this.k = b;
  this.shift = c;
  this.root = d;
  this.M = e;
  this.o = f;
  this.l = 167668511;
  this.t = 8196;
}
k = V.prototype;
k.toString = function() {
  return yb(this);
};
k.J = function(a, b) {
  return Ja.c(this, b, null);
};
k.K = function(a, b, c) {
  return "number" === typeof b ? z.c(this, b, c) : c;
};
k.I = function(a, b) {
  return Xd(this, b)[b & 31];
};
k.V = function(a, b, c) {
  return 0 <= b && b < this.k ? Wd(this, b)[b & 31] : c;
};
k.Ya = function(a, b, c) {
  if (0 <= b && b < this.k) {
    return Qd(this) <= b ? (a = xa(this.M), a[b & 31] = c, new V(this.p, this.k, this.shift, this.root, a, null)) : new V(this.p, this.k, this.shift, Zd(this, this.shift, this.root, b, c), this.M, null);
  }
  if (b === this.k) {
    return Ca(this, c);
  }
  throw Error("Index " + y.b(b) + " out of bounds  [0," + y.b(this.k) + "]");
};
k.O = function() {
  return this.p;
};
k.S = function() {
  return this.k;
};
k.ab = function() {
  return z.a(this, 0);
};
k.bb = function() {
  return z.a(this, 1);
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.Ka = function() {
  return new $d(this.k, this.shift, ae.b ? ae.b(this.root) : ae.call(null, this.root), be.b ? be.b(this.M) : be.call(null, this.M));
};
k.T = function(a, b) {
  return Xb.a(this, b);
};
k.U = function(a, b, c) {
  return Xb.c(this, b, c);
};
k.Ja = function(a, b, c) {
  if ("number" === typeof b) {
    return Ta(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.Q = function() {
  return 0 === this.k ? null : 32 >= this.k ? new Lb(this.M, 0) : ce.j ? ce.j(this, Vd(this), 0, 0) : ce.call(null, this, Vd(this), 0, 0);
};
k.R = function(a, b) {
  return new V(b, this.k, this.shift, this.root, this.M, this.o);
};
k.N = function(a, b) {
  if (32 > this.k - Qd(this)) {
    for (var c = this.M.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.M[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.p, this.k + 1, this.shift, this.root, d, null);
  }
  c = (d = this.k >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Pd(null), d.g[0] = this.root, e = Rd(null, this.shift, new Od(null, this.M)), d.g[1] = e) : d = Td(this, this.shift, this.root, new Od(null, this.M));
  return new V(this.p, this.k + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.I(null, c);
  };
  a.c = function(a, c, d) {
    return this.V(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return this.I(null, a);
};
k.a = function(a, b) {
  return this.V(null, a, b);
};
var W = new Od(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), cc = new V(null, 0, 5, W, [], 0);
function de(a, b, c, d, e, f) {
  this.C = a;
  this.aa = b;
  this.n = c;
  this.B = d;
  this.p = e;
  this.o = f;
  this.l = 32243948;
  this.t = 1536;
}
k = de.prototype;
k.toString = function() {
  return yb(this);
};
k.wa = function() {
  if (this.B + 1 < this.aa.length) {
    var a = ce.j ? ce.j(this.C, this.aa, this.n, this.B + 1) : ce.call(null, this.C, this.aa, this.n, this.B + 1);
    return null == a ? null : a;
  }
  return ub(this);
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return Xb.a(ee.c ? ee.c(this.C, this.n + this.B, O(this.C)) : ee.call(null, this.C, this.n + this.B, O(this.C)), b);
};
k.U = function(a, b, c) {
  return Xb.c(ee.c ? ee.c(this.C, this.n + this.B, O(this.C)) : ee.call(null, this.C, this.n + this.B, O(this.C)), b, c);
};
k.W = function() {
  return this.aa[this.B];
};
k.Z = function() {
  if (this.B + 1 < this.aa.length) {
    var a = ce.j ? ce.j(this.C, this.aa, this.n, this.B + 1) : ce.call(null, this.C, this.aa, this.n, this.B + 1);
    return null == a ? Ob : a;
  }
  return tb(this);
};
k.Q = function() {
  return this;
};
k.Va = function() {
  return ad.a(this.aa, this.B);
};
k.Wa = function() {
  var a = this.n + this.aa.length;
  return a < Ba(this.C) ? ce.j ? ce.j(this.C, Wd(this.C, a), a, 0) : ce.call(null, this.C, Wd(this.C, a), a, 0) : Ob;
};
k.R = function(a, b) {
  return ce.w ? ce.w(this.C, this.aa, this.n, this.B, b) : ce.call(null, this.C, this.aa, this.n, this.B, b);
};
k.N = function(a, b) {
  return N(b, this);
};
k.Ua = function() {
  var a = this.n + this.aa.length;
  return a < Ba(this.C) ? ce.j ? ce.j(this.C, Wd(this.C, a), a, 0) : ce.call(null, this.C, Wd(this.C, a), a, 0) : null;
};
var ce = function() {
  function a(a, b, c, d, l) {
    return new de(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new de(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new de(a, Xd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, h, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, h);
      case 5:
        return a.call(this, d, f, g, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.j = b;
  d.w = a;
  return d;
}();
function fe(a, b, c, d, e) {
  this.p = a;
  this.ia = b;
  this.start = c;
  this.end = d;
  this.o = e;
  this.l = 166617887;
  this.t = 8192;
}
k = fe.prototype;
k.toString = function() {
  return yb(this);
};
k.J = function(a, b) {
  return Ja.c(this, b, null);
};
k.K = function(a, b, c) {
  return "number" === typeof b ? z.c(this, b, c) : c;
};
k.I = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Ud(b, this.end - this.start) : z.a(this.ia, this.start + b);
};
k.V = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.ia, this.start + b, c);
};
k.Ya = function(a, b, c) {
  var d = this, e = d.start + b;
  return ge.w ? ge.w(d.p, gc.c(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : ge.call(null, d.p, gc.c(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
k.O = function() {
  return this.p;
};
k.S = function() {
  return this.end - this.start;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return Xb.a(this, b);
};
k.U = function(a, b, c) {
  return Xb.c(this, b, c);
};
k.Ja = function(a, b, c) {
  if ("number" === typeof b) {
    return Ta(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.Q = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : N(z.a(a.ia, e), new Xc(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.R = function(a, b) {
  return ge.w ? ge.w(b, this.ia, this.start, this.end, this.o) : ge.call(null, b, this.ia, this.start, this.end, this.o);
};
k.N = function(a, b) {
  return ge.w ? ge.w(this.p, Ta(this.ia, this.end, b), this.start, this.end + 1, null) : ge.call(null, this.p, Ta(this.ia, this.end, b), this.start, this.end + 1, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.I(null, c);
      case 3:
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.I(null, c);
  };
  a.c = function(a, c, d) {
    return this.V(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return this.I(null, a);
};
k.a = function(a, b) {
  return this.V(null, a, b);
};
function ge(a, b, c, d, e) {
  for (;;) {
    if (b instanceof fe) {
      c = b.start + c, d = b.start + d, b = b.ia;
    } else {
      var f = O(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new fe(a, b, c, d, e);
    }
  }
}
var ee = function() {
  function a(a, b, c) {
    return ge(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, O(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function he(a, b) {
  return a === b.v ? b : new Od(a, xa(b.g));
}
function ae(a) {
  return new Od({}, xa(a.g));
}
function be(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  tc(a, 0, b, 0, a.length);
  return b;
}
var Ce = function Be(b, c, d, e) {
  d = he(b.root.v, d);
  var f = b.k - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.g[f];
    b = null != g ? Be(b, c - 5, g, e) : Rd(b.root.v, c - 5, e);
  }
  d.g[f] = b;
  return d;
};
function $d(a, b, c, d) {
  this.k = a;
  this.shift = b;
  this.root = c;
  this.M = d;
  this.l = 275;
  this.t = 88;
}
k = $d.prototype;
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.J(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
k.J = function(a, b) {
  return Ja.c(this, b, null);
};
k.K = function(a, b, c) {
  return "number" === typeof b ? z.c(this, b, c) : c;
};
k.I = function(a, b) {
  if (this.root.v) {
    return Xd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.V = function(a, b, c) {
  return 0 <= b && b < this.k ? z.a(this, b) : c;
};
k.S = function() {
  if (this.root.v) {
    return this.k;
  }
  throw Error("count after persistent!");
};
k.cb = function(a, b, c) {
  var d = this;
  if (d.root.v) {
    if (0 <= b && b < d.k) {
      return Qd(this) <= b ? d.M[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = he(d.root.v, h);
          if (0 === a) {
            l.g[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.g[m]);
            l.g[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.k) {
      return kb(this, c);
    }
    throw Error("Index " + y.b(b) + " out of bounds for TransientVector of length" + y.b(d.k));
  }
  throw Error("assoc! after persistent!");
};
k.Ma = function(a, b, c) {
  if ("number" === typeof b) {
    return pb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.Ra = function(a, b) {
  if (this.root.v) {
    if (32 > this.k - Qd(this)) {
      this.M[this.k & 31] = b;
    } else {
      var c = new Od(this.root.v, this.M), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.M = d;
      if (this.k >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Rd(this.root.v, this.shift, c);
        this.root = new Od(this.root.v, d);
        this.shift = e;
      } else {
        this.root = Ce(this, this.shift, this.root, c);
      }
    }
    this.k += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.Sa = function() {
  if (this.root.v) {
    this.root.v = null;
    var a = this.k - Qd(this), b = Array(a);
    tc(this.M, 0, b, 0, a);
    return new V(null, this.k, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function De() {
  this.t = 0;
  this.l = 2097152;
}
De.prototype.F = function() {
  return!1;
};
var Ee = new De;
function Fe(a, b) {
  return uc(oc(b) ? O(a) === O(b) ? nd(od, Id.a(function(a) {
    return F.a(Q.c(b, I(a), Ee), I(L(a)));
  }, a)) : null : null);
}
function Ge(a, b) {
  var c = a.g;
  if (b instanceof R) {
    a: {
      for (var d = c.length, e = b.za, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof R && e === g.za) {
          c = f;
          break a;
        }
        f += 2;
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          e += 2;
        }
        c = void 0;
      }
    } else {
      if (b instanceof Kb) {
        a: {
          d = c.length;
          e = b.Aa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof Kb && e === g.Aa) {
              c = f;
              break a;
            }
            f += 2;
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        } else {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (F.a(b, c[e])) {
                c = e;
                break a;
              }
              e += 2;
            }
            c = void 0;
          }
        }
      }
    }
  }
  return c;
}
function He(a, b, c) {
  this.g = a;
  this.n = b;
  this.Ha = c;
  this.t = 0;
  this.l = 32374990;
}
k = He.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.Ha;
};
k.wa = function() {
  return this.n < this.g.length - 2 ? new He(this.g, this.n + 2, this.Ha) : null;
};
k.S = function() {
  return(this.g.length - this.n) / 2;
};
k.H = function() {
  return Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  return new V(null, 2, 5, W, [this.g[this.n], this.g[this.n + 1]], null);
};
k.Z = function() {
  return this.n < this.g.length - 2 ? new He(this.g, this.n + 2, this.Ha) : Ob;
};
k.Q = function() {
  return this;
};
k.R = function(a, b) {
  return new He(this.g, this.n, b);
};
k.N = function(a, b) {
  return N(b, this);
};
function ka(a, b, c, d) {
  this.p = a;
  this.k = b;
  this.g = c;
  this.o = d;
  this.l = 16647951;
  this.t = 8196;
}
k = ka.prototype;
k.toString = function() {
  return yb(this);
};
k.J = function(a, b) {
  return Ja.c(this, b, null);
};
k.K = function(a, b, c) {
  a = Ge(this, b);
  return-1 === a ? c : this.g[a + 1];
};
k.O = function() {
  return this.p;
};
k.S = function() {
  return this.k;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Rb(this);
};
k.F = function(a, b) {
  return Fe(this, b);
};
k.Ka = function() {
  return new Ie({}, this.g.length, xa(this.g));
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.Ja = function(a, b, c) {
  a = Ge(this, b);
  if (-1 === a) {
    if (this.k < Je) {
      a = this.g;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ka(this.p, this.k + 1, e, null);
    }
    return Za(Ka(Md.a(fc, this), b, c), this.p);
  }
  if (c === this.g[a + 1]) {
    return this;
  }
  b = xa(this.g);
  b[a + 1] = c;
  return new ka(this.p, this.k, b, null);
};
k.Q = function() {
  var a = this.g;
  return 0 <= a.length - 2 ? new He(a, 0, null) : null;
};
k.R = function(a, b) {
  return new ka(b, this.k, this.g, this.o);
};
k.N = function(a, b) {
  if (pc(b)) {
    return Ka(this, z.a(b, 0), z.a(b, 1));
  }
  for (var c = this, d = H(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (pc(e)) {
      c = Ka(c, z.a(e, 0), z.a(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.J(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
var Je = 8;
function Ie(a, b, c) {
  this.Ea = a;
  this.Ca = b;
  this.g = c;
  this.t = 56;
  this.l = 258;
}
k = Ie.prototype;
k.Ma = function(a, b, c) {
  if (u(this.Ea)) {
    a = Ge(this, b);
    if (-1 === a) {
      return this.Ca + 2 <= 2 * Je ? (this.Ca += 2, this.g.push(b), this.g.push(c), this) : kd.c(Ke.a ? Ke.a(this.Ca, this.g) : Ke.call(null, this.Ca, this.g), b, c);
    }
    c !== this.g[a + 1] && (this.g[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.Ra = function(a, b) {
  if (u(this.Ea)) {
    if (b ? b.l & 2048 || b.mb || (b.l ? 0 : v(Oa, b)) : v(Oa, b)) {
      return ob(this, Le.b ? Le.b(b) : Le.call(null, b), Me.b ? Me.b(b) : Me.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (u(e)) {
        c = L(c), d = ob(d, Le.b ? Le.b(e) : Le.call(null, e), Me.b ? Me.b(e) : Me.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.Sa = function() {
  if (u(this.Ea)) {
    return this.Ea = !1, new ka(null, Cc(this.Ca, 2), this.g, null);
  }
  throw Error("persistent! called twice");
};
k.J = function(a, b) {
  return Ja.c(this, b, null);
};
k.K = function(a, b, c) {
  if (u(this.Ea)) {
    return a = Ge(this, b), -1 === a ? c : this.g[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.S = function() {
  if (u(this.Ea)) {
    return Cc(this.Ca, 2);
  }
  throw Error("count after persistent!");
};
function Ke(a, b) {
  for (var c = jb(fc), d = 0;;) {
    if (d < a) {
      c = kd.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ne() {
  this.ca = !1;
}
function Oe(a, b) {
  return a === b ? !0 : a === b || a instanceof R && b instanceof R && a.za === b.za ? !0 : F.a(a, b);
}
var Pe = function() {
  function a(a, b, c, g, h) {
    a = xa(a);
    a[b] = c;
    a[g] = h;
    return a;
  }
  function b(a, b, c) {
    a = xa(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, h) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.w = a;
  return c;
}(), Qe = function() {
  function a(a, b, c, g, h, l) {
    a = a.Fa(b);
    a.g[c] = g;
    a.g[h] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Fa(b);
    a.g[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, h, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, h, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.L = a;
  return c;
}();
function Re(a, b, c) {
  this.v = a;
  this.D = b;
  this.g = c;
}
k = Re.prototype;
k.Fa = function(a) {
  if (a === this.v) {
    return this;
  }
  var b = Pc(this.D), c = Array(0 > b ? 4 : 2 * (b + 1));
  tc(this.g, 0, c, 0, 2 * b);
  return new Re(a, this.D, c);
};
k.Na = function() {
  return Se.b ? Se.b(this.g) : Se.call(null, this.g);
};
k.Ba = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.D & e)) {
    return d;
  }
  var f = Pc(this.D & e - 1), e = this.g[2 * f], f = this.g[2 * f + 1];
  return null == e ? f.Ba(a + 5, b, c, d) : Oe(c, e) ? f : d;
};
k.fa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = Pc(this.D & g - 1);
  if (0 === (this.D & g)) {
    var l = Pc(this.D);
    if (2 * l < this.g.length) {
      a = this.Fa(a);
      b = a.g;
      f.ca = !0;
      a: {
        for (c = 2 * (l - h), f = 2 * h + (c - 1), l = 2 * (h + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * h] = d;
      b[2 * h + 1] = e;
      a.D |= g;
      return a;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = Te.fa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.D >>> d & 1) && (h[d] = null != this.g[e] ? Te.fa(a, b + 5, Gb(this.g[e]), this.g[e], this.g[e + 1], f) : this.g[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ue(a, l + 1, h);
    }
    b = Array(2 * (l + 4));
    tc(this.g, 0, b, 0, 2 * h);
    b[2 * h] = d;
    b[2 * h + 1] = e;
    tc(this.g, 2 * h, b, 2 * (h + 1), 2 * (l - h));
    f.ca = !0;
    a = this.Fa(a);
    a.g = b;
    a.D |= g;
    return a;
  }
  l = this.g[2 * h];
  g = this.g[2 * h + 1];
  if (null == l) {
    return l = g.fa(a, b + 5, c, d, e, f), l === g ? this : Qe.j(this, a, 2 * h + 1, l);
  }
  if (Oe(d, l)) {
    return e === g ? this : Qe.j(this, a, 2 * h + 1, e);
  }
  f.ca = !0;
  return Qe.L(this, a, 2 * h, null, 2 * h + 1, Ve.Y ? Ve.Y(a, b + 5, l, g, c, d, e) : Ve.call(null, a, b + 5, l, g, c, d, e));
};
k.ea = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Pc(this.D & f - 1);
  if (0 === (this.D & f)) {
    var h = Pc(this.D);
    if (16 <= h) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Te.ea(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.D >>> c & 1) && (g[c] = null != this.g[d] ? Te.ea(a + 5, Gb(this.g[d]), this.g[d], this.g[d + 1], e) : this.g[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ue(null, h + 1, g);
    }
    a = Array(2 * (h + 1));
    tc(this.g, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    tc(this.g, 2 * g, a, 2 * (g + 1), 2 * (h - g));
    e.ca = !0;
    return new Re(null, this.D | f, a);
  }
  h = this.g[2 * g];
  f = this.g[2 * g + 1];
  if (null == h) {
    return h = f.ea(a + 5, b, c, d, e), h === f ? this : new Re(null, this.D, Pe.c(this.g, 2 * g + 1, h));
  }
  if (Oe(c, h)) {
    return d === f ? this : new Re(null, this.D, Pe.c(this.g, 2 * g + 1, d));
  }
  e.ca = !0;
  return new Re(null, this.D, Pe.w(this.g, 2 * g, null, 2 * g + 1, Ve.L ? Ve.L(a + 5, h, f, b, c, d) : Ve.call(null, a + 5, h, f, b, c, d)));
};
var Te = new Re(null, 0, []);
function Ue(a, b, c) {
  this.v = a;
  this.k = b;
  this.g = c;
}
k = Ue.prototype;
k.Fa = function(a) {
  return a === this.v ? this : new Ue(a, this.k, xa(this.g));
};
k.Na = function() {
  return Xe.b ? Xe.b(this.g) : Xe.call(null, this.g);
};
k.Ba = function(a, b, c, d) {
  var e = this.g[b >>> a & 31];
  return null != e ? e.Ba(a + 5, b, c, d) : d;
};
k.fa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.g[g];
  if (null == h) {
    return a = Qe.j(this, a, g, Te.fa(a, b + 5, c, d, e, f)), a.k += 1, a;
  }
  b = h.fa(a, b + 5, c, d, e, f);
  return b === h ? this : Qe.j(this, a, g, b);
};
k.ea = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.g[f];
  if (null == g) {
    return new Ue(null, this.k + 1, Pe.c(this.g, f, Te.ea(a + 5, b, c, d, e)));
  }
  a = g.ea(a + 5, b, c, d, e);
  return a === g ? this : new Ue(null, this.k, Pe.c(this.g, f, a));
};
function Ye(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Oe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ze(a, b, c, d) {
  this.v = a;
  this.ya = b;
  this.k = c;
  this.g = d;
}
k = Ze.prototype;
k.Fa = function(a) {
  if (a === this.v) {
    return this;
  }
  var b = Array(2 * (this.k + 1));
  tc(this.g, 0, b, 0, 2 * this.k);
  return new Ze(a, this.ya, this.k, b);
};
k.Na = function() {
  return Se.b ? Se.b(this.g) : Se.call(null, this.g);
};
k.Ba = function(a, b, c, d) {
  a = Ye(this.g, this.k, c);
  return 0 > a ? d : Oe(c, this.g[a]) ? this.g[a + 1] : d;
};
k.fa = function(a, b, c, d, e, f) {
  if (c === this.ya) {
    b = Ye(this.g, this.k, d);
    if (-1 === b) {
      if (this.g.length > 2 * this.k) {
        return a = Qe.L(this, a, 2 * this.k, d, 2 * this.k + 1, e), f.ca = !0, a.k += 1, a;
      }
      c = this.g.length;
      b = Array(c + 2);
      tc(this.g, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ca = !0;
      f = this.k + 1;
      a === this.v ? (this.g = b, this.k = f, a = this) : a = new Ze(this.v, this.ya, f, b);
      return a;
    }
    return this.g[b + 1] === e ? this : Qe.j(this, a, b + 1, e);
  }
  return(new Re(a, 1 << (this.ya >>> b & 31), [null, this, null, null])).fa(a, b, c, d, e, f);
};
k.ea = function(a, b, c, d, e) {
  return b === this.ya ? (a = Ye(this.g, this.k, c), -1 === a ? (a = 2 * this.k, b = Array(a + 2), tc(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ca = !0, new Ze(null, this.ya, this.k + 1, b)) : F.a(this.g[a], d) ? this : new Ze(null, this.ya, this.k, Pe.c(this.g, a + 1, d))) : (new Re(null, 1 << (this.ya >>> a & 31), [null, this])).ea(a, b, c, d, e);
};
var Ve = function() {
  function a(a, b, c, g, h, l, m) {
    var n = Gb(c);
    if (n === h) {
      return new Ze(null, n, 2, [c, g, l, m]);
    }
    var p = new Ne;
    return Te.fa(a, b, n, c, g, p).fa(a, b, h, l, m, p);
  }
  function b(a, b, c, g, h, l) {
    var m = Gb(b);
    if (m === g) {
      return new Ze(null, m, 2, [b, c, h, l]);
    }
    var n = new Ne;
    return Te.ea(a, m, b, c, n).ea(a, g, h, l, n);
  }
  var c = null, c = function(c, e, f, g, h, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, h, l);
      case 7:
        return a.call(this, c, e, f, g, h, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.L = b;
  c.Y = a;
  return c;
}();
function $e(a, b, c, d, e) {
  this.p = a;
  this.ga = b;
  this.n = c;
  this.A = d;
  this.o = e;
  this.t = 0;
  this.l = 32374860;
}
k = $e.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.p;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  return null == this.A ? new V(null, 2, 5, W, [this.ga[this.n], this.ga[this.n + 1]], null) : I(this.A);
};
k.Z = function() {
  return null == this.A ? Se.c ? Se.c(this.ga, this.n + 2, null) : Se.call(null, this.ga, this.n + 2, null) : Se.c ? Se.c(this.ga, this.n, L(this.A)) : Se.call(null, this.ga, this.n, L(this.A));
};
k.Q = function() {
  return this;
};
k.R = function(a, b) {
  return new $e(b, this.ga, this.n, this.A, this.o);
};
k.N = function(a, b) {
  return N(b, this);
};
var Se = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new $e(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (u(g) && (g = g.Na(), u(g))) {
            return new $e(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new $e(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function af(a, b, c, d, e) {
  this.p = a;
  this.ga = b;
  this.n = c;
  this.A = d;
  this.o = e;
  this.t = 0;
  this.l = 32374860;
}
k = af.prototype;
k.toString = function() {
  return yb(this);
};
k.O = function() {
  return this.p;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Qb(this);
};
k.F = function(a, b) {
  return ac(this, b);
};
k.T = function(a, b) {
  return xc.a(b, this);
};
k.U = function(a, b, c) {
  return xc.c(b, c, this);
};
k.W = function() {
  return I(this.A);
};
k.Z = function() {
  return Xe.j ? Xe.j(null, this.ga, this.n, L(this.A)) : Xe.call(null, null, this.ga, this.n, L(this.A));
};
k.Q = function() {
  return this;
};
k.R = function(a, b) {
  return new af(b, this.ga, this.n, this.A, this.o);
};
k.N = function(a, b) {
  return N(b, this);
};
var Xe = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var h = b[c];
          if (u(h) && (h = h.Na(), u(h))) {
            return new af(a, b, c + 1, h, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new af(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.j = a;
  return c;
}();
function bf(a, b, c, d, e, f) {
  this.p = a;
  this.k = b;
  this.root = c;
  this.X = d;
  this.$ = e;
  this.o = f;
  this.l = 16123663;
  this.t = 8196;
}
k = bf.prototype;
k.toString = function() {
  return yb(this);
};
k.J = function(a, b) {
  return Ja.c(this, b, null);
};
k.K = function(a, b, c) {
  return null == b ? this.X ? this.$ : c : null == this.root ? c : this.root.Ba(0, Gb(b), b, c);
};
k.O = function() {
  return this.p;
};
k.S = function() {
  return this.k;
};
k.H = function() {
  var a = this.o;
  return null != a ? a : this.o = a = Rb(this);
};
k.F = function(a, b) {
  return Fe(this, b);
};
k.Ka = function() {
  return new cf({}, this.root, this.k, this.X, this.$);
};
k.Ja = function(a, b, c) {
  if (null == b) {
    return this.X && c === this.$ ? this : new bf(this.p, this.X ? this.k : this.k + 1, this.root, !0, c, null);
  }
  a = new Ne;
  b = (null == this.root ? Te : this.root).ea(0, Gb(b), b, c, a);
  return b === this.root ? this : new bf(this.p, a.ca ? this.k + 1 : this.k, b, this.X, this.$, null);
};
k.Q = function() {
  if (0 < this.k) {
    var a = null != this.root ? this.root.Na() : null;
    return this.X ? N(new V(null, 2, 5, W, [null, this.$], null), a) : a;
  }
  return null;
};
k.R = function(a, b) {
  return new bf(b, this.k, this.root, this.X, this.$, this.o);
};
k.N = function(a, b) {
  if (pc(b)) {
    return Ka(this, z.a(b, 0), z.a(b, 1));
  }
  for (var c = this, d = H(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (pc(e)) {
      c = Ka(c, z.a(e, 0), z.a(e, 1)), d = L(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.J(null, c);
      case 3:
        return this.K(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return this.J(null, c);
  };
  a.c = function(a, c, d) {
    return this.K(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(xa(b)));
};
k.b = function(a) {
  return this.J(null, a);
};
k.a = function(a, b) {
  return this.K(null, a, b);
};
var fc = new bf(null, 0, null, !1, null, 0);
function cf(a, b, c, d, e) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.X = d;
  this.$ = e;
  this.t = 56;
  this.l = 258;
}
k = cf.prototype;
k.Ma = function(a, b, c) {
  return df(this, b, c);
};
k.Ra = function(a, b) {
  var c;
  a: {
    if (this.v) {
      if (b ? b.l & 2048 || b.mb || (b.l ? 0 : v(Oa, b)) : v(Oa, b)) {
        c = df(this, Le.b ? Le.b(b) : Le.call(null, b), Me.b ? Me.b(b) : Me.call(null, b));
        break a;
      }
      c = H(b);
      for (var d = this;;) {
        var e = I(c);
        if (u(e)) {
          c = L(c), d = df(d, Le.b ? Le.b(e) : Le.call(null, e), Me.b ? Me.b(e) : Me.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
k.Sa = function() {
  var a;
  if (this.v) {
    this.v = null, a = new bf(null, this.count, this.root, this.X, this.$, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.J = function(a, b) {
  return null == b ? this.X ? this.$ : null : null == this.root ? null : this.root.Ba(0, Gb(b), b);
};
k.K = function(a, b, c) {
  return null == b ? this.X ? this.$ : c : null == this.root ? c : this.root.Ba(0, Gb(b), b, c);
};
k.S = function() {
  if (this.v) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function df(a, b, c) {
  if (a.v) {
    if (null == b) {
      a.$ !== c && (a.$ = c), a.X || (a.count += 1, a.X = !0);
    } else {
      var d = new Ne;
      b = (null == a.root ? Te : a.root).fa(a.v, 0, Gb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ca && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var sd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H(a);
    for (var b = jb(fc);;) {
      if (a) {
        var e = L(L(a)), b = kd.c(b, I(a), I(L(a)));
        a = e;
      } else {
        return lb(b);
      }
    }
  }
  a.q = 0;
  a.m = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
function Le(a) {
  return Pa(a);
}
function Me(a) {
  return Qa(a);
}
function Vc(a) {
  if (a && (a.t & 4096 || a.ob)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + y.b(a));
}
function ef(a, b, c, d, e, f, g) {
  var h = ia;
  try {
    ia = null == ia ? null : ia - 1;
    if (null != ia && 0 > ia) {
      return E(a, "#");
    }
    E(a, c);
    H(g) && (b.c ? b.c(I(g), a, f) : b.call(null, I(g), a, f));
    for (var l = L(g), m = sa.b(f) - 1;;) {
      if (!l || null != m && 0 === m) {
        H(l) && 0 === m && (E(a, d), E(a, "..."));
        break;
      } else {
        E(a, d);
        b.c ? b.c(I(l), a, f) : b.call(null, I(l), a, f);
        var n = L(l);
        c = m - 1;
        l = n;
        m = c;
      }
    }
    return E(a, e);
  } finally {
    ia = h;
  }
}
var ff = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = H(b), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.I(null, h);
        E(a, l);
        h += 1;
      } else {
        if (e = H(e)) {
          f = e, qc(f) ? (e = sb(f), g = tb(f), f = e, l = O(e), e = g, g = l) : (l = I(f), E(a, l), e = L(f), f = null, g = 0), h = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.q = 1;
  a.m = function(a) {
    var d = I(a);
    a = K(a);
    return b(d, a);
  };
  a.h = b;
  return a;
}(), gf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function hf(a) {
  return'"' + y.b(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return gf[a];
  })) + '"';
}
var lf = function jf(b, c, d) {
  if (null == b) {
    return E(c, "nil");
  }
  if (void 0 === b) {
    return E(c, "#\x3cundefined\x3e");
  }
  u(function() {
    var c = Q.a(d, oa);
    return u(c) ? (c = b ? b.l & 131072 || b.nb ? !0 : b.l ? !1 : v(Va, b) : v(Va, b)) ? nc(b) : c : c;
  }()) && (E(c, "^"), jf(nc(b), c, d), E(c, " "));
  if (null == b) {
    return E(c, "nil");
  }
  if (b.wb) {
    return b.Hb(b, c, d);
  }
  if (b && (b.l & 2147483648 || b.P)) {
    return b.G(null, c, d);
  }
  if (ua(b) === Boolean || "number" === typeof b) {
    return E(c, "" + y.b(b));
  }
  if (null != b && b.constructor === Object) {
    return E(c, "#js "), kf.j ? kf.j(Id.a(function(c) {
      return new V(null, 2, 5, W, [Wc.b(c), b[c]], null);
    }, rc(b)), jf, c, d) : kf.call(null, Id.a(function(c) {
      return new V(null, 2, 5, W, [Wc.b(c), b[c]], null);
    }, rc(b)), jf, c, d);
  }
  if (b instanceof Array) {
    return ef(c, jf, "#js [", " ", "]", d, b);
  }
  if ("string" == typeof b) {
    return u(na.b(d)) ? E(c, hf(b)) : E(c, b);
  }
  if (hc(b)) {
    return ff.h(c, M(["#\x3c", "" + y.b(b), "\x3e"], 0));
  }
  if (b instanceof Date) {
    var e = function(b, c) {
      for (var d = "" + y.b(b);;) {
        if (O(d) < c) {
          d = "0" + y.b(d);
        } else {
          return d;
        }
      }
    };
    return ff.h(c, M(['#inst "', "" + y.b(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
  }
  return b instanceof RegExp ? ff.h(c, M(['#"', b.source, '"'], 0)) : (b ? b.l & 2147483648 || b.P || (b.l ? 0 : v(gb, b)) : v(gb, b)) ? hb(b, c, d) : ff.h(c, M(["#\x3c", "" + y.b(b), "\x3e"], 0));
};
function mf(a, b) {
  var c = new ga;
  a: {
    var d = new xb(c);
    lf(I(a), d, b);
    for (var e = H(L(a)), f = null, g = 0, h = 0;;) {
      if (h < g) {
        var l = f.I(null, h);
        E(d, " ");
        lf(l, d, b);
        h += 1;
      } else {
        if (e = H(e)) {
          f = e, qc(f) ? (e = sb(f), g = tb(f), f = e, l = O(e), e = g, g = l) : (l = I(f), E(d, " "), lf(l, d, b), e = L(f), f = null, g = 0), h = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var Gd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = ja();
    return null == a || ta(H(a)) ? "" : "" + y.b(mf(a, b));
  }
  a.q = 0;
  a.m = function(a) {
    a = H(a);
    return b(a);
  };
  a.h = b;
  return a;
}();
function kf(a, b, c, d) {
  return ef(c, function(a, c, d) {
    b.c ? b.c(Pa(a), c, d) : b.call(null, Pa(a), c, d);
    E(c, " ");
    return b.c ? b.c(Qa(a), c, d) : b.call(null, Qa(a), c, d);
  }, "{", ", ", "}", d, H(a));
}
Lb.prototype.P = !0;
Lb.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
Xc.prototype.P = !0;
Xc.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
$e.prototype.P = !0;
$e.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
He.prototype.P = !0;
He.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
de.prototype.P = !0;
de.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
Uc.prototype.P = !0;
Uc.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
bf.prototype.P = !0;
bf.prototype.G = function(a, b, c) {
  return kf(this, lf, b, c);
};
af.prototype.P = !0;
af.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
fe.prototype.P = !0;
fe.prototype.G = function(a, b, c) {
  return ef(b, lf, "[", " ", "]", c, this);
};
bd.prototype.P = !0;
bd.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
rd.prototype.P = !0;
rd.prototype.G = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  lf(this.state, b, c);
  return E(b, "\x3e");
};
V.prototype.P = !0;
V.prototype.G = function(a, b, c) {
  return ef(b, lf, "[", " ", "]", c, this);
};
Sc.prototype.P = !0;
Sc.prototype.G = function(a, b) {
  return E(b, "()");
};
ka.prototype.P = !0;
ka.prototype.G = function(a, b, c) {
  return kf(this, lf, b, c);
};
Rc.prototype.P = !0;
Rc.prototype.G = function(a, b, c) {
  return ef(b, lf, "(", " ", ")", c, this);
};
V.prototype.Oa = !0;
V.prototype.Pa = function(a, b) {
  return vc.a(this, b);
};
fe.prototype.Oa = !0;
fe.prototype.Pa = function(a, b) {
  return vc.a(this, b);
};
R.prototype.Oa = !0;
R.prototype.Pa = function(a, b) {
  return Ib(this, b);
};
Kb.prototype.Oa = !0;
Kb.prototype.Pa = function(a, b) {
  return Ib(this, b);
};
function nf(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  if ("undefined" == typeof d) {
    throw Error("[goog.string.format] Template required");
  }
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, h, l, m, n, p) {
    if ("%" == m) {
      return "%";
    }
    var q = c.shift();
    if ("undefined" == typeof q) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = q;
    return of[m].apply(null, arguments);
  });
}
var of = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a;
}, f:function(a, b, c, d, e) {
  d = a.toString();
  isNaN(e) || "" == e || (d = a.toFixed(e));
  var f;
  f = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = f + d);
  if (isNaN(c) || d.length >= c) {
    return d;
  }
  d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
  a = c - d.length - f.length;
  return d = 0 <= b.indexOf("-", 0) ? f + d + Array(a + 1).join(" ") : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d;
}, d:function(a, b, c, d, e, f, g, h) {
  return of.f(parseInt(a, 10), b, c, d, 0, f, g, h);
}};
of.i = of.d;
of.u = of.d;
var pf = new R(null, "y", "y", -1757859776), qf = new R(null, "fw", "fw", -2145665918), oa = new R(null, "meta", "meta", 1499536964), rf = new R(null, "color", "color", 1011675173), pa = new R(null, "dup", "dup", 556298533), sf = new R(null, "dir", "dir", 1734754661), tf = new R(null, "speed", "speed", 1257663751), uf = new R(null, "rays", "rays", 982661575), td = new R(null, "validator", "validator", -1966190681), vf = new R(null, "w", "w", 354169001), wf = new R(null, "eye", "eye", -1788770007), 
xf = new R(null, "pos", "pos", -864607220), ma = new R(null, "flush-on-newline", "flush-on-newline", -151457939), yf = new R(null, "fov", "fov", -12463282), zf = new R(null, "s", "s", 1705939918), na = new R(null, "readably", "readably", 1129599760), Af = new R(null, "fps", "fps", 683533296), Bf = new R(null, "org", "org", 1495985), Cf = new R(null, "h", "h", 1109658740), sa = new R(null, "print-length", "print-length", 1931866356), Df = new R(null, "len", "len", 1423657078), Ef = new R(null, "timer-start", 
"timer-start", -1035768522), Ff = new R(null, "right", "right", -452581833), Gf = new R(null, "side", "side", 389652279), Hf = new R(null, "d", "d", 1972142424), gg = new R(null, "x", "x", 2099068185), hg = new R(null, "seq", "seq", -1817803783), ig = new R(null, "end", "end", -268185958), jg = new R(null, "turn-speed", "turn-speed", 1171307229), kg = new R(null, "a", "a", -2123407586), lg = new R(null, "left", "left", -399115937), mg = new R(null, "data", "data", -232669377);
var qd;
a: {
  var ng = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 
  0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 
  0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 
  1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 0, 0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 3, 1, 1, 1, 1, 1, 1, 1, 
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], og = ng.length;
  if (32 > og) {
    qd = new V(null, og, 5, W, ng, null);
  } else {
    for (var pg = 32, qg = (new V(null, 32, 5, W, ng.slice(0, 32), null)).Ka(null);;) {
      if (pg < og) {
        var rg = pg + 1, sg = jd.a(qg, ng[pg]), pg = rg, qg = sg
      } else {
        qd = lb(qg);
        break a;
      }
    }
    qd = void 0;
  }
}
var tg = new ka(null, 2, [mg, Md.a(cc, function() {
  var a = pd(function(a, c) {
    return new V(null, 2, 5, W, [a, c], null);
  });
  return Ld.a(function() {
    return function(a) {
      return md.a(P.a(a, 1), 0);
    };
  }(a), a);
}()), Gf, 32], null), ug = Md.a(cc, Id.a(function(a) {
  return Md.a(cc, a);
}, Nd.a(32, qd)));
function vg(a) {
  switch(a) {
    case 1:
      return "#3c5068";
    case 2:
      return "#ed405c";
    case 3:
      return "#6f8cac";
    case 4:
      return "#434180";
    case 5:
      return "#2a3b4d";
    default:
      return "black";
  }
}
function wg(a) {
  var b = X, c = xg, d = vf.b(c) / 32, e = gg.b(c), f = pf.b(c), c = e + d * P.a(Bf.b(a), 0), g = f + d * P.a(Bf.b(a), 1), e = e + d * P.a(ig.b(a), 0);
  a = f + d * P.a(ig.b(a), 1);
  b.save();
  b.translate(.5, .5);
  b.beginPath();
  b.lineWidth = 1;
  b.strokeStyle = "white";
  b.moveTo(c, g);
  b.lineTo(e, a);
  b.stroke();
  b.restore();
}
;var Y = ud.b ? ud.b(new ka(null, 8, [vf, !1, kg, !1, zf, !1, Hf, !1, lg, !1, Ff, !1, yf, 60, uf, 128], null)) : ud.call(null, new ka(null, 8, [vf, !1, kg, !1, zf, !1, Hf, !1, lg, !1, Ff, !1, yf, 60, uf, 128], null));
function yg(a) {
  return a + 1;
}
function zg(a) {
  return a - 1;
}
function Ag(a) {
  return 512 > a ? 2 * a : a;
}
function Bg(a) {
  return 16 < a ? a / 2 : a;
}
window.onkeydown = function(a) {
  var b = Wb.b ? Wb.b(Y) : Wb.call(null, Y), c = a.keyCode;
  return u(F.a ? F.a(87, c) : F.call(null, 87, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [vf], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [vf], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : u(F.a ? F.a(65, c) : F.call(null, 65, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [kg], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [kg], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : u(F.a ? F.a(83, c) : F.call(null, 83, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [zf], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [zf], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : u(F.a ? F.a(68, c) : F.call(null, 68, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [Hf], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [Hf], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : u(F.a ? F.a(37, c) : F.call(null, 37, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [lg], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [lg], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : u(F.a ? F.a(39, c) : F.call(null, 39, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [Ff], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [Ff], null), function() {
    return function() {
      return!0;
    };
  }(F, c, b))) : u(F.a ? F.a(73, c) : F.call(null, 73, c)) ? T.a ? T.a(Y, U.j(b, new V(null, 1, 5, W, [yf], null), yg, yf.b(b))) : T.call(null, Y, U.j(b, new V(null, 1, 5, W, [yf], null), yg, yf.b(b))) : u(F.a ? F.a(79, c) : F.call(null, 79, c)) ? T.a ? T.a(Y, U.j(b, new V(null, 1, 5, W, [yf], null), zg, yf.b(b))) : T.call(null, Y, U.j(b, new V(null, 1, 5, W, [yf], null), zg, yf.b(b))) : u(F.a ? F.a(75, c) : F.call(null, 75, c)) ? T.a ? T.a(Y, U.j(b, new V(null, 1, 5, W, [uf], null), Ag, uf.b(b))) : 
  T.call(null, Y, U.j(b, new V(null, 1, 5, W, [uf], null), Ag, uf.b(b))) : u(F.a ? F.a(76, c) : F.call(null, 76, c)) ? T.a ? T.a(Y, U.j(b, new V(null, 1, 5, W, [uf], null), Bg, uf.b(b))) : T.call(null, Y, U.j(b, new V(null, 1, 5, W, [uf], null), Bg, uf.b(b))) : a;
};
window.onkeyup = function(a) {
  var b = Wb.b ? Wb.b(Y) : Wb.call(null, Y), c = a.keyCode;
  return u(F.a ? F.a(87, c) : F.call(null, 87, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [vf], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [vf], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : u(F.a ? F.a(65, c) : F.call(null, 65, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [kg], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [kg], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : u(F.a ? F.a(83, c) : F.call(null, 83, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [zf], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [zf], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : u(F.a ? F.a(68, c) : F.call(null, 68, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [Hf], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [Hf], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : u(F.a ? F.a(37, c) : F.call(null, 37, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [lg], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [lg], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : u(F.a ? F.a(39, c) : F.call(null, 39, c)) ? T.a ? T.a(Y, U.c(b, new V(null, 1, 5, W, [Ff], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : T.call(null, Y, U.c(b, new V(null, 1, 5, W, [Ff], null), function() {
    return function() {
      return!1;
    };
  }(F, c, b))) : a;
};
function Cg(a, b) {
  var c = b * Math.PI / 180, d = Math.cos(c), c = Math.sin(c), e = -1 * c, f = P.a(a, 0), g = P.a(a, 1);
  return new V(null, 2, 5, W, [d * f + e * g, c * f + d * g], null);
}
;var Dg = new ka(null, 4, [gg, 0, pf, 0, vf, 0, Cf, 0], null), Eg = new ka(null, 6, [Bf, new V(null, 2, 5, W, [0, 0], null), ig, new V(null, 2, 5, W, [0, 0], null), sf, new V(null, 2, 5, W, [0, 0], null), Df, 0, hg, 0, rf, 0], null);
var X = document.getElementById("surface").getContext("2d"), Fg = new ka(null, 4, [gg, .5, pf, 0, vf, 512, Cf, 512], null), xg = new ka(null, 4, [gg, 512, pf, 0, vf, 512, Cf, 512], null), Gg = new ka(null, 4, [gg, 0, pf, 0, vf, 1024, Cf, 512], null), Hg = new ka(null, 7, [xf, new V(null, 2, 5, W, [64, 64], null), sf, new V(null, 2, 5, W, [0, 0], null), qf, new V(null, 2, 5, W, [1, 0], null), yf, 60, uf, 128, tf, 50, jg, 40], null), Ig = ud.b ? ud.b(new ka(null, 4, [Ef, Date.now(), wf, Hg, uf, cc, 
Af, 0], null)) : ud.call(null, new ka(null, 4, [Ef, Date.now(), wf, Hg, uf, cc, Af, 0], null));
function Jg() {
  var a = Wb.b ? Wb.b(Ig) : Wb.call(null, Ig), b = Wb.b ? Wb.b(Y) : Wb.call(null, Y), c = Date.now(), d = c - Ef.b(a), e, f = wf.b(a), g, h = lg.b(b), l = Ff.b(b);
  g = u(u(h) ? ta(l) : h) ? -1 : u(u(l) ? ta(h) : l) ? 1 : ta(u(l) ? l : h) ? 0 : u(u(l) ? h : l) ? 0 : null;
  var m = yf.b(b), n = uf.b(b), p, q = qf.b(f), s = jg.b(f);
  p = Cg(q, d / 1E3 * g * s);
  var t, w = u(kg.b(b)) ? Cg(p, -90) : new V(null, 2, 5, W, [0, 0], null), C = u(Hf.b(b)) ? Cg(p, 90) : new V(null, 2, 5, W, [0, 0], null), G = u(vf.b(b)) ? p : new V(null, 2, 5, W, [0, 0], null), J = u(zf.b(b)) ? Cg(p, 180) : new V(null, 2, 5, W, [0, 0], null);
  var S = Id.h(Ac, w, C, G, M([J], 0)), $ = P.a(S, 0), Ga = P.a(S, 1);
  if (F.a($, 0) || F.a(Ga, 0)) {
    t = S;
  } else {
    var B = Math.sqrt($ * $ + Ga * Ga);
    t = new V(null, 2, 5, W, [1 / B * $, 1 / B * Ga], null);
  }
  var We = xf.b(f), Z = tf.b(f), aa = P.a(We, 0), ca = P.a(We, 1), da = d / 1E3 * Z, ha = da * P.a(t, 0), la = da * P.a(t, 1);
  e = gc.h(f, xf, new V(null, 2, 5, W, [aa + ha, ca + la], null), M([sf, t, qf, p, uf, n, yf, m], 0));
  var qa = P.a(xf.b(e), 0), va = P.a(xf.b(e), 1), ra;
  a: {
    for (var Aa = new V(null, 2, 5, W, [qa / 16, va / 16], null), Ea = qf.b(e), Fa = yf.b(e), La = uf.b(e), Sa = Fa / 2 * -1, Xa = Fa / La, mb = Cg(Ea, Sa), Ma = 0, nb = cc;;) {
      var sc = Cg(mb, Ma * Xa), Ub, Vb = Aa, lc = sc, Kg = Ma, Lg = Sa + Ma * Xa, If = ug, vd = void 0;
      b: {
        for (var wd = Vb;;) {
          var ie, xd = wd, Jf = lc, Kf = ie = gc.h(Dg, gg, 0 < P.a(Jf, 0) ? P.a(xd, 0) | 0 : Math.ceil(P.a(xd, 0) - 1), M([pf, 0 < P.a(Jf, 1) ? P.a(xd, 1) | 0 : Math.ceil(P.a(xd, 1) - 1), vf, 1, Cf, 1], 0)), Mg = P.a(If, pf.b(Kf)), Ng = P.a(Mg, gg.b(Kf));
          if (md.a(Ng, 0) || F.a(P.a(lc, 0), 0) && F.a(P.a(lc, 1), 0)) {
            vd = new V(null, 2, 5, W, [wd, ie], null);
            break b;
          }
          var mc = ie, Lf = wd, Mf = lc, je = P.a(Lf, 0), ke = P.a(Lf, 1), Og = 0 > P.a(Mf, 0) ? gg.b(mc) - je : gg.b(mc) + vf.b(mc) - je, Pg = 0 > P.a(Mf, 1) ? pf.b(mc) - ke : pf.b(mc) + Cf.b(mc) - ke, yd = gc.h(Dg, gg, je, M([pf, ke, vf, Og, Cf, Pg], 0)), Nf = lc, le = P.a(Nf, 0), zd = P.a(Nf, 1), me = vf.b(yd), Ad = Cf.b(yd), Of = Math.abs(Math.asin(Ad / Math.sqrt(me * me + Ad * Ad))), Pf = Math.abs(Math.asin(zd)), Qf = Pf <= Of && md.a(le, 0) ? me / le : Pf > Of && md.a(zd, 0) ? Ad / zd : 1, 
          wd = new V(null, 2, 5, W, [gg.b(yd) + le * Qf, pf.b(yd) + zd * Qf], null);
        }
        vd = void 0;
      }
      var ne = P.a(vd, 0), Rf = P.a(vd, 1), Sf = void 0, Qg = gg.b(Rf), Rg = pf.b(Rf), Sf = P.a(P.a(If, Rg), Qg), Tf = P.a(Vb, 0) - P.a(ne, 0), Uf = P.a(Vb, 1) - P.a(ne, 1);
      Ub = gc.h(Eg, Bf, Vb, M([ig, ne, sf, lc, Df, Math.sqrt(Tf * Tf + Uf * Uf) * Math.cos(Lg * Math.PI / 180), hg, Kg, rf, Sf], 0));
      if (F.a(Ma, La)) {
        ra = dc.a(nb, Ub);
        break a;
      }
      var Sg = Ma + 1, Tg = dc.a(nb, Ub), Ma = Sg, nb = Tg;
    }
    ra = void 0;
  }
  var Mb = gc.h(a, Ef, c, M([wf, e, uf, ra, Af, 1E3 / d], 0));
  X.clearRect(0, 0, 1024, 512);
  a: {
    X.save();
    for (var oe = H(mg.b(tg)), pe = null, qe = 0, Dc = 0;;) {
      if (Dc < qe) {
        var Ec = pe.I(null, Dc), Vf = P.a(Ec, 0), Ug = P.a(Ec, 1), re = Gf.b(tg), Bd = vf.b(xg) / re, Vg = gg.b(xg) + Bd * Oc(Vf, re), Wg = pf.b(xg) + Bd * (Vf / re | 0);
        X.beginPath();
        X.rect(Vg, Wg, Bd, Bd);
        X.fillStyle = vg(Ug);
        X.fill();
        X.restore();
        Dc += 1;
      } else {
        var Wf = H(oe);
        if (Wf) {
          var Fc = Wf;
          if (qc(Fc)) {
            var Xf = sb(Fc), Xg = tb(Fc), Yg = Xf, Zg = O(Xf), oe = Xg, pe = Yg, qe = Zg
          } else {
            var Ec = I(Fc), Yf = P.a(Ec, 0), $g = P.a(Ec, 1), se = Gf.b(tg), Cd = vf.b(xg) / se, ah = gg.b(xg) + Cd * Oc(Yf, se), bh = pf.b(xg) + Cd * (Yf / se | 0);
            X.beginPath();
            X.rect(ah, bh, Cd, Cd);
            X.fillStyle = vg($g);
            X.fill();
            X.restore();
            oe = L(Fc);
            pe = null;
            qe = 0;
          }
          Dc = 0;
        } else {
          break a;
        }
      }
    }
  }
  a: {
    for (var ch = uf.b(Mb), te = H(ch), ue = null, ve = 0, Gc = 0;;) {
      if (Gc < ve) {
        var we = ue.I(null, Gc);
        wg(we);
        Gc += 1;
      } else {
        var Zf = H(te);
        if (Zf) {
          var Hc = Zf;
          if (qc(Hc)) {
            var $f = sb(Hc), dh = tb(Hc), eh = $f, fh = O($f), te = dh, ue = eh, ve = fh
          } else {
            we = I(Hc), wg(we), te = L(Hc), ue = null, ve = 0;
          }
          Gc = 0;
        } else {
          break a;
        }
      }
    }
  }
  var gh = gg.b(Fg), ag = Cf.b(Fg) / 2, hh = vf.b(Fg);
  X.save();
  X.rect(gh, ag, hh, ag);
  X.fillStyle = "grey";
  X.fill();
  X.restore();
  a: {
    var bg = uf.b(Mb);
    X.save();
    var cg = gg.b(Fg);
    pf.b(Fg);
    for (var Dd = Cf.b(Fg), ih = vf.b(Fg), jh = O(bg), rb = ih / jh, xe = H(bg), ye = null, ze = 0, Ic = 0;;) {
      if (Ic < ze) {
        var Nb = ye.I(null, Ic), kh = hg.b(Nb), lh = rf.b(Nb), Ed = Dd / Df.b(Nb), Jc = Math.ceil(cg + kh * rb), Kc = (Dd - Ed) / 2;
        X.beginPath();
        X.fillStyle = vg(lh);
        X.rect(Jc, Kc, rb, Ed);
        X.fill();
        X.closePath();
        X.beginPath();
        X.lineWidth = 1;
        X.strokeStyle = "black";
        X.moveTo(Jc, Kc);
        X.lineTo(Jc + rb, Kc);
        X.stroke();
        X.closePath();
        X.beginPath();
        X.moveTo(Jc, Kc + Ed);
        X.lineTo(Jc + rb, Ed + Kc);
        X.stroke();
        X.closePath();
        X.restore();
        Ic += 1;
      } else {
        var dg = H(xe);
        if (dg) {
          var Lc = dg;
          if (qc(Lc)) {
            var eg = sb(Lc), mh = tb(Lc), nh = eg, oh = O(eg), xe = mh, ye = nh, ze = oh
          } else {
            var Nb = I(Lc), ph = hg.b(Nb), qh = rf.b(Nb), Fd = Dd / Df.b(Nb), Mc = Math.ceil(cg + ph * rb), Nc = (Dd - Fd) / 2;
            X.beginPath();
            X.fillStyle = vg(qh);
            X.rect(Mc, Nc, rb, Fd);
            X.fill();
            X.closePath();
            X.beginPath();
            X.lineWidth = 1;
            X.strokeStyle = "black";
            X.moveTo(Mc, Nc);
            X.lineTo(Mc + rb, Nc);
            X.stroke();
            X.closePath();
            X.beginPath();
            X.moveTo(Mc, Nc + Fd);
            X.lineTo(Mc + rb, Fd + Nc);
            X.stroke();
            X.closePath();
            X.restore();
            xe = L(Lc);
            ye = null;
            ze = 0;
          }
          Ic = 0;
        } else {
          break a;
        }
      }
    }
  }
  var fg = wf.b(Mb);
  X.save();
  X.beginPath();
  X.rect(gg.b(xg) + P.a(xf.b(fg), 0), pf.b(xg) + P.a(xf.b(fg), 1), 1, 1);
  X.fillStyle = "red";
  X.fill();
  X.restore();
  var Ae = new ka(null, 3, [Af, Af.b(Mb), yf, yf.b(wf.b(Mb)), uf, uf.b(wf.b(Mb))], null), rh = Af.b(Ae), sh = uf.b(Ae), th = yf.b(Ae), uh = gg.b(Fg), vh = pf.b(Fg);
  X.save();
  X.font = "14px Sans";
  X.fillStyle = "white";
  X.fillText(nf("fps: %.2f,  fov: %d\u00b0,  rays: %d", rh, th, sh), uh + 20, vh + 35);
  X.restore();
  var wh = gg.b(Gg), xh = pf.b(Gg), yh = vf.b(Gg), zh = Cf.b(Gg);
  X.save();
  X.beginPath();
  X.rect(wh, xh, yh, zh);
  X.lineWidth = 1;
  X.strokeStyle = "white";
  X.stroke();
  X.restore();
  return Mb;
}
window.requestAnimationFrame(function Ah() {
  T.a ? T.a(Ig, Jg()) : T.call(null, Ig, Jg());
  return window.requestAnimationFrame(Ah);
});

})();

//# sourceMappingURL=cljs.js.map