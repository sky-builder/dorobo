!(function (t) {
    // window.myhost = 'file:///Users/liushaoquan/Downloads/us.sitesucker.mac.sitesucker/game.flygame.io';
    window.myhost = '';
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/id_crab/"),
    n((n.s = 2));
})([
  function (t, e, n) {
    "use strict";
    (function (t) {
      n.d(e, "a", function () {
        return c;
      }),
        n.d(e, "i", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return l;
        }),
        n.d(e, "b", function () {
          return d;
        }),
        n.d(e, "j", function () {
          return p;
        }),
        n.d(e, "h", function () {
          return h;
        }),
        n.d(e, "e", function () {
          return m;
        }),
        n.d(e, "f", function () {
          return g;
        }),
        n.d(e, "g", function () {
          return v;
        }),
        n.d(e, "d", function () {
          return y;
        });
      n(7);
      var r = n(5),
        i = n.n(r),
        o = n(3),
        a = n.n(o),
        s = window.bxPublicHub.getUrlParamsObj(location.href),
        c =
          (s.v,
          {
            getItem: function (t) {
              return window.localStorage ? localStorage.getItem(t) : i.a.get(t);
            },
            setItem: function (t, e) {
              window.localStorage ? localStorage.setItem(t, e) : i.a.set(t, e);
            },
          }),
        u =
          s.uid ||
          (function () {
            var t = "";
            t = 1 == +f ? i.a.get("uid") : c.getItem("_bx_uid");
            t || ((t = p(12, 16)), c.setItem("_bx_uid", t));
            return t;
          })(),
        f = s.inner || 0,
        l = { name: "id_crab", countName: "autoS_id_crab_w_o" };
      function d(t) {
        var e = a()().format("YYYY-MM-DD");
        return a()(+t).format("YYYY-MM-DD") == e;
      }
      function p(t, e) {
        var n,
          r,
          o =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
              ""
            ),
          a = [];
        if (((e = e || o.length), t))
          for (n = 0; n < t; n++) a[n] = o[0 | (Math.random() * e)];
        else
          for (
            a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", n = 0;
            n < 36;
            n++
          )
            a[n] ||
              ((r = 0 | (16 * Math.random())),
              (a[n] = o[19 === n ? (3 & r) | 8 : r]));
        return (
          i.a.set("_bx_uid", a.join(""), { expires: 365, path: "" }), a.join("")
        );
      }
      function h(t, e, n, r) {
        return window.bxPublicHub.sendWebSiteInfo(t, e, n, r);
      }
      function m(t, e) {
        return window.top === window
          ? "uc" == t
            ? (window.top.location.href = e)
            : window.top.open(e)
          : window.top.postMessage(
              { type: "jump_link", client: t, link: e },
              "*"
            );
      }
      function g(e) {
        var n = c.getItem("bx_reward_config_".concat(l.name, "_ts")),
          r = new Date().getTime();
        if (n && d(n)) {
          var i = JSON.parse(c.getItem("bx_reward_config_".concat(l.name)));
          t.bx_reward_config = i.data.item;
          var o = i.data.item.admnative.assets.filter(function (t) {
              return 25 == t.id;
            })[0].data.link,
            o = o.replace('https://game.flygame.io', window.location.origin)
            o = o.replace('https://game.hotngay.vn', window.location.origin)
            a = document.createElement("script");
          (a.src = o), document.body.append(a);
        } else {
          var s = "https://".concat(
            window.bxPublicHub.crabApi,
            "/agency/query"
          );
          window.bxPublicHub.requestAd(s, ["205"], l.name).then(function (e) {
            console.log({e})
            if (e && 0 == e.ret) {
              (t.bx_reward_config = e.data.item),
                c.setItem("bx_reward_config_".concat(l.name, "_ts"), r),
                c.setItem(
                  "bx_reward_config_".concat(l.name),
                  JSON.stringify(e)
                );
              var n = e.data.item.admnative.assets.filter(function (t) {
                  return 25 == t.id;
                })[0].data.link,
                n = n.replace('https://game.flygame.io', window.location.origin)
                n = n.replace('https://game.hotngay.vn', window.location.origin)

                i = document.createElement("script");
              (i.src = n), document.body.append(i);
            }
          });
        }
      }
      function v() {
        return (
          u && u.substr(-1),
          1 == f ? ["1"].indexOf(u) > -1 : ["1", "2"].indexOf(u) > -1
        );
      }
      function y() {
        return bxPublicHub.browser
          ? bxPublicHub.browser.versions.mobile
            ? bxPublicHub.browser.versions.android
              ? "android"
              : "ios"
            : "pc"
          : "unknow";
      }
    }.call(this, n(40)));
  },
  function (t, e, n) {
    "use strict";
    var r = n(10),
      i = Object.prototype.toString;
    function o(t) {
      return "[object Array]" === i.call(t);
    }
    function a(t) {
      return void 0 === t;
    }
    function s(t) {
      return null !== t && "object" == typeof t;
    }
    function c(t) {
      return "[object Function]" === i.call(t);
    }
    function u(t, e) {
      if (null != t)
        if (("object" != typeof t && (t = [t]), o(t)))
          for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
        else
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) &&
              e.call(null, t[i], i, t);
    }
    t.exports = {
      isArray: o,
      isArrayBuffer: function (t) {
        return "[object ArrayBuffer]" === i.call(t);
      },
      isBuffer: function (t) {
        return (
          null !== t &&
          !a(t) &&
          null !== t.constructor &&
          !a(t.constructor) &&
          "function" == typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      },
      isFormData: function (t) {
        return "undefined" != typeof FormData && t instanceof FormData;
      },
      isArrayBufferView: function (t) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(t)
          : t && t.buffer && t.buffer instanceof ArrayBuffer;
      },
      isString: function (t) {
        return "string" == typeof t;
      },
      isNumber: function (t) {
        return "number" == typeof t;
      },
      isObject: s,
      isUndefined: a,
      isDate: function (t) {
        return "[object Date]" === i.call(t);
      },
      isFile: function (t) {
        return "[object File]" === i.call(t);
      },
      isBlob: function (t) {
        return "[object Blob]" === i.call(t);
      },
      isFunction: c,
      isStream: function (t) {
        return s(t) && c(t.pipe);
      },
      isURLSearchParams: function (t) {
        return (
          "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: u,
      merge: function t() {
        var e = {};
        function n(n, r) {
          "object" == typeof e[r] && "object" == typeof n
            ? (e[r] = t(e[r], n))
            : (e[r] = n);
        }
        for (var r = 0, i = arguments.length; r < i; r++) u(arguments[r], n);
        return e;
      },
      deepMerge: function t() {
        var e = {};
        function n(n, r) {
          "object" == typeof e[r] && "object" == typeof n
            ? (e[r] = t(e[r], n))
            : (e[r] = "object" == typeof n ? t({}, n) : n);
        }
        for (var r = 0, i = arguments.length; r < i; r++) u(arguments[r], n);
        return e;
      },
      extend: function (t, e, n) {
        return (
          u(e, function (e, i) {
            t[i] = n && "function" == typeof e ? r(e, n) : e;
          }),
          t
        );
      },
      trim: function (t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
        n.d(e, "popupList", function () {
          return g;
        }),
          n.d(e, "_bx_third_client", function () {
            return S;
          }),
          n.d(e, "reportInfo", function () {
            return E;
          });
        var r = n(6),
          i = n.n(r),
          o = (n(48), n(49), n(50), n(46)),
          a = n(9),
          s = n(4),
          c = n(0),
          u = n(47),
          f = n(3),
          l = n.n(f);
        function d(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function p(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? d(Object(n), !0).forEach(function (e) {
                  i()(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : d(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        var h = "pc" === Object(c.d)() ? "click" : "tap",
          m = t(".container"),
          g = [],
          v = null,
          y = !1,
          b = 0,
          w = "",
          x = window.bxPublicHub.getUrlParamsObj(location.href),
          _ = +x.pid,
          O = "",
          j = 0,
          S = x.bx_third_client || "none",
          E = { language: navigator.language, platform: Object(c.d)() };
        window.bxPublicHub.resetStatus = P;
        var P = function () {
            y = !1;
          },
          C = function (t) {
            return bxPublicHub.multiAdRate > 0 &&
              (Math.random() < bxPublicHub.multiAdRate || x.testtwoad)
              ? bxPublicHub.requestTwoAd(c.c)
              : Object(s.b)({
                  url: a.a.lottery(),
                  method: "POST",
                  data: p(
                    {
                      wid: +x.wid || 1097,
                      wpid: +x.wpid || 0,
                      placement_type_v2: _,
                      advertiser_id: x.adid || "",
                    },
                    t ? { hijack: !0 } : {}
                  ),
                }).then(function (t) {
                  if (0 === t.ret) {
                    var e = t.data.item;
                    window.bxPublicHub &&
                      window.bxPublicHub.preloadCache &&
                      e &&
                      e.order_id &&
                      window.bxPublicHub.preloadCache(e.order_id);
                  }
                  return t;
                });
          };
        window.autoReceiveReward = function (t) {
          var e = c.a.getItem(c.c.countName),
            n = new Date().getTime(),
            r = !1;
          e ? l()(n).diff(l()(+e), "days") >= 1 && (r = !0) : (r = !0),
            (r || "hijack" === t) &&
              (r && c.a.setItem(c.c.countName, new Date().getTime()), M(t));
        };
        var T = function (t) {
            var e = (t && (t.msg || t.message)) || t;
            console.error("error: " + e),
              m.find(".modal-notice").fadeIn({ display: "flex" }),
              m.find(".modal-notice-content").html(e),
              setTimeout(function () {
                m.find(".modal-notice").fadeOut();
              }, 800);
          },
          D = function () {
            v = setInterval(function () {
              var t = m.find(".crab").not(".remove"),
                e = (function t(e) {
                  var n = Math.floor(Math.random() * e.length);
                  return e.eq(n).hasClass("active") && 1 !== e.length
                    ? t(e)
                    : n;
                })(t);
              t.eq(e).addClass("active").siblings().removeClass("active");
            }, 400);
          },
          N = function (t) {
            t < 0 && (t = 0),
              (b = t),
              c.a.setItem("bx_".concat(c.c.name, "_times"), b),
              b >= 0 && m.find(".lottery_times").text(b);
          },
          A = function (t, e) {
            v && clearInterval(v);
            var n = t.offset(),
              r = m.find(".bucket");
            if (((y = !0), t.addClass("running"), b <= 8 - j))
              return (window.bxPublicHub.resetStatus = P), k(t);
            window.bxPublicHub && window.bxPublicHub.preloadAdImg(),
              C(e)
                .then(function (e) {
                  b >= 1 ? b-- : (b = 0);
                  var i = e.data,
                    o = i.item,
                    a = i.type;
                  N(b),
                    r
                      .css({ top: n.top, left: n.left + n.width / 4 })
                      .addClass("active"),
                    r
                      .off("webkitAnimationEnd")
                      .on("webkitAnimationEnd", function () {
                        r.removeAttr("style").removeClass("active"),
                          t.addClass("remove").removeClass("running"),
                          D(),
                          o
                            ? ((o.gift_type = a),
                              (o.initStatusCallback = P),
                              (window.bx_gift_config = o),
                              Object(c.h)(E, "post", S, "game_play_result"),
                              "default" !== a
                                ? bxPublicHub.renderPopUpModal(a, o, g)
                                : H())
                            : H();
                      });
                })
                .catch(function (e) {
                  window.dataLayer.push({
                    event: "ga-data",
                    action: "rewarded failed",
                    label: "index",
                  }),
                    e.data &&
                      !isNaN(e.data.curr_lottery_times) &&
                      ((b = e.data.curr_lottery_times), N(b)),
                    t.removeClass("running"),
                    D(),
                    (y = !1),
                    e.message.indexOf("1120") > -1 ||
                    e.message.indexOf("-1") > -1 ||
                    e.message.indexOf("400") > -1 ||
                    e.message.indexOf("1000") > -1
                      ? H()
                      : T(e);
                });
          },
          k = function (t) {
            v && clearInterval(v);
            var e = t.offset(),
              n = m.find(".bucket"),
              r = c.a.getItem("".concat(c.c.name, "_auto_luckyplaycount")),
              i = c.a.getItem("".concat(c.c.name, "_auto_luckyplaycount_ts"));
            console.log(i, r),
              r && r > 0
                ? (console.log("1"),
                  n
                    .css({ top: e.top, left: e.left + e.width / 4 })
                    .addClass("active"),
                  n
                    .off("webkitAnimationEnd")
                    .on("webkitAnimationEnd", function () {
                      n.removeAttr("style").removeClass("active"),
                        t.addClass("remove").removeClass("running"),
                        D();
                      var e = document.createElement("script");
                      return (
                        (e.src = O),
                        document.body.append(e),
                        C().then(function (t) {
                          b >= 1 ? b-- : (b = 0), N(b), (y = !1);
                        })
                      );
                    }))
                : i
                ? Object(c.b)(i) &&
                  C()
                    .then(function (r) {
                      b >= 1 ? b-- : (b = 0);
                      var i = r.data,
                        o = i.item,
                        a = i.type;
                      N(b),
                        n
                          .css({ top: e.top, left: e.left + e.width / 4 })
                          .addClass("active"),
                        n
                          .off("webkitAnimationEnd")
                          .on("webkitAnimationEnd", function () {
                            n.removeAttr("style").removeClass("active"),
                              t.addClass("remove").removeClass("running"),
                              D(),
                              o
                                ? ((o.gift_type = a),
                                  (o.initStatusCallback = P),
                                  (window.bx_gift_config = o),
                                  Object(c.h)(E, "post", S, "game_play_result"),
                                  "default" !== a
                                    ? bxPublicHub.renderPopUpModal(a, o, g)
                                    : H())
                                : H();
                          });
                    })
                    .catch(function (e) {
                      window.dataLayer.push({
                        event: "ga-data",
                        action: "rewarded failed",
                        label: "index",
                      }),
                        e.data &&
                          !isNaN(e.data.curr_lottery_times) &&
                          ((b = e.data.curr_lottery_times), N(b)),
                        t.removeClass("running"),
                        D(),
                        (y = !1),
                        e.message.indexOf("1120") > -1 ||
                        e.message.indexOf("-1") > -1 ||
                        e.message.indexOf("400") > -1 ||
                        e.message.indexOf("1000") > -1
                          ? H()
                          : T(e);
                    })
                : (console.log("in"),
                  n
                    .css({ top: e.top, left: e.left + e.width / 4 })
                    .addClass("active"),
                  n
                    .off("webkitAnimationEnd")
                    .on("webkitAnimationEnd", function () {
                      n.removeAttr("style").removeClass("active"),
                        t.addClass("remove").removeClass("running"),
                        D();
                      var e = document.createElement("script");
                      return (
                        (e.src = O),
                        document.body.append(e),
                        C().then(function (t) {
                          b >= 1 ? b-- : (b = 0), N(b), (y = !1);
                        })
                      );
                    }));
          },
          M = function (e) {
            var n = Array.from(t(".crab"))
                .filter(function (t) {
                  return t.className.indexOf("remove") < 0;
                })
                .map(function (t) {
                  return t.getAttribute("data-key");
                }),
              r = n[Math.floor(Math.random() * n.length)],
              i = t('[data-key="'.concat(r, '"]'));
            A(i, e);
          };
        function $() {
          bxPublicHub.renderPopUpModal("showmore", null, g);
        }
        var H = function () {
          bxPublicHub.showNoPrizePop();
        };
        t(function () {
          Object(o.a)(),
            m.fadeIn({ display: "block" }),
            (function () {
              var t = c.a.getItem("".concat(c.c.name, "_init_config")),
                e = c.a.getItem("".concat(c.c.name, "_init_ts")),
                n = Math.floor(new Date().getTime() / 1e3),
                r = window.bxPublicHub.getUrlParamsObj(location.href);
              if (
                (r.gh && (window.bxPublicHub.apiHost = r.gh), e && n - e < 600)
              ) {
                var i = JSON.parse(t),
                  o = i.ext;
                if (o.sieveIndex) {
                  var u = o.sieveIndex,
                    f = u.index,
                    l = u.link;
                  (j = f), (O = l);
                }
                return (
                  (window.bxPublicHub.fragmentCount = o.fragmentCount),
                  (g = i.popupList),
                  bxPublicHub.renderExtPlugin(o, i, c.c.name),
                  Promise.resolve()
                );
              }
              return Object(s.b)({
                url: a.a.init(),
                method: "get",
                params: {
                  publisher: S,
                  widgetId: +r.wid || 0,
                  os: Object(c.d)(),
                  activityCategroy: c.c.name,
                },
              }).then(function (t) {
                if (0 === t.code) {
                  c.a.setItem(
                    "".concat(c.c.name, "_init_config"),
                    JSON.stringify(t)
                  ),
                    c.a.setItem("".concat(c.c.name, "_init_ts"), n);
                  var e = t.ext;
                  if (e.sieveIndex) {
                    var r = e.sieveIndex,
                      i = r.index,
                      o = r.link;
                    (j = i), (O = o);
                  }
                  (window.bxPublicHub.fragmentCount = e.fragmentCount),
                    (g = t.popupList),
                    bxPublicHub.renderExtPlugin(e, t, c.c.name);
                }
              });
            })()
              .then(function () {
                bxPublicHub.renderBackBtn(),
                  bxPublicHub.bxGameEvent.trigger("initSuccess", {
                    showKf: !0,
                  }),
                  Object(c.f)(x.wid),
                  bxPublicHub
                    .queryLotteryTimes(c.c.name)
                    .then(function (t) {
                      t <= 0 && $(), N(t);
                    })
                    .then(function () {
                      Object(c.h)(E, "post", S, "page_show_success"), D();
                    });
              })
              .catch(function (e) {
                console.log(e),
                  t(".refresh")
                    .show()
                    .on(h, function () {
                      window.location.reload();
                    });
              }),
            m
              .on(h, ".crab", function () {
                var e = t(this);
                return (
                  !y &&
                  ((w = Object(c.j)(8, 16)),
                  (E.playid = w),
                  Object(c.h)(E, "post", S, "game_play"),
                  b <= 0
                    ? (window.dataLayer.push({
                        event: "ga-data",
                        action: "no lottery_times",
                        label: "index",
                      }),
                      $(),
                      !1)
                    : void (e.hasClass("remove") || A(e)))
                );
              })
              .on(h, "[modal-open]", function () {
                var e = t(this).attr("modal-open");
                m.find("[modal-type=".concat(e, "]")).fadeIn({
                  display: "flex",
                });
              })
              .on(h, "[modal-close]", function () {
                var e = t(this).attr("modal-close");
                m.find("[modal-type=".concat(e, "]")).fadeOut();
              })
              .on(h, ".btn-record", function () {
                Object(c.e)(
                  S,
                  "http://"
                    .concat(window.bxPublicHub.gameHost, "/")
                    .concat(c.c.name, "/record.html")
                    .concat(location.search)
                );
              })
              .on(h, ".btn-count", function () {
                if (b <= 0) $();
                else {
                  if (y) return !1;
                  Object(c.h)(E, "post", S, "click_game_success"), M();
                }
              }),
            window.bxPublicHub.bxGameEvent.listen(
              "close_noprize",
              function (t) {
                P();
              }
            );
        }),
          (window.onload = function () {
            Object(c.g)() &&
              setTimeout(function () {
                var t = Object(u.a)(),
                  e = x.bx_third_client || "none";
                Object(c.h)(t, "post", e, "page_timing");
              }, 100);
          });
      }.call(this, n(21));
  },
  function (t, e, n) {
    t.exports = (function () {
      "use strict";
      var t = "millisecond",
        e = "second",
        n = "minute",
        r = "hour",
        i = "day",
        o = "week",
        a = "month",
        s = "quarter",
        c = "year",
        u = "date",
        f =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
        l =
          /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        d = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
        },
        p = function (t, e, n) {
          var r = String(t);
          return !r || r.length >= e
            ? t
            : "" + Array(e + 1 - r.length).join(n) + t;
        },
        h = {
          s: p,
          z: function (t) {
            var e = -t.utcOffset(),
              n = Math.abs(e),
              r = Math.floor(n / 60),
              i = n % 60;
            return (e <= 0 ? "+" : "-") + p(r, 2, "0") + ":" + p(i, 2, "0");
          },
          m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
              i = e.clone().add(r, a),
              o = n - i < 0,
              s = e.clone().add(r + (o ? -1 : 1), a);
            return +(-(r + (n - i) / (o ? i - s : s - i)) || 0);
          },
          a: function (t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          },
          p: function (f) {
            return (
              { M: a, y: c, w: o, d: i, D: u, h: r, m: n, s: e, ms: t, Q: s }[
                f
              ] ||
              String(f || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (t) {
            return void 0 === t;
          },
        },
        m = "en",
        g = {};
      g[m] = d;
      var v = function (t) {
          return t instanceof x;
        },
        y = function (t, e, n) {
          var r;
          if (!t) return m;
          if ("string" == typeof t) g[t] && (r = t), e && ((g[t] = e), (r = t));
          else {
            var i = t.name;
            (g[i] = t), (r = i);
          }
          return !n && r && (m = r), r || (!n && m);
        },
        b = function (t, e) {
          if (v(t)) return t.clone();
          var n = "object" == typeof e ? e : {};
          return (n.date = t), (n.args = arguments), new x(n);
        },
        w = h;
      (w.l = y),
        (w.i = v),
        (w.w = function (t, e) {
          return b(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
        });
      var x = (function () {
          function d(t) {
            (this.$L = this.$L || y(t.locale, null, !0)), this.parse(t);
          }
          var p = d.prototype;
          return (
            (p.parse = function (t) {
              (this.$d = (function (t) {
                var e = t.date,
                  n = t.utc;
                if (null === e) return new Date(NaN);
                if (w.u(e)) return new Date();
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                  var r = e.match(f);
                  if (r) {
                    var i = r[2] - 1 || 0,
                      o = (r[7] || "0").substring(0, 3);
                    return n
                      ? new Date(
                          Date.UTC(
                            r[1],
                            i,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            o
                          )
                        )
                      : new Date(
                          r[1],
                          i,
                          r[3] || 1,
                          r[4] || 0,
                          r[5] || 0,
                          r[6] || 0,
                          o
                        );
                  }
                }
                return new Date(e);
              })(t)),
                (this.$x = t.x || {}),
                this.init();
            }),
            (p.init = function () {
              var t = this.$d;
              (this.$y = t.getFullYear()),
                (this.$M = t.getMonth()),
                (this.$D = t.getDate()),
                (this.$W = t.getDay()),
                (this.$H = t.getHours()),
                (this.$m = t.getMinutes()),
                (this.$s = t.getSeconds()),
                (this.$ms = t.getMilliseconds());
            }),
            (p.$utils = function () {
              return w;
            }),
            (p.isValid = function () {
              return !("Invalid Date" === this.$d.toString());
            }),
            (p.isSame = function (t, e) {
              var n = b(t);
              return this.startOf(e) <= n && n <= this.endOf(e);
            }),
            (p.isAfter = function (t, e) {
              return b(t) < this.startOf(e);
            }),
            (p.isBefore = function (t, e) {
              return this.endOf(e) < b(t);
            }),
            (p.$g = function (t, e, n) {
              return w.u(t) ? this[e] : this.set(n, t);
            }),
            (p.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (p.valueOf = function () {
              return this.$d.getTime();
            }),
            (p.startOf = function (t, s) {
              var f = this,
                l = !!w.u(s) || s,
                d = w.p(t),
                p = function (t, e) {
                  var n = w.w(
                    f.$u ? Date.UTC(f.$y, e, t) : new Date(f.$y, e, t),
                    f
                  );
                  return l ? n : n.endOf(i);
                },
                h = function (t, e) {
                  return w.w(
                    f
                      .toDate()
                      [t].apply(
                        f.toDate("s"),
                        (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                      ),
                    f
                  );
                },
                m = this.$W,
                g = this.$M,
                v = this.$D,
                y = "set" + (this.$u ? "UTC" : "");
              switch (d) {
                case c:
                  return l ? p(1, 0) : p(31, 11);
                case a:
                  return l ? p(1, g) : p(0, g + 1);
                case o:
                  var b = this.$locale().weekStart || 0,
                    x = (m < b ? m + 7 : m) - b;
                  return p(l ? v - x : v + (6 - x), g);
                case i:
                case u:
                  return h(y + "Hours", 0);
                case r:
                  return h(y + "Minutes", 1);
                case n:
                  return h(y + "Seconds", 2);
                case e:
                  return h(y + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (p.endOf = function (t) {
              return this.startOf(t, !1);
            }),
            (p.$set = function (o, s) {
              var f,
                l = w.p(o),
                d = "set" + (this.$u ? "UTC" : ""),
                p = ((f = {}),
                (f[i] = d + "Date"),
                (f[u] = d + "Date"),
                (f[a] = d + "Month"),
                (f[c] = d + "FullYear"),
                (f[r] = d + "Hours"),
                (f[n] = d + "Minutes"),
                (f[e] = d + "Seconds"),
                (f[t] = d + "Milliseconds"),
                f)[l],
                h = l === i ? this.$D + (s - this.$W) : s;
              if (l === a || l === c) {
                var m = this.clone().set(u, 1);
                m.$d[p](h),
                  m.init(),
                  (this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d);
              } else p && this.$d[p](h);
              return this.init(), this;
            }),
            (p.set = function (t, e) {
              return this.clone().$set(t, e);
            }),
            (p.get = function (t) {
              return this[w.p(t)]();
            }),
            (p.add = function (t, s) {
              var u,
                f = this;
              t = Number(t);
              var l = w.p(s),
                d = function (e) {
                  var n = b(f);
                  return w.w(n.date(n.date() + Math.round(e * t)), f);
                };
              if (l === a) return this.set(a, this.$M + t);
              if (l === c) return this.set(c, this.$y + t);
              if (l === i) return d(1);
              if (l === o) return d(7);
              var p =
                  ((u = {}), (u[n] = 6e4), (u[r] = 36e5), (u[e] = 1e3), u)[l] ||
                  1,
                h = this.$d.getTime() + t * p;
              return w.w(h, this);
            }),
            (p.subtract = function (t, e) {
              return this.add(-1 * t, e);
            }),
            (p.format = function (t) {
              var e = this;
              if (!this.isValid()) return "Invalid Date";
              var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                r = w.z(this),
                i = this.$locale(),
                o = this.$H,
                a = this.$m,
                s = this.$M,
                c = i.weekdays,
                u = i.months,
                f = function (t, r, i, o) {
                  return (t && (t[r] || t(e, n))) || i[r].substr(0, o);
                },
                d = function (t) {
                  return w.s(o % 12 || 12, t, "0");
                },
                p =
                  i.meridiem ||
                  function (t, e, n) {
                    var r = t < 12 ? "AM" : "PM";
                    return n ? r.toLowerCase() : r;
                  },
                h = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: s + 1,
                  MM: w.s(s + 1, 2, "0"),
                  MMM: f(i.monthsShort, s, u, 3),
                  MMMM: f(u, s),
                  D: this.$D,
                  DD: w.s(this.$D, 2, "0"),
                  d: String(this.$W),
                  dd: f(i.weekdaysMin, this.$W, c, 2),
                  ddd: f(i.weekdaysShort, this.$W, c, 3),
                  dddd: c[this.$W],
                  H: String(o),
                  HH: w.s(o, 2, "0"),
                  h: d(1),
                  hh: d(2),
                  a: p(o, a, !0),
                  A: p(o, a, !1),
                  m: String(a),
                  mm: w.s(a, 2, "0"),
                  s: String(this.$s),
                  ss: w.s(this.$s, 2, "0"),
                  SSS: w.s(this.$ms, 3, "0"),
                  Z: r,
                };
              return n.replace(l, function (t, e) {
                return e || h[t] || r.replace(":", "");
              });
            }),
            (p.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (p.diff = function (t, u, f) {
              var l,
                d = w.p(u),
                p = b(t),
                h = 6e4 * (p.utcOffset() - this.utcOffset()),
                m = this - p,
                g = w.m(this, p);
              return (
                (g =
                  ((l = {}),
                  (l[c] = g / 12),
                  (l[a] = g),
                  (l[s] = g / 3),
                  (l[o] = (m - h) / 6048e5),
                  (l[i] = (m - h) / 864e5),
                  (l[r] = m / 36e5),
                  (l[n] = m / 6e4),
                  (l[e] = m / 1e3),
                  l)[d] || m),
                f ? g : w.a(g)
              );
            }),
            (p.daysInMonth = function () {
              return this.endOf(a).$D;
            }),
            (p.$locale = function () {
              return g[this.$L];
            }),
            (p.locale = function (t, e) {
              if (!t) return this.$L;
              var n = this.clone(),
                r = y(t, e, !0);
              return r && (n.$L = r), n;
            }),
            (p.clone = function () {
              return w.w(this.$d, this);
            }),
            (p.toDate = function () {
              return new Date(this.valueOf());
            }),
            (p.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (p.toISOString = function () {
              return this.$d.toISOString();
            }),
            (p.toString = function () {
              return this.$d.toUTCString();
            }),
            d
          );
        })(),
        _ = x.prototype;
      return (
        (b.prototype = _),
        [
          ["$ms", t],
          ["$s", e],
          ["$m", n],
          ["$H", r],
          ["$W", i],
          ["$M", a],
          ["$y", c],
          ["$D", u],
        ].forEach(function (t) {
          _[t[1]] = function (e) {
            return this.$g(e, t[0], t[1]);
          };
        }),
        (b.extend = function (t, e) {
          return t(e, x, b), b;
        }),
        (b.locale = y),
        (b.isDayjs = v),
        (b.unix = function (t) {
          return b(1e3 * t);
        }),
        (b.en = g[m]),
        (b.Ls = g),
        (b.p = {}),
        b
      );
    })();
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
      return p;
    }),
      n.d(e, "a", function () {
        return g;
      });
    var r = n(6),
      i = n.n(r),
      o = n(20),
      a = n.n(o),
      s = n(8),
      c = n.n(s),
      u = n(0);
    function f(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function l(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? f(Object(n), !0).forEach(function (e) {
              i()(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : f(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var d = window.bxPublicHub.getUrlParamsObj(location.href),
      p = {
        appKey: "websdk",
        appSecret: "540102bea2b22d56dec2834a4347a093fecc8637",
        deviceId: u.i,
        nonce: Math.floor(1e6 * Math.random(0, 1)),
        timestamp: Math.floor(new Date().getTime()),
        country: d.country || "vn",
      },
      h = {};
    1 == d.inner
      ? ((h = {
          flavor: d.flavor || d.bx_third_client,
          did: d.did || "",
          client: Object(u.d)(),
          version: d.version || d.v,
          uid: u.i,
          login_token: d.login_token || "",
          activity_categroy: u.c.name,
          app_id: "",
          is_web: 0,
        }),
        u.a.setItem("is_web", "0"))
      : ((h = {
          network:
            navigator.connection && "4g" == navigator.connection.effectiveType
              ? 1
              : 0,
          client: Object(u.d)(),
          cp_name: d.bx_third_client || "none",
          version: "1.0.0",
          is_web: 1,
          user_agent: window.navigator.userAgent.toLocaleLowerCase(),
          activity_categroy: u.c.name,
          web_uid: u.i,
        }),
        u.a.setItem("is_web", "1")),
      (h.country = d.country || "vn");
    var m = a.a.create();
    function g(t) {
      for (
        var e = (function (t) {
            for (
              var e = Object.keys(t).sort(), n = {}, r = 0;
              r < e.length;
              r++
            )
              n[e[r]] = t[e[r]];
            return n;
          })(t),
          n = [],
          r = 0,
          i = Object.entries(e);
        r < i.length;
        r++
      ) {
        var o = i[r];
        null !== o[1] &&
          o[1].toString().length > 0 &&
          n.push("".concat(o[0], "=").concat(o[1]));
      }
      return n.join(",");
    }
    (m.defaults.withCredentials = !1),
      (m.defaults.timeout = 3e4),
      m.interceptors.request.use(
        function (t) {
          if ("post" === t.method)
            return (
              t.data instanceof FormData
                ? (t.headers["Content-Type"] = "multipart/form-data")
                : (t.headers["Content-Type"] =
                    "application/x-www-form-urlencoded; charset=UTF-8"),
              (t.data = l(l({}, t.data), h)),
              t
            );
          if ("get" === t.method) {
            var e = l(l({}, p), t.params),
              n = c()(g(e)).toString().toLocaleLowerCase();
            return (
              (t.params = l(l({}, t.params), {}, { signature: n }, p)),
              delete t.params.appSecret,
              t
            );
          }
        },
        function (t) {
          return Promise.reject(t);
        }
      ),
      m.interceptors.response.use(
        function (t) {
          var e = t.data;
          return 0 === e.errcode || 0 === e.ret || 0 === e.code
            ? e
            : Promise.reject(
                l(
                  {
                    message: ""
                      .concat(e.ret, ": ")
                      .concat(e.user_msg || e.msg || ""),
                  },
                  e
                )
              );
        },
        function (t) {
          return Promise.reject(t);
        }
      ),
      (e.b = m);
  },
  function (t, e, n) {
    var r, i;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */ !(function (o) {
      if (
        (void 0 ===
          (i = "function" == typeof (r = o) ? r.call(e, n, e, t) : r) ||
          (t.exports = i),
        !0,
        (t.exports = o()),
        !!0)
      ) {
        var a = window.Cookies,
          s = (window.Cookies = o());
        s.noConflict = function () {
          return (window.Cookies = a), s;
        };
      }
    })(function () {
      function t() {
        for (var t = 0, e = {}; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      function e(t) {
        return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(r) {
        function i() {}
        function o(e, n, o) {
          if ("undefined" != typeof document) {
            "number" == typeof (o = t({ path: "/" }, i.defaults, o)).expires &&
              (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
              (o.expires = o.expires ? o.expires.toUTCString() : "");
            try {
              var a = JSON.stringify(n);
              /^[\{\[]/.test(a) && (n = a);
            } catch (t) {}
            (n = r.write
              ? r.write(n, e)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (e = encodeURIComponent(String(e))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var s = "";
            for (var c in o)
              o[c] &&
                ((s += "; " + c),
                !0 !== o[c] && (s += "=" + o[c].split(";")[0]));
            return (document.cookie = e + "=" + n + s);
          }
        }
        function a(t, n) {
          if ("undefined" != typeof document) {
            for (
              var i = {},
                o = document.cookie ? document.cookie.split("; ") : [],
                a = 0;
              a < o.length;
              a++
            ) {
              var s = o[a].split("="),
                c = s.slice(1).join("=");
              n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
              try {
                var u = e(s[0]);
                if (((c = (r.read || r)(c, u) || e(c)), n))
                  try {
                    c = JSON.parse(c);
                  } catch (t) {}
                if (((i[u] = c), t === u)) break;
              } catch (t) {}
            }
            return t ? i[t] : i;
          }
        }
        return (
          (i.set = o),
          (i.get = function (t) {
            return a(t, !1);
          }),
          (i.getJSON = function (t) {
            return a(t, !0);
          }),
          (i.remove = function (e, n) {
            o(e, "", t(n, { expires: -1 }));
          }),
          (i.defaults = {}),
          (i.withConverter = n),
          i
        );
      })(function () {});
    });
  },
  function (t, e) {
    (t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function (t, e, n) {
    "use strict";
    var r = n(41),
      i = n(42),
      o = n(19);
    t.exports = { formats: o, parse: i, stringify: r };
  },
  function (t, e, n) {
    var r, i, o, a, s, c, u, f;
    t.exports =
      ((f = n(22)),
      (i = (r = f).lib),
      (o = i.WordArray),
      (a = i.Hasher),
      (s = r.algo),
      (c = []),
      (u = s.SHA1 =
        a.extend({
          _doReset: function () {
            this._hash = new o.init([
              1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]);
          },
          _doProcessBlock: function (t, e) {
            for (
              var n = this._hash.words,
                r = n[0],
                i = n[1],
                o = n[2],
                a = n[3],
                s = n[4],
                u = 0;
              u < 80;
              u++
            ) {
              if (u < 16) c[u] = 0 | t[e + u];
              else {
                var f = c[u - 3] ^ c[u - 8] ^ c[u - 14] ^ c[u - 16];
                c[u] = (f << 1) | (f >>> 31);
              }
              var l = ((r << 5) | (r >>> 27)) + s + c[u];
              (l +=
                u < 20
                  ? 1518500249 + ((i & o) | (~i & a))
                  : u < 40
                  ? 1859775393 + (i ^ o ^ a)
                  : u < 60
                  ? ((i & o) | (i & a) | (o & a)) - 1894007588
                  : (i ^ o ^ a) - 899497514),
                (s = a),
                (a = o),
                (o = (i << 30) | (i >>> 2)),
                (i = r),
                (r = l);
            }
            (n[0] = (n[0] + r) | 0),
              (n[1] = (n[1] + i) | 0),
              (n[2] = (n[2] + o) | 0),
              (n[3] = (n[3] + a) | 0),
              (n[4] = (n[4] + s) | 0);
          },
          _doFinalize: function () {
            var t = this._data,
              e = t.words,
              n = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return (
              (e[r >>> 5] |= 128 << (24 - (r % 32))),
              (e[14 + (((r + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
              (e[15 + (((r + 64) >>> 9) << 4)] = n),
              (t.sigBytes = 4 * e.length),
              this._process(),
              this._hash
            );
          },
          clone: function () {
            var t = a.clone.call(this);
            return (t._hash = this._hash.clone()), t;
          },
        })),
      (r.SHA1 = a._createHelper(u)),
      (r.HmacSHA1 = a._createHmacHelper(u)),
      f.SHA1);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return r;
    });
    var r = {
      lottery: function () {
        return "https://".concat(window.bxPublicHub.crabApi, "/query_item");
      },
      get_lottery_times: function () {
        return "https://".concat(
          window.bxPublicHub.crabApi,
          "/query_lottery_times"
        );
      },
      get_award_list: function () {
        return "https://".concat(window.bxPublicHub.crabApi, "/history_list");
      },
      init: function () {
        return "https://".concat(
          window.bxPublicHub.apiHost,
          "/api/ig/game/init"
        );
      },
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return t.apply(e, n);
      };
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    function i(t) {
      return encodeURIComponent(t)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    t.exports = function (t, e, n) {
      if (!e) return t;
      var o;
      if (n) o = n(e);
      else if (r.isURLSearchParams(e)) o = e.toString();
      else {
        var a = [];
        r.forEach(e, function (t, e) {
          null != t &&
            (r.isArray(t) ? (e += "[]") : (t = [t]),
            r.forEach(t, function (t) {
              r.isDate(t)
                ? (t = t.toISOString())
                : r.isObject(t) && (t = JSON.stringify(t)),
                a.push(i(e) + "=" + i(t));
            }));
        }),
          (o = a.join("&"));
      }
      if (o) {
        var s = t.indexOf("#");
        -1 !== s && (t = t.slice(0, s)),
          (t += (-1 === t.indexOf("?") ? "?" : "&") + o);
      }
      return t;
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return !(!t || !t.__CANCEL__);
    };
  },
  function (t, e, n) {
    "use strict";
    (function (e) {
      var r = n(1),
        i = n(29),
        o = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(t, e) {
        !r.isUndefined(t) &&
          r.isUndefined(t["Content-Type"]) &&
          (t["Content-Type"] = e);
      }
      var s,
        c = {
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              (void 0 !== e &&
                "[object process]" === Object.prototype.toString.call(e))) &&
              (s = n(14)),
            s),
          transformRequest: [
            function (t, e) {
              return (
                i(e, "Accept"),
                i(e, "Content-Type"),
                r.isFormData(t) ||
                r.isArrayBuffer(t) ||
                r.isBuffer(t) ||
                r.isStream(t) ||
                r.isFile(t) ||
                r.isBlob(t)
                  ? t
                  : r.isArrayBufferView(t)
                  ? t.buffer
                  : r.isURLSearchParams(t)
                  ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"),
                    t.toString())
                  : r.isObject(t)
                  ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t))
                  : t
              );
            },
          ],
          transformResponse: [
            function (t) {
              if ("string" == typeof t)
                try {
                  t = JSON.parse(t);
                } catch (t) {}
              return t;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (t) {
            return t >= 200 && t < 300;
          },
        };
      (c.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        r.forEach(["delete", "get", "head"], function (t) {
          c.headers[t] = {};
        }),
        r.forEach(["post", "put", "patch"], function (t) {
          c.headers[t] = r.merge(o);
        }),
        (t.exports = c);
    }.call(this, n(28)));
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      i = n(30),
      o = n(11),
      a = n(32),
      s = n(35),
      c = n(36),
      u = n(15);
    t.exports = function (t) {
      return new Promise(function (e, f) {
        var l = t.data,
          d = t.headers;
        r.isFormData(l) && delete d["Content-Type"];
        var p = new XMLHttpRequest();
        if (t.auth) {
          var h = t.auth.username || "",
            m = t.auth.password || "";
          d.Authorization = "Basic " + btoa(h + ":" + m);
        }
        var g = a(t.baseURL, t.url);
        if (
          (p.open(
            t.method.toUpperCase(),
            o(g, t.params, t.paramsSerializer),
            !0
          ),
          (p.timeout = t.timeout),
          (p.onreadystatechange = function () {
            if (
              p &&
              4 === p.readyState &&
              (0 !== p.status ||
                (p.responseURL && 0 === p.responseURL.indexOf("file:")))
            ) {
              var n =
                  "getAllResponseHeaders" in p
                    ? s(p.getAllResponseHeaders())
                    : null,
                r = {
                  data:
                    t.responseType && "text" !== t.responseType
                      ? p.response
                      : p.responseText,
                  status: p.status,
                  statusText: p.statusText,
                  headers: n,
                  config: t,
                  request: p,
                };
              i(e, f, r), (p = null);
            }
          }),
          (p.onabort = function () {
            p && (f(u("Request aborted", t, "ECONNABORTED", p)), (p = null));
          }),
          (p.onerror = function () {
              // 将原来请求成功后执行的代码放到请求失败这里
              // 这样, 即使请求失败, 页面也能继续运行
            const rrrrr = {
              code: 0,
              message: "",
              popupList: [
                {
                  modelId: "1",
                  modelName: "dialog",
                  jsLink:
                    "/bxflux/popup_plugin/bx_popup_dialog/bx_popup_dialog_id.4c7d7a0b.js",
                  showWeight: 1,
                },
                {
                  modelId: "2",
                  modelName: "redpkg",
                  jsLink:
                    "/bxflux/bx_popup_redpkg/bx_popup_redpkg_id.21ae3cf2.js",
                  showWeight: 2,
                },
                {
                  modelId: "3",
                  modelName: "coupon",
                  jsLink:
                    "/bxflux/popup_plugin/bx_popup_coupon/bx_popup_coupon_id.778b8e37.js",
                  showWeight: 0,
                },
                {
                  modelId: "7",
                  modelName: "egg",
                  jsLink:
                    "/bxflux/popup_plugin/bx_popup_egg/bx_popup_egg_id.9fd94b98.js",
                  showWeight: 0,
                },
                {
                  modelId: "8",
                  modelName: "scratchV2",
                  jsLink:
                    "/bxflux/popup_plugin/bx_popup_scratchV2/bx_popup_scratchV2_id.c3f8d3a4.js",
                  showWeight: 0,
                },
                {
                  modelId: "100",
                  modelName: "xu",
                  jsLink: "/bxflux/popup_plugin/bx_popup_xu/bx_popup_xu_id.js",
                  showWeight: 0,
                },
                {
                  modelId: "200",
                  modelName: "doublead",
                  jsLink:
                    "/bxflux/popup_plugin/bx_popup_doublead/bx_popup_doublead_id.69fef693.js",
                  showWeight: 0,
                },
                {
                  modelId: "201",
                  modelName: "showmore",
                  jsLink:
                    "/bxflux/popup_plugin/bx_popup_showmore/bx_popup_showmore_id.js",
                  showWeight: 0,
                },
              ],
              drainageList: [
                {
                  drainageId: "1",
                  drainageName: "cat",
                  jsLink: "https://ashdkf.com/sfsd234.js",
                  showCount: "4",
                  landing: { tab: "self", url: "https://www.google.com" },
                },
              ],
              hosts: {
                ad: "lottery.flygame.io/crab_api/v1",
                adPath: "lottery.flygame.io/crab_api/v1",
                log: "nstat.flygame.io",
                api: "api.flygame.io",
              },
              ext: {
                autoPlayGame: false,
                hijack: {
                  showed: true,
                  jsLink:
                    "file:///Users/liushaoquan/Downloads/us.sitesucker.mac.sitesucker/game.flygame.io/bxflux/hijack_plugin/bx_hijack_id.js",
                },
                gameBack: { showed: true, resize: 1 },
                tab: "self",
                treasureBoxEnable: true,
                fragmentCount: 5,
                sieveIndex: {},
                reward: null,
                askModal: { showed: false, jsLink: "" },
              },
            };
            var n =
                "getAllResponseHeaders" in p
                  ? s(p.getAllResponseHeaders())
                  : null,
              r = {
                data:
                  t.responseType && "text" !== t.responseType ? rrrrr : rrrrr,
                status: 200,
                statusText: p.statusText,
                headers: n,
                config: t,
                request: p,
              };
            i(e, f, r), (p = null);
            f(u("Network Error", t, null, p)), (p = null);
          }),
          (p.ontimeout = function () {
            var e = "timeout of " + t.timeout + "ms exceeded";
            t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
              f(u(e, t, "ECONNABORTED", p)),
              (p = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var v = n(37),
            y =
              (t.withCredentials || c(g)) && t.xsrfCookieName
                ? v.read(t.xsrfCookieName)
                : void 0;
          y && (d[t.xsrfHeaderName] = y);
        }
        if (
          ("setRequestHeader" in p &&
            r.forEach(d, function (t, e) {
              void 0 === l && "content-type" === e.toLowerCase()
                ? delete d[e]
                : p.setRequestHeader(e, t);
            }),
          r.isUndefined(t.withCredentials) ||
            (p.withCredentials = !!t.withCredentials),
          t.responseType)
        )
          try {
            p.responseType = t.responseType;
          } catch (e) {
            if ("json" !== t.responseType) throw e;
          }
        "function" == typeof t.onDownloadProgress &&
          p.addEventListener("progress", t.onDownloadProgress),
          "function" == typeof t.onUploadProgress &&
            p.upload &&
            p.upload.addEventListener("progress", t.onUploadProgress),
          t.cancelToken &&
            t.cancelToken.promise.then(function (t) {
              p && (p.abort(), f(t), (p = null));
            }),
          void 0 === l && (l = null),
          p.send(l);
      });
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(31);
    t.exports = function (t, e, n, i, o) {
      var a = new Error(t);
      return r(a, e, n, i, o);
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function (t, e) {
      e = e || {};
      var n = {},
        i = ["url", "method", "params", "data"],
        o = ["headers", "auth", "proxy"],
        a = [
          "baseURL",
          "url",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "maxContentLength",
          "validateStatus",
          "maxRedirects",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
        ];
      r.forEach(i, function (t) {
        void 0 !== e[t] && (n[t] = e[t]);
      }),
        r.forEach(o, function (i) {
          r.isObject(e[i])
            ? (n[i] = r.deepMerge(t[i], e[i]))
            : void 0 !== e[i]
            ? (n[i] = e[i])
            : r.isObject(t[i])
            ? (n[i] = r.deepMerge(t[i]))
            : void 0 !== t[i] && (n[i] = t[i]);
        }),
        r.forEach(a, function (r) {
          void 0 !== e[r] ? (n[r] = e[r]) : void 0 !== t[r] && (n[r] = t[r]);
        });
      var s = i.concat(o).concat(a),
        c = Object.keys(e).filter(function (t) {
          return -1 === s.indexOf(t);
        });
      return (
        r.forEach(c, function (r) {
          void 0 !== e[r] ? (n[r] = e[r]) : void 0 !== t[r] && (n[r] = t[r]);
        }),
        n
      );
    };
  },
  function (t, e, n) {
    "use strict";
    function r(t) {
      this.message = t;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (t.exports = r);
  },
  function (t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty,
      i = Array.isArray,
      o = (function () {
        for (var t = [], e = 0; e < 256; ++e)
          t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t;
      })(),
      a = function (t, e) {
        for (
          var n = e && e.plainObjects ? Object.create(null) : {}, r = 0;
          r < t.length;
          ++r
        )
          void 0 !== t[r] && (n[r] = t[r]);
        return n;
      };
    t.exports = {
      arrayToObject: a,
      assign: function (t, e) {
        return Object.keys(e).reduce(function (t, n) {
          return (t[n] = e[n]), t;
        }, t);
      },
      combine: function (t, e) {
        return [].concat(t, e);
      },
      compact: function (t) {
        for (
          var e = [{ obj: { o: t }, prop: "o" }], n = [], r = 0;
          r < e.length;
          ++r
        )
          for (
            var o = e[r], a = o.obj[o.prop], s = Object.keys(a), c = 0;
            c < s.length;
            ++c
          ) {
            var u = s[c],
              f = a[u];
            "object" == typeof f &&
              null !== f &&
              -1 === n.indexOf(f) &&
              (e.push({ obj: a, prop: u }), n.push(f));
          }
        return (
          (function (t) {
            for (; t.length > 1; ) {
              var e = t.pop(),
                n = e.obj[e.prop];
              if (i(n)) {
                for (var r = [], o = 0; o < n.length; ++o)
                  void 0 !== n[o] && r.push(n[o]);
                e.obj[e.prop] = r;
              }
            }
          })(e),
          t
        );
      },
      decode: function (t, e, n) {
        var r = t.replace(/\+/g, " ");
        if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(r);
        } catch (t) {
          return r;
        }
      },
      encode: function (t, e, n) {
        if (0 === t.length) return t;
        var r = "string" == typeof t ? t : String(t);
        if ("iso-8859-1" === n)
          return escape(r).replace(/%u[0-9a-f]{4}/gi, function (t) {
            return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
          });
        for (var i = "", a = 0; a < r.length; ++a) {
          var s = r.charCodeAt(a);
          45 === s ||
          46 === s ||
          95 === s ||
          126 === s ||
          (s >= 48 && s <= 57) ||
          (s >= 65 && s <= 90) ||
          (s >= 97 && s <= 122)
            ? (i += r.charAt(a))
            : s < 128
            ? (i += o[s])
            : s < 2048
            ? (i += o[192 | (s >> 6)] + o[128 | (63 & s)])
            : s < 55296 || s >= 57344
            ? (i +=
                o[224 | (s >> 12)] +
                o[128 | ((s >> 6) & 63)] +
                o[128 | (63 & s)])
            : ((a += 1),
              (s = 65536 + (((1023 & s) << 10) | (1023 & r.charCodeAt(a)))),
              (i +=
                o[240 | (s >> 18)] +
                o[128 | ((s >> 12) & 63)] +
                o[128 | ((s >> 6) & 63)] +
                o[128 | (63 & s)]));
        }
        return i;
      },
      isBuffer: function (t) {
        return (
          !(!t || "object" != typeof t) &&
          !!(
            t.constructor &&
            t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          )
        );
      },
      isRegExp: function (t) {
        return "[object RegExp]" === Object.prototype.toString.call(t);
      },
      merge: function t(e, n, o) {
        if (!n) return e;
        if ("object" != typeof n) {
          if (i(e)) e.push(n);
          else {
            if (!e || "object" != typeof e) return [e, n];
            ((o && (o.plainObjects || o.allowPrototypes)) ||
              !r.call(Object.prototype, n)) &&
              (e[n] = !0);
          }
          return e;
        }
        if (!e || "object" != typeof e) return [e].concat(n);
        var s = e;
        return (
          i(e) && !i(n) && (s = a(e, o)),
          i(e) && i(n)
            ? (n.forEach(function (n, i) {
                if (r.call(e, i)) {
                  var a = e[i];
                  a && "object" == typeof a && n && "object" == typeof n
                    ? (e[i] = t(a, n, o))
                    : e.push(n);
                } else e[i] = n;
              }),
              e)
            : Object.keys(n).reduce(function (e, i) {
                var a = n[i];
                return r.call(e, i) ? (e[i] = t(e[i], a, o)) : (e[i] = a), e;
              }, s)
        );
      },
    };
  },
  function (t, e, n) {
    "use strict";
    var r = String.prototype.replace,
      i = /%20/g;
    t.exports = {
      default: "RFC3986",
      formatters: {
        RFC1738: function (t) {
          return r.call(t, i, "+");
        },
        RFC3986: function (t) {
          return t;
        },
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986",
    };
  },
  function (t, e, n) {
    t.exports = n(23);
  },
  function (t, e, n) {
    var r, i, o;
    (i = "undefined" != typeof window ? window : this),
      (o = function (t) {
        var e,
          n = (function () {
            var e,
              n,
              r,
              i,
              o,
              a = [],
              s = a.concat,
              c = a.filter,
              u = a.slice,
              f = t.document,
              l = {},
              d = {},
              p = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1,
              },
              h = /^\s*<(\w+|!)[^>]*>/,
              m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
              g =
                /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
              v = /^(?:body|html)$/i,
              y = /([A-Z])/g,
              b = [
                "val",
                "css",
                "html",
                "text",
                "data",
                "width",
                "height",
                "offset",
              ],
              w = f.createElement("table"),
              x = f.createElement("tr"),
              _ = {
                tr: f.createElement("tbody"),
                tbody: w,
                thead: w,
                tfoot: w,
                td: x,
                th: x,
                "*": f.createElement("div"),
              },
              O = /complete|loaded|interactive/,
              j = /^[\w-]*$/,
              S = {},
              E = S.toString,
              P = {},
              C = f.createElement("div"),
              T = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable",
              },
              D =
                Array.isArray ||
                function (t) {
                  return t instanceof Array;
                };
            function N(t) {
              return null == t ? String(t) : S[E.call(t)] || "object";
            }
            function A(t) {
              return "function" == N(t);
            }
            function k(t) {
              return null != t && t == t.window;
            }
            function M(t) {
              return null != t && t.nodeType == t.DOCUMENT_NODE;
            }
            function $(t) {
              return "object" == N(t);
            }
            function H(t) {
              return (
                $(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype
              );
            }
            function L(t) {
              var e = !!t && "length" in t && t.length,
                r = n.type(t);
              return (
                "function" != r &&
                !k(t) &&
                ("array" == r ||
                  0 === e ||
                  ("number" == typeof e && e > 0 && e - 1 in t))
              );
            }
            function I(t) {
              return t
                .replace(/::/g, "/")
                .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
                .replace(/([a-z\d])([A-Z])/g, "$1_$2")
                .replace(/_/g, "-")
                .toLowerCase();
            }
            function R(t) {
              return t in d
                ? d[t]
                : (d[t] = new RegExp("(^|\\s)" + t + "(\\s|$)"));
            }
            function B(t, e) {
              return "number" != typeof e || p[I(t)] ? e : e + "px";
            }
            function U(t) {
              return "children" in t
                ? u.call(t.children)
                : n.map(t.childNodes, function (t) {
                    if (1 == t.nodeType) return t;
                  });
            }
            function F(t, e) {
              var n,
                r = t ? t.length : 0;
              for (n = 0; n < r; n++) this[n] = t[n];
              (this.length = r), (this.selector = e || "");
            }
            function q(t, n, r) {
              for (e in n)
                r && (H(n[e]) || D(n[e]))
                  ? (H(n[e]) && !H(t[e]) && (t[e] = {}),
                    D(n[e]) && !D(t[e]) && (t[e] = []),
                    q(t[e], n[e], r))
                  : void 0 !== n[e] && (t[e] = n[e]);
            }
            function z(t, e) {
              return null == e ? n(t) : n(t).filter(e);
            }
            function Y(t, e, n, r) {
              return A(e) ? e.call(t, n, r) : e;
            }
            function Z(t, e, n) {
              null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
            }
            function J(t, e) {
              var n = t.className || "",
                r = n && void 0 !== n.baseVal;
              if (void 0 === e) return r ? n.baseVal : n;
              r ? (n.baseVal = e) : (t.className = e);
            }
            function V(t) {
              try {
                return t
                  ? "true" == t ||
                      ("false" != t &&
                        ("null" == t
                          ? null
                          : +t + "" == t
                          ? +t
                          : /^[\[\{]/.test(t)
                          ? n.parseJSON(t)
                          : t))
                  : t;
              } catch (e) {
                return t;
              }
            }
            function W(t, e) {
              e(t);
              for (var n = 0, r = t.childNodes.length; n < r; n++)
                W(t.childNodes[n], e);
            }
            return (
              (P.matches = function (t, e) {
                if (!e || !t || 1 !== t.nodeType) return !1;
                var n =
                  t.matches ||
                  t.webkitMatchesSelector ||
                  t.mozMatchesSelector ||
                  t.oMatchesSelector ||
                  t.matchesSelector;
                if (n) return n.call(t, e);
                var r,
                  i = t.parentNode,
                  o = !i;
                return (
                  o && (i = C).appendChild(t),
                  (r = ~P.qsa(i, e).indexOf(t)),
                  o && C.removeChild(t),
                  r
                );
              }),
              (i = function (t) {
                return t.replace(/-+(.)?/g, function (t, e) {
                  return e ? e.toUpperCase() : "";
                });
              }),
              (o = function (t) {
                return c.call(t, function (e, n) {
                  return t.indexOf(e) == n;
                });
              }),
              (P.fragment = function (t, e, r) {
                var i, o, a;
                return (
                  m.test(t) && (i = n(f.createElement(RegExp.$1))),
                  i ||
                    (t.replace && (t = t.replace(g, "<$1></$2>")),
                    void 0 === e && (e = h.test(t) && RegExp.$1),
                    e in _ || (e = "*"),
                    ((a = _[e]).innerHTML = "" + t),
                    (i = n.each(u.call(a.childNodes), function () {
                      a.removeChild(this);
                    }))),
                  H(r) &&
                    ((o = n(i)),
                    n.each(r, function (t, e) {
                      b.indexOf(t) > -1 ? o[t](e) : o.attr(t, e);
                    })),
                  i
                );
              }),
              (P.Z = function (t, e) {
                return new F(t, e);
              }),
              (P.isZ = function (t) {
                return t instanceof P.Z;
              }),
              (P.init = function (t, e) {
                var r, i;
                if (!t) return P.Z();
                if ("string" == typeof t)
                  if ("<" == (t = t.trim())[0] && h.test(t))
                    (r = P.fragment(t, RegExp.$1, e)), (t = null);
                  else {
                    if (void 0 !== e) return n(e).find(t);
                    r = P.qsa(f, t);
                  }
                else {
                  if (A(t)) return n(f).ready(t);
                  if (P.isZ(t)) return t;
                  if (D(t))
                    (i = t),
                      (r = c.call(i, function (t) {
                        return null != t;
                      }));
                  else if ($(t)) (r = [t]), (t = null);
                  else if (h.test(t))
                    (r = P.fragment(t.trim(), RegExp.$1, e)), (t = null);
                  else {
                    if (void 0 !== e) return n(e).find(t);
                    r = P.qsa(f, t);
                  }
                }
                return P.Z(r, t);
              }),
              ((n = function (t, e) {
                return P.init(t, e);
              }).extend = function (t) {
                var e,
                  n = u.call(arguments, 1);
                return (
                  "boolean" == typeof t && ((e = t), (t = n.shift())),
                  n.forEach(function (n) {
                    q(t, n, e);
                  }),
                  t
                );
              }),
              (P.qsa = function (t, e) {
                var n,
                  r = "#" == e[0],
                  i = !r && "." == e[0],
                  o = r || i ? e.slice(1) : e,
                  a = j.test(o);
                return t.getElementById && a && r
                  ? (n = t.getElementById(o))
                    ? [n]
                    : []
                  : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType
                  ? []
                  : u.call(
                      a && !r && t.getElementsByClassName
                        ? i
                          ? t.getElementsByClassName(o)
                          : t.getElementsByTagName(e)
                        : t.querySelectorAll(e)
                    );
              }),
              (n.contains = f.documentElement.contains
                ? function (t, e) {
                    return t !== e && t.contains(e);
                  }
                : function (t, e) {
                    for (; e && (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
              (n.type = N),
              (n.isFunction = A),
              (n.isWindow = k),
              (n.isArray = D),
              (n.isPlainObject = H),
              (n.isEmptyObject = function (t) {
                var e;
                for (e in t) return !1;
                return !0;
              }),
              (n.isNumeric = function (t) {
                var e = Number(t),
                  n = typeof t;
                return (
                  (null != t &&
                    "boolean" != n &&
                    ("string" != n || t.length) &&
                    !isNaN(e) &&
                    isFinite(e)) ||
                  !1
                );
              }),
              (n.inArray = function (t, e, n) {
                return a.indexOf.call(e, t, n);
              }),
              (n.camelCase = i),
              (n.trim = function (t) {
                return null == t ? "" : String.prototype.trim.call(t);
              }),
              (n.uuid = 0),
              (n.support = {}),
              (n.expr = {}),
              (n.noop = function () {}),
              (n.map = function (t, e) {
                var r,
                  i,
                  o,
                  a,
                  s = [];
                if (L(t))
                  for (i = 0; i < t.length; i++)
                    null != (r = e(t[i], i)) && s.push(r);
                else for (o in t) null != (r = e(t[o], o)) && s.push(r);
                return (a = s).length > 0 ? n.fn.concat.apply([], a) : a;
              }),
              (n.each = function (t, e) {
                var n, r;
                if (L(t)) {
                  for (n = 0; n < t.length; n++)
                    if (!1 === e.call(t[n], n, t[n])) return t;
                } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
                return t;
              }),
              (n.grep = function (t, e) {
                return c.call(t, e);
              }),
              t.JSON && (n.parseJSON = JSON.parse),
              n.each(
                "Boolean Number String Function Array Date RegExp Object Error".split(
                  " "
                ),
                function (t, e) {
                  S["[object " + e + "]"] = e.toLowerCase();
                }
              ),
              (n.fn = {
                constructor: P.Z,
                length: 0,
                forEach: a.forEach,
                reduce: a.reduce,
                push: a.push,
                sort: a.sort,
                splice: a.splice,
                indexOf: a.indexOf,
                concat: function () {
                  var t,
                    e,
                    n = [];
                  for (t = 0; t < arguments.length; t++)
                    (e = arguments[t]), (n[t] = P.isZ(e) ? e.toArray() : e);
                  return s.apply(P.isZ(this) ? this.toArray() : this, n);
                },
                map: function (t) {
                  return n(
                    n.map(this, function (e, n) {
                      return t.call(e, n, e);
                    })
                  );
                },
                slice: function () {
                  return n(u.apply(this, arguments));
                },
                ready: function (t) {
                  return (
                    O.test(f.readyState) && f.body
                      ? t(n)
                      : f.addEventListener(
                          "DOMContentLoaded",
                          function () {
                            t(n);
                          },
                          !1
                        ),
                    this
                  );
                },
                get: function (t) {
                  return void 0 === t
                    ? u.call(this)
                    : this[t >= 0 ? t : t + this.length];
                },
                toArray: function () {
                  return this.get();
                },
                size: function () {
                  return this.length;
                },
                remove: function () {
                  return this.each(function () {
                    null != this.parentNode &&
                      this.parentNode.removeChild(this);
                  });
                },
                each: function (t) {
                  return (
                    a.every.call(this, function (e, n) {
                      return !1 !== t.call(e, n, e);
                    }),
                    this
                  );
                },
                filter: function (t) {
                  return A(t)
                    ? this.not(this.not(t))
                    : n(
                        c.call(this, function (e) {
                          return P.matches(e, t);
                        })
                      );
                },
                add: function (t, e) {
                  return n(o(this.concat(n(t, e))));
                },
                is: function (t) {
                  return this.length > 0 && P.matches(this[0], t);
                },
                not: function (t) {
                  var e = [];
                  if (A(t) && void 0 !== t.call)
                    this.each(function (n) {
                      t.call(this, n) || e.push(this);
                    });
                  else {
                    var r =
                      "string" == typeof t
                        ? this.filter(t)
                        : L(t) && A(t.item)
                        ? u.call(t)
                        : n(t);
                    this.forEach(function (t) {
                      r.indexOf(t) < 0 && e.push(t);
                    });
                  }
                  return n(e);
                },
                has: function (t) {
                  return this.filter(function () {
                    return $(t) ? n.contains(this, t) : n(this).find(t).size();
                  });
                },
                eq: function (t) {
                  return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
                },
                first: function () {
                  var t = this[0];
                  return t && !$(t) ? t : n(t);
                },
                last: function () {
                  var t = this[this.length - 1];
                  return t && !$(t) ? t : n(t);
                },
                find: function (t) {
                  var e = this;
                  return t
                    ? "object" == typeof t
                      ? n(t).filter(function () {
                          var t = this;
                          return a.some.call(e, function (e) {
                            return n.contains(e, t);
                          });
                        })
                      : 1 == this.length
                      ? n(P.qsa(this[0], t))
                      : this.map(function () {
                          return P.qsa(this, t);
                        })
                    : n();
                },
                closest: function (t, e) {
                  var r = [],
                    i = "object" == typeof t && n(t);
                  return (
                    this.each(function (n, o) {
                      for (; o && !(i ? i.indexOf(o) >= 0 : P.matches(o, t)); )
                        o = o !== e && !M(o) && o.parentNode;
                      o && r.indexOf(o) < 0 && r.push(o);
                    }),
                    n(r)
                  );
                },
                parents: function (t) {
                  for (var e = [], r = this; r.length > 0; )
                    r = n.map(r, function (t) {
                      if ((t = t.parentNode) && !M(t) && e.indexOf(t) < 0)
                        return e.push(t), t;
                    });
                  return z(e, t);
                },
                parent: function (t) {
                  return z(o(this.pluck("parentNode")), t);
                },
                children: function (t) {
                  return z(
                    this.map(function () {
                      return U(this);
                    }),
                    t
                  );
                },
                contents: function () {
                  return this.map(function () {
                    return this.contentDocument || u.call(this.childNodes);
                  });
                },
                siblings: function (t) {
                  return z(
                    this.map(function (t, e) {
                      return c.call(U(e.parentNode), function (t) {
                        return t !== e;
                      });
                    }),
                    t
                  );
                },
                empty: function () {
                  return this.each(function () {
                    this.innerHTML = "";
                  });
                },
                pluck: function (t) {
                  return n.map(this, function (e) {
                    return e[t];
                  });
                },
                show: function () {
                  return this.each(function () {
                    var t, e, n;
                    "none" == this.style.display && (this.style.display = ""),
                      "none" ==
                        getComputedStyle(this, "").getPropertyValue(
                          "display"
                        ) &&
                        (this.style.display =
                          ((t = this.nodeName),
                          l[t] ||
                            ((e = f.createElement(t)),
                            f.body.appendChild(e),
                            (n = getComputedStyle(e, "").getPropertyValue(
                              "display"
                            )),
                            e.parentNode.removeChild(e),
                            "none" == n && (n = "block"),
                            (l[t] = n)),
                          l[t]));
                  });
                },
                replaceWith: function (t) {
                  return this.before(t).remove();
                },
                wrap: function (t) {
                  var e = A(t);
                  if (this[0] && !e)
                    var r = n(t).get(0),
                      i = r.parentNode || this.length > 1;
                  return this.each(function (o) {
                    n(this).wrapAll(
                      e ? t.call(this, o) : i ? r.cloneNode(!0) : r
                    );
                  });
                },
                wrapAll: function (t) {
                  if (this[0]) {
                    var e;
                    for (
                      n(this[0]).before((t = n(t)));
                      (e = t.children()).length;

                    )
                      t = e.first();
                    n(t).append(this);
                  }
                  return this;
                },
                wrapInner: function (t) {
                  var e = A(t);
                  return this.each(function (r) {
                    var i = n(this),
                      o = i.contents(),
                      a = e ? t.call(this, r) : t;
                    o.length ? o.wrapAll(a) : i.append(a);
                  });
                },
                unwrap: function () {
                  return (
                    this.parent().each(function () {
                      n(this).replaceWith(n(this).children());
                    }),
                    this
                  );
                },
                clone: function () {
                  return this.map(function () {
                    return this.cloneNode(!0);
                  });
                },
                hide: function () {
                  return this.css("display", "none");
                },
                toggle: function (t) {
                  return this.each(function () {
                    var e = n(this);
                    (void 0 === t ? "none" == e.css("display") : t)
                      ? e.show()
                      : e.hide();
                  });
                },
                prev: function (t) {
                  return n(this.pluck("previousElementSibling")).filter(
                    t || "*"
                  );
                },
                next: function (t) {
                  return n(this.pluck("nextElementSibling")).filter(t || "*");
                },
                html: function (t) {
                  return 0 in arguments
                    ? this.each(function (e) {
                        var r = this.innerHTML;
                        n(this).empty().append(Y(this, t, e, r));
                      })
                    : 0 in this
                    ? this[0].innerHTML
                    : null;
                },
                text: function (t) {
                  return 0 in arguments
                    ? this.each(function (e) {
                        var n = Y(this, t, e, this.textContent);
                        this.textContent = null == n ? "" : "" + n;
                      })
                    : 0 in this
                    ? this.pluck("textContent").join("")
                    : null;
                },
                attr: function (t, n) {
                  var r;
                  return "string" != typeof t || 1 in arguments
                    ? this.each(function (r) {
                        if (1 === this.nodeType)
                          if ($(t)) for (e in t) Z(this, e, t[e]);
                          else Z(this, t, Y(this, n, r, this.getAttribute(t)));
                      })
                    : 0 in this &&
                      1 == this[0].nodeType &&
                      null != (r = this[0].getAttribute(t))
                    ? r
                    : void 0;
                },
                removeAttr: function (t) {
                  return this.each(function () {
                    1 === this.nodeType &&
                      t.split(" ").forEach(function (t) {
                        Z(this, t);
                      }, this);
                  });
                },
                prop: function (t, e) {
                  return (
                    (t = T[t] || t),
                    1 in arguments
                      ? this.each(function (n) {
                          this[t] = Y(this, e, n, this[t]);
                        })
                      : this[0] && this[0][t]
                  );
                },
                removeProp: function (t) {
                  return (
                    (t = T[t] || t),
                    this.each(function () {
                      delete this[t];
                    })
                  );
                },
                data: function (t, e) {
                  var n = "data-" + t.replace(y, "-$1").toLowerCase(),
                    r = 1 in arguments ? this.attr(n, e) : this.attr(n);
                  return null !== r ? V(r) : void 0;
                },
                val: function (t) {
                  return 0 in arguments
                    ? (null == t && (t = ""),
                      this.each(function (e) {
                        this.value = Y(this, t, e, this.value);
                      }))
                    : this[0] &&
                        (this[0].multiple
                          ? n(this[0])
                              .find("option")
                              .filter(function () {
                                return this.selected;
                              })
                              .pluck("value")
                          : this[0].value);
                },
                offset: function (e) {
                  if (e)
                    return this.each(function (t) {
                      var r = n(this),
                        i = Y(this, e, t, r.offset()),
                        o = r.offsetParent().offset(),
                        a = { top: i.top - o.top, left: i.left - o.left };
                      "static" == r.css("position") &&
                        (a.position = "relative"),
                        r.css(a);
                    });
                  if (!this.length) return null;
                  if (
                    f.documentElement !== this[0] &&
                    !n.contains(f.documentElement, this[0])
                  )
                    return { top: 0, left: 0 };
                  var r = this[0].getBoundingClientRect();
                  return {
                    left: r.left + t.pageXOffset,
                    top: r.top + t.pageYOffset,
                    width: Math.round(r.width),
                    height: Math.round(r.height),
                  };
                },
                css: function (t, r) {
                  if (arguments.length < 2) {
                    var o = this[0];
                    if ("string" == typeof t) {
                      if (!o) return;
                      return (
                        o.style[i(t)] ||
                        getComputedStyle(o, "").getPropertyValue(t)
                      );
                    }
                    if (D(t)) {
                      if (!o) return;
                      var a = {},
                        s = getComputedStyle(o, "");
                      return (
                        n.each(t, function (t, e) {
                          a[e] = o.style[i(e)] || s.getPropertyValue(e);
                        }),
                        a
                      );
                    }
                  }
                  var c = "";
                  if ("string" == N(t))
                    r || 0 === r
                      ? (c = I(t) + ":" + B(t, r))
                      : this.each(function () {
                          this.style.removeProperty(I(t));
                        });
                  else
                    for (e in t)
                      t[e] || 0 === t[e]
                        ? (c += I(e) + ":" + B(e, t[e]) + ";")
                        : this.each(function () {
                            this.style.removeProperty(I(e));
                          });
                  return this.each(function () {
                    this.style.cssText += ";" + c;
                  });
                },
                index: function (t) {
                  return t
                    ? this.indexOf(n(t)[0])
                    : this.parent().children().indexOf(this[0]);
                },
                hasClass: function (t) {
                  return (
                    !!t &&
                    a.some.call(
                      this,
                      function (t) {
                        return this.test(J(t));
                      },
                      R(t)
                    )
                  );
                },
                addClass: function (t) {
                  return t
                    ? this.each(function (e) {
                        if ("className" in this) {
                          r = [];
                          var i = J(this);
                          Y(this, t, e, i)
                            .split(/\s+/g)
                            .forEach(function (t) {
                              n(this).hasClass(t) || r.push(t);
                            }, this),
                            r.length &&
                              J(this, i + (i ? " " : "") + r.join(" "));
                        }
                      })
                    : this;
                },
                removeClass: function (t) {
                  return this.each(function (e) {
                    if ("className" in this) {
                      if (void 0 === t) return J(this, "");
                      (r = J(this)),
                        Y(this, t, e, r)
                          .split(/\s+/g)
                          .forEach(function (t) {
                            r = r.replace(R(t), " ");
                          }),
                        J(this, r.trim());
                    }
                  });
                },
                toggleClass: function (t, e) {
                  return t
                    ? this.each(function (r) {
                        var i = n(this);
                        Y(this, t, r, J(this))
                          .split(/\s+/g)
                          .forEach(function (t) {
                            (void 0 === e ? !i.hasClass(t) : e)
                              ? i.addClass(t)
                              : i.removeClass(t);
                          });
                      })
                    : this;
                },
                scrollTop: function (t) {
                  if (this.length) {
                    var e = "scrollTop" in this[0];
                    return void 0 === t
                      ? e
                        ? this[0].scrollTop
                        : this[0].pageYOffset
                      : this.each(
                          e
                            ? function () {
                                this.scrollTop = t;
                              }
                            : function () {
                                this.scrollTo(this.scrollX, t);
                              }
                        );
                  }
                },
                scrollLeft: function (t) {
                  if (this.length) {
                    var e = "scrollLeft" in this[0];
                    return void 0 === t
                      ? e
                        ? this[0].scrollLeft
                        : this[0].pageXOffset
                      : this.each(
                          e
                            ? function () {
                                this.scrollLeft = t;
                              }
                            : function () {
                                this.scrollTo(t, this.scrollY);
                              }
                        );
                  }
                },
                position: function () {
                  if (this.length) {
                    var t = this[0],
                      e = this.offsetParent(),
                      r = this.offset(),
                      i = v.test(e[0].nodeName)
                        ? { top: 0, left: 0 }
                        : e.offset();
                    return (
                      (r.top -= parseFloat(n(t).css("margin-top")) || 0),
                      (r.left -= parseFloat(n(t).css("margin-left")) || 0),
                      (i.top +=
                        parseFloat(n(e[0]).css("border-top-width")) || 0),
                      (i.left +=
                        parseFloat(n(e[0]).css("border-left-width")) || 0),
                      { top: r.top - i.top, left: r.left - i.left }
                    );
                  }
                },
                offsetParent: function () {
                  return this.map(function () {
                    for (
                      var t = this.offsetParent || f.body;
                      t &&
                      !v.test(t.nodeName) &&
                      "static" == n(t).css("position");

                    )
                      t = t.offsetParent;
                    return t;
                  });
                },
              }),
              (n.fn.detach = n.fn.remove),
              ["width", "height"].forEach(function (t) {
                var e = t.replace(/./, function (t) {
                  return t[0].toUpperCase();
                });
                n.fn[t] = function (r) {
                  var i,
                    o = this[0];
                  return void 0 === r
                    ? k(o)
                      ? o["inner" + e]
                      : M(o)
                      ? o.documentElement["scroll" + e]
                      : (i = this.offset()) && i[t]
                    : this.each(function (e) {
                        (o = n(this)).css(t, Y(this, r, e, o[t]()));
                      });
                };
              }),
              ["after", "prepend", "before", "append"].forEach(function (e, r) {
                var i = r % 2;
                (n.fn[e] = function () {
                  var e,
                    o,
                    a = n.map(arguments, function (t) {
                      var r = [];
                      return "array" == (e = N(t))
                        ? (t.forEach(function (t) {
                            return void 0 !== t.nodeType
                              ? r.push(t)
                              : n.zepto.isZ(t)
                              ? (r = r.concat(t.get()))
                              : void (r = r.concat(P.fragment(t)));
                          }),
                          r)
                        : "object" == e || null == t
                        ? t
                        : P.fragment(t);
                    }),
                    s = this.length > 1;
                  return a.length < 1
                    ? this
                    : this.each(function (e, c) {
                        (o = i ? c : c.parentNode),
                          (c =
                            0 == r
                              ? c.nextSibling
                              : 1 == r
                              ? c.firstChild
                              : 2 == r
                              ? c
                              : null);
                        var u = n.contains(f.documentElement, o);
                        a.forEach(function (e) {
                          if (s) e = e.cloneNode(!0);
                          else if (!o) return n(e).remove();
                          o.insertBefore(e, c),
                            u &&
                              W(e, function (e) {
                                if (
                                  !(
                                    null == e.nodeName ||
                                    "SCRIPT" !== e.nodeName.toUpperCase() ||
                                    (e.type && "text/javascript" !== e.type) ||
                                    e.src
                                  )
                                ) {
                                  var n = e.ownerDocument
                                    ? e.ownerDocument.defaultView
                                    : t;
                                  n.eval.call(n, e.innerHTML);
                                }
                              });
                        });
                      });
                }),
                  (n.fn[i ? e + "To" : "insert" + (r ? "Before" : "After")] =
                    function (t) {
                      return n(t)[e](this), this;
                    });
              }),
              (P.Z.prototype = F.prototype = n.fn),
              (P.uniq = o),
              (P.deserializeValue = V),
              (n.zepto = P),
              n
            );
          })();
        return (
          (t.Zepto = n),
          void 0 === t.$ && (t.$ = n),
          (function (e) {
            var n = 1,
              r = Array.prototype.slice,
              i = e.isFunction,
              o = function (t) {
                return "string" == typeof t;
              },
              a = {},
              s = {},
              c = "onfocusin" in t,
              u = { focus: "focusin", blur: "focusout" },
              f = { mouseenter: "mouseover", mouseleave: "mouseout" };
            function l(t) {
              return t._zid || (t._zid = n++);
            }
            function d(t, e, n, r) {
              if ((e = p(e)).ns)
                var i =
                  ((o = e.ns),
                  new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
              var o;
              return (a[l(t)] || []).filter(function (t) {
                return (
                  t &&
                  (!e.e || t.e == e.e) &&
                  (!e.ns || i.test(t.ns)) &&
                  (!n || l(t.fn) === l(n)) &&
                  (!r || t.sel == r)
                );
              });
            }
            function p(t) {
              var e = ("" + t).split(".");
              return { e: e[0], ns: e.slice(1).sort().join(" ") };
            }
            function h(t, e) {
              return (t.del && !c && t.e in u) || !!e;
            }
            function m(t) {
              return f[t] || (c && u[t]) || t;
            }
            function g(t, n, r, i, o, s, c) {
              var u = l(t),
                d = a[u] || (a[u] = []);
              n.split(/\s/).forEach(function (n) {
                if ("ready" == n) return e(document).ready(r);
                var a = p(n);
                (a.fn = r),
                  (a.sel = o),
                  a.e in f &&
                    (r = function (t) {
                      var n = t.relatedTarget;
                      if (!n || (n !== this && !e.contains(this, n)))
                        return a.fn.apply(this, arguments);
                    }),
                  (a.del = s);
                var u = s || r;
                (a.proxy = function (e) {
                  if (!(e = _(e)).isImmediatePropagationStopped()) {
                    e.data = i;
                    var n = u.apply(
                      t,
                      null == e._args ? [e] : [e].concat(e._args)
                    );
                    return (
                      !1 === n && (e.preventDefault(), e.stopPropagation()), n
                    );
                  }
                }),
                  (a.i = d.length),
                  d.push(a),
                  "addEventListener" in t &&
                    t.addEventListener(m(a.e), a.proxy, h(a, c));
              });
            }
            function v(t, e, n, r, i) {
              var o = l(t);
              (e || "").split(/\s/).forEach(function (e) {
                d(t, e, n, r).forEach(function (e) {
                  delete a[o][e.i],
                    "removeEventListener" in t &&
                      t.removeEventListener(m(e.e), e.proxy, h(e, i));
                });
              });
            }
            (s.click = s.mousedown = s.mouseup = s.mousemove = "MouseEvents"),
              (e.event = { add: g, remove: v }),
              (e.proxy = function (t, n) {
                var a = 2 in arguments && r.call(arguments, 2);
                if (i(t)) {
                  var s = function () {
                    return t.apply(
                      n,
                      a ? a.concat(r.call(arguments)) : arguments
                    );
                  };
                  return (s._zid = l(t)), s;
                }
                if (o(n))
                  return a
                    ? (a.unshift(t[n], t), e.proxy.apply(null, a))
                    : e.proxy(t[n], t);
                throw new TypeError("expected function");
              }),
              (e.fn.bind = function (t, e, n) {
                return this.on(t, e, n);
              }),
              (e.fn.unbind = function (t, e) {
                return this.off(t, e);
              }),
              (e.fn.one = function (t, e, n, r) {
                return this.on(t, e, n, r, 1);
              });
            var y = function () {
                return !0;
              },
              b = function () {
                return !1;
              },
              w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
              x = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped",
              };
            function _(t, n) {
              return (
                (!n && t.isDefaultPrevented) ||
                  (n || (n = t),
                  e.each(x, function (e, r) {
                    var i = n[e];
                    (t[e] = function () {
                      return (this[r] = y), i && i.apply(n, arguments);
                    }),
                      (t[r] = b);
                  }),
                  t.timeStamp || (t.timeStamp = Date.now()),
                  (void 0 !== n.defaultPrevented
                    ? n.defaultPrevented
                    : "returnValue" in n
                    ? !1 === n.returnValue
                    : n.getPreventDefault && n.getPreventDefault()) &&
                    (t.isDefaultPrevented = y)),
                t
              );
            }
            function O(t) {
              var e,
                n = { originalEvent: t };
              for (e in t) w.test(e) || void 0 === t[e] || (n[e] = t[e]);
              return _(n, t);
            }
            (e.fn.delegate = function (t, e, n) {
              return this.on(e, t, n);
            }),
              (e.fn.undelegate = function (t, e, n) {
                return this.off(e, t, n);
              }),
              (e.fn.live = function (t, n) {
                return e(document.body).delegate(this.selector, t, n), this;
              }),
              (e.fn.die = function (t, n) {
                return e(document.body).undelegate(this.selector, t, n), this;
              }),
              (e.fn.on = function (t, n, a, s, c) {
                var u,
                  f,
                  l = this;
                return t && !o(t)
                  ? (e.each(t, function (t, e) {
                      l.on(t, n, a, e, c);
                    }),
                    l)
                  : (o(n) ||
                      i(s) ||
                      !1 === s ||
                      ((s = a), (a = n), (n = void 0)),
                    (void 0 !== s && !1 !== a) || ((s = a), (a = void 0)),
                    !1 === s && (s = b),
                    l.each(function (i, o) {
                      c &&
                        (u = function (t) {
                          return v(o, t.type, s), s.apply(this, arguments);
                        }),
                        n &&
                          (f = function (t) {
                            var i,
                              a = e(t.target).closest(n, o).get(0);
                            if (a && a !== o)
                              return (
                                (i = e.extend(O(t), {
                                  currentTarget: a,
                                  liveFired: o,
                                })),
                                (u || s).apply(
                                  a,
                                  [i].concat(r.call(arguments, 1))
                                )
                              );
                          }),
                        g(o, t, s, a, n, f || u);
                    }));
              }),
              (e.fn.off = function (t, n, r) {
                var a = this;
                return t && !o(t)
                  ? (e.each(t, function (t, e) {
                      a.off(t, n, e);
                    }),
                    a)
                  : (o(n) || i(r) || !1 === r || ((r = n), (n = void 0)),
                    !1 === r && (r = b),
                    a.each(function () {
                      v(this, t, r, n);
                    }));
              }),
              (e.fn.trigger = function (t, n) {
                return (
                  ((t = o(t) || e.isPlainObject(t) ? e.Event(t) : _(t))._args =
                    n),
                  this.each(function () {
                    t.type in u && "function" == typeof this[t.type]
                      ? this[t.type]()
                      : "dispatchEvent" in this
                      ? this.dispatchEvent(t)
                      : e(this).triggerHandler(t, n);
                  })
                );
              }),
              (e.fn.triggerHandler = function (t, n) {
                var r, i;
                return (
                  this.each(function (a, s) {
                    ((r = O(o(t) ? e.Event(t) : t))._args = n),
                      (r.target = s),
                      e.each(d(s, t.type || t), function (t, e) {
                        if (
                          ((i = e.proxy(r)), r.isImmediatePropagationStopped())
                        )
                          return !1;
                      });
                  }),
                  i
                );
              }),
              "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error"
                .split(" ")
                .forEach(function (t) {
                  e.fn[t] = function (e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t);
                  };
                }),
              (e.Event = function (t, e) {
                o(t) || (t = (e = t).type);
                var n = document.createEvent(s[t] || "Events"),
                  r = !0;
                if (e)
                  for (var i in e)
                    "bubbles" == i ? (r = !!e[i]) : (n[i] = e[i]);
                return n.initEvent(t, r, !0), _(n);
              });
          })(n),
          (function (e) {
            var n,
              r,
              i = +new Date(),
              o = t.document,
              a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
              s = /^(?:text|application)\/javascript/i,
              c = /^(?:text|application)\/xml/i,
              u = /^\s*$/,
              f = o.createElement("a");
            function l(t, n, r, i) {
              if (t.global)
                return (function (t, n, r) {
                  var i = e.Event(n);
                  return e(t).trigger(i, r), !i.isDefaultPrevented();
                })(n || o, r, i);
            }
            function d(t, e) {
              var n = e.context;
              if (
                !1 === e.beforeSend.call(n, t, e) ||
                !1 === l(e, n, "ajaxBeforeSend", [t, e])
              )
                return !1;
              l(e, n, "ajaxSend", [t, e]);
            }
            function p(t, e, n, r) {
              var i = n.context;
              n.success.call(i, t, "success", e),
                r && r.resolveWith(i, [t, "success", e]),
                l(n, i, "ajaxSuccess", [e, n, t]),
                m("success", e, n);
            }
            function h(t, e, n, r, i) {
              var o = r.context;
              r.error.call(o, n, e, t),
                i && i.rejectWith(o, [n, e, t]),
                l(r, o, "ajaxError", [n, r, t || e]),
                m(e, n, r);
            }
            function m(t, n, r) {
              var i = r.context;
              r.complete.call(i, n, t),
                l(r, i, "ajaxComplete", [n, r]),
                (function (t) {
                  t.global && !--e.active && l(t, null, "ajaxStop");
                })(r);
            }
            function g() {}
            function v(t, e) {
              return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
            }
            function y(t, n, r, i) {
              return (
                e.isFunction(n) && ((i = r), (r = n), (n = void 0)),
                e.isFunction(r) || ((i = r), (r = void 0)),
                { url: t, data: n, success: r, dataType: i }
              );
            }
            (f.href = t.location.href),
              (e.active = 0),
              (e.ajaxJSONP = function (n, r) {
                if (!("type" in n)) return e.ajax(n);
                var a,
                  s,
                  c = n.jsonpCallback,
                  u = (e.isFunction(c) ? c() : c) || "Zepto" + i++,
                  f = o.createElement("script"),
                  l = t[u],
                  m = function (t) {
                    e(f).triggerHandler("error", t || "abort");
                  },
                  g = { abort: m };
                return (
                  r && r.promise(g),
                  e(f).on("load error", function (i, o) {
                    clearTimeout(s),
                      e(f).off().remove(),
                      "error" != i.type && a
                        ? p(a[0], g, n, r)
                        : h(null, o || "error", g, n, r),
                      (t[u] = l),
                      a && e.isFunction(l) && l(a[0]),
                      (l = a = void 0);
                  }),
                  !1 === d(g, n)
                    ? (m("abort"), g)
                    : ((t[u] = function () {
                        a = arguments;
                      }),
                      (f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + u)),
                      o.head.appendChild(f),
                      n.timeout > 0 &&
                        (s = setTimeout(function () {
                          m("timeout");
                        }, n.timeout)),
                      g)
                );
              }),
              (e.ajaxSettings = {
                type: "GET",
                beforeSend: g,
                success: g,
                error: g,
                complete: g,
                context: null,
                global: !0,
                xhr: function () {
                  return new t.XMLHttpRequest();
                },
                accepts: {
                  script:
                    "text/javascript, application/javascript, application/x-javascript",
                  json: "application/json",
                  xml: "application/xml, text/xml",
                  html: "text/html",
                  text: "text/plain",
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: g,
              }),
              (e.ajax = function (i) {
                var a,
                  m,
                  y = e.extend({}, i || {}),
                  b = e.Deferred && e.Deferred();
                for (n in e.ajaxSettings)
                  void 0 === y[n] && (y[n] = e.ajaxSettings[n]);
                !(function (t) {
                  t.global && 0 == e.active++ && l(t, null, "ajaxStart");
                })(y),
                  y.crossDomain ||
                    (((a = o.createElement("a")).href = y.url),
                    (a.href = a.href),
                    (y.crossDomain =
                      f.protocol + "//" + f.host !=
                      a.protocol + "//" + a.host)),
                  y.url || (y.url = t.location.toString()),
                  (m = y.url.indexOf("#")) > -1 && (y.url = y.url.slice(0, m)),
                  (function (t) {
                    t.processData &&
                      t.data &&
                      "string" != e.type(t.data) &&
                      (t.data = e.param(t.data, t.traditional)),
                      !t.data ||
                        (t.type &&
                          "GET" != t.type.toUpperCase() &&
                          "jsonp" != t.dataType) ||
                        ((t.url = v(t.url, t.data)), (t.data = void 0));
                  })(y);
                var w = y.dataType,
                  x = /\?.+=\?/.test(y.url);
                if (
                  (x && (w = "jsonp"),
                  (!1 !== y.cache &&
                    ((i && !0 === i.cache) ||
                      ("script" != w && "jsonp" != w))) ||
                    (y.url = v(y.url, "_=" + Date.now())),
                  "jsonp" == w)
                )
                  return (
                    x ||
                      (y.url = v(
                        y.url,
                        y.jsonp
                          ? y.jsonp + "=?"
                          : !1 === y.jsonp
                          ? ""
                          : "callback=?"
                      )),
                    e.ajaxJSONP(y, b)
                  );
                var _,
                  O = y.accepts[w],
                  j = {},
                  S = function (t, e) {
                    j[t.toLowerCase()] = [t, e];
                  },
                  E = /^([\w-]+:)\/\//.test(y.url)
                    ? RegExp.$1
                    : t.location.protocol,
                  P = y.xhr(),
                  C = P.setRequestHeader;
                if (
                  (b && b.promise(P),
                  y.crossDomain || S("X-Requested-With", "XMLHttpRequest"),
                  S("Accept", O || "*/*"),
                  (O = y.mimeType || O) &&
                    (O.indexOf(",") > -1 && (O = O.split(",", 2)[0]),
                    P.overrideMimeType && P.overrideMimeType(O)),
                  (y.contentType ||
                    (!1 !== y.contentType &&
                      y.data &&
                      "GET" != y.type.toUpperCase())) &&
                    S(
                      "Content-Type",
                      y.contentType || "application/x-www-form-urlencoded"
                    ),
                  y.headers)
                )
                  for (r in y.headers) S(r, y.headers[r]);
                if (
                  ((P.setRequestHeader = S),
                  (P.onreadystatechange = function () {
                    if (4 == P.readyState) {
                      (P.onreadystatechange = g), clearTimeout(_);
                      var t,
                        n = !1;
                      if (
                        (P.status >= 200 && P.status < 300) ||
                        304 == P.status ||
                        (0 == P.status && "file:" == E)
                      ) {
                        if (
                          ((w =
                            w ||
                            (function (t) {
                              return (
                                t && (t = t.split(";", 2)[0]),
                                (t &&
                                  ("text/html" == t
                                    ? "html"
                                    : "application/json" == t
                                    ? "json"
                                    : s.test(t)
                                    ? "script"
                                    : c.test(t) && "xml")) ||
                                  "text"
                              );
                            })(
                              y.mimeType || P.getResponseHeader("content-type")
                            )),
                          "arraybuffer" == P.responseType ||
                            "blob" == P.responseType)
                        )
                          t = P.response;
                        else {
                          t = P.responseText;
                          try {
                            (t = (function (t, e, n) {
                              if (n.dataFilter == g) return t;
                              var r = n.context;
                              return n.dataFilter.call(r, t, e);
                            })(t, w, y)),
                              "script" == w
                                ? (0, eval)(t)
                                : "xml" == w
                                ? (t = P.responseXML)
                                : "json" == w &&
                                  (t = u.test(t) ? null : e.parseJSON(t));
                          } catch (t) {
                            n = t;
                          }
                          if (n) return h(n, "parsererror", P, y, b);
                        }
                        p(t, P, y, b);
                      } else
                        h(
                          P.statusText || null,
                          P.status ? "error" : "abort",
                          P,
                          y,
                          b
                        );
                    }
                  }),
                  !1 === d(P, y))
                )
                  return P.abort(), h(null, "abort", P, y, b), P;
                var T = !("async" in y) || y.async;
                if (
                  (P.open(y.type, y.url, T, y.username, y.password),
                  y.xhrFields)
                )
                  for (r in y.xhrFields) P[r] = y.xhrFields[r];
                for (r in j) C.apply(P, j[r]);
                return (
                  y.timeout > 0 &&
                    (_ = setTimeout(function () {
                      (P.onreadystatechange = g),
                        P.abort(),
                        h(null, "timeout", P, y, b);
                    }, y.timeout)),
                  P.send(y.data ? y.data : null),
                  P
                );
              }),
              (e.get = function () {
                return e.ajax(y.apply(null, arguments));
              }),
              (e.post = function () {
                var t = y.apply(null, arguments);
                return (t.type = "POST"), e.ajax(t);
              }),
              (e.getJSON = function () {
                var t = y.apply(null, arguments);
                return (t.dataType = "json"), e.ajax(t);
              }),
              (e.fn.load = function (t, n, r) {
                if (!this.length) return this;
                var i,
                  o = this,
                  s = t.split(/\s/),
                  c = y(t, n, r),
                  u = c.success;
                return (
                  s.length > 1 && ((c.url = s[0]), (i = s[1])),
                  (c.success = function (t) {
                    o.html(i ? e("<div>").html(t.replace(a, "")).find(i) : t),
                      u && u.apply(o, arguments);
                  }),
                  e.ajax(c),
                  this
                );
              });
            var b = encodeURIComponent;
            e.param = function (t, n) {
              var r = [];
              return (
                (r.add = function (t, n) {
                  e.isFunction(n) && (n = n()),
                    null == n && (n = ""),
                    this.push(b(t) + "=" + b(n));
                }),
                (function t(n, r, i, o) {
                  var a,
                    s = e.isArray(r),
                    c = e.isPlainObject(r);
                  e.each(r, function (r, u) {
                    (a = e.type(u)),
                      o &&
                        (r = i
                          ? o
                          : o +
                            "[" +
                            (c || "object" == a || "array" == a ? r : "") +
                            "]"),
                      !o && s
                        ? n.add(u.name, u.value)
                        : "array" == a || (!i && "object" == a)
                        ? t(n, u, i, r)
                        : n.add(r, u);
                  });
                })(r, t, n),
                r.join("&").replace(/%20/g, "+")
              );
            };
          })(n),
          ((e = n).fn.serializeArray = function () {
            var t,
              n,
              r = [],
              i = function (e) {
                if (e.forEach) return e.forEach(i);
                r.push({ name: t, value: e });
              };
            return (
              this[0] &&
                e.each(this[0].elements, function (r, o) {
                  (n = o.type),
                    (t = o.name) &&
                      "fieldset" != o.nodeName.toLowerCase() &&
                      !o.disabled &&
                      "submit" != n &&
                      "reset" != n &&
                      "button" != n &&
                      "file" != n &&
                      (("radio" != n && "checkbox" != n) || o.checked) &&
                      i(e(o).val());
                }),
              r
            );
          }),
          (e.fn.serialize = function () {
            var t = [];
            return (
              this.serializeArray().forEach(function (e) {
                t.push(
                  encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)
                );
              }),
              t.join("&")
            );
          }),
          (e.fn.submit = function (t) {
            if (0 in arguments) this.bind("submit", t);
            else if (this.length) {
              var n = e.Event("submit");
              this.eq(0).trigger(n),
                n.isDefaultPrevented() || this.get(0).submit();
            }
            return this;
          }),
          (function () {
            try {
              getComputedStyle(void 0);
            } catch (n) {
              var e = getComputedStyle;
              t.getComputedStyle = function (t, n) {
                try {
                  return e(t, n);
                } catch (t) {
                  return null;
                }
              };
            }
          })(),
          n
        );
      }),
      "object" === e && void 0 !== t && (t.exports = o(i)),
      void 0 ===
        (r = function () {
          return o(i);
        }.call(e, n, e, t)) || (t.exports = r);
  },
  function (t, e, n) {
    var r;
    t.exports =
      ((r =
        r ||
        (function (t, e) {
          var n =
              Object.create ||
              (function () {
                function t() {}
                return function (e) {
                  var n;
                  return (
                    (t.prototype = e), (n = new t()), (t.prototype = null), n
                  );
                };
              })(),
            r = {},
            i = (r.lib = {}),
            o = (i.Base = {
              extend: function (t) {
                var e = n(this);
                return (
                  t && e.mixIn(t),
                  (e.hasOwnProperty("init") && this.init !== e.init) ||
                    (e.init = function () {
                      e.$super.init.apply(this, arguments);
                    }),
                  (e.init.prototype = e),
                  (e.$super = this),
                  e
                );
              },
              create: function () {
                var t = this.extend();
                return t.init.apply(t, arguments), t;
              },
              init: function () {},
              mixIn: function (t) {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              },
            }),
            a = (i.WordArray = o.extend({
              init: function (t, e) {
                (t = this.words = t || []),
                  (this.sigBytes = null != e ? e : 4 * t.length);
              },
              toString: function (t) {
                return (t || c).stringify(this);
              },
              concat: function (t) {
                var e = this.words,
                  n = t.words,
                  r = this.sigBytes,
                  i = t.sigBytes;
                if ((this.clamp(), r % 4))
                  for (var o = 0; o < i; o++) {
                    var a = (n[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                    e[(r + o) >>> 2] |= a << (24 - ((r + o) % 4) * 8);
                  }
                else for (o = 0; o < i; o += 4) e[(r + o) >>> 2] = n[o >>> 2];
                return (this.sigBytes += i), this;
              },
              clamp: function () {
                var e = this.words,
                  n = this.sigBytes;
                (e[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                  (e.length = t.ceil(n / 4));
              },
              clone: function () {
                var t = o.clone.call(this);
                return (t.words = this.words.slice(0)), t;
              },
              random: function (e) {
                for (
                  var n,
                    r = [],
                    i = function (e) {
                      e = e;
                      var n = 987654321,
                        r = 4294967295;
                      return function () {
                        var i =
                          (((n = (36969 * (65535 & n) + (n >> 16)) & r) << 16) +
                            (e = (18e3 * (65535 & e) + (e >> 16)) & r)) &
                          r;
                        return (
                          (i /= 4294967296),
                          (i += 0.5) * (t.random() > 0.5 ? 1 : -1)
                        );
                      };
                    },
                    o = 0;
                  o < e;
                  o += 4
                ) {
                  var s = i(4294967296 * (n || t.random()));
                  (n = 987654071 * s()), r.push((4294967296 * s()) | 0);
                }
                return new a.init(r, e);
              },
            })),
            s = (r.enc = {}),
            c = (s.Hex = {
              stringify: function (t) {
                for (
                  var e = t.words, n = t.sigBytes, r = [], i = 0;
                  i < n;
                  i++
                ) {
                  var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                  r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
                }
                return r.join("");
              },
              parse: function (t) {
                for (var e = t.length, n = [], r = 0; r < e; r += 2)
                  n[r >>> 3] |=
                    parseInt(t.substr(r, 2), 16) << (24 - (r % 8) * 4);
                return new a.init(n, e / 2);
              },
            }),
            u = (s.Latin1 = {
              stringify: function (t) {
                for (
                  var e = t.words, n = t.sigBytes, r = [], i = 0;
                  i < n;
                  i++
                ) {
                  var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                  r.push(String.fromCharCode(o));
                }
                return r.join("");
              },
              parse: function (t) {
                for (var e = t.length, n = [], r = 0; r < e; r++)
                  n[r >>> 2] |= (255 & t.charCodeAt(r)) << (24 - (r % 4) * 8);
                return new a.init(n, e);
              },
            }),
            f = (s.Utf8 = {
              stringify: function (t) {
                try {
                  return decodeURIComponent(escape(u.stringify(t)));
                } catch (t) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (t) {
                return u.parse(unescape(encodeURIComponent(t)));
              },
            }),
            l = (i.BufferedBlockAlgorithm = o.extend({
              reset: function () {
                (this._data = new a.init()), (this._nDataBytes = 0);
              },
              _append: function (t) {
                "string" == typeof t && (t = f.parse(t)),
                  this._data.concat(t),
                  (this._nDataBytes += t.sigBytes);
              },
              _process: function (e) {
                var n = this._data,
                  r = n.words,
                  i = n.sigBytes,
                  o = this.blockSize,
                  s = i / (4 * o),
                  c =
                    (s = e
                      ? t.ceil(s)
                      : t.max((0 | s) - this._minBufferSize, 0)) * o,
                  u = t.min(4 * c, i);
                if (c) {
                  for (var f = 0; f < c; f += o) this._doProcessBlock(r, f);
                  var l = r.splice(0, c);
                  n.sigBytes -= u;
                }
                return new a.init(l, u);
              },
              clone: function () {
                var t = o.clone.call(this);
                return (t._data = this._data.clone()), t;
              },
              _minBufferSize: 0,
            })),
            d =
              ((i.Hasher = l.extend({
                cfg: o.extend(),
                init: function (t) {
                  (this.cfg = this.cfg.extend(t)), this.reset();
                },
                reset: function () {
                  l.reset.call(this), this._doReset();
                },
                update: function (t) {
                  return this._append(t), this._process(), this;
                },
                finalize: function (t) {
                  return t && this._append(t), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function (t) {
                  return function (e, n) {
                    return new t.init(n).finalize(e);
                  };
                },
                _createHmacHelper: function (t) {
                  return function (e, n) {
                    return new d.HMAC.init(t, n).finalize(e);
                  };
                },
              })),
              (r.algo = {}));
          return r;
        })(Math)),
      r);
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      i = n(10),
      o = n(24),
      a = n(16);
    function s(t) {
      var e = new o(t),
        n = i(o.prototype.request, e);
      return r.extend(n, o.prototype, e), r.extend(n, e), n;
    }
    var c = s(n(13));
    (c.Axios = o),
      (c.create = function (t) {
        return s(a(c.defaults, t));
      }),
      (c.Cancel = n(17)),
      (c.CancelToken = n(38)),
      (c.isCancel = n(12)),
      (c.all = function (t) {
        return Promise.all(t);
      }),
      (c.spread = n(39)),
      (t.exports = c),
      (t.exports.default = c);
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      i = n(11),
      o = n(25),
      a = n(26),
      s = n(16);
    function c(t) {
      (this.defaults = t),
        (this.interceptors = { request: new o(), response: new o() });
    }
    (c.prototype.request = function (t) {
      "string" == typeof t
        ? ((t = arguments[1] || {}).url = arguments[0])
        : (t = t || {}),
        (t = s(this.defaults, t)).method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
          ? (t.method = this.defaults.method.toLowerCase())
          : (t.method = "get");
      var e = [a, void 0],
        n = Promise.resolve(t);
      for (
        this.interceptors.request.forEach(function (t) {
          e.unshift(t.fulfilled, t.rejected);
        }),
          this.interceptors.response.forEach(function (t) {
            e.push(t.fulfilled, t.rejected);
          });
        e.length;

      )
        n = n.then(e.shift(), e.shift());
      return n;
    }),
      (c.prototype.getUri = function (t) {
        return (
          (t = s(this.defaults, t)),
          i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
        );
      }),
      r.forEach(["delete", "get", "head", "options"], function (t) {
        c.prototype[t] = function (e, n) {
          return this.request(r.merge(n || {}, { method: t, url: e }));
        };
      }),
      r.forEach(["post", "put", "patch"], function (t) {
        c.prototype[t] = function (e, n, i) {
          return this.request(r.merge(i || {}, { method: t, url: e, data: n }));
        };
      }),
      (t.exports = c);
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    function i() {
      this.handlers = [];
    }
    (i.prototype.use = function (t, e) {
      return (
        this.handlers.push({ fulfilled: t, rejected: e }),
        this.handlers.length - 1
      );
    }),
      (i.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null);
      }),
      (i.prototype.forEach = function (t) {
        r.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }),
      (t.exports = i);
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      i = n(27),
      o = n(12),
      a = n(13);
    function s(t) {
      t.cancelToken && t.cancelToken.throwIfRequested();
    }
    t.exports = function (t) {
      return (
        s(t),
        (t.headers = t.headers || {}),
        (t.data = i(t.data, t.headers, t.transformRequest)),
        (t.headers = r.merge(
          t.headers.common || {},
          t.headers[t.method] || {},
          t.headers
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (e) {
            delete t.headers[e];
          }
        ),
        (t.adapter || a.adapter)(t).then(
          function (e) {
            return (
              s(t), (e.data = i(e.data, e.headers, t.transformResponse)), e
            );
          },
          function (e) {
            return (
              o(e) ||
                (s(t),
                e &&
                  e.response &&
                  (e.response.data = i(
                    e.response.data,
                    e.response.headers,
                    t.transformResponse
                  ))),
              Promise.reject(e)
            );
          }
        )
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function (t, e, n) {
      return (
        r.forEach(n, function (n) {
          t = n(t, e);
        }),
        t
      );
    };
  },
  function (t, e) {
    var n,
      r,
      i = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(t, 0);
      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        r = a;
      }
    })();
    var c,
      u = [],
      f = !1,
      l = -1;
    function d() {
      f &&
        c &&
        ((f = !1), c.length ? (u = c.concat(u)) : (l = -1), u.length && p());
    }
    function p() {
      if (!f) {
        var t = s(d);
        f = !0;
        for (var e = u.length; e; ) {
          for (c = u, u = []; ++l < e; ) c && c[l].run();
          (l = -1), (e = u.length);
        }
        (c = null),
          (f = !1),
          (function (t) {
            if (r === clearTimeout) return clearTimeout(t);
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(t);
            try {
              r(t);
            } catch (e) {
              try {
                return r.call(null, t);
              } catch (e) {
                return r.call(this, t);
              }
            }
          })(t);
      }
    }
    function h(t, e) {
      (this.fun = t), (this.array = e);
    }
    function m() {}
    (i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      u.push(new h(t, e)), 1 !== u.length || f || s(p);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = m),
      (i.addListener = m),
      (i.once = m),
      (i.off = m),
      (i.removeListener = m),
      (i.removeAllListeners = m),
      (i.emit = m),
      (i.prependListener = m),
      (i.prependOnceListener = m),
      (i.listeners = function (t) {
        return [];
      }),
      (i.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function (t, e) {
      r.forEach(t, function (n, r) {
        r !== e &&
          r.toUpperCase() === e.toUpperCase() &&
          ((t[e] = n), delete t[r]);
      });
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(15);
    t.exports = function (t, e, n) {
      var i = n.config.validateStatus;
      !i || i(n.status)
        ? t(n)
        : e(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          );
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n, r, i) {
      return (
        (t.config = e),
        n && (t.code = n),
        (t.request = r),
        (t.response = i),
        (t.isAxiosError = !0),
        (t.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(33),
      i = n(34);
    t.exports = function (t, e) {
      return t && !r(e) ? i(t, e) : e;
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t);
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
      return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1),
      i = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    t.exports = function (t) {
      var e,
        n,
        o,
        a = {};
      return t
        ? (r.forEach(t.split("\n"), function (t) {
            if (
              ((o = t.indexOf(":")),
              (e = r.trim(t.substr(0, o)).toLowerCase()),
              (n = r.trim(t.substr(o + 1))),
              e)
            ) {
              if (a[e] && i.indexOf(e) >= 0) return;
              a[e] =
                "set-cookie" === e
                  ? (a[e] ? a[e] : []).concat([n])
                  : a[e]
                  ? a[e] + ", " + n
                  : n;
            }
          }),
          a)
        : a;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = r.isStandardBrowserEnv()
      ? (function () {
          var t,
            e = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function i(t) {
            var r = t;
            return (
              e && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (t = i(window.location.href)),
            function (e) {
              var n = r.isString(e) ? i(e) : e;
              return n.protocol === t.protocol && n.host === t.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = r.isStandardBrowserEnv()
      ? {
          write: function (t, e, n, i, o, a) {
            var s = [];
            s.push(t + "=" + encodeURIComponent(e)),
              r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
              r.isString(i) && s.push("path=" + i),
              r.isString(o) && s.push("domain=" + o),
              !0 === a && s.push("secure"),
              (document.cookie = s.join("; "));
          },
          read: function (t) {
            var e = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(17);
    function i(t) {
      if ("function" != typeof t)
        throw new TypeError("executor must be a function.");
      var e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      var n = this;
      t(function (t) {
        n.reason || ((n.reason = new r(t)), e(n.reason));
      });
    }
    (i.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (i.source = function () {
        var t;
        return {
          token: new i(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }),
      (t.exports = i);
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    var r = n(18),
      i = n(19),
      o = Object.prototype.hasOwnProperty,
      a = {
        brackets: function (t) {
          return t + "[]";
        },
        comma: "comma",
        indices: function (t, e) {
          return t + "[" + e + "]";
        },
        repeat: function (t) {
          return t;
        },
      },
      s = Array.isArray,
      c = Array.prototype.push,
      u = function (t, e) {
        c.apply(t, s(e) ? e : [e]);
      },
      f = Date.prototype.toISOString,
      l = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: r.encode,
        encodeValuesOnly: !1,
        formatter: i.formatters[i.default],
        indices: !1,
        serializeDate: function (t) {
          return f.call(t);
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      d = function t(e, n, i, o, a, c, f, d, p, h, m, g, v) {
        var y = e;
        if (
          ("function" == typeof f
            ? (y = f(n, y))
            : y instanceof Date
            ? (y = h(y))
            : "comma" === i && s(y) && (y = y.join(",")),
          null === y)
        ) {
          if (o) return c && !g ? c(n, l.encoder, v) : n;
          y = "";
        }
        if (
          "string" == typeof y ||
          "number" == typeof y ||
          "boolean" == typeof y ||
          r.isBuffer(y)
        )
          return c
            ? [m(g ? n : c(n, l.encoder, v)) + "=" + m(c(y, l.encoder, v))]
            : [m(n) + "=" + m(String(y))];
        var b,
          w = [];
        if (void 0 === y) return w;
        if (s(f)) b = f;
        else {
          var x = Object.keys(y);
          b = d ? x.sort(d) : x;
        }
        for (var _ = 0; _ < b.length; ++_) {
          var O = b[_];
          (a && null === y[O]) ||
            (s(y)
              ? u(
                  w,
                  t(
                    y[O],
                    "function" == typeof i ? i(n, O) : n,
                    i,
                    o,
                    a,
                    c,
                    f,
                    d,
                    p,
                    h,
                    m,
                    g,
                    v
                  )
                )
              : u(
                  w,
                  t(
                    y[O],
                    n + (p ? "." + O : "[" + O + "]"),
                    i,
                    o,
                    a,
                    c,
                    f,
                    d,
                    p,
                    h,
                    m,
                    g,
                    v
                  )
                ));
        }
        return w;
      };
    t.exports = function (t, e) {
      var n,
        r = t,
        c = (function (t) {
          if (!t) return l;
          if (
            null !== t.encoder &&
            void 0 !== t.encoder &&
            "function" != typeof t.encoder
          )
            throw new TypeError("Encoder has to be a function.");
          var e = t.charset || l.charset;
          if (
            void 0 !== t.charset &&
            "utf-8" !== t.charset &&
            "iso-8859-1" !== t.charset
          )
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var n = i.default;
          if (void 0 !== t.format) {
            if (!o.call(i.formatters, t.format))
              throw new TypeError("Unknown format option provided.");
            n = t.format;
          }
          var r = i.formatters[n],
            a = l.filter;
          return (
            ("function" == typeof t.filter || s(t.filter)) && (a = t.filter),
            {
              addQueryPrefix:
                "boolean" == typeof t.addQueryPrefix
                  ? t.addQueryPrefix
                  : l.addQueryPrefix,
              allowDots: void 0 === t.allowDots ? l.allowDots : !!t.allowDots,
              charset: e,
              charsetSentinel:
                "boolean" == typeof t.charsetSentinel
                  ? t.charsetSentinel
                  : l.charsetSentinel,
              delimiter: void 0 === t.delimiter ? l.delimiter : t.delimiter,
              encode: "boolean" == typeof t.encode ? t.encode : l.encode,
              encoder: "function" == typeof t.encoder ? t.encoder : l.encoder,
              encodeValuesOnly:
                "boolean" == typeof t.encodeValuesOnly
                  ? t.encodeValuesOnly
                  : l.encodeValuesOnly,
              filter: a,
              formatter: r,
              serializeDate:
                "function" == typeof t.serializeDate
                  ? t.serializeDate
                  : l.serializeDate,
              skipNulls:
                "boolean" == typeof t.skipNulls ? t.skipNulls : l.skipNulls,
              sort: "function" == typeof t.sort ? t.sort : null,
              strictNullHandling:
                "boolean" == typeof t.strictNullHandling
                  ? t.strictNullHandling
                  : l.strictNullHandling,
            }
          );
        })(e);
      "function" == typeof c.filter
        ? (r = (0, c.filter)("", r))
        : s(c.filter) && (n = c.filter);
      var f,
        p = [];
      if ("object" != typeof r || null === r) return "";
      f =
        e && e.arrayFormat in a
          ? e.arrayFormat
          : e && "indices" in e
          ? e.indices
            ? "indices"
            : "repeat"
          : "indices";
      var h = a[f];
      n || (n = Object.keys(r)), c.sort && n.sort(c.sort);
      for (var m = 0; m < n.length; ++m) {
        var g = n[m];
        (c.skipNulls && null === r[g]) ||
          u(
            p,
            d(
              r[g],
              g,
              h,
              c.strictNullHandling,
              c.skipNulls,
              c.encode ? c.encoder : null,
              c.filter,
              c.sort,
              c.allowDots,
              c.serializeDate,
              c.formatter,
              c.encodeValuesOnly,
              c.charset
            )
          );
      }
      var v = p.join(c.delimiter),
        y = !0 === c.addQueryPrefix ? "?" : "";
      return (
        c.charsetSentinel &&
          ("iso-8859-1" === c.charset
            ? (y += "utf8=%26%2310003%3B&")
            : (y += "utf8=%E2%9C%93&")),
        v.length > 0 ? y + v : ""
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(18),
      i = Object.prototype.hasOwnProperty,
      o = {
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
        strictNullHandling: !1,
      },
      a = function (t) {
        return t.replace(/&#(\d+);/g, function (t, e) {
          return String.fromCharCode(parseInt(e, 10));
        });
      },
      s = function (t, e, n) {
        if (t) {
          var r = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
            o = /(\[[^[\]]*])/g,
            a = /(\[[^[\]]*])/.exec(r),
            s = a ? r.slice(0, a.index) : r,
            c = [];
          if (s) {
            if (
              !n.plainObjects &&
              i.call(Object.prototype, s) &&
              !n.allowPrototypes
            )
              return;
            c.push(s);
          }
          for (var u = 0; null !== (a = o.exec(r)) && u < n.depth; ) {
            if (
              ((u += 1),
              !n.plainObjects &&
                i.call(Object.prototype, a[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return;
            c.push(a[1]);
          }
          return (
            a && c.push("[" + r.slice(a.index) + "]"),
            (function (t, e, n) {
              for (var r = e, i = t.length - 1; i >= 0; --i) {
                var o,
                  a = t[i];
                if ("[]" === a && n.parseArrays) o = [].concat(r);
                else {
                  o = n.plainObjects ? Object.create(null) : {};
                  var s =
                      "[" === a.charAt(0) && "]" === a.charAt(a.length - 1)
                        ? a.slice(1, -1)
                        : a,
                    c = parseInt(s, 10);
                  n.parseArrays || "" !== s
                    ? !isNaN(c) &&
                      a !== s &&
                      String(c) === s &&
                      c >= 0 &&
                      n.parseArrays &&
                      c <= n.arrayLimit
                      ? ((o = [])[c] = r)
                      : (o[s] = r)
                    : (o = { 0: r });
                }
                r = o;
              }
              return r;
            })(c, e, n)
          );
        }
      };
    t.exports = function (t, e) {
      var n = (function (t) {
        if (!t) return o;
        if (
          null !== t.decoder &&
          void 0 !== t.decoder &&
          "function" != typeof t.decoder
        )
          throw new TypeError("Decoder has to be a function.");
        if (
          void 0 !== t.charset &&
          "utf-8" !== t.charset &&
          "iso-8859-1" !== t.charset
        )
          throw new Error(
            "The charset option must be either utf-8, iso-8859-1, or undefined"
          );
        var e = void 0 === t.charset ? o.charset : t.charset;
        return {
          allowDots: void 0 === t.allowDots ? o.allowDots : !!t.allowDots,
          allowPrototypes:
            "boolean" == typeof t.allowPrototypes
              ? t.allowPrototypes
              : o.allowPrototypes,
          arrayLimit:
            "number" == typeof t.arrayLimit ? t.arrayLimit : o.arrayLimit,
          charset: e,
          charsetSentinel:
            "boolean" == typeof t.charsetSentinel
              ? t.charsetSentinel
              : o.charsetSentinel,
          comma: "boolean" == typeof t.comma ? t.comma : o.comma,
          decoder: "function" == typeof t.decoder ? t.decoder : o.decoder,
          delimiter:
            "string" == typeof t.delimiter || r.isRegExp(t.delimiter)
              ? t.delimiter
              : o.delimiter,
          depth: "number" == typeof t.depth ? t.depth : o.depth,
          ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
          interpretNumericEntities:
            "boolean" == typeof t.interpretNumericEntities
              ? t.interpretNumericEntities
              : o.interpretNumericEntities,
          parameterLimit:
            "number" == typeof t.parameterLimit
              ? t.parameterLimit
              : o.parameterLimit,
          parseArrays: !1 !== t.parseArrays,
          plainObjects:
            "boolean" == typeof t.plainObjects
              ? t.plainObjects
              : o.plainObjects,
          strictNullHandling:
            "boolean" == typeof t.strictNullHandling
              ? t.strictNullHandling
              : o.strictNullHandling,
        };
      })(e);
      if ("" === t || null == t)
        return n.plainObjects ? Object.create(null) : {};
      for (
        var c =
            "string" == typeof t
              ? (function (t, e) {
                  var n,
                    s = {},
                    c = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                    u = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit,
                    f = c.split(e.delimiter, u),
                    l = -1,
                    d = e.charset;
                  if (e.charsetSentinel)
                    for (n = 0; n < f.length; ++n)
                      0 === f[n].indexOf("utf8=") &&
                        ("utf8=%E2%9C%93" === f[n]
                          ? (d = "utf-8")
                          : "utf8=%26%2310003%3B" === f[n] &&
                            (d = "iso-8859-1"),
                        (l = n),
                        (n = f.length));
                  for (n = 0; n < f.length; ++n)
                    if (n !== l) {
                      var p,
                        h,
                        m = f[n],
                        g = m.indexOf("]="),
                        v = -1 === g ? m.indexOf("=") : g + 1;
                      -1 === v
                        ? ((p = e.decoder(m, o.decoder, d)),
                          (h = e.strictNullHandling ? null : ""))
                        : ((p = e.decoder(m.slice(0, v), o.decoder, d)),
                          (h = e.decoder(m.slice(v + 1), o.decoder, d))),
                        h &&
                          e.interpretNumericEntities &&
                          "iso-8859-1" === d &&
                          (h = a(h)),
                        h &&
                          e.comma &&
                          h.indexOf(",") > -1 &&
                          (h = h.split(",")),
                        i.call(s, p) ? (s[p] = r.combine(s[p], h)) : (s[p] = h);
                    }
                  return s;
                })(t, n)
              : t,
          u = n.plainObjects ? Object.create(null) : {},
          f = Object.keys(c),
          l = 0;
        l < f.length;
        ++l
      ) {
        var d = f[l],
          p = s(d, c[d], n);
        u = r.merge(u, p, n);
      }
      return r.compact(u);
    };
  },
  ,
  ,
  function (t, e) {
    function n(e) {
      return (
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? ((t.exports = n =
              function (t) {
                return typeof t;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0))
          : ((t.exports = n =
              function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0)),
        n(e)
      );
    }
    (t.exports = n),
      (t.exports.default = t.exports),
      (t.exports.__esModule = !0);
  },
  function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
      return g;
    });
    var r = n(6),
      i = n.n(r),
      o = n(8),
      a = n.n(o),
      s = n(4),
      c = n(0),
      u = n(2),
      f = n(7),
      l = n.n(f);
    function d(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function p(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? d(Object(n), !0).forEach(function (e) {
              i()(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var h = window.bxPublicHub.getUrlParamsObj(location.href),
      m = (window.bxPublicHub.pushWhiteList, null);
    function g() {
      "serviceWorker" in navigator && "PushManager" in window
        ? (console.log("in sw"),
          Object(c.h)(u.reportInfo, "post", u._bx_third_client, "support_sw"),
          window.addEventListener("load", function () {
            navigator.serviceWorker
              .register("./service-worker.js")
              .then(function (t) {
                var e;
                Object(c.h)(
                  u.reportInfo,
                  "post",
                  u._bx_third_client,
                  "register_sw_success"
                ),
                  (m = t),
                  t.installing
                    ? (e = t.installing)
                    : t.waiting
                    ? (e = t.waiting)
                    : t.active && (e = t.active),
                  e &&
                    ("activated" == e.state &&
                      t.pushManager.getSubscription().then(function (t) {
                        console.log(t),
                          console.log(JSON.stringify(t)),
                          t
                            ? (Object(c.h)(
                                u.reportInfo,
                                "post",
                                u._bx_third_client,
                                "user_had_sub"
                              ),
                              console.log("had subsctiption"),
                              v(t))
                            : (y(),
                              Object(c.h)(
                                u.reportInfo,
                                "post",
                                u._bx_third_client,
                                "user_no_sub"
                              ),
                              console.log("no sub"));
                      }),
                    e.addEventListener("statechange", function (e) {
                      "activated" == e.target.state &&
                        t.pushManager.getSubscription().then(function (t) {
                          console.log(t),
                            console.log(JSON.stringify(t)),
                            t
                              ? (Object(c.h)(
                                  u.reportInfo,
                                  "post",
                                  u._bx_third_client,
                                  "user_had_sub"
                                ),
                                console.log("had subsctiption"),
                                v(t))
                              : (y(),
                                Object(c.h)(
                                  u.reportInfo,
                                  "post",
                                  u._bx_third_client,
                                  "user_no_sub"
                                ),
                                console.log("no sub"));
                        });
                    }));
              })
              .catch(function (t) {
                Object(c.h)(
                  p(p({}, u.reportInfo), {}, { msg: t }),
                  "post",
                  u._bx_third_client,
                  "register_sw_fail"
                ),
                  console.log("SW registration failed: ", t);
              });
          }))
        : Object(c.h)(
            u.reportInfo,
            "post",
            u._bx_third_client,
            "not_support_sw"
          );
    }
    function v(t) {
      console.log("will send to server", t);
      var e = p({}, s.c);
      delete e.appSecret;
      var n = a()(Object(s.a)(s.c)).toString().toLocaleLowerCase();
      delete e.appSecret;
      var r = "https://api.flygame.io/api/ig/webpush/subscription?signature="
          .concat(n, "&")
          .concat(l.a.stringify(e)),
        i = {
          publisher: h.bx_third_client || "none",
          uid: c.i,
          wid: +h.wid || 0,
          platform: Object(c.d)(),
          language: navigator.language,
          country: h.country || "vn",
        };
      t && (i.subscription = t);
      var o = new XMLHttpRequest();
      (o.onreadystatechange = function () {
        200 == o.status && console.log("send ok");
      }),
        o.open("POST", r),
        o.send(JSON.stringify(i));
    }
    function y() {
      var t = p({}, u.reportInfo),
        e = (function (t) {
          for (
            var e = (t + "=".repeat((4 - (t.length % 4)) % 4))
                .replace(/\-/g, "+")
                .replace(/_/g, "/"),
              n = window.atob(e),
              r = new Uint8Array(n.length),
              i = 0;
            i < n.length;
            ++i
          )
            r[i] = n.charCodeAt(i);
          return r;
        })(
          "BDLlvrUDeJvqxr3-5kKdeePDDSPZ-Wtehp82rybSU7GXdZsI0zPBI7iIaXd6aEW5QnoBeEFHJwjBGCnVCoZE60c"
        );
      Object(c.h)(
        t,
        "post",
        u._bx_third_client,
        "request_notice_authority_start"
      ),
        window.Notification.requestPermission(function (n) {
          Object(c.h)(
            t,
            "post",
            u._bx_third_client,
            "request_notice_authority_success"
          ),
            "default" == n || "granted" == n
              ? (console.log(n),
                m.pushManager
                  .subscribe({ userVisibleOnly: !0, applicationServerKey: e })
                  .then(function (e) {
                    console.log("user had subscribe"),
                      Object(c.h)(
                        t,
                        "post",
                        u._bx_third_client,
                        "user_accept_sub"
                      ),
                      v(e);
                  })
                  .catch(function (e) {
                    Object(c.h)(
                      p(p({}, t), {}, { msg: e }),
                      "post",
                      u._bx_third_client,
                      "user_reject_sub"
                    ),
                      console.log("fail subscribe", e);
                  }))
              : (Object(c.h)(t, "post", u._bx_third_client, "user_reject_sub"),
                console.log("user had reject ", n));
        }).catch(function (e) {
          console.log(e),
            Object(c.h)(
              p(p({}, t), {}, { msg: e }),
              "post",
              u._bx_third_client,
              "request_notice_authority_fail"
            );
        });
    }
  },
  function (t, e, n) {
    "use strict";
    function r() {
      var t = window.performance;
      if (t) {
        var e = t.timing,
          n = {};
        return (
          (n.loadPage = e.loadEventEnd - e.navigationStart),
          (n.domReady = e.domComplete - e.responseEnd),
          (n.redirect = e.redirectEnd - e.redirectStart),
          (n.lookupDomain = e.domainLookupEnd - e.domainLookupStart),
          (n.ttfb = e.responseStart - e.navigationStart),
          (n.request = e.responseEnd - e.requestStart),
          (n.loadEvent = e.loadEventEnd - e.loadEventStart),
          (n.appcache = e.domainLookupStart - e.fetchStart),
          (n.unloadEvent = e.unloadEventEnd - e.unloadEventStart),
          (n.connect = e.connectEnd - e.connectStart),
          n
        );
      }
      console.log("你的浏览器不支持 performance 接口");
    }
    n.d(e, "a", function () {
      return r;
    });
  },
  function (t, e, n) {},
  function (t, e) {
    !(function (t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s,
        c,
        u,
        f = {},
        l = !1;
      function d() {
        (i = null), f.last && (f.el.trigger("longTap"), (f = {}));
      }
      function p() {
        i && clearTimeout(i), (i = null);
      }
      function h() {
        e && clearTimeout(e),
          n && clearTimeout(n),
          r && clearTimeout(r),
          i && clearTimeout(i),
          (e = n = r = i = null),
          (f = {});
      }
      function m(t) {
        return (
          ("touch" == t.pointerType ||
            t.pointerType == t.MSPOINTER_TYPE_TOUCH) &&
          t.isPrimary
        );
      }
      function g(t, e) {
        return (
          t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
        );
      }
      function v(v) {
        var y,
          b,
          w,
          x,
          _ = 0,
          O = 0;
        l &&
          (t(document)
            .off(u.down, a)
            .off(u.up, s)
            .off(u.move, c)
            .off(u.cancel, h),
          t(window).off("scroll", h),
          h(),
          (l = !1)),
          (u =
            v && "down" in v
              ? v
              : "ontouchstart" in document
              ? {
                  down: "touchstart",
                  up: "touchend",
                  move: "touchmove",
                  cancel: "touchcancel",
                }
              : "onpointerdown" in document
              ? {
                  down: "pointerdown",
                  up: "pointerup",
                  move: "pointermove",
                  cancel: "pointercancel",
                }
              : "onmspointerdown" in document && {
                  down: "MSPointerDown",
                  up: "MSPointerUp",
                  move: "MSPointerMove",
                  cancel: "MSPointerCancel",
                }) &&
            ("MSGesture" in window &&
              (((o = new MSGesture()).target = document.body),
              t(document).bind("MSGestureEnd", function (t) {
                var e =
                  t.velocityX > 1
                    ? "Right"
                    : t.velocityX < -1
                    ? "Left"
                    : t.velocityY > 1
                    ? "Down"
                    : t.velocityY < -1
                    ? "Up"
                    : null;
                e && (f.el.trigger("swipe"), f.el.trigger("swipe" + e));
              })),
            (a = function (n) {
              ((x = g(n, "down")) && !m(n)) ||
                ((w = x ? n : n.touches[0]),
                n.touches &&
                  1 === n.touches.length &&
                  f.x2 &&
                  ((f.x2 = void 0), (f.y2 = void 0)),
                (y = Date.now()),
                (b = y - (f.last || y)),
                (f.el = t(
                  "tagName" in w.target ? w.target : w.target.parentNode
                )),
                e && clearTimeout(e),
                (f.x1 = w.pageX),
                (f.y1 = w.pageY),
                b > 0 && b <= 250 && (f.isDoubleTap = !0),
                (f.last = y),
                (i = setTimeout(d, 750)),
                o && x && o.addPointer(n.pointerId));
            }),
            (c = function (t) {
              ((x = g(t, "move")) && !m(t)) ||
                ((w = x ? t : t.touches[0]),
                p(),
                (f.x2 = w.pageX),
                (f.y2 = w.pageY),
                (_ += Math.abs(f.x1 - f.x2)),
                (O += Math.abs(f.y1 - f.y2)));
            }),
            (s = function (i) {
              ((x = g(i, "up")) && !m(i)) ||
                (p(),
                (f.x2 && Math.abs(f.x1 - f.x2) > 30) ||
                (f.y2 && Math.abs(f.y1 - f.y2) > 30)
                  ? (r = setTimeout(function () {
                      var t, e, n, r;
                      f.el &&
                        (f.el.trigger("swipe"),
                        f.el.trigger(
                          "swipe" +
                            ((t = f.x1),
                            (e = f.x2),
                            (n = f.y1),
                            (r = f.y2),
                            Math.abs(t - e) >= Math.abs(n - r)
                              ? t - e > 0
                                ? "Left"
                                : "Right"
                              : n - r > 0
                              ? "Up"
                              : "Down")
                        )),
                        (f = {});
                    }, 0))
                  : "last" in f &&
                    (_ < 30 && O < 30
                      ? (n = setTimeout(function () {
                          var n = t.Event("tap");
                          (n.cancelTouch = h),
                            f.el && f.el.trigger(n),
                            f.isDoubleTap
                              ? (f.el && f.el.trigger("doubleTap"), (f = {}))
                              : (e = setTimeout(function () {
                                  (e = null),
                                    f.el && f.el.trigger("singleTap"),
                                    (f = {});
                                }, 250));
                        }, 0))
                      : (f = {})),
                (_ = O = 0));
            }),
            t(document).on(u.up, s).on(u.down, a).on(u.move, c),
            t(document).on(u.cancel, h),
            t(window).on("scroll", h),
            (l = !0));
      }
      [
        "swipe",
        "swipeLeft",
        "swipeRight",
        "swipeUp",
        "swipeDown",
        "doubleTap",
        "tap",
        "singleTap",
        "longTap",
      ].forEach(function (e) {
        t.fn[e] = function (t) {
          return this.on(e, t);
        };
      }),
        (t.touch = { setup: v }),
        t(document).ready(v);
    })(Zepto);
  },
  function (t, e, n) {
    "use strict";
    var r,
      i = n(45),
      o = n.n(i);
    !(function (t, e) {
      var n,
        r,
        i,
        a,
        s,
        c,
        u,
        f,
        l,
        d,
        p = "",
        h = document.createElement("div"),
        m =
          /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        g = {};
      function v(t) {
        return n ? n + t : t.toLowerCase();
      }
      void 0 === h.style.transform &&
        t.each({ Webkit: "webkit", Moz: "", O: "o" }, function (t, e) {
          if (void 0 !== h.style[t + "TransitionProperty"])
            return (p = "-" + t.toLowerCase() + "-"), (n = e), !1;
        }),
        (r = p + "transform"),
        (g[(i = p + "transition-property")] =
          g[(a = p + "transition-duration")] =
          g[(c = p + "transition-delay")] =
          g[(s = p + "transition-timing-function")] =
          g[(u = p + "animation-name")] =
          g[(f = p + "animation-duration")] =
          g[(d = p + "animation-delay")] =
          g[(l = p + "animation-timing-function")] =
            ""),
        (t.fx = {
          off: void 0 === n && void 0 === h.style.transitionProperty,
          speeds: { _default: 400, fast: 200, slow: 600 },
          cssPrefix: p,
          transitionEnd: v("TransitionEnd"),
          animationEnd: v("AnimationEnd"),
        }),
        (t.fn.animate = function (e, n, r, i, o) {
          return (
            t.isFunction(n) && ((i = n), (r = void 0), (n = void 0)),
            t.isFunction(r) && ((i = r), (r = void 0)),
            t.isPlainObject(n) &&
              ((r = n.easing),
              (i = n.complete),
              (o = n.delay),
              (n = n.duration)),
            n &&
              (n =
                ("number" == typeof n
                  ? n
                  : t.fx.speeds[n] || t.fx.speeds._default) / 1e3),
            o && (o = parseFloat(o) / 1e3),
            this.anim(e, n, r, i, o)
          );
        }),
        (t.fn.anim = function (e, n, p, h, v) {
          var y,
            b,
            w,
            x = {},
            _ = "",
            O = this,
            j = t.fx.transitionEnd,
            S = !1;
          if (
            (void 0 === n && (n = t.fx.speeds._default / 1e3),
            void 0 === v && (v = 0),
            t.fx.off && (n = 0),
            "string" == typeof e)
          )
            (x[u] = e),
              (x[f] = n + "s"),
              (x[d] = v + "s"),
              (x[l] = p || "linear"),
              (j = t.fx.animationEnd);
          else {
            for (y in ((b = []), e))
              m.test(y)
                ? (_ += y + "(" + e[y] + ") ")
                : ((x[y] = e[y]),
                  b.push(y.replace(/([A-Z])/g, "-$1").toLowerCase()));
            _ && ((x[r] = _), b.push(r)),
              n > 0 &&
                "object" === o()(e) &&
                ((x[i] = b.join(", ")),
                (x[a] = n + "s"),
                (x[c] = v + "s"),
                (x[s] = p || "linear"));
          }
          return (
            (w = function (e) {
              if (void 0 !== e) {
                if (e.target !== e.currentTarget) return;
                t(e.target).unbind(j, w);
              } else t(this).unbind(j, w);
              (S = !0), t(this).css(g), h && h.call(this);
            }),
            n > 0 &&
              (this.bind(j, w),
              setTimeout(function () {
                S || w.call(O);
              }, 1e3 * (n + v) + 25)),
            this.size() && this.get(0).clientLeft,
            this.css(x),
            n <= 0 &&
              setTimeout(function () {
                O.each(function () {
                  w.call(this);
                });
              }, 0),
            this
          );
        }),
        (h = null);
    })(Zepto),
      (r = Zepto).extend(r.fn, {
        fadeIn: function (t) {
          var e = t.speed,
            n = t.easing,
            i = t.complete,
            o = t.display,
            a = void 0 === o ? "block" : o;
          return (
            void 0 === e && (e = 400),
            void 0 === n
              ? (n = "swing")
              : "function" == typeof n &&
                (void 0 === i && (i = n), (n = "swing")),
            r(this)
              .css({ display: a, opacity: 0 })
              .animate({ opacity: 1 }, e, n, function () {
                i && "function" == typeof i && i();
              }),
            this
          );
        },
        fadeOut: function (t, e) {
          return (
            void 0 === t && (t = 400),
            r(this)
              .css({ opacity: 1 })
              .animate({ opacity: 0 }, t, function () {
                r(this).css("display", "none"),
                  e && "function" == typeof e && e();
              }),
            this
          );
        },
      });
  },
]);
