!function(e) {
    var n = {};
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    t.m = e,
    t.c = n,
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }
    ,
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    t.t = function(e, n) {
        if (1 & n && (e = t(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (t.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var o in e)
                t.d(r, o, function(n) {
                    return e[n]
                }
                .bind(null, o));
        return r
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    t.p = "/bxflux/popup_plugin/bx_popup_showmore/",
    t(t.s = 39)
}([function(e, n, t) {
    var r, o;
    /*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
    !function(i) {
        if (void 0 === (o = "function" == typeof (r = i) ? r.call(n, t, n, e) : r) || (e.exports = o),
        !0,
        e.exports = i(),
        !!0) {
            var a = window.Cookies
              , s = window.Cookies = i();
            s.noConflict = function() {
                return window.Cookies = a,
                s
            }
        }
    }((function() {
        function e() {
            for (var e = 0, n = {}; e < arguments.length; e++) {
                var t = arguments[e];
                for (var r in t)
                    n[r] = t[r]
            }
            return n
        }
        function n(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function t(r) {
            function o() {}
            function i(n, t, i) {
                if ("undefined" != typeof document) {
                    "number" == typeof (i = e({
                        path: "/"
                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)),
                    i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        var a = JSON.stringify(t);
                        /^[\{\[]/.test(a) && (t = a)
                    } catch (e) {}
                    t = r.write ? r.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var s = "";
                    for (var c in i)
                        i[c] && (s += "; " + c,
                        !0 !== i[c] && (s += "=" + i[c].split(";")[0]));
                    return document.cookie = n + "=" + t + s
                }
            }
            function a(e, t) {
                if ("undefined" != typeof document) {
                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                        var s = i[a].split("=")
                          , c = s.slice(1).join("=");
                        t || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var f = n(s[0]);
                            if (c = (r.read || r)(c, f) || n(c),
                            t)
                                try {
                                    c = JSON.parse(c)
                                } catch (e) {}
                            if (o[f] = c,
                            e === f)
                                break
                        } catch (e) {}
                    }
                    return e ? o[e] : o
                }
            }
            return o.set = i,
            o.get = function(e) {
                return a(e, !1)
            }
            ,
            o.getJSON = function(e) {
                return a(e, !0)
            }
            ,
            o.remove = function(n, t) {
                i(n, "", e(t, {
                    expires: -1
                }))
            }
            ,
            o.defaults = {},
            o.withConverter = t,
            o
        }((function() {}
        ))
    }
    ))
}
, function(e, n) {
    e.exports = function(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t,
        e
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAG4CAMAAAAJ2vXSAAAAM1BMVEUAAADhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyzhKyyLt94qAAAAEHRSTlMAQIDA8CDQ4BCQMKBwYLBQphg7RQAAA1hJREFUeNrtm8tu4zAMRSVRb1sO//9rp6aFKrPy5QCdNAHPot4cuJRjkBLDOOMT6d77iqkh8gmle7VmnsRxf19e3N67yE2byO0uCrGCo/OSb2T/LLPJJuvkhUjtelPpTt7Ejnwy7uTE3xR3iy/TpeTuqTtlLrQ7wzA+kSFJDGNnWPbEqBwyMywz/5QcwrZkxNfI3mST/7ucwol3hmH8fpL3vmNqJT6Jod67vfAk39sHf7NhR492hVKRzUOZCcwjxZXmP9gxeUB3HvRFc1nkrsi5xUFkPEHPiGNF3BoVN26KiBMLHpJJ3Aa5D83qisgPxeoOyO0stHCiaTrx62QfnnCGYfx2uv8iaVrmXAaa6rDMn/iJBCXnvOEFloO7LpDsL5k0crvdHp3UChfCFK7eQkmA7NcWCZY5aGTeHULPIh9QlUhd9ZxfLA+xxpSxo26F9qKVNT3zwd9sWNsLfzf8RsyZ9uoMw/g0dlYcmLJCTqyQd42cFXLiJUNRxEvGojhAOUlv45KhKLYpQ1EMUK6nlUB5yIkblI8zZFQ+JQok8jbu5QW9TA7C3zGDO4lXymtf5QzD+Bz4idfJXi97J8ByguWdmDl7VcxeIx+QHI/rAslh7mbArz7pkiF08juNn6nkJBLVjMiuiBWxs/SDF8nBp/QCbZ+vWbVm527DeAukaY6pj5lnGuAGRXNv8KJBKb+EKJFAWTTMDn7H8vM8qGDybIdDchrXHBAiH7K+DZAXu0ZmSC6+4I+uuU3z6MLbyQ2S55RAnoW+KubMyd3QI7AJXHaeany4e6rVbsP4TPgbehvZn+RLxlhFEx1K2jF5aJoATXOCzVetwGDF+rxmfbtmfYdmfUWxvqRZ30OzviBy/4EOhLikeeWa5iMZ1i83jA/Ew3PmdWN4zrxmRYXdePGAamtsUIpO04qKESNHiJymnEWGYj4cywUr21mW2fER/SIuemprSMGE7XRFsLPmd/TljdrgKrk/v3URejc4Yu/G4IV3sB2R8t0bFc60W/U2jLcAr91uj/CceSXFb6UDLwZWu4OiHLeZctMbtWd/TiZHiJzWN+kiQwOBmNyfy5VHvqiJLcDjhgkcz+p0Mv7pOWM7xg2q3UXs629T7L5icrCdkXqcGkUuNmf+ifwBDSV+mES2An4AAAAASUVORK5CYII="
}
, function(e, n, t) {
    "use strict";
    var r = t(21)
      , o = t(22)
      , i = t(7);
    e.exports = {
        formats: i,
        parse: o,
        stringify: r
    }
}
, function(e, n, t) {
    "use strict";
    var r = Object.prototype.hasOwnProperty
      , o = Array.isArray
      , i = function() {
        for (var e = [], n = 0; n < 256; ++n)
            e.push("%" + ((n < 16 ? "0" : "") + n.toString(16)).toUpperCase());
        return e
    }()
      , a = function(e, n) {
        for (var t = n && n.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)
            void 0 !== e[r] && (t[r] = e[r]);
        return t
    };
    e.exports = {
        arrayToObject: a,
        assign: function(e, n) {
            return Object.keys(n).reduce((function(e, t) {
                return e[t] = n[t],
                e
            }
            ), e)
        },
        combine: function(e, n) {
            return [].concat(e, n)
        },
        compact: function(e) {
            for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], t = [], r = 0; r < n.length; ++r)
                for (var i = n[r], a = i.obj[i.prop], s = Object.keys(a), c = 0; c < s.length; ++c) {
                    var f = s[c]
                      , u = a[f];
                    "object" == typeof u && null !== u && -1 === t.indexOf(u) && (n.push({
                        obj: a,
                        prop: f
                    }),
                    t.push(u))
                }
            return function(e) {
                for (; e.length > 1; ) {
                    var n = e.pop()
                      , t = n.obj[n.prop];
                    if (o(t)) {
                        for (var r = [], i = 0; i < t.length; ++i)
                            void 0 !== t[i] && r.push(t[i]);
                        n.obj[n.prop] = r
                    }
                }
            }(n),
            e
        },
        decode: function(e, n, t) {
            var r = e.replace(/\+/g, " ");
            if ("iso-8859-1" === t)
                return r.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
                return decodeURIComponent(r)
            } catch (e) {
                return r
            }
        },
        encode: function(e, n, t) {
            if (0 === e.length)
                return e;
            var r = e;
            if ("symbol" == typeof e ? r = Symbol.prototype.toString.call(e) : "string" != typeof e && (r = String(e)),
            "iso-8859-1" === t)
                return escape(r).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                    return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                }
                ));
            for (var o = "", a = 0; a < r.length; ++a) {
                var s = r.charCodeAt(a);
                45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? o += r.charAt(a) : s < 128 ? o += i[s] : s < 2048 ? o += i[192 | s >> 6] + i[128 | 63 & s] : s < 55296 || s >= 57344 ? o += i[224 | s >> 12] + i[128 | s >> 6 & 63] + i[128 | 63 & s] : (a += 1,
                s = 65536 + ((1023 & s) << 10 | 1023 & r.charCodeAt(a)),
                o += i[240 | s >> 18] + i[128 | s >> 12 & 63] + i[128 | s >> 6 & 63] + i[128 | 63 & s])
            }
            return o
        },
        isBuffer: function(e) {
            return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
        },
        isRegExp: function(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        },
        maybeMap: function(e, n) {
            if (o(e)) {
                for (var t = [], r = 0; r < e.length; r += 1)
                    t.push(n(e[r]));
                return t
            }
            return n(e)
        },
        merge: function e(n, t, i) {
            if (!t)
                return n;
            if ("object" != typeof t) {
                if (o(n))
                    n.push(t);
                else {
                    if (!n || "object" != typeof n)
                        return [n, t];
                    (i && (i.plainObjects || i.allowPrototypes) || !r.call(Object.prototype, t)) && (n[t] = !0)
                }
                return n
            }
            if (!n || "object" != typeof n)
                return [n].concat(t);
            var s = n;
            return o(n) && !o(t) && (s = a(n, i)),
            o(n) && o(t) ? (t.forEach((function(t, o) {
                if (r.call(n, o)) {
                    var a = n[o];
                    a && "object" == typeof a && t && "object" == typeof t ? n[o] = e(a, t, i) : n.push(t)
                } else
                    n[o] = t
            }
            )),
            n) : Object.keys(t).reduce((function(n, o) {
                var a = t[o];
                return r.call(n, o) ? n[o] = e(n[o], a, i) : n[o] = a,
                n
            }
            ), s)
        }
    }
}
, function(e, n, t) {
    e.exports = function() {
        "use strict";
        var e = "millisecond"
          , n = "second"
          , t = "minute"
          , r = "hour"
          , o = "day"
          , i = "week"
          , a = "month"
          , s = "quarter"
          , c = "year"
          , f = "date"
          , u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/
          , l = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , d = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        }
          , p = function(e, n, t) {
            var r = String(e);
            return !r || r.length >= n ? e : "" + Array(n + 1 - r.length).join(t) + e
        }
          , m = {
            s: p,
            z: function(e) {
                var n = -e.utcOffset()
                  , t = Math.abs(n)
                  , r = Math.floor(t / 60)
                  , o = t % 60;
                return (n <= 0 ? "+" : "-") + p(r, 2, "0") + ":" + p(o, 2, "0")
            },
            m: function e(n, t) {
                if (n.date() < t.date())
                    return -e(t, n);
                var r = 12 * (t.year() - n.year()) + (t.month() - n.month())
                  , o = n.clone().add(r, a)
                  , i = t - o < 0
                  , s = n.clone().add(r + (i ? -1 : 1), a);
                return +(-(r + (t - o) / (i ? o - s : s - o)) || 0)
            },
            a: function(e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
            },
            p: function(u) {
                return {
                    M: a,
                    y: c,
                    w: i,
                    d: o,
                    D: f,
                    h: r,
                    m: t,
                    s: n,
                    ms: e,
                    Q: s
                }[u] || String(u || "").toLowerCase().replace(/s$/, "")
            },
            u: function(e) {
                return void 0 === e
            }
        }
          , g = "en"
          , h = {};
        h[g] = d;
        var y = function(e) {
            return e instanceof x
        }
          , b = function(e, n, t) {
            var r;
            if (!e)
                return g;
            if ("string" == typeof e)
                h[e] && (r = e),
                n && (h[e] = n,
                r = e);
            else {
                var o = e.name;
                h[o] = e,
                r = o
            }
            return !t && r && (g = r),
            r || !t && g
        }
          , v = function(e, n) {
            if (y(e))
                return e.clone();
            var t = "object" == typeof n ? n : {};
            return t.date = e,
            t.args = arguments,
            new x(t)
        }
          , w = m;
        w.l = b,
        w.i = y,
        w.w = function(e, n) {
            return v(e, {
                locale: n.$L,
                utc: n.$u,
                x: n.$x,
                $offset: n.$offset
            })
        }
        ;
        var x = function() {
            function d(e) {
                this.$L = b(e.locale, null, !0),
                this.parse(e)
            }
            var p = d.prototype;
            return p.parse = function(e) {
                this.$d = function(e) {
                    var n = e.date
                      , t = e.utc;
                    if (null === n)
                        return new Date(NaN);
                    if (w.u(n))
                        return new Date;
                    if (n instanceof Date)
                        return new Date(n);
                    if ("string" == typeof n && !/Z$/i.test(n)) {
                        var r = n.match(u);
                        if (r) {
                            var o = r[2] - 1 || 0
                              , i = (r[7] || "0").substring(0, 3);
                            return t ? new Date(Date.UTC(r[1], o, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1],o,r[3] || 1,r[4] || 0,r[5] || 0,r[6] || 0,i)
                        }
                    }
                    return new Date(n)
                }(e),
                this.$x = e.x || {},
                this.init()
            }
            ,
            p.init = function() {
                var e = this.$d;
                this.$y = e.getFullYear(),
                this.$M = e.getMonth(),
                this.$D = e.getDate(),
                this.$W = e.getDay(),
                this.$H = e.getHours(),
                this.$m = e.getMinutes(),
                this.$s = e.getSeconds(),
                this.$ms = e.getMilliseconds()
            }
            ,
            p.$utils = function() {
                return w
            }
            ,
            p.isValid = function() {
                return !("Invalid Date" === this.$d.toString())
            }
            ,
            p.isSame = function(e, n) {
                var t = v(e);
                return this.startOf(n) <= t && t <= this.endOf(n)
            }
            ,
            p.isAfter = function(e, n) {
                return v(e) < this.startOf(n)
            }
            ,
            p.isBefore = function(e, n) {
                return this.endOf(n) < v(e)
            }
            ,
            p.$g = function(e, n, t) {
                return w.u(e) ? this[n] : this.set(t, e)
            }
            ,
            p.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            p.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            p.startOf = function(e, s) {
                var u = this
                  , l = !!w.u(s) || s
                  , d = w.p(e)
                  , p = function(e, n) {
                    var t = w.w(u.$u ? Date.UTC(u.$y, n, e) : new Date(u.$y,n,e), u);
                    return l ? t : t.endOf(o)
                }
                  , m = function(e, n) {
                    return w.w(u.toDate()[e].apply(u.toDate("s"), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), u)
                }
                  , g = this.$W
                  , h = this.$M
                  , y = this.$D
                  , b = "set" + (this.$u ? "UTC" : "");
                switch (d) {
                case c:
                    return l ? p(1, 0) : p(31, 11);
                case a:
                    return l ? p(1, h) : p(0, h + 1);
                case i:
                    var v = this.$locale().weekStart || 0
                      , x = (g < v ? g + 7 : g) - v;
                    return p(l ? y - x : y + (6 - x), h);
                case o:
                case f:
                    return m(b + "Hours", 0);
                case r:
                    return m(b + "Minutes", 1);
                case t:
                    return m(b + "Seconds", 2);
                case n:
                    return m(b + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            p.endOf = function(e) {
                return this.startOf(e, !1)
            }
            ,
            p.$set = function(i, s) {
                var u, l = w.p(i), d = "set" + (this.$u ? "UTC" : ""), p = (u = {},
                u[o] = d + "Date",
                u[f] = d + "Date",
                u[a] = d + "Month",
                u[c] = d + "FullYear",
                u[r] = d + "Hours",
                u[t] = d + "Minutes",
                u[n] = d + "Seconds",
                u[e] = d + "Milliseconds",
                u)[l], m = l === o ? this.$D + (s - this.$W) : s;
                if (l === a || l === c) {
                    var g = this.clone().set(f, 1);
                    g.$d[p](m),
                    g.init(),
                    this.$d = g.set(f, Math.min(this.$D, g.daysInMonth())).$d
                } else
                    p && this.$d[p](m);
                return this.init(),
                this
            }
            ,
            p.set = function(e, n) {
                return this.clone().$set(e, n)
            }
            ,
            p.get = function(e) {
                return this[w.p(e)]()
            }
            ,
            p.add = function(e, s) {
                var f, u = this;
                e = Number(e);
                var l = w.p(s)
                  , d = function(n) {
                    var t = v(u);
                    return w.w(t.date(t.date() + Math.round(n * e)), u)
                };
                if (l === a)
                    return this.set(a, this.$M + e);
                if (l === c)
                    return this.set(c, this.$y + e);
                if (l === o)
                    return d(1);
                if (l === i)
                    return d(7);
                var p = (f = {},
                f[t] = 6e4,
                f[r] = 36e5,
                f[n] = 1e3,
                f)[l] || 1
                  , m = this.$d.getTime() + e * p;
                return w.w(m, this)
            }
            ,
            p.subtract = function(e, n) {
                return this.add(-1 * e, n)
            }
            ,
            p.format = function(e) {
                var n = this;
                if (!this.isValid())
                    return "Invalid Date";
                var t = e || "YYYY-MM-DDTHH:mm:ssZ"
                  , r = w.z(this)
                  , o = this.$locale()
                  , i = this.$H
                  , a = this.$m
                  , s = this.$M
                  , c = o.weekdays
                  , f = o.months
                  , u = function(e, r, o, i) {
                    return e && (e[r] || e(n, t)) || o[r].substr(0, i)
                }
                  , d = function(e) {
                    return w.s(i % 12 || 12, e, "0")
                }
                  , p = o.meridiem || function(e, n, t) {
                    var r = e < 12 ? "AM" : "PM";
                    return t ? r.toLowerCase() : r
                }
                  , m = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: s + 1,
                    MM: w.s(s + 1, 2, "0"),
                    MMM: u(o.monthsShort, s, f, 3),
                    MMMM: u(f, s),
                    D: this.$D,
                    DD: w.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: u(o.weekdaysMin, this.$W, c, 2),
                    ddd: u(o.weekdaysShort, this.$W, c, 3),
                    dddd: c[this.$W],
                    H: String(i),
                    HH: w.s(i, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: p(i, a, !0),
                    A: p(i, a, !1),
                    m: String(a),
                    mm: w.s(a, 2, "0"),
                    s: String(this.$s),
                    ss: w.s(this.$s, 2, "0"),
                    SSS: w.s(this.$ms, 3, "0"),
                    Z: r
                };
                return t.replace(l, (function(e, n) {
                    return n || m[e] || r.replace(":", "")
                }
                ))
            }
            ,
            p.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            p.diff = function(e, f, u) {
                var l, d = w.p(f), p = v(e), m = 6e4 * (p.utcOffset() - this.utcOffset()), g = this - p, h = w.m(this, p);
                return h = (l = {},
                l[c] = h / 12,
                l[a] = h,
                l[s] = h / 3,
                l[i] = (g - m) / 6048e5,
                l[o] = (g - m) / 864e5,
                l[r] = g / 36e5,
                l[t] = g / 6e4,
                l[n] = g / 1e3,
                l)[d] || g,
                u ? h : w.a(h)
            }
            ,
            p.daysInMonth = function() {
                return this.endOf(a).$D
            }
            ,
            p.$locale = function() {
                return h[this.$L]
            }
            ,
            p.locale = function(e, n) {
                if (!e)
                    return this.$L;
                var t = this.clone()
                  , r = b(e, n, !0);
                return r && (t.$L = r),
                t
            }
            ,
            p.clone = function() {
                return w.w(this.$d, this)
            }
            ,
            p.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            p.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            p.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            p.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            d
        }()
          , A = x.prototype;
        return v.prototype = A,
        [["$ms", e], ["$s", n], ["$m", t], ["$H", r], ["$W", o], ["$M", a], ["$y", c], ["$D", f]].forEach((function(e) {
            A[e[1]] = function(n) {
                return this.$g(n, e[0], e[1])
            }
        }
        )),
        v.extend = function(e, n) {
            return e(n, x, v),
            v
        }
        ,
        v.locale = b,
        v.isDayjs = y,
        v.unix = function(e) {
            return v(1e3 * e)
        }
        ,
        v.en = h[g],
        v.Ls = h,
        v.p = {},
        v
    }()
}
, function(e, n) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMAE88GdAoD+U488/Hr35oiHdrSreLEOA32yZOGNO22oHFqZEMYV4MvJxDluKWBStRH4670fRQAAAI3SURBVEjHnZfplppAEIWLRVEWUQFxX8bRzBInyff+DxfbyUxsaWzhHvnTh3uqvXVrQUzoLv1NkUcQ5cXGX3blIXiHLEJDlB08K805xcBosNunpUiZ7neDERCfnLu0zjGEsT/UT4f+GMJjp57XS2DdFwP6a8h7deHm4E6kBhMX5sagzy7B9o6A3W2A+1w9f0lIlnIXy/MrL7eHaczMsUo+I05vhEt474gVnXdyTXLPZaZ4duYM99oMc0aOPARnxPwqf0x/yIP4MeU7n+UbW3kYW95K+cQCt/s4seuy+HftkIk0wITwU5ATa2mENadLKmJ0X/tRVt646snRHE/sXSQdi4YQitfrg48prvbG+CJshq8TfwKzK2YvgFi/E5mIF3JTt14GuN+XOwQQfOgGJfSkz7giuIo5fv7Pm/4WHSP64jOopmoD/LownxRvLzcY4J+fJ0OSB8BoeOYBUbWZ7M7RCoxNZg4k6U7xDO7YU0hOKnXMlXpMbSEll4hSjFigEBvLpiQSkBoUingQI0D9mkf0CGqvurj3Hx1WSpzmqqYkNemw5HFPoQxgc064NxlAWc7u1arlqiY3V0fV5NWystejKitDIU+tHcAn01qHteforePSrOyoNis5Nm+Px/YNuf0IaD902o85hU2Twbq5ntBNRrn24jB/dHn4M2y7rrRekNqvZO2XwCp6eau1UwVd1C+6i/uqO8fV12r96nmvX6v16mg3iNerLvM9z0LSPh9CglVSbPyJUeq/TzNV3TlThooAAAAASUVORK5CYII="
}
, function(e, n, t) {
    "use strict";
    var r = String.prototype.replace
      , o = /%20/g
      , i = t(4)
      , a = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    };
    e.exports = i.assign({
        default: a.RFC3986,
        formatters: {
            RFC1738: function(e) {
                return r.call(e, o, "+")
            },
            RFC3986: function(e) {
                return String(e)
            }
        }
    }, a)
}
, function(e, n) {
    var t = {
        utf8: {
            stringToBytes: function(e) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
            },
            bytesToString: function(e) {
                return decodeURIComponent(escape(t.bin.bytesToString(e)))
            }
        },
        bin: {
            stringToBytes: function(e) {
                for (var n = [], t = 0; t < e.length; t++)
                    n.push(255 & e.charCodeAt(t));
                return n
            },
            bytesToString: function(e) {
                for (var n = [], t = 0; t < e.length; t++)
                    n.push(String.fromCharCode(e[t]));
                return n.join("")
            }
        }
    };
    e.exports = t
}
, function(e, n) {
    e.exports = function(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++)
            r[t] = e[t];
        return r
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n, t) {
    var r = t(16)
      , o = t(17)
      , i = t(18)
      , a = t(19)
      , s = t(20)
      , c = t(6);
    n = r(!1);
    var f = o(i)
      , u = o(a)
      , l = o(s)
      , d = o(c);
    n.push([e.i, ".modal-finish {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  justify-content: center;\n  align-items: center;\n  display: none;\n  z-index: 99;\n}\n.modal-finish-close {\n  position: absolute;\n  right: 1em;\n  top: 50%;\n  margin: auto;\n  margin-top: -7.5em;\n  width: 0.8em;\n  height: 0.8em;\n}\n.modal-finish-wrapper {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 9em;\n  height: 13em;\n  background-image: url(" + f + ");\n  background-size: 100% 100%;\n  -webkit-animation: wrapperShow 0.5s linear 0s 1 normal forwards;\n          animation: wrapperShow 0.5s linear 0s 1 normal forwards;\n}\n@-webkit-keyframes wrapperShow {\n  0% {\n    transform: scale(0);\n  }\n  80% {\n    transform: scale(1.14);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes wrapperShow {\n  0% {\n    transform: scale(0);\n  }\n  80% {\n    transform: scale(1.14);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.modal-finish-panel {\n  background-image: url(" + u + ");\n  background-size: 100% 100%;\n  width: 6em;\n  height: 1.3em;\n  margin-left: 1.5em;\n  margin-top: 2em;\n  display: flex;\n  overflow: hidden;\n}\n.modal-finish-panel .number-wrapper {\n  margin-top: 0.35em;\n  width: 3.125em;\n  height: 0.6em;\n  margin-left: 0.3em;\n  overflow: hidden;\n}\n.modal-finish-panel .number-wrapper .number {\n  position: relative;\n  width: 0.625em;\n  height: 6em;\n  top: 0;\n  transition: top 0.2s;\n}\n.modal-finish-game {\n  -webkit-animation: gameShow 0.2s linear 0.3s 1 normal forwards;\n          animation: gameShow 0.2s linear 0.3s 1 normal forwards;\n  transform: scale(0);\n}\n@-webkit-keyframes gameShow {\n  0% {\n    transform: translate(0, 60%) scale(0);\n  }\n  80% {\n    transform: translate(0) scale(1.14);\n  }\n  100% {\n    transform: translate(0) scale(1);\n  }\n}\n@keyframes gameShow {\n  0% {\n    transform: translate(0, 60%) scale(0);\n  }\n  80% {\n    transform: translate(0) scale(1.14);\n  }\n  100% {\n    transform: translate(0) scale(1);\n  }\n}\n.modal-finish-game .game {\n  width: 9em;\n  border-radius: 0.4em;\n  border: 0.05em solid #ff5948;\n  box-shadow: 0 0 0 0.05em #fff;\n  margin-top: 0.2em;\n  margin-bottom: 0.1px;\n}\n.modal-finish-game .join {\n  width: 6em;\n  margin-left: 1.5em;\n  margin-top: 0.1em;\n  -webkit-animation: joinBtn 1s linear 0.6s infinite;\n          animation: joinBtn 1s linear 0.6s infinite;\n}\n@-webkit-keyframes joinBtn {\n  0%,\n  38%,\n  76%,\n  100% {\n    transform: scale(1);\n  }\n  19%,\n  57% {\n    transform: scale(1.15);\n  }\n}\n@keyframes joinBtn {\n  0%,\n  38%,\n  76%,\n  100% {\n    transform: scale(1);\n  }\n  19%,\n  57% {\n    transform: scale(1.15);\n  }\n}\n.modal-message {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n  display: none;\n}\n.modal-message-wrapper {\n  position: relative;\n  margin: 0 auto;\n  width: 8.24rem;\n  height: 11rem;\n  color: #fff;\n  background: url(" + l + ") no-repeat;\n  background-size: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.modal-message-content {\n  position: absolute;\n  top: 3.4rem;\n  width: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.5rem 0.3rem;\n  border-radius: 0.3rem;\n  font-size: 0.4rem;\n  background: #fff;\n  color: #5F4730;\n  text-align: left;\n  line-height: 1.5;\n}\n.modal-message-btn {\n  position: absolute;\n  width: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 1.56rem;\n  margin: 0 auto;\n  top: 8rem;\n  height: 1.42rem;\n  line-height: 1.42rem;\n  font-size: 0.6rem;\n  color: #5F4730;\n  font-weight: bold;\n  border-radius: 0.3rem;\n  text-align: center;\n  background: #fff;\n  transition: all 0.1s linear;\n}\n.modal-message-btn:active {\n  transform: translateX(-50%) scale(0.95);\n}\n.modal-message-close {\n  position: absolute;\n  top: -1.4rem;\n  right: -0.4rem;\n  margin: 0.4rem;\n  width: 0.8rem;\n  height: 0.8rem;\n  background: url(" + d + ") no-repeat;\n  background-size: 100%;\n}\n", ""]),
    e.exports = n
}
, function(e, n, t) {
    e.exports = '<div class="xb-showmore modal-finish" modal-type="finish"><img class="modal-finish-close" src="' + t(6) + '" modal-close="finish"/><div class="modal-finish-wrapper"><div class="modal-finish-panel"><div class="number-wrapper"><img class="number" src="' + t(2) + '"/><img class="number" src="' + t(2) + '"/><img class="number" src="' + t(2) + '"/><img class="number" src="' + t(2) + '"/><img class="number" src="' + t(2) + '"/></div></div></div></div><div class="xb-showmore modal-message" modal-type="message"><div class="modal-message-wrapper"><div class="modal-message-content">The number of draws today has been used up, please continue tomorrow</div><div class="modal-message-btn" modal-close="message">OK</div><div class="modal-message-close" modal-close="message"></div></div></div>'
}
, function(e, n, t) {
    var r, o, i, a, s;
    r = t(23),
    o = t(8).utf8,
    i = t(24),
    a = t(8).bin,
    (s = function(e, n) {
        e.constructor == String ? e = n && "binary" === n.encoding ? a.stringToBytes(e) : o.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
        for (var t = r.bytesToWords(e), c = 8 * e.length, f = 1732584193, u = -271733879, l = -1732584194, d = 271733878, p = 0; p < t.length; p++)
            t[p] = 16711935 & (t[p] << 8 | t[p] >>> 24) | 4278255360 & (t[p] << 24 | t[p] >>> 8);
        t[c >>> 5] |= 128 << c % 32,
        t[14 + (c + 64 >>> 9 << 4)] = c;
        var m = s._ff
          , g = s._gg
          , h = s._hh
          , y = s._ii;
        for (p = 0; p < t.length; p += 16) {
            var b = f
              , v = u
              , w = l
              , x = d;
            f = m(f, u, l, d, t[p + 0], 7, -680876936),
            d = m(d, f, u, l, t[p + 1], 12, -389564586),
            l = m(l, d, f, u, t[p + 2], 17, 606105819),
            u = m(u, l, d, f, t[p + 3], 22, -1044525330),
            f = m(f, u, l, d, t[p + 4], 7, -176418897),
            d = m(d, f, u, l, t[p + 5], 12, 1200080426),
            l = m(l, d, f, u, t[p + 6], 17, -1473231341),
            u = m(u, l, d, f, t[p + 7], 22, -45705983),
            f = m(f, u, l, d, t[p + 8], 7, 1770035416),
            d = m(d, f, u, l, t[p + 9], 12, -1958414417),
            l = m(l, d, f, u, t[p + 10], 17, -42063),
            u = m(u, l, d, f, t[p + 11], 22, -1990404162),
            f = m(f, u, l, d, t[p + 12], 7, 1804603682),
            d = m(d, f, u, l, t[p + 13], 12, -40341101),
            l = m(l, d, f, u, t[p + 14], 17, -1502002290),
            f = g(f, u = m(u, l, d, f, t[p + 15], 22, 1236535329), l, d, t[p + 1], 5, -165796510),
            d = g(d, f, u, l, t[p + 6], 9, -1069501632),
            l = g(l, d, f, u, t[p + 11], 14, 643717713),
            u = g(u, l, d, f, t[p + 0], 20, -373897302),
            f = g(f, u, l, d, t[p + 5], 5, -701558691),
            d = g(d, f, u, l, t[p + 10], 9, 38016083),
            l = g(l, d, f, u, t[p + 15], 14, -660478335),
            u = g(u, l, d, f, t[p + 4], 20, -405537848),
            f = g(f, u, l, d, t[p + 9], 5, 568446438),
            d = g(d, f, u, l, t[p + 14], 9, -1019803690),
            l = g(l, d, f, u, t[p + 3], 14, -187363961),
            u = g(u, l, d, f, t[p + 8], 20, 1163531501),
            f = g(f, u, l, d, t[p + 13], 5, -1444681467),
            d = g(d, f, u, l, t[p + 2], 9, -51403784),
            l = g(l, d, f, u, t[p + 7], 14, 1735328473),
            f = h(f, u = g(u, l, d, f, t[p + 12], 20, -1926607734), l, d, t[p + 5], 4, -378558),
            d = h(d, f, u, l, t[p + 8], 11, -2022574463),
            l = h(l, d, f, u, t[p + 11], 16, 1839030562),
            u = h(u, l, d, f, t[p + 14], 23, -35309556),
            f = h(f, u, l, d, t[p + 1], 4, -1530992060),
            d = h(d, f, u, l, t[p + 4], 11, 1272893353),
            l = h(l, d, f, u, t[p + 7], 16, -155497632),
            u = h(u, l, d, f, t[p + 10], 23, -1094730640),
            f = h(f, u, l, d, t[p + 13], 4, 681279174),
            d = h(d, f, u, l, t[p + 0], 11, -358537222),
            l = h(l, d, f, u, t[p + 3], 16, -722521979),
            u = h(u, l, d, f, t[p + 6], 23, 76029189),
            f = h(f, u, l, d, t[p + 9], 4, -640364487),
            d = h(d, f, u, l, t[p + 12], 11, -421815835),
            l = h(l, d, f, u, t[p + 15], 16, 530742520),
            f = y(f, u = h(u, l, d, f, t[p + 2], 23, -995338651), l, d, t[p + 0], 6, -198630844),
            d = y(d, f, u, l, t[p + 7], 10, 1126891415),
            l = y(l, d, f, u, t[p + 14], 15, -1416354905),
            u = y(u, l, d, f, t[p + 5], 21, -57434055),
            f = y(f, u, l, d, t[p + 12], 6, 1700485571),
            d = y(d, f, u, l, t[p + 3], 10, -1894986606),
            l = y(l, d, f, u, t[p + 10], 15, -1051523),
            u = y(u, l, d, f, t[p + 1], 21, -2054922799),
            f = y(f, u, l, d, t[p + 8], 6, 1873313359),
            d = y(d, f, u, l, t[p + 15], 10, -30611744),
            l = y(l, d, f, u, t[p + 6], 15, -1560198380),
            u = y(u, l, d, f, t[p + 13], 21, 1309151649),
            f = y(f, u, l, d, t[p + 4], 6, -145523070),
            d = y(d, f, u, l, t[p + 11], 10, -1120210379),
            l = y(l, d, f, u, t[p + 2], 15, 718787259),
            u = y(u, l, d, f, t[p + 9], 21, -343485551),
            f = f + b >>> 0,
            u = u + v >>> 0,
            l = l + w >>> 0,
            d = d + x >>> 0
        }
        return r.endian([f, u, l, d])
    }
    )._ff = function(e, n, t, r, o, i, a) {
        var s = e + (n & t | ~n & r) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + n
    }
    ,
    s._gg = function(e, n, t, r, o, i, a) {
        var s = e + (n & r | t & ~r) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + n
    }
    ,
    s._hh = function(e, n, t, r, o, i, a) {
        var s = e + (n ^ t ^ r) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + n
    }
    ,
    s._ii = function(e, n, t, r, o, i, a) {
        var s = e + (t ^ (n | ~r)) + (o >>> 0) + a;
        return (s << i | s >>> 32 - i) + n
    }
    ,
    s._blocksize = 16,
    s._digestsize = 16,
    e.exports = function(e, n) {
        if (null == e)
            throw new Error("Illegal argument " + e);
        var t = r.wordsToBytes(s(e, n));
        return n && n.asBytes ? t : n && n.asString ? a.bytesToString(t) : r.bytesToHex(t)
    }
}
, function(e, n, t) {
    var r = t(25);
    e.exports = function(e, n) {
        if (null == e)
            return {};
        var t, o, i = r(e, n);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (o = 0; o < a.length; o++)
                t = a[o],
                n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
        }
        return i
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n) {
    function t() {
        return e.exports = t = Object.assign || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0,
        t.apply(this, arguments)
    }
    e.exports = t,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n, t) {
    var r = t(26)
      , o = t(27)
      , i = t(28)
      , a = t(29);
    e.exports = function(e) {
        return r(e) || o(e) || i(e) || a()
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n, t) {
    "use strict";
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map((function(n) {
                var t = function(e, n) {
                    var t = e[1] || ""
                      , r = e[3];
                    if (!r)
                        return t;
                    if (n && "function" == typeof btoa) {
                        var o = (a = r,
                        s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),
                        "/*# ".concat(c, " */"))
                          , i = r.sources.map((function(e) {
                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
                        }
                        ));
                        return [t].concat(i).concat([o]).join("\n")
                    }
                    var a, s, c;
                    return [t].join("\n")
                }(n, e);
                return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
            }
            )).join("")
        }
        ,
        n.i = function(e, t, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var o = {};
            if (r)
                for (var i = 0; i < this.length; i++) {
                    var a = this[i][0];
                    null != a && (o[a] = !0)
                }
            for (var s = 0; s < e.length; s++) {
                var c = [].concat(e[s]);
                r && o[c[0]] || (t && (c[2] ? c[2] = "".concat(t, " and ").concat(c[2]) : c[2] = t),
                n.push(c))
            }
        }
        ,
        n
    }
}
, function(e, n, t) {
    "use strict";
    e.exports = function(e, n) {
        return n || (n = {}),
        "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
        n.hash && (e += n.hash),
        /["'() \t\n]/.test(e) || n.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
    }
}
, function(e, n, t) {
    e.exports = window.myhost + "/bxflux/popup_plugin/bx_popup_showmore/" + "image/e915d81f1b954b130274fdaa5fbabe29.png"
}
, function(e, n) {
    e.exports = "data:image/png;base64,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"
}
, function(e, n, t) {
    e.exports = t.p + "image/aae10b0b7a42f429785b6cc6c9d0aab3.png"
}
, function(e, n, t) {
    "use strict";
    var r = t(4)
      , o = t(7)
      , i = Object.prototype.hasOwnProperty
      , a = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, n) {
            return e + "[" + n + "]"
        },
        repeat: function(e) {
            return e
        }
    }
      , s = Array.isArray
      , c = Array.prototype.push
      , f = function(e, n) {
        c.apply(e, s(n) ? n : [n])
    }
      , u = Date.prototype.toISOString
      , l = o.default
      , d = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        format: l,
        formatter: o.formatters[l],
        indices: !1,
        serializeDate: function(e) {
            return u.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    }
      , p = function e(n, t, o, i, a, c, u, l, p, m, g, h, y) {
        var b, v = n;
        if ("function" == typeof u ? v = u(t, v) : v instanceof Date ? v = m(v) : "comma" === o && s(v) && (v = r.maybeMap(v, (function(e) {
            return e instanceof Date ? m(e) : e
        }
        )).join(",")),
        null === v) {
            if (i)
                return c && !h ? c(t, d.encoder, y, "key") : t;
            v = ""
        }
        if ("string" == typeof (b = v) || "number" == typeof b || "boolean" == typeof b || "symbol" == typeof b || "bigint" == typeof b || r.isBuffer(v))
            return c ? [g(h ? t : c(t, d.encoder, y, "key")) + "=" + g(c(v, d.encoder, y, "value"))] : [g(t) + "=" + g(String(v))];
        var w, x = [];
        if (void 0 === v)
            return x;
        if (s(u))
            w = u;
        else {
            var A = Object.keys(v);
            w = l ? A.sort(l) : A
        }
        for (var O = 0; O < w.length; ++O) {
            var j = w[O]
              , S = v[j];
            if (!a || null !== S) {
                var M = s(v) ? "function" == typeof o ? o(t, j) : t : t + (p ? "." + j : "[" + j + "]");
                f(x, e(S, M, o, i, a, c, u, l, p, m, g, h, y))
            }
        }
        return x
    };
    e.exports = function(e, n) {
        var t, r = e, c = function(e) {
            if (!e)
                return d;
            if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
                throw new TypeError("Encoder has to be a function.");
            var n = e.charset || d.charset;
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var t = o.default;
            if (void 0 !== e.format) {
                if (!i.call(o.formatters, e.format))
                    throw new TypeError("Unknown format option provided.");
                t = e.format
            }
            var r = o.formatters[t]
              , a = d.filter;
            return ("function" == typeof e.filter || s(e.filter)) && (a = e.filter),
            {
                addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : d.addQueryPrefix,
                allowDots: void 0 === e.allowDots ? d.allowDots : !!e.allowDots,
                charset: n,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : d.charsetSentinel,
                delimiter: void 0 === e.delimiter ? d.delimiter : e.delimiter,
                encode: "boolean" == typeof e.encode ? e.encode : d.encode,
                encoder: "function" == typeof e.encoder ? e.encoder : d.encoder,
                encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : d.encodeValuesOnly,
                filter: a,
                formatter: r,
                serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : d.serializeDate,
                skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : d.skipNulls,
                sort: "function" == typeof e.sort ? e.sort : null,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : d.strictNullHandling
            }
        }(n);
        "function" == typeof c.filter ? r = (0,
        c.filter)("", r) : s(c.filter) && (t = c.filter);
        var u, l = [];
        if ("object" != typeof r || null === r)
            return "";
        u = n && n.arrayFormat in a ? n.arrayFormat : n && "indices"in n ? n.indices ? "indices" : "repeat" : "indices";
        var m = a[u];
        t || (t = Object.keys(r)),
        c.sort && t.sort(c.sort);
        for (var g = 0; g < t.length; ++g) {
            var h = t[g];
            c.skipNulls && null === r[h] || f(l, p(r[h], h, m, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.formatter, c.encodeValuesOnly, c.charset))
        }
        var y = l.join(c.delimiter)
          , b = !0 === c.addQueryPrefix ? "?" : "";
        return c.charsetSentinel && ("iso-8859-1" === c.charset ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"),
        y.length > 0 ? b + y : ""
    }
}
, function(e, n, t) {
    "use strict";
    var r = t(4)
      , o = Object.prototype.hasOwnProperty
      , i = Array.isArray
      , a = {
        allowDots: !1,
        allowPrototypes: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: r.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    }
      , s = function(e) {
        return e.replace(/&#(\d+);/g, (function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        }
        ))
    }
      , c = function(e, n) {
        return e && "string" == typeof e && n.comma && e.indexOf(",") > -1 ? e.split(",") : e
    }
      , f = function(e, n, t, r) {
        if (e) {
            var i = t.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
              , a = /(\[[^[\]]*])/g
              , s = t.depth > 0 && /(\[[^[\]]*])/.exec(i)
              , f = s ? i.slice(0, s.index) : i
              , u = [];
            if (f) {
                if (!t.plainObjects && o.call(Object.prototype, f) && !t.allowPrototypes)
                    return;
                u.push(f)
            }
            for (var l = 0; t.depth > 0 && null !== (s = a.exec(i)) && l < t.depth; ) {
                if (l += 1,
                !t.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !t.allowPrototypes)
                    return;
                u.push(s[1])
            }
            return s && u.push("[" + i.slice(s.index) + "]"),
            function(e, n, t, r) {
                for (var o = r ? n : c(n, t), i = e.length - 1; i >= 0; --i) {
                    var a, s = e[i];
                    if ("[]" === s && t.parseArrays)
                        a = [].concat(o);
                    else {
                        a = t.plainObjects ? Object.create(null) : {};
                        var f = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s
                          , u = parseInt(f, 10);
                        t.parseArrays || "" !== f ? !isNaN(u) && s !== f && String(u) === f && u >= 0 && t.parseArrays && u <= t.arrayLimit ? (a = [])[u] = o : a[f] = o : a = {
                            0: o
                        }
                    }
                    o = a
                }
                return o
            }(u, n, t, r)
        }
    };
    e.exports = function(e, n) {
        var t = function(e) {
            if (!e)
                return a;
            if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
                throw new TypeError("Decoder has to be a function.");
            if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
            var n = void 0 === e.charset ? a.charset : e.charset;
            return {
                allowDots: void 0 === e.allowDots ? a.allowDots : !!e.allowDots,
                allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
                arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                charset: n,
                charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
                comma: "boolean" == typeof e.comma ? e.comma : a.comma,
                decoder: "function" == typeof e.decoder ? e.decoder : a.decoder,
                delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
                depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
                ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
                parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
                parseArrays: !1 !== e.parseArrays,
                plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : a.plainObjects,
                strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling
            }
        }(n);
        if ("" === e || null == e)
            return t.plainObjects ? Object.create(null) : {};
        for (var u = "string" == typeof e ? function(e, n) {
            var t, f = {}, u = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, l = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, d = u.split(n.delimiter, l), p = -1, m = n.charset;
            if (n.charsetSentinel)
                for (t = 0; t < d.length; ++t)
                    0 === d[t].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[t] ? m = "utf-8" : "utf8=%26%2310003%3B" === d[t] && (m = "iso-8859-1"),
                    p = t,
                    t = d.length);
            for (t = 0; t < d.length; ++t)
                if (t !== p) {
                    var g, h, y = d[t], b = y.indexOf("]="), v = -1 === b ? y.indexOf("=") : b + 1;
                    -1 === v ? (g = n.decoder(y, a.decoder, m, "key"),
                    h = n.strictNullHandling ? null : "") : (g = n.decoder(y.slice(0, v), a.decoder, m, "key"),
                    h = r.maybeMap(c(y.slice(v + 1), n), (function(e) {
                        return n.decoder(e, a.decoder, m, "value")
                    }
                    ))),
                    h && n.interpretNumericEntities && "iso-8859-1" === m && (h = s(h)),
                    y.indexOf("[]=") > -1 && (h = i(h) ? [h] : h),
                    o.call(f, g) ? f[g] = r.combine(f[g], h) : f[g] = h
                }
            return f
        }(e, t) : e, l = t.plainObjects ? Object.create(null) : {}, d = Object.keys(u), p = 0; p < d.length; ++p) {
            var m = d[p]
              , g = f(m, u[m], t, "string" == typeof e);
            l = r.merge(l, g, t)
        }
        return r.compact(l)
    }
}
, function(e, n) {
    var t, r;
    t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    r = {
        rotl: function(e, n) {
            return e << n | e >>> 32 - n
        },
        rotr: function(e, n) {
            return e << 32 - n | e >>> n
        },
        endian: function(e) {
            if (e.constructor == Number)
                return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
            for (var n = 0; n < e.length; n++)
                e[n] = r.endian(e[n]);
            return e
        },
        randomBytes: function(e) {
            for (var n = []; e > 0; e--)
                n.push(Math.floor(256 * Math.random()));
            return n
        },
        bytesToWords: function(e) {
            for (var n = [], t = 0, r = 0; t < e.length; t++,
            r += 8)
                n[r >>> 5] |= e[t] << 24 - r % 32;
            return n
        },
        wordsToBytes: function(e) {
            for (var n = [], t = 0; t < 32 * e.length; t += 8)
                n.push(e[t >>> 5] >>> 24 - t % 32 & 255);
            return n
        },
        bytesToHex: function(e) {
            for (var n = [], t = 0; t < e.length; t++)
                n.push((e[t] >>> 4).toString(16)),
                n.push((15 & e[t]).toString(16));
            return n.join("")
        },
        hexToBytes: function(e) {
            for (var n = [], t = 0; t < e.length; t += 2)
                n.push(parseInt(e.substr(t, 2), 16));
            return n
        },
        bytesToBase64: function(e) {
            for (var n = [], r = 0; r < e.length; r += 3)
                for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++)
                    8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
            return n.join("")
        },
        base64ToBytes: function(e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4)
                0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
            return n
        }
    },
    e.exports = r
}
, function(e, n) {
    function t(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
    /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
    e.exports = function(e) {
        return null != e && (t(e) || function(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
        }(e) || !!e._isBuffer)
    }
}
, function(e, n) {
    e.exports = function(e, n) {
        if (null == e)
            return {};
        var t, r, o = {}, i = Object.keys(e);
        for (r = 0; r < i.length; r++)
            t = i[r],
            n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n, t) {
    var r = t(9);
    e.exports = function(e) {
        if (Array.isArray(e))
            return r(e)
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n) {
    e.exports = function(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n, t) {
    var r = t(9);
    e.exports = function(e, n) {
        if (e) {
            if ("string" == typeof e)
                return r(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name),
            "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, n) : void 0
        }
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    ,
    e.exports.default = e.exports,
    e.exports.__esModule = !0
}
, function(e, n, t) {
    var r = {
        "./image/br/join.png": 31,
        "./image/id/join.png": 32,
        "./image/ind/join.png": 33,
        "./image/join.png": 34,
        "./image/mx/join.png": 35,
        "./image/my/join.png": 36,
        "./image/ph/join.png": 37,
        "./image/tha/join.png": 38
    };
    function o(e) {
        var n = i(e);
        return t(n)
    }
    function i(e) {
        if (!t.o(r, e)) {
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND",
            n
        }
        return r[e]
    }
    o.keys = function() {
        return Object.keys(r)
    }
    ,
    o.resolve = i,
    e.exports = o,
    o.id = 30
}
, function(e, n, t) {
    e.exports = t.p + "image/10191d7815294043fdfbc0d1ef40d6aa.png"
}
, function(e, n, t) {
    e.exports = window.myhost + "/bxflux/popup_plugin/bx_popup_showmore/" + "image/624e6b01be2b5342a2a1972f1f8f205e.png"
}
, function(e, n, t) {
    e.exports = t.p + "image/91577a4e5a5ef67661aa68832132d2ee.png"
}
, function(e, n, t) {
    e.exports = t.p + "image/c03f21cac866ce18524fc710711e2ec8.png"
}
, function(e, n, t) {
    e.exports = t.p + "image/87231d02a5414fd23239c33da03213f8.png"
}
, function(e, n, t) {
    e.exports = t.p + "image/7d6a8d1e449e879177eff15e15134706.png"
}
, function(e, n, t) {
    e.exports = t.p + "image/91577a4e5a5ef67661aa68832132d2ee.png"
}
, function(e, n, t) {
    e.exports = t.p + "image/b41025d6459d3695fd959dae7abf9f09.png"
}
, function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t(10)
      , o = t.n(r)
      , i = t(11)
      , a = t.n(i)
      , s = (t(1),
    t(3))
      , c = t.n(s)
      , f = t(0)
      , u = t.n(f);
    t(12),
    t(13),
    t(14);
    window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.vntopnews || window.vntopnews,
    c.a.parse(location.search, {
        ignoreQueryPrefix: !0
    });
    t(5);
    var l = t(15);
    [].concat(t.n(l)()([{
        name: "id_bomb",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/a4/03/a4030c868fd43fdf42297bc0a54b51ff.png"
    }, {
        name: "id_crab",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/af/19/af19a515022e56a9c1bb4dd7e10a9340.png"
    }, {
        name: "id_egg",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/05/cc/05cc483652aa4da0d8374f936fd30fd8.png"
    }, {
        name: "id_spring",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/e7/d3/e7d37c97892c6406f77a8885e840a2f3.png"
    }, {
        name: "id_gashapon",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/d3/d7/d3d73f5d0554250537886ea354ee3d1e.png"
    }, {
        name: "id_alchemy",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/0f/bd/0fbde368da8dc9dcad8f7b95f9d5682e.png"
    }, {
        name: "id_ggift",
        imgUrl: "https://game.flygame.io/id_gamelist/img/5592a557508b23495d11e74341845a92.png"
    }, {
        name: "id_machine",
        imgUrl: "https://game.flygame.io/id_gamelist/img/bfda883b11093e0a0def7af082f0b18d.png"
    }, {
        name: "id_noose",
        imgUrl: "https://game.flygame.io/id_gamelist/img/15a855355f55e0ae7390de94c31ec409.png"
    }, {
        name: "id_rope",
        imgUrl: "https://game.flygame.io/id_gamelist/img/200d90a4d46caab7c6f8b19feda3b41c.png"
    }].map((function(e) {
        return "/".concat(e.name, "/index.html")
    }
    ))), ["/game_reward/index.html", "/static/page/invite/gradient"]);
    var d, p = function(e) {
        if (!e || "string" != typeof e)
            return {};
        var n = c.a.parse(e.split("?")[1]);
        for (var t in n)
            if (n.hasOwnProperty(t)) {
                var r = n[t];
                Array.isArray(n[t]) && (n[t] = r[0])
            }
        return n
    }(location.href), m = function(e) {
        return window.localStorage ? localStorage.getItem(e) : u.a.get(e)
    }, g = function(e, n) {
        window.localStorage ? localStorage.setItem(e, n) : u.a.set(e, n)
    }, h = p.inner || 0, y = p.v || "none", b = (p.uid || function() {
        var e = "";
        e = 1 == +h ? u.a.get("uid") : m("_bx_uid");
        e || (e = function(e, n) {
            var t, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
            if (n = n || r.length,
            e)
                for (t = 0; t < e; t++)
                    o[t] = r[0 | Math.random() * n];
            else {
                var i;
                for (o[8] = o[13] = o[18] = o[23] = "-",
                o[14] = "4",
                t = 0; t < 36; t++)
                    o[t] || (i = 0 | 16 * Math.random(),
                    o[t] = r[19 === t ? 3 & i | 8 : i])
            }
            return u.a.set("_bx_uid", o.join(""), {
                expires: 365,
                path: ""
            }),
            o.join("")
        }(12, 16),
        g("_bx_uid", e))
    }(),
    location.pathname.split("/index.html")[0]), v = b.split("/")[b.split("/").length - 1];
    p.t,
    p.flavor || u.a.get("flavor"),
    p.country,
    navigator.language,
    navigator.userAgent.toLocaleLowerCase().indexOf("android"),
    navigator.userAgent.toString(),
    p.req_id,
    navigator.userAgent,
    d = navigator.userAgent,
    d.indexOf("Trident"),
    d.indexOf("Presto"),
    d.indexOf("AppleWebKit"),
    d.indexOf("Gecko") > -1 && d.indexOf("KHTML"),
    d.match(/AppleWebKit.*Mobile.*/),
    d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    d.indexOf("Android") > -1 || d.indexOf("Linux"),
    d.indexOf("iPhone"),
    d.indexOf("iPad"),
    d.indexOf("Safari"),
    d.toLocaleLowerCase().match(/MicroMessenger/i),
    (navigator.browserLanguage || navigator.language).toLowerCase();
    var w = window.bxPublicHub.getUrlParamsObj(location.href)
      , x = w.bx_third_client || "none"
      , A = window.bxPublicHub.browser.versions.mobile ? "tap" : "click"
      , O = "/".concat("id");
    $(document.body).append(a.a),
    $(document.head).append("\n    <style>\n      ".concat(o.a.toString(), "\n    </style>\n  "));
    var j = $(".modal-finish");
    j.css({
        fontSize: Math.min(window.innerWidth, 640) / 10 + "px"
    });
    var S = function(e) {
        ("0000" + e).slice(-5).split("").forEach((function(e, n) {
            !function(e, n) {
                $(".modal-finish-panel > .number-wrapper > .number:nth-child(".concat(n, ")")).css("top", -.6 * e + "em")
            }(e, n + 1)
        }
        ))
    }
      , M = !1
      , U = [{
        name: "id_bomb",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/a4/03/a4030c868fd43fdf42297bc0a54b51ff.png"
    }, {
        name: "id_crab",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/af/19/af19a515022e56a9c1bb4dd7e10a9340.png"
    }, {
        name: "id_egg",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/05/cc/05cc483652aa4da0d8374f936fd30fd8.png"
    }, {
        name: "id_spring",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/e7/d3/e7d37c97892c6406f77a8885e840a2f3.png"
    }, {
        name: "id_gashapon",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/d3/d7/d3d73f5d0554250537886ea354ee3d1e.png"
    }, {
        name: "id_alchemy",
        imgUrl: "https://images.flygame.io/topnews-2017/imgs/0f/bd/0fbde368da8dc9dcad8f7b95f9d5682e.png"
    }, {
        name: "id_ggift",
        imgUrl: "https://game.flygame.io/id_gamelist/img/5592a557508b23495d11e74341845a92.png"
    }, {
        name: "id_machine",
        imgUrl: "https://game.flygame.io/id_gamelist/img/bfda883b11093e0a0def7af082f0b18d.png"
    }, {
        name: "id_noose",
        imgUrl: "https://game.flygame.io/id_gamelist/img/15a855355f55e0ae7390de94c31ec409.png"
    }, {
        name: "id_rope",
        imgUrl: "https://game.flygame.io/id_gamelist/img/200d90a4d46caab7c6f8b19feda3b41c.png"
    }];
    (U = U.filter((function(e) {
        return e.imgUrl
    }
    ))).length > 0 && function() {
        if (w.showMore && 1 != w.showMore)
            $(".modal-message").fadeIn({
                display: "block"
            });
        else {
            var e = function() {
                var e = null
                  , n = U.filter((function(n) {
                    return n.name == v && (e = n),
                    n.name != v
                }
                ))
                  , t = n[Math.floor(Math.random() * n.length)];
                if (n.length < 2)
                    return [t, e];
                var r = (n = n.filter((function(e) {
                    return e.name != t.name
                }
                )))[Math.floor(Math.random() * n.length)];
                return [t, r]
            }();
            !function() {
                if (!M) {
                    M = !0;
                    var e = 12e3;
                    S(e),
                    setInterval((function() {
                        e++,
                        S(e)
                    }
                    ), 500)
                }
            }(),
            e.forEach((function(e) {
                var n = document.createElement("div");
                n.className = "modal-finish-game",
                n.dataset.name = e.name;
                var r = new Image;
                r.src = e.imgUrl,
                r.className = "game",
                n.appendChild(r);
                var o = new Image;
                o.src = t(30)("./image".concat(O, "/join.png")),
                o.className = "join",
                n.appendChild(o),
                $(".modal-finish-wrapper").append(n)
            }
            )),
            $(".modal-finish").show(),
            window.bxPublicHub.sendWebSiteInfo({
                dialogid: "showmore"
            }, "post", x, "more_game_showed")
        }
        j.on(A, ".modal-finish-game", (function() {
            var e = $(this).data("name");
            window.bxPublicHub.sendWebSiteInfo({
                dialogid: "showmore",
                other_game: e
            }, "post", x, "other_game_click"),
            // jump to new game on five items collected pop
            window.bxPublicHub.jumpLink(x, "//".concat(window.bxPublicHub.gameHost, "/").concat(e, "/index.html").concat(location.search))
        }
        )),
        $("[modal-close]").on(A, (function() {
            var e = document.querySelectorAll(".xb-showmore")
              , n = document.querySelector(".bx_pop_showmore")
              , t = $(this).attr("modal-close");
            $("[modal-type=".concat(t, "]")).fadeOut(),
            setTimeout((function() {
                e.forEach((function(e) {
                    return document.body.removeChild(e)
                }
                )),
                document.body.removeChild(n)
            }
            ), 400)
        }
        ))
    }()
}
]);
