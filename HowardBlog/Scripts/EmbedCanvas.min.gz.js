(function() {
    var g = Math, u = function(d) {
        return d>>0
    }, b = /webkit/i.test(navigator.appVersion) ? "webkit": /firefox/i.test(navigator.userAgent) ? "Moz": "opera"in window ? "O": "", B = function() {
        var d=!1, p = $('<div style="position:absolute;">Translate3d Test</div>');
        $("body").append(p);
        p.css({
            transform: "translate3d(20px,0,0)",
            "-moz-transform": "translate3d(20px,0,0)",
            "-webkit-transform": "translate3d(20px,0,0)",
            "-o-transform": "translate3d(20px,0,0)",
            "-ms-transform": "translate3d(20px,0,0)"
        });
        d = 20 == p.offset().left;
        p.empty().remove();
        return d
    };
    /android/gi.test(navigator.appVersion);
    var r = /iphone|ipad/gi.test(navigator.appVersion), J = /playbook/gi.test(navigator.appVersion), n = /hp-tablet/gi.test(navigator.appVersion), x=!1, w = "ontouchstart"in window&&!n, E = b + "Transform"in document.documentElement.style, a = r || J, h = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(d) {
            return setTimeout(d, 17)
        }
    }(), K = window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, f = "onorientationchange"in window ? "orientationchange" : "resize", m = w ? "touchstart" : "mousedown", l = w ? "touchmove" : "mousemove", v = w ? "touchend" : "mouseup", q = w ? "touchcancel" : "mouseup", A = "Moz" == b ? "DOMMouseScroll" : "mousewheel", y = "translate" + (x ? "3d(" : "("), s = x ? ",0)" : ")", r = function(d, p) {
        x = B();
        y = "translate" + (x ? "3d(" :
        "(");
        s = x ? ",0)" : ")";
        var k = document, e;
        this.wrapper = "object" == typeof d ? d : k.getElementById(d);
        this.wrapper.style.overflow = "hidden";
        this.scroller = this.wrapper.children[0];
        this.options = {
            hScroll: !0,
            vScroll: !0,
            x: 0,
            y: 0,
            bounce: !0,
            bounceLock: !1,
            momentum: !0,
            lockDirection: !0,
            useTransform: !0,
            useTransition: !1,
            scrollMultiplier: 1,
            onRefresh: null,
            onBeforeScrollStart: function(d) {
                d.preventDefault()
            },
            onScrollStart: null,
            onBeforeScrollMove: null,
            onScrollMove: null,
            onBeforeScrollEnd: null,
            onScrollEnd: null,
            onTouchEnd: null,
            onDestroy: null
        };
        for (e in p)
            this.options[e] = p[e];
        this.x = this.options.x;
        this.y = this.options.y;
        this.options.useTransform = E ? this.options.useTransform : !1;
        this.options.hScrollbar = this.options.hScroll && this.options.hScrollbar;
        this.options.vScrollbar = this.options.vScroll && this.options.vScrollbar;
        this.options.useTransition = a && this.options.useTransition;
        this.scroller.style[b + "TransitionProperty"] = this.options.useTransform ? "-" + b.toLowerCase() + "-transform" : "top left";
        this.scroller.style[b + "TransitionDuration"] = "0";
        this.scroller.style[b +
        "TransformOrigin"] = "0 0";
        this.options.useTransition && (this.scroller.style[b + "TransitionTimingFunction"] = "ease-out");
        this.options.useTransform ? this.scroller.style[b + "Transform"] = y + this.x + "px," + this.y + "px" + s : this.scroller.style.cssText += ";position:absolute;top:" + this.y + "px;left:" + this.x + "px";
        this.refresh();
        this._bind(f, window);
        this._bind(m);
        w || (this._bind("mouseout", this.wrapper), "none" != this.options.wheelAction && this._bind(A))
    };
    r.prototype = {
        enabled: !0,
        x: 0,
        y: 0,
        steps: [],
        scale: 1,
        handleEvent: function(d) {
            switch (d.type) {
            case m:
                if (!w &&
                0 !== d.button)
                    break;
                this._start(d);
                break;
            case l:
                this._move(d);
                break;
            case v:
            case q:
                this._end(d);
                break;
            case f:
                this._resize();
                break;
            case A:
                this._wheel(d);
                break;
            case "mouseout":
                this._mouseout(d);
                break;
            case "webkitTransitionEnd":
                this._transitionEnd(d)
            }
        },
        _resize: function() {
            this.refresh()
        },
        _pos: function(d, p) {
            d = this.hScroll ? d : 0;
            p = this.vScroll ? p : 0;
            this.options.useTransform ? this.scroller.style[b + "Transform"] = y + d + "px," + p + "px" + s + " scale(" + this.scale + ")" : (d>>=0, p>>=0, this.scroller.style.left = d + "px", this.scroller.style.top =
            p + "px");
            this.x = d;
            this.y = p
        },
        _start: function(d) {
            var p = w ? d.touches[0]: d, k, e;
            if (this.enabled) {
                this.options.onBeforeScrollStart && this.options.onBeforeScrollStart.call(this, d);
                this.options.useTransition && this._transitionTime(0);
                this.animating = this.moved=!1;
                this.dirY = this.dirX = this.absDistY = this.absDistX = this.distY = this.distX = 0;
                if (this.options.momentum && (this.options.useTransform ? (k = getComputedStyle(this.scroller, null)[b + "Transform"].replace(/[^0-9-.,]/g, "").split(","), e = 1 * k[4], k = 1 * k[5]) : (e = 1 * getComputedStyle(this.scroller,
                null).left.replace(/[^0-9-]/g, ""), k = 1 * getComputedStyle(this.scroller, null).top.replace(/[^0-9-]/g, "")), e != this.x || k != this.y))
                    this.options.useTransition ? this._unbind("webkitTransitionEnd") : K(this.aniTime), this.steps = [], this._pos(e, k);
                this.startX = this.x;
                this.startY = this.y;
                this.pointX = p.pageX;
                this.pointY = p.pageY;
                this.startTime = d.timeStamp || Date.now();
                this.options.onScrollStart && this.options.onScrollStart.call(this, d);
                this._bind(l);
                this._bind(v);
                this._bind(q)
            }
        },
        _move: function(d) {
            var p = w ? d.touches[0]:
            d, k = p.pageX - this.pointX, e = p.pageY - this.pointY, a = this.x + k, b = this.y + e, c = d.timeStamp || Date.now();
            this.options.onBeforeScrollMove && this.options.onBeforeScrollMove.call(this, d);
            this.pointX = p.pageX;
            this.pointY = p.pageY;
            if (0 < a || a < this.maxScrollX)
                a = this.options.bounce ? this.x + k / 2 : 0 <= a || 0 <= this.maxScrollX ? 0 : this.maxScrollX;
            if (0 < b || b < this.maxScrollY)
                b = this.options.bounce ? this.y + e / 2 : 0 <= b || 0 <= this.maxScrollY ? 0 : this.maxScrollY;
            this.distX += k;
            this.distY += e;
            this.absDistX = g.abs(this.distX);
            this.absDistY = g.abs(this.distY);
            6 > this.absDistX && 6 > this.absDistY || (this.options.lockDirection && (this.absDistX > this.absDistY + 5 ? (b = this.y, e = 0) : this.absDistY > this.absDistX + 5 && (a = this.x, k = 0)), this.moved=!0, this._pos(a, b), this.dirX = 0 < k?-1 : 0 > k ? 1 : 0, this.dirY = 0 < e?-1 : 0 > e ? 1 : 0, 300 < c - this.startTime && (this.startTime = c, this.startX = this.x, this.startY = this.y), this.options.onScrollMove && this.options.onScrollMove.call(this, d))
        },
        _end: function(d) {
            if (!(w && 0 != d.touches.length)) {
                var p = w ? d.changedTouches[0]: d, k, e, a = {
                    dist: 0,
                    time: 0
                }, b = {
                    dist: 0,
                    time: 0
                }, c =
                (d.timeStamp || Date.now()) - this.startTime;
                k = this.x;
                e = this.y;
                this._unbind(l);
                this._unbind(v);
                this._unbind(q);
                this.options.onBeforeScrollEnd && this.options.onBeforeScrollEnd.call(this, d);
                if (this.moved) {
                    if (300 > c && this.options.momentum) {
                        a = k ? this._momentum(k - this.startX, c, - this.x, this.scrollerW - this.wrapperW + this.x, this.options.bounce ? this.wrapperW : 0) : a;
                        b = e ? this._momentum(e - this.startY, c, - this.y, 0 > this.maxScrollY ? this.scrollerH - this.wrapperH + this.y : 0, this.options.bounce ? this.wrapperH : 0) : b;
                        k = this.x + a.dist;
                        e = this.y + b.dist;
                        if (0 < this.x && 0 < k || this.x < this.maxScrollX && k < this.maxScrollX)
                            a = {
                                dist: 0,
                                time: 0
                            };
                        if (0 < this.y && 0 < e || this.y < this.maxScrollY && e < this.maxScrollY)
                            b = {
                                dist: 0,
                                time: 0
                            }
                    }
                    a.dist || b.dist ? (p = g.max(g.max(a.time, b.time), 10), a = this.options.endRound || u, this.scrollTo(a(k), a(e), p)) : this._resetPos(200)
                } else {
                    if (w) {
                        for (k = p.target; 1 != k.nodeType;)
                            k = k.parentNode;
                        "SELECT" != k.tagName && ("INPUT" != k.tagName && "TEXTAREA" != k.tagName) && (e = document.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, d.view, 1, p.screenX,
                        p.screenY, p.clientX, p.clientY, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, 0, null), e._fake=!0, k.dispatchEvent(e))
                    }
                    this._resetPos(200)
                }
                this.options.onTouchEnd && this.options.onTouchEnd.call(this, d)
            }
        },
        _resetPos: function(d) {
            var a = 0 <= this.x ? 0: this.x < this.maxScrollX ? this.maxScrollX: this.x, k = 0 <= this.y || 0 < this.maxScrollY ? 0: this.y < this.maxScrollY ? this.maxScrollY: this.y;
            a == this.x && k == this.y ? this.moved && this.options.onScrollEnd && this.options.onScrollEnd.call(this) : this.scrollTo(a, k, d || 0)
        },
        _wheel: function(d) {
            var a,
            k;
            if ("wheelDeltaX"in d)
                a = d.wheelDeltaX / 12 * this.options.scrollMultiplier, k = d.wheelDeltaY / 12 * this.options.scrollMultiplier;
            else if ("wheelDelta"in d)
                a = k = d.wheelDelta / 12 * this.options.scrollMultiplier;
            else if ("detail"in d)
                a = k = 3*-d.detail * this.options.scrollMultiplier;
            else 
                return;
            a = this.x + a;
            k = this.y + k;
            0 < a ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX);
            k > this.minScrollY ? k = this.minScrollY : k < this.maxScrollY && (k = this.maxScrollY);
            0 > this.maxScrollY && this.scrollTo(a, k, 100);
            d.preventDefault()
        },
        _mouseout: function(d) {
            var a =
            d.relatedTarget;
            if (a)
                for (; a = a.parentNode;)
                    if (a == this.wrapper)
                        return;
            this._end(d)
        },
        _transitionEnd: function(d) {
            d.target == this.scroller && (this._unbind("webkitTransitionEnd"), this._startAni(), this.options.onAnimationEnd && this.options.onAnimationEnd.call(this))
        },
        _startAni: function() {
            var d = this, a = d.x, k = d.y, e = Date.now(), b, f, c;
            d.animating || (d.steps.length ? (b = d.steps.shift(), b.x == a && b.y == k && (b.time = 0), d.animating=!0, d.moved=!0, d.options.useTransition ? (d._transitionTime(b.time), d._pos(b.x, b.y), d.animating =
            !1, b.time ? d._bind("webkitTransitionEnd") : d._resetPos(0)) : (c = function() {
                var m = Date.now(), l;
                m >= e + b.time ? (d._pos(b.x, b.y), d.animating=!1, d.options.onAnimationEnd && d.options.onAnimationEnd.call(d), d._startAni()) : (m = (m - e) / b.time - 1, f = g.sqrt(1 - m * m), m = (b.x - a) * f + a, l = (b.y - k) * f + k, d._pos(m, l), d.animating && (d.aniTime = h(c)))
            }, c())) : d._resetPos(400))
        },
        _transitionTime: function(d) {
            this.scroller.style[b + "TransitionDuration"] = d + "ms"
        },
        _momentum: function(d, a, b, e, f) {
            a = g.abs(d) / a;
            var h = a * a / 0.002;
            0 < d && h > b ? (b += f / (20 / (0.001 *
            (h / a))), a = a * b / h, h = b) : 0 > d && h > e && (e += f / (20 / (0.001 * (h / a))), a = a * e / h, h = e);
            return {
                dist: h * (0 > d?-1 : 1),
                time: a / 0.001>>0
            }
        },
        scrollTo: function(a, b, k, e) {
            var h = a;
            this.stop();
            h.length || (h = [{
                x: a,
                y: b,
                time: k,
                relative: e
            }
            ]);
            a = 0;
            for (b = h.length; a < b; a++)
                h[a].relative && (h[a].x = this.x - h[a].x, h[a].y = this.y - h[a].y), this.steps.push({
                    x: h[a].x,
                    y: h[a].y,
                    time: h[a].time || 0
                });
            this._startAni()
        },
        _offset: function(a) {
            for (var b =- a.offsetLeft, h =- a.offsetTop; a = a.offsetParent;)
                b -= a.offsetLeft, h -= a.offsetTop;
            return {
                left: b,
                top: h
            }
        },
        _bind: function(a,
        b, h) {
            (b || this.scroller).addEventListener(a, this, !!h)
        },
        _unbind: function(a, b, h) {
            (b || this.scroller).removeEventListener(a, this, !!h)
        },
        destroy: function() {
            this.scroller.style[b + "Transform"] = "";
            this._unbind(f, window);
            this._unbind(m);
            this._unbind(l);
            this._unbind(v);
            this._unbind(q);
            this._unbind("mouseout", this.wrapper);
            this.options.useTransition && this._unbind("webkitTransitionEnd");
            this.options.onDestroy && this.options.onDestroy.call(this)
        },
        refresh: function() {
            var a;
            this.wrapperW = this.wrapper.clientWidth;
            this.wrapperH =
            this.wrapper.clientHeight;
            this.scrollerW = this.scroller.offsetWidth;
            this.scrollerH = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperW - this.scrollerW;
            this.maxScrollY = this.wrapperH - this.scrollerH;
            this.dirY = this.dirX = 0;
            this.hScroll = this.options.hScroll && 0 > this.maxScrollX;
            this.vScroll = this.options.vScroll && (!this.options.bounceLock&&!this.hScroll || this.scrollerH > this.wrapperH);
            a = this._offset(this.wrapper);
            this.wrapperOffsetLeft =- a.left;
            this.wrapperOffsetTop =- a.top;
            this.scroller.style[b + "TransitionDuration"] =
            "0";
            this._resetPos(200)
        },
        disable: function() {
            this.stop();
            this._resetPos(0);
            this.enabled=!1;
            this._unbind(l);
            this._unbind(v);
            this._unbind(q)
        },
        enable: function() {
            this.enabled=!0
        },
        stop: function() {
            K(this.aniTime);
            this.steps = [];
            this.animating = this.moved=!1
        }
    };
    "undefined" !== typeof exports ? exports.iScroll = r : window.iScroll = r
})();
jQuery.extend(jQuery.easing, {
    easeOutQuad: function(g, u, b, B, r) {
        return - B * (u/=r) * (u - 2) + b
    },
    easeOutSine: function(g, u, b, B, r) {
        return B * Math.sin(u / r * (Math.PI / 2)) + b
    },
    linearTween: function(g, u, b, B, r) {
        return B * u / r + b
    }
});
(function(g) {
    g.fn.ps_unselectable = function() {
        return this.each(function() {
            g.browser.msie ? (g(this).each(function() {
                this.ondrag = function() {
                    return !1
                }
            }), g(this).each(function() {
                this.onselectstart = function() {
                    return !1
                }
            })) : g.browser.opera && g(this).attr("unselectable", "on")
        })
    }
})(jQuery);
(function(g) {
    g.fn.ps_swipe = function(u) {
        if (!this)
            return !1;
        var b = {
            fingers: 1,
            threshold: 75,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            click: null,
            triggerOnTouchEnd: !0,
            allowPageScroll: "auto",
            stopPropagation: !0,
            allowZooming: !1
        }, B = "left", r = "right", J = "up", n = "down", x = "none", w = "horizontal", E = "vertical", a = "auto", h = "start", K = "move", f = "end", m = "cancel", l = "start";
        if (void 0 == u.allowPageScroll && (void 0 != u.swipe || void 0 != u.swipeStatus)
            )u.allowPageScroll = x;
        u && g.extend(b, u);
        return this.each(function() {
            var v, q, A, y;
            function s(a) {
                l = h;
                t = a.touches.length;
                distance = 0;
                direction = null;
                swipeOrigin = {
                    x: 0,
                    y: 0
                };
                swipeChange = {
                    dx: 0,
                    dy: 0
                };
                t == b.fingers ? (A = v = a.touches[0].pageX, y = q = a.touches[0].pageY, b.swipeStatus && e(a, l)) : k(a)
            }
            function d(c) {
                if (!(l == f || l == m)) {
                    v = c.touches[0].pageX;
                    q = c.touches[0].pageY;
                    swipeChange = {
                        dx: v - A,
                        dy: q - y
                    };
                    direction = F();
                    t = c.touches.length;
                    l = K;
                    var d = direction;
                    if (b.allowPageScroll == x)(!b.allowZooming || 2 !== c.touches.length) && c.preventDefault();
                    else {
                        var h = b.allowPageScroll ==
                        a;
                        switch (d) {
                        case B:
                            (b.swipeLeft && h ||!h && b.allowPageScroll != w) && c.preventDefault();
                            break;
                        case r:
                            (b.swipeRight && h ||!h && b.allowPageScroll != w) && c.preventDefault();
                            break;
                        case J:
                            (b.swipeUp && h ||!h && b.allowPageScroll != E) && c.preventDefault();
                            break;
                        case n:
                            (b.swipeDown && h ||!h && b.allowPageScroll != E) && c.preventDefault()
                        }
                    }
                    t == b.fingers ? (2 === t && (A = c.touches[1].pageX, y = c.touches[1].pageY), distance = u(), swipeOrigin = {
                        x: Math.min(v, A) + Math.abs(A - v) / 2,
                        y: Math.min(q, y) + Math.abs(q - y) / 2
                    }, b.swipeStatus && e(c, l, direction, distance,
                    swipeOrigin, swipeChange), !b.triggerOnTouchEnd && distance >= b.threshold && (l = f, e(c, l), k(c))) : (l = m, e(c, l), k(c));
                    b.stopPropagation && c.stopPropagation()
                }
            }
            function p(a) {
                distance = u();
                direction = F();
                b.triggerOnTouchEnd ? (l = f, t == b.fingers && 0 != v ? distance >= b.threshold || (l = m) : l = m, e(a, l), k(a)) : l == K && (l = m, e(a, l), k(a))
            }
            function k(a) {
                q = v = y = A = t = 0
            }
            function e(a, e) {
                b.swipeStatus && b.swipeStatus.call(c, a, e, direction || null, distance || 0, swipeOrigin || {
                    x: 0,
                    y: 0
                }, swipeChange || {
                    dx: 0,
                    dy: 0
                });
                e == m && b.click && (1 == t && (isNaN(distance) ||
                0 == distance)) && b.click.call(c, a, a.target, {
                    x: A,
                    y: y
                });
                if (e == f)
                    switch (b.swipe && b.swipe.call(c, a, direction, distance), direction) {
                    case B:
                        b.swipeLeft && b.swipeLeft.call(c, a, direction, distance);
                        break;
                    case r:
                        b.swipeRight && b.swipeRight.call(c, a, direction, distance);
                        break;
                    case J:
                        b.swipeUp && b.swipeUp.call(c, a, direction, distance);
                        break;
                    case n:
                        b.swipeDown && b.swipeDown.call(c, a, direction, distance)
                    }
            }
            function u() {
                return Math.round(Math.sqrt(Math.pow(v - A, 2) + Math.pow(q - y, 2)))
            }
            function F() {
                var a;
                a = Math.atan2(q - y, A - v);
                a = Math.round(180 * a / Math.PI);
                0 > a && (a = 360 - Math.abs(a));
                return 45 >= a && 0 <= a ? B : 360 >= a && 315 <= a ? B : 135 <= a && 225 >= a ? r : 45 < a && 135 > a ? n : J
            }
            var c = g(this), t = 0;
            q = v = y = A = 0;
            try {
                if (this.removeEventListener("touchstart", s), this.removeEventListener("touchmove", d), this.removeEventListener("touchend", p), this.removeEventListener("touchcancel", k), b.swipe || b.swipeLeft || b.swipeRight || b.swipeUp || b.swipeDown || b.swipeStatus || b.click)
                    this.addEventListener("touchstart", s, !1), this.addEventListener("touchmove", d, !1), this.addEventListener("touchend",
                    p, !1), this.addEventListener("touchcancel", k, !1)
            } catch (C) {}
        })
    }
})(jQuery);
(function(g) {
    g.fn.ps_click = function(u) {
        var b = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android|silk)/);
        if (g.isFunction(u))
            return b ? g(this).ps_swipe({
                click: u
            }) : g(this).click(u)
    }
})(jQuery);
(function() {
    ItemList = function() {
        function g(a, h, g) {
            var f = n[a].width;
            a = n[a].height;
            var m = f / a;
            return f / h < a / g ? 1 < m ? (newHeight = b(g), h = a / newHeight, b(f / h)) : b(g) : b(h)
        }
        function u(a, h, g) {
            var f = n[a].width;
            a = n[a].height / g;
            return f / h > a ? b(f / a) : b(h)
        }
        function b(a) {
            for (var b = 0, g = E.length, f=!1; b < g&&!f;)
                a <= E[b] ? f=!0 : b++;
            return E[b]
        }
        function B(a, b, g, f) {
            var m = n[a], l;
            if (0 >= m.photos.length)
                return null;
            if ("scale" === f) {
                r(m.photos, "width", "height");
                for (l in m.photos)
                    if (m.photos[l].width >= b || m.photos[l].height >= g)
                        break;
                return m.photos[l].source
            }
            if ("scaleHeight" ===
            f) {
                r(m.photos, "height", "width");
                for (l in m.photos)
                    if (m.photos[l].height > g)
                        break;
                return m.photos[l].source
            }
            if ("scaleCrop" === f) {
                r(m.photos, "width", "height");
                for (l in m.photos)
                    if (m.photos[l].width >= b && m.photos[l].height >= g)
                        break;
                return m.photos[l].source
            }
            if ("scaleThumb" === f) {
                r(m.photos, "width", "height");
                for (l in m.photos)
                    if (m.photos[l].width >= b && m.photos[l].height >= g)
                        break;
                return m.photos[l].source
            }
            return getOriginalImagePath(a)
        }
        function r(a, b, g) {
            var f = 0, m = a.length, l, n;
            for (a.sort(function(a, f) {
                return a[b] -
                f[b]
            }); f < m - 1;) {
                if (!(a[f][b] < a[f + 1][b])) {
                    for (l = f; a[f + 1] && a[f][b] == a[f + 1][b];)
                        f++;
                    n = f;
                    J(a, g, l, n)
                }
                f++
            }
        }
        function J(a, b, g, f) {
            f = f - g + 1;
            var m, l, n;
            for (n = 1; n < f; n++) {
                m = a[g + n];
                for (l = n - 1; 0 <= l && a[g + l][b] > m[b];)
                    a[g + l + 1] = a[g + l], l -= 1;
                a[g + l + 1] = m
            }
        }
        var n = [], x = {}, w=!1, E = [100, 200, 350, 500, 750, 1E3, 1250, 1500, 1750, 2E3];
        this.init = function(a, b, g) {
            x = b;
            w = g ||!1;
            if (a.album.items.item && 0 !== a.album.items.item.length) {
                g = a.album.items.item.length;
                var f, m, l, v, q, A, y, s, d, p, k, e, u, r, c, t;
                for (b = 0; b < g; b++) {
                    q = a.album.items.item[b];
                    y = q.type;
                    s = "object" === typeof q.title ? "" : q.title;
                    d = "object" === typeof q.description ? "" : q.description;
                    p = "object" === typeof q.filename ? "" : q.filename;
                    k = q.source;
                    c = "undefined" == typeof q.link || "object" === typeof q.link ? "" : q.link;
                    t = "undefined" == typeof q.link?!1 : "1" == q.show_link?!0 : !1;
                    var C = "undefined" == typeof q.dontLoad?!1 : !0, B = "undefined" == typeof q.outterIframe?!1 : !0, E = "undefined" == typeof q.idSuffix?!1 : q.idSuffix;
                    if ("photosnack" === y)
                        f = "object" === typeof q.size || "undefined" === typeof q.size ? "" : q.size, 0 < f.length && (l = parseInt(f.split("x")[0]),
                        v = parseInt(f.split("x")[1])), l = isNaN(l) || "undefined" === typeof l ? 0 : l, v = isNaN(v) || "undefined" === typeof v ? 0 : v, y = {
                            type: y,
                            title: s,
                            description: d,
                            fileName: p,
                            source: k,
                            width: l,
                            height: v,
                            link: c,
                            showLink: t,
                            dontLoad: C
                        };
                    else {
                        e = [];
                        m = q.photos.photo.length;
                        f = 0;
                        for (f; f < m; f++)
                            A = q.photos.photo[f], u = A.src, r = parseInt(A.width), r = isNaN(r) ? 0 : r, A = parseInt(A.height), A = isNaN(A) ? 0 : A, e.push({
                                source: u,
                                width: r,
                                height: A
                            });
                        y = {
                            type: y,
                            title: s,
                            description: d,
                            fileName: p,
                            source: k,
                            photos: e,
                            link: c,
                            showLink: t,
                            dontLoad: C
                        }
                    }
                    B && (y.outterIframe =
                    !0, y.idSuffix = E);
                    n.push(y)
                }
            }
        };
        this.getListLength = function() {
            return n.length
        };
        this.getItemAtIndex = function(a) {
            return n[a]
        };
        this.getImageURL = function(a, h, r, f) {
            if (!(a >= n.length)) {
                f = f || "scale";
                if (w && "scaleThumb" != f)
                    return this.getOriginalImagePath(a);
                var m;
                if ("photosnack" === n[a].type) {
                    switch (f) {
                    case "scale":
                        m = g(a, h, r);
                        break;
                    case "scaleHeight":
                        m = b(n[a].width / (n[a].height / r));
                        break;
                    case "scaleCrop":
                        m = u(a, h, r);
                        break;
                    case "scaleThumb":
                        m = u(a, h, r)
                    }
                    !m || 0 === m ? a = this.getOriginalImagePath(a) : ("scaleCrop" === f ||
                    "scaleThumb" === f ? (h = x.IMAGE_PATH + n[a].source + "/scaleCrop-", n[a].photosnack_db && (h = x.IMAGE_PATH_DROPBOX + n[a].source + "/scaleCrop-")) : (h = x.IMAGE_PATH + n[a].source + "/scale-", n[a].photosnack_db && (h = x.IMAGE_PATH_DROPBOX + n[a].source + "/scale-")), a = h + m + "x" + m)
                } else 
                    a = w ? this.getOriginalImagePath(a) : B(a, h, r, f);
                return a
            }
        };
        this.getAlternativeURL = function(a, h, r, f) {
            if ("photosnack" === n[a].type) {
                f = f || "scale";
                h = "scale" === f ? g(a, h, r) : "scaleHeight" === f ? b(n[a].width / (n[a].height / r)) : u(a, h, r);
                if (!h || 0 === h)
                    a = this.getOriginalImagePath(a);
                else {
                    r = x.ALT_SCALE_PATH + h + "x" + h + "/" + n[a].source;
                    var m = x.ALT_SCALE_CROP_PATH + h + "x" + h + "/" + n[a].source;
                    n[a].photosnack_db && (r = x.ALT_SCALE_PATH_DROPBOX + h + "x" + h + "/" + n[a].source, m = x.ALT_SCALE_CROP_PATH_DROPBOX + h + "x" + h + "/" + n[a].source);
                    a = "scaleCrop" === f || "scaleThumb" === f ? m : r
                }
                return a
            }
        };
        this.getOriginalImagePath = function(a) {
            if ("photosnack" === n[a].type) {
                var b = x.IMAGE_PATH + n[a].source + "/original";
                n[a].photosnack_db && (b = x.IMAGE_PATH_DROPBOX + n[a].source + "/original");
                return b
            }
            a = n[a];
            if (0 >= a.photos.length)
                return null;
            r(a.photos, "width", "height");
            return a.photos[a.photos.length - 1].source
        }
    }
})();
(function() {
    NewWheelPreloader = function(g, u, b, B, r) {
        function J() {
            w.width = w.height = 32;
            h.translate(16, 16);
            h.rotate(q += 0.12);
            ++v;
            h.rotate(v * Math.PI / 6);
            for (var a = 0; 12 > a; a++)
                h.globalAlpha = a / 12, h.save(), h.fillStyle = "rgba(0, 0, 0, 0.2)", n(h, 4, - 2, 12, 6, 4), h.restore(), h.save(), h.fillStyle = "rgba(0, 0, 0, 0.2)", n(h, 5, - 1, 10, 4, 4), h.restore(), h.save(), h.fillStyle = "#fff", h.fillRect(6, 0, 8, 2), h.restore(), h.transform(l, m, - m, l, 0, 0);
            h.restore()
        }
        function n(a, b, g, d, h, f) {
            a.beginPath();
            a.moveTo(b, g + f);
            a.lineTo(b, g + h - f);
            a.quadraticCurveTo(b,
            g + h, b + f, g + h);
            a.lineTo(b + d - f, g + h);
            a.quadraticCurveTo(b + d, g + h, b + d, g + h - f);
            a.lineTo(b + d, g + f);
            a.quadraticCurveTo(b + d, g, b + d - f, g);
            a.lineTo(b + f, g);
            a.quadraticCurveTo(b, g, b, g + f);
            a.fill()
        }
        var x, w, E, a, h, K = null, f=!1, m = Math.sin(Math.PI / 6), l = Math.cos(Math.PI / 6), v = 0, q = 0;
        x = $("<div/>").attr("id", g).css({
            zIndex: 950,
            width: 32,
            minWidth: 32,
            height: 32,
            minHeight: 32
        }).appendTo("#" + u);
        w = $("<canvas/>").attr({
            id: g + "_cvs",
            width: "32",
            height: "32"
        }).appendTo("#" + g)[0];
        E = (B - x.height()) / 2;
        a = (b - x.width()) / 2;
        "undefined" != typeof r && "centered" !=
        r && ("topLeft" == r ? a = E = 0 : "topRight" == r && (E = 0, a = b - 32));
        x.css({
            position: "absolute",
            zIndex: 950,
            marginTop: E + "px",
            marginLeft: a + "px"
        }).show();
        $(w).hide();
        h = w.getContext("2d");
        this.show = function() {
            f || ($(x).show(), $(w).show(), f=!0, K = setInterval(J, 66))
        };
        this.hide = function() {
            null != K && (clearInterval(K), K = null);
            $(w).hide();
            $(x).hide();
            f=!1
        };
        this.width = function() {
            return 32
        };
        this.height = function() {
            return 32
        };
        this.posX = function(b) {
            var g = a;
            "string" === typeof b ? g = b + "px" : "number" === typeof b && (g = b.toString() + "px");
            x.css({
                marginLeft: g
            })
        };
        this.posY = function(a) {
            var b = E;
            "string" === typeof a ? b = a + "px" : "number" === typeof a && (b = a.toString() + "px");
            x.css({
                marginTop: b
            })
        }
    }
})(jQuery);
(function() {
    AudioPlayer = function(g) {
        function u(a) {
            G && (G.loadSound(m), A ? (a || (k=!0), a && p && (p=!1), k && F.playAudio()) : k=!1, a || (J(), F.setAudioPlayerVisibility(!0), hideAudioPlayer()))
        }
        function b(a) {
            for (; 6 > a.length;)
                a = "0" + a;
            return a
        }
        function B() {
            c = $("#" + f + "_audio_bPlayer");
            if (!c.length || 0 === c.lenght)
                c = $("<div/>").attr("id", f + "_audio_bPlayer").appendTo("#" + f);
            $(c).css(M).css({
                zIndex: "920",
                cursor: "pointer"
            }).ps_unselectable();
            t = $("#" + f + "_audio_bPlayerOn");
            if (!t.length || 0 === t.length)
                t = $("<div/>").attr("id",
                f + "_audio_bPlayerOn").appendTo($(c));
            var a =- q * n + "px 0px";
            U || (a =- q * n + "px 0px");
            $(t).css(M).css({
                backgroundImage: 'url("data:image/png;base64,' + ("speaker" === v ? h : K) + '")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: a
            }).css("z-index", "911").ps_unselectable();
            C = $("#" + f + "_audio_bPlayerOff");
            0 === C.length && (C = $("<div/>").attr("id", f + "_audio_bPlayerOff").appendTo($(c)));
            $(C).css(M).css({
                backgroundImage: 'url("data:image/png;base64,' + ("speaker" === v ? h : K) + '")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: - q *
                n + "px -" + w + "px"
            }).css("z-index", "912").ps_unselectable();
            $(c).hide();
            $(t).css("opacity", 0);
            $(C).css("opacity", 0)
        }
        function r() {
            c = $("#" + f + "_audio_bPlayer");
            if (!c.length || 0 === c.lenght)
                c = $("<div/>").attr("id", f + "_audio_bPlayer").appendTo("#" + f);
            $(c).css(M).css({
                zIndex: "920",
                cursor: "pointer"
            }).ps_unselectable();
            t = $("#" + f + "_audio_bPlayerOn");
            if (!t.length || 0 === t.length)
                t = $("<div/>").attr("id", f + "_audio_bPlayerOn").appendTo($(c));
            $(t).css(M).css({
                backgroundImage: 'url("data:image/png;base64,' + ("speaker" ===
                v ? h : K) + '")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: - q * n + "px 0px"
            }).css("z-index", "911").ps_unselectable();
            C = $("#" + f + "_audio_bPlayerOff");
            if (!C.length || 0 === C.length)
                C = $("<div/>").attr("id", f + "_audio_bPlayerOff").appendTo($(c));
            $(C).css(M).css({
                backgroundImage: 'url("data:image/png;base64,' + ("speaker" === v ? h : K) + '")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: - q * n + "px -" + w + "px"
            }).css("z-index", "912").ps_unselectable();
            $(c).hide();
            $(t).css("opacity", 0);
            $(C).css("opacity", 0)
        }
        function J() {
            da ||
            (k ? ($(t).css("opacity", E), $(C).css("opacity", 0)) : ($(t).css("opacity", 0), $(C).css("opacity", E)), U || $(c).show(), e=!0, $(c).ps_click(function(a) {
                k=!k;
                F.showAudioPlayer();
                k ? F.playAudio() : F.pauseAudio()
            }), g.isMobileDevice || ($(c).mouseover(function() {
                d=!0;
                F.showAudioPlayer()
            }), $(c).mouseout(function() {
                d=!1;
                hideAudioPlayer()
            })), da=!0)
        }
        var n = 40, x = this, w = 40, E = g.isMobileDevice ? 1: 0.65, a = 0.7 / ($.browser.mozilla ? 1 : 30), h = "iVBORw0KGgoAAAANSUhEUgAAAHgAAABQCAYAAADSm7GJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNkI0OENBNUFERENFMTExODNDOThENzM3Q0Q0NTM5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUI1NjE3MEYwNDIxMUUxOTlEMDgxRDIzN0YwMDYwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQUI1NjE2RkYwNDIxMUUxOTlEMDgxRDIzN0YwMDYwQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEQTVGRjNFNDFGMEUxMTE5ODkzQ0M3RTkxNUFERDZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE2QjQ4Q0E1QUREQ0UxMTE4M0M5OEQ3MzdDRDQ1Mzk1Ii8+IDwvcmRmOkRlc2NyaXB0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",
        K = "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjIxQkI0OEI1RENFMTExODNDOThENzM3Q0Q0NTM5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NEQwRDUzRDg3MzMxMUUyQkUyQ0U2NTZBNDJGMEIzRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NEQwRDUzQzg3MzMxMUUyQkUyQ0U2NTZBNDJGMEIzRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVFNDZENkEzMjg3RTIxMUE3NUFBM0I4REZBMEUwMTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYyMUJCNDhCNURDRTExMTgzQzk4RDczN0NENDUzOTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4AnAS/AAADLklEQVR42uybv4oaURjFr2GbtdiVDSgpFhbJFCbYSDphi2kS7A1ilQfIA9jYpbXIG1jYZFuJ8QUsDYgQhQkSVojYLG6iWbCZ3E/uBOeqWcf543U8H1xmzmGcPz/OnbnjzEQYYyZTuEzTjKi8f08YCgABEAABEAWAAAiAAIgCwKDrJMwHF4k4ugt8wdul5A35reQ3ZQDynXFzgK639wjsS758U/Le8Ik6AP0G5rKGApjNU6oLB51Ah3WcCeTr3OncFWgCvUqOTwncKTmBJtCr5PjUZXdKDhKoSALpCA76L/1N50ALyrbnxl3Ppa4S6DRRASeQOUwUErhNAp36e0mgV4n1KYHMo8QigUggEogEIoFIIBKIBB5yAg8e4L4LD5UAEAABEABRAAiAAAiAKAAEQAAEQBQAAiAAAiAKAAEQAI+hTsJ+gBsenVpP8h54u+UtKukf1oLbfCphet0qlYpJNR6P12onjQ7ATVtTV/V6/SOteDab/eT6WtY2OFus33OABKpcLm/UewZ4TaBqtdoHAUvWV04A+tKF4/E4a7VaG3VAXVd+4G49PD+NRqPPGo3Gdz7/h7enkn5wui1X3dQq0iIx/6rT6azoIBJI5zirW1pFmvuvl73RaPRV1nyZV7534UKhsNggTddpKl3XlyHYtJ8AeZ2VSqX39EOaEjRZ03yxWHwnYMk64TvAZrNp3tzc2DzS5CsA8GW/3//cbrc/iavtIpGkyZeAna7RzAnAncaBmqaxbrdr80iTr0CdJRIJrdfrGXz+Tnh3pMlXYiCdTCZXLgqkyVcBYCwW08RF4V5496TJx51IGG7lBoMBy2azNo80+QrUr8lkYuRyued8/lx456TJVwKgYRgsnU7bPNLkqwCQD9yNVCpF3fVCeBekyVcCYLVaZfl8nvFhy0LTlDT5CtSQ78eXTCbzlg9bdDGM0UmT78cGPR1IU5tOp7Zhi6z3OJCmYY0+n89/Lw1bZO1oGBPaV3w33MrR+86a8Ekba/QKwP9uh4X8HWm3XwI8BvDg/w/0+y195sUn//hOJMRdGN+J+HwOVPJOBAWAAAiAAIgCQAAEQAA89vorwAAlDlnwHDa26wAAAABJRU5ErkJggg==",
        f = g.canvasID || "", m = g.audioFile || "", l = "boolean" === typeof g.loopAudio ? g.loopAudio: !0;
        g.playerColor && b(g.playerColor.toString(16));
        g.playerBackgroundColor && b(g.playerBackgroundColor.toString(16));
        var v = g.playerIcon || "speaker", q = 1, A = g.autoPlay ||!1, y = g.isMobileDevice ||!1, s = null, d=!1, p=!1, k=!1, e=!1, da=!1, F = this, c, t, C, M = {
            position: "absolute",
            width: n + "px",
            height: w + "px",
            maxWidth: n + "px",
            maxHeight: w + "px"
        }, P=!1, G = null, V=!1, L=!1, D = g.swfPath, U = "undefined" != typeof g.specialIconPos && "true" == g.specialIconPos?!0 : !1;
        U && (E = 1);
        (function() {
            var a;
            if (0 === m.length)
                return null;
            a: {
                a = "MSIE 8;MSIE 7;MSIE 6;MSIE 5;Firefox;Opera".split(";");
                var b;
                for (b = 0; b < a.length; b++)
                    if ( - 1 < navigator.appVersion.indexOf(a[b])) {
                        P=!0;
                        break a
                    }
                for (b = 0; b < a.length; b++)
                    if ( - 1 < navigator.userAgent.indexOf(a[b])) {
                        P=!0;
                        break a
                    }
                P=!1
            }
            P && (a = f + "_myPlayer_" + (new Date).getMilliseconds(), a = '<object width="1" height="1" data="' + D + '" type="application/x-shockwave-flash" name="' + a + '+flash" id="' + a + '+flash"><param value="' + D + '" name="movie" ><param name="allowscriptaccess" value="always" ><param name="wmode" value="transparent" ><param name="scale" value="noscale" ><param name="flashvars" value="playerID=' +
            a + " ></object>", G = $(a).appendTo("#" + f).css({
                position: "absolute"
            }), G = G[0]);
            c = $("#" + f + "_audio_bPlayer");
            t = $("#" + f + "_audio_bPlayerOn");
            C = $("#" + f + "_audio_bPlayerOff");
            "undefined" !== typeof t[0] && $(t).remove();
            "undefined" !== typeof C[0] && $(C).remove();
            "undefined" !== typeof c[0] && $(c).remove();
            "equalizer" === v.toLowerCase() ? r() : "speaker" === v.toLowerCase() && B()
        })();
        this.loadAudio = function(a) {
            var b;
            0 !== m.length && (P ? G && V ? u(a) : L=!0 : (a ? b = s : (b = $("#" + f + " audio")[0]) || (b = $("<audio />").attr("id", f + "_audio").appendTo($("#" +
            f)).css({
                position: "absolute",
                visibility: "hidden",
                width: 0,
                height: 0
            })[0]), b && (b.volume = 0.7, s = b, s.src = m, y && (A && (k=!1), a && p && F.pauseAudio(), a || (J(), F.setAudioPlayerVisibility(!0), hideAudioPlayer())), $(s).on("error", function(a) {
                m = "";
                s.src = "";
                x.setAudioPlayerVisibility(!1)
            }), $(s).on("loadeddata", function() {
                y || (A ? (a || (k=!0), a && p && (p=!1), k && F.playAudio()) : p ? (k=!0, p=!1, F.playAudio()) : k=!1, a || (J(), F.setAudioPlayerVisibility(!0), hideAudioPlayer()));
                if (l)
                    $(s).on("ended", function() {
                        s.currentTime = 0;
                        s.play()
                    });
                else 
                    $(s).on("ended", function() {
                        k = p=!1;
                        hideAudioPlayer()
                    })
            }), s.load())))
        };
        this.fadeInAudio = function(b) {
            0.7 < b ? s.volume = 0.7 : (s.volume = b, b += a, setTimeout(function() {
                F.fadeInAudio(b)
            }, 30))
        };
        this.fadeOutAudio = function(b) {
            0 > b ? (s.volume = 0, s.pause()) : (s.volume = b, b -= a, setTimeout(function() {
                F.fadeOutAudio(b)
            }, 30))
        };
        this.playAudio = function() {
            c&&!p && (P && G ? G.play2() : y ? (this.fadeInAudio(1.7), s.play()) : (s.play(), this.fadeInAudio(0)), p=!0)
        };
        this.pauseAudio = function() {
            c && p && (P && G ? G.pause() : y ? this.fadeOutAudio( - 1) :
            this.fadeOutAudio(0.7), p=!1)
        };
        this.showAudioPlayer = function() {
            if (!c)
                return !1;
            k ? ($(t).stop(!0, !0).animate({
                opacity: 1
            }, "fast"), $(C).stop(!0, !0).animate({
                opacity: 0
            }, "fast")) : ($(t).stop(!0, !0).animate({
                opacity: 0
            }, "fast"), $(C).stop(!0, !0).animate({
                opacity: 1
            }, "fast"));
            e=!0
        };
        this.setAudioPlayerVisibility = function(a) {
            if (!c)
                return !1;
            var b = e ? 1: E;
            a ? (k ? ($(t).css("opacity", b), $(C).css("opacity", 0)) : ($(t).css("opacity", 0), $(C).css("opacity", b)), U || $(c).show(), $(t).show(), $(C).show()) : ($(t).css("opacity", 0), $(C).css("opacity",
            0), $(c).hide(), $(t).hide(), $(C).hide())
        };
        this.setAudioFile = function(a) {
            var b = 0 === m.length;
            m = "undefined" === typeof a || "" === a || "none" === a ? "" : a;
            s&&!P ? ($(s).off("error"), $(s).off("loadeddata"), $(s).off("ended"), 0 === m.length ? (p && F.pauseAudio(), k=!1, s.src = "", this.setAudioPlayerVisibility(!1)) : (s.pause(), b ? this.loadAudio() : this.loadAudio(!0), F.setAudioPlayerVisibility(!0))) : (G && V ? G.loadSound(m) : L=!0, 0 === m.length ? (k = p=!1, this.setAudioPlayerVisibility(!1)) : ((k = A || p?!0 : !1) && F.playAudio(), this.setAudioPlayerVisibility(!0)))
        };
        this.setAudioPlayerColor = function(a) {
            if (!isNaN(a) && (a && b(a.toString(16)), s || G)) {
                switch (v) {
                case "speaker":
                    B();
                    break;
                case "equalizer":
                    r()
                }
                F.setAudioPlayerVisibility(!0);
                hideAudioPlayer()
            }
        };
        this.setAudioPlayerIcon = function(a) {
            v = a || "speaker";
            if (s || G) {
                switch (v) {
                case "speaker":
                    B();
                    break;
                case "equalizer":
                    r()
                }
                U || F.setAudioPlayerVisibility(!0);
                hideAudioPlayer()
            }
        };
        this.setAudioPlayerLoop = function(a) {
            l = "boolean" === typeof a ? a : !0;
            if (s)
                if ($(s).off("ended"), l)
                    $(s).on("ended", function() {
                        s.currentTime = 0;
                        s.play()
                    });
                else 
                    $(s).on("ended", function() {
                        k = p=!1;
                        hideAudioPlayer()
                    })
        };
        this.setAudioAutoPlay = function(a) {
            A = "boolean" === typeof a ? a : !1
        };
        this.setAlbumSize = function(a, b) {};
        window.hideAudioPlayer = function() {
            if (!c || d)
                return !1;
            k ? ($(t).stop(!0, !0).animate({
                opacity: E
            }, "fast"), $(C).stop(!0, !0).animate({
                opacity: 0
            }, "fast")) : ($(C).stop(!0, !0).animate({
                opacity: E
            }, "fast"), $(t).stop(!0, !0).animate({
                opacity: 0
            }, "fast"));
            e=!1
        };
        window.onComplete = function() {
            l && G && G.play2()
        };
        window.loadSound = function() {
            (A || p) && G.play2()
        };
        window.playerLoaded =
        function(a) {
            V=!0;
            L && u();
            L=!1
        };
        window.onFlashAudioEndded = function() {
            l ? G.play2() : (k = p=!1, hideAudioPlayer())
        }
    }
})();
(function() {
    Watermark = function() {
        function g() {
            x = setTimeout(u, n)
        }
        function u() {
            clearTimeout(x);
            w.fadeOut(J, r)
        }
        var b = null, B = null, r = null, J = 500, n = 1E3, x = null, w = null;
        this.createWatermark = function(n, a, h) {
            b = n;
            B = a;
            r = h;
            $("<div />").attr("id", B).css({
                position: "absolute",
                zIndex: 5E3,
                width: "100%",
                height: "100%"
            }).show().appendTo("#" + b);
            w = $("<div />").attr("id", B + "_logo").css({
                position: "absolute",
                zIndex: 5010,
                width: "118px",
                height: "93px",
                // background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABdCAQAAADaxVpvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzcyQjg3OUVBQzExMUUxQUIzQ0U5Nzg2MzdFQTE5NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzcyQjg3QUVBQzExMUUxQUIzQ0U5Nzg2MzdFQTE5NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDNzJCODc3RUFDMTExRTFBQjNDRTk3ODYzN0VBMTk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDNzJCODc4RUFDMTExRTFBQjNDRTk3ODYzN0VBMTk2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++M+CYAAAFU1JREFUeNrtXHlA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) no-repeat",
                top: "50%",
                left: "50%",
                marginLeft: "-59px",
                marginTop: "-46.5px"
            }).hide().appendTo("#" + B);
            w.fadeIn(J, g)
        };
        this.watermarkRemove = function() {
            w.remove();
            $("#" + B).remove()
        }
    }
})(jQuery);
(function(g) {
    PhotoSnackEmbedCanvas = function() {
        function u() {
            document.addEventListener && (document.addEventListener("fullscreeneventchange", function() {
                var a = "undefined" !== typeof document.fullScreenElement && null !== document.fullScreenElement || "undefined" !== typeof document.mozFullScreen && document.mozFullScreen || "undefined" !== typeof document.webkitIsFullScreen && document.webkitIsFullScreen;
                D && D.fullScreenChange && D.fullScreenChange(a);
                b()
            }), document.addEventListener("fullscreenchange", function() {
                var a = "undefined" !==
                typeof document.fullScreenElement && null !== document.fullScreenElement || "undefined" !== typeof document.mozFullScreen && document.mozFullScreen || "undefined" !== typeof document.webkitIsFullScreen && document.webkitIsFullScreen;
                D && D.fullScreenChange && D.fullScreenChange(a);
                b()
            }), document.addEventListener("msfullscreenchange", function() {
                var a = "undefined" !== typeof document.fullScreenElement && null !== document.fullScreenElement || "undefined" !== typeof document.mozFullScreen && document.mozFullScreen || "undefined" !== typeof document.webkitIsFullScreen &&
                document.webkitIsFullScreen;
                D && D.fullScreenChange && D.fullScreenChange(a);
                b()
            }), document.addEventListener("mozfullscreenchange", function() {
                var a = "undefined" !== typeof document.fullScreenElement && null !== document.fullScreenElement || "undefined" !== typeof document.mozFullScreen && document.mozFullScreen || "undefined" !== typeof document.webkitIsFullScreen && document.webkitIsFullScreen;
                D && D.fullScreenChange && D.fullScreenChange(a);
                b()
            }), document.addEventListener("webkitfullscreenchange", function() {
                var a = "undefined" !==
                typeof document.fullScreenElement && null !== document.fullScreenElement || "undefined" !== typeof document.mozFullScreen && document.mozFullScreen || "undefined" !== typeof document.webkitIsFullScreen && document.webkitIsFullScreen;
                D && D.fullScreenChange && D.fullScreenChange(a);
                b()
            }))
        }
        function b() {
            Q = N.width();
            R = N.height();
            "undefined" !== typeof c.backgroundImage && s();
            L && L.width(Q).height(R);
            D && D.resize && D.resize(Q, R);
            I && (I.posX(Math.round((Q - I.width()) / 2)), I.posY(Math.round((R - I.height()) / 2)))
        }
        function B() {
            var a = navigator.userAgent.toLowerCase();
            - 1 < a.search("ipod")||-1 < a.search("iphone")||-1 < a.search("ipad")||-1 < a.search("silk")||-1 < a.search("playbook")||-1 < a.search("windows phone") ? (window.isBrowserFullScreen=!window.isBrowserFullScreen, !0 == window.isBrowserFullScreen && (window.parent.location.href = e.IFRAME_PATH + "?hash=" + c.hash + "&t=" + P + "&preview_mobile=1")) : (a = document.documentElement, "undefined" !== typeof document.fullScreenElement && null !== document.fullScreenElement || "undefined" !== typeof document.mozFullScreen && document.mozFullScreen || "undefined" !==
            typeof document.webkitIsFullScreen && document.webkitIsFullScreen ? document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullScreen ? document.exitFullScreen() : document.mozCancelFullScreen ? (document.mozCancelFullScreen(), b()) : document.webkitCancelFullScreen ? (document.webkitCancelFullScreen(), D && D.fullScreenChange && D.fullScreenChange(!1)) : document.msCancelFullScreen && document.msCancelFullScreen() : a.requestFullScreen ? a.requestFullScreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullScreen ?
            a.webkitRequestFullScreen() : a.msRequestFullScreen && a.msRequestFullScreen())
        }
        function r(b) {
            if ("string" !== typeof b.hash_id || 0 >= b.hash_id.length)
                return !1;
            M = b.hash_id;
            P = b.t || 0;
            ba = b.watermark;
            window["photoSnack" + M] = function(b) {
                b = b.configs;
                var f, h;
                if ("undefined" !== typeof b.blocked && "true" === b.blocked) {
                    I && I.hide();
                    g("<div/>").attr("id", "blockedMessage").css({
                        "background-color": "#141414",
                        position: "absolute",
                        width: Q + "px",
                        height: R + "px"
                    }).appendTo("#" + H);
                    g("<p/>").text(k).css({
                        position: "absolute",
                        color: "white",
                        "font-family": "Arial,sans-serif",
                        "font-size": "14"
                    }).appendTo("#blockedMessage");
                    b = g("p").width();
                    var l = g("p").height();
                    b = Math.floor((Q - b) / 2);
                    l = Math.floor((R - l) / 2);
                    g("p").css({
                        "margin-left": b + "px",
                        "margin-top": l + "px"
                    })
                } else if (G = b.template_hash, !("undefined" === typeof G || "" === G))
                    if (U = b.template_name, !("undefined" === typeof U || "" === U)) {
                        f = b.type;
                        h = b.watermark;
                        V = f === d.EDITABLE ? d.EDITABLE : d.PUBLISHED;
                        ka = "yes" === h?!0 : !1;
                        f = b.params;
                        var n, p, q = {};
                        for (l in f)
                            if (n = f[l], h = l, p = n.type, n = "object" === typeof n.value &&
                            "String" === p ? void 0 : n.value, !(void 0 === typeof n && "String" !== p))
                                switch (p) {
                                case "uint":
                                    q[h] = "0x" === n ? 0 : parseInt(n);
                                    break;
                                case "Number":
                                    q[h] = parseFloat(n);
                                    break;
                                case "Boolean":
                                    q[h] = "false" === n?!1 : !0;
                                    break;
                                default:
                                    q[h] = n
                                }
                                c = q;
                                c.hash = M;
                                c.fontsPath = e.FONTS_PATH;
                                if ("undefined" === typeof c.shareLink || "" === c.shareLink)
                                    c.shareLink = e.ALBUM_VIEW_PATH + M;
                                    c.isMobileDevice = F;
                                    c.showWatermark = S;
                                    c.albumTitle = "string" !== typeof b.gallery.album.title ? "" : b.gallery.album.title;
                                    c.albumDescription = "string" !== typeof b.gallery.album.description ?
                                    "" : b.gallery.album.description;
                                    c.editMode = V === d.EDITABLE;
                                    c.config = b;
                                    la=!0;
                                    (c.allowBrowserFullScreen = la) && u();
                                    if (!oa)
                                        b: {
                                            l = "photosnack/ http://photosnack/ http://photosnack.com http://www.photosnack.com photosnack.com files.photosnack.net http://files.photosnack.net www.photosnack.com dev.photosnack.net http://dev.photosnack.net devfiles.photosnack.net http://devfiles.photosnack.net http://sharesnack.com http://www.sharesnack.com sharesnack.com www.sharesnack.com files.sharesnack.net http://files.sharesnack.net dev.sharesnack.net http://dev.sharesnack.net devfiles.sharesnack.net http://devfiles.sharesnack.net sharesnack/ http://share.dev.snacktools.net share.dev.snacktools.net snacktools.net http://snacktools.net http://www.snacktools.com www.snacktools.com snacktools.com http://snacktools.com share.snacktools.com http://share.snacktools.com".split(" ");
                                            ma = b = document.referrer;
                                            for (f = 0; f < l.length; f++)
                                                if (h = l[f], b.slice(0, h.length) == h) {
                                                    aa=!0;
                                                    break b
                                                }
                                                aa=!1
                                            }
                                            V == d.EDITABLE&&!aa ? (I.hide(), l=!1) : (S = aa?!1 : ka, l=!0);
                                            l && (V != d.EDITABLE ? a() : m())
                    }
            };
            return !0
        }
        function J(a, b, c) {}
        function n(a) {}
        function x(a, b, c) {}
        function w() {
            ha=!0;
            ca && E()
        }
        function E() {
            I && I.hide();
            try {
                D = new window[U](L, c, t, H, I), L.on("fullScreen", B).on("normalScreen", B), window.isBrowserFullScreen=!1, g(document).keyup(function(a) {
                    27 === a.which && window.isBrowserFullScreen && (window.isBrowserFullScreen=!1)
                }),
                L.on("share", function(a) {
                    if (V === d.EDITABLE)
                        document.showShareMsg ? document.showShareMsg() : window.showShareMsg && window.showShareMsg();
                    else 
                        switch (a.shareType) {
                        case "facebook":
                            window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(c.shareLink) + "&t=" + encodeURIComponent("Check out these photos"), "sharer", "toolbar=0,status=0,width=626,height=436");
                            break;
                        case "twitter":
                            window.open("http://twitter.com/home?status=" + encodeURIComponent("Check out these photos! " + c.shareLink));
                            break;
                        case "directLink":
                            window.open(c.shareLink)
                        }
                })
            } catch (a) {}
        }
        function a() {
            var a = e.STATS, b = {
                terminal: "photosnack",
                item_id: M,
                item_type: aa ? "1": S ? "2": "3",
                type: "json"
            };
            S && (b.domain = ma);
            g.ajax({
                url: a,
                data: b,
                dataType: "jsonp",
                error: h,
                success: K
            });
            ea = setTimeout(function() {
                clearTimeout(ea);
                I.hide();
                S=!1;
                ia=!0;
                m()
            }, 3E3)
        }
        function h(a, b, c) {
            clearTimeout(ea);
            S=!1;
            ia=!0;
            I.hide();
            m()
        }
        function K(a) {
            var b;
            clearTimeout(ea);
            if (!ia)
                if ("0" === a&&!aa)
                    L && "undefined" !== typeof L.destroy && L.destroy(), f();
                else {
                    if ("1" !== a && "object" === typeof a && (b = a.premium, a = a.permit, 1 === b && (S=!1), 0 === a &&
                    !aa)) {
                        L && "undefined" != typeof L.destroy && L.destroy();
                        f();
                        return 
                    }
                    m()
                }
        }
        function f() {
            var a = H + "_" + ga;
            D && (D.setParamValue("autoSlideShow", !1), D.destroy && D.destroy());
            g("head").append("<style>.link_" + a + " {position: absolute; font-family: 'Arial'; font-size: 12px; color: #FFFFFF; cursor: 'pointer'; text-decoration: 'underline'; left: 50%; top: 50%; margin-left: -43px; margin-top: -8px; width: 86px; height: 15px}.link_" + a + ":hover {color: #999999}</style>");
            g("<div/>").attr("id", a).css({
                position: "absolute",
                zIndex: 1E4,
                width: "100%",
                height: "100%",
                background: pa + " no-repeat"
            }).show().appendTo("#" + H);
            g("<a/>").attr("href", e.ALBUM_VIEW_PATH + M).append("View slideshow").addClass("link_" + a).show().appendTo("#" + a)
        }
        function m() {
            var a = c.config;
            if ("undefined" != typeof c.outterIframe && "undefined" != typeof c.itemsToShowAtStartUp) {
                var b = parseInt(c.itemsToShowAtStartUp);
                g.each(a.gallery.album.items.item, function(a, c) {
                    c.outterIframe=!0;
                    c.idSuffix = H;
                    a >= b && (c.dontLoad=!0)
                });
                N.css({
                    opacity: 0
                })
            }
            ba && (S=!0);
            if (S || ba) {
                var d = [];
                g.each(a.gallery.album.items.item, function(a, b) {
                    a < C && d.push(b)
                });
                a.gallery.album.items.item = d
            }
            t = new ItemList;
            t.init(a.gallery, e, c.loadOriginalImages);
            g.ajax({
                url: e.TEMPLATE_JS + G + ".gz.js?v=" + qa,
                type: "GET",
                dataType: "script",
                success: w,
                error: x
            });
            "undefined" !== typeof c.backgroundColor&&!c.transparentBackground ? (a = "#" + v(c.backgroundColor.toString(16)), N.css({
                backgroundColor: a
            })) : g("#" + H).css({
                backgroundColor: "transparent"
            });
            if ("undefined" !== typeof c.showWatermark || ba)
                c.showWatermark = S;
            A();
            y();
            S || ba ? (ja =
            new Watermark, ja.createWatermark(H, ga, l), I && I.hide()) : (ca=!0, fa && (c.mp3Type && "none" !== c.mp3Type) && q(), ha && ca && E())
        }
        function l() {
            ja.watermarkRemove();
            I && I.show();
            ca=!0;
            fa && (c.mp3Type && "none" !== c.mp3Type) && q();
            ha && ca && E()
        }
        function v(a) {
            for (; 6 > a.length;)
                a = "0" + a;
            return a
        }
        function q() {
            var a, b = {
                canvasID: H,
                loopAudio: c.loopAudio,
                playerColor: c.audioPlayerColor || p,
                backgroundColor: c.audioPlayerBackgroundColor || "transparent",
                playerIcon: c.audioPlayerIcon,
                autoPlay: c.autoPlay,
                isMobileDevice: F,
                iconIndex: c.audioPlayerIconIndex,
                iconPos: c.audioPlayerPos,
                iconPos1: c.audioPlayerPos1,
                iconPos2: c.audioPlayerPos2,
                swfPath: e.SWF_PLAYER,
                specialIconPos: "undefined" != typeof c.specialIconPos && "false" != c.specialIconPos ? "true": "false"
            };
            switch (c.mp3Type) {
            case "upload":
                a = e.AUDIO_UPLOAD_PATH + c.audioFilePath + ".mp3";
                break;
            case "choose":
                a = e.AUDIO_FREE_PATH + c.audioFilePath + ".mp3";
                break;
            default:
                a = ""
            }
            0 < a.length && (b.audioFile = a, T = new AudioPlayer(b), T.loadAudio())
        }
        function A() {
            !c.transparentBackground&&!("undefined" === typeof c.backgroundPattern || "" ===
            c.backgroundPattern) && N.css({
                backgroundColor: "transparent",
                backgroundImage: "url(" + (e.AUX_IMAGES_PATH + G + "/" + c.backgroundPattern) + ")",
                backgroundRepeat: "repeat"
            })
        }
        function y() {
            if (!c.transparentBackground&&!("undefined" === typeof c.backgroundImage || "" === c.backgroundImage)) {
                var a = e.BACKGROUND_PATH + c.backgroundImage, b = H + "_backgroundImage";
                "tile" === c.backgroundAlign ? (z && z.hide(), N.css({
                    backgroundColor: "transparent",
                    backgroundImage: "url(" + a + ")",
                    backgroundRepeat: "repeat"
                })) : (z && z.show(), 0 < g("#" + b).length ? g("#" +
                b).load(function() {
                    z = g(this);
                    z.unbind("load");
                    Y = z.width();
                    Z = z.height();
                    s();
                    z.fadeIn("fast")
                }).attr("src", a) : g("<img>").load(function() {
                    z = g(this);
                    z.unbind("load").attr("id", b).appendTo("#" + H);
                    Y = z.width();
                    Z = z.height();
                    s();
                    z.fadeIn("fast")
                }).attr("src", a))
            }
        }
        function s() {
            if (z && "tile" !== c.backgroundAlign) {
                W = Y / Q;
                X = Z / R;
                switch (c.backgroundAlign) {
                case "scale":
                    1 >= W && 1 >= X ? z.width(Y).height(Z) : W > X ? z.width(Q).height(Math.floor(Z / W)) : z.width(Math.floor(Y / X)).height(R);
                    break;
                case "scale-crop":
                    W > X ? z.width(Math.floor(Y /
                    X)).height(R) : z.width(Q).height(Math.floor(Z / W));
                    break;
                default:
                    1 >= W && 1 >= X ? z.width(Y).height(Z) : W > X ? z.width(Q).height(Math.floor(Z / W)) : z.width(Math.floor(Y / X)).height(R)
                }
                z.css({
                    position: "absolute",
                    zIndex: 10,
                    marginTop: Math.round((R - z.height()) / 2) + "px",
                    marginLeft: Math.round((Q - z.width()) / 2) + "px"
                })
            }
        }
        var d = {
            EDITABLE: "editable",
            PUBLISHED: "published"
        }, p = 8113981, k = "Currently blocked due to a copyright infringement complaint. Sorry about that.", e = {
            MAIN_DOMAIN: "http://www.photosnack.com/",
            DEV_DOMAIN: "http://dev.photosnack.net/",
            EMBED_PATH: "app/html5js/EmbedCanvas.js",
            RESIZE_DOMAIN: null,
            FILES: null,
            STATS_DOMAIN: null,
            ALBUM_VIEW_PATH: null,
            CURRENT_DOMAIN: null,
            STATS: null,
            SCALE_CROP_RESIZE: null,
            ALBUM_PATH: null,
            IMAGE_PATH: null,
            ALT_SCALE_PATH: null,
            ALT_SCALE_CROP_PATH: null,
            LQ_ALT_SCALE_PATH: null,
            LQ_ALT_SCALE_CROP_PATH: null,
            TEMPLATE_SWF: null,
            AUDIO_UPLOAD_PATH: null,
            AUDIO_FREE_PATH: null,
            BACKGROUND_PATH: null,
            FULLSCREEN_PATH: null
        }, da, F=!1, c = {}, t = {}, C = 15, M = "", P = 0, G = "", V = d.EDITABLE, L = null, D = null, U, H = "", ga = "", ba=!1, N = null, na = null, T = null,
        fa=!1, Y, Z, W, X, z, pa = "#333333", Q, R, I, S=!1, ja = null, ma, ka=!1, la=!1, aa=!1, ca=!1, ha=!1, oa=!1, ea = null, ia=!1, qa = "1.1", O = "https:" === window.location.protocol;
        this.init = function(a, c) {
            e = {
                MAIN_DOMAIN: "http://www.photosnack.com/",
                DEV_DOMAIN: "http://dev.photosnack.net/",
                EMBED_PATH: "app/html5js/EmbedCanvas.js",
                RESIZE_DOMAIN: null,
                FILES: null,
                STATS_DOMAIN: null,
                ALBUM_VIEW_PATH: null,
                CURRENT_DOMAIN: null,
                STATS: null,
                SCALE_CROP_RESIZE: null,
                ALBUM_PATH: null,
                IMAGE_PATH: null,
                ALT_SCALE_PATH: null,
                ALT_SCALE_CROP_PATH: null,
                LQ_ALT_SCALE_PATH: null,
                LQ_ALT_SCALE_CROP_PATH: null,
                TEMPLATE_SWF: null,
                AUDIO_UPLOAD_PATH: null,
                AUDIO_FREE_PATH: null,
                BACKGROUND_PATH: null
            };
            var d = navigator.userAgent.toLowerCase(), f = navigator.appVersion.toLowerCase();
            F =- 1 < d.search("ipod")||-1 < d.search("iphone")||-1 < d.search("ipad")||-1 < d.search("silk")||-1 < d.search("playbook")||-1 < d.search("windows phone")?!0 : - 1 < f.search("ipod")||-1 < f.search("iphone")||-1 < f.search("ipad")||-1 < f.search("android")||-1 < f.search("silk")||-1 < f.search("playbook")||-1 < f.search("windows phone")?!0 :
            !1;
            d = navigator.userAgent.toLowerCase();
            f = navigator.appVersion.toLowerCase();
            - 1 < d.search("chrome") || f.search("chrome");
            (da = 0 === String(window.location).indexOf("http://devfiles.photosnack.net") || 0 === String(window.location).indexOf("http://dev.snacktools.net") || 0 === String(window.location).indexOf("http://devfiles.snacktools.net") || 0 === String(window.location).indexOf("https://s3.amazonaws.com/devfiles.podsnack.net") || 0 === String(window.location).indexOf("https://cdns.snacktools.net/photosnack/embed_https_dev.html")) ?
            (e.RESIZE_DOMAIN = (O ? "https" : "http") + "://resizephotodev.snacktools.net/", e.DROPBOX = (O ? "https" : "http") + "://www.dropbox.com/", e.FILES = O ? "https://d2cnpexdpxn2c.cloudfront.net/" : "http://d2cnpexdpxn2c.cloudfront.net/", e.FILESS3 = O ? "https://s3.amazonaws.com/devfiles.photosnack.net/" : "http://devfiles.photosnack.net/", e.S3_PATH = O ? "https://s3.amazonaws.com/devfiles.photosnack.net/" : "http://devfiles.photosnack.net.s3.amazonaws.com/", e.STATS_DOMAIN = (O ? "https" : "http") + "://stats.dev.snacktools.net/", e.ALBUM_VIEW_PATH =
            "http://dev.snacktools.net/s/", e.CURRENT_DOMAIN = e.DEV_DOMAIN, postMsgTarget = O ? "https://cdns.snacktools.net" : "http://dev.snacktools.net", e.FONTS_PATH = (O ? "https://s3.amazonaws.com/devfiles.snacktools.net/" : "http://devfiles.snacktools.net/") + "iframes/files.photosnack.com/iframejs/fonts/", e.IFRAME_PATH = O ? "https://cdns.snacktools.net/photosnack/embed_https_dev.html" : "http://devfiles.snacktools.net/iframes/files.photosnack.com/iframejs/embed.html") : (e.RESIZE_DOMAIN = "http://ec2.photosnack.net/", e.DROPBOX =
            (O ? "https" : "http") + "://www.dropbox.com/", e.FILES = O ? "https://d2j00gktbpe2bf.cloudfront.net/" : "http://d2j00gktbpe2bf.cloudfront.net/", e.FILESS3 = O ? "https://s3.amazonaws.com/files.photosnack.net/" : "http://files.photosnack.net/", e.S3_PATH = e.FILES, e.STATS_DOMAIN = (O ? "https" : "http") + "://stats.snacktools.net/", e.ALBUM_VIEW_PATH = "http://snack.to/", e.CURRENT_DOMAIN = e.MAIN_DOMAIN, postMsgTarget = O ? "https://cdns.snacktools.net" : "http://files.photosnack.com", e.FONTS_PATH = O ? "https://cdns.snacktools.net/photosnack/fonts/" :
            "http://files.photosnack.com/iframejs/fonts/", e.IFRAME_PATH = O ? "https://cdns.snacktools.net/photosnack/embed_https.html" : "http://files.photosnack.com/iframejs/embed.html");
            e.STATS = e.STATS_DOMAIN + "countAccess.php";
            e.IMAGE_PATH = e.FILES + "albums/images/";
            e.IMAGE_PATH_DROPBOX = e.DROPBOX + "albums/images/";
            e.SCALE_CROP_RESIZE = e.RESIZE_DOMAIN + "resize/scaleCrop/";
            e.SCALE_CROP_RESIZE_DROPBOX = e.DROPBOX + "resize/scaleCrop/";
            e.ALT_SCALE_PATH = e.RESIZE_DOMAIN + "resize/scale/";
            e.ALT_SCALE_PATH_DROPBOX = e.DROPBOX + "resize/scale/";
            e.ALT_SCALE_CROP_PATH = e.RESIZE_DOMAIN + "resize/scaleCrop/";
            e.ALT_SCALE_CROP_PATH_DROPBOX = e.DROPBOX + "resize/scaleCrop/";
            e.LQ_ALT_SCALE_PATH = e.RESIZE_DOMAIN + "resizeLQ/scale/";
            e.LQ_ALT_SCALE_PATH_DROPBOX = e.DROPBOX + "resizeLQ/scale/";
            e.LQ_ALT_SCALE_CROP_PATH = e.RESIZE_DOMAIN + "resizeLQ/scaleCrop/";
            e.LQ_ALT_SCALE_CROP_PATH_DROPBOX = e.DROPBOX + "resizeLQ/scaleCrop/";
            e.ALBUM_PATH = e.FILESS3 + "albums/json/";
            e.AUDIO_UPLOAD_PATH = e.FILES + "albums/customize/";
            e.BACKGROUND_PATH = e.FILES + "albums/customize/";
            e.TEMPLATE_JS =
            e.FILES + "templates/html5js/";
            e.AUDIO_FREE_PATH = e.FILES + "mp3s/";
            e.PATTERN_PATH = e.FILES + "templates/images/";
            e.AUX_IMAGES_PATH = e.FILES + "templates/images/";
            e.SWF_PLAYER = e.FILES + "app/html5js_embed/AudioPlayer.swf";
            if (r(a)) {
                for (d = 1; 0 < g("#psecc" + d).length;)
                    d++;
                H = "psecc" + d;
                g("<audio/>").attr("id", "ps_test_audio_" + H).appendTo(g(c));
                d = g("#ps_test_audio_" + H);
                d[0] ? (d.remove(), fa=!0) : fa=!1;
                na = H + "_preloader";
                ga = H + "_wm" + Math.floor(11E3 * Math.random());
                N = g("<div />").attr("id", H).css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    overflow: "hidden"
                }).appendTo(c).ps_unselectable();
                L = g("<div/>").attr("id", H + "_templ").css({
                    zIndex: 100,
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }).appendTo("#" + H);
                Q = N.width();
                R = N.height();
                g(window).on("resize", b);
                d = 0 === P ? e.ALBUM_PATH + M : e.ALBUM_PATH + M + "?t=" + P;
                XD && XD.postMessage("iframeReady", document.referrer);
                I = new NewWheelPreloader(na, H, Q, R, "centered");
                I.show();
                g.ajax({
                    url: d,
                    data: "",
                    cache: !1,
                    dataType: "jsonp",
                    jsonp: !1,
                    jsonpCallback: "photoSnack" + M,
                    success: n,
                    error: J
                })
            }
        };
        this.setParamValue = function(a, b) {
            D && D.setParamValue(a, b);
            switch (a) {
            case "backgroundColor":
                c.backgroundImage = c.backgroundPattern = "";
                try {
                    c.backgroundColor = parseInt(b, 16)
                } catch (d) {
                    c.backgroundColor = 0
                }
                if (c.transparentBackground)
                    N.css({
                        backgroundColor: "transparent"
                    });
                else {
                    var f = "#" + v(c.backgroundColor.toString(16));
                    N.css({
                        backgroundColor: f,
                        backgroundImage: ""
                    })
                }
                z && z.hide();
                break;
            case "backgroundPattern":
                c.backgroundImage = "";
                c.backgroundPattern = b;
                A();
                z && z.hide();
                break;
            case "backgroundImage":
                c.backgroundPattern =
                "";
                c.backgroundImage = b;
                c.transparentBackground=!1;
                N.css({
                    backgroundColor: "transparent",
                    backgroundImage: ""
                });
                y();
                break;
            case "scaleBackground":
                c.scaleBackground = "true" === b?!0 : !1;
                z && y();
                break;
            case "transparentBackground":
                c.transparentBackground = "true" === b?!0 : !1;
                c.transparentBackground ? (N.css({
                    backgroundColor: "transparent",
                    backgroundImage: ""
                }), z && z.hide()) : "undefined" !== typeof c.backgroundImage && "" !== c.backgroundImage ? "tile" === c.backgroundAlign ? N.css({
                    backgroundImage: "url(" + (e.BACKGROUND_PATH + c.backgroundImage) +
                    ")"
                }) : z && z.show() : "undefined" !== typeof c.backgroundPattern && "" !== c.backgroundPattern ? A() : c.backgroundColor && (f = "#" + v(c.backgroundColor.toString(16)), N.css({
                    backgroundColor: f,
                    backgroundImage: ""
                }));
                break;
            case "backgroundAlign":
                c.backgroundAlign = b || "scale";
                "tile" === b ? y() : (N.css({
                    backgroundColor: "transparent",
                    backgroundImage: ""
                }), y(), s());
                break;
            case "mp3Type":
                "none" !== b && ("upload" !== b && "choose" !== b) && (b = "none");
                c.mp3Type = b;
                break;
            case "audioFilePath":
                c.audioFilePath = b;
                0 === c.audioFilePath.length && (c.mp3Type =
                "none");
                switch (c.mp3Type) {
                case "upload":
                    f = e.AUDIO_UPLOAD_PATH + b + ".mp3";
                    break;
                case "choose":
                    f = e.AUDIO_FREE_PATH + b + ".mp3";
                    break;
                case "none":
                    f = ""
                }
                T ? T.setAudioFile(f) : q();
                break;
            case "audioPlayerColor":
                try {
                    c.audioPlayerColor = parseInt(b, 16)
                } catch (g) {
                    c.audioPlayerColor = 0
                }
                T ? audioPlayerColor.setAudioPlayerColor(c.audioPlayerColor) : q();
                break;
            case "audioPlayerIcon":
                c.audioPlayerIcon = b;
                T ? T.setAudioPlayerIcon(b) : q();
                break;
            case "autoPlay":
                c.autoPlay = "true" === b?!0 : !1;
                T ? T.setAudioAutoPlay(c.autoPlay) : q();
                break;
            case "loopAudio":
                c.loopAudio =
                "false" === b?!1 : !0, T ? T.setAudioPlayerLoop(c.loopAudio) : q()
            }
        }
    };
    g.fn.PhotoSnackEmbedCanvas = function(u) {
        return this.length ? this.each(function() {
            var b = new PhotoSnackEmbedCanvas;
            b.init(u, this);
            g.data(this, "photoSnack", b)
        }) : this
    }
})(jQuery);


