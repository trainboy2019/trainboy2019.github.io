! function t(e, n, i) {
    function r(o, a) {
        if (!n[o]) {
            if (!e[o]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(o, !0);
                if (s) return s(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var h = n[o] = {
                exports: {}
            };
            e[o][0].call(h.exports, function(t) {
                var n = e[o][1][t];
                return r(n ? n : t)
            }, h, h.exports, t, e, n, i)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < i.length; o++) r(i[o]);
    return r
}({
    1: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Element/prototype.classList");
        var i = t("./className/add");
        e.exports = function() {
            var t, e = Array.prototype.slice.call(arguments),
                n = e.shift(e);
            if (n.classList && n.classList.add) return void n.classList.add.apply(n.classList, e);
            for (t = 0; t < e.length; t++) i(n, e[t])
        }
    }, {
        "./className/add": 3,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    2: [function(t, e, n) {
        "use strict";
        e.exports = {
            add: t("./className/add"),
            contains: t("./className/contains"),
            remove: t("./className/remove")
        }
    }, {
        "./className/add": 3,
        "./className/contains": 4,
        "./className/remove": 6
    }],
    3: [function(t, e, n) {
        "use strict";
        var i = t("./contains");
        e.exports = function(t, e) {
            i(t, e) || (t.className += " " + e)
        }
    }, {
        "./contains": 4
    }],
    4: [function(t, e, n) {
        "use strict";
        var i = t("./getTokenRegExp");
        e.exports = function(t, e) {
            return i(e).test(t.className)
        }
    }, {
        "./getTokenRegExp": 5
    }],
    5: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return new RegExp("(\\s|^)" + t + "(\\s|$)")
        }
    }, {}],
    6: [function(t, e, n) {
        "use strict";
        var i = t("./contains"),
            r = t("./getTokenRegExp");
        e.exports = function(t, e) {
            i(t, e) && (t.className = t.className.replace(r(e), "$1").trim())
        }
    }, {
        "./contains": 4,
        "./getTokenRegExp": 5
    }],
    7: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Element/prototype.classList");
        var i = t("./className/contains");
        e.exports = function(t, e) {
            return t.classList && t.classList.contains ? t.classList.contains(e) : i(t, e)
        }
    }, {
        "./className/contains": 4,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    8: [function(t, e, n) {
        "use strict";
        e.exports = {
            add: t("./add"),
            contains: t("./contains"),
            remove: t("./remove"),
            toggle: t("./toggle")
        }
    }, {
        "./add": 1,
        "./contains": 7,
        "./remove": 9,
        "./toggle": 10
    }],
    9: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Element/prototype.classList");
        var i = t("./className/remove");
        e.exports = function() {
            var t, e = Array.prototype.slice.call(arguments),
                n = e.shift(e);
            if (n.classList && n.classList.remove) return void n.classList.remove.apply(n.classList, e);
            for (t = 0; t < e.length; t++) i(n, e[t])
        }
    }, {
        "./className/remove": 6,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    10: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Element/prototype.classList");
        var i = t("./className");
        e.exports = function(t, e, n) {
            var r, s = "undefined" != typeof n;
            return t.classList && t.classList.toggle ? s ? t.classList.toggle(e, n) : t.classList.toggle(e) : (r = s ? !!n : !i.contains(t, e), r ? i.add(t, e) : i.remove(t, e), r)
        }
    }, {
        "./className": 2,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    11: [function(t, e, n) {
        var i = t("./ac-clock/Clock"),
            r = t("./ac-clock/ThrottledClock"),
            s = t("./ac-clock/sharedClockInstance");
        s.Clock = i, s.ThrottledClock = r, e.exports = s
    }, {
        "./ac-clock/Clock": 12,
        "./ac-clock/ThrottledClock": 13,
        "./ac-clock/sharedClockInstance": 14
    }],
    12: [function(t, e, n) {
        "use strict";

        function i() {
            s.call(this), this.lastFrameTime = null, this._animationFrame = null, this._active = !1, this._startTime = null, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._getTime = Date.now || function() {
                return (new Date).getTime()
            }
        }
        t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/requestAnimationFrame");
        var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        (new Date).getTime();
        r = i.prototype = new s(null), r.start = function() {
            this._active || this._tick()
        }, r.stop = function() {
            this._active && window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null, this.lastFrameTime = null, this._active = !1
        }, r.destroy = function() {
            this.stop(), this.off();
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, r.isRunning = function() {
            return this._active
        }, r._tick = function() {
            this._active || (this._active = !0), this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)
        }, r._onAnimationFrame = function(t) {
            null === this.lastFrameTime && (this.lastFrameTime = t);
            var e = t - this.lastFrameTime,
                n = 0;
            if (e >= 1e3 && (e = 0), 0 !== e && (n = 1e3 / e), this._firstFrame === !0 && (e = 0, this._firstFrame = !1), 0 === n) this._firstFrame = !0;
            else {
                var i = {
                    time: t,
                    delta: e,
                    fps: n,
                    naturalFps: n,
                    timeNow: this._getTime()
                };
                this.trigger("update", i), this.trigger("draw", i)
            }
            this._animationFrame = null, this.lastFrameTime = t, this._active !== !1 ? this._tick() : this.lastFrameTime = null
        }, e.exports = i
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/requestAnimationFrame": void 0
    }],
    13: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            null !== t && (o.call(this), e = e || {}, this._fps = t || null, this._clock = e.clock || s, this._lastThrottledTime = null, this._clockEvent = null, this._boundOnClockDraw = this._onClockDraw.bind(this), this._boundOnClockUpdate = this._onClockUpdate.bind(this), this._clock.on("update", this._boundOnClockUpdate))
        }
        t("@marcom/ac-polyfills/requestAnimationFrame");
        var r, s = t("./sharedClockInstance"),
            o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        r = i.prototype = new o(null), r.setFps = function(t) {
            return this._fps = t, this
        }, r.getFps = function() {
            return this._fps
        }, r.start = function() {
            return this._clock.start(), this
        }, r.stop = function() {
            return this._clock.stop(), this
        }, r.isRunning = function() {
            return this._clock.isRunning()
        }, r.destroy = function() {
            this._clock.off("update", this._boundOnClockUpdate), this._clock.destroy.call(this)
        }, r._onClockUpdate = function(t) {
            null === this._lastThrottledTime && (this._lastThrottledTime = this._clock.lastFrameTime);
            var e = t.time - this._lastThrottledTime;
            if (!this._fps) throw new TypeError("FPS is not defined.");
            Math.ceil(1e3 / e) >= this._fps + 2 || (this._clockEvent = t, this._clockEvent.delta = e, this._clockEvent.fps = 1e3 / e, this._lastThrottledTime = this._clockEvent.time, this._clock.once("draw", this._boundOnClockDraw), this.trigger("update", this._clockEvent))
        }, r._onClockDraw = function() {
            this.trigger("draw", this._clockEvent)
        }, e.exports = i
    }, {
        "./sharedClockInstance": 14,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-polyfills/requestAnimationFrame": void 0
    }],
    14: [function(t, e, n) {
        "use strict";
        var i = t("./Clock");
        e.exports = new i
    }, {
        "./Clock": 12
    }],
    15: [function(t, e, n) {
        "use strict";
        e.exports = {
            path: t("./ac-path/path")
        }
    }, {
        "./ac-path/path": 16
    }],
    16: [function(t, e, n) {
        "use strict";

        function i(t) {
            return i.parse(t)
        }
        i.basename = function(t, e) {
            i._assertStr(t);
            var n, r = t.match(/[^/]*$/)[0];
            return e && (n = r.match(new RegExp("(.*)" + e + "$")), n && (r = n[1])), r
        }, i.dirname = function(t) {
            i._assertStr(t);
            var e = t.match(/^(.*)\b\/|.*/);
            return e[1] || t
        }, i.extname = function(t) {
            i._assertStr(t);
            var e = t.match(/\.[^.]*$/);
            return e ? e[0] : ""
        }, i.filename = function(t) {
            return i._assertStr(t), i.basename(t, i.extname(t))
        }, i.format = function(t, e) {
            i._assertObj(t);
            var n = t.dirname ? t.dirname + "/" : "";
            return t.basename ? n += t.basename : t.filename && (n += t.filename, t.extname && (n += t.extname)), e && ("string" == typeof e ? n += "?" + e : Object.prototype.toString.call(e) === Object.prototype.toString.call([]) && (n += "?" + e.join("&"))), n
        }, i.isAbsolute = function(t) {
            return i._assertStr(t), !!t.match(/(^http(s?))/)
        }, i.isRootRelative = function(t) {
            return i._assertStr(t), !!t.match(/^\/(?!\/)/)
        }, i.parse = function(t) {
            return i._assertStr(t), {
                dirname: i.dirname(t),
                basename: i.basename(t),
                filename: i.filename(t),
                extname: i.extname(t)
            }
        }, i._assertStr = function(t) {
            i._assertType(t, "string")
        }, i._assertObj = function(t) {
            i._assertType(t, "object")
        }, i._assertType = function(t, e) {
            var n = typeof t;
            if ("undefined" === n || n !== e) throw new TypeError("path param must be of type " + e)
        }, e.exports = i
    }, {}],
    17: [function(t, e, n) {
        "use strict";
        e.exports = {
            cname: t("./ac-cname/cname")
        }
    }, {
        "./ac-cname/cname": 18
    }],
    18: [function(t, e, n) {
        "use strict";

        function i(t) {
            return i.addPrefix(t)
        }
        var r = t("ac-path").path;
        i._prefix = function() {
            var t = "https://images.apple.com/global/elements/blank.gif";
            return t.replace(/global\/.*/, "")
        }(), i.addPrefix = function(t) {
            return r.isAbsolute(t) ? t : (i._assertRootRelative(t), t = i._prefix + t.replace(/^\//, ""), t = t.replace(/(^.+)(\/105\/)/, "$1/"))
        }, i.formatUrl = function(t, e, n, s) {
            var o = r.format({
                dirname: t,
                filename: e,
                extname: n
            }, s);
            if (r.isAbsolute(o)) return o;
            i._assertRootRelative(t);
            var a = i.addPrefix(o);
            return a
        }, i._assertRootRelative = function(t) {
            if (!r.isRootRelative(t)) throw new URIError("Only root-relative paths are currently supported")
        }, e.exports = i
    }, {
        "ac-path": 15
    }],
    19: [function(t, e, n) {
        e.exports.EventEmitter = t("./ac-event-emitter/EventEmitter")
    }, {
        "./ac-event-emitter/EventEmitter": 20
    }],
    20: [function(t, e, n) {
        "use strict";
        var i = "EventEmitter:propagation",
            r = function(t) {
                t && (this.context = t)
            },
            s = r.prototype,
            o = function() {
                return this.hasOwnProperty("_events") || "object" == typeof this._events || (this._events = {}), this._events
            },
            a = function(t, e) {
                var n = t[0],
                    i = t[1],
                    r = t[2];
                if ("string" != typeof n && "object" != typeof n || null === n || Array.isArray(n)) throw new TypeError("Expecting event name to be a string or object.");
                if ("string" == typeof n && !i) throw new Error("Expecting a callback function to be provided.");
                if (i && "function" != typeof i) {
                    if ("object" != typeof n || "object" != typeof i) throw new TypeError("Expecting callback to be a function.");
                    r = i
                }
                if ("object" == typeof n)
                    for (var s in n) e.call(this, s, n[s], r);
                "string" == typeof n && (n = n.split(" "), n.forEach(function(t) {
                    e.call(this, t, i, r)
                }, this))
            },
            c = function(t, e) {
                var n, i, r;
                if (n = o.call(this)[t], n && 0 !== n.length)
                    for (n = n.slice(), this._stoppedImmediatePropagation = !1, i = 0, r = n.length; i < r && (!this._stoppedImmediatePropagation && !e(n[i], i)); i++);
            },
            l = function(t, e, n) {
                var i = -1;
                c.call(this, e, function(t, e) {
                    if (t.callback === n) return i = e, !0
                }), i !== -1 && t[e].splice(i, 1)
            };
        s.on = function() {
            var t = o.call(this);
            return a.call(this, arguments, function(e, n, i) {
                t[e] = t[e] || (t[e] = []), t[e].push({
                    callback: n,
                    context: i
                })
            }), this
        }, s.once = function() {
            return a.call(this, arguments, function(t, e, n) {
                var i = function(r) {
                    e.call(n || this, r), this.off(t, i)
                };
                this.on(t, i, this)
            }), this
        }, s.off = function(t, e) {
            var n = o.call(this);
            if (0 === arguments.length) this._events = {};
            else if (!t || "string" != typeof t && "object" != typeof t || Array.isArray(t)) throw new TypeError("Expecting event name to be a string or object.");
            if ("object" == typeof t)
                for (var i in t) l.call(this, n, i, t[i]);
            if ("string" == typeof t) {
                var r = t.split(" ");
                1 === r.length ? e ? l.call(this, n, t, e) : n[t] = [] : r.forEach(function(t) {
                    n[t] = []
                })
            }
            return this
        }, s.trigger = function(t, e, n) {
            if (!t) throw new Error("trigger method requires an event name");
            if ("string" != typeof t) throw new TypeError("Expecting event names to be a string.");
            if (n && "boolean" != typeof n) throw new TypeError("Expecting doNotPropagate to be a boolean.");
            return t = t.split(" "), t.forEach(function(t) {
                c.call(this, t, function(t) {
                    t.callback.call(t.context || this.context || this, e)
                }.bind(this)), n || c.call(this, i, function(n) {
                    var i = t;
                    n.prefix && (i = n.prefix + i), n.emitter.trigger(i, e)
                })
            }, this), this
        }, s.propagateTo = function(t, e) {
            var n = o.call(this);
            n[i] || (this._events[i] = []), n[i].push({
                emitter: t,
                prefix: e
            })
        }, s.stopPropagatingTo = function(t) {
            var e = o.call(this);
            if (!t) return void(e[i] = []);
            var n, r = e[i],
                s = r.length;
            for (n = 0; n < s; n++)
                if (r[n].emitter === t) {
                    r.splice(n, 1);
                    break
                }
        }, s.stopImmediatePropagation = function() {
            this._stoppedImmediatePropagation = !0
        }, s.has = function(t, e, n) {
            var i = o.call(this),
                r = i[t];
            if (0 === arguments.length) return Object.keys(i);
            if (!r) return !1;
            if (!e) return r.length > 0;
            for (var s = 0, a = r.length; s < a; s++) {
                var c = r[s];
                if (n && e && c.context === n && c.callback === e) return !0;
                if (e && !n && c.callback === e) return !0
            }
            return !1
        }, e.exports = r
    }, {}],
    21: [function(t, e, n) {
        "use strict";
        e.exports = {
            DOMEmitter: t("./ac-dom-emitter/DOMEmitter")
        }
    }, {
        "./ac-dom-emitter/DOMEmitter": 22
    }],
    22: [function(t, e, n) {
        "use strict";

        function i(t) {
            null !== t && (this.el = t, this._bindings = {}, this._delegateFuncs = {}, this._eventEmitter = new s)
        }
        var r, s = t("ac-event-emitter").EventEmitter,
            o = t("./DOMEmitterEvent"),
            a = {
                addEventListener: t("@marcom/ac-dom-events/addEventListener"),
                removeEventListener: t("@marcom/ac-dom-events/removeEventListener"),
                dispatchEvent: t("@marcom/ac-dom-events/dispatchEvent")
            },
            c = {
                querySelectorAll: t("@marcom/ac-dom-traversal/querySelectorAll"),
                matchesSelector: t("@marcom/ac-dom-traversal/matchesSelector")
            },
            l = "dom-emitter";
        r = i.prototype, r.on = function() {
            return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._on), this
        }, r.once = function() {
            return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._once), this
        }, r.off = function() {
            return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._off), this
        }, r.has = function(t, e, n, i) {
            var r, s;
            if ("string" == typeof e ? (r = e, s = n) : (s = e, i = n), r) {
                var o = this._getDelegateFuncBindingIdx(t, r, s, i, !0);
                return o > -1
            }
            return !(!this._eventEmitter || !this._eventEmitter.has.apply(this._eventEmitter, arguments))
        }, r.trigger = function(t, e, n, i) {
            t = this._parseEventNames(t), t = this._cleanStringData(t);
            var r, s, o, a = t.length;
            for ("string" == typeof e ? (r = this._cleanStringData(e), s = n) : (s = e, i = n), o = 0; o < a; o++) this._triggerDOMEvents(t[o], s, r);
            return this
        }, r.emitterTrigger = function(t, e, n) {
            if (!this._eventEmitter) return this;
            t = this._parseEventNames(t), t = this._cleanStringData(t), e = new o(e, this);
            var i, r = t.length;
            for (i = 0; i < r; i++) this._eventEmitter.trigger(t[i], e, n);
            return this
        }, r.propagateTo = function(t, e) {
            return this._eventEmitter.propagateTo(t, e), this
        }, r.stopPropagatingTo = function(t) {
            return this._eventEmitter.stopPropagatingTo(t), this
        }, r.stopImmediatePropagation = function() {
            return this._eventEmitter.stopImmediatePropagation(), this
        }, r.destroy = function() {
            this._triggerInternalEvent("willdestroy"), this.off();
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, r._parseEventNames = function(t) {
            return t ? t.split(" ") : [t]
        }, r._onListenerEvent = function(t, e) {
            var n = new o(e, this);
            this._eventEmitter.trigger(t, n, !1)
        }, r._setListener = function(t) {
            this._bindings[t] = this._onListenerEvent.bind(this, t), a.addEventListener(this.el, t, this._bindings[t])
        }, r._removeListener = function(t) {
            a.removeEventListener(this.el, t, this._bindings[t]), this._bindings[t] = null
        }, r._triggerInternalEvent = function(t, e) {
            this.emitterTrigger(l + ":" + t, e)
        }, r._normalizeArgumentsAndCall = function(t, e) {
            var n = {};
            if (0 === t.length) return void e.call(this, n);
            if ("string" == typeof t[0] || null === t[0]) return t = this._cleanStringData(t), n.events = t[0], "string" == typeof t[1] ? (n.delegateQuery = t[1], n.callback = t[2], n.context = t[3]) : (n.callback = t[1], n.context = t[2]), void e.call(this, n);
            var i, r, s = ":",
                o = t[0];
            for (i in o) o.hasOwnProperty(i) && (n = {}, r = this._cleanStringData(i.split(s)), n.events = r[0], n.delegateQuery = r[1], n.callback = o[i], n.context = t[1], e.call(this, n))
        }, r._registerDelegateFunc = function(t, e, n, i, r) {
            var s = this._delegateFunc.bind(this, t, e, n, r);
            return this._delegateFuncs[e] = this._delegateFuncs[e] || {}, this._delegateFuncs[e][t] = this._delegateFuncs[e][t] || [], this._delegateFuncs[e][t].push({
                func: i,
                context: r,
                delegateFunc: s
            }), s
        }, r._cleanStringData = function(t) {
            var e = !1;
            "string" == typeof t && (t = [t], e = !0);
            var n, i, r, s = [],
                o = t.length;
            for (n = 0; n < o; n++) {
                if (i = t[n], "string" == typeof i) {
                    if ("" === i || " " === i) continue;
                    for (r = i.length;
                        " " === i[0];) i = i.slice(1, r), r--;
                    for (;
                        " " === i[r - 1];) i = i.slice(0, r - 1), r--
                }
                s.push(i)
            }
            return e ? s[0] : s
        }, r._unregisterDelegateFunc = function(t, e, n, i) {
            if (this._delegateFuncs[e] && this._delegateFuncs[e][t]) {
                var r, s = this._getDelegateFuncBindingIdx(t, e, n, i);
                return s > -1 && (r = this._delegateFuncs[e][t][s].delegateFunc, this._delegateFuncs[e][t].splice(s, 1), 0 === this._delegateFuncs[e][t].length && (this._delegateFuncs[e][t] = null)), r
            }
        }, r._unregisterDelegateFuncs = function(t, e) {
            if (this._delegateFuncs[e] && (null === t || this._delegateFuncs[e][t]))
                if (null !== t) this._unbindDelegateFunc(t, e);
                else {
                    var n;
                    for (n in this._delegateFuncs[e]) this._delegateFuncs[e].hasOwnProperty(n) && this._unbindDelegateFunc(n, e)
                }
        }, r._unbindDelegateFunc = function(t, e) {
            for (var n, i, r = 0; this._delegateFuncs[e][t] && this._delegateFuncs[e][t][r];) n = this._delegateFuncs[e][t][r], i = this._delegateFuncs[e][t][r].length, this._off({
                events: t,
                delegateQuery: e,
                callback: n.func,
                context: n.context
            }), this._delegateFuncs[e][t] && i === this._delegateFuncs[e][t].length && r++;
            n = i = null
        }, r._unregisterDelegateFuncsByEvent = function(t) {
            var e;
            for (e in this._delegateFuncs) this._delegateFuncs.hasOwnProperty(e) && this._unregisterDelegateFuncs(t, e)
        }, r._delegateFunc = function(t, e, n, i, r) {
            if (this._targetHasDelegateAncestor(r.target, e)) {
                var s = Array.prototype.slice.call(arguments, 0),
                    o = s.slice(4, s.length);
                i = i || window, "object" == typeof r.detail && (o[0] = r.detail), n.apply(i, o)
            }
        }, r._targetHasDelegateAncestor = function(t, e) {
            for (var n = t; n && n !== this.el && n !== document.documentElement;) {
                if (c.matchesSelector(n, e)) return !0;
                n = n.parentNode
            }
            return !1
        }, r._on = function(t) {
            var e = t.events,
                n = t.callback,
                i = t.delegateQuery,
                r = t.context,
                s = t.unboundCallback || n;
            e = this._parseEventNames(e), e.forEach(function(t, e, n, i, r) {
                this.has(r) || this._setListener(r), "string" == typeof i && (t = this._registerDelegateFunc(r, i, t, e, n)), this._triggerInternalEvent("willon", {
                    evt: r,
                    callback: t,
                    context: n,
                    delegateQuery: i
                }), this._eventEmitter.on(r, t, n), this._triggerInternalEvent("didon", {
                    evt: r,
                    callback: t,
                    context: n,
                    delegateQuery: i
                })
            }.bind(this, n, s, r, i)), e = n = s = i = r = null
        }, r._off = function(t) {
            var e = t.events,
                n = t.callback,
                i = t.delegateQuery,
                r = t.context,
                s = t.unboundCallback || n;
            if ("undefined" != typeof e) e = this._parseEventNames(e), e.forEach(function(t, e, n, i, r) {
                if ("string" != typeof i || "function" != typeof e || (t = this._unregisterDelegateFunc(r, i, e, n))) return "string" == typeof i && "undefined" == typeof t ? void this._unregisterDelegateFuncs(r, i) : void("string" == typeof r && "undefined" == typeof t && (this._unregisterDelegateFuncsByEvent(r), "string" == typeof i) || (this._triggerInternalEvent("willoff", {
                    evt: r,
                    callback: t,
                    context: n,
                    delegateQuery: i
                }), this._eventEmitter.off(r, t, n), this._triggerInternalEvent("didoff", {
                    evt: r,
                    callback: t,
                    context: n,
                    delegateQuery: i
                }), this.has(r) || this._removeListener(r)))
            }.bind(this, n, s, r, i)), e = n = s = i = r = null;
            else {
                this._eventEmitter.off();
                var o;
                for (o in this._bindings) this._bindings.hasOwnProperty(o) && this._removeListener(o);
                for (o in this._delegateFuncs) this._delegateFuncs.hasOwnProperty(o) && (this._delegateFuncs[o] = null)
            }
        }, r._once = function(t) {
            var e = t.events,
                n = t.callback,
                i = t.delegateQuery,
                r = t.context;
            e = this._parseEventNames(e), e.forEach(function(t, e, n, i) {
                return "string" == typeof n ? this._handleDelegateOnce(i, t, e, n) : (this.has(i) || this._setListener(i), this._triggerInternalEvent("willonce", {
                    evt: i,
                    callback: t,
                    context: e,
                    delegateQuery: n
                }), this._eventEmitter.once.call(this, i, t, e), void this._triggerInternalEvent("didonce", {
                    evt: i,
                    callback: t,
                    context: e,
                    delegateQuery: n
                }))
            }.bind(this, n, r, i)), e = n = i = r = null
        }, r._handleDelegateOnce = function(t, e, n, i) {
            return this._triggerInternalEvent("willonce", {
                evt: t,
                callback: e,
                context: n,
                delegateQuery: i
            }), this._on({
                events: t,
                context: n,
                delegateQuery: i,
                callback: this._getDelegateOnceCallback.bind(this, t, e, n, i),
                unboundCallback: e
            }), this._triggerInternalEvent("didonce", {
                evt: t,
                callback: e,
                context: n,
                delegateQuery: i
            }), this
        }, r._getDelegateOnceCallback = function(t, e, n, i) {
            var r = Array.prototype.slice.call(arguments, 0),
                s = r.slice(4, r.length);
            e.apply(n, s), this._off({
                events: t,
                delegateQuery: i,
                callback: e,
                context: n
            })
        }, r._getDelegateFuncBindingIdx = function(t, e, n, i, r) {
            var s = -1;
            if (this._delegateFuncs[e] && this._delegateFuncs[e][t]) {
                var o, a, c = this._delegateFuncs[e][t].length;
                for (o = 0; o < c; o++)
                    if (a = this._delegateFuncs[e][t][o], r && "undefined" == typeof n && (n = a.func), a.func === n && a.context === i) {
                        s = o;
                        break
                    }
            }
            return s
        }, r._triggerDOMEvents = function(t, e, n) {
            var i = [this.el];
            n && (i = c.querySelectorAll(n, this.el));
            var r, s = i.length;
            for (r = 0; r < s; r++) a.dispatchEvent(i[r], t, {
                bubbles: !0,
                cancelable: !0,
                detail: e
            })
        }, e.exports = i
    }, {
        "./DOMEmitterEvent": 23,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/dispatchEvent": 25,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-traversal/matchesSelector": 88,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "ac-event-emitter": 19
    }],
    23: [function(t, e, n) {
        "use strict";
        var i, r = {
                preventDefault: t("@marcom/ac-dom-events/preventDefault"),
                stopPropagation: t("@marcom/ac-dom-events/stopPropagation"),
                target: t("@marcom/ac-dom-events/target")
            },
            s = function(t, e) {
                this._domEmitter = e, this.originalEvent = t || {}, this._originalTarget = r.target(this.originalEvent), this.target = this._originalTarget || this._domEmitter.el, this.currentTarget = this._domEmitter.el, this.timeStamp = this.originalEvent.timeStamp || Date.now(), this._isDOMEvent(this.originalEvent) ? "object" == typeof this.originalEvent.detail && (this.data = this.originalEvent.detail) : t && (this.data = this.originalEvent, this.originalEvent = {})
            };
        i = s.prototype, i.preventDefault = function() {
            r.preventDefault(this.originalEvent)
        }, i.stopPropagation = function() {
            r.stopPropagation(this.originalEvent)
        }, i.stopImmediatePropagation = function() {
            this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this._domEmitter.stopImmediatePropagation()
        }, i._isDOMEvent = function(t) {
            return !!(this._originalTarget || "undefined" !== document.createEvent && "undefined" != typeof CustomEvent && t instanceof CustomEvent)
        }, e.exports = s
    }, {
        "@marcom/ac-dom-events/preventDefault": 32,
        "@marcom/ac-dom-events/stopPropagation": 36,
        "@marcom/ac-dom-events/target": 37
    }],
    24: [function(t, e, n) {
        "use strict";
        var i = t("./utils/addEventListener"),
            r = t("./shared/getEventType");
        e.exports = function(t, e, n, s) {
            return e = r(t, e), i(t, e, n, s)
        }
    }, {
        "./shared/getEventType": 34,
        "./utils/addEventListener": 38
    }],
    25: [function(t, e, n) {
        "use strict";
        var i = t("./utils/dispatchEvent"),
            r = t("./shared/getEventType");
        e.exports = function(t, e, n) {
            return e = r(t, e), i(t, e, n)
        }
    }, {
        "./shared/getEventType": 34,
        "./utils/dispatchEvent": 39
    }],
    26: [function(t, e, n) {
        "use strict";
        e.exports = {
            addEventListener: t("./addEventListener"),
            dispatchEvent: t("./dispatchEvent"),
            preventDefault: t("./preventDefault"),
            removeEventListener: t("./removeEventListener"),
            stop: t("./stop"),
            stopPropagation: t("./stopPropagation"),
            target: t("./target")
        }
    }, {
        "./addEventListener": 24,
        "./dispatchEvent": 25,
        "./preventDefault": 32,
        "./removeEventListener": 33,
        "./stop": 35,
        "./stopPropagation": 36,
        "./target": 37
    }],
    27: [function(t, e, n) {
        "use strict";
        var i = t("./utils/eventTypeAvailable"),
            r = t("./shared/camelCasedEventTypes"),
            s = t("./shared/windowFallbackEventTypes"),
            o = t("./shared/prefixHelper"),
            a = {};
        e.exports = function c(t, e) {
            var n, l, h;
            if (e = e || "div", t = t.toLowerCase(), e in a || (a[e] = {}), l = a[e], t in l) return l[t];
            if (i(t, e)) return l[t] = t;
            if (t in r)
                for (h = 0; h < r[t].length; h++)
                    if (n = r[t][h], i(n.toLowerCase(), e)) return l[t] = n;
            for (h = 0; h < o.evt.length; h++)
                if (n = o.evt[h] + t, i(n, e)) return o.reduce(h), l[t] = n;
            return "window" !== e && s.indexOf(t) ? l[t] = c(t, "window") : l[t] = !1
        }
    }, {
        "./shared/camelCasedEventTypes": 28,
        "./shared/prefixHelper": 29,
        "./shared/windowFallbackEventTypes": 30,
        "./utils/eventTypeAvailable": 31
    }],
    28: [function(t, e, n) {
        "use strict";
        e.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"]
        }
    }, {}],
    29: [function(t, e, n) {
        "use strict";
        var i = ["-webkit-", "-moz-", "-ms-"],
            r = ["Webkit", "Moz", "ms"],
            s = ["webkit", "moz", "ms"],
            o = function() {
                this.initialize()
            },
            a = o.prototype;
        a.initialize = function() {
            this.reduced = !1, this.css = i, this.dom = r, this.evt = s
        }, a.reduce = function(t) {
            this.reduced || (this.reduced = !0, this.css = [this.css[t]], this.dom = [this.dom[t]], this.evt = [this.evt[t]])
        }, e.exports = new o
    }, {}],
    30: [function(t, e, n) {
        "use strict";
        e.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
    }, {}],
    31: [function(t, e, n) {
        "use strict";
        var i = {
            window: window,
            document: document
        };
        e.exports = function(t, e) {
            var n;
            return t = "on" + t, e in i || (i[e] = document.createElement(e)), n = i[e], t in n || "setAttribute" in n && (n.setAttribute(t, "return;"), "function" == typeof n[t])
        }
    }, {}],
    32: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }
    }, {}],
    33: [function(t, e, n) {
        "use strict";
        var i = t("./utils/removeEventListener"),
            r = t("./shared/getEventType");
        e.exports = function(t, e, n, s) {
            return e = r(t, e), i(t, e, n, s)
        }
    }, {
        "./shared/getEventType": 34,
        "./utils/removeEventListener": 40
    }],
    34: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-prefixer/getEventType");
        e.exports = function(t, e) {
            var n, r;
            return n = "tagName" in t ? t.tagName : t === window ? "window" : "document", r = i(e, n), r ? r : e
        }
    }, {
        "@marcom/ac-prefixer/getEventType": 27
    }],
    35: [function(t, e, n) {
        "use strict";
        var i = t("./stopPropagation"),
            r = t("./preventDefault");
        e.exports = function(t) {
            t = t || window.event, i(t), r(t), t.stopped = !0, t.returnValue = !1
        }
    }, {
        "./preventDefault": 32,
        "./stopPropagation": 36
    }],
    36: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            t = t || window.event, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }
    }, {}],
    37: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return t = t || window.event, "undefined" != typeof t.target ? t.target : t.srcElement
        }
    }, {}],
    38: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n, i) {
            return t.addEventListener ? t.addEventListener(e, n, !!i) : t.attachEvent("on" + e, n), t
        }
    }, {}],
    39: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/CustomEvent"), e.exports = function(t, e, n) {
            var i;
            return t.dispatchEvent ? (i = n ? new CustomEvent(e, n) : new CustomEvent(e), t.dispatchEvent(i)) : (i = document.createEventObject(), n && "detail" in n && (i.detail = n.detail), t.fireEvent("on" + e, i)), t
        }
    }, {
        "@marcom/ac-polyfills/CustomEvent": void 0
    }],
    40: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n, i) {
            return t.removeEventListener ? t.removeEventListener(e, n, !!i) : t.detachEvent("on" + e, n), t
        }
    }, {}],
    41: [function(t, e, n) {
        "use strict";
        var i = t("./utils/getBoundingClientRect");
        e.exports = function(t, e) {
            var n = 1;
            return e && (n = i(t).width / t.offsetWidth), {
                width: t.scrollWidth * n,
                height: t.scrollHeight * n
            }
        }
    }, {
        "./utils/getBoundingClientRect": 52
    }],
    42: [function(t, e, n) {
        "use strict";
        var i = t("./utils/getBoundingClientRect");
        e.exports = function(t, e) {
            var n;
            return e ? (n = i(t), {
                width: n.width,
                height: n.height
            }) : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        }
    }, {
        "./utils/getBoundingClientRect": 52
    }],
    43: [function(t, e, n) {
        "use strict";
        var i = t("./getDimensions"),
            r = t("./utils/getBoundingClientRect"),
            s = t("./getScrollX"),
            o = t("./getScrollY");
        e.exports = function(t, e) {
            var n, a, c, l;
            if (e) return n = r(t), a = s(), c = o(), {
                top: n.top + c,
                right: n.right + a,
                bottom: n.bottom + c,
                left: n.left + a
            };
            for (l = i(t, e), n = {
                    top: t.offsetTop,
                    left: t.offsetLeft,
                    width: l.width,
                    height: l.height
                }; t = t.offsetParent;) n.top += t.offsetTop, n.left += t.offsetLeft;
            return {
                top: n.top,
                right: n.left + n.width,
                bottom: n.top + n.height,
                left: n.left
            }
        }
    }, {
        "./getDimensions": 42,
        "./getScrollX": 47,
        "./getScrollY": 48,
        "./utils/getBoundingClientRect": 52
    }],
    44: [function(t, e, n) {
        "use strict";
        var i = t("./getDimensions"),
            r = t("./getPixelsInViewport");
        e.exports = function(t, e) {
            var n = r(t, e),
                s = i(t, e).height;
            return n / s
        }
    }, {
        "./getDimensions": 42,
        "./getPixelsInViewport": 45
    }],
    45: [function(t, e, n) {
        "use strict";
        var i = t("./getViewportPosition");
        e.exports = function(t, e) {
            var n, r = document.documentElement.clientHeight,
                s = i(t, e);
            return s.top >= r || s.bottom <= 0 ? 0 : (n = s.bottom - s.top, s.top < 0 && (n += s.top), s.bottom > r && (n -= s.bottom - r), n)
        }
    }, {
        "./getViewportPosition": 49
    }],
    46: [function(t, e, n) {
        "use strict";
        var i = t("./getDimensions"),
            r = t("./utils/getBoundingClientRect");
        e.exports = function(t, e) {
            var n, s, o;
            return e ? (n = r(t), t.offsetParent && (s = r(t.offsetParent), n.top -= s.top, n.left -= s.left)) : (o = i(t, e), n = {
                top: t.offsetTop,
                left: t.offsetLeft,
                width: o.width,
                height: o.height
            }), {
                top: n.top,
                right: n.left + n.width,
                bottom: n.top + n.height,
                left: n.left
            }
        }
    }, {
        "./getDimensions": 42,
        "./utils/getBoundingClientRect": 52
    }],
    47: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e;
            if (t = t || window, t === window) {
                if (e = window.pageXOffset) return e;
                t = document.documentElement || document.body.parentNode || document.body
            }
            return t.scrollLeft
        }
    }, {}],
    48: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e;
            if (t = t || window, t === window) {
                if (e = window.pageYOffset) return e;
                t = document.documentElement || document.body.parentNode || document.body
            }
            return t.scrollTop
        }
    }, {}],
    49: [function(t, e, n) {
        "use strict";
        var i = t("./getPagePosition"),
            r = t("./utils/getBoundingClientRect"),
            s = t("./getScrollX"),
            o = t("./getScrollY");
        e.exports = function(t, e) {
            var n, a, c;
            return e ? (n = r(t), {
                top: n.top,
                right: n.right,
                bottom: n.bottom,
                left: n.left
            }) : (n = i(t), a = s(), c = o(), {
                top: n.top - c,
                right: n.right - a,
                bottom: n.bottom - c,
                left: n.left - a
            })
        }
    }, {
        "./getPagePosition": 43,
        "./getScrollX": 47,
        "./getScrollY": 48,
        "./utils/getBoundingClientRect": 52
    }],
    50: [function(t, e, n) {
        "use strict";
        e.exports = {
            getContentDimensions: t("./getContentDimensions"),
            getDimensions: t("./getDimensions"),
            getPagePosition: t("./getPagePosition"),
            getPercentInViewport: t("./getPercentInViewport"),
            getPixelsInViewport: t("./getPixelsInViewport"),
            getPosition: t("./getPosition"),
            getScrollX: t("./getScrollX"),
            getScrollY: t("./getScrollY"),
            getViewportPosition: t("./getViewportPosition"),
            isInViewport: t("./isInViewport")
        }
    }, {
        "./getContentDimensions": 41,
        "./getDimensions": 42,
        "./getPagePosition": 43,
        "./getPercentInViewport": 44,
        "./getPixelsInViewport": 45,
        "./getPosition": 46,
        "./getScrollX": 47,
        "./getScrollY": 48,
        "./getViewportPosition": 49,
        "./isInViewport": 51
    }],
    51: [function(t, e, n) {
        "use strict";
        var i = t("./getPixelsInViewport"),
            r = t("./getPercentInViewport");
        e.exports = function(t, e, n) {
            var s;
            return n = n || 0, "string" == typeof n && "px" === n.slice(-2) ? (n = parseInt(n, 10), s = i(t, e)) : s = r(t, e), s > 0 && s >= n
        }
    }, {
        "./getPercentInViewport": 44,
        "./getPixelsInViewport": 45
    }],
    52: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width || e.right - e.left,
                height: e.height || e.bottom - e.top
            }
        }
    }, {}],
    53: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-prefixer/getStyleProperty"),
            r = t("@marcom/ac-prefixer/stripPrefixes");
        e.exports = function() {
            var t, e, n, s, o = Array.prototype.slice.call(arguments),
                a = o.shift(o),
                c = window.getComputedStyle(a),
                l = {};
            for ("string" != typeof o[0] && (o = o[0]), s = 0; s < o.length; s++) t = o[s], e = i(t), e ? (t = r(e), n = c[e], n && "auto" !== n || (n = null), n && (n = r(n))) : n = null, l[t] = n;
            return l
        }
    }, {
        "@marcom/ac-prefixer/getStyleProperty": 57,
        "@marcom/ac-prefixer/stripPrefixes": 63
    }],
    54: [function(t, e, n) {
        "use strict";
        e.exports = {
            getStyle: t("./getStyle"),
            setStyle: t("./setStyle")
        }
    }, {
        "./getStyle": 53,
        "./setStyle": 66
    }],
    55: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e, n, i;
            if (!t && 0 !== t) return "";
            if (Array.isArray(t)) return t + "";
            if ("object" == typeof t) {
                for (e = "", n = Object.keys(t), i = 0; i < n.length; i++) e += n[i] + "(" + t[n[i]] + ") ";
                return e.trim()
            }
            return t
        }
    }, {}],
    56: [function(t, e, n) {
        "use strict";
        var i = t("./shared/stylePropertyCache"),
            r = t("./getStyleProperty"),
            s = t("./getStyleValue");
        e.exports = function(t, e) {
            var n;
            if (t = r(t), !t) return !1;
            if (n = i[t].css, "undefined" != typeof e) {
                if (e = s(t, e), e === !1) return !1;
                n += ":" + e + ";"
            }
            return n
        }
    }, {
        "./getStyleProperty": 57,
        "./getStyleValue": 58,
        "./shared/stylePropertyCache": 61
    }],
    57: [function(t, e, n) {
        "use strict";
        var i = t("./shared/stylePropertyCache"),
            r = t("./shared/getStyleTestElement"),
            s = t("./utils/toCSS"),
            o = t("./utils/toDOM"),
            a = t("./shared/prefixHelper"),
            c = function(t, e) {
                var n = s(t),
                    r = e !== !1 && s(e);
                return i[t] = i[e] = i[n] = i[r] = {
                    dom: e,
                    css: r
                }, e
            };
        e.exports = function(t) {
            var e, n, s, l;
            if (t += "", t in i) return i[t].dom;
            for (s = r(), t = o(t), n = t.charAt(0).toUpperCase() + t.substring(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + a.dom.join(n + " ") + n).split(" "), l = 0; l < e.length; l++)
                if ("undefined" != typeof s.style[e[l]]) return 0 !== l && a.reduce(l - 1), c(t, e[l]);
            return c(t, !1)
        }
    }, {
        "./shared/getStyleTestElement": 59,
        "./shared/prefixHelper": 60,
        "./shared/stylePropertyCache": 61,
        "./utils/toCSS": 64,
        "./utils/toDOM": 65
    }],
    58: [function(t, e, n) {
        "use strict";
        var i = t("./getStyleProperty"),
            r = t("./shared/styleValueAvailable"),
            s = t("./shared/prefixHelper"),
            o = t("./shared/stylePropertyCache"),
            a = {},
            c = /(\([^\)]+\))/gi,
            l = /([^ ,;\(]+(\([^\)]+\))?)/gi;
        e.exports = function(t, e) {
            var n;
            return e += "", !!(t = i(t)) && (r(t, e) ? e : (n = o[t].css, e = e.replace(l, function(e) {
                var i, o, l, h;
                if ("#" === e[0] || !isNaN(e[0])) return e;
                if (o = e.replace(c, ""), l = n + ":" + o, l in a) return a[l] === !1 ? "" : e.replace(o, a[l]);
                for (i = s.css.map(function(t) {
                        return t + e
                    }), i = [e].concat(i), h = 0; h < i.length; h++)
                    if (r(t, i[h])) return 0 !== h && s.reduce(h - 1), a[l] = i[h].replace(c, ""), i[h];
                return a[l] = !1, ""
            }), e = e.trim(), "" !== e && e))
        }
    }, {
        "./getStyleProperty": 57,
        "./shared/prefixHelper": 60,
        "./shared/stylePropertyCache": 61,
        "./shared/styleValueAvailable": 62
    }],
    59: [function(t, e, n) {
        "use strict";
        var i;
        e.exports = function() {
            return i ? (i.style.cssText = "", i.removeAttribute("style")) : i = document.createElement("_"), i
        }, e.exports.resetElement = function() {
            i = null
        }
    }, {}],
    60: [function(t, e, n) {
        arguments[4][29][0].apply(n, arguments)
    }, {
        dup: 29
    }],
    61: [function(t, e, n) {
        "use strict";
        e.exports = {}
    }, {}],
    62: [function(t, e, n) {
        "use strict";
        var i, r, s = t("./stylePropertyCache"),
            o = t("./getStyleTestElement"),
            a = !1,
            c = function() {
                var t;
                if (!a) {
                    a = !0, i = "CSS" in window && "supports" in window.CSS, r = !1, t = o();
                    try {
                        t.style.width = "invalid"
                    } catch (e) {
                        r = !0
                    }
                }
            };
        e.exports = function(t, e) {
            var n, a;
            if (c(), i) return t = s[t].css, CSS.supports(t, e);
            if (a = o(), n = a.style[t], r) try {
                a.style[t] = e
            } catch (l) {
                return !1
            } else a.style[t] = e;
            return a.style[t] && a.style[t] !== n
        }, e.exports.resetFlags = function() {
            a = !1
        }
    }, {
        "./getStyleTestElement": 59,
        "./stylePropertyCache": 61
    }],
    63: [function(t, e, n) {
        "use strict";
        var i = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
        e.exports = function(t) {
            return t = String.prototype.replace.call(t, i, ""), t.charAt(0).toLowerCase() + t.substring(1)
        }
    }, {}],
    64: [function(t, e, n) {
        "use strict";
        var i = /^(webkit|moz|ms)/gi;
        e.exports = function(t) {
            return "cssfloat" === t.toLowerCase() ? "float" : (i.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
        }
    }, {}],
    65: [function(t, e, n) {
        "use strict";
        var i = /-([a-z])/g;
        e.exports = function(t) {
            return "float" === t.toLowerCase() ? "cssFloat" : (t = t.replace(i, function(t, e) {
                return e.toUpperCase()
            }), "Ms" === t.substr(0, 2) && (t = "ms" + t.substring(2)), t)
        }
    }, {}],
    66: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-prefixer/getStyleCSS"),
            r = t("@marcom/ac-prefixer/getStyleProperty"),
            s = t("./internal/normalizeValue");
        e.exports = function(t, e) {
            var n, o, a, c, l, h = "";
            if ("object" != typeof e) throw new TypeError("setStyle: styles must be an Object");
            for (o in e) c = s(e[o]), c || 0 === c ? (n = i(o, c), n !== !1 && (h += " " + n)) : (a = r(o), "removeAttribute" in t.style ? t.style.removeAttribute(a) : t.style[a] = "");
            return h.length && (l = t.style.cssText, ";" !== l.charAt(l.length - 1) && (l += ";"), l += h, t.style.cssText = l), t
        }
    }, {
        "./internal/normalizeValue": 55,
        "@marcom/ac-prefixer/getStyleCSS": 56,
        "@marcom/ac-prefixer/getStyleProperty": 57
    }],
    67: [function(t, e, n) {
        "use strict";
        e.exports = 8
    }, {}],
    68: [function(t, e, n) {
        "use strict";
        e.exports = 11
    }, {}],
    69: [function(t, e, n) {
        "use strict";
        e.exports = 9
    }, {}],
    70: [function(t, e, n) {
        "use strict";
        e.exports = 1
    }, {}],
    71: [function(t, e, n) {
        "use strict";
        e.exports = 3
    }, {}],
    72: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Array/prototype.filter");
        var i = t("./internal/isNodeType"),
            r = t("./ELEMENT_NODE");
        e.exports = function(t, e) {
            return e = e || r, t = Array.prototype.slice.call(t), t.filter(function(t) {
                return i(t, e)
            })
        }
    }, {
        "./ELEMENT_NODE": 70,
        "./internal/isNodeType": 73,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0
    }],
    73: [function(t, e, n) {
        "use strict";
        var i = t("../isNode");
        e.exports = function(t, e) {
            return !!i(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
        }
    }, {
        "../isNode": 77
    }],
    74: [function(t, e, n) {
        "use strict";
        var i = t("./isNodeType"),
            r = t("../COMMENT_NODE"),
            s = t("../DOCUMENT_FRAGMENT_NODE"),
            o = t("../ELEMENT_NODE"),
            a = t("../TEXT_NODE"),
            c = [o, a, r, s],
            l = " must be an Element, TextNode, Comment, or Document Fragment",
            h = [o, a, r],
            u = " must be an Element, TextNode, or Comment",
            f = [o, s],
            d = " must be an Element, or Document Fragment",
            m = " must have a parentNode";
        e.exports = {
            parentNode: function(t, e, n, r) {
                if (r = r || "target", (t || e) && !i(t, f)) throw new TypeError(n + ": " + r + d)
            },
            childNode: function(t, e, n, r) {
                if (r = r || "target", (t || e) && !i(t, h)) throw new TypeError(n + ": " + r + u)
            },
            insertNode: function(t, e, n, r) {
                if (r = r || "node", (t || e) && !i(t, c)) throw new TypeError(n + ": " + r + l)
            },
            hasParentNode: function(t, e, n) {
                if (n = n || "target", !t.parentNode) throw new TypeError(e + ": " + n + m)
            }
        }
    }, {
        "../COMMENT_NODE": 67,
        "../DOCUMENT_FRAGMENT_NODE": 68,
        "../ELEMENT_NODE": 70,
        "../TEXT_NODE": 71,
        "./isNodeType": 73
    }],
    75: [function(t, e, n) {
        "use strict";
        var i = t("./internal/isNodeType"),
            r = t("./DOCUMENT_FRAGMENT_NODE");
        e.exports = function(t) {
            return i(t, r)
        }
    }, {
        "./DOCUMENT_FRAGMENT_NODE": 68,
        "./internal/isNodeType": 73
    }],
    76: [function(t, e, n) {
        "use strict";
        var i = t("./internal/isNodeType"),
            r = t("./ELEMENT_NODE");
        e.exports = function(t) {
            return i(t, r)
        }
    }, {
        "./ELEMENT_NODE": 70,
        "./internal/isNodeType": 73
    }],
    77: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return !(!t || !t.nodeType)
        }
    }, {}],
    78: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate");
        e.exports = function(t) {
            return i.childNode(t, !0, "remove"), t.parentNode ? t.parentNode.removeChild(t) : t
        }
    }, {
        "./internal/validate": 74
    }],
    79: [function(t, e, n) {
        "use strict";
        e.exports = {
            ancestor: t("./ancestor"),
            ancestors: t("./ancestors"),
            children: t("./children"),
            filterBySelector: t("./filterBySelector"),
            firstChild: t("./firstChild"),
            lastChild: t("./lastChild"),
            matchesSelector: t("./matchesSelector"),
            nextSibling: t("./nextSibling"),
            nextSiblings: t("./nextSiblings"),
            previousSibling: t("./previousSibling"),
            previousSiblings: t("./previousSiblings"),
            querySelector: t("./querySelector"),
            querySelectorAll: t("./querySelectorAll"),
            siblings: t("./siblings")
        }
    }, {
        "./ancestor": 80,
        "./ancestors": 81,
        "./children": 82,
        "./filterBySelector": 83,
        "./firstChild": 84,
        "./lastChild": 87,
        "./matchesSelector": 88,
        "./nextSibling": 89,
        "./nextSiblings": 90,
        "./previousSibling": 91,
        "./previousSiblings": 92,
        "./querySelector": 93,
        "./querySelectorAll": 94,
        "./siblings": 98
    }],
    80: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./matchesSelector"),
            s = t("./internal/validate");
        e.exports = function(t, e, n) {
            if (s.childNode(t, !0, "ancestors"), s.selector(e, !1, "ancestors"), n && i(t) && (!e || r(t, e))) return t;
            if (t !== document.body)
                for (;
                    (t = t.parentNode) && i(t);) {
                    if (!e || r(t, e)) return t;
                    if (t === document.body) break
                }
            return null
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    81: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./matchesSelector"),
            s = t("./internal/validate");
        e.exports = function(t, e, n) {
            var o = [];
            if (s.childNode(t, !0, "ancestors"), s.selector(e, !1, "ancestors"), n && i(t) && (!e || r(t, e)) && o.push(t), t !== document.body)
                for (;
                    (t = t.parentNode) && i(t) && (e && !r(t, e) || o.push(t), t !== document.body););
            return o
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    82: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/filterByNodeType"),
            r = t("./filterBySelector"),
            s = t("./internal/validate");
        e.exports = function(t, e) {
            var n;
            return s.parentNode(t, !0, "children"), s.selector(e, !1, "children"), n = t.children || t.childNodes, n = i(n), e && (n = r(n, e)), n
        }
    }, {
        "./filterBySelector": 83,
        "./internal/validate": 86,
        "@marcom/ac-dom-nodes/filterByNodeType": 72
    }],
    83: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.slice"), t("@marcom/ac-polyfills/Array/prototype.filter");
        var i = t("./matchesSelector"),
            r = t("./internal/validate");
        e.exports = function(t, e) {
            return r.selector(e, !0, "filterBySelector"), t = Array.prototype.slice.call(t), t.filter(function(t) {
                return i(t, e)
            })
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0
    }],
    84: [function(t, e, n) {
        "use strict";
        var i = t("./children"),
            r = t("./internal/validate");
        e.exports = function(t, e) {
            var n;
            return r.parentNode(t, !0, "firstChild"), r.selector(e, !1, "firstChild"), t.firstElementChild && !e ? t.firstElementChild : (n = i(t, e), n.length ? n[0] : null)
        }
    }, {
        "./children": 82,
        "./internal/validate": 86
    }],
    85: [function(t, e, n) {
        "use strict";
        e.exports = window.Element ? function(t) {
            return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector
        }(Element.prototype) : null
    }, {}],
    86: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.indexOf");
        var i = t("@marcom/ac-dom-nodes/isNode"),
            r = t("@marcom/ac-dom-nodes/COMMENT_NODE"),
            s = t("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE"),
            o = t("@marcom/ac-dom-nodes/DOCUMENT_NODE"),
            a = t("@marcom/ac-dom-nodes/ELEMENT_NODE"),
            c = t("@marcom/ac-dom-nodes/TEXT_NODE"),
            l = function(t, e) {
                return !!i(t) && ("number" == typeof e ? t.nodeType === e : e.indexOf(t.nodeType) !== -1)
            },
            h = [a, o, s],
            u = " must be an Element, Document, or Document Fragment",
            f = [a, c, r],
            d = " must be an Element, TextNode, or Comment",
            m = " must be a string";
        e.exports = {
            parentNode: function(t, e, n, i) {
                if (i = i || "node", (t || e) && !l(t, h)) throw new TypeError(n + ": " + i + u)
            },
            childNode: function(t, e, n, i) {
                if (i = i || "node", (t || e) && !l(t, f)) throw new TypeError(n + ": " + i + d)
            },
            selector: function(t, e, n, i) {
                if (i = i || "selector", (t || e) && "string" != typeof t) throw new TypeError(n + ": " + i + m)
            }
        }
    }, {
        "@marcom/ac-dom-nodes/COMMENT_NODE": 67,
        "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 68,
        "@marcom/ac-dom-nodes/DOCUMENT_NODE": 69,
        "@marcom/ac-dom-nodes/ELEMENT_NODE": 70,
        "@marcom/ac-dom-nodes/TEXT_NODE": 71,
        "@marcom/ac-dom-nodes/isNode": 77,
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
    }],
    87: [function(t, e, n) {
        "use strict";
        var i = t("./children"),
            r = t("./internal/validate");
        e.exports = function(t, e) {
            var n;
            return r.parentNode(t, !0, "lastChild"), r.selector(e, !1, "lastChild"), t.lastElementChild && !e ? t.lastElementChild : (n = i(t, e), n.length ? n[n.length - 1] : null)
        }
    }, {
        "./children": 82,
        "./internal/validate": 86
    }],
    88: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./internal/validate"),
            s = t("./internal/nativeMatches"),
            o = t("./shims/matchesSelector");
        e.exports = function(t, e) {
            return r.selector(e, !0, "matchesSelector"), !!i(t) && (s ? s.call(t, e) : o(t, e))
        }
    }, {
        "./internal/nativeMatches": 85,
        "./internal/validate": 86,
        "./shims/matchesSelector": 95,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    89: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./matchesSelector"),
            s = t("./internal/validate");
        e.exports = function(t, e) {
            if (s.childNode(t, !0, "nextSibling"), s.selector(e, !1, "nextSibling"), t.nextElementSibling && !e) return t.nextElementSibling;
            for (; t = t.nextSibling;)
                if (i(t) && (!e || r(t, e))) return t;
            return null
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    90: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./matchesSelector"),
            s = t("./internal/validate");
        e.exports = function(t, e) {
            var n = [];
            for (s.childNode(t, !0, "nextSiblings"), s.selector(e, !1, "nextSiblings"); t = t.nextSibling;) i(t) && (e && !r(t, e) || n.push(t));
            return n
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    91: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./matchesSelector"),
            s = t("./internal/validate");
        e.exports = function(t, e) {
            if (s.childNode(t, !0, "previousSibling"), s.selector(e, !1, "previousSibling"), t.previousElementSibling && !e) return t.previousElementSibling;
            for (; t = t.previousSibling;)
                if (i(t) && (!e || r(t, e))) return t;
            return null
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    92: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("./matchesSelector"),
            s = t("./internal/validate");
        e.exports = function(t, e) {
            var n = [];
            for (s.childNode(t, !0, "previousSiblings"), s.selector(e, !1, "previousSiblings"); t = t.previousSibling;) i(t) && (e && !r(t, e) || n.push(t));
            return n.reverse()
        }
    }, {
        "./internal/validate": 86,
        "./matchesSelector": 88,
        "@marcom/ac-dom-nodes/isElement": 76
    }],
    93: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate"),
            r = t("./shims/querySelector"),
            s = "querySelector" in document;
        e.exports = function(t, e) {
            return e = e || document, i.parentNode(e, !0, "querySelector", "context"), i.selector(t, !0, "querySelector"), s ? e.querySelector(t) : r(t, e)
        }
    }, {
        "./internal/validate": 86,
        "./shims/querySelector": 96
    }],
    94: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.slice");
        var i = t("./internal/validate"),
            r = t("./shims/querySelectorAll"),
            s = "querySelectorAll" in document;
        e.exports = function(t, e) {
            return e = e || document, i.parentNode(e, !0, "querySelectorAll", "context"), i.selector(t, !0, "querySelectorAll"), s ? Array.prototype.slice.call(e.querySelectorAll(t)) : r(t, e)
        }
    }, {
        "./internal/validate": 86,
        "./shims/querySelectorAll": 97,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0
    }],
    95: [function(t, e, n) {
        "use strict";
        var i = t("../querySelectorAll");
        e.exports = function(t, e) {
            var n, r = t.parentNode || document,
                s = i(e, r);
            for (n = 0; n < s.length; n++)
                if (s[n] === t) return !0;
            return !1
        }
    }, {
        "../querySelectorAll": 94
    }],
    96: [function(t, e, n) {
        "use strict";
        var i = t("./querySelectorAll");
        e.exports = function(t, e) {
            var n = i(t, e);
            return n.length ? n[0] : null
        }
    }, {
        "./querySelectorAll": 97
    }],
    97: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.indexOf");
        var i = t("@marcom/ac-dom-nodes/isElement"),
            r = t("@marcom/ac-dom-nodes/isDocumentFragment"),
            s = t("@marcom/ac-dom-nodes/remove"),
            o = "_ac_qsa_",
            a = function(t, e) {
                var n;
                if (e === document) return !0;
                for (n = t;
                    (n = n.parentNode) && i(n);)
                    if (n === e) return !0;
                return !1
            },
            c = function(t) {
                "recalc" in t ? t.recalc(!1) : document.recalc(!1), window.scrollBy(0, 0)
            };
        e.exports = function(t, e) {
            var n, i = document.createElement("style"),
                l = o + (Math.random() + "").slice(-6),
                h = [];
            for (e = e || document, document[l] = [], r(e) ? e.appendChild(i) : document.documentElement.firstChild.appendChild(i), i.styleSheet.cssText = "*{display:recalc;}" + t + '{ac-qsa:expression(document["' + l + '"] && document["' + l + '"].push(this));}', c(e); document[l].length;) n = document[l].shift(), n.style.removeAttribute("ac-qsa"), h.indexOf(n) === -1 && a(n, e) && h.push(n);
            return document[l] = null, s(i), c(e), h
        }
    }, {
        "@marcom/ac-dom-nodes/isDocumentFragment": 75,
        "@marcom/ac-dom-nodes/isElement": 76,
        "@marcom/ac-dom-nodes/remove": 78,
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
    }],
    98: [function(t, e, n) {
        "use strict";
        var i = t("./children"),
            r = t("./internal/validate");
        e.exports = function(t, e) {
            var n = [];
            return r.childNode(t, !0, "siblings"), r.selector(e, !1, "siblings"), t.parentNode && (n = i(t.parentNode, e), n = n.filter(function(e) {
                return e !== t
            })), n
        }
    }, {
        "./children": 82,
        "./internal/validate": 86
    }],
    99: [function(t, e, n) {
        "use strict";
        e.exports = {
            Clip: t("./ac-clip/Clip")
        }
    }, {
        "./ac-clip/Clip": 100
    }],
    100: [function(t, e, n) {
        "use strict";

        function i(t, e, n, r) {
            r = r || {}, this._options = r, this._isYoyo = r.yoyo, this._direction = 1, this._timeScale = 1, this._loop = r.loop || 0, this._loopCount = 0, this._target = t, this.duration(e), this._delay = 1e3 * (r.delay || 0), this._remainingDelay = this._delay, this._progress = 0, this._clock = r.clock || o, this._playing = !1, this._getTime = Date.now || function() {
                return (new Date).getTime()
            }, this._propsTo = n || {}, this._propsFrom = r.propsFrom || {}, this._onStart = r.onStart || null, this._onUpdate = r.onUpdate || null, this._onDraw = r.onDraw || null, this._onComplete = r.onComplete || null;
            var h = r.ease || l;
            this._ease = "function" == typeof h ? new a(h) : s(h), this._start = this._start.bind(this), this._update = this._update.bind(this), this._draw = this._draw.bind(this), this._isPrepared = !1, i._add(this), c.call(this)
        }
        t("@marcom/ac-polyfills/Array/isArray");
        var r = t("@marcom/ac-object/create"),
            s = t("@marcom/ac-easing").createPredefined,
            o = t("@marcom/ac-clock"),
            a = t("@marcom/ac-easing").Ease,
            c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            l = "ease",
            h = i.prototype = r(c.prototype);
        i.COMPLETE = "complete", i.PAUSE = "pause", i.PLAY = "play", h.play = function() {
            return this._playing || (this._playing = !0, 0 === this._delay || 0 === this._remainingDelay ? this._start() : (this._isPrepared || (this._setDiff(), this._updateProps()), this._startTimeout = setTimeout(this._start, this._remainingDelay / this._timeScale), this._delayStart = this._getTime())), this
        }, h.pause = function() {
            return this._playing && (this._startTimeout && (this._remainingDelay = this._getTime() - this._delayStart, clearTimeout(this._startTimeout)), this._stop(), this.trigger(i.PAUSE, this)), this
        }, h.destroy = function() {
            return this.pause(), this._options = null, this._target = null, this._storeTarget = null, this._ease = null, this._clock = null, this._propsTo = null, this._propsFrom = null, this._storePropsTo = null, this._storePropsFrom = null, this._propsDiff = null, this._propsEase = null, this._onStart = null, this._onUpdate = null, this._onDraw = null, this._onComplete = null, i._remove(this), c.prototype.destroy.call(this), this
        }, h.reset = function() {
            if (this._isPrepared) return this._stop(), this._resetLoop(this._target, this._storeTarget), this._direction = 1, this._loop = this._options.loop || 0, this._loopCount = 0, this._propsFrom = this._storePropsFrom, this._propsTo = this._storePropsTo, this._progress = 0, this._setStartTime(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this), this
        }, h.playing = function() {
            return this._playing
        }, h.target = function() {
            return this._target
        }, h.duration = function(t) {
            return void 0 !== t && (this._duration = t, this._durationMs = 1e3 * t / this._timeScale, this._playing && this._setStartTime()), this._duration
        }, h.timeScale = function(t) {
            return void 0 !== t && (this._timeScale = t, this.duration(this._duration)), this._timeScale
        }, h.currentTime = function(t) {
            return void 0 !== t ? this.progress(t / this._duration) * this._duration : this.progress() * this._duration
        }, h.progress = function(t) {
            return void 0 !== t && (this._progress = Math.min(1, Math.max(0, t)), this._setStartTime(), this._isPrepared || this._setDiff(), this._playing && 1 === t ? (this._completeProps(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this), this._complete()) : (this._updateProps(), this._onUpdate && this._onUpdate.call(this, this), this._onDraw && this._onDraw.call(this, this))), this._progress
        }, h._resetLoop = function(t, e) {
            var n;
            for (n in e) e.hasOwnProperty(n) && null !== e[n] && ("object" == typeof e[n] ? this._resetLoop(t[n], e[n]) : t[n] = e[n])
        }, h._cloneObjects = function() {
            var t = {},
                e = {},
                n = {};
            return this._cloneObjectsLoop(this._target, this._propsTo, this._propsFrom, t, e, n), {
                target: t,
                propsTo: e,
                propsFrom: n
            }
        }, h._cloneObjectsLoop = function(t, e, n, i, r, s) {
            var o, a;
            for (a in n) n.hasOwnProperty(a) && void 0 === e[a] && void 0 !== t[a] && (i[a] = t[a], r[a] = t[a], s[a] = n[a]);
            for (a in e) t.hasOwnProperty(a) && (o = typeof t[a], null !== t[a] && "object" === o ? (Array.isArray(t[a]) ? (i[a] = [], r[a] = [], s[a] = []) : (i[a] = {}, r[a] = {}, s[a] = {}), this._cloneObjectsLoop(t[a], e[a] || {}, n[a] || {}, i[a], r[a], s[a])) : null !== e[a] && "number" === o && (i[a] = t[a], r[a] = e[a], n && void 0 !== n[a] && (s[a] = n[a])))
        }, h._prepareProperties = function() {
            if (!this._isPrepared) {
                var t = this._cloneObjects();
                this._storeTarget = t.target, this._propsTo = t.propsTo, this._storePropsTo = this._propsTo, this._propsFrom = t.propsFrom, this._storePropsFrom = this._propsFrom, this._isPrepared = !0
            }
        }, h._setStartTime = function() {
            this._startTime = this._getTime() - this.progress() * this._durationMs
        }, h._setDiff = function() {
            this._isPrepared || this._prepareProperties(), this._propsDiff = {}, this._setDiffLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff)
        }, h._setDiffLoop = function(t, e, n, i) {
            var r, s;
            for (s in t) t.hasOwnProperty(s) && (r = typeof t[s], null !== t[s] && "object" === r ? (e[s] = e[s] || {}, i[s] = i[s] || {}, this._setDiffLoop(t[s], e[s], n[s], i[s])) : "number" === r && void 0 !== n[s] ? (void 0 !== e[s] ? n[s] = e[s] : e[s] = n[s], i[s] = t[s] - n[s]) : (t[s] = null, e[s] = null))
        }, h._start = function() {
            this._startTimeout = null, this._remainingDelay = 0, this._setStartTime(), this._clock.on("update", this._update), this._clock.on("draw", this._draw), this._clock.isRunning() || this._clock.start(), this._setDiff(), this._playing = !0, this._running = !0, this._onStart && this._onStart.call(this, this), this.trigger(i.PLAY, this)
        }, h._stop = function() {
            this._playing = !1, this._running = !1, this._clock.off("update", this._update), this._clock.off("draw", this._draw)
        }, h._updateProps = function() {
            var t;
            t = 1 === this._direction ? this._ease.getValue(this._progress) : 1 - this._ease.getValue(1 - this._progress), this._updatePropsLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff, t)
        }, h._updatePropsLoop = function(t, e, n, i, r) {
            var s;
            for (s in t) t.hasOwnProperty(s) && null !== t[s] && ("number" != typeof t[s] ? this._updatePropsLoop(t[s], e[s], n[s], i[s], r) : n[s] = e[s] + i[s] * r)
        }, h._completeProps = function() {
            this._completePropsLoop(this._propsTo, this._target)
        }, h._completePropsLoop = function(t, e) {
            var n;
            for (n in t) t.hasOwnProperty(n) && null !== t[n] && ("number" != typeof t[n] ? this._completePropsLoop(t[n], e[n]) : e[n] = t[n])
        }, h._complete = function() {
            this._isYoyo && (this._loop > 0 && this._loopCount <= this._loop || 0 === this._loop && 0 === this._loopCount) ? (this._propsFrom = 1 === this._direction ? this._storePropsTo : this._storePropsFrom, this._propsTo = 1 === this._direction ? this._storePropsFrom : this._storePropsTo, this._direction *= -1, this._direction === -1 && ++this._loopCount, this.progress(0), this._start()) : this._loopCount < this._loop ? (++this._loopCount, this.progress(0), this._start()) : (this.trigger(i.COMPLETE, this), this._onComplete && this._onComplete.call(this, this), this._options && this._options.destroyOnComplete && this.destroy())
        }, h._update = function(t) {
            this._running && (this._progress = (t.timeNow - this._startTime) / this._durationMs, this._progress >= 1 ? (this._progress = 1, this._running = !1, this._completeProps()) : this._updateProps(), this._onUpdate && this._onUpdate.call(this, this))
        }, h._draw = function(t) {
            this._onDraw && this._onDraw.call(this, this), this._running || (this._stop(), 1 === this._progress && this._complete())
        }, i._instantiate = function() {
            return this._clips = [], this
        }, i._add = function(t) {
            this._clips.push(t)
        }, i._remove = function(t) {
            var e = this._clips.indexOf(t);
            e > -1 && this._clips.splice(e, 1)
        }, i.getAll = function(t) {
            if (void 0 !== t) {
                for (var e = [], n = this._clips.length; n--;) this._clips[n].target() === t && e.push(this._clips[n]);
                return e
            }
            return Array.prototype.slice.call(this._clips)
        }, i.destroyAll = function(t) {
            var e = this.getAll(t);
            this._clips.length === e.length && (this._clips = []);
            for (var n = e.length; n--;) e[n].destroy();
            return e
        }, i.to = function(t, e, n, r) {
            return r = r || {}, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new i(t, e, n, r).play()
        }, i.from = function(t, e, n, r) {
            return r = r || {}, r.propsFrom = n, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new i(t, e, r.propsTo, r).play()
        }, e.exports = i._instantiate()
    }, {
        "@marcom/ac-clock": 11,
        "@marcom/ac-easing": 121,
        "@marcom/ac-event-emitter-micro": 129,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-polyfills/Array/isArray": void 0
    }],
    101: [function(t, e, n) {
        "use strict";
        var i = t("./ac-color/Color");
        i.decimalToHex = t("./ac-color/static/decimalToHex"), i.hexToDecimal = t("./ac-color/static/hexToDecimal"), i.hexToRgb = t("./ac-color/static/hexToRgb"), i.isColor = t("./ac-color/static/isColor"), i.isHex = t("./ac-color/static/isHex"), i.isRgb = t("./ac-color/static/isRgb"), i.isRgba = t("./ac-color/static/isRgba"), i.mixColors = t("./ac-color/static/mixColors"), i.rgbaToArray = t("./ac-color/static/rgbaToArray"), i.rgbToArray = t("./ac-color/static/rgbToArray"), i.rgbToDecimal = t("./ac-color/static/rgbToDecimal"), i.rgbToHex = t("./ac-color/static/rgbToHex"), i.rgbToHsl = t("./ac-color/static/rgbToHsl"), i.rgbToHsv = t("./ac-color/static/rgbToHsv"), i.rgbaToObject = t("./ac-color/static/rgbaToObject"), i.rgbToObject = t("./ac-color/static/rgbToObject"), i.shortToLongHex = t("./ac-color/static/shortToLongHex"), e.exports = {
            Color: i
        }
    }, {
        "./ac-color/Color": 102,
        "./ac-color/static/decimalToHex": 104,
        "./ac-color/static/hexToDecimal": 105,
        "./ac-color/static/hexToRgb": 106,
        "./ac-color/static/isColor": 107,
        "./ac-color/static/isHex": 108,
        "./ac-color/static/isRgb": 109,
        "./ac-color/static/isRgba": 110,
        "./ac-color/static/mixColors": 111,
        "./ac-color/static/rgbToArray": 112,
        "./ac-color/static/rgbToDecimal": 113,
        "./ac-color/static/rgbToHex": 114,
        "./ac-color/static/rgbToHsl": 115,
        "./ac-color/static/rgbToHsv": 116,
        "./ac-color/static/rgbToObject": 117,
        "./ac-color/static/rgbaToArray": 118,
        "./ac-color/static/rgbaToObject": 119,
        "./ac-color/static/shortToLongHex": 120
    }],
    102: [function(t, e, n) {
        "use strict";

        function i(t) {
            if (!o(t) && !r.nameToRgbObject[t]) throw new Error(t + " is not a supported color.");
            this._setColor(t)
        }
        var r = t("./helpers/cssColorNames"),
            s = t("./static/hexToRgb"),
            o = t("./static/isColor"),
            a = t("./static/isHex"),
            c = t("./static/isRgba"),
            l = t("./static/mixColors"),
            h = t("./static/rgbaToArray"),
            u = t("./static/rgbToArray"),
            f = t("./static/rgbToDecimal"),
            d = t("./static/rgbToHex"),
            m = t("./static/rgbaToObject"),
            p = t("./static/rgbToObject"),
            v = t("./static/shortToLongHex"),
            g = i.prototype;
        g._setColor = function(t) {
            if (this._color = {}, a(t)) this._color.hex = v(t), this._color.rgb = {
                color: s(t)
            };
            else if (c(t)) {
                this._color.rgba = {
                    color: t
                };
                var e = this.rgbaObject();
                this._color.rgb = {
                    color: "rgb(" + e.r + ", " + e.g + ", " + e.b + ")"
                }
            } else if (r.nameToRgbObject[t]) {
                var n = r.nameToRgbObject[t];
                this._color.rgb = {
                    object: n,
                    color: "rgb(" + n.r + ", " + n.g + ", " + n.b + ")"
                }
            } else this._color.rgb = {
                color: t
            }
        }, g.rgb = function() {
            return this._color.rgb.color
        }, g.rgba = function() {
            if (void 0 === this._color.rgba) {
                var t = this.rgbObject();
                this._color.rgba = {
                    color: "rgba(" + t.r + ", " + t.g + ", " + t.b + ", 1)"
                }
            }
            return this._color.rgba.color
        }, g.hex = function() {
            return void 0 === this._color.hex && (this._color.hex = d.apply(this, this.rgbArray())), this._color.hex
        }, g.decimal = function() {
            return void 0 === this._color.decimal && (this._color.decimal = f(this.rgb())), this._color.decimal
        }, g.cssName = function() {
            return r.rgbToName[this.rgb()] || null
        }, g.rgbArray = function() {
            return void 0 === this._color.rgb.array && (this._color.rgb.array = u(this.rgb())), this._color.rgb.array
        }, g.rgbaArray = function() {
            return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.array && (this._color.rgba.array = h(this.rgba())), this._color.rgba.array
        }, g.rgbObject = function() {
            return void 0 === this._color.rgb.object && (this._color.rgb.object = p(this.rgb())), this._color.rgb.object
        }, g.rgbaObject = function() {
            return void 0 === this._color.rgba && this.rgba(), void 0 === this._color.rgba.object && (this._color.rgba.object = m(this.rgba())), this._color.rgba.object
        }, g.getRed = function() {
            return this.rgbObject().r
        }, g.getGreen = function() {
            return this.rgbObject().g
        }, g.getBlue = function() {
            return this.rgbObject().b
        }, g.getAlpha = function() {
            return void 0 === this._color.rgba ? 1 : this.rgbaObject().a
        }, g.setRed = function(t) {
            return t !== this.getRed() && this._setColor("rgba(" + t + ", " + this.getGreen() + ", " + this.getBlue() + ", " + this.getAlpha() + ")"), this.rgbObject().r
        }, g.setGreen = function(t) {
            return t !== this.getGreen() && this._setColor("rgba(" + this.getRed() + ", " + t + ", " + this.getBlue() + ", " + this.getAlpha() + ")"), this.rgbObject().g
        }, g.setBlue = function(t) {
            return t !== this.getBlue() && this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + t + ", " + this.getAlpha() + ")"), this.rgbObject().b
        }, g.setAlpha = function(t) {
            return t !== this.getAlpha() && this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ", " + t + ")"), this.rgbaObject().a
        }, g.mix = function(t, e) {
            var n = p(l(this.rgb(), t, e));
            return this._setColor("rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + this.getAlpha() + ")"), this.rgb()
        }, g.clone = function() {
            return new i(this.rgb())
        }, e.exports = i
    }, {
        "./helpers/cssColorNames": 103,
        "./static/hexToRgb": 106,
        "./static/isColor": 107,
        "./static/isHex": 108,
        "./static/isRgba": 110,
        "./static/mixColors": 111,
        "./static/rgbToArray": 112,
        "./static/rgbToDecimal": 113,
        "./static/rgbToHex": 114,
        "./static/rgbToObject": 117,
        "./static/rgbaToArray": 118,
        "./static/rgbaToObject": 119,
        "./static/shortToLongHex": 120
    }],
    103: [function(t, e, n) {
        "use strict";
        var i = {
                "rgb(240, 248, 255)": "aliceblue",
                "rgb(250, 235, 215)": "antiquewhite",
                "rgb(0, 0, 0)": "black",
                "rgb(0, 0, 255)": "blue",
                "rgb(0, 255, 255)": "cyan",
                "rgb(0, 0, 139)": "darkblue",
                "rgb(0, 139, 139)": "darkcyan",
                "rgb(0, 100, 0)": "darkgreen",
                "rgb(0, 206, 209)": "darkturquoise",
                "rgb(0, 191, 255)": "deepskyblue",
                "rgb(0, 128, 0)": "green",
                "rgb(0, 255, 0)": "lime",
                "rgb(0, 0, 205)": "mediumblue",
                "rgb(0, 250, 154)": "mediumspringgreen",
                "rgb(0, 0, 128)": "navy",
                "rgb(0, 255, 127)": "springgreen",
                "rgb(0, 128, 128)": "teal",
                "rgb(25, 25, 112)": "midnightblue",
                "rgb(30, 144, 255)": "dodgerblue",
                "rgb(32, 178, 170)": "lightseagreen",
                "rgb(34, 139, 34)": "forestgreen",
                "rgb(46, 139, 87)": "seagreen",
                "rgb(47, 79, 79)": "darkslategray",
                "rgb(50, 205, 50)": "limegreen",
                "rgb(60, 179, 113)": "mediumseagreen",
                "rgb(64, 224, 208)": "turquoise",
                "rgb(65, 105, 225)": "royalblue",
                "rgb(70, 130, 180)": "steelblue",
                "rgb(72, 61, 139)": "darkslateblue",
                "rgb(72, 209, 204)": "mediumturquoise",
                "rgb(75, 0, 130)": "indigo",
                "rgb(85, 107, 47)": "darkolivegreen",
                "rgb(95, 158, 160)": "cadetblue",
                "rgb(100, 149, 237)": "cornflowerblue",
                "rgb(102, 205, 170)": "mediumaquamarine",
                "rgb(105, 105, 105)": "dimgray",
                "rgb(106, 90, 205)": "slateblue",
                "rgb(107, 142, 35)": "olivedrab",
                "rgb(112, 128, 144)": "slategray",
                "rgb(119, 136, 153)": "lightslategray",
                "rgb(123, 104, 238)": "mediumslateblue",
                "rgb(124, 252, 0)": "lawngreen",
                "rgb(127, 255, 212)": "aquamarine",
                "rgb(127, 255, 0)": "chartreuse",
                "rgb(128, 128, 128)": "gray",
                "rgb(128, 0, 0)": "maroon",
                "rgb(128, 128, 0)": "olive",
                "rgb(128, 0, 128)": "purple",
                "rgb(135, 206, 250)": "lightskyblue",
                "rgb(135, 206, 235)": "skyblue",
                "rgb(138, 43, 226)": "blueviolet",
                "rgb(139, 0, 139)": "darkmagenta",
                "rgb(139, 0, 0)": "darkred",
                "rgb(139, 69, 19)": "saddlebrown",
                "rgb(143, 188, 143)": "darkseagreen",
                "rgb(144, 238, 144)": "lightgreen",
                "rgb(147, 112, 219)": "mediumpurple",
                "rgb(148, 0, 211)": "darkviolet",
                "rgb(152, 251, 152)": "palegreen",
                "rgb(153, 50, 204)": "darkorchid",
                "rgb(154, 205, 50)": "yellowgreen",
                "rgb(160, 82, 45)": "sienna",
                "rgb(165, 42, 42)": "brown",
                "rgb(169, 169, 169)": "darkgray",
                "rgb(173, 255, 47)": "greenyellow",
                "rgb(173, 216, 230)": "lightblue",
                "rgb(175, 238, 238)": "paleturquoise",
                "rgb(176, 196, 222)": "lightsteelblue",
                "rgb(176, 224, 230)": "powderblue",
                "rgb(178, 34, 34)": "firebrick",
                "rgb(184, 134, 11)": "darkgoldenrod",
                "rgb(186, 85, 211)": "mediumorchid",
                "rgb(188, 143, 143)": "rosybrown",
                "rgb(189, 183, 107)": "darkkhaki",
                "rgb(192, 192, 192)": "silver",
                "rgb(199, 21, 133)": "mediumvioletred",
                "rgb(205, 92, 92)": "indianred",
                "rgb(205, 133, 63)": "peru",
                "rgb(210, 105, 30)": "chocolate",
                "rgb(210, 180, 140)": "tan",
                "rgb(211, 211, 211)": "lightgray",
                "rgb(216, 191, 216)": "thistle",
                "rgb(218, 165, 32)": "goldenrod",
                "rgb(218, 112, 214)": "orchid",
                "rgb(219, 112, 147)": "palevioletred",
                "rgb(220, 20, 60)": "crimson",
                "rgb(220, 220, 220)": "gainsboro",
                "rgb(221, 160, 221)": "plum",
                "rgb(222, 184, 135)": "burlywood",
                "rgb(224, 255, 255)": "lightcyan",
                "rgb(230, 230, 250)": "lavender",
                "rgb(233, 150, 122)": "darksalmon",
                "rgb(238, 232, 170)": "palegoldenrod",
                "rgb(238, 130, 238)": "violet",
                "rgb(240, 255, 255)": "azure",
                "rgb(240, 255, 240)": "honeydew",
                "rgb(240, 230, 140)": "khaki",
                "rgb(240, 128, 128)": "lightcoral",
                "rgb(244, 164, 96)": "sandybrown",
                "rgb(245, 245, 220)": "beige",
                "rgb(245, 255, 250)": "mintcream",
                "rgb(245, 222, 179)": "wheat",
                "rgb(245, 245, 245)": "whitesmoke",
                "rgb(248, 248, 255)": "ghostwhite",
                "rgb(250, 250, 210)": "lightgoldenrodyellow",
                "rgb(250, 240, 230)": "linen",
                "rgb(250, 128, 114)": "salmon",
                "rgb(253, 245, 230)": "oldlace",
                "rgb(255, 228, 196)": "bisque",
                "rgb(255, 235, 205)": "blanchedalmond",
                "rgb(255, 127, 80)": "coral",
                "rgb(255, 248, 220)": "cornsilk",
                "rgb(255, 140, 0)": "darkorange",
                "rgb(255, 20, 147)": "deeppink",
                "rgb(255, 250, 240)": "floralwhite",
                "rgb(255, 215, 0)": "gold",
                "rgb(255, 105, 180)": "hotpink",
                "rgb(255, 255, 240)": "ivory",
                "rgb(255, 240, 245)": "lavenderblush",
                "rgb(255, 250, 205)": "lemonchiffon",
                "rgb(255, 182, 193)": "lightpink",
                "rgb(255, 160, 122)": "lightsalmon",
                "rgb(255, 255, 224)": "lightyellow",
                "rgb(255, 0, 255)": "magenta",
                "rgb(255, 228, 225)": "mistyrose",
                "rgb(255, 228, 181)": "moccasin",
                "rgb(255, 222, 173)": "navajowhite",
                "rgb(255, 165, 0)": "orange",
                "rgb(255, 69, 0)": "orangered",
                "rgb(255, 239, 213)": "papayawhip",
                "rgb(255, 218, 185)": "peachpuff",
                "rgb(255, 192, 203)": "pink",
                "rgb(255, 0, 0)": "red",
                "rgb(255, 245, 238)": "seashell",
                "rgb(255, 250, 250)": "snow",
                "rgb(255, 99, 71)": "tomato",
                "rgb(255, 255, 255)": "white",
                "rgb(255, 255, 0)": "yellow",
                "rgb(102, 51, 153)": "rebeccapurple"
            },
            r = {
                aqua: {
                    r: 0,
                    g: 255,
                    b: 255
                },
                aliceblue: {
                    r: 240,
                    g: 248,
                    b: 255
                },
                antiquewhite: {
                    r: 250,
                    g: 235,
                    b: 215
                },
                black: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                blue: {
                    r: 0,
                    g: 0,
                    b: 255
                },
                cyan: {
                    r: 0,
                    g: 255,
                    b: 255
                },
                darkblue: {
                    r: 0,
                    g: 0,
                    b: 139
                },
                darkcyan: {
                    r: 0,
                    g: 139,
                    b: 139
                },
                darkgreen: {
                    r: 0,
                    g: 100,
                    b: 0
                },
                darkturquoise: {
                    r: 0,
                    g: 206,
                    b: 209
                },
                deepskyblue: {
                    r: 0,
                    g: 191,
                    b: 255
                },
                green: {
                    r: 0,
                    g: 128,
                    b: 0
                },
                lime: {
                    r: 0,
                    g: 255,
                    b: 0
                },
                mediumblue: {
                    r: 0,
                    g: 0,
                    b: 205
                },
                mediumspringgreen: {
                    r: 0,
                    g: 250,
                    b: 154
                },
                navy: {
                    r: 0,
                    g: 0,
                    b: 128
                },
                springgreen: {
                    r: 0,
                    g: 255,
                    b: 127
                },
                teal: {
                    r: 0,
                    g: 128,
                    b: 128
                },
                midnightblue: {
                    r: 25,
                    g: 25,
                    b: 112
                },
                dodgerblue: {
                    r: 30,
                    g: 144,
                    b: 255
                },
                lightseagreen: {
                    r: 32,
                    g: 178,
                    b: 170
                },
                forestgreen: {
                    r: 34,
                    g: 139,
                    b: 34
                },
                seagreen: {
                    r: 46,
                    g: 139,
                    b: 87
                },
                darkslategray: {
                    r: 47,
                    g: 79,
                    b: 79
                },
                darkslategrey: {
                    r: 47,
                    g: 79,
                    b: 79
                },
                limegreen: {
                    r: 50,
                    g: 205,
                    b: 50
                },
                mediumseagreen: {
                    r: 60,
                    g: 179,
                    b: 113
                },
                turquoise: {
                    r: 64,
                    g: 224,
                    b: 208
                },
                royalblue: {
                    r: 65,
                    g: 105,
                    b: 225
                },
                steelblue: {
                    r: 70,
                    g: 130,
                    b: 180
                },
                darkslateblue: {
                    r: 72,
                    g: 61,
                    b: 139
                },
                mediumturquoise: {
                    r: 72,
                    g: 209,
                    b: 204
                },
                indigo: {
                    r: 75,
                    g: 0,
                    b: 130
                },
                darkolivegreen: {
                    r: 85,
                    g: 107,
                    b: 47
                },
                cadetblue: {
                    r: 95,
                    g: 158,
                    b: 160
                },
                cornflowerblue: {
                    r: 100,
                    g: 149,
                    b: 237
                },
                mediumaquamarine: {
                    r: 102,
                    g: 205,
                    b: 170
                },
                dimgray: {
                    r: 105,
                    g: 105,
                    b: 105
                },
                dimgrey: {
                    r: 105,
                    g: 105,
                    b: 105
                },
                slateblue: {
                    r: 106,
                    g: 90,
                    b: 205
                },
                olivedrab: {
                    r: 107,
                    g: 142,
                    b: 35
                },
                slategray: {
                    r: 112,
                    g: 128,
                    b: 144
                },
                slategrey: {
                    r: 112,
                    g: 128,
                    b: 144
                },
                lightslategray: {
                    r: 119,
                    g: 136,
                    b: 153
                },
                lightslategrey: {
                    r: 119,
                    g: 136,
                    b: 153
                },
                mediumslateblue: {
                    r: 123,
                    g: 104,
                    b: 238
                },
                lawngreen: {
                    r: 124,
                    g: 252,
                    b: 0
                },
                aquamarine: {
                    r: 127,
                    g: 255,
                    b: 212
                },
                chartreuse: {
                    r: 127,
                    g: 255,
                    b: 0
                },
                gray: {
                    r: 128,
                    g: 128,
                    b: 128
                },
                grey: {
                    r: 128,
                    g: 128,
                    b: 128
                },
                maroon: {
                    r: 128,
                    g: 0,
                    b: 0
                },
                olive: {
                    r: 128,
                    g: 128,
                    b: 0
                },
                purple: {
                    r: 128,
                    g: 0,
                    b: 128
                },
                lightskyblue: {
                    r: 135,
                    g: 206,
                    b: 250
                },
                skyblue: {
                    r: 135,
                    g: 206,
                    b: 235
                },
                blueviolet: {
                    r: 138,
                    g: 43,
                    b: 226
                },
                darkmagenta: {
                    r: 139,
                    g: 0,
                    b: 139
                },
                darkred: {
                    r: 139,
                    g: 0,
                    b: 0
                },
                saddlebrown: {
                    r: 139,
                    g: 69,
                    b: 19
                },
                darkseagreen: {
                    r: 143,
                    g: 188,
                    b: 143
                },
                lightgreen: {
                    r: 144,
                    g: 238,
                    b: 144
                },
                mediumpurple: {
                    r: 147,
                    g: 112,
                    b: 219
                },
                darkviolet: {
                    r: 148,
                    g: 0,
                    b: 211
                },
                palegreen: {
                    r: 152,
                    g: 251,
                    b: 152
                },
                darkorchid: {
                    r: 153,
                    g: 50,
                    b: 204
                },
                yellowgreen: {
                    r: 154,
                    g: 205,
                    b: 50
                },
                sienna: {
                    r: 160,
                    g: 82,
                    b: 45
                },
                brown: {
                    r: 165,
                    g: 42,
                    b: 42
                },
                darkgray: {
                    r: 169,
                    g: 169,
                    b: 169
                },
                darkgrey: {
                    r: 169,
                    g: 169,
                    b: 169
                },
                greenyellow: {
                    r: 173,
                    g: 255,
                    b: 47
                },
                lightblue: {
                    r: 173,
                    g: 216,
                    b: 230
                },
                paleturquoise: {
                    r: 175,
                    g: 238,
                    b: 238
                },
                lightsteelblue: {
                    r: 176,
                    g: 196,
                    b: 222
                },
                powderblue: {
                    r: 176,
                    g: 224,
                    b: 230
                },
                firebrick: {
                    r: 178,
                    g: 34,
                    b: 34
                },
                darkgoldenrod: {
                    r: 184,
                    g: 134,
                    b: 11
                },
                mediumorchid: {
                    r: 186,
                    g: 85,
                    b: 211
                },
                rosybrown: {
                    r: 188,
                    g: 143,
                    b: 143
                },
                darkkhaki: {
                    r: 189,
                    g: 183,
                    b: 107
                },
                silver: {
                    r: 192,
                    g: 192,
                    b: 192
                },
                mediumvioletred: {
                    r: 199,
                    g: 21,
                    b: 133
                },
                indianred: {
                    r: 205,
                    g: 92,
                    b: 92
                },
                peru: {
                    r: 205,
                    g: 133,
                    b: 63
                },
                chocolate: {
                    r: 210,
                    g: 105,
                    b: 30
                },
                tan: {
                    r: 210,
                    g: 180,
                    b: 140
                },
                lightgray: {
                    r: 211,
                    g: 211,
                    b: 211
                },
                lightgrey: {
                    r: 211,
                    g: 211,
                    b: 211
                },
                thistle: {
                    r: 216,
                    g: 191,
                    b: 216
                },
                goldenrod: {
                    r: 218,
                    g: 165,
                    b: 32
                },
                orchid: {
                    r: 218,
                    g: 112,
                    b: 214
                },
                palevioletred: {
                    r: 219,
                    g: 112,
                    b: 147
                },
                crimson: {
                    r: 220,
                    g: 20,
                    b: 60
                },
                gainsboro: {
                    r: 220,
                    g: 220,
                    b: 220
                },
                plum: {
                    r: 221,
                    g: 160,
                    b: 221
                },
                burlywood: {
                    r: 222,
                    g: 184,
                    b: 135
                },
                lightcyan: {
                    r: 224,
                    g: 255,
                    b: 255
                },
                lavender: {
                    r: 230,
                    g: 230,
                    b: 250
                },
                darksalmon: {
                    r: 233,
                    g: 150,
                    b: 122
                },
                palegoldenrod: {
                    r: 238,
                    g: 232,
                    b: 170
                },
                violet: {
                    r: 238,
                    g: 130,
                    b: 238
                },
                azure: {
                    r: 240,
                    g: 255,
                    b: 255
                },
                honeydew: {
                    r: 240,
                    g: 255,
                    b: 240
                },
                khaki: {
                    r: 240,
                    g: 230,
                    b: 140
                },
                lightcoral: {
                    r: 240,
                    g: 128,
                    b: 128
                },
                sandybrown: {
                    r: 244,
                    g: 164,
                    b: 96
                },
                beige: {
                    r: 245,
                    g: 245,
                    b: 220
                },
                mintcream: {
                    r: 245,
                    g: 255,
                    b: 250
                },
                wheat: {
                    r: 245,
                    g: 222,
                    b: 179
                },
                whitesmoke: {
                    r: 245,
                    g: 245,
                    b: 245
                },
                ghostwhite: {
                    r: 248,
                    g: 248,
                    b: 255
                },
                lightgoldenrodyellow: {
                    r: 250,
                    g: 250,
                    b: 210
                },
                linen: {
                    r: 250,
                    g: 240,
                    b: 230
                },
                salmon: {
                    r: 250,
                    g: 128,
                    b: 114
                },
                oldlace: {
                    r: 253,
                    g: 245,
                    b: 230
                },
                bisque: {
                    r: 255,
                    g: 228,
                    b: 196
                },
                blanchedalmond: {
                    r: 255,
                    g: 235,
                    b: 205
                },
                coral: {
                    r: 255,
                    g: 127,
                    b: 80
                },
                cornsilk: {
                    r: 255,
                    g: 248,
                    b: 220
                },
                darkorange: {
                    r: 255,
                    g: 140,
                    b: 0
                },
                deeppink: {
                    r: 255,
                    g: 20,
                    b: 147
                },
                floralwhite: {
                    r: 255,
                    g: 250,
                    b: 240
                },
                fuchsia: {
                    r: 255,
                    g: 0,
                    b: 255
                },
                gold: {
                    r: 255,
                    g: 215,
                    b: 0
                },
                hotpink: {
                    r: 255,
                    g: 105,
                    b: 180
                },
                ivory: {
                    r: 255,
                    g: 255,
                    b: 240
                },
                lavenderblush: {
                    r: 255,
                    g: 240,
                    b: 245
                },
                lemonchiffon: {
                    r: 255,
                    g: 250,
                    b: 205
                },
                lightpink: {
                    r: 255,
                    g: 182,
                    b: 193
                },
                lightsalmon: {
                    r: 255,
                    g: 160,
                    b: 122
                },
                lightyellow: {
                    r: 255,
                    g: 255,
                    b: 224
                },
                magenta: {
                    r: 255,
                    g: 0,
                    b: 255
                },
                mistyrose: {
                    r: 255,
                    g: 228,
                    b: 225
                },
                moccasin: {
                    r: 255,
                    g: 228,
                    b: 181
                },
                navajowhite: {
                    r: 255,
                    g: 222,
                    b: 173
                },
                orange: {
                    r: 255,
                    g: 165,
                    b: 0
                },
                orangered: {
                    r: 255,
                    g: 69,
                    b: 0
                },
                papayawhip: {
                    r: 255,
                    g: 239,
                    b: 213
                },
                peachpuff: {
                    r: 255,
                    g: 218,
                    b: 185
                },
                pink: {
                    r: 255,
                    g: 192,
                    b: 203
                },
                red: {
                    r: 255,
                    g: 0,
                    b: 0
                },
                seashell: {
                    r: 255,
                    g: 245,
                    b: 238
                },
                snow: {
                    r: 255,
                    g: 250,
                    b: 250
                },
                tomato: {
                    r: 255,
                    g: 99,
                    b: 71
                },
                white: {
                    r: 255,
                    g: 255,
                    b: 255
                },
                yellow: {
                    r: 255,
                    g: 255,
                    b: 0
                },
                rebeccapurple: {
                    r: 102,
                    g: 51,
                    b: 153
                }
            };
        e.exports = {
            rgbToName: i,
            nameToRgbObject: r
        }
    }, {}],
    104: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return "#" + t.toString(16)
        }
    }, {}],
    105: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return parseInt(t.substr(1), 16)
        }
    }, {}],
    106: [function(t, e, n) {
        "use strict";
        var i = t("./shortToLongHex");
        e.exports = function(t) {
            t = i(t);
            var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return e ? "rgb(" + parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) + ")" : null
        }
    }, {
        "./shortToLongHex": 120
    }],
    107: [function(t, e, n) {
        "use strict";
        var i = t("./isRgb"),
            r = t("./isRgba"),
            s = t("./isHex");
        e.exports = function(t) {
            return s(t) || i(t) || r(t)
        }
    }, {
        "./isHex": 108,
        "./isRgb": 109,
        "./isRgba": 110
    }],
    108: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
            return e.test(t)
        }
    }, {}],
    109: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = /^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
            return null !== e.exec(t)
        }
    }, {}],
    110: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = /^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
            return null !== e.exec(t)
        }
    }, {}],
    111: [function(t, e, n) {
        "use strict";
        var i = t("./isHex"),
            r = t("./hexToRgb"),
            s = t("./rgbToObject");
        e.exports = function(t, e, n) {
            t = i(t) ? r(t) : t, e = i(e) ? r(e) : e, t = s(t), e = s(e);
            var o = t.r + (e.r - t.r) * n,
                a = t.g + (e.g - t.g) * n,
                c = t.b + (e.b - t.b) * n;
            return "rgb(" + Math.round(o) + ", " + Math.round(a) + ", " + Math.round(c) + ")"
        }
    }, {
        "./hexToRgb": 106,
        "./isHex": 108,
        "./rgbToObject": 117
    }],
    112: [function(t, e, n) {
        "use strict";
        var i = t("./rgbToObject");
        e.exports = function(t) {
            var e = i(t);
            return [e.r, e.g, e.b]
        }
    }, {
        "./rgbToObject": 117
    }],
    113: [function(t, e, n) {
        "use strict";
        var i = t("./hexToDecimal"),
            r = t("./rgbToArray"),
            s = t("./rgbToHex");
        e.exports = function(t) {
            var e = s.apply(this, r(t));
            return i(e)
        }
    }, {
        "./hexToDecimal": 105,
        "./rgbToArray": 112,
        "./rgbToHex": 114
    }],
    114: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n) {
            return "#" + ((1 << 24) + (t << 16) + (e << 8) + n).toString(16).slice(1)
        }
    }, {}],
    115: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n) {
            if (3 !== arguments.length) return !1;
            t /= 255, e /= 255, n /= 255;
            var i, r, s = Math.max(t, e, n),
                o = Math.min(t, e, n),
                a = s + o,
                c = s - o,
                l = a / 2;
            if (s === o) i = r = 0;
            else {
                switch (r = l > .5 ? c / (2 - s - o) : c / a, s) {
                    case t:
                        i = (e - n) / c;
                        break;
                    case e:
                        i = 2 + (n - t) / c;
                        break;
                    case n:
                        i = 4 + (t - e) / c
                }
                i *= 60, i < 0 && (i += 360)
            }
            return [i, Math.round(100 * r), Math.round(100 * l)]
        }
    }, {}],
    116: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n) {
            if (3 !== arguments.length) return !1;
            var i, r, s = t / 255,
                o = e / 255,
                a = n / 255,
                c = Math.max(s, o, a),
                l = Math.min(s, o, a),
                h = c,
                u = c - l;
            if (r = 0 === c ? 0 : u / c, c === l) i = 0;
            else {
                switch (c) {
                    case s:
                        i = (o - a) / u + (o < a ? 6 : 0);
                        break;
                    case o:
                        i = (a - s) / u + 2;
                        break;
                    case a:
                        i = (s - o) / u + 4
                }
                i /= 6
            }
            return [Math.round(360 * i), Math.round(100 * r), Math.round(100 * h)]
        }
    }, {}],
    117: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/,
                n = e.exec(t);
            return {
                r: Number(n[1]),
                g: Number(n[2]),
                b: Number(n[3])
            }
        }
    }, {}],
    118: [function(t, e, n) {
        "use strict";
        var i = t("./rgbaToObject");
        e.exports = function(t) {
            var e = i(t);
            return [e.r, e.g, e.b, e.a]
        }
    }, {
        "./rgbaToObject": 119
    }],
    119: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = /rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/,
                n = e.exec(t);
            return {
                r: Number(n[1]),
                g: Number(n[2]),
                b: Number(n[3]),
                a: Number(n[4])
            }
        }
    }, {}],
    120: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            return t = t.replace(e, function(t, e, n, i) {
                return "#" + e + e + n + n + i + i
            })
        }
    }, {}],
    121: [function(t, e, n) {
        "use strict";
        e.exports = {
            createBezier: t("./ac-easing/createBezier"),
            createPredefined: t("./ac-easing/createPredefined"),
            createStep: t("./ac-easing/createStep"),
            Ease: t("./ac-easing/Ease")
        }
    }, {
        "./ac-easing/Ease": 122,
        "./ac-easing/createBezier": 123,
        "./ac-easing/createPredefined": 124,
        "./ac-easing/createStep": 125
    }],
    122: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            if ("function" != typeof t) throw new TypeError(r);
            this.easingFunction = t, this.cssString = e || null
        }
        var r = "Ease expects an easing function.",
            s = i.prototype;
        s.getValue = function(t) {
            return this.easingFunction(t, 0, 1, 1)
        }, e.exports = i
    }, {}],
    123: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.every");
        var i = t("./Ease"),
            r = t("./helpers/KeySpline"),
            s = "Bezier curve expects exactly four (4) numbers. Given: ";
        e.exports = function(t, e, n, o) {
            var a = Array.prototype.slice.call(arguments),
                c = a.every(function(t) {
                    return "number" == typeof t
                });
            if (4 !== a.length || !c) throw new TypeError(s + a);
            var l = new r(t, e, n, o),
                h = function(t, e, n, i) {
                    return l.get(t / i) * n + e
                },
                u = "cubic-bezier(" + a.join(", ") + ")";
            return new i(h, u)
        }
    }, {
        "./Ease": 122,
        "./helpers/KeySpline": 126,
        "@marcom/ac-polyfills/Array/prototype.every": void 0
    }],
    124: [function(t, e, n) {
        "use strict";
        var i = t("./createStep"),
            r = t("./helpers/cssAliases"),
            s = t("./helpers/easingFunctions"),
            o = t("./Ease"),
            a = 'Easing function "%TYPE%" not recognized among the following: ' + Object.keys(s).join(", ");
        e.exports = function(t) {
            var e;
            if ("step-start" === t) return i(1, "start");
            if ("step-end" === t) return i(1, "end");
            if (e = s[t], !e) throw new Error(a.replace("%TYPE%", t));
            return new o(e, r[t])
        }
    }, {
        "./Ease": 122,
        "./createStep": 125,
        "./helpers/cssAliases": 127,
        "./helpers/easingFunctions": 128
    }],
    125: [function(t, e, n) {
        "use strict";
        var i = t("./Ease"),
            r = "Step function expects a numeric value greater than zero. Given: ",
            s = 'Step function direction must be either "start" or "end" (default). Given: ';
        e.exports = function(t, e) {
            if (e = e || "end", "number" != typeof t || t < 1) throw new TypeError(r + t);
            if ("start" !== e && "end" !== e) throw new TypeError(s + e);
            var n = function(n, i, r, s) {
                    var o = r / t,
                        a = Math["start" === e ? "floor" : "ceil"](n / s * t);
                    return i + o * a
                },
                o = "steps(" + t + ", " + e + ")";
            return new i(n, o)
        }
    }, {
        "./Ease": 122
    }],
    126: [function(t, e, n) {
        function i(t, e, n, i) {
            function r(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function s(t, e) {
                return 3 * e - 6 * t
            }

            function o(t) {
                return 3 * t
            }

            function a(t, e, n) {
                return ((r(e, n) * t + s(e, n)) * t + o(e)) * t
            }

            function c(t, e, n) {
                return 3 * r(e, n) * t * t + 2 * s(e, n) * t + o(e)
            }

            function l(e) {
                for (var i = e, r = 0; r < 4; ++r) {
                    var s = c(i, t, n);
                    if (0 === s) return i;
                    var o = a(i, t, n) - e;
                    i -= o / s
                }
                return i
            }
            this.get = function(r) {
                return t === e && n === i ? r : a(l(r), e, i)
            }
        }
        e.exports = i
    }, {}],
    127: [function(t, e, n) {
        "use strict";
        var i = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
            "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
            "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
            "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
            "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
            "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
            "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
            "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
            "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
            "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
            "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
            "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
            "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
            "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
            "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
            "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
            "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
            "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
            "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
            "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
            "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
            "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
            "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        };
        i.easeIn = i["ease-in"], i.easeOut = i["ease-out"], i.easeInOut = i["ease-in-out"], i.easeInCubic = i["ease-in-cubic"], i.easeOutCubic = i["ease-out-cubic"], i.easeInOutCubic = i["ease-in-out-cubic"], i.easeInQuad = i["ease-in-quad"], i.easeOutQuad = i["ease-out-quad"], i.easeInOutQuad = i["ease-in-out-quad"], i.easeInQuart = i["ease-in-quart"], i.easeOutQuart = i["ease-out-quart"], i.easeInOutQuart = i["ease-in-out-quart"], i.easeInQuint = i["ease-in-quint"], i.easeOutQuint = i["ease-out-quint"], i.easeInOutQuint = i["ease-in-out-quint"], i.easeInSine = i["ease-in-sine"], i.easeOutSine = i["ease-out-sine"], i.easeInOutSine = i["ease-in-out-sine"], i.easeInExpo = i["ease-in-expo"], i.easeOutExpo = i["ease-out-expo"], i.easeInOutExpo = i["ease-in-out-expo"], i.easeInCirc = i["ease-in-circ"], i.easeOutCirc = i["ease-out-circ"], i.easeInOutCirc = i["ease-in-out-circ"], i.easeInBack = i["ease-in-back"], i.easeOutBack = i["ease-out-back"], i.easeInOutBack = i["ease-in-out-back"], e.exports = i
    }, {}],
    128: [function(t, e, n) {
        "use strict";
        var i = t("../createBezier"),
            r = i(.25, .1, .25, 1).easingFunction,
            s = i(.42, 0, 1, 1).easingFunction,
            o = i(0, 0, .58, 1).easingFunction,
            a = i(.42, 0, .58, 1).easingFunction,
            c = function(t, e, n, i) {
                return n * t / i + e
            },
            l = function(t, e, n, i) {
                return n * (t /= i) * t + e
            },
            h = function(t, e, n, i) {
                return -n * (t /= i) * (t - 2) + e
            },
            u = function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
            },
            f = function(t, e, n, i) {
                return n * (t /= i) * t * t + e
            },
            d = function(t, e, n, i) {
                return n * ((t = t / i - 1) * t * t + 1) + e
            },
            m = function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
            },
            p = function(t, e, n, i) {
                return n * (t /= i) * t * t * t + e
            },
            v = function(t, e, n, i) {
                return -n * ((t = t / i - 1) * t * t * t - 1) + e
            },
            g = function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
            },
            _ = function(t, e, n, i) {
                return n * (t /= i) * t * t * t * t + e
            },
            y = function(t, e, n, i) {
                return n * ((t = t / i - 1) * t * t * t * t + 1) + e
            },
            b = function(t, e, n, i) {
                return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
            },
            E = function(t, e, n, i) {
                return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
            },
            w = function(t, e, n, i) {
                return n * Math.sin(t / i * (Math.PI / 2)) + e
            },
            x = function(t, e, n, i) {
                return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
            },
            T = function(t, e, n, i) {
                return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
            },
            S = function(t, e, n, i) {
                return t === i ? e + n : n * (-Math.pow(2, -10 * t / i) + 1) + e
            },
            A = function(t, e, n, i) {
                return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (-Math.pow(2, -10 * --t) + 2) + e
            },
            C = function(t, e, n, i) {
                return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
            },
            O = function(t, e, n, i) {
                return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
            },
            P = function(t, e, n, i) {
                return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
            },
            I = function(t, e, n, i) {
                var r = 1.70158,
                    s = 0,
                    o = n;
                return 0 === t ? e : 1 === (t /= i) ? e + n : (s || (s = .3 * i), o < Math.abs(n) ? (o = n, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(n / o), -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / s)) + e)
            },
            L = function(t, e, n, i) {
                var r = 1.70158,
                    s = 0,
                    o = n;
                return 0 === t ? e : 1 === (t /= i) ? e + n : (s || (s = .3 * i), o < Math.abs(n) ? (o = n, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(n / o), o * Math.pow(2, -10 * t) * Math.sin((t * i - r) * (2 * Math.PI) / s) + n + e)
            },
            k = function(t, e, n, i) {
                var r = 1.70158,
                    s = 0,
                    o = n;
                return 0 === t ? e : 2 === (t /= i / 2) ? e + n : (s || (s = i * (.3 * 1.5)), o < Math.abs(n) ? (o = n, r = s / 4) : r = s / (2 * Math.PI) * Math.asin(n / o), t < 1 ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / s)) + e : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / s) * .5 + n + e)
            },
            R = function(t, e, n, i, r) {
                return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
            },
            D = function(t, e, n, i, r) {
                return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
            },
            N = function(t, e, n, i, r) {
                return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + e : n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
            },
            j = function(t, e, n, i) {
                return (t /= i) < 1 / 2.75 ? n * (7.5625 * t * t) + e : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
            },
            M = function(t, e, n, i) {
                return n - j(i - t, 0, n, i) + e
            },
            F = function(t, e, n, i) {
                return t < i / 2 ? .5 * M(2 * t, 0, n, i) + e : .5 * j(2 * t - i, 0, n, i) + .5 * n + e
            };
        e.exports = {
            linear: c,
            ease: r,
            easeIn: s,
            "ease-in": s,
            easeOut: o,
            "ease-out": o,
            easeInOut: a,
            "ease-in-out": a,
            easeInCubic: f,
            "ease-in-cubic": f,
            easeOutCubic: d,
            "ease-out-cubic": d,
            easeInOutCubic: m,
            "ease-in-out-cubic": m,
            easeInQuad: l,
            "ease-in-quad": l,
            easeOutQuad: h,
            "ease-out-quad": h,
            easeInOutQuad: u,
            "ease-in-out-quad": u,
            easeInQuart: p,
            "ease-in-quart": p,
            easeOutQuart: v,
            "ease-out-quart": v,
            easeInOutQuart: g,
            "ease-in-out-quart": g,
            easeInQuint: _,
            "ease-in-quint": _,
            easeOutQuint: y,
            "ease-out-quint": y,
            easeInOutQuint: b,
            "ease-in-out-quint": b,
            easeInSine: E,
            "ease-in-sine": E,
            easeOutSine: w,
            "ease-out-sine": w,
            easeInOutSine: x,
            "ease-in-out-sine": x,
            easeInExpo: T,
            "ease-in-expo": T,
            easeOutExpo: S,
            "ease-out-expo": S,
            easeInOutExpo: A,
            "ease-in-out-expo": A,
            easeInCirc: C,
            "ease-in-circ": C,
            easeOutCirc: O,
            "ease-out-circ": O,
            easeInOutCirc: P,
            "ease-in-out-circ": P,
            easeInBack: R,
            "ease-in-back": R,
            easeOutBack: D,
            "ease-out-back": D,
            easeInOutBack: N,
            "ease-in-out-back": N,
            easeInElastic: I,
            "ease-in-elastic": I,
            easeOutElastic: L,
            "ease-out-elastic": L,
            easeInOutElastic: k,
            "ease-in-out-elastic": k,
            easeInBounce: M,
            "ease-in-bounce": M,
            easeOutBounce: j,
            "ease-out-bounce": j,
            easeInOutBounce: F,
            "ease-in-out-bounce": F
        }
    }, {
        "../createBezier": 123
    }],
    129: [function(t, e, n) {
        "use strict";
        e.exports = {
            EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 130
    }],
    130: [function(t, e, n) {
        "use strict";

        function i() {
            this._events = {}
        }
        var r = i.prototype;
        r.on = function(t, e) {
            this._events[t] = this._events[t] || [], this._events[t].unshift(e)
        }, r.once = function(t, e) {
            function n(r) {
                i.off(t, n), void 0 !== r ? e(r) : e()
            }
            var i = this;
            this.on(t, n)
        }, r.off = function(t, e) {
            if (this.has(t)) {
                var n = this._events[t].indexOf(e);
                n !== -1 && this._events[t].splice(n, 1)
            }
        }, r.trigger = function(t, e) {
            if (this.has(t))
                for (var n = this._events[t].length - 1; n >= 0; n--) void 0 !== e ? this._events[t][n](e) : this._events[t][n]()
        }, r.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }, r.destroy = function() {
            for (var t in this._events) this._events[t] = null;
            this._events = null
        }, e.exports = i
    }, {}],
    131: [function(t, e, n) {
        "use strict";
        e.exports = {
            PageVisibilityManager: t("./ac-page-visibility/PageVisibilityManager")
        }
    }, {
        "./ac-page-visibility/PageVisibilityManager": 132
    }],
    132: [function(t, e, n) {
        "use strict";

        function i() {
            if ("undefined" != typeof document.addEventListener) {
                var t;
                "undefined" != typeof document.hidden ? (this._hidden = "hidden", t = "visibilitychange") : "undefined" != typeof document.mozHidden ? (this._hidden = "mozHidden", t = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (this._hidden = "msHidden", t = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (this._hidden = "webkitHidden", t = "webkitvisibilitychange"), "undefined" == typeof document[this._hidden] ? this.isHidden = !1 : this.isHidden = document[this._hidden], t && document.addEventListener(t, this._handleVisibilityChange.bind(this), !1), s.call(this)
            }
        }
        var r = t("@marcom/ac-object/create"),
            s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = i.prototype = r(s.prototype);
        o.CHANGED = "changed", o._handleVisibilityChange = function(t) {
            this.isHidden = document[this._hidden], this.trigger(this.CHANGED, {
                isHidden: this.isHidden
            })
        }, e.exports = new i
    }, {
        "@marcom/ac-event-emitter-micro": 129,
        "@marcom/ac-object/create": 445
    }],
    133: [function(t, e, n) {
        function i(t) {
            var e = new Float32Array(16);
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
        }
        e.exports = i
    }, {}],
    134: [function(t, e, n) {
        function i() {
            var t = new Float32Array(16);
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }
        e.exports = i
    }, {}],
    135: [function(t, e, n) {
        function i(t, e, n) {
            var i = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = i + i,
                c = r + r,
                l = s + s,
                h = i * a,
                u = i * c,
                f = i * l,
                d = r * c,
                m = r * l,
                p = s * l,
                v = o * a,
                g = o * c,
                _ = o * l;
            return t[0] = 1 - (d + p), t[1] = u + _, t[2] = f - g, t[3] = 0, t[4] = u - _, t[5] = 1 - (h + p), t[6] = m + v, t[7] = 0, t[8] = f + g, t[9] = m - v, t[10] = 1 - (h + d), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
        }
        e.exports = i
    }, {}],
    136: [function(t, e, n) {
        function i(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
        }
        e.exports = i
    }, {}],
    137: [function(t, e, n) {
        function i(t, e) {
            var n = e[0],
                i = e[1],
                r = e[2],
                s = e[3],
                o = e[4],
                a = e[5],
                c = e[6],
                l = e[7],
                h = e[8],
                u = e[9],
                f = e[10],
                d = e[11],
                m = e[12],
                p = e[13],
                v = e[14],
                g = e[15],
                _ = n * a - i * o,
                y = n * c - r * o,
                b = n * l - s * o,
                E = i * c - r * a,
                w = i * l - s * a,
                x = r * l - s * c,
                T = h * p - u * m,
                S = h * v - f * m,
                A = h * g - d * m,
                C = u * v - f * p,
                O = u * g - d * p,
                P = f * g - d * v,
                I = _ * P - y * O + b * C + E * A - w * S + x * T;
            return I ? (I = 1 / I, t[0] = (a * P - c * O + l * C) * I, t[1] = (r * O - i * P - s * C) * I, t[2] = (p * x - v * w + g * E) * I, t[3] = (f * w - u * x - d * E) * I, t[4] = (c * A - o * P - l * S) * I, t[5] = (n * P - r * A + s * S) * I, t[6] = (v * b - m * x - g * y) * I, t[7] = (h * x - f * b + d * y) * I, t[8] = (o * O - a * A + l * T) * I, t[9] = (i * A - n * O - s * T) * I, t[10] = (m * w - p * b + g * _) * I, t[11] = (u * b - h * w - d * _) * I, t[12] = (a * S - o * C - c * T) * I, t[13] = (n * C - i * S + r * T) * I, t[14] = (p * y - m * E - v * _) * I, t[15] = (h * E - u * y + f * _) * I, t) : null
        }
        e.exports = i
    }, {}],
    138: [function(t, e, n) {
        function i(t, e, n) {
            var i = e[0],
                r = e[1],
                s = e[2],
                o = e[3],
                a = e[4],
                c = e[5],
                l = e[6],
                h = e[7],
                u = e[8],
                f = e[9],
                d = e[10],
                m = e[11],
                p = e[12],
                v = e[13],
                g = e[14],
                _ = e[15],
                y = n[0],
                b = n[1],
                E = n[2],
                w = n[3];
            return t[0] = y * i + b * a + E * u + w * p, t[1] = y * r + b * c + E * f + w * v, t[2] = y * s + b * l + E * d + w * g, t[3] = y * o + b * h + E * m + w * _, y = n[4], b = n[5], E = n[6], w = n[7], t[4] = y * i + b * a + E * u + w * p, t[5] = y * r + b * c + E * f + w * v, t[6] = y * s + b * l + E * d + w * g, t[7] = y * o + b * h + E * m + w * _, y = n[8], b = n[9], E = n[10], w = n[11], t[8] = y * i + b * a + E * u + w * p, t[9] = y * r + b * c + E * f + w * v, t[10] = y * s + b * l + E * d + w * g, t[11] = y * o + b * h + E * m + w * _, y = n[12], b = n[13], E = n[14], w = n[15], t[12] = y * i + b * a + E * u + w * p, t[13] = y * r + b * c + E * f + w * v, t[14] = y * s + b * l + E * d + w * g, t[15] = y * o + b * h + E * m + w * _, t
        }
        e.exports = i
    }, {}],
    139: [function(t, e, n) {
        function i(t, e, n, i) {
            var r, s, o, a, c, l, h, u, f, d, m, p, v, g, _, y, b, E, w, x, T, S, A, C, O = i[0],
                P = i[1],
                I = i[2],
                L = Math.sqrt(O * O + P * P + I * I);
            return Math.abs(L) < 1e-6 ? null : (L = 1 / L, O *= L, P *= L, I *= L, r = Math.sin(n), s = Math.cos(n), o = 1 - s, a = e[0], c = e[1], l = e[2], h = e[3], u = e[4], f = e[5], d = e[6], m = e[7], p = e[8], v = e[9], g = e[10], _ = e[11], y = O * O * o + s, b = P * O * o + I * r, E = I * O * o - P * r, w = O * P * o - I * r, x = P * P * o + s, T = I * P * o + O * r, S = O * I * o + P * r, A = P * I * o - O * r, C = I * I * o + s, t[0] = a * y + u * b + p * E, t[1] = c * y + f * b + v * E, t[2] = l * y + d * b + g * E, t[3] = h * y + m * b + _ * E, t[4] = a * w + u * x + p * T, t[5] = c * w + f * x + v * T, t[6] = l * w + d * x + g * T, t[7] = h * w + m * x + _ * T, t[8] = a * S + u * A + p * C, t[9] = c * S + f * A + v * C, t[10] = l * S + d * A + g * C, t[11] = h * S + m * A + _ * C, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
        }
        e.exports = i
    }, {}],
    140: [function(t, e, n) {
        function i(t, e, n) {
            var i = Math.sin(n),
                r = Math.cos(n),
                s = e[4],
                o = e[5],
                a = e[6],
                c = e[7],
                l = e[8],
                h = e[9],
                u = e[10],
                f = e[11];
            return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = s * r + l * i, t[5] = o * r + h * i, t[6] = a * r + u * i, t[7] = c * r + f * i, t[8] = l * r - s * i, t[9] = h * r - o * i, t[10] = u * r - a * i, t[11] = f * r - c * i, t
        }
        e.exports = i
    }, {}],
    141: [function(t, e, n) {
        function i(t, e, n) {
            var i = Math.sin(n),
                r = Math.cos(n),
                s = e[0],
                o = e[1],
                a = e[2],
                c = e[3],
                l = e[8],
                h = e[9],
                u = e[10],
                f = e[11];
            return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = s * r - l * i, t[1] = o * r - h * i, t[2] = a * r - u * i, t[3] = c * r - f * i, t[8] = s * i + l * r, t[9] = o * i + h * r, t[10] = a * i + u * r, t[11] = c * i + f * r, t
        }
        e.exports = i
    }, {}],
    142: [function(t, e, n) {
        function i(t, e, n) {
            var i = Math.sin(n),
                r = Math.cos(n),
                s = e[0],
                o = e[1],
                a = e[2],
                c = e[3],
                l = e[4],
                h = e[5],
                u = e[6],
                f = e[7];
            return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = s * r + l * i, t[1] = o * r + h * i, t[2] = a * r + u * i, t[3] = c * r + f * i, t[4] = l * r - s * i, t[5] = h * r - o * i, t[6] = u * r - a * i, t[7] = f * r - c * i, t
        }
        e.exports = i
    }, {}],
    143: [function(t, e, n) {
        function i(t, e, n) {
            var i = n[0],
                r = n[1],
                s = n[2];
            return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * r, t[5] = e[5] * r, t[6] = e[6] * r, t[7] = e[7] * r, t[8] = e[8] * s, t[9] = e[9] * s, t[10] = e[10] * s, t[11] = e[11] * s, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
        }
        e.exports = i
    }, {}],
    144: [function(t, e, n) {
        function i(t, e, n) {
            var i, r, s, o, a, c, l, h, u, f, d, m, p = n[0],
                v = n[1],
                g = n[2];
            return e === t ? (t[12] = e[0] * p + e[4] * v + e[8] * g + e[12], t[13] = e[1] * p + e[5] * v + e[9] * g + e[13], t[14] = e[2] * p + e[6] * v + e[10] * g + e[14], t[15] = e[3] * p + e[7] * v + e[11] * g + e[15]) : (i = e[0], r = e[1], s = e[2], o = e[3], a = e[4], c = e[5], l = e[6], h = e[7], u = e[8], f = e[9], d = e[10], m = e[11], t[0] = i, t[1] = r, t[2] = s, t[3] = o, t[4] = a, t[5] = c, t[6] = l, t[7] = h, t[8] = u, t[9] = f, t[10] = d, t[11] = m, t[12] = i * p + a * v + u * g + e[12], t[13] = r * p + c * v + f * g + e[13], t[14] = s * p + l * v + d * g + e[14], t[15] = o * p + h * v + m * g + e[15]), t
        }
        e.exports = i
    }, {}],
    145: [function(t, e, n) {
        function i(t, e) {
            if (t === e) {
                var n = e[1],
                    i = e[2],
                    r = e[3],
                    s = e[6],
                    o = e[7],
                    a = e[11];
                t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = i, t[9] = s, t[11] = e[14], t[12] = r, t[13] = o, t[14] = a
            } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
            return t
        }
        e.exports = i
    }, {}],
    146: [function(t, e, n) {
        function i() {
            var t = new Float32Array(3);
            return t[0] = 0, t[1] = 0, t[2] = 0, t
        }
        e.exports = i
    }, {}],
    147: [function(t, e, n) {
        function i(t, e, n) {
            var i = e[0],
                r = e[1],
                s = e[2],
                o = n[0],
                a = n[1],
                c = n[2];
            return t[0] = r * c - s * a, t[1] = s * o - i * c, t[2] = i * a - r * o, t
        }
        e.exports = i
    }, {}],
    148: [function(t, e, n) {
        function i(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
        }
        e.exports = i
    }, {}],
    149: [function(t, e, n) {
        function i(t, e, n) {
            var i = new Float32Array(3);
            return i[0] = t, i[1] = e, i[2] = n, i
        }
        e.exports = i
    }, {}],
    150: [function(t, e, n) {
        function i(t) {
            var e = t[0],
                n = t[1],
                i = t[2];
            return Math.sqrt(e * e + n * n + i * i)
        }
        e.exports = i
    }, {}],
    151: [function(t, e, n) {
        function i(t, e) {
            var n = e[0],
                i = e[1],
                r = e[2],
                s = n * n + i * i + r * r;
            return s > 0 && (s = 1 / Math.sqrt(s), t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s), t
        }
        e.exports = i
    }, {}],
    152: [function(t, e, n) {
        function i() {
            var t = new Float32Array(4);
            return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
        }
        e.exports = i
    }, {}],
    153: [function(t, e, n) {
        function i(t, e, n, i) {
            var r = new Float32Array(4);
            return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r
        }
        e.exports = i
    }, {}],
    154: [function(t, e, n) {
        function i(t, e, n) {
            var i = e[0],
                r = e[1],
                s = e[2],
                o = e[3];
            return t[0] = n[0] * i + n[4] * r + n[8] * s + n[12] * o, t[1] = n[1] * i + n[5] * r + n[9] * s + n[13] * o, t[2] = n[2] * i + n[6] * r + n[10] * s + n[14] * o, t[3] = n[3] * i + n[7] * r + n[11] * s + n[15] * o, t
        }
        e.exports = i
    }, {}],
    155: [function(t, e, n) {
        "use strict";
        e.exports = {
            Transform: t("./ac-transform/Transform")
        }
    }, {
        "./ac-transform/Transform": 156
    }],
    156: [function(t, e, n) {
        "use strict";

        function i() {
            this.m = r.create()
        }
        var r = t("./gl-matrix/mat4"),
            s = t("./gl-matrix/vec3"),
            o = t("./gl-matrix/vec4"),
            a = Math.PI / 180,
            c = 180 / Math.PI,
            l = 0,
            h = 0,
            u = 1,
            f = 1,
            d = 2,
            m = 3,
            p = 4,
            v = 4,
            g = 5,
            _ = 5,
            y = 6,
            b = 7,
            E = 8,
            w = 9,
            x = 10,
            T = 11,
            S = 12,
            A = 12,
            C = 13,
            O = 13,
            P = 14,
            I = 15,
            L = i.prototype;
        L.rotateX = function(t) {
            var e = a * t;
            return r.rotateX(this.m, this.m, e), this
        }, L.rotateY = function(t) {
            var e = a * t;
            return r.rotateY(this.m, this.m, e), this
        }, L.rotateZ = function(t) {
            var e = a * t;
            return r.rotateZ(this.m, this.m, e), this
        }, L.rotate = L.rotateZ, L.rotate3d = function(t, e, n, i) {
            null !== e && void 0 !== e || (e = t), null !== n && void 0 !== e || (n = t);
            var s = a * i;
            return r.rotate(this.m, this.m, s, [t, e, n]), this
        }, L.rotateAxisAngle = L.rotate3d, L.scale = function(t, e) {
            return e = e || t, r.scale(this.m, this.m, [t, e, 1]), this
        }, L.scaleX = function(t) {
            return r.scale(this.m, this.m, [t, 1, 1]), this
        }, L.scaleY = function(t) {
            return r.scale(this.m, this.m, [1, t, 1]), this
        }, L.scaleZ = function(t) {
            return r.scale(this.m, this.m, [1, 1, t]), this
        }, L.scale3d = function(t, e, n) {
            return r.scale(this.m, this.m, [t, e, n]), this
        }, L.skew = function(t, e) {
            if (null === e || void 0 === e) return this.skewX(t);
            t = a * t, e = a * e;
            var n = r.create();
            return n[v] = Math.tan(t), n[f] = Math.tan(e), r.multiply(this.m, this.m, n), this
        }, L.skewX = function(t) {
            t = a * t;
            var e = r.create();
            return e[v] = Math.tan(t), r.multiply(this.m, this.m, e), this
        }, L.skewY = function(t) {
            t = a * t;
            var e = r.create();
            return e[f] = Math.tan(t), r.multiply(this.m, this.m, e), this
        }, L.translate = function(t, e) {
            return e = e || 0, r.translate(this.m, this.m, [t, e, 0]), this
        }, L.translate3d = function(t, e, n) {
            return r.translate(this.m, this.m, [t, e, n]), this
        }, L.translateX = function(t) {
            return r.translate(this.m, this.m, [t, 0, 0]), this
        }, L.translateY = function(t) {
            return r.translate(this.m, this.m, [0, t, 0]), this
        }, L.translateZ = function(t) {
            return r.translate(this.m, this.m, [0, 0, t]), this
        }, L.perspective = function(t) {
            var e = r.create();
            0 !== t && (e[T] = -1 / t), r.multiply(this.m, this.m, e)
        }, L.inverse = function() {
            var t = this.clone();
            return t.m = r.invert(t.m, this.m), t
        }, L.reset = function() {
            return r.identity(this.m), this
        }, L.getTranslateXY = function() {
            var t = this.m;
            return this.isAffine() ? [t[A], t[O]] : [t[S], t[C]]
        }, L.getTranslateXYZ = function() {
            var t = this.m;
            return this.isAffine() ? [t[A], t[O], 0] : [t[S], t[C], t[P]]
        }, L.getTranslateX = function() {
            var t = this.m;
            return this.isAffine() ? t[A] : t[S]
        }, L.getTranslateY = function() {
            var t = this.m;
            return this.isAffine() ? t[O] : t[C]
        }, L.getTranslateZ = function() {
            var t = this.m;
            return this.isAffine() ? 0 : t[P]
        }, L.clone = function() {
            var t = new i;
            return t.m = r.clone(this.m), t
        }, L.toArray = function() {
            var t = this.m;
            return this.isAffine() ? [t[h], t[f], t[v], t[_], t[A], t[O]] : [t[l], t[u], t[d], t[m], t[p], t[g], t[y], t[b], t[E], t[w], t[x], t[T], t[S], t[C], t[P], t[I]]
        }, L.fromArray = function(t) {
            return this.m = Array.prototype.slice.call(t), this
        }, L.setMatrixValue = function(t) {
            t = String(t).trim();
            var e = r.create();
            if ("none" === t) return this.m = e, this;
            var n, i, s = t.slice(0, t.indexOf("("));
            if ("matrix3d" === s)
                for (n = t.slice(9, -1).split(","), i = 0; i < n.length; i++) e[i] = parseFloat(n[i]);
            else {
                if ("matrix" !== s) throw new TypeError("Invalid Matrix Value");
                for (n = t.slice(7, -1).split(","), i = n.length; i--;) n[i] = parseFloat(n[i]);
                e[l] = n[0], e[u] = n[1], e[S] = n[4], e[p] = n[2], e[g] = n[3], e[C] = n[5]
            }
            return this.m = e, this
        };
        var k = function(t) {
            return Math.abs(t) < 1e-4
        };
        L.decompose = function(t) {
            t = t || !1;
            for (var e = r.clone(this.m), n = s.create(), i = s.create(), a = s.create(), l = o.create(), h = o.create(), u = (s.create(), 0); u < 16; u++) e[u] /= e[I];
            var f = r.clone(e);
            f[m] = 0, f[b] = 0, f[T] = 0, f[I] = 1;
            var d = (e[3], e[7], e[11], e[12]),
                p = e[13],
                v = e[14],
                g = (e[15], o.create());
            if (k(e[m]) && k(e[b]) && k(e[T])) l = o.fromValues(0, 0, 0, 1);
            else {
                g[0] = e[m], g[1] = e[b], g[2] = e[T], g[3] = e[I];
                var _ = r.invert(r.create(), f),
                    y = r.transpose(r.create(), _);
                l = o.transformMat4(l, g, y)
            }
            n[0] = d, n[1] = p, n[2] = v;
            var E = [s.create(), s.create(), s.create()];
            E[0][0] = e[0], E[0][1] = e[1], E[0][2] = e[2], E[1][0] = e[4], E[1][1] = e[5], E[1][2] = e[6], E[2][0] = e[8], E[2][1] = e[9], E[2][2] = e[10], i[0] = s.length(E[0]), s.normalize(E[0], E[0]), a[0] = s.dot(E[0], E[1]), E[1] = this._combine(E[1], E[0], 1, -a[0]), i[1] = s.length(E[1]), s.normalize(E[1], E[1]), a[0] /= i[1], a[1] = s.dot(E[0], E[2]), E[2] = this._combine(E[2], E[0], 1, -a[1]), a[2] = s.dot(E[1], E[2]), E[2] = this._combine(E[2], E[1], 1, -a[2]), i[2] = s.length(E[2]), s.normalize(E[2], E[2]), a[1] /= i[2], a[2] /= i[2];
            var w = s.cross(s.create(), E[1], E[2]);
            if (s.dot(E[0], w) < 0)
                for (u = 0; u < 3; u++) i[u] *= -1, E[u][0] *= -1, E[u][1] *= -1, E[u][2] *= -1;
            h[0] = .5 * Math.sqrt(Math.max(1 + E[0][0] - E[1][1] - E[2][2], 0)), h[1] = .5 * Math.sqrt(Math.max(1 - E[0][0] + E[1][1] - E[2][2], 0)), h[2] = .5 * Math.sqrt(Math.max(1 - E[0][0] - E[1][1] + E[2][2], 0)), h[3] = .5 * Math.sqrt(Math.max(1 + E[0][0] + E[1][1] + E[2][2], 0)), E[2][1] > E[1][2] && (h[0] = -h[0]), E[0][2] > E[2][0] && (h[1] = -h[1]), E[1][0] > E[0][1] && (h[2] = -h[2]);
            var x = o.fromValues(h[0], h[1], h[2], 2 * Math.acos(h[3])),
                S = this._rotationFromQuat(h);
            return t && (a[0] = Math.round(a[0] * c * 100) / 100, a[1] = Math.round(a[1] * c * 100) / 100, a[2] = Math.round(a[2] * c * 100) / 100, S[0] = Math.round(S[0] * c * 100) / 100, S[1] = Math.round(S[1] * c * 100) / 100, S[2] = Math.round(S[2] * c * 100) / 100, x[3] = Math.round(x[3] * c * 100) / 100), {
                translation: n,
                scale: i,
                skew: a,
                perspective: l,
                quaternion: h,
                eulerRotation: S,
                axisAngle: x
            }
        }, L.recompose = function(t, e, n, i, a) {
            t = t || s.create(), e = e || s.create(), n = n || s.create(), i = i || o.create(), a = a || o.create();
            var c = r.fromRotationTranslation(r.create(), a, t);
            c[m] = i[0], c[b] = i[1], c[T] = i[2], c[I] = i[3];
            var l = r.create();
            return 0 !== n[2] && (l[w] = n[2], r.multiply(c, c, l)), 0 !== n[1] && (l[w] = 0, l[E] = n[1], r.multiply(c, c, l)), n[0] && (l[E] = 0, l[4] = n[0], r.multiply(c, c, l)), r.scale(c, c, e), this.m = c, this
        }, L.isAffine = function() {
            return 0 === this.m[d] && 0 === this.m[m] && 0 === this.m[y] && 0 === this.m[b] && 0 === this.m[E] && 0 === this.m[w] && 1 === this.m[x] && 0 === this.m[T] && 0 === this.m[P] && 1 === this.m[I]
        }, L.toString = function() {
            var t = this.m;
            return this.isAffine() ? "matrix(" + t[h] + ", " + t[f] + ", " + t[v] + ", " + t[_] + ", " + t[A] + ", " + t[O] + ")" : "matrix3d(" + t[l] + ", " + t[u] + ", " + t[d] + ", " + t[m] + ", " + t[p] + ", " + t[g] + ", " + t[y] + ", " + t[b] + ", " + t[E] + ", " + t[w] + ", " + t[x] + ", " + t[T] + ", " + t[S] + ", " + t[C] + ", " + t[P] + ", " + t[I] + ")"
        }, L.toCSSString = L.toString, L._combine = function(t, e, n, i) {
            var r = s.create();
            return r[0] = n * t[0] + i * e[0], r[1] = n * t[1] + i * e[1], r[2] = n * t[2] + i * e[2], r
        }, L._matrix2dToMat4 = function(t) {
            for (var e = r.create(), n = 0; n < 4; n++)
                for (var i = 0; i < 4; i++) e[4 * n + i] = t[n][i];
            return e
        }, L._mat4ToMatrix2d = function(t) {
            for (var e = [], n = 0; n < 4; n++) {
                e[n] = [];
                for (var i = 0; i < 4; i++) e[n][i] = t[4 * n + i]
            }
            return e
        }, L._rotationFromQuat = function(t) {
            var e, n, i, r = t[3] * t[3],
                o = t[0] * t[0],
                a = t[1] * t[1],
                c = t[2] * t[2],
                l = o + a + c + r,
                h = t[0] * t[1] + t[2] * t[3];
            return h > .499 * l ? (n = 2 * Math.atan2(t[0], t[3]), i = Math.PI / 2, e = 0, s.fromValues(e, n, i)) : h < -.499 * l ? (n = -2 * Math.atan2(t[0], t[3]), i = -Math.PI / 2, e = 0, s.fromValues(e, n, i)) : (n = Math.atan2(2 * t[1] * t[3] - 2 * t[0] * t[2], o - a - c + r), i = Math.asin(2 * h / l), e = Math.atan2(2 * t[0] * t[3] - 2 * t[1] * t[2], -o + a - c + r), s.fromValues(e, n, i))
        }, e.exports = i
    }, {
        "./gl-matrix/mat4": 157,
        "./gl-matrix/vec3": 158,
        "./gl-matrix/vec4": 159
    }],
    157: [function(t, e, n) {
        var i = {
            create: t("gl-mat4/create"),
            rotate: t("gl-mat4/rotate"),
            rotateX: t("gl-mat4/rotateX"),
            rotateY: t("gl-mat4/rotateY"),
            rotateZ: t("gl-mat4/rotateZ"),
            scale: t("gl-mat4/scale"),
            multiply: t("gl-mat4/multiply"),
            translate: t("gl-mat4/translate"),
            invert: t("gl-mat4/invert"),
            clone: t("gl-mat4/clone"),
            transpose: t("gl-mat4/transpose"),
            identity: t("gl-mat4/identity"),
            fromRotationTranslation: t("gl-mat4/fromRotationTranslation")
        };
        e.exports = i
    }, {
        "gl-mat4/clone": 133,
        "gl-mat4/create": 134,
        "gl-mat4/fromRotationTranslation": 135,
        "gl-mat4/identity": 136,
        "gl-mat4/invert": 137,
        "gl-mat4/multiply": 138,
        "gl-mat4/rotate": 139,
        "gl-mat4/rotateX": 140,
        "gl-mat4/rotateY": 141,
        "gl-mat4/rotateZ": 142,
        "gl-mat4/scale": 143,
        "gl-mat4/translate": 144,
        "gl-mat4/transpose": 145
    }],
    158: [function(t, e, n) {
        var i = {
            create: t("gl-vec3/create"),
            dot: t("gl-vec3/dot"),
            normalize: t("gl-vec3/normalize"),
            length: t("gl-vec3/length"),
            cross: t("gl-vec3/cross"),
            fromValues: t("gl-vec3/fromValues")
        };
        e.exports = i
    }, {
        "gl-vec3/create": 146,
        "gl-vec3/cross": 147,
        "gl-vec3/dot": 148,
        "gl-vec3/fromValues": 149,
        "gl-vec3/length": 150,
        "gl-vec3/normalize": 151
    }],
    159: [function(t, e, n) {
        var i = {
            create: t("gl-vec4/create"),
            transformMat4: t("gl-vec4/transformMat4"),
            fromValues: t("gl-vec4/fromValues")
        };
        e.exports = i
    }, {
        "gl-vec4/create": 152,
        "gl-vec4/fromValues": 153,
        "gl-vec4/transformMat4": 154
    }],
    160: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            return t.nodeType ? void 0 === r || i && i.inlineStyles ? new a(t, e, n, i) : new c(t, e, n, i) : new o(t, e, n, i)
        }
        t("./helpers/Float32Array");
        var r = t("./helpers/transitionEnd"),
            s = t("@marcom/ac-clip").Clip,
            o = t("./clips/ClipEasing"),
            a = t("./clips/ClipInlineCss"),
            c = t("./clips/ClipTransitionCss");
        for (var l in s) "function" == typeof s[l] && "_" !== l.substr(0, 1) && (i[l] = s[l].bind(s));
        i.to = function(t, e, n, r) {
            return r = r || {}, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new i(t, e, n, r).play()
        }, i.from = function(t, e, n, r) {
            return r = r || {}, r.propsFrom = n, void 0 === r.destroyOnComplete && (r.destroyOnComplete = !0), new i(t, e, r.propsTo, r).play()
        }, e.exports = i
    }, {
        "./clips/ClipEasing": 163,
        "./clips/ClipInlineCss": 164,
        "./clips/ClipTransitionCss": 165,
        "./helpers/Float32Array": 168,
        "./helpers/transitionEnd": 177,
        "@marcom/ac-clip": 99
    }],
    161: [function(t, e, n) {
        "use strict";
        e.exports = t("./timeline/Timeline")
    }, {
        "./timeline/Timeline": 179
    }],
    162: [function(t, e, n) {
        "use strict";
        e.exports = {
            Clip: t("./Clip"),
            Timeline: t("./Timeline")
        }
    }, {
        "./Clip": 160,
        "./Timeline": 161
    }],
    163: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            i && a(i.ease) && (i.ease = c.create(i.ease).toEasingFunction()), i = i || {}, this._propsEase = i.propsEase || {}, l.call(this, t, e, n, i)
        }
        var r = t("@marcom/ac-object/clone"),
            s = t("@marcom/ac-object/create"),
            o = t("@marcom/ac-easing").createPredefined,
            a = t("../helpers/isCssCubicBezierString"),
            c = t("../helpers/BezierCurveCssManager"),
            l = t("@marcom/ac-clip").Clip,
            h = t("@marcom/ac-easing").Ease,
            u = l.prototype,
            f = i.prototype = s(u);
        f.reset = function() {
            var t = u.reset.call(this);
            if (this._clips)
                for (var e = this._clips.length; e--;) this._clips[e].reset();
            return t
        }, f.destroy = function() {
            if (this._clips) {
                for (var t = this._clips.length; t--;) this._clips[t].destroy();
                this._clips = null
            }
            return this._eases = null, this._storeOnUpdate = null, u.destroy.call(this)
        }, f._prepareProperties = function() {
            var t, e, n = 0,
                i = {},
                s = {},
                f = {};
            if (this._propsEase) {
                for (t in this._propsTo) this._propsTo.hasOwnProperty(t) && (e = this._propsEase[t], a(e) && (e = c.create(e).toEasingFunction()), void 0 === e ? (void 0 === i[this._ease] && (i[this._ease] = {}, s[this._ease] = {}, f[this._ease] = this._ease.easingFunction, n++), i[this._ease][t] = this._propsTo[t], s[this._ease][t] = this._propsFrom[t]) : "function" == typeof e ? (i[n] = {}, s[n] = {}, i[n][t] = this._propsTo[t], s[n][t] = this._propsFrom[t], f[n] = e, n++) : (void 0 === i[e] && (i[e] = {}, s[e] = {}, f[e] = e, n++), i[e][t] = this._propsTo[t], s[e][t] = this._propsFrom[t]));
                if (n > 1) {
                    var d = r(this._options || {}, !0),
                        m = .001 * this._duration;
                    this._storeOnUpdate = this._onUpdate, this._onUpdate = this._onUpdateClips, d.onStart = null, d.onUpdate = null, d.onDraw = null, d.onComplete = null, this._clips = [];
                    for (e in i) i.hasOwnProperty(e) && (d.ease = f[e], d.propsFrom = s[e], this._clips.push(new l(this._target, m, i[e], d)));
                    e = "linear", this._propsTo = {}, this._propsFrom = {}
                } else
                    for (t in f) f.hasOwnProperty(t) && (e = f[t]);
                void 0 !== e && (this._ease = "function" == typeof e ? new h(e) : o(e))
            }
            return u._prepareProperties.call(this)
        }, f._onUpdateClips = function(t) {
            for (var e = 1 === this._direction ? t.progress() : 1 - t.progress(), n = this._clips.length; n--;) this._clips[n].progress(e);
            "function" == typeof this._storeOnUpdate && this._storeOnUpdate.call(this, this)
        }, e.exports = i
    }, {
        "../helpers/BezierCurveCssManager": 167,
        "../helpers/isCssCubicBezierString": 173,
        "@marcom/ac-clip": 99,
        "@marcom/ac-easing": 121,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-object/create": 445
    }],
    164: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            i = i || {}, this._el = t, this._storeOnStart = i.onStart || null, this._storeOnDraw = i.onDraw || null, this._storeOnComplete = i.onComplete || null, i.onStart = this._onStart, i.onDraw = this._onDraw, i.onComplete = this._onComplete, l.call(this, {}, e, n, i)
        }
        var r = t("@marcom/ac-dom-styles/setStyle"),
            s = t("../helpers/convertToStyleObject"),
            o = t("../helpers/convertToTransitionableObjects"),
            a = t("@marcom/ac-object/create"),
            c = t("../helpers/removeTransitions"),
            l = t("./ClipEasing"),
            h = l.prototype,
            u = i.prototype = a(h);
        u.play = function() {
            var t = h.play.call(this);
            return 0 !== this._remainingDelay && r(this._el, s(this._target)), t
        }, u.reset = function() {
            var t = h.reset.call(this);
            return r(this._el, s(this._target)), t
        }, u.destroy = function() {
            return this._el = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnDraw = null, this._storeOnComplete = null, h.destroy.call(this)
        }, u.target = function() {
            return this._el
        }, u._prepareProperties = function() {
            var t = o(this._el, this._propsTo, this._propsFrom);
            this._target = t.target, this._propsFrom = t.propsFrom, this._propsTo = t.propsTo, c(this._el, this._target);
            var e = this._isYoyo ? this._propsFrom : this._propsTo;
            if (this._completeStyles = s(e), void 0 !== this._options.removeStylesOnComplete) {
                var n, i = this._options.removeStylesOnComplete;
                if ("boolean" == typeof i && i)
                    for (n in this._completeStyles) this._completeStyles.hasOwnProperty(n) && (this._completeStyles[n] = null);
                else if ("object" == typeof i && i.length)
                    for (var r = i.length; r--;) n = i[r], this._completeStyles.hasOwnProperty(n) && (this._completeStyles[n] = null)
            }
            return h._prepareProperties.call(this)
        }, u._onStart = function(t) {
            this.playing() && 1 === this._direction && 0 === this._delay && r(this._el, s(this._propsFrom)), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
        }, u._onDraw = function(t) {
            r(this._el, s(this._target)), "function" == typeof this._storeOnDraw && this._storeOnDraw.call(this, this)
        }, u._onComplete = function(t) {
            r(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
        }, e.exports = i
    }, {
        "../helpers/convertToStyleObject": 170,
        "../helpers/convertToTransitionableObjects": 171,
        "../helpers/removeTransitions": 174,
        "./ClipEasing": 163,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-object/create": 445
    }],
    165: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            if (i = i || {}, this._el = t, this._storeEase = i.ease, "function" == typeof this._storeEase) throw new Error(E);
            this._storeOnStart = i.onStart || null, this._storeOnComplete = i.onComplete || null, i.onStart = this._onStart.bind(this), i.onComplete = this._onComplete.bind(this), this._stylesTo = c(n, !0), this._stylesFrom = i.propsFrom ? c(i.propsFrom, !0) : {}, this._propsEase = i.propsEase ? c(i.propsEase, !0) : {}, u(i.ease) && (i.ease = p.create(i.ease).toEasingFunction()), v.call(this, {}, e, {}, i), this._propsFrom = {}
        }
        var r = t("@marcom/ac-dom-styles/setStyle"),
            s = t("@marcom/ac-dom-styles/getStyle"),
            o = t("../helpers/convertToStyleObject"),
            a = t("../helpers/convertToTransitionableObjects"),
            c = t("@marcom/ac-object/clone"),
            l = t("@marcom/ac-object/create"),
            h = t("@marcom/ac-easing").createPredefined,
            u = t("../helpers/isCssCubicBezierString"),
            f = t("../helpers/removeTransitions"),
            d = t("../helpers/transitionEnd"),
            m = t("../helpers/waitAnimationFrames"),
            p = t("../helpers/BezierCurveCssManager"),
            v = t("@marcom/ac-clip").Clip,
            g = t("./ClipEasing"),
            _ = t("@marcom/ac-page-visibility").PageVisibilityManager,
            y = "ease",
            b = "%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.",
            E = "Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.",
            w = v.prototype,
            x = i.prototype = l(w);
        x.play = function() {
            var t = w.play.call(this);
            return 1 === this._direction && 0 === this.progress() && 0 !== this._remainingDelay && this._applyStyles(0, o(this._stylesFrom)), t
        }, x.reset = function() {
            var t = w.reset.call(this);
            return this._stylesClip.reset(), this._applyStyles(0, o(this._styles)), t
        }, x.destroy = function() {
            return _.off("changed", this._onVisibilityChanged), this._removeTransitionListener(), this.off("pause", this._onPaused), this._onPaused(), this._stylesClip.destroy(), this._stylesClip = null, this._el = null, this._propsArray = null, this._styles = null, this._stylesFrom = null, this._stylesTo = null, this._completeStyles = null, this._storeOnStart = null, this._storeOnComplete = null, this._onTransitionEnded = null, w.destroy.call(this)
        }, x.target = function() {
            return this._el
        }, x.duration = function(t) {
            var e = w.duration.call(this, t);
            return void 0 === t ? e : (this.playing() && this.progress(this._progress), e)
        }, x.progress = function(t) {
            var e = w.progress.call(this, t);
            return void 0 === t ? e : (t = 1 === this._direction ? t : 1 - t, this._stylesClip.progress(t), this._applyStyles(0, o(this._styles)), this.playing() && (this._isWaitingForStylesToBeApplied = !0, m(this._setStylesAfterWaiting, 2)), e)
        }, x._prepareProperties = function() {
            var t = a(this._el, this._stylesTo, this._stylesFrom);
            this._styles = t.target, this._stylesTo = t.propsTo, this._stylesFrom = t.propsFrom;
            var e = this._storeEase || y;
            this._eases = {}, this._propsArray = [];
            var n;
            this._styleCompleteTo = o(this._stylesTo), this._styleCompleteFrom = o(this._stylesFrom), this._propsEaseKeys = {};
            var i;
            for (i in this._stylesTo) this._stylesTo.hasOwnProperty(i) && (this._propsArray[this._propsArray.length] = i, void 0 === this._propsEase[i] ? (void 0 === this._eases[e] && (n = this._convertEase(e), this._eases[e] = n.css), this._propsEaseKeys[i] = e) : void 0 === this._eases[this._propsEase[i]] ? (n = this._convertEase(this._propsEase[i]), this._eases[this._propsEase[i]] = n.css, this._propsEaseKeys[i] = this._propsEase[i], this._propsEase[i] = n.js) : u(this._propsEase[i]) && (this._propsEaseKeys[i] = this._propsEase[i], this._propsEase[i] = this._eases[this._propsEase[i]][1].toEasingFunction()));
            if (this._onPaused = this._onPaused.bind(this), this.on("pause", this._onPaused), this._setOtherTransitions(), this._currentTransitionStyles = this._otherTransitions, this._completeStyles = o(this._isYoyo ? this._stylesFrom : this._stylesTo), void 0 !== this._options.removeStylesOnComplete) {
                var r = this._options.removeStylesOnComplete;
                if ("boolean" == typeof r && r)
                    for (i in this._stylesTo) this._completeStyles[i] = null;
                else if ("object" == typeof r && r.length)
                    for (var s = r.length; s--;) this._completeStyles[r[s]] = null
            }
            return this._onTransitionEnded = this._onTransitionEnded.bind(this), this._setStylesAfterWaiting = this._setStylesAfterWaiting.bind(this), this._onVisibilityChanged = this._onVisibilityChanged.bind(this), _.on(_.CHANGED, this._onVisibilityChanged), this._stylesClip = new g(this._styles, 1, this._stylesTo, {
                ease: this._options.ease,
                propsFrom: this._stylesFrom,
                propsEase: this._options.propsEase
            }), v._remove(this._stylesClip), w._prepareProperties.call(this)
        }, x._convertEase = function(t) {
            if ("function" == typeof t) throw new Error(E);
            var e, n;
            if (u(t)) e = p.create(t), n = e.toEasingFunction();
            else {
                var i = h(t);
                if (null === i.cssString) throw new Error(b.replace(/%EASE%/g, t));
                e = p.create(i.cssString), n = t
            }
            return {
                css: {
                    1: e,
                    "-1": e.reversed()
                },
                js: n
            }
        }, x._complete = function() {
            !this._isWaitingForStylesToBeApplied && !this._isTransitionEnded && this._isListeningForTransitionEnd || 1 !== this.progress() || (this._isWaitingForStylesToBeApplied = !1, w._complete.call(this))
        }, x._onTransitionEnded = function() {
            this._isTransitionEnded = !0, this._complete()
        }, x._addTransitionListener = function() {
            !this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !0, this._isTransitionEnded = !1, this._el.addEventListener(d, this._onTransitionEnded))
        }, x._removeTransitionListener = function() {
            this._isListeningForTransitionEnd && this._el && this._onTransitionEnded && (this._isListeningForTransitionEnd = !1, this._isTransitionEnded = !1, this._el.removeEventListener(d, this._onTransitionEnded))
        }, x._applyStyles = function(t, e) {
            if (t > 0) {
                var n, i = "",
                    s = {};
                for (n in this._eases) this._eases.hasOwnProperty(n) && (s[n] = this._eases[n][this._direction].splitAt(this.progress()).toCSSString());
                for (n in this._stylesTo) this._stylesTo.hasOwnProperty(n) && (i += n + " " + t + "ms " + s[this._propsEaseKeys[n]] + " 0ms, ");
                this._currentTransitionStyles = i.substr(0, i.length - 2), this._doStylesMatchCurrentStyles(e) ? this._removeTransitionListener() : this._addTransitionListener()
            } else this._currentTransitionStyles = "", this._removeTransitionListener();
            e.transition = this._getOtherClipTransitionStyles() + this._currentTransitionStyles, r(this._el, e)
        }, x._doStylesMatchCurrentStyles = function(t) {
            var e, n = s.apply(this, [this._el].concat([this._propsArray]));
            for (e in t)
                if (t.hasOwnProperty(e) && n.hasOwnProperty(e) && t[e] !== n[e]) return !1;
            return !0
        }, x._setStylesAfterWaiting = function() {
            if (this._isWaitingForStylesToBeApplied = !1, this.playing()) {
                var t = this._durationMs * (1 - this.progress()),
                    e = this._direction > 0 ? this._styleCompleteTo : this._styleCompleteFrom;
                this._applyStyles(t, e)
            }
        }, x._setOtherTransitions = function() {
            f(this._el, this._stylesTo);
            for (var t = v.getAll(this._el), e = t.length; e--;)
                if (t[e] !== this && t[e].playing() && t[e]._otherTransitions && t[e]._otherTransitions.length) return void(this._otherTransitions = t[e]._otherTransitions);
            this._otherTransitions = s(this._el, "transition").transition, null !== this._otherTransitions && "all 0s ease 0s" !== this._otherTransitions || (this._otherTransitions = "")
        }, x._getTransitionStyles = function() {
            var t = this._getOtherClipTransitionStyles();
            return this._otherTransitions.length ? t += this._otherTransitions : t.length && (t = t.substr(0, t.length - 2)), t
        }, x._getOtherClipTransitionStyles = function() {
            for (var t = "", e = v.getAll(this._el), n = e.length; n--;) e[n] !== this && e[n].playing() && e[n]._currentTransitionStyles && e[n]._currentTransitionStyles.length && (t += e[n]._currentTransitionStyles + ", ");
            return t
        }, x._onVisibilityChanged = function(t) {
            if (this.playing() && !t.isHidden) {
                this._update({
                    timeNow: this._getTime()
                });
                var e = this.progress();
                e < 1 && this.progress(e)
            }
        }, x._onPaused = function(t) {
            var e = s.apply(this, [this._el].concat([this._propsArray]));
            e.transition = this._getTransitionStyles(), this._removeTransitionListener(), r(this._el, e)
        }, x._onStart = function(t) {
            var e = 1 === this._direction && 0 === this.progress() && 0 === this._delay ? 2 : 0;
            e && (this._isWaitingForStylesToBeApplied = !0, this._applyStyles(0, this._styleCompleteFrom)), m(this._setStylesAfterWaiting, e), "function" == typeof this._storeOnStart && this._storeOnStart.call(this, this)
        }, x._onComplete = function(t) {
            this._removeTransitionListener(), this._completeStyles.transition = this._getTransitionStyles(), r(this._el, this._completeStyles), "function" == typeof this._storeOnComplete && this._storeOnComplete.call(this, this)
        }, e.exports = i
    }, {
        "../helpers/BezierCurveCssManager": 167,
        "../helpers/convertToStyleObject": 170,
        "../helpers/convertToTransitionableObjects": 171,
        "../helpers/isCssCubicBezierString": 173,
        "../helpers/removeTransitions": 174,
        "../helpers/transitionEnd": 177,
        "../helpers/waitAnimationFrames": 178,
        "./ClipEasing": 163,
        "@marcom/ac-clip": 99,
        "@marcom/ac-dom-styles/getStyle": 53,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-easing": 121,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-page-visibility": 131
    }],
    166: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.manager = e, this.p1 = {
                x: t[0],
                y: t[1]
            }, this.p2 = {
                x: t[2],
                y: t[3]
            }, this._isLinear = this.p1.x === this.p1.y && this.p2.x === this.p2.y, this._cacheSplits = {}
        }
        var r = t("@marcom/ac-easing").createBezier,
            s = i.prototype;
        s.splitAt = function(t) {
            if (this._isLinear) return this;
            if (t = Math.round(40 * t) / 40, 0 === t) return this;
            if (void 0 !== this._cacheSplits[t]) return this._cacheSplits[t];
            for (var e = [this.p1.x, this.p2.x], n = [this.p1.y, this.p2.y], i = 0, r = t, s = 0, o = 1, a = this._getStartX(t, e); r !== a && i < 1e3;) r < a ? o = t : s = t, t = s + .5 * (o - s), a = this._getStartX(t, e), ++i;
            var c = this._splitBezier(t, e, n),
                l = this._normalize(c),
                h = this.manager.create(l);
            return this._cacheSplits[r] = h, h
        }, s.reversed = function() {
            var t = this.toArray();
            return this.manager.create([.5 - (t[2] - .5), .5 - (t[3] - .5), .5 - (t[0] - .5), .5 - (t[1] - .5)])
        }, s.toArray = function() {
            return [this.p1.x, this.p1.y, this.p2.x, this.p2.y]
        }, s.toCSSString = function() {
            return "cubic-bezier(" + this.p1.x + ", " + this.p1.y + ", " + this.p2.x + ", " + this.p2.y + ")"
        }, s.toEasingFunction = function() {
            return r.apply(this, this.toArray()).easingFunction
        }, s._getStartX = function(t, e) {
            var n = t - 1,
                i = t * t,
                r = n * n,
                s = i * t;
            return s - 3 * i * n * e[1] + 3 * t * r * e[0]
        }, s._splitBezier = function(t, e, n) {
            var i = t - 1,
                r = t * t,
                s = i * i,
                o = r * t;
            return [o - 3 * r * i * e[1] + 3 * t * s * e[0], o - 3 * r * i * n[1] + 3 * t * s * n[0], r - 2 * t * i * e[1] + s * e[0], r - 2 * t * i * n[1] + s * n[0], t - i * e[1], t - i * n[1]]
        }, s._normalize = function(t) {
            return [(t[2] - t[0]) / (1 - t[0]), (t[3] - t[1]) / (1 - t[1]), (t[4] - t[0]) / (1 - t[0]), (t[5] - t[1]) / (1 - t[1])]
        }, e.exports = i
    }, {
        "@marcom/ac-easing": 121
    }],
    167: [function(t, e, n) {
        "use strict";

        function i() {
            this._instances = {}
        }
        var r = t("./BezierCurveCss"),
            s = i.prototype;
        s.create = function(t) {
            var e;
            if (e = "string" == typeof t ? t.replace(/ /g, "") : "cubic-bezier(" + t.join(",") + ")", void 0 === this._instances[e]) {
                if ("string" == typeof t) {
                    t = t.match(/\d*\.?\d+/g);
                    for (var n = t.length; n--;) t[n] = Number(t[n])
                }
                this._instances[e] = new r(t, this)
            }
            return this._instances[e]
        }, e.exports = new i
    }, {
        "./BezierCurveCss": 166
    }],
    168: [function(t, e, n) {
        "use strict";
        "undefined" == typeof window.Float32Array && (window.Float32Array = function() {})
    }, {}],
    169: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            this._transform = t;
            var i, r, o;
            for (o in n) n.hasOwnProperty(o) && "function" == typeof this._transform[o] && (i = s(n[o]), r = "%" === i.unit ? this._convertPercentToPixelValue(o, i.value, e) : i.value, this._transform[o].call(this._transform, r))
        }
        var r = t("@marcom/ac-dom-metrics/getDimensions"),
            s = t("./splitUnits"),
            o = {
                translateX: "width",
                translateY: "height"
            },
            a = i.prototype;
        a._convertPercentToPixelValue = function(t, e, n) {
            t = o[t];
            var i = r(n);
            return i[t] ? (e *= .01, i[t] * e) : e
        }, a.toArray = function() {
            return this._transform.toArray()
        }, a.toCSSString = function() {
            return this._transform.toCSSString()
        }, e.exports = i
    }, {
        "./splitUnits": 175,
        "@marcom/ac-dom-metrics/getDimensions": 42
    }],
    170: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e, n, i = {};
            for (n in t) t.hasOwnProperty(n) && null !== t[n] && (t[n].isColor ? t[n].isRgb ? i[n] = "rgb(" + Math.round(t[n].r) + ", " + Math.round(t[n].g) + ", " + Math.round(t[n].b) + ")" : t[n].isRgba && (i[n] = "rgba(" + Math.round(t[n].r) + ", " + Math.round(t[n].g) + ", " + Math.round(t[n].b) + ", " + t[n].a + ")") : "transform" === n ? (e = 6 === t[n].length ? "matrix" : "matrix3d", i[n] = e + "(" + t[n].join(",") + ")") : t[n].unit ? i[n] = t[n].value + t[n].unit : i[n] = t[n].value);
            return i
        }
    }, {}],
    171: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-styles/getStyle"),
            r = t("@marcom/ac-object/clone"),
            s = t("./splitUnits"),
            o = t("./toCamCase"),
            a = t("@marcom/ac-color").Color,
            c = t("@marcom/ac-feature/cssPropertyAvailable"),
            l = t("@marcom/ac-transform").Transform,
            h = t("./TransformMatrix"),
            u = function(t) {
                return a.isRgba(t) ? (t = new a(t).rgbaObject(), t.isRgba = !0) : (t = new a(t).rgbObject(), t.isRgb = !0), t.isColor = !0, t
            },
            f = function(t) {
                t.isRgb && (t.isRgb = !1, t.isRgba = !0, t.a = 1)
            },
            d = function(t, e, n) {
                (t.isRgba || e.isRgba || n.isRgba) && (f(t), f(e), f(n))
            },
            m = function(t) {
                return [t[0], t[1], 0, 0, t[2], t[3], 0, 0, 0, 0, 1, 0, t[4], t[5], 0, 1]
            },
            p = function(t, e, n) {
                16 !== t.transform.length && 16 !== e.transform.length && 16 !== n.transform.length || (6 === t.transform.length && (t.transform = m(t.transform)), 6 === e.transform.length && (e.transform = m(e.transform)), 6 === n.transform.length && (n.transform = m(n.transform)))
            };
        e.exports = function(t, e, n) {
            var f = {};
            e = r(e, !0), n = r(n, !0);
            var m, v, g, _, y, b = c("transform");
            for (y in e) e.hasOwnProperty(y) && null !== e[y] && ("transform" === y ? (b && (v = new l, m = i(t, "transform").transform || "none", v.setMatrixValue(m), g = new h(new l, t, e[y])), g && g.toCSSString() !== v.toCSSString() ? (_ = new h(n[y] ? new l : v.clone(), t, n[y]), f[y] = v.toArray(), e[y] = g.toArray(), n[y] = _.toArray()) : (f[y] = null, e[y] = null)) : (m = i(t, y)[o(y)] || n[y], a.isColor(m) ? (f[y] = u(m), n[y] = void 0 !== n[y] ? u(n[y]) : r(f[y], !0), e[y] = u(e[y])) : (f[y] = s(m), n[y] = void 0 !== n[y] ? s(n[y]) : r(f[y], !0), e[y] = s(e[y]))));
            for (y in n) !n.hasOwnProperty(y) || null === n[y] || void 0 !== e[y] && null !== e[y] || ("transform" === y ? (b && (v = new l, v.setMatrixValue(getComputedStyle(t).transform || getComputedStyle(t).webkitTransform || "none"), _ = new h(new l, t, n[y])), _ && _.toCSSString() !== v.toCSSString() ? (g = new h(v.clone()), f[y] = v.toArray(), e[y] = g.toArray(), n[y] = _.toArray()) : (f[y] = null, e[y] = null, n[y] = null)) : (m = i(t, y)[o(y)], a.isColor(m) ? (f[y] = u(m), e[y] = r(f[y], !0), n[y] = u(n[y])) : (f[y] = s(m), n[y] = s(n[y]), e[y] = r(f[y], !0)))), f[y] && f[y].isColor && d(f[y], n[y], e[y]);
            return f.transform && p(f, n, e), {
                target: f,
                propsTo: e,
                propsFrom: n
            }
        }
    }, {
        "./TransformMatrix": 169,
        "./splitUnits": 175,
        "./toCamCase": 176,
        "@marcom/ac-color": 101,
        "@marcom/ac-dom-styles/getStyle": 53,
        "@marcom/ac-feature/cssPropertyAvailable": 208,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-transform": 155
    }],
    172: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            if (t.transitionProperty) {
                for (var e = "", n = t.transitionProperty.split(", "), i = t.transitionDuration.split(", "), r = t.transitionTimingFunction.replace(/\d+[,]+[\s]/gi, function(t) {
                        return t.substr(0, t.length - 1)
                    }).split(", "), s = t.transitionDelay.split(", "), o = n.length; o--;) e += n[o] + " " + i[o] + " " + r[o] + " " + s[o] + ", ";
                return e.substr(0, e.length - 2)
            }
            return !1
        }
    }, {}],
    173: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return "string" == typeof t && "cubic-bezier(" === t.substr(0, 13)
        }
    }, {}],
    174: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-styles/setStyle"),
            r = t("@marcom/ac-dom-styles/getStyle"),
            s = t("./getShorthandTransition");
        e.exports = function(t, e) {
            var n = r(t, "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay");
            if (n = n.transition || s(n), n && n.length) {
                n = n.split(",");
                for (var o, a = 0, c = n.length; c--;) o = n[c].trim().split(" ")[0], void 0 !== e[o] && (n.splice(c, 1), ++a);
                a && (0 === n.length && (n = ["all"]), i(t, {
                    transition: n.join(",").trim()
                }))
            }
        }
    }, {
        "./getShorthandTransition": 172,
        "@marcom/ac-dom-styles/getStyle": 53,
        "@marcom/ac-dom-styles/setStyle": 66
    }],
    175: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            if (t = String(t), t.indexOf(" ") > -1) throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.");
            var e = /(\d*\.?\d*)(.*)/,
                n = 1;
            t && "-" === t.substr(0, 1) && (t = t.substr(1), n = -1);
            var i = String(t).match(e);
            return {
                value: Number(i[1]) * n,
                unit: i[2]
            }
        }
    }, {}],
    176: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e = function(t, e, n, i) {
                return 0 === n && "moz" !== i.substr(1, 3) ? e : e.toUpperCase()
            };
            return t.replace(/-(\w)/g, e)
        }
    }, {}],
    177: [function(t, e, n) {
        "use strict";
        var i;
        e.exports = function() {
            if (i) return i;
            var t, e = document.createElement("fakeelement"),
                n = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (t in n)
                if (void 0 !== e.style[t]) return i = n[t]
        }()
    }, {}],
    178: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-page-visibility").PageVisibilityManager;
        e.exports = function(t, e) {
            if (e) {
                var n = function(t) {
                        i.isHidden ? setTimeout(t, 16) : window.requestAnimationFrame(t)
                    },
                    r = 0,
                    s = function() {
                        r === e ? t.call(this) : (++r, n(s))
                    };
                s()
            } else t.call(this)
        }
    }, {
        "@marcom/ac-page-visibility": 131
    }],
    179: [function(t, e, n) {
        "use strict";

        function i(t) {
            t = t || {}, t.ease = t.ease || "linear", t.destroyOnComplete = !1, this.options = t, s.call(this, {
                t: 0
            }, 0, {
                t: 1
            }, t), this._itemList = new c
        }
        var r = t("@marcom/ac-object/create"),
            s = t("@marcom/ac-clip").Clip,
            o = t("./TimelineClip"),
            a = t("./TimelineCallback"),
            c = t("./TimelineItemList"),
            l = s.prototype,
            h = i.prototype = r(l);
        i.prototype.constructor = i, h._update = function(t) {
            l._update.call(this, t), this._render()
        }, h.progress = function(t) {
            return l.progress.call(this, t), void 0 !== t && this._render(), this._progress
        }, h._render = function() {
            if (0 !== this._itemList.length)
                for (var t = this._target.t * this._duration, e = this._itemList.head, n = e; n;) {
                    n = e.next;
                    var i = t - e.position;
                    e.currentTime(i), e = n
                }
        }, h.addClip = function(t, e) {
            e = void 0 === e ? this.duration() : e;
            var n = t._delay / 1e3;
            this._itemList.append(new o(t, e + n)), this._updateDuration()
        }, h.addCallback = function(t, e) {
            e = void 0 === e ? this.duration() : e, this._itemList.append(new a(t, e)), this._updateDuration()
        }, h.remove = function(t) {
            var e = this._itemList.getItem(t);
            e && (this._itemList.remove(e), this._updateDuration())
        }, h._updateDuration = function() {
            var t = this._itemList.head,
                e = t.position + t.duration();
            this._itemList.forEach(function(n) {
                var i = n.position + n.duration();
                i >= e && (t = n, e = i)
            }), this.duration(e)
        }, h.destroy = function() {
            for (var t = this._itemList.head; t;) {
                var e = t;
                t = e.next, this._itemList.remove(e)
            }
            return this._duration = 0, l.destroy.call(this)
        }, e.exports = i
    }, {
        "./TimelineCallback": 180,
        "./TimelineClip": 181,
        "./TimelineItemList": 182,
        "@marcom/ac-clip": 99,
        "@marcom/ac-object/create": 445
    }],
    180: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.callback = t, this._delay = 0, this.position = e, this._hasTriggered = !1, this.prev = null, this.next = null
        }
        var r = i.prototype;
        r.duration = function() {
            return 0
        }, r.currentTime = function(t) {
            return t >= 0 && !this._hasTriggered && (this.callback(), this._hasTriggered = !0), t < 0 && this._hasTriggered && (this.callback(), this._hasTriggered = !1), 0
        }, e.exports = i
    }, {}],
    181: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.clip = t, this.position = e, this.duration = this.clip.duration.bind(this.clip), this.lastProgress = -1, this.prev = null, this.next = null
        }
        var r = i.prototype;
        r.currentTime = function(t) {
            var e = Math.min(1, Math.max(0, t / this.clip._duration));
            return e !== e && (e = 1), this.lastProgress === e ? this.lastProgress : (0 !== this.lastProgress && 0 !== e && this.lastProgress !== -1 || this.clip._storeOnStart && this.clip._storeOnStart(this.clip), this.clip._playing = e * this.clip._duration === this.clip._duration, this.lastProgress = this.clip.progress(e), this.lastProgress)
        }, r.destroy = function() {
            this.clip.destroy(), this.prev = null, this.next = null, this.duration = null
        }, e.exports = i
    }, {}],
    182: [function(t, e, n) {
        "use strict";
        var i = t("./TimelineClip"),
            r = t("./TimelineCallback"),
            s = function() {
                this.head = null, this.tail = null, this.length = 0
            },
            o = s.prototype;
        o.append = function(t) {
            t.prev = null, t.next = null, this.tail ? (this.tail.next = t, t.prev = this.tail) : this.head = t, this.tail = t, this.length++
        }, o.remove = function(t) {
            t === this.head ? this.head = this.head.next : t === this.tail && (this.tail = this.tail.prev), t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.next = t.prev = null, null === this.head && (this.tail = null), this.length--
        }, o.getItem = function(t) {
            for (var e = this.head; e;) {
                var n = e;
                if (n instanceof i && n.clip === t || n instanceof r && n.callback === t) return n;
                e = n.next
            }
            return null
        }, o.forEach = function(t) {
            for (var e = 0, n = this.head; n;) {
                var i = n;
                t(i, e, this.length), n = i.next
            }
        }, o.destroy = function() {
            for (; this.head;) {
                var t = this.head;
                this.remove(t), t.destroy()
            }
        }, e.exports = s
    }, {
        "./TimelineCallback": 180,
        "./TimelineClip": 181
    }],
    183: [function(t, e, n) {
        "use strict";
        e.exports = {
            EventEmitterMicro: t("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }, {
        "./ac-event-emitter-micro/EventEmitterMicro": 184
    }],
    184: [function(t, e, n) {
        "use strict";

        function i() {
            this._events = {}
        }
        var r = i.prototype;
        r.on = function(t, e) {
            this._events[t] = this._events[t] || [], this._events[t].unshift(e)
        }, r.once = function(t, e) {
            function n(r) {
                i.off(t, n), void 0 !== r ? e(r) : e()
            }
            var i = this;
            this.on(t, n)
        }, r.off = function(t, e) {
            if (this.has(t)) {
                var n = this._events[t].indexOf(e);
                n !== -1 && this._events[t].splice(n, 1)
            }
        }, r.trigger = function(t, e) {
            if (this.has(t))
                for (var n = this._events[t].length - 1; n >= 0; n--) void 0 !== e ? this._events[t][n](e) : this._events[t][n]()
        }, r.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }, r.destroy = function() {
            for (var t in this._events) this._events[t] = null;
            this._events = null
        }, e.exports = i
    }, {}],
    185: [function(t, e, n) {
        "use strict";
        var i = t("./ac-browser/BrowserData"),
            r = /applewebkit/i,
            s = t("./ac-browser/IE"),
            o = i.create();
        o.isWebKit = function(t) {
            var e = t || window.navigator.userAgent;
            return !!e && !!r.test(e)
        }, o.lowerCaseUserAgent = navigator.userAgent.toLowerCase(), "IE" === o.name && (o.IE = {
            documentMode: s.getDocumentMode()
        }), e.exports = o
    }, {
        "./ac-browser/BrowserData": 186,
        "./ac-browser/IE": 187
    }],
    186: [function(t, e, n) {
        "use strict";

        function i() {}
        t("@marcom/ac-polyfills/Array/prototype.filter"), t("@marcom/ac-polyfills/Array/prototype.some");
        var r = t("./data");
        i.prototype = {
            __getBrowserVersion: function(t, e) {
                var n;
                if (t && e) {
                    var i = r.browser.filter(function(t) {
                        return t.identity === e
                    });
                    return i.some(function(i) {
                        var r = i.versionSearch || e,
                            s = t.indexOf(r);
                        if (s > -1) return n = parseFloat(t.substring(s + r.length + 1)), !0
                    }), n
                }
            },
            __getName: function(t) {
                return this.__getIdentityStringFromArray(t)
            },
            __getIdentity: function(t) {
                return t.string ? this.__matchSubString(t) : t.prop ? t.identity : void 0
            },
            __getIdentityStringFromArray: function(t) {
                for (var e, n = 0, i = t.length; n < i; n++)
                    if (e = this.__getIdentity(t[n])) return e
            },
            __getOS: function(t) {
                return this.__getIdentityStringFromArray(t)
            },
            __getOSVersion: function(t, e) {
                if (t && e) {
                    var n = r.os.filter(function(t) {
                            return t.identity === e
                        })[0],
                        i = n.versionSearch || e,
                        s = new RegExp(i + " ([\\d_\\.]+)", "i"),
                        o = t.match(s);
                    return null !== o ? o[1].replace(/_/g, ".") : void 0
                }
            },
            __matchSubString: function(t) {
                var e = t.subString;
                if (e) {
                    var n = e.test ? !!e.test(t.string) : t.string.indexOf(e) > -1;
                    if (n) return t.identity
                }
            }
        }, i.create = function() {
            var t = new i,
                e = {};
            return e.name = t.__getName(r.browser), e.version = t.__getBrowserVersion(r.versionString, e.name), e.os = t.__getOS(r.os), e.osVersion = t.__getOSVersion(r.versionString, e.os), e
        }, e.exports = i
    }, {
        "./data": 188,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.some": void 0
    }],
    187: [function(t, e, n) {
        "use strict";
        e.exports = {
            getDocumentMode: function() {
                var t;
                return document.documentMode ? t = parseInt(document.documentMode, 10) : (t = 5, document.compatMode && "CSS1Compat" === document.compatMode && (t = 7)), t
            }
        }
    }, {}],
    188: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: [{
                string: window.navigator.userAgent,
                subString: "Edge",
                identity: "Edge"
            }, {
                string: window.navigator.userAgent,
                subString: /silk/i,
                identity: "Silk"
            }, {
                string: window.navigator.userAgent,
                subString: /(android).*(version\/[0-9+].[0-9+])/i,
                identity: "Android"
            }, {
                string: window.navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            }, {
                string: window.navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            }, {
                string: window.navigator.userAgent,
                subString: /mobile\/[^\s]*\ssafari\//i,
                identity: "Safari Mobile",
                versionSearch: "Version"
            }, {
                string: window.navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            }, {
                prop: window.opera,
                identity: "Opera",
                versionSearch: "Version"
            }, {
                string: window.navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            }, {
                string: window.navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            }, {
                string: window.navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            }, {
                string: window.navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            }, {
                string: window.navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            }, {
                string: window.navigator.userAgent,
                subString: "MSIE",
                identity: "IE",
                versionSearch: "MSIE"
            }, {
                string: window.navigator.userAgent,
                subString: "Trident",
                identity: "IE",
                versionSearch: "rv"
            }, {
                string: window.navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            }, {
                string: window.navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }],
            os: [{
                string: window.navigator.platform,
                subString: "Win",
                identity: "Windows",
                versionSearch: "Windows NT"
            }, {
                string: window.navigator.platform,
                subString: "Mac",
                identity: "OS X"
            }, {
                string: window.navigator.userAgent,
                subString: "iPhone",
                identity: "iOS",
                versionSearch: "iPhone OS"
            }, {
                string: window.navigator.userAgent,
                subString: "iPad",
                identity: "iOS",
                versionSearch: "CPU OS"
            }, {
                string: window.navigator.userAgent,
                subString: /android/i,
                identity: "Android"
            }, {
                string: window.navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }],
            versionString: window.navigator.userAgent || window.navigator.appVersion || void 0
        }
    }, {}],
    189: [function(t, e, n) {
        "use strict";
        var i = function() {
            var t, e = "";
            for (t = 0; t < arguments.length; t++) t > 0 && (e += ","), e += arguments[t];
            return e
        };
        e.exports = function(t, e) {
            e = e || i;
            var n = function() {
                var i = arguments,
                    r = e.apply(this, i);
                return r in n.cache || (n.cache[r] = t.apply(this, i)), n.cache[r]
            };
            return n.cache = {}, n
        }
    }, {}],
    190: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e;
            return function() {
                return "undefined" == typeof e && (e = t.apply(this, arguments)), e
            }
        }
    }, {}],
    191: [function(t, e, n) {
        arguments[4][27][0].apply(n, arguments)
    }, {
        "./shared/camelCasedEventTypes": 194,
        "./shared/prefixHelper": 196,
        "./shared/windowFallbackEventTypes": 199,
        "./utils/eventTypeAvailable": 200,
        dup: 27
    }],
    192: [function(t, e, n) {
        arguments[4][57][0].apply(n, arguments)
    }, {
        "./shared/getStyleTestElement": 195,
        "./shared/prefixHelper": 196,
        "./shared/stylePropertyCache": 197,
        "./utils/toCSS": 201,
        "./utils/toDOM": 202,
        dup: 57
    }],
    193: [function(t, e, n) {
        arguments[4][58][0].apply(n, arguments)
    }, {
        "./getStyleProperty": 192,
        "./shared/prefixHelper": 196,
        "./shared/stylePropertyCache": 197,
        "./shared/styleValueAvailable": 198,
        dup: 58
    }],
    194: [function(t, e, n) {
        arguments[4][28][0].apply(n, arguments)
    }, {
        dup: 28
    }],
    195: [function(t, e, n) {
        arguments[4][59][0].apply(n, arguments)
    }, {
        dup: 59
    }],
    196: [function(t, e, n) {
        arguments[4][29][0].apply(n, arguments);
    }, {
        dup: 29
    }],
    197: [function(t, e, n) {
        arguments[4][61][0].apply(n, arguments)
    }, {
        dup: 61
    }],
    198: [function(t, e, n) {
        arguments[4][62][0].apply(n, arguments)
    }, {
        "./getStyleTestElement": 195,
        "./stylePropertyCache": 197,
        dup: 62
    }],
    199: [function(t, e, n) {
        arguments[4][30][0].apply(n, arguments)
    }, {
        dup: 30
    }],
    200: [function(t, e, n) {
        arguments[4][31][0].apply(n, arguments)
    }, {
        dup: 31
    }],
    201: [function(t, e, n) {
        arguments[4][64][0].apply(n, arguments)
    }, {
        dup: 64
    }],
    202: [function(t, e, n) {
        arguments[4][65][0].apply(n, arguments)
    }, {
        dup: 65
    }],
    203: [function(t, e, n) {
        "use strict";
        e.exports = {
            canvasAvailable: t("./canvasAvailable"),
            continuousScrollEventsAvailable: t("./continuousScrollEventsAvailable"),
            cookiesAvailable: t("./cookiesAvailable"),
            cssLinearGradientAvailable: t("./cssLinearGradientAvailable"),
            cssPropertyAvailable: t("./cssPropertyAvailable"),
            cssViewportUnitsAvailable: t("./cssViewportUnitsAvailable"),
            elementAttributeAvailable: t("./elementAttributeAvailable"),
            eventTypeAvailable: t("./eventTypeAvailable"),
            isDesktop: t("./isDesktop"),
            isHandheld: t("./isHandheld"),
            isRetina: t("./isRetina"),
            isTablet: t("./isTablet"),
            localStorageAvailable: t("./localStorageAvailable"),
            mediaElementsAvailable: t("./mediaElementsAvailable"),
            mediaQueriesAvailable: t("./mediaQueriesAvailable"),
            sessionStorageAvailable: t("./sessionStorageAvailable"),
            svgAvailable: t("./svgAvailable"),
            threeDTransformsAvailable: t("./threeDTransformsAvailable"),
            touchAvailable: t("./touchAvailable"),
            webGLAvailable: t("./webGLAvailable")
        }
    }, {
        "./canvasAvailable": 204,
        "./continuousScrollEventsAvailable": 205,
        "./cookiesAvailable": 206,
        "./cssLinearGradientAvailable": 207,
        "./cssPropertyAvailable": 208,
        "./cssViewportUnitsAvailable": 209,
        "./elementAttributeAvailable": 210,
        "./eventTypeAvailable": 211,
        "./isDesktop": 213,
        "./isHandheld": 214,
        "./isRetina": 215,
        "./isTablet": 216,
        "./localStorageAvailable": 217,
        "./mediaElementsAvailable": 218,
        "./mediaQueriesAvailable": 219,
        "./sessionStorageAvailable": 220,
        "./svgAvailable": 221,
        "./threeDTransformsAvailable": 222,
        "./touchAvailable": 223,
        "./webGLAvailable": 224
    }],
    204: [function(t, e, n) {
        "use strict";
        var i = t("./helpers/globals"),
            r = t("@marcom/ac-function/once"),
            s = function() {
                var t = i.getDocument(),
                    e = t.createElement("canvas");
                return !("function" != typeof e.getContext || !e.getContext("2d"))
            };
        e.exports = r(s), e.exports.original = s
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    205: [function(t, e, n) {
        "use strict";

        function i() {
            return !s() || "iOS" === r.os && r.version >= 8 || "Chrome" === r.name
        }
        var r = t("@marcom/ac-browser"),
            s = t("./touchAvailable").original,
            o = t("@marcom/ac-function/once");
        e.exports = o(i), e.exports.original = i
    }, {
        "./touchAvailable": 223,
        "@marcom/ac-browser": 185,
        "@marcom/ac-function/once": 190
    }],
    206: [function(t, e, n) {
        "use strict";

        function i() {
            var t = !1,
                e = r.getDocument(),
                n = r.getNavigator();
            try {
                "cookie" in e && n.cookieEnabled && (e.cookie = "ac_feature_cookie=1", t = e.cookie.indexOf("ac_feature_cookie") !== -1, e.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")
            } catch (i) {}
            return t
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    207: [function(t, e, n) {
        "use strict";

        function i() {
            var t = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
            return t.some(function(t) {
                return !!r("background-image", t)
            })
        }
        var r = t("@marcom/ac-prefixer/getStyleValue"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "@marcom/ac-function/once": 190,
        "@marcom/ac-prefixer/getStyleValue": 193
    }],
    208: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            return "undefined" != typeof e ? !!r(t, e) : !!s(t)
        }
        var r = t("@marcom/ac-prefixer/getStyleValue"),
            s = t("@marcom/ac-prefixer/getStyleProperty"),
            o = t("@marcom/ac-function/memoize");
        e.exports = o(i), e.exports.original = i
    }, {
        "@marcom/ac-function/memoize": 189,
        "@marcom/ac-prefixer/getStyleProperty": 192,
        "@marcom/ac-prefixer/getStyleValue": 193
    }],
    209: [function(t, e, n) {
        "use strict";

        function i() {
            return !!r("margin", "1vw 1vh")
        }
        var r = t("@marcom/ac-prefixer/getStyleValue"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "@marcom/ac-function/once": 190,
        "@marcom/ac-prefixer/getStyleValue": 193
    }],
    210: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            var n, i = r.getDocument();
            return e = e || "div", n = i.createElement(e), t in n
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/memoize");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/memoize": 189
    }],
    211: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            return !!r(t, e)
        }
        var r = t("@marcom/ac-prefixer/getEventType"),
            s = t("@marcom/ac-function/memoize");
        e.exports = s(i), e.exports.original = i
    }, {
        "@marcom/ac-function/memoize": 189,
        "@marcom/ac-prefixer/getEventType": 191
    }],
    212: [function(t, e, n) {
        "use strict";
        e.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }, {}],
    213: [function(t, e, n) {
        "use strict";

        function i() {
            var t = s.getWindow();
            return !r() && !t.orientation
        }
        var r = t("./touchAvailable").original,
            s = t("./helpers/globals"),
            o = t("@marcom/ac-function/once");
        e.exports = o(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "./touchAvailable": 223,
        "@marcom/ac-function/once": 190
    }],
    214: [function(t, e, n) {
        "use strict";

        function i() {
            return !r() && !s()
        }
        var r = t("./isDesktop").original,
            s = t("./isTablet").original,
            o = t("@marcom/ac-function/once");
        e.exports = o(i), e.exports.original = i
    }, {
        "./isDesktop": 213,
        "./isTablet": 216,
        "@marcom/ac-function/once": 190
    }],
    215: [function(t, e, n) {
        "use strict";
        var i = t("./helpers/globals");
        e.exports = function() {
            var t = i.getWindow();
            return "devicePixelRatio" in t && t.devicePixelRatio >= 1.5
        }
    }, {
        "./helpers/globals": 212
    }],
    216: [function(t, e, n) {
        "use strict";

        function i() {
            var t = s.getWindow(),
                e = t.screen.width;
            return t.orientation && t.screen.height < e && (e = t.screen.height), !r() && e >= a
        }
        var r = t("./isDesktop").original,
            s = t("./helpers/globals"),
            o = t("@marcom/ac-function/once"),
            a = 600;
        e.exports = o(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "./isDesktop": 213,
        "@marcom/ac-function/once": 190
    }],
    217: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getWindow(),
                e = !1;
            try {
                e = !(!t.localStorage || null === t.localStorage.non_existent)
            } catch (n) {}
            return e
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    218: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getWindow();
            return "HTMLMediaElement" in t
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    219: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getWindow(),
                e = t.matchMedia("only all");
            return !(!e || !e.matches)
        }
        t("@marcom/ac-polyfills/matchMedia");
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190,
        "@marcom/ac-polyfills/matchMedia": void 0
    }],
    220: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getWindow(),
                e = !1;
            try {
                "sessionStorage" in t && "function" == typeof t.sessionStorage.setItem && (t.sessionStorage.setItem("ac_feature", "test"), e = !0, t.sessionStorage.removeItem("ac_feature", "test"))
            } catch (n) {}
            return e
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    221: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getDocument();
            return !!t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    222: [function(t, e, n) {
        "use strict";

        function i() {
            return !(!r("perspective", "1px") || !r("transform", "translateZ(0)"))
        }
        var r = t("@marcom/ac-prefixer/getStyleValue"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "@marcom/ac-function/once": 190,
        "@marcom/ac-prefixer/getStyleValue": 193
    }],
    223: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getWindow(),
                e = r.getDocument(),
                n = r.getNavigator();
            return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || n.maxTouchPoints > 0 || n.msMaxTouchPoints > 0)
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    224: [function(t, e, n) {
        "use strict";

        function i() {
            var t = r.getDocument(),
                e = t.createElement("canvas");
            return "function" == typeof e.getContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
        }
        var r = t("./helpers/globals"),
            s = t("@marcom/ac-function/once");
        e.exports = s(i), e.exports.original = i
    }, {
        "./helpers/globals": 212,
        "@marcom/ac-function/once": 190
    }],
    225: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e) {
            var n = null;
            return function() {
                null === n && (t.apply(this, arguments), n = setTimeout(function() {
                    n = null
                }, e))
            }
        }
    }, {}],
    226: [function(t, e, n) {
        "use strict";

        function i() {
            this._keysDown = {}, this._DOMKeyDown = this._DOMKeyDown.bind(this), this._DOMKeyUp = this._DOMKeyUp.bind(this), s(document, l, this._DOMKeyDown, !0), s(document, h, this._DOMKeyUp, !0), r.call(this)
        }
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-dom-events/utils/addEventListener"),
            o = t("@marcom/ac-dom-events/utils/removeEventListener"),
            a = t("@marcom/ac-object/create"),
            c = t("@marcom/ac-keyboard/internal/KeyEvent"),
            l = "keydown",
            h = "keyup",
            u = i.prototype = a(r.prototype);
        u.onDown = function(t, e) {
            return this.on(l + ":" + t, e)
        }, u.onceDown = function(t, e) {
            return this.once(l + ":" + t, e)
        }, u.offDown = function(t, e) {
            return this.off(l + ":" + t, e)
        }, u.onUp = function(t, e) {
            return this.on(h + ":" + t, e)
        }, u.onceUp = function(t, e) {
            return this.once(h + ":" + t, e)
        }, u.offUp = function(t, e) {
            return this.off(h + ":" + t, e)
        }, u.isDown = function(t) {
            return t += "", this._keysDown[t] || !1
        }, u.isUp = function(t) {
            return !this.isDown(t)
        }, u.destroy = function() {
            return this._keysDown = null, o(document, l, this._DOMKeyDown), o(document, h, this._DOMKeyUp), r.prototype.destroy.call(this), this
        }, u._DOMKeyDown = function(t) {
            var e = this._normalizeKeyboardEvent(t),
                n = e.keyCode += "";
            this._trackKeyDown(n), this.trigger(l + ":" + n, e)
        }, u._DOMKeyUp = function(t) {
            var e = this._normalizeKeyboardEvent(t),
                n = e.keyCode += "";
            this._trackKeyUp(n), this.trigger(h + ":" + n, e)
        }, u._normalizeKeyboardEvent = function(t) {
            return new c(t)
        }, u._trackKeyUp = function(t) {
            this._keysDown[t] && (this._keysDown[t] = !1)
        }, u._trackKeyDown = function(t) {
            this._keysDown[t] || (this._keysDown[t] = !0)
        }, e.exports = i
    }, {
        "@marcom/ac-dom-events/utils/addEventListener": 38,
        "@marcom/ac-dom-events/utils/removeEventListener": 40,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-keyboard/internal/KeyEvent": 228,
        "@marcom/ac-object/create": 445
    }],
    227: [function(t, e, n) {
        "use strict";
        var i = t("./Keyboard");
        e.exports = new i
    }, {
        "./Keyboard": 226
    }],
    228: [function(t, e, n) {
        function i(t) {
            this.originalEvent = t;
            var e;
            for (e in t) r.indexOf(e) === -1 && "function" != typeof t[e] && (this[e] = t[e]);
            this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation
        }
        var r = ["keyLocation"];
        i.prototype = {
            preventDefault: function() {
                return "function" != typeof this.originalEvent.preventDefault ? void(this.originalEvent.returnValue = !1) : this.originalEvent.preventDefault()
            },
            stopPropagation: function() {
                return this.originalEvent.stopPropagation()
            }
        }, e.exports = i
    }, {}],
    229: [function(t, e, n) {
        "use strict";
        e.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTRAPHE: 222,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191
        }
    }, {}],
    230: [function(t, e, n) {
        arguments[4][131][0].apply(n, arguments)
    }, {
        "./ac-page-visibility/PageVisibilityManager": 231,
        dup: 131
    }],
    231: [function(t, e, n) {
        arguments[4][132][0].apply(n, arguments)
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/create": 445,
        dup: 132
    }],
    232: [function(t, e, n) {
        arguments[4][185][0].apply(n, arguments)
    }, {
        "./ac-browser/BrowserData": 233,
        "./ac-browser/IE": 234,
        dup: 185
    }],
    233: [function(t, e, n) {
        arguments[4][186][0].apply(n, arguments)
    }, {
        "./data": 235,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.some": void 0,
        dup: 186
    }],
    234: [function(t, e, n) {
        arguments[4][187][0].apply(n, arguments)
    }, {
        dup: 187
    }],
    235: [function(t, e, n) {
        arguments[4][188][0].apply(n, arguments)
    }, {
        dup: 188
    }],
    236: [function(t, e, n) {
        "use strict";
        e.exports = {
            PointerTracker: t("./ac-pointer-tracker/PointerTracker")
        }
    }, {
        "./ac-pointer-tracker/PointerTracker": 237
    }],
    237: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            this._el = t, n = n || {}, this._lockVertical = n.lockVertical !== !1, this._swipeThreshold = n.swipeThreshold || i.DEFAULT_SWIPE_THRESHOLD, this._pointerEvents = e || {}, this._pointerEvents.down = this._pointerEvents.down || (l ? i.TOUCH_EVENTS.down : i.MOUSE_EVENTS.down), this._pointerEvents.up = this._pointerEvents.up || (l ? i.TOUCH_EVENTS.up : i.MOUSE_EVENTS.up), this._pointerEvents.out = this._pointerEvents.out || (l ? i.TOUCH_EVENTS.out : i.MOUSE_EVENTS.out), this._pointerEvents.move = this._pointerEvents.move || (l ? i.TOUCH_EVENTS.move : i.MOUSE_EVENTS.move), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseMove = this._onMouseMove.bind(this), h.call(this), s.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown), this._setCursorStyle("grab")
        }
        var r = t("@marcom/ac-browser"),
            s = t("@marcom/ac-dom-events"),
            o = t("@marcom/ac-dom-styles"),
            a = t("@marcom/ac-object/create"),
            c = "Android" === r.os || "IE" === r.name && r.version <= 8,
            l = t("@marcom/ac-feature/touchAvailable")(),
            h = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        i.START = "start", i.END = "end", i.UPDATE = "update", i.SWIPE_RIGHT = "swiperight", i.SWIPE_LEFT = "swipeleft", i.DEFAULT_SWIPE_THRESHOLD = c ? 2 : 8, i.TOUCH_EVENTS = {
            down: "touchstart",
            up: "touchend",
            out: "mouseout",
            move: "touchmove"
        }, i.MOUSE_EVENTS = {
            down: "mousedown",
            up: "mouseup",
            out: "mouseout",
            move: "mousemove"
        };
        var u = h.prototype,
            f = i.prototype = a(u);
        f.destroy = function() {
            return this._isDragging && this._onMouseUp(), s.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown), this._setCursorStyle(null), this._el = null, this._pointerEvents = null, this._lockVertical = null, this._swipeThreshold = null, this._checkForTouchScrollY = null, this._isDragging = null, this._currentX = null, this._currentY = null, this._velocityX = null, this._velocityY = null, this._lastX = null, this._lastY = null, u.destroy.call(this)
        }, f._onMouseDown = function(t) {
            if (!this._isDragging) {
                this._isDragging = !0, this._setCursorStyle("grabbing"), s.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown), s.addEventListener(document.body, this._pointerEvents.up, this._onMouseUp), s.addEventListener(document, this._pointerEvents.out, this._onMouseOut), s.addEventListener(document.body, this._pointerEvents.move, this._onMouseMove), this._checkForTouchScrollY = this._lockVertical && !(!t.touches || !t.touches[0]), this._checkForTouchScrollY && (this._lastY = this._getTouchY(t));
                var e = this._storeAndGetValues(t);
                this._velocityX = e.diffX = 0, this._velocityY = e.diffY = 0, this.trigger(i.START, e)
            }
        }, f._onMouseUp = function(t) {
            if (this._isDragging) {
                this._isDragging = !1, this._setCursorStyle("grab"), s.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown), s.removeEventListener(document.body, this._pointerEvents.up, this._onMouseUp), s.removeEventListener(document, this._pointerEvents.out, this._onMouseOut), s.removeEventListener(document.body, this._pointerEvents.move, this._onMouseMove);
                var e;
                this._checkForTouchScrollY ? e = null : this._velocityX > this._swipeThreshold ? e = i.SWIPE_LEFT : this._velocityX * -1 > this._swipeThreshold && (e = i.SWIPE_RIGHT);
                var n = this._storeAndGetValues(t);
                n.swipe = e, this.trigger(i.END, n), e && this.trigger(e, n)
            }
        }, f._onMouseOut = function(t) {
            t = t ? t : window.event;
            var e = t.relatedTarget || t.toElement;
            e && "HTML" !== e.nodeName || this._onMouseUp(t)
        }, f._onMouseMove = function(t) {
            return this._checkForTouchScrollY && this._isVerticalTouchMove(t) ? void this._onMouseUp(t) : (s.preventDefault(t), void this.trigger(i.UPDATE, this._storeAndGetValues(t)))
        }, f._storeAndGetValues = function(t) {
            if (void 0 === t) return {};
            this._currentX = this._getPointerX(t), this._currentY = this._getPointerY(t), this._velocityX = this._lastX - this._currentX, this._velocityY = this._lastY - this._currentY;
            var e = {
                x: this._currentX,
                y: this._currentY,
                lastX: this._lastX,
                lastY: this._lastY,
                diffX: this._velocityX,
                diffY: this._velocityY,
                interactionEvent: t
            };
            return this._lastX = this._currentX, this._lastY = this._currentY, e
        }, f._getPointerX = function(t) {
            return t.pageX ? t.pageX : t.touches && t.touches[0] ? t.touches[0].pageX : t.clientX ? t.clientX : 0
        }, f._getPointerY = function(t) {
            return t.pageY ? t.pageY : t.touches && t.touches[0] ? t.touches[0].pageY : t.clientY ? t.clientY : 0
        }, f._getTouchX = function(t) {
            return t.touches && t.touches[0] ? t.touches[0].pageX : 0
        }, f._getTouchY = function(t) {
            return t.touches && t.touches[0] ? t.touches[0].pageY : 0
        }, f._isVerticalTouchMove = function(t) {
            var e = this._getTouchX(t),
                n = this._getTouchY(t),
                i = Math.abs(e - this._lastX),
                r = Math.abs(n - this._lastY);
            return this._checkForTouchScrollY = i < r, this._checkForTouchScrollY
        }, f._setCursorStyle = function(t) {
            o.setStyle(this._el, {
                cursor: t
            })
        }, e.exports = i
    }, {
        "@marcom/ac-browser": 232,
        "@marcom/ac-dom-events": 26,
        "@marcom/ac-dom-styles": 54,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-feature/touchAvailable": 223,
        "@marcom/ac-object/create": 445
    }],
    238: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-eclipse").Clip,
            r = t("@marcom/ac-feature/cssPropertyAvailable");
        e.exports = function(t, e, n, s, o) {
            if (r("opacity")) {
                if (o = o || {}, s) return o.propsFrom = o.propsFrom || {}, o.propsFrom.opacity = e, i.to(t, s, {
                    opacity: n
                }, o);
                t.style.opacity = n, "function" == typeof o.onStart && o.onStart(), "function" == typeof o.onComplete && o.onComplete()
            } else t.style.visibility = n ? "visible" : "hidden", "function" == typeof o.onStart && o.onStart(), "function" == typeof o.onComplete && o.onComplete()
        }
    }, {
        "@marcom/ac-eclipse": 162,
        "@marcom/ac-feature/cssPropertyAvailable": 208
    }],
    239: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-eclipse").Clip,
            r = t("@marcom/ac-feature/cssPropertyAvailable");
        e.exports = function(t, e, n) {
            if (n = n || {}, r("opacity")) {
                if (e) return i.to(t, e, {
                    opacity: 1
                }, n);
                t.style.opacity = 1, "function" == typeof n.onStart && n.onStart(), "function" == typeof n.onComplete && n.onComplete()
            } else t.style.visibility = "visible", "function" == typeof n.onStart && n.onStart(), "function" == typeof n.onComplete && n.onComplete()
        }
    }, {
        "@marcom/ac-eclipse": 162,
        "@marcom/ac-feature/cssPropertyAvailable": 208
    }],
    240: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-eclipse").Clip,
            r = t("@marcom/ac-feature/cssPropertyAvailable");
        e.exports = function(t, e, n) {
            if (n = n || {}, r("opacity")) {
                if (e) return i.to(t, e, {
                    opacity: 0
                }, n);
                t.style.opacity = 0, "function" == typeof n.onStart && n.onStart(), "function" == typeof n.onComplete && n.onComplete()
            } else t.style.visibility = "hidden", "function" == typeof n.onStart && n.onStart(), "function" == typeof n.onComplete && n.onComplete()
        }
    }, {
        "@marcom/ac-eclipse": 162,
        "@marcom/ac-feature/cssPropertyAvailable": 208
    }],
    241: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-eclipse").Clip,
            r = t("@marcom/ac-dom-styles"),
            s = t("@marcom/ac-feature/cssPropertyAvailable");
        e.exports = function(t, e, n, o, a) {
            a = a || {};
            var c;
            return c = s("transition") ? {
                transform: {
                    translateX: e + "px",
                    translateY: n + "px"
                }
            } : {
                left: e + "px",
                top: n + "px"
            }, o ? i.to(t, o, c, a) : (r.setStyle(t, c), "function" == typeof a.onStart && a.onStart(), "function" == typeof a.onComplete && a.onComplete(), void 0)
        }
    }, {
        "@marcom/ac-dom-styles": 54,
        "@marcom/ac-eclipse": 162,
        "@marcom/ac-feature/cssPropertyAvailable": 208
    }],
    242: [function(t, e, n) {
        "use strict";
        var i = (t("@marcom/ac-feature/cssPropertyAvailable"), t("./move"));
        e.exports = function(t, e, n, r) {
            return i(t, e, 0, n, r)
        }
    }, {
        "./move": 241,
        "@marcom/ac-feature/cssPropertyAvailable": 208
    }],
    243: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-eclipse").Clip;
        e.exports = function(t, e, n, r, s) {
            s = s || {};
            var o, a, c = t === window;
            c ? (o = t.scrollX, a = t.scrollY) : (o = t.scrollLeft, a = t.scrollTop);
            var l = {
                    x: o,
                    y: a
                },
                h = {
                    x: e,
                    y: n
                };
            if ("function" == typeof s.onDraw) var u = s.onDraw;
            var f = function(e) {
                c ? t.scrollTo(l.x, l.y) : (t.scrollLeft = l.x, t.scrollTop = l.y), u && u.call(this, e)
            };
            return s.onDraw = f, i.to(l, r, h, s)
        }
    }, {
        "@marcom/ac-eclipse": 162
    }],
    244: [function(t, e, n) {
        "use strict";
        var i = t("./scroll");
        e.exports = function(t, e, n, r) {
            var s, o = t === window;
            return s = o ? t.scrollY : t.scrollTop, i(t, e, s, n, r)
        }
    }, {
        "./scroll": 243
    }],
    245: [function(t, e, n) {
        "use strict";

        function i(t) {
            t = t || {}, this._wrapAround = t.wrapAround || !1, this._itemType = t.itemType || c, this._items = [], this._itemsIdLookup = {}, this.showNext = this.showNext.bind(this), this.showPrevious = this.showPrevious.bind(this), this._update = this._update.bind(this), this._updateItems = this._updateItems.bind(this), a.call(this), i._add(this, t.analyticsOptions)
        }
        var r = t("@marcom/ac-classlist"),
            s = t("./singletons/analyticsManager"),
            o = t("@marcom/ac-object/create"),
            a = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            c = t("./Item");
        i.FADE = "fade", i.FADE_SELECTOR = "[data-ac-gallery-fade]", i.SLIDE = "slide", i.SLIDE_SELECTOR = "[data-ac-gallery-slide]", i.UPDATE = "update", i.UPDATE_COMPLETE = "update:complete";
        var l = a.prototype,
            h = i.prototype = o(l);
        h.addItem = function(t, e) {
            if (t.nodeType) t = new this._itemType(t);
            else if (this._items.indexOf(t) > -1) return t;
            return "number" == typeof e ? this._items.splice(e, 0, t) : this._items.push(t), 1 === this._items.length ? (t.show(), this._setCurrentItem(t)) : (t.hide(), this.getNextItem() === t && this._setNextItem(t), this.getPreviousItem() === t && this._setPreviousItem(t)), null !== t.getElementId() && (this._itemsIdLookup[t.getElementId()] = t), t.on(c.SELECTED, this._update), t
        }, h.removeItem = function(t, e) {
            e = e || {}, "number" == typeof t && (t = this._items[t]);
            var n = this._items.indexOf(t);
            if (n > -1) {
                var i = this.getNextItem(),
                    r = this.getPreviousItem();
                this._items.splice(n, 1), t.off(c.SELECTED, this._update), i === t && this._setNextItem(this.getNextItem()), r === t && this._setPreviousItem(this.getPreviousItem())
            }
            return t === this._currentItem && this._items.length && e.setCurrentItem !== !1 && (this._update({
                item: this._items[0]
            }), this._setLastItem(null)), e.destroyItem && t.getElement() && t.destroy(), t
        }, h.show = function(t, e) {
            return "number" == typeof t ? t = this._items[t] : "string" == typeof t && (t = this._itemsIdLookup[t]), t && (e = e || {}, this._update({
                item: t,
                interactionEvent: e.interactionEvent
            })), t || null
        }, h.showNext = function(t) {
            var e = this.getNextItem();
            return e && this.show(e, t), e
        }, h.showPrevious = function(t) {
            var e = this.getPreviousItem();
            return e && this.show(e, t), e
        }, h.isInView = function() {
            return this._currentItem && this._currentItem.isInView()
        }, h.getTotalItems = function() {
            return this._items.length
        }, h.getItems = function() {
            return this._items
        }, h.getItem = function(t) {
            return "number" == typeof t ? this.getItemAt(t) : "string" == typeof t ? this.getItemById(t) : void 0
        }, h.getItemAt = function(t) {
            return this._items[t] || null
        }, h.getItemById = function(t) {
            return this._itemsIdLookup[t] || null
        }, h.getItemIndex = function(t) {
            return this._items.indexOf(t)
        }, h.getCurrentItem = function() {
            return this._currentItem || null
        }, h.getLastItem = function() {
            return this._lastItem || null
        }, h.getNextItem = function() {
            var t, e = this._items.indexOf(this._currentItem);
            return e < this._items.length - 1 ? t = this._items[e + 1] : this._wrapAround && (t = this._items[0]), t || null
        }, h.getPreviousItem = function() {
            var t, e = this._items.indexOf(this._currentItem);
            return e > 0 ? t = this._items[e - 1] : this._wrapAround && (t = this._items[this._items.length - 1]), t || null
        }, h.getId = function() {
            return this._id
        }, h.destroy = function(t) {
            if (t = t || {}, void 0 === t.destroyItems && (t.destroyItems = !0), this._setCurrentItem(null), t.destroyItems)
                for (var e; this._items.length;) e = this._items[0], e.off(c.SELECTED, this._update), this.removeItem(e, {
                    destroyItem: !0,
                    setCurrentItem: !1
                });
            return this._items = null, this._itemsIdLookup = null, i._remove(this), l.destroy.call(this)
        }, h._setCurrentItem = function(t) {
            this._currentItem && this._currentItem.getElement() && this._currentItem !== t && (r.remove(this._currentItem.getElement(), c.CSS_CURRENT_ITEM), this._setLastItem(this._currentItem)), this._currentItem = t, this._currentItem && this._currentItem.getElement() && (r.add(this._currentItem.getElement(), c.CSS_CURRENT_ITEM), this._setNextItem(this.getNextItem()), this._setPreviousItem(this.getPreviousItem()))
        }, h._setLastItem = function(t) {
            this._lastItem && this._lastItem.getElement() && this._lastItem !== t && r.remove(this._lastItem.getElement(), c.CSS_LAST_ITEM), this._lastItem = t, this._lastItem && this._lastItem.getElement() && r.add(this._lastItem.getElement(), c.CSS_LAST_ITEM)
        }, h._setNextItem = function(t) {
            this._nextItem && this._nextItem.getElement() && this._nextItem !== t && r.remove(this._nextItem.getElement(), c.CSS_NEXT_ITEM), this._nextItem = t, this._nextItem && this._nextItem.getElement() && r.add(this._nextItem.getElement(), c.CSS_NEXT_ITEM)
        }, h._setPreviousItem = function(t) {
            this._previousItem && this._previousItem.getElement() && this._previousItem !== t && r.remove(this._previousItem.getElement(), c.CSS_PREVIOUS_ITEM), this._previousItem = t, this._previousItem && this._previousItem.getElement() && r.add(this._previousItem.getElement(), c.CSS_PREVIOUS_ITEM)
        }, h._updateItems = function(t, e) {
            t.outgoing[0] && t.outgoing[0].hide(), t.incoming[0].show(), e || this.trigger(i.UPDATE_COMPLETE, t)
        }, h._update = function(t) {
            var e = this._currentItem !== t.item;
            e && this._setCurrentItem(t.item);
            var n = {
                incoming: [t.item],
                outgoing: this._lastItem ? [this._lastItem] : [],
                interactionEvent: t.interactionEvent || null
            };
            e && this.trigger(i.UPDATE, n), this._updateItems(n, !e)
        }, i._instantiate = function() {
            return this._galleries = [], this._idCounter = 0, this
        }, i._add = function(t, e) {
            this._galleries.push(t), t._id = ++this._idCounter, s.add(t, e)
        }, i._remove = function(t) {
            var e = this._galleries.indexOf(t);
            e > -1 && (this._galleries.splice(e, 1), s.remove(t))
        }, i.getAll = function() {
            return Array.prototype.slice.call(this._galleries)
        }, i.getAllInView = function() {
            for (var t = [], e = this._galleries.length; e--;) this._galleries[e].isInView() && t.push(this._galleries[e]);
            return t
        }, i.destroyAll = function() {
            for (var t = this._galleries.length; t--;) this._galleries[t].destroy();
            this._galleries = []
        }, e.exports = i._instantiate()
    }, {
        "./Item": 246,
        "./singletons/analyticsManager": 260,
        "@marcom/ac-classlist": 8,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/create": 445
    }],
    246: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._el = t, this._triggerKeys = [], this._triggerEls = {}, this._isShown = !1, this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this), this._onTriggered = this._onTriggered.bind(this), this._el.setAttribute("role", "tabpanel"), this._focusableEls = h(f, t), m.call(this)
        }
        var r = t("@marcom/ac-classlist"),
            s = t("@marcom/ac-dom-events/addEventListener"),
            o = t("@marcom/ac-dom-events/removeEventListener"),
            a = t("@marcom/ac-dom-events/preventDefault"),
            c = t("@marcom/ac-dom-metrics/isInViewport"),
            l = t("@marcom/ac-dom-metrics/getPercentInViewport"),
            h = t("@marcom/ac-dom-traversal/querySelectorAll"),
            u = t("@marcom/ac-object/create"),
            f = t("./helpers/focusableSelectors"),
            d = t("@marcom/ac-keyboard/keyMap"),
            m = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            p = t("@marcom/ac-keyboard"),
            v = "current";
        i.CSS_CURRENT_ITEM = "ac-gallery-currentitem", i.CSS_LAST_ITEM = "ac-gallery-lastitem", i.CSS_NEXT_ITEM = "ac-gallery-nextitem", i.CSS_PREVIOUS_ITEM = "ac-gallery-previousitem", i.SELECTED = "selected", i.SHOW = "show", i.HIDE = "hide";
        var g = i.prototype = u(m.prototype);
        g.show = function() {
            this._isShown = !0, this._addCurrentClassToTriggers(), this._setTabIndexOnFocusableItems(null), this._el.removeAttribute("aria-hidden"), this.trigger(i.SHOW, this)
        }, g.hide = function() {
            this._isShown = !1, this._removeCurrentClassFromTriggers(), this._setTabIndexOnFocusableItems("-1"), this._el.setAttribute("aria-hidden", "true"), this.trigger(i.HIDE, this)
        }, g.addElementTrigger = function(t, e) {
            e = e || "click", void 0 === this._triggerEls[e] && (this._triggerEls[e] = []);
            var n = this._triggerEls[e].indexOf(t);
            if (n < 0) {
                t.setAttribute("role", "tab"), t.setAttribute("tabindex", "0");
                var i = this.getElementId();
                i && t.setAttribute("aria-controls", i), i = t.getAttribute("id"), i && null === this._el.getAttribute("aria-labelledby") && this._el.setAttribute("aria-labelledby", i), s(t, e, this._onTriggered), this._triggerEls[e].push(t), this._isShown ? (t.setAttribute("aria-selected", "true"), r.add(t, v)) : t.setAttribute("aria-selected", "false")
            }
        }, g.removeElementTrigger = function(t, e) {
            if (e = e || "click", void 0 !== this._triggerEls[e]) {
                var n = this._triggerEls[e].indexOf(t);
                n > -1 && this._cleanElementTrigger(t, e), 0 === this._triggerEls[e].length && (this._triggerEls[e] = void 0)
            }
        }, g.addKeyTrigger = function(t) {
            if ("string" == typeof t && (t = d[t.toUpperCase()]), "number" == typeof t) {
                var e = this._triggerKeys.indexOf(t);
                e < 0 && (p.onDown(t, this._onKeyboardInteraction), this._triggerKeys.push(t))
            }
        }, g.removeKeyTrigger = function(t) {
            if ("string" == typeof t && (t = d[t.toUpperCase()]), "number" == typeof t) {
                var e = this._triggerKeys.indexOf(t);
                e > -1 && (p.offDown(t, this._onKeyboardInteraction), this._triggerKeys.splice(e, 1))
            }
        }, g.removeAllTriggers = function() {
            for (var t, e = this._triggerKeys.length; e--;) t = this._triggerKeys[e], p.offDown(t, this._onKeyboardInteraction);
            this._triggerKeys = [];
            var n, i;
            for (i in this._triggerEls)
                for (e = this._triggerEls[i].length; e--;) n = this._triggerEls[i][e], this._cleanElementTrigger(n, i);
            this._triggerEls = {}
        }, g.isInView = function() {
            return !!this._el && c(this._el)
        }, g.percentageInView = function() {
            return this._el ? l(this._el) : 0
        }, g.getElement = function() {
            return this._el
        }, g.getElementId = function() {
            return void 0 !== this._elId ? this._elId : (this._elId = this._el.getAttribute("id") || null, this._elId)
        }, g.destroy = function() {
            this._isShown && (this._isShown = null, r.remove(this._el, i.CSS_CURRENT_ITEM, i.CSS_LAST_ITEM, i.CSS_NEXT_ITEM, i.CSS_PREVIOUS_ITEM), this._removeCurrentClassFromTriggers()), this.removeAllTriggers(), this._setTabIndexOnFocusableItems(null), this._el.removeAttribute("aria-hidden"), this._el.removeAttribute("role"), this._el.removeAttribute("aria-labelledby"), this._triggerKeys = null, this._triggerEls = null, this._el = null
        }, g._addCurrentClassToTriggers = function() {
            var t, e, n;
            for (e in this._triggerEls)
                for (n = this._triggerEls[e].length; n--;) t = this._triggerEls[e][n], t.setAttribute("aria-selected", "true"), r.add(t, v)
        }, g._removeCurrentClassFromTriggers = function() {
            var t, e, n;
            for (e in this._triggerEls)
                for (n = this._triggerEls[e].length; n--;) t = this._triggerEls[e][n], t.setAttribute("aria-selected", "false"), r.remove(t, v)
        }, g._cleanElementTrigger = function(t, e) {
            t.removeAttribute("aria-selected"), t.removeAttribute("role"), t.removeAttribute("tabindex"), t.removeAttribute("aria-controls"), o(t, e, this._onTriggered), this._isShown && r.remove(t, v)
        }, g._onKeyboardInteraction = function(t) {
            this.isInView() && this._onTriggered(t)
        }, g._setTabIndexOnFocusableItems = function(t) {
            for (var e = null === t, n = this._focusableEls.length; n--;) e ? this._focusableEls[n].removeAttribute("tabindex") : this._focusableEls[n].setAttribute("tabindex", t)
        }, g._onTriggered = function(t) {
            a(t), this.trigger(i.SELECTED, {
                item: this,
                interactionEvent: t
            })
        }, e.exports = i
    }, {
        "./helpers/focusableSelectors": 255,
        "@marcom/ac-classlist": 8,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/preventDefault": 32,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-metrics/getPercentInViewport": 44,
        "@marcom/ac-dom-metrics/isInViewport": 51,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-keyboard": 227,
        "@marcom/ac-keyboard/keyMap": 229,
        "@marcom/ac-object/create": 445
    }],
    247: [function(t, e, n) {
        "use strict";
        var i = t("./helpers/extendProto"),
            r = t("./Gallery"),
            s = t("./auto/AutoGallery"),
            o = t("./fade/FadeGallery"),
            a = t("./fade/FadeItem"),
            c = t("./slide/SlideGallery"),
            l = t("./slide/SlideItem"),
            h = t("./Item");
        r.create = t("./factories/create"), r.autoCreate = t("./factories/autoCreate"), r.extend = i, s.extend = i, o.extend = i, a.extend = i, c.extend = i, l.extend = i, h.extend = i, e.exports = {
            Gallery: r,
            AutoGallery: s,
            FadeGallery: o,
            FadeGalleryItem: a,
            SlideGallery: c,
            SlideGalleryItem: l,
            Item: h,
            ToggleNav: t("./navigation/ToggleNav")
        }
    }, {
        "./Gallery": 245,
        "./Item": 246,
        "./auto/AutoGallery": 249,
        "./factories/autoCreate": 250,
        "./factories/create": 251,
        "./fade/FadeGallery": 252,
        "./fade/FadeItem": 253,
        "./helpers/extendProto": 254,
        "./navigation/ToggleNav": 259,
        "./slide/SlideGallery": 261,
        "./slide/SlideItem": 262
    }],
    248: [function(t, e, n) {
        "use strict";

        function i() {
            this._observers = {}
        }
        var r;
        try {
            r = t("ac-analytics").observer.Gallery
        } catch (s) {}
        var o = "data-analytics-gallery-id",
            a = i.prototype;
        a.add = function(t, e) {
            var n = t.getId();
            if (r && !this._observers[n]) {
                e = e || {}, e.galleryName || (e.galleryName = this._getAnalyticsId(t, e.dataAttribute) || n), e.beforeUpdateEvent || (e.beforeUpdateEvent = "update"), e.afterUpdateEvent || (e.afterUpdateEvent = "update:complete");
                var i = new r(t, e);
                i.gallery && (this._observers[n] = i)
            }
        }, a.remove = function(t) {
            var e = t.getId();
            r && this._observers[e] && ("function" == typeof this._observers[e].destroy && this._observers[e].destroy(), this._observers[e] = null)
        }, a._getAnalyticsId = function(t, e) {
            if ("function" == typeof t.getElement) {
                e = e || o;
                var n = t.getElement();
                return n.getAttribute(e) || n.getAttribute("id")
            }
            return null
        }, e.exports = i
    }, {
        "ac-analytics": void 0
    }],
    249: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (e = e || {}, !t || void 0 === t.nodeType) throw new Error(P);
            if (this._el = t, _.call(this, e), this._itemHeights = [], this._itemHeightsLookup = {}, this._toggleNavDuration = e.toggleNavDuration, this._isRightToLeft = void 0 === e.rightToLeft ? "rtl" === c.getStyle(t, "direction").direction : e.rightToLeft, this._keyboardThrottleDelay = 1e3 * (void 0 === e.keyboardThrottleDelay ? C : e.keyboardThrottleDelay), this._resizeContainer = !!e.resizeContainer, this._setUpContainerAutoResize(e.resizeContainerOnUpdate), this._createToggleNav(), this._addPaddleNav(e.addPaddleNav), this._addItems(e.itemSelector || A), this._wrapAround || this._updatePaddleNavState(), e.enableArrowKeys !== !1 && (this._enableArrowKeys = !0, this._addKeyboardListener()), e.updateOnWindowResize !== !1 && (this._onWindowResize = this._onWindowResize.bind(this), s(window, "resize", this._onWindowResize)), this.stopAutoPlay = this.stopAutoPlay.bind(this), e.autoPlay) {
                var n = "number" == typeof e.autoPlay ? e.autoPlay : T;
                this.startAutoPlay(n)
            }
            if (e.deeplink !== !1) {
                var i = this._getDeeplinkedItem();
                i && i !== this._currentItem && this.show(i)
            }
            if (this._containerResizeDuration !== !1) {
                var r = this._itemHeightsLookup[this._currentItem.getElementId()];
                r && this._setElHeight(r)
            }
            this._toggleNav && this._toggleNav.start(), this._setUpSwiping(e.touch && g(), e.desktopSwipe)
        }
        t("@marcom/ac-polyfills/requestAnimationFrame");
        var r = t("@marcom/ac-classlist"),
            s = t("@marcom/ac-dom-events/addEventListener"),
            o = t("@marcom/ac-dom-events/removeEventListener"),
            a = t("@marcom/ac-dom-events/preventDefault"),
            c = t("@marcom/ac-dom-styles"),
            l = t("@marcom/ac-dom-traversal/querySelector"),
            h = t("@marcom/ac-dom-traversal/querySelectorAll"),
            u = t("@marcom/ac-object/create"),
            f = t("@marcom/ac-dom-metrics/getContentDimensions"),
            d = t("@marcom/ac-keyboard/keyMap"),
            m = t("./../helpers/selectElementFromDataAttributeValue"),
            p = t("./../helpers/selectElementThatHasDataAttribute"),
            v = t("@marcom/ac-function/throttle"),
            g = t("@marcom/ac-feature/touchAvailable"),
            _ = t("./../Gallery"),
            y = t("@marcom/ac-keyboard"),
            b = t("@marcom/ac-page-visibility").PageVisibilityManager,
            E = t("@marcom/ac-pointer-tracker").PointerTracker,
            w = t("./../navigation/ToggleNav"),
            x = "disabled",
            T = 3,
            S = .5,
            A = "[data-ac-gallery-item]",
            C = .12,
            O = t("../templates/paddlenav.js"),
            P = "No element supplied.";
        i.RESIZED = "resized", i.UPDATE = _.UPDATE, i.UPDATE_COMPLETE = _.UPDATE_COMPLETE;
        var I = _.prototype,
            L = i.prototype = u(I);
        L.addItem = function(t, e) {
            if (t.nodeType) t = new this._itemType(t);
            else if (this._items.indexOf(t) > -1) return t;
            return this._resizeContainer && this._storeItemHeight(t, this._containerResizeDuration === !1), this._addItemTriggers(t), I.addItem.call(this, t, e)
        }, L.removeItem = function(t, e) {
            if (this._resizeContainer)
                for (var n = this._itemHeights.length; n--;) this._itemHeights[n].item === t && (this._itemHeights.splice(n, 1), 0 === n && this._itemHeights.length && this._setElHeight(this._itemHeights[0].height));
            return I.removeItem.call(this, t, e)
        }, L.startAutoPlay = function(t, e) {
            e = e || {}, this._isAutoPlaying = !0, this._autoPlayDelay = 1e3 * (t || T), this._cancelAutoPlayOnInteraction = void 0 === e.cancelOnInteraction || e.cancelOnInteraction, setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay), this._cancelAutoPlayOnInteraction && this.on(_.UPDATE, this.stopAutoPlay)
        }, L.stopAutoPlay = function() {
            this._isAutoPlaying = !1, this._cancelAutoPlayOnInteraction && this.off(_.UPDATE, this.stopAutoPlay)
        }, L.getElement = function() {
            return this._el
        }, L.getToggleNav = function() {
            return this._toggleNav || null
        }, L.resize = function(t, e) {
            if (this._resizeContainer) {
                this._itemHeights = [];
                for (var n = this._items.length; n--;) this._storeItemHeight(this._items[n], !1);
                this._containerResizeDuration !== !1 ? this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()]) : this._setElHeight(this._itemHeights[0].height)
            }
            this._toggleNav && this._toggleNav.resize(), this.trigger(i.RESIZED, this)
        }, L.destroy = function(t) {
            this._isAutoPlaying && this.stopAutoPlay(), this._resizeContainer && c.setStyle(this._el, {
                height: null,
                transition: null
            }), this._enableArrowKeys && (y.offDown(d.ARROW_RIGHT, this._rightArrowFunc), y.offDown(d.ARROW_LEFT, this._leftArrowFunc));
            var e;
            if (this._previousButtons) {
                for (e = this._previousButtons.length; e--;) o(this._previousButtons[e], "click", this._onPaddlePrevious);
                this._setPaddleDisabledState(this._previousButtons, !1)
            }
            if (this._nextButtons) {
                for (e = this._nextButtons.length; e--;) o(this._nextButtons[e], "click", this._onPaddleNext);
                this._setPaddleDisabledState(this._nextButtons, !1)
            }
            return this._dynamicPaddleNav && this._el.removeChild(this._dynamicPaddleNav), this._hasPaddleNavStateHandler && this.off(_.UPDATE, this._updatePaddleNavState), this._touchSwipe && (this._touchSwipe.off(E.END, this._onSwipeEnd), this._touchSwipe.destroy(), this._touchSwipe = null), this._clickSwipe && (this._clickSwipe.off(E.END, this._onSwipeEnd), this._clickSwipe.destroy(), this._clickSwipe = null), this._toggleNav && (this._toggleNav.destroy(), this._toggleNav = null), o(window, "resize", this._onWindowResize), this._el = null, this._itemHeights = null, this._itemHeightsLookup = null, this._resizeContainer = null, this._isRightToLeft = null, this._enableArrowKeys = null, this._previousButtons = null, this._onPaddlePrevious = null, this._nextButtons = null, this._onPaddleNext = null, I.destroy.call(this, t)
        }, L._getDeeplinkedItem = function() {
            for (var t, e = window.location.hash.substr(1), n = this._items.length; n--;)
                if (t = this._items[n], e === t.getElementId()) return t;
            return null
        }, L._addItems = function(t) {
            var e, n, i = /(^\[).*(\]$)/.test(t);
            i ? (t = t.replace(/\[|\]/g, ""), n = p(t, this._el)) : n = h(t, this._el);
            var r = 0,
                s = n.length;
            for (r; r < s; r++) e = new this._itemType(n[r]), this.addItem(e), this._addItemTriggers(e)
        }, L._createToggleNav = function() {
            var t = this._getElementId(),
                e = '[data-ac-gallery-togglenav="' + t + '"], [data-ac-gallery-tabnav="' + t + '"]',
                n = l(e);
            n && (this._toggleNav = new w(n, this, {
                duration: this._toggleNavDuration
            }))
        }, L._addItemTriggers = function(t, e) {
            var n = m("data-ac-gallery-trigger", t.getElementId());
            e && e.length && (n = n.concat(e));
            var i = 0,
                r = n.length;
            for (i; i < r; i++) t.addElementTrigger(n[i]), this._toggleNav && this._toggleNav.addTrigger(n[i], t)
        }, L._addPaddleNav = function(t) {
            var e, n = this._getElementId();
            if (t) {
                var i = "string" == typeof t ? t : O;
                i = i.replace(/%ID%/g, this._getElementId()), this._dynamicPaddleNav = document.createElement("div"), this._dynamicPaddleNav.innerHTML = i, this._el.insertBefore(this._dynamicPaddleNav, this._el.firstChild)
            }
            this._previousButtons = m("data-ac-gallery-previous-trigger", n), this._nextButtons = m("data-ac-gallery-next-trigger", n);
            var r = this._el.getAttribute("aria-label") || "";
            if (r.length && (r = "(" + r + ")"), this._onPaddlePrevious = this._onPaddleInteraction.bind(null, this.showPrevious), e = this._previousButtons.length) {
                var o = this._el.getAttribute("data-ac-gallery-previouslabel");
                for (o && r.length && (this._isRightToLeft ? o = r + " " + o : o += " " + r); e--;) o && null === this._previousButtons[e].getAttribute("aria-label") && this._previousButtons[e].setAttribute("aria-label", o), s(this._previousButtons[e], "click", this._onPaddlePrevious)
            }
            if (this._onPaddleNext = this._onPaddleInteraction.bind(null, this.showNext), e = this._nextButtons.length) {
                var a = this._el.getAttribute("data-ac-gallery-nextlabel");
                for (a && r.length && (this._isRightToLeft ? a = r + " " + a : a += " " + r); e--;) a && null === this._nextButtons[e].getAttribute("aria-label") && this._nextButtons[e].setAttribute("aria-label", a), s(this._nextButtons[e], "click", this._onPaddleNext)
            }(this._nextButtons.length || this._previousButtons.length) && (this._hasPaddleNavStateHandler = !0, this._updatePaddleNavState = this._updatePaddleNavState.bind(this), this.on(_.UPDATE, this._updatePaddleNavState))
        }, L._onPaddleInteraction = function(t, e) {
            a(e), t.call(null, {
                interactionEvent: e
            })
        }, L._updatePaddleNavState = function() {
            if (this._wrapAround) this._setPaddleDisabledState(this._previousButtons, !1), this._setPaddleDisabledState(this._nextButtons, !1);
            else {
                var t = this._items.indexOf(this._currentItem);
                0 === t && this._previousButtons.length ? (this._setPaddleDisabledState(this._previousButtons, !0), this._setPaddleDisabledState(this._nextButtons, !1)) : t === this._items.length - 1 && this._nextButtons.length ? (this._setPaddleDisabledState(this._nextButtons, !0), this._setPaddleDisabledState(this._previousButtons, !1)) : (this._setPaddleDisabledState(this._previousButtons, !1), this._setPaddleDisabledState(this._nextButtons, !1))
            }
        }, L._setPaddleDisabledState = function(t, e) {
            for (var n = t.length; n--;) t[n].disabled = e, e ? r.add(t[n], x) : r.remove(t[n], x)
        }, L._addKeyboardListener = function() {
            if (this._enableArrowKeys) {
                this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this);
                var t, e;
                this._isRightToLeft ? (t = this.showPrevious, e = this.showNext) : (t = this.showNext, e = this.showPrevious), this._rightArrowFunc = v(this._onKeyboardInteraction.bind(null, t), this._keyboardThrottleDelay), this._leftArrowFunc = v(this._onKeyboardInteraction.bind(null, e), this._keyboardThrottleDelay), y.onDown(d.ARROW_RIGHT, this._rightArrowFunc), y.onDown(d.ARROW_LEFT, this._leftArrowFunc)
            }
        }, L._onKeyboardInteraction = function(t, e) {
            if (this.isInView()) {
                var n = _.getAllInView();
                if (n.length > 1 && (n.sort(function(t, e) {
                        return t = t._enableArrowKeys ? t.getCurrentItem().percentageInView() : 0, e = e._enableArrowKeys ? e.getCurrentItem().percentageInView() : 0, e - t
                    }), this !== n[0])) return;
                t.call(null, {
                    interactionEvent: e
                })
            }
        }, L._setUpSwiping = function(t, e) {
            this._onSwipeEnd = this._onSwipeEnd.bind(this), t && (this._touchSwipe = new E(this._el, E.TOUCH_EVENTS), this._touchSwipe.on(E.END, this._onSwipeEnd)), e && (this._clickSwipe = new E(this._el, E.MOUSE_EVENTS), this._clickSwipe.on(E.END, this._onSwipeEnd))
        }, L._onSwipeEnd = function(t) {
            var e, n = {
                interactionEvent: t.interactionEvent
            };
            return t.swipe === E.SWIPE_RIGHT ? e = this._isRightToLeft ? this.showNext : this.showPrevious : t.swipe === E.SWIPE_LEFT && (e = this._isRightToLeft ? this.showPrevious : this.showNext), e ? e.call(this, n) : null
        }, L._getElementId = function() {
            return void 0 === this._elementId && (this._elementId = this._el.getAttribute("id")), this._elementId
        }, L._setUpContainerAutoResize = function(t) {
            "number" == typeof t ? this._containerResizeDuration = t : t ? this._containerResizeDuration = S : this._containerResizeDuration = !1, this._containerResizeDuration !== !1 && (this._resizeContainer = !0, this._updateContainerSize = this._updateContainerSize.bind(this), this.on(_.UPDATE, this._updateContainerSize))
        }, L._updateContainerSize = function(t) {
            var e = this._itemHeightsLookup[t.incoming[0].getElementId()];
            e && this._setElHeight(e, this._containerResizeDuration)
        }, L._storeItemHeight = function(t, e) {
            var n = f(t.getElement());
            this._itemHeights.push({
                item: t,
                height: n.height
            }), this._itemHeightsLookup[t.getElementId()] = n.height, this._itemHeights.sort(function(t, e) {
                return e.height - t.height
            }), e && this._itemHeights[0].item === t && this._setElHeight(n.height)
        }, L._setElHeight = function(t, e) {
            var n = {
                height: t + "px"
            };
            e ? n.transition = "height " + e + "s" : n.transition = null, c.setStyle(this._el, n)
        }, L._onAutoPlayToNextItem = function() {
            if (this._isAutoPlaying)
                if (!b.isHidden && this._currentItem.isInView()) {
                    this._cancelAutoPlayOnInteraction && this.off(_.UPDATE, this.stopAutoPlay);
                    var t = this.showNext();
                    null !== t && (this._cancelAutoPlayOnInteraction && this.on(_.UPDATE, this.stopAutoPlay), setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay))
                } else setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
        }, L._onWindowResize = function(t) {
            window.requestAnimationFrame(function() {
                this._el && this.resize()
            }.bind(this))
        }, e.exports = i
    }, {
        "../templates/paddlenav.js": 264,
        "./../Gallery": 245,
        "./../helpers/selectElementFromDataAttributeValue": 257,
        "./../helpers/selectElementThatHasDataAttribute": 258,
        "./../navigation/ToggleNav": 259,
        "@marcom/ac-classlist": 8,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/preventDefault": 32,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-metrics/getContentDimensions": 41,
        "@marcom/ac-dom-styles": 54,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-feature/touchAvailable": 223,
        "@marcom/ac-function/throttle": 225,
        "@marcom/ac-keyboard": 227,
        "@marcom/ac-keyboard/keyMap": 229,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-page-visibility": 230,
        "@marcom/ac-pointer-tracker": 236,
        "@marcom/ac-polyfills/requestAnimationFrame": void 0
    }],
    250: [function(t, e, n) {
        "use strict";
        var i = t("./create"),
            r = t("./../helpers/selectElementThatHasDataAttribute"),
            s = t("./../Gallery"),
            o = s.FADE_SELECTOR.replace(/\[|\]/g, ""),
            a = s.SLIDE_SELECTOR.replace(/\[|\]/g, "");
        e.exports = function(t) {
            t = t || {};
            var e, n, c = t.context || document.body;
            for (e = r(a, c), n = e.length; n--;) i(e[n], s.SLIDE, t);
            for (e = r(o, c), n = e.length; n--;) i(e[n], s.FADE, t);
            return s.getAll()
        }
    }, {
        "./../Gallery": 245,
        "./../helpers/selectElementThatHasDataAttribute": 258,
        "./create": 251
    }],
    251: [function(t, e, n) {
        "use strict";
        var i = t("./../fade/FadeGallery"),
            r = t("./../Gallery"),
            s = t("./../slide/SlideGallery"),
            o = "%TYPE% is not a supported gallery type and el has no gallery data attribute.",
            a = r.FADE_SELECTOR.replace(/\[|\]/g, ""),
            c = r.SLIDE_SELECTOR.replace(/\[|\]/g, "");
        e.exports = function(t, e, n) {
            var l;
            if ("string" == typeof e && (e === r.SLIDE ? l = s : e === r.FADE && (l = i)), void 0 === l && (null !== t.getAttribute(c) ? l = s : null !== t.getAttribute(a) && (l = i)), void 0 === l) throw new Error(o.replace(/%TYPE%/g, e));
            return new l(t, n)
        }
    }, {
        "./../Gallery": 245,
        "./../fade/FadeGallery": 252,
        "./../slide/SlideGallery": 261
    }],
    252: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            e = r(e) || {}, e.itemType = e.itemType || o, this._fadeDuration = e.duration || c, e.toggleNavDuration = void 0 === e.toggleNavDuration ? this._fadeDuration : e.toggleNavDuration, this._crossFade = e.crossFade, this._zIndexCount = e.startZIndex || 1, this._ease = e.ease, e.resizeContainerOnUpdate === !0 && (e.resizeContainerOnUpdate = this._fadeDuration), this._onItemShowComplete = this._onItemShowComplete.bind(this), a.call(this, t, e), this._currentItem && this._currentItem.fadeIn(0)
        }
        var r = t("@marcom/ac-object/clone"),
            s = t("@marcom/ac-object/create"),
            o = t("./FadeItem"),
            a = t("./../auto/AutoGallery"),
            c = .5;
        i.RESIZED = a.RESIZED, i.UPDATE = a.UPDATE, i.UPDATE_COMPLETE = a.UPDATE_COMPLETE;
        var l = a.prototype,
            h = i.prototype = s(l);
        h.addItem = function(t, e) {
            t.nodeType && (t = new this._itemType(t));
            var n = l.addItem.call(this, t, e);
            return t !== this._currentItem ? t.fadeOut() : t.fadeIn(0), n
        }, h.destroy = function(t) {
            var e = l.destroy.call(this, t);
            return this._fadeDuration = null, this._crossFade = null, this._zIndexCount = null, this._ease = null, this._onItemShowComplete = null, e
        }, h._onItemShowComplete = function(t) {
            if (t && t.target() !== this._currentItem.getElement()) return void(this._currentItem.isFading() || this._currentItem.fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete));
            for (var e, n = this._items.length; n--;) e = this._items[n], e !== this._currentItem && e.fadeOut();
            this._incomingOutgoingItems && this.trigger(i.UPDATE_COMPLETE, this._incomingOutgoingItems)
        }, h._updateItems = function(t, e) {
            if (!e) {
                if (this._crossFade) {
                    var n = e ? null : this.trigger.bind(this, i.UPDATE_COMPLETE, t);
                    t.outgoing[0].fadeOut(.99 * this._fadeDuration, this._ease), t.incoming[0].fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, n)
                } else this._incomingOutgoingItems = !e && t, t.outgoing[0].isFading() || t.incoming[0].fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete);
                t.outgoing[0].hide(), t.incoming[0].show()
            }
        }, e.exports = i
    }, {
        "./../auto/AutoGallery": 249,
        "./FadeItem": 253,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-object/create": 445
    }],
    253: [function(t, e, n) {
        "use strict";

        function i(t) {
            l.call(this, t), r(t, {
                position: "absolute"
            })
        }
        var r = t("@marcom/ac-dom-styles/setStyle"),
            s = t("@marcom/ac-object/create"),
            o = t("@marcom/ac-solar/fade"),
            a = t("@marcom/ac-solar/fadeIn"),
            c = t("@marcom/ac-solar/fadeOut"),
            l = t("./../Item");
        i.SELECTED = l.SELECTED, i.SHOW = l.SHOW, i.HIDE = l.HIDE;
        var h = l.prototype,
            u = i.prototype = s(h);
        u.fadeIn = function(t, e, n, i) {
            t ? (r(this._el, {
                zIndex: n || 1
            }), this._destroyCurrentClip(), this._clip = o(this._el, 0, 1, t, {
                ease: e,
                onComplete: i
            })) : (a(this._el, 0), r(this._el, {
                zIndex: n || 1
            }))
        }, u.fadeOut = function(t, e) {
            t ? (this._destroyCurrentClip(), this._clip = c(this._el, t, {
                ease: e
            })) : c(this._el, 0)
        }, u.isFading = function() {
            return !(!this._clip || !this._clip.playing())
        }, u.destroy = function() {
            r(this._el, {
                position: null,
                opacity: null,
                zIndex: null
            }), h.destroy.call(this), this._destroyCurrentClip(), this._clip = null
        }, u._destroyCurrentClip = function() {
            this.isFading() && this._clip.destroy()
        }, e.exports = i
    }, {
        "./../Item": 246,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-solar/fade": 238,
        "@marcom/ac-solar/fadeIn": 239,
        "@marcom/ac-solar/fadeOut": 240
    }],
    254: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-object/create"),
            r = t("@marcom/ac-object/extend");
        e.exports = function(t) {
            var e = this,
                n = function() {
                    e.apply(this, arguments)
                },
                s = i(this.prototype);
            return n.prototype = r(s, t), r(n, this), n
        }
    }, {
        "@marcom/ac-object/create": 445,
        "@marcom/ac-object/extend": 447
    }],
    255: [function(t, e, n) {
        "use strict";
        var i = ["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "*[tabindex]", "*[contenteditable]"].join(",");
        e.exports = i
    }, {}],
    256: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-styles/getStyle"),
            r = t("@marcom/ac-dom-metrics/getContentDimensions");
        e.exports = function(t) {
            var e = i(t, "margin-right", "margin-left");
            return Math.round(r(t).width) + parseInt(e.marginRight, 10) + parseInt(e.marginLeft, 10)
        }
    }, {
        "@marcom/ac-dom-metrics/getContentDimensions": 41,
        "@marcom/ac-dom-styles/getStyle": 53
    }],
    257: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-traversal/querySelectorAll"),
            r = function(t, e) {
                var n, i = document.getElementsByTagName("*"),
                    r = 0,
                    s = i.length,
                    o = [];
                for (r; r < s; r++) n = i[r], null !== n.getAttribute(t) && n.getAttribute(t).split(" ").indexOf(e) > -1 && (o[o.length] = n);
                return o
            };
        e.exports = function(t, e) {
            var n = i("[" + t + '*="' + e + '"]');
            if (0 === n.length && 7 === document.documentMode) return r(t, e);
            var s, o = [],
                a = 0,
                c = n.length;
            for (a; a < c; a++) s = n[a].getAttribute(t), s === e ? o.push(n[a]) : s && s.length && (s = s.split(" "), s.indexOf(e) > -1 && o.push(n[a]));
            return o
        }
    }, {
        "@marcom/ac-dom-traversal/querySelectorAll": 94
    }],
    258: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-traversal/querySelectorAll"),
            r = t("@marcom/ac-dom-traversal/ancestors"),
            s = function(t, e) {
                var n, i = document.getElementsByTagName("*"),
                    s = 0,
                    o = i.length,
                    a = [];
                for (s; s < o; s++) n = i[s], null !== n.getAttribute(t) && (!e || r(n).indexOf(e) > -1) && (a[a.length] = n);
                return a
            };
        e.exports = function(t, e) {
            e = e || document.body;
            var n = i("[" + t + "]", e);
            return 0 === n.length && 7 === document.documentMode ? s(t, e) : n
        }
    }, {
        "@marcom/ac-dom-traversal/ancestors": 81,
        "@marcom/ac-dom-traversal/querySelectorAll": 94
    }],
    259: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            n = n || {}, this._el = t, this._gallery = e, this._triggers = {}, this._ordered = [], this._containerEl = this._el.children[0], this._slideDuration = void 0 === n.duration ? m : n.duration, f.call(this)
        }
        var r = t("@marcom/ac-dom-events/addEventListener"),
            s = t("@marcom/ac-dom-events/removeEventListener"),
            o = t("@marcom/ac-dom-metrics/getDimensions"),
            a = t("@marcom/ac-dom-metrics/getPosition"),
            c = t("@marcom/ac-dom-styles/setStyle"),
            l = t("@marcom/ac-dom-traversal/ancestors"),
            h = t("@marcom/ac-object/create"),
            u = t("@marcom/ac-solar/scrollX"),
            f = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            d = t("./../Gallery"),
            m = .5,
            p = f.prototype,
            v = i.prototype = h(p);
        v.start = function() {
            this._onWindowLoad = this._onWindowLoad.bind(this), this._onGalleryUpdated = this._onGalleryUpdated.bind(this), this._gallery.on(d.UPDATE, this._onGalleryUpdated), this.resize(), r(window, "load", this._onWindowLoad)
        }, v.addTrigger = function(t, e) {
            if (void 0 === this._triggers[e.getElementId()]) {
                var n = l(t);
                if (n.indexOf(this._el) > -1) {
                    var i = {
                        el: t
                    };
                    this._triggers[e.getElementId()] = i, this._ordered.push(i)
                }
            }
        }, v.resize = function() {
            if (this._ordered.length) {
                c(this._containerEl, {
                    paddingLeft: null,
                    paddingRight: null
                }), this._containerWidth = o(this._containerEl).width, this._width = o(this._el).width, this._viewCenter = Math.round(.5 * this._width);
                for (var t = this._ordered.length; t--;) this._setTriggerData(this._ordered[t]);
                if (this._ordered.sort(function(t, e) {
                        return t.left - e.left
                    }), this._containerWidth > this._width) {
                    var e = this._ordered[0],
                        n = this._ordered[this._ordered.length - 1],
                        i = .5 * (this._width - e.width),
                        r = .5 * (this._width - n.width);
                    c(this._containerEl, {
                        paddingLeft: i + "px",
                        paddingRight: r + "px"
                    });
                    var s = this._triggers[this._gallery.getCurrentItem().getElementId()];
                    s && this._centerNav(s)
                }
            }
        }, v.destroy = function() {
            return this._gallery.off(d.UPDATE, this._onGalleryUpdated), s(window, "load", this._onWindowLoad), c(this._containerEl, {
                paddingLeft: null,
                paddingRight: null
            }), this._el = null, this._gallery = null, this._triggers = null, this._ordered = null, this._containerEl = null, this._destroyCurrentClip(), this._clip = null, p.destroy.call(this)
        }, v._onWindowLoad = function() {
            s(window, "load", this._onWindowLoad), this.resize()
        }, v._setTriggerData = function(t) {
            t.width = o(t.el).width;
            var e = a(t.el);
            t.left = e.left, t.right = e.right, t.center = t.left + .5 * t.width
        }, v._centerNav = function(t, e) {
            this._setTriggerData(t), this._width = o(this._el).width, this._viewCenter = Math.round(.5 * this._width);
            var n = Math.round(t.center - this._viewCenter);
            this._destroyCurrentClip(), e ? this._clip = u(this._el, n, e) : this._el.scrollLeft = u
        }, v._onGalleryUpdated = function(t) {
            var e = this._triggers[t.incoming[0].getElementId()];
            e && this._centerNav(e, this._slideDuration)
        }, v._destroyCurrentClip = function() {
            this._clip && this._clip.playing() && this._clip.destroy()
        }, e.exports = i
    }, {
        "./../Gallery": 245,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-metrics/getDimensions": 42,
        "@marcom/ac-dom-metrics/getPosition": 46,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-dom-traversal/ancestors": 81,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-solar/scrollX": 244
    }],
    260: [function(t, e, n) {
        "use strict";
        var i = t("./../analytics/AnalyticsManager");
        e.exports = new i
    }, {
        "./../analytics/AnalyticsManager": 248
    }],
    261: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            e = a(e) || {}, e.itemType = e.itemType || p, this._itemsPerSlide = e.itemsPerSlide || 1;
            var n = e.deeplink !== !1;
            if (e.deeplink = !1, this._slideDuration = void 0 !== e.duration ? e.duration : _, e.toggleNavDuration = void 0 === e.toggleNavDuration ? this._slideDuration : e.toggleNavDuration, this._itemCenterPoint = void 0 !== e.itemCenterPoint ? e.itemCenterPoint : g, this._slideOptions = {
                    ease: e.ease
                }, e.resizeContainerOnUpdate === !0 && (e.resizeContainerOnUpdate = this._slideDuration), e.touch = e.touch !== !1, this._originalWrapAround = e.wrapAround || !1, d.call(this, t, e), n) {
                var i = this._getDeeplinkedItem();
                i && this._currentItem !== i && (this._currentItem.hide(), this._setCurrentItem(i), this._currentItem.show())
            }
            this._positionItems = this._positionItems.bind(this), this._createContainer(), 0 !== this._items.length && this._positionItems(), this._isInstantiated = !0
        }
        var r = t("@marcom/ac-classlist"),
            s = t("@marcom/ac-dom-styles"),
            o = t("@marcom/ac-dom-traversal/querySelectorAll"),
            a = t("@marcom/ac-object/clone"),
            c = t("@marcom/ac-object/create"),
            l = t("./../helpers/getElementFullWidth"),
            h = t("@marcom/ac-solar/moveX"),
            u = t("./../helpers/selectElementFromDataAttributeValue"),
            f = t("./../helpers/selectElementThatHasDataAttribute"),
            d = t("./../auto/AutoGallery"),
            m = t("@marcom/ac-pointer-tracker").PointerTracker,
            p = t("./SlideItem"),
            v = t("./SlideItemWrapper"),
            g = .5,
            _ = .5;
        i.RESIZED = d.RESIZED, i.UPDATE = d.UPDATE, i.UPDATE_COMPLETE = d.UPDATE_COMPLETE;
        var y = d.prototype,
            b = i.prototype = c(y);
        b.addItem = function(t, e) {
            t.nodeType && (t = new this._itemType(t));
            var n = y.addItem.call(this, t, e);
            return void 0 !== this._containerEl && (this._addItemToContainer(t), this._positionItems()), this._updateWrapAround(), n
        }, b.removeItem = function(t, e) {
            if (this._containerEl && t.getElement().parentElement === this._containerEl) {
                var n = t.getOriginalParentElement();
                n ? n.appendChild(t.getElement()) : "function" == typeof t.removeItems && (t.removeItems(), e.destroyItem = !0);
                var i = y.removeItem.call(this, t, e);
                return this._currentItem && this._positionItems(this._currentItem), this._updateWrapAround(), i
            }
            return y.removeItem.call(this, t, e)
        }, b.resize = function() {
            return this._positionItems(), this._snapToPosition(this._currentItem.position()), y.resize.call(this)
        }, b.destroy = function(t) {
            this._destroyCurrentClip(), this._clip = null;
            for (var e = this._items.length; e--;) this._items[e].off(p.CENTER_POINT_CHANGED, this._positionItems);
            this._touchSwipe && (this._touchSwipe.off(m.START, this._onSwipeStart), this._touchSwipe.off(m.UPDATE, this._onSwipeUpdate)), this._clickSwipe && (this._clickSwipe.off(m.START, this._onSwipeStart), this._clickSwipe.off(m.UPDATE, this._onSwipeUpdate));
            var n = this._el,
                i = y.destroy.call(this, t);
            return n.removeChild(this._containerEl), this._containerEl = null, this._slideDuration = null, this._itemCenterPoint = null, this._positionItems = null, this._slideOptions = null, i
        }, b._addItems = function(t) {
            if (this._itemsPerSlide > 1) {
                var e, n = /(^\[).*(\]$)/.test(t);
                e = n ? f(t.replace(/\[|\]/g, ""), this._el) : o(t, this._el);
                var i, r, s, a = 0,
                    c = 0,
                    l = e.length;
                for (c; c < l; c++) 0 === a && (i = new v), i.addItem(e[c]), s = e[c].getAttribute("id"), s && (r = u("data-ac-gallery-trigger", s), this._addItemTriggers(i, r)), ++a !== this._itemsPerSlide && c !== l - 1 || (a = 0, i.resize(), this.addItem(i))
            } else y._addItems.call(this, t)
        }, b._createContainer = function() {
            this._containerEl = document.createElement("div"), r.add(this._containerEl, "ac-gallery-slidecontainer"), s.setStyle(this._containerEl, {
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%"
            }), this._el.appendChild(this._containerEl);
            var t = 0,
                e = this._items.length;
            for (t; t < e; t++) this._addItemToContainer(this._items[t])
        }, b._addItemToContainer = function(t) {
            this._containerEl.appendChild(t.getElement()), t.on(p.CENTER_POINT_CHANGED, this._positionItems)
        }, b._positionItems = function(t) {
            t = t || this._currentItem;
            var e = this._items;
            this._wrapAround && (e = this._shuffleItems());
            var n, i, r, o, a, c = this._getActualPositionX() - t.position() || 0,
                h = parseInt(s.getStyle(this._el, "width").width, 10),
                u = 0,
                f = 0,
                d = e.length;
            for (f; f < d; f++) n = e[f], n.resize(), i = n.getElement(), s.setStyle(i, {
                left: u + "px"
            }), r = l(i), o = h - r, a = n.centerPoint && null !== n.centerPoint() ? n.centerPoint() : this._itemCenterPoint, n.position(u * -1 + o * a), this._isRightToLeft ? u -= r : u += r;
            u = t.position() + c, this._snapToPosition(u)
        }, b._getActualPositionX = function() {
            var t = s.getStyle(this._containerEl, "transform").transform;
            if (!t || "none" === t) {
                var e = s.getStyle(this._containerEl, "left").left;
                return parseInt(e, 10)
            }
            if (t === this._transformStyles && void 0 !== this._actualPositionX) return this._actualPositionX;
            this._transformStyles = t;
            var n = this._transformStyles.split(",");
            return this._actualPositionX = n[4] || this._currentItem.position(), 1 * this._actualPositionX
        }, b._snapToPosition = function(t) {
            this._destroyCurrentClip(), this._positionX = t, s.setStyle(this._containerEl, {
                transition: "transform 0s, left 0s"
            }), h(this._containerEl, t, 0, this._slideOptions)
        }, b._slideToPosition = function(t, e, n) {
            this._positionX = t, this._clip = h(this._containerEl, t, e, {
                ease: this._slideOptions.ease,
                onComplete: n
            })
        }, b._setUpSwiping = function(t, e) {
            var n = y._setUpSwiping.call(this, t, e);
            return this._onSwipeStart = this._onSwipeStart.bind(this), this._onSwipeUpdate = this._onSwipeUpdate.bind(this), this._touchSwipe && (this._touchSwipe.on(m.START, this._onSwipeStart), this._touchSwipe.on(m.UPDATE, this._onSwipeUpdate)), this._clickSwipe && (this._clickSwipe.on(m.START, this._onSwipeStart), this._clickSwipe.on(m.UPDATE, this._onSwipeUpdate)), n
        }, b._onSwipeStart = function(t) {
            this._clip && this._clip.playing() && (this._destroyCurrentClip(), this._positionX = this._getActualPositionX())
        }, b._onSwipeUpdate = function(t) {
            this._destroyCurrentClip(), this._snapToPosition(this._positionX - t.diffX)
        }, b._onSwipeEnd = function(t) {
            var e = y._onSwipeEnd.call(this, t);
            return null === e && (e = this.show(this._currentItem, {
                interactionEvent: t.interactionEvent
            })), e
        }, b._shuffleItems = function() {
            var t = 2 === this._items.length && !this._isAutoPlaying;
            if (t) return this._items.slice();
            var e, n, i, r = this._items.length,
                s = this._items.indexOf(this._currentItem),
                o = Math.floor(.5 * r);
            if (s < o) {
                e = o - s;
                var a = r - e;
                return n = this._items.slice(a), i = this._items.slice(0, a), n.concat(i)
            }
            return s > o ? (e = s - o, n = this._items.slice(0, e), i = this._items.slice(e), i.concat(n)) : this._items
        }, b._updateItems = function(t, e) {
            if (this._destroyCurrentClip(), this._wrapAround && this._positionItems(t.outgoing[0]), this.getItemIndex(t.outgoing[0]) > -1) {
                var n = e ? null : this.trigger.bind(this, i.UPDATE_COMPLETE, t),
                    r = this._slideDuration;
                this._slideToPosition(t.incoming[0].position(), r, n), t.incoming[0] !== t.outgoing[0] && (t.incoming[0].show(), t.outgoing[0].hide())
            } else this._slideToPosition(this._currentItem.position(), this._slideDuration), t.incoming[0].show(), e || this.trigger(i.UPDATE_COMPLETE, t)
        }, b._updateWrapAround = function() {
            this._items.length <= 2 ? this._wrapAround = !1 : this._originalWrapAround && (this._wrapAround = this._originalWrapAround), this._isInstantiated && (this._previousButtons || this._nextButtons) && this._updatePaddleNavState()
        }, b._destroyCurrentClip = function() {
            this._clip && this._clip.playing() && this._clip.destroy()
        }, e.exports = i
    }, {
        "./../auto/AutoGallery": 249,
        "./../helpers/getElementFullWidth": 256,
        "./../helpers/selectElementFromDataAttributeValue": 257,
        "./../helpers/selectElementThatHasDataAttribute": 258,
        "./SlideItem": 262,
        "./SlideItemWrapper": 263,
        "@marcom/ac-classlist": 8,
        "@marcom/ac-dom-styles": 54,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-pointer-tracker": 236,
        "@marcom/ac-solar/moveX": 242
    }],
    262: [function(t, e, n) {
        "use strict";

        function i(t) {
            o.call(this, t), r(t, {
                position: "absolute",
                transform: {
                    translateZ: 0
                }
            }), this._parentElement = t.parentElement
        }
        var r = t("@marcom/ac-dom-styles/setStyle"),
            s = t("@marcom/ac-object/create"),
            o = t("./../Item");
        i.CENTER_POINT_CHANGED = "centerpointchanged", i.SELECTED = o.SELECTED, i.SHOW = o.SHOW, i.HIDE = o.HIDE;
        var a = o.prototype,
            c = i.prototype = s(a);
        c.position = function(t) {
            return void 0 !== t && (this._position = t), this._position || 0
        }, c.centerPoint = function(t) {
            return void 0 !== t && (this._centerPoint = t, this.trigger(i.CENTER_POINT_CHANGED)), void 0 !== this._centerPoint ? this._centerPoint : null
        }, c.getOriginalParentElement = function() {
            return this._parentElement
        }, c.resize = function() {}, c.destroy = function() {
            r(this._el, {
                position: null,
                left: null,
                transform: null
            }), a.destroy.call(this)
        }, e.exports = i
    }, {
        "./../Item": 246,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-object/create": 445
    }],
    263: [function(t, e, n) {
        "use strict";

        function i() {
            h.call(this, document.createElement("div")), this._items = [], this._currentWidth = 0, r.add(this._el, u)
        }
        var r = t("@marcom/ac-classlist"),
            s = t("@marcom/ac-dom-styles/setStyle"),
            o = t("@marcom/ac-dom-traversal/querySelectorAll"),
            a = t("@marcom/ac-object/create"),
            c = t("./../helpers/focusableSelectors"),
            l = t("./../helpers/getElementFullWidth"),
            h = t("./SlideItem"),
            u = "ac-gallery-slideitemwrapper",
            f = h.prototype,
            d = i.prototype = a(f);
        d.addItem = function(t) {
            this._items.push({
                el: t,
                parentElement: t.parentElement
            }), this._el.appendChild(t);
            var e = t.getAttribute("id");
            if (e) {
                var n = this._el.getAttribute("id") || "",
                    i = n.length ? "-" : "";
                n += i + e, this._el.setAttribute("id", n)
            }
            this._focusableEls = this._focusableEls.concat(o(c, t))
        }, d.removeItems = function() {
            var t, e, n = 0,
                i = this._items.length;
            for (n; n < i; n++) t = this._items[n].el, s(t, {
                position: null,
                left: null
            }), e = this._items[n].parentElement, e && e.appendChild(t)
        }, d.resize = function() {
            this._currentWidth = 0;
            var t, e = 0,
                n = this._items.length;
            for (e; e < n; e++) t = this._items[e].el, s(t, {
                position: "absolute",
                left: this._currentWidth + "px"
            }), this._currentWidth += l(t);
            s(this._el, {
                width: this._currentWidth + "px"
            })
        }, d.destroy = function() {
            this.removeItems(), this._items = null, this._currentWidth = null;
            var t = this._el.parentElement;
            t && t.removeChild(this._el), f.destroy.call(this)
        }, e.exports = i
    }, {
        "./../helpers/focusableSelectors": 255,
        "./../helpers/getElementFullWidth": 256,
        "./SlideItem": 262,
        "@marcom/ac-classlist": 8,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-object/create": 445
    }],
    264: [function(t, e, n) {
        "use strict";
        var i = "";
        i += '<nav class="paddlenav">', i += "<ul>", i += '<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>', i += '<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>', i += "</ul>", i += "</nav>", e.exports = i
    }, {}],
    265: [function(t, e, n) {
        "use strict";
        e.exports = {
            GPUReporter: t("./ac-gpu-reporter/GPUReporter")
        }
    }, {
        "./ac-gpu-reporter/GPUReporter": 266
    }],
    266: [function(t, e, n) {
        "use strict";

        function i() {}
        var r = t("@marcom/ac-feature/webGLAvailable"),
            s = t("./defaults"),
            o = i.prototype;
        o.BLACKLISTED = 1, o.WHITELISTED = 2, o.NOT_LISTED = 4, o.NOT_FOUND = 8, o.NO_WEBGL = 16, o.getGPUClass = function(t) {
            var e, n = this._extendLists(t);
            return r() ? (e = this.getGPU(), null !== e ? this._matchesList(e, n.whitelist) ? this.WHITELISTED : this._matchesList(e, n.blacklist) ? this.BLACKLISTED : this.NOT_LISTED : this.NOT_FOUND) : this.NO_WEBGL
        }, o.getGPU = function() {
            var t, e, n;
            return t = document.createElement("canvas"), e = t.getContext("webgl") || t.getContext("experimental-webgl") || t.getContext("moz-webgl"), e ? (n = e.getExtension("WEBGL_debug_renderer_info"), null !== n ? e.getParameter(n.UNMASKED_RENDERER_WEBGL) : e.getParameter(e.VERSION)) : null
        }, o._matchesList = function(t, e) {
            var n;
            for (n = 0; n < e.length; n++)
                if (this._matchesEntry(t, e[n])) return !0;
            return !1
        }, o._matchesEntry = function(t, e) {
            var n, i = t.toLowerCase(),
                r = e.toLowerCase().split(" "),
                s = !0;
            for (n = 0; n < r.length; n++) i.indexOf(r[n]) === -1 && (s = !1);
            return s
        }, o._extendLists = function(t) {
            var e, n = JSON.parse(JSON.stringify(s));
            if (void 0 !== t) {
                if (void 0 !== t.blacklist && t.blacklist.length > 0)
                    for (e = 0; e < t.blacklist.length; e++) n.blacklist.push(t.blacklist[e]);
                if (void 0 !== t.whitelist && t.whitelist.length > 0)
                    for (e = 0; e < t.whitelist.length; e++) n.whitelist.push(t.whitelist[e])
            }
            return n
        }, e.exports = i
    }, {
        "./defaults": 267,
        "@marcom/ac-feature/webGLAvailable": 224
    }],
    267: [function(t, e, n) {
        e.exports = {
            blacklist: ["Intel HD Graphics 5300", "AMD Radeon R5 Graphics", "Apple A7 GPU"],
            whitelist: ["Radeon FirePro D700", "GeForce GT 750 M", "Apple A8 GPU", "Apple A9 GPU", "Apple A9X GPU"]
        }
    }, {}],
    268: [function(t, e, n) {
        (function(e) {
            "use strict";

            function i() {
                try {
                    var t = new Uint8Array(1);
                    return t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }

            function r() {
                return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(t, e) {
                if (r() < e) throw new RangeError("Invalid typed array length");
                return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = o.prototype) : (null === t && (t = new o(e)), t.length = e), t
            }

            function o(t, e, n) {
                if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, e, n);
                if ("number" == typeof t) {
                    if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                    return h(this, t)
                }
                return a(this, t, e, n)
            }

            function a(t, e, n, i) {
                if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? d(t, e, n, i) : "string" == typeof e ? u(t, e, n) : m(t, e)
            }

            function c(t) {
                if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                if (t < 0) throw new RangeError('"size" argument must not be negative')
            }

            function l(t, e, n, i) {
                return c(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof i ? s(t, e).fill(n, i) : s(t, e).fill(n) : s(t, e)
            }

            function h(t, e) {
                if (c(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !o.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n) t[n] = 0;
                return t
            }

            function u(t, e, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !o.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var i = 0 | g(e, n);
                t = s(t, i);
                var r = t.write(e, n);
                return r !== i && (t = t.slice(0, r)), t
            }

            function f(t, e) {
                var n = e.length < 0 ? 0 : 0 | p(e.length);
                t = s(t, n);
                for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
                return t
            }

            function d(t, e, n, i) {
                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                return e = void 0 === n && void 0 === i ? new Uint8Array(e) : void 0 === i ? new Uint8Array(e, n) : new Uint8Array(e, n, i), o.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = o.prototype) : t = f(t, e), t
            }

            function m(t, e) {
                if (o.isBuffer(e)) {
                    var n = 0 | p(e.length);
                    return t = s(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t)
                }
                if (e) {
                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || Q(e.length) ? s(t, 0) : f(t, e);
                    if ("Buffer" === e.type && $(e.data)) return f(t, e.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function p(t) {
                if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                return 0 | t
            }

            function v(t) {
                return +t != t && (t = 0), o.alloc(+t)
            }

            function g(t, e) {
                if (o.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var i = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return W(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return X(t).length;
                    default:
                        if (i) return W(t).length;
                        e = ("" + e).toLowerCase(), i = !0
                }
            }

            function _(t, e, n) {
                var i = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, e >>>= 0, n <= e) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return R(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return P(this, e, n);
                    case "ascii":
                        return L(this, e, n);
                    case "latin1":
                    case "binary":
                        return k(this, e, n);
                    case "base64":
                        return O(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return D(this, e, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), i = !0
                }
            }

            function y(t, e, n) {
                var i = t[e];
                t[e] = t[n], t[n] = i
            }

            function b(t, e, n, i, r) {
                if (0 === t.length) return -1;
                if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (r) return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!r) return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = o.from(e, i)), o.isBuffer(e)) return 0 === e.length ? -1 : E(t, e, n, i, r);
                if ("number" == typeof e) return e = 255 & e, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : E(t, [e], n, i, r);
                throw new TypeError("val must be string, number or Buffer")
            }

            function E(t, e, n, i, r) {
                function s(t, e) {
                    return 1 === o ? t[e] : t.readUInt16BE(e * o)
                }
                var o = 1,
                    a = t.length,
                    c = e.length;
                if (void 0 !== i && (i = String(i).toLowerCase(), "ucs2" === i || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    o = 2, a /= 2, c /= 2, n /= 2
                }
                var l;
                if (r) {
                    var h = -1;
                    for (l = n; l < a; l++)
                        if (s(t, l) === s(e, h === -1 ? 0 : l - h)) {
                            if (h === -1 && (h = l), l - h + 1 === c) return h * o
                        } else h !== -1 && (l -= l - h), h = -1
                } else
                    for (n + c > a && (n = a - c), l = n; l >= 0; l--) {
                        for (var u = !0, f = 0; f < c; f++)
                            if (s(t, l + f) !== s(e, f)) {
                                u = !1;
                                break
                            }
                        if (u) return l
                    }
                return -1
            }

            function w(t, e, n, i) {
                n = Number(n) || 0;
                var r = t.length - n;
                i ? (i = Number(i), i > r && (i = r)) : i = r;
                var s = e.length;
                if (s % 2 !== 0) throw new TypeError("Invalid hex string");
                i > s / 2 && (i = s / 2);
                for (var o = 0; o < i; ++o) {
                    var a = parseInt(e.substr(2 * o, 2), 16);
                    if (isNaN(a)) return o;
                    t[n + o] = a
                }
                return o
            }

            function x(t, e, n, i) {
                return K(W(e, t.length - n), t, n, i)
            }

            function T(t, e, n, i) {
                return K(G(e), t, n, i)
            }

            function S(t, e, n, i) {
                return T(t, e, n, i)
            }

            function A(t, e, n, i) {
                return K(X(e), t, n, i)
            }

            function C(t, e, n, i) {
                return K(Y(e, t.length - n), t, n, i)
            }

            function O(t, e, n) {
                return 0 === e && n === t.length ? J.fromByteArray(t) : J.fromByteArray(t.slice(e, n))
            }

            function P(t, e, n) {
                n = Math.min(t.length, n);
                for (var i = [], r = e; r < n;) {
                    var s = t[r],
                        o = null,
                        a = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                    if (r + a <= n) {
                        var c, l, h, u;
                        switch (a) {
                            case 1:
                                s < 128 && (o = s);
                                break;
                            case 2:
                                c = t[r + 1], 128 === (192 & c) && (u = (31 & s) << 6 | 63 & c, u > 127 && (o = u));
                                break;
                            case 3:
                                c = t[r + 1], l = t[r + 2], 128 === (192 & c) && 128 === (192 & l) && (u = (15 & s) << 12 | (63 & c) << 6 | 63 & l, u > 2047 && (u < 55296 || u > 57343) && (o = u));
                                break;
                            case 4:
                                c = t[r + 1], l = t[r + 2], h = t[r + 3], 128 === (192 & c) && 128 === (192 & l) && 128 === (192 & h) && (u = (15 & s) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & h, u > 65535 && u < 1114112 && (o = u))
                        }
                    }
                    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), r += a
                }
                return I(i)
            }

            function I(t) {
                var e = t.length;
                if (e <= tt) return String.fromCharCode.apply(String, t);
                for (var n = "", i = 0; i < e;) n += String.fromCharCode.apply(String, t.slice(i, i += tt));
                return n
            }

            function L(t, e, n) {
                var i = "";
                n = Math.min(t.length, n);
                for (var r = e; r < n; ++r) i += String.fromCharCode(127 & t[r]);
                return i
            }

            function k(t, e, n) {
                var i = "";
                n = Math.min(t.length, n);
                for (var r = e; r < n; ++r) i += String.fromCharCode(t[r]);
                return i
            }

            function R(t, e, n) {
                var i = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
                for (var r = "", s = e; s < n; ++s) r += H(t[s]);
                return r
            }

            function D(t, e, n) {
                for (var i = t.slice(e, n), r = "", s = 0; s < i.length; s += 2) r += String.fromCharCode(i[s] + 256 * i[s + 1]);
                return r
            }

            function N(t, e, n) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function j(t, e, n, i, r, s) {
                if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > r || e < s) throw new RangeError('"value" argument is out of bounds');
                if (n + i > t.length) throw new RangeError("Index out of range")
            }

            function M(t, e, n, i) {
                e < 0 && (e = 65535 + e + 1);
                for (var r = 0, s = Math.min(t.length - n, 2); r < s; ++r) t[n + r] = (e & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
            }

            function F(t, e, n, i) {
                e < 0 && (e = 4294967295 + e + 1);
                for (var r = 0, s = Math.min(t.length - n, 4); r < s; ++r) t[n + r] = e >>> 8 * (i ? r : 3 - r) & 255
            }

            function U(t, e, n, i, r, s) {
                if (n + i > t.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function B(t, e, n, i, r) {
                return r || U(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), Z.write(t, e, n, i, 23, 4), n + 4
            }

            function z(t, e, n, i, r) {
                return r || U(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), Z.write(t, e, n, i, 52, 8), n + 8
            }

            function V(t) {
                if (t = q(t).replace(et, ""), t.length < 2) return "";
                for (; t.length % 4 !== 0;) t += "=";
                return t
            }

            function q(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }

            function H(t) {
                return t < 16 ? "0" + t.toString(16) : t.toString(16)
            }

            function W(t, e) {
                e = e || 1 / 0;
                for (var n, i = t.length, r = null, s = [], o = 0; o < i; ++o) {
                    if (n = t.charCodeAt(o), n > 55295 && n < 57344) {
                        if (!r) {
                            if (n > 56319) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === i) {
                                (e -= 3) > -1 && s.push(239, 191, 189);
                                continue
                            }
                            r = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && s.push(239, 191, 189), r = n;
                            continue
                        }
                        n = (r - 55296 << 10 | n - 56320) + 65536
                    } else r && (e -= 3) > -1 && s.push(239, 191, 189);
                    if (r = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        s.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        s.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return s
            }

            function G(t) {
                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                return e
            }

            function Y(t, e) {
                for (var n, i, r, s = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) n = t.charCodeAt(o), i = n >> 8, r = n % 256, s.push(r), s.push(i);
                return s
            }

            function X(t) {
                return J.toByteArray(V(t))
            }

            function K(t, e, n, i) {
                for (var r = 0; r < i && !(r + n >= e.length || r >= t.length); ++r) e[r + n] = t[r];
                return r
            }

            function Q(t) {
                return t !== t
            }
            var J = t("base64-js"),
                Z = t("ieee754"),
                $ = t("isarray");
            n.Buffer = o, n.SlowBuffer = v, n.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : i(), n.kMaxLength = r(), o.poolSize = 8192, o._augment = function(t) {
                return t.__proto__ = o.prototype, t
            }, o.from = function(t, e, n) {
                return a(null, t, e, n)
            }, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
                value: null,
                configurable: !0
            })), o.alloc = function(t, e, n) {
                return l(null, t, e, n)
            }, o.allocUnsafe = function(t) {
                return h(null, t)
            }, o.allocUnsafeSlow = function(t) {
                return h(null, t)
            }, o.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }, o.compare = function(t, e) {
                if (!o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, i = e.length, r = 0, s = Math.min(n, i); r < s; ++r)
                    if (t[r] !== e[r]) {
                        n = t[r], i = e[r];
                        break
                    }
                return n < i ? -1 : i < n ? 1 : 0
            }, o.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, o.concat = function(t, e) {
                if (!$(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return o.alloc(0);
                var n;
                if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var i = o.allocUnsafe(e),
                    r = 0;
                for (n = 0; n < t.length; ++n) {
                    var s = t[n];
                    if (!o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(i, r), r += s.length
                }
                return i
            }, o.byteLength = g, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                return this
            }, o.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                return this
            }, o.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                return this
            }, o.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : _.apply(this, arguments)
            }, o.prototype.equals = function(t) {
                if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === o.compare(this, t)
            }, o.prototype.inspect = function() {
                var t = "",
                    e = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
            }, o.prototype.compare = function(t, e, n, i, r) {
                if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), e < 0 || n > t.length || i < 0 || r > this.length) throw new RangeError("out of range index");
                if (i >= r && e >= n) return 0;
                if (i >= r) return -1;
                if (e >= n) return 1;
                if (e >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === t) return 0;
                for (var s = r - i, a = n - e, c = Math.min(s, a), l = this.slice(i, r), h = t.slice(e, n), u = 0; u < c; ++u)
                    if (l[u] !== h[u]) {
                        s = l[u], a = h[u];
                        break
                    }
                return s < a ? -1 : a < s ? 1 : 0
            }, o.prototype.includes = function(t, e, n) {
                return this.indexOf(t, e, n) !== -1
            }, o.prototype.indexOf = function(t, e, n) {
                return b(this, t, e, n, !0)
            }, o.prototype.lastIndexOf = function(t, e, n) {
                return b(this, t, e, n, !1)
            }, o.prototype.write = function(t, e, n, i) {
                if (void 0 === e) i = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) i = e, n = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e = 0 | e, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                }
                var r = this.length - e;
                if ((void 0 === n || n > r) && (n = r), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                for (var s = !1;;) switch (i) {
                    case "hex":
                        return w(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return x(this, t, e, n);
                    case "ascii":
                        return T(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return S(this, t, e, n);
                    case "base64":
                        return A(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return C(this, t, e, n);
                    default:
                        if (s) throw new TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), s = !0
                }
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var tt = 4096;
            o.prototype.slice = function(t, e) {
                var n = this.length;
                t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
                var i;
                if (o.TYPED_ARRAY_SUPPORT) i = this.subarray(t, e), i.__proto__ = o.prototype;
                else {
                    var r = e - t;
                    i = new o(r, (void 0));
                    for (var s = 0; s < r; ++s) i[s] = this[s + t]
                }
                return i
            }, o.prototype.readUIntLE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || N(t, e, this.length);
                for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256);) i += this[t + s] * r;
                return i
            }, o.prototype.readUIntBE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || N(t, e, this.length);
                for (var i = this[t + --e], r = 1; e > 0 && (r *= 256);) i += this[t + --e] * r;
                return i
            }, o.prototype.readUInt8 = function(t, e) {
                return e || N(t, 1, this.length), this[t]
            }, o.prototype.readUInt16LE = function(t, e) {
                return e || N(t, 2, this.length), this[t] | this[t + 1] << 8
            }, o.prototype.readUInt16BE = function(t, e) {
                return e || N(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, o.prototype.readUInt32LE = function(t, e) {
                return e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, o.prototype.readUInt32BE = function(t, e) {
                return e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, o.prototype.readIntLE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || N(t, e, this.length);
                for (var i = this[t], r = 1, s = 0; ++s < e && (r *= 256);) i += this[t + s] * r;
                return r *= 128, i >= r && (i -= Math.pow(2, 8 * e)), i
            }, o.prototype.readIntBE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || N(t, e, this.length);
                for (var i = e, r = 1, s = this[t + --i]; i > 0 && (r *= 256);) s += this[t + --i] * r;
                return r *= 128, s >= r && (s -= Math.pow(2, 8 * e)), s
            }, o.prototype.readInt8 = function(t, e) {
                return e || N(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t]
            }, o.prototype.readInt16LE = function(t, e) {
                e || N(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, o.prototype.readInt16BE = function(t, e) {
                e || N(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, o.prototype.readInt32LE = function(t, e) {
                return e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, o.prototype.readInt32BE = function(t, e) {
                return e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, o.prototype.readFloatLE = function(t, e) {
                return e || N(t, 4, this.length), Z.read(this, t, !0, 23, 4)
            }, o.prototype.readFloatBE = function(t, e) {
                return e || N(t, 4, this.length), Z.read(this, t, !1, 23, 4)
            }, o.prototype.readDoubleLE = function(t, e) {
                return e || N(t, 8, this.length), Z.read(this, t, !0, 52, 8)
            }, o.prototype.readDoubleBE = function(t, e) {
                return e || N(t, 8, this.length), Z.read(this, t, !1, 52, 8)
            }, o.prototype.writeUIntLE = function(t, e, n, i) {
                if (t = +t, e = 0 | e, n = 0 | n, !i) {
                    var r = Math.pow(2, 8 * n) - 1;
                    j(this, t, e, n, r, 0)
                }
                var s = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < n && (s *= 256);) this[e + o] = t / s & 255;
                return e + n
            }, o.prototype.writeUIntBE = function(t, e, n, i) {
                if (t = +t, e = 0 | e, n = 0 | n, !i) {
                    var r = Math.pow(2, 8 * n) - 1;
                    j(this, t, e, n, r, 0)
                }
                var s = n - 1,
                    o = 1;
                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) this[e + s] = t / o & 255;
                return e + n
            }, o.prototype.writeUInt8 = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
            }, o.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
            }, o.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
            }, o.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : F(this, t, e, !0), e + 4
            }, o.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4
            }, o.prototype.writeIntLE = function(t, e, n, i) {
                if (t = +t, e = 0 | e, !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    j(this, t, e, n, r - 1, -r)
                }
                var s = 0,
                    o = 1,
                    a = 0;
                for (this[e] = 255 & t; ++s < n && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s - 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
                return e + n
            }, o.prototype.writeIntBE = function(t, e, n, i) {
                if (t = +t, e = 0 | e, !i) {
                    var r = Math.pow(2, 8 * n - 1);
                    j(this, t, e, n, r - 1, -r)
                }
                var s = n - 1,
                    o = 1,
                    a = 0;
                for (this[e + s] = 255 & t; --s >= 0 && (o *= 256);) t < 0 && 0 === a && 0 !== this[e + s + 1] && (a = 1), this[e + s] = (t / o >> 0) - a & 255;
                return e + n
            }, o.prototype.writeInt8 = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, o.prototype.writeInt16LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2
            }, o.prototype.writeInt16BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2
            }, o.prototype.writeInt32LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : F(this, t, e, !0), e + 4
            }, o.prototype.writeInt32BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || j(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), o.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4
            }, o.prototype.writeFloatLE = function(t, e, n) {
                return B(this, t, e, !0, n)
            }, o.prototype.writeFloatBE = function(t, e, n) {
                return B(this, t, e, !1, n)
            }, o.prototype.writeDoubleLE = function(t, e, n) {
                return z(this, t, e, !0, n)
            }, o.prototype.writeDoubleBE = function(t, e, n) {
                return z(this, t, e, !1, n)
            }, o.prototype.copy = function(t, e, n, i) {
                if (n || (n = 0), i || 0 === i || (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
                var r, s = i - n;
                if (this === t && n < e && e < i)
                    for (r = s - 1; r >= 0; --r) t[r + e] = this[r + n];
                else if (s < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                    for (r = 0; r < s; ++r) t[r + e] = this[r + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + s), e);
                return s
            }, o.prototype.fill = function(t, e, n, i) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (i = e, e = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === t.length) {
                        var r = t.charCodeAt(0);
                        r < 256 && (t = r)
                    }
                    if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                    if ("string" == typeof i && !o.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                } else "number" == typeof t && (t = 255 & t);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
                var s;
                if ("number" == typeof t)
                    for (s = e; s < n; ++s) this[s] = t;
                else {
                    var a = o.isBuffer(t) ? t : W(new o(t, i).toString()),
                        c = a.length;
                    for (s = 0; s < n - e; ++s) this[s + e] = a[s % c]
                }
                return this
            };
            var et = /[^+\/0-9A-Za-z-_]/g
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 269,
        ieee754: 270,
        isarray: 271
    }],
    269: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = t.length;
            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0
        }

        function r(t) {
            return 3 * t.length / 4 - i(t)
        }

        function s(t) {
            var e, n, r, s, o, a, c = t.length;
            o = i(t), a = new u(3 * c / 4 - o), r = o > 0 ? c - 4 : c;
            var l = 0;
            for (e = 0, n = 0; e < r; e += 4, n += 3) s = h[t.charCodeAt(e)] << 18 | h[t.charCodeAt(e + 1)] << 12 | h[t.charCodeAt(e + 2)] << 6 | h[t.charCodeAt(e + 3)], a[l++] = s >> 16 & 255, a[l++] = s >> 8 & 255, a[l++] = 255 & s;
            return 2 === o ? (s = h[t.charCodeAt(e)] << 2 | h[t.charCodeAt(e + 1)] >> 4, a[l++] = 255 & s) : 1 === o && (s = h[t.charCodeAt(e)] << 10 | h[t.charCodeAt(e + 1)] << 4 | h[t.charCodeAt(e + 2)] >> 2, a[l++] = s >> 8 & 255, a[l++] = 255 & s), a
        }

        function o(t) {
            return l[t >> 18 & 63] + l[t >> 12 & 63] + l[t >> 6 & 63] + l[63 & t]
        }

        function a(t, e, n) {
            for (var i, r = [], s = e; s < n; s += 3) i = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2], r.push(o(i));
            return r.join("")
        }

        function c(t) {
            for (var e, n = t.length, i = n % 3, r = "", s = [], o = 16383, c = 0, h = n - i; c < h; c += o) s.push(a(t, c, c + o > h ? h : c + o));
            return 1 === i ? (e = t[n - 1], r += l[e >> 2], r += l[e << 4 & 63], r += "==") : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], r += l[e >> 10], r += l[e >> 4 & 63], r += l[e << 2 & 63], r += "="), s.push(r), s.join("")
        }
        n.byteLength = r, n.toByteArray = s, n.fromByteArray = c;
        for (var l = [], h = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, m = f.length; d < m; ++d) l[d] = f[d], h[f.charCodeAt(d)] = d;
        h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63
    }, {}],
    270: [function(t, e, n) {
        n.read = function(t, e, n, i, r) {
            var s, o, a = 8 * r - i - 1,
                c = (1 << a) - 1,
                l = c >> 1,
                h = -7,
                u = n ? r - 1 : 0,
                f = n ? -1 : 1,
                d = t[e + u];
            for (u += f, s = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; s = 256 * s + t[e + u], u += f, h -= 8);
            for (o = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; o = 256 * o + t[e + u], u += f, h -= 8);
            if (0 === s) s = 1 - l;
            else {
                if (s === c) return o ? NaN : (d ? -1 : 1) * (1 / 0);
                o += Math.pow(2, i), s -= l
            }
            return (d ? -1 : 1) * o * Math.pow(2, s - i)
        }, n.write = function(t, e, n, i, r, s) {
            var o, a, c, l = 8 * s - r - 1,
                h = (1 << l) - 1,
                u = h >> 1,
                f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = i ? 0 : s - 1,
                m = i ? 1 : -1,
                p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), e += o + u >= 1 ? f / c : f * Math.pow(2, 1 - u), e * c >= 2 && (o++, c /= 2), o + u >= h ? (a = 0, o = h) : o + u >= 1 ? (a = (e * c - 1) * Math.pow(2, r), o += u) : (a = e * Math.pow(2, u - 1) * Math.pow(2, r), o = 0)); r >= 8; t[n + d] = 255 & a, d += m, a /= 256, r -= 8);
            for (o = o << r | a, l += r; l > 0; t[n + d] = 255 & o, d += m, o /= 256, l -= 8);
            t[n + d - m] |= 128 * p
        }
    }, {}],
    271: [function(t, e, n) {
        var i = {}.toString;
        e.exports = Array.isArray || function(t) {
            return "[object Array]" == i.call(t)
        }
    }, {}],
    272: [function(t, e, n) {
        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (u === setTimeout) return setTimeout(t, 0);
            if ((u === i || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
            try {
                return u(t, 0)
            } catch (e) {
                try {
                    return u.call(null, t, 0)
                } catch (e) {
                    return u.call(this, t, 0)
                }
            }
        }

        function o(t) {
            if (f === clearTimeout) return clearTimeout(t);
            if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
            try {
                return f(t)
            } catch (e) {
                try {
                    return f.call(null, t)
                } catch (e) {
                    return f.call(this, t)
                }
            }
        }

        function a() {
            v && m && (v = !1, m.length ? p = m.concat(p) : g = -1, p.length && c())
        }

        function c() {
            if (!v) {
                var t = s(a);
                v = !0;
                for (var e = p.length; e;) {
                    for (m = p, p = []; ++g < e;) m && m[g].run();
                    g = -1, e = p.length
                }
                m = null, v = !1, o(t)
            }
        }

        function l(t, e) {
            this.fun = t, this.array = e
        }

        function h() {}
        var u, f, d = e.exports = {};
        ! function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                u = i
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                f = r
            }
        }();
        var m, p = [],
            v = !1,
            g = -1;
        d.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            p.push(new l(t, e)), 1 !== p.length || v || s(c)
        }, l.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = h, d.addListener = h, d.once = h, d.off = h, d.removeListener = h, d.removeAllListeners = h, d.emit = h, d.prependListener = h, d.prependOnceListener = h, d.listeners = function(t) {
            return []
        }, d.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, {}],
    273: [function(t, e, n) {
        Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                n = this,
                i = function() {},
                r = function() {
                    return n.apply(this instanceof i && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return i.prototype = this.prototype, r.prototype = new i, r
        })
    }, {}],
    274: [function(t, e, n) {
        e.exports = t("es6-promise").polyfill()
    }, {
        "es6-promise": 275
    }],
    275: [function(t, e, n) {
        "use strict";
        var i = t("./promise/promise").Promise,
            r = t("./promise/polyfill").polyfill;
        n.Promise = i, n.polyfill = r
    }, {
        "./promise/polyfill": 279,
        "./promise/promise": 280
    }],
    276: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = this;
            if (!r(t)) throw new TypeError("You must pass an array to all.");
            return new e(function(e, n) {
                function i(t) {
                    return function(e) {
                        r(t, e)
                    }
                }

                function r(t, n) {
                    a[t] = n, 0 === --c && e(a)
                }
                var o, a = [],
                    c = t.length;
                0 === c && e([]);
                for (var l = 0; l < t.length; l++) o = t[l], o && s(o.then) ? o.then(i(l), n) : r(l, o)
            })
        }
        var r = t("./utils").isArray,
            s = t("./utils").isFunction;
        n.all = i
    }, {
        "./utils": 284
    }],
    277: [function(t, e, n) {
        (function(t, e) {
            "use strict";

            function i() {
                return function() {
                    t.nextTick(o)
                }
            }

            function r() {
                var t = 0,
                    e = new h(o),
                    n = document.createTextNode("");
                return e.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = t = ++t % 2
                    }
            }

            function s() {
                return function() {
                    u.setTimeout(o, 1)
                }
            }

            function o() {
                for (var t = 0; t < f.length; t++) {
                    var e = f[t],
                        n = e[0],
                        i = e[1];
                    n(i)
                }
                f = []
            }

            function a(t, e) {
                var n = f.push([t, e]);
                1 === n && c()
            }
            var c, l = "undefined" != typeof window ? window : {},
                h = l.MutationObserver || l.WebKitMutationObserver,
                u = "undefined" != typeof e ? e : void 0 === this ? window : this,
                f = [];
            c = "undefined" != typeof t && "[object process]" === {}.toString.call(t) ? i() : h ? r() : s(), n.asap = a
        }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 272
    }],
    278: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            return 2 !== arguments.length ? r[t] : void(r[t] = e)
        }
        var r = {
            instrument: !1
        };
        n.config = r, n.configure = i
    }, {}],
    279: [function(t, e, n) {
        (function(e) {
            "use strict";

            function i() {
                var t;
                t = "undefined" != typeof e ? e : "undefined" != typeof window && window.document ? window : self;
                var n = "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && function() {
                    var e;
                    return new t.Promise(function(t) {
                        e = t
                    }), s(e)
                }();
                n || (t.Promise = r)
            }
            var r = t("./promise").Promise,
                s = t("./utils").isFunction;
            n.polyfill = i
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./promise": 280,
        "./utils": 284
    }],
    280: [function(t, e, n) {
        "use strict";

        function i(t) {
            if (!v(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof i)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._subscribers = [], r(t, this)
        }

        function r(t, e) {
            function n(t) {
                l(e, t)
            }

            function i(t) {
                u(e, t)
            }
            try {
                t(n, i)
            } catch (r) {
                i(r)
            }
        }

        function s(t, e, n, i) {
            var r, s, o, a, h = v(n);
            if (h) try {
                r = n(i), o = !0
            } catch (f) {
                a = !0, s = f
            } else r = i, o = !0;
            c(e, r) || (h && o ? l(e, r) : a ? u(e, s) : t === T ? l(e, r) : t === S && u(e, r))
        }

        function o(t, e, n, i) {
            var r = t._subscribers,
                s = r.length;
            r[s] = e, r[s + T] = n, r[s + S] = i
        }

        function a(t, e) {
            for (var n, i, r = t._subscribers, o = t._detail, a = 0; a < r.length; a += 3) n = r[a], i = r[a + e], s(e, n, i, o);
            t._subscribers = null
        }

        function c(t, e) {
            var n, i = null;
            try {
                if (t === e) throw new TypeError("A promises callback cannot return that same promise.");
                if (p(e) && (i = e.then, v(i))) return i.call(e, function(i) {
                    return !!n || (n = !0, void(e !== i ? l(t, i) : h(t, i)))
                }, function(e) {
                    return !!n || (n = !0, void u(t, e))
                }), !0
            } catch (r) {
                return !!n || (u(t, r), !0)
            }
            return !1
        }

        function l(t, e) {
            t === e ? h(t, e) : c(t, e) || h(t, e)
        }

        function h(t, e) {
            t._state === w && (t._state = x, t._detail = e, m.async(f, t))
        }

        function u(t, e) {
            t._state === w && (t._state = x, t._detail = e, m.async(d, t))
        }

        function f(t) {
            a(t, t._state = T)
        }

        function d(t) {
            a(t, t._state = S)
        }
        var m = t("./config").config,
            p = (t("./config").configure, t("./utils").objectOrFunction),
            v = t("./utils").isFunction,
            g = (t("./utils").now, t("./all").all),
            _ = t("./race").race,
            y = t("./resolve").resolve,
            b = t("./reject").reject,
            E = t("./asap").asap;
        m.async = E;
        var w = void 0,
            x = 0,
            T = 1,
            S = 2;
        i.prototype = {
            constructor: i,
            _state: void 0,
            _detail: void 0,
            _subscribers: void 0,
            then: function(t, e) {
                var n = this,
                    i = new this.constructor(function() {});
                if (this._state) {
                    var r = arguments;
                    m.async(function() {
                        s(n._state, i, r[n._state - 1], n._detail)
                    })
                } else o(this, i, t, e);
                return i
            },
            "catch": function(t) {
                return this.then(null, t)
            }
        }, i.all = g, i.race = _, i.resolve = y, i.reject = b, n.Promise = i
    }, {
        "./all": 276,
        "./asap": 277,
        "./config": 278,
        "./race": 281,
        "./reject": 282,
        "./resolve": 283,
        "./utils": 284
    }],
    281: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = this;
            if (!r(t)) throw new TypeError("You must pass an array to race.");
            return new e(function(e, n) {
                for (var i, r = 0; r < t.length; r++) i = t[r], i && "function" == typeof i.then ? i.then(e, n) : e(i)
            })
        }
        var r = t("./utils").isArray;
        n.race = i
    }, {
        "./utils": 284
    }],
    282: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = this;
            return new e(function(e, n) {
                n(t)
            })
        }
        n.reject = i
    }, {}],
    283: [function(t, e, n) {
        "use strict";

        function i(t) {
            if (t && "object" == typeof t && t.constructor === this) return t;
            var e = this;
            return new e(function(e) {
                e(t)
            })
        }
        n.resolve = i
    }, {}],
    284: [function(t, e, n) {
        "use strict";

        function i(t) {
            return r(t) || "object" == typeof t && null !== t
        }

        function r(t) {
            return "function" == typeof t
        }

        function s(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        var o = Date.now || function() {
            return (new Date).getTime()
        };
        n.objectOrFunction = i, n.isFunction = r, n.isArray = s, n.now = o;
    }, {}],
    285: [function(t, e, n) {
        ! function() {
            for (var t = 0, e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, n) {
                var i = Date.now(),
                    r = Math.max(0, 16 - (i - t)),
                    s = window.setTimeout(function() {
                        e(i + r)
                    }, r);
                return t = i + r, s
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        }()
    }, {}],
    286: [function(t, e, n) {
        "use strict";
        e.exports = {
            Queue: t("./ac-queue/Queue"),
            QueueItem: t("./ac-queue/QueueItem"),
            LiveQueue: t("./ac-queue/LiveQueue")
        }
    }, {
        "./ac-queue/LiveQueue": 287,
        "./ac-queue/Queue": 288,
        "./ac-queue/QueueItem": 289
    }],
    287: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._queue = new r, this._maxProcesses = t || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
                _run: this._run.bind(this),
                _releaseSlot: this._releaseSlot.bind(this)
            }
        }
        t("ac-polyfills/Promise"), t("ac-polyfills/requestAnimationFrame"), t("ac-polyfills/Function/prototype.bind");
        var r = t("./Queue"),
            s = (t("./QueueItem"), i.prototype);
        s.start = function() {
            this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
        }, s.pause = function() {
            this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
        }, s.stop = function() {
            this.pause(), this.clear()
        }, s.enqueue = function(t, e) {
            if ("function" != typeof t) throw new Error("LiveQueue can only enqueue functions");
            return this._queue.enqueue(t, e)
        }, s.clear = function() {
            this._queue = new r
        }, s.destroy = function() {
            this.pause(), this._isRunning = !1, this._queue = null, this._boundFunctions = null
        }, s.count = function() {
            return this._queue.count() + this.pending()
        }, s.pending = function() {
            return this._maxProcesses - this._availableSlots
        }, s.isEmpty = function() {
            return 0 === this.count()
        }, s._run = function() {
            if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 != this._availableSlots)) {
                var t = this._queue.dequeue(),
                    e = t.data();
                this._isPromise(e) && (this._retainSlot(), e.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
            }
        }, s._retainSlot = function() {
            this._availableSlots--
        }, s._releaseSlot = function() {
            this._availableSlots++, this._stopRunningIfDone()
        }, s._stopRunningIfDone = function() {
            0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
        }, s._isPromise = function(t) {
            return !(!t || "function" != typeof t.then)
        }, e.exports = i
    }, {
        "./Queue": 288,
        "./QueueItem": 289,
        "ac-polyfills/Function/prototype.bind": 273,
        "ac-polyfills/Promise": 274,
        "ac-polyfills/requestAnimationFrame": 285
    }],
    288: [function(t, e, n) {
        "use strict";

        function i() {
            this._items = []
        }
        var r = t("./QueueItem"),
            s = i.prototype;
        s.enqueue = function(t, e) {
            return void 0 === e && (e = i.PRIORITY_DEFAULT), this.enqueueQueueItem(new r(t, e))
        }, s.enqueueQueueItem = function(t) {
            return this._items.push(t), t
        }, s.dequeue = function() {
            this._heapSort();
            var t = this._items.length - 1,
                e = this._items[0];
            return this._items[0] = this._items[t], this._items.pop(), e
        }, s.peek = function() {
            return 0 == this.count() ? null : (this._heapSort(), this._items[0])
        }, s.isEmpty = function() {
            return 0 === this._items.length
        }, s.count = function() {
            return this._items.length
        }, s.toString = function() {
            for (var t = ["Queue total items: " + this.count() + "\n"], e = 0; e < this.count(); ++e) t.push(this._items[e].toString() + "\n");
            return t.join("")
        }, s._heapSort = function() {
            for (var t = 0, e = this._items.length - 1; e >= 0; e--)
                for (var n = e; n > 0;) {
                    t++;
                    var i = Math.floor((n - 1) / 2);
                    if (this._items[n].compareTo(this._items[i]) >= 0) break;
                    var r = this._items[n];
                    this._items[n] = this._items[i], this._items[i] = r, n = i
                }
        }, i.PRIORITY_LOW = 10, i.PRIORITY_DEFAULT = 5, i.PRIORITY_HIGH = 1, e.exports = i
    }, {
        "./QueueItem": 289
    }],
    289: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.priority = e, this.data = t, this.insertionOrder = r++
        }
        var r = 0,
            s = i.prototype;
        s.compareTo = function(t) {
            return this.priority < t.priority ? -1 : this.priority > t.priority ? 1 : this.insertionOrder < t.insertionOrder ? -1 : 1
        }, s.toString = function() {
            return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
        }, e.exports = i
    }, {}],
    290: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n, i, r, s, o, a, c) {
            return function() {
                var l = e.getContext("2d");
                l.drawImage(n, i, r, s + a, o + c, 0, 0, s + a, o + c), t.appendChild(e)
            }
        }
    }, {}],
    291: [function(t, e, n) {
        "use strict";
        var i = t("ac-queue").LiveQueue,
            r = t("./helpers/createImageDrawCall");
        e.exports = function(t, e) {
            for (var n = new i(1), s = e.rows || 3, o = e.columns || 3, a = e.retina || !1, c = [], l = 0; l < o; l++) {
                c[l] = [];
                for (var h = 0; h < s; h++) {
                    c[l][h] = document.createElement("canvas")
                }
            }
            var u = document.createElement("div");
            u.classList.add("canvas-grid");
            var f = getComputedStyle(t),
                d = f.backgroundImage,
                m = d.match(/url\("?(.*?)"?\)/i)[1],
                p = new Image;
            return p.src = m, p.addEventListener("load", function v() {
                p.removeEventListener("load", v);
                var t = a ? .5 : 1,
                    e = Math.floor(p.naturalWidth / o),
                    i = Math.floor(p.naturalHeight / s);
                u.style.width = Math.round(p.naturalWidth * t) + "px", u.style.height = Math.round(p.naturalHeight * t) + "px";
                for (var l = 0; l < o; l++)
                    for (var h = 0; h < s; h++) {
                        var f = l === o - 1 ? 0 : 5,
                            d = h === s - 1 ? 0 : 5,
                            m = c[l][h];
                        m.style.position = "absolute", m.width = e + f, m.height = i + d, m.style.width = Math.round(m.width * t) + "px", m.style.height = Math.round(m.height * t) + "px";
                        var g = Math.round(e * l),
                            _ = Math.round(i * h);
                        m.style.left = Math.round(g * t) + "px", m.style.top = Math.round(_ * t) + "px", n.enqueue(r(u, m, p, g, _, e, i, f, d))
                    }
                n.start()
            }), new Promise(function(t, e) {
                n.enqueue(function() {
                    n.destroy(), t(u)
                }, 10)
            })
        }
    }, {
        "./helpers/createImageDrawCall": 290,
        "ac-queue": 286
    }],
    292: [function(t, e, n) {
        "use strict";
        e.exports = {
            log: t("./ac-console/log")
        }
    }, {
        "./ac-console/log": 293
    }],
    293: [function(t, e, n) {
        "use strict";
        var i = "f7c9180f-5c45-47b4-8de4-428015f096c0",
            r = !! function() {
                try {
                    return window.localStorage.getItem(i)
                } catch (t) {}
            }();
        e.exports = function() {
            window.console && "undefined" != typeof console.log && r && console.log.apply(console, Array.prototype.slice.call(arguments, 0))
        }
    }, {}],
    294: [function(t, e, n) {
        var i = t("./ac-element-engagement/ElementEngagement");
        e.exports = new i, e.exports.ElementEngagement = i
    }, {
        "./ac-element-engagement/ElementEngagement": 295
    }],
    295: [function(t, e, n) {
        "use strict";
        var i, r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = {
                create: t("@marcom/ac-object/create"),
                defaults: t("@marcom/ac-object/defaults"),
                extend: t("@marcom/ac-object/extend")
            },
            o = t("@marcom/ac-element-tracker").ElementTracker,
            a = {
                timeToEngage: 500,
                inViewThreshold: .75,
                stopOnEngaged: !0
            },
            c = {
                thresholdEnterTime: 0,
                thresholdExitTime: 0,
                inThreshold: !1,
                engaged: !1,
                tracking: !0
            },
            l = function() {
                o.call(this), r.call(this), this._thresholdEnter = this._thresholdEnter.bind(this), this._thresholdExit = this._thresholdExit.bind(this), this._enterView = this._enterView.bind(this), this._exitView = this._exitView.bind(this)
            };
        i = l.prototype = s.create(o.prototype), i = s.extend(i, r.prototype), i._decorateTrackedElement = function(t, e) {
            var n;
            n = s.defaults(a, e || {}), s.extend(t, n), s.extend(t, c)
        }, i._attachElementListeners = function(t) {
            t.on("thresholdenter", this._thresholdEnter, this), t.on("thresholdexit", this._thresholdExit, this), t.on("enterview", this._enterView, this), t.on("exitview", this._exitView, this)
        }, i._removeElementListeners = function(t) {
            t.off("thresholdenter", this._thresholdEnter), t.off("thresholdexit", this._thresholdExit), t.off("enterview", this._enterView), t.off("exitview", this._exitView)
        }, i._attachAllElementListeners = function() {
            this.elements.forEach(function(t) {
                t.stopOnEngaged ? t.engaged || this._attachElementListeners(t) : this._attachElementListeners(t)
            }, this)
        }, i._removeAllElementListeners = function() {
            this.elements.forEach(function(t) {
                this._removeElementListeners(t)
            }, this)
        }, i._elementInViewPastThreshold = function(t) {
            var e = window.innerHeight || document.documentElement.clientHeight,
                n = !1;
            return n = t.pixelsInView === e || t.percentInView > t.inViewThreshold
        }, i._ifInView = function(t, e) {
            var n = t.inThreshold;
            o.prototype._ifInView.apply(this, arguments), !n && this._elementInViewPastThreshold(t) && (t.inThreshold = !0, t.trigger("thresholdenter", t), "number" == typeof t.timeToEngage && t.timeToEngage >= 0 && (t.engagedTimeout = window.setTimeout(this._engaged.bind(this, t), t.timeToEngage)))
        }, i._ifAlreadyInView = function(t) {
            var e = t.inThreshold;
            o.prototype._ifAlreadyInView.apply(this, arguments), e && !this._elementInViewPastThreshold(t) && (t.inThreshold = !1, t.trigger("thresholdexit", t), t.engagedTimeout && (window.clearTimeout(t.engagedTimeout), t.engagedTimeout = null))
        }, i._engaged = function(t) {
            t.engagedTimeout = null, this._elementEngaged(t), t.trigger("engaged", t), this.trigger("engaged", t)
        }, i._thresholdEnter = function(t) {
            t.thresholdEnterTime = Date.now(), t.thresholdExitTime = 0, this.trigger("thresholdenter", t)
        }, i._thresholdExit = function(t) {
            t.thresholdExitTime = Date.now(), this.trigger("thresholdexit", t)
        }, i._enterView = function(t) {
            this.trigger("enterview", t)
        }, i._exitView = function(t) {
            this.trigger("exitview", t)
        }, i._elementEngaged = function(t) {
            t.engaged = !0, t.stopOnEngaged && this.stop(t)
        }, i.stop = function(t) {
            this.tracking && !t && (this._removeAllElementListeners(), o.prototype.stop.call(this)), t && t.tracking && (t.tracking = !1, this._removeElementListeners(t))
        }, i.start = function(t) {
            t || this._attachAllElementListeners(), t && !t.tracking && (t.stopOnEngaged ? t.engaged || (t.tracking = !0, this._attachElementListeners(t)) : (t.tracking = !0, this._attachElementListeners(t))), this.tracking ? (this.refreshAllElementMetrics(), this.refreshAllElementStates()) : o.prototype.start.call(this)
        }, i.addElement = function(t, e) {
            var n = o.prototype.addElement.call(this, t);
            return this._decorateTrackedElement(n, e), n
        }, i.addElements = function(t, e) {
            [].forEach.call(t, function(t) {
                this.addElement(t, e)
            }, this)
        }, e.exports = l
    }, {
        "@marcom/ac-element-tracker": 331,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-object/extend": 447
    }],
    296: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/isArray"), t("@marcom/ac-polyfills/Array/prototype.forEach"), e.exports = function(t) {
            var e = [],
                n = function(t) {
                    Array.isArray(t) ? t.forEach(n) : e.push(t)
                };
            return t.forEach(n), e
        }
    }, {
        "@marcom/ac-polyfills/Array/isArray": void 0,
        "@marcom/ac-polyfills/Array/prototype.forEach": void 0
    }],
    297: [function(t, e, n) {
        "use strict";
        e.exports = {
            flatten: t("./flatten"),
            intersection: t("./intersection"),
            shuffle: t("./shuffle"),
            toArray: t("./toArray"),
            union: t("./union"),
            unique: t("./unique"),
            without: t("./without")
        }
    }, {
        "./flatten": 296,
        "./intersection": 298,
        "./shuffle": 299,
        "./toArray": 300,
        "./union": 301,
        "./unique": 302,
        "./without": 303
    }],
    298: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.indexOf"), e.exports = function(t) {
            if (!t) return [];
            var e, n = arguments.length,
                i = 0,
                r = t.length,
                s = [];
            for (i; i < r; i++)
                if (e = t[i], !(s.indexOf(e) > -1)) {
                    for (var o = 1; o < n && !(arguments[o].indexOf(e) < 0); o++);
                    o === n && s.push(e)
                }
            return s
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0
    }],
    299: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            for (var e, n, i = t.length; i;) e = Math.floor(Math.random() * i--), n = t[i], t[i] = t[e], t[e] = n;
            return t
        }
    }, {}],
    300: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.slice"), e.exports = function(t) {
            return Array.prototype.slice.call(t)
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.slice": void 0
    }],
    301: [function(t, e, n) {
        "use strict";
        var i = t("./flatten"),
            r = t("./toArray"),
            s = t("./unique");
        e.exports = function(t) {
            return s(i(r(arguments)))
        }
    }, {
        "./flatten": 296,
        "./toArray": 300,
        "./unique": 302
    }],
    302: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.reduce"), e.exports = function(t) {
            var e = function(t, e) {
                return t.indexOf(e) < 0 && t.push(e), t
            };
            return t.reduce(e, [])
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
        "@marcom/ac-polyfills/Array/prototype.reduce": void 0
    }],
    303: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.slice"), e.exports = function(t, e, n) {
            var i, r = t.indexOf(e),
                s = t.length;
            if (!(r >= 0)) return t;
            if (n) {
                i = t.slice(0, s);
                var o, a = 0;
                for (o = r; o < s; o++) t[o] === e && (i.splice(o - a, 1), a++)
            } else r === s - 1 ? i = t.slice(0, s - 1) : 0 === r ? i = t.slice(1) : (i = t.slice(0, r), i = i.concat(t.slice(r + 1)));
            return i
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0
    }],
    304: [function(t, e, n) {
        arguments[4][67][0].apply(n, arguments)
    }, {
        dup: 67
    }],
    305: [function(t, e, n) {
        arguments[4][68][0].apply(n, arguments)
    }, {
        dup: 68
    }],
    306: [function(t, e, n) {
        arguments[4][69][0].apply(n, arguments)
    }, {
        dup: 69
    }],
    307: [function(t, e, n) {
        "use strict";
        e.exports = 10
    }, {}],
    308: [function(t, e, n) {
        arguments[4][70][0].apply(n, arguments)
    }, {
        dup: 70
    }],
    309: [function(t, e, n) {
        arguments[4][71][0].apply(n, arguments)
    }, {
        dup: 71
    }],
    310: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            var e, n = document.createDocumentFragment();
            if (t)
                for (e = document.createElement("div"), e.innerHTML = t; e.firstChild;) n.appendChild(e.firstChild);
            return n
        }
    }, {}],
    311: [function(t, e, n) {
        arguments[4][72][0].apply(n, arguments)
    }, {
        "./ELEMENT_NODE": 308,
        "./internal/isNodeType": 319,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        dup: 72
    }],
    312: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e) {
            return "hasAttribute" in t ? t.hasAttribute(e) : null !== t.attributes.getNamedItem(e)
        }
    }, {}],
    313: [function(t, e, n) {
        "use strict";
        e.exports = {
            createDocumentFragment: t("./createDocumentFragment"),
            filterByNodeType: t("./filterByNodeType"),
            hasAttribute: t("./hasAttribute"),
            indexOf: t("./indexOf"),
            insertAfter: t("./insertAfter"),
            insertBefore: t("./insertBefore"),
            insertFirstChild: t("./insertFirstChild"),
            insertLastChild: t("./insertLastChild"),
            isComment: t("./isComment"),
            isDocument: t("./isDocument"),
            isDocumentFragment: t("./isDocumentFragment"),
            isDocumentType: t("./isDocumentType"),
            isElement: t("./isElement"),
            isNode: t("./isNode"),
            isNodeList: t("./isNodeList"),
            isTextNode: t("./isTextNode"),
            remove: t("./remove"),
            replace: t("./replace"),
            COMMENT_NODE: t("./COMMENT_NODE"),
            DOCUMENT_FRAGMENT_NODE: t("./DOCUMENT_FRAGMENT_NODE"),
            DOCUMENT_NODE: t("./DOCUMENT_NODE"),
            DOCUMENT_TYPE_NODE: t("./DOCUMENT_TYPE_NODE"),
            ELEMENT_NODE: t("./ELEMENT_NODE"),
            TEXT_NODE: t("./TEXT_NODE")
        }
    }, {
        "./COMMENT_NODE": 304,
        "./DOCUMENT_FRAGMENT_NODE": 305,
        "./DOCUMENT_NODE": 306,
        "./DOCUMENT_TYPE_NODE": 307,
        "./ELEMENT_NODE": 308,
        "./TEXT_NODE": 309,
        "./createDocumentFragment": 310,
        "./filterByNodeType": 311,
        "./hasAttribute": 312,
        "./indexOf": 314,
        "./insertAfter": 315,
        "./insertBefore": 316,
        "./insertFirstChild": 317,
        "./insertLastChild": 318,
        "./isComment": 321,
        "./isDocument": 322,
        "./isDocumentFragment": 323,
        "./isDocumentType": 324,
        "./isElement": 325,
        "./isNode": 326,
        "./isNodeList": 327,
        "./isTextNode": 328,
        "./remove": 329,
        "./replace": 330
    }],
    314: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.indexOf"), t("@marcom/ac-polyfills/Array/prototype.slice");
        var i = (t("./internal/validate"), t("./filterByNodeType"));
        e.exports = function(t, e) {
            var n, r = t.parentNode;
            return r ? (n = r.childNodes, n = e !== !1 ? i(n, e) : Array.prototype.slice.call(n), n.indexOf(t)) : 0
        }
    }, {
        "./filterByNodeType": 311,
        "./internal/validate": 320,
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0
    }],
    315: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate");
        e.exports = function(t, e) {
            return i.insertNode(t, !0, "insertAfter"), i.childNode(e, !0, "insertAfter"), i.hasParentNode(e, "insertAfter"), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t)
        }
    }, {
        "./internal/validate": 320
    }],
    316: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate");
        e.exports = function(t, e) {
            return i.insertNode(t, !0, "insertBefore"), i.childNode(e, !0, "insertBefore"), i.hasParentNode(e, "insertBefore"), e.parentNode.insertBefore(t, e)
        }
    }, {
        "./internal/validate": 320
    }],
    317: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate");
        e.exports = function(t, e) {
            return i.insertNode(t, !0, "insertFirstChild"), i.parentNode(e, !0, "insertFirstChild"), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
        }
    }, {
        "./internal/validate": 320
    }],
    318: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate");
        e.exports = function(t, e) {
            return i.insertNode(t, !0, "insertLastChild"), i.parentNode(e, !0, "insertLastChild"), e.appendChild(t)
        }
    }, {
        "./internal/validate": 320
    }],
    319: [function(t, e, n) {
        arguments[4][73][0].apply(n, arguments)
    }, {
        "../isNode": 326,
        dup: 73
    }],
    320: [function(t, e, n) {
        arguments[4][74][0].apply(n, arguments)
    }, {
        "../COMMENT_NODE": 304,
        "../DOCUMENT_FRAGMENT_NODE": 305,
        "../ELEMENT_NODE": 308,
        "../TEXT_NODE": 309,
        "./isNodeType": 319,
        dup: 74
    }],
    321: [function(t, e, n) {
        "use strict";
        var i = t("./internal/isNodeType"),
            r = t("./COMMENT_NODE");
        e.exports = function(t) {
            return i(t, r)
        }
    }, {
        "./COMMENT_NODE": 304,
        "./internal/isNodeType": 319
    }],
    322: [function(t, e, n) {
        "use strict";
        var i = t("./internal/isNodeType"),
            r = t("./DOCUMENT_NODE");
        e.exports = function(t) {
            return i(t, r)
        }
    }, {
        "./DOCUMENT_NODE": 306,
        "./internal/isNodeType": 319
    }],
    323: [function(t, e, n) {
        arguments[4][75][0].apply(n, arguments)
    }, {
        "./DOCUMENT_FRAGMENT_NODE": 305,
        "./internal/isNodeType": 319,
        dup: 75
    }],
    324: [function(t, e, n) {
        "use strict";
        var i = t("./internal/isNodeType"),
            r = t("./DOCUMENT_TYPE_NODE");
        e.exports = function(t) {
            return i(t, r)
        }
    }, {
        "./DOCUMENT_TYPE_NODE": 307,
        "./internal/isNodeType": 319
    }],
    325: [function(t, e, n) {
        arguments[4][76][0].apply(n, arguments)
    }, {
        "./ELEMENT_NODE": 308,
        "./internal/isNodeType": 319,
        dup: 76
    }],
    326: [function(t, e, n) {
        arguments[4][77][0].apply(n, arguments)
    }, {
        dup: 77
    }],
    327: [function(t, e, n) {
        "use strict";
        var i = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        e.exports = function(t) {
            return !!t && ("number" == typeof t.length && (!!("object" != typeof t[0] || t[0] && t[0].nodeType) && i.test(Object.prototype.toString.call(t))))
        }
    }, {}],
    328: [function(t, e, n) {
        "use strict";
        var i = t("./internal/isNodeType"),
            r = t("./TEXT_NODE");
        e.exports = function(t) {
            return i(t, r)
        }
    }, {
        "./TEXT_NODE": 309,
        "./internal/isNodeType": 319
    }],
    329: [function(t, e, n) {
        arguments[4][78][0].apply(n, arguments)
    }, {
        "./internal/validate": 320,
        dup: 78
    }],
    330: [function(t, e, n) {
        "use strict";
        var i = t("./internal/validate");
        e.exports = function(t, e) {
            return i.insertNode(t, !0, "insertFirstChild", "newNode"), i.childNode(e, !0, "insertFirstChild", "oldNode"), i.hasParentNode(e, "insertFirstChild", "oldNode"), e.parentNode.replaceChild(t, e)
        }
    }, {
        "./internal/validate": 320
    }],
    331: [function(t, e, n) {
        var i = t("./ac-element-tracker/ElementTracker");
        e.exports = new i, e.exports.ElementTracker = i
    }, {
        "./ac-element-tracker/ElementTracker": 332
    }],
    332: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.options = c.clone(h), this.options = "object" == typeof e ? c.extend(this.options, e) : this.options, this._scrollY = o.getScrollY(), this._windowHeight = this._getWindowHeight(), this.tracking = !1, this.elements = [], t && (Array.isArray(t) || s.isNodeList(t) || s.isElement(t)) && this.addElements(t), this.refreshAllElementStates = this.refreshAllElementStates.bind(this), this.refreshAllElementMetrics = this.refreshAllElementMetrics.bind(this), this.options.autoStart && this.start()
        }
        t("@marcom/ac-polyfills/Function/prototype.bind");
        var r = t("@marcom/ac-array"),
            s = t("@marcom/ac-dom-nodes"),
            o = {
                getDimensions: t("@marcom/ac-dom-metrics/getDimensions"),
                getPagePosition: t("@marcom/ac-dom-metrics/getPagePosition"),
                getScrollY: t("@marcom/ac-dom-metrics/getScrollY")
            },
            a = t("@marcom/ac-dom-events"),
            c = t("@marcom/ac-object"),
            l = t("./TrackedElement"),
            h = {
                autoStart: !1
            },
            u = i.prototype;
        u.destroy = function() {
            var t, e;
            for (this.stop(), t = 0, e = this.elements.length; t < e; t++) this.elements[t].destroy();
            this.elements = null, this.options = null
        }, u._registerElements = function(t) {
            t = [].concat(t), t.forEach(function(t) {
                if (this._elementInDOM(t)) {
                    var e = new l(t);
                    e.offsetTop = e.element.offsetTop, this.elements.push(e)
                }
            }, this)
        }, u._registerTrackedElements = function(t) {
            var e = [].concat(t);
            e.forEach(function(t) {
                this._elementInDOM(t.element) && (t.offsetTop = t.element.offsetTop, this.elements.push(t))
            }, this)
        }, u._elementInDOM = function(t) {
            var e = !1,
                n = document.getElementsByTagName("body")[0];
            return s.isElement(t) && n.contains(t) && (e = !0), e
        }, u._elementPercentInView = function(t) {
            return t.pixelsInView / t.height
        }, u._elementPixelsInView = function(t) {
            var e = t.top - this._scrollY,
                n = t.bottom - this._scrollY;
            return e > this._windowHeight || n < 0 ? 0 : Math.min(n, this._windowHeight) - Math.max(e, 0)
        }, u._ifInView = function(t, e) {
            e || t.trigger("enterview", t)
        }, u._ifAlreadyInView = function(t) {
            t.inView || t.trigger("exitview", t)
        }, u.addElements = function(t) {
            t = s.isNodeList(t) ? r.toArray(t) : [].concat(t), t.forEach(this.addElement, this)
        }, u.addElement = function(t) {
            var e = null;
            if (!s.isElement(t)) throw new TypeError("ElementTracker: " + t + " is not a valid DOM element");
            return e = new l(t), this._registerTrackedElements(e), this.refreshElementMetrics(e), this.refreshElementState(e), e
        }, u.removeElement = function(t) {
            var e, n = [];
            this.elements.forEach(function(e, i) {
                e !== t && e.element !== t || n.push(i)
            }), e = this.elements.filter(function(t, e) {
                return n.indexOf(e) < 0
            }), this.elements = e
        }, u.start = function() {
            this.tracking === !1 && (this.tracking = !0, a.addEventListener(window, "resize", this.refreshAllElementMetrics), a.addEventListener(window, "orientationchange", this.refreshAllElementMetrics), a.addEventListener(window, "scroll", this.refreshAllElementStates), this.refreshAllElementMetrics())
        }, u.stop = function() {
            this.tracking === !0 && (this.tracking = !1, a.removeEventListener(window, "resize", this.refreshAllElementMetrics), a.removeEventListener(window, "orientationchange", this.refreshAllElementMetrics), a.removeEventListener(window, "scroll", this.refreshAllElementStates))
        }, u.refreshAllElementMetrics = function() {
            this._scrollY = o.getScrollY(), this._windowHeight = this._getWindowHeight(), this.elements.forEach(this.refreshElementMetrics, this)
        }, u.refreshElementMetrics = function(t) {
            var e = o.getDimensions(t.element),
                n = o.getPagePosition(t.element);
            return t = c.extend(t, e, n), this.refreshElementState(t)
        }, u.refreshAllElementStates = function() {
            this._scrollY = o.getScrollY(), this.elements.forEach(this.refreshElementState, this)
        }, u.refreshElementState = function(t) {
            var e = t.inView;
            return t.pixelsInView = this._elementPixelsInView(t), t.percentInView = this._elementPercentInView(t), t.inView = t.pixelsInView > 0, t.inView && this._ifInView(t, e), e && this._ifAlreadyInView(t), t
        }, u._getWindowHeight = function() {
            return document.documentElement.clientHeight || window.innerHeight
        }, e.exports = i
    }, {
        "./TrackedElement": 333,
        "@marcom/ac-array": 297,
        "@marcom/ac-dom-events": 26,
        "@marcom/ac-dom-metrics/getDimensions": 42,
        "@marcom/ac-dom-metrics/getPagePosition": 43,
        "@marcom/ac-dom-metrics/getScrollY": 48,
        "@marcom/ac-dom-nodes": 313,
        "@marcom/ac-object": 443,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0
    }],
    333: [function(t, e, n) {
        "use strict";

        function i(t) {
            if (!s.isElement(t)) throw new TypeError("TrackedElement: " + t + " is not a valid DOM element");
            o.call(this), this.element = t, this.inView = !1, this.percentInView = 0, this.pixelsInView = 0, this.offsetTop = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0
        }
        var r = t("@marcom/ac-object").create,
            s = t("@marcom/ac-dom-nodes"),
            o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            a = o.prototype,
            c = i.prototype = r(a);
        c.destroy = function() {
            this.element = null, a.destroy.call(this)
        }, e.exports = i
    }, {
        "@marcom/ac-dom-nodes": 313,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object": 443
    }],
    334: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, s, o, a) {
            if (7 !== arguments.length) throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)");
            r.call(this), this.section = t, this.element = e, this.componentName = n, this.index = a, this.rafWhenVisible = this.rafWhenVisible || !1
        }
        t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = r.prototype,
            o = i.prototype = Object.create(r.prototype);
        i.prototype.constructor = i, o.destroy = function() {
            this.teardownEvents(), this.section = null, s.destroy.call(this)
        }, o.setupEvents = function() {}, o.teardownEvents = function() {}, o.onSectionWillAppear = function(t, e) {}, o.activate = function() {}, o.animateIn = function() {}, o.onRequestAnimationFrame = function() {}, o.deactivate = function() {}, o.onScroll = function(t, e, n) {}, o.onSectionWillDisappear = function(t, e) {}, o.onResizeDebounced = function(t, e, n) {}, o.onResizeImmediate = function(t, e, n) {}, o.onOrientationChange = function(t, e, n, i) {}, o.onBreakpoint = function(t, e, n, i) {}, o.onRetinaChange = function(t, e, n, i) {}, e.exports = i
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    335: [function(t, e, n) {
        "use strict";

        function i(t) {
            d.init(), this.name = this.name || "[NOT SET]", this._mainEl = r("main,.main"), this._sections = [], this._visibleSections = [], this._elementTracker = new c(null, {
                autoStart: !0
            }), this._currentSection = null, this._sectionUnderLocalNav = null, this._currentBreakpoint = l.viewport, this.isRetina = l.retina, this._cachedScrollY = this._getScrollY(!0), this._cachedWindowHeight = this._getWindowHeight(!0), this._rafId = -1, this._resizeTimeout = -1, this._resizeTimeoutDelay = this._resizeTimeoutDelay || 250, this.setupEvents(), this.setupSections(), this._updateSectionVisibility(this._getScrollY(), this._getWindowHeight()), this.setupLocalNavStyleChanger(), this._updateLocalNavTheme(this._getScrollY(), this._getWindowHeight()), this._onRequestAnimationFrame()
        }
        t("@marcom/ac-polyfills/Element/prototype.classList"), t("@marcom/ac-polyfills/Object/assign"), t("@marcom/ac-polyfills/Object/assign"), t("@marcom/ac-polyfills/console.log");
        var r = t("@marcom/ac-dom-traversal/querySelector"),
            s = t("@marcom/ac-dom-traversal/querySelectorAll"),
            o = t("@marcom/ac-dom-events/addEventListener"),
            a = t("@marcom/ac-dom-events/removeEventListener"),
            c = t("@marcom/ac-element-tracker").ElementTracker,
            l = t("@marcom/ac-viewport-emitter");
        l.viewport || (console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation."), console.log("Jetpack Error: Breakpoint will always be 'large' and no `onBreakPoint` events will be fired"), l = t("../utils/ViewportEmitterStub")());
        var h = t("./LocalNavStyleChanger"),
            u = t("../model/SectionMap"),
            f = t("../model/DataAttributes"),
            d = t("../model/EnabledFeatures"),
            m = i.prototype;
        m.destroy = function() {
            for (var t = 0, e = this._sections.length; t < e; t++) this._sections[t].destroy();
            this.teardownEvents(), this._elementTracker.destroy(), this._elementTracker = null, this._sections = null, this._currentSection = null, this._sectionUnderLocalNav = null, this._visibleSections = null, this._mainEl = null
        }, m.setupEvents = function() {
            this._onScroll = this._onScroll.bind(this), this._onBreakpoint = this._onBreakpoint.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onPageDidAppear = this._onPageDidAppear.bind(this), this._onResizeImmediate = this._onResizeImmediate.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onPageWillDisappear = this._onPageWillDisappear.bind(this), this._onRequestAnimationFrame = this._onRequestAnimationFrame.bind(this), o(window, "scroll", this._onScroll), o(window, "resize", this._onResizeImmediate), o(window, "orientationchange", this._onOrientationChange), l.on("change", this._onBreakpoint), l.on("retinachange", this._onRetinaChange)
        }, m.teardownEvents = function() {
            a(window, "scroll", this._onScroll), a(window, "resize", this._onResizeImmediate), a(window, "orientationchange", this._onOrientationChange), l.off("change", this._onBreakpoint), this._elementTracker.stop(), clearTimeout(this._resizeTimeoutDelay), cancelAnimationFrame(this._rafId)
        }, m.setupSections = function() {
            for (var t = s("section,.section,[data-section-type]", this._mainEl), e = this._getScrollY(), n = this._getCurrentBreakpoint(), i = this._getWindowHeight(), r = [], o = 0, a = t.length; o < a; o++) {
                var c = t[o];
                if (c.parentNode === this._mainEl) {
                    var l = this._elementTracker.addElement(c);
                    this._elementTracker.refreshElementState(l);
                    var h = c.hasAttribute(f.SECTION_TYPE) ? c.getAttribute(f.SECTION_TYPE) : "BaseSection";
                    if ("" === h && (h = "BaseSection"), !u.hasOwnProperty(h)) throw "BasePage::setupSections parsing '#" + c.id + " ." + c.className + "' no section type '" + h + "'found!";
                    var d = u[h],
                        m = new d(c, l, n, e, i, o);
                    m.setupEvents(), this._sections.push(m)
                } else c.hasAttribute(f.SECTION_TYPE) && console.error("BasePage::setupSections FOUND NESTED data-section-type", c), r.push(c)
            }
        }, m.setupLocalNavStyleChanger = function() {
            if (h.setCurrentSection(this._currentSection), d.PAGE_JUMP) {
                var t = this._mainEl.getAttribute("data-page-type");
                h.setCurrentPage(t)
            }
        }, m._activateSection = function(t) {
            this._currentSection !== t && (this._currentSection && this._currentSection.deactivate(), this._currentSection = t, this._currentSection.activate())
        }, m._updateSectionVisibility = function(t, e) {
            for (var n = this._sections[0], i = [], r = 0, s = 0, o = this._sections.length; s < o; s++) {
                var a = this._sections[s],
                    c = a.trackedElement.pixelsInView;
                a.isFixedHero && (c = e - t), c > r && (n = a, r = c), c > 1e-6 && i.push(a)
            }
            for (s = 0, o = Math.max(this._visibleSections.length, i.length); s < o; s++) this._visibleSections[s] && i.indexOf(this._visibleSections[s]) === -1 && this._visibleSections[s].onSectionWillDisappear(t, e), i[s] && this._visibleSections.indexOf(i[s]) === -1 && i[s].onSectionWillAppear(t, e);
            this._visibleSections = i, this._activateSection(n)
        }, m._updateLocalNavTheme = function(t, e) {
            this._sectionUnderLocalNav = this._visibleSections[0];
            for (var n = 0, i = this._visibleSections.length; n < i; n++) t + h.height > this._visibleSections[n].scrollToPosition && (this._sectionUnderLocalNav = this._visibleSections[n]);
            this._sectionUnderLocalNav && h.setCurrentSection(this._sectionUnderLocalNav)
        }, m._onPageDidAppear = function(t) {}, m._onPageWillDisappear = function(t) {
            this.destroy()
        }, m._onBreakpoint = function(t) {
            var e = t.to,
                n = t.from;
            this._currentBreakpoint = e;
            var i = this._getScrollY(),
                r = this._getWindowHeight();
            this._elementTracker.refreshAllElementMetrics();
            for (var s = 0, o = this._sections.length; s < o; s++) this._sections[s].onBreakpoint(e, n, i, r)
        }, m._onRetinaChange = function(t) {
            var e = this._getScrollY(!0),
                n = this._getWindowHeight(!0);
            this.isRetina = l.retina;
            var i = this._currentBreakpoint;
            this._elementTracker.refreshAllElementMetrics();
            for (var r = 0, s = this._sections.length; r < s; r++) this._sections[r].onRetinaChange(this.isRetina, i, e, n)
        }, m._onScroll = function(t) {
            var e = this._getScrollY(!0),
                n = this._getWindowHeight();
            this._updateSectionVisibility(e, n), this._updateLocalNavTheme(e, n);
            for (var i = 0, r = this._visibleSections.length; i < r; i++) this._visibleSections[i].onScroll(t, e, n)
        }, m._onResizeDebounced = function(t) {
            for (var e = this._getScrollY(), n = this._getWindowHeight(), i = !1, r = 0, s = this._sections.length; r < s; r++) !i && this._sections[r].onResize && (console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), i = !0), this._sections[r].onResizeDebounced(t, e, n);
            this._updateSectionVisibility(e, n), this._updateLocalNavTheme(e, n)
        }, m._onOrientationChange = function(t) {
            for (var e = this._getScrollY(!0), n = this._getWindowHeight(!0), i = t.orientation, r = 0, s = this._sections.length; r < s; r++) this._sections[r].onOrientationChange(t, i, e, n)
        }, m._onResizeImmediate = function(t) {
            for (var e = this._getScrollY(), n = this._getWindowHeight(!0), i = !1, r = 0, s = this._sections.length; r < s; r++) !i && this._sections[r].onResizeWillBeCalledAfterDelay && (console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), i = !0), this._sections[r].onResizeImmediate(t, e, n);
            window.clearTimeout(this._resizeTimeout), this._resizeTimeout = window.setTimeout(this._onResizeDebounced.bind(this, t), this._resizeTimeoutDelay)
        }, m._onRequestAnimationFrame = function() {
            this._rafId = requestAnimationFrame(this._onRequestAnimationFrame);
            for (var t = 0, e = this._visibleSections.length; t < e; t++) {
                var n = this._visibleSections[t];
                (n.rafWhenVisible || n.isActive) && n.onRequestAnimationFrame()
            }
        }, m._getScrollY = function(t) {
            return t && (this._cachedScrollY = window.pageYOffset || (document.documentElement || document.body).scrollTop), this._cachedScrollY
        }, m._getWindowHeight = function(t) {
            return t && (this._cachedWindowHeight = document.documentElement.clientHeight || window.innerHeight), this._cachedWindowHeight
        }, m._getVisibleBottomOfPage = function() {
            return this._getScrollY() + this._getWindowHeight()
        }, m._getCurrentBreakpoint = function() {
            return this._currentBreakpoint
        }, e.exports = i
    }, {
        "../model/DataAttributes": 339,
        "../model/EnabledFeatures": 340,
        "../model/SectionMap": 342,
        "../utils/ViewportEmitterStub": 343,
        "./LocalNavStyleChanger": 337,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-element-tracker": 331,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0,
        "@marcom/ac-polyfills/Object/assign": void 0,
        "@marcom/ac-polyfills/console.log": void 0,
        "@marcom/ac-viewport-emitter": 534
    }],
    336: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r, s) {
            if (6 !== arguments.length) throw new Error("Incorrect number of arguments passed to BaseSection");
            h.call(this), this.element = t, this.trackedElement = e, this.elementEngagement = new o(null, {
                autoStart: !1
            }), this.rafWhenVisible = this.rafWhenVisible || !1, this.index = s, this.isVisible = this.trackedElement.pixelsInView > 0, this.hasAnimatedIn = !1, this.isActive = !1, this.isFixedHero = !1, this.name = this.name || this.element.className, this.scrollToPosition = 0, this.updateScrollToPosition(), this._components = [], this.setupComponents(n, i, r), this.setIsFixedHero(), this.performDeprecatedMethodCheck()
        }
        t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
        var r = t("@marcom/ac-console"),
            s = t("@marcom/ac-dom-metrics"),
            o = t("@marcom/ac-element-engagement").ElementEngagement,
            a = t("@marcom/ac-dom-traversal/querySelectorAll"),
            c = t("./../model/DataAttributes"),
            l = t("./../model/ComponentMap"),
            h = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            u = h.prototype,
            f = i.prototype = Object.create(h.prototype);
        i.prototype.constructor = i, f.performDeprecatedMethodCheck = function() {
            if (this.onViewWillAppear) throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass");
            if (this.onViewWillDisappear) throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass");
            return !0
        }, f.destroy = function() {
            this.teardownEvents(), this.elementEngagement.stop(), this.elementEngagement = null;
            for (var t = 0, e = this._components.length; t < e; t++) this._components[t].destroy();
            this._components = null, this.trackedElement = null, this.element = null, u.destroy.call(this)
        }, f.setupEvents = function() {
            for (var t = 0, e = this._components.length; t < e; t++) this._components[t].setupEvents()
        }, f.teardownEvents = function() {
            for (var t = 0, e = this._components.length; t < e; t++) this._components[t].teardownEvents()
        }, f.setupComponents = function(t, e, n) {
            var i = a("[" + c.COMPONENT_LIST + "]", this.element);
            this.element.hasAttribute(c.COMPONENT_LIST) && i.push(this.element);
            for (var s = 0; s < i.length; s++) {
                var o = i[s],
                    h = o.getAttribute(c.COMPONENT_LIST);
                if (h.indexOf("|") !== -1) throw "BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '" + h + "'";
                for (var u = h.split(" "), f = 0, d = u.length; f < d; f++) {
                    var m = u[f];
                    if ("" !== m && " " !== m) {
                        if (!l.hasOwnProperty(m)) throw "BaseSection::setupComponents parsing '#" + o.id + " ." + o.className + "' no component type '" + m + "'found!";
                        var p = l[m],
                            v = u[f];
                        if (this.componentIsSupported(p, v)) {
                            var g = new p(this, o, v, t, e, n, s + f);
                            this.rafWhenVisible = g.rafWhenVisible || this.rafWhenVisible, this._components.push(g)
                        } else r.log("BaseSection::setupComponents unsupported component '" + v + "'. Reason: '" + v + ".IS_SUPPORTED' returned false")
                    }
                }
                setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement), 100)
            }
        }, f.activate = function() {
            this.element.classList.add("active");
            for (var t = 0, e = this._components.length; t < e; t++) this._components[t].activate();
            this.isActive = !0, this.hasAnimatedIn || (this.element.classList.add("animated"), this.animateIn(), this.hasAnimatedIn = !0)
        }, f.deactivate = function() {
            this.element.classList.remove("active"), this.isActive = !1;
            for (var t = 0, e = this._components.length; t < e; t++) this._components[t].deactivate()
        }, f.animateIn = function() {
            for (var t = 0, e = this._components.length; t < e; t++) this._components[t].animateIn()
        }, f.onRequestAnimationFrame = function() {
            for (var t = 0, e = this._components.length; t < e; t++) {
                var n = this._components[t];
                (n.rafWhenVisible || this.isActive) && n.onRequestAnimationFrame()
            }
        }, f.onResizeImmediate = function(t, e, n) {
            for (var i = !1, r = 0, s = this._components.length; r < s; r++) !i && this._components[r].onResizeWillBeCalledAfterDelay && (console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), i = !0), this._components[r].onResizeImmediate(t, e, n)
        }, f.onResizeDebounced = function(t, e, n) {
            this.updateScrollToPosition();
            for (var i = !1, r = 0, s = this._components.length; r < s; r++) !i && this._components[r].onResize && (console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead."), i = !0), this._components[r].onResizeDebounced(t, e, n);
            this.elementEngagement.refreshAllElementMetrics()
        }, f.onBreakpoint = function(t, e, n, i) {
            for (var r = 0, s = this._components.length; r < s; r++) this._components[r].onBreakpoint(t, e, n, i);
            this.elementEngagement.refreshAllElementMetrics()
        }, f.onRetinaChange = function(t, e, n, i) {
            for (var r = 0, s = this._components.length; r < s; r++) this._components[r].onRetinaChange(t, e, n, i);
            this.elementEngagement.refreshAllElementMetrics()
        }, f.onOrientationChange = function(t, e, n, i) {
            for (var r = 0, s = this._components.length; r < s; r++) this._components[r].onOrientationChange(t, e, n, i)
        }, f.onScroll = function(t, e, n) {
            this.elementEngagement.refreshAllElementStates();
            for (var i = 0, r = this._components.length; i < r; i++) this._components[i].onScroll(t, e, n)
        }, f.onSectionWillAppear = function(t, e) {
            this.isVisible = !0, this.elementEngagement.refreshAllElementStates();
            for (var n = 0, i = this._components.length; n < i; n++) this._components[n].onSectionWillAppear(t, e)
        }, f.onSectionWillDisappear = function(t, e) {
            this.isVisible = !1;
            for (var n = 0, i = this._components.length; n < i; n++) this._components[n].onSectionWillDisappear(t, e)
        }, f.getComponentOfType = function(t) {
            if (!l.hasOwnProperty(t)) throw "BaseSection::getComponentOfType no component type '" + t + "' exist in ComponentMap!";
            for (var e = 0, n = this._components.length; e < n; e++)
                if (this._components[e].componentName === t) return this._components[e];
            return null
        }, f.getAllComponentsOfType = function(t) {
            if (!l.hasOwnProperty(t)) throw "BaseSection::getAllComponentsOfType no component type '" + t + "' exist in ComponentMap!";
            for (var e = [], n = 0, i = this._components.length; n < i; n++) this._components[n].componentName === t && e.push(this._components[n]);
            return e
        }, f.updateScrollToPosition = function() {
            return this.scrollToPosition = s.getPagePosition(this.element).top
        }, f.setIsFixedHero = function() {
            if (0 !== this.index) this.isFixedHero = !1;
            else {
                var t = window.getComputedStyle(this.element);
                this.isFixedHero = "fixed" === t.position
            }
        }, i.prototype.componentIsSupported = function(t, e) {
            var n = t.IS_SUPPORTED;
            if (void 0 === n) return !0;
            if ("function" != typeof n) return console.error('BaseSection::setupComponents error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0;
            var i = t.IS_SUPPORTED();
            return void 0 === i ? (console.error('BaseSection::setupComponents error in "' + e + '".IS_SUPPORTED - it should be a function which returns true/false'), !0) : i
        }, e.exports = i
    }, {
        "./../model/ComponentMap": 338,
        "./../model/DataAttributes": 339,
        "@marcom/ac-console": 292,
        "@marcom/ac-dom-metrics": 50,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-element-engagement": 294,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    337: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Element/prototype.classList");
        var i = t("./../model/DataAttributes"),
            r = !1,
            s = function() {
                if (r) throw new Error("Do not call the constructor, use LocalNavStyleChanger.initialize(settings)");
                r = !0, this._currentTheme = "", this.defaultTheme = "theme-light", this._currentPageNavLink = null, this._section = null, this.elementToApplyClassesAgainst = null, this.height = 0
            },
            o = s.prototype;
        o.initialize = function(t) {
            this.elementToApplyClassesAgainst = t.elementToApplyClassesAgainst, this.sectionThemeMap = t.sectionThemeMap, this.defaultTheme = t.defaultTheme, this.height = t.localNavHeight
        }, o.setCurrentPage = function(t) {
            var e = document.querySelector(".localnav-link[" + i.JUMP_SECTION_NAME + "=" + t + "]");
            e !== this._currentPageNavLink && (this._currentPageNavLink && this._currentPageNavLink.classList.remove("current"), e && (e.classList.add("current"), this._currentPageNavLink = e))
        }, o.setCurrentSection = function(t) {
            if (null !== this.elementToApplyClassesAgainst && (!this._section || this._section !== t)) {
                this._section = t;
                for (var e = 0, n = this._section.element.classList.length; e < n; e++) {
                    var i = this._section.element.classList[e];
                    if (this.sectionThemeMap.hasOwnProperty(i)) return void this.setTheme(this.sectionThemeMap[i])
                }
                this.setTheme(this.defaultTheme)
            }
        }, o.setTheme = function(t) {
            if (this._currentTheme !== t) {
                for (var e in this.sectionThemeMap) {
                    var n = this.sectionThemeMap[e];
                    n !== t && this.elementToApplyClassesAgainst.classList.remove(n)
                }
                this.elementToApplyClassesAgainst.classList.add(t), this._currentTheme = t
            }
        }, o.removeThemes = function() {
            this._currentTheme = null;
            for (var t in this.sectionThemeMap) this.elementToApplyClassesAgainst.classList.remove(this.sectionThemeMap[t])
        }, e.exports = new s
    }, {
        "./../model/DataAttributes": 339,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0
    }],
    338: [function(t, e, n) {
        "use strict";
        e.exports = {
            BaseComponent: t("../core/BaseComponent")
        }
    }, {
        "../core/BaseComponent": 334
    }],
    339: [function(t, e, n) {
        "use strict";
        e.exports = {
            PAGE_TYPE: "data-page-type",
            SECTION_TYPE: "data-section-type",
            JUMP_SECTION_NAME: "data-page-jump-name",
            COMPONENT_LIST: "data-component-list"
        }
    }, {}],
    340: [function(t, e, n) {
        "use strict";
        var i = {
            isDesktop: t("@marcom/ac-feature/isDesktop"),
            isRetina: t("@marcom/ac-feature/isRetina")
        };
        e.exports = {
            TOUCH: void 0,
            SVG: void 0,
            WEB_GL: void 0,
            PAGE_JUMP: void 0,
            IS_IE8: void 0,
            IS_DESKTOP: void 0,
            IS_RETINA: void 0,
            IS_IOS: void 0,
            init: function() {
                var t = document.getElementsByTagName("html")[0];
                this.TOUCH = t.classList.contains("touch"), this.SVG = t.classList.contains("svg"), this.WEB_GL = t.classList.contains("webgl"), this.PAGE_JUMP = t.classList.contains("pageJump"), this.IS_IE8 = t.classList.contains("ie8"), this.IS_DESKTOP = i.isDesktop(), this.IS_RETINA = i.isRetina()
            },
            extend: function(t) {
                if (!t.hasOwnProperty("init") || "function" != typeof t.init) throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function");
                var e = this.init,
                    n = t.init,
                    i = Object.assign(this, t);
                return i.init = function() {
                    this.HAS_INITIALIZED || (this.HAS_INITIALIZED = !0, e.call(i), n.call(i))
                }, i
            },
            HAS_INITIALIZED: !1
        }
    }, {
        "@marcom/ac-feature/isDesktop": 213,
        "@marcom/ac-feature/isRetina": 215
    }],
    341: [function(t, e, n) {
        "use strict";
        e.exports = {
            BasePage: t("../core/BasePage")
        }
    }, {
        "../core/BasePage": 335
    }],
    342: [function(t, e, n) {
        "use strict";
        e.exports = {
            BaseSection: t("../core/BaseSection")
        }
    }, {
        "../core/BaseSection": 336
    }],
    343: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            var t;
            return window.ViewportEmitterTestProxy ? t = window.ViewportEmitterTestProxy : (t = {}, t.viewport = "large", t.on = t.off = function() {}), t
        }
    }, {}],
    344: [function(t, e, n) {
        "use strict";
        e.exports = {
            WordJoiner: t("./ac-kr-word-joiner/WordJoiner")
        }
    }, {
        "./ac-kr-word-joiner/WordJoiner": 345
    }],
    345: [function(t, e, n) {
        "use strict";

        function i(t) {
            this.options = o(l, t), this._treeWalkers = [], this.rootElements = []
        }
        var r = t("./isOnlyWhitespace"),
            s = t("./createTreeWalker"),
            o = t("@marcom/ac-object/defaults"),
            a = "⁠",
            c = null,
            l = {
                dataAttribute: "data-word-join",
                joinerCharacter: a,
                contextElement: document
            },
            h = i.prototype;
        i.joinify = function(t, e) {
            var n = "",
                i = 0,
                s = t.length;
            for (e = e || a; i < s;) n += t[i], i < s - 1 && !r(t[i + 1]) && !r(t[i]) && (n += e), i += 1;
            return n
        }, i.shouldJoin = function() {
            if (null !== c) return c;
            c = !1;
            var t = document.createElement("div");
            return "querySelectorAll" in document && "wordBreak" in t.style && (t.style.wordBreak = "keep-all", "keep-all" !== t.style.wordBreak && (c = !0)), t = null, c
        }, h.destroy = function() {
            this._treeWalkers && this._treeWalkers.length > 0 && this._treeWalkers.forEach(function(t) {
                t = null
            }), this._treeWalkers = null, this.rootElements = null, this.options = null
        }, h.getRootElements = function(t, e) {
            t = t || this.options.dataAttribute, e = e || this.options.contextElement;
            var n, i = "body";
            return t && (i = "[" + t + "]"), n = [].slice.call(e.querySelectorAll(i))
        }, h.join = function() {
            0 === this.rootElements.length && (this.rootElements = this.getRootElements(), this._treeWalkers = this._createTreeWalkers()), this._treeWalkers && this._treeWalkers.length > 0 && this._treeWalkers.forEach(function(t) {
                for (var e = t.nextNode(); e;) e.data = i.joinify(e.data, this.options.joinerCharacter), e = t.nextNode()
            }, this)
        }, h._createTreeWalkers = function() {
            var t = [];
            return this.rootElements && this.rootElements.length > 0 && this.rootElements.forEach(function(e) {
                t.push(s(e))
            }, this), t
        }, e.exports = i
    }, {
        "./createTreeWalker": 346,
        "./isOnlyWhitespace": 347,
        "@marcom/ac-object/defaults": 446
    }],
    346: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
                acceptNode: function(t) {
                    if (!r(t.data) && t.data.length > 1) return NodeFilter.FILTER_ACCEPT
                }
            }, !1);
            return e
        }
        var r = t("./isOnlyWhitespace");
        e.exports = i
    }, {
        "./isOnlyWhitespace": 347
    }],
    347: [function(t, e, n) {
        "use strict";

        function i(t) {
            return /^\s*$/.test(t)
        }
        e.exports = i
    }, {}],
    348: [function(t, e, n) {
        "use strict";
        var i = t("./ac-ajax/Ajax"),
            r = t("./ac-ajax/Request");
        e.exports = new i, e.exports.Ajax = i, e.exports.Request = r
    }, {
        "./ac-ajax/Ajax": 349,
        "./ac-ajax/Request": 350
    }],
    349: [function(t, e, n) {
        "use strict";
        var i = t("./Request"),
            r = t("./XDomain-request"),
            s = t("./URLParser"),
            o = function() {};
        o._Request = i, o.prototype = {
            _defaults: {
                method: "get",
                timeout: 5e3
            },
            _extend: function() {
                for (var t = 1; t < arguments.length; t++)
                    for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
                return arguments[0]
            },
            _getOptions: function(t, e) {
                return this._extend({}, this._defaults, e, t)
            },
            _isCrossDomainRequest: function(t) {
                var e = new s,
                    n = e.parse(window.location.href).origin,
                    i = e.parse(t).origin;
                return e.destroy(), i !== n
            },
            create: function(t) {
                return new i(t)
            },
            cors: function(t) {
                var e = window.XDomainRequest && document.documentMode < 10 ? r : i;
                return new e(t)
            },
            get: function(t) {
                var e;
                return t = this._getOptions({
                    method: "get"
                }, t), e = this._isCrossDomainRequest(t.url) ? this.cors(t) : this.create(t), e.send()
            },
            getJSON: function(t) {
                return this.get(t).then(function(t) {
                    return JSON.parse(t.responseText)
                })
            },
            head: function(t) {
                return t = this._getOptions({
                    method: "head"
                }, t), this.create(t).send()
            },
            isCrossDomainRequest: function(t) {
                return this._isCrossDomainRequest(t)
            },
            post: function(t) {
                return t = this._getOptions({
                    method: "post"
                }, t), this.create(t).send()
            }
        }, e.exports = o
    }, {
        "./Request": 350,
        "./URLParser": 351,
        "./XDomain-request": 352
    }],
    350: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            this._initialize(t)
        };
        i.create = function() {
            var t = function() {};
            return t.prototype = i.prototype, new t
        }, i.prototype = {
            _addReadyStateChangeHandler: function() {
                this.xhr.onreadystatechange = function(t) {
                    4 === this.xhr.readyState && (clearTimeout(this._timeout), this.xhr.status >= 200 && this.xhr.status < 300 ? this.resolve(this.xhr) : this.reject(this.xhr))
                }.bind(this)
            },
            _getPromise: function() {
                this.promise = new Promise(function(t, e) {
                    this.resolve = t, this.reject = e
                }.bind(this))
            },
            _getTransport: function() {
                return new XMLHttpRequest
            },
            _initialize: function(t) {
                var e = this._validateConfiguration(t);
                if (e) throw e;
                this._configuration = t;
                var n = this._configuration.method.toUpperCase();
                this.xhr = this._getTransport(), this._getPromise(), this.xhr.open(n, this._configuration.url), this._setRequestHeaders(t.headers), this._addReadyStateChangeHandler()
            },
            _sendXHR: function() {
                this.xhr && (this._configuration && this._configuration.data ? this.xhr.send(this._configuration.data) : this.xhr.send())
            },
            _setRequestHeaders: function(t) {
                t && t.forEach(function(t) {
                    this.xhr.setRequestHeader(t.name, t.value)
                }, this)
            },
            _setTimeout: function(t) {
                t || (this._configuration && this._configuration.timeout ? t = this._configuration.timeout : (clearTimeout(this._timeout), this._timeout = null)), null !== this._timeout && clearTimeout(this._timeout), t > 0 && (this._timeout = setTimeout(function() {
                    this.xhr.abort(), this.reject()
                }.bind(this), t))
            },
            _timeout: null,
            _validateConfiguration: function(t) {
                if (!t) return "Must provide a configuration object";
                var e = [],
                    n = t.headers;
                if (t.url || e.push("Must provide a url"), t.method || e.push("Must provide a method"), n) {
                    if (!Array.isArray(n)) return "Must provide an array of headers";
                    this._validateHeaders(n, e)
                }
                return e.join(", ")
            },
            _validateHeaders: function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (!t[n].hasOwnProperty("name") || !t[n].hasOwnProperty("value")) {
                        e.push("Must provide a name and value key for all headers");
                        break
                    }
            },
            promise: null,
            reject: null,
            resolve: null,
            send: function() {
                return this._setTimeout(), this._sendXHR(), this.promise
            },
            xhr: null
        }, e.exports = i
    }, {}],
    351: [function(t, e, n) {
        "use strict";
        var i = function() {
                this.parser = null
            },
            r = i.prototype;
        r.parse = function(t) {
            var e, n, i, r, s;
            if ("string" != typeof t) throw new TypeError(t + " must be a string");
            return this.parser || (this.parser = document.createElement("a")), this._qualifyPath(t), i = this.parser.hostname, n = this.parser.protocol, r = this._normalizePort(this.parser), e = this.parser.origin || this._constructOriginString(this.parser, r), s = this.parser.search, {
                originalPath: t,
                qualifiedPath: this.parser.href,
                protocol: n,
                hostname: i,
                origin: e,
                port: r,
                search: s
            }
        }, r.destroy = function() {
            this.parser = null
        }, r._constructOriginString = function(t, e) {
            var n = e ? ":" + e : "";
            return t.protocol + "//" + t.hostname + n
        }, r._normalizePort = function(t) {
            return "80" === t.port || "443" === t.port || "0" === t.port ? "" : t.port
        }, r._qualifyPath = function(t) {
            this.parser.href = t, this.parser.href = this.parser.href
        }, e.exports = i
    }, {}],
    352: [function(t, e, n) {
        "use strict";
        var i = t("./Request"),
            r = function(t) {
                i.apply(this, arguments)
            };
        r.prototype = i.create(), r.prototype._getTransport = function() {
            return new XDomainRequest
        }, r.prototype._addReadyStateChangeHandler = function() {
            this.xhr.ontimeout = function() {
                this.reject(this.xhr)
            }.bind(this), this.xhr.onerror = function() {
                this.reject(this.xhr)
            }.bind(this), this.xhr.onload = function() {
                this.resolve(this.xhr)
            }.bind(this)
        }, r.prototype._setTimeout = function(t) {
            t || this._configuration && this._configuration.timeout && (t = this._configuration.timeout), t > 0 && (this.xhr.timeout = t)
        }, r.prototype._sendXHR = function() {
            setTimeout(function() {
                i.prototype._sendXHR.call(this)
            }.bind(this), 0)
        }, e.exports = r
    }, {
        "./Request": 350
    }],
    353: [function(t, e, n) {
        arguments[4][19][0].apply(n, arguments)
    }, {
        "./ac-event-emitter/EventEmitter": 354,
        dup: 19
    }],
    354: [function(t, e, n) {
        arguments[4][20][0].apply(n, arguments)
    }, {
        dup: 20
    }],
    355: [function(t, e, n) {
        ! function(t, i) {
            "object" == typeof n && n ? e.exports = i : "function" == typeof define && define.amd ? define(i) : t.Deferred = i
        }(this, function() {
            "use strict";
            var t, e, n, i, r, s, o, a, c = {};
            t = {
                0: "pending",
                1: "resolved",
                2: "rejected"
            }, e = function(t, e) {
                var n, i, r, s, o;
                if (0 !== this._status) return console && console.warn && console.warn("Trying to fulfill more than once."), !1;
                for (this.data = e, i = this.pending, r = i.length, n = 0; n < r; n++) s = i[n], s[t] && (o = s[t](e)), "object" == typeof o && o.hasOwnProperty("then") && o.hasOwnProperty("status") ? o.then(function(t) {
                    s.deferred.resolve(t)
                }, function(t) {
                    s.deferred.reject(t)
                }, function(t) {
                    s.deferred.progress(t)
                }) : s.deferred[t](o || void 0);
                return "progress" !== t && (i = []), !0
            }, s = function(t, e) {
                this.then = t, this.status = e
            }, o = s.prototype, a = function(t) {
                return t
            }, o.success = function(t, e) {
                return this.then(t.bind(e), a, a)
            }, o.fail = function(t, e) {
                return this.then(a, t.bind(e), a)
            }, o.progress = function(t, e) {
                return this.then(a, a, t.bind(e))
            }, i = function(t) {
                return "function" != typeof t ? function() {} : t
            }, n = function(t, e, n) {
                this.resolve = i(t), this.reject = i(e), this.progress = i(n), this.deferred = new r
            }, r = function() {
                this.pending = [], this._status = 0, this._promise = new s(this.then.bind(this), this.status.bind(this))
            }, r.prototype = {
                status: function() {
                    return t[this._status]
                },
                promise: function() {
                    return this._promise
                },
                progress: function(t) {
                    return e.call(this, "progress", t), this._promise
                },
                resolve: function(t) {
                    return e.call(this, "resolve", t), 0 === this._status && (this._status = 1), this._promise
                },
                reject: function(t) {
                    return e.call(this, "reject", t), 0 === this._status && (this._status = 2), this._promise
                },
                then: function(t, e, i) {
                    var r, s;
                    return s = new n(t, e, i), 0 === this._status ? this.pending.push(s) : 1 === this._status && "function" == typeof t ? (r = t(this.data), "object" == typeof r && r.hasOwnProperty("then") && r.hasOwnProperty("status") ? r.then(function(t) {
                        s.deferred.resolve(t)
                    }, function(t) {
                        s.deferred.reject(t)
                    }, function(t) {
                        s.deferred.progress(t)
                    }) : s.deferred.resolve(r)) : 2 === this._status && "function" == typeof e && (r = e(this.data), s.deferred.reject(r)), s.deferred.promise()
                }
            };
            var l = function() {
                var t, e, n, i, s;
                return t = [].slice.call(arguments), e = new r, n = 0, i = function(i) {
                    n--;
                    var r = t.indexOf(this);
                    t[r] = i, 0 === n && e.resolve(t)
                }, s = function(t) {
                    e.reject(t)
                }, t.forEach(function(t) {
                    t.then && n++
                }), t.forEach(function(t) {
                    t.then && t.then(i.bind(t), s)
                }), e.promise()
            };
            return r.when = l, c.Deferred = r, c
        }())
    }, {}],
    356: [function(t, e, n) {
        "use strict";

        function i() {}
        i.prototype = {
            resolve: function() {
                return this._defer.resolve.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
            },
            reject: function() {
                return this._defer.reject.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
            },
            progress: function() {
                var t = "ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
                return console.warn(t), this._defer.progress.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
            },
            then: function() {
                return this._defer.then.apply(this._defer, Array.prototype.slice.call(arguments)), this.promise()
            },
            promise: function() {
                return this._defer.promise.apply(this._defer, Array.prototype.slice.call(arguments))
            }
        }, e.exports = i
    }, {}],
    357: [function(t, e, n) {
        "use strict";

        function i() {
            this._defer = new s
        }
        var r = new(t("./ac-deferred/Deferred")),
            s = t("smartsign-deferred").Deferred;
        i.prototype = r, e.exports.join = function() {
            return s.when.apply(null, [].slice.call(arguments))
        }, e.exports.all = function(t) {
            return s.when.apply(null, t)
        }, e.exports.Deferred = i
    }, {
        "./ac-deferred/Deferred": 356,
        "smartsign-deferred": 355
    }],
    358: [function(t, e, n) {
        t("@marcom/ac-polyfills"), e.exports.Asset = t("./ac-asset-loader/AssetLoader/Asset"), e.exports.Asset.Ajax = t("./ac-asset-loader/AssetLoader/Asset/Ajax"), e.exports.Asset.Ajax.JSON = t("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON"), e.exports.Asset.Img = t("./ac-asset-loader/AssetLoader/Asset/Img"), e.exports.Asset.Video = t("./ac-asset-loader/AssetLoader/Asset/Video"), e.exports.Asset.Binary = t("./ac-asset-loader/AssetLoader/Asset/Binary"), e.exports.Asset.Binary.Chunk = t("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk"), e.exports.AssetLoader = t("./ac-asset-loader/AssetLoader"), e.exports.AssetLoader.Queue = t("./ac-asset-loader/AssetLoader/Queue")
    }, {
        "./ac-asset-loader/AssetLoader": 359,
        "./ac-asset-loader/AssetLoader/Asset": 360,
        "./ac-asset-loader/AssetLoader/Asset/Ajax": 361,
        "./ac-asset-loader/AssetLoader/Asset/Ajax/JSON": 362,
        "./ac-asset-loader/AssetLoader/Asset/Binary": 363,
        "./ac-asset-loader/AssetLoader/Asset/Binary/Chunk": 364,
        "./ac-asset-loader/AssetLoader/Asset/Img": 365,
        "./ac-asset-loader/AssetLoader/Asset/Video": 368,
        "./ac-asset-loader/AssetLoader/Queue": 369,
        "@marcom/ac-polyfills": void 0
    }],
    359: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.options = s.defaults(f, e || {});
            var n = this._generateAssets(t);
            this._timeoutDuration = this.options.timeout, this._timeout = null, this._proxyListeners(), this.add(n, this.options)
        }
        var r, s = t("@marcom/ac-object"),
            o = t("@marcom/ac-event-emitter").EventEmitter,
            a = t("./AssetLoader/Asset/Ajax"),
            c = t("./AssetLoader/Asset/Ajax/JSON"),
            l = t("./AssetLoader/Asset/Img"),
            h = (t("./AssetLoader/Asset/Video"), t("../utils/destroy")),
            u = t("./AssetLoader/Queue"),
            f = {};
        r = i.prototype = new o, r.load = function() {
            return this._timeoutDuration && (this._timeout = window.setTimeout(this._onTimeout.bind(this), this._timeoutDuration)), this._queue.start()
        }, r._clearTimeout = function() {
            window.clearTimeout(this._timeout), this._timeout = null
        }, r.pause = function() {
            return this._clearTimeout(), this._queue.pause()
        }, r.destroy = function() {
            h(this, !0)
        }, r.add = function(t) {
            return Array.isArray(t) || (t = [t]), t = this._generateAssets(t), !this._queue || this._queue.loaded ? (this._queue && this._queue.destroy(), this._queue = new u(t, this.options), void this._bindQueueListeners()) : void this._queue.add(t)
        }, r._onTimeout = function() {
            this._queue.abort(), this._queue.destroy(), this.trigger("timeout")
        }, r._generateAssets = function(t) {
            void 0 === this._boundGenerateAsset && (this._boundGenerateAsset = this._generateAsset.bind(this)), t = [].concat(t);
            var e = t.map(this._boundGenerateAsset);
            return e
        }, r._generateAsset = function(t, e) {
            return i.isValidAsset(t) ? (t.index = e, t) : "string" != typeof t || "" === t ? null : t.match(/\.json$/) ? new c(t, e) : t.match(/\.(xml|txt)$/) ? new a(t, e) : new l(t, e)
        }, r._proxyListeners = function() {
            this._boundOnResolved = this._onResolved.bind(this), this._boundOnRejected = this._onRejected.bind(this), this._boundOnProgress = this._onProgress.bind(this)
        }, r._bindQueueListeners = function() {
            this._queue.on("resolved", this._boundOnResolved), this._queue.on("rejected", this._boundOnRejected), this._queue.on("progress", this._boundOnProgress)
        }, r._onResolved = function(t) {
            this._clearTimeout(), this.trigger("loaded", t)
        }, r._onRejected = function(t) {
            this.trigger("error", t)
        }, r._onProgress = function(t) {
            this.trigger("progress", t)
        }, i.isValidAsset = function(t) {
            return !(!t || "function" != typeof t.load || "function" != typeof t.destroy)
        }, i.isValidAssetLoader = function(t) {
            return !(!t || "function" != typeof t.load || "function" != typeof t.pause || "function" != typeof t.destroy)
        }, e.exports = i
    }, {
        "../utils/destroy": 370,
        "./AssetLoader/Asset/Ajax": 361,
        "./AssetLoader/Asset/Ajax/JSON": 362,
        "./AssetLoader/Asset/Img": 365,
        "./AssetLoader/Asset/Video": 368,
        "./AssetLoader/Queue": 369,
        "@marcom/ac-event-emitter": 353,
        "@marcom/ac-object": 443
    }],
    360: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.src = t, this.index = e, this.data = null, this._boundOnLoad = this._onLoad.bind(this), this._boundOnError = this._onError.bind(this)
        }
        var r, s = (t("ac-deferred").Deferred, t("@marcom/ac-event-emitter").EventEmitter),
            o = t("../../utils/destroy");
        r = i.prototype = new s, r.load = function() {
            this._load()
        }, r.destroy = function() {
            o(this)
        }, r._load = function() {
            this.data = {
                src: this.src
            }, window.setTimeout(this._onLoad.bind(this), 20)
        }, r._onLoad = function() {
            this.trigger("loaded", this)
        }, r._onError = function() {
            this.trigger("error", this.data)
        }, e.exports = i
    }, {
        "../../utils/destroy": 370,
        "@marcom/ac-event-emitter": 353,
        "ac-deferred": 357
    }],
    361: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            a.apply(this, arguments)
        }
        var r, s = t("@marcom/ac-ajax"),
            o = t("@marcom/ac-object"),
            a = t("../Asset");
        r = i.prototype = o.create(a.prototype), r._load = function() {
            s.get({
                url: this.src
            }).then(this._boundOnLoad, this._boundOnError)
        }, r._onLoad = function(t) {
            this.data = t.response, a.prototype._onLoad.call(this)
        }, e.exports = i
    }, {
        "../Asset": 360,
        "@marcom/ac-ajax": 348,
        "@marcom/ac-object": 443
    }],
    362: [function(t, e, n) {
        "use strict";

        function i(t) {
            o.apply(this, arguments)
        }
        var r, s = t("@marcom/ac-object"),
            o = t("../Ajax");
        r = i.prototype = s.create(o.prototype), r._onLoad = function(t) {
            try {
                o.prototype._onLoad.call(this, {
                    response: JSON.parse(t.response || t.responseText)
                })
            } catch (e) {
                this._onError(e)
            }
        }, e.exports = i
    }, {
        "../Ajax": 361,
        "@marcom/ac-object": 443
    }],
    363: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            a.apply(this, arguments), this.options = s.defaults(c, e || {}), this._totalSize = null, this._rangeObjects = {}, this._contentType = null, this._request = null, this._numLoaded = 0, this._numRanges = 0
        }
        var r = t("@marcom/ac-ajax"),
            s = t("@marcom/ac-object"),
            o = t("./Binary/Chunk"),
            a = t("./../Asset"),
            c = {
                chunkSize: 1048576
            },
            l = i.prototype = s.create(a.prototype);
        l.pause = function() {
            var t;
            null !== this._request && this._request.xhr.abort();
            for (t in this._rangeObjects) this._rangeObjects[t].isLoaded() === !1 && this._rangeObjects[t].pause()
        }, l._load = function() {
            void 0 === this._boundQueueRangeRequests && (this._boundQueueRangeRequests = this._queueRangeRequests.bind(this)), null === this._totalSize ? this._getMetaData().then(this._boundQueueRangeRequests) : this._queueRangeRequests()
        }, l._getOrCreateRangeObject = function(t) {
            var e, n, i = this._rangeObjects[t.toString()];
            return void 0 === i && (e = this.options.chunkSize - 1, n = t + e, n > this._totalSize && (e = null), i = this._rangeObjects[t.toString()] = new o(this.src, {
                start: t,
                length: e
            }), this._numRanges += 1), i
        }, l._onRangeLoad = function() {
            this._numLoaded += 1, this._numLoaded === this._numRanges && this._afterAllChunksLoaded()
        }, l._queueRangeRequests = function() {
            for (var t, e = 0; e < this._totalSize; e += this.options.chunkSize) t = this._getOrCreateRangeObject(e), t.on("loaded", this._onRangeLoad, this), t.load()
        }, l._afterAllChunksLoaded = function() {
            var t, e = [];
            for (var n in this._rangeObjects) e.push(this._rangeObjects[n].data);
            t = new Blob(e, {
                type: this._contentType
            }), this.trigger("loaded", t)
        }, l._afterHeadRequest = function(t) {
            this._totalSize = parseInt(t.getResponseHeader(["Content-Length"])), this._contentType = t.getResponseHeader(["Content-Type"]), this._request = null
        }, l._getMetaData = function() {
            return this._boundAfterHeadRequest || (this._boundAfterHeadRequest = this._afterHeadRequest.bind(this)), this._request = r.create({
                method: "HEAD",
                url: this.src,
                timeout: 2e3
            }), this._request.send().then(this._boundAfterHeadRequest, this._boundOnError)
        }, e.exports = i
    }, {
        "./../Asset": 360,
        "./Binary/Chunk": 364,
        "@marcom/ac-ajax": 348,
        "@marcom/ac-object": 443
    }],
    364: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            a.apply(this, arguments), this.options = o.defaults(c, e || {}), this._request = null, this.data = null
        }
        var r, s = t("@marcom/ac-ajax"),
            o = t("@marcom/ac-object"),
            a = t("../../Asset"),
            c = {
                start: 0,
                length: null
            };
        r = i.prototype = o.create(a.prototype), r.pause = function() {
            null !== this._request && (this._request.xhr.abort(), this._request = null)
        }, r.isLoaded = function() {
            return null !== this.data
        }, r._load = function() {
            this._request = s.create({
                url: this.src + "?" + this._buildQueryString(),
                method: "get",
                timeout: 3e4,
                headers: [{
                    name: "Range",
                    value: this._buildRangeString()
                }]
            }), this._request.xhr.responseType = "arraybuffer", this._request.send().then(this._boundOnLoad)
        }, r._onLoad = function(t) {
            this.data = t.response, this._request = null, a.prototype._onLoad.call(this, this.data)
        }, r._buildRangeString = function() {
            var t = "bytes=" + this.options.start + "-";
            return null !== this.options.length && (t += this.options.start + this.options.length), t
        }, r._buildQueryString = function() {
            var t = this.options.start.toString();
            return void 0 !== this.options.length && (t += this.options.start + this.options.length), t
        }, e.exports = i
    }, {
        "../../Asset": 360,
        "@marcom/ac-ajax": 348,
        "@marcom/ac-object": 443
    }],
    365: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            o.apply(this, arguments)
        }
        var r, s = t("@marcom/ac-object"),
            o = t("../Asset");
        r = i.prototype = s.create(o.prototype), r._load = function() {
            var t = new Image;
            this.data = t, this._boundOnLoad = this._onLoad.bind(this), t.onload = this._boundOnLoad, t.onerror = this._boundOnError, t.src = this.src
        }, e.exports = i
    }, {
        "../Asset": 360,
        "@marcom/ac-object": 443
    }],
    366: [function(t, e, n) {
        "use strict";
        var i, r = t("@marcom/ac-ajax").Ajax,
            s = t("@marcom/ac-object"),
            o = t("./SplitFile/Chunk"),
            a = t("../Asset"),
            c = {
                splitManifestTimeout: 5e3,
                splitChunkTimeout: null
            },
            l = function(t, e) {
                a.apply(this, arguments), t.lastIndexOf("/") !== t.length - 1 && (t += "/"), this.options = s.extend(c, e || {}), this._manifestPath = t + "manifest.json", this._ajax = new r, this._request = null, this._chunksLoaded = 0, this._chunksLen = null, this._chunks = [], this._boundOnManifestLoaded = this._onManifestLoaded.bind(this)
            };
        i = l.prototype = s.create(a.prototype), i._load = function() {
            var t = {
                method: "get",
                url: this._manifestPath,
                timeout: this.options.manifestTimeout
            };
            this._request = this._ajax.create(t), this._request.send().then(this._boundOnManifestLoaded)
        }, i._onManifestLoaded = function(t) {
            this._manifest = JSON.parse(t.responseText), this._chunksLen = this._manifest.files.length;
            var e, n, i = this._manifest.files,
                r = this._chunksLen;
            for (e = 0; e < r; e++) n = this._getOrCreateChunkObject(i[e], e), n.once("loaded", this._onChunkLoaded, this), n.load();
            this._request = null, this._ajax = null
        }, i._getOrCreateChunkObject = function(t, e) {
            var n = this.options.splitChunkTimeout ? {
                timeout: this.options.splitChunkTimeout
            } : null;
            if (!this._chunks[e]) {
                var i = t.path;
                if (i.match(/(^http(s?))/)) {
                    if (this.src.match(/(^http(s?))/)) {
                        var r = i.indexOf("/", 10),
                            s = this.src.indexOf("/", 10);
                        i = this.src.substring(0, s) + i.substring(r)
                    }
                } else i = this.src + "/" + i;
                this._chunks[e] = new o(i, n)
            }
            return this._chunks[e]
        }, i._onChunkLoaded = function() {
            if (this._chunksLoaded++, this._chunksLoaded === this._chunksLen) {
                var t, e = this._chunks.length,
                    n = [];
                for (t = 0; t < e; t++) n.push(this._chunks[t].data), this._chunks[t].off();
                this.data = new Blob(n, {
                    type: this._manifest.mimeType
                }), n = this._chunks = null, this.trigger("loaded", this.data)
            }
        }, i.pause = function() {
            null !== this._request && (null !== this._request.xhr && this._request.xhr.abort(),
                this._request = null), this.data = null, this._chunks = null
        }, e.exports = l
    }, {
        "../Asset": 360,
        "./SplitFile/Chunk": 367,
        "@marcom/ac-ajax": 348,
        "@marcom/ac-object": 443
    }],
    367: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            a.apply(this, arguments), this.options = o.extend(c, e || {}), this._request = null, this.data = null
        }
        var r, s = t("@marcom/ac-ajax"),
            o = t("@marcom/ac-object"),
            a = t("../../Asset"),
            c = {
                timeout: 3e4
            };
        r = i.prototype = o.create(a.prototype), r.pause = function() {
            null !== this._request && (this._request.xhr.abort(), this._request = null)
        }, r.isLoaded = function() {
            return null !== this.data
        }, r._load = function() {
            this._request = s.create({
                url: this.src,
                method: "get",
                timeout: this.options.timeout
            }), this._request.xhr.responseType = "arraybuffer", this._request.send().then(this._boundOnLoad)
        }, r._onLoad = function(t) {
            this.data = t.response, this._request = null, a.prototype._onLoad.call(this, this.data)
        }, e.exports = i
    }, {
        "../../Asset": 360,
        "@marcom/ac-ajax": 348,
        "@marcom/ac-object": 443
    }],
    368: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            c.apply(this, arguments), this.options = o.defaults(h, e || {}), this._binary = this.options.binary || this._createAssetType()
        }
        var r, s = t("@marcom/ac-feature"),
            o = t("@marcom/ac-object"),
            a = t("./Binary"),
            c = t("../Asset"),
            l = t("./SplitFile"),
            h = {
                chunkSize: 1048576,
                split: !1
            };
        r = i.prototype = o.create(c.prototype), r._canUseBlob = function() {
            return void 0 !== window.Blob && void 0 !== window.URL && "function" == typeof window.URL.createObjectURL && s.isDesktop() === !0
        }, r._createAssetType = function() {
            if (this._canUseBlob()) return this.options.split ? new l(this.src, this.options) : new a(this.src, this.options)
        }, r._load = function() {
            this._binary.on("loaded", this._boundOnLoad), this._binary.on("error", this._boundOnError), this._binary.load()
        }, r._onLoad = function(t) {
            var e = t;
            t instanceof window.Blob && (e = this.options.element, e || (e = document.createElement("video")), e.getAttribute("type") !== t.type && e.setAttribute("type", t.type), e.src = window.URL.createObjectURL(t)), c.prototype._onLoad.call(this, e)
        }, r.pause = function() {
            this._binary.pause()
        }, r.destroy = function() {
            this._binary.destroy(), c.prototype.destroy.call(this)
        }, e.exports = i
    }, {
        "../Asset": 360,
        "./Binary": 363,
        "./SplitFile": 366,
        "@marcom/ac-feature": 203,
        "@marcom/ac-object": 443
    }],
    369: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.options = s.defaults(l, e || {}), this._queue = t, this._active = [], this._allowedThreads = this.options.threads, this._availableThreads = this._allowedThreads, this._deferred = new o, this._data = [], this.paused = !0, this.loaded = !1, this.promise = this._deferred.promise()
        }
        var r, s = t("@marcom/ac-object"),
            o = t("ac-deferred").Deferred,
            a = t("@marcom/ac-event-emitter").EventEmitter,
            c = t("../../utils/destroy"),
            l = {
                threads: 4
            };
        r = i.prototype = new a, r.start = function() {
            var t, e = this._availableThreads;
            for (this.paused = !1, e > this._queue.length && (e = this._queue.length), t = 1; t <= e; t++) this._startNewThread();
            return this.promise
        }, r.pause = function() {
            this.paused = !0;
            var t = [];
            this._active.forEach(function(e, n) {
                "function" == typeof e.pause && (this._queue.unshift(e), this._releaseThread(), e.off("loaded"), e.off("error"), e.pause(), t.push(n))
            }, this), t.forEach(function(t) {
                this._active.splice(t, 1)
            }, this)
        }, r.add = function(t) {
            this._queue = this._queue.concat(t)
        }, r.destroy = function() {
            this.pause(), c(this)
        }, r._startNewThread = function() {
            var t = this._queue.shift();
            if (this._occupyThread(), t && "function" == typeof t.load) {
                var e = function(e) {
                        this._onProgress(e), this._active.splice(this._active.indexOf(t), 1), t.off("error", n)
                    },
                    n = function(n) {
                        this._onError(), t.off("loaded", e)
                    };
                t.once("loaded", e, this), t.once("error", n, this), t.load()
            } else this._onError();
            this._active.push(t)
        }, r._onResolved = function() {
            return !this._errored && (this._deferred.resolve(this._data), void this.trigger("resolved", this._data))
        }, r._onError = function(t) {
            return !this._errored && (this._errored = !0, this._deferred.reject(t), void this.trigger("rejected", t))
        }, r.abort = function() {
            this._deferred.reject()
        }, r._onProgress = function(t) {
            return !this._errored && (this._releaseThread(), this._data[t.index] = t.data, this.trigger("progress", t.data), void(this._queue.length <= 0 ? this._availableThreads >= this._allowedThreads && this._onResolved() : this.paused || this._errored || this._startNewThread()))
        }, r._occupyThread = function() {
            if (this._availableThreads--, this._availableThreads < 0) throw "AssetLoader.Queue: Available thread count cannot be negative."
        }, r._releaseThread = function() {
            if (this._availableThreads++, this._availableThreads > this._allowedThreads) throw "AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
        }, e.exports = i
    }, {
        "../../utils/destroy": 370,
        "@marcom/ac-event-emitter": 353,
        "@marcom/ac-object": 443,
        "ac-deferred": 357
    }],
    370: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e) {
            function n(t) {
                var e = !0;
                for (var n in t)
                    if (t.hasOwnProperty(n) && null !== t[n]) {
                        e = !1;
                        break
                    }
                return e
            }
            "function" == typeof t.off && t.off(), window.setTimeout(function() {
                var i;
                for (i in t) t.hasOwnProperty(i) && (e && t[i] && "function" == typeof t[i].destroy && !n(t[i]) && t[i].destroy(), t[i] = null)
            })
        }
    }, {}],
    371: [function(t, e, n) {
        arguments[4][185][0].apply(n, arguments)
    }, {
        "./ac-browser/BrowserData": 372,
        "./ac-browser/IE": 373,
        dup: 185
    }],
    372: [function(t, e, n) {
        arguments[4][186][0].apply(n, arguments)
    }, {
        "./data": 374,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.some": void 0,
        dup: 186
    }],
    373: [function(t, e, n) {
        arguments[4][187][0].apply(n, arguments)
    }, {
        dup: 187
    }],
    374: [function(t, e, n) {
        arguments[4][188][0].apply(n, arguments)
    }, {
        dup: 188
    }],
    375: [function(t, e, n) {
        arguments[4][67][0].apply(n, arguments)
    }, {
        dup: 67
    }],
    376: [function(t, e, n) {
        arguments[4][68][0].apply(n, arguments)
    }, {
        dup: 68
    }],
    377: [function(t, e, n) {
        arguments[4][69][0].apply(n, arguments)
    }, {
        dup: 69
    }],
    378: [function(t, e, n) {
        arguments[4][307][0].apply(n, arguments)
    }, {
        dup: 307
    }],
    379: [function(t, e, n) {
        arguments[4][70][0].apply(n, arguments)
    }, {
        dup: 70
    }],
    380: [function(t, e, n) {
        arguments[4][71][0].apply(n, arguments)
    }, {
        dup: 71
    }],
    381: [function(t, e, n) {
        arguments[4][310][0].apply(n, arguments)
    }, {
        dup: 310
    }],
    382: [function(t, e, n) {
        arguments[4][72][0].apply(n, arguments)
    }, {
        "./ELEMENT_NODE": 379,
        "./internal/isNodeType": 390,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        dup: 72
    }],
    383: [function(t, e, n) {
        arguments[4][312][0].apply(n, arguments)
    }, {
        dup: 312
    }],
    384: [function(t, e, n) {
        arguments[4][313][0].apply(n, arguments)
    }, {
        "./COMMENT_NODE": 375,
        "./DOCUMENT_FRAGMENT_NODE": 376,
        "./DOCUMENT_NODE": 377,
        "./DOCUMENT_TYPE_NODE": 378,
        "./ELEMENT_NODE": 379,
        "./TEXT_NODE": 380,
        "./createDocumentFragment": 381,
        "./filterByNodeType": 382,
        "./hasAttribute": 383,
        "./indexOf": 385,
        "./insertAfter": 386,
        "./insertBefore": 387,
        "./insertFirstChild": 388,
        "./insertLastChild": 389,
        "./isComment": 392,
        "./isDocument": 393,
        "./isDocumentFragment": 394,
        "./isDocumentType": 395,
        "./isElement": 396,
        "./isNode": 397,
        "./isNodeList": 398,
        "./isTextNode": 399,
        "./remove": 400,
        "./replace": 401,
        dup: 313
    }],
    385: [function(t, e, n) {
        arguments[4][314][0].apply(n, arguments)
    }, {
        "./filterByNodeType": 382,
        "./internal/validate": 391,
        "@marcom/ac-polyfills/Array/prototype.indexOf": void 0,
        "@marcom/ac-polyfills/Array/prototype.slice": void 0,
        dup: 314
    }],
    386: [function(t, e, n) {
        arguments[4][315][0].apply(n, arguments)
    }, {
        "./internal/validate": 391,
        dup: 315
    }],
    387: [function(t, e, n) {
        arguments[4][316][0].apply(n, arguments)
    }, {
        "./internal/validate": 391,
        dup: 316
    }],
    388: [function(t, e, n) {
        arguments[4][317][0].apply(n, arguments)
    }, {
        "./internal/validate": 391,
        dup: 317
    }],
    389: [function(t, e, n) {
        arguments[4][318][0].apply(n, arguments)
    }, {
        "./internal/validate": 391,
        dup: 318
    }],
    390: [function(t, e, n) {
        arguments[4][73][0].apply(n, arguments)
    }, {
        "../isNode": 397,
        dup: 73
    }],
    391: [function(t, e, n) {
        arguments[4][74][0].apply(n, arguments)
    }, {
        "../COMMENT_NODE": 375,
        "../DOCUMENT_FRAGMENT_NODE": 376,
        "../ELEMENT_NODE": 379,
        "../TEXT_NODE": 380,
        "./isNodeType": 390,
        dup: 74
    }],
    392: [function(t, e, n) {
        arguments[4][321][0].apply(n, arguments)
    }, {
        "./COMMENT_NODE": 375,
        "./internal/isNodeType": 390,
        dup: 321
    }],
    393: [function(t, e, n) {
        arguments[4][322][0].apply(n, arguments)
    }, {
        "./DOCUMENT_NODE": 377,
        "./internal/isNodeType": 390,
        dup: 322
    }],
    394: [function(t, e, n) {
        arguments[4][75][0].apply(n, arguments)
    }, {
        "./DOCUMENT_FRAGMENT_NODE": 376,
        "./internal/isNodeType": 390,
        dup: 75
    }],
    395: [function(t, e, n) {
        arguments[4][324][0].apply(n, arguments)
    }, {
        "./DOCUMENT_TYPE_NODE": 378,
        "./internal/isNodeType": 390,
        dup: 324
    }],
    396: [function(t, e, n) {
        arguments[4][76][0].apply(n, arguments)
    }, {
        "./ELEMENT_NODE": 379,
        "./internal/isNodeType": 390,
        dup: 76
    }],
    397: [function(t, e, n) {
        arguments[4][77][0].apply(n, arguments)
    }, {
        dup: 77
    }],
    398: [function(t, e, n) {
        arguments[4][327][0].apply(n, arguments)
    }, {
        dup: 327
    }],
    399: [function(t, e, n) {
        arguments[4][328][0].apply(n, arguments)
    }, {
        "./TEXT_NODE": 380,
        "./internal/isNodeType": 390,
        dup: 328
    }],
    400: [function(t, e, n) {
        arguments[4][78][0].apply(n, arguments)
    }, {
        "./internal/validate": 391,
        dup: 78
    }],
    401: [function(t, e, n) {
        arguments[4][330][0].apply(n, arguments)
    }, {
        "./internal/validate": 391,
        dup: 330
    }],
    402: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Promise"), t("@marcom/ac-polyfills/JSON"), e.exports = {
            createFlow: t("./ac-flow/flow/factory"),
            Player: t("./ac-flow/flow/Player")
        }
    }, {
        "./ac-flow/flow/Player": 405,
        "./ac-flow/flow/factory": 416,
        "@marcom/ac-polyfills/JSON": void 0,
        "@marcom/ac-polyfills/Promise": void 0
    }],
    403: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            r.call(this), this._compositor = new l(e, n, i), this.options = t || {}
        }
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("./compositor/decorator/Keyframe"),
            o = t("./compositor/decorator/Superframe"),
            a = t("./compositor/decorator/SuperKeyframe"),
            c = t("./compositor/decorator/Cache"),
            l = t("./compositor/Sequence"),
            h = i.prototype = new r(null);
        h._gotoImageFrame = function(t) {
            return this._rendering ? Promise.resolve() : this._currentFrame === t ? Promise.resolve() : (this._rendering = !0, this._compositor.compositeFrames(this._currentFrame, t).then(function() {
                this._rendering = !1, this._currentFrame = t
            }.bind(this)))
        }, h.init = function() {
            var t;
            return "CANVAS" === this.options.element.nodeName ? t = this.options.element : (t = document.createElement("canvas"), this.options.element.appendChild(t)), this.gotoFrame = this._gotoImageFrame, this._compositor.init(t).then(this._decorateCompositor.bind(this))
        }, h.resumeLoading = function() {
            return this._compositor.resumeLoading()
        }, h.pauseLoading = function() {
            this._compositor.pauseLoading()
        }, h._decorateCompositor = function() {
            var t, e, n = this._compositor;
            return n ? (t = this._compositor._diffRender.flowData, e = this._compositor.canvas, t.superframeFrequency && (n = new o(n, t.superframeFrequency)), t.version >= 4 && (n = new s(n)), t.version >= 4 && t.superframeFrequency && (n = new a(n)), this.options.keyframeCache && (n = new c(n, this.options.keyframeCache)), n === this._compositor ? Promise.resolve() : (this._compositor = n, this._compositor.init(e))) : Promise.reject()
        }, h._destroy = function() {
            this.off(), this._compositor.destroy()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(h, {
            _currentFrame: {
                value: 0,
                enumerable: !1,
                writable: !0
            },
            frameCount: {
                get: function() {
                    return this._compositor.frameCount
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {
        "./compositor/Sequence": 406,
        "./compositor/decorator/Cache": 407,
        "./compositor/decorator/Keyframe": 408,
        "./compositor/decorator/SuperKeyframe": 409,
        "./compositor/decorator/Superframe": 410,
        "@marcom/ac-event-emitter-micro": 183
    }],
    404: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-asset-loader").AssetLoader,
            r = t("./data/provider/Async"),
            s = function(t, e, n) {
                this._manifestUrl = t, this._keyframeUrls = e, this._imageUrlPattern = n, this.state = {
                    manifestLoaded: !1,
                    keyframesLoaded: !1,
                    diffsLoaded: !1,
                    diffCountLoaded: 0,
                    totalDiffs: null
                }, this.assets = {
                    keyframes: null,
                    manifest: null,
                    diffs: null
                }, this._promises = {}, this._loaders = {}, this._activeLoaders = [], this._resumeQueue = [], this._paused = !0, this._shouldPause = !1, this._boundOnManifestLoaded = this._onManifestLoaded.bind(this), this._boundOnKeyframesLoaded = this._onKeyframesLoaded.bind(this), this._boundOnDiffsLoaded = this._onDiffsLoaded.bind(this)
            },
            o = s.prototype;
        o.setManifestUrl = function(t) {
            return this._manifestUrl = t, this
        }, o.setKeyframeUrls = function(t) {
            return this._keyframeUrls = t, this
        }, o.setImageUrlPattern = function(t) {
            return this._imageUrlPattern = t, this
        }, o.pause = function() {
            this._shouldPause = !0;
            var t, e = this._activeLoaders.length;
            for (t = 0; t < e; t++) this._activeLoaders[t].pause();
            this._paused = !0
        }, o.destroy = function() {
            var t, e, n;
            this.pause();
            for (t in this._loaders) this._loaders.hasOwnProperty(t) && this._loaders[t].destroy();
            for (e in this._promises) this._promises.hasOwnProperty(e) && "pending" === this._promises[e].status() && this._promises[e].reject();
            for (n in this) this.hasOwnProperty(n) && (this[n] = null)
        }, o.load = function() {
            if (this._paused && (this._activeLoaders.length > 0 || this._resumeQueue.length > 0)) return this._resume(), !0
        }, o._resume = function() {
            this._shouldPause = !1;
            var t, e = this._activeLoaders.length;
            for (t = 0; t < e; t++) this._activeLoaders[t].load();
            var n, i = this._resumeQueue.length;
            for (n = 0; n < i; n++) this._resumeQueue[n].call(this);
            this._resumeQueue = [], this._paused = !1
        }, o.loadManifest = function() {
            return this._shouldPause ? void this._resumeQueue.push(this.loadManifest) : this.assets.manifest ? this.assets.manifest : (this._paused = !1, this._loaders.manifest = new r(this._getManifestAssetsData()), this._activeLoaders.push(this._loaders.manifest), this._loaders.manifest.load().then(this._boundOnManifestLoaded))
        }, o.loadKeyframes = function() {
            var t;
            return this._shouldPause && this._resumeQueue.push(this.loadKeyframes), this.assets.keyframes ? t = Promise.resolve(this.assets.keyframes) : (this._paused = !1, this._loaders.keyframes = new i(this._getKeyframesAssetsData()), this._activeLoaders.push(this._loaders.keyframes), t = this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)), this._promises.keyframes = t, this._promises.keyframes
        }, o.loadDiffs = function() {
            var t;
            return this._shouldPause && this._resumeQueue.push(this.loadDiffs), this.assets.diffs ? t = this._promises.diffs.resolve(this.assets.diffs) : (this._paused = !1, this._loaders.diffs = new i(this._getDiffsAssetsData()), this._activeLoaders.push(this._loaders.diffs), t = this._loaders.diffs.load().then(this._boundOnDiffsLoaded)), this._promises.diffs = t, this._promises.diffs
        }, o._getManifestAssetsData = function() {
            return this._manifestUrl
        }, o._getKeyframesAssetsData = function() {
            return this._keyframeUrls
        }, o._getDiffsAssetsData = function() {
            var t, e, n = this.assets.manifest.imagesRequired,
                i = [],
                r = this._imageUrlPattern.match(/#/g).length;
            for (t = 1; t <= n; t++) e = "0000" + t, e = e.substring(e.length - r), i.push(this._imageUrlPattern.replace(/#{2,}/g, e));
            return i
        }, o._onManifestLoaded = function(t) {
            if (this.assets) return this.assets.manifest = t, this.state.manifestLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.manifest), this.assets.manifest
        }, o._onKeyframesLoaded = function(t) {
            if (this.assets) return this.assets.keyframes = t, this.state.keyframeLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.keyframes), Promise.resolve(this.assets.keyframes)
        }, o._onDiffsLoaded = function(t) {
            if (this.assets) return this.assets.diffs = t, this.state.diffsLoaded = !0, this._paused = !0, this._removeFromActiveLoaders(this._loaders.diffs), Promise.resolve(this.assets.diffs)
        }, o._removeFromActiveLoaders = function(t) {
            var e, n = this._activeLoaders.length;
            for (e = 0; e < n; e++)
                if (this._activeLoaders[e] === t) return void this._activeLoaders.splice(e, 1)
        }, e.exports = s
    }, {
        "./data/provider/Async": 414,
        "@marcom/ac-asset-loader": 358
    }],
    405: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.element = e, this._domEmitter = new r(e), this._frameRate = 30, this.paused = !0, this.loop = !1, this._destroyed = !1, this._flow = t, this._boundAdvanceTimeToGlobal = this._advanceToTimeGlobal.bind(this), this._onBoundGlobalTimeUpdate = this._onGlobalTimeUpdate.bind(this), this._onBoundLocalTimeUpdate = this._onLocalTimeUpdate.bind(this)
        }
        var r = t("@marcom/ac-dom-emitter").DOMEmitter,
            s = i.prototype;
        s._timeToFrame = function(t) {
            var e;
            return e = Math.round(t / this.duration * this._flow.frameCount), e %= this._flow.frameCount + 1, e < 0 ? this._flow.frameCount + e : e
        }, s._advanceToTimeGlobal = function(t) {
            this._prevTime = this._prevTime || t, this._currentTime += (t - this._prevTime) / 1e3 * this.playbackRate, this._prevTime = t, this._pauseAfterRender = !1;
            var e = this._timeToFrame(this._currentTime);
            if (this.loop ? this._currentTime = (this.duration + this._currentTime) % this.duration : this.playbackRate > 0 && this._currentTime > this.duration ? (e = this._flow.frameCount, this._currentTime = this.duration, this._pauseAfterRender = !0) : this.playbackRate < 0 && this._currentTime < 0 && (e = 0, this._currentTime = 0, this._pauseAfterRender = !0), !this.paused && !this.seeking) return this._flow.gotoFrame(e).then(this._onBoundGlobalTimeUpdate)
        }, s._onGlobalTimeUpdate = function() {
            this.trigger("timeupdate"), this._pauseAfterRender ? (this.paused = !0, this.trigger("ended")) : this._requestAnimationFrame = window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
        }, s._onLocalTimeUpdate = function() {
            this.seeking = !1, this.trigger("timeupdate"), this.trigger("seeked"), this._requestAnimationFrame = window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
        }, s._advanceToTimeLocal = function(t) {
            this.seeking || (this.seeking = !0, this.trigger("seeking"), this._currentTime = 1 * t, this._prevTime = null, window.cancelAnimationFrame(this._requestAnimationFrame), this._flow.gotoFrame(this._timeToFrame(t)).then(this._onBoundLocalTimeUpdate))
        }, s._onLoaded = function() {
            this.trigger("loaded"), this.trigger("canplaythrough")
        }, s._nullProperties = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && (t[e] = null);
            return t
        }, s.destroy = function() {
            this.trigger("destroy"), this.pause(), this.off(), this._flow.destroy(), this._flow = this._nullProperties(this._flow), this._nullProperties(this)
        }, s.load = function() {
            if (!this._flow.resumeLoading()) return this.trigger("loadstart"), this._flow.init().then(function(t) {
                var e = function() {
                        this._onLoaded()
                    }.bind(this),
                    n = function() {
                        this._destroyed === !1 && this.trigger("error")
                    }.bind(this);
                return t ? t.then(e, n) : void e()
            }.bind(this))
        }, s.pauseLoading = function() {
            this._flow.pauseLoading()
        }, s.play = function() {
            return this.paused && (this.paused = !1, this.trigger("play"), this._prevTime = null, this._requestAnimationFrame = window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)), this
        }, s.pause = function() {
            return this.paused || (this.paused = !0, window.cancelAnimationFrame(this._requestAnimationFrame), this.trigger("pause")), this
        }, s.on = function() {
            this._domEmitter.on.apply(this._domEmitter, arguments)
        }, s.once = function() {
            this._domEmitter.once.apply(this._domEmitter, arguments)
        }, s.trigger = function() {
            this._domEmitter.trigger.apply(this._domEmitter, arguments)
        }, s.off = function() {
            this._domEmitter.off.apply(this._domEmitter, arguments)
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(s, {
            _currentTime: {
                value: 0,
                enumerable: !1,
                writable: !0
            },
            _playbackRate: {
                value: 1,
                enumerable: !1,
                writable: !0
            },
            currentTime: {
                get: function() {
                    return 1 * this._currentTime
                },
                set: s._advanceToTimeLocal,
                enumerable: !0
            },
            frameRate: {
                get: function() {
                    return this._frameRate
                },
                set: function(t) {
                    isFinite(t) && (this._frameRate = t, this.trigger("durationchange"))
                },
                enumerable: !0
            },
            playbackRate: {
                get: function() {
                    return 1 * this._playbackRate
                },
                set: function(t) {
                    isFinite(t) && (this._playbackRate = 1 * t, this.trigger("ratechange"))
                },
                enumerable: !0
            },
            duration: {
                get: function() {
                    return this._flow.frameCount / this.frameRate
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {
        "@marcom/ac-dom-emitter": 21
    }],
    406: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            this._keyframes = e, this._imageUrlPattern = n, this._loadController = new s(t, e, n)
        }
        var r = t("../diff/Render"),
            s = t("../LoadController"),
            o = i.prototype;
        o._initDiffRender = function(t) {
            t.then(function(t) {
                this._images = t, this.canvas.height = t[0].height, this.canvas.width = t[0].width, this.applyFrame(t[0])
            }.bind(this))
        }, o.init = function(t) {
            return this.canvas = t || document.createElement("canvas"), this.context = t.getContext("2d"), this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
        }, o.resumeLoading = function() {
            return this._loadController.load()
        }, o.pauseLoading = function() {
            this._loadController.pause()
        }, o.createDiffRender = function(t) {
            return this._diffRender = new r(t, this._imageUrlPattern, this._loadController), this._diffRender.init()
        }, o.applyFrame = function(t) {
            var e = this.context;
            e.drawImage(t, 0, 0)
        }, o.calculateRenderCount = function(t, e) {
            var n = 0;
            return Math.abs(e - t) >= e ? (t = 1, n = 1) : Math.abs(e - t) >= this.frameCount - e && this._images[1] && (t = this.frameCount - 2, n = 1), e > 0 && e < this.frameCount - 1 ? Math.abs(t - e) + n : n
        }, o.compositeFrames = function(t, e) {
            e = this.frameCount < e ? this.frameCount - 1 : e < 0 ? 0 : e, t = this.frameCount - 2 < t ? this.frameCount - 2 : t < 0 ? 0 : t;
            var n;
            if (Math.abs(e - t) >= e ? (t = 1, this.applyFrame(this._images[0])) : Math.abs(e - t) >= this.frameCount - e && this._images[1] && (t = this.frameCount - 2, this.applyFrame(this._images[1])), n = t > e ? -1 : t < e ? 1 : 0, e > 0 && e < this.frameCount - 1)
                for (; t !== e;) this._diffRender.renderDiff(this.canvas, t), t += n;
            return Promise.resolve(t)
        }, o.destroy = function() {
            this._loadController.destroy()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(o, {
            frameCount: {
                get: function() {
                    return this._diffRender.frames.length + 2
                },
                enumerable: !0
            },
            canvas: {
                get: function() {
                    return this._canvas
                },
                set: function(t) {
                    return this._canvas = t
                },
                enumerable: !0
            },
            mainCompositor: {
                get: function() {
                    for (var t = this; t._compositor;) t = t._compositor;
                    return t
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {
        "../LoadController": 404,
        "../diff/Render": 415
    }],
    407: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this._compositor = t, this._keyframeInterval = e || 8, this._keyframes = []
        }
        var r = i.prototype;
        r._getClosestKeyframe = function(t) {
            var e = t % this._keyframeInterval,
                n = Math.floor(t / this._keyframeInterval) + (e > this._keyframeInterval / 2 ? 1 : 0);
            return n
        }, r._getFrameFromKeyframe = function(t) {
            return t * this._keyframeInterval
        }, r._saveKeyframe = function(t) {
            var e, n = Math.floor(t / this._keyframeInterval);
            t % this._keyframeInterval !== 0 || this._keyframes[n] || (e = document.createElement("canvas"), e.width = this._compositor.canvas.width, e.height = this._compositor.canvas.height, e.getContext("2d").drawImage(this._compositor.canvas, 0, 0), this._keyframes[n] = e)
        }, r.init = function(t) {
            return this._compositor.init.apply(this._compositor, arguments)
        }, r.resumeLoading = function() {
            return this._compositor.resumeLoading()
        }, r.pauseLoading = function() {
            return this._compositor.pauseLoading()
        }, r.applyFrame = function() {
            this._compositor.applyFrame.apply(this._compositor, arguments)
        }, r.calculateRenderCount = function(t, e) {
            return t = this._getFrameFromKeyframe(this._getClosestKeyframe(e)), this._compositor.calculateRenderCount(t, e) + 1
        }, r.compositeFrames = function(t, e) {
            var n = this._getClosestKeyframe(e);
            return this._keyframes[n] && this._compositor.calculateRenderCount(t, e) > this.calculateRenderCount(t, e) ? (t = this._getFrameFromKeyframe(n), this.applyFrame(this._keyframes[n]), this._compositor.compositeFrames(t, e).then(function() {})) : this._compositor.compositeFrames(t, e).then(function() {}, null, this._saveKeyframe.bind(this))
        }, r.destroy = function() {
            return this._compositor.destroy()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
            frameCount: {
                get: function() {
                    return this._compositor.frameCount
                },
                enumerable: !0
            },
            canvas: {
                get: function() {
                    return this._compositor.canvas
                },
                set: function(t) {
                    return this._compositor.canvas = t
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {}],
    408: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._compositor = t, this._flowDataProvider = this.mainCompositor._loadController._loaders.manifest
        }
        var r = t("../../keyframe/Render"),
            s = i.prototype;
        s.init = function(t) {
            return this._keyframeDiffRender = new r(this._flowDataProvider._data, this.mainCompositor._imageUrlPattern), this._keyframeDiffRender.init()
        }, s.resumeLoading = function() {
            return this._compositor.resumeLoading()
        }, s.pauseLoading = function() {
            return this._compositor.pauseLoading()
        }, s.applyFrame = function(t) {
            return this._compositor.applyFrame.apply(this._compositor, arguments)
        }, s.applyKeyframe = function(t, e) {
            this._keyframeDiffRender.renderKeyframe(this.canvas, t, e)
        }, s.compositeFrames = function(t, e) {
            return this._isKeyframeDiff(e - 1) ? (this.applyKeyframe(e - 1), Promise.resolve(t - 1)) : this._compositor.compositeFrames.apply(this._compositor, arguments)
        }, s._isKeyframeDiff = function(t) {
            return t in this._keyframeDiffRender._loader._keyframes
        }, s.calculateRenderCount = function(t, e) {
            return this._compositor.calculateRenderCount.apply(this._compositor, arguments)
        }, s.destroy = function() {
            return this._compositor.destroy()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(s, {
            frameCount: {
                get: function() {
                    return this._compositor.frameCount
                },
                enumerable: !0
            },
            canvas: {
                get: function() {
                    return this._compositor.canvas
                },
                set: function(t) {
                    return this._compositor.canvas = t
                },
                enumerable: !0
            },
            mainCompositor: {
                get: function() {
                    return this._compositor.mainCompositor
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {
        "../../keyframe/Render": 418
    }],
    409: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._compositor = t, this._frames = this.mainCompositor._loadController._loaders.manifest._data.frames, this._superframeInterval = this.mainCompositor._diffRender.flowData.superframeFrequency
        }
        var r = i.prototype;
        r.init = function(t) {
            return this._compositor.init.apply(this._compositor, arguments)
        }, r.resumeLoading = function() {
            return this._compositor.resumeLoading()
        }, r.pauseLoading = function() {
            return this._compositor.pauseLoading()
        }, r.applyFrame = function(t) {
            return this._compositor.applyFrame.apply(this._compositor, arguments)
        }, r.applyKeyframe = function(t, e) {
            this._compositor.applyKeyframe.apply(this._compositor, arguments)
        }, r.compositeFrames = function(t, e) {
            var n, i;
            return e < 1 || e > this.frameCount - 2 ? this._compositor.compositeFrames.apply(this._compositor, arguments) : this._isKeyframeDiff(e - 1) ? (n = 1 === Math.abs(t - e), this.applyKeyframe(e - 1, n), Promise.resolve(t - 1)) : Math.abs(e - t) > this._superframeInterval && (i = this._getShortestRender(t, e), this._isKeyframeDiff(i - 1) || i <= 0 || i >= this.frameCount - 2) ? this._compositeFromSuperKeyframe(i, e) : this._compositor.compositeFrames.apply(this._compositor, [t, e])
        }, r._getShortestRender = function(t, e) {
            var n = this._compositor.calculateRenderCount,
                i = this._getClosestSuperKeyframe(e - 1),
                r = n.apply(this._compositor, [i, e]) + 1,
                s = n.apply(this._compositor, [t, e]);
            return r <= s ? i : t
        }, r._compositeFromSuperKeyframe = function(t, e) {
            var n = this.canvas.getContext("2d"),
                i = t <= 0 ? this.mainCompositor._images[0] : t >= this.frameCount - 2 ? this.mainCompositor._images[1] : this._frames[t - 1].image;
            return n.drawImage(i, 0, 0), this._compositor.compositeFrames.call(this._compositor, t, e)
        }, r._getClosestSuperFrame = function(t) {
            return Math.round(t / this._superframeInterval) * this._superframeInterval
        }, r._getClosestSuperKeyframe = function(t) {
            var e, n, i, r, s = this._frames.length;
            if (t < s + 1 && t > 0) {
                for (r = t - 1; r >= 0;) {
                    if ("keyframe" === this._frames[r].type) {
                        e = r + 1;
                        break
                    }
                    r -= 1
                }
                for (r = t + 1; r <= s - 1;) {
                    if ("keyframe" === this._frames[r].type) {
                        n = r + 1;
                        break
                    }
                    r += 1
                }
            }
            return e = e ? e : 0, n = n ? n : this.frameCount, i = t - e < n - t ? e : n
        }, r._isKeyframeDiff = function(t) {
            return this._compositor._isKeyframeDiff.apply(this._compositor, arguments)
        }, r.destroy = function() {
            return this._compositor.destroy()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
            frameCount: {
                get: function() {
                    return this._compositor.frameCount
                },
                enumerable: !0
            },
            canvas: {
                get: function() {
                    return this._compositor.canvas
                },
                set: function(t) {
                    return this._compositor.canvas = t
                },
                enumerable: !0
            },
            mainCompositor: {
                get: function() {
                    return this._compositor.mainCompositor
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {}],
    410: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this._compositor = t, this._superframeInterval = e || 4
        }
        var r = i.prototype;
        r._getClosestSuperframe = function(t) {
            return Math.round(t / this._superframeInterval) * this._superframeInterval
        }, r.init = function(t) {
            this._screenCanvas = t
        }, r.resumeLoading = function() {
            return this._compositor.resumeLoading()
        }, r.pauseLoading = function() {
            return this._compositor.pauseLoading()
        }, r.applyFrame = function() {
            this._compositor.applyFrame.apply(this._compositor, arguments)
        }, r.calculateRenderCount = function(t, e) {
            var n = this._getClosestSuperframe(t);
            return Math.abs(n - e) > this._superframeInterval / 2 ? (t = n + (t > e ? -1 : 1) * this._superframeInterval, this.calculateRenderCount(t, e) + 1) : Math.abs(n - e) + 1
        }, r.compositeFrames = function(t, e) {
            var n, i;
            return (e <= 0 || e >= this.frameCount - 2) && this._compositor.compositeFrames(t, e), t > this.frameCount - 2 ? t = this.frameCount - 2 : t <= 0 && (t = 1), i = this._getClosestSuperframe(t), n = this._compositor.calculateRenderCount(t, e) > this.calculateRenderCount(t, e) ? this._compositor.compositeFrames(i, i).then(function() {
                var n = i + (t > e ? -1 : 1) * this._superframeInterval;
                this._compositor.compositeFrames(i, n).then(function() {
                    return this.compositeFrames(n, e)
                }.bind(this))
            }.bind(this)) : this._compositor.compositeFrames(t, e).then(function() {}.bind(this)), n.then(function() {}.bind(this)), n
        }, r.destroy = function() {
            return this._compositor.destroy()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(r, {
            frameCount: {
                get: function() {
                    return this._compositor.frameCount
                },
                enumerable: !0
            },
            canvas: {
                get: function() {
                    return this._compositor.canvas
                },
                set: function(t) {
                    return this._compositor.canvas = t
                },
                enumerable: !0
            },
            mainCompositor: {
                get: function() {
                    return this._compositor.mainCompositor
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {}],
    411: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.location = t, this.length = e
        }
        e.exports = i
    }, {}],
    412: [function(t, e, n) {
        "use strict";

        function i() {}
        e.exports = i
    }, {}],
    413: [function(t, e, n) {
        "use strict";
        var i, r = t("./Manifest"),
            s = t("./Block"),
            o = {
                parseData: function(t) {
                    i = 0;
                    var e = t.frames.map(this._parseFrame, this);
                    return Object.create(r.prototype, {
                        version: {
                            value: t.version
                        },
                        framecount: {
                            value: t.frameCount
                        },
                        blockSize: {
                            value: t.blockSize
                        },
                        imagesRequired: {
                            value: t.imagesRequired
                        },
                        reversible: {
                            value: t.reversible
                        },
                        superframeFrequency: {
                            value: t.superframeFrequency
                        },
                        frames: {
                            value: e
                        }
                    })
                },
                _valueForCharAt: function(t, e) {
                    var n = t.charCodeAt(e);
                    return n > 64 && n < 91 ? n - 65 : n > 96 && n < 123 ? n - 71 : n > 47 && n < 58 ? n + 4 : 43 === n ? 62 : 47 === n ? 63 : void 0
                },
                _createNumberFromBase64Range: function(t, e, n) {
                    for (var i, r = 0; n--;) i = this._valueForCharAt(t, e++), r += i << 6 * n;
                    return r
                },
                _parseFrame: function(t) {
                    var e, n, i, r = [],
                        o = t.value,
                        a = t.startImageIndex,
                        c = t.startBlockIndex;
                    if ("keyframe" === t.type) return r.type = "keyframe", r.width = t.width, r.height = t.height, r.x = t.x, r.y = t.y, r;
                    for (e = 0; e < o.length; e += 5) i = this._createNumberFromBase64Range(o, e, 3), n = this._createNumberFromBase64Range(o, e + 3, 2), r.push(Object.create(s.prototype, {
                        location: {
                            value: i,
                            enumerable: !0
                        },
                        length: {
                            value: n,
                            enumerable: !0
                        },
                        block: {
                            value: (c += n) - n,
                            enumerable: !0
                        },
                        startImageIndex: {
                            value: a,
                            enumerable: !0
                        }
                    }));
                    return r
                }
            };
        e.exports = o
    }, {
        "./Block": 411,
        "./Manifest": 412
    }],
    414: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._assetLoader = new r([t])
        }
        var r = t("@marcom/ac-asset-loader").AssetLoader,
            s = t("../processor"),
            o = i.prototype;
        o.load = function() {
            return this._assetLoader.load().then(function(t) {
                var e;
                return t && t.length && (e = s.parseData(t[0]), this._data = e), e
            }.bind(this))
        }, e.exports = i
    }, {
        "../processor": 413,
        "@marcom/ac-asset-loader": 358
    }],
    415: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            this.flowData = t, this.flowData.imageUrlPattern = e, this._loadController = n
        }
        var r = i.prototype;
        r._storeImages = function(t) {
                t.then(function(t) {
                    var e = t.length;
                    this.images = t, this._blocksPerFullDiff = [], this._blockCountUpToIndex = [];
                    for (var n = 0, i = 0; i < e; i++) this._blocksPerFullDiff[i] = t[i].width / this.flowData.blockSize * (t[i].height / this.flowData.blockSize), n += this._blocksPerFullDiff[i], this._blockCountUpToIndex[i] = n
                }.bind(this))
            }, r._applyDiffRange = function(t, e) {
                for (var n, i, r = e.block, s = e.length, o = t.canvas.width / this.flowData.blockSize, a = e.startImageIndex, c = this.images[a].width, l = r % this._blockCountUpToIndex[a], h = c / this.flowData.blockSize, u = l % h * this.flowData.blockSize, f = Math.floor(l / (h || 1)) * this.flowData.blockSize, d = e.location % o * this.flowData.blockSize, m = Math.floor(e.location / o) * this.flowData.blockSize; s;) n = Math.min(s * this.flowData.blockSize, t.canvas.width - d, c - u), i = n / this.flowData.blockSize, t.drawImage(this.images[a], u, f, n, this.flowData.blockSize, d, m, n, this.flowData.blockSize), s -= i, s && ((u += n) >= c && (u = 0, f += this.flowData.blockSize), (d += n) >= t.canvas.width && (d = 0, m += this.flowData.blockSize), r += i)
            }, r.init = function() {
                return this._loadController.loadDiffs().then(this._storeImages.bind(this))
            }, r.renderDiff = function(t, e) {
                var n = t.getContext("2d");
                e -= 1;
                for (var i = 0, r = this.frames[e].length; i < r; i++) this._applyDiffRange(n, this.frames[e][i])
            }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}),
            Object.defineProperties(r, {
                frames: {
                    get: function() {
                        return this.flowData.frames
                    },
                    set: function(t) {
                        this.flowData.frames = t
                    },
                    enumerable: !0
                }
            }), e.exports = i
    }, {}],
    416: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-object/defaults"),
            r = t("./Flow"),
            s = t("./Player"),
            o = {
                keyframeCache: 8,
                preload: !0
            },
            a = {
                fileFormat: "jpg",
                baseName: "flow",
                imageUrlPattern: "###",
                startframeFileFormat: null,
                endframeFileFormat: null,
                basePath: null,
                manifestPath: null,
                manifestFileFormat: "json",
                diffPath: null,
                framePath: null
            },
            c = function(t) {
                return t.lastIndexOf("/") !== t.length - 1 && (t += "/"), t
            },
            l = function(t) {
                var e = t.basePath ? c(t.basePath) : null,
                    n = t.framePath ? c(t.framePath) : null,
                    i = t.diffPath ? c(t.diffPath) : null,
                    r = t.manifestPath ? c(t.manifestPath) : null,
                    s = t.baseName + "_",
                    o = {};
                return o.startframe = (n || e) + s + "startframe." + (t.startframeFileFormat || t.fileFormat), o.endframe = (n || e) + s + "endframe." + (t.endframeFileFormat || t.fileFormat), o.imageUrlPattern = (i || e) + s + t.imageUrlPattern + "." + t.fileFormat, o.manifest = (r || e) + s + "manifest." + t.manifestFileFormat, o
            },
            h = function(t, e) {
                var n = l(e),
                    i = [n.startframe, n.endframe];
                return new r(t, n.manifest, i, n.imageUrlPattern)
            },
            u = function(t, e) {
                var n = t || {},
                    r = e || {};
                n = i(o, t), r = i(a, e), n.element || (t.element = document.createElement("canvas"));
                var c = h(n, r),
                    l = new s(c, n.element);
                return n.preload && l.load(), l
            };
        e.exports = u
    }, {
        "./Flow": 403,
        "./Player": 405,
        "@marcom/ac-object/defaults": 446
    }],
    417: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            var n, i = t.match(/#/g).length;
            this._keyframes = {}, t = t.replace(/([^#]+)(#+)(\..*)/, "$1key_$2$3"), this._imageUrls = [], e.frames && e.frames.forEach(function(e, r) {
                "keyframe" === e.type && (n = "0000" + r, n = n.substring(n.length - i), this._imageUrls.push(t.replace(/#+/g, n)), this._keyframes[r] = e)
            }.bind(this))
        }
        var r = t("@marcom/ac-asset-loader").AssetLoader,
            s = i.prototype;
        s.load = function() {
            return this._imageUrls.length > 0 ? new r(this._imageUrls).load() : Promise.resolve()
        }, "function" != typeof Object.defineProperties && (Object.defineProperties = function() {}), Object.defineProperties(s, {
            keyframes: {
                get: function() {
                    return this._keyframes
                },
                enumerable: !0
            }
        }), e.exports = i
    }, {
        "@marcom/ac-asset-loader": 358
    }],
    418: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.flowData = t, this.flowData.imageUrlPattern = e
        }
        var r = t("./Loader"),
            s = i.prototype;
        s._storeImages = function(t) {
            var e, n = 0;
            if (t && t.length > 0)
                for (var i in this._loader._keyframes) this._loader._keyframes.hasOwnProperty(i) && (e = t[n], this._loader._keyframes[i].image = e, n += 1)
        }, s.init = function() {
            return this._loader = new r(this.flowData.imageUrlPattern, this.flowData), this._loader.load().then(this._storeImages.bind(this))
        }, s.renderKeyframe = function(t, e, n) {
            var i = t.getContext("2d"),
                r = this._loader.keyframes[e],
                s = r.image,
                o = r.x,
                a = r.y,
                c = r.width,
                l = r.height;
            n === !0 ? i.drawImage(s, o, a, c, l, o, a, c, l) : this.flowData.reversible ? i.drawImage(s, 0, 0) : i.drawImage(s, o, a, c, l)
        }, e.exports = i
    }, {
        "./Loader": 417
    }],
    419: [function(t, e, n) {
        "use strict";
        e.exports = {
            SharedInstance: t("./ac-shared-instance/SharedInstance")
        }
    }, {
        "./ac-shared-instance/SharedInstance": 420
    }],
    420: [function(t, e, n) {
        "use strict";
        var i = window,
            r = "AC",
            s = "SharedInstance",
            o = i[r],
            a = function() {
                var t = {};
                return {
                    get: function(e, n) {
                        var i = null;
                        return t[e] && t[e][n] && (i = t[e][n]), i
                    },
                    set: function(e, n, i) {
                        return t[e] || (t[e] = {}), "function" == typeof i ? t[e][n] = new i : t[e][n] = i, t[e][n]
                    },
                    share: function(t, e, n) {
                        var i = this.get(t, e);
                        return i || (i = this.set(t, e, n)), i
                    },
                    remove: function(e, n) {
                        var i = typeof n;
                        if ("string" === i || "number" === i) {
                            if (!t[e] || !t[e][n]) return;
                            return void(t[e][n] = null)
                        }
                        t[e] && (t[e] = null)
                    }
                }
            }();
        o || (o = i[r] = {}), o[s] || (o[s] = a), e.exports = o[s]
    }, {}],
    421: [function(t, e, n) {
        "use strict";
        e.exports = {
            CID: t("./ac-mvc-cid/CID")
        }
    }, {
        "./ac-mvc-cid/CID": 422
    }],
    422: [function(t, e, n) {
        "use strict";

        function i() {
            this._idCount = 0
        }
        var r = t("@marcom/ac-shared-instance").SharedInstance,
            s = "ac-mvc-cid:CID",
            o = "1.0.0",
            a = i.prototype;
        a._cidPrefix = "cid", a.getNewCID = function() {
            var t = this._cidPrefix + "-" + this._idCount;
            return this._idCount++, t
        }, e.exports = r.share(s, o, i)
    }, {
        "@marcom/ac-shared-instance": 419
    }],
    423: [function(t, e, n) {
        "use strict";
        e.exports = {
            Model: t("./ac-mvc-model/Model")
        }
    }, {
        "./ac-mvc-model/Model": 424
    }],
    424: [function(t, e, n) {
        "use strict";

        function i(t) {
            r.call(this), this.attributes = s(this.defaultAttributes, t || {}), this.cid = a.getNewCID(), this.attributes[this.idAttribute] && (this.id = this.attributes[this.idAttribute])
        }
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-object/defaults"),
            o = t("@marcom/ac-object/create"),
            a = t("@marcom/ac-mvc-cid").CID,
            c = r.prototype,
            l = i.prototype = o(c);
        l.defaultAttributes = {}, l.idAttribute = "id", l.get = function(t) {
            if (this.attributes) return this.attributes[t]
        }, l.set = function(t, e) {
            if (this.attributes) {
                var n, i, r, s = {},
                    o = !1;
                for (n in t)
                    if (t.hasOwnProperty(n)) {
                        if (r = this.get(n), r === t[n] || "object" == typeof r && "object" == typeof t[n] && JSON.stringify(r) === JSON.stringify(t[n])) continue;
                        o = !0, this.attributes[n] = t[n], i = {
                            value: t[n],
                            previous: r
                        }, s[n] = i, this._triggerChange(n, i, e)
                    }
                o && this._trigger("change", s, e)
            }
        }, l.hasAttribute = function(t) {
            return !!this.attributes && void 0 !== this.attributes[t]
        }, l.eachAttribute = function(t, e) {
            if (this.attributes) {
                var n;
                for (n in this.attributes) this.attributes.hasOwnProperty(n) && t.call(e, {
                    attribute: n,
                    value: this.attributes[n]
                })
            }
        }, l.destroy = function() {
            this.trigger("destroy"), c.destroy.call(this);
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, l._trigger = function(t, e, n) {
            n = n || {}, n.silent !== !0 && this.trigger(t, e)
        }, l._triggerChange = function(t, e, n) {
            return this._trigger("change:" + t, e, n)
        }, e.exports = i
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-mvc-cid": 421,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-object/defaults": 446
    }],
    425: [function(t, e, n) {
        arguments[4][419][0].apply(n, arguments)
    }, {
        "./ac-shared-instance/SharedInstance": 426,
        dup: 419
    }],
    426: [function(t, e, n) {
        arguments[4][420][0].apply(n, arguments)
    }, {
        dup: 420
    }],
    427: [function(t, e, n) {
        arguments[4][421][0].apply(n, arguments)
    }, {
        "./ac-mvc-cid/CID": 428,
        dup: 421
    }],
    428: [function(t, e, n) {
        arguments[4][422][0].apply(n, arguments)
    }, {
        "@marcom/ac-shared-instance": 425,
        dup: 422
    }],
    429: [function(t, e, n) {
        "use strict";
        e.exports = {
            View: t("./ac-mvc-view/View")
        }
    }, {
        "./ac-mvc-view/View": 430
    }],
    430: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e, n, i;
            this.options = o.defaults(this.defaultOptions, t || {}), this.cid = s.getNewCID(), this.model = this.options.model, this.options.template && (this.template = this.options.template), e = this.options.tagName || this.tagName, n = this.options.element, i = this.options.className || this.className, n || (n = document.createElement(e)), r.call(this, n), i && this.addClassName(i), this.options.events && this.delegateEvents(this.options.events)
        }
        var r = t("@marcom/ac-dom-emitter").DOMEmitter,
            s = t("@marcom/ac-mvc-cid").CID,
            o = {
                create: t("@marcom/ac-object/create"),
                defaults: t("@marcom/ac-object/defaults")
            },
            a = {
                insertLastChild: t("@marcom/ac-dom-nodes/insertLastChild"),
                remove: t("@marcom/ac-dom-nodes/remove")
            },
            c = t("@marcom/ac-classlist/add"),
            l = t("@marcom/ac-classlist/remove"),
            h = i.prototype = o.create(r.prototype);
        h.tagName = "div", h.defaultOptions = {}, h.getTagName = function() {
            return this.el.tagName.toLowerCase()
        }, h.appendTo = function(t) {
            return a.insertLastChild(this.el, t), this
        }, h.render = function() {}, h.addClassName = function(t) {
            return this._manipulateClassName(t, c)
        }, h.removeClassName = function(t) {
            return this._manipulateClassName(t, l)
        }, h.destroy = function() {
            this.emitterTrigger("destroy"), this.off(), a.remove(this.el);
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, h.delegateEvents = function(t, e) {
            e = e || this;
            var n, i;
            for (n in t) t.hasOwnProperty(n) && (i = t[n], "string" == typeof i && (t[n] = this[t[n]]));
            return this.on(t, e), this
        }, h._manipulateClassName = function(t, e) {
            var n;
            if ("string" == typeof t) n = t.split(" ");
            else {
                if ("object" != typeof t || !Array.isArray(t)) return this;
                n = t.slice()
            }
            return n.unshift(this.el), e.apply(this.el, n), this
        }, e.exports = i
    }, {
        "@marcom/ac-classlist/add": 1,
        "@marcom/ac-classlist/remove": 9,
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-dom-nodes/insertLastChild": 389,
        "@marcom/ac-dom-nodes/remove": 400,
        "@marcom/ac-mvc-cid": 427,
        "@marcom/ac-object/create": 445,
        "@marcom/ac-object/defaults": 446
    }],
    431: [function(t, e, n) {
        "use strict";
        var i = t("./ac-media-object/factories/createVideo"),
            r = t("./ac-media-object/factories/createFlow");
        e.exports = {
            createFlow: r,
            createVideo: i
        }
    }, {
        "./ac-media-object/factories/createFlow": 432,
        "./ac-media-object/factories/createVideo": 433
    }],
    432: [function(t, e, n) {
        var i = t("./../views/FlowView");
        e.exports = function(t, e, n) {
            function r(t) {
                throw new Error(t)
            }
            if (e) {
                if (e.basePath) return n = n || {}, n.type = "flow", n.mediaObjectView || (n.mediaObjectView = new i(t, e, n)), n.mediaObjectView;
                r("Please provide a valid mediaSrc object with a basePath property.")
            } else r("Please provide both a valid container element and a valid mediaSrc object as arguments.")
        }
    }, {
        "./../views/FlowView": 436
    }],
    433: [function(t, e, n) {
        var i = t("./../views/VideoView");
        e.exports = function(t, e, n) {
            function r(t) {
                throw new Error(t)
            }
            if (e) {
                if (e.basePath) return n = n || {}, n.type = "video", n.mediaObjectView || (n.mediaObjectView = new i(t, e, n)), n.mediaObjectView;
                r("Please provide a valid mediaSrc object with a basePath property.")
            } else r("Please provide both a valid container element and a valid mediaSrc object as arguments.")
        }
    }, {
        "./../views/VideoView": 437
    }],
    434: [function(t, e, n) {
        "use strict";

        function i(t) {
            r.apply(this, arguments)
        }
        var r = t("@marcom/ac-mvc-model").Model,
            s = t("@marcom/ac-object"),
            o = i.prototype = s.create(r.prototype);
        o.defaultAttributes = {
            type: "video",
            paused: !0,
            ended: !1,
            ready: !1,
            loadStart: !1,
            loaded: !1,
            error: !1,
            destroyed: !1,
            currentTime: 0,
            playbackRate: 1,
            duration: 0,
            preload: !1,
            autoplay: !1,
            frameRate: 24,
            enhanced: !1,
            looping: !1
        }, o.getPaused = function() {
            return this.get("paused")
        }, o.getEnded = function() {
            return this.get("ended")
        }, o.getReady = function() {
            return this.get("ready")
        }, o.getDestroyed = function() {
            return this.get("destroyed")
        }, o.getLoadStart = function() {
            return this.get("loadedStart")
        }, o.getLoaded = function() {
            return this.get("loaded")
        }, o.getError = function() {
            return this.get("error")
        }, o.getCurrentTime = function() {
            return this.get("currentTime")
        }, o.getPlaybackRate = function() {
            return this.get("playbackRate")
        }, o.getDuration = function() {
            return this.get("duration")
        }, o.getPreload = function() {
            return this.get("preload")
        }, o.getAutoplay = function() {
            return this.get("autoplay")
        }, o.getFrameRate = function() {
            return this.get("frameRate")
        }, o.getEnhanced = function() {
            return this.get("enhanced")
        }, o.getLooping = function() {
            return this.get("looping")
        }, o.setPaused = function(t) {
            this.set({
                paused: t
            })
        }, o.setEnded = function(t) {
            this.set({
                ended: t
            })
        }, o.setReady = function(t) {
            this.set({
                ready: t
            })
        }, o.setDestroyed = function(t) {
            this.set({
                destroyed: t
            })
        }, o.setDuration = function(t) {
            this.set({
                duration: t
            })
        }, o.setLoadStart = function(t) {
            this.set({
                loadStart: t
            })
        }, o.setLoaded = function(t) {
            this.set({
                loaded: t
            })
        }, o.setError = function(t) {
            this.set({
                error: t
            })
        }, o.setCurrentTime = function(t) {
            this.set({
                currentTime: t
            })
        }, o.setPlaybackRate = function(t) {
            this.set({
                playbackRate: t
            })
        }, o.setPreload = function(t) {
            this.set({
                preload: t
            })
        }, o.setAutoplay = function(t) {
            this.set({
                autoplay: t
            })
        }, o.setFrameRate = function(t) {
            this.set({
                frameRate: t
            })
        }, o.setEnhanced = function(t) {
            this.set({
                enhanced: t
            })
        }, o.setLooping = function(t) {
            this.set({
                looping: t
            })
        }, e.exports = i
    }, {
        "@marcom/ac-mvc-model": 423,
        "@marcom/ac-object": 443
    }],
    435: [function(t, e, n) {
        "use strict";
        var i = t("./../models/MediaModel"),
            r = t("@marcom/ac-mvc-view").View,
            s = t("@marcom/ac-object"),
            o = t("@marcom/ac-classlist"),
            a = function(t, e, n) {
                r.call(this, {
                    element: t
                }), this.options = n || {}, this.mediaSrc = e || "", this.model = this.options.model || new i(this.options), this._onLoadStartChange = this._onLoadStartChange.bind(this), this._onLoadedChange = this._onLoadedChange.bind(this), this._onPausedChange = this._onPausedChange.bind(this), this._onReadyChange = this._onReadyChange.bind(this), this._onErrorChange = this._onErrorChange.bind(this), this._onEnhancedChange = this._onEnhancedChange.bind(this), this._onCurrentTimeChange = this._onCurrentTimeChange.bind(this), this._onPlaybackRateChange = this._onPlaybackRateChange.bind(this), this._onDestroyedChange = this._onDestroyedChange.bind(this), this._onEndedChange = this._onEndedChange.bind(this), this._respondToPlay = this._respondToPlay.bind(this), this._respondToPause = this._respondToPause.bind(this), this._respondToTimeUpdate = this._respondToTimeUpdate.bind(this), this._respondToEnded = this._respondToEnded.bind(this), this._respondToDurationChange = this._respondToDurationChange.bind(this), this._respondToRateChange = this._respondToRateChange.bind(this), this._init()
            },
            c = a.prototype = s.create(r.prototype);
        c._init = function() {
            this._createMediaElement(), this._createMediaEmitter(), this._createMediaLoader(), this._bindEvents(), this._config()
        }, c._createMediaElement = function() {}, c._createMediaEmitter = function() {}, c._createMediaLoader = function() {}, c._config = function() {
            this.options.preload === !0 && (this._setPreload(!0), this.load()), this.options.autoplay === !0 && this._setAutoplay(!0), this.options.looping === !0 && this._setLooping(!0), this.options.frameRate && this._setFrameRate(this.options.frameRate)
        }, c._bindEvents = function() {
            this._bindViewEvents(), this._bindModelEvents()
        }, c._bindModelEvents = function() {
            this.model.on("change:loadStart", this._onLoadStartChange), this.model.on("change:loaded", this._onLoadedChange), this.model.on("change:paused", this._onPausedChange), this.model.on("change:ready", this._onReadyChange), this.model.on("change:error", this._onErrorChange), this.model.on("change:enhanced", this._onEnhancedChange), this.model.on("change:currentTime", this._onCurrentTimeChange), this.model.on("change:playbackRate", this._onPlaybackRateChange), this.model.on("change:destroyed", this._onDestroyedChange), this.model.on("change:ended", this._onEndedChange)
        }, c._onLoadStartChange = function() {
            this.trigger("loadstart")
        }, c._onLoadedChange = function() {
            this.trigger("loaded")
        }, c._onPausedChange = function(t) {
            t.value === !0 ? (this.trigger("pause"), o.remove(this.el, "mediaObject-playing")) : (this.trigger("play"), o.remove(this.el, "mediaObject-ended"), o.add(this.el, "mediaObject-playing"))
        }, c._onReadyChange = function() {
            this.trigger("ready")
        }, c._onErrorChange = function() {
            this.trigger("error")
        }, c._onEnhancedChange = function() {
            o.add(this.el, "mediaObject-enhanced"), o.add(this.mediaElement, "mediaObject-element"), this.trigger("enhanced")
        }, c._onCurrentTimeChange = function() {
            this.trigger("timeupdate")
        }, c._onPlaybackRateChange = function() {
            this.trigger("ratechange")
        }, c._onDestroyedChange = function() {
            o.remove(this.el, "mediaObject-playing"), o.remove(this.el, "mediaObject-ended"), o.remove(this.el, "mediaObject-enhanced"), o.add(this.el, "mediaObject-destroyed"), this.trigger("destroyed")
        }, c._onEndedChange = function(t) {
            t.value === !0 && this.trigger("ended")
        }, c._bindViewEvents = function() {
            this.mediaEmitter && (this.mediaEmitter.on("play", this._respondToPlay), this.mediaEmitter.on("pause", this._respondToPause), this.mediaEmitter.on("timeupdate", this._respondToTimeUpdate), this.mediaEmitter.on("ended", this._respondToEnded), this.mediaEmitter.on("durationchange", this._respondToDurationChange), this.mediaEmitter.on("ratechange", this._respondToRateChange))
        }, c._respondToPlay = function() {
            this.model.set({
                ended: !1,
                paused: !1
            })
        }, c._respondToPause = function() {
            this.model.setPaused(!0)
        }, c._respondToTimeUpdate = function() {
            var t = 0;
            if (this.mediaElement.currentTime) t = this.mediaElement.currentTime;
            else {
                if (!this.mediaEmitter.currentTime) return;
                t = this.mediaEmitter.currentTime
            }
            this.getCurrentTime() !== t && this.model.set({
                currentTime: t
            })
        }, c._respondToEnded = function() {
            this.model.set({
                ended: !0,
                paused: !0
            }), o.remove(this.el, "mediaObject-playing"), o.add(this.el, "mediaObject-ended")
        }, c._respondToDurationChange = function() {
            var t = 0;
            if (this.mediaElement.duration) t = this.mediaElement.duration;
            else {
                if (!this.mediaEmitter.duration) return;
                t = this.mediaEmitter.duration
            }
            this.model.set({
                duration: t
            })
        }, c._respondToRateChange = function() {
            var t = 0;
            if (this.mediaElement.playbackRate) t = this.mediaElement.playbackRate;
            else {
                if (!this.mediaEmitter.playbackRate) return;
                t = this.mediaEmitter.playbackRate
            }
            this.model.set({
                playbackRate: t
            })
        }, c.enhance = function() {}, c.play = function() {}, c.pause = function() {}, c.reset = function() {}, c.destroy = function() {}, c.setCurrentTime = function(t) {}, c.setPlaybackRate = function(t) {}, c.goToFrame = function(t) {
            var e = t / this.model.frameRate;
            return this.setCurrentTime(e)
        }, c.goToPercent = function(t) {
            var e = t * this.getDuration();
            return this.setCurrentTime(e)
        }, c._setReady = function(t) {
            this.model.setReady(t)
        }, c._setLoadStart = function(t) {
            this.model.setLoadStart(t)
        }, c._setLoaded = function(t) {
            this.model.setLoaded(t)
        }, c._setError = function(t) {
            this.model.setError(t)
        }, c._setDuration = function(t) {
            this.model.setDuration(t)
        }, c._setPreload = function(t) {
            this.model.setPreload(t)
        }, c._setAutoplay = function(t) {
            this.model.setAutoplay(t)
        }, c._setFrameRate = function(t) {
            this.model.setFrameRate(t)
        }, c._setEnhanced = function(t) {
            this.model.setEnhanced(t)
        }, c._setDestroyed = function(t) {
            this.model.setDestroyed(t)
        }, c._setLooping = function(t) {}, c.getType = function() {
            return this.model.getType()
        }, c.getPaused = function() {
            return this.model.getPaused()
        }, c.getEnded = function() {
            return this.model.getEnded()
        }, c.getReady = function() {
            return this.model.getReady()
        }, c.getLoadStart = function() {
            return this.model.getLoadStart()
        }, c.getLoaded = function() {
            return this.model.getLoaded()
        }, c.getError = function() {
            return this.model.getError()
        }, c.getDuration = function() {
            return this.model.getDuration()
        }, c.getEnhanced = function() {
            return this.model.getEnhanced()
        }, c.getCurrentTime = function() {
            return this.model.getCurrentTime()
        }, c.getCurrentFrame = function() {
            return Math.floor(this.getCurrentTime() * this.options.frameRate)
        }, c.getCurrentPercent = function() {
            return this.model.getCurrentTime() / this.getDuration()
        }, c.getPlaybackRate = function() {
            return this.model.getPlaybackRate()
        }, c.getFrameRate = function() {
            return this.model.getFrameRate()
        }, c.getPreload = function() {
            return this.model.getPreload()
        }, c.getAutoplay = function() {
            return this.model.getAutoplay()
        }, c.getLooping = function() {
            return this.model.getLooping()
        }, c.getDestroyed = function() {
            return !this.model || this.model.getDestroyed()
        }, e.exports = a
    }, {
        "./../models/MediaModel": 434,
        "@marcom/ac-classlist": 8,
        "@marcom/ac-mvc-view": 429,
        "@marcom/ac-object": 443
    }],
    436: [function(t, e, n) {
        "use strict";
        var i = t("./BaseView"),
            r = t("@marcom/ac-dom-nodes"),
            s = t("@marcom/ac-flow").createFlow,
            o = t("@marcom/ac-object/create"),
            a = function(t, e, n) {
                i.call(this, t, e, n), this._onLoad = this._onLoad.bind(this), this._onError = this._onError.bind(this), this._onReady = this._onReady.bind(this)
            },
            c = a.prototype = o(i.prototype);
        c._createMediaElement = function() {
            this.mediaElement = document.createElement("canvas")
        }, c._createMediaEmitter = function() {
            this.flowOptions = {
                element: this.mediaElement,
                preload: !1,
                keyframeCache: this.options.keyframeCache || !1
            }, this.mediaEmitter = s(this.flowOptions, this.mediaSrc)
        }, c._createMediaLoader = function() {
            this.mediaLoader = this.mediaEmitter
        }, c.load = function() {
            if (this._setLoadStart(!0), this.mediaLoader.once("loaded", this._onLoad), this.mediaLoader.once("error", this._onError), this.mediaEmitter.once("canplaythrough", this._onReady), !this.loaded) return this._load()
        }, c._load = function() {
            return this.mediaLoader.load()
        }, c._onLoad = function() {
            this._setLoaded(!0)
        }, c._onError = function() {
            this._setError(!0)
        }, c._onReady = function() {
            this._setReady(!0), this._setDuration(this.mediaEmitter.duration), this.setPlaybackRate(this.getPlaybackRate()), this._totalFrames = this._getTotalFrames(), this.getAutoplay() && (this.getEnhanced === !1 && this.enhance(), this.play())
        }, c._getTotalFrames = function() {
            return this.getDuration() * this.getFrameRate()
        }, c.enhance = function() {
            this._setEnhanced(!0), window.requestAnimationFrame(function() {
                this.mediaElement && this._inject()
            }.bind(this))
        }, c._inject = function() {
            r.insertFirstChild(this.mediaElement, this.el)
        }, c.destroy = function() {
            this.getDestroyed() || (this._remove(), this._setDestroyed(!0), this.mediaEmitter.off(), this._destroy(this, !0))
        }, c._remove = function() {
            r.remove(this.mediaElement)
        }, c._destroy = function(t, e) {
            if ("function" == typeof t.off && t.off(), e) {
                var n;
                for (n in t) t.hasOwnProperty(n) && (t[n] = null)
            }
        }, c.play = function() {
            this.model.getPaused() !== !1 && (this.mediaEmitter.currentTime >= this.getDuration() && this.setCurrentTime(0), this.getReady() && null !== this.mediaEmitter && this.mediaEmitter.play())
        }, c.pause = function() {
            this.model.getPaused() !== !0 && this.mediaEmitter.pause()
        }, c.reset = function() {
            0 !== this.model.getCurrentTime() && (this.setCurrentTime(0), this.pause())
        }, c.setCurrentTime = function(t) {
            t < 0 && (t = 0), t > this.getDuration() && (t = this.getDuration()), this.mediaEmitter.currentTime = t
        }, c.setPlaybackRate = function(t) {
            this.mediaEmitter.playbackRate = t
        }, c._setLooping = function(t) {
            this.mediaEmitter.loop = t, this.model.setLooping(t)
        }, e.exports = a
    }, {
        "./BaseView": 435,
        "@marcom/ac-dom-nodes": 384,
        "@marcom/ac-flow": 402,
        "@marcom/ac-object/create": 445
    }],
    437: [function(t, e, n) {
        "use strict";
        var i = t("./BaseView"),
            r = i.prototype,
            s = t("@marcom/ac-dom-nodes"),
            o = t("@marcom/ac-dom-emitter").DOMEmitter,
            a = t("@marcom/ac-dom-styles"),
            c = t("@marcom/ac-asset-loader").AssetLoader,
            l = t("@marcom/ac-asset-loader").Asset.Video,
            h = t("@marcom/ac-browser"),
            u = t("@marcom/ac-feature").isHandheld,
            f = t("@marcom/ac-feature").isTablet,
            d = t("@marcom/ac-object/create"),
            m = function(t, e, n) {
                this.srcForVideoEl = null, this._cannotPlayInlineVideo = null, i.call(this, t, e, n), this._onLoaded = this._onLoaded.bind(this), this._onReady = this._onReady.bind(this)
            },
            p = m.prototype = d(i.prototype);
        p._createMediaElement = function() {
            this.mediaElement = document.createElement("video")
        }, p._createMediaEmitter = function() {
            this.mediaEmitter = new o(this.mediaElement)
        }, p._createMediaLoader = function() {
            var t, e;
            this.mediaSrc.basePath = this._forceTrailingSlash(this.mediaSrc.basePath), this.mediaSrc.splitFileLoading ? (t = this.mediaSrc.basePath, e = new l(t, {
                element: this.mediaElement,
                forceElementLoading: !1,
                split: !0
            }), this.mediaLoader = new c(e)) : (this.mediaSrc.fileFormat = this._checkFileFormat(this.mediaSrc.fileFormat), t = this.mediaSrc.basePath + this.mediaSrc.filename + this.mediaSrc.fileFormat, this.mediaLoader = this.mediaEmitter.loader, this.srcForVideoEl = t)
        }, p._forceTrailingSlash = function(t) {
            return t && t.lastIndexOf("/") !== t.length - 1 && (t += "/"), t
        }, p._checkFileFormat = function(t) {
            return t && 0 !== t.lastIndexOf(".") && (t = "." + t), t
        }, p.load = function() {
            if (this._setLoadStart(!0), this.mediaSrc.splitFileLoading) {
                var t = function() {
                        this.mediaEmitter.once("loadeddata", this._onLoaded), this.mediaEmitter.once("canplaythrough", this._onReady)
                    }.bind(this),
                    e = function() {
                        throw this._setError(!0), new Error("Video failed to load.")
                    }.bind(this);
                this.mediaLoader.load().then(t, e)
            } else this.cannotPlayInlineVideo() || (this.mediaEmitter.once("loadeddata", this._onLoaded), this.mediaEmitter.once("canplaythrough", this._onReady)), this.mediaElement.src = this.srcForVideoEl, this.cannotPlayInlineVideo() ? this._onLoaded() : this.mediaElement.load()
        }, p._onLoaded = function() {
            this._setLoaded(!0)
        }, p.cannotPlayInlineVideo = function() {
            if (null !== this._cannotPlayInlineVideo) return this._cannotPlayInlineVideo;
            var t = "iOS" === h.os && u(),
                e = "iOS" === h.os && f() && h.version < 8;
            return this._cannotPlayInlineVideo = t || e, this._cannotPlayInlineVideo
        }, p._onReady = function() {
            this._setReady(!0), this.getAutoplay() && (this.getEnhanced() || this.enhance(), this.play())
        }, p.enhance = function() {
            this._setEnhanced(!0), window.requestAnimationFrame(function() {
                "VIDEO" === this.mediaElement.tagName && (s.insertLastChild(this.mediaElement, this.el), a.setStyle(this.mediaElement, {
                    visibility: "hidden"
                }), window.requestAnimationFrame(function() {
                    this.mediaElement && (this.setPlaybackRate(this.getPlaybackRate()), a.setStyle(this.mediaElement, {
                        visibility: "visible"
                    }))
                }.bind(this)))
            }.bind(this))
        }, p.destroy = function() {
            this.getDestroyed() || (this._remove(), this._setDestroyed(!0), this.mediaEmitter.off(), this._destroy(this, !0))
        }, p._remove = function() {
            s.remove(this.mediaElement)
        }, p._destroy = function(t, e) {
            if ("function" == typeof t.off && t.off(), e) {
                var n;
                for (n in t) t.hasOwnProperty(n) && (t[n] = null)
            }
        }, p._onEndedChange = function(t) {
            r._onEndedChange.call(this, t), "iOS" === h.os && u() && t.value === !0 && this.mediaElement.webkitExitFullScreen()
        }, p.play = function() {
            this.model.getPaused() !== !1 && this.mediaElement.play()
        }, p.pause = function() {
            this.model.getPaused() !== !0 && this.mediaElement.pause()
        }, p.reset = function() {
            0 !== this.model.getCurrentTime() && (this.setCurrentTime(0), this.pause())
        }, p.setCurrentTime = function(t) {
            this.mediaElement.duration && (this.mediaElement.currentTime = t)
        }, p.setPlaybackRate = function(t) {
            this.mediaElement.playbackRate = t
        }, p._setLooping = function(t) {
            this.mediaElement.loop = t, this.model.setLooping(t)
        }, e.exports = m
    }, {
        "./BaseView": 435,
        "@marcom/ac-asset-loader": 358,
        "@marcom/ac-browser": 371,
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-dom-nodes": 384,
        "@marcom/ac-dom-styles": 54,
        "@marcom/ac-feature": 203,
        "@marcom/ac-object/create": 445
    }],
    438: [function(t, e, n) {
        "use strict";
        var i = t("qs");
        e.exports = function(t, e) {
            var n = i.stringify(t, {
                strictNullHandling: !0
            });
            return n && e !== !1 && (n = "?" + n), n
        }
    }, {
        qs: 439
    }],
    439: [function(t, e, n) {
        var i = t("./stringify"),
            r = t("./parse");
        e.exports = {
            stringify: i,
            parse: r
        }
    }, {
        "./parse": 440,
        "./stringify": 441
    }],
    440: [function(t, e, n) {
        var i = t("./utils"),
            r = {
                delimiter: "&",
                depth: 5,
                arrayLimit: 20,
                parameterLimit: 1e3,
                strictNullHandling: !1,
                plainObjects: !1,
                allowPrototypes: !1
            };
        r.parseValues = function(t, e) {
            for (var n = {}, r = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), s = 0, o = r.length; s < o; ++s) {
                var a = r[s],
                    c = a.indexOf("]=") === -1 ? a.indexOf("=") : a.indexOf("]=") + 1;
                if (c === -1) n[i.decode(a)] = "", e.strictNullHandling && (n[i.decode(a)] = null);
                else {
                    var l = i.decode(a.slice(0, c)),
                        h = i.decode(a.slice(c + 1));
                    Object.prototype.hasOwnProperty.call(n, l) ? n[l] = [].concat(n[l]).concat(h) : n[l] = h
                }
            }
            return n
        }, r.parseObject = function(t, e, n) {
            if (!t.length) return e;
            var i, s = t.shift();
            if ("[]" === s) i = [], i = i.concat(r.parseObject(t, e, n));
            else {
                i = n.plainObjects ? Object.create(null) : {};
                var o = "[" === s[0] && "]" === s[s.length - 1] ? s.slice(1, s.length - 1) : s,
                    a = parseInt(o, 10),
                    c = "" + a;
                !isNaN(a) && s !== o && c === o && a >= 0 && n.parseArrays && a <= n.arrayLimit ? (i = [], i[a] = r.parseObject(t, e, n)) : i[o] = r.parseObject(t, e, n)
            }
            return i
        }, r.parseKeys = function(t, e, n) {
            if (t) {
                n.allowDots && (t = t.replace(/\.([^\.\[]+)/g, "[$1]"));
                var i = /^([^\[\]]*)/,
                    s = /(\[[^\[\]]*\])/g,
                    o = i.exec(t),
                    a = [];
                if (o[1]) {
                    if (!n.plainObjects && Object.prototype.hasOwnProperty(o[1]) && !n.allowPrototypes) return;
                    a.push(o[1])
                }
                for (var c = 0; null !== (o = s.exec(t)) && c < n.depth;) ++c, (n.plainObjects || !Object.prototype.hasOwnProperty(o[1].replace(/\[|\]/g, "")) || n.allowPrototypes) && a.push(o[1]);
                return o && a.push("[" + t.slice(o.index) + "]"), r.parseObject(a, e, n)
            }
        }, e.exports = function(t, e) {
            if (e = e || {}, e.delimiter = "string" == typeof e.delimiter || i.isRegExp(e.delimiter) ? e.delimiter : r.delimiter, e.depth = "number" == typeof e.depth ? e.depth : r.depth, e.arrayLimit = "number" == typeof e.arrayLimit ? e.arrayLimit : r.arrayLimit, e.parseArrays = e.parseArrays !== !1, e.allowDots = e.allowDots !== !1, e.plainObjects = "boolean" == typeof e.plainObjects ? e.plainObjects : r.plainObjects, e.allowPrototypes = "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : r.allowPrototypes, e.parameterLimit = "number" == typeof e.parameterLimit ? e.parameterLimit : r.parameterLimit, e.strictNullHandling = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling, "" === t || null === t || "undefined" == typeof t) return e.plainObjects ? Object.create(null) : {};
            for (var n = "string" == typeof t ? r.parseValues(t, e) : t, s = e.plainObjects ? Object.create(null) : {}, o = Object.keys(n), a = 0, c = o.length; a < c; ++a) {
                var l = o[a],
                    h = r.parseKeys(l, n[l], e);
                s = i.merge(s, h, e)
            }
            return i.compact(s)
        }
    }, {
        "./utils": 442
    }],
    441: [function(t, e, n) {
        var i = t("./utils"),
            r = {
                delimiter: "&",
                arrayPrefixGenerators: {
                    brackets: function(t, e) {
                        return t + "[]"
                    },
                    indices: function(t, e) {
                        return t + "[" + e + "]"
                    },
                    repeat: function(t, e) {
                        return t
                    }
                },
                strictNullHandling: !1
            };
        r.stringify = function(t, e, n, s, o) {
            if ("function" == typeof o) t = o(e, t);
            else if (i.isBuffer(t)) t = t.toString();
            else if (t instanceof Date) t = t.toISOString();
            else if (null === t) {
                if (s) return i.encode(e);
                t = ""
            }
            if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t) return [i.encode(e) + "=" + i.encode(t)];
            var a = [];
            if ("undefined" == typeof t) return a;
            for (var c = Array.isArray(o) ? o : Object.keys(t), l = 0, h = c.length; l < h; ++l) {
                var u = c[l];
                a = Array.isArray(t) ? a.concat(r.stringify(t[u], n(e, u), n, s, o)) : a.concat(r.stringify(t[u], e + "[" + u + "]", n, s, o))
            }
            return a
        }, e.exports = function(t, e) {
            e = e || {};
            var n, i, s = "undefined" == typeof e.delimiter ? r.delimiter : e.delimiter,
                o = "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : r.strictNullHandling;
            "function" == typeof e.filter ? (i = e.filter, t = i("", t)) : Array.isArray(e.filter) && (n = i = e.filter);
            var a = [];
            if ("object" != typeof t || null === t) return "";
            var c;
            c = e.arrayFormat in r.arrayPrefixGenerators ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
            var l = r.arrayPrefixGenerators[c];
            n || (n = Object.keys(t));
            for (var h = 0, u = n.length; h < u; ++h) {
                var f = n[h];
                a = a.concat(r.stringify(t[f], f, l, o, i))
            }
            return a.join(s)
        }
    }, {
        "./utils": 442
    }],
    442: [function(t, e, n) {
        var i = {};
        i.hexTable = new Array(256);
        for (var r = 0; r < 256; ++r) i.hexTable[r] = "%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase();
        n.arrayToObject = function(t, e) {
            for (var n = e.plainObjects ? Object.create(null) : {}, i = 0, r = t.length; i < r; ++i) "undefined" != typeof t[i] && (n[i] = t[i]);
            return n
        }, n.merge = function(t, e, i) {
            if (!e) return t;
            if ("object" != typeof e) return Array.isArray(t) ? t.push(e) : "object" == typeof t ? t[e] = !0 : t = [t, e], t;
            if ("object" != typeof t) return t = [t].concat(e);
            Array.isArray(t) && !Array.isArray(e) && (t = n.arrayToObject(t, i));
            for (var r = Object.keys(e), s = 0, o = r.length; s < o; ++s) {
                var a = r[s],
                    c = e[a];
                Object.prototype.hasOwnProperty.call(t, a) ? t[a] = n.merge(t[a], c, i) : t[a] = c
            }
            return t
        }, n.decode = function(t) {
            try {
                return decodeURIComponent(t.replace(/\+/g, " "))
            } catch (e) {
                return t
            }
        }, n.encode = function(t) {
            if (0 === t.length) return t;
            "string" != typeof t && (t = "" + t);
            for (var e = "", n = 0, r = t.length; n < r; ++n) {
                var s = t.charCodeAt(n);
                45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? e += t[n] : s < 128 ? e += i.hexTable[s] : s < 2048 ? e += i.hexTable[192 | s >> 6] + i.hexTable[128 | 63 & s] : s < 55296 || s >= 57344 ? e += i.hexTable[224 | s >> 12] + i.hexTable[128 | s >> 6 & 63] + i.hexTable[128 | 63 & s] : (++n, s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(n)), e += i.hexTable[240 | s >> 18] + i.hexTable[128 | s >> 12 & 63] + i.hexTable[128 | s >> 6 & 63] + i.hexTable[128 | 63 & s])
            }
            return e
        }, n.compact = function(t, e) {
            if ("object" != typeof t || null === t) return t;
            e = e || [];
            var i = e.indexOf(t);
            if (i !== -1) return e[i];
            if (e.push(t), Array.isArray(t)) {
                for (var r = [], s = 0, o = t.length; s < o; ++s) "undefined" != typeof t[s] && r.push(t[s]);
                return r
            }
            var a = Object.keys(t);
            for (s = 0, o = a.length; s < o; ++s) {
                var c = a[s];
                t[c] = n.compact(t[c], e)
            }
            return t
        }, n.isRegExp = function(t) {
            return "[object RegExp]" === Object.prototype.toString.call(t)
        }, n.isBuffer = function(t) {
            return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
        }
    }, {}],
    443: [function(t, e, n) {
        "use strict";
        e.exports = {
            clone: t("./clone"),
            create: t("./create"),
            defaults: t("./defaults"),
            extend: t("./extend"),
            getPrototypeOf: t("./getPrototypeOf"),
            isDate: t("./isDate"),
            isEmpty: t("./isEmpty"),
            isRegExp: t("./isRegExp"),
            toQueryParameters: t("./toQueryParameters")
        }
    }, {
        "./clone": 444,
        "./create": 445,
        "./defaults": 446,
        "./extend": 447,
        "./getPrototypeOf": 448,
        "./isDate": 449,
        "./isEmpty": 450,
        "./isRegExp": 451,
        "./toQueryParameters": 452
    }],
    444: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/isArray");
        var i = t("./extend"),
            r = Object.prototype.hasOwnProperty,
            s = function(t, e) {
                var n;
                for (n in e) r.call(e, n) && (null === e[n] ? t[n] = null : "object" == typeof e[n] ? (t[n] = Array.isArray(e[n]) ? [] : {}, s(t[n], e[n])) : t[n] = e[n]);
                return t
            };
        e.exports = function(t, e) {
            return e ? s({}, t) : i({}, t)
        }
    }, {
        "./extend": 447,
        "@marcom/ac-polyfills/Array/isArray": void 0
    }],
    445: [function(t, e, n) {
        "use strict";
        var i = function() {};
        e.exports = function(t) {
            if (arguments.length > 1) throw new Error("Second argument not supported");
            if (null === t || "object" != typeof t) throw new TypeError("Object prototype may only be an Object.");
            return "function" == typeof Object.create ? Object.create(t) : (i.prototype = t, new i)
        }
    }, {}],
    446: [function(t, e, n) {
        "use strict";
        var i = t("./extend");
        e.exports = function(t, e) {
            if ("object" != typeof t) throw new TypeError("defaults: must provide a defaults object");
            if (e = e || {}, "object" != typeof e) throw new TypeError("defaults: options must be a typeof object");
            return i({}, t, e)
        }
    }, {
        "./extend": 447
    }],
    447: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Array/prototype.forEach");
        var i = Object.prototype.hasOwnProperty;
        e.exports = function() {
            var t, e;
            return t = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments), e = t.shift(), t.forEach(function(t) {
                if (null != t)
                    for (var n in t) i.call(t, n) && (e[n] = t[n])
            }), e;
        }
    }, {
        "@marcom/ac-polyfills/Array/prototype.forEach": void 0
    }],
    448: [function(t, e, n) {
        "use strict";
        var i = Object.prototype.hasOwnProperty;
        e.exports = function(t) {
            if (Object.getPrototypeOf) return Object.getPrototypeOf(t);
            if ("object" != typeof t) throw new Error("Requested prototype of a value that is not an object.");
            if ("object" == typeof this.__proto__) return t.__proto__;
            var e, n = t.constructor;
            if (i.call(t, "constructor")) {
                if (e = n, !delete t.constructor) return null;
                n = t.constructor, t.constructor = e
            }
            return n ? n.prototype : null
        }
    }, {}],
    449: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return "[object Date]" === Object.prototype.toString.call(t)
        }
    }, {}],
    450: [function(t, e, n) {
        "use strict";
        var i = Object.prototype.hasOwnProperty;
        e.exports = function(t) {
            var e;
            if ("object" != typeof t) throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object");
            for (e in t)
                if (i.call(t, e)) return !1;
            return !0
        }
    }, {}],
    451: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return !!window.RegExp && t instanceof RegExp
        }
    }, {}],
    452: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-url/joinSearchParams");
        e.exports = function(t) {
            if ("object" != typeof t) throw new TypeError("toQueryParameters error: argument is not an object");
            return i(t, !1)
        }
    }, {
        "@marcom/ac-url/joinSearchParams": 438
    }],
    453: [function(t, e, n) {
        arguments[4][286][0].apply(n, arguments)
    }, {
        "./ac-queue/LiveQueue": 454,
        "./ac-queue/Queue": 455,
        "./ac-queue/QueueItem": 456,
        dup: 286
    }],
    454: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._queue = new r, this._maxProcesses = t || 1, this._availableSlots = this._maxProcesses, this._rafId = 0, this._isRunning = !1, this._boundFunctions = {
                _run: this._run.bind(this),
                _releaseSlot: this._releaseSlot.bind(this)
            }
        }
        t("@marcom/ac-polyfills/Promise"), t("@marcom/ac-polyfills/requestAnimationFrame"), t("@marcom/ac-polyfills/Function/prototype.bind");
        var r = t("./Queue"),
            s = (t("./QueueItem"), i.prototype);
        s.start = function() {
            this._isRunning && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(this._boundFunctions._run), this._isRunning = !0
        }, s.pause = function() {
            this._isRunning && (cancelAnimationFrame(this._rafId), this._rafId = 0), this._isRunning = !1
        }, s.stop = function() {
            this.pause(), this.clear()
        }, s.enqueue = function(t, e) {
            if ("function" != typeof t) throw new Error("LiveQueue can only enqueue functions");
            return this._queue.enqueue(t, e)
        }, s.clear = function() {
            this._queue = new r
        }, s.destroy = function() {
            this.pause(), this._isRunning = !1, this._queue = null, this._boundFunctions = null
        }, s.count = function() {
            return this._queue.count() + this.pending()
        }, s.pending = function() {
            return this._maxProcesses - this._availableSlots
        }, s.isEmpty = function() {
            return 0 === this.count()
        }, s._run = function() {
            if (this._isRunning && (this._rafId = requestAnimationFrame(this._boundFunctions._run), !this._queue.isEmpty() && 0 != this._availableSlots)) {
                var t = this._queue.dequeue(),
                    e = t.data();
                this._isPromise(e) && (this._retainSlot(), e.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)), this._stopRunningIfDone()
            }
        }, s._retainSlot = function() {
            this._availableSlots--
        }, s._releaseSlot = function() {
            this._availableSlots++, this._stopRunningIfDone()
        }, s._stopRunningIfDone = function() {
            0 != this._rafId && 0 === this._queue.count() && this._availableSlots == this._maxProcesses && (cancelAnimationFrame(this._rafId), this._rafId = 0)
        }, s._isPromise = function(t) {
            return !(!t || "function" != typeof t.then)
        }, e.exports = i
    }, {
        "./Queue": 455,
        "./QueueItem": 456,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/Promise": void 0,
        "@marcom/ac-polyfills/requestAnimationFrame": void 0
    }],
    455: [function(t, e, n) {
        arguments[4][288][0].apply(n, arguments)
    }, {
        "./QueueItem": 456,
        dup: 288
    }],
    456: [function(t, e, n) {
        arguments[4][289][0].apply(n, arguments)
    }, {
        dup: 289
    }],
    457: [function(t, e, n) {
        "use strict";

        function i(t) {
            o.call(this), this.options = r(h, t), this.loadingOptions = null, this.els = [], this.loadingQueue = null, this._queueItems = [], this._queueItemsObj = {}, this._loadOrder = [], this._timeout = null, this._didCallLoad = !1
        }
        t("@marcom/ac-polyfills/Object/create"), t("@marcom/ac-polyfills/Element/prototype.classList");
        var r = t("@marcom/ac-object/defaults"),
            s = t("@marcom/ac-queue").LiveQueue,
            o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            a = t("@marcom/ac-dom-events/addEventListener"),
            c = t("@marcom/ac-dom-events/removeEventListener"),
            l = t("@marcom/ac-dom-traversal/querySelectorAll"),
            h = {
                container: document.body,
                includeContainer: !1
            },
            u = {
                loadingPoolSize: 8,
                timeout: null,
                imageClassName: "progressive-image"
            },
            f = i.prototype = Object.create(o.prototype);
        f.load = function(t) {
            if (!this._didCallLoad) {
                this._didCallLoad = !0, this.loadingOptions = r(u, t), this.loadingQueue = new s(this.loadingOptions.loadingPoolSize);
                var e = this._getProgressiveClassName(),
                    n = "." + e;
                this.els = l(n, this.options.container), this.options.includeContainer && this.options.container.classList.contains(e) && this.els.unshift(this.options.container);
                var i, o, a = this.els.length;
                for (i = 0; i < a; i++) o = {
                    queueItem: this.loadingQueue.enqueue(this._loadNextItem.bind(this, i), i),
                    el: this.els[i],
                    id: i
                }, this._queueItems.push(o), this._queueItemsObj[i] = o;
                this.loadingQueue.start(), "number" == typeof this.loadingOptions.timeout && (this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout))
            }
        }, f.setVisible = function(t) {
            t.classList.remove(this.loadingOptions.imageClassName)
        }, f.cancel = function() {
            if (this.els) {
                var t, e = this.els.length;
                for (t = 0; t < e; t++) this.setVisible(this.els[t])
            }
            this._handleLoadingComplete()
        }, f.destroy = function() {
            this.cancel(), this.off(), o.prototype.destroy.call(this)
        }, f._loadNextItem = function(t) {
            return new Promise(function(t, e, n) {
                var i = this._queueItemsObj[t];
                this._loadAndSetVisible(i.el).then(function() {
                    var t = this._queueItems.indexOf(i);
                    this._queueItems.splice(t, 1), this._queueItemsObj[i.id] = null, e(), this._handleImageLoad(i.el), i = e = null, 1 === this.loadingQueue.count() && this._handleLoadingComplete()
                }.bind(this))
            }.bind(this, t))
        }, f._loadAndSetVisible = function(t) {
            this.setVisible(t);
            var e = this._getBackgroundImageSrc(t);
            return this._loadImage(e)
        }, f._getBackgroundImageSrc = function(t) {
            var e = t.currentStyle;
            return e || (e = window.getComputedStyle(t, !1)), 0 === e.backgroundImage.indexOf("url(") ? e.backgroundImage.slice(4, -1).replace(/"/g, "") : null
        }, f._getProgressiveClassName = function() {
            return this.loadingOptions.imageClassName
        }, f._loadImage = function(t) {
            return new Promise(this._loadImagePromiseFunc.bind(this, t))
        }, f._loadImagePromiseFunc = function(t, e, n) {
            function i() {
                c(this, "load", i), e(this), e = null
            }
            if (!t) return void e(null);
            var r = new Image;
            a(r, "load", i), r.src = t
        }, f._clearTimeout = function() {
            this._timeout && (window.clearTimeout(this._timeout), this._timeout = null)
        }, f._handleImageLoad = function(t) {
            this.trigger("image-load", t)
        }, f._handleLoadingComplete = function() {
            this.loadingQueue.stop(), this._clearTimeout(), this.trigger("complete")
        }, e.exports = i
    }, {
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0,
        "@marcom/ac-polyfills/Object/create": void 0,
        "@marcom/ac-queue": 453
    }],
    458: [function(t, e, n) {
        "use strict";

        function i(t) {
            r.call(this), this.options = t || {}, this.min = this.options.min || 0, this.max = this.options.max || 1, this._boundHandleClockUpdate = this._handleClockUpdate.bind(this), this._boundHandleClockDraw = this._handleClockDraw.bind(this), this.options.easingFunction && (this.easingFunction = this.options.easingFunction), this.clock = this.options.clock || s, this.usesSharedClock = this.clock === s, this._isRunning = !1, this.specificity = this.options.specificity || 4, this.friction = this.options.friction || 10, this._targetValue = null, this._currentValue = null, this._shouldUpdate = !1, this._shouldEmitChange = !1
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-clock"),
            o = i.prototype = Object.create(r.prototype);
        o.destroy = function() {
            this.trigger("destroy"), this.stop(), this.off(), this.usesSharedClock || this.clock.destroy();
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null);
            this._isRunning = !1
        }, o.start = function() {
            this.clock && !this._isRunning && (this._bindEvents(), this._isRunning = !0, this.clock.start())
        }, o.stop = function() {
            this.clock && this._isRunning && (this._unbindEvents(), this._isRunning = !1, this.usesSharedClock || this.clock.stop())
        }, o.isRunning = function() {
            return this._isRunning
        }, o.setProgress = function(t) {
            this._targetValue !== t && (this._targetValue = t, this._shouldUpdate = !0)
        }, o.updateValue = function(t) {
            null === this._currentValue && (this._currentValue = this._targetValue);
            var e = 1;
            if (this.easingFunction) {
                var n = this.max - this.min,
                    i = this.max - (this.max - this._targetValue) / n,
                    r = this.max - (this.max - this._currentValue) / n,
                    s = 1 - Math.abs(i - r),
                    o = this.easingFunction(s, 0, 1, 1);
                e = 1 + (o - s)
            }
            var a = 1;
            t && t.naturalFps !== t.fps && (a = t.naturalFps / t.fps);
            var c = this._targetValue - this._currentValue,
                l = c * e * a * (1 / this.friction),
                h = parseFloat((this._currentValue + l).toFixed(this.specificity));
            h === this._currentValue ? this._currentValue = this._targetValue : this._currentValue = h, this._shouldEmitChange = !0
        }, o._bindEvents = function() {
            this.clock.on("update", this._boundHandleClockUpdate), this.clock.on("draw", this._boundHandleClockDraw)
        }, o._unbindEvents = function() {
            this.clock.off("update", this._boundHandleClockUpdate), this.clock.off("draw", this._boundHandleClockDraw)
        }, o._handleClockUpdate = function(t) {
            this._shouldUpdate && this.updateValue(t), this._shouldEmitChange && (t.progress = this._currentValue, this.trigger("update", t))
        }, o._handleClockDraw = function(t) {
            if (this._shouldEmitChange) return t.progress = this._currentValue, this.trigger("draw", t), this._targetValue === this._currentValue ? (this._shouldUpdate = !1, void(this._shouldEmitChange = !1)) : void(this._shouldUpdate = !0)
        }, e.exports = i
    }, {
        "@marcom/ac-clock": 11,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    459: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            return e = e || {}, t instanceof HTMLElement ? (this.el = t, this.options = e, this.options.offsetTop && (this.offsetTop = this.options.offsetTop), this.options.offsetBottom && (this.offsetBottom = this.options.offsetBottom), this.setEmitterBounds(), this._boundHandleResize = this._handleResize.bind(this), this._bindResizeEvents(), void a.call(this, e)) : null
        }
        t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-dom-events/addEventListener"),
            s = t("@marcom/ac-dom-events/removeEventListener"),
            o = t("@marcom/ac-dom-metrics/getScrollY"),
            a = t("./ScrollMotionEmitter"),
            c = a.prototype,
            l = i.prototype = Object.create(c);
        l.setEmitterBounds = function() {
            this._elementBounds = this.el.getBoundingClientRect();
            var t = o(),
                e = this._elementBounds.top + t,
                n = this._elementBounds.bottom + t,
                i = this.offsetTop || 0,
                r = this.offsetBottom || 0;
            "function" == typeof this.offsetTop && (i = this.offsetTop()), "function" == typeof this.offsetBottom && (r = this.offsetBottom()), this.min = this.options.min = e + i, this.max = this.options.max = n + r
        }, l.destroy = function() {
            s(window, "resize", this._boundHandleResize), s(window, "orientationchange", this._boundHandleResize), a.prototype.destroy.call(this)
        }, l._bindResizeEvents = function() {
            r(window, "resize", this._boundHandleResize), r(window, "orientationchange", this._boundHandleResize)
        }, l._handleClockUpdate = function(t) {
            this._shouldUpdateOnResize && (this.setEmitterBounds(), this.handleScroll(), this._shouldUpdateOnResize = !1), a.prototype._handleClockUpdate.call(this, t)
        }, l._handleResize = function() {
            this._shouldUpdateOnResize = !0
        }, e.exports = i
    }, {
        "./ScrollMotionEmitter": 460,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-metrics/getScrollY": 48,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    460: [function(t, e, n) {
        "use strict";

        function i(t) {
            return t = t || {}, "number" != typeof t.min || "number" != typeof t.max ? null : (a.call(this, t), this.smooth = this.options.smooth || !1, void(this.options.overrideScroll || this._bindScrollEvents()))
        }
        t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-dom-events/utils/addEventListener"),
            s = t("@marcom/ac-dom-events/utils/removeEventListener"),
            o = t("@marcom/ac-dom-metrics/getScrollY"),
            a = t("@marcom/ac-motion-emitter/MotionEmitter"),
            c = a.prototype,
            l = i.prototype = Object.create(c);
        l.updateValue = function(t) {
            return this.smooth ? c.updateValue.call(this, t) : this._currentValue === this._targetValue ? void(this._shouldEmitChange = !1) : (this._currentValue = this._targetValue, void(this._shouldEmitChange = !0))
        }, l.handleScroll = function(t) {
            "number" != typeof t && (t = o());
            var e;
            e = t < this.min ? this.min : t > this.max ? this.max : t, e = (e - this.min) / (this.max - this.min), this.setProgress(e)
        }, l.destroy = function() {
            return this._boundHandleScroll && s(window, "scroll", this._boundHandleScroll), c.destroy.call(this)
        }, l._bindScrollEvents = function() {
            this._boundHandleScroll = this.handleScroll.bind(this), r(window, "scroll", this._boundHandleScroll)
        }, e.exports = i
    }, {
        "@marcom/ac-dom-events/utils/addEventListener": 38,
        "@marcom/ac-dom-events/utils/removeEventListener": 40,
        "@marcom/ac-dom-metrics/getScrollY": 48,
        "@marcom/ac-motion-emitter/MotionEmitter": 458,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    461: [function(t, e, n) {
        "use strict";
        e.exports = {
            ScrollMotionEmitter: t("./ScrollMotionEmitter"),
            ElementScrollMotionEmitter: t("./ElementScrollMotionEmitter")
        }
    }, {
        "./ElementScrollMotionEmitter": 459,
        "./ScrollMotionEmitter": 460
    }],
    462: [function(t, e, n) {
        arguments[4][15][0].apply(n, arguments)
    }, {
        "./ac-path/path": 463,
        dup: 15
    }],
    463: [function(t, e, n) {
        arguments[4][16][0].apply(n, arguments)
    }, {
        dup: 16
    }],
    464: [function(t, e, n) {
        arguments[4][17][0].apply(n, arguments)
    }, {
        "./ac-cname/cname": 465,
        dup: 17
    }],
    465: [function(t, e, n) {
        arguments[4][18][0].apply(n, arguments)
    }, {
        "ac-path": 462,
        dup: 18
    }],
    466: [function(t, e, n) {
        "use strict";
        e.exports = {
            TextureLoader: t("./ac-texture-loader/TextureLoader")
        }
    }, {
        "./ac-texture-loader/TextureLoader": 467
    }],
    467: [function(t, e, n) {
        "use strict";

        function i(t) {
            THREE && (r.call(this), t = t || {}, this.options = s.defaults(l, t), this._boundOnBreakpoint = this._onBreakpoint.bind(this), c.on("breakpoint", this._boundOnBreakpoint), this._onBreakpoint(), this.textures = {})
        }
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-object"),
            o = t("ac-cname").cname,
            a = t("@marcom/ac-dom-emitter").DOMEmitter,
            c = t("@marcom/ac-viewport").Viewport,
            l = {
                basePath: "/",
                ignoreBreakpoint: !1,
                type: "image",
                extension: "png",
                allowXLarge: !1,
                timeout: 5e3
            },
            h = ["mp4"],
            u = i.prototype = Object.create(r.prototype);
        u.createTexture = function(t, e) {
            e = s.defaults(this.options, e || {});
            var n = this._getTextureDOMElement(e),
                i = new THREE.Texture(n);
            return this.textures[t] = {
                texture: i,
                options: e || {}
            }, i
        }, u.load = function(t, e) {
            if ("string" != typeof t) return !1;
            var n = this.textures[t];
            n || (this.createTexture(t, e), n = this.textures[t]);
            var i = s.defaults(n.options, e || {}),
                r = this.getAssetPath(t, i),
                o = new XMLHttpRequest;
            return o.open("GET", r, !0), o.responseType = "arraybuffer", o.onload = this._handleXHRLoaded.bind(this, t, n, i, o), o.send(null), n.texture
        }, u.emptyTextureCache = function() {
            this.textures = {}
        }, u.getAssetPath = function(t, e) {
            e = s.defaults(this.options, e || {});
            var n = e.basePath,
                i = e.extension,
                r = "",
                a = "_2x";
            if (i = "." + i, !e.ignoreBreakpoint) {
                var c = this.breakpointName;
                "xlarge" !== c || e.allowXLarge || (c = "large"), r += "_" + c
            }
            if (e.retina === !0) r += a;
            else if (e.retina === !1) r += "";
            else {
                var l = "";
                window.devicePixelRatio > 1.5 && (l = a), r += l
            }
            return o.formatUrl(n, t + r, i)
        }, u.cancelXHR = function() {}, u.destroy = function() {
            this.emptyTextureCache(), this.cancelXHR(), c.off("breakpoint", this._boundOnBreakpoint);
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, u._getTextureDOMElement = function(t) {
            var e = "img";
            return h.indexOf(t.extension) > -1 && (e = "video"), document.createElement(e)
        }, u._handleXHRLoaded = function(t, e, n, i) {
            if (i.status >= 400) return this.trigger("error", {
                name: t,
                xhr: i
            }), void(i = null);
            var r = window.URL || window.webkitURL,
                s = "image",
                o = e.texture.image.tagName.toLowerCase();
            "video" === o && (s = "video");
            var c = new Uint8Array(i.response),
                l = new Blob([c], {
                    type: s + "/" + n.extension
                }),
                h = r.createObjectURL(l),
                u = new a(e.texture.image),
                f = "load";
            "video" === o && (f = "canplay"), u.on(f, this._onImageBlobTextureLoaded.bind(this, t, e.texture, u, i)), e.texture.image.src = h
        }, u._onImageBlobTextureLoaded = function(t, e, n, i) {
            e.needsUpdate = !0, this.trigger("load", {
                name: t,
                texture: e
            }), n.destroy(), i = n = null
        }, u._onBreakpoint = function() {
            this.breakpointName = c.getBreakpoint().name
        }, e.exports = i
    }, {
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object": 443,
        "@marcom/ac-viewport": 561,
        "ac-cname": 464
    }],
    468: [function(t, e, n) {
        "use strict";
        e.exports = {
            ShaderPlayer2D: t("./ac-shader-player-2d/ShaderPlayer2D")
        }
    }, {
        "./ac-shader-player-2d/ShaderPlayer2D": 469
    }],
    469: [function(t, e, n) {
        "use strict";

        function i(t) {
            o.call(this), this.options = a(u, t || {}), this.clock = t.clock || c, this.className = t.className || this.className, this.activeClassName = t.activeClassName || this.activeClassName, this._currentSize = {}, this._textureController = null, this._texturesReady = !0, this._shouldUpdate = !0, this._progressValue = null, this._renderingReady = !1, this._didBindBreakpoint = !1, this._renderCount = 0, this._textureMap = {}, this.devicePixelRatio = this._getDevicePixelRatio(), this._breakpointName = this.getCurrentBreakpointName(), this._setBreakpointSizes(), this._boundOnUpdate = this._onUpdate.bind(this), this._boundOnDraw = this._onDraw.bind(this), this.initialize(), this.domEmitter = new l(this.el), this.clock.on("update", this._boundOnUpdate), this.clock.on("draw", this._boundOnDraw), (this._getSizesLength() > 1 || this.options.reloadOnBreakpoint) && (this._didBindBreakpoint = !0, this._boundOnShaderPlayer2DBreakpoint = this._onShaderPlayer2DBreakpoint.bind(this), h.on("breakpoint", this._boundOnShaderPlayer2DBreakpoint)), this._bindDOMEvents()
        }
        var r = t("./TextureController"),
            s = t("./vertexShader"),
            o = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            a = t("@marcom/ac-object/defaults"),
            c = t("@marcom/ac-clock"),
            l = t("@marcom/ac-dom-emitter").DOMEmitter,
            h = t("@marcom/ac-viewport").Viewport,
            u = {
                sizes: {},
                vertexShader: s,
                antialias: !1,
                transparent: !1,
                preserveDrawingBuffer: !1,
                alpha: !1,
                mipmap: 1,
                reloadOnBreakpoint: !1,
                clearColor: 16777215,
                autoClearColor: !1,
                allowXLarge: !1,
                backgroundOpacity: 1,
                composerPasses: [],
                vertexShadersPath: null,
                fragmentShadersPath: null,
                invertX: !1,
                invertY: !1,
                uniforms: {}
            },
            f = {
                update: "update",
                draw: "draw",
                textureLoadStart: "texture-load-start",
                textureReloadStart: "texture-reload-start",
                textureLoad: "texture-load",
                texturesComplete: "textures-complete",
                resize: "resize"
            },
            d = i.prototype = Object.create(o.prototype);
        d.rendersBeforeVisible = 0, d.className = "webgl-object", d.activeClassName = "active", d.initialize = function() {
            this.options.textures && this._setTextureUniforms(this.options.textures), this.createScene(), this.createCamera(), this.createMesh(), this.createRenderer(), this.options.composerPasses.length > 0 && this.createComposer(), this.scene.add(this.mesh), this.el = this.renderer.domElement, this.el.className = this.className, this.setSize()
        }, d.load = function() {
            this._textureController && (this.trigger(f.textureLoadStart), this._textureController.load())
        }, d.start = function() {
            this.clock.start()
        }, d.stop = function() {
            this.clock.stop()
        }, d.getProgress = function() {
            return this.material && this.material.uniforms && this.material.uniforms.progress ? this.material.uniforms.progress.value : null
        }, d.setProgress = function(t) {
            this.options && this.options.uniforms && this.options.uniforms.progress && (this.options.uniforms.progress.value = t), this.setUniformValue("progress", t)
        }, d.render = function() {
            if (this.renderer && this._texturesReady) {
                if (this._renderCount++, !this._renderingReady) {
                    if (this._renderCount < this.rendersBeforeVisible) return;
                    this.setActive()
                }
                return this.composer ? void this._composerRender() : void this.renderer.render(this.scene, this.camera)
            }
        }, d.createScene = function() {
            this.scene = new THREE.Scene
        }, d.createCamera = function() {
            this.camera = new THREE.OrthographicCamera(-this.width / 2, this.width / 2, this.height / 2, -this.height / 2, this.options.nearClip, this.options.farClip), this.camera.position.z = 1, this.camera.lookAt(new THREE.Vector3)
        }, d.createMesh = function() {
            this.geometry = new THREE.PlaneGeometry(1, 1, 5, 5), this.options.uniforms.progress || (this.options.uniforms.progress = {
                type: "f",
                value: 0
            }), this.options.uniforms.time || (this.options.uniforms.time = {
                type: "f",
                value: 0
            }), this.options.uniforms.resolution || (this.options.uniforms.resolution = {
                type: "v2",
                value: new THREE.Vector2(this.width, this.height)
            }), this.options.uniforms.pointer || (this.options.uniforms.pointer = {
                type: "v2",
                value: new THREE.Vector2(0, 0)
            }), this.material = new THREE.ShaderMaterial({
                transparent: this.options.transparent,
                vertexShader: this.options.vertexShader,
                fragmentShader: this.options.fragmentShader,
                uniforms: this.options.uniforms
            }), this.mesh = new THREE.Mesh(this.geometry, this.material), this.mesh.position.set(0, 0, 0), this.mesh.scale.set(this.width, this.height, (this.width + this.height) / 2)
        }, d.createRenderer = function() {
            this.renderer = new THREE.WebGLRenderer({
                antialias: this.options.antialias,
                transparent: this.options.transparent,
                preserveDrawingBuffer: this.options.preserveDrawingBuffer,
                alpha: this.options.alpha,
                autoClearColor: this.options.autoClearColor
            }), this.renderer.setClearColor(this.options.clearColor, this.options.backgroundOpacity)
        }, d.createComposer = function() {
            this.options.vertexShadersPath && (WAGNER.vertexShadersPath = this.options.vertexShadersPath), this.options.fragmentShadersPath && (WAGNER.fragmentShadersPath = this.options.fragmentShadersPath), this.composer = new WAGNER.Composer(this.renderer), this.composerPasses = [];
            var t, e, n = this.options.composerPasses.length;
            for (t = 0; t < n; t++) {
                if (e = this.options.composerPasses[t], "function" != typeof WAGNER[e]) throw "Composer pass " + e + " is not a function";
                this.composerPasses.push(new WAGNER[e])
            }
        }, d.createTextureController = function(t) {
            t = t || {}, this.options.allowXLarge && (t.allowXLarge = !0), this._textureController = new r(t), this._boundOnTextureControllerLoad = this._onTextureControllerLoad.bind(this), this._boundOnTextureControllerComplete = this._onTextureControllerComplete.bind(this), this._boundOnTextureControllerReadyStateChanged = this._onTextureControllerReadyStateChanged.bind(this), this._textureController.on("load", this._boundOnTextureControllerLoad), this._textureController.on("complete", this._boundOnTextureControllerComplete), this._textureController.on("readystatechanged", this._boundOnTextureControllerReadyStateChanged)
        }, d.getSizesForBreakpoint = function(t) {
            return t = t || h.getBreakpoint().name, this.options.sizes[t] || (t = "defaults"), {
                name: t,
                sizes: this.options.sizes[t]
            }
        }, d.getUniformValue = function(t) {
            return !this.material || this.material.uniforms || this.material.uniforms[t] ? null : this.material.uniforms[t].value
        }, d.setUniformValue = function(t, e) {
            this.material && this.material.uniforms && this.material.uniforms[t] && (this.material.uniforms[t].value = e)
        }, d.setUniformValues = function(t) {
            if ("object" != typeof t) return !1;
            var e;
            for (e in t) t.hasOwnProperty(e) && this.setUniformValue(e, t[e])
        }, d.setSize = function(t, e) {
            "undefined" != typeof t && (this.width = t), "undefined" != typeof e && (this.height = e), this._setResolution(), this.renderer && this.renderer.setSize(this.width * this.devicePixelRatio * this.options.mipmap, this.height * this.devicePixelRatio * this.options.mipmap), this.composer && this.composer.setSize(this.width * this.devicePixelRatio * this.options.mipmap, this.height * this.devicePixelRatio * this.options.mipmap), this.el && (this.el.style.width = this.width + "px", this.el.style.height = this.height + "px")
        }, d.setBasePath = function(t) {
            this._textureController && (this._textureController.options.basePath = t)
        }, d.setActive = function() {
            this.el.classList.add(this.activeClassName), this._renderingReady = !0
        }, d.setInactive = function() {
            this.el.classList.remove(this.activeClassName), this._renderCount = 0, this._renderingReady = !1
        }, d.getTexture = function(t) {
            return this.material && this.material.uniforms && this.material.uniforms[t] && "t" === this.material.uniforms[t].type ? this.material.uniforms[t].value : null
        }, d.getCurrentBreakpointName = function() {
            var t = h.getBreakpoint().name;
            return this.options.allowXLarge || "xlarge" !== t || (t = "large"), t
        }, d.getTextures = function() {
            var t = {};
            if (this.material || this.material.uniforms) {
                var e;
                for (e in this.material.uniforms) this.material.uniforms.hasOwnProperty(e) && "t" === this.material.uniforms[e].type && (t[e] = this.material.uniforms[e].value)
            }
            var n = {};
            return this._textureController && (n = this.getTextureControllerTextures()), a(n, t)
        }, d.getTextureControllerTextures = function() {
            if (!this._textureController) return null;
            var t, e = {},
                n = this._textureController._textureLoader.textures;
            for (t in n) n.hasOwnProperty(t) && (e[t] = n[t].texture);
            return e
        }, d.refreshTexture = function(t) {
            var e = this.getTexture(t);
            return e ? (e.needsUpdate = !0, !0) : null
        }, d.destroy = function() {
            this.stop(), this._didBindBreakpoint && h.off("breakpoint", this._boundOnShaderPlayer2DBreakpoint), this.domEmitter.destroy(), o.prototype.destroy.call(this)
        }, d._onTextureControllerLoad = function(t) {
            this.trigger(f.textureLoad, t)
        }, d._onTextureControllerComplete = function() {
            this._texturesReady = !0, this.trigger(f.texturesComplete)
        }, d._onTextureControllerReadyStateChanged = function(t) {
            this._texturesReady = t.texturesReady
        }, d._setTextureUniforms = function(t) {
            var e, n;
            for (e in t) t.hasOwnProperty(e) && (n = t[e], this._textureController || this.createTextureController(), this._texturesRequired++, this._textureMap[n.name] = e, this.options.uniforms[e] = {
                type: "t",
                value: this._textureController.createTexture(n.name, n)
            })
        }, d._setTime = function(t) {
            this.setUniformValue("time", t)
        }, d._setResolution = function() {
            this.setUniformValue("resolution", new THREE.Vector2(this.width, this.height))
        }, d._setPointer = function(t, e) {
            this.options.invertX && (t = 1 - t), this.options.invertY && (e = 1 - e), this.setUniformValue("pointer", new THREE.Vector2(t, e))
        }, d._getDevicePixelRatio = function() {
            return this.options.devicePixelRatio ? this.options.devicePixelRatio : window.devicePixelRatio || 1
        }, d._onShaderPlayer2DBreakpoint = function(t) {
            var e = this.getCurrentBreakpointName();
            this._breakpointName !== e && (this._breakpointName = e, this._shouldChangeSize(e) && this._setBreakpointSizes(), this.options.reloadOnBreakpoint && this._textureController && (this._texturesReady = !1, this.setInactive(), this._textureController.load(), this.trigger(f.textureReloadStart)))
        }, d._getSizesLength = function() {
            return Object.keys(this.options.sizes).length
        }, d._shouldChangeSize = function(t) {
            var e = this.getSizesForBreakpoint(t);
            return e.sizes.width !== this._currentSize.sizes.width || e.sizes.height !== this._currentSize.sizes.height
        }, d._setBreakpointSizes = function() {
            var t = this.getSizesForBreakpoint();
            this._currentSize = t, this.setSize(t.sizes.width, t.sizes.height), this.trigger(f.resize)
        }, d._composerRender = function() {
            this.composer.reset(), this.composer.render(this.scene, this.camera);
            var t, e = this.composerPasses.length;
            for (t = 0; t < e; t++) this.composer.pass(this.composerPasses[t]);
            this.composer.toScreen()
        }, d._onUpdate = function(t) {
            this._setTime(t.time), this.trigger(f.update, t)
        }, d._onDraw = function(t) {
            this.render(), this.trigger(f.draw, t)
        }, d._bindDOMEvents = function() {
            this.domEmitter.on("mousemove", this._handleMouseMove, this), this.domEmitter.on("touchmove", this._handleTouchMove, this)
        }, d._handleMouseMove = function(t) {
            this._setPointer(t.originalEvent.offsetX / this.width, 1 - t.originalEvent.offsetY / this.height)
        }, d._handleTouchMove = function(t) {
            this._setPointer(t.originalEvent.touches[0].offsetX / this.width, 1 - t.originalEvent.touches[0].offsetY / this.height)
        }, e.exports = i
    }, {
        "./TextureController": 470,
        "./vertexShader": 471,
        "@marcom/ac-clock": 11,
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-viewport": 561
    }],
    470: [function(t, e, n) {
        "use strict";
        var i, r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-object/defaults"),
            o = t("@marcom/ac-texture-loader").TextureLoader,
            a = function(t) {
                r.call(this), this.options = t || {}, this.options.basePath = this.options.basePath || window.location.pathname, this._textureLoader = new o(this.options), this._texturesRequired = 0, this._texturesLoaded = 0, this._textureLoader.on("load", this._handleTextureLoaderLoaded.bind(this))
            };
        i = a.prototype = Object.create(r.prototype), i.createTexture = function(t, e) {
            if (this._textureLoader.textures[t]) throw 'Existing texture "' + t + '" already registered.';
            return e = s(this.options, e || {}), this._textureLoader.createTexture(t, e), this._texturesRequired++, this.getTexture(t)
        }, i.getTexture = function(t) {
            return this._textureLoader ? this._textureLoader.textures[t].texture : null
        }, i.load = function(t) {
            if (t = s(this.options, t || {}), this._texturesLoaded = 0, this._textureLoader) {
                var e;
                for (e in this._textureLoader.textures) this._textureLoader.textures.hasOwnProperty(e) && this._textureLoader.load(e, t)
            }
        }, i._handleTextureLoaderLoaded = function(t) {
            this.trigger("load", t), this._texturesLoaded++, this._texturesLoaded === this._texturesRequired && this.trigger("complete")
        }, e.exports = a
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-texture-loader": 466
    }],
    471: [function(t, e, n) {
        e.exports = "varying vec2 vUV;\nvoid main() {\n\tvUV = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
    }, {}],
    472: [function(t, e, n) {
        arguments[4][15][0].apply(n, arguments)
    }, {
        "./ac-path/path": 473,
        dup: 15
    }],
    473: [function(t, e, n) {
        arguments[4][16][0].apply(n, arguments)
    }, {
        dup: 16
    }],
    474: [function(t, e, n) {
        arguments[4][17][0].apply(n, arguments)
    }, {
        "./ac-cname/cname": 475,
        dup: 17
    }],
    475: [function(t, e, n) {
        arguments[4][18][0].apply(n, arguments)
    }, {
        "ac-path": 472,
        dup: 18
    }],
    476: [function(t, e, n) {
        "use strict";

        function i(t) {
            if (!t) return a;
            for (var e = 0; e < t.args.length; ++e) {
                var n = t.args[e];
                0 === e ? t.args[e] = {
                    name: n,
                    lvalue: !0,
                    rvalue: !!t.rvalue,
                    count: t.count || 1
                } : t.args[e] = {
                    name: n,
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }
            }
            return t.thisVars || (t.thisVars = []), t.localVars || (t.localVars = []), t
        }

        function r(t) {
            return o({
                args: t.args,
                pre: i(t.pre),
                body: i(t.body),
                post: i(t.proc),
                funcName: t.funcName
            })
        }

        function s(t) {
            for (var e = [], n = 0; n < t.args.length; ++n) e.push("a" + n);
            var i = new Function("P", ["return function ", t.funcName, "_ndarrayops(", e.join(","), ") {P(", e.join(","), ");return a0}"].join(""));
            return i(r(t))
        }
        var o = t("cwise-compiler"),
            a = {
                body: "",
                args: [],
                thisVars: [],
                localVars: []
            },
            c = {
                add: "+",
                sub: "-",
                mul: "*",
                div: "/",
                mod: "%",
                band: "&",
                bor: "|",
                bxor: "^",
                lshift: "<<",
                rshift: ">>",
                rrshift: ">>>"
            };
        ! function() {
            for (var t in c) {
                var e = c[t];
                n[t] = s({
                    args: ["array", "array", "array"],
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=b" + e + "c"
                    },
                    funcName: t
                }), n[t + "eq"] = s({
                    args: ["array", "array"],
                    body: {
                        args: ["a", "b"],
                        body: "a" + e + "=b"
                    },
                    rvalue: !0,
                    funcName: t + "eq"
                }), n[t + "s"] = s({
                    args: ["array", "array", "scalar"],
                    body: {
                        args: ["a", "b", "s"],
                        body: "a=b" + e + "s"
                    },
                    funcName: t + "s"
                }), n[t + "seq"] = s({
                    args: ["array", "scalar"],
                    body: {
                        args: ["a", "s"],
                        body: "a" + e + "=s"
                    },
                    rvalue: !0,
                    funcName: t + "seq"
                })
            }
        }();
        var l = {
            not: "!",
            bnot: "~",
            neg: "-",
            recip: "1.0/"
        };
        ! function() {
            for (var t in l) {
                var e = l[t];
                n[t] = s({
                    args: ["array", "array"],
                    body: {
                        args: ["a", "b"],
                        body: "a=" + e + "b"
                    },
                    funcName: t
                }), n[t + "eq"] = s({
                    args: ["array"],
                    body: {
                        args: ["a"],
                        body: "a=" + e + "a"
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: t + "eq"
                })
            }
        }();
        var h = {
            and: "&&",
            or: "||",
            eq: "===",
            neq: "!==",
            lt: "<",
            gt: ">",
            leq: "<=",
            geq: ">="
        };
        ! function() {
            for (var t in h) {
                var e = h[t];
                n[t] = s({
                    args: ["array", "array", "array"],
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=b" + e + "c"
                    },
                    funcName: t
                }), n[t + "s"] = s({
                    args: ["array", "array", "scalar"],
                    body: {
                        args: ["a", "b", "s"],
                        body: "a=b" + e + "s"
                    },
                    funcName: t + "s"
                }), n[t + "eq"] = s({
                    args: ["array", "array"],
                    body: {
                        args: ["a", "b"],
                        body: "a=a" + e + "b"
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: t + "eq"
                }), n[t + "seq"] = s({
                    args: ["array", "scalar"],
                    body: {
                        args: ["a", "s"],
                        body: "a=a" + e + "s"
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: t + "seq"
                })
            }
        }();
        var u = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
        ! function() {
            for (var t = 0; t < u.length; ++t) {
                var e = u[t];
                n[e] = s({
                    args: ["array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(b)",
                        thisVars: ["this_f"]
                    },
                    funcName: e
                }), n[e + "eq"] = s({
                    args: ["array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a"],
                        body: "a=this_f(a)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "eq"
                })
            }
        }();
        var f = ["max", "min", "atan2", "pow"];
        ! function() {
            for (var t = 0; t < f.length; ++t) {
                var e = f[t];
                n[e] = s({
                    args: ["array", "array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(b,c)",
                        thisVars: ["this_f"]
                    },
                    funcName: e
                }), n[e + "s"] = s({
                    args: ["array", "array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(b,c)",
                        thisVars: ["this_f"]
                    },
                    funcName: e + "s"
                }), n[e + "eq"] = s({
                    args: ["array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(a,b)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "eq"
                }), n[e + "seq"] = s({
                    args: ["array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(a,b)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "seq"
                })
            }
        }();
        var d = ["atan2", "pow"];
        ! function() {
            for (var t = 0; t < d.length; ++t) {
                var e = d[t];
                n[e + "op"] = s({
                    args: ["array", "array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(c,b)",
                        thisVars: ["this_f"]
                    },
                    funcName: e + "op"
                }), n[e + "ops"] = s({
                    args: ["array", "array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b", "c"],
                        body: "a=this_f(c,b)",
                        thisVars: ["this_f"]
                    },
                    funcName: e + "ops"
                }), n[e + "opeq"] = s({
                    args: ["array", "array"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(b,a)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "opeq"
                }), n[e + "opseq"] = s({
                    args: ["array", "scalar"],
                    pre: {
                        args: [],
                        body: "this_f=Math." + e,
                        thisVars: ["this_f"]
                    },
                    body: {
                        args: ["a", "b"],
                        body: "a=this_f(b,a)",
                        thisVars: ["this_f"]
                    },
                    rvalue: !0,
                    count: 2,
                    funcName: e + "opseq"
                })
            }
        }(), n.any = o({
            args: ["array"],
            pre: a,
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "if(a){return true}",
                localVars: [],
                thisVars: []
            },
            post: {
                args: [],
                localVars: [],
                thisVars: [],
                body: "return false"
            },
            funcName: "any"
        }), n.all = o({
            args: ["array"],
            pre: a,
            body: {
                args: [{
                    name: "x",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "if(!x){return false}",
                localVars: [],
                thisVars: []
            },
            post: {
                args: [],
                localVars: [],
                thisVars: [],
                body: "return true"
            },
            funcName: "all"
        }), n.sum = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "this_s+=a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "sum"
        }), n.prod = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=1"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "this_s*=a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "prod"
        }), n.norm2squared = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                body: "this_s+=a*a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "norm2squared"
        }), n.norm2 = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                body: "this_s+=a*a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return Math.sqrt(this_s)"
            },
            funcName: "norm2"
        }), n.norminf = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 4
                }],
                body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "norminf"
        }), n.norm1 = o({
            args: ["array"],
            pre: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "this_s=0"
            },
            body: {
                args: [{
                    name: "a",
                    lvalue: !1,
                    rvalue: !0,
                    count: 3
                }],
                body: "this_s+=a<0?-a:a",
                localVars: [],
                thisVars: ["this_s"]
            },
            post: {
                args: [],
                localVars: [],
                thisVars: ["this_s"],
                body: "return this_s"
            },
            funcName: "norm1"
        }), n.sup = o({
            args: ["array"],
            pre: {
                body: "this_h=-Infinity",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            },
            body: {
                body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_h"],
                localVars: []
            },
            post: {
                body: "return this_h",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            }
        }), n.inf = o({
            args: ["array"],
            pre: {
                body: "this_h=Infinity",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            },
            body: {
                body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_h"],
                localVars: []
            },
            post: {
                body: "return this_h",
                args: [],
                thisVars: ["this_h"],
                localVars: []
            }
        }), n.argmin = o({
            args: ["index", "array", "shape"],
            pre: {
                body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
                args: [{
                    name: "_inline_0_arg0_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg1_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg2_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                thisVars: ["this_i", "this_v"],
                localVars: []
            },
            body: {
                body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }, {
                    name: "_inline_1_arg1_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_i", "this_v"],
                localVars: ["_inline_1_k"]
            },
            post: {
                body: "{return this_i}",
                args: [],
                thisVars: ["this_i"],
                localVars: []
            }
        }), n.argmax = o({
            args: ["index", "array", "shape"],
            pre: {
                body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
                args: [{
                    name: "_inline_0_arg0_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg1_",
                    lvalue: !1,
                    rvalue: !1,
                    count: 0
                }, {
                    name: "_inline_0_arg2_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                thisVars: ["this_i", "this_v"],
                localVars: []
            },
            body: {
                body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
                args: [{
                    name: "_inline_1_arg0_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }, {
                    name: "_inline_1_arg1_",
                    lvalue: !1,
                    rvalue: !0,
                    count: 2
                }],
                thisVars: ["this_i", "this_v"],
                localVars: ["_inline_1_k"]
            },
            post: {
                body: "{return this_i}",
                args: [],
                thisVars: ["this_i"],
                localVars: []
            }
        }), n.random = s({
            args: ["array"],
            pre: {
                args: [],
                body: "this_f=Math.random",
                thisVars: ["this_f"]
            },
            body: {
                args: ["a"],
                body: "a=this_f()",
                thisVars: ["this_f"]
            },
            funcName: "random"
        }), n.assign = s({
            args: ["array", "array"],
            body: {
                args: ["a", "b"],
                body: "a=b"
            },
            funcName: "assign"
        }), n.assigns = s({
            args: ["array", "scalar"],
            body: {
                args: ["a", "b"],
                body: "a=b"
            },
            funcName: "assigns"
        }), n.equals = o({
            args: ["array", "array"],
            pre: a,
            body: {
                args: [{
                    name: "x",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }, {
                    name: "y",
                    lvalue: !1,
                    rvalue: !0,
                    count: 1
                }],
                body: "if(x!==y){return false}",
                localVars: [],
                thisVars: []
            },
            post: {
                args: [],
                localVars: [],
                thisVars: [],
                body: "return true"
            },
            funcName: "equals"
        })
    }, {
        "cwise-compiler": 477
    }],
    477: [function(t, e, n) {
        "use strict";

        function i() {
            this.argTypes = [], this.shimArgs = [], this.arrayArgs = [], this.arrayBlockIndices = [], this.scalarArgs = [], this.offsetArgs = [], this.offsetArgIndex = [], this.indexArgs = [], this.shapeArgs = [], this.funcName = "", this.pre = null, this.body = null, this.post = null, this.debug = !1
        }

        function r(t) {
            var e = new i;
            e.pre = t.pre, e.body = t.body, e.post = t.post;
            var n = t.args.slice(0);
            e.argTypes = n;
            for (var r = 0; r < n.length; ++r) {
                var o = n[r];
                if ("array" === o || "object" == typeof o && o.blockIndices) {
                    if (e.argTypes[r] = "array", e.arrayArgs.push(r), e.arrayBlockIndices.push(o.blockIndices ? o.blockIndices : 0), e.shimArgs.push("array" + r), r < e.pre.args.length && e.pre.args[r].count > 0) throw new Error("cwise: pre() block may not reference array args");
                    if (r < e.post.args.length && e.post.args[r].count > 0) throw new Error("cwise: post() block may not reference array args")
                } else if ("scalar" === o) e.scalarArgs.push(r), e.shimArgs.push("scalar" + r);
                else if ("index" === o) {
                    if (e.indexArgs.push(r), r < e.pre.args.length && e.pre.args[r].count > 0) throw new Error("cwise: pre() block may not reference array index");
                    if (r < e.body.args.length && e.body.args[r].lvalue) throw new Error("cwise: body() block may not write to array index");
                    if (r < e.post.args.length && e.post.args[r].count > 0) throw new Error("cwise: post() block may not reference array index")
                } else if ("shape" === o) {
                    if (e.shapeArgs.push(r), r < e.pre.args.length && e.pre.args[r].lvalue) throw new Error("cwise: pre() block may not write to array shape");
                    if (r < e.body.args.length && e.body.args[r].lvalue) throw new Error("cwise: body() block may not write to array shape");
                    if (r < e.post.args.length && e.post.args[r].lvalue) throw new Error("cwise: post() block may not write to array shape")
                } else {
                    if ("object" != typeof o || !o.offset) throw new Error("cwise: Unknown argument type " + n[r]);
                    e.argTypes[r] = "offset", e.offsetArgs.push({
                        array: o.array,
                        offset: o.offset
                    }), e.offsetArgIndex.push(r)
                }
            }
            if (e.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
            if (e.pre.args.length > n.length) throw new Error("cwise: Too many arguments in pre() block");
            if (e.body.args.length > n.length) throw new Error("cwise: Too many arguments in body() block");
            if (e.post.args.length > n.length) throw new Error("cwise: Too many arguments in post() block");
            return e.debug = !!t.printCode || !!t.debug, e.funcName = t.funcName || "cwise", e.blockSize = t.blockSize || 64, s(e)
        }
        var s = t("./lib/thunk.js");
        e.exports = r
    }, {
        "./lib/thunk.js": 479
    }],
    478: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            var i, r, s = t.length,
                o = e.arrayArgs.length,
                a = e.indexArgs.length > 0,
                c = [],
                l = [],
                h = 0,
                u = 0;
            for (i = 0; i < s; ++i) l.push(["i", i, "=0"].join(""));
            for (r = 0; r < o; ++r)
                for (i = 0; i < s; ++i) u = h, h = t[i], 0 === i ? l.push(["d", r, "s", i, "=t", r, "p", h].join("")) : l.push(["d", r, "s", i, "=(t", r, "p", h, "-s", u, "*t", r, "p", u, ")"].join(""));
            for (c.push("var " + l.join(",")), i = s - 1; i >= 0; --i) h = t[i], c.push(["for(i", i, "=0;i", i, "<s", h, ";++i", i, "){"].join(""));
            for (c.push(n), i = 0; i < s; ++i) {
                for (u = h, h = t[i], r = 0; r < o; ++r) c.push(["p", r, "+=d", r, "s", i].join(""));
                a && (i > 0 && c.push(["index[", u, "]-=s", u].join("")), c.push(["++index[", h, "]"].join(""))), c.push("}")
            }
            return c.join("\n")
        }

        function r(t, e, n, r) {
            for (var s = e.length, o = n.arrayArgs.length, a = n.blockSize, c = n.indexArgs.length > 0, l = [], h = 0; h < o; ++h) l.push(["var offset", h, "=p", h].join(""));
            for (var h = t; h < s; ++h) l.push(["for(var j" + h + "=SS[", e[h], "]|0;j", h, ">0;){"].join("")), l.push(["if(j", h, "<", a, "){"].join("")), l.push(["s", e[h], "=j", h].join("")), l.push(["j", h, "=0"].join("")), l.push(["}else{s", e[h], "=", a].join("")), l.push(["j", h, "-=", a, "}"].join("")), c && l.push(["index[", e[h], "]=j", h].join(""));
            for (var h = 0; h < o; ++h) {
                for (var u = ["offset" + h], f = t; f < s; ++f) u.push(["j", f, "*t", h, "p", e[f]].join(""));
                l.push(["p", h, "=(", u.join("+"), ")"].join(""))
            }
            l.push(i(e, n, r));
            for (var h = t; h < s; ++h) l.push("}");
            return l.join("\n")
        }

        function s(t) {
            for (var e = 0, n = t[0].length; e < n;) {
                for (var i = 1; i < t.length; ++i)
                    if (t[i][e] !== t[0][e]) return e;
                    ++e
            }
            return e
        }

        function o(t, e, n) {
            for (var i = t.body, r = [], s = [], o = 0; o < t.args.length; ++o) {
                var a = t.args[o];
                if (!(a.count <= 0)) {
                    var c = new RegExp(a.name, "g"),
                        l = "",
                        h = e.arrayArgs.indexOf(o);
                    switch (e.argTypes[o]) {
                        case "offset":
                            var u = e.offsetArgIndex.indexOf(o),
                                f = e.offsetArgs[u];
                            h = f.array, l = "+q" + u;
                        case "array":
                            l = "p" + h + l;
                            var d = "l" + o,
                                m = "a" + h;
                            if (0 === e.arrayBlockIndices[h]) 1 === a.count ? "generic" === n[h] ? a.lvalue ? (r.push(["var ", d, "=", m, ".get(", l, ")"].join("")), i = i.replace(c, d), s.push([m, ".set(", l, ",", d, ")"].join(""))) : i = i.replace(c, [m, ".get(", l, ")"].join("")) : i = i.replace(c, [m, "[", l, "]"].join("")) : "generic" === n[h] ? (r.push(["var ", d, "=", m, ".get(", l, ")"].join("")), i = i.replace(c, d), a.lvalue && s.push([m, ".set(", l, ",", d, ")"].join(""))) : (r.push(["var ", d, "=", m, "[", l, "]"].join("")), i = i.replace(c, d), a.lvalue && s.push([m, "[", l, "]=", d].join("")));
                            else {
                                for (var p = [a.name], v = [l], g = 0; g < Math.abs(e.arrayBlockIndices[h]); g++) p.push("\\s*\\[([^\\]]+)\\]"), v.push("$" + (g + 1) + "*t" + h + "b" + g);
                                if (c = new RegExp(p.join(""), "g"), l = v.join("+"), "generic" === n[h]) throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                                i = i.replace(c, [m, "[", l, "]"].join(""))
                            }
                            break;
                        case "scalar":
                            i = i.replace(c, "Y" + e.scalarArgs.indexOf(o));
                            break;
                        case "index":
                            i = i.replace(c, "index");
                            break;
                        case "shape":
                            i = i.replace(c, "shape")
                    }
                }
            }
            return [r.join("\n"), i, s.join("\n")].join("\n").trim()
        }

        function a(t) {
            for (var e = new Array(t.length), n = !0, i = 0; i < t.length; ++i) {
                var r = t[i],
                    s = r.match(/\d+/);
                s = s ? s[0] : "", 0 === r.charAt(0) ? e[i] = "u" + r.charAt(1) + s : e[i] = r.charAt(0) + s, i > 0 && (n = n && e[i] === e[i - 1])
            }
            return n ? e[0] : e.join("")
        }

        function c(t, e) {
            for (var n = e[1].length - Math.abs(t.arrayBlockIndices[0]) | 0, c = new Array(t.arrayArgs.length), h = new Array(t.arrayArgs.length), u = 0; u < t.arrayArgs.length; ++u) h[u] = e[2 * u], c[u] = e[2 * u + 1];
            for (var f = [], d = [], m = [], p = [], v = [], u = 0; u < t.arrayArgs.length; ++u) {
                t.arrayBlockIndices[u] < 0 ? (m.push(0), p.push(n), f.push(n), d.push(n + t.arrayBlockIndices[u])) : (m.push(t.arrayBlockIndices[u]), p.push(t.arrayBlockIndices[u] + n), f.push(0), d.push(t.arrayBlockIndices[u]));
                for (var g = [], _ = 0; _ < c[u].length; _++) m[u] <= c[u][_] && c[u][_] < p[u] && g.push(c[u][_] - m[u]);
                v.push(g)
            }
            for (var y = ["SS"], b = ["'use strict'"], E = [], _ = 0; _ < n; ++_) E.push(["s", _, "=SS[", _, "]"].join(""));
            for (var u = 0; u < t.arrayArgs.length; ++u) {
                y.push("a" + u), y.push("t" + u), y.push("p" + u);
                for (var _ = 0; _ < n; ++_) E.push(["t", u, "p", _, "=t", u, "[", m[u] + _, "]"].join(""));
                for (var _ = 0; _ < Math.abs(t.arrayBlockIndices[u]); ++_) E.push(["t", u, "b", _, "=t", u, "[", f[u] + _, "]"].join(""))
            }
            for (var u = 0; u < t.scalarArgs.length; ++u) y.push("Y" + u);
            if (t.shapeArgs.length > 0 && E.push("shape=SS.slice(0)"), t.indexArgs.length > 0) {
                for (var w = new Array(n), u = 0; u < n; ++u) w[u] = "0";
                E.push(["index=[", w.join(","), "]"].join(""))
            }
            for (var u = 0; u < t.offsetArgs.length; ++u) {
                for (var x = t.offsetArgs[u], T = [], _ = 0; _ < x.offset.length; ++_) 0 !== x.offset[_] && (1 === x.offset[_] ? T.push(["t", x.array, "p", _].join("")) : T.push([x.offset[_], "*t", x.array, "p", _].join("")));
                0 === T.length ? E.push("q" + u + "=0") : E.push(["q", u, "=", T.join("+")].join(""))
            }
            var S = l([].concat(t.pre.thisVars).concat(t.body.thisVars).concat(t.post.thisVars));
            E = E.concat(S), b.push("var " + E.join(","));
            for (var u = 0; u < t.arrayArgs.length; ++u) b.push("p" + u + "|=0");
            t.pre.body.length > 3 && b.push(o(t.pre, t, h));
            var A = o(t.body, t, h),
                C = s(v);
            C < n ? b.push(r(C, v[0], t, A)) : b.push(i(v[0], t, A)), t.post.body.length > 3 && b.push(o(t.post, t, h)), t.debug && console.log("-----Generated cwise routine for ", e, ":\n" + b.join("\n") + "\n----------");
            var O = [t.funcName || "unnamed", "_cwise_loop_", c[0].join("s"), "m", C, a(h)].join(""),
                P = new Function(["function ", O, "(", y.join(","), "){", b.join("\n"), "} return ", O].join(""));
            return P()
        }
        var l = t("uniq");
        e.exports = c
    }, {
        uniq: 480
    }],
    479: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = ["'use strict'", "var CACHED={}"],
                n = [],
                i = t.funcName + "_cwise_thunk";
            e.push(["return function ", i, "(", t.shimArgs.join(","), "){"].join(""));
            for (var s = [], o = [], a = [
                    ["array", t.arrayArgs[0], ".shape.slice(", Math.max(0, t.arrayBlockIndices[0]), t.arrayBlockIndices[0] < 0 ? "," + t.arrayBlockIndices[0] + ")" : ")"].join("")
                ], c = [], l = [], h = 0; h < t.arrayArgs.length; ++h) {
                var u = t.arrayArgs[h];
                n.push(["t", u, "=array", u, ".dtype,", "r", u, "=array", u, ".order"].join("")), s.push("t" + u), s.push("r" + u), o.push("t" + u), o.push("r" + u + ".join()"), a.push("array" + u + ".data"), a.push("array" + u + ".stride"), a.push("array" + u + ".offset|0"), h > 0 && (c.push("array" + t.arrayArgs[0] + ".shape.length===array" + u + ".shape.length+" + (Math.abs(t.arrayBlockIndices[0]) - Math.abs(t.arrayBlockIndices[h]))), l.push("array" + t.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, t.arrayBlockIndices[0]) + "]===array" + u + ".shape[shapeIndex+" + Math.max(0, t.arrayBlockIndices[h]) + "]"))
            }
            t.arrayArgs.length > 1 && (e.push("if (!(" + c.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"), e.push("for(var shapeIndex=array" + t.arrayArgs[0] + ".shape.length-" + Math.abs(t.arrayBlockIndices[0]) + "; shapeIndex-->0;) {"), e.push("if (!(" + l.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')"), e.push("}"));
            for (var h = 0; h < t.scalarArgs.length; ++h) a.push("scalar" + t.scalarArgs[h]);
            n.push(["type=[", o.join(","), "].join()"].join("")), n.push("proc=CACHED[type]"), e.push("var " + n.join(",")), e.push(["if(!proc){", "CACHED[type]=proc=compile([", s.join(","), "])}", "return proc(", a.join(","), ")}"].join("")), t.debug && console.log("-----Generated thunk:\n" + e.join("\n") + "\n----------");
            var f = new Function("compile", e.join("\n"));
            return f(r.bind(void 0, t))
        }
        var r = t("./compile.js");
        e.exports = i
    }, {
        "./compile.js": 478
    }],
    480: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = 1, i = t.length, r = t[0], s = t[0], o = 1; o < i; ++o)
                if (s = r, r = t[o], e(r, s)) {
                    if (o === n) {
                        n++;
                        continue
                    }
                    t[n++] = r
                }
            return t.length = n, t
        }

        function r(t) {
            for (var e = 1, n = t.length, i = t[0], r = t[0], s = 1; s < n; ++s, r = i)
                if (r = i, i = t[s], i !== r) {
                    if (s === e) {
                        e++;
                        continue
                    }
                    t[e++] = i
                }
            return t.length = e, t
        }

        function s(t, e, n) {
            return 0 === t.length ? t : e ? (n || t.sort(e), i(t, e)) : (n || t.sort(), r(t))
        }
        e.exports = s
    }, {}],
    481: [function(t, e, n) {
        function i(t, e) {
            return t[0] - e[0]
        }

        function r() {
            var t, e = this.stride,
                n = new Array(e.length);
            for (t = 0; t < n.length; ++t) n[t] = [Math.abs(e[t]), t];
            n.sort(i);
            var r = new Array(n.length);
            for (t = 0; t < r.length; ++t) r[t] = n[t][1];
            return r
        }

        function s(t, e) {
            var n = ["View", e, "d", t].join("");
            e < 0 && (n = "View_Nil" + t);
            var i = "generic" === t;
            if (e === -1) {
                var s = "function " + n + "(a){this.data=a;};var proto=" + n + ".prototype;proto.dtype='" + t + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + n + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + n + "(a){return new " + n + "(a);}",
                    o = new Function(s);
                return o()
            }
            if (0 === e) {
                var s = "function " + n + "(a,d) {this.data = a;this.offset = d};var proto=" + n + ".prototype;proto.dtype='" + t + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + n + "_copy() {return new " + n + "(this.data,this.offset)};proto.pick=function " + n + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + n + "_get(){return " + (i ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + n + "_set(v){return " + (i ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + n + "(a,b,c,d){return new " + n + "(a,d)}",
                    o = new Function("TrivialArray", s);
                return o(u[t][0])
            }
            var s = ["'use strict'"],
                a = c(e),
                l = a.map(function(t) {
                    return "i" + t
                }),
                h = "this.offset+" + a.map(function(t) {
                    return "this.stride[" + t + "]*i" + t
                }).join("+"),
                f = a.map(function(t) {
                    return "b" + t
                }).join(","),
                d = a.map(function(t) {
                    return "c" + t
                }).join(",");
            s.push("function " + n + "(a," + f + "," + d + ",d){this.data=a", "this.shape=[" + f + "]", "this.stride=[" + d + "]", "this.offset=d|0}", "var proto=" + n + ".prototype", "proto.dtype='" + t + "'", "proto.dimension=" + e), s.push("Object.defineProperty(proto,'size',{get:function " + n + "_size(){return " + a.map(function(t) {
                return "this.shape[" + t + "]"
            }).join("*"), "}})"), 1 === e ? s.push("proto.order=[0]") : (s.push("Object.defineProperty(proto,'order',{get:"), e < 4 ? (s.push("function " + n + "_order(){"), 2 === e ? s.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === e && s.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : s.push("ORDER})")), s.push("proto.set=function " + n + "_set(" + l.join(",") + ",v){"), i ? s.push("return this.data.set(" + h + ",v)}") : s.push("return this.data[" + h + "]=v}"), s.push("proto.get=function " + n + "_get(" + l.join(",") + "){"), i ? s.push("return this.data.get(" + h + ")}") : s.push("return this.data[" + h + "]}"), s.push("proto.index=function " + n + "_index(", l.join(), "){return " + h + "}"), s.push("proto.hi=function " + n + "_hi(" + l.join(",") + "){return new " + n + "(this.data," + a.map(function(t) {
                return ["(typeof i", t, "!=='number'||i", t, "<0)?this.shape[", t, "]:i", t, "|0"].join("")
            }).join(",") + "," + a.map(function(t) {
                return "this.stride[" + t + "]"
            }).join(",") + ",this.offset)}");
            var m = a.map(function(t) {
                    return "a" + t + "=this.shape[" + t + "]"
                }),
                p = a.map(function(t) {
                    return "c" + t + "=this.stride[" + t + "]"
                });
            s.push("proto.lo=function " + n + "_lo(" + l.join(",") + "){var b=this.offset,d=0," + m.join(",") + "," + p.join(","));
            for (var v = 0; v < e; ++v) s.push("if(typeof i" + v + "==='number'&&i" + v + ">=0){d=i" + v + "|0;b+=c" + v + "*d;a" + v + "-=d}");
            s.push("return new " + n + "(this.data," + a.map(function(t) {
                return "a" + t
            }).join(",") + "," + a.map(function(t) {
                return "c" + t
            }).join(",") + ",b)}"), s.push("proto.step=function " + n + "_step(" + l.join(",") + "){var " + a.map(function(t) {
                return "a" + t + "=this.shape[" + t + "]"
            }).join(",") + "," + a.map(function(t) {
                return "b" + t + "=this.stride[" + t + "]"
            }).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
            for (var v = 0; v < e; ++v) s.push("if(typeof i" + v + "==='number'){d=i" + v + "|0;if(d<0){c+=b" + v + "*(a" + v + "-1);a" + v + "=ceil(-a" + v + "/d)}else{a" + v + "=ceil(a" + v + "/d)}b" + v + "*=d}");
            s.push("return new " + n + "(this.data," + a.map(function(t) {
                return "a" + t
            }).join(",") + "," + a.map(function(t) {
                return "b" + t
            }).join(",") + ",c)}");
            for (var g = new Array(e), _ = new Array(e), v = 0; v < e; ++v) g[v] = "a[i" + v + "]", _[v] = "b[i" + v + "]";
            s.push("proto.transpose=function " + n + "_transpose(" + l + "){" + l.map(function(t, e) {
                return t + "=(" + t + "===undefined?" + e + ":" + t + "|0)"
            }).join(";"), "var a=this.shape,b=this.stride;return new " + n + "(this.data," + g.join(",") + "," + _.join(",") + ",this.offset)}"), s.push("proto.pick=function " + n + "_pick(" + l + "){var a=[],b=[],c=this.offset");
            for (var v = 0; v < e; ++v) s.push("if(typeof i" + v + "==='number'&&i" + v + ">=0){c=(c+this.stride[" + v + "]*i" + v + ")|0}else{a.push(this.shape[" + v + "]);b.push(this.stride[" + v + "])}");
            s.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), s.push("return function construct_" + n + "(data,shape,stride,offset){return new " + n + "(data," + a.map(function(t) {
                return "shape[" + t + "]"
            }).join(",") + "," + a.map(function(t) {
                return "stride[" + t + "]"
            }).join(",") + ",offset)}");
            var o = new Function("CTOR_LIST", "ORDER", s.join("\n"));
            return o(u[t], r)
        }

        function o(t) {
            if (l(t)) return "buffer";
            if (h) switch (Object.prototype.toString.call(t)) {
                case "[object Float64Array]":
                    return "float64";
                case "[object Float32Array]":
                    return "float32";
                case "[object Int8Array]":
                    return "int8";
                case "[object Int16Array]":
                    return "int16";
                case "[object Int32Array]":
                    return "int32";
                case "[object Uint8Array]":
                    return "uint8";
                case "[object Uint16Array]":
                    return "uint16";
                case "[object Uint32Array]":
                    return "uint32";
                case "[object Uint8ClampedArray]":
                    return "uint8_clamped"
            }
            return Array.isArray(t) ? "array" : "generic"
        }

        function a(t, e, n, i) {
            if (void 0 === t) {
                var r = u.array[0];
                return r([])
            }
            "number" == typeof t && (t = [t]), void 0 === e && (e = [t.length]);
            var a = e.length;
            if (void 0 === n) {
                n = new Array(a);
                for (var c = a - 1, l = 1; c >= 0; --c) n[c] = l, l *= e[c]
            }
            if (void 0 === i) {
                i = 0;
                for (var c = 0; c < a; ++c) n[c] < 0 && (i -= (e[c] - 1) * n[c])
            }
            for (var h = o(t), f = u[h]; f.length <= a + 1;) f.push(s(h, f.length - 1));
            var r = f[a + 1];
            return r(t, e, n, i)
        }
        var c = t("iota-array"),
            l = t("is-buffer"),
            h = "undefined" != typeof Float64Array,
            u = {
                float32: [],
                float64: [],
                int8: [],
                int16: [],
                int32: [],
                uint8: [],
                uint16: [],
                uint32: [],
                array: [],
                uint8_clamped: [],
                buffer: [],
                generic: []
            };
        e.exports = a
    }, {
        "iota-array": 482,
        "is-buffer": 483
    }],
    482: [function(t, e, n) {
        "use strict";

        function i(t) {
            for (var e = new Array(t), n = 0; n < t; ++n) e[n] = n;
            return e
        }
        e.exports = i
    }, {}],
    483: [function(t, e, n) {
        e.exports = function(t) {
            return !(null == t || !(t._isBuffer || t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)))
        }
    }, {}],
    484: [function(t, e, n) {
        "use strict";
        "use restrict";

        function i(t) {
            var e = 32;
            return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
        }
        var r = 32;
        n.INT_BITS = r, n.INT_MAX = 2147483647, n.INT_MIN = -1 << r - 1, n.sign = function(t) {
            return (t > 0) - (t < 0)
        }, n.abs = function(t) {
            var e = t >> r - 1;
            return (t ^ e) - e
        }, n.min = function(t, e) {
            return e ^ (t ^ e) & -(t < e)
        }, n.max = function(t, e) {
            return t ^ (t ^ e) & -(t < e)
        }, n.isPow2 = function(t) {
            return !(t & t - 1 || !t)
        }, n.log2 = function(t) {
            var e, n;
            return e = (t > 65535) << 4, t >>>= e, n = (t > 255) << 3, t >>>= n, e |= n, n = (t > 15) << 2, t >>>= n, e |= n, n = (t > 3) << 1, t >>>= n, e |= n, e | t >> 1
        }, n.log10 = function(t) {
            return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
        }, n.popCount = function(t) {
            return t -= t >>> 1 & 1431655765, t = (858993459 & t) + (t >>> 2 & 858993459), 16843009 * (t + (t >>> 4) & 252645135) >>> 24
        }, n.countTrailingZeros = i, n.nextPow2 = function(t) {
            return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t + 1
        }, n.prevPow2 = function(t) {
            return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t - (t >>> 1)
        }, n.parity = function(t) {
            return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, t &= 15, 27030 >>> t & 1
        };
        var s = new Array(256);
        ! function(t) {
            for (var e = 0; e < 256; ++e) {
                var n = e,
                    i = e,
                    r = 7;
                for (n >>>= 1; n; n >>>= 1) i <<= 1, i |= 1 & n, --r;
                t[e] = i << r & 255
            }
        }(s), n.reverse = function(t) {
            return s[255 & t] << 24 | s[t >>> 8 & 255] << 16 | s[t >>> 16 & 255] << 8 | s[t >>> 24 & 255]
        }, n.interleave2 = function(t, e) {
            return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
        }, n.deinterleave2 = function(t, e) {
            return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), t = 65535 & (t | t >>> 16), t << 16 >> 16
        }, n.interleave3 = function(t, e, n) {
            return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, n &= 1023, n = 4278190335 & (n | n << 16), n = 251719695 & (n | n << 8), n = 3272356035 & (n | n << 4), n = 1227133513 & (n | n << 2), t | n << 2
        }, n.deinterleave3 = function(t, e) {
            return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), t = 1023 & (t | t >>> 16), t << 22 >> 22
        }, n.nextCombination = function(t) {
            var e = t | t - 1;
            return e + 1 | (~e & -~e) - 1 >>> i(t) + 1
        }
    }, {}],
    485: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            var r = 0 | t[n];
            if (r <= 0) return [];
            var s, o = new Array(r);
            if (n === t.length - 1)
                for (s = 0; s < r; ++s) o[s] = e;
            else
                for (s = 0; s < r; ++s) o[s] = i(t, e, n + 1);
            return o
        }

        function r(t, e) {
            var n, i;
            for (n = new Array(t), i = 0; i < t; ++i) n[i] = e;
            return n
        }

        function s(t, e) {
            switch ("undefined" == typeof e && (e = 0), typeof t) {
                case "number":
                    if (t > 0) return r(0 | t, e);
                    break;
                case "object":
                    if ("number" == typeof t.length) return i(t, e, 0)
            }
            return []
        }
        e.exports = s
    }, {}],
    486: [function(t, e, n) {
        (function(e, i) {
            "use strict";

            function r(t) {
                if (t) {
                    var e = t.length || t.byteLength,
                        n = _.log2(e);
                    w[n].push(t)
                }
            }

            function s(t) {
                r(t.buffer)
            }

            function o(t) {
                var t = _.nextPow2(t),
                    e = _.log2(t),
                    n = w[e];
                return n.length > 0 ? n.pop() : new ArrayBuffer(t)
            }

            function a(t) {
                return new Uint8Array(o(t), 0, t)
            }

            function c(t) {
                return new Uint16Array(o(2 * t), 0, t)
            }

            function l(t) {
                return new Uint32Array(o(4 * t), 0, t)
            }

            function h(t) {
                return new Int8Array(o(t), 0, t)
            }

            function u(t) {
                return new Int16Array(o(2 * t), 0, t)
            }

            function f(t) {
                return new Int32Array(o(4 * t), 0, t)
            }

            function d(t) {
                return new Float32Array(o(4 * t), 0, t)
            }

            function m(t) {
                return new Float64Array(o(8 * t), 0, t)
            }

            function p(t) {
                return b ? new Uint8ClampedArray(o(t), 0, t) : a(t)
            }

            function v(t) {
                return new DataView(o(t), 0, t)
            }

            function g(t) {
                t = _.nextPow2(t);
                var e = _.log2(t),
                    n = x[e];
                return n.length > 0 ? n.pop() : new i(t)
            }
            var _ = t("bit-twiddle"),
                y = t("dup");
            e.__TYPEDARRAY_POOL || (e.__TYPEDARRAY_POOL = {
                UINT8: y([32, 0]),
                UINT16: y([32, 0]),
                UINT32: y([32, 0]),
                INT8: y([32, 0]),
                INT16: y([32, 0]),
                INT32: y([32, 0]),
                FLOAT: y([32, 0]),
                DOUBLE: y([32, 0]),
                DATA: y([32, 0]),
                UINT8C: y([32, 0]),
                BUFFER: y([32, 0])
            });
            var b = "undefined" != typeof Uint8ClampedArray,
                E = e.__TYPEDARRAY_POOL;
            E.UINT8C || (E.UINT8C = y([32, 0])), E.BUFFER || (E.BUFFER = y([32, 0]));
            var w = E.DATA,
                x = E.BUFFER;
            n.free = function(t) {
                if (i.isBuffer(t)) x[_.log2(t.length)].push(t);
                else {
                    if ("[object ArrayBuffer]" !== Object.prototype.toString.call(t) && (t = t.buffer), !t) return;
                    var e = t.length || t.byteLength,
                        n = 0 | _.log2(e);
                    w[n].push(t)
                }
            }, n.freeUint8 = n.freeUint16 = n.freeUint32 = n.freeInt8 = n.freeInt16 = n.freeInt32 = n.freeFloat32 = n.freeFloat = n.freeFloat64 = n.freeDouble = n.freeUint8Clamped = n.freeDataView = s, n.freeArrayBuffer = r, n.freeBuffer = function(t) {
                x[_.log2(t.length)].push(t)
            }, n.malloc = function(t, e) {
                if (void 0 === e || "arraybuffer" === e) return o(t);
                switch (e) {
                    case "uint8":
                        return a(t);
                    case "uint16":
                        return c(t);
                    case "uint32":
                        return l(t);
                    case "int8":
                        return h(t);
                    case "int16":
                        return u(t);
                    case "int32":
                        return f(t);
                    case "float":
                    case "float32":
                        return d(t);
                    case "double":
                    case "float64":
                        return m(t);
                    case "uint8_clamped":
                        return p(t);
                    case "buffer":
                        return g(t);
                    case "data":
                    case "dataview":
                        return v(t);
                    default:
                        return null
                }
                return null
            }, n.mallocArrayBuffer = o, n.mallocUint8 = a, n.mallocUint16 = c, n.mallocUint32 = l, n.mallocInt8 = h, n.mallocInt16 = u, n.mallocInt32 = f, n.mallocFloat32 = n.mallocFloat = d, n.mallocFloat64 = n.mallocDouble = m, n.mallocUint8Clamped = p, n.mallocDataView = v, n.mallocBuffer = g, n.clearCache = function() {
                for (var t = 0; t < 32; ++t) E.UINT8[t].length = 0, E.UINT16[t].length = 0, E.UINT32[t].length = 0, E.INT8[t].length = 0, E.INT16[t].length = 0, E.INT32[t].length = 0, E.FLOAT[t].length = 0, E.DOUBLE[t].length = 0, E.UINT8C[t].length = 0, w[t].length = 0, x[t].length = 0
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer)
    }, {
        "bit-twiddle": 484,
        buffer: 268,
        dup: 485
    }],
    487: [function(t, e, n) {
        "use strict";

        function i(t) {
            v = [t.LINEAR, t.NEAREST_MIPMAP_LINEAR, t.LINEAR_MIPMAP_NEAREST, t.LINEAR_MIPMAP_NEAREST], g = [t.NEAREST, t.LINEAR, t.NEAREST_MIPMAP_NEAREST, t.NEAREST_MIPMAP_LINEAR, t.LINEAR_MIPMAP_NEAREST, t.LINEAR_MIPMAP_LINEAR], _ = [t.REPEAT, t.CLAMP_TO_EDGE, t.MIRRORED_REPEAT]
        }

        function r(t, e, n) {
            var i = t.gl,
                r = i.getParameter(i.MAX_TEXTURE_SIZE);
            if (e < 0 || e > r || n < 0 || n > r) throw new Error("gl-texture2d: Invalid texture size");
            return t._shape = [e, n], t.bind(), i.texImage2D(i.TEXTURE_2D, 0, t.format, e, n, 0, t.format, t.type, null), t._mipLevels = [0], t
        }

        function s(t, e, n, i, r, s) {
            this.gl = t, this.handle = e, this.format = r, this.type = s, this._shape = [n, i], this._mipLevels = [0], this._magFilter = t.NEAREST, this._minFilter = t.NEAREST, this._wrapS = t.CLAMP_TO_EDGE, this._wrapT = t.CLAMP_TO_EDGE, this._anisoSamples = 1;
            var o = this,
                a = [this._wrapS, this._wrapT];
            Object.defineProperties(a, [{
                get: function() {
                    return o._wrapS
                },
                set: function(t) {
                    return o.wrapS = t
                }
            }, {
                get: function() {
                    return o._wrapT
                },
                set: function(t) {
                    return o.wrapT = t
                }
            }]), this._wrapVector = a;
            var c = [this._shape[0], this._shape[1]];
            Object.defineProperties(c, [{
                get: function() {
                    return o._shape[0]
                },
                set: function(t) {
                    return o.width = t
                }
            }, {
                get: function() {
                    return o._shape[1]
                },
                set: function(t) {
                    return o.height = t
                }
            }]), this._shapeVector = c
        }

        function o(t, e) {
            return 3 === t.length ? 1 === e[2] && e[1] === t[0] * t[2] && e[0] === t[2] : 1 === e[0] && e[1] === t[0]
        }

        function a(t, e, n, i, r, s, a, c) {
            var l = c.dtype,
                h = c.shape.slice();
            if (h.length < 2 || h.length > 3) throw new Error("gl-texture2d: Invalid ndarray, must be 2d or 3d");
            var u = 0,
                f = 0,
                v = o(h, c.stride.slice());
            "float32" === l ? u = t.FLOAT : "float64" === l ? (u = t.FLOAT, v = !1, l = "float32") : "uint8" === l ? u = t.UNSIGNED_BYTE : (u = t.UNSIGNED_BYTE, v = !1, l = "uint8");
            var g = 1;
            if (2 === h.length) f = t.LUMINANCE, h = [h[0], h[1], 1], c = d(c.data, h, [c.stride[0], c.stride[1], 1], c.offset);
            else {
                if (3 !== h.length) throw new Error("gl-texture2d: Invalid shape for texture");
                if (1 === h[2]) f = t.ALPHA;
                else if (2 === h[2]) f = t.LUMINANCE_ALPHA;
                else if (3 === h[2]) f = t.RGB;
                else {
                    if (4 !== h[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
                    f = t.RGBA
                }
                g = h[2]
            }
            if (f !== t.LUMINANCE && f !== t.ALPHA || r !== t.LUMINANCE && r !== t.ALPHA || (f = r), f !== r) throw new Error("gl-texture2d: Incompatible texture format for setPixels");
            var _ = c.size,
                b = a.indexOf(i) < 0;
            if (b && a.push(i), u === s && v) 0 === c.offset && c.data.length === _ ? b ? t.texImage2D(t.TEXTURE_2D, i, r, h[0], h[1], 0, r, s, c.data) : t.texSubImage2D(t.TEXTURE_2D, i, e, n, h[0], h[1], r, s, c.data) : b ? t.texImage2D(t.TEXTURE_2D, i, r, h[0], h[1], 0, r, s, c.data.subarray(c.offset, c.offset + _)) : t.texSubImage2D(t.TEXTURE_2D, i, e, n, h[0], h[1], r, s, c.data.subarray(c.offset, c.offset + _));
            else {
                var E;
                E = s === t.FLOAT ? p.mallocFloat32(_) : p.mallocUint8(_);
                var w = d(E, h, [h[2], h[2] * h[0], 1]);
                u === t.FLOAT && s === t.UNSIGNED_BYTE ? y(w, c) : m.assign(w, c), b ? t.texImage2D(t.TEXTURE_2D, i, r, h[0], h[1], 0, r, s, E.subarray(0, _)) : t.texSubImage2D(t.TEXTURE_2D, i, e, n, h[0], h[1], r, s, E.subarray(0, _)), s === t.FLOAT ? p.freeFloat32(E) : p.freeUint8(E)
            }
        }

        function c(t) {
            var e = t.createTexture();
            return t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), e
        }

        function l(t, e, n, i, r) {
            var o = t.getParameter(t.MAX_TEXTURE_SIZE);
            if (e < 0 || e > o || n < 0 || n > o) throw new Error("gl-texture2d: Invalid texture shape");
            if (r === t.FLOAT && !t.getExtension("OES_texture_float")) throw new Error("gl-texture2d: Floating point textures not supported on this platform");
            var a = c(t);
            return t.texImage2D(t.TEXTURE_2D, 0, i, e, n, 0, i, r, null), new s(t, a, e, n, i, r)
        }

        function h(t, e, n, i) {
            var r = c(t);
            return t.texImage2D(t.TEXTURE_2D, 0, n, n, i, e), new s(t, r, 0 | e.width, 0 | e.height, n, i)
        }

        function u(t, e) {
            var n = e.dtype,
                i = e.shape.slice(),
                r = t.getParameter(t.MAX_TEXTURE_SIZE);
            if (i[0] < 0 || i[0] > r || i[1] < 0 || i[1] > r) throw new Error("gl-texture2d: Invalid texture size");
            var a = o(i, e.stride.slice()),
                l = 0;
            "float32" === n ? l = t.FLOAT : "float64" === n ? (l = t.FLOAT, a = !1, n = "float32") : "uint8" === n ? l = t.UNSIGNED_BYTE : (l = t.UNSIGNED_BYTE, a = !1, n = "uint8");
            var h = 0;
            if (2 === i.length) h = t.LUMINANCE, i = [i[0], i[1], 1], e = d(e.data, i, [e.stride[0], e.stride[1], 1], e.offset);
            else {
                if (3 !== i.length) throw new Error("gl-texture2d: Invalid shape for texture");
                if (1 === i[2]) h = t.ALPHA;
                else if (2 === i[2]) h = t.LUMINANCE_ALPHA;
                else if (3 === i[2]) h = t.RGB;
                else {
                    if (4 !== i[2]) throw new Error("gl-texture2d: Invalid shape for pixel coords");
                    h = t.RGBA
                }
            }
            l !== t.FLOAT || t.getExtension("OES_texture_float") || (l = t.UNSIGNED_BYTE, a = !1);
            var u, f, v = e.size;
            if (a) u = 0 === e.offset && e.data.length === v ? e.data : e.data.subarray(e.offset, e.offset + v);
            else {
                var g = [i[2], i[2] * i[0], 1];
                f = p.malloc(v, n);
                var _ = d(f, i, g, 0);
                "float32" !== n && "float64" !== n || l !== t.UNSIGNED_BYTE ? m.assign(_, e) : y(_, e), u = f.subarray(0, v)
            }
            var b = c(t);
            return t.texImage2D(t.TEXTURE_2D, 0, h, i[0], i[1], 0, h, l, u), a || p.free(f), new s(t, b, i[0], i[1], h, l)
        }

        function f(t) {
            if (arguments.length <= 1) throw new Error("gl-texture2d: Missing arguments for texture2d constructor");
            if (v || i(t), "number" == typeof arguments[1]) return l(t, arguments[1], arguments[2], arguments[3] || t.RGBA, arguments[4] || t.UNSIGNED_BYTE);
            if (Array.isArray(arguments[1])) return l(t, 0 | arguments[1][0], 0 | arguments[1][1], arguments[2] || t.RGBA, arguments[3] || t.UNSIGNED_BYTE);
            if ("object" == typeof arguments[1]) {
                var e = arguments[1];
                if (e instanceof HTMLCanvasElement || e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof ImageData) return h(t, e, arguments[2] || t.RGBA, arguments[3] || t.UNSIGNED_BYTE);
                if (e.shape && e.data && e.stride) return u(t, e)
            }
            throw new Error("gl-texture2d: Invalid arguments for texture2d constructor")
        }
        var d = t("ndarray"),
            m = t("ndarray-ops"),
            p = t("typedarray-pool");
        e.exports = f;
        var v = null,
            g = null,
            _ = null,
            y = function(t, e) {
                m.muls(t, e, 255)
            },
            b = s.prototype;
        Object.defineProperties(b, {
            minFilter: {
                get: function() {
                    return this._minFilter
                },
                set: function(t) {
                    this.bind();
                    var e = this.gl;
                    if (this.type === e.FLOAT && v.indexOf(t) >= 0 && (e.getExtension("OES_texture_float_linear") || (t = e.NEAREST)), g.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown filter mode " + t);
                    return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t), this._minFilter = t
                }
            },
            magFilter: {
                get: function() {
                    return this._magFilter
                },
                set: function(t) {
                    this.bind();
                    var e = this.gl;
                    if (this.type === e.FLOAT && v.indexOf(t) >= 0 && (e.getExtension("OES_texture_float_linear") || (t = e.NEAREST)), g.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown filter mode " + t);
                    return e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t), this._magFilter = t
                }
            },
            mipSamples: {
                get: function() {
                    return this._anisoSamples
                },
                set: function(t) {
                    var e = this._anisoSamples;
                    if (this._anisoSamples = 0 | Math.max(t, 1), e !== this._anisoSamples) {
                        var n = gl.getExtension("EXT_texture_filter_anisotropic");
                        n && this.gl.texParameterf(this.gl.TEXTURE_2D, n.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
                    }
                    return this._anisoSamples
                }
            },
            wrapS: {
                get: function() {
                    return this._wrapS
                },
                set: function(t) {
                    if (this.bind(), _.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
                    return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, t), this._wrapS = t
                }
            },
            wrapT: {
                get: function() {
                    return this._wrapT
                },
                set: function(t) {
                    if (this.bind(), _.indexOf(t) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
                    return this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, t), this._wrapT = t
                }
            },
            wrap: {
                get: function() {
                    return this._wrapVector
                },
                set: function(t) {
                    if (Array.isArray(t) || (t = [t, t]), 2 !== t.length) throw new Error("gl-texture2d: Must specify wrap mode for rows and columns");
                    for (var e = 0; e < 2; ++e)
                        if (_.indexOf(t[e]) < 0) throw new Error("gl-texture2d: Unknown wrap mode " + t);
                    this._wrapS = t[0], this._wrapT = t[1];
                    var n = this.gl;
                    return this.bind(), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, this._wrapS), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, this._wrapT), t
                }
            },
            shape: {
                get: function() {
                    return this._shapeVector
                },
                set: function(t) {
                    if (Array.isArray(t)) {
                        if (2 !== t.length) throw new Error("gl-texture2d: Invalid texture shape")
                    } else t = [0 | t, 0 | t];
                    return r(this, 0 | t[0], 0 | t[1]), [0 | t[0], 0 | t[1]]
                }
            },
            width: {
                get: function() {
                    return this._shape[0]
                },
                set: function(t) {
                    return t = 0 | t, r(this, t, this._shape[1]), t
                }
            },
            height: {
                get: function() {
                    return this._shape[1]
                },
                set: function(t) {
                    return t = 0 | t, r(this, this._shape[0], t), t
                }
            }
        }), b.bind = function(t) {
            var e = this.gl;
            return void 0 !== t && e.activeTexture(e.TEXTURE0 + (0 | t)), e.bindTexture(e.TEXTURE_2D, this.handle), void 0 !== t ? 0 | t : e.getParameter(e.ACTIVE_TEXTURE) - e.TEXTURE0
        }, b.dispose = function() {
            this.gl.deleteTexture(this.handle)
        }, b.generateMipmap = function() {
            this.bind(), this.gl.generateMipmap(this.gl.TEXTURE_2D);
            for (var t = Math.min(this._shape[0], this._shape[1]), e = 0; t > 0; ++e, t >>>= 1) this._mipLevels.indexOf(e) < 0 && this._mipLevels.push(e)
        }, b.setPixels = function(t, e, n, i) {
            var r = this.gl;
            if (this.bind(), Array.isArray(e) ? (i = n, n = 0 | e[1], e = 0 | e[0]) : (e = e || 0, n = n || 0), i = i || 0, t instanceof HTMLCanvasElement || t instanceof ImageData || t instanceof HTMLImageElement || t instanceof HTMLVideoElement) {
                var s = this._mipLevels.indexOf(i) < 0;
                s ? (r.texImage2D(r.TEXTURE_2D, 0, this.format, this.format, this.type, t), this._mipLevels.push(i)) : r.texSubImage2D(r.TEXTURE_2D, i, e, n, this.format, this.type, t)
            } else {
                if (!(t.shape && t.stride && t.data)) throw new Error("gl-texture2d: Unsupported data type");
                if (t.shape.length < 2 || e + t.shape[1] > this._shape[1] >>> i || n + t.shape[0] > this._shape[0] >>> i || e < 0 || n < 0) throw new Error("gl-texture2d: Texture dimensions are out of bounds");
                a(r, e, n, i, this.format, this.type, this._mipLevels, t)
            }
        }
    }, {
        ndarray: 481,
        "ndarray-ops": 476,
        "typedarray-pool": 486
    }],
    488: [function(t, e, n) {
        "use strict";
        e.exports = {
            TextureLoader: t("./ac-texture-loader/TextureLoader")
        }
    }, {
        "./ac-texture-loader/TextureLoader": 489
    }],
    489: [function(t, e, n) {
        "use strict";

        function i(t) {
            r.call(this), t = t || {}, this.options = o.defaults(h, t), this.textureUnitCount = 0, this._boundOnBreakpoint = this._onBreakpoint.bind(this), l.on("breakpoint", this._boundOnBreakpoint), this._onBreakpoint(), this.textures = {}
        }
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("gl-texture2d"),
            o = t("@marcom/ac-object"),
            a = t("ac-cname").cname,
            c = t("@marcom/ac-dom-emitter").DOMEmitter,
            l = t("@marcom/ac-viewport").Viewport,
            h = {
                basePath: "/",
                ignoreBreakpoint: !1,
                type: "image",
                extension: "png",
                allowXLarge: !1,
                timeout: 5e3
            },
            u = ["mp4"],
            f = i.prototype = Object.create(r.prototype);
        f.createTexture = function(t, e, n) {
            var i = this._getTextureDOMElement(n);
            return this.textures[e] = {
                texture: {},
                el: i,
                unit: this.textureUnitCount,
                context: t,
                options: n || {}
            }, this.textureUnitCount++, this.textures[e].texture
        }, f.load = function(t, e) {
            if ("string" != typeof t) return !1;
            var n = this.textures[t];
            n || (this.createTexture(t, e), n = this.textures[t]);
            var i = o.defaults(n.options, e || {}),
                r = this.getAssetPath(t, i),
                s = new XMLHttpRequest;
            return s.open("GET", r, !0), s.responseType = "arraybuffer", s.onload = this._handleXHRLoaded.bind(this, t, n, i, s), s.send(null), n.texture
        }, f.emptyTextureCache = function() {
            var t;
            for (t in this.textures) this.textures.hasOwnProperty(t) && this.textures[t].texture.dispose();
            this.textures = {}
        }, f.getAssetPath = function(t, e) {
            e = o.defaults(this.options, e || {});
            var n = e.basePath,
                i = e.extension,
                r = "",
                s = "_2x";
            if (i = "." + i, !e.ignoreBreakpoint) {
                var c = this.breakpointName;
                "xlarge" !== c || e.allowXLarge || (c = "large"), r += "_" + c
            }
            if (e.retina === !0) r += s;
            else if (e.retina === !1) r += "";
            else {
                var l = "";
                window.devicePixelRatio > 1.5 && (l = s), r += l
            }
            return a.formatUrl(n, t + r, i)
        }, f.cancelXHR = function() {}, f.destroy = function() {
            this.emptyTextureCache(), this.cancelXHR(), l.off("breakpoint", this._boundOnBreakpoint);
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null)
        }, f._getTextureDOMElement = function(t) {
            var e = "img";
            return u.indexOf(t.extension) > -1 && (e = "video"), document.createElement(e)
        }, f._handleXHRLoaded = function(t, e, n, i) {
            if (i.status >= 400) return this.trigger("error", {
                name: t,
                xhr: i
            }), void(i = null);
            var r = window.URL || window.webkitURL,
                s = "image",
                o = e.el.tagName.toLowerCase();
            "video" === o && (s = "video");
            var a = new Uint8Array(i.response),
                l = new Blob([a], {
                    type: s + "/" + n.extension
                }),
                h = r.createObjectURL(l),
                u = new c(e.el),
                f = "load";
            "video" === o && (f = "canplay"), u.on(f, this._onImageBlobTextureLoaded.bind(this, t, e, u, i)), e.el.src = h
        }, f._onImageBlobTextureLoaded = function(t, e, n, i) {
            e.texture = s(e.context, e.el), this.textures[t] = e, this.trigger("load", {
                name: t,
                texture: e.texture,
                el: e.el
            }), n.destroy(), i = n = null
        }, f._onBreakpoint = function() {
            this.breakpointName = l.getBreakpoint().name
        }, e.exports = i
    }, {
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object": 443,
        "@marcom/ac-viewport": 561,
        "ac-cname": 474,
        "gl-texture2d": 487
    }],
    490: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r) {
            this.gl = t, this.type = e, this.handle = n, this.length = i, this.usage = r
        }

        function r(t, e, n, i, r, s) {
            var o = r.length * r.BYTES_PER_ELEMENT;
            if (s < 0) return t.bufferData(e, r, i), o;
            if (o + s > n) throw new Error("gl-buffer: If resizing buffer, must not specify offset");
            return t.bufferSubData(e, s, r), n
        }

        function s(t, e) {
            for (var n = c.malloc(t.length, e), i = t.length, r = 0; r < i; ++r) n[r] = t[r];
            return n
        }

        function o(t, e) {
            for (var n = 1, i = e.length - 1; i >= 0; --i) {
                if (e[i] !== n) return !1;
                n *= t[i]
            }
            return !0
        }

        function a(t, e, n, r) {
            if (n = n || t.ARRAY_BUFFER, r = r || t.DYNAMIC_DRAW, n !== t.ARRAY_BUFFER && n !== t.ELEMENT_ARRAY_BUFFER) throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER");
            if (r !== t.DYNAMIC_DRAW && r !== t.STATIC_DRAW && r !== t.STREAM_DRAW) throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW");
            var s = t.createBuffer(),
                o = new i(t, n, s, 0, r);
            return o.update(e), o
        }
        var c = t("typedarray-pool"),
            l = t("ndarray-ops"),
            h = t("ndarray"),
            u = ["uint8", "uint8_clamped", "uint16", "uint32", "int8", "int16", "int32", "float32"],
            f = i.prototype;
        f.bind = function() {
            this.gl.bindBuffer(this.type, this.handle)
        }, f.unbind = function() {
            this.gl.bindBuffer(this.type, null)
        }, f.dispose = function() {
            this.gl.deleteBuffer(this.handle)
        }, f.update = function(t, e) {
            if ("number" != typeof e && (e = -1), this.bind(), "object" == typeof t && "undefined" != typeof t.shape) {
                var n = t.dtype;
                if (u.indexOf(n) < 0 && (n = "float32"), this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
                    var i = gl.getExtension("OES_element_index_uint");
                    n = i && "uint16" !== n ? "uint32" : "uint16"
                }
                if (n === t.dtype && o(t.shape, t.stride)) 0 === t.offset && t.data.length === t.shape[0] ? this.length = r(this.gl, this.type, this.length, this.usage, t.data, e) : this.length = r(this.gl, this.type, this.length, this.usage, t.data.subarray(t.offset, t.shape[0]), e);
                else {
                    var a = c.malloc(t.size, n),
                        f = h(a, t.shape);
                    l.assign(f, t), e < 0 ? this.length = r(this.gl, this.type, this.length, this.usage, a, e) : this.length = r(this.gl, this.type, this.length, this.usage, a.subarray(0, t.size), e), c.free(a)
                }
            } else if (Array.isArray(t)) {
                var d;
                d = this.type === this.gl.ELEMENT_ARRAY_BUFFER ? s(t, "uint16") : s(t, "float32"), e < 0 ? this.length = r(this.gl, this.type, this.length, this.usage, d, e) : this.length = r(this.gl, this.type, this.length, this.usage, d.subarray(0, t.length), e), c.free(d)
            } else if ("object" == typeof t && "number" == typeof t.length) this.length = r(this.gl, this.type, this.length, this.usage, t, e);
            else {
                if ("number" != typeof t && void 0 !== t) throw new Error("gl-buffer: Invalid data type");
                if (e >= 0) throw new Error("gl-buffer: Cannot specify offset when resizing buffer");
                t = 0 | t, t <= 0 && (t = 1), this.gl.bufferData(this.type, 0 | t, this.usage), this.length = t
            }
        }, e.exports = a
    }, {
        ndarray: 496,
        "ndarray-ops": 491,
        "typedarray-pool": 501
    }],
    491: [function(t, e, n) {
        arguments[4][476][0].apply(n, arguments)
    }, {
        "cwise-compiler": 492,
        dup: 476
    }],
    492: [function(t, e, n) {
        arguments[4][477][0].apply(n, arguments)
    }, {
        "./lib/thunk.js": 494,
        dup: 477
    }],
    493: [function(t, e, n) {
        arguments[4][478][0].apply(n, arguments)
    }, {
        dup: 478,
        uniq: 495
    }],
    494: [function(t, e, n) {
        arguments[4][479][0].apply(n, arguments)
    }, {
        "./compile.js": 493,
        dup: 479
    }],
    495: [function(t, e, n) {
        arguments[4][480][0].apply(n, arguments)
    }, {
        dup: 480
    }],
    496: [function(t, e, n) {
        arguments[4][481][0].apply(n, arguments)
    }, {
        dup: 481,
        "iota-array": 497,
        "is-buffer": 498
    }],
    497: [function(t, e, n) {
        arguments[4][482][0].apply(n, arguments)
    }, {
        dup: 482
    }],
    498: [function(t, e, n) {
        arguments[4][483][0].apply(n, arguments)
    }, {
        dup: 483
    }],
    499: [function(t, e, n) {
        arguments[4][484][0].apply(n, arguments)
    }, {
        dup: 484
    }],
    500: [function(t, e, n) {
        arguments[4][485][0].apply(n, arguments)
    }, {
        dup: 485
    }],
    501: [function(t, e, n) {
        arguments[4][486][0].apply(n, arguments)
    }, {
        "bit-twiddle": 499,
        buffer: 268,
        dup: 486
    }],
    502: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            e ? e.bind() : t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null);
            var i = 0 | t.getParameter(t.MAX_VERTEX_ATTRIBS);
            if (n) {
                if (n.length > i) throw new Error("gl-vao: Too many vertex attributes");
                for (var r = 0; r < n.length; ++r) {
                    var s = n[r];
                    if (s.buffer) {
                        var o = s.buffer,
                            a = s.size || 4,
                            c = s.type || t.FLOAT,
                            l = !!s.normalized,
                            h = s.stride || 0,
                            u = s.offset || 0;
                        o.bind(), t.enableVertexAttribArray(r), t.vertexAttribPointer(r, a, c, l, h, u)
                    } else {
                        if ("number" == typeof s) t.vertexAttrib1f(r, s);
                        else if (1 === s.length) t.vertexAttrib1f(r, s[0]);
                        else if (2 === s.length) t.vertexAttrib2f(r, s[0], s[1]);
                        else if (3 === s.length) t.vertexAttrib3f(r, s[0], s[1], s[2]);
                        else {
                            if (4 !== s.length) throw new Error("gl-vao: Invalid vertex attribute");
                            t.vertexAttrib4f(r, s[0], s[1], s[2], s[3])
                        }
                        t.disableVertexAttribArray(r)
                    }
                }
                for (; r < i; ++r) t.disableVertexAttribArray(r)
            } else {
                t.bindBuffer(t.ARRAY_BUFFER, null);
                for (var r = 0; r < i; ++r) t.disableVertexAttribArray(r)
            }
        }
        e.exports = i
    }, {}],
    503: [function(t, e, n) {
        "use strict";

        function i(t) {
            this.gl = t, this._elements = null, this._attributes = null, this._elementsType = t.UNSIGNED_SHORT
        }

        function r(t) {
            return new i(t)
        }
        var s = t("./do-bind.js");
        i.prototype.bind = function() {
            s(this.gl, this._elements, this._attributes)
        }, i.prototype.update = function(t, e, n) {
            this._elements = e, this._attributes = t, this._elementsType = n || this.gl.UNSIGNED_SHORT
        }, i.prototype.dispose = function() {}, i.prototype.unbind = function() {}, i.prototype.draw = function(t, e, n) {
            n = n || 0;
            var i = this.gl;
            this._elements ? i.drawElements(t, e, this._elementsType, n) : i.drawArrays(t, n, e)
        }, e.exports = r
    }, {
        "./do-bind.js": 502
    }],
    504: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r, s) {
            this.location = t, this.dimension = e, this.a = n, this.b = i, this.c = r, this.d = s
        }

        function r(t, e, n) {
            this.gl = t, this._ext = e, this.handle = n, this._attribs = [], this._useElements = !1, this._elementsType = t.UNSIGNED_SHORT
        }

        function s(t, e) {
            return new r(t, e, e.createVertexArrayOES())
        }
        var o = t("./do-bind.js");
        i.prototype.bind = function(t) {
            switch (this.dimension) {
                case 1:
                    t.vertexAttrib1f(this.location, this.a);
                    break;
                case 2:
                    t.vertexAttrib2f(this.location, this.a, this.b);
                    break;
                case 3:
                    t.vertexAttrib3f(this.location, this.a, this.b, this.c);
                    break;
                case 4:
                    t.vertexAttrib4f(this.location, this.a, this.b, this.c, this.d)
            }
        }, r.prototype.bind = function() {
            this._ext.bindVertexArrayOES(this.handle);
            for (var t = 0; t < this._attribs.length; ++t) this._attribs[t].bind(this.gl)
        }, r.prototype.unbind = function() {
            this._ext.bindVertexArrayOES(null)
        }, r.prototype.dispose = function() {
            this._ext.deleteVertexArrayOES(this.handle)
        }, r.prototype.update = function(t, e, n) {
            if (this.bind(), o(this.gl, e, t), this.unbind(), this._attribs.length = 0, t)
                for (var r = 0; r < t.length; ++r) {
                    var s = t[r];
                    "number" == typeof s ? this._attribs.push(new i(r, 1, s)) : Array.isArray(s) && this._attribs.push(new i(r, s.length, s[0], s[1], s[2], s[3]))
                }
            this._useElements = !!e, this._elementsType = n || this.gl.UNSIGNED_SHORT
        }, r.prototype.draw = function(t, e, n) {
            n = n || 0;
            var i = this.gl;
            this._useElements ? i.drawElements(t, e, this._elementsType, n) : i.drawArrays(t, n, e)
        }, e.exports = s
    }, {
        "./do-bind.js": 502
    }],
    505: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            var o, a = t.getExtension("OES_vertex_array_object");
            return o = a ? r(t, a) : s(t), o.update(e, n, i), o
        }
        var r = t("./lib/vao-native.js"),
            s = t("./lib/vao-emulated.js");
        e.exports = i
    }, {
        "./lib/vao-emulated.js": 503,
        "./lib/vao-native.js": 504
    }],
    506: [function(t, e, n) {
        ! function() {
            "use strict";

            function t(e) {
                e.permitHostObjects___ && e.permitHostObjects___(t)
            }

            function n(t) {
                return !(t.substr(0, d.length) == d && "___" === t.substr(t.length - 3))
            }

            function i(t) {
                if (t !== Object(t)) throw new TypeError("Not an object: " + t);
                var e = t[m];
                if (e && e.key === t) return e;
                if (f(t)) {
                    e = {
                        key: t
                    };
                    try {
                        return u(t, m, {
                            value: e,
                            writable: !1,
                            enumerable: !1,
                            configurable: !1
                        }), e
                    } catch (n) {
                        return
                    }
                }
            }

            function r(t) {
                return t.prototype = null, Object.freeze(t)
            }

            function s() {
                _ || "undefined" == typeof console || (_ = !0, console.warn("WeakMap should be invoked as new WeakMap(), not WeakMap(). This will be an error in the future."))
            }
            if ("undefined" == typeof ses || !ses.ok || ses.ok()) {
                "undefined" != typeof ses && (ses.weakMapPermitHostObjects = t);
                var o = !1;
                if ("function" == typeof WeakMap) {
                    var a = WeakMap;
                    if ("undefined" != typeof navigator && /Firefox/.test(navigator.userAgent));
                    else {
                        var c = new a,
                            l = Object.freeze({});
                        if (c.set(l, 1), 1 === c.get(l)) return void(e.exports = WeakMap);
                        o = !0
                    }
                }
                var h = (Object.prototype.hasOwnProperty, Object.getOwnPropertyNames),
                    u = Object.defineProperty,
                    f = Object.isExtensible,
                    d = "weakmap:",
                    m = d + "ident:" + Math.random() + "___";
                if ("undefined" != typeof crypto && "function" == typeof crypto.getRandomValues && "function" == typeof ArrayBuffer && "function" == typeof Uint8Array) {
                    var p = new ArrayBuffer(25),
                        v = new Uint8Array(p);
                    crypto.getRandomValues(v), m = d + "rand:" + Array.prototype.map.call(v, function(t) {
                        return (t % 36).toString(36)
                    }).join("") + "___"
                }
                if (u(Object, "getOwnPropertyNames", {
                        value: function(t) {
                            return h(t).filter(n)
                        }
                    }), "getPropertyNames" in Object) {
                    var g = Object.getPropertyNames;
                    u(Object, "getPropertyNames", {
                        value: function(t) {
                            return g(t).filter(n)
                        }
                    })
                }! function() {
                    var t = Object.freeze;
                    u(Object, "freeze", {
                        value: function(e) {
                            return i(e), t(e)
                        }
                    });
                    var e = Object.seal;
                    u(Object, "seal", {
                        value: function(t) {
                            return i(t), e(t)
                        }
                    });
                    var n = Object.preventExtensions;
                    u(Object, "preventExtensions", {
                        value: function(t) {
                            return i(t), n(t)
                        }
                    })
                }();
                var _ = !1,
                    y = 0,
                    b = function() {
                        function t(t, e) {
                            var n, r = i(t);
                            return r ? l in r ? r[l] : e : (n = a.indexOf(t), n >= 0 ? c[n] : e)
                        }

                        function e(t) {
                            var e = i(t);
                            return e ? l in e : a.indexOf(t) >= 0
                        }

                        function n(t, e) {
                            var n, r = i(t);
                            return r ? r[l] = e : (n = a.indexOf(t), n >= 0 ? c[n] = e : (n = a.length, c[n] = e, a[n] = t)), this
                        }

                        function o(t) {
                            var e, n, r = i(t);
                            return r ? l in r && delete r[l] : (e = a.indexOf(t), !(e < 0) && (n = a.length - 1, a[e] = void 0, c[e] = c[n], a[e] = a[n], a.length = n, c.length = n, !0))
                        }
                        this instanceof b || s();
                        var a = [],
                            c = [],
                            l = y++;
                        return Object.create(b.prototype, {
                            get___: {
                                value: r(t)
                            },
                            has___: {
                                value: r(e)
                            },
                            set___: {
                                value: r(n)
                            },
                            delete___: {
                                value: r(o)
                            }
                        })
                    };
                b.prototype = Object.create(Object.prototype, {
                    get: {
                        value: function(t, e) {
                            return this.get___(t, e)
                        },
                        writable: !0,
                        configurable: !0
                    },
                    has: {
                        value: function(t) {
                            return this.has___(t)
                        },
                        writable: !0,
                        configurable: !0
                    },
                    set: {
                        value: function(t, e) {
                            return this.set___(t, e)
                        },
                        writable: !0,
                        configurable: !0
                    },
                    "delete": {
                        value: function(t) {
                            return this.delete___(t)
                        },
                        writable: !0,
                        configurable: !0
                    }
                }), "function" == typeof a ? ! function() {
                    function n() {
                        function e(t, e) {
                            return h ? l.has(t) ? l.get(t) : h.get___(t, e) : l.get(t, e)
                        }

                        function n(t) {
                            return l.has(t) || !!h && h.has___(t)
                        }

                        function i(t) {
                            var e = !!l["delete"](t);
                            return h ? h.delete___(t) || e : e
                        }
                        this instanceof b || s();
                        var c, l = new a,
                            h = void 0,
                            u = !1;
                        return c = o ? function(t, e) {
                            return l.set(t, e), l.has(t) || (h || (h = new b), h.set(t, e)), this
                        } : function(t, e) {
                            if (u) try {
                                l.set(t, e)
                            } catch (n) {
                                h || (h = new b), h.set___(t, e)
                            } else l.set(t, e);
                            return this
                        }, Object.create(b.prototype, {
                            get___: {
                                value: r(e)
                            },
                            has___: {
                                value: r(n)
                            },
                            set___: {
                                value: r(c)
                            },
                            delete___: {
                                value: r(i)
                            },
                            permitHostObjects___: {
                                value: r(function(e) {
                                    if (e !== t) throw new Error("bogus call to permitHostObjects___");
                                    u = !0
                                })
                            }
                        })
                    }
                    o && "undefined" != typeof Proxy && (Proxy = void 0), n.prototype = b.prototype, e.exports = n, Object.defineProperty(WeakMap.prototype, "constructor", {
                        value: WeakMap,
                        enumerable: !1,
                        configurable: !0,
                        writable: !0
                    })
                }() : ("undefined" != typeof Proxy && (Proxy = void 0), e.exports = b)
            }
        }()
    }, {}],
    507: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = a.get(t);
            if (!e || !t.isBuffer(e._triangleBuffer.buffer)) {
                var n = s(t, new Float32Array([-1, -1, -1, 4, 4, -1]));
                e = o(t, [{
                    buffer: n,
                    type: t.FLOAT,
                    size: 2
                }]), e._triangleBuffer = n, a.set(t, e)
            }
            e.bind(), t.drawArrays(t.TRIANGLES, 0, 3), e.unbind()
        }
        var r = "undefined" == typeof WeakMap ? t("weak-map") : WeakMap,
            s = t("gl-buffer"),
            o = t("gl-vao"),
            a = new r;
        e.exports = i
    }, {
        "gl-buffer": 490,
        "gl-vao": 505,
        "weak-map": 506
    }],
    508: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r, s, o) {
            this._gl = t, this._program = e, this._location = n, this._dimension = i, this._name = r, this._constFunc = s, this._relink = o
        }

        function r(t, e, n, r, s, o, a) {
            for (var c = ["gl", "v"], l = [], h = 0; h < r; ++h) c.push("x" + h), l.push("x" + h);
            c.push(["if(x0.length===void 0){return gl.vertexAttrib", r, "f(v,", l.join(), ")}else{return gl.vertexAttrib", r, "fv(v,x0)}"].join(""));
            var u = Function.apply(void 0, c),
                f = new i(t, e, n, r, o, u, a);
            Object.defineProperty(s, o, {
                set: function(e) {
                    return t.disableVertexAttribArray(f._location), u(t, f._location, e), e
                },
                get: function() {
                    return f
                },
                enumerable: !0
            })
        }

        function s(t, e, n, i) {
            for (var s = {}, o = 0, a = n.length; o < a; ++o) {
                var c = n[o],
                    l = c.name,
                    h = c.type,
                    u = t.getAttribLocation(e, l);
                switch (h) {
                    case "bool":
                    case "int":
                    case "float":
                        r(t, e, u, 1, s, l, i);
                        break;
                    default:
                        if (!(h.indexOf("vec") >= 0)) throw new Error("gl-shader: Unknown data type for attribute " + l + ": " + h);
                        var f = h.charCodeAt(h.length - 1) - 48;
                        if (f < 2 || f > 4) throw new Error("gl-shader: Invalid data type for attribute " + l + ": " + h);
                        r(t, e, u, f, s, l, i)
                }
            }
            return s
        }
        e.exports = s;
        var o = i.prototype;
        o.pointer = function(t, e, n, i) {
            var r = this._gl;
            r.vertexAttribPointer(this._location, this._dimension, t || r.FLOAT, !!e, n || 0, i || 0), this._gl.enableVertexAttribArray(this._location)
        }, Object.defineProperty(o, "location", {
            get: function() {
                return this._location
            },
            set: function(t) {
                t !== this._location && (this._location = t, this._gl.bindAttribLocation(this._program, t, this._name), this._gl.linkProgram(this._program), this._relink())
            }
        })
    }, {}],
    509: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = new Function("y", "return function(){return y}");
            return e(t)
        }

        function r(t, e, n, r) {
            function a(n) {
                var i = new Function("gl", "prog", "locations", "return function(){return gl.getUniform(prog,locations[" + n + "])}");
                return i(t, e, r)
            }

            function c(t, e, n) {
                switch (n) {
                    case "bool":
                    case "int":
                    case "sampler2D":
                    case "samplerCube":
                        return "gl.uniform1i(locations[" + e + "],obj" + t + ")";
                    case "float":
                        return "gl.uniform1f(locations[" + e + "],obj" + t + ")";
                    default:
                        var i = n.indexOf("vec");
                        if (!(0 <= i && i <= 1 && n.length === 4 + i)) {
                            if (0 === n.indexOf("mat") && 4 === n.length) {
                                var r = n.charCodeAt(n.length - 1) - 48;
                                if (r < 2 || r > 4) throw new Error("gl-shader: Invalid uniform dimension type for matrix " + name + ": " + n);
                                return "gl.uniformMatrix" + r + "fv(locations[" + e + "],false,obj" + t + ")"
                            }
                            throw new Error("gl-shader: Unknown uniform data type for " + name + ": " + n)
                        }
                        var r = n.charCodeAt(n.length - 1) - 48;
                        if (r < 2 || r > 4) throw new Error("gl-shader: Invalid data type");
                        switch (n.charAt(0)) {
                            case "b":
                            case "i":
                                return "gl.uniform" + r + "iv(locations[" + e + "],obj" + t + ")";
                            case "v":
                                return "gl.uniform" + r + "fv(locations[" + e + "],obj" + t + ")";
                            default:
                                throw new Error("gl-shader: Unrecognized data type for vector " + name + ": " + n)
                        }
                }
            }

            function l(t, e) {
                if ("object" != typeof e) return [
                    [t, e]
                ];
                var n = [];
                for (var i in e) {
                    var r = e[i],
                        s = t;
                    s += parseInt(i) + "" === i ? "[" + i + "]" : "." + i, "object" == typeof r ? n.push.apply(n, l(s, r)) : n.push([s, r])
                }
                return n
            }

            function h(i) {
                for (var s = ["return function updateProperty(obj){"], o = l("", i), a = 0; a < o.length; ++a) {
                    var h = o[a],
                        u = h[0],
                        f = h[1];
                    r[f] && s.push(c(u, f, n[f].type))
                }
                s.push("return obj}");
                var d = new Function("gl", "prog", "locations", s.join("\n"));
                return d(t, e, r)
            }

            function u(t) {
                switch (t) {
                    case "bool":
                        return !1;
                    case "int":
                    case "sampler2D":
                    case "samplerCube":
                        return 0;
                    case "float":
                        return 0;
                    default:
                        var e = t.indexOf("vec");
                        if (0 <= e && e <= 1 && t.length === 4 + e) {
                            var n = t.charCodeAt(t.length - 1) - 48;
                            if (n < 2 || n > 4) throw new Error("gl-shader: Invalid data type");
                            return "b" === t.charAt(0) ? s(n, !1) : s(n)
                        }
                        if (0 === t.indexOf("mat") && 4 === t.length) {
                            var n = t.charCodeAt(t.length - 1) - 48;
                            if (n < 2 || n > 4) throw new Error("gl-shader: Invalid uniform dimension type for matrix " + name + ": " + t);
                            return s([n, n])
                        }
                        throw new Error("gl-shader: Unknown uniform data type for " + name + ": " + t)
                }
            }

            function f(t, e, s) {
                if ("object" == typeof s) {
                    var o = d(s);
                    Object.defineProperty(t, e, {
                        get: i(o),
                        set: h(s),
                        enumerable: !0,
                        configurable: !1
                    })
                } else r[s] ? Object.defineProperty(t, e, {
                    get: a(s),
                    set: h(s),
                    enumerable: !0,
                    configurable: !1
                }) : t[e] = u(n[s].type)
            }

            function d(t) {
                var e;
                if (Array.isArray(t)) {
                    e = new Array(t.length);
                    for (var n = 0; n < t.length; ++n) f(e, n, t[n])
                } else {
                    e = {};
                    for (var i in t) f(e, i, t[i])
                }
                return e
            }
            var m = o(n, !0);
            return {
                get: i(d(m)),
                set: h(m),
                enumerable: !0,
                configurable: !0
            }
        }
        var s = t("dup"),
            o = t("./reflect");
        e.exports = r
    }, {
        "./reflect": 510,
        dup: 511
    }],
    510: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n = {}, i = 0; i < t.length; ++i)
                for (var r = t[i].name, s = r.split("."), o = n, a = 0; a < s.length; ++a) {
                    var c = s[a].split("[");
                    if (c.length > 1) {
                        c[0] in o || (o[c[0]] = []), o = o[c[0]];
                        for (var l = 1; l < c.length; ++l) {
                            var h = parseInt(c[l]);
                            l < c.length - 1 || a < s.length - 1 ? (h in o || (l < c.length - 1 ? o[h] = [] : o[h] = {}), o = o[h]) : e ? o[h] = i : o[h] = t[i].type
                        }
                    } else a < s.length - 1 ? (c[0] in o || (o[c[0]] = {}), o = o[c[0]]) : e ? o[c[0]] = i : o[c[0]] = t[i].type
                }
            return n
        }
        e.exports = i
    }, {}],
    511: [function(t, e, n) {
        arguments[4][485][0].apply(n, arguments)
    }, {
        dup: 485
    }],
    512: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i) {
            this.gl = t, this.handle = e, this.attributes = null, this.uniforms = null, this.types = null, this.vertexShader = n, this.fragmentShader = i
        }

        function r(t, e, n, i) {
            for (var r = 0; r < i.length; ++r) n[r] = t.getUniformLocation(e, i[r].name)
        }

        function s(t, e, n, r, s) {
            var o = t.createShader(t.VERTEX_SHADER);
            if (t.shaderSource(o, e), t.compileShader(o), !t.getShaderParameter(o, t.COMPILE_STATUS)) {
                var a = t.getShaderInfoLog(o);
                throw console.error("gl-shader: Error compling vertex shader:", a), new Error("gl-shader: Error compiling vertex shader:" + a)
            }
            var c = t.createShader(t.FRAGMENT_SHADER);
            if (t.shaderSource(c, n), t.compileShader(c), !t.getShaderParameter(c, t.COMPILE_STATUS)) {
                var a = t.getShaderInfoLog(c);
                throw console.error("gl-shader: Error compiling fragment shader:", a), new Error("gl-shader: Error compiling fragment shader:" + a)
            }
            var l = t.createProgram();
            if (t.attachShader(l, c), t.attachShader(l, o), s.forEach(function(e) {
                    "number" == typeof e.location && t.bindAttribLocation(l, e.location, e.name)
                }), t.linkProgram(l), !t.getProgramParameter(l, t.LINK_STATUS)) {
                var a = t.getProgramInfoLog(l);
                throw console.error("gl-shader: Error linking shader program:", a), new Error("gl-shader: Error linking shader program:" + a)
            }
            var h = new i(t, l, o, c);
            return h.updateExports(r, s), h
        }
        var o = t("./lib/create-uniforms"),
            a = t("./lib/create-attributes"),
            c = t("./lib/reflect");
        i.prototype.bind = function() {
            this.gl.useProgram(this.handle)
        }, i.prototype.dispose = function() {
            var t = this.gl;
            t.deleteShader(this.vertexShader), t.deleteShader(this.fragmentShader), t.deleteProgram(this.handle)
        }, i.prototype.updateExports = function(t, e) {
            var n = new Array(t.length),
                i = this.handle,
                s = this.gl,
                l = r.bind(void 0, s, i, n, t);
            l(), this.types = {
                uniforms: c(t),
                attributes: c(e)
            }, this.attributes = a(s, i, e, l), Object.defineProperty(this, "uniforms", o(s, i, t, n))
        }, e.exports = s
    }, {
        "./lib/create-attributes": 508,
        "./lib/create-uniforms": 509,
        "./lib/reflect": 510
    }],
    513: [function(t, e, n) {
        "use strict";
        e.exports = {
            ShaderPlayer2D: t("./ac-shader-player-2d/ShaderPlayer2D")
        }
    }, {
        "./ac-shader-player-2d/ShaderPlayer2D": 516
    }],
    514: [function(t, e, n) {
        "use strict";
        var i = function(t) {
                this.w = 0, this.x = 0, this.y = 0, this.z = 0, 0 !== t && (Array.isArray(t) ? this._setFromArray(t) : "object" == typeof t ? this._setFromObject(t) : "number" == typeof t ? this._setFromHexNumber(t) : "string" == typeof t && this._setFromHexString(t))
            },
            r = i.prototype;
        r._setFromArray = function(t) {
            this._replaceColorVals.apply(this, t)
        }, r._setFromObject = function(t) {
            this._replaceColorVals(t.r, t.g, t.b, t.a)
        }, r._setFromHexNumber = function(t) {
            this._setFromHexString(t.toString(16))
        }, r._setFromHexString = function(t) {
            var e = this._hexToRGB(t);
            this._setFromObject(e)
        }, r._replaceColorVals = function(t, e, n, i) {
            this._replaceColorVal("w", t), this._replaceColorVal("x", e), this._replaceColorVal("y", n), this._replaceColorVal("z", i)
        }, r._replaceColorVal = function(t, e) {
            "undefined" != typeof e && (e /= 255, e < 0 ? e = 0 : e > 1 && (e = 1), this[t] = e)
        }, r._hexToRGB = function(t) {
            var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            t = t.replace(e, function(t, e, n, i) {
                return e + e + n + n + i + i
            });
            var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return n ? {
                r: parseInt(n[1], 16),
                g: parseInt(n[2], 16),
                b: parseInt(n[3], 16)
            } : null
        }, e.exports = i
    }, {}],
    515: [function(t, e, n) {
        "use strict";
        var i = function(t) {
                this.extensions = {}, this.context = t
            },
            r = i.prototype;
        r.get = function(t) {
            if ("undefined" != typeof this.extensions[t]) return this.extensions[t];
            var e, n = this.context;
            return e = "EXT_texture_filter_anisotropic" === t ? n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic") : "WEBGL_compressed_texture_s3tc" === t ? n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc") : "WEBGL_compressed_texture_pvrtc" === t ? n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc") : n.getExtension(t), null === e ? (this.extensions[t] = null, null) : (this.extensions[t] = e, e)
        }, e.exports = i
    }, {}],
    516: [function(t, e, n) {
        "use strict";

        function i(t) {
            c.call(this), this.options = l(m, t || {}), this.clock = t.clock || u, this.className = t.className || this.className, this.activeClassName = t.activeClassName || this.activeClassName, this._currentSize = {}, this._textureController = null, this._texturesReady = !0, this._shouldUpdate = !0, this._progressValue = null, this._renderingReady = !1, this._didBindBreakpoint = !1, this._renderCount = 0, this._didRender = !1, this._textureKeyMap = {}, this._textureValMap = {}, this._textureUpdateMap = {}, this.devicePixelRatio = this._getDevicePixelRatio(), this._breakpointName = this.getCurrentBreakpointName(), this._setBreakpointSizes(), this._boundOnUpdate = this._onUpdate.bind(this), this._boundOnDraw = this._onDraw.bind(this), this.initialize(), this.domEmitter = new f(this.el), this.clock.on("update", this._boundOnUpdate), this.clock.on("draw", this._boundOnDraw), (this._getSizesLength() > 1 || this.options.reloadOnBreakpoint) && (this._didBindBreakpoint = !0, this._boundOnShaderPlayer2DBreakpoint = this._onShaderPlayer2DBreakpoint.bind(this), d.on("breakpoint", this._boundOnShaderPlayer2DBreakpoint)), this._bindDOMEvents()
        }
        var r = t("./WebGLRenderer"),
            s = t("./Color"),
            o = t("./TextureController"),
            a = t("./vertexShader"),
            c = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            l = t("@marcom/ac-object/defaults"),
            h = t("@marcom/ac-object/clone"),
            u = t("@marcom/ac-clock"),
            f = t("@marcom/ac-dom-emitter").DOMEmitter,
            d = t("@marcom/ac-viewport").Viewport,
            m = {
                sizes: {},
                vertexShader: a,
                antialias: !1,
                preserveDrawingBuffer: !1,
                transparent: !1,
                mipmap: 1,
                reloadOnBreakpoint: !1,
                clearColor: 0,
                autoClearColor: !1,
                allowXLarge: !1,
                backgroundOpacity: 0,
                vertexShadersPath: null,
                fragmentShadersPath: null,
                invertX: !1,
                invertY: !1,
                uniforms: {},
                minFilter: "LINEAR_MIPMAP_LINEAR",
                magFilter: "LINEAR"
            },
            p = {
                update: "update",
                draw: "draw",
                textureLoadStart: "texture-load-start",
                textureReloadStart: "texture-reload-start",
                textureLoad: "texture-load",
                texturesComplete: "textures-complete",
                resize: "resize"
            },
            v = i.prototype = Object.create(c.prototype);
        v.rendersBeforeVisible = 0, v.className = "webgl-object", v.activeClassName = "active", v.initialize = function() {
            this.options.uniforms = this._appendIncludedUniforms(this.options.uniforms), this.renderer = this.createRenderer(), this.options.textures && this._setTextureUniforms(this.options.textures), this._initializeRenderer(), this.el = this.renderer.el, this.el.className = this.className, this.setSize()
        }, v.load = function() {
            this._textureController && (this.trigger(p.textureLoadStart), this._textureController.load())
        }, v.start = function() {
            this.clock.start()
        }, v.stop = function() {
            this.clock.stop()
        }, v.render = function() {
            if (this.renderer && this._texturesReady) {
                if (this._didRender || (this._setInitialUniforms(), this._didRender = !0), this._renderCount++, !this._renderingReady) {
                    if (this._renderCount < this.rendersBeforeVisible) return;
                    this.setActive()
                }
                this.renderer.render(this.scene, this.camera)
            }
        }, v.createRenderer = function() {
            return new r(this, this._getRendererOptions())
        }, v.setClearColor = function(t) {
            t = t || this.options.clearColor, this.options.clearColor = t, this.renderer.setClearColor(this._getClearColor(t))
        }, v.setBackgroundOpacity = function(t) {
            this.options.backgroundOpacity = t, this.setClearColor()
        }, v.setTextureMagFilter = function(t, e) {
            var n = this.getTexture(t);
            return n || "undefined" === this.renderer.context[e] ? (n.texture.magFilter = this.renderer.context[e], !0) : null
        }, v.setTextureMinFilter = function(t, e) {
            var n = this.getTexture(t);
            return n || "undefined" === this.renderer.context[e] ? (n.texture.minFilter = this.renderer.context[e], !0) : null
        }, v.createTextureController = function(t) {
            t = t || {}, this.options.allowXLarge && (t.allowXLarge = !0), this.options.magFilter && (t.magFilter = this.options.magFilter), this.options.minFilter && (t.minFilter = this.options.minFilter), this._textureController = new o(this, t), this._boundOnTextureControllerLoad = this._onTextureControllerLoad.bind(this), this._boundOnTextureControllerComplete = this._onTextureControllerComplete.bind(this), this._boundOnTextureControllerReadyStateChanged = this._onTextureControllerReadyStateChanged.bind(this), this._textureController.on("load", this._boundOnTextureControllerLoad),
                this._textureController.on("complete", this._boundOnTextureControllerComplete), this._textureController.on("readystatechanged", this._boundOnTextureControllerReadyStateChanged)
        }, v.getSizesForBreakpoint = function(t) {
            return t = t || d.getBreakpoint().name, this.options.sizes[t] || (t = "defaults"), {
                name: t,
                sizes: this.options.sizes[t]
            }
        }, v.getUniform = function(t) {
            return this.renderer ? this.renderer.getUniform(t) : null
        }, v.setUniform = function(t, e) {
            return !!this.renderer && this.renderer.setUniform(t, e)
        }, v.getAttribute = function(t) {
            return this.renderer ? this.renderer.getAttribute(t) : null
        }, v.setAttribute = function(t, e) {
            return !!this.renderer && this.renderer.setAttribute(t, e)
        }, v.setUniforms = function(t) {
            if ("object" != typeof t) return !1;
            var e;
            for (e in t) t.hasOwnProperty(e) && this.setUniform(e, t[e])
        }, v.setSize = function(t, e) {
            "undefined" != typeof t && (this.width = t), "undefined" != typeof e && (this.height = e), this._setResolution(), this.renderer && this.renderer.setSize(this.width * this.devicePixelRatio, this.height * this.devicePixelRatio, this.options.mipmap), this.el && (this.el.style.width = this.width + "px", this.el.style.height = this.height + "px")
        }, v.setBasePath = function(t) {
            this._textureController && (this._textureController.options.basePath = t)
        }, v.setActive = function() {
            this.el.classList.add(this.activeClassName), this._renderingReady = !0
        }, v.setInactive = function() {
            this.el.classList.remove(this.activeClassName), this._renderCount = 0, this._renderingReady = !1
        }, v.getTexture = function(t) {
            return this.renderer && this._textureController ? ("undefined" != typeof this._textureKeyMap[t] && (t = this._textureKeyMap[t]), this._textureController.getTexture(t)) : null
        }, v.setTexture = function(t, e) {}, v.getCurrentBreakpointName = function() {
            var t = d.getBreakpoint().name;
            return this.options.allowXLarge || "xlarge" !== t || (t = "large"), t
        }, v.getTextures = function() {
            var t, e = {};
            for (t in this._textureKeyMap) this._textureKeyMap.hasOwnProperty(t) && (e[t] = this.getTexture(t));
            return e
        }, v.getTextureControllerTextures = function() {
            if (!this._textureController) return null;
            var t, e = {},
                n = this._textureController._textureLoader.textures;
            for (t in n) n.hasOwnProperty(t) && (e[t] = n[t].texture);
            return e
        }, v.refreshTexture = function(t) {
            this._textureUpdateMap[t] = !0
        }, v.destroy = function() {
            this.stop(), this._textureController && this._textureController.destroy(), this._didBindBreakpoint && d.off("breakpoint", this._boundOnShaderPlayer2DBreakpoint), this.domEmitter.destroy();
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null);
            c.prototype.destroy.call(this)
        }, v._onTextureControllerLoad = function(t) {
            this.trigger(p.textureLoad, t)
        }, v._onTextureControllerComplete = function() {
            this._texturesReady = !0, this.trigger(p.texturesComplete)
        }, v._onTextureControllerReadyStateChanged = function(t) {
            this._texturesReady = t.texturesReady
        }, v._setTextureUniforms = function(t) {
            var e, n, i = this.renderer.context;
            for (e in t) t.hasOwnProperty(e) && (n = t[e], this._textureController || this.createTextureController(), this._texturesRequired++, this._textureKeyMap[e] = n.name, this._textureValMap[n.name] = e, this.options.uniforms[e] = {
                type: "sampler2D",
                value: this._textureController.createTexture(i, n.name, n)
            })
        }, v._setTime = function(t) {
            this.setUniform("time", t)
        }, v._setResolution = function() {
            this.setUniform("resolution", [this.width, this.height])
        }, v._setPointer = function(t, e) {
            this.options.invertX && (t = 1 - t), this.options.invertY && (e = 1 - e), this.setUniform("pointer", [t, e])
        }, v._getDevicePixelRatio = function() {
            return this.options.devicePixelRatio ? this.options.devicePixelRatio : window.devicePixelRatio || 1
        }, v._onShaderPlayer2DBreakpoint = function(t) {
            var e = this.getCurrentBreakpointName();
            this._breakpointName !== e && (this._breakpointName = e, this._shouldChangeSize(e) && this._setBreakpointSizes(), this.options.reloadOnBreakpoint && this._textureController && (this._texturesReady = !1, this.setInactive(), this._textureController.load(), this.trigger(p.textureReloadStart)))
        }, v._getSizesLength = function() {
            return Object.keys(this.options.sizes).length
        }, v._shouldChangeSize = function(t) {
            var e = this.getSizesForBreakpoint(t);
            return e.sizes.width !== this._currentSize.sizes.width || e.sizes.height !== this._currentSize.sizes.height
        }, v._setBreakpointSizes = function() {
            var t = this.getSizesForBreakpoint();
            this._currentSize = t, this.setSize(t.sizes.width, t.sizes.height), this.trigger(p.resize)
        }, v._appendIncludedUniforms = function(t) {
            return t = t || {}, t.progress || (t.progress = {
                type: "float",
                value: 0
            }), t.time || (t.time = {
                type: "float",
                value: 0
            }), t.resolution || (t.resolution = {
                type: "vec2",
                value: [this.width, this.height]
            }), t.pointer || (t.pointer = {
                type: "vec2",
                value: [0, 0]
            }), h(t, !0)
        }, v._setInitialUniforms = function() {
            if (this.options && this.options.uniforms) {
                var t;
                for (t in this.options.uniforms) this.options.uniforms.hasOwnProperty(t) && this.setUniform(t, this.options.uniforms[t].value)
            }
        }, v._onUpdate = function(t) {
            this._setTime(t.time), this.trigger(p.update, t)
        }, v._onDraw = function(t) {
            this.render(), this.trigger(p.draw, t)
        }, v._refreshTexture = function(t) {
            var e = this.getTexture(t);
            return e ? void e.texture.setPixels(e.el) : null
        }, v._bindDOMEvents = function() {
            this.domEmitter.on("mousemove", this._handleMouseMove, this), this.domEmitter.on("touchmove", this._handleTouchMove, this)
        }, v._getClearColor = function(t) {
            var e = new s(t);
            return e.z = this.options.backgroundOpacity, e
        }, v._initializeRenderer = function() {
            this.renderer.initialize(this._getRendererOptions())
        }, v._getRendererOptions = function() {
            return {
                clearColor: this._getClearColor(this.options.clearColor),
                transparent: this.options.transparent,
                fragmentShader: this.options.fragmentShader,
                vertexShader: this.options.vertexShader,
                uniforms: this.options.uniforms,
                antialias: this.options.antialias
            }
        }, v._handleMouseMove = function(t) {
            this._setPointer(t.originalEvent.offsetX / this.width, 1 - t.originalEvent.offsetY / this.height)
        }, v._handleTouchMove = function(t) {
            this._setPointer(t.originalEvent.touches[0].offsetX / this.width, 1 - t.originalEvent.touches[0].offsetY / this.height)
        }, e.exports = i
    }, {
        "./Color": 514,
        "./TextureController": 517,
        "./WebGLRenderer": 518,
        "./vertexShader": 519,
        "@marcom/ac-clock": 11,
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-viewport": 561
    }],
    517: [function(t, e, n) {
        "use strict";
        var i, r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-object/defaults"),
            o = t("@marcom/ac-texture-loader").TextureLoader,
            a = function(t, e) {
                r.call(this), this.options = e || {}, this.controller = t, this.options.basePath = this.options.basePath || window.location.pathname, this._textureLoader = new o(this.options), this._texturesRequired = 0, this._texturesLoaded = 0, this._textureLoader.on("load", this._handleTextureLoaderLoaded.bind(this))
            };
        i = a.prototype = Object.create(r.prototype), i.createTexture = function(t, e, n) {
            if (this._textureLoader.textures[e]) throw 'Existing texture "' + e + '" already registered.';
            if (!t) throw "Textures require a WebGL context in order to be created.";
            return n = s(this.options, n || {}), this._textureLoader.createTexture(t, e, n), this._texturesRequired++, this.getTexture(e)
        }, i.getTexture = function(t) {
            return this._textureLoader ? this._textureLoader.textures[t] : null
        }, i.load = function(t) {
            if (t = s(this.options, t || {}), this._texturesLoaded = 0, this._textureLoader) {
                var e;
                for (e in this._textureLoader.textures) this._textureLoader.textures.hasOwnProperty(e) && this._textureLoader.load(e, t)
            }
        }, i.destroy = function() {
            this._textureLoader.destroy();
            var t;
            for (t in this) this.hasOwnProperty(t) && (this[t] = null);
            r.prototype.destroy.call(this)
        }, i._handleTextureLoaderLoaded = function(t) {
            if (this.controller && this.controller.renderer) {
                var e = this.controller._textureValMap[t.name],
                    n = t.el.width,
                    i = t.el.height;
                t.el instanceof HTMLVideoElement && (n = t.el.videoWidth, i = t.el.videoHeight), this._isPowerOfTwo(n) && this._isPowerOfTwo(i) ? (t.texture.generateMipmap(), this.options.magFilter && (t.texture.magFilter = t.texture.gl[this.options.magFilter]), this.options.minFilter && (t.texture.minFilter = t.texture.gl[this.options.minFilter])) : (t.texture.magFilter = t.texture.gl.LINEAR, t.texture.minFilter = t.texture.gl.LINEAR, t.texture.wrapT = t.texture.gl.CLAMP_TO_EDGE, t.texture.wrapS = t.texture.gl.CLAMP_TO_EDGE), this.controller.renderer.bindTexture(e)
            }
            this.trigger("load", t), this._texturesLoaded++, this._texturesLoaded === this._texturesRequired && this.trigger("complete")
        }, i._isPowerOfTwo = function(t) {
            return 0 === (t & t - 1)
        }, e.exports = a
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-texture-loader": 488
    }],
    518: [function(t, e, n) {
        "use strict";
        var i, r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("./ExtensionsController"),
            o = t("a-big-triangle"),
            a = t("gl-shader-core"),
            c = {
                clearDepth: 1,
                clearColor: [0, 0, 0, 0],
                clearStencil: 0
            },
            l = ["OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_standard_derivatives"],
            h = function(t, e) {
                r.call(this), this.options = this._initializeOptions(e), this.controller = t;
                var n = document.createElement("canvas"),
                    i = n.getContext("webgl", this.options) || n.getContext("experimental-webgl", this.options);
                return i ? (this.el = n, void(this.context = i)) : (this.trigger("error", "Unable to initialize WebGL"), null)
            };
        i = h.prototype = Object.create(h.prototype), i.initialize = function(t) {
            var e = this.context;
            this.options = this._initializeOptions(t), this._shouldClearColor = !0, this.options._transformedUniforms = this.transformShaderParameters(this.options.uniforms), this.options.attributes && (this.options._transformedAttributes = this.transformShaderParameters(this.options.attributes));
            var n = {};
            n.clearFlags = void 0 === this.options.clearFlags ? e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT : this.options.clearFlags;
            var i;
            for (i in c) c.hasOwnProperty(i) && (n[i] = c[i], "undefined" != typeof this.options[i] && (n[i] = this.options[i]));
            this._renderSettings = n, this.shader = this.createShader(e, this.options.vertexShader, this.options.fragmentShader, this.options._transformedUniforms, this.options._transformedAttributes), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !0), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), this.extensions = new s(this.context);
            var r = l.length;
            for (i = 0; i < r; i++) this.extensions.get(l[i]);
            this.bindShader()
        }, i.createShader = function(t, e, n, i, r) {
            var s = this._normalizeShaderParams({
                context: t,
                vertexShader: e,
                fragmentShader: n,
                uniforms: i || [],
                attributes: r || []
            });
            return a(s.context, s.vertexShader, s.fragmentShader, s.uniforms, s.attributes)
        }, i.linkProgram = function(t, e, n) {
            var i = t.createProgram();
            t.attachShader(i, e), t.attachShader(i, n), t.linkProgram(i), t.useProgram(i)
        }, i.bindShader = function() {
            this.shader.bind()
        }, i.bindTextures = function() {
            if (this.controller && this.controller.options && this.controller.options.textures) {
                var t, e = this.controller.options.textures;
                for (t in e) e.hasOwnProperty(t) && this.bindTexture(t)
            }
        }, i.bindTexture = function(t, e) {
            (e || this.controller._textureUpdateMap[t]) && (this.controller._refreshTexture(t), this.controller._textureUpdateMap[t] = !1);
            var n = this.controller.getTexture(t);
            n && (this.shader.uniforms[t] = n.texture.bind(n.unit))
        }, i.setClearColor = function(t) {
            this._renderSettings.clearColor = t, this._shouldClearColor = !0
        }, i.clearColor = function() {
            var t = this.context,
                e = this._renderSettings;
            t.bindFramebuffer(t.FRAMEBUFFER, null), e.clearFlags & t.STENCIL_BUFFER_BIT && t.clearStencil(e.clearStencil), e.clearFlags & t.COLOR_BUFFER_BIT && t.clearColor(e.clearColor.w, e.clearColor.x, e.clearColor.y, e.clearColor.z), e.clearFlags & t.DEPTH_BUFFER_BIT && t.clearDepth(e.clearDepth), e.clearFlags && t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT | t.STENCIL_BUFFER_BIT)
        }, i.render = function() {
            (this.options.autoClearColor || this._shouldClearColor) && (this.clearColor(), this._shouldClearColor = !1), this.bindShader(), this.bindTextures(), o(this.context)
        }, i.updateShader = function(t) {
            t = t || {}, t.uniforms && (t.uniforms = this.transformShaderParameters(t.uniforms)), t.vertexShader = t.vertexShader || this.options.vertexShader, t.fragmentShader = t.fragmentShader || this.options.fragmentShader, t.uniforms = t.uniforms || this.options.uniforms, t.attributes = t.attributes || this.options.attributes, t = this._normalizeShaderParams(t), this.shader.dispose(), this.shader = this.createShader(this.context, t.vertexShader, t.fragmentShader, t.uniforms, t.attributes), this.options.vertexShader = t.vertexShader, this.options.fragmentShader = t.fragmentShader, this.options.uniforms = t.uniforms, this.options.attributes = t.attributes
        }, i.getUniform = function(t) {
            return this._hasUniform(t) ? this.options.uniforms[t].value : null
        }, i.setUniform = function(t, e) {
            this._hasUniform(t) && (this.options.uniforms[t].value = e, this.shader.uniforms[t] = e)
        }, i.getAttribute = function(t, e) {
            return this.shader ? this.shader.attributes[t] : null
        }, i.setAttribute = function(t, e) {
            this.shader && (this.shader.attributes[t] = e)
        }, i.setSize = function(t, e, n) {
            var i = t * n,
                r = e * n;
            this.el.setAttribute("width", i), this.el.setAttribute("height", r), this.el.style.width = t + "px", this.el.style.height = e + "px", this.context.viewport(0, 0, 0 | i, 0 | r)
        }, i.transformShaderParameters = function(t) {
            t = t || {};
            var e, n = [];
            for (e in t) t.hasOwnProperty(e) && n.push({
                name: e,
                type: t[e].type
            });
            return n
        }, i.destroy = function() {
            this.shader.dispose(), r.prototype.destroy.call(this)
        }, i._normalizeShaderParams = function(t) {
            return this.options.setFloatPrecision !== !1 && (t.fragmentShader = "precision highp float;\n" + t.fragmentShader), t
        }, i._initializeOptions = function(t) {
            return t.alpha = t.transparent, t
        }, i._hasUniform = function(t) {
            return this.options || this.options.uniforms || this.options.uniforms[t]
        }, e.exports = h
    }, {
        "./ExtensionsController": 515,
        "@marcom/ac-event-emitter-micro": 183,
        "a-big-triangle": 507,
        "gl-shader-core": 512
    }],
    519: [function(t, e, n) {
        e.exports = "attribute vec3 position;\t\t\t\t\tvarying vec2 vUV;\t\t\t\t\tvoid main() {\t\t\t\t\t\tgl_Position = vec4(position, 1.0);\t\t\t\t\t\tvUV = position.xy * 0.5 + 0.5;\t\t\t\t\t}"
    }, {}],
    520: [function(t, e, n) {
        "use strict";
        e.exports = {
            SiriPlayer: t("./ac-siri-player/SiriPlayer")
        }
    }, {
        "./ac-siri-player/SiriPlayer": 521
    }],
    521: [function(t, e, n) {
        "use strict";

        function i(t) {
            t = t || {}, t.uniforms = o(a.uniforms, t.uniforms), t = o(a, t), r.call(this, t), this.setUniform("fj", this.getUniform("resolution")), this.on("update", this._updateChangedUniforms.bind(this))
        }
        var r = t("@marcom/ac-shader-player-2d").ShaderPlayer2D,
            s = t("./fragmentShader.js"),
            o = t("@marcom/ac-object/defaults"),
            a = {
                antialias: !1,
                mipmap: 1,
                alpha: !1,
                transparent: !1,
                fragmentShader: s,
                uniforms: {
                    fw: {
                        type: "float",
                        value: 0
                    },
                    fj: {
                        type: "vec2",
                        value: [0, 0]
                    },
                    ee: {
                        type: "float",
                        value: 1.5
                    },
                    kq: {
                        type: "float",
                        value: 0
                    },
                    et: {
                        type: "float",
                        value: .2
                    },
                    dq: {
                        type: "float",
                        value: 1.5
                    },
                    ww: {
                        type: "float",
                        value: .15
                    },
                    qa: {
                        type: "float",
                        value: .5
                    },
                    te: {
                        type: "float",
                        value: .05
                    },
                    jf: {
                        type: "vec2",
                        value: [0, 0]
                    },
                    qd: {
                        type: "vec2",
                        value: [1, 1]
                    }
                },
                sizes: {
                    defaults: {
                        width: 800,
                        height: 180
                    }
                }
            },
            c = i.prototype = Object.create(r.prototype);
        c._updateChangedUniforms = function(t) {
            this.setUniform("fw", this.getUniform("time") / 1e3), this.setUniform("fj", this.getUniform("resolution"));
            var e = this.getUniform("kq"),
                n = this.getUniform("ee"),
                i = (t.time - this.clock.lastFrameTime) / 1e3,
                r = e + i * n;
            this.setUniform("kq", r)
        }, e.exports = i
    }, {
        "./fragmentShader.js": 522,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-shader-player-2d": 513
    }],
    522: [function(t, e, n) {
        e.exports = "/* * Description : Array and textureless GLSL 2D/3D/4D simplex  *            noise functions. *     Author : Ian McEwan, Ashima Arts. * Maintainer : stegu *   Lastmod : 20110822 (ijm) *   License : Copyright (C) 2011 Ashima Arts. All rights reserved. *             Distributed under the MIT License. See LICENSE file. *             https://github.com/ashima/webgl-noise *             https://github.com/stegu/webgl-noise */vec3 mod289(vec3 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 mod289(vec4 x) {  return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 permute(vec4 x) {     return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){  return 1.79284291400159 - 0.85373472095314 * r;}float snoise(vec3 v)  {   const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);  vec3 i  = floor(v + dot(v, C.yyy) );  vec3 x0 =   v - i + dot(i, C.xxx) ;  vec3 g = step(x0.yzx, x0.xyz);  vec3 l = 1.0 - g;  vec3 i1 = min( g.xyz, l.zxy );  vec3 i2 = max( g.xyz, l.zxy );  vec3 x1 = x0 - i1 + C.xxx;  vec3 x2 = x0 - i2 + C.yyy;  vec3 x3 = x0 - D.yyy;  i = mod289(i);   vec4 p = permute( permute( permute(              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));  float n_ = 0.142857142857;  vec3  ns = n_ * D.wyz - D.xzx;  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  vec4 x_ = floor(j * ns.z);  vec4 y_ = floor(j - 7.0 * x_ );  vec4 x = x_ *ns.x + ns.yyyy;  vec4 y = y_ *ns.x + ns.yyyy;  vec4 h = 1.0 - abs(x) - abs(y);  vec4 b0 = vec4( x.xy, y.xy );  vec4 b1 = vec4( x.zw, y.zw );  vec4 s0 = floor(b0)*2.0 + 1.0;  vec4 s1 = floor(b1)*2.0 + 1.0;  vec4 sh = -step(h, vec4(0.0));  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;  vec3 p0 = vec3(a0.xy,h.x);  vec3 p1 = vec3(a0.zw,h.y);  vec3 p2 = vec3(a1.xy,h.z);  vec3 p3 = vec3(a1.zw,h.w);  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));  p0 *= norm.x;  p1 *= norm.y;  p2 *= norm.z;  p3 *= norm.w;  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);  m = m * m;  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),                                 dot(p2,x2), dot(p3,x3) ) );  }/**  * @copyright 2016 Apple Inc. All rights reserved. */varying vec2 vUV;uniform float fw;uniform vec2 fj;uniform float et;uniform float dq;uniform float ee;uniform float kq;uniform vec2 qd;uniform vec2 jf;uniform float ww;uniform float qa;uniform float te; void main() {if ((vUV.x< 1.0-qd.x-jf.x)||(vUV.y<1.0-qd.y-jf.y)){return;}vec2 ge=vUV+jf;float gd=snoise(vec3(0.,0.,fw));float wa=snoise(vec3(0.,0.,kq*3.))*0.3+0.7;float qf=snoise(vec3(0.,0.,kq*3.))*0.1+0.9;vec2 dz=vec2(kq+gd*0.1*ee,(ge.x-0.5)/et/qf);vec3 yf=abs(vec3(snoise(vec3(dz,1.0)),snoise(vec3(dz,5.0)),snoise(vec3(dz,9.0))))*0.5+0.01;yf *=min(1.,smoothstep(ww,qa+ww,ge.x)*smoothstep(1.-ww,1.-ww-qa,ge.x))*wa;vec3 ta=vec3(0.1);float da=abs(ge.y-0.5);vec3 kp=smoothstep(yf+(dq/fj.y),yf,vec3(da));kp*=smoothstep(0.25,0.0,yf)*0.7+0.3;kp*= min(1., smoothstep(0., te, ge.x)*smoothstep(1.,1.-te, ge.x));vec4 ca=vec4(1.0,0.176,0.333,ta.x)*kp.x;vec4 op=vec4(0.251,1.0,0.639,ta.y)*kp.y;vec4 sf=vec4(0.0,0.478,1.0,ta.z)*kp.z;gl_FragColor=1.0-(1.0-ca)*(1.0-op)*(1.0-sf);}"
    }, {}],
    523: [function(t, e, n) {
        arguments[4][185][0].apply(n, arguments)
    }, {
        "./ac-browser/BrowserData": 524,
        "./ac-browser/IE": 525,
        dup: 185
    }],
    524: [function(t, e, n) {
        arguments[4][186][0].apply(n, arguments)
    }, {
        "./data": 526,
        "@marcom/ac-polyfills/Array/prototype.filter": void 0,
        "@marcom/ac-polyfills/Array/prototype.some": void 0,
        dup: 186
    }],
    525: [function(t, e, n) {
        arguments[4][187][0].apply(n, arguments)
    }, {
        dup: 187
    }],
    526: [function(t, e, n) {
        arguments[4][188][0].apply(n, arguments)
    }, {
        dup: 188
    }],
    527: [function(t, e, n) {
        "use strict";
        e.exports = t("./ac-state-manager/StateManager")
    }, {
        "./ac-state-manager/StateManager": 528
    }],
    528: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!t) throw new Error("StateManager requires an array of states");
            s.call(this);
            for (var n = 0; n < t.length; n++) t[n] = c(l, t[n]);
            this.__DEBUG__ = e || !1, this.states = t, this.stateHistory = [], this.currentTimeout = []
        }
        t("@marcom/ac-polyfills/Element/prototype.classList");
        var r, s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = t("@marcom/ac-browser"),
            a = t("@marcom/ac-viewport").Viewport,
            c = (t("@marcom/ac-dom-traversal/querySelector"), t("@marcom/ac-object/defaults")),
            l = {
                viewports: [],
                features: [],
                browsers: [],
                scroll: null,
                loaded: !1,
                timeout: 0
            },
            h = s.prototype,
            r = i.prototype = Object.create(h);
        r.inspect = function() {
            this.timeoutStart = Date.now(), this.previousState = this.currentState || null, this.viewportName = a.getBreakpoint().name, this._appendStateHistory(this.previousState), this.clearState();
            for (var t = 0; t < this.states.length; t++) {
                if (this.checkState(this.states[t])) {
                    this.currentState = this.states[t], this.currentState.viewportName = this.viewportName, this.currentState.loaded || this.currentTimeout.push(this.states[t].className);
                    break
                }
                t + 1 === this.states.length && (this.currentState = this.states[t], this.currentState.viewportName = this.viewportName)
            }
            this.setState(), this.currentState.loaded || this.manage()
        }, r.manage = function() {
            this.currentState.timeout > 0 && (this.stateTimeout = setTimeout(this._onEndTimeout.bind(this), this.currentState.timeout))
        }, r.clearState = function() {
            this.stateTimeout && clearTimeout(this.stateTimeout);
            for (var t = 0; t < this.states.length; t++) document.documentElement.classList.remove(this.states[t].className)
        }, r.checkState = function(t) {
            return window.location.search && this.__DEBUG__ ? window.location.search === "?" + t.className : this.checkViewport(t) && this.checkFeature(t) && this.checkBrowser(t) && this.checkTimeout(t) && this.checkScroll(t)
        }, r.checkViewport = function(t) {
            for (var e = !1, n = 0; n < t.viewports.length; n++)
                if (t.viewports[n] == this.viewportName) {
                    e = !0;
                    break
                }
            return !t.viewports.length || e
        }, r.checkFeature = function(t) {
            for (var e = !0, n = 0; n < t.features.length; n++)
                if (!this._hasFeature(t.features[n])) {
                    e = !1;
                    break
                }
            return !(t.features.length > 0) || e
        }, r.checkBrowser = function(t) {
            for (var e = !1, n = o.name, i = 0; i < t.browsers.length; i++)
                if (t.browsers[i] === n) {
                    e = !0;
                    break
                }
            return !t.browsers.length || e
        }, r.checkTimeout = function(t) {
            var e = !0;
            return this.currentTimeout.length > 0 && (e = !1, this.currentTimeout.indexOf(t.className) < 0 && (e = !0)), e
        }, r.checkScroll = function(t) {
            var e = !0;
            return t.scroll && (e = t.scroll > window.scrollY), e
        }, r.setState = function() {
            this.stateTimeout && clearTimeout(this.stateTimeout), document.documentElement.classList.add(this.currentState.className), this.previousState ? this.previousState != this.currentState && this.trigger("statechange", {
                previousState: this.previousState,
                currentState: this.currentState,
                stateHistory: this.stateHistory
            }) : this.trigger("stateset", {
                currentState: this.currentState
            })
        }, r.destroyState = function() {
            for (var t = 0; t < this.states; t++) this.states[t].loaded = !1;
            this.stateHistory = [], this.currentTimeout = []
        }, r.onReady = function() {
            this.stateTimeout && clearTimeout(this.stateTimeout), this.currentState.loaded = !0, this.currentTimeout = []
        }, r._appendStateHistory = function(t) {
            t && this.stateHistory.push(t)
        }, r._onEndTimeout = function() {
            var t = {
                currentState: this.currentState
            };
            this.previousState && (t.previousState = this.previousState), this.trigger("statetimeout", t), this.currentState.timeout > 0 && this.inspect()
        }, r._hasFeature = function(t) {
            return document.documentElement.classList.contains(t)
        }, e.exports = i
    }, {
        "@marcom/ac-browser": 523,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-object/defaults": 446,
        "@marcom/ac-polyfills/Element/prototype.classList": void 0,
        "@marcom/ac-viewport": 561
    }],
    529: [function(t, e, n) {
        "use strict";
        var i = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        e.exports = t("./parseUserAgent")(i)
    }, {
        "./parseUserAgent": 532
    }],
    530: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                version: {
                    name: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    name: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }, {}],
    531: [function(t, e, n) {
        "use strict";
        e.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(t) {
                    return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Opera") === -1
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(t) {
                    return t.ua.indexOf("Safari") > -1 && t.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(t) {
                    return t.ua.indexOf("IE") > -1 || t.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var t = !1;
                    return document.documentMode && (t = parseInt(document.documentMode, 10)), t
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(t) {
                    return t.platform.indexOf("Win") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(t) {
                    return t.platform.indexOf("Mac") > -1
                }
            }, {
                name: "ios",
                test: function(t) {
                    return t.ua.indexOf("iPhone") > -1 || t.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(t) {
                    return t.platform.indexOf("Linux") > -1
                }
            }, {
                name: "fireos",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    532: [function(t, e, n) {
        "use strict";

        function i(t) {
            return new RegExp(t + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
        }

        function r(t, e) {
            if ("function" == typeof t.parseVersion) return t.parseVersion(e);
            var n = t.version || t.userAgent;
            "string" == typeof n && (n = [n]);
            for (var r, s = n.length, o = 0; o < s; o++)
                if (r = e.match(i(n[o])), r && r.length > 1) return r[1].replace(/_/g, ".")
        }

        function s(t, e, n) {
            for (var i, s, o = t.length, a = 0; a < o; a++)
                if ("function" == typeof t[a].test ? t[a].test(n) === !0 && (i = t[a].name) : n.ua.indexOf(t[a].userAgent) > -1 && (i = t[a].name), i) {
                    if (e[i] = !0, s = r(t[a], n.ua), "string" == typeof s) {
                        var c = s.split(".");
                        e.version.name = s, c && c.length > 0 && (e.version.major = parseInt(c[0] || 0), e.version.minor = parseInt(c[1] || 0), e.version.patch = parseInt(c[2] || 0))
                    } else "edge" === i && (e.version.name = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
                    return "function" == typeof t[a].parseDocumentMode && (e.version.documentMode = t[a].parseDocumentMode()), e
                }
            return e
        }

        function o(t) {
            var e = {};
            return e.browser = s(c.browser, a.browser, t), e.os = s(c.os, a.os, t), e
        }
        var a = t("./defaults"),
            c = t("./dictionary");
        e.exports = o
    }, {
        "./defaults": 530,
        "./dictionary": 531
    }],
    533: [function(t, e, n) {
        "use strict";

        function i(t) {
            r.call(this), this._initializeElement(t), o() && (this._updateViewport = this._updateViewport.bind(this), s(window, "resize", this._updateViewport), s(window, "orientationchange", this._updateViewport), this._retinaQuery = window.matchMedia(l), this._updateRetina(), this._retinaQuery.addListener && (this._updateRetina = this._updateRetina.bind(this), this._retinaQuery.addListener(this._updateRetina))), this._updateViewport()
        }
        t("@marcom/ac-polyfills/Function/prototype.bind"), t("@marcom/ac-polyfills/Object/keys"), t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            s = t("@marcom/ac-dom-events/utils/addEventListener"),
            o = t("@marcom/ac-feature/mediaQueriesAvailable"),
            a = "viewport-emitter",
            c = "::before",
            l = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
            h = i.prototype = Object.create(r.prototype);
        h.viewport = !1, h.retina = !1, h._initializeElement = function(t) {
            var e;
            t = t || a, e = document.getElementById(t), e || (e = document.createElement("div"), e.id = t, e = document.body.appendChild(e)), this._el = e
        }, h._getElementContent = function() {
            var t;
            return "currentStyle" in this._el ? t = this._el.currentStyle["x-content"] : (this._invalidateStyles(), t = window.getComputedStyle(this._el, c).content), t = t.replace(/["']/g, ""), !!t && t
        }, h._updateViewport = function() {
            var t, e = this.viewport;
            this.viewport = this._getElementContent(), this.viewport && (this.viewport = this.viewport.split(":").pop()), e && this.viewport !== e && (t = {
                from: e,
                to: this.viewport
            }, this.trigger("change", t), this.trigger("from:" + e, t), this.trigger("to:" + this.viewport, t))
        }, h._updateRetina = function(t) {
            var e = this.retina;
            this.retina = this._retinaQuery.matches, e !== this.retina && this.trigger("retinachange", {
                from: e,
                to: this.retina
            })
        }, h._invalidateStyles = function() {
            document.documentElement.clientWidth, this._el.innerHTML = " " === this._el.innerHTML ? " " : " ", document.documentElement.clientWidth
        }, e.exports = i
    }, {
        "@marcom/ac-dom-events/utils/addEventListener": 38,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-feature/mediaQueriesAvailable": 219,
        "@marcom/ac-polyfills/Function/prototype.bind": void 0,
        "@marcom/ac-polyfills/Object/create": void 0,
        "@marcom/ac-polyfills/Object/keys": void 0
    }],
    534: [function(t, e, n) {
        "use strict";
        var i = t("./ViewportEmitter");
        e.exports = new i
    }, {
        "./ViewportEmitter": 533
    }],
    535: [function(t, e, n) {
        arguments[4][19][0].apply(n, arguments)
    }, {
        "./ac-event-emitter/EventEmitter": 536,
        dup: 19
    }],
    536: [function(t, e, n) {
        arguments[4][20][0].apply(n, arguments)
    }, {
        dup: 20
    }],
    537: [function(t, e, n) {
        "use strict";
        e.exports = {
            BreakpointsDelegate: t("./ac-breakpoints-delegate/BreakpointsDelegate")
        }
    }, {
        "./ac-breakpoints-delegate/BreakpointsDelegate": 538
    }],
    538: [function(t, e, n) {
        "use strict";

        function i(t) {
            this._customEvent = new a(h, this._onBreakpointListenerAdded.bind(this), this._onBreakpointListenerRemoved.bind(this)), this.setBreakpoints(f)
        }
        var r = t("@marcom/ac-shared-instance").SharedInstance,
            s = t("@marcom/ac-object"),
            o = t("@marcom/ac-window-delegate").WindowDelegate,
            a = t("@marcom/ac-window-delegate").WindowDelegateCustomEvent,
            c = (t("@marcom/ac-event-emitter").EventEmitter, "ac-breakpoints-delegate:BreakpointsDelegate"),
            l = "2.1.1",
            h = "breakpoint",
            u = "resize orientationchange",
            f = {
                large: {
                    "min-width": 1069,
                    "max-width": 1441,
                    content: 980,
                    oldie: !0
                },
                xlarge: {
                    "min-width": 1442,
                    content: 980
                },
                medium: {
                    "min-width": 736,
                    "max-width": 1068,
                    content: 692
                },
                small: {
                    "min-width": 320,
                    "max-width": 735,
                    content: 288,
                    "max-device-width": 768
                }
            },
            d = {
                minWidth: "min-width",
                maxWidth: "max-width",
                maxDeviceWidth: "max-device-width",
                content: "content",
                oldIE: "oldie"
            },
            m = i.prototype;
        m.initialize = function() {
            this._breakpoint = null, this._lastBreakpoint = null, this._handleOldIE(), this._breakpointOrder = this._setBreakpointOrder(), this._isOldIE || this._handleResize()
        }, m.getCustomEvent = function() {
            return this._customEvent
        }, m.getBreakpoint = function() {
            return this._customEvent.active || this._handleResize(), this._breakpoint
        }, m.setBreakpoints = function(t) {
            this.breakpoints = s.clone(t), this.initialize()
        }, m._handleResize = function() {
            var t, e, n, i, r = o.clientWidth(),
                s = this._breakpointOrder.length;
            for (e = 0; e < s && (n = this._breakpointOrder[e], i = this.breakpoints[n], !(i._breakPosition > r)); e++);
            return e > 0 && (e -= 1), t = this.breakpoints[this._breakpointOrder[e]], this._breakpoint ? void(t.name !== this._breakpoint.name && (this._lastBreakpoint = this._breakpoint, this._breakpoint = t, o.trigger(h, {
                incoming: this._breakpoint,
                outgoing: this._lastBreakpoint
            }))) : void(this._breakpoint = t)
        }, m._setBreakpointOrder = function() {
            var t, e = 0,
                n = [],
                i = [],
                r = d.minWidth;
            for (t in this.breakpoints) this.breakpoints.hasOwnProperty(t) && (this.breakpoints[t].name = t, n.push(this.breakpoints[t][r]));
            return n.sort(function(t, e) {
                return t - e
            }), n.forEach(function(t) {
                var e;
                for (e in this.breakpoints) this.breakpoints.hasOwnProperty(e) && this.breakpoints[e][r] === t && i.push(e)
            }, this), i.forEach(function(t, n) {
                this.breakpoints[t]._breakPosition = e, i[n + 1] && (e = this.breakpoints[i[n + 1]][r])
            }, this), i
        }, m._handleOldIE = function() {
            var t = document.documentElement,
                e = d.oldIE;
            if (!(t.className.indexOf("no-" + e) > -1 || t.className.indexOf(e) === -1)) {
                this._isOldIE = !0, this._replaceBreakpoints(function(t) {
                    return t[e] === !0
                });
                var n;
                for (n in this.breakpoints)
                    if (this.breakpoints.hasOwnProperty(n)) return void(this._breakpoint = this.breakpoints[n])
            }
        }, m._replaceBreakpoints = function(t) {
            var e, n, i = {};
            for (e in this.breakpoints) this.breakpoints.hasOwnProperty(e) && (n = this.breakpoints[e], t(n) && (i[e] = s.clone(this.breakpoints[e])));
            this.breakpoints = i
        }, m._onBreakpointListenerAdded = function() {
            o.on(u, this._handleResize, this)
        }, m._onBreakpointListenerRemoved = function() {
            o.off(u, this._handleResize, this)
        }, e.exports = r.share(c, l, i)
    }, {
        "@marcom/ac-event-emitter": 535,
        "@marcom/ac-object": 443,
        "@marcom/ac-shared-instance": 539,
        "@marcom/ac-window-delegate": 543
    }],
    539: [function(t, e, n) {
        arguments[4][419][0].apply(n, arguments)
    }, {
        "./ac-shared-instance/SharedInstance": 540,
        dup: 419
    }],
    540: [function(t, e, n) {
        arguments[4][420][0].apply(n, arguments)
    }, {
        dup: 420
    }],
    541: [function(t, e, n) {
        arguments[4][19][0].apply(n, arguments)
    }, {
        "./ac-event-emitter/EventEmitter": 542,
        dup: 19
    }],
    542: [function(t, e, n) {
        arguments[4][20][0].apply(n, arguments)
    }, {
        dup: 20
    }],
    543: [function(t, e, n) {
        "use strict";
        e.exports = {
            WindowDelegate: t("./ac-window-delegate/WindowDelegate"),
            WindowDelegateOptimizer: t("./ac-window-delegate/WindowDelegateOptimizer"),
            WindowDelegateCustomEvent: t("./ac-window-delegate/WindowDelegateCustomEvent")
        }
    }, {
        "./ac-window-delegate/WindowDelegate": 546,
        "./ac-window-delegate/WindowDelegateCustomEvent": 547,
        "./ac-window-delegate/WindowDelegateOptimizer": 548
    }],
    544: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-event-emitter").EventEmitter,
            r = function() {
                this._emitter = new i, this._customEvents = {}
            },
            s = r.prototype;
        s.on = function(t, e, n) {
            return this._activateCustomEvents(t), this._emitterOn.apply(this, arguments),
                this
        }, s.once = function(t, e, n) {
            return this._emitterOnce.apply(this, arguments), this
        }, s.off = function(t, e, n) {
            return this._emitterOff.apply(this, arguments), this._deactivateCustomEvents(t), this
        }, s.has = function(t, e, n) {
            return this._emitter.has.apply(this._emitter, arguments)
        }, s.trigger = function() {
            return this._emitter.trigger.apply(this._emitter, arguments), this
        }, s.propagateTo = function() {
            return this._emitter.propagateTo.apply(this._emitter, arguments), this
        }, s.stopPropagatingTo = function() {
            return this._emitter.stopPropagatingTo.apply(this._emitter, arguments), this
        }, s.add = function(t) {
            this._customEvents[t.name] = t
        }, s.canHandleCustomEvent = function(t) {
            return this._customEvents.hasOwnProperty(t)
        }, s.isHandlingCustomEvent = function(t) {
            return !(!this._customEvents[t] || !this._customEvents[t].active)
        }, s._activateCustomEvents = function(t) {
            var e, n, i = t.split(" "),
                r = i.length;
            for (n = 0; n < r; n++) e = i[n], this._customEvents[e] && !this._customEvents[e].active && (this._customEvents[e].initialize(), this._customEvents[e].active = !0)
        }, s._deactivateCustomEvents = function(t) {
            var e;
            if (t && 0 !== t.length) {
                var n = t.split(" "),
                    i = n.length;
                for (e = 0; e < i; e++) this._deactivateCustomEvent(n[e])
            } else
                for (e in this._customEvents) this._customEvents.hasOwnProperty(e) && this._deactivateCustomEvent(e)
        }, s._deactivateCustomEvent = function(t) {
            !this.has(t) && this._customEvents[t] && this._customEvents[t].active && (this._customEvents[t].deinitialize(), this._customEvents[t].active = !1)
        }, s._emitterOn = function() {
            this._emitter.on.apply(this._emitter, arguments)
        }, s._emitterOnce = function() {
            this._emitter.once.apply(this._emitter, arguments)
        }, s._emitterOff = function() {
            this._emitter.off.apply(this._emitter, arguments)
        }, e.exports = r
    }, {
        "@marcom/ac-event-emitter": 541
    }],
    545: [function(t, e, n) {
        "use strict";
        var i, r = t("@marcom/ac-event-emitter").EventEmitter,
            s = function(t) {
                r.call(this), this.optimizers = t, this._events = {}, this._properties = {}, this._initialize()
            };
        i = s.prototype = new r(null), i.canOptimizeEvent = function(t) {
            return this._events.hasOwnProperty(t)
        }, i.canOptimizeProperty = function(t) {
            return this._properties.hasOwnProperty(t)
        }, i.isOptimizingEvent = function(t) {
            return !(!this._events[t] || !this._events[t].active)
        }, i.isOptimizingProperty = function(t) {
            return !(!this._properties[t] || !this._properties[t].active)
        }, i.add = function(t) {
            this._setOptimizerEvents(t), this._setOptimizerProperties(t), t.on("update", this._onUpdate, this), t.on("activate", this._onActivate, this), t.on("deactivate", this._onDeactivate, this)
        }, i.get = function(t) {
            return this.isOptimizingProperty(t) ? this._properties[t].value : null
        }, i.set = function(t, e) {
            return !!this._properties[t] && (this._properties[t].value = e, this)
        }, i.getOptimizerByEvent = function(t) {
            return this._events[t] ? this._events[t] : null
        }, i._initialize = function() {
            var t;
            for (t in this.optimizers) this.optimizers.hasOwnProperty(t) && this.add(this.optimizers[t])
        }, i._onUpdate = function(t) {
            this.set(t.prop, t.val)
        }, i._onActivate = function(t) {
            var e, n = t.propertyNames,
                i = n.length;
            for (e = 0; e < i; e++) this._properties[n[e]].active = !0
        }, i._onDeactivate = function(t) {
            var e, n = t.propertyNames,
                i = n.length;
            for (e = 0; e < i; e++) this._properties[n[e]].active = !1
        }, i._setOptimizerEvents = function(t) {
            var e, n = t.eventNames,
                i = n.length;
            for (e = 0; e < i; e++) this._setOptimizerEvent(n[e], t)
        }, i._setOptimizerEvent = function(t, e) {
            this._events[t] || (this._events[t] = e)
        }, i._setOptimizerProperties = function(t) {
            var e, n = t.propertyNames,
                i = n.length;
            for (e = 0; e < i; e++) this._setOptimizerProperty(n[e])
        }, i._setOptimizerProperty = function(t) {
            this._properties.hasOwnProperty(t) || (this._properties[t] = {}, this._properties[t].active = !1, this._properties[t].value = null)
        }, e.exports = s
    }, {
        "@marcom/ac-event-emitter": 541
    }],
    546: [function(t, e, n) {
        "use strict";

        function i() {
            this._emitter = new o(window), this._controllers = {
                optimizer: new a(h),
                customEvent: new c
            };
            var t;
            for (t in l) l.hasOwnProperty(t) && (this[t] = this._getProperty.bind(this, t), l[t] = l[t].bind(this));
            this._bindEvents()
        }
        var r, s = t("@marcom/ac-shared-instance").SharedInstance,
            o = t("@marcom/ac-dom-emitter").DOMEmitter,
            a = t("./OptimizerController"),
            c = t("./CustomEventController"),
            l = t("./queries/queries"),
            h = t("./optimizers/optimizers"),
            u = "ac-window-delegate:WindowDelegate",
            f = "3.0.2";
        r = i.prototype, r.on = function(t, e, n) {
            var i = this._seperateCustomEvents(t);
            return this._optimizeEvents(i.standardEvents), this._customEventOn(i.customEvents, e, n), this._emitterOn.apply(this, arguments), this
        }, r.once = function(t, e, n) {
            var i = this._seperateCustomEvents(t);
            return this._optimizeEvents(i.standardEvents), this._customEventOnce(i.customEvents, e, n), this._emitterOnce.apply(this, arguments), this
        }, r.off = function(t, e, n) {
            var i = this._seperateCustomEvents(t),
                r = !1;
            if (t || (r = !0), this._customEventOff(i.customEvents, e, n, r), this._emitterOff.apply(this, arguments), r) try {
                var s;
                for (s in this._controllers.optimizer._events) this._controllers.optimizer._events.hasOwnProperty(s) && this._shouldDeoptimizeEvent(s, !0) && this._deoptimizeEvent(s);
                this._bindEvents()
            } catch (o) {}
            return this
        }, r.has = function(t, e, n) {
            return this._emitter.has.apply(this._emitter, arguments)
        }, r.trigger = function() {
            return this._emitter.trigger.apply(this._emitter, arguments), this
        }, r.emitterTrigger = function() {
            return this._emitter.emitterTrigger.apply(this._emitter, arguments), this
        }, r.propagateTo = function() {
            return this._emitter.propagateTo.apply(this._emitter, arguments), this
        }, r.stopPropagatingTo = function() {
            return this._emitter.stopPropagatingTo.apply(this._emitter, arguments), this
        }, r.addOptimizer = function(t) {
            return this._controllers.optimizer.add(t), this
        }, r.addCustomEvent = function(t) {
            return this._controllers.customEvent.add(t), this
        }, r._emitterOn = function() {
            this._emitter.on.apply(this._emitter, arguments)
        }, r._emitterOnce = function() {
            this._emitter.once.apply(this._emitter, arguments)
        }, r._emitterOff = function() {
            this._emitter.off.apply(this._emitter, arguments)
        }, r._onEventUnbound = function(t) {
            var e = t.data.evt;
            this._shouldDeoptimizeEvent(e) && this._deoptimizeEvent(e)
        }, r._customEventOn = function(t, e, n) {
            0 !== t.length && this._controllers.customEvent.on(t.join(" "), e, n)
        }, r._customEventOnce = function(t, e, n) {
            0 !== t.length && this._controllers.customEvent.once(t.join(" "), e, n)
        }, r._customEventOff = function(t, e, n, i) {
            if (i || 0 !== t.length) return i && 0 === t.length ? void this._controllers.customEvent.off() : void this._controllers.customEvent.off(t.join(" "), e, n)
        }, r._getProperty = function(t, e) {
            var n = null;
            return e || (n = this._getOptimizedValue(t)), null === n && (n = l[t].call(this, e)), n
        }, r._optimizeEvents = function(t) {
            var e, n, i = t.length;
            for (n = 0; n < i; n++) e = t[n], this._shouldOptimizeEvent(e) && this._optimizeEvent(e)
        }, r._shouldOptimizeEvent = function(t) {
            return !(!this._controllers.optimizer.canOptimizeEvent(t) || this._controllers.optimizer.isOptimizingEvent(t))
        }, r._shouldDeoptimizeEvent = function(t, e) {
            return !(!this._controllers.optimizer.isOptimizingEvent(t) || !(e || this._emitter._eventEmitter._events[t].length <= 1))
        }, r._optimizeEvent = function(t) {
            var e = this._controllers.optimizer.getOptimizerByEvent(t);
            e.activate(), this._emitterOn(t, e.callback, e)
        }, r._deoptimizeEvent = function(t) {
            var e = this._controllers.optimizer.getOptimizerByEvent(t);
            e.deactivate(), this._emitterOff(t, e.callback, e)
        }, r._getOptimizedValue = function(t) {
            return this._controllers.optimizer.get(t)
        }, r._seperateCustomEvents = function(t) {
            var e = {
                customEvents: [],
                standardEvents: []
            };
            if ("string" == typeof t) {
                var n, i, r = t.split(" "),
                    s = r.length;
                for (i = 0; i < s; i++) n = r[i], this._controllers.customEvent.canHandleCustomEvent(n) ? e.customEvents.push(n) : e.standardEvents.push(n)
            }
            return e
        }, r._bindEvents = function() {
            this._emitter.on("dom-emitter:didoff", this._onEventUnbound, this)
        }, e.exports = s.share(u, f, i)
    }, {
        "./CustomEventController": 544,
        "./OptimizerController": 545,
        "./optimizers/optimizers": 551,
        "./queries/queries": 560,
        "@marcom/ac-dom-emitter": 21,
        "@marcom/ac-shared-instance": 539
    }],
    547: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            r.call(this), this.name = t, this.active = !1, this._initializeFunc = e, this._deinitializeFunc = n
        }
        var r = t("@marcom/ac-event-emitter").EventEmitter,
            s = i.prototype = new r(null);
        s.initialize = function() {
            return this._initializeFunc && this._initializeFunc(), this
        }, s.deinitialize = function() {
            return this._deinitializeFunc && this._deinitializeFunc(), this
        }, e.exports = i
    }, {
        "@marcom/ac-event-emitter": 541
    }],
    548: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            r.call(this), this.active = !1, this.eventNames = t.eventNames, this.propertyNames = t.propertyNames, this.options = t.options || {}, this.callback = e
        }
        var r = t("@marcom/ac-event-emitter").EventEmitter,
            s = i.prototype = new r(null);
        s.update = function(t, e) {
            this.trigger("update", {
                prop: t,
                val: e
            })
        }, s.activate = function() {
            this.active = !0, this.trigger("activate", this)
        }, s.deactivate = function() {
            this.active = !1, this.trigger("deactivate", this)
        }, e.exports = i
    }, {
        "@marcom/ac-event-emitter": 541
    }],
    549: [function(t, e, n) {
        "use strict";
        var i = t("../../WindowDelegateOptimizer"),
            r = t("../../queries/queries"),
            s = {
                eventNames: ["resize"],
                propertyNames: ["clientWidth", "clientHeight", "innerWidth", "innerHeight"]
            },
            o = new i(s, function(t) {
                var e, n = s.propertyNames,
                    i = n.length;
                for (e = 0; e < i; e++) this.update(n[e], r[n[e]](!0))
            });
        e.exports = o
    }, {
        "../../WindowDelegateOptimizer": 548,
        "../../queries/queries": 560
    }],
    550: [function(t, e, n) {
        "use strict";
        var i = t("../../WindowDelegateOptimizer"),
            r = t("../../queries/queries"),
            s = {
                eventNames: ["scroll"],
                propertyNames: ["scrollX", "scrollY", "maxScrollX", "maxScrollY"]
            },
            o = new i(s, function(t) {
                var e, n = s.propertyNames,
                    i = n.length;
                for (e = 0; e < i; e++) this.update(n[e], r[n[e]](!0))
            });
        e.exports = o
    }, {
        "../../WindowDelegateOptimizer": 548,
        "../../queries/queries": 560
    }],
    551: [function(t, e, n) {
        "use strict";
        var i = t("./events/resize"),
            r = t("./events/scroll");
        e.exports = [i, r]
    }, {
        "./events/resize": 549,
        "./events/scroll": 550
    }],
    552: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            return document.documentElement.clientHeight
        };
        e.exports = i
    }, {}],
    553: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            return document.documentElement.clientWidth
        };
        e.exports = i
    }, {}],
    554: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            return window.innerHeight || this.clientHeight(t)
        };
        e.exports = i
    }, {}],
    555: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            return window.innerWidth || this.clientWidth(t)
        };
        e.exports = i
    }, {}],
    556: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            return document.body.scrollWidth - this.innerWidth()
        };
        e.exports = i
    }, {}],
    557: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            return document.body.scrollHeight - this.innerHeight()
        };
        e.exports = i
    }, {}],
    558: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            var e = window.pageXOffset;
            if (!e) {
                var n = document.documentElement || document.body.parentNode || document.body;
                e = n.scrollLeft
            }
            return e
        };
        e.exports = i
    }, {}],
    559: [function(t, e, n) {
        "use strict";
        var i = function(t) {
            var e = window.pageYOffset;
            if (!e) {
                var n = document.documentElement || document.body.parentNode || document.body;
                e = n.scrollTop
            }
            return e
        };
        e.exports = i
    }, {}],
    560: [function(t, e, n) {
        "use strict";
        var i = t("./methods/innerWidth"),
            r = t("./methods/innerHeight"),
            s = t("./methods/clientWidth"),
            o = t("./methods/clientHeight"),
            a = t("./methods/scrollX"),
            c = t("./methods/scrollY"),
            l = t("./methods/maxScrollX"),
            h = t("./methods/maxScrollY");
        e.exports = {
            innerWidth: i,
            innerHeight: r,
            clientWidth: s,
            clientHeight: o,
            scrollX: a,
            scrollY: c,
            maxScrollX: l,
            maxScrollY: h
        }
    }, {
        "./methods/clientHeight": 552,
        "./methods/clientWidth": 553,
        "./methods/innerHeight": 554,
        "./methods/innerWidth": 555,
        "./methods/maxScrollX": 556,
        "./methods/maxScrollY": 557,
        "./methods/scrollX": 558,
        "./methods/scrollY": 559
    }],
    561: [function(t, e, n) {
        "use strict";
        e.exports = {
            Viewport: t("./ac-viewport/Viewport")
        }
    }, {
        "./ac-viewport/Viewport": 562
    }],
    562: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e, n = o;
            for (e in n) n.hasOwnProperty(e) ? this[e] = n[e] : r[e] = n[e];
            this.addCustomEvent(a.getCustomEvent())
        }
        var r, s = t("@marcom/ac-shared-instance").SharedInstance,
            o = t("@marcom/ac-window-delegate").WindowDelegate,
            a = t("@marcom/ac-breakpoints-delegate").BreakpointsDelegate,
            c = "ac-viewport:Viewport",
            l = "3.2.0";
        r = i.prototype, r.getBreakpoint = function() {
            return a.getBreakpoint()
        }, r.setBreakpoints = function(t) {
            return a.setBreakpoints(t)
        }, e.exports = s.share(c, l, i)
    }, {
        "@marcom/ac-breakpoints-delegate": 537,
        "@marcom/ac-shared-instance": 539,
        "@marcom/ac-window-delegate": 543
    }],
    563: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, o, c, l) {
            this.name = "HeroComponent_" + l, s.call(this, t, e, n, i, o, c, l);
            var h = (document.querySelector(".section-hero"), {
                    className: "hero-init",
                    viewports: [],
                    features: ["webgl"],
                    browsers: [],
                    timeout: 4e3
                }),
                u = {
                    className: "hero-fallback",
                    timeout: 0
                };
            this.hero = r, this.stateManager = new a([h, u]), this.rafWhenVisible = !1, this.destroyed = !1, this._ready = !1, this._boundSetState = this.setState.bind(this), this._boundTimeoutState = this.timeoutState.bind(this), this._boundChangeState = this.changeState.bind(this), this._boundOnReady = this.onReady.bind(this), this._degradeOnScroll = this._degradeOnScroll.bind(this)
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("./hero/full"),
            s = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
            o = s.prototype,
            a = t("@marcom/ac-state-manager"),
            c = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
            l = t("@marcom/ac-viewport-emitter"),
            h = t("@marcom/ac-classlist/add"),
            u = t("@marcom/ac-classlist/remove"),
            f = i.prototype = Object.create(s.prototype);
        i.prototype.constructor = i, i.IS_SUPPORTED = function() {
            var t = !c.IE && !c.EDGE && c.IS_DESKTOP && !c.REDUCED_MOTION && c.WEB_GL && "small" !== l.viewport;
            return t || (u(document.documentElement, "hero-full"), f._showLocalNav(!0)), t
        }, f.setState = function(t) {
            return "hero-init" === t.currentState.className ? void this.hero.initialize() : void this.destroy()
        }, f.changeState = function(t) {
            "hero-fallback" === t.currentState.className && this.destroy()
        }, f.timeoutState = function(t) {
            this.destroy()
        }, f.onReady = function() {
            window.removeEventListener("wheel", this._degradeOnScroll), this.stateManager.onReady(), this.section && this.section.trigger("loaded"), this._ready = !0, document.documentElement.classList.add("hero-ready")
        }, f.load = function() {
            return document.documentElement.classList.contains("hero-full") ? void this.stateManager.inspect() : void this.destroy()
        }, f.onBreakpoint = function(t, e, n, i) {
            this.destroyed || this.destroy()
        }, f.onResizeDebounced = function(t, e, n) {
            var i = document.documentElement.clientWidth;
            document.documentElement.classList.toggle("width-odd", !!(i % 2))
        }, f.onResizeImmediate = function(t, e, n) {
            if (!this.destroyed) {
                o.onResizeImmediate.call(this, t, e, n);
                var i = document.documentElement.clientWidth,
                    r = l.viewport;
                return i > 1055 && i < 1070 && "medium" !== r ? void this.destroy() : i > 720 && i < 736 && "small" !== r ? void this.destroy() : void 0
            }
        }, f.destroy = function() {
            this.destroyed || (this.destroyed = !0, window.removeEventListener("wheel", this._degradeOnScroll), this.stateManager.onReady(), this.hero.destroy(), this.stateManager.off(), !this._ready && this.section && this.section.trigger("loaded"), o.destroy.call(this))
        }, f.setupEvents = function() {
            o.setupEvents.call(this), this.stateManager.on("stateset", this._boundSetState), this.stateManager.on("statetimeout", this._boundTimeoutState), this.stateManager.on("statechange", this._boundChangeState), this.hero.on("ready", this._boundOnReady), window.addEventListener("wheel", this._degradeOnScroll, !1), this.section.on("loaded", this._showLocalNav)
        }, f._showLocalNav = function(t) {
            var e = document.getElementById("ac-localnav");
            e && (t && h(e, "no-transition"), h(e, "show-nav"))
        }, f._degradeOnScroll = function() {
            window.removeEventListener("wheel", this._degradeOnScroll), this.destroy()
        }, e.exports = i
    }, {
        "./hero/full": 570,
        "@marcom/ac-classlist/add": 1,
        "@marcom/ac-classlist/remove": 9,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 334,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 340,
        "@marcom/ac-polyfills/Object/create": void 0,
        "@marcom/ac-state-manager": 527,
        "@marcom/ac-viewport-emitter": 534
    }],
    564: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r, o, a) {
            this.name = "StorageComponent_" + a, s.call(this, t, e, n, i, r, o, a), this.sto_figure = document.getElementById("storage-infographic"), this.replay_btn = c("[data-replay]", this.section.element), this.rafWhenVisible = !1
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("./storage/storage_module"),
            s = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
            o = s.prototype,
            a = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
            c = t("@marcom/ac-dom-traversal/querySelector"),
            l = i.prototype = Object.create(s.prototype);
        i.prototype.constructor = i, i.IS_SUPPORTED = function() {
            return !a.IS_IE && a.CSS_TRANSFORMS && a.CSS_TRANSITIONS
        }, l.animateIn = function() {
            o.animateIn.call(this), this.storage_obj.shrink()
        }, l.setupEvents = function() {
            o.setupEvents.call(this), this.storage_obj = new r(this.sto_figure, this.replay_btn), this.storage_obj.expand(), this.storage_obj.label_size_check(), this.replay_btn.addEventListener("click", function() {
                this.storage_obj.shrink()
            }.bind(this))
        }, l.onResizeDebounced = function(t, e, n) {
            o.onResizeDebounced.call(this, t, e, n), this.storage_obj.label_size_check()
        }, l.onBreakpoint = function(t, e, n, i) {
            this.storage_obj.label_size_check()
        }, e.exports = i
    }, {
        "./storage/storage_module": 573,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 334,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 340,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    565: [function(t, e, n) {
        e.exports = {
            dock: "g Dock\nusemtl Dock\nv -79.88659 -46.896794 321.389839\nv 80.117131 -46.896794 321.389839\nv -79.88659 -56.717562 321.389839\nv 80.117131 -56.717562 321.389839\nv 26.423405 -46.896794 321.389839\nv 26.423405 -56.717562 321.389839\n\nvt 0.001691 0.440842 178.609375\nvt 0.453583 0.229385 178.609375\nvt 0.001691 0.249252 178.609375\nvt 0.453583 0.04303 178.609375\nvt 0.834595 0.440842 178.609375\nvt 0.011448 0.229385 178.609375\nvt 0.834595 0.249252 178.609375\nvt 0.011448 0.04303 178.609375\n\nf 5/6 2/2 4/4 6/8 \nf 6/7 3/3 1/1 5/5 \n\n",
            mountains: "g BackMountain_1\nusemtl BackMountain\nv 173.682869 -301.475705 -541.904405\nv 597.2638 -108.125749 -678.925316\nv 575.506946 -89.642058 -678.925316\nv 544.836796 -79.668144 -678.925316\nv 511.64077 -77.330491 -678.925316\nv 486.238791 -82.1929 -678.925316\nv 465.168352 -72.468082 -678.925316\nv 433.562692 -58.691256 -678.925316\nv 412.492253 -64.364066 -678.925316\nv 401.146631 -58.691256 -678.925316\nv 385.749002 -59.501657 -678.925316\nv 373.592979 -69.226476 -678.925316\nv 348.470532 -94.348923 -678.925316\nv 293.363229 -100.021733 -678.925316\nv 240.68713 -104.073741 -678.925316\nv 192.87344 -148.645825 -678.925316\nv 169.371795 -190.786704 -678.925316\nv 400.663431 -169.650903 -579.417904\nv 294.059215 -199.184932 -579.417904\nv 348.563626 -195.131242 -579.417904\nv 597.2638 -162.253088 -613.508472\nv 543.99303 -142.983831 -613.508472\nv 512.197189 -139.714997 -613.508472\nv 484.09428 -134.930168 -613.508472\nv 461.356202 -129.931531 -613.508472\nv 444.432861 -128.178693 -613.508472\nv 431.489143 -124.485935 -613.508472\nv 412.492253 -126.372403 -613.508472\nv 401.146631 -121.721203 -613.508472\nv 385.749002 -122.38566 -613.508472\nv 373.592979 -130.359146 -613.508472\nv 348.470532 -150.957317 -613.508472\nv 293.363229 -155.608517 -613.508472\nv 240.68713 -158.930802 -613.508472\nv 192.87344 -195.475945 -613.508472\nv 169.371795 -230.027715 -613.508472\nv 385.434257 -170.230002 -579.417904\nv 241.95941 -202.080425 -579.417904\nv 194.668818 -233.930848 -579.417904\nv 591.742274 -251.988419 -541.904405\nv 539.695621 -237.918504 -541.904405\nv 508.630423 -235.531686 -541.904405\nv 481.173294 -232.037926 -541.904405\nv 458.957719 -228.388051 -541.904405\nv 442.423262 -227.108173 -541.904405\nv 429.77698 -224.411817 -541.904405\nv 411.216622 -225.789267 -541.904405\nv 400.131713 -222.393081 -541.904405\nv 385.087909 -222.87825 -541.904405\nv 373.211221 -228.700284 -541.904405\nv 348.666067 -243.740538 -541.904405\nv 294.825083 -247.136724 -541.904405\nv 243.359436 -249.562571 -541.904405\nv 196.644465 -276.246893 -541.904405\nv 171.42429 -264.043975 -579.417904\nv 373.411225 -177.179185 -579.417904\nv 594.635011 -204.975918 -579.417904\nv 541.947041 -188.182059 -579.417904\nv 510.499058 -185.333151 -579.417904\nv 482.703604 -181.162998 -579.417904\nv 460.214289 -176.806504 -579.417904\nv 443.476094 -175.278841 -579.417904\nv 430.673985 -172.060468 -579.417904\nv 411.884927 -173.704594 -579.417904\nv -105.515649 125.135138 -352.108255\nv -160.043712 120.723952 -400.376747\nv -177.83744 103.463604 -420.514984\nv -184.194942 67.471718 -413.101378\nv -184.208768 34.056247 -355.953037\nv -161.675281 -8.357352 -270.371991\nv -136.59516 -19.651125 -236.357956\nv -122.686499 -28.089005 -213.977983\nv -89.326367 -20.039982 -259.51231\nv -62.992687 19.296875 -285.822743\nv -36.185509 56.466749 -379.982311\nv -44.80939 68.895636 -385.895968\nv -147.605102 21.340885 -306.235866\nv -131.457707 14.213354 -330.361995\nv -96.067696 27.226186 -315.010911\nv -70.704454 55.449914 -305.780651\nv -92.312962 -6.91818 -290.42612\nv -113.90692 -19.44505 -271.372362\nv -67.490571 98.334127 -400.386095\nv -166.31722 52.857982 -366.15318\nv -139.937459 53.132722 -357.351704\nv -117.469839 69.18694 -349.950974\nv -84.151174 89.882986 -333.08967\nv -81.558872 111.27177 -396.795836\nv -165.405729 75.922158 -401.795428\nv -144.250329 90.652223 -384.65633\nv -92.91001 104.14627 -341.604279\nv -42.238279 36.33594 -354.988481\nv -28.244733 68.303477 -352.584665\nv -7.409846 41.437951 -377.829581\nv -25.839943 0.89429 -322.899081\nv -43.545472 11.425848 -337.167742\nv -28.711525 35.974771 -340.006618\nv -14.758357 25.272245 -355.927506\nv -28.270427 51.584152 -346.616582\nv -27.206751 20.117558 -331.87048\nv -20.251669 13.187718 -339.554808\nv -0.491919 45.787148 -383.722082\nv 7.967524 36.671261 -371.37144\nv -5.436644 24.797047 -355.283684\nv -2.068468 39.094781 -374.654941\nv 22.05032 57.836608 -311.748988\nv 33.070168 55.761991 -320.14184\nv 44.144328 48.494073 -342.109532\nv 73.337381 29.044813 -371.179232\nv 70.0096 8.487832 -335.503888\nv 56.18254 -17.486796 -302.171856\nv 43.821014 -45.823489 -264.417465\nv 25.631127 -66.407881 -231.714867\nv 10.948274 -81.381102 -211.428427\nv -5.670002 -104.291529 -180.388281\nv -13.915262 -107.748631 -175.704433\nv -26.370398 -96.452726 -191.008667\nv -27.644406 -74.625796 -220.58084\nv -72.96793 -16.23228 -246.990202\nv -10.885643 -23.087813 -290.406976\nv -14.078356 6.438707 -330.410924\nv 64.654958 -1.571054 -323.187395\nv 22.232957 46.141846 -293.848841\nv 16.890023 31.642575 -284.236288\nv 12.173027 14.263625 -275.750647\nv -0.626962 -18.607031 -258.400032\nv 33.236215 36.517818 -306.697531\nv 29.947036 23.136963 -292.142934\nv 25.850449 5.180905 -278.358246\nv 13.652083 -23.224436 -260.974109\nv 41.991071 33.416508 -316.92526\nv 44.524399 14.920974 -298.560193\nv 39.686648 -2.171401 -285.13682\nv 30.052539 -33.187151 -264.434894\nv 55.900814 48.196258 -369.439742\nv 59.355977 13.327381 -339.744029\nv 5.753561 -78.52784 -215.294165\nv -12.48391 -70.797033 -218.93379\nv -5.827111 -95.732551 -191.984395\nv -20.883238 -86.315036 -203.674354\nv -27.175911 -82.652286 -209.706166\nv 17.244669 -61.456189 -238.423657\nv -3.229815 -53.699825 -237.2552\nv -15.168016 -47.71812 -248.609305\nv -18.45096 -45.326598 -260.276801\nv -90.225899 13.444595 -304.114408\nv -116.516957 -2.071968 -303.085005\nv -133.992363 -10.533569 -271.602195\nv -152.66364 -8.884331 -259.457144\nv 75.198566 21.026235 -347.27277\nv 91.633018 21.511409 -334.735176\nv 110.218405 11.096153 -316.683631\nv 127.329704 5.96009 -293.119323\nv 135.263182 -11.074299 -306.683462\nv 138.233223 -24.551741 -288.423575\nv 124.326909 -41.588303 -265.341624\nv 115.613658 -53.556375 -249.126705\nv 119.523673 -64.042379 -234.919763\nv 106.358615 -87.500526 -203.137538\nv 102.183872 -103.672445 -181.227046\nv 100.396215 -125.466655 -151.699202\nv 90.950049 -143.573332 -127.167408\nv 70.230989 -164.418807 -98.924956\nv 47.588535 -182.183645 -55.479766\nv 40.572639 -164.107791 -91.465037\nv 28.29589 -141.568312 -129.883904\nv 16.642489 -128.998218 -146.914472\nv 6.336665 -107.7157 -175.749049\nv 20.864485 -86.885918 -203.970239\nv 33.161545 -69.80288 -227.115159\nv 47.01293 -44.234972 -253.68657\nv 62.894392 -16.233159 -285.193616\nv 70.060517 -1.976322 -300.443801\nv 80.085864 -154.503804 -112.358278\nv 78.922177 4.171619 -315.461813\nv 75.131553 -8.227725 -297.029246\nv 68.857869 -21.69418 -292.295137\nv 51.592931 -48.766372 -255.61643\nv 37.899403 -70.948403 -225.563149\nv 27.035988 -88.159883 -202.244209\nv 14.543819 -109.264558 -173.650583\nv 84.033805 3.773028 -309.341719\nv 80.514794 -7.778686 -288.144826\nv 77.739021 -18.969721 -275.888772\nv 58.422961 -44.121457 -249.827511\nv 45.731847 -72.842138 -222.997426\nv 38.523503 -90.531218 -199.031411\nv 36.345486 -113.378977 -168.07617\nv 35.538353 -132.704562 -141.892939\nv 36.412853 -143.595672 -127.13714\nv 105.47266 -3.188222 -274.500816\nv 107.373452 -14.579122 -257.837554\nv 92.038341 -26.174999 -227.435859\nv 90.71884 -42.421416 -207.101114\nv 77.209025 -68.400695 -187.835715\nv 65.304525 -93.592638 -173.094341\nv 60.66266 -117.968123 -161.858574\nv 56.41272 -136.798981 -136.345624\nv 52.612855 -147.641918 -121.655091\nv 48.733018 -165.800193 -94.052252\nv 114.945571 -3.230197 -271.28475\nv 106.909011 -58.683318 -232.310916\nv -262.507876 -166.634135 -93.963544\nv -262.816924 -159.242407 -105.026098\nv 91.457582 -78.950556 -197.245148\nv 85.079776 -99.854142 -178.951471\nv 77.375212 -121.122122 -157.585384\nv 72.287402 -139.912732 -132.126963\nv 64.999048 -150.735596 -117.463627\nv 58.528085 -163.516576 -97.227297\nv 56.784491 -173.19183 -82.598991\nv 101.199846 16.150156 -349.668655\nv 97.722587 -4.93311 -308.605875\nv 93.095377 -20.409434 -294.035772\nv 87.484494 -34.387478 -275.097647\nv 73.73104 -53.744706 -248.871545\nv 54.5597 -74.976543 -220.105632\nv 47.568674 -92.398387 -196.501681\nv 45.331377 -115.074798 -165.77859\nv 45.920991 -134.741072 -139.133777\nv 43.598992 -145.390541 -124.705364\nv 43.349329 -165.505874 -92.461319\nv 43.478189 -170.992696 -80.923064\nv 74.209589 10.163887 -319.425951\nv 83.43648 21.269433 -340.988191\nv -37.188924 -7.435994 -311.612811\nv -39.464462 -32.454784 -277.716154\nv -50.005378 -41.679442 -265.218144\nv -52.879688 -60.554281 -239.645605\nv -46.458737 -75.78398 -219.011678\nv -39.933907 -91.06731 -198.305088\nv -42.701643 -111.380257 -170.784131\nv -33.836501 -122.719999 -155.420505\nv -23.296231 -144.352665 -126.111529\nv -14.829051 -159.052945 -106.194884\nv -7.571371 -164.615626 -79.583819\nv -9.431186 -178.257922 -55.602884\nv -83.751882 -180.120657 -57.004615\nv -88.988917 -146.972231 -76.677757\nv -92.444281 -134.534764 -95.815056\nv -99.814537 -119.461405 -109.837192\nv -102.939746 -105.69108 -125.893379\nv -107.367001 -96.613023 -140.368118\nv -108.45945 -80.175497 -152.630247\nv -103.733901 -54.064416 -196.379553\nv -107.842902 -32.022157 -215.089839\nv -70.293346 3.649988 -279.653541\nv -77.388582 1.537725 -282.181263\nv -83.062368 5.658121 -295.261137\nv -53.111974 11.677753 -310.231931\nv -58.087954 1.716107 -271.984031\nv -59.657547 -15.599873 -251.546372\nv -63.805706 -34.959488 -233.688637\nv -66.708183 -57.635439 -205.415364\nv -63.280155 -73.341312 -191.744915\nv -61.132732 -88.216995 -172.531049\nv -59.540679 -101.752493 -150.408368\nv -56.063348 -115.006887 -131.160194\nv -45.998416 -135.394966 -100.013579\nv -36.411115 -147.132852 -86.760499\nv -30.47133 -178.661148 -55.969852\nv -31.297635 -159.906672 -74.104251\nv -81.613222 -164.023541 -66.33493\nv -55.37365 61.559601 -365.697275\nv -75.593773 93.624795 -377.064243\nv -89.112369 107.437212 -380.754732\nv 140.215726 -8.092433 -269.941827\nv 163.252851 -20.465909 -260.904263\nv 153.18079 -39.650012 -267.967713\nv 143.156732 -57.742063 -243.455734\nv 136.895741 -71.854926 -224.334949\nv 124.374265 -88.914476 -201.221851\nv 120.73874 -104.747116 -179.771029\nv 118.680494 -126.003565 -150.971772\nv 113.318231 -145.960186 -123.933582\nv 110.991267 -159.225446 -105.961171\nv 96.978582 -170.049136 -91.296715\nv 89.803931 -182.133541 -56.074651\nv 92.940737 -174.394015 -81.886108\nv 139.44465 -23.396262 -244.101645\nv 136.415871 -35.731306 -230.776861\nv 128.191843 -47.622514 -214.190224\nv 124.206608 -65.276092 -205.617866\nv 116.786174 -84.871399 -185.987365\nv 111.993394 -104.240598 -170.213971\nv 109.253438 -123.095554 -146.787954\nv 101.864588 -144.737996 -125.589465\nv 94.31147 -156.677153 -109.413721\nv 83.421132 -167.195313 -95.163213\nv 74.080273 -173.686157 -82.79356\nv 69.818249 -182.157261 -55.955509\nv 130.33389 -6.709169 -294.224034\nv 125.815947 -16.127037 -277.622315\nv 109.154401 -44.130013 -250.337216\nv 115.043748 -29.636902 -265.709439\nv 183.098523 -45.041332 -260.663294\nv 181.740387 -61.21472 -238.750811\nv 183.90865 -81.108655 -211.797551\nv 176.265493 -96.220249 -191.323638\nv 164.98409 -110.54232 -171.919409\nv 155.377322 -128.933559 -147.002075\nv 143.026279 -148.307949 -120.752721\nv 142.276378 -161.780291 -102.499744\nv 141.645465 -171.796198 -88.929712\nv 139.522228 -175.876129 -79.583403\nv 134.166242 -183.039442 -57.957834\nv 161.224878 -26.426235 -247.273561\nv 152.703323 -51.657481 -194.523108\nv 146.077147 -72.343283 -164.458421\nv 143.854116 -90.054732 -149.033034\nv 140.572092 -103.740935 -139.342212\nv 134.415339 -124.471436 -127.245921\nv 128.532953 -142.789996 -112.084738\nv 124.498097 -160.328458 -104.466757\nv 121.591333 -171.011818 -89.992428\nv 122.540353 -175.142402 -80.519357\nv 123.142536 -182.814332 -55.756287\nv 157.159017 -26.842516 -272.644956\nv 158.076663 -20.06998 -281.575384\nv 197.932546 -45.051119 -194.079898\nv 144.396783 -181.329585 -56.104051\nv 233.13433 -70.286138 -217.963996\nv 258.556351 -90.741741 -198.746185\nv 241.18298 -109.551156 -173.262286\nv 234.137265 -119.005227 -160.453456\nv 223.955691 -129.072642 -146.813638\nv 209.821604 -140.252995 -131.665959\nv 185.929003 -156.53187 -109.610557\nv 179.756579 -164.384297 -91.035737\nv 171.062419 -173.707408 -82.626506\nv 169.326993 -176.596069 -77.694703\nv 163.92352 -182.644671 -57.773955\nv 248.176999 -101.979026 -183.521371\nv 219.957772 -74.432844 -184.524215\nv 214.649638 -90.084667 -168.023273\nv 208.999147 -100.535468 -153.295927\nv 202.806929 -109.50459 -141.369594\nv 193.49412 -129.172116 -126.93948\nv 176.011453 -147.427463 -107.35362\nv 167.463879 -163.14318 -90.809452\nv 160.212835 -174.411215 -85.386762\nv 156.362519 -176.728189 -78.430643\nv 154.856124 -181.527112 -57.007575\nv 196.373434 -55.626427 -184.334208\nv 189.842213 -73.021218 -161.367639\nv 184.514751 -85.22588 -147.827187\nv 180.639987 -100.908205 -136.090771\nv 171.963895 -119.587869 -124.319019\nv 162.431854 -141.473561 -106.420936\nv 155.418493 -163.521185 -100.141097\nv 150.956013 -173.10749 -87.153111\nv 147.10206 -176.697079 -79.334483\nv 278.205222 -99.834832 -185.148542\nv 266.20289 -118.22047 -161.516682\nv 254.615579 -133.625286 -140.645498\nv 246.741359 -148.497788 -120.495518\nv 245.598288 -162.95032 -100.914532\nv 246.735381 -170.407707 -90.810907\nv 247.171046 -176.279209 -82.855914\nv 245.882806 -180.876701 -76.627011\nv 244.472203 -186.151303 -73.968958\nv 262.163104 -123.591186 -154.240178\nv 270.435735 -109.223103 -173.706747\nv 270.249631 -86.224324 -186.600004\nv 258.918387 -91.784753 -161.956064\nv 252.334812 -100.860443 -147.819669\nv 247.235261 -109.577016 -133.124046\nv 238.571748 -123.830108 -117.419933\nv 236.476759 -135.771757 -104.515612\nv 226.327308 -150.113859 -87.682411\nv 229.891202 -157.359994 -76.283355\nv 228.257145 -165.950821 -73.457741\nv 228.084914 -170.9068 -68.823287\nv 228.191093 -184.695037 -63.255783\nv 224.740539 -132.925434 -101.813448\nv 209.941676 -146.524799 -85.67123\nv 203.02175 -159.358621 -87.491647\nv 201.669924 -169.47677 -88.325787\nv 198.602962 -181.535646 -80.712978\nv 195.173736 -185.499415 -60.840648\nv 294.574068 -90.85289 -174.319134\nv 347.14212 -78.882835 -154.102569\nv 343.749155 -93.901226 -147.215281\nv 331.398468 -109.052201 -123.303257\nv 326.364206 -116.43408 -116.106212\nv 316.94987 -129.523679 -101.037938\nv 311.20743 -140.175566 -84.680837\nv 301.481643 -152.086104 -70.435468\nv 299.044587 -158.30716 -62.657498\nv 298.606611 -164.519593 -58.429489\nv 297.893525 -169.803582 -50.241547\nv 294.025498 -173.574905 -44.846015\nv 289.151635 -101.154438 -154.302731\nv 286.214959 -107.49403 -145.512481\nv 274.364846 -124.761591 -120.670413\nv 279.453516 -116.671505 -132.599447\nv 267.528818 -138.409888 -104.593451\nv 258.999779 -158.675699 -95.587203\nv 258.351694 -167.075551 -86.669334\nv 255.472188 -177.884443 -86.177795\nv 253.680374 -183.164624 -81.323341\nv 251.727254 -185.861592 -72.996129\nv 318.000409 -119.788946 -153.479872\nv 309.799276 -124.560127 -141.954481\nv 296.132312 -134.665694 -129.131369\nv 284.033368 -146.357519 -113.1697\nv 270.657792 -160.298603 -98.726124\nv 265.183387 -171.786575 -92.41145\nv 260.535629 -178.165633 -86.63711\nv 257.391354 -183.42955 -81.204197\nv 255.677687 -186.311196 -73.367344\nv 325.903343 -108.942545 -169.826078\nv 309.145502 -121.854691 -156.592865\nv 301.537267 -128.190112 -149.902899\nv 290.537189 -138.764836 -134.926545\nv 277.690499 -151.099477 -118.952749\nv 266.872466 -164.782441 -101.419469\nv 261.596281 -171.629283 -92.347162\nv 257.876124 -178.017941 -86.395861\nv 255.487393 -183.293627 -81.265325\nv 253.640151 -186.079301 -73.17588\nv 317.85497 -116.896661 -131.299401\nv 305.034838 -128.410208 -116.631283\nv 294.019867 -139.612701 -100.737277\nv 283.000613 -152.551503 -84.627121\nv 277.254898 -159.071224 -76.114014\nv 274.36603 -165.399817 -70.905539\nv 272.32184 -170.678192 -64.468558\nv 270.540554 -179.919622 -57.566511\nv 43.920313 -182.230263 -55.416605\nv 56.74583 -182.172776 -55.934488\nv 48.194828 -173.041868 -82.906017\nv 64.968825 -173.101521 -81.518161\nv 63.064156 -182.165277 -55.944648\nv 39.541086 -168.870926 -79.278615\nv 38.287229 -182.301853 -55.319612\nv -185.650804 110.279117 -431.152437\nv -211.436539 96.256442 -452.100305\nv -210.472951 72.915492 -420.476865\nv -219.986295 50.347146 -389.900186\nv -214.593952 28.734481 -360.618309\nv -215.307546 -17.432559 -251.494783\nv -211.1514 -34.03929 -213.235298\nv -186.246265 -45.077659 -193.54361\nv -172.502596 -51.911348 -184.67453\nv -169.353763 -74.079692 -156.81394\nv -168.228928 -85.653531 -145.364464\nv -163.37477 -113.219301 -109.93822\nv -162.395504 -142.697459 -93.508136\nv -139.989034 -139.357301 -99.956793\nv -127.490241 -155.048586 -92.956214\nv -124.098591 -167.510962 -81.245723\nv -114.909627 -175.500486 -72.877206\nv -112.405577 -182.580474 -66.015175\nv -200.317029 -37.39246 -205.607631\nv -217.400473 -25.429043 -229.516163\nv -184.202121 50.12324 -383.431387\nv -188.434283 100.732313 -422.31803\nv -194.130265 70.252678 -398.724656\nv -197.045183 50.781599 -363.647396\nv -195.204036 31.650513 -346.284498\nv -188.176344 6.51993 -265.242204\nv -182.459127 -6.443016 -242.290662\nv -169.313434 -20.157749 -230.066099\nv -160.679927 -27.050202 -213.398492\nv -139.629406 -41.132025 -198.185738\nv -142.30798 -51.524479 -178.440358\nv -151.007241 -65.378696 -161.891524\nv -145.13211 -88.900904 -137.245073\nv -142.560327 -102.887295 -120.138197\nv -122.892394 -133.936203 -108.778231\nv -117.027636 -150.105993 -95.230001\nv -115.282624 -161.155644 -81.80565\nv -99.900484 -172.417814 -72.582987\nv -101.166722 -180.044859 -57.172131\nv -168.581555 4.994241 -294.75235\nv -54.602403 81.60624 -392.152344\nv -155.6844 41.033163 -331.237223\nv -135.118994 31.0175 -342.015294\nv -105.308461 45.343506 -330.096919\nv -73.735807 70.31702 -320.225615\nv -64.104057 75.404333 -370.605171\nv -209.488014 12.605123 -303.038023\nv -190.182097 13.890975 -293.701568\nv -238.340539 104.9023 -436.502653\nv -248.383703 91.368794 -427.718851\nv -263.264297 98.433482 -434.33212\nv -287.430119 76.968903 -407.66341\nv -300.885181 71.328167 -393.462508\nv -296.258843 44.570856 -374.76693\nv -293.176446 18.245243 -337.884946\nv -224.95693 -178.077447 -73.42742\nv -299.175959 -1.688278 -319.400094\nv -304.777285 -14.476692 -302.073736\nv -295.000462 -32.757295 -251.726861\nv -279.907063 -43.3081 -240.874648\nv -268.307304 -55.116549 -221.932367\nv -259.81885 -69.032115 -201.333623\nv -250.758927 -80.368768 -178.848793\nv -244.71685 -91.03021 -166.705239\nv -237.893712 -102.832181 -149.97698\nv -236.897918 -115.334991 -137.009849\nv -260.108715 -186.354573 -69.205327\nv -132.064434 -183.087061 -57.378307\nv -230.324865 -152.710947 -100.742545\nv -229.128915 -160.810301 -90.105587\nv -224.938074 -168.303468 -83.178288\nv -224.598725 -185.471566 -70.401667\nv -264.342334 85.400651 -371.832835\nv -265.479792 73.845954 -358.809167\nv -260.794947 47.062752 -338.596839\nv -254.400476 28.585772 -311.676604\nv -253.822084 0.408906 -282.203265\nv -252.370254 -16.180992 -259.16573\nv -247.458765 -27.370324 -233.79257\nv -244.815346 -33.262528 -225.019811\nv -240.553949 -40.273024 -218.534876\nv -235.968287 -47.103151 -200.261342\nv -229.359762 -60.33892 -182.712752\nv -217.569732 -75.006923 -154.249549\nv -212.279363 -93.051601 -135.928283\nv -202.491592 -119.560832 -113.368885\nv -143.269056 -168.150861 -71.140812\nv -194.897833 -147.598721 -91.59416\nv -189.048845 -156.759973 -84.130004\nv -182.828498 -165.730539 -76.746983\nv -179.48382 -172.846634 -70.479425\nv -174.722736 -184.351179 -56.389486\nv -284.701298 71.594926 -362.518382\nv -274.974821 45.99585 -344.113725\nv -265.706237 28.534783 -311.926157\nv -267.507388 -0.36724 -288.897619\nv -271.846864 -15.669951 -264.355197\nv -269.708015 -30.368771 -245.856199\nv -264.957865 -41.292829 -229.590086\nv -260.347839 -52.639785 -219.745171\nv -249.473474 -62.683643 -194.874592\nv -241.985597 -71.306602 -179.967657\nv -234.894433 -85.983481 -157.921417\nv -226.987034 -100.284972 -142.995243\nv -218.575206 -124.569521 -120.391909\nv -135.715293 -175.987689 -61.626968\nv -212.7575 -151.32335 -98.74748\nv -210.789816 -159.77069 -89.320804\nv -209.242437 -166.978583 -81.398665\nv -205.77 -175.069232 -72.607799\nv -204.317307 -184.948937 -59.337341\nv -244.981254 72.309646 -399.399841\nv -240.437873 48.908042 -387.950418\nv -239.467735 28.655491 -360.511289\nv -241.995084 1.317652 -285.409748\nv -229.890278 -16.751141 -250.275729\nv -226.735244 -26.491988 -227.228844\nv -224.529753 -35.316094 -217.038489\nv -224.554807 -37.626671 -213.161481\nv -220.129217 -46.489898 -196.329878\nv -209.100687 -59.562622 -174.164002\nv -204.660549 -75.299634 -155.380438\nv -202.741589 -91.574403 -136.148216\nv -191.694336 -119.054879 -112.000045\nv -150.943951 -156.378135 -83.193469\nv -176.257639 -148.440327 -89.670684\nv -169.433459 -157.426272 -79.644727\nv -161.786445 -168.644762 -70.836439\nv -155.426622 -176.449266 -65.291745\nv -152.009936 -183.601034 -62.462492\nv -233.264085 92.590047 -428.779046\nv -230.260697 72.568088 -408.876524\nv -229.42441 49.68302 -383.872958\nv -227.516449 28.693444 -337.03374\nv -229.180038 6.538989 -286.852477\nv -224.239291 -17.050467 -251.617808\nv -221.670616 -25.656406 -228.631793\nv -214.867727 -34.383855 -212.991983\nv -213.864629 -36.563079 -209.649265\nv -210.674049 -44.363738 -194.642026\nv -207.813595 -49.128192 -183.791959\nv -188.02588 -75.477908 -153.513041\nv -183.124762 -87.809646 -141.075993\nv -176.259027 -116.456573 -111.097862\nv -313.212766 46.844451 -385.154566\nv -336.585813 37.221125 -373.001619\nv -355.769948 7.673758 -332.084229\nv -345.957765 -20.129753 -294.414697\nv -340.487964 -27.484074 -284.450711\nv -329.988487 -38.403246 -269.656892\nv -322.434645 -50.242336 -253.616724\nv -308.549508 -60.137469 -240.210322\nv -291.53585 -72.13995 -210.723025\nv -271.013305 -85.245462 -192.967049\nv -261.572284 -92.753983 -179.215681\nv -258.150672 -103.186373 -165.081378\nv -259.448723 -115.17526 -148.838258\nv -248.093825 -152.580841 -109.054633\nv -247.780159 -159.592709 -99.554617\nv -249.526466 -166.505439 -91.419783\nv -242.260234 -186.362087 -69.195146\nv -246.203968 -178.857102 -79.463892\nv -327.58998 13.911473 -312.878864\nv -324.135194 -0.637072 -293.971925\nv -321.426524 -12.88703 -280.351482\nv -317.926734 -27.148656 -267.043834\nv -307.941494 -47.879189 -256.818429\nv -299.345563 -58.818955 -241.996708\nv -281.801445 -70.974745 -204.087475\nv -265.80692 -84.586734 -185.645299\nv -261.677514 -177.972657 -83.969619\nv -256.631535 -92.280129 -172.886217\nv -250.867367 -103.059025 -158.282451\nv -249.915774 -115.242784 -141.77531\nv -241.245016 -152.630989 -106.418537\nv -239.034564 -160.16364 -96.900726\nv -240.514133 -167.859172 -87.250961\nv -237.541318 -179.579207 -77.401778\nv -232.790727 -185.88462 -69.842042\nv -309.888768 25.351984 -338.714139\nv -312.074861 -3.293983 -307.682206\nv -310.933092 -16.87006 -291.703756\nv -307.452488 -31.37729 -260.489506\nv -294.197823 -45.638246 -238.769924\nv -279.842733 -56.906126 -221.569431\nv -268.310983 -70.096123 -203.69899\nv -254.329859 -83.912768 -184.979535\nv -253.527195 -91.798891 -173.264987\nv -246.555338 -102.950174 -158.156693\nv -244.925054 -115.291687 -141.435818\nv -236.084993 -152.668771 -103.962455\nv -234.50066 -160.459622 -94.451384\nv -233.395271 -168.7586 -85.765237\nv -231.210609 -178.823731 -76.394058\nv -230.097874 -185.748842 -70.026\nv -311.395898 40.128801 -356.703481\nv -328.097266 27.750693 -324.857809\nv -371.068407 10.297842 -330.640475\nv -392.568816 7.38087 -327.333218\nv -414.502133 9.00141 -324.807872\nv -396.196093 -24.181917 -288.924631\nv -388.748428 -32.88888 -272.152885\nv -381.634834 -44.817014 -260.96721\nv -375.60689 -55.610104 -246.344214\nv -365.54569 -68.81799 -225.680915\nv -357.695251 -82.637567 -209.726108\nv -350.930361 -92.557348 -194.590086\nv -341.692625 -106.522104 -177.36619\nv -336.678579 -115.423924 -166.509438\nv -332.583598 -122.219576 -157.699171\nv -309.782327 -150.201921 -113.557745\nv -305.005389 -158.259568 -103.798643\nv -299.935847 -167.00519 -95.4208\nv -295.003829 -176.067776 -82.247655\nv -291.107474 -186.341522 -69.223008\nv -377.683102 -22.688681 -290.947738\nv -371.299544 -30.934737 -276.599244\nv -363.691994 -42.588759 -263.986157\nv -355.146609 -53.544627 -249.142621\nv -347.343481 -66.045793 -230.321003\nv -334.216406 -78.912142 -214.773494\nv -323.988669 -90.09236 -198.501603\nv -313.230212 -101.631037 -183.992843\nv -300.822683 -109.83625 -173.530204\nv -292.264647 -118.336074 -162.078283\nv -280.284537 -151.339457 -114.229988\nv -278.699528 -158.8724 -104.564\nv -277.58746 -166.783632 -94.550667\nv -276.173888 -177.144067 -83.220594\nv -273.824137 -186.348799 -69.21315\nv -361.77304 -21.405395 -292.686397\nv -357.582086 -29.398486 -280.094753\nv -348.734239 -40.731211 -266.502852\nv -340.485944 -52.064625 -251.1478\nv -330.724548 -63.514729 -234.557484\nv -309.453733 -74.983009 -220.096871\nv -290.930357 -87.067741 -196.831716\nv -280.694687 -96.040035 -185.098359\nv -275.962774 -105.962157 -171.928456\nv -273.04734 -116.485072 -151.678211\nv -263.255897 -151.996139 -114.618064\nv -194.135653 -123.929823 -107.101786\nv -186.227525 -117.202731 -112.497236\nv -152.570465 -74.340081 -158.713646\nv -113.036517 -86.047557 -150.119616\nv 233.876052 -189.548565 -129.695747\nv 222.721309 -175.455215 -121.344827\nv 210.987226 -172.547202 -122.119667\nv 198.205359 -164.984145 -123.532165\nv 185.723471 -157.92617 -127.263859\nv 166.285762 -141.529681 -123.810606\nv 150.020719 -139.246318 -130.819862\nv 125.442432 -138.055558 -142.89163\nv 92.550901 -120.133466 -165.98149\nv 64.719605 -102.315917 -174.675731\nv 39.015547 -82.683413 -158.040815\nv 32.467011 -89.743599 -155.143063\nv 28.603462 -84.36517 -156.97397\nv 14.11725 -63.254741 -206.546133\nv 0.74377 -56.748723 -240.971352\nv -20.942954 -61.808959 -245.377848\nv -37.207997 -48.796925 -256.024996\nv -43.714014 -37.230672 -258.920345\nv -57.810385 -38.315008 -258.087526\nv -67.207965 -13.529058 -186.939331\nv -84.918789 -17.21909 -180.964357\nv -99.345656 -39.783894 -196.503522\nv -110.442631 -40.157965 -216.057689\nv -121.452415 -27.717515 -227.186936\nv -141.20318 -17.79331 -251.807579\nv -156.512642 -7.739001 -288.628093\nv -176.037234 19.761286 -333.38595\nv -178.56402 38.615176 -272.910221\nv -201.769148 27.059189 -293.76591\nv -215.118936 -14.114821 -260.140782\nv -216.520443 -33.08066 -218.213119\nv -216.814035 -69.244707 -187.481488\nv -226.291747 -84.813166 -135.440825\nv -248.889406 -117.110105 -119.711701\nv -205.135814 -129.587349 -101.809997\nv -165.146274 -109.079439 -121.813659\nv -157.410458 -83.437453 -149.735897\nv -130.360967 -81.440245 -152.706914\nv 233.876052 -189.796988 -86.276023\nv 215.803782 -182.955454 -89.37827\nv 202.068856 -177.189153 -89.100856\nv 193.394167 -169.816733 -89.527119\nv 176.044788 -164.267748 -96.903438\nv 158.783664 -149.549662 -107.220618\nv 143.469796 -133.383162 -99.360893\nv 125.442432 -145.704782 -99.414159\nv 92.550901 -123.164895 -119.832618\nv 69.259867 -102.883526 -128.239072\nv 36.445727 -86.982285 -124.75769\nv 28.500993 -100.921526 -121.735812\nv 24.778768 -93.974298 -144.083453\nv 13.328621 -58.128656 -146.799671\nv 1.532398 -47.285183 -137.199528\nv -18.232774 -52.654421 -138.116338\nv -31.293284 -41.304955 -141.07524\nv -38.193615 -34.864787 -138.651223\nv -55.444499 -28.539291 -139.32887\nv -67.207965 -16.404521 -138.613846\nv -80.071044 -23.278649 -142.62112\nv -93.053503 -34.792148 -145.627081\nv -109.177988 -40.419792 -145.039459\nv -122.615356 -32.160625 -148.485256\nv -133.501075 -25.536996 -161.170918\nv -144.620815 -11.440625 -176.525325\nv -157.260106 6.484843 -196.017849\nv -168.240864 32.263614 -214.610192\nv -180.062683 17.489916 -223.72564\nv -192.31516 -17.486248 -208.416337\nv -198.414242 -34.174621 -195.282435\nv -203.94664 -58.776134 -166.413524\nv -207.987745 -89.240426 -144.401667\nv -241.754438 -122.55975 -105.59209\nv -224.193014 -125.396953 -105.188505\nv -145.319151 -73.998741 -152.342724\nv -136.742929 -77.95487 -154.129301\nv -124.043768 -84.51285 -151.305913\nv 195.065234 -182.5409 -58.833515\nv 172.838473 -179.682451 -58.833515\nv 162.21747 -179.097075 -58.833515\nv 149.76267 -178.486908 -58.833515\nv 136.661388 -178.682109 -58.833515\nv 129.291917 -178.440751 -58.833515\nv 117.009465 -179.077838 -58.833515\nv 98.449316 -178.180867 -58.833515\nv 73.611468 -178.41067 -58.833515\nv 52.594828 -178.276659 -58.833515\nv 37.582943 -178.272009 -58.833515\nv 24.344318 -177.528645 -58.833515\nv 14.978722 -178.043802 -58.833515\nv 5.664055 -176.664969 -58.437712\nv -12.87326 -177.004092 -58.197524\nv -27.454881 -154.58237 -83.683649\nv -39.833333 -144.00802 -90.898582\nv -55.623513 -132.494856 -102.408777\nv -67.008382 -125.785339 -111.001521\nv -73.896605 -118.012121 -116.178176\nv -88.079932 -113.893325 -120.941668\nv -102.850445 -105.121941 -132.413449\nv -200.02922 -84.791289 -142.730996\nv -193.548219 -67.326837 -162.227211\nv -161.983845 -10.302075 -192.291313\nv -110.718656 -58.63846 -147.06791\nv -206.849 -105.350511 -127.395279\nv -181.466921 -54.058407 -173.836835\nv -171.017897 -22.809278 -194.182345\nv -132.247264 -47.858551 -157.791334\nv 218.379317 -186.899711 -75.31853\nv 198.648204 -181.64858 -77.182084\nv 186.156634 -177.950965 -77.015438\nv 175.972588 -173.278639 -77.271499\nv 160.319427 -170.023245 -81.702535\nv 147.007932 -161.085558 -87.900177\nv 132.904475 -151.628546 -83.178755\nv 114.664376 -158.672127 -83.210752\nv 84.988593 -145.223928 -95.476344\nv 59.878315 -132.987179 -107.382907\nv 36.899805 -120.993098 -95.000187\nv 27.405916 -123.808733 -102.773019\nv 20.865717 -127.542331 -110.044086\nv 10.268244 -105.458909 -112.530257\nv -5.831202 -86.2207 -112.434352\nv -25.236982 -83.323398 -111.848779\nv -39.125728 -75.395033 -125.491527\nv -49.04114 -65.662367 -123.433235\nv -61.398861 -60.871913 -126.026817\nv -69.878666 -56.975324 -135.585392\nv -88.604516 -60.883095 -131.853921\nv -101.328073 -62.874065 -144.262835\nv -123.185705 -53.064296 -149.611513\nv -141.475262 -37.999035 -167.582838\nv -152.492214 -25.651372 -178.578849\nv -234.742353 -123.692614 -105.430943\nv -197.515401 -101.485287 -127.533852\nv -190.425679 -88.600707 -141.015581\nv -157.968699 -37.616597 -177.969226\nv -111.707307 -70.32943 -148.369573\nv -206.118265 -115.688398 -116.482232\nv -174.505576 -77.526864 -151.647071\nv -165.213833 -48.669384 -175.22433\nv -131.44269 -62.182356 -155.622645\nv -230.242679 -124.419576 -105.327535\nv -149.432643 -46.273271 -167.388194\nv -139.456751 -55.041642 -161.844419\nv -123.5517 -66.47824 -150.334236\nv 208.435018 -185.040521 -68.287076\nv 187.639422 -180.809955 -69.355757\nv 175.945716 -178.439823 -69.260192\nv 164.793111 -175.500154 -69.407033\nv 150.228419 -173.716563 -71.948072\nv 139.451412 -168.488174 -75.502196\nv 126.12468 -163.33666 -72.794631\nv 107.748067 -166.993309 -72.81298\nv 80.135838 -159.379272 -79.846854\nv 56.771645 -152.304778 -86.674838\nv 37.191188 -145.424622 -79.573796\nv 26.100034 -146.722216 -84.031234\nv 18.354701 -149.083033 -88.200928\nv 8.304391 -135.830865 -89.457833\nv -8.834894 -124.943096 -89.300386\nv -26.182996 -113.717923 -99.835333\nv -39.427547 -104.66095 -110.736387\nv -51.84876 -94.168837 -114.465545\nv -63.791524 -88.559834 -119.617986\nv -71.592462 -83.009722 -127.307513\nv -88.380762 -83.493872 -127.199451\nv -101.97742 -80.89431 -139.208644\nv -90.217001 -33.728845 150.1761\nv -86.930771 -31.118996 149.56598\nv -77.009344 -32.661421 151.274759\nv -68.946684 -48.801778 157.236869\nv -75.983692 -52.746731 158.436913\nv -79.883965 -51.663066 158.107265\nv -70.358306 -33.720274 150.293746\nv -59.310005 -51.65491 158.104784\nv -61.757403 -52.502128 158.362505\nv -99.757361 -40.412513 148.194953\nv -88.604117 -55.046595 159.136525\nv -100.249708 -60.575247 160.818327\nv -106.458351 -45.846572 152.249997\nv -66.595042 -31.850778 148.894724\nv -61.504231 -40.825419 147.92025\nv -54.260888 -44.856854 159.112892\nv -50.216092 -52.495875 146.289249\nv -113.978885 -47.104582 151.560848\nv -118.427816 -50.151154 153.24325\nv -109.135898 -63.033972 161.566264\nv -123.116808 -52.28692 154.206934\nv -120.049367 -62.904152 161.526773\nv -130.238865 -54.648208 154.56779\nv -124.431928 -63.911827 161.833305\nv -128.191234 -58.204255 160.097077\nv -136.780342 -60.409821 157.055066\nv -134.304534 -65.485028 162.311869\nv -125.529188 -67.242742 162.846561\nv -143.742262 -62.880351 156.305801\nv -139.521566 -69.566197 163.55335\nv -142.683424 -73.796844 164.840301\nv -148.369042 -65.484122 160.727299\nv -89.764394 -37.915341 153.925243\nv -75.803034 -35.759398 153.404661\nv -70.540506 -35.233854 152.988412\nv -98.38313 -42.413117 155.02748\nv -105.693362 -47.967275 157.003242\nv -65.967785 -35.671397 153.146748\nv -115.838091 -51.265494 157.749037\nv -122.738858 -53.595107 158.189436\nv -129.986569 -55.361625 158.488495\nv -127.219145 -59.680131 160.546034\nv -146.898843 -67.633643 163.541983\nv -136.140142 -61.973147 160.636001\nv -142.650866 -64.798604 160.971179\nv -73.599483 -39.951067 154.636288\nv -68.079153 -36.687066 164.019273\nv -62.047144 -46.593475 166.898649\nv -63.492118 -47.214553 167.087579\nv -66.748674 -46.909262 164.943302\nv -70.058926 -39.110958 164.355964\nv -63.902033 -51.980411 159.393877\nv -67.899273 -49.923016 158.768023\nv -66.778449 -48.915605 159.910603\nv -64.493721 -49.088107 161.122207\nv -80.368434 -33.182304 149.679278\nv -78.093562 -36.113107 153.490069\nv -71.963617 -50.493073 157.751356\nv -83.693261 -36.977824 153.698867\nv -74.959608 -48.792799 171.03166\nv -77.839832 -47.991694 170.787961\nv -83.330295 -38.406576 167.702833\nv -77.022316 -37.322741 167.382824\nv -71.991004 -47.131923 170.526427\nv -80.647049 -37.159887 167.536347\nv -93.880519 -37.387434 147.435124\nv -91.758236 -38.955848 154.180232\nv -82.687324 -52.750804 158.438152\nv -86.059578 -54.059282 158.836187\nv -95.088812 -40.693943 154.606175\nv -97.320444 -39.15812 147.879879\nv -82.360855 -48.216698 157.058889\nv -85.773674 -48.547316 161.47445\nv -88.383882 -49.234796 161.656768\nv -90.361931 -52.775681 158.397909\nv -92.981131 -49.391943 157.297347\nv -90.832564 -46.994166 156.60014\nv -87.052736 -46.111927 156.389011\nv -83.77573 -46.248027 156.460024\nv -95.036505 -46.736612 156.433699\nv -92.344938 -44.755505 155.891623\nv -89.59737 -42.242072 155.194551\nv -93.733785 -42.699693 155.240977\nv -81.00005 -51.207037 160.071548\nv -88.202808 -53.984412 160.916301\nv -83.315722 -52.101431 160.343604\nv -86.102148 -53.173906 160.669791\nv -83.047136 -48.366117 159.20733\nv -89.659807 -52.113908 160.30781\nv -91.831315 -49.328134 159.40148\nv -90.048795 -47.355661 158.828183\nv -86.926013 -46.629914 158.654689\nv -84.21806 -46.7443 158.71395\nv -93.530864 -47.140289 158.689755\nv -91.310321 -45.505876 158.242543\nv -81.761836 -50.819585 162.179416\nv -87.959924 -53.20205 162.904004\nv -83.754562 -51.587469 162.412984\nv -86.152747 -52.506759 162.692554\nv -83.523904 -48.377407 161.436489\nv -89.215881 -51.594718 162.381078\nv -91.086315 -49.200258 161.601998\nv -89.552035 -47.505766 161.109548\nv -86.863222 -46.884372 160.961221\nv -84.532473 -46.983658 161.012478\nv -85.737173 -48.318203 163.526138\nv -87.926 -48.886928 163.676646\nv -82.376521 -50.222945 164.117076\nv -87.572488 -52.203678 164.719372\nv -84.047177 -50.86281 164.31169\nv -86.058541 -51.625561 164.543599\nv -83.851372 -48.178841 163.495247\nv -88.623723 -50.858341 164.281683\nv -101.559892 -57.54075 159.900109\nv -91.989723 -56.653884 159.625458\nv -93.309019 -53.570451 161.591762\nv -89.693907 -54.361033 161.85854\nv -98.686331 -58.653269 163.164426\nv -97.221991 -44.591558 158.680954\nv -102.8728 -48.884922 160.208218\nv -91.03715 -52.603702 161.286992\nv -93.046246 -49.986191 160.435562\nv -94.63505 -47.933619 159.767962\nv -99.688365 -56.296395 162.45112\nv -92.306171 -55.612754 162.239435\nv -92.972845 -52.849549 164.214118\nv -90.051834 -53.488339 164.429675\nv -91.137175 -52.068416 163.967864\nv -92.162544 -54.49973 164.737439\nv -110.759413 -60.183219 160.641593\nv -102.18877 -56.084213 159.459371\nv -113.645528 -55.115447 158.997809\nv -101.066471 -60.004329 162.435941\nv -108.246513 -61.990978 163.040275\nv -106.271133 -50.671671 159.647161\nv -111.850889 -52.422887 159.656519\nv -102.129961 -57.55071 161.693445\nv -109.563174 -59.685826 162.292565\nv -102.648485 -56.380688 161.339325\nv -111.905546 -55.597925 160.966383\nv -110.225943 -46.476802 151.904751\nv -108.490758 -48.876755 157.208894\nv -107.728386 -51.129033 159.649605\nv -105.373535 -56.150261 161.22954\nv -104.748906 -58.302976 161.904533\nv -103.997587 -60.81534 162.682649\nv -103.416099 -62.554748 161.420486\nv -102.847729 -57.395724 163.919845\nv -102.115499 -59.079149 164.428868\nv -103.469259 -59.452307 164.547431\nv -104.336599 -56.537096 163.638355\nv -103.188431 -56.632651 163.689654\nv -104.010078 -57.652743 163.990093\nv -126.572214 -58.118345 162.920793\nv -127.61351 -56.461439 162.009559\nv -122.947537 -55.355324 161.755906\nv -120.86947 -62.555154 164.319705\nv -123.275552 -63.127293 164.433314\nv -125.618362 -59.56906 163.355167\nv -127.774468 -60.536292 163.370367\nv -125.699478 -63.69882 164.28534\nv -126.332121 -65.619311 164.869548\nv -133.560791 -64.175973 164.412306\nv -134.56359 -62.262248 163.479844\nv -135.927448 -63.439755 164.218125\nv -135.045751 -65.134817 164.976499\nv -138.315939 -67.676939 165.783677\nv -139.948292 -65.199591 164.394734\nv -56.259294 -56.183417 159.482343\nv -43.549682 -58.430554 160.165917\nv -45.93862 -53.214454 158.422029\nv -60.870236 -55.55583 159.291433\nv -63.998159 -55.56913 159.295479\nv -69.904112 -56.327665 159.526223\nv -74.134104 -57.350467 159.837357\nv -72.768116 -60.784249 160.881904\nv -76.578505 -62.529253 161.41273\nv -77.629625 -59.293075 160.428293\nv -83.31559 -54.58423 158.995875\nv -85.460031 -55.79971 159.365621\nv -87.845923 -56.916419 159.705321\nv -86.299591 -66.925897 162.750177\nv -81.740531 -66.778083 162.705213\nv -88.756845 -70.484356 163.832651\nv -92.823104 -61.362742 161.05788\nv -90.272175 -57.513405 159.886922\nv -96.857953 -58.925556 160.316495\nv -97.528825 -64.792525 162.101211\nv -93.445715 -73.369893 164.710424\nv -96.981891 -72.347981 164.399561\nv -99.960027 -73.705161 164.812412\nv -101.565455 -70.670448 163.88926\nv -105.305045 -69.129583 163.420533\nv -105.09108 -65.269171 162.246206\nv -98.698886 -63.008074 161.558386\nv -47.762489 -57.682566 159.938381\nv -46.222567 -76.941568 165.796918\nv -36.855074 -93.157137 170.729651\nv -30.117762 -92.43604 170.510295\nv -34.745821 -85.425297 168.377646\nv -43.677171 -69.210296 163.445086\nv -27.430875 -97.632345 172.090997\nv -21.52779 -98.169825 172.254497\nv -21.644111 -90.81084 170.015914\nv -32.595666 -70.951271 163.974685\nv -40.399487 -51.896539 164.349894\nv -50.946238 -81.609132 167.216779\nv -60.85696 -70.413234 163.811016\nv -62.116 -61.974701 161.244037\nv -45.56962 -91.064071 170.092946\nv -49.380202 -96.05841 171.612211\nv -54.720004 -98.325174 172.301754\nv -62.631724 -77.380161 165.930337\nv -68.615612 -73.290068 164.686141\nv -73.817526 -72.157969 164.34176\nv -75.15985 -77.800126 166.058089\nv -78.542735 -70.75064 183.936251\nv -87.559624 -80.851637 166.986351\nv -66.040136 -75.019258 165.212156\nv -72.939341 -79.947547 166.711329\nv -61.307059 -105.55899 173.826691\nv -51.820088 -106.729798 174.182848\nv -41.223472 -96.92895 171.877026\nv -46.054305 -100.321669 172.909083\nv -43.364033 -106.782931 174.199011\nv -35.021152 -94.956834 171.277114\nv -27.949589 -105.578285 173.832561\nv -23.357937 -105.501008 173.809054\nv -15.506229 -105.091145 173.684374\nv -35.527192 -66.22965 162.538381\nv -2.925003 -105.037291 173.667992\nv -9.718655 -89.619456 170.456933\nv -18.651749 -79.357186 151.823219\nv -25.947736 -72.673869 150.310524\nv -31.465574 -66.255237 167.830774\nv -6.131185 -91.003363 162.759014\nv 0.463884 -99.977768 172.804469\nv 7.876801 -105.522549 173.815606\nv -83.945989 -80.506689 166.881418\nv -69.725168 -105.056239 173.673756\nv -79.261682 -87.902843 169.131309\nv -83.503931 -89.015626 169.469814\nv -87.221269 -88.571359 181.859824\nv -81.638354 -105.312891 173.751829\nv -86.033148 -90.840815 170.025032\nv -90.693406 -84.983533 168.243262\nv -94.747698 -84.318687 197.295853\nv -90.394577 -82.951651 196.880005\nv -88.446217 -105.666582 173.859421\nv -93.229012 -87.446144 168.992382\nv -96.050917 -78.525624 166.278783\nv -104.543094 -79.73733 166.647381\nv -113.732806 -85.108883 168.281393\nv -119.781969 -93.654065 170.880815\nv -111.95955 -97.855517 172.158886\nv -104.226886 -94.968127 171.280549\nv -95.202133 -82.753603 179.144441\nv -100.119285 -105.36428 173.767461\nv -107.930079 -105.496683 173.807738\nv -107.911325 -74.249815 164.978094\nv -106.527341 -73.374319 164.71177\nv -110.150264 -66.855254 162.728688\nv -115.272794 -68.809939 163.323298\nv -110.968153 -76.288939 165.59839\nv -123.919535 -93.98828 170.982482\nv -117.568336 -105.414065 173.782606\nv -130.420025 -90.384915 169.886348\nv -133.569988 -90.659524 169.969884\nv -126.893778 -105.264729 173.737178\nv -61.908423 -74.796085 192.50677\nv -60.08185 -76.061297 192.891643\nv -54.251502 -86.529119 196.075927\nv -52.691666 -89.809367 197.07377\nv -59.37196 -89.972226 197.123311\nv -65.605716 -77.437163 193.310178\nv -47.342156 -95.732333 187.978122\nv -45.811523 -98.144931 188.712028\nv -50.622604 -98.114701 188.702832\nv -52.272514 -94.596425 187.632581\nv -49.234429 -93.306747 187.240265\nv -51.564454 -74.118831 188.064789\nv -47.893394 -80.566815 190.483645\nv -49.444398 -84.408786 191.761347\nv -52.042977 -86.389202 192.341253\nv -58.076767 -71.843193 186.982891\nv -60.077567 -70.368556 186.378901\nv -61.584497 -69.293675 185.936523\nv -64.887275 -60.571105 182.737159\nv -65.912638 -58.190911 181.858695\nv -63.784704 -57.177965 181.597032\nv -59.19026 -60.729036 183.041713\nv -57.771358 -66.715899 185.200542\nv -45.56962 -88.91099 177.170856\nv -41.223472 -94.775868 178.954936\nv -46.054305 -98.168588 179.986993\nv -49.380202 -93.905329 178.690121\nv -43.770443 -96.628726 182.875126\nv -40.939574 -94.640592 182.270341\nv -38.379693 -92.43031 181.597979\nv -37.305015 -93.484932 181.918792\nv -42.193943 -99.11362 183.631024\nv -35.332896 -91.312908 191.715216\nv -31.729411 -95.593647 193.017405\nv -39.584211 -96.207503 193.204139\nv -35.053207 -91.445148 180.902546\nv -30.114757 -90.916583 180.741758\nv -28.145268 -94.725475 181.900413\nv -25.159805 -98.865338 183.159748\nv -28.525486 -98.921982 183.176979\nv -33.708942 -92.764325 181.303837\nv -49.360982 -78.27702 182.474583\nv -45.700137 -74.659658 181.374191\nv -38.44033 -87.226724 185.197059\nv -41.825839 -90.149879 186.086275\nv -45.194103 -85.604598 184.703613\nv -49.092185 -58.594492 183.46478\nv -44.74226 -59.24802 183.754947\nv -42.173514 -66.421879 185.986189\nv -36.954604 -76.400969 189.124674\nv -34.311718 -80.688657 190.481634\nv -37.676529 -81.382699 190.621205\nv -43.115349 -71.418547 187.482611\nv -51.444536 -58.357877 183.343308\nv -35.464168 -80.416547 181.549228\nv -42.725356 -67.233751 177.539057\nv -46.046719 -57.861706 174.688106\nv -42.621707 -58.469821 174.873092\nv -40.181624 -57.429028 176.132281\nv -36.099422 -64.810485 176.801906\nv -33.716091 -68.649163 177.969621\nv -24.812477 -84.794993 182.88114\nv -24.717909 -90.777847 184.701108\nv -29.517117 -90.340876 184.568183\nv -31.701556 -86.11628 183.283072\nv -25.487158 -96.935373 177.688539\nv -21.508479 -97.297635 177.798738\nv -17.449947 -100.465766 178.762475\nv -22.741998 -100.742014 178.846509\nv -21.830049 -91.794413 178.087395\nv -21.899182 -87.420704 176.756924\nv -28.408086 -75.617447 173.166405\nv -30.150397 -72.811218 172.312757\nv -27.736431 -72.826425 175.458217\nv -24.456982 -76.641249 175.826485\nv -18.074316 -80.613385 175.942203\nv -15.21187 -88.282361 177.019038\nv -10.773743 -94.556077 178.927486\nv -18.251218 -94.588085 178.937222\nv -60.722722 -90.110228 203.949667\nv -66.017712 -89.793998 203.853471\nv -72.01618 -80.401414 200.996272\nv -74.962609 -75.749232 199.58109\nv -71.436934 -75.469144 199.495888\nv -69.436128 -74.046804 199.063217\nv -68.039427 -75.397532 199.474104\nv -77.337055 -86.885129 184.537467\nv -71.186003 -96.516635 187.467346\nv -78.870008 -96.682175 187.517703\nv -83.470777 -90.091664 185.512887\nv -81.70465 -88.780121 185.113919\nv -80.073306 -87.602873 184.755803\nv -83.945989 -78.552247 173.306331\nv -79.261682 -85.948402 175.556222\nv -83.503931 -87.061184 175.894727\nv -87.559624 -78.897196 173.411263\nv -86.385835 -83.218227 189.145507\nv -89.503548 -79.299706 187.953503\nv -87.407048 -76.535467 187.112629\nv -84.693789 -81.997175 188.774066\nv -88.970966 -89.870702 182.255081\nv -84.412995 -96.399906 184.241247\nv -88.76322 -96.625914 184.309998\nv -94.235687 -91.8255 182.849725\nv -93.660119 -88.241255 181.759407\nv -91.819426 -86.402164 181.199961\nv -90.199173 -84.828556 180.721273\nv -92.099883 -84.655472 197.398303\nv -92.633117 -87.976087 198.408425\nv -87.563163 -92.423419 199.761292\nv -94.473619 -92.244456 199.706852\nv -96.905318 -87.404664 198.2346\nv -80.546723 -72.17524 184.36961\nv -84.078003 -72.455774 184.454948\nv -86.354593 -72.673091 184.521056\nv -90.06283 -67.959593 183.087222\nv -87.108842 -66.141704 182.534225\nv -85.560772 -63.899875 181.852266\nv -82.688564 -63.806752 181.823939\nv -90.015624 -67.538824 170.301633\nv -93.358788 -69.596211 170.927485\nv -96.270046 -63.480548 169.067116\nv -92.914867 -61.035113 168.323221\nv -87.199836 -62.179908 175.450408\nv -88.978887 -64.756233 176.234119\nv -91.922859 -58.152184 174.225185\nv -90.075987 -55.365264 173.377411\nv -85.235985 -54.758593 169.501426\nv -82.766237 -62.048232 171.718915\nv -85.793453 -62.14638 171.748772\nv -86.820217 -55.500087 169.726987\nv -81.136937 -55.076473 174.570353\nv -79.985887 -54.424052 174.371888\nv -76.933888 -56.951571 175.140753\nv -76.369689 -58.688622 175.669159\nv -79.140458 -60.969224 176.362912\nv -73.817526 -71.230881 167.389414\nv -75.15985 -76.873038 169.105743\nv -81.740531 -65.850995 165.752867\nv -76.578505 -61.602165 164.460384\nv -70.323653 -69.142629 168.685891\nv -73.293945 -68.4962 168.489249\nv -74.870464 -62.998204 166.816773\nv -72.694732 -62.001806 166.513672\nv -108.586781 -72.264124 169.332264\nv -110.952766 -73.842406 169.812373\nv -114.284558 -68.05366 168.051452\nv -110.31972 -66.540733 167.591224\nv -107.515577 -71.58649 169.12613\nv -100.303613 -71.452971 173.131192\nv -97.059051 -75.453955 174.34828\nv -104.107558 -76.459671 174.654217\nv -106.90319 -71.905033 173.268708\nv -105.754484 -71.178372 173.047659\nv -101.636118 -68.934159 172.364976\nv -115.037458 -65.521331 170.464595\nv -118.161337 -61.658945 169.289667\nv -111.023928 -61.743848 169.315494\nv -111.687324 -64.242966 170.07572\nv -115.922417 -49.747309 162.332341\nv -113.729854 -53.597262 163.581113\nv -110.843739 -58.665034 165.224897\nv -109.220224 -61.515787 166.149568\nv -120.133693 -61.385967 166.110077\nv -122.823184 -52.076922 162.77274\nv -100.384942 -91.195848 189.723408\nv -97.94092 -96.060166 191.20312\nv -102.588342 -96.138946 191.227085\nv -104.985877 -92.913845 190.246018\nv -103.390915 -88.50996 203.701719\nv -100.872495 -91.897671 204.732252\nv -106.896406 -91.846035 204.716545\nv -110.865905 -86.092937 202.966468\nv -108.279926 -85.884053 202.902925\nv -104.444259 -88.104103 217.158973\nv -109.703809 -88.019878 217.133352\nv -113.469191 -81.03509 215.008598\nv -111.692612 -80.88021 214.961484\nv -108.026336 -82.912508 215.579704\nv -96.951701 -84.452804 179.661333\nv -102.02544 -86.04614 180.146022\nv -104.540234 -89.642972 181.240169\nv -109.875773 -91.635271 181.846221\nv -115.273242 -88.73627 180.964352\nv -111.099319 -82.840094 179.170751\nv -104.758418 -79.133723 178.043283\nv -98.898816 -78.297645 177.78895\nv -129.655326 -84.975375 175.818787\nv -135.067584 -74.961022 172.772447\nv -133.45148 -72.798633 172.114655\nv -130.508207 -70.496176 171.414253\nv -124.166989 -71.766331 171.800631\nv -123.317009 -69.186077 171.015725\nv -121.739264 -68.823309 170.905372\nv -119.056163 -72.140713 171.914517\nv -115.609699 -78.128692 173.736044\nv -113.539163 -76.747495 173.315888\nv -112.485806 -78.463622 173.837929\nv -117.876217 -81.614414 174.796392\nv -121.749571 -87.086 176.460834\nv -123.609637 -87.236248 176.506539\nv -127.955583 -84.827195 175.773711\nv -172.06231 -45.120296 159.218699\nv -164.277547 -108.32612 170.054769\nv -169.0703 -65.759533 162.885522\nv -159.580189 -54.539177 159.714719\nv -145.560022 -83.38384 167.794637\nv -136.836394 -106.078939 172.757802\nv -150.320129 -107.183134 171.429615\nv -162.590012 -69.691843 164.061184\nv -166.725022 -50.330853 159.700758\nv -132.504294 -81.136652 192.309054\nv -124.01535 -86.287836 193.849128\nv -119.288593 -95.055975 196.516373\nv -126.327965 -95.632435 195.822974\nv -135.111078 -97.273378 184.768117\nv -144.630595 -98.05294 183.830417\nv -152.092725 -76.251171 179.300643\nv -141.26996 -82.818544 181.264123\nv -153.149708 -99.876588 173.408636\nv -163.464239 -100.721255 172.392625\nv -167.467337 -73.107419 167.486676\nv -160.960634 -77.055757 168.66713\nv -152.723938 -56.702831 177.717197\nv -146.344795 -62.930505 178.293355\nv -145.508252 -64.153582 179.894911\nv -143.109679 -67.660444 180.633654\nv -137.924134 -77.255309 183.552386\nv -144.746463 -73.115445 182.314671\nv -163.310005 -49.011879 172.64976\nv -158.162687 -54.036978 173.114661\nv -147.745703 -75.468563 179.118039\nv -159.135667 -68.557008 177.051658\n\nvt -0.056296 0.376007 0\nvt 0.109629 0.010208 0\nvt 0.125961 0.025375 0\nvt 0.135891 0.049225 0\nvt 0.139771 0.076324 0\nvt 0.137314 0.098022 0\nvt 0.146496 0.113968 0\nvt 0.159569 0.138046 0\nvt 0.156197 0.156281 0\nvt 0.161495 0.164825 0\nvt 0.161739 0.177658 0\nvt 0.154549 0.189163 0\nvt 0.13559 0.213654 0\nvt 0.134243 0.260056 0\nvt 0.134075 0.304169 0\nvt 0.100618 0.350311 0\nvt 0.067703 0.376022 0\nvt 0.056268 0.153564 0\nvt 0.036917 0.254593 0\nvt 0.036991 0.204742 0\nvt 0.055715 -0.009338 0\nvt 0.075674 0.03421 0\nvt 0.080479 0.061493 0\nvt 0.08638 0.085312 0\nvt 0.092113 0.104431 0\nvt 0.094679 0.118942 0\nvt 0.098669 0.1297 0\nvt 0.098238 0.146606 0\nvt 0.102959 0.155792 0\nvt 0.103354 0.169388 0\nvt 0.097246 0.181274 0\nvt 0.081079 0.206497 0\nvt 0.080517 0.255447 0\nvt 0.080976 0.302063 0\nvt 0.052474 0.349655 0\nvt 0.024168 0.375656 0\nvt 0.056746 0.167389 0\nvt 0.037712 0.302063 0\nvt 0.012452 0.34993 0\nvt -0.038744 -0.023193 0\nvt -0.022297 0.023071 0\nvt -0.018017 0.051712 0\nvt -0.012959 0.076782 0\nvt -0.008116 0.096939 0\nvt -0.005822 0.112183 0\nvt -0.002487 0.123535 0\nvt -0.002506 0.141144 0\nvt 0.001362 0.15094 0\nvt 0.001924 0.16507 0\nvt -0.002647 0.17717 0\nvt -0.014842 0.202621 0\nvt -0.014364 0.253555 0\nvt -0.013146 0.302094 0\nvt -0.034595 0.350281 0\nvt -0.012809 0.375809 0\nvt 0.05135 0.179382 0\nvt 0.012302 -0.015686 0\nvt 0.03065 0.029114 0\nvt 0.035212 0.057007 0\nvt 0.040729 0.081406 0\nvt 0.046058 0.100983 0\nvt 0.048503 0.115829 0\nvt 0.052184 0.126877 0\nvt 0.05194 0.144104 0\nvt 0.610367 0.514145 555.59375\nvt 0.547592 0.500175 555.59375\nvt 0.529617 0.476471 555.59375\nvt 0.519684 0.434341 555.59375\nvt 0.503983 0.397018 555.59375\nvt 0.510208 0.341629 555.59375\nvt 0.538589 0.324295 555.59375\nvt 0.554489 0.310455 555.59375\nvt 0.617599 0.324615 555.59375\nvt 0.661209 0.380356 555.59375\nvt 0.706665 0.423691 555.59375\nvt 0.695648 0.438568 555.59375\nvt 0.541397 0.382462 555.59375\nvt 0.570236 0.372208 555.59375\nvt 0.61731 0.390045 555.59375\nvt 0.652374 0.428772 555.59375\nvt 0.618576 0.343918 555.59375\nvt 0.582611 0.325912 555.59375\nvt 0.667267 0.472977 555.59375\nvt 0.530975 0.420258 555.59375\nvt 0.564514 0.421295 555.59375\nvt 0.593628 0.442551 555.59375\nvt 0.636932 0.471527 555.59375\nvt 0.648651 0.489243 555.59375\nvt 0.541 0.445587 555.59375\nvt 0.564697 0.465591 555.59375\nvt 0.626007 0.488876 555.59375\nvt 0.697021 0.399979 555.59375\nvt 0.715973 0.441147 555.59375\nvt 0.74472 0.405136 555.59375\nvt 0.717987 0.354675 555.59375\nvt 0.693985 0.368423 555.59375\nvt 0.714737 0.400345 555.59375\nvt 0.734467 0.385788 555.59375\nvt 0.715668 0.420151 555.59375\nvt 0.716461 0.379944 555.59375\nvt 0.726456 0.370667 555.59375\nvt 0.753876 0.410172 555.59375\nvt 0.765167 0.399536 555.59375\nvt 0.747131 0.385208 555.59375\nvt 0.751801 0.40239 555.59375\nvt 0.786148 0.431442 555.59375\nvt 0.801468 0.427872 555.59375\nvt 0.815552 0.416489 555.59375\nvt 0.852509 0.389969 555.59375\nvt 0.852066 0.364609 555.59375\nvt 0.836075 0.329636 555.59375\nvt 0.821259 0.287903 555.59375\nvt 0.795288 0.254196 555.59375\nvt 0.77243 0.228333 555.59375\nvt 0.744827 0.185791 555.59375\nvt 0.73056 0.179031 555.59375\nvt 0.710114 0.200775 555.59375\nvt 0.709885 0.240189 555.59375\nvt 0.640808 0.329712 555.59375\nvt 0.73851 0.321533 555.59375\nvt 0.734802 0.361969 555.59375\nvt 0.845963 0.351395 555.59375\nvt 0.787125 0.417068 555.59375\nvt 0.779602 0.397629 555.59375\nvt 0.772797 0.373611 555.59375\nvt 0.753571 0.326645 555.59375\nvt 0.80249 0.403015 555.59375\nvt 0.798538 0.385437 555.59375\nvt 0.793182 0.360764 555.59375\nvt 0.775406 0.320099 555.59375\nvt 0.814362 0.398239 555.59375\nvt 0.819427 0.373932 555.59375\nvt 0.813354 0.350464 555.59375\nvt 0.800293 0.306 555.59375\nvt 0.829376 0.414139 555.59375\nvt 0.836823 0.37085 555.59375\nvt 0.763885 0.233383 555.59375\nvt 0.734329 0.245743 555.59375\nvt 0.744736 0.202133 555.59375\nvt 0.720001 0.219284 555.59375\nvt 0.709961 0.226074 555.59375\nvt 0.781723 0.262436 555.59375\nvt 0.749435 0.273788 555.59375\nvt 0.730942 0.283737 555.59375\nvt 0.726288 0.288269 555.59375\nvt 0.623917 0.37178 555.59375\nvt 0.585632 0.350662 555.59375\nvt 0.552368 0.338547 555.59375\nvt 0.520523 0.340698 555.59375\nvt 0.857849 0.380646 555.59375\nvt 0.882339 0.381683 555.59375\nvt 0.911636 0.368362 555.59375\nvt 0.941422 0.36171 555.59375\nvt 0.949738 0.33847 555.59375\nvt 0.958633 0.319427 555.59375\nvt 0.943649 0.294037 555.59375\nvt 0.934189 0.275269 555.59375\nvt 0.943863 0.258163 555.59375\nvt 0.930634 0.217346 555.59375\nvt 0.929153 0.186981 555.59375\nvt 0.933884 0.142853 555.59375\nvt 0.92334 0.103043 555.59375\nvt 0.891037 0.053146 555.59375\nvt 0.854248 -0.005341 555.59375\nvt 0.834381 0.049942 555.59375\nvt 0.806824 0.10759 555.59375\nvt 0.78447 0.135315 555.59375\nvt 0.765442 0.179092 555.59375\nvt 0.789032 0.21846 555.59375\nvt 0.807617 0.248444 555.59375\nvt 0.827133 0.289276 555.59375\nvt 0.847763 0.330872 555.59375\nvt 0.85643 0.350784 555.59375\nvt 0.906784 0.077454 555.59375\nvt 0.867203 0.359085 555.59375\nvt 0.864273 0.342194 555.59375\nvt 0.855698 0.323517 555.59375\nvt 0.834 0.282883 555.59375\nvt 0.815338 0.246506 555.59375\nvt 0.799362 0.216141 555.59375\nvt 0.779648 0.176041 555.59375\nvt 0.875412 0.358582 555.59375\nvt 0.873444 0.342697 555.59375\nvt 0.87117 0.326752 555.59375\nvt 0.845245 0.289124 555.59375\nvt 0.828171 0.243256 555.59375\nvt 0.81868 0.211807 555.59375\nvt 0.817871 0.167816 555.59375\nvt 0.81897 0.127304 555.59375\nvt 0.822128 0.102982 555.59375\nvt 0.913055 0.348984 555.59375\nvt 0.919464 0.332443 555.59375\nvt 0.90181 0.314117 555.59375\nvt 0.9039 0.287857 555.59375\nvt 0.885193 0.24469 555.59375\nvt 0.867477 0.201355 555.59375\nvt 0.861237 0.158478 555.59375\nvt 0.857727 0.118286 555.59375\nvt 0.853058 0.093658 555.59375\nvt 0.850037 0.048126 555.59375\nvt 0.928024 0.348907 555.59375\nvt 0.924484 0.265823 555.59375\nvt 0.240013 0.046539 555.59375\nvt 0.248825 0.065536 555.59375\nvt 0.907242 0.229599 555.59375\nvt 0.900421 0.192596 555.59375\nvt 0.89151 0.151962 555.59375\nvt 0.88765 0.111328 555.59375\nvt 0.877075 0.086395 555.59375\nvt 0.868622 0.053955 555.59375\nvt 0.867981 0.028259 555.59375\nvt 0.893188 0.374283 555.59375\nvt 0.895233 0.346802 555.59375\nvt 0.891022 0.325363 555.59375\nvt 0.88591 0.304962 555.59375\nvt 0.869141 0.274963 555.59375\nvt 0.842743 0.239578 555.59375\nvt 0.834015 0.208344 555.59375\nvt 0.833801 0.164398 555.59375\nvt 0.838165 0.122849 555.59375\nvt 0.835754 0.098877 555.59375\nvt 0.839722 0.047852 555.59375\nvt 0.841644 0.031448 555.59375\nvt 0.85997 0.367065 555.59375\nvt 0.87001 0.381149 555.59375\nvt 0.701202 0.343475 555.59375\nvt 0.695465 0.307831 555.59375\nvt 0.678452 0.2939 555.59375\nvt 0.67131 0.263916 555.59375\nvt 0.679306 0.238174 555.59375\nvt 0.687958 0.2108 555.59375\nvt 0.680435 0.171829 555.59375\nvt 0.694443 0.148636 555.59375\nvt 0.711227 0.101242 555.59375\nvt 0.726044 0.066437 555.59375\nvt 0.739319 0.042755 555.59375\nvt 0.734787 0.002472 555.59375\nvt 0.579483 -0.000305 555.59375\nvt 0.57489 0.074661 555.59375\nvt 0.573898 0.106445 555.59375\nvt 0.56398 0.139175 555.59375\nvt 0.563065 0.168732 555.59375\nvt 0.559326 0.188431 555.59375\nvt 0.56105 0.219086 555.59375\nvt 0.581116 0.268555 555.59375\nvt 0.578949 0.304489 555.59375\nvt 0.649567 0.358597 555.59375\nvt 0.639343 0.355637 555.59375\nvt 0.632935 0.361267 555.59375\nvt 0.678223 0.369263 555.59375\nvt 0.666946 0.355911 555.59375\nvt 0.662109 0.330795 555.59375\nvt 0.65329 0.301361 555.59375\nvt 0.64444 0.264099 555.59375\nvt 0.648041 0.237488 555.59375\nvt 0.648697 0.209976 555.59375\nvt 0.647964 0.182327 555.59375\nvt 0.651123 0.154129 555.59375\nvt 0.665283 0.106613 555.59375\nvt 0.682297 0.079147 555.59375\nvt 0.690735 0.001938 555.59375\nvt 0.691055 0.048752 555.59375\nvt 0.586761 0.036621 555.59375\nvt 0.680069 0.43129 555.59375\nvt 0.65419 0.470276 555.59375\nvt 0.636749 0.486938 555.59375\nvt 0.966537 0.34198 555.59375\nvt 0.900558 0.392853 555.59375\nvt 0.98674 0.296997 555.59375\nvt 0.91951 0.415512 555.59375\nvt 0.929489 0.440277 555.59375\nvt 0.978699 0.268524 555.59375\nvt 0.935364 0.461029 555.59375\nvt 0.974533 0.244965 555.59375\nvt 0.950668 0.486893 555.59375\nvt 0.961014 0.214767 555.59375\nvt 0.952728 0.513649 555.59375\nvt 0.961319 0.184906 555.59375\nvt 0.950867 0.552856 555.59375\nvt 0.966782 0.141724 555.59375\nvt 0.955124 0.59243 555.59375\nvt 0.965958 0.097549 555.59375\nvt 0.955841 0.620857 555.59375\nvt 0.967773 0.06601 555.59375\nvt 0.97937 0.643173 555.59375\nvt 0.945465 0.038849 555.59375\nvt 0.985565 0.682053 555.59375\nvt 0.942535 -0.004822 555.59375\nvt 0.985199 0.65461 555.59375\nvt 0.940475 0.025589 555.59375\nvt 0.972702 0.319107 555.59375\nvt 0.971848 0.299988 555.59375\nvt 0.963501 0.280533 555.59375\nvt 0.959442 0.252274 555.59375\nvt 0.952744 0.21814 555.59375\nvt 0.949066 0.183334 555.59375\nvt 0.951187 0.145264 555.59375\nvt 0.944092 0.100357 555.59375\nvt 0.934708 0.072205 555.59375\nvt 0.917694 0.046127 555.59375\nvt 0.902512 0.027435 555.59375\nvt 0.900742 -0.004944 555.59375\nvt 0.945572 0.344238 555.59375\nvt 0.942886 0.330811 555.59375\nvt 0.923874 0.289154 555.59375\nvt 0.929428 0.311142 555.59375\nvt 0.874069 0.427322 555.59375\nvt 0.870178 0.451111 555.59375\nvt 0.859039 0.48291 555.59375\nvt 0.86499 0.507286 555.59375\nvt 0.877701 0.53112 555.59375\nvt 0.886703 0.564667 555.59375\nvt 0.900955 0.602486 555.59375\nvt 0.89711 0.632149 555.59375\nvt 0.894211 0.65538 555.59375\nvt 0.894989 0.666893 555.59375\nvt 0.897369 0.690994 555.59375\nvt 0.899918 0.401306 555.59375\nvt 0.898682 0.439987 555.59375\nvt 0.901642 0.473831 555.59375\nvt 0.902206 0.503304 555.59375\nvt 0.906174 0.526192 555.59375\nvt 0.915527 0.561058 555.59375\nvt 0.923309 0.594803 555.59375\nvt 0.930557 0.625717 555.59375\nvt 0.93251 0.649887 555.59375\nvt 0.927948 0.66201 555.59375\nvt 0.918564 0.68985 555.59375\nvt 0.991333 0.315475 555.59375\nvt 0.913696 0.399368 555.59375\nvt 0.989975 0.325394 555.59375\nvt 0.91423 0.390335 555.59375\nvt 0.82486 0.437683 555.59375\nvt 0.875732 0.691093 555.59375\nvt 0.783447 0.474213 555.59375\nvt 0.73555 0.510384 555.59375\nvt 0.751526 0.541359 555.59375\nvt 0.757141 0.558121 555.59375\nvt 0.768112 0.576225 555.59375\nvt 0.785767 0.596771 555.59375\nvt 0.819122 0.627945 555.59375\nvt 0.821869 0.648811 555.59375\nvt 0.835403 0.667343 555.59375\nvt 0.836609 0.674683 555.59375\nvt 0.837585 0.696075 555.59375\nvt 0.744949 0.528603 555.59375\nvt 0.788208 0.484482 555.59375\nvt 0.790436 0.510117 555.59375\nvt 0.79364 0.528633 555.59375\nvt 0.799225 0.544731 555.59375\nvt 0.810699 0.578583 555.59375\nvt 0.8349 0.612556 555.59375\nvt 0.844864 0.644669 555.59375\nvt 0.857605 0.665039 555.59375\nvt 0.862061 0.672096 555.59375\nvt 0.855225 0.692894 555.59375\nvt 0.824295 0.453918 555.59375\nvt 0.826645 0.482483 555.59375\nvt 0.830933 0.502983 555.59375\nvt 0.834229 0.529457 555.59375\nvt 0.846588 0.560822 555.59375\nvt 0.858597 0.600967 555.59375\nvt 0.871933 0.638443 555.59375\nvt 0.875916 0.660187 555.59375\nvt 0.880356 0.669853 555.59375\nvt 0.696625 0.529808 555.59375\nvt 0.703506 0.561775 555.59375\nvt 0.711655 0.59053 555.59375\nvt 0.71402 0.620712 555.59375\nvt 0.704361 0.653137 555.59375\nvt 0.695877 0.671021 555.59375\nvt 0.689865 0.685455 555.59375\nvt 0.688171 0.696732 555.59375\nvt 0.689667 0.707115 555.59375\nvt 0.706268 0.571602 555.59375\nvt 0.703217 0.545395 555.59375\nvt 0.708817 0.508728 555.59375\nvt 0.712708 0.521263 555.59375\nvt 0.715958 0.537788 555.59375\nvt 0.71637 0.554962 555.59375\nvt 0.723251 0.581512 555.59375\nvt 0.719971 0.605583 555.59375\nvt 0.729401 0.635208 555.59375\nvt 0.715485 0.653969 555.59375\nvt 0.717865 0.669876 555.59375\nvt 0.7155 0.681046 555.59375\nvt 0.713242 0.708405 555.59375\nvt 0.739502 0.600052 555.59375\nvt 0.758774 0.627205 555.59375\nvt 0.774994 0.646477 555.59375\nvt 0.779556 0.662666 555.59375\nvt 0.782501 0.686676 555.59375\nvt 0.777374 0.705086 555.59375\nvt 0.661224 0.522316 555.59375\nvt 0.555099 0.518456 555.59375\nvt 0.556732 0.542519 555.59375\nvt 0.55864 0.571869 555.59375\nvt 0.562042 0.585419 555.59375\nvt 0.566986 0.61116 555.59375\nvt 0.563538 0.63549 555.59375\nvt 0.570038 0.661461 555.59375\nvt 0.567993 0.676216 555.59375\nvt 0.565475 0.68956 555.59375\nvt 0.559189 0.70401 555.59375\nvt 0.562027 0.713593 555.59375\nvt 0.657272 0.542336 555.59375\nvt 0.656647 0.554176 555.59375\nvt 0.661118 0.587868 555.59375\nvt 0.659988 0.571571 555.59375\nvt 0.662964 0.615311 555.59375\nvt 0.674728 0.651276 555.59375\nvt 0.670135 0.669899 555.59375\nvt 0.676804 0.687714 555.59375\nvt 0.677185 0.699173 555.59375\nvt 0.674713 0.708588 555.59375\nvt 0.609726 0.575264 555.59375\nvt 0.615173 0.585342 555.59375\nvt 0.630188 0.603722 555.59375\nvt 0.640671 0.627098 555.59375\nvt 0.655609 0.654404 555.59375\nvt 0.662476 0.675751 555.59375\nvt 0.667572 0.688835 555.59375\nvt 0.669998 0.700371 555.59375\nvt 0.667313 0.709869 555.59375\nvt 0.608093 0.554977 555.59375\nvt 0.627563 0.575798 555.59375\nvt 0.636276 0.586533 555.59375\nvt 0.645203 0.606743 555.59375\nvt 0.657379 0.63089 555.59375\nvt 0.665436 0.65963 555.59375\nvt 0.669159 0.674896 555.59375\nvt 0.672394 0.688248 555.59375\nvt 0.67366 0.69976 555.59375\nvt 0.671158 0.709175 555.59375\nvt 0.59108 0.57888 555.59375\nvt 0.602875 0.600594 555.59375\nvt 0.610794 0.623711 555.59375\nvt 0.619247 0.651138 555.59375\nvt 0.623657 0.665703 555.59375\nvt 0.62561 0.678986 555.59375\nvt 0.624603 0.691605 555.59375\nvt 0.623199 0.711815 555.59375\nvt 0.846588 -0.005463 555.59375\nvt 0.873352 -0.005005 555.59375\nvt 0.850769 0.028717 555.59375\nvt 0.884583 0.027817 555.59375\nvt 0.886597 -0.005005 555.59375\nvt 0.833984 0.034546 555.59375\nvt 0.834793 -0.005676 555.59375\nvt 0.522415 0.483063 555.59375\nvt 0.495987 0.464096 555.59375\nvt 0.488342 0.440155 555.59375\nvt 0.466743 0.41539 555.59375\nvt 0.464249 0.390015 555.59375\nvt 0.42099 0.32811 555.59375\nvt 0.409882 0.30127 555.59375\nvt 0.441902 0.282379 555.59375\nvt 0.46122 0.270538 555.59375\nvt 0.454369 0.230103 555.59375\nvt 0.451065 0.208282 555.59375\nvt 0.442703 0.150406 555.59375\nvt 0.435989 0.090439 555.59375\nvt 0.482887 0.099365 555.59375\nvt 0.504227 0.067398 555.59375\nvt 0.505966 0.038193 555.59375\nvt 0.521011 0.018311 555.59375\nvt 0.523331 0.000595 555.59375\nvt 0.424034 0.295502 555.59375\nvt 0.407608 0.315353 555.59375\nvt 0.51178 0.415573 555.59375\nvt 0.516678 0.472977 555.59375\nvt 0.503052 0.439011 555.59375\nvt 0.48893 0.417816 555.59375\nvt 0.486 0.394409 555.59375\nvt 0.468254 0.362808 555.59375\nvt 0.468369 0.343994 555.59375\nvt 0.484543 0.323273 555.59375\nvt 0.492325 0.312012 555.59375\nvt 0.521713 0.289032 555.59375\nvt 0.51033 0.270401 555.59375\nvt 0.488937 0.245422 555.59375\nvt 0.489395 0.200851 555.59375\nvt 0.486908 0.171982 555.59375\nvt 0.519516 0.112793 555.59375\nvt 0.525635 0.077591 555.59375\nvt 0.523849 0.050446 555.59375\nvt 0.551407 0.024048 555.59375\nvt 0.543152 -0.000031 555.59375\nvt 0.507584 0.360367 555.59375\nvt 0.683289 0.453568 555.59375\nvt 0.536484 0.407486 555.59375\nvt 0.567703 0.393784 555.59375\nvt 0.606842 0.413254 555.59375\nvt 0.649887 0.447281 555.59375\nvt 0.668823 0.448257 555.59375\nvt 0.450836 0.370651 555.59375\nvt 0.475578 0.372635 555.59375\nvt 0.458252 0.476028 555.59375\nvt 0.442841 0.461243 555.59375\nvt 0.426506 0.46875 555.59375\nvt 0.385872 0.446274 555.59375\nvt 0.36248 0.440826 555.59375\nvt 0.36026 0.409241 555.59375\nvt 0.347191 0.377304 555.59375\nvt 0.297829 0.013718 555.59375\nvt 0.329475 0.351227 555.59375\nvt 0.312164 0.33374 555.59375\nvt 0.297676 0.305817 555.59375\nvt 0.314697 0.289536 555.59375\nvt 0.321861 0.269958 555.59375\nvt 0.323242 0.245804 555.59375\nvt 0.324501 0.223969 555.59375\nvt 0.327209 0.204117 555.59375\nvt 0.328438 0.180389 555.59375\nvt 0.321594 0.155411 555.59375\nvt 0.222546 -0.004669 555.59375\nvt 0.478691 -0.00589 555.59375\nvt 0.308189 0.075378 555.59375\nvt 0.302498 0.055344 555.59375\nvt 0.305496 0.03775 555.59375\nvt 0.296127 -0.002258 555.59375\nvt 0.401558 0.460663 555.59375\nvt 0.394653 0.447556 555.59375\nvt 0.392479 0.414886 555.59375\nvt 0.389648 0.392029 555.59375\nvt 0.376762 0.35405 555.59375\nvt 0.367523 0.33017 555.59375\nvt 0.361938 0.312683 555.59375\nvt 0.361427 0.303299 555.59375\nvt 0.364784 0.292175 555.59375\nvt 0.362236 0.279907 555.59375\nvt 0.363419 0.25679 555.59375\nvt 0.367386 0.228058 555.59375\nvt 0.365921 0.193405 555.59375\nvt 0.370201 0.140228 555.59375\nvt 0.462502 0.031387 555.59375\nvt 0.370995 0.080521 555.59375\nvt 0.377762 0.059875 555.59375\nvt 0.38549 0.039093 555.59375\nvt 0.38826 0.022003 555.59375\nvt 0.388947 -0.008972 555.59375\nvt 0.370262 0.444305 555.59375\nvt 0.375298 0.413116 555.59375\nvt 0.37355 0.391937 555.59375\nvt 0.359772 0.352982 555.59375\nvt 0.340485 0.33107 555.59375\nvt 0.333557 0.308945 555.59375\nvt 0.331749 0.291565 555.59375\nvt 0.33342 0.273468 555.59375\nvt 0.336571 0.254791 555.59375\nvt 0.340225 0.238754 555.59375\nvt 0.33889 0.210495 555.59375\nvt 0.343567 0.182861 555.59375\nvt 0.344368 0.13382 555.59375\nvt 0.473206 0.010666 555.59375\nvt 0.340858 0.076981 555.59375\nvt 0.33812 0.056885 555.59375\nvt 0.335548 0.039261 555.59375\nvt 0.336174 0.018997 555.59375\nvt 0.329277 -0.00824 555.59375\nvt 0.437431 0.441452 555.59375\nvt 0.439301 0.413742 555.59375\nvt 0.430557 0.389923 555.59375\nvt 0.395836 0.355331 555.59375\nvt 0.39782 0.329071 555.59375\nvt 0.391571 0.313629 555.59375\nvt 0.389992 0.299606 555.59375\nvt 0.38797 0.295776 555.59375\nvt 0.386505 0.280457 555.59375\nvt 0.393448 0.256821 555.59375\nvt 0.390991 0.227783 555.59375\nvt 0.383507 0.195999 555.59375\nvt 0.389877 0.140671 555.59375\nvt 0.453224 0.06012 555.59375\nvt 0.406548 0.078079 555.59375\nvt 0.414238 0.056351 555.59375\nvt 0.424591 0.030273 555.59375\nvt 0.434448 0.011993 555.59375\nvt 0.439903 -0.003601 555.59375\nvt 0.462151 0.462555 555.59375\nvt 0.459595 0.440826 555.59375\nvt 0.452354 0.414978 555.59375\nvt 0.438095 0.390991 555.59375\nvt 0.415451 0.362579 555.59375\nvt 0.407211 0.328674 555.59375\nvt 0.400352 0.314972 555.59375\nvt 0.403702 0.300735 555.59375\nvt 0.403687 0.297119 555.59375\nvt 0.401451 0.2836 555.59375\nvt 0.400719 0.274887 555.59375\nvt 0.419579 0.227127 555.59375\nvt 0.421989 0.203629 555.59375\nvt 0.418755 0.144989 555.59375\nvt 0.34259 0.411392 555.59375\nvt 0.305679 0.400131 555.59375\nvt 0.256775 0.363571 555.59375\nvt 0.247555 0.32576 555.59375\nvt 0.249226 0.315155 555.59375\nvt 0.255394 0.298904 555.59375\nvt 0.256439 0.280548 555.59375\nvt 0.269249 0.264603 555.59375\nvt 0.276985 0.242447 555.59375\nvt 0.299232 0.218903 555.59375\nvt 0.306198 0.204086 555.59375\nvt 0.302666 0.183746 555.59375\nvt 0.289017 0.159271 555.59375\nvt 0.280319 0.079391 555.59375\nvt 0.273407 0.062256 555.59375\nvt 0.263359 0.045471 555.59375\nvt 0.259041 -0.0047 555.59375\nvt 0.259895 0.015793 555.59375\nvt 0.28537 0.372208 555.59375\nvt 0.279259 0.352615 555.59375\nvt 0.275009 0.335419 555.59375\nvt 0.271996 0.314774 555.59375\nvt 0.280846 0.284286 555.59375\nvt 0.284874 0.266769 555.59375\nvt 0.288589 0.24321 555.59375\nvt 0.303207 0.218521 555.59375\nvt 0.232868 0.020065 555.59375\nvt 0.310532 0.203445 555.59375\nvt 0.310875 0.182205 555.59375\nvt 0.301186 0.157043 555.59375\nvt 0.291405 0.078125 555.59375\nvt 0.288322 0.059921 555.59375\nvt 0.277733 0.040756 555.59375\nvt 0.275589 0.013214 555.59375\nvt 0.278946 -0.003387 555.59375\nvt 0.324387 0.386551 555.59375\nvt 0.30471 0.34903 555.59375\nvt 0.297318 0.33017 555.59375\nvt 0.283875 0.30835 555.59375\nvt 0.290924 0.285904 555.59375\nvt 0.30304 0.267212 555.59375\nvt 0.310646 0.244522 555.59375\nvt 0.322281 0.219467 555.59375\nvt 0.316147 0.20433 555.59375\nvt 0.318413 0.182343 555.59375\nvt 0.310005 0.15683 555.59375\nvt 0.299461 0.07692 555.59375\nvt 0.295288 0.058167 555.59375\nvt 0.290672 0.038284 555.59375\nvt 0.287537 0.014069 555.59375\nvt 0.284599 -0.002991 555.59375\nvt 0.331375 0.404739 555.59375\nvt 0.291473 0.390289 555.59375\nvt 0.23447 0.36705 555.59375\nvt 0.202133 0.363251 555.59375\nvt 0.169487 0.365417 555.59375\nvt 0.169888 0.319962 555.59375\nvt 0.168419 0.306885 555.59375\nvt 0.170685 0.289062 555.59375\nvt 0.168652 0.271973 555.59375\nvt 0.16811 0.249741 555.59375\nvt 0.167801 0.226105 555.59375\nvt 0.166355 0.207703 555.59375\nvt 0.167274 0.181442 555.59375\nvt 0.166466 0.164017 555.59375\nvt 0.16584 0.150177 555.59375\nvt 0.166748 0.085663 555.59375\nvt 0.166458 0.066727 555.59375\nvt 0.168095 0.046616 555.59375\nvt 0.164688 0.022644 555.59375\nvt 0.159161 -0.004639 555.59375\nvt 0.198631 0.322113 555.59375\nvt 0.197933 0.309921 555.59375\nvt 0.200333 0.292496 555.59375\nvt 0.202633 0.275299 555.59375\nvt 0.200851 0.254547 555.59375\nvt 0.210186 0.232712 555.59375\nvt 0.214546 0.212372 555.59375\nvt 0.221413 0.190933 555.59375\nvt 0.234573 0.175064 555.59375\nvt 0.240627 0.157944 555.59375\nvt 0.223297 0.083908 555.59375\nvt 0.217854 0.065994 555.59375\nvt 0.210995 0.04657 555.59375\nvt 0.203259 0.021194 555.59375\nvt 0.1945 -0.004639 555.59375\nvt 0.223221 0.323944 555.59375\nvt 0.220898 0.312271 555.59375\nvt 0.224873 0.295349 555.59375\nvt 0.226826 0.277664 555.59375\nvt 0.230377 0.258881 555.59375\nvt 0.254242 0.239578 555.59375\nvt 0.268486 0.216797 555.59375\nvt 0.27755 0.200119 555.59375\nvt 0.276398 0.180969 555.59375\nvt 0.266754 0.157928 555.59375\nvt 0.25589 0.082932 555.59375\nvt 0.253197 0.890316 0\nvt 0.269203 0.874916 0\nvt 0.341171 0.7812 0\nvt 0.405388 0.801769 0\nvt 1.010406 0.977915 0\nvt 0.994843 0.956758 0\nvt 0.973511 0.95161 0\nvt 0.949402 0.93758 0\nvt 0.924698 0.923466 0\nvt 0.89064 0.895638 0\nvt 0.858994 0.889544 0\nvt 0.81218 0.884125 0\nvt 0.748459 0.846264 0\nvt 0.699432 0.814461 0\nvt 0.657562 0.78561 0\nvt 0.647934 0.799107 0\nvt 0.640701 0.789375 0\nvt 0.611923 0.745094 0\nvt 0.590271 0.730751 0\nvt 0.55928 0.739151 0\nvt 0.534836 0.718567 0\nvt 0.52446 0.700905 0\nvt 0.504395 0.7033 0\nvt 0.478439 0.668274 0\nvt 0.449768 0.675713 0\nvt 0.432976 0.71331 0\nvt 0.420326 0.712524 0\nvt 0.404976 0.692139 0\nvt 0.381241 0.676125 0\nvt 0.368538 0.660416 0\nvt 0.351913 0.621964 0\nvt 0.32827 0.592201 0\nvt 0.304482 0.611465 0\nvt 0.277641 0.673622 0\nvt 0.259926 0.7062 0\nvt 0.249393 0.770142 0\nvt 0.207932 0.809608 0\nvt 0.163254 0.875662 0\nvt 0.231281 0.90406 0\nvt 0.309555 0.855042 0\nvt 0.330933 0.799644 0\nvt 0.376732 0.793884 0\nvt 1.042114 1.003284 0\nvt 1.005524 0.989028 0\nvt 0.979614 0.978652 0\nvt 0.962372 0.964429 0\nvt 0.9254 0.9507 0\nvt 0.886765 0.91835 0\nvt 0.860809 0.891575 0\nvt 0.82988 0.916496 0\nvt 0.7612 0.867153 0\nvt 0.715942 0.828003 0\nvt 0.657639 0.801388 0\nvt 0.646027 0.828644 0\nvt 0.636658 0.809853 0\nvt 0.612656 0.745468 0\nvt 0.591629 0.727936 0\nvt 0.558716 0.738686 0\nvt 0.535278 0.71843 0\nvt 0.522552 0.707397 0\nvt 0.492569 0.696831 0\nvt 0.470901 0.675491 0\nvt 0.450798 0.688416 0\nvt 0.431107 0.709633 0\nvt 0.40461 0.720711 0\nvt 0.382019 0.706253 0\nvt 0.367188 0.693977 0\nvt 0.352531 0.669205 0\nvt 0.337173 0.639206 0\nvt 0.323906 0.597939 0\nvt 0.311157 0.622795 0\nvt 0.290642 0.680298 0\nvt 0.277626 0.709198 0\nvt 0.258461 0.755257 0\nvt 0.24453 0.814224 0\nvt 0.166992 0.891132 0\nvt 0.198528 0.895695 0\nvt 0.3508 0.781555 0\nvt 0.366173 0.787727 0\nvt 0.387199 0.799343 0\nvt 0.988327 1.008445 0\nvt 0.944824 1.003963 0\nvt 0.924118 1.003427 0\nvt 0.899872 1.002946 0\nvt 0.874496 1.004192 0\nvt 0.860153 1.004169 0\nvt 0.836441 1.006297 0\nvt 0.800278 1.005611 0\nvt 0.752151 1.007679 0\nvt 0.711365 1.008772 0\nvt 0.682266 1.009714 0\nvt 0.656479 1.009034 0\nvt 0.638351 1.010694 0\nvt 0.620117 1.008702 0\nvt 0.584213 1.010765 0\nvt 0.553848 0.950972 0\nvt 0.530014 0.927174 0\nvt 0.501053 0.900488 0\nvt 0.481094 0.884769 0\nvt 0.468796 0.8685 0\nvt 0.444336 0.859875 0\nvt 0.420395 0.840672 0\nvt 0.256477 0.806194 0\nvt 0.274498 0.770393 0\nvt 0.330467 0.667572 0\nvt 0.404922 0.753227 0\nvt 0.23946 0.848629 0\nvt 0.297607 0.74469 0\nvt 0.318542 0.688881 0\nvt 0.370987 0.733582 0\nvt 1.021271 1.005279 0\nvt 0.98204 0.994788 0\nvt 0.958176 0.988235 0\nvt 0.938217 0.979319 0\nvt 0.905853 0.971221 0\nvt 0.876648 0.950921 0\nvt 0.851471 0.935476 0\nvt 0.818542 0.950591 0\nvt 0.757797 0.919819 0\nvt 0.70787 0.892479 0\nvt 0.666977 0.875685 0\nvt 0.649185 0.87866 0\nvt 0.637283 0.88332 0\nvt 0.615326 0.841129 0\nvt 0.584229 0.805637 0\nvt 0.549454 0.801434 0\nvt 0.52507 0.784054 0\nvt 0.506332 0.76696 0\nvt 0.484612 0.758266 0\nvt 0.47113 0.749893 0\nvt 0.438866 0.758774 0\nvt 0.420486 0.760822 0\nvt 0.384102 0.743523 0\nvt 0.35788 0.715576 0\nvt 0.342407 0.69384 0\nvt 0.179581 0.892952 0\nvt 0.25515 0.840908 0\nvt 0.272324 0.812988 0\nvt 0.334885 0.714668 0\nvt 0.405121 0.773979 0\nvt 0.23605 0.871716 0\nvt 0.302475 0.789604 0\nvt 0.323631 0.73436 0\nvt 0.373405 0.759182 0\nvt 0.18766 0.894127 0\nvt 0.345901 0.730415 0\nvt 0.361366 0.745995 0\nvt 0.385414 0.767372 0\nvt 1.007477 1.00663 0\nvt 0.966476 0.998628 0\nvt 0.943909 0.994592 0\nvt 0.92215 0.989218 0\nvt 0.892792 0.984969 0\nvt 0.869843 0.972984 0\nvt 0.84523 0.96495 0\nvt 0.810974 0.973504 0\nvt 0.755493 0.955943 0\nvt 0.709305 0.939729 0\nvt 0.673248 0.930813 0\nvt 0.652145 0.93187 0\nvt 0.637741 0.934952 0\nvt 0.617279 0.908844 0\nvt 0.584229 0.888512 0\nvt 0.551285 0.863506 0\nvt 0.527115 0.843109 0\nvt 0.50412 0.8228 0\nvt 0.483131 0.811481 0\nvt 0.470139 0.799583 0\nvt 0.441193 0.801464 0\nvt 0.420456 0.794514 0\nvt 0.246704 0.706184 329.9375\nvt 0.254738 0.694405 329.9375\nvt 0.249451 0.662109 329.9375\nvt 0.197651 0.639366 329.9375\nvt 0.184963 0.664864 329.9375\nvt 0.188541 0.678116 329.9375\nvt 0.246414 0.638802 329.9375\nvt 0.188274 0.606598 329.9375\nvt 0.185547 0.615303 329.9375\nvt 0.227245 0.736923 329.9375\nvt 0.177647 0.709488 329.9375\nvt 0.159679 0.752064 329.9375\nvt 0.209339 0.763977 329.9375\nvt 0.252411 0.625046 329.9375\nvt 0.225555 0.607582 329.9375\nvt 0.208897 0.589355 329.9375\nvt 0.190952 0.569138 329.9375\nvt 0.205891 0.788963 329.9375\nvt 0.195942 0.80621 329.9375\nvt 0.151684 0.784142 329.9375\nvt 0.189026 0.823563 329.9375\nvt 0.152271 0.822384 329.9375\nvt 0.181709 0.848587 329.9375\nvt 0.148987 0.838215 329.9375\nvt 0.167881 0.848892 329.9375\nvt 0.162777 0.874752 329.9375\nvt 0.143913 0.873646 329.9375\nvt 0.137917 0.843544 329.9375\nvt 0.155643 0.897871 329.9375\nvt 0.130352 0.89399 329.9375\nvt 0.116161 0.907282 329.9375\nvt 0.145058 0.920681 329.9375\nvt 0.232761 0.70813 329.9375\nvt 0.239334 0.659714 329.9375\nvt 0.241001 0.641342 329.9375\nvt 0.218681 0.738976 329.9375\nvt 0.200859 0.766499 329.9375\nvt 0.239552 0.625801 329.9375\nvt 0.190445 0.802635 329.9375\nvt 0.183121 0.827244 329.9375\nvt 0.177586 0.852901 329.9375\nvt 0.163002 0.846138 329.9375\nvt 0.136555 0.919956 329.9375\nvt 0.155922 0.877598 329.9375\nvt 0.14698 0.90099 329.9375\nvt 0.226051 0.653221 329.9375\nvt 0.232872 0.640671 329.9375\nvt 0.200233 0.621666 329.9375\nvt 0.198185 0.626961 329.9375\nvt 0.200161 0.637047 329.9375\nvt 0.225124 0.648033 329.9375\nvt 0.186722 0.623428 329.9375\nvt 0.193474 0.636864 329.9375\nvt 0.196087 0.63369 329.9375\nvt 0.194965 0.626526 329.9375\nvt 0.24836 0.672318 329.9375\nvt 0.238255 0.667641 329.9375\nvt 0.192215 0.650269 329.9375\nvt 0.235622 0.687057 329.9375\nvt 0.191475 0.671211 329.9375\nvt 0.194214 0.681366 329.9375\nvt 0.22633 0.697975 329.9375\nvt 0.229816 0.67511 329.9375\nvt 0.19701 0.660004 329.9375\nvt 0.230343 0.688179 329.9375\nvt 0.236515 0.71627 329.9375\nvt 0.229507 0.715233 329.9375\nvt 0.185043 0.688164 329.9375\nvt 0.180836 0.700294 329.9375\nvt 0.224075 0.727165 329.9375\nvt 0.231094 0.728348 329.9375\nvt 0.199718 0.685715 329.9375\nvt 0.196815 0.701454 329.9375\nvt 0.194614 0.710793 329.9375\nvt 0.185097 0.714836 329.9375\nvt 0.196136 0.722778 329.9375\nvt 0.203823 0.714584 329.9375\nvt 0.206581 0.701271 329.9375\nvt 0.206097 0.690033 329.9375\nvt 0.20475 0.728966 329.9375\nvt 0.211048 0.719063 329.9375\nvt 0.219025 0.708855 329.9375\nvt 0.217644 0.72316 329.9375\nvt 0.189068 0.683609 329.9375\nvt 0.180073 0.709686 329.9375\nvt 0.186176 0.691986 329.9375\nvt 0.182697 0.702057 329.9375\nvt 0.198338 0.689903 329.9375\nvt 0.186237 0.714149 329.9375\nvt 0.195377 0.720764 329.9375\nvt 0.201756 0.713951 329.9375\nvt 0.204029 0.702873 329.9375\nvt 0.203617 0.693512 329.9375\nvt 0.202518 0.725914 329.9375\nvt 0.207764 0.717705 329.9375\nvt 0.189293 0.688072 329.9375\nvt 0.181545 0.710609 329.9375\nvt 0.186806 0.695305 329.9375\nvt 0.183811 0.704033 329.9375\nvt 0.19733 0.693512 329.9375\nvt 0.186874 0.714493 329.9375\nvt 0.194778 0.720238 329.9375\nvt 0.200283 0.714333 329.9375\nvt 0.202259 0.704735 329.9375\nvt 0.201878 0.696632 329.9375\nvt 0.196621 0.703163 329.9375\nvt 0.194778 0.711044 329.9375\nvt 0.190281 0.691879 329.9375\nvt 0.183811 0.710884 329.9375\nvt 0.188183 0.697975 329.9375\nvt 0.185692 0.705338 329.9375\nvt 0.197033 0.696449 329.9375\nvt 0.188286 0.714149 329.9375\nvt 0.16967 0.755543 329.9375\nvt 0.172447 0.721817 329.9375\nvt 0.181114 0.728218 329.9375\nvt 0.178448 0.715797 329.9375\nvt 0.164391 0.748924 329.9375\nvt 0.210514 0.738663 329.9375\nvt 0.196568 0.760132 329.9375\nvt 0.184261 0.719894 329.9375\nvt 0.192875 0.726028 329.9375\nvt 0.199615 0.73085 329.9375\nvt 0.172211 0.75161 329.9375\nvt 0.174362 0.72541 329.9375\nvt 0.182079 0.729561 329.9375\nvt 0.17992 0.71946 329.9375\nvt 0.184654 0.722801 329.9375\nvt 0.176586 0.72728 329.9375\nvt 0.16114 0.788654 329.9375\nvt 0.174446 0.757233 329.9375\nvt 0.17786 0.796635 329.9375\nvt 0.160583 0.756596 329.9375\nvt 0.154091 0.782635 329.9375\nvt 0.191292 0.771465 329.9375\nvt 0.185898 0.791031 329.9375\nvt 0.168705 0.759441 329.9375\nvt 0.161789 0.786335 329.9375\nvt 0.172573 0.760838 329.9375\nvt 0.175339 0.792862 329.9375\nvt 0.207623 0.776505 329.9375\nvt 0.19799 0.776432 329.9375\nvt 0.189892 0.776577 329.9375\nvt 0.173386 0.770287 329.9375\nvt 0.166264 0.768909 329.9375\nvt 0.157928 0.767223 329.9375\nvt 0.153187 0.763866 329.9375\nvt 0.168015 0.764374 329.9375\nvt 0.162395 0.762398 329.9375\nvt 0.161182 0.767349 329.9375\nvt 0.170906 0.769291 329.9375\nvt 0.170567 0.765301 329.9375\nvt 0.167179 0.768581 329.9375\nvt 0.166626 0.846954 329.9375\nvt 0.172325 0.849346 329.9375\nvt 0.175854 0.832558 329.9375\nvt 0.151745 0.828804 329.9375\nvt 0.149914 0.837505 329.9375\nvt 0.1618 0.844234 329.9375\nvt 0.158772 0.851887 329.9375\nvt 0.148224 0.845901 329.9375\nvt 0.141815 0.849003 329.9375\nvt 0.146755 0.873936 329.9375\nvt 0.153362 0.876093 329.9375\nvt 0.149235 0.882004 329.9375\nvt 0.143398 0.880045 329.9375\nvt 0.134888 0.892939 329.9375\nvt 0.143627 0.896564 329.9375\nvt 0.17347 0.59697 329.9375\nvt 0.165924 0.553017 329.9375\nvt 0.183098 0.560341 329.9375\nvt 0.175598 0.61293 329.9375\nvt 0.175598 0.623825 329.9375\nvt 0.173191 0.644623 329.9375\nvt 0.169907 0.659676 329.9375\nvt 0.1586 0.65583 329.9375\nvt 0.152878 0.66967 329.9375\nvt 0.163567 0.672424 329.9375\nvt 0.179085 0.690918 329.9375\nvt 0.175137 0.698753 329.9375\nvt 0.171532 0.707436 329.9375\nvt 0.138409 0.70517 329.9375\nvt 0.138832 0.689072 329.9375\nvt 0.126534 0.714981 329.9375\nvt 0.156971 0.726295 329.9375\nvt 0.169609 0.716087 329.9375\nvt 0.165062 0.739609 329.9375\nvt 0.145672 0.743996 329.9375\nvt 0.116892 0.732552 329.9375\nvt 0.120392 0.74472 329.9375\nvt 0.115854 0.75576 329.9375\nvt 0.126102 0.76033 329.9375\nvt 0.131329 0.772972 329.9375\nvt 0.144203 0.770775 329.9375\nvt 0.151611 0.747475 329.9375\nvt 0.168446 0.567596 329.9375\nvt 0.104122 0.565872 329.9375\nvt 0.048073 0.535233 329.9375\nvt 0.050491 0.510818 329.9375\nvt 0.0749 0.526413 329.9375\nvt 0.130165 0.555412 329.9375\nvt 0.032196 0.501846 329.9375\nvt 0.03021 0.480499 329.9375\nvt 0.056027 0.480072 329.9375\nvt 0.124157 0.516548 329.9375\nvt 0.184273 0.543533 329.9375\nvt 0.088255 0.583641 329.9375\nvt 0.126381 0.616356 329.9375\nvt 0.154514 0.61879 329.9375\nvt 0.055503 0.566277 329.9375\nvt 0.038072 0.581055 329.9375\nvt 0.030149 0.600891 329.9375\nvt 0.102867 0.624313 329.9375\nvt 0.1168 0.644539 329.9375\nvt 0.120689 0.662651 329.9375\nvt 0.101622 0.669014 329.9375\nvt 0.111418 0.696739 329.9375\nvt 0.091383 0.714127 329.9375\nvt 0.110914 0.635864 329.9375\nvt 0.094265 0.661705 329.9375\nvt 0.005236 0.626129 329.9375\nvt 0.000914 0.591843 329.9375\nvt 0.034882 0.551697 329.9375\nvt 0.022965 0.569862 329.9375\nvt 0.000597 0.560997 329.9375\nvt 0.041724 0.5289 329.9375\nvt 0.00468 0.504601 329.9375\nvt 0.004865 0.487869 329.9375\nvt 0.006213 0.459213 329.9375\nvt 0.140015 0.526161 329.9375\nvt 0.006234 0.413422 329.9375\nvt 0.059299 0.437134 329.9375\nvt 0.10615 0.465149 329.9375\nvt 0.127575 0.489395 329.9375\nvt 0.136547 0.513687 329.9375\nvt 0.061481 0.42366 329.9375\nvt 0.02347 0.400879 329.9375\nvt 0.004351 0.374069 329.9375\nvt 0.092505 0.701126 329.9375\nvt 0.007139 0.656647 329.9375\nvt 0.066986 0.686661 329.9375\nvt 0.063189 0.702255 329.9375\nvt 0.05364 0.727951 329.9375\nvt 0.006419 0.700111 329.9375\nvt 0.056882 0.711952 329.9375\nvt 0.077246 0.726715 329.9375\nvt 0.053671 0.774113 329.9375\nvt 0.058796 0.756489 329.9375\nvt 0.005267 0.725044 329.9375\nvt 0.068766 0.736671 329.9375\nvt 0.099461 0.743614 329.9375\nvt 0.095448 0.774311 329.9375\nvt 0.077143 0.809292 329.9375\nvt 0.047548 0.834751 329.9375\nvt 0.032659 0.808258 329.9375\nvt 0.042712 0.779099 329.9375\nvt 0.075485 0.754475 329.9375\nvt 0.006512 0.767456 329.9375\nvt 0.006152 0.795963 329.9375\nvt 0.114124 0.784157 329.9375\nvt 0.117079 0.778919 329.9375\nvt 0.138996 0.7892 329.9375\nvt 0.132534 0.808022 329.9375\nvt 0.107271 0.795818 329.9375\nvt 0.046437 0.849819 329.9375\nvt 0.006584 0.831032 329.9375\nvt 0.059114 0.871578 329.9375\nvt 0.058209 0.883055 329.9375\nvt 0.007253 0.864922 329.9375\nvt 0.090601 0.640945 329.9375\nvt 0.085878 0.634239 329.9375\nvt 0.046489 0.614365 329.9375\nvt 0.033986 0.6091 329.9375\nvt 0.033462 0.635361 329.9375\nvt 0.080847 0.656029 329.9375\nvt 0.022893 0.582863 329.9375\nvt 0.01388 0.577553 329.9375\nvt 0.014075 0.595901 329.9375\nvt 0.027195 0.601341 329.9375\nvt 0.031928 0.5895 329.9375\nvt 0.096415 0.598045 329.9375\nvt 0.072285 0.5858 329.9375\nvt 0.057931 0.592728 329.9375\nvt 0.050594 0.60321 329.9375\nvt 0.105089 0.621979 329.9375\nvt 0.110584 0.629089 329.9375\nvt 0.114578 0.634415 329.9375\nvt 0.146156 0.644043 329.9375\nvt 0.154667 0.647095 329.9375\nvt 0.158165 0.638893 329.9375\nvt 0.145344 0.622902 329.9375\nvt 0.123747 0.61937 329.9375\nvt 0.056171 0.569862 329.9375\nvt 0.035108 0.554977 329.9375\nvt 0.022914 0.573578 329.9375\nvt 0.038349 0.584984 329.9375\nvt 0.025075 0.566544 329.9375\nvt 0.032289 0.555534 329.9375\nvt 0.040284 0.545563 329.9375\nvt 0.036435 0.54174 329.9375\nvt 0.015948 0.561127 329.9375\nvt 0.033986 0.538605 329.9375\nvt 0.0178 0.525436 329.9375\nvt 0.015598 0.555954 329.9375\nvt 0.044173 0.532814 329.9375\nvt 0.046004 0.514343 329.9375\nvt 0.032175 0.507576 329.9375\nvt 0.017018 0.496994 329.9375\nvt 0.016843 0.509628 329.9375\nvt 0.039378 0.52803 329.9375\nvt 0.086906 0.586472 329.9375\nvt 0.099791 0.572021 329.9375\nvt 0.054298 0.547249 329.9375\nvt 0.043649 0.560616 329.9375\nvt 0.060328 0.572403 329.9375\nvt 0.152073 0.585205 329.9375\nvt 0.149635 0.569069 329.9375\nvt 0.123941 0.560852 329.9375\nvt 0.087534 0.542969 329.9375\nvt 0.071648 0.533669 329.9375\nvt 0.069199 0.546692 329.9375\nvt 0.105923 0.565437 329.9375\nvt 0.152981 0.593964 329.9375\nvt 0.080313 0.534157 329.9375\nvt 0.12714 0.558678 329.9375\nvt 0.159698 0.569031 329.9375\nvt 0.157558 0.556625 329.9375\nvt 0.160194 0.548248 329.9375\nvt 0.135498 0.533852 329.9375\nvt 0.122038 0.525711 329.9375\nvt 0.064383 0.494995 329.9375\nvt 0.0426 0.495453 329.9375\nvt 0.044276 0.513489 329.9375\nvt 0.059701 0.521011 329.9375\nvt 0.028975 0.496429 329.9375\nvt 0.027627 0.481812 329.9375\nvt 0.016133 0.467178 329.9375\nvt 0.015217 0.486801 329.9375\nvt 0.04548 0.482849 329.9375\nvt 0.06108 0.482559 329.9375\nvt 0.102661 0.504822 329.9375\nvt 0.112406 0.51075 329.9375\nvt 0.110039 0.503006 329.9375\nvt 0.097227 0.491257 329.9375\nvt 0.084038 0.468048 329.9375\nvt 0.05792 0.458069 329.9375\nvt 0.035396 0.442261 329.9375\nvt 0.035386 0.46994 329.9375\nvt 0.025744 0.646255 329.9375\nvt 0.027071 0.667404 329.9375\nvt 0.06358 0.688255 329.9375\nvt 0.081392 0.698334 329.9375\nvt 0.082401 0.684303 329.9375\nvt 0.08777 0.675926 329.9375\nvt 0.082628 0.67083 329.9375\nvt 0.056676 0.693459 329.9375\nvt 0.021134 0.673241 329.9375\nvt 0.02064 0.702507 329.9375\nvt 0.045037 0.717667 329.9375\nvt 0.049823 0.710556 329.9375\nvt 0.054092 0.703995 329.9375\nvt 0.093842 0.707001 329.9375\nvt 0.06782 0.692299 329.9375\nvt 0.06394 0.708199 329.9375\nvt 0.09269 0.720276 329.9375\nvt 0.06501 0.732262 329.9375\nvt 0.079468 0.742668 329.9375\nvt 0.089531 0.733681 329.9375\nvt 0.069487 0.725357 329.9375\nvt 0.048968 0.734962 329.9375\nvt 0.025075 0.720207 329.9375\nvt 0.024313 0.736671 329.9375\nvt 0.041941 0.755398 329.9375\nvt 0.054926 0.751881 329.9375\nvt 0.061553 0.744324 329.9375\nvt 0.067183 0.737701 329.9375\nvt 0.052364 0.763866 329.9375\nvt 0.039687 0.76733 329.9375\nvt 0.022502 0.74913 329.9375\nvt 0.023295 0.776398 329.9375\nvt 0.041951 0.783924 329.9375\nvt 0.106335 0.704758 329.9375\nvt 0.105389 0.718155 329.9375\nvt 0.104637 0.726784 329.9375\nvt 0.121574 0.739006 329.9375\nvt 0.127995 0.72728 329.9375\nvt 0.135918 0.720711 329.9375\nvt 0.136208 0.709938 329.9375\nvt 0.13171 0.725624 329.9375\nvt 0.124714 0.738396 329.9375\nvt 0.145611 0.746696 329.9375\nvt 0.153843 0.733788 329.9375\nvt 0.145737 0.720276 329.9375\nvt 0.136845 0.727692 329.9375\nvt 0.15971 0.736122 329.9375\nvt 0.169216 0.728416 329.9375\nvt 0.173191 0.707115 329.9375\nvt 0.148399 0.700569 329.9375\nvt 0.148113 0.711571 329.9375\nvt 0.170719 0.713058 329.9375\nvt 0.169373 0.696976 329.9375\nvt 0.171585 0.692551 329.9375\nvt 0.162868 0.682198 329.9375\nvt 0.156879 0.680672 329.9375\nvt 0.149029 0.691551 329.9375\nvt 0.121586 0.665047 329.9375\nvt 0.102322 0.671463 329.9375\nvt 0.139881 0.691681 329.9375\nvt 0.154041 0.672096 329.9375\nvt 0.127327 0.653458 329.9375\nvt 0.12957 0.66394 329.9375\nvt 0.148205 0.667999 329.9375\nvt 0.15152 0.659966 329.9375\nvt 0.117449 0.791592 329.9375\nvt 0.112066 0.800732 329.9375\nvt 0.131874 0.810307 329.9375\nvt 0.136936 0.79549 329.9375\nvt 0.119743 0.787476 329.9375\nvt 0.117283 0.766026 329.9375\nvt 0.103319 0.755707 329.9375\nvt 0.099915 0.781837 329.9375\nvt 0.115803 0.790195 329.9375\nvt 0.118303 0.785717 329.9375\nvt 0.125988 0.769886 329.9375\nvt 0.138462 0.815929 329.9375\nvt 0.151642 0.82552 329.9375\nvt 0.151253 0.799896 329.9375\nvt 0.142761 0.803326 329.9375\nvt 0.193092 0.808365 329.9375\nvt 0.18034 0.802292 329.9375\nvt 0.163403 0.794224 329.9375\nvt 0.153812 0.789673 329.9375\nvt 0.1544 0.828457 329.9375\nvt 0.18565 0.833298 329.9375\nvt 0.037423 0.786842 329.9375\nvt 0.019179 0.779518 329.9375\nvt 0.018942 0.797432 329.9375\nvt 0.031085 0.80521 329.9375\nvt 0.032453 0.817108 329.9375\nvt 0.019127 0.808582 329.9375\nvt 0.019436 0.832809 329.9375\nvt 0.041992 0.845848 329.9375\nvt 0.042743 0.835403 329.9375\nvt 0.018983 0.841423 329.9375\nvt 0.019426 0.863472 329.9375\nvt 0.047939 0.875368 329.9375\nvt 0.048536 0.867878 329.9375\nvt 0.040243 0.85368 329.9375\nvt 0.069445 0.76162 329.9375\nvt 0.063828 0.781094 329.9375\nvt 0.050903 0.79192 329.9375\nvt 0.043782 0.812683 329.9375\nvt 0.05435 0.831524 329.9375\nvt 0.075424 0.813389 329.9375\nvt 0.088501 0.788383 329.9375\nvt 0.091373 0.766426 329.9375\nvt 0.071524 0.877216 329.9375\nvt 0.106665 0.891994 329.9375\nvt 0.114124 0.885069 329.9375\nvt 0.122017 0.873302 329.9375\nvt 0.11754 0.850945 329.9375\nvt 0.126411 0.84668 329.9375\nvt 0.127625 0.840824 329.9375\nvt 0.116182 0.832611 329.9375\nvt 0.095356 0.822727 329.9375\nvt 0.10014 0.814587 329.9375\nvt 0.094151 0.811485 329.9375\nvt 0.083193 0.83252 329.9375\nvt 0.06394 0.84922 329.9375\nvt 0.063437 0.85611 329.9375\nvt 0.072029 0.870907 329.9375\nvt 0.209721 1.000184 329.9375\nvt 0.001758 0.99449 329.9375\nvt 0.143192 0.997002 329.9375\nvt 0.179951 0.957853 329.9375\nvt 0.083523 0.922478 329.9375\nvt 0.005791 0.899683 329.9375\nvt 0.003805 0.946447 329.9375\nvt 0.129959 0.976349 329.9375\nvt 0.193184 0.982605 329.9375\nvt 0.070011 0.913719 329.9375\nvt 0.050625 0.883581 329.9375\nvt 0.017275 0.869728 329.9375\nvt 0.016133 0.896166 329.9375\nvt 0.022369 0.911905 329.9375\nvt 0.020866 0.946194 329.9375\nvt 0.097754 0.965197 329.9375\nvt 0.074179 0.928604 329.9375\nvt 0.025497 0.959775 329.9375\nvt 0.023912 0.995479 329.9375\nvt 0.116882 0.999858 329.9375\nvt 0.103319 0.978833 329.9375\nvt 0.163353 0.96391 329.9375\nvt 0.14238 0.941606 329.9375\nvt 0.137287 0.941279 329.9375\nvt 0.125114 0.933754 329.9375\nvt 0.090797 0.919649 329.9375\nvt 0.105728 0.942947 329.9375\nvt 0.191299 0.993257 329.9375\nvt 0.174683 0.975605 329.9375\nvt 0.100409 0.948732 329.9375\nvt 0.124878 0.98682 329.9375\n\nf 58/58 41/41 40/40 57/57 \nf 60/60 43/43 42/42 59/59 \nf 55/55 1/1 54/54 39/39 \nf 60/60 24/24 25/25 61/61 \nf 17/17 36/36 35/35 16/16 \nf 38/38 53/53 52/52 19/19 \nf 16/16 35/35 34/34 15/15 \nf 19/19 52/52 51/51 20/20 \nf 20/20 51/51 50/50 56/56 \nf 56/56 50/50 49/49 37/37 \nf 15/15 34/34 33/33 14/14 \nf 37/37 49/49 48/48 18/18 \nf 18/18 48/48 47/47 64/64 \nf 64/64 47/47 46/46 63/63 \nf 63/63 46/46 45/45 62/62 \nf 62/62 45/45 44/44 61/61 \nf 61/61 44/44 43/43 60/60 \nf 14/14 33/33 32/32 13/13 \nf 13/13 32/32 31/31 12/12 \nf 12/12 31/31 30/30 11/11 \nf 11/11 30/30 29/29 10/10 \nf 10/10 29/29 28/28 9/9 \nf 9/9 28/28 27/27 8/8 \nf 8/8 27/27 26/26 7/7 \nf 7/7 26/26 25/25 6/6 \nf 6/6 25/25 24/24 5/5 \nf 5/5 24/24 23/23 4/4 \nf 4/4 23/23 22/22 3/3 \nf 3/3 22/22 21/21 2/2 \nf 59/59 42/42 41/41 58/58 \nf 38/38 34/34 35/35 39/39 \nf 58/58 22/22 23/23 59/59 \nf 36/36 55/55 39/39 35/35 \nf 39/39 54/54 53/53 38/38 \nf 57/57 21/21 22/22 58/58 \nf 59/59 23/23 24/24 60/60 \nf 19/19 33/33 34/34 38/38 \nf 20/20 32/32 33/33 19/19 \nf 56/56 31/31 32/32 20/20 \nf 37/37 30/30 31/31 56/56 \nf 18/18 29/29 30/30 37/37 \nf 64/64 28/28 29/29 18/18 \nf 63/63 27/27 28/28 64/64 \nf 62/62 26/26 27/27 63/63 \nf 61/61 25/25 26/26 62/62 \nf 266/266 88/88 65/65 \nf 82/82 71/71 72/72 \nf 249/249 248/248 74/74 \nf 149/149 71/71 148/148 \nf 81/81 82/82 72/72 73/73 \nf 69/69 84/84 457/470 \nf 89/89 67/67 68/68 \nf 90/90 66/66 67/67 89/89 \nf 91/91 65/65 66/66 90/90 \nf 264/264 92/92 75/75 76/76 \nf 147/147 78/78 77/77 148/148 \nf 148/148 71/71 82/82 147/147 \nf 249/249 74/74 146/146 \nf 476/489 70/70 77/77 478/491 \nf 84/84 478/491 479/492 85/85 \nf 479/492 78/78 79/79 480/493 \nf 86/86 480/493 481/494 87/87 \nf 265/265 482/495 477/490 83/83 \nf 68/68 84/84 85/85 89/89 \nf 89/89 85/85 86/86 90/90 \nf 90/90 86/86 87/87 91/91 \nf 266/266 265/265 83/83 88/88 \nf 266/266 91/91 87/87 265/265 \nf 100/100 95/95 101/101 \nf 100/100 96/96 95/95 \nf 99/99 93/93 75/75 \nf 94/94 93/93 99/99 \nf 99/99 97/97 98/98 94/94 \nf 75/75 92/92 97/97 99/99 \nf 100/100 97/97 92/92 96/96 \nf 101/101 98/98 97/97 100/100 \nf 105/105 104/104 103/103 \nf 105/105 102/102 94/94 \nf 94/94 98/98 104/104 105/105 \nf 103/103 102/102 105/105 \nf 141/141 117/117 140/140 \nf 123/123 103/103 104/104 124/124 \nf 123/123 106/106 103/103 \nf 125/125 121/121 120/120 126/126 \nf 144/144 126/126 120/120 145/145 \nf 124/124 104/104 121/121 125/125 \nf 130/130 134/134 133/133 129/129 \nf 143/143 142/142 134/134 130/130 \nf 134/134 112/112 111/111 133/133 \nf 123/123 127/127 107/107 106/106 \nf 139/139 116/116 115/115 \nf 124/124 128/128 127/127 123/123 \nf 125/125 129/129 128/128 124/124 \nf 126/126 130/130 129/129 125/125 \nf 127/127 131/131 108/108 107/107 \nf 145/145 118/118 144/144 \nf 128/128 132/132 131/131 127/127 \nf 129/129 133/133 132/132 128/128 \nf 131/131 136/136 135/135 108/108 \nf 122/122 110/110 136/136 \nf 133/133 111/111 122/122 132/132 \nf 136/136 131/131 132/132 122/122 \nf 136/136 110/110 109/109 135/135 \nf 113/113 112/112 134/134 142/142 \nf 143/143 130/130 126/126 144/144 \nf 138/138 140/140 139/139 137/137 \nf 140/140 117/117 116/116 139/139 \nf 115/115 114/114 137/137 139/139 \nf 140/140 138/138 118/118 141/141 \nf 142/142 137/137 114/114 113/113 \nf 143/143 138/138 137/137 142/142 \nf 144/144 118/118 138/138 143/143 \nf 146/146 79/79 78/78 147/147 \nf 74/74 80/80 79/79 146/146 \nf 147/147 82/82 81/81 146/146 \nf 148/148 77/77 70/70 149/149 \nf 224/224 175/175 225/225 150/150 \nf 167/167 189/189 188/188 181/181 \nf 175/175 182/182 151/151 225/225 \nf 122/122 111/111 172/172 173/173 \nf 224/224 110/110 122/122 173/173 \nf 176/176 173/173 172/172 177/177 \nf 180/180 169/169 168/168 181/181 \nf 177/177 172/172 171/171 178/178 \nf 181/181 168/168 167/167 \nf 178/178 171/171 170/170 179/179 \nf 222/222 165/165 435/448 223/223 \nf 179/179 170/170 169/169 180/180 \nf 168/168 169/169 114/114 115/115 \nf 169/169 170/170 113/113 114/114 \nf 170/170 171/171 112/112 113/113 \nf 171/171 172/172 111/111 112/112 \nf 150/150 110/110 224/224 \nf 167/167 168/168 115/115 116/116 \nf 190/190 166/166 165/165 \nf 190/190 189/189 167/167 166/166 \nf 222/222 200/200 199/199 221/221 \nf 182/182 213/213 212/212 151/151 \nf 176/176 183/183 182/182 175/175 \nf 177/177 184/184 183/183 176/176 \nf 178/178 185/185 184/184 177/177 \nf 179/179 186/186 185/185 178/178 \nf 180/180 187/187 186/186 179/179 \nf 181/181 188/188 187/187 180/180 \nf 200/200 210/210 209/209 199/199 \nf 183/183 214/214 213/213 182/182 \nf 187/187 218/218 217/217 186/186 \nf 185/185 216/216 215/215 184/184 \nf 186/186 217/217 216/216 185/185 \nf 165/165 222/222 221/221 190/190 \nf 188/188 219/219 218/218 187/187 \nf 189/189 220/220 219/219 188/188 \nf 190/190 221/221 220/220 189/189 \nf 191/191 201/201 153/153 152/152 \nf 155/155 293/304 295/306 156/156 \nf 192/192 295/306 293/304 201/201 \nf 193/193 294/305 295/306 192/192 \nf 193/193 194/194 202/202 294/305 \nf 195/195 205/205 202/202 194/194 \nf 196/196 206/206 205/205 195/195 \nf 197/197 207/207 206/206 196/196 \nf 198/198 208/208 207/207 197/197 \nf 199/199 209/209 208/208 198/198 \nf 211/211 433/446 163/163 210/210 \nf 201/201 293/304 292/303 153/153 \nf 210/210 163/163 174/174 209/209 \nf 294/305 202/202 158/158 157/157 \nf 676/689 593/606 592/605 675/688 \nf 216/216 194/194 193/193 215/215 \nf 674/687 591/604 590/603 673/686 \nf 205/205 159/159 158/158 202/202 \nf 206/206 160/160 159/159 205/205 \nf 207/207 161/161 160/160 206/206 \nf 208/208 162/162 161/161 207/207 \nf 209/209 174/174 162/162 208/208 \nf 432/445 164/164 431/444 211/211 \nf 201/201 191/191 192/192 \nf 184/184 215/215 214/214 183/183 \nf 213/213 191/191 152/152 212/212 \nf 214/214 192/192 191/191 213/213 \nf 215/215 193/193 192/192 214/214 \nf 675/688 592/605 591/604 674/687 \nf 217/217 195/195 194/194 216/216 \nf 218/218 196/196 195/195 217/217 \nf 219/219 197/197 196/196 218/218 \nf 220/220 198/198 197/197 219/219 \nf 221/221 199/199 198/198 220/220 \nf 223/223 430/443 164/164 432/445 \nf 173/173 176/176 175/175 224/224 \nf 92/92 74/74 250/250 \nf 250/250 74/74 247/247 251/251 \nf 251/251 247/247 119/119 252/252 \nf 253/253 246/246 245/245 254/254 \nf 252/252 119/119 246/246 253/253 \nf 211/211 210/210 200/200 432/445 \nf 257/257 242/242 241/241 258/258 \nf 254/254 245/245 244/244 255/255 \nf 165/165 235/235 236/236 435/448 \nf 258/258 241/241 240/240 259/259 \nf 255/255 244/244 243/243 256/256 \nf 259/259 240/240 239/239 260/260 \nf 260/260 235/235 234/234 259/259 \nf 262/262 260/260 239/239 263/263 \nf 262/262 236/236 235/235 260/260 \nf 247/247 74/74 248/248 \nf 246/246 119/119 73/73 72/72 \nf 121/121 104/104 98/98 101/101 \nf 101/101 95/95 120/120 121/121 \nf 96/96 226/226 95/95 \nf 226/226 227/227 120/120 95/95 \nf 227/227 228/228 145/145 120/120 \nf 228/228 229/229 118/118 145/145 \nf 229/229 230/230 141/141 118/118 \nf 230/230 231/231 117/117 141/141 \nf 231/231 232/232 116/116 117/117 \nf 232/232 233/233 167/167 116/116 \nf 233/233 234/234 166/166 167/167 \nf 234/234 235/235 165/165 166/166 \nf 248/248 73/73 119/119 247/247 \nf 249/249 81/81 73/73 248/248 \nf 146/146 81/81 249/249 \nf 256/256 243/243 242/242 257/257 \nf 250/250 96/96 92/92 \nf 251/251 226/226 96/96 250/250 \nf 252/252 227/227 226/226 251/251 \nf 253/253 228/228 227/227 252/252 \nf 254/254 229/229 228/228 253/253 \nf 255/255 230/230 229/229 254/254 \nf 256/256 231/231 230/230 255/255 \nf 257/257 232/232 231/231 256/256 \nf 258/258 233/233 232/232 257/257 \nf 259/259 234/234 233/233 258/258 \nf 263/263 238/238 261/261 262/262 \nf 262/262 261/261 237/237 236/236 \nf 264/264 80/80 74/74 92/92 \nf 482/495 481/494 80/80 264/264 \nf 65/65 91/91 266/266 \nf 280/291 267/267 155/155 \nf 281/292 156/156 157/157 282/293 \nf 283/294 158/158 159/159 284/295 \nf 287/298 162/162 174/174 288/299 \nf 280/291 155/155 156/156 281/292 \nf 282/293 157/157 158/158 283/294 \nf 284/295 159/159 160/160 285/296 \nf 432/445 200/200 222/222 223/223 \nf 285/296 160/160 161/161 286/297 \nf 288/299 174/174 163/163 289/300 \nf 286/297 161/161 162/162 287/298 \nf 433/446 290/301 289/300 163/163 \nf 291/302 278/288 279/290 290/301 \nf 318/330 268/268 319/332 \nf 269/270 268/268 318/330 \nf 282/293 270/272 269/269 281/292 \nf 283/294 271/274 270/272 282/293 \nf 284/295 272/276 271/274 283/294 \nf 285/296 273/278 272/276 284/295 \nf 286/297 274/280 273/278 285/296 \nf 287/298 275/282 274/280 286/297 \nf 288/299 276/284 275/282 287/298 \nf 289/300 277/286 276/284 288/299 \nf 290/301 279/290 277/286 289/300 \nf 293/304 155/155 154/154 292/303 \nf 294/305 157/157 156/156 295/306 \nf 316/327 279/289 278/287 317/328 \nf 315/326 314/325 276/283 277/285 \nf 311/322 310/321 272/275 273/277 \nf 314/325 313/324 275/281 276/283 \nf 316/327 315/326 277/285 279/289 \nf 307/318 268/268 269/270 \nf 313/324 312/323 274/279 275/281 \nf 310/321 309/320 271/273 272/275 \nf 312/323 311/322 273/277 274/279 \nf 307/318 269/270 270/271 308/319 \nf 309/320 308/319 270/271 271/273 \nf 317/328 306/317 305/316 316/327 \nf 307/318 296/307 268/268 \nf 308/319 297/308 296/307 307/318 \nf 309/320 298/309 297/308 308/319 \nf 310/321 299/310 298/309 309/320 \nf 311/322 300/311 299/310 310/321 \nf 312/323 301/312 300/311 311/322 \nf 313/324 302/313 301/312 312/323 \nf 314/325 303/314 302/313 313/324 \nf 315/326 304/315 303/314 314/325 \nf 316/327 305/316 304/315 315/326 \nf 318/329 280/291 281/292 269/269 \nf 319/331 267/267 280/291 318/329 \nf 321/334 343/356 342/355 352/365 \nf 352/365 305/316 306/317 321/334 \nf 349/362 348/361 301/312 302/313 \nf 351/364 350/363 303/314 304/315 \nf 334/347 333/346 323/336 322/335 \nf 352/365 351/364 304/315 305/316 \nf 348/361 347/360 300/311 301/312 \nf 350/363 349/362 302/313 303/314 \nf 343/356 332/345 331/344 342/355 \nf 347/360 346/359 299/310 300/311 \nf 346/359 345/358 298/309 299/310 \nf 345/358 344/357 297/308 298/309 \nf 344/357 334/347 322/335 320/333 \nf 320/333 296/307 297/308 344/357 \nf 335/348 324/337 333/346 334/347 \nf 336/349 325/338 324/337 335/348 \nf 337/350 326/339 325/338 336/349 \nf 338/351 327/340 326/339 337/350 \nf 339/352 328/341 327/340 338/351 \nf 340/353 329/342 328/341 339/352 \nf 341/354 330/343 329/342 340/353 \nf 342/355 331/344 330/343 341/354 \nf 352/365 342/355 341/354 351/364 \nf 345/358 335/348 334/347 344/357 \nf 346/359 336/349 335/348 345/358 \nf 347/360 337/350 336/349 346/359 \nf 348/361 338/351 337/350 347/360 \nf 349/362 339/352 338/351 348/361 \nf 350/363 340/353 339/352 349/362 \nf 351/364 341/354 340/353 350/363 \nf 380/393 374/387 373/386 379/392 \nf 376/389 375/388 327/340 328/341 \nf 379/392 331/344 332/345 380/393 \nf 367/380 366/379 324/337 325/338 \nf 378/391 377/390 329/342 330/343 \nf 375/388 369/382 368/381 \nf 377/390 376/389 328/341 329/342 \nf 366/379 365/378 333/346 324/337 \nf 368/381 367/380 325/338 326/339 \nf 365/378 364/377 323/336 333/346 \nf 374/387 361/374 360/373 373/386 \nf 365/378 363/376 353/366 364/377 \nf 366/379 354/367 363/376 365/378 \nf 367/380 362/375 354/367 366/379 \nf 368/381 355/368 362/375 367/380 \nf 369/382 356/369 355/368 368/381 \nf 370/383 357/370 356/369 369/382 \nf 371/384 358/371 357/370 370/383 \nf 372/385 359/372 358/371 371/384 \nf 373/386 360/373 359/372 372/385 \nf 379/392 378/391 330/343 331/344 \nf 368/381 326/339 327/340 375/388 \nf 376/389 370/383 369/382 375/388 \nf 377/390 371/384 370/383 376/389 \nf 378/391 372/385 371/384 377/390 \nf 379/392 373/386 372/385 378/391 \nf 401/414 360/373 361/374 402/415 \nf 398/411 397/410 356/369 357/370 \nf 401/414 400/413 359/372 360/373 \nf 394/407 393/406 363/376 354/367 \nf 400/413 399/412 358/371 359/372 \nf 397/410 395/408 355/368 356/369 \nf 421/434 411/424 410/423 420/433 \nf 393/406 381/394 353/366 363/376 \nf 398/411 417/430 416/429 397/410 \nf 399/412 398/411 357/370 358/371 \nf 396/409 394/407 354/367 362/375 \nf 412/425 383/396 382/395 \nf 403/416 384/397 383/396 \nf 396/409 362/375 355/368 395/408 \nf 396/409 414/427 413/426 394/407 \nf 402/415 421/434 420/433 401/414 \nf 397/410 416/429 415/428 395/408 \nf 399/412 418/431 417/430 398/411 \nf 400/413 419/432 418/431 399/412 \nf 401/414 420/433 419/432 400/413 \nf 411/424 429/442 428/441 410/423 \nf 412/425 393/406 394/407 413/426 \nf 422/435 385/398 384/397 \nf 405/418 423/436 422/435 404/417 \nf 406/419 424/437 423/436 405/418 \nf 407/420 425/438 424/437 406/419 \nf 408/421 426/439 425/438 407/420 \nf 409/422 427/440 426/439 408/421 \nf 410/423 428/441 427/440 409/422 \nf 395/408 415/428 414/427 396/409 \nf 382/395 381/394 393/406 412/425 \nf 413/426 403/416 383/396 412/425 \nf 414/427 404/417 403/416 413/426 \nf 415/428 405/418 404/417 414/427 \nf 416/429 406/419 405/418 415/428 \nf 417/430 407/420 406/419 416/429 \nf 418/431 408/421 407/420 417/430 \nf 419/432 409/422 408/421 418/431 \nf 420/433 410/423 409/422 419/432 \nf 429/442 392/405 391/404 428/441 \nf 384/397 403/416 404/417 422/435 \nf 423/436 386/399 385/398 422/435 \nf 424/437 387/400 386/399 423/436 \nf 425/438 388/401 387/400 424/437 \nf 426/439 389/402 388/401 425/438 \nf 427/440 390/403 389/402 426/439 \nf 428/441 391/404 390/403 427/440 \nf 436/449 430/443 223/223 435/448 \nf 431/444 434/447 433/446 211/211 \nf 434/447 291/302 290/301 433/446 \nf 435/448 236/236 237/237 436/449 \nf 468/481 467/480 445/458 446/459 \nf 474/487 453/466 454/467 475/488 \nf 475/488 238/238 263/263 474/487 \nf 471/484 241/241 242/242 470/483 \nf 470/483 448/461 450/463 471/484 \nf 474/487 473/486 452/465 453/466 \nf 466/479 465/478 455/468 444/457 \nf 473/486 472/485 451/464 452/465 \nf 470/483 469/482 447/460 448/461 \nf 472/485 471/484 450/463 451/464 \nf 469/482 468/481 446/459 447/460 \nf 463/476 462/475 442/455 456/469 \nf 467/480 466/479 444/457 445/458 \nf 460/473 459/472 439/452 440/453 \nf 465/478 464/477 443/456 455/468 \nf 462/475 484/497 483/496 442/455 \nf 458/471 438/451 439/452 459/472 \nf 461/474 460/473 440/453 441/454 \nf 458/471 437/450 438/451 \nf 84/84 68/68 457/470 \nf 464/477 463/476 456/469 443/456 \nf 458/471 67/67 437/450 \nf 459/472 68/68 67/67 458/471 \nf 460/473 457/470 68/68 459/472 \nf 461/474 69/69 457/470 460/473 \nf 484/497 476/489 69/69 461/474 \nf 463/476 149/149 70/70 462/475 \nf 464/477 71/71 149/149 463/476 \nf 465/478 72/72 71/71 464/477 \nf 466/479 246/246 72/72 465/478 \nf 467/480 245/245 246/246 466/479 \nf 468/481 244/244 245/245 467/480 \nf 469/482 243/243 244/244 468/481 \nf 470/483 242/242 243/243 469/482 \nf 449/462 450/463 448/461 580/593 \nf 472/485 240/240 241/241 471/484 \nf 473/486 239/239 240/240 472/485 \nf 474/487 263/263 239/239 473/486 \nf 478/491 84/84 69/69 476/489 \nf 478/491 77/77 78/78 479/492 \nf 480/493 86/86 85/85 479/492 \nf 480/493 79/79 80/80 481/494 \nf 482/495 264/264 76/76 477/490 \nf 482/495 265/265 87/87 481/494 \nf 484/497 461/474 441/454 483/496 \nf 484/497 462/475 70/70 476/489 \nf 567/580 485/498 486/499 \nf 203/203 596/609 595/608 204/204 \nf 509/522 487/500 488/501 \nf 488/501 489/502 529/542 \nf 536/549 497/510 498/511 537/550 \nf 542/555 453/466 452/465 523/536 \nf 537/550 498/511 499/512 538/551 \nf 530/543 490/503 491/504 531/544 \nf 541/554 502/515 505/518 543/556 \nf 535/548 496/509 497/510 536/549 \nf 539/552 500/513 501/514 540/553 \nf 531/544 491/504 493/506 532/545 \nf 538/551 499/512 500/513 539/552 \nf 532/545 493/506 494/507 533/546 \nf 547/560 528/541 527/540 546/559 \nf 533/546 494/507 495/508 534/547 \nf 534/547 495/508 496/509 535/548 \nf 540/553 501/514 502/515 541/554 \nf 543/556 505/518 506/519 544/557 \nf 545/558 507/520 492/505 546/559 \nf 544/557 506/519 507/520 545/558 \nf 546/559 492/505 508/521 547/560 \nf 528/541 566/579 565/578 527/540 \nf 513/526 551/564 550/563 512/525 \nf 509/522 486/499 487/500 \nf 510/523 548/561 486/499 509/522 \nf 512/525 550/563 549/562 511/524 \nf 511/524 549/562 548/561 510/523 \nf 516/529 554/567 553/566 515/528 \nf 551/564 571/584 570/583 550/563 \nf 514/527 552/565 551/564 513/526 \nf 515/528 553/566 552/565 514/527 \nf 517/530 555/568 554/567 516/529 \nf 518/531 556/569 555/568 517/530 \nf 519/532 557/570 556/569 518/531 \nf 520/533 558/571 557/570 519/532 \nf 521/534 559/572 558/571 520/533 \nf 522/535 560/573 559/572 521/534 \nf 527/540 565/578 564/577 526/539 \nf 524/537 562/575 560/573 522/535 \nf 561/574 451/464 450/463 449/462 \nf 525/538 563/576 562/575 524/537 \nf 526/539 564/577 563/576 525/538 \nf 566/579 504/517 542/555 565/578 \nf 529/542 489/502 490/503 530/543 \nf 529/542 510/523 509/522 488/501 \nf 530/543 511/524 510/523 529/542 \nf 531/544 512/525 511/524 530/543 \nf 532/545 513/526 512/525 531/544 \nf 533/546 514/527 513/526 532/545 \nf 534/547 515/528 514/527 533/546 \nf 535/548 516/529 515/528 534/547 \nf 536/549 517/530 516/529 535/548 \nf 537/550 518/531 517/530 536/549 \nf 538/551 519/532 518/531 537/550 \nf 539/552 520/533 519/532 538/551 \nf 540/553 521/534 520/533 539/552 \nf 541/554 522/535 521/534 540/553 \nf 543/556 524/537 522/535 541/554 \nf 523/536 452/465 451/464 561/574 \nf 544/557 525/538 524/537 543/556 \nf 545/558 526/539 525/538 544/557 \nf 546/559 527/540 526/539 545/558 \nf 548/561 568/581 567/580 486/499 \nf 550/563 570/583 569/582 549/562 \nf 554/567 574/587 573/586 553/566 \nf 571/584 483/496 441/454 570/583 \nf 552/565 572/585 571/584 551/564 \nf 553/566 573/586 572/585 552/565 \nf 555/568 575/588 574/587 554/567 \nf 556/569 576/589 575/588 555/568 \nf 557/570 577/590 576/589 556/569 \nf 558/571 578/591 577/590 557/570 \nf 559/572 579/592 578/591 558/571 \nf 560/573 580/593 579/592 559/572 \nf 565/578 542/555 523/536 564/577 \nf 562/575 449/462 580/593 560/573 \nf 580/593 448/461 447/460 579/592 \nf 563/576 561/574 449/462 562/575 \nf 564/577 523/536 561/574 563/576 \nf 504/517 454/467 453/466 542/555 \nf 549/562 569/582 568/581 548/561 \nf 567/580 438/451 485/498 \nf 568/581 439/452 438/451 567/580 \nf 569/582 440/453 439/452 568/581 \nf 570/583 441/454 440/453 569/582 \nf 607/620 598/611 596/609 203/203 \nf 572/585 442/455 483/496 571/584 \nf 573/586 456/469 442/455 572/585 \nf 574/587 443/456 456/469 573/586 \nf 575/588 455/468 443/456 574/587 \nf 576/589 444/457 455/468 575/588 \nf 577/590 445/458 444/457 576/589 \nf 578/591 446/459 445/458 577/590 \nf 579/592 447/460 446/459 578/591 \nf 611/624 610/623 593/606 594/607 \nf 614/627 598/611 597/610 615/628 \nf 606/619 605/618 589/602 590/603 \nf 615/628 631/644 630/643 614/627 \nf 610/623 609/622 592/605 593/606 \nf 613/626 612/625 595/608 596/609 \nf 602/615 601/614 585/598 586/599 \nf 609/622 608/621 591/604 592/605 \nf 614/627 613/626 596/609 598/611 \nf 605/618 604/617 588/601 589/602 \nf 612/625 611/624 594/607 595/608 \nf 633/646 582/595 583/596 \nf 608/621 606/619 590/603 591/604 \nf 601/614 600/613 584/597 585/598 \nf 604/617 603/616 587/600 588/601 \nf 600/613 599/612 583/596 584/597 \nf 603/616 602/615 586/599 587/600 \nf 600/613 617/630 616/629 599/612 \nf 633/646 599/612 616/629 632/645 \nf 602/615 619/632 618/631 601/614 \nf 601/614 618/631 617/630 600/613 \nf 603/616 620/633 619/632 602/615 \nf 604/617 621/634 620/633 603/616 \nf 621/634 497/510 496/509 620/633 \nf 622/635 498/511 497/510 621/634 \nf 610/623 626/639 625/638 609/622 \nf 623/636 499/512 498/511 622/635 \nf 622/635 605/618 606/619 623/636 \nf 608/621 624/637 623/636 606/619 \nf 609/622 625/638 624/637 608/621 \nf 611/624 627/640 626/639 610/623 \nf 612/625 628/641 627/640 611/624 \nf 613/626 629/642 628/641 612/625 \nf 614/627 630/643 629/642 613/626 \nf 631/644 508/521 492/505 630/643 \nf 633/646 632/645 581/594 582/595 \nf 632/645 490/503 489/502 581/594 \nf 617/630 493/506 491/504 616/629 \nf 618/631 494/507 493/506 617/630 \nf 619/632 495/508 494/507 618/631 \nf 620/633 496/509 495/508 619/632 \nf 621/634 604/617 605/618 622/635 \nf 677/690 594/607 593/606 676/689 \nf 204/204 595/608 594/607 677/690 \nf 624/637 500/513 499/512 623/636 \nf 625/638 501/514 500/513 624/637 \nf 626/639 502/515 501/514 625/638 \nf 627/640 505/518 502/515 626/639 \nf 628/641 506/519 505/518 627/640 \nf 629/642 507/520 506/519 628/641 \nf 630/643 492/505 507/520 629/642 \nf 632/645 616/629 491/504 490/503 \nf 583/596 599/612 633/646 \nf 663/676 662/675 647/660 648/661 \nf 659/672 658/671 643/656 644/657 \nf 665/678 650/663 651/664 666/679 \nf 666/679 503/516 607/620 665/678 \nf 662/675 661/674 646/659 647/660 \nf 665/678 664/677 649/662 650/663 \nf 655/668 654/667 639/652 640/653 \nf 664/677 663/676 648/661 649/662 \nf 658/671 657/670 642/655 643/656 \nf 661/674 660/673 645/658 646/659 \nf 652/665 635/648 636/649 637/650 \nf 660/673 659/672 644/657 645/658 \nf 654/667 653/666 638/651 639/652 \nf 657/670 656/669 641/654 642/655 \nf 653/666 652/665 637/650 638/651 \nf 656/669 655/668 640/653 641/654 \nf 654/667 669/682 668/681 653/666 \nf 652/665 667/680 634/647 635/648 \nf 653/666 668/681 667/680 652/665 \nf 655/668 670/683 669/682 654/667 \nf 656/669 671/684 670/683 655/668 \nf 657/670 672/685 671/684 656/669 \nf 658/671 673/686 672/685 657/670 \nf 659/672 674/687 673/686 658/671 \nf 660/673 675/688 674/687 659/672 \nf 661/674 676/689 675/688 660/673 \nf 662/675 677/690 676/689 661/674 \nf 663/676 204/204 677/690 662/675 \nf 664/677 203/203 204/204 663/676 \nf 665/678 607/620 203/203 664/677 \nf 503/516 597/610 598/611 607/620 \nf 667/680 584/597 583/596 634/647 \nf 668/681 585/598 584/597 667/680 \nf 669/682 586/599 585/598 668/681 \nf 670/683 587/600 586/599 669/682 \nf 671/684 588/601 587/600 670/683 \nf 672/685 589/602 588/601 671/684 \nf 673/686 590/603 589/602 672/685 \nf 751/764 752/765 784/797 780/793 \nf 780/793 814/827 815/828 781/794 \nf 820/833 718/731 680/693 816/829 \nf 823/836 755/768 756/769 824/837 \nf 682/695 683/696 721/734 720/733 \nf 683/696 684/697 722/735 721/734 \nf 684/697 685/698 723/736 722/735 \nf 685/698 686/699 724/737 723/736 \nf 686/699 687/700 725/738 724/737 \nf 687/700 688/701 726/739 725/738 \nf 688/701 689/702 727/740 726/739 \nf 689/702 690/703 728/741 727/740 \nf 690/703 691/704 729/742 728/741 \nf 691/704 692/705 730/743 729/742 \nf 692/705 693/706 731/744 730/743 \nf 693/706 694/707 732/745 731/744 \nf 694/707 695/708 733/746 732/745 \nf 695/708 696/709 734/747 733/746 \nf 696/709 697/710 735/748 734/747 \nf 697/710 698/711 736/749 735/748 \nf 698/711 699/712 737/750 736/749 \nf 699/712 700/713 738/751 737/750 \nf 700/713 701/714 739/752 738/751 \nf 701/714 702/715 740/753 739/752 \nf 702/715 703/716 741/754 740/753 \nf 703/716 704/717 742/755 741/754 \nf 704/717 705/718 743/756 742/755 \nf 705/718 706/719 744/757 743/756 \nf 706/719 707/720 745/758 744/757 \nf 707/720 708/721 746/759 745/758 \nf 708/721 709/722 747/760 746/759 \nf 709/722 710/723 748/761 747/760 \nf 710/723 711/724 749/762 748/761 \nf 711/724 712/725 750/763 749/762 \nf 712/725 713/726 751/764 750/763 \nf 713/726 714/727 752/765 751/764 \nf 714/727 715/728 753/766 752/765 \nf 822/835 754/767 716/729 818/831 \nf 749/762 750/763 781/794 785/798 \nf 819/832 717/730 718/731 820/833 \nf 746/759 747/760 782/795 812/825 \nf 720/733 721/734 789/802 788/801 \nf 721/734 722/735 790/803 789/802 \nf 829/842 761/774 760/773 828/841 \nf 723/736 724/737 792/805 791/804 \nf 724/737 725/738 793/806 792/805 \nf 725/738 726/739 794/807 793/806 \nf 795/808 833/846 832/845 794/807 \nf 727/740 728/741 796/809 795/808 \nf 797/810 835/848 834/847 796/809 \nf 798/811 836/849 835/848 797/810 \nf 837/850 769/782 768/781 836/849 \nf 838/851 770/783 769/782 837/850 \nf 801/814 839/852 838/851 800/813 \nf 802/815 840/853 839/852 801/814 \nf 734/747 735/748 803/816 802/815 \nf 804/817 842/855 841/854 803/816 \nf 736/749 737/750 805/818 804/817 \nf 737/750 738/751 806/819 805/818 \nf 738/751 739/752 807/820 806/819 \nf 808/821 846/859 845/858 807/820 \nf 740/753 741/754 809/822 808/821 \nf 783/796 817/830 847/860 809/822 \nf 810/823 825/838 817/830 783/796 \nf 743/756 744/757 787/800 810/823 \nf 824/837 756/769 719/732 821/834 \nf 784/797 818/831 814/827 780/793 \nf 781/794 750/763 751/764 780/793 \nf 782/795 747/760 748/761 786/799 \nf 811/824 745/758 746/759 812/825 \nf 784/797 752/765 753/766 813/826 \nf 781/794 815/828 819/832 785/798 \nf 786/799 748/761 749/762 785/798 \nf 816/829 680/693 755/768 823/836 \nf 789/802 827/840 826/839 788/801 \nf 828/841 760/773 759/772 827/840 \nf 790/803 722/735 723/736 791/804 \nf 792/805 830/843 829/842 791/804 \nf 793/806 831/844 830/843 792/805 \nf 794/807 832/845 831/844 793/806 \nf 794/807 726/739 727/740 795/808 \nf 834/847 766/779 765/778 833/846 \nf 796/809 728/741 729/742 797/810 \nf 797/810 729/742 730/743 798/811 \nf 798/811 730/743 731/744 799/812 \nf 799/812 731/744 732/745 800/813 \nf 800/813 732/745 733/746 801/814 \nf 801/814 733/746 734/747 802/815 \nf 803/816 841/854 840/853 802/815 \nf 803/816 735/748 736/749 804/817 \nf 805/818 843/856 842/855 804/817 \nf 844/857 776/789 775/788 843/856 \nf 807/820 845/858 844/857 806/819 \nf 807/820 739/752 740/753 808/821 \nf 847/860 779/792 778/791 846/859 \nf 809/822 741/754 742/755 783/796 \nf 783/796 742/755 743/756 810/823 \nf 787/800 821/834 825/838 810/823 \nf 787/800 744/757 745/758 811/824 \nf 814/827 678/691 679/692 815/828 \nf 816/829 782/795 786/799 820/833 \nf 824/837 811/824 812/825 823/836 \nf 818/831 784/797 813/826 822/835 \nf 820/833 786/799 785/798 819/832 \nf 828/841 790/803 791/804 829/842 \nf 833/846 765/778 764/777 832/845 \nf 835/848 767/780 766/779 834/847 \nf 836/849 768/781 767/780 835/848 \nf 836/849 798/811 799/812 837/850 \nf 837/850 799/812 800/813 838/851 \nf 839/852 771/784 770/783 838/851 \nf 840/853 772/785 771/784 839/852 \nf 842/855 774/787 773/786 841/854 \nf 846/859 778/791 777/790 845/858 \nf 817/830 681/694 779/792 847/860 \nf 825/838 757/770 681/694 817/830 \nf 821/834 787/800 811/824 824/837 \nf 818/831 716/729 678/691 814/827 \nf 815/828 679/692 717/730 819/832 \nf 823/836 812/825 782/795 816/829 \nf 827/840 759/772 758/771 826/839 \nf 827/840 789/802 790/803 828/841 \nf 830/843 762/775 761/774 829/842 \nf 831/844 763/776 762/775 830/843 \nf 832/845 764/777 763/776 831/844 \nf 833/846 795/808 796/809 834/847 \nf 841/854 773/786 772/785 840/853 \nf 843/856 775/788 774/787 842/855 \nf 843/856 805/818 806/819 844/857 \nf 845/858 777/790 776/789 844/857 \nf 846/859 808/821 809/822 847/860 \nf 821/834 719/732 757/770 825/838 \nf 893/906 904/917 905/918 \nf 881/894 850/863 903/916 \nf 951/964 950/963 921/934 \nf 882/895 854/867 850/863 \nf 857/870 860/873 884/897 \nf 914/927 913/926 918/931 \nf 1280/1293 1279/1292 1278/1291 \nf 885/898 861/874 854/867 \nf 1280/1293 1278/1291 1277/1290 \nf 990/1003 983/996 987/1000 \nf 912/925 907/920 911/924 \nf 866/879 868/881 887/900 \nf 868/881 870/883 888/901 \nf 909/922 908/921 907/920 \nf 872/885 873/886 891/904 \nf 1014/1027 1013/1026 1012/1025 \nf 873/886 876/889 892/905 \nf 876/889 879/892 890/903 \nf 881/894 893/906 882/895 \nf 898/911 897/910 894/907 \nf 855/868 862/875 885/898 \nf 855/868 863/876 862/875 \nf 886/899 983/996 990/1003 \nf 884/897 860/873 988/1001 \nf 1001/1014 1006/1019 1003/1016 \nf 878/891 877/890 892/905 \nf 1009/1022 1008/1021 1007/1020 \nf 1010/1023 1009/1022 1007/1020 \nf 1004/1017 1003/1016 1006/1019 \nf 1001/1014 1002/1015 888/901 \nf 896/909 895/908 894/907 \nf 895/908 855/868 882/895 \nf 896/909 856/869 855/868 \nf 901/914 900/913 899/912 \nf 898/911 893/906 851/864 \nf 894/907 882/895 893/906 \nf 900/913 851/864 856/869 \nf 901/914 897/910 851/864 \nf 902/915 896/909 897/910 \nf 899/912 856/869 896/909 \nf 849/862 906/919 904/917 \nf 848/861 880/893 906/919 \nf 893/906 881/894 904/917 \nf 910/923 911/924 905/918 \nf 912/925 910/923 904/917 \nf 911/924 907/920 852/865 \nf 909/922 912/925 906/919 \nf 908/921 909/922 926/939 \nf 907/920 908/921 853/866 \nf 920/933 947/960 952/965 \nf 880/893 848/861 913/926 \nf 857/870 883/896 917/930 \nf 950/963 949/962 948/961 \nf 963/976 969/982 970/983 \nf 926/939 909/922 880/893 \nf 957/970 955/968 959/972 \nf 958/971 957/970 953/966 \nf 956/969 958/971 954/967 \nf 919/932 853/866 908/921 \nf 974/987 975/988 973/986 \nf 942/955 941/954 937/950 \nf 914/927 917/930 930/943 \nf 929/942 925/938 926/939 \nf 880/893 914/927 929/942 \nf 971/984 963/976 970/983 \nf 928/941 930/943 927/940 \nf 883/896 927/940 930/943 \nf 924/937 925/938 929/942 \nf 930/943 928/941 929/942 \nf 938/951 939/952 925/938 \nf 939/952 940/953 926/939 \nf 940/953 935/948 919/932 \nf 936/949 937/950 923/936 \nf 931/944 933/946 915/928 \nf 935/948 931/944 853/866 \nf 933/946 934/947 916/929 \nf 932/945 936/949 922/935 \nf 934/947 932/945 858/871 \nf 942/955 938/951 924/937 \nf 941/954 942/955 928/941 \nf 937/950 941/954 927/940 \nf 950/963 951/964 939/952 \nf 951/964 952/965 940/953 \nf 952/965 947/960 935/948 \nf 949/962 950/963 938/951 \nf 948/961 949/962 937/950 \nf 943/956 945/958 933/946 \nf 947/960 943/956 931/944 \nf 945/958 946/959 934/947 \nf 944/957 948/961 936/949 \nf 946/959 944/957 932/945 \nf 953/966 959/972 947/960 \nf 955/968 957/970 945/958 \nf 959/972 955/968 943/956 \nf 954/967 953/966 920/933 \nf 957/970 958/971 946/959 \nf 960/973 954/967 921/934 \nf 956/969 960/973 948/961 \nf 958/971 956/969 944/957 \nf 963/976 968/981 969/982 \nf 970/983 966/979 967/980 \nf 971/984 965/978 972/985 \nf 969/982 968/981 922/935 \nf 970/983 969/982 923/936 \nf 966/979 970/983 927/940 \nf 967/980 966/979 883/896 \nf 978/991 961/974 971/984 \nf 964/977 972/985 962/975 \nf 968/981 964/977 858/871 \nf 965/978 971/984 961/974 \nf 972/985 965/978 1034/1047 \nf 976/989 973/986 963/976 \nf 974/987 976/989 972/985 \nf 975/988 974/987 964/977 \nf 973/986 975/988 968/981 \nf 985/998 981/994 993/1006 \nf 967/980 884/897 978/991 \nf 1281/1294 1277/1290 1276/1289 \nf 987/1000 985/998 992/1005 \nf 982/995 986/999 978/991 \nf 859/872 980/993 993/1006 \nf 987/1000 983/996 886/899 \nf 981/994 985/998 977/990 \nf 993/1006 981/994 867/880 \nf 984/997 980/993 859/872 \nf 985/998 987/1000 979/992 \nf 986/999 984/997 961/974 \nf 989/1002 988/1001 865/878 \nf 865/878 866/879 886/899 \nf 982/995 884/897 989/1002 \nf 986/999 982/995 990/1003 \nf 995/1008 999/1012 998/1011 \nf 996/1009 995/1008 1000/1013 \nf 998/1011 999/1012 986/999 \nf 999/1012 995/1008 984/997 \nf 1000/1013 998/1011 991/1004 \nf 995/1008 996/1009 980/993 \nf 996/1009 997/1010 993/1006 \nf 997/1010 1000/1013 992/1005 \nf 1002/1015 1003/1016 887/900 \nf 1003/1016 1004/1017 869/882 \nf 1004/1017 1005/1018 871/884 \nf 1005/1018 1006/1019 889/902 \nf 1006/1019 1001/1014 872/885 \nf 1010/1023 1011/1024 891/904 \nf 1011/1024 1007/1020 889/902 \nf 1007/1020 1008/1021 871/884 \nf 1008/1021 1009/1022 875/888 \nf 1009/1022 1010/1023 874/887 \nf 1012/1025 1013/1026 874/887 \nf 1013/1026 1014/1027 877/890 \nf 1014/1027 1015/1028 892/905 \nf 1015/1028 1012/1025 891/904 \nf 1043/1056 1017/1030 1018/1031 \nf 1016/1029 1018/1031 864/877 \nf 856/869 1019/1032 1016/1029 \nf 851/864 1020/1033 1019/1032 \nf 905/918 1021/1034 1020/1033 \nf 852/865 1022/1035 1021/1034 \nf 1025/1038 1022/1035 852/865 \nf 1023/1036 1022/1035 1025/1038 \nf 915/928 1026/1039 1025/1038 \nf 916/929 1027/1040 1026/1039 \nf 858/871 1028/1041 1027/1040 \nf 1246/1259 1245/1258 1244/1257 \nf 1250/1263 1249/1262 1248/1261 \nf 1250/1263 1248/1261 1252/1265 \nf 1242/1255 1241/1254 1240/1253 \nf 1034/1047 965/978 859/872 \nf 1033/1046 962/975 1034/1047 \nf 1042/1055 1035/1048 1032/1045 \nf 1032/1045 1033/1046 1034/1047 \nf 1238/1251 1237/1250 1236/1249 \nf 1037/1050 1036/1049 1035/1048 \nf 1039/1052 1038/1051 1037/1050 \nf 1041/1054 1040/1053 1039/1052 \nf 1041/1054 1035/1048 1042/1055 \nf 1042/1055 859/872 994/1007 \nf 1041/1054 994/1007 867/880 \nf 1033/1046 1029/1042 1028/1041 \nf 1028/1041 858/871 962/975 \nf 1165/1178 1164/1177 1163/1176 \nf 1169/1182 1165/1178 1163/1176 \nf 1166/1179 1165/1178 1169/1182 \nf 1168/1181 1167/1180 1166/1179 \nf 1171/1184 1178/1191 1177/1190 \nf 1180/1193 1179/1192 1178/1191 \nf 1174/1187 1173/1186 1172/1185 \nf 1177/1190 1176/1189 1172/1185 \nf 1174/1187 1172/1185 1176/1189 \nf 1020/1033 1021/1034 1056/1069 \nf 1055/1068 1054/1067 1044/1057 \nf 1056/1069 1055/1068 1044/1057 \nf 1132/1145 1128/1141 1139/1152 \nf 1139/1152 1134/1147 1133/1146 \nf 1130/1143 1129/1142 1128/1141 \nf 1131/1144 1130/1143 1128/1141 \nf 1134/1147 1139/1152 1138/1151 \nf 1259/1272 1258/1271 1257/1270 \nf 1255/1268 1254/1267 1253/1266 \nf 1235/1248 1234/1247 1233/1246 \nf 1235/1248 1229/1242 1064/1077 \nf 1231/1244 1230/1243 1233/1246 \nf 1230/1243 1229/1242 1235/1248 \nf 1135/1148 1138/1151 1137/1150 \nf 1063/1076 1061/1074 1062/1075 \nf 1067/1080 1066/1079 1061/1074 \nf 1121/1134 1120/1133 1119/1132 \nf 1122/1135 1118/1131 1117/1130 \nf 1121/1134 1119/1132 1118/1131 \nf 1162/1175 1161/1174 1160/1173 \nf 1159/1172 1158/1171 1162/1175 \nf 1142/1155 1141/1154 1140/1153 \nf 1125/1138 1124/1137 1123/1136 \nf 1126/1139 1125/1138 1123/1136 \nf 1145/1158 1144/1157 1148/1161 \nf 1147/1160 1146/1159 1145/1158 \nf 1154/1167 1153/1166 1157/1170 \nf 1156/1169 1155/1168 1154/1167 \nf 1157/1170 1153/1166 1152/1165 \nf 1151/1164 1150/1163 1149/1162 \nf 1184/1197 1183/1196 1182/1195 \nf 1181/1194 1178/1191 1171/1184 \nf 1186/1199 1195/1208 1193/1206 \nf 1191/1204 1188/1201 1187/1200 \nf 1193/1206 1192/1205 1187/1200 \nf 1195/1208 1194/1207 1193/1206 \nf 1188/1201 1191/1204 1190/1203 \nf 1084/1097 1083/1096 1079/1092 \nf 1078/1091 1085/1098 1084/1097 \nf 1198/1211 1202/1215 1200/1213 \nf 1202/1215 1201/1214 1200/1213 \nf 1197/1210 1196/1209 1202/1215 \nf 1211/1224 1210/1223 1209/1222 \nf 1205/1218 1204/1217 1203/1216 \nf 1208/1221 1207/1220 1205/1218 \nf 1207/1220 1206/1219 1205/1218 \nf 1215/1228 1214/1227 1213/1226 \nf 1037/1050 1038/1051 1098/1111 \nf 1098/1111 1093/1106 1065/1078 \nf 1219/1232 1218/1231 1217/1230 \nf 1221/1234 1220/1233 1217/1230 \nf 1222/1235 1217/1230 1090/1103 \nf 1303/1316 1296/1309 1104/1117 \nf 1298/1311 1297/1310 1301/1314 \nf 1302/1315 1301/1314 1297/1310 \nf 1297/1310 1296/1309 1303/1316 \nf 1301/1314 1300/1313 1299/1312 \nf 1224/1237 1095/1108 1094/1107 \nf 1227/1240 1226/1239 1225/1238 \nf 1225/1238 1224/1237 1094/1107 \nf 1284/1297 1283/1296 1282/1295 \nf 1268/1281 1267/1280 1266/1279 \nf 1270/1283 1269/1282 1268/1281 \nf 1271/1284 1270/1283 1266/1279 \nf 1263/1276 1262/1275 1261/1274 \nf 1265/1278 1264/1277 1261/1274 \nf 1041/1054 867/880 1109/1122 \nf 1040/1053 1041/1054 1109/1122 \nf 1108/1121 1039/1052 1040/1053 \nf 1274/1287 1273/1286 1272/1285 \nf 1288/1301 1287/1300 1286/1299 \nf 1288/1301 1286/1299 1290/1303 \nf 1294/1307 1293/1306 1292/1305 \nf 1295/1308 1292/1305 1291/1304 \nf 1317/1330 1316/1329 1315/1328 \nf 1305/1318 1304/1317 1318/1331 \nf 1310/1323 1309/1322 1308/1321 \nf 1314/1327 1313/1326 1312/1325 \nf 1308/1321 1307/1320 1306/1319 \nf 1311/1324 1308/1321 1315/1328 \nf 1308/1321 1306/1319 1318/1331 \nf 1348/1361 1323/1336 1322/1335 \nf 1119/1132 1059/1072 1060/1073 \nf 1120/1133 1069/1082 1059/1072 \nf 1121/1134 1068/1081 1069/1082 \nf 1122/1135 1067/1080 1068/1081 \nf 1117/1130 1066/1079 1067/1080 \nf 1123/1136 1072/1085 1148/1161 \nf 1125/1138 1069/1082 1072/1085 \nf 1126/1139 1059/1072 1069/1082 \nf 855/868 864/877 863/876 \nf 1142/1155 1143/1156 1058/1071 \nf 1349/1362 1326/1339 1323/1336 \nf 1127/1140 1058/1071 1130/1143 \nf 1126/1139 1131/1144 1059/1072 \nf 1130/1143 1131/1144 1126/1139 \nf 1128/1141 1129/1142 1057/1070 \nf 1129/1142 1058/1071 1143/1156 \nf 1132/1145 1060/1073 1059/1072 \nf 1134/1147 1061/1074 1066/1079 \nf 1135/1148 1023/1036 1061/1074 \nf 1136/1149 1022/1035 1023/1036 \nf 1137/1150 1021/1034 1022/1035 \nf 1138/1151 1056/1069 1021/1034 \nf 1139/1152 1055/1068 1056/1069 \nf 1128/1141 1054/1067 1055/1068 \nf 1016/1029 1043/1056 1018/1031 \nf 1346/1359 1327/1340 1326/1339 \nf 1127/1140 1123/1136 1071/1084 \nf 1284/1297 1285/1298 1286/1299 \nf 1129/1142 1130/1143 1058/1071 \nf 1143/1156 1140/1153 1129/1142 \nf 1162/1175 1057/1070 1140/1153 \nf 1295/1308 1291/1304 1113/1126 \nf 1289/1302 1112/1125 1295/1308 \nf 1140/1153 1057/1070 1129/1142 \nf 1144/1157 1071/1084 1123/1136 \nf 1148/1161 1144/1157 1123/1136 \nf 1288/1301 1289/1302 1295/1308 \nf 1142/1155 1071/1084 1070/1083 \nf 1145/1158 1146/1159 1160/1173 \nf 1146/1159 1147/1160 1073/1086 \nf 1151/1164 1072/1085 1074/1087 \nf 1123/1136 1124/1137 1072/1085 \nf 1144/1157 1145/1158 1070/1083 \nf 1147/1160 1149/1162 1073/1086 \nf 1148/1161 1072/1085 1151/1164 \nf 1157/1170 1073/1086 1149/1162 \nf 1151/1164 1149/1162 1147/1160 \nf 1288/1301 1295/1308 1113/1126 \nf 1073/1086 1152/1165 1045/1058 \nf 1073/1086 1157/1170 1152/1165 \nf 1149/1162 1074/1087 1156/1169 \nf 1149/1162 1150/1163 1074/1087 \nf 1104/1117 1296/1309 1097/1110 \nf 1154/1167 1049/1062 1046/1059 \nf 1185/1198 1182/1195 1154/1167 \nf 1156/1169 1074/1087 1075/1088 \nf 1223/1236 1093/1106 1097/1110 \nf 1156/1169 1157/1170 1149/1162 \nf 1128/1141 1057/1070 1162/1175 \nf 1162/1175 1158/1171 1128/1141 \nf 1162/1175 1140/1153 1141/1154 \nf 1141/1154 1070/1083 1162/1175 \nf 1228/1241 1298/1311 1103/1116 \nf 1146/1159 1045/1058 1160/1173 \nf 1159/1172 1044/1057 1054/1067 \nf 1160/1173 1045/1058 1169/1182 \nf 1158/1171 1054/1067 1128/1141 \nf 1070/1083 1161/1174 1162/1175 \nf 1145/1158 1161/1174 1070/1083 \nf 1167/1180 1168/1181 1152/1165 \nf 1152/1165 1168/1181 1045/1058 \nf 1045/1058 1168/1181 1169/1182 \nf 1169/1182 1044/1057 1159/1172 \nf 1164/1177 1043/1056 1016/1029 \nf 1165/1178 1048/1061 1043/1056 \nf 1166/1179 1047/1060 1048/1061 \nf 1167/1180 1046/1059 1047/1060 \nf 1170/1183 1019/1032 1044/1057 \nf 1163/1176 1016/1029 1019/1032 \nf 1153/1166 1046/1059 1167/1180 \nf 1169/1182 1159/1172 1160/1173 \nf 1172/1185 1048/1061 1047/1060 \nf 1173/1186 1043/1056 1048/1061 \nf 1174/1187 1017/1030 1043/1056 \nf 1175/1188 1053/1066 1017/1030 \nf 1176/1189 1077/1090 1053/1066 \nf 1177/1190 1052/1065 1077/1090 \nf 1178/1191 1051/1064 1052/1065 \nf 1179/1192 1050/1063 1051/1064 \nf 1180/1193 1049/1062 1050/1063 \nf 1181/1194 1046/1059 1049/1062 \nf 1171/1184 1047/1060 1046/1059 \nf 1154/1167 1155/1168 1075/1088 \nf 1182/1195 1049/1062 1154/1167 \nf 1183/1196 1050/1063 1049/1062 \nf 1184/1197 1076/1089 1050/1063 \nf 1185/1198 1075/1088 1076/1089 \nf 1154/1167 1075/1088 1185/1198 \nf 1187/1200 1051/1064 1050/1063 \nf 1188/1201 1052/1065 1051/1064 \nf 1189/1202 1077/1090 1052/1065 \nf 1190/1203 1082/1095 1077/1090 \nf 1191/1204 1081/1094 1082/1095 \nf 1192/1205 1080/1093 1081/1094 \nf 1193/1206 1079/1092 1080/1093 \nf 1194/1207 1078/1091 1079/1092 \nf 1195/1208 1076/1089 1078/1091 \nf 1186/1199 1050/1063 1076/1089 \nf 1197/1210 1087/1100 1068/1081 \nf 1296/1309 1297/1310 1094/1107 \nf 1198/1211 1086/1099 1209/1222 \nf 1229/1242 1230/1243 1199/1212 \nf 1095/1108 1097/1110 1296/1309 \nf 1202/1215 1067/1080 1063/1076 \nf 1196/1209 1068/1081 1067/1080 \nf 1198/1211 1088/1101 1203/1216 \nf 1302/1315 1303/1316 1098/1111 \nf 1205/1218 1091/1104 1087/1100 \nf 1206/1219 1217/1230 1218/1231 \nf 1268/1281 1099/1112 1302/1315 \nf 1207/1220 1213/1226 1092/1105 \nf 1197/1210 1204/1217 1087/1100 \nf 1203/1216 1204/1217 1197/1210 \nf 1267/1280 1302/1315 1098/1111 \nf 1208/1221 1203/1216 1088/1101 \nf 1210/1223 1088/1101 1198/1211 \nf 1209/1222 1210/1223 1198/1211 \nf 1212/1225 1065/1078 1089/1102 \nf 1209/1222 1086/1099 1230/1243 \nf 1210/1223 1211/1224 1089/1102 \nf 1198/1211 1199/1212 1086/1099 \nf 1216/1229 1213/1226 1207/1220 \nf 1285/1298 1282/1295 1103/1116 \nf 1299/1312 1102/1115 1285/1298 \nf 1215/1228 1216/1229 1089/1102 \nf 1214/1227 1223/1236 1090/1103 \nf 1215/1228 1065/1078 1093/1106 \nf 1208/1221 1089/1102 1216/1229 \nf 1298/1311 1299/1312 1285/1298 \nf 1205/1218 1218/1231 1091/1104 \nf 1214/1227 1093/1106 1223/1236 \nf 1206/1219 1090/1103 1217/1230 \nf 1207/1220 1092/1105 1090/1103 \nf 1214/1227 1090/1103 1092/1105 \nf 1092/1105 1213/1226 1214/1227 \nf 1219/1232 1096/1109 1091/1104 \nf 1220/1233 1225/1238 1226/1239 \nf 1221/1234 1224/1237 1225/1238 \nf 1227/1240 1283/1296 1105/1118 \nf 1094/1107 1297/1310 1298/1311 \nf 1219/1232 1226/1239 1096/1109 \nf 1095/1108 1224/1237 1221/1234 \nf 1290/1303 1102/1115 1299/1312 \nf 1290/1303 1286/1299 1102/1115 \nf 1227/1240 1105/1118 1096/1109 \nf 1300/1313 1101/1114 1290/1303 \nf 1222/1235 1097/1110 1095/1108 \nf 1212/1225 1230/1243 1065/1078 \nf 1199/1212 1230/1243 1086/1099 \nf 1201/1214 1064/1077 1229/1242 \nf 1201/1214 1063/1076 1064/1077 \nf 1212/1225 1209/1222 1230/1243 \nf 1230/1243 1231/1244 1065/1078 \nf 1232/1245 1036/1049 1065/1078 \nf 1299/1312 1300/1313 1290/1303 \nf 1241/1254 1031/1044 1233/1246 \nf 1235/1248 1030/1043 1245/1258 \nf 1030/1043 1235/1248 1064/1077 \nf 1236/1249 1237/1250 1232/1245 \nf 1232/1245 1237/1250 1036/1049 \nf 1238/1251 1035/1048 1036/1049 \nf 1239/1252 1032/1045 1035/1048 \nf 1239/1252 1242/1255 1032/1045 \nf 1233/1246 1031/1044 1236/1249 \nf 1240/1253 1241/1254 1233/1246 \nf 1233/1246 1029/1042 1240/1253 \nf 1241/1254 1242/1255 1239/1252 \nf 1288/1301 1113/1126 1106/1119 \nf 1243/1256 1033/1046 1032/1045 \nf 1240/1253 1029/1042 1033/1046 \nf 1233/1246 1234/1247 1029/1042 \nf 1236/1249 1031/1044 1241/1254 \nf 1290/1303 1101/1114 1112/1125 \nf 1244/1257 1027/1040 1028/1041 \nf 1292/1305 1116/1129 1113/1126 \nf 1247/1260 1028/1041 1029/1042 \nf 1234/1247 1246/1259 1029/1042 \nf 1235/1248 1245/1258 1246/1259 \nf 1245/1258 1252/1265 1248/1261 \nf 1245/1258 1030/1043 1252/1265 \nf 1249/1262 1026/1039 1027/1040 \nf 1250/1263 1025/1038 1026/1039 \nf 1251/1264 1024/1037 1025/1038 \nf 1293/1306 1115/1128 1116/1129 \nf 1244/1257 1248/1261 1027/1040 \nf 1294/1307 1114/1127 1115/1128 \nf 1295/1308 1112/1125 1114/1127 \nf 1255/1268 1256/1269 1024/1037 \nf 1301/1314 1100/1113 1101/1114 \nf 1254/1267 1063/1076 1062/1075 \nf 1062/1075 1258/1271 1259/1272 \nf 1254/1267 1255/1268 1030/1043 \nf 1024/1037 1251/1264 1252/1265 \nf 1253/1266 1062/1075 1259/1272 \nf 1257/1270 1061/1074 1023/1036 \nf 1258/1271 1062/1075 1061/1074 \nf 1260/1273 1023/1036 1024/1037 \nf 1259/1272 1256/1269 1253/1266 \nf 1259/1272 1024/1037 1256/1269 \nf 1262/1275 1111/1124 1107/1120 \nf 1263/1276 1110/1123 1111/1124 \nf 1109/1122 1275/1288 1272/1285 \nf 1265/1278 1108/1121 1109/1122 \nf 1261/1274 1107/1120 1269/1282 \nf 1269/1282 1270/1283 1265/1278 \nf 1302/1315 1099/1112 1100/1113 \nf 1267/1280 1098/1111 1038/1051 \nf 1267/1280 1268/1281 1302/1315 \nf 1269/1282 1107/1120 1099/1112 \nf 1271/1284 1039/1052 1108/1121 \nf 1266/1279 1038/1051 1039/1052 \nf 1265/1278 1270/1283 1108/1121 \nf 1272/1285 1110/1123 1263/1276 \nf 1272/1285 1263/1276 1264/1277 \nf 1273/1286 869/882 1110/1123 \nf 1274/1287 867/880 869/882 \nf 1275/1288 1109/1122 867/880 \nf 1264/1277 1109/1122 1272/1285 \nf 1277/1290 979/992 886/899 \nf 1278/1291 977/990 979/992 \nf 1279/1292 867/880 977/990 \nf 1280/1293 869/882 867/880 \nf 1281/1294 887/900 869/882 \nf 1276/1289 886/899 887/900 \nf 1285/1298 1103/1116 1298/1311 \nf 1228/1241 1282/1295 1283/1296 \nf 1284/1297 1106/1119 1105/1118 \nf 1285/1298 1102/1115 1286/1299 \nf 1228/1241 1103/1116 1282/1295 \nf 1104/1117 1093/1106 1098/1111 \nf 1284/1297 1286/1299 1106/1119 \nf 1286/1299 1287/1300 1106/1119 \nf 1315/1328 1316/1329 1101/1114 \nf 1316/1329 1317/1330 1112/1125 \nf 1317/1330 1318/1331 1114/1127 \nf 1308/1321 1309/1322 871/884 \nf 1309/1322 1310/1323 869/882 \nf 1310/1323 1311/1324 1110/1123 \nf 1312/1325 1313/1326 1107/1120 \nf 1313/1326 1314/1327 1099/1112 \nf 1314/1327 1315/1328 1100/1113 \nf 1318/1331 1304/1317 1115/1128 \nf 1304/1317 1305/1318 878/891 \nf 1305/1318 1306/1319 877/890 \nf 1311/1324 1312/1325 1111/1124 \nf 1306/1319 1307/1320 874/887 \nf 1307/1320 1308/1321 875/888 \nf 1330/1343 1329/1342 1328/1341 \nf 1348/1361 1347/1360 1346/1359 \nf 1334/1347 1333/1346 1332/1345 \nf 1342/1355 1341/1354 1340/1353 \nf 1343/1356 1342/1355 1345/1358 \nf 1319/1332 1321/1334 1326/1339 \nf 1338/1351 1337/1350 1336/1349 \nf 1329/1342 1115/1128 1323/1336 \nf 1330/1343 1116/1129 1115/1128 \nf 1331/1344 1324/1337 1116/1129 \nf 1328/1341 1323/1336 1324/1337 \nf 1333/1346 1325/1338 1324/1337 \nf 1334/1347 1326/1339 1325/1338 \nf 1335/1348 1323/1336 1326/1339 \nf 1332/1345 1324/1337 1323/1336 \nf 1337/1350 1320/1333 1325/1338 \nf 1338/1351 1321/1334 1320/1333 \nf 1339/1352 1326/1339 1321/1334 \nf 1336/1349 1325/1338 1326/1339 \nf 1341/1354 879/892 1322/1335 \nf 1342/1355 890/903 879/892 \nf 1343/1356 878/891 890/903 \nf 1344/1357 1115/1128 878/891 \nf 1345/1358 1323/1336 1115/1128 \nf 1340/1353 1322/1335 1323/1336 \nf 1347/1360 1322/1335 1327/1340 \nf 1060/1073 1132/1145 1133/1146 \nf 1118/1131 1060/1073 1066/1079 \nf 851/864 893/906 905/918 \nf 904/917 881/894 903/916 \nf 920/933 951/964 921/934 \nf 881/894 882/895 850/863 \nf 883/896 857/870 884/897 \nf 917/930 914/927 918/931 \nf 882/895 885/898 854/867 \nf 1281/1294 1280/1293 1277/1290 \nf 991/1004 990/1003 987/1000 \nf 910/923 912/925 911/924 \nf 886/899 866/879 887/900 \nf 887/900 868/881 888/901 \nf 912/925 909/922 907/920 \nf 889/902 872/885 891/904 \nf 1015/1028 1014/1027 1012/1025 \nf 891/904 873/886 892/905 \nf 892/905 876/889 890/903 \nf 882/895 855/868 885/898 \nf 989/1002 886/899 990/1003 \nf 989/1002 884/897 988/1001 \nf 1002/1015 1001/1014 1003/1016 \nf 890/903 878/891 892/905 \nf 1011/1024 1010/1023 1007/1020 \nf 1005/1018 1004/1017 1006/1019 \nf 872/885 1001/1014 888/901 \nf 897/910 896/909 894/907 \nf 894/907 895/908 882/895 \nf 895/908 896/909 855/868 \nf 902/915 901/914 899/912 \nf 897/910 898/911 851/864 \nf 898/911 894/907 893/906 \nf 899/912 900/913 856/869 \nf 900/913 901/914 851/864 \nf 901/914 902/915 897/910 \nf 902/915 899/912 896/909 \nf 903/916 849/862 904/917 \nf 849/862 848/861 906/919 \nf 904/917 910/923 905/918 \nf 906/919 912/925 904/917 \nf 905/918 911/924 852/865 \nf 880/893 909/922 906/919 \nf 919/932 908/921 926/939 \nf 852/865 907/920 853/866 \nf 951/964 920/933 952/965 \nf 914/927 880/893 913/926 \nf 918/931 857/870 917/930 \nf 921/934 950/963 948/961 \nf 953/966 957/970 959/972 \nf 954/967 958/971 953/966 \nf 960/973 956/969 954/967 \nf 976/989 974/987 973/986 \nf 938/951 942/955 937/950 \nf 929/942 914/927 930/943 \nf 880/893 929/942 926/939 \nf 967/980 971/984 970/983 \nf 917/930 883/896 930/943 \nf 928/941 924/937 929/942 \nf 924/937 938/951 925/938 \nf 925/938 939/952 926/939 \nf 926/939 940/953 919/932 \nf 922/935 936/949 923/936 \nf 853/866 931/944 915/928 \nf 919/932 935/948 853/866 \nf 915/928 933/946 916/929 \nf 858/871 932/945 922/935 \nf 916/929 934/947 858/871 \nf 928/941 942/955 924/937 \nf 927/940 941/954 928/941 \nf 923/936 937/950 927/940 \nf 938/951 950/963 939/952 \nf 939/952 951/964 940/953 \nf 940/953 952/965 935/948 \nf 937/950 949/962 938/951 \nf 936/949 948/961 937/950 \nf 931/944 943/956 933/946 \nf 935/948 947/960 931/944 \nf 933/946 945/958 934/947 \nf 932/945 944/957 936/949 \nf 934/947 946/959 932/945 \nf 920/933 953/966 947/960 \nf 943/956 955/968 945/958 \nf 947/960 959/972 943/956 \nf 921/934 954/967 920/933 \nf 945/958 957/970 946/959 \nf 948/961 960/973 921/934 \nf 944/957 956/969 948/961 \nf 946/959 958/971 944/957 \nf 963/976 971/984 972/985 \nf 923/936 969/982 922/935 \nf 927/940 970/983 923/936 \nf 883/896 966/979 927/940 \nf 884/897 967/980 883/896 \nf 858/871 964/977 962/975 \nf 922/935 968/981 858/871 \nf 859/872 965/978 961/974 \nf 962/975 972/985 1034/1047 \nf 972/985 976/989 963/976 \nf 964/977 974/987 972/985 \nf 968/981 975/988 964/977 \nf 963/976 973/986 968/981 \nf 992/1005 985/998 993/1006 \nf 971/984 967/980 978/991 \nf 991/1004 987/1000 992/1005 \nf 884/897 982/995 978/991 \nf 994/1007 859/872 993/1006 \nf 979/992 987/1000 886/899 \nf 867/880 981/994 977/990 \nf 994/1007 993/1006 867/880 \nf 961/974 984/997 859/872 \nf 977/990 985/998 979/992 \nf 978/991 986/999 961/974 \nf 886/899 989/1002 865/878 \nf 990/1003 982/995 989/1002 \nf 991/1004 986/999 990/1003 \nf 1000/1013 995/1008 998/1011 \nf 997/1010 996/1009 1000/1013 \nf 991/1004 998/1011 986/999 \nf 986/999 999/1012 984/997 \nf 992/1005 1000/1013 991/1004 \nf 984/997 995/1008 980/993 \nf 980/993 996/1009 993/1006 \nf 993/1006 997/1010 992/1005 \nf 888/901 1002/1015 887/900 \nf 887/900 1003/1016 869/882 \nf 869/882 1004/1017 871/884 \nf 871/884 1005/1018 889/902 \nf 889/902 1006/1019 872/885 \nf 874/887 1010/1023 891/904 \nf 891/904 1011/1024 889/902 \nf 889/902 1007/1020 871/884 \nf 871/884 1008/1021 875/888 \nf 875/888 1009/1022 874/887 \nf 891/904 1012/1025 874/887 \nf 874/887 1013/1026 877/890 \nf 877/890 1014/1027 892/905 \nf 892/905 1015/1028 891/904 \nf 855/868 1016/1029 864/877 \nf 855/868 856/869 1016/1029 \nf 856/869 851/864 1019/1032 \nf 851/864 905/918 1020/1033 \nf 905/918 852/865 1021/1034 \nf 853/866 1025/1038 852/865 \nf 1024/1037 1023/1036 1025/1038 \nf 853/866 915/928 1025/1038 \nf 915/928 916/929 1026/1039 \nf 916/929 858/871 1027/1040 \nf 1247/1260 1246/1259 1244/1257 \nf 1251/1264 1250/1263 1252/1265 \nf 1243/1256 1242/1255 1240/1253 \nf 859/872 1042/1055 1032/1045 \nf 859/872 1032/1045 1034/1047 \nf 1239/1252 1238/1251 1236/1249 \nf 1039/1052 1037/1050 1035/1048 \nf 1035/1048 1041/1054 1039/1052 \nf 1041/1054 1042/1055 994/1007 \nf 1033/1046 1028/1041 962/975 \nf 1170/1183 1169/1182 1163/1176 \nf 1168/1181 1166/1179 1169/1182 \nf 1172/1185 1171/1184 1177/1190 \nf 1181/1194 1180/1193 1178/1191 \nf 1175/1188 1174/1187 1176/1189 \nf 1019/1032 1020/1033 1056/1069 \nf 1019/1032 1056/1069 1044/1057 \nf 1133/1146 1132/1145 1139/1152 \nf 1132/1145 1131/1144 1128/1141 \nf 1135/1148 1134/1147 1138/1151 \nf 1260/1273 1259/1272 1257/1270 \nf 1256/1269 1255/1268 1253/1266 \nf 1232/1245 1231/1244 1233/1246 \nf 1233/1246 1230/1243 1235/1248 \nf 1136/1149 1135/1148 1137/1150 \nf 1063/1076 1067/1080 1061/1074 \nf 1122/1135 1121/1134 1118/1131 \nf 1160/1173 1159/1172 1162/1175 \nf 1143/1156 1142/1155 1140/1153 \nf 1127/1140 1126/1139 1123/1136 \nf 1147/1160 1145/1158 1148/1161 \nf 1156/1169 1154/1167 1157/1170 \nf 1185/1198 1184/1197 1182/1195 \nf 1187/1200 1186/1199 1193/1206 \nf 1192/1205 1191/1204 1187/1200 \nf 1189/1202 1188/1201 1190/1203 \nf 1078/1091 1084/1097 1079/1092 \nf 1199/1212 1198/1211 1200/1213 \nf 1198/1211 1197/1210 1202/1215 \nf 1212/1225 1211/1224 1209/1222 \nf 1208/1221 1205/1218 1203/1216 \nf 1216/1229 1215/1228 1213/1226 \nf 1036/1049 1037/1050 1098/1111 \nf 1036/1049 1098/1111 1065/1078 \nf 1220/1233 1219/1232 1217/1230 \nf 1222/1235 1221/1234 1217/1230 \nf 1223/1236 1222/1235 1090/1103 \nf 1299/1312 1298/1311 1301/1314 \nf 1302/1315 1297/1310 1303/1316 \nf 1228/1241 1227/1240 1225/1238 \nf 1228/1241 1225/1238 1094/1107 \nf 1285/1298 1284/1297 1282/1295 \nf 1270/1283 1268/1281 1266/1279 \nf 1264/1277 1263/1276 1261/1274 \nf 1108/1121 1040/1053 1109/1122 \nf 1275/1288 1274/1287 1272/1285 \nf 1289/1302 1288/1301 1290/1303 \nf 1295/1308 1294/1307 1292/1305 \nf 1318/1331 1317/1330 1315/1328 \nf 1306/1319 1305/1318 1318/1331 \nf 1311/1324 1310/1323 1308/1321 \nf 1315/1328 1314/1327 1312/1325 \nf 1312/1325 1311/1324 1315/1328 \nf 1315/1328 1308/1321 1318/1331 \nf 1347/1360 1348/1361 1322/1335 \nf 1118/1131 1119/1132 1060/1073 \nf 1119/1132 1120/1133 1059/1072 \nf 1120/1133 1121/1134 1069/1082 \nf 1121/1134 1122/1135 1068/1081 \nf 1122/1135 1117/1130 1067/1080 \nf 1124/1137 1125/1138 1072/1085 \nf 1125/1138 1126/1139 1069/1082 \nf 1071/1084 1142/1155 1058/1071 \nf 1348/1361 1349/1362 1323/1336 \nf 1127/1140 1130/1143 1126/1139 \nf 1131/1144 1132/1145 1059/1072 \nf 1133/1146 1134/1147 1066/1079 \nf 1134/1147 1135/1148 1061/1074 \nf 1135/1148 1136/1149 1023/1036 \nf 1136/1149 1137/1150 1022/1035 \nf 1137/1150 1138/1151 1021/1034 \nf 1138/1151 1139/1152 1056/1069 \nf 1139/1152 1128/1141 1055/1068 \nf 1349/1362 1346/1359 1326/1339 \nf 1058/1071 1127/1140 1071/1084 \nf 1141/1154 1142/1155 1070/1083 \nf 1161/1174 1145/1158 1160/1173 \nf 1150/1163 1151/1164 1074/1087 \nf 1071/1084 1144/1157 1070/1083 \nf 1148/1161 1151/1164 1147/1160 \nf 1146/1159 1073/1086 1045/1058 \nf 1093/1106 1104/1117 1097/1110 \nf 1153/1166 1154/1167 1046/1059 \nf 1155/1168 1156/1169 1075/1088 \nf 1222/1235 1223/1236 1097/1110 \nf 1158/1171 1159/1172 1054/1067 \nf 1153/1166 1167/1180 1152/1165 \nf 1163/1176 1164/1177 1016/1029 \nf 1164/1177 1165/1178 1043/1056 \nf 1165/1178 1166/1179 1048/1061 \nf 1166/1179 1167/1180 1047/1060 \nf 1169/1182 1170/1183 1044/1057 \nf 1170/1183 1163/1176 1019/1032 \nf 1171/1184 1172/1185 1047/1060 \nf 1172/1185 1173/1186 1048/1061 \nf 1173/1186 1174/1187 1043/1056 \nf 1174/1187 1175/1188 1017/1030 \nf 1175/1188 1176/1189 1053/1066 \nf 1176/1189 1177/1190 1077/1090 \nf 1177/1190 1178/1191 1052/1065 \nf 1178/1191 1179/1192 1051/1064 \nf 1179/1192 1180/1193 1050/1063 \nf 1180/1193 1181/1194 1049/1062 \nf 1181/1194 1171/1184 1046/1059 \nf 1182/1195 1183/1196 1049/1062 \nf 1183/1196 1184/1197 1050/1063 \nf 1184/1197 1185/1198 1076/1089 \nf 1186/1199 1187/1200 1050/1063 \nf 1187/1200 1188/1201 1051/1064 \nf 1188/1201 1189/1202 1052/1065 \nf 1189/1202 1190/1203 1077/1090 \nf 1190/1203 1191/1204 1082/1095 \nf 1191/1204 1192/1205 1081/1094 \nf 1192/1205 1193/1206 1080/1093 \nf 1193/1206 1194/1207 1079/1092 \nf 1194/1207 1195/1208 1078/1091 \nf 1195/1208 1186/1199 1076/1089 \nf 1196/1209 1197/1210 1068/1081 \nf 1095/1108 1296/1309 1094/1107 \nf 1200/1213 1229/1242 1199/1212 \nf 1201/1214 1202/1215 1063/1076 \nf 1202/1215 1196/1209 1067/1080 \nf 1204/1217 1205/1218 1087/1100 \nf 1205/1218 1206/1219 1218/1231 \nf 1198/1211 1203/1216 1197/1210 \nf 1089/1102 1208/1221 1088/1101 \nf 1211/1224 1212/1225 1089/1102 \nf 1088/1101 1210/1223 1089/1102 \nf 1208/1221 1216/1229 1207/1220 \nf 1065/1078 1215/1228 1089/1102 \nf 1214/1227 1215/1228 1093/1106 \nf 1206/1219 1207/1220 1090/1103 \nf 1218/1231 1219/1232 1091/1104 \nf 1219/1232 1220/1233 1226/1239 \nf 1220/1233 1221/1234 1225/1238 \nf 1228/1241 1094/1107 1298/1311 \nf 1222/1235 1095/1108 1221/1234 \nf 1226/1239 1227/1240 1096/1109 \nf 1200/1213 1201/1214 1229/1242 \nf 1231/1244 1232/1245 1065/1078 \nf 1063/1076 1030/1043 1064/1077 \nf 1233/1246 1236/1249 1232/1245 \nf 1237/1250 1238/1251 1036/1049 \nf 1238/1251 1239/1252 1035/1048 \nf 1236/1249 1241/1254 1239/1252 \nf 1287/1300 1288/1301 1106/1119 \nf 1242/1255 1243/1256 1032/1045 \nf 1243/1256 1240/1253 1033/1046 \nf 1289/1302 1290/1303 1112/1125 \nf 1247/1260 1244/1257 1028/1041 \nf 1291/1304 1292/1305 1113/1126 \nf 1246/1259 1247/1260 1029/1042 \nf 1234/1247 1235/1248 1246/1259 \nf 1244/1257 1245/1258 1248/1261 \nf 1248/1261 1249/1262 1027/1040 \nf 1249/1262 1250/1263 1026/1039 \nf 1250/1263 1251/1264 1025/1038 \nf 1292/1305 1293/1306 1116/1129 \nf 1293/1306 1294/1307 1115/1128 \nf 1294/1307 1295/1308 1114/1127 \nf 1030/1043 1255/1268 1024/1037 \nf 1300/1313 1301/1314 1101/1114 \nf 1253/1266 1254/1267 1062/1075 \nf 1063/1076 1254/1267 1030/1043 \nf 1030/1043 1024/1037 1252/1265 \nf 1260/1273 1257/1270 1023/1036 \nf 1257/1270 1258/1271 1061/1074 \nf 1259/1272 1260/1273 1024/1037 \nf 1261/1274 1262/1275 1107/1120 \nf 1262/1275 1263/1276 1111/1124 \nf 1264/1277 1265/1278 1109/1122 \nf 1261/1274 1269/1282 1265/1278 \nf 1301/1314 1302/1315 1100/1113 \nf 1266/1279 1267/1280 1038/1051 \nf 1268/1281 1269/1282 1099/1112 \nf 1270/1283 1271/1284 1108/1121 \nf 1271/1284 1266/1279 1039/1052 \nf 1272/1285 1273/1286 1110/1123 \nf 1273/1286 1274/1287 869/882 \nf 1274/1287 1275/1288 867/880 \nf 1276/1289 1277/1290 886/899 \nf 1277/1290 1278/1291 979/992 \nf 1278/1291 1279/1292 977/990 \nf 1279/1292 1280/1293 867/880 \nf 1280/1293 1281/1294 869/882 \nf 1281/1294 1276/1289 887/900 \nf 1227/1240 1228/1241 1283/1296 \nf 1283/1296 1284/1297 1105/1118 \nf 1303/1316 1104/1117 1098/1111 \nf 1100/1113 1315/1328 1101/1114 \nf 1101/1114 1316/1329 1112/1125 \nf 1112/1125 1317/1330 1114/1127 \nf 875/888 1308/1321 871/884 \nf 871/884 1309/1322 869/882 \nf 869/882 1310/1323 1110/1123 \nf 1111/1124 1312/1325 1107/1120 \nf 1107/1120 1313/1326 1099/1112 \nf 1099/1112 1314/1327 1100/1113 \nf 1114/1127 1318/1331 1115/1128 \nf 1115/1128 1304/1317 878/891 \nf 878/891 1305/1318 877/890 \nf 1110/1123 1311/1324 1111/1124 \nf 877/890 1306/1319 874/887 \nf 874/887 1307/1320 875/888 \nf 1331/1344 1330/1343 1328/1341 \nf 1349/1362 1348/1361 1346/1359 \nf 1335/1348 1334/1347 1332/1345 \nf 1345/1358 1342/1355 1340/1353 \nf 1344/1357 1343/1356 1345/1358 \nf 1327/1340 1319/1332 1326/1339 \nf 1339/1352 1338/1351 1336/1349 \nf 1328/1341 1329/1342 1323/1336 \nf 1329/1342 1330/1343 1115/1128 \nf 1330/1343 1331/1344 1116/1129 \nf 1331/1344 1328/1341 1324/1337 \nf 1332/1345 1333/1346 1324/1337 \nf 1333/1346 1334/1347 1325/1338 \nf 1334/1347 1335/1348 1326/1339 \nf 1335/1348 1332/1345 1323/1336 \nf 1336/1349 1337/1350 1325/1338 \nf 1337/1350 1338/1351 1320/1333 \nf 1338/1351 1339/1352 1321/1334 \nf 1339/1352 1336/1349 1326/1339 \nf 1340/1353 1341/1354 1322/1335 \nf 1341/1354 1342/1355 879/892 \nf 1342/1355 1343/1356 890/903 \nf 1343/1356 1344/1357 878/891 \nf 1344/1357 1345/1358 1115/1128 \nf 1345/1358 1340/1353 1323/1336 \nf 1346/1359 1347/1360 1327/1340 \nf 1066/1079 1060/1073 1133/1146 \nf 1117/1130 1118/1131 1066/1079 \n\n",
            menu_siri: "g StatusBar_1\nusemtl StatusBar\nv -89.325073 56.769349 321.389839\nv 89.39035 56.769349 321.389839\nv -89.325073 48.783475 321.389839\nv 89.39035 48.783475 321.389839\nv 11.529955 56.769349 321.389839\nv 11.529955 48.783475 321.389839\nv 43.236754 52.65898 321.389839\nv 88.712327 52.65898 321.389839\nv 43.236754 40.979691 321.389839\nv 88.712327 40.979691 321.389839\n\nvt 0.010643 0.999477 178.609375\nvt 0.695419 0.790249 178.609375\nvt 0.010643 0.911777 178.609375\nvt 0.695419 0.701805 178.609375\nvt 0.735458 0.999477 178.609375\nvt 0.011743 0.790249 178.609375\nvt 0.735458 0.911777 178.609375\nvt 0.011743 0.701805 178.609375\nvt 0.00214 0.65583 178.609375\nvt 0.353127 0.65583 178.609375\nvt 0.00214 0.468735 178.609375\nvt 0.353127 0.468735 178.609375\n\nf 5/6 2/2 4/4 6/8 \nf 6/7 3/3 1/1 5/5 \nf 8/10 10/12 9/11 7/9 \n\n",
            bg: "g Plane\nusemtl Mat\nv -844.722791 536.75094 -1167.921563\nv 844.722791 536.75094 -1167.921563\nv -844.722791 -536.75094 -1167.921563\nv 844.722791 -536.75094 -1167.921563\n\nvt -0.006452 1.006452 1667.90625\nvt 1.006439 1.006452 1667.90625\nvt -0.006452 -0.006439 1667.90625\nvt 1.006439 -0.006439 1667.90625\n\nf 2/2 4/4 3/3 1/1 \n\n"
        }
    }, {}],
    566: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-viewport").Viewport,
            r = t("../../lib/ac-canvas-image-scaler"),
            s = t("@marcom/ac-cname").cname,
            o = t("@marcom/ac-feature/isRetina"),
            a = function() {},
            c = function(t) {
                return this.path = t.path, this.images = t.images, this
            },
            l = c.prototype;
        l.draw = function() {
            for (var t, e, n, i = 0; i < this.images.length; i++) t = this._formatPath(this.images[i]), e = document.querySelector(".section-hero ." + this.images[i].id), n = {
                iterations: 1,
                width: window.devicePixelRatio >= 2 ? 2 * e.offsetWidth : e.offsetWidth,
                height: window.devicePixelRatio >= 2 ? 2 * e.offsetHeight : e.offsetHeight
            }, this.images[i].canvas = new r(t, n), this.images[i].canvas.el.classList.add(this.images[i].id + "-canvas"), e.appendChild(this.images[i].canvas.el), this.images[i].canvas.load().then(function() {
                var t = this._width,
                    e = this._height;
                this.el.width = o() ? 2 * t : t, this.el.height = o() ? 2 * e : e, this.el.style.width = t + "px", this.el.style.height = e + "px", this.el.getContext("2d").drawImage(this.img, 0, 0, t, e)
            }.bind(this.images[i].canvas), a);
            return this
        }, l.destroy = function() {
            for (var t = 0; t < this.images.length; t++) {
                if (!this.images[t].canvas) return;
                this.images[t].canvas.el.remove()
            }
            return this
        }, l._formatPath = function(t) {
            var e = t.type,
                n = "_2x",
                r = i.getBreakpoint().name;
            return r = "xlarge" == r ? "large" : r, s.addPrefix(this.path + "/" + t.name + "_" + r + n + "." + e)
        }, e.exports = c
    }, {
        "../../lib/ac-canvas-image-scaler": 574,
        "@marcom/ac-cname": 17,
        "@marcom/ac-feature/isRetina": 215,
        "@marcom/ac-viewport": 561
    }],
    567: [function(t, e, n) {
        "use strict";
        var i = t("./constants.js"),
            r = t("@marcom/ac-cname").cname,
            s = t("@marcom/ac-feature/isRetina"),
            o = !1,
            a = function() {
                this.scripts = [], this.loadedTextures = [], this.materialPaths = i.OBJECT_PATHS
            },
            c = a.prototype;
        c.load = function(t) {
            var e = document.createElement("script");
            return new Promise(function(n, r) {
                var s = function() {
                    return o ? r() : (this.scripts.push(e), n())
                }.bind(this);
                e.src = i[t + "_PATH"], e.async = !0, e.addEventListener("load", s, !1), document.body.appendChild(e)
            }.bind(this))
        }, c.loadMaterial = function(t, e) {
            t = t || 0;
            var n, i, r, s = {};
            return window.THREE ? (0 == t && (this.textureLoader = new THREE.TextureLoader, this.objLoader = new THREE.OBJLoader, this.textureLoader.crossOrigin = ""), new Promise(function(a, c) {
                i = function(t) {
                    r = function() {
                        return o ? c() : (t++, t < this.materialPaths.length ? i.call(this, t) : a())
                    }, this._loadTexture(this.materialPaths[t].texture, this.materialPaths[t].extension, this.materialPaths[t], []).then(this._loadAlpha.bind(this, t)).then(function(i) {
                        s = {
                            map: i[0],
                            depthWrite: !1,
                            depthTest: !1
                        }, this.materialPaths[t].side && (s.side = THREE.BackSide), this.materialPaths[t].doubleside && (s.side = THREE.DoubleSide), this.objLoader.load(this.materialPaths[t].obj, function(o) {
                            return i[1] && (s.alphaMap = i[1]), (i[1] || "png" == this.materialPaths[t].extension) && (s.transparent = !0), n = o.children[0], n.scale.x = "mountains" == this.materialPaths[t].texture ? 1.01 : 1, n.scale.y = "mountains" == this.materialPaths[t].texture ? 1.01 : 1, n.position.z = 0, n.material = new THREE.MeshBasicMaterial(s), e.add(n), r.call(this)
                        }.bind(this))
                    }.bind(this))
                }, i.call(this, t)
            }.bind(this))) : console.error("THREE.js has not been loaded")
        }, c._loadAlpha = function(t, e) {
            var n = this.materialPaths[t];
            return n.alpha ? this._loadTexture(n.alpha.texture, n.alpha.extension, n, e) : Promise.resolve(e)
        }, c._loadTexture = function(t, e, n, o) {
            var a = r.addPrefix(i.TEXTURE_PATH + "/" + t + "." + e);
            s() ? "_2x" : "";
            return n.local && (a = r.addPrefix(n.basePath + "/" + t + "." + e)), new Promise(function(e, n) {
                this.textureLoader.load(a, function(n) {
                    var i = this._textureHasLoaded(t);
                    return i ? e(i.material) : (n.minFilter = THREE.LinearFilter, n.maxFilter = THREE.LinearFilter, n.generateMipmaps = !1, o.push(n), this.loadedTextures.push({
                        name: t,
                        material: o
                    }), e(o))
                }.bind(this))
            }.bind(this))
        }, c._textureHasLoaded = function(t) {
            for (var e = 0; e < this.loadedTextures.length; e++)
                if (this.loadedTextures[e].name == t) return this.loadedTextures[e];
            return !1
        }, c.destroy = function() {
            this.stop();
            for (var t = 0; t < this.scripts.length; t++) this.scripts[t].remove()
        }, c.stop = function() {
            o = !0
        }, e.exports = a
    }, {
        "./constants.js": 568,
        "@marcom/ac-cname": 17,
        "@marcom/ac-feature/isRetina": 215
    }],
    568: [function(t, e, n) {
        "use strict";

        function i() {
            return window.location.pathname.replace("index.html", "")
        }

        function r(t) {
            return i() + t
        }
        var s = "j";
        e.exports = {
            BASE_PATH: i(),
            WAGNER_PATH: "scripts/lib/wagner.built." + s + "s",
            WAGNER_EFFECTS_PATH: "scripts/lib/wagner.base.built." + s + "s",
            SHADER_LOADER_PATH: "scripts/lib/shaderloader.built." + s + "s",
            THREE_JS_PATH: "three." + s + "s",
            VERTEX_SHADERS_PATH: "scripts/lib/shaders/vertex",
            FRAGMENT_SHADERS_PATH: "scripts/lib/shaders/fragment",
            IMG_PATH: r("overview/hero"),
            TEXTURE_PATH: "/105/media/ww/macos/2016/c1206bed-9b76-4c2c-ad65-d3647b9ebcbb/overview/hero/textures",
            OBJECT_PATHS: [{
                texture: "bg",
                extension: "jpg",
                obj: "bg",
                side: !0,
                local: !1,
                type: "image"
            }, {
                texture: "mountains",
                extension: "jpg",
                obj: "mountains",
                side: !1,
                local: !1,
                alpha: {
                    texture: "mountains_alpha",
                    extension: "png"
                }
            }, {
                basePath: r("overview/hero"),
                texture: "ui",
                extension: "jpg",
                obj: "dock",
                local: !0,
                side: !1,
                doubleside: !0,
                alpha: {
                    texture: "ui_alpha",
                    extension: "png"
                }
            }, {
                basePath: r("overview/hero"),
                texture: "ui",
                extension: "jpg",
                obj: "menu_siri",
                local: !0,
                side: !1,
                doubleside: !0,
                alpha: {
                    texture: "ui_alpha",
                    extension: "png"
                }
            }],
            CANVAS_DIMENSIONS: {
                defaults: {
                    width: 901,
                    height: 564
                }
            },
            ARTIST_OPTIONS: {
                path: r("overview/hero"),
                images: [{
                    id: "hero-fallback-hardware",
                    name: "fallback_hardware",
                    type: "png"
                }, {
                    id: "hero-fallback-screen",
                    name: "fallback_screen",
                    type: "jpg"
                }]
            }
        }
    }, {}],
    569: [function(t, e, n) {
        "use strict";
        var i = Math.PI / 2;
        e.exports = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return t * (2 - t)
            },
            easeInOutQuad: function(t) {
                return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return --t * t * t + 1
            },
            easeInOutCubic: function(t) {
                return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return 1 - --t * t * t * t
            },
            easeInOutQuart: function(t) {
                return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
            },
            easeInQuint: function(t) {
                return t * t * t * t * t
            },
            easeOutQuint: function(t) {
                return 1 + --t * t * t * t * t
            },
            easeInOutQuint: function(t) {
                return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
            },
            easeOutSine: function(t) {
                return Math.sin(t * i)
            },
            easeInSine: function(t) {
                return -Math.cos(t * i) + 1
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }
        }
    }, {}],
    570: [function(t, e, n) {
        "use strict";
        var i = t("./constants"),
            r = t("./assetLoader"),
            s = t("@marcom/ac-viewport").Viewport,
            o = t("@marcom/ac-dom-styles/setStyle"),
            a = t("@marcom/ac-viewport-emitter"),
            c = t("@marcom/ac-useragent"),
            l = t("@marcom/ac-scroll-motion-emitter").ElementScrollMotionEmitter,
            h = (t("@marcom/ac-scroll-motion-emitter").ScrollMotionEmitter, t("@marcom/ac-event-emitter-micro").EventEmitterMicro),
            u = (t("@marcom/ac-feature"), t("@marcom/ac-dom-metrics/getScrollY")),
            f = t("../../lib/ac-shaderplayer-3d"),
            d = t("../../lib/objloader"),
            m = t("./3d/models.json"),
            p = t("./artist"),
            v = t("./macpaint"),
            g = t("./easing"),
            _ = t("@marcom/ac-clock").Clock,
            y = !1,
            b = !1,
            E = function() {
                y = !0
            },
            w = function() {
                var t = document.querySelector(".scroll-view"),
                    e = document.querySelector(".hero-animation"),
                    n = document.querySelector(".section-hero .explore"),
                    w = document.querySelector(".section-hero .hero-reveal"),
                    x = e.querySelector(".macbook"),
                    T = e.querySelector(".wallpaper"),
                    S = (e.querySelector(".dock"), e.querySelector(".menu"), "active"),
                    A = "end",
                    C = "resize",
                    O = new h;
                return {
                    initialize: function() {
                        this.width = T.offsetWidth, this.height = T.offsetHeight, this.viewport = a.viewport, this.menuY = 18, this.dockY = 50, this.uiRate = 4, this.zoom = .75, this.scale = 1, this.pixelRatio = 2, this.isSafari = c.browser.safari, this.canvasSize = {
                            xlarge: {
                                width: 901,
                                height: 564
                            },
                            large: {
                                width: 901,
                                height: 564
                            },
                            medium: {
                                width: 548,
                                height: 343
                            },
                            small: {
                                width: 266,
                                height: 166
                            }
                        }, this.progress = 0, this.blurAmount = 30 * this.pixelRatio, this.fov = 35.251, this.nearClip = 1, this.farClip = 15e3, this.ratio = 1.5737704918, this.cameraY = {
                            start: 45,
                            end: 0
                        }, this.cameraZ = {
                            start: 100,
                            end: 500
                        }, this.assets = new r, this.clock = new _, this.macpaint = new v, this.artist = new p(i.ARTIST_OPTIONS), this.hasStarted = !1, this.setup = this.setup.bind(this), this.assets.load("THREE_JS").then(this.assets.load.bind(this.assets, "WAGNER"), E).then(this.assets.load.bind(this.assets, "WAGNER_EFFECTS"), E).then(d, E).then(this._customMethods.bind(this), E).then(this.create.bind(this), E)
                    },
                    create: function() {
                        if (!b && !y) {
                            var e = {
                                    antialias: !1,
                                    fov: this.fov,
                                    nearClip: this.nearClip,
                                    farClip: this.farClip,
                                    ratio: 1.5737704918,
                                    devicePixelRatio: this.pixelRatio,
                                    sizes: i.CANVAS_DIMENSIONS,
                                    clearColor: 0,
                                    autoClearColor: !0,
                                    reloadOnBreakpoint: !0,
                                    composerPasses: ["FullBoxBlurPass", "FullBoxBlurPass"]
                                },
                                n = {
                                    smooth: !1,
                                    easingFunction: g.easeInQuad,
                                    offsetBottom: function() {
                                        return -x.offsetHeight
                                    },
                                    clock: this.clock
                                };
                            t.style.height = Math.round(3.6 * window.innerHeight) + "px", this.scroll = new l(t, n), this.shaderPlayer = new f(e), this.artist.draw(), this.macpaint.draw(), T.appendChild(this.shaderPlayer.el), this.setup()
                        }
                    },
                    setup: function() {
                        this.hasStarted || (this.resize(), this.listen(), this.shaderPlayer.setBlur(this.blurAmount), this.shaderPlayer.camera.position.y = this.cameraY[0], this.shaderPlayer.camera.position.z = this.cameraZ[0], this.assets.loadMaterial(null, this.shaderPlayer.scene).then(this._materialLoaded.bind(this), E).then(this._smoothScroll.bind(this), E).then(this.start))
                    },
                    start: function() {
                        y || b || (w.remove(), t.classList.add(S), n.classList.remove(A), n.classList.add(S), O.trigger("ready"))
                    },
                    listen: function() {
                        this.scroll.on("draw", this.handleScroll.bind(this)), a.on("change", function(e) {
                            b || (this.viewport !== e.to && (this.resize(), this.shaderPlayer.setSize(this.canvasSize[e.to].width, this.canvasSize[e.to].height), this.artist.destroy().draw(), this.macpaint.destroy().draw(), this.scroll.trigger("draw", {
                                progress: this.scroll.getProgress()
                            }), t.classList.add(C)), this.viewport = e.to)
                        }.bind(this)), s.on("resize", this.resize.bind(this))
                    },
                    resize: function() {
                        this._setScale(), this._setTranslate(), this.hasStarted || (this.shaderPlayer.setSize(this.canvasSize[this.viewport].width, this.canvasSize[this.viewport].height), this._transform()), this.scroll.trigger("draw", {
                            progress: this.scroll.getProgress()
                        }), this.shaderPlayer.render(), this.hasStarted = !0
                    },
                    destroy: function() {
                        b = !0, s.off(), a.off(), O.off(), this.assets && !this.assets.bail && this.assets.destroy(), this.clock && this.clock.stop(), this.scroll && this.scroll._events && (this.scroll.destroy(), this.scroll = null), this.shaderPlayer && (this.shaderPlayer.off("textures-complete", this.setup), this.shaderPlayer.on("textures-complete", this.shaderPlayer.destroy.bind(this.shaderPlayer))), this.artist && this.artist.destroy(), this.macpaint && this.macpaint.destroy(), t.style.height = "", document.documentElement.classList.remove("hero-full")
                    },
                    handleScroll: function(t) {
                        var e = t.progress,
                            i = 3900;
                        this.blurAnimation(this._tween(0, 1830 / i, e)), this.cameraYAnimation(this._tween(0, 1500 / i, e, g.easeOutQuart)), this.cameraZAnimation(this._tween(0, 1600 / i, e, g.easeInQuad)), this.scaleAnimation(this._tween(1600 / i, 1, e)), this.translateAnimation(this._tween(2800 / i, 1, e, g.easeInSine)), this.toggleClass(A, e), this.isSafari && this.toggleClass("close-curtain", e, .9), this.shaderPlayer.render(), e > 0 && n.classList.add(A)
                    },
                    blurAnimation: function(t) {
                        this.shaderPlayer.setBlur(this.blurAmount, t), this._transform()
                    },
                    cameraYAnimation: function(t) {
                        var e = this._moveFromTo(this.cameraY.start, this.cameraY.end, t);
                        this.shaderPlayer.camera.position.y = e
                    },
                    cameraZAnimation: function(t) {
                        var e = this._moveFromTo(this.cameraZ.start, this.cameraZ.end, t);
                        this.shaderPlayer.camera.position.z = e
                    },
                    scaleAnimation: function(t) {
                        e.offsetHeight;
                        this.scale = this._move(this._scale, 1, t), this.translate = this._translate * this.scale, this._transform()
                    },
                    translateAnimation: function(t) {
                        var e = this._move(this._translate * this.scale, 0, t);
                        this.translate = e, this._transform()
                    },
                    toggleClass: function(e, n, i) {
                        return i = i || 1, n >= i ? void t.classList.add(e) : void t.classList.remove(e)
                    },
                    on: function(t, e) {
                        return O.on(t, e)
                    },
                    _materialLoaded: function() {
                        return new Promise(function(t, e) {
                            return this.scroll.start(), this.scroll.trigger("draw", {
                                progress: this.scroll.getProgress()
                            }), this.shaderPlayer.start(), this.shaderPlayer.render(), this.shaderPlayer.stop(), t()
                        }.bind(this))
                    },
                    _smoothScroll: function() {
                        return new Promise(function(t, e) {
                            var n = function i(e, n) {
                                return e > n ? (this.handleScroll({
                                    progress: .001
                                }), this.shaderPlayer.render(), t()) : (this.handleScroll({
                                    progress: e / n
                                }), this.shaderPlayer.render(), e++, void window.requestAnimationFrame(function(t, e) {
                                    i.call(this, t, e)
                                }.bind(this, e, n)))
                            };
                            n.call(this, 0, 40)
                        }.bind(this))
                    },
                    _setScale: function() {
                        var t = window.innerWidth / T.offsetWidth,
                            e = window.innerHeight / T.offsetHeight;
                        this._scale = Math.max(t, e), this.scale = this._scale
                    },
                    _setTranslate: function() {
                        var t = T.offsetHeight / 2,
                            e = window.innerHeight / 2,
                            n = T.offsetTop;
                        this._translate = e - t - n, this.translate = this._translate * this._scale
                    },
                    _transform: function() {
                        o(e, {
                            transform: "translate3d(-50%," + this.translate + "px, 1px) scale3d(" + this.scale + "," + this.scale + ",1)"
                        })
                    },
                    _tween: function(t, e, n, i) {
                        var r = e - t,
                            s = n <= t ? 0 : 1;
                        return i = i || g.linear, n > t && n < e && (s = (n - t) / r), i(s)
                    },
                    _moveFromTo: function(t, e, n) {
                        var i = e - t,
                            r = t + i * n,
                            s = e > t ? "min" : "max";
                        return Math[s](r, e)
                    },
                    _move: function(t, e, n) {
                        var i = t - t * n,
                            r = e > t ? "min" : "max";
                        return Math.round(1e3 * Math[r](i, e)) / 1e3
                    },
                    _customMethods: function() {
                        return new Promise(function(t, e) {
                            l.prototype.getProgress = function() {
                                var t, e = u();
                                return t = e < this.min ? this.min : e > this.max ? this.max : e, (t - this.min) / (this.max - this.min)
                            }, window.WAGNER ? WAGNER.Pass.prototype.loadShader = function(t, e) {
                                var n = t.replace(".glsl", ""),
                                    i = document.querySelector("#" + n).textContent,
                                    r = "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }";
                                this.shader = WAGNER.processShader(r, i), e && e.apply(this)
                            } : e(), window.THREE ? THREE.OBJLoader.prototype.load = function(t, e, n, i) {
                                e(this.parse(m[t]))
                            } : e(), t()
                        })
                    }
                }
            }();
        e.exports = w
    }, {
        "../../lib/ac-shaderplayer-3d": 575,
        "../../lib/objloader": 576,
        "./3d/models.json": 565,
        "./artist": 566,
        "./assetLoader": 567,
        "./constants": 568,
        "./easing": 569,
        "./macpaint": 571,
        "@marcom/ac-clock": 11,
        "@marcom/ac-dom-metrics/getScrollY": 48,
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-feature": 203,
        "@marcom/ac-scroll-motion-emitter": 461,
        "@marcom/ac-useragent": 529,
        "@marcom/ac-viewport": 561,
        "@marcom/ac-viewport-emitter": 534
    }],
    571: [function(t, e, n) {
        "use strict";
        var i = t("./constants"),
            r = (t("../../lib/ac-canvas-image-scaler"), t("@marcom/ac-image-to-canvas-grid")),
            s = t("@marcom/ac-cname").cname,
            o = function() {},
            a = function(t) {
                return this.name = "hardware", this.width = 2428, this.height = 1388, this.hardwareEl = document.querySelector(".section-hero ." + this.name), this.options = t || {
                    rows: 3,
                    columns: 3,
                    retina: !1
                }, this
            },
            c = a.prototype;
        c.draw = function() {
            return r(this.hardwareEl, this.options).then(function(t) {
                this.hardwareCanvas = t, this.hardwareCanvas.classList.add(this.name + "-canvas"), this.hardwareEl.appendChild(t), this.hardwareEl.classList.add("active"), this.hardwareEl.style["background-image"] = "none"
            }.bind(this), o), this
        }, c.destroy = function() {
            return this.hardwareEl && (this.hardwareEl.classList.remove("active"), this.hardwareEl.removeAttribute("style")), this.hardwareCanvas && this.hardwareCanvas.remove(), this
        }, c._scale = function(t, e) {
            t.style["-webkit-transform"] = "scale3d(" + e + "," + e + ",1)", t.style["-moz-transform"] = "scale3d(" + e + "," + e + ",1)", t.style.transform = "scale3d(" + e + "," + e + ",1)"
        }, c._formatPath = function(t) {
            var e = "png",
                n = "large",
                r = "_2x";
            return s.addPrefix(i.IMG_PATH + "/" + t + "_" + n + r + "." + e)
        }, e.exports = a
    }, {
        "../../lib/ac-canvas-image-scaler": 574,
        "./constants": 568,
        "@marcom/ac-cname": 17,
        "@marcom/ac-image-to-canvas-grid": 291
    }],
    572: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, s, o, c) {
            this.name = "SiriCommandComponent_" + c, r.call(this, t, e, n, i, s, o, c), this.boxBackground = u(".box-background", e), this.siriWaveContainer = u(".wave-container", e), this.siriCommandEl = f(".siri-command", e), this.commandBoxClip = new a(this.boxBackground, .5, {
                opacity: "1",
                transform: {
                    rotateX: "0deg"
                }
            }), this.siriWaveContainerClip = new a(this.siriWaveContainer, .5, {
                transform: {
                    rotateY: "0deg"
                }
            }), this.TRANSITION_IN_DURATION = 1, this.TRANSITION_OUT_DURATION = 1, this.TRANSITION_IN_EASE = "easeOutExpo", this.TRANSITION_OUT_EASE = "easeOutExpo", this.NORMAL_ENVELOPE = .5, this.SILENT_ENVELOPE = .95, this.NORMAL_ENVELOPE_2 = .05, this.SILENT_ENVELOPE_2 = .3, this.NORMAL_SCALE = .2, this.SILENT_SCALE = .85, this.NORMAL_SPEED = 1.5, this.SILENT_SPEED = .5, this.siriTalkingClips = {
                talkingStart: {
                    duration: this.TRANSITION_IN_DURATION,
                    ease: this.TRANSITION_IN_EASE,
                    propsFrom: {
                        et: this.SILENT_SCALE,
                        ee: this.SILENT_SPEED,
                        qa: this.SILENT_ENVELOPE,
                        te: this.SILENT_ENVELOPE_2
                    },
                    propsTo: {
                        et: this.NORMAL_SCALE,
                        ee: this.NORMAL_SPEED,
                        qa: this.NORMAL_ENVELOPE,
                        te: this.NORMAL_ENVELOPE_2
                    }
                },
                talkingEnd: {
                    duration: this.TRANSITION_OUT_DURATION,
                    ease: this.TRANSITION_OUT_EASE,
                    propsFrom: {
                        et: this.NORMAL_SCALE,
                        ee: this.NORMAL_SPEED,
                        qa: this.NORMAL_ENVELOPE,
                        te: this.NORMAL_ENVELOPE_2
                    },
                    propsTo: {
                        et: this.SILENT_SCALE,
                        ee: this.SILENT_SPEED,
                        qa: this.SILENT_ENVELOPE,
                        te: this.SILENT_ENVELOPE_2
                    }
                }
            };
            for (var l = [], h = 0; h < this.siriCommandEl.length; h++) l[h] = this.siriCommandEl[h].textContent.length;
            var m = Math.max.apply(Math, l),
                p = l.indexOf(m);
            d(this.siriCommandEl[p], "relative"), d(e, "enhanced"), this.rafWhenVisible = !1
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
            s = r.prototype,
            o = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
            a = t("@marcom/ac-eclipse").Clip,
            c = t("@marcom/ac-eclipse").Timeline,
            l = t("@marcom/ac-siri-player").SiriPlayer,
            h = t("@marcom/ac-feature"),
            u = t("@marcom/ac-dom-traversal/querySelector"),
            f = t("@marcom/ac-dom-traversal/querySelectorAll"),
            d = t("@marcom/ac-classlist/add"),
            m = t("@marcom/ac-object/clone"),
            p = t("@marcom/ac-gpu-reporter").GPUReporter,
            v = i.prototype = Object.create(r.prototype);
        i.prototype.constructor = i, i.IS_SUPPORTED = function() {
            var t = !h.isDesktop() && !o.IS_IOS,
                e = new p,
                n = {
                    blacklist: ["PowerVR SGX 554", "IMGSGX554"]
                },
                i = 1 === e.getGPUClass(n);
            return !(o.IE || o.EDGE || t || i)
        }, v.siriWavePlayer = function() {
            this.siriPlayer = new l({
                alpha: !0,
                transparent: !0,
                sizes: {
                    defaults: {
                        width: 720,
                        height: 162
                    }
                }
            }), this.siriPlayer.setUniforms(this.siriTalkingClips.talkingStart.propsFrom), this.siriWaveContainer.appendChild(this.siriPlayer.el)
        }, v.getSiriWaveClip = function(t) {
            var e = function(t, e) {
                    this.siriPlayer.setUniforms(t)
                },
                n = m(t.propsFrom);
            return new a(n, t.duration, m(t.propsTo), {
                ease: t.ease,
                propsEase: m(t.propsEase),
                propsFrom: m(t.propsFrom),
                onUpdate: e.bind(this, n)
            })
        }, v.timeline = function() {
            var t = 5.5;
            this.myTimeline = new c({
                ease: "linear",
                onComplete: function() {
                    this.myTimeline.progress(.81 / this.myTimeline.duration()), this.myTimeline.play()
                }.bind(this)
            });
            for (var e, n, i = 0; i < this.siriCommandEl.length; i++) e = new a(this.siriCommandEl[i], 1.5, null, {
                propsFrom: {
                    opacity: 0
                },
                propsTo: {
                    opacity: 1
                }
            }), n = new a(this.siriCommandEl[i], .75, null, {
                propsFrom: {
                    opacity: 1
                },
                propsTo: {
                    opacity: 0
                }
            }), this.siriStartTalkingClip = this.getSiriWaveClip(this.siriTalkingClips.talkingStart), this.siriEndTalkingClip = this.getSiriWaveClip(this.siriTalkingClips.talkingEnd), this.myTimeline.addClip(n, 5 + t * i), this.myTimeline.addClip(e, .8 + t * i), this.myTimeline.addClip(this.siriEndTalkingClip, 5 + t * i), this.myTimeline.addClip(this.siriStartTalkingClip, .8 + t * i);
            this.myTimeline.addClip(this.commandBoxClip, 0), this.myTimeline.addClip(this.siriWaveContainerClip, .3)
        }, v.onElementEnterView = function() {
            this.siriWavePlayer(), this.timeline()
        }, v.onElementAppear = function() {
            this.myTimeline.play(), this.siriPlayer.start()
        }, v.onElementDisappear = function() {
            this.myTimeline.pause(), this.siriPlayer.stop()
        }, v.setupEvents = function() {
            s.setupEvents.call(this), this.onElementAppear = this.onElementAppear.bind(this), this.onElementDisappear = this.onElementDisappear.bind(this), this.onElementEnterView = this.onElementEnterView.bind(this), this.trackedElement = this.section.elementEngagement.addElement(this.element, {
                timeToEngage: 0,
                inViewThreshold: .2
            }), this.trackedElement.on("engaged", this.onElementAppear), this.trackedElement.on("exitview", this.onElementDisappear), this.trackedElement.once("enterview", this.onElementEnterView)
        }, e.exports = i
    }, {
        "@marcom/ac-classlist/add": 1,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-dom-traversal/querySelectorAll": 94,
        "@marcom/ac-eclipse": 162,
        "@marcom/ac-feature": 203,
        "@marcom/ac-gpu-reporter": 265,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 334,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 340,
        "@marcom/ac-object/clone": 444,
        "@marcom/ac-polyfills/Object/create": void 0,
        "@marcom/ac-siri-player": 520
    }],
    573: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            this.figure = t, this.replay_btn = e, this.segments = t.querySelectorAll(".bar-segment")
        }
        var r = t("@marcom/ac-dom-events/addEventListener"),
            s = i.prototype;
        s.loop = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++) e(t[n], n)
        }, s.shrink = function() {
            this.figure.classList.remove("expand"), this.figure.classList.add("shrink"), this.replay_btn.classList.remove("active"), this.replay_btn.setAttribute("disabled", !0), r(this.segments[0], "animationend", function() {
                this.figure.classList.remove("shrink"), this.replay_btn.classList.add("active"), this.replay_btn.removeAttribute("disabled")
            }.bind(this))
        }, s.expand = function() {
            this.figure.classList.add("expand")
        }, s.label_size_check = function() {
            var t = !1;
            this.loop(this.segments, function(e, n) {
                var i = e.clientWidth,
                    r = e.querySelector("h5").clientWidth;
                if (r > i && !e.classList.contains("segment-availablespace")) return t = !0, void this.figure.classList.add("condensed")
            }.bind(this)), t === !1 && this.figure.classList.remove("condensed")
        }, e.exports = i
    }, {
        "@marcom/ac-dom-events/addEventListener": 24
    }],
    574: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            if ("string" == typeof t) this.img = new Image, this._src = t;
            else {
                if (!(t instanceof HTMLImageElement || t instanceof Image)) throw new TypeError("First argument must be a path string or an image object.");
                this.img = t
            }
            e instanceof HTMLCanvasElement ? this.el = e : ("object" === ("undefined" == typeof e ? "undefined" : s(e)) && (n = e), this.el = document.createElement("canvas")), this._elContext = this.el.getContext("2d"), n = n || {}, this._iterations = n.iterations || 1, n.width && (this.width = n.width), n.height && (this.height = n.height), n.async === !0 ? this._async = !0 : this._async = !1, this._canvas = document.createElement("canvas"), this._context = this._canvas.getContext("2d")
        }
        var r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            o = t("@marcom/ac-dom-emitter").DOMEmitter;
        r = i.prototype, r.load = function() {
            return new Promise(function(t, e) {
                if (this.img.src.length > 0 && this.img.complete) return this._imageLoadCallback(t, e);
                if ("string" == typeof this._src && (this.img.src = this._src), 0 === this.img.src.length) throw new TypeError("Image src attribute undefined; cannot load image.");
                new o(this.img).once("load", this._imageLoadCallback.bind(this, t, e))
            }.bind(this))
        }, r.render = function(t) {
            function e(t, e, n) {
                var i = t.iterations || this._iterations;
                this.el.width !== this.width && (this.el.width = this.width), this.el.height !== this.height && (this.el.height = this.height);
                var r, s, o, a, c, l = this.el.width,
                    h = this.el.height;
                for (r = 0; r < i; r++) s = l * (i - r), o = h * (i - r), 0 === r && (this._canvas.width = s, this._canvas.height = o, this._context.drawImage(this.img, 0, 0, s, o)), r + 1 !== i ? (a = l * (i - r - 1), c = h * (i - r - 1), this._context.drawImage(this._canvas, 0, 0, s, o, 0, 0, a, c)) : this._elContext.drawImage(this._canvas, 0, 0, s, o, 0, 0, s, o);
                return e(this.el)
            }
            if (t = t || {}, this._async) {
                var n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.setTimeout;
                return new Promise(function(i, r) {
                    n(e.bind(this, t, i, r))
                }.bind(this))
            }
            return new Promise(function(n, i) {
                e.call(this, t, n, i)
            }.bind(this))
        }, r._imageLoadCallback = function(t, e) {
            return this.width || (this.width = this.img.width), this.height || (this.height = this.img.height), t()
        }, Object.defineProperties(r, {
            _width: {
                value: void 0,
                enumerable: !1,
                writable: !0
            },
            _height: {
                value: void 0,
                enumerable: !1,
                writable: !0
            },
            width: {
                get: function() {
                    return this._width
                },
                set: function(t) {
                    isFinite(t) && (this._width = 1 * t)
                }
            },
            height: {
                get: function() {
                    return this._height
                },
                set: function(t) {
                    isFinite(t) && (this._height = 1 * t)
                }
            }
        }), e.exports = i
    }, {
        "@marcom/ac-dom-emitter": 21
    }],
    575: [function(t, e, n) {
        "use strict";
        var i = t("@marcom/ac-dom-styles/setStyle"),
            r = t("@marcom/ac-shader-player-2d").ShaderPlayer2D,
            s = r.prototype,
            o = function(t) {
                r.call(this, t)
            },
            a = o.prototype = Object.create(s);
        o.prototype.constructor = o, a.initialize = function() {
            this.options.textures && this._setTextureUniforms(this.options.textures), this.createScene(), this.createCamera(), this.createRenderer(), this.options.composerPasses.length > 0 && this.createComposer(), this.el = this.renderer.domElement, this.el.className = this.className, this.setSize(), this._isRunning = !1
        }, a._onDraw = function(t) {}, a.createCamera = function() {
            this.camera = new THREE.PerspectiveCamera(this.options.fov, this.options.ratio, this.options.nearClip, this.options.farClip), this.camera.lookAt(new THREE.Vector3(0, 0, 0))
        }, a.setBlur = function(t, e) {
            var n = t,
                i = e ? 2 * e : t;
            e && (i = i > 1 ? 1 : i, n = Math.abs((i - 1) * t)), this.composerPasses[0].params.amount = n, this.composerPasses[1].params.amount = .4 * n
        }, a.setSize = function(t, e) {
            "undefined" != typeof t && (this.width = t), "undefined" != typeof e && (this.height = e);
            var n = this.options.sizes.defaults,
                r = n ? n.width : this.width,
                s = n ? n.height : this.height,
                o = this.width / n.width / this.devicePixelRatio,
                a = this.height / n.height / this.devicePixelRatio;
            this._setResolution(), this.renderer && this.renderer.setSize(r * this.devicePixelRatio * this.options.mipmap, s * this.devicePixelRatio * this.options.mipmap), this.composer && this.composer.setSize(r * this.devicePixelRatio * this.options.mipmap, s * this.devicePixelRatio * this.options.mipmap), this.el && i(this.el, {
                transform: "scale3d(" + o + "," + a + ",1)"
            })
        }, e.exports = o
    }, {
        "@marcom/ac-dom-styles/setStyle": 66,
        "@marcom/ac-shader-player-2d": 468
    }],
    576: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            return new Promise(function(t, e) {
                THREE.OBJLoader = function(t) {
                    this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager, this.materials = null
                }, THREE.OBJLoader.prototype = {
                    constructor: THREE.OBJLoader,
                    load: function(t, e, n, i) {
                        var r = this,
                            s = new THREE.XHRLoader(r.manager);
                        s.setCrossOrigin(this.crossOrigin), s.load(t, function(t) {
                            e(r.parse(t))
                        }, n, i)
                    },
                    setCrossOrigin: function(t) {
                        this.crossOrigin = t
                    },
                    setMaterials: function(t) {
                        this.materials = t
                    },
                    parse: function(t) {
                        function e(t) {
                            var e = {
                                    vertices: [],
                                    normals: [],
                                    uvs: []
                                },
                                n = {
                                    name: "",
                                    smooth: !0
                                };
                            l = {
                                name: t,
                                geometry: e,
                                material: n
                            }, h.push(l)
                        }

                        function n(t) {
                            var e = parseInt(t);
                            return 3 * (e >= 0 ? e - 1 : e + f.length / 3)
                        }

                        function i(t) {
                            var e = parseInt(t);
                            return 3 * (e >= 0 ? e - 1 : e + d.length / 3)
                        }

                        function r(t) {
                            var e = parseInt(t);
                            return 2 * (e >= 0 ? e - 1 : e + m.length / 2)
                        }

                        function s(t, e, n) {
                            l.geometry.vertices.push(f[t], f[t + 1], f[t + 2], f[e], f[e + 1], f[e + 2], f[n], f[n + 1], f[n + 2])
                        }

                        function o(t, e, n) {
                            l.geometry.normals.push(d[t], d[t + 1], d[t + 2], d[e], d[e + 1], d[e + 2], d[n], d[n + 1], d[n + 2])
                        }

                        function a(t, e, n) {
                            l.geometry.uvs.push(m[t], m[t + 1], m[e], m[e + 1], m[n], m[n + 1])
                        }

                        function c(t, e, c, l, h, u, f, d, m, p, v, g) {
                            var _, y = n(t),
                                b = n(e),
                                E = n(c);
                            void 0 === l ? s(y, b, E) : (_ = n(l), s(y, b, _), s(b, E, _)), void 0 !== h && (y = r(h), b = r(u), E = r(f), void 0 === l ? a(y, b, E) : (_ = r(d), a(y, b, _), a(b, E, _))), void 0 !== m && (y = i(m), b = i(p), E = i(v), void 0 === l ? o(y, b, E) : (_ = i(g), o(y, b, _), o(b, E, _)))
                        }
                        var l, h = [],
                            u = !1,
                            f = [],
                            d = [],
                            m = [];
                        e("");
                        for (var p = /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, v = /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, g = /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/, _ = /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/, y = /^f\s+((-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+))(?:\s+((-?\d+)\/(-?\d+)))?/, b = /^f\s+((-?\d+)\/(-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+)\/(-?\d+))\s+((-?\d+)\/(-?\d+)\/(-?\d+))(?:\s+((-?\d+)\/(-?\d+)\/(-?\d+)))?/, E = /^f\s+((-?\d+)\/\/(-?\d+))\s+((-?\d+)\/\/(-?\d+))\s+((-?\d+)\/\/(-?\d+))(?:\s+((-?\d+)\/\/(-?\d+)))?/, w = /^[og]\s+(.+)/, x = /^s\s+([01]|on|off)/, T = t.split("\n"), S = 0; S < T.length; S++) {
                            var A = T[S];
                            A = A.trim();
                            var C;
                            if (0 !== A.length && "#" !== A.charAt(0))
                                if (null !== (C = p.exec(A))) f.push(parseFloat(C[1]), parseFloat(C[2]), parseFloat(C[3]));
                                else if (null !== (C = v.exec(A))) d.push(parseFloat(C[1]), parseFloat(C[2]), parseFloat(C[3]));
                            else if (null !== (C = g.exec(A))) m.push(parseFloat(C[1]), parseFloat(C[2]));
                            else if (null !== (C = _.exec(A))) c(C[1], C[2], C[3], C[4]);
                            else if (null !== (C = y.exec(A))) c(C[2], C[5], C[8], C[11], C[3], C[6], C[9], C[12]);
                            else if (null !== (C = b.exec(A))) c(C[2], C[6], C[10], C[14], C[3], C[7], C[11], C[15], C[4], C[8], C[12], C[16]);
                            else if (null !== (C = E.exec(A))) c(C[2], C[5], C[8], C[11], void 0, void 0, void 0, void 0, C[3], C[6], C[9], C[12]);
                            else if (null !== (C = w.exec(A))) {
                                var O = C[1].trim();
                                u === !1 ? (u = !0, l.name = O) : e(O)
                            } else /^usemtl /.test(A) ? l.material.name = A.substring(7).trim() : /^mtllib /.test(A) || null !== (C = x.exec(A)) && (l.material.smooth = "1" === C[1] || "on" === C[1])
                        }
                        for (var P = new THREE.Group, S = 0, I = h.length; S < I; S++) {
                            l = h[S];
                            var L = l.geometry,
                                k = new THREE.BufferGeometry;
                            k.addAttribute("position", new THREE.BufferAttribute(new Float32Array(L.vertices), 3)), L.normals.length > 0 ? k.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(L.normals), 3)) : k.computeVertexNormals(), L.uvs.length > 0 && k.addAttribute("uv", new THREE.BufferAttribute(new Float32Array(L.uvs), 2));
                            var R;
                            null !== this.materials && (R = this.materials.create(l.material.name)), R || (R = new THREE.MeshPhongMaterial, R.name = l.material.name), R.shading = l.material.smooth ? THREE.SmoothShading : THREE.FlatShading;
                            var D = new THREE.Mesh(k, R);
                            D.name = l.name, P.add(D)
                        }
                        return P
                    }
                }, t()
            })
        }
    }, {}],
    577: [function(t, e, n) {
        "use strict";
        var i = (t("@marcom/ac-jetpack-lib/core/BasePage"), t("@marcom/ac-jetpack-lib/model/ComponentMap")),
            r = t("@marcom/ac-jetpack-lib/model/SectionMap"),
            s = t("@marcom/ac-jetpack-lib/model/DataAttributes"),
            o = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
            a = t("@marcom/ac-jetpack-lib/model/PageMap"),
            c = t("./shared/model/EnabledFeatures"),
            l = t("./shared/model/SectionMap"),
            h = t("./shared/model/ComponentMap"),
            u = t("./shared/model/PageMap"),
            f = t("@marcom/ac-kr-word-joiner").WordJoiner,
            d = t("./shared/progressiveImages/ProgressiveImagesController"),
            m = t("@marcom/ac-dom-traversal/querySelector"),
            p = function() {
                return {
                    initialize: function() {
                        r = Object.assign(r, l), i = Object.assign(i, h), a = Object.assign(a, u), o = o.extend(c), o.init(), this.krWordJoiner();
                        var t = this.instantiatePageController();
                        new d(t)
                    },
                    instantiatePageController: function() {
                        var t = m("main,.main");
                        if (null === t) throw "Could not find <main> or .main element";
                        if (!t.hasAttribute(s.PAGE_TYPE)) throw "No valid <main> tag found with correct page type attribute";
                        var e = t.getAttribute(s.PAGE_TYPE);
                        if (!a.hasOwnProperty(e)) throw "Failed to init no page type called " + e + " found";
                        return new a[e]
                    },
                    krWordJoiner: function() {
                        var t, e = document.documentElement.getAttribute("lang");
                        "ko-KR" === e && f.shouldJoin() && (t = new f({
                            dataAttribute: !1
                        }), t.join(), t.destroy())
                    }
                }
            }();
        e.exports = p.initialize()
    }, {
        "./shared/model/ComponentMap": 581,
        "./shared/model/EnabledFeatures": 582,
        "./shared/model/PageMap": 583,
        "./shared/model/SectionMap": 584,
        "./shared/progressiveImages/ProgressiveImagesController": 587,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-jetpack-lib/core/BasePage": 335,
        "@marcom/ac-jetpack-lib/model/ComponentMap": 338,
        "@marcom/ac-jetpack-lib/model/DataAttributes": 339,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 340,
        "@marcom/ac-jetpack-lib/model/PageMap": 341,
        "@marcom/ac-jetpack-lib/model/SectionMap": 342,
        "@marcom/ac-kr-word-joiner": 344
    }],
    578: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, r, o, a) {
            this.currentBreakpoint = i,
                this.autoPlay = !1, this._engagedLoadingTimeout = null, this.hasPlayed = !1, this.mediaObjectLoadStarted = !1, this.onEndedWasTriggered = !1, this.trackedComponentElement = null, s.apply(this, arguments), this.name = "MediaObjectComponent_" + a, this.rafWhenVisible = !1, this.destroyed = !1, this.mediaObjectContainer = l("[data-mediaobject]", this.element), this.data = this._setData(), this.mediaObject = this._createMediaObject(this.data), this._bindMethods(), this.replayButton = l(".mediaObject-replay", this.element), this.playButton = l(".mediaObject-play", this.element), this._initMediaObject(), this._bindTriggers()
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("../mediaObject/createMediaObject"),
            s = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
            o = s.prototype,
            a = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
            c = t("@marcom/ac-feature"),
            l = t("@marcom/ac-dom-traversal/querySelector"),
            h = t("@marcom/ac-dom-events/addEventListener"),
            u = t("@marcom/ac-dom-events/removeEventListener"),
            f = t("@marcom/ac-feature/isRetina"),
            d = t("@marcom/ac-classlist/remove"),
            m = t("@marcom/ac-classlist/add"),
            p = i.prototype = Object.create(s.prototype);
        i.prototype.constructor = i, i.IS_SUPPORTED = function() {
            var t = !c.isDesktop() && !a.IS_IOS;
            return a.BLOBS && !a.IE && !t
        }, p._setData = function() {
            var t = this._parseJSONFromDataAttribute();
            return t.timeToEngage = t.timeToEngage || 1e3, t.inViewThreshold = t.inViewThreshold || .5, t
        }, p._bindMethods = function() {
            this._onMediaContainerEngaged = this._onMediaContainerEngaged.bind(this), this._onMediaContainerExitView = this._onMediaContainerExitView.bind(this), this._onLoadStart = this._onLoadStart.bind(this), this._onLoaded = this._onLoaded.bind(this), this._onEnhanced = this._onEnhanced.bind(this), this._onReady = this._onReady.bind(this), this._onPlay = this._onPlay.bind(this), this._onEnded = this._onEnded.bind(this), this._onEndFullscreen = this._onEndFullscreen.bind(this), this._onTriggerClick = this._onTriggerClick.bind(this), this._onEngagedLoadingTimeout = this._onEngagedLoadingTimeout.bind(this), this._focusClickToPlayOnTimeout = this._focusClickToPlayOnTimeout.bind(this)
        }, p._setupTrackedComponentElement = function() {
            var t = this.section.elementEngagement.addElement(this.mediaObjectContainer, {
                timeToEngage: this.data.timeToEngage,
                inViewThreshold: this.data.inViewThreshold
            });
            return t.on("engaged", this._onMediaContainerEngaged), t.on("exitview", this._onMediaContainerExitView), t
        }, p.destroy = function() {
            this.destroyed || (this._releaseTriggers(), this._disableTriggers(), this._hideReplay(), this.trackedComponentElement && (this.section && this.section.elementEngagement.stop(this.trackedComponentElement), this.trackedComponentElement.off("engaged", this._onMediaContainerEngaged), this.trackedComponentElement.off("exitview", this._onMediaContainerExitView)), a.IS_DESKTOP ? !this.mediaObject || this.mediaObject.getDestroyed() || this.mediaObject.getLoaded() ? this.mediaObject.destroy() : (d(this.mediaObject.el, "mediaObject-playing"), d(this.mediaObject.el, "mediaObject-ended"), d(this.mediaObject.el, "mediaObject-enhanced"), m(this.mediaObject.el, "mediaObject-destroyed"), this.mediaObject.off(), this.mediaObject.on("loaded", function() {
                this.mediaObject.destroy()
            }.bind(this))) : this.mediaObject.destroy(), o.destroy.call(this), this.destroyed = !0)
        }, p.setupEvents = function() {
            o.setupEvents.call(this), a.IS_DESKTOP && (this.trackedComponentElement = this._setupTrackedComponentElement())
        }, p.onBreakpoint = function(t, e, n, i) {
            this.destroyed || (this.currentBreakpoint = t, !this.mediaObject || this.mediaObject && this.mediaObject.getDestroyed() || "xlarge" !== t && "xlarge" !== e && this.mediaObject && !this.mediaObject.getDestroyed() && t !== e && this.destroy())
        }, p.load = function() {
            this.mediaObjectLoadStarted || this.mediaObject.load()
        }, p._parseJSONFromDataAttribute = function() {
            var t = this.mediaObjectContainer.getAttribute("data-mediaobject"),
                e = {};
            if (t) try {
                e = JSON.parse(t)
            } catch (n) {
                console.error("MediaObjectComponent::_parseJSONFromDataAttribute - malformed JSON in data-attribute", this.element, n)
            }
            return e
        }, p._createMediaObject = function(t) {
            t = t || {};
            var e = a.IS_DESKTOP,
                n = "xlarge" === this.currentBreakpoint ? "large" : this.currentBreakpoint,
                i = f() ? n + "_2x" : n,
                s = "/split_files/" + i;
            return e && (t.name += s), t.mediaSrc = {
                filename: i,
                splitFileLoading: e
            }, t.el = this.mediaObjectContainer, r.create(t)
        }, p._onMediaContainerEngaged = function(t) {
            this.hasPlayed || (this.mediaObjectLoadStarted ? this.mediaObject.getReady() ? this.mediaObject.play() : this._engagedLoadingTimeout || this._setEngagedLoadingTimeout() : (this.autoPlay = !0, this.load(), this._setEngagedLoadingTimeout()))
        }, p._setEngagedLoadingTimeout = function() {
            this._engagedLoadingTimeout = setTimeout(this._onEngagedLoadingTimeout, 2e3)
        }, p._onEngagedLoadingTimeout = function() {
            this.destroy()
        }, p._onMediaContainerExitView = function() {
            this.resetMediaObject()
        }, p.resetMediaObject = function() {
            this.autoPlay = !1, this.hasPlayed = !0, this.mediaObject.reset(), this._enableTriggers()
        }, p._initMediaObject = function() {
            this.mediaObject.getDestroyed() || (this.mediaObject.on("loadstart", this._onLoadStart), this.mediaObject.on("loaded", this._onLoaded), this.mediaObject.on("enhanced", this._onEnhanced), this.mediaObject.on("ready", this._onReady), this.mediaObject.on("play", this._onPlay), this.mediaObject.on("ended", this._onEnded), this.mediaObject.mediaEmitter.on("webkitendfullscreen", this._onEndFullscreen))
        }, p._onLoadStart = function() {
            this.mediaObjectLoadStarted = !0
        }, p._onReady = function() {
            this.autoPlay && !this.mediaObject.getDestroyed() && this.mediaObject.play()
        }, p._onLoaded = function() {
            clearTimeout(this._engagedLoadingTimeout), this._engagedLoadingTimeout = null, this.mediaObject.getDestroyed() || this.mediaObject.enhance()
        }, p._onEnhanced = function() {
            this.mediaObject.getDestroyed()
        }, p._onPlay = function() {
            this.hasPlayed = !0, this._disableTriggers()
        }, p._enableTriggers = function() {
            this.replayButton.removeAttribute("disabled"), this.replayButton.classList.add("active"), this.playButton.classList.add("active")
        }, p._disableTriggers = function() {
            this.replayButton.setAttribute("disabled", "true"), this.replayButton.classList.remove("active"), this.playButton.classList.remove("active")
        }, p._hideReplay = function() {
            this.replayButton.classList.add("hidden")
        }, p._onEnded = function() {
            this._enableTriggers(), this.onEndedWasTriggered = !0, window.setTimeout(this._focusClickToPlayOnTimeout, 1e3)
        }, p._onEndFullscreen = function() {
            this.onEndedWasTriggered || window.setTimeout(this._focusClickToPlayOnTimeout, 1e3)
        }, p._onTriggerClick = function() {
            this.mediaObject.play()
        }, p._bindTriggers = function() {
            h(this.replayButton, "click", this._onTriggerClick), h(this.playButton, "click", this._onTriggerClick)
        }, p._releaseTriggers = function() {
            u(this.replayButton, "click", this._onTriggerClick), u(this.playButton, "click", this._onTriggerClick)
        }, p._focusClickToPlayOnTimeout = function() {
            this.onEndedWasTriggered = !1, a.TOUCH && this.playButton.focus()
        }, e.exports = i
    }, {
        "../mediaObject/createMediaObject": 580,
        "@marcom/ac-classlist/add": 1,
        "@marcom/ac-classlist/remove": 9,
        "@marcom/ac-dom-events/addEventListener": 24,
        "@marcom/ac-dom-events/removeEventListener": 33,
        "@marcom/ac-dom-traversal/querySelector": 93,
        "@marcom/ac-feature": 203,
        "@marcom/ac-feature/isRetina": 215,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 334,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 340,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    579: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, s, o, c) {
            r.call(this, t, e, n, i, s, o, c), this.galleryElement = l(".gallery", this.element), a(this.element, f), this.rafWhenVisible = !1, this.initializeGallery(i)
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-jetpack-lib/core/BaseComponent"),
            s = r.prototype,
            o = t("@marcom/ac-jetpack-lib/model/EnabledFeatures"),
            a = t("@marcom/ac-classlist/add"),
            c = t("@marcom/ac-classlist/remove"),
            l = t("@marcom/ac-dom-traversal").querySelector,
            h = t("@marcom/ac-dom-traversal").querySelectorAll,
            u = t("@marcom/ac-gallery").Gallery,
            f = "photos-gallery-active",
            d = i.prototype = Object.create(r.prototype);
        i.prototype.constructor = i, i.IS_SUPPORTED = function() {
            var t = h(".slide", this.galleryElement);
            return !o.IS_IE && t.length > 1
        }, d.initializeGallery = function(t) {
            var e = u.FADE,
                n = {};
            "small" === t && o.TOUCH ? (e = u.SLIDE, n = {
                resizeContainer: !0
            }) : n = {
                crossFade: !0,
                desktopThrowing: !0,
                duration: .6,
                resizeContainer: !0,
                touch: !0,
                desktopSwipe: !1
            }, this.destroyGallery(), this.gallery = u.create(this.galleryElement, e, n)
        }, d.destroyGallery = function() {
            this.gallery && "function" == typeof this.gallery.destroy && this.gallery.destroy()
        }, d.destroy = function() {
            this.destroyGallery(), c(this.galleryElement, f), s.destroy.call(this)
        }, d.onBreakpoint = function(t, e, n, i) {
            this.initializeGallery(t)
        }, e.exports = i
    }, {
        "@marcom/ac-classlist/add": 1,
        "@marcom/ac-classlist/remove": 9,
        "@marcom/ac-dom-traversal": 79,
        "@marcom/ac-gallery": 247,
        "@marcom/ac-jetpack-lib/core/BaseComponent": 334,
        "@marcom/ac-jetpack-lib/model/EnabledFeatures": 340,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    580: [function(t, e, n) {
        "use strict";

        function i(t) {
            var e = t.locale || l,
                n = a + e + c + "/" + t.name,
                i = r(u, t.mediaSrc || {}),
                f = r(h, t.options || {}),
                d = o.addPrefix(n);
            return i.basePath = t.basePath || d, s.createVideo(t.el, i, f)
        }
        var r = t("@marcom/ac-object/defaults"),
            s = t("@marcom/ac-media-object"),
            o = t("@marcom/ac-cname").cname,
            a = "/105/media",
            c = "/macos/2016/c1206bed-9b76-4c2c-ad65-d3647b9ebcbb",
            l = "ww",
            h = {
                frameRate: 30
            },
            u = {
                filename: "large",
                fileFormat: "mp4"
            };
        e.exports = {
            create: i
        }
    }, {
        "@marcom/ac-cname": 17,
        "@marcom/ac-media-object": 431,
        "@marcom/ac-object/defaults": 446
    }],
    581: [function(t, e, n) {
        "use strict";
        e.exports = {
            StorageComponent: t("../../components/StorageComponent"),
            PhotosGallery: t("../components/PhotosGallery"),
            HeroComponent: t("../../components/HeroComponent"),
            SiriCommandComponent: t("../../components/siri/SiriCommandComponent"),
            MediaObjectComponent: t("../components/MediaObjectComponent")
        }
    }, {
        "../../components/HeroComponent": 563,
        "../../components/StorageComponent": 564,
        "../../components/siri/SiriCommandComponent": 572,
        "../components/MediaObjectComponent": 578,
        "../components/PhotosGallery": 579
    }],
    582: [function(t, e, n) {
        "use strict";
        e.exports = {
            init: function() {
                var t = document.getElementsByTagName("html")[0];
                this.IE = t.classList.contains("ie"), this.CSS_TRANSFORMS = t.classList.contains("css-transforms"), this.CSS_TRANSITIONS = t.classList.contains("css-transitions"), this.BLOBS = t.classList.contains("blobs"), this.IS_IOS = t.classList.contains("ios"), this.EDGE = t.classList.contains("edge"), this.REDUCED_MOTION = t.classList.contains("reduced-motion")
            }
        }
    }, {}],
    583: [function(t, e, n) {
        "use strict";
        e.exports = {
            overview: t("../pages/HeroGoesFirst")
        }
    }, {
        "../pages/HeroGoesFirst": 585
    }],
    584: [function(t, e, n) {
        "use strict";
        e.exports = {
            SiriSection: t("../sections/MultipleMediaObjectSection")
        }
    }, {
        "../sections/MultipleMediaObjectSection": 588
    }],
    585: [function(t, e, n) {
        "use strict";

        function i(t) {
            t = t || {}, this.name = "MeFirst", this._sectionIndex = 0, r.call(this), this._addSectionLoaders(), this._startSectionLoading()
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("./SectionEmitterPage"),
            s = (r.prototype, t("@marcom/ac-dom-events/utils/dispatchEvent")),
            o = i.prototype = Object.create(r.prototype);
        i.prototype.constructor = i, o._addSectionLoaders = function() {
            var t = this._getSectionByName("MultipleMediaObjectSection");
            this._sections[0].on("loaded", function(e) {
                t && "function" == typeof t.load && t.load(), s(window, "resize")
            }.bind(this))
        }, o._startSectionLoading = function() {
            var t = this._sections[0]._components[0],
                e = this._getSectionByName("MultipleMediaObjectSection");
            t && "function" == typeof t.load ? t.load() : e && "function" == typeof e.load && e.load()
        }, o._getSectionByName = function(t) {
            for (var e, n = 0, i = this._sections.length; n < i; n += 1)
                if (this._sections[n].sectionName === t) {
                    e = this._sections[n];
                    break
                }
            return e
        }, e.exports = i
    }, {
        "./SectionEmitterPage": 586,
        "@marcom/ac-dom-events/utils/dispatchEvent": 39,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    586: [function(t, e, n) {
        "use strict";

        function i(t) {
            t = t || {}, this.name = "SectionEmitterPage", this._sectionEmitter = new s, this.additionalLoadPadding = t.additionalLoadPadding || 1, r.call(this)
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-jetpack-lib/core/BasePage"),
            s = t("@marcom/ac-event-emitter-micro").EventEmitterMicro,
            o = r.prototype,
            a = i.prototype = Object.create(r.prototype);
        i.prototype.constructor = i, a.on = function(t, e) {
            return this._sectionEmitter.on(t, e)
        }, a.once = function(t, e) {
            return this._sectionEmitter.once(t, e)
        }, a.off = function(t, e) {
            return this._sectionEmitter.off(t, e)
        }, a.trigger = function(t, e) {
            return this._sectionEmitter.trigger(t, e)
        }, a.destroy = function() {
            this._sectionEmitter.destroy(), o.destroy.call(this)
        }, a._getViewsWithinRange = function() {
            var t = this._cachedScrollY,
                e = this._cachedWindowHeight,
                n = this.additionalLoadPadding * e,
                i = t - n,
                r = t + e + n;
            if (!this._visibleSections || !this._visibleSections[0]) return [];
            for (var s, o, a = Array.prototype.slice.call(this._visibleSections, 0), c = this._visibleSections[0].index - 1, l = this._visibleSections[this._visibleSections.length - 1].index + 1, h = c;
                (s = this._sections[h]) && (o = s.trackedElement, i < o.bottom);) a.push(s), h--;
            for (h = l;
                (s = this._sections[h]) && (o = s.trackedElement, r > o.top);) a.push(s), h++;
            return a
        }, a._onScroll = function(t) {
            o._onScroll.call(this, t);
            var e = this._getViewsWithinRange();
            this.trigger("sections-in-view", e)
        }, e.exports = i
    }, {
        "@marcom/ac-event-emitter-micro": 183,
        "@marcom/ac-jetpack-lib/core/BasePage": 335,
        "@marcom/ac-polyfills/Object/create": void 0
    }],
    587: [function(t, e, n) {
        "use strict";
        t("@marcom/ac-polyfills/Element/prototype.classList");
        var i = t("@marcom/ac-progressive-image-loader/ProgressiveImageLoader"),
            r = function(t) {
                this.classTarget = document.documentElement;
                var e = "progressive",
                    n = this.classTarget.classList.contains(e);
                if (n) {
                    if (!t) return void this.classTarget.classList.remove(e);
                    this.pageController = t, this.imageLoaders = {}, this._boundOnHandleImageLoaded = this._handleImageLoaded.bind(this), this._boundHandleSectionUpdate = this._handleSectionUpdate.bind(this), this.pageController.on("sections-in-view", this._boundHandleSectionUpdate);
                    var i = this.pageController._getViewsWithinRange();
                    this._handleSectionUpdate(i), this.classTarget.classList.add("progressive-enabled")
                }
            },
            s = r.prototype;
        s.loadTimeout = 5e3, s.loadedClassName = "progressive-image-ready", s.initialize = function() {}, s._handleSectionUpdate = function(t) {
            var e, n, r, s = t.length;
            for (e = 0; e < s; e++)
                if (n = t[e], r = n.name, !this.imageLoaders[r] && !n.element.hasAttribute("data-progressive-exclude")) {
                    var o = new i({
                        container: n.element,
                        timeout: this.loadTimeout,
                        includeContainer: !0
                    });
                    o.on("image-load", this._boundOnHandleImageLoaded), o.once("complete", this._handleImagesLoaded.bind(this, o)), this.imageLoaders[r] = o, o.load()
                }
        }, s._handleImageLoaded = function(t) {
            t.classList.add(this.loadedClassName)
        }, s._handleImagesLoaded = function(t) {
            t.off("image-load", this._boundOnHandleImageLoaded)
        }, e.exports = r
    }, {
        "@marcom/ac-polyfills/Element/prototype.classList": void 0,
        "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 457
    }],
    588: [function(t, e, n) {
        "use strict";

        function i(t, e, n, i, s, o) {
            this.name = "MultipleMediaObjectSection_" + o, this.sectionName = "MultipleMediaObjectSection", this._mediaObjectComponents = [], r.call(this, t, e, n, i, s, o)
        }
        t("@marcom/ac-polyfills/Object/create");
        var r = t("@marcom/ac-jetpack-lib/core/BaseSection"),
            s = r.prototype,
            o = i.prototype = Object.create(r.prototype);
        i.prototype.constructor = i, o.setupEvents = function() {
            s.setupEvents.call(this), this._setupMediaObjectComponentListeners()
        }, o.setupComponents = function(t, e, n) {
            s.setupComponents.call(this, t, e, n), this._mediaObjectComponents = this._mediaObjectComponents.concat(this.getAllComponentsOfType("MediaObjectComponent"))
        }, o._setupMediaObjectComponentListeners = function() {
            this._mediaObjectComponents.forEach(function(t, e, n) {
                n[e + 1] && t.mediaObject.on("loaded", this._onMediaObjectLoaded.bind(this, e)), t.mediaObject.on("play", this._onMediaObjectPlay.bind(this, t))
            }, this)
        }, o._onMediaObjectLoaded = function(t) {
            this._loadMediaObject(t + 1)
        }, o.load = function() {
            this._mediaObjectComponents.length > 0 && this._loadMediaObject(0)
        }, o._loadMediaObject = function(t) {
            var e = this._mediaObjectComponents[t];
            e.mediaObject && !e.mediaObject.getDestroyed() && e.load()
        }, o._onMediaObjectPlay = function(t) {
            this._resetOtherMediaObjects(t)
        }, o._resetOtherMediaObjects = function(t) {
            this._mediaObjectComponents.forEach(function(e) {
                e !== t && this._shouldReset(e) && e.resetMediaObject()
            }, this)
        }, o._shouldReset = function(t) {
            var e = t.mediaObject;
            return e && !e.getDestroyed() && !e.getPaused()
        }, e.exports = i
    }, {
        "@marcom/ac-jetpack-lib/core/BaseSection": 336,
        "@marcom/ac-polyfills/Object/create": void 0
    }]
}, {}, [577]);