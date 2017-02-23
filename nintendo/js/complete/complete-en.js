/* Zepto v1.0-1-ga3cab6c - polyfill zepto detect event ajax form fx - zeptojs.com/license */
(function(e) {
    String.prototype.trim === e && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }), Array.prototype.reduce === e && (Array.prototype.reduce = function(t) {
        if (this === void 0 || this === null) throw new TypeError;
        var n = Object(this),
            r = n.length >>> 0,
            i = 0,
            s;
        if (typeof t != "function") throw new TypeError;
        if (r == 0 && arguments.length == 1) throw new TypeError;
        if (arguments.length >= 2) s = arguments[1];
        else
            do {
                if (i in n) {
                    s = n[i++];
                    break
                }
                if (++i >= r) throw new TypeError
            } while (!0);
        while (i < r) i in n && (s = t.call(e, s, n[i], i, n)), i++;
        return s
    })
})();
var Zepto = function() {
    function O(e) {
        return e == null ? String(e) : T[N.call(e)] || "object"
    }

    function M(e) {
        return O(e) == "function"
    }

    function _(e) {
        return e != null && e == e.window
    }

    function D(e) {
        return e != null && e.nodeType == e.DOCUMENT_NODE
    }

    function P(e) {
        return O(e) == "object"
    }

    function H(e) {
        return P(e) && !_(e) && e.__proto__ == Object.prototype
    }

    function B(e) {
        return e instanceof Array
    }

    function j(e) {
        return typeof e.length == "number"
    }

    function F(e) {
        return o.call(e, function(e) {
            return e != null
        })
    }

    function I(e) {
        return e.length > 0 ? n.fn.concat.apply([], e) : e
    }

    function q(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function R(e) {
        return e in f ? f[e] : f[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
    }

    function U(e, t) {
        return typeof t == "number" && !c[q(e)] ? t + "px" : t
    }

    function z(e) {
        var t, n;
        return a[e] || (t = u.createElement(e), u.body.appendChild(t), n = l(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), n == "none" && (n = "block"), a[e] = n), a[e]
    }

    function W(e) {
        return "children" in e ? s.call(e.children) : n.map(e.childNodes, function(e) {
            if (e.nodeType == 1) return e
        })
    }

    function X(n, r, i) {
        for (t in r) i && (H(r[t]) || B(r[t])) ? (H(r[t]) && !H(n[t]) && (n[t] = {}), B(r[t]) && !B(n[t]) && (n[t] = []), X(n[t], r[t], i)) : r[t] !== e && (n[t] = r[t])
    }

    function V(t, r) {
        return r === e ? n(t) : n(t).filter(r)
    }

    function $(e, t, n, r) {
        return M(t) ? t.call(e, n, r) : t
    }

    function J(e, t, n) {
        n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
    }

    function K(t, n) {
        var r = t.className,
            i = r && r.baseVal !== e;
        if (n === e) return i ? r.baseVal : r;
        i ? r.baseVal = n : t.className = n
    }

    function Q(e) {
        var t;
        try {
            return e ? e == "true" || (e == "false" ? !1 : e == "null" ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? n.parseJSON(e) : e : t) : e
        } catch (r) {
            return e
        }
    }

    function G(e, t) {
        t(e);
        for (var n in e.childNodes) G(e.childNodes[n], t)
    }
    var e, t, n, r, i = [],
        s = i.slice,
        o = i.filter,
        u = window.document,
        a = {},
        f = {},
        l = u.defaultView.getComputedStyle,
        c = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        h = /^\s*<(\w+|!)[^>]*>/,
        p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        d = /^(?:body|html)$/i,
        v = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        m = ["after", "prepend", "before", "append"],
        g = u.createElement("table"),
        y = u.createElement("tr"),
        b = {
            tr: u.createElement("tbody"),
            tbody: g,
            thead: g,
            tfoot: g,
            td: y,
            th: y,
            "*": u.createElement("div")
        },
        w = /complete|loaded|interactive/,
        E = /^\.([\w-]+)$/,
        S = /^#([\w-]*)$/,
        x = /^[\w-]+$/,
        T = {},
        N = T.toString,
        C = {},
        k, L, A = u.createElement("div");
    return C.matches = function(e, t) {
        if (!e || e.nodeType !== 1) return !1;
        var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (n) return n.call(e, t);
        var r, i = e.parentNode,
            s = !i;
        return s && (i = A).appendChild(e), r = ~C.qsa(i, t).indexOf(e), s && A.removeChild(e), r
    }, k = function(e) {
        return e.replace(/-+(.)?/g, function(e, t) {
            return t ? t.toUpperCase() : ""
        })
    }, L = function(e) {
        return o.call(e, function(t, n) {
            return e.indexOf(t) == n
        })
    }, C.fragment = function(t, r, i) {
        t.replace && (t = t.replace(p, "<$1></$2>")), r === e && (r = h.test(t) && RegExp.$1), r in b || (r = "*");
        var o, u, a = b[r];
        return a.innerHTML = "" + t, u = n.each(s.call(a.childNodes), function() {
            a.removeChild(this)
        }), H(i) && (o = n(u), n.each(i, function(e, t) {
            v.indexOf(e) > -1 ? o[e](t) : o.attr(e, t)
        })), u
    }, C.Z = function(e, t) {
        return e = e || [], e.__proto__ = n.fn, e.selector = t || "", e
    }, C.isZ = function(e) {
        return e instanceof C.Z
    }, C.init = function(t, r) {
        if (!t) return C.Z();
        if (M(t)) return n(u).ready(t);
        if (C.isZ(t)) return t;
        var i;
        if (B(t)) i = F(t);
        else if (P(t)) i = [H(t) ? n.extend({}, t) : t], t = null;
        else if (h.test(t)) i = C.fragment(t.trim(), RegExp.$1, r), t = null;
        else {
            if (r !== e) return n(r).find(t);
            i = C.qsa(u, t)
        }
        return C.Z(i, t)
    }, n = function(e, t) {
        return C.init(e, t)
    }, n.extend = function(e) {
        var t, n = s.call(arguments, 1);
        return typeof e == "boolean" && (t = e, e = n.shift()), n.forEach(function(n) {
            X(e, n, t)
        }), e
    }, C.qsa = function(e, t) {
        var n;
        return D(e) && S.test(t) ? (n = e.getElementById(RegExp.$1)) ? [n] : [] : e.nodeType !== 1 && e.nodeType !== 9 ? [] : s.call(E.test(t) ? e.getElementsByClassName(RegExp.$1) : x.test(t) ? e.getElementsByTagName(t) : e.querySelectorAll(t))
    }, n.contains = function(e, t) {
        return e !== t && e.contains(t)
    }, n.type = O, n.isFunction = M, n.isWindow = _, n.isArray = B, n.isPlainObject = H, n.isEmptyObject = function(e) {
        var t;
        for (t in e) return !1;
        return !0
    }, n.inArray = function(e, t, n) {
        return i.indexOf.call(t, e, n)
    }, n.camelCase = k, n.trim = function(e) {
        return e.trim()
    }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function(e, t) {
        var n, r = [],
            i, s;
        if (j(e))
            for (i = 0; i < e.length; i++) n = t(e[i], i), n != null && r.push(n);
        else
            for (s in e) n = t(e[s], s), n != null && r.push(n);
        return I(r)
    }, n.each = function(e, t) {
        var n, r;
        if (j(e)) {
            for (n = 0; n < e.length; n++)
                if (t.call(e[n], n, e[n]) === !1) return e
        } else
            for (r in e)
                if (t.call(e[r], r, e[r]) === !1) return e;
        return e
    }, n.grep = function(e, t) {
        return o.call(e, t)
    }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        T["[object " + t + "]"] = t.toLowerCase()
    }), n.fn = {
        forEach: i.forEach,
        reduce: i.reduce,
        push: i.push,
        sort: i.sort,
        indexOf: i.indexOf,
        concat: i.concat,
        map: function(e) {
            return n(n.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return n(s.apply(this, arguments))
        },
        ready: function(e) {
            return w.test(u.readyState) ? e(n) : u.addEventListener("DOMContentLoaded", function() {
                e(n)
            }, !1), this
        },
        get: function(t) {
            return t === e ? s.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                this.parentNode != null && this.parentNode.removeChild(this)
            })
        },
        each: function(e) {
            return i.every.call(this, function(t, n) {
                return e.call(t, n, t) !== !1
            }), this
        },
        filter: function(e) {
            return M(e) ? this.not(this.not(e)) : n(o.call(this, function(t) {
                return C.matches(t, e)
            }))
        },
        add: function(e, t) {
            return n(L(this.concat(n(e, t))))
        },
        is: function(e) {
            return this.length > 0 && C.matches(this[0], e)
        },
        not: function(t) {
            var r = [];
            if (M(t) && t.call !== e) this.each(function(e) {
                t.call(this, e) || r.push(this)
            });
            else {
                var i = typeof t == "string" ? this.filter(t) : j(t) && M(t.item) ? s.call(t) : n(t);
                this.forEach(function(e) {
                    i.indexOf(e) < 0 && r.push(e)
                })
            }
            return n(r)
        },
        has: function(e) {
            return this.filter(function() {
                return P(e) ? n.contains(this, e) : n(this).find(e).size()
            })
        },
        eq: function(e) {
            return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function() {
            var e = this[0];
            return e && !P(e) ? e : n(e)
        },
        last: function() {
            var e = this[this.length - 1];
            return e && !P(e) ? e : n(e)
        },
        find: function(e) {
            var t, r = this;
            return typeof e == "object" ? t = n(e).filter(function() {
                var e = this;
                return i.some.call(r, function(t) {
                    return n.contains(t, e)
                })
            }) : this.length == 1 ? t = n(C.qsa(this[0], e)) : t = this.map(function() {
                return C.qsa(this, e)
            }), t
        },
        closest: function(e, t) {
            var r = this[0],
                i = !1;
            typeof e == "object" && (i = n(e));
            while (r && !(i ? i.indexOf(r) >= 0 : C.matches(r, e))) r = r !== t && !D(r) && r.parentNode;
            return n(r)
        },
        parents: function(e) {
            var t = [],
                r = this;
            while (r.length > 0) r = n.map(r, function(e) {
                if ((e = e.parentNode) && !D(e) && t.indexOf(e) < 0) return t.push(e), e
            });
            return V(t, e)
        },
        parent: function(e) {
            return V(L(this.pluck("parentNode")), e)
        },
        children: function(e) {
            return V(this.map(function() {
                return W(this)
            }), e)
        },
        contents: function() {
            return this.map(function() {
                return s.call(this.childNodes)
            })
        },
        siblings: function(e) {
            return V(this.map(function(e, t) {
                return o.call(W(t.parentNode), function(e) {
                    return e !== t
                })
            }), e)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(e) {
            return n.map(this, function(t) {
                return t[e]
            })
        },
        show: function() {
            return this.each(function() {
                this.style.display == "none" && (this.style.display = null), l(this, "").getPropertyValue("display") == "none" && (this.style.display = z(this.nodeName))
            })
        },
        replaceWith: function(e) {
            return this.before(e).remove()
        },
        wrap: function(e) {
            var t = M(e);
            if (this[0] && !t) var r = n(e).get(0),
                i = r.parentNode || this.length > 1;
            return this.each(function(s) {
                n(this).wrapAll(t ? e.call(this, s) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function(e) {
            if (this[0]) {
                n(this[0]).before(e = n(e));
                var t;
                while ((t = e.children()).length) e = t.first();
                n(e).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            var t = M(e);
            return this.each(function(r) {
                var i = n(this),
                    s = i.contents(),
                    o = t ? e.call(this, r) : e;
                s.length ? s.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var r = n(this);
                (t === e ? r.css("display") == "none" : t) ? r.show(): r.hide()
            })
        },
        prev: function(e) {
            return n(this.pluck("previousElementSibling")).filter(e || "*")
        },
        next: function(e) {
            return n(this.pluck("nextElementSibling")).filter(e || "*")
        },
        html: function(t) {
            return t === e ? this.length > 0 ? this[0].innerHTML : null : this.each(function(e) {
                var r = this.innerHTML;
                n(this).empty().append($(this, t, e, r))
            })
        },
        text: function(t) {
            return t === e ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                this.textContent = t
            })
        },
        attr: function(n, r) {
            var i;
            return typeof n == "string" && r === e ? this.length == 0 || this[0].nodeType !== 1 ? e : n == "value" && this[0].nodeName == "INPUT" ? this.val() : !(i = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : i : this.each(function(e) {
                if (this.nodeType !== 1) return;
                if (P(n))
                    for (t in n) J(this, t, n[t]);
                else J(this, n, $(this, r, e, this.getAttribute(n)))
            })
        },
        removeAttr: function(e) {
            return this.each(function() {
                this.nodeType === 1 && J(this, e)
            })
        },
        prop: function(t, n) {
            return n === e ? this[0] && this[0][t] : this.each(function(e) {
                this[t] = $(this, n, e, this[t])
            })
        },
        data: function(t, n) {
            var r = this.attr("data-" + q(t), n);
            return r !== null ? Q(r) : e
        },
        val: function(t) {
            return t === e ? this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function(e) {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function(e) {
                this.value = $(this, t, e, this.value)
            })
        },
        offset: function(e) {
            if (e) return this.each(function(t) {
                var r = n(this),
                    i = $(this, e, t, r.offset()),
                    s = r.offsetParent().offset(),
                    o = {
                        top: i.top - s.top,
                        left: i.left - s.left
                    };
                r.css("position") == "static" && (o.position = "relative"), r.css(o)
            });
            if (this.length == 0) return null;
            var t = this[0].getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                width: Math.round(t.width),
                height: Math.round(t.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2 && typeof e == "string") return this[0] && (this[0].style[k(e)] || l(this[0], "").getPropertyValue(e));
            var r = "";
            if (O(e) == "string") !n && n !== 0 ? this.each(function() {
                this.style.removeProperty(q(e))
            }) : r = q(e) + ":" + U(e, n);
            else
                for (t in e) !e[t] && e[t] !== 0 ? this.each(function() {
                    this.style.removeProperty(q(t))
                }) : r += q(t) + ":" + U(t, e[t]) + ";";
            return this.each(function() {
                this.style.cssText += ";" + r
            })
        },
        index: function(e) {
            return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(e) {
            return i.some.call(this, function(e) {
                return this.test(K(e))
            }, R(e))
        },
        addClass: function(e) {
            return this.each(function(t) {
                r = [];
                var i = K(this),
                    s = $(this, e, t, i);
                s.split(/\s+/g).forEach(function(e) {
                    n(this).hasClass(e) || r.push(e)
                }, this), r.length && K(this, i + (i ? " " : "") + r.join(" "))
            })
        },
        removeClass: function(t) {
            return this.each(function(n) {
                if (t === e) return K(this, "");
                r = K(this), $(this, t, n, r).split(/\s+/g).forEach(function(e) {
                    r = r.replace(R(e), " ")
                }), K(this, r.trim())
            })
        },
        toggleClass: function(t, r) {
            return this.each(function(i) {
                var s = n(this),
                    o = $(this, t, i, K(this));
                o.split(/\s+/g).forEach(function(t) {
                    (r === e ? !s.hasClass(t) : r) ? s.addClass(t): s.removeClass(t)
                })
            })
        },
        scrollTop: function() {
            if (!this.length) return;
            return "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY
        },
        position: function() {
            if (!this.length) return;
            var e = this[0],
                t = this.offsetParent(),
                r = this.offset(),
                i = d.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return r.top -= parseFloat(n(e).css("margin-top")) || 0, r.left -= parseFloat(n(e).css("margin-left")) || 0, i.top += parseFloat(n(t[0]).css("border-top-width")) || 0, i.left += parseFloat(n(t[0]).css("border-left-width")) || 0, {
                top: r.top - i.top,
                left: r.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || u.body;
                while (e && !d.test(e.nodeName) && n(e).css("position") == "static") e = e.offsetParent;
                return e
            })
        }
    }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(t) {
        n.fn[t] = function(r) {
            var i, s = this[0],
                o = t.replace(/./, function(e) {
                    return e[0].toUpperCase()
                });
            return r === e ? _(s) ? s["inner" + o] : D(s) ? s.documentElement["offset" + o] : (i = this.offset()) && i[t] : this.each(function(e) {
                s = n(this), s.css(t, $(this, r, e, s[t]()))
            })
        }
    }), m.forEach(function(e, t) {
        var r = t % 2;
        n.fn[e] = function() {
            var e, i = n.map(arguments, function(t) {
                    return e = O(t), e == "object" || e == "array" || t == null ? t : C.fragment(t)
                }),
                s, o = this.length > 1;
            return i.length < 1 ? this : this.each(function(e, u) {
                s = r ? u : u.parentNode, u = t == 0 ? u.nextSibling : t == 1 ? u.firstChild : t == 2 ? u : null, i.forEach(function(e) {
                    if (o) e = e.cloneNode(!0);
                    else if (!s) return n(e).remove();
                    G(s.insertBefore(e, u), function(e) {
                        e.nodeName != null && e.nodeName.toUpperCase() === "SCRIPT" && (!e.type || e.type === "text/javascript") && !e.src && window.eval.call(window, e.innerHTML)
                    })
                })
            })
        }, n.fn[r ? e + "To" : "insert" + (t ? "Before" : "After")] = function(t) {
            return n(t)[e](this), this
        }
    }), C.Z.prototype = n.fn, C.uniq = L, C.deserializeValue = Q, n.zepto = C, n
}();
window.Zepto = Zepto, "$" in window || (window.$ = Zepto),
    function(e) {
        function t(e) {
            var t = this.os = {},
                n = this.browser = {},
                r = e.match(/WebKit\/([\d.]+)/),
                i = e.match(/(Android)\s+([\d.]+)/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                o = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
                u = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                a = u && e.match(/TouchPad/),
                f = e.match(/Kindle\/([\d.]+)/),
                l = e.match(/Silk\/([\d._]+)/),
                c = e.match(/(BlackBerry).*Version\/([\d.]+)/),
                h = e.match(/(BB10).*Version\/([\d.]+)/),
                p = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                d = e.match(/PlayBook/),
                v = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                m = e.match(/Firefox\/([\d.]+)/);
            if (n.webkit = !!r) n.version = r[1];
            i && (t.android = !0, t.version = i[2]), o && (t.ios = t.iphone = !0, t.version = o[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), u && (t.webos = !0, t.version = u[2]), a && (t.touchpad = !0), c && (t.blackberry = !0, t.version = c[2]), h && (t.bb10 = !0, t.version = h[2]), p && (t.rimtabletos = !0, t.version = p[2]), d && (n.playbook = !0), f && (t.kindle = !0, t.version = f[1]), l && (n.silk = !0, n.version = l[1]), !l && t.android && e.match(/Kindle Fire/) && (n.silk = !0), v && (n.chrome = !0, n.version = v[1]), m && (n.firefox = !0, n.version = m[1]), t.tablet = !!(s || d || i && !e.match(/Mobile/) || m && e.match(/Tablet/)), t.phone = !t.tablet && !!(i || o || u || c || h || v && e.match(/Android/) || v && e.match(/CriOS\/([\d.]+)/) || m && e.match(/Mobile/))
        }
        t.call(e, navigator.userAgent), e.__detect = t
    }(Zepto),
    function(e) {
        function o(e) {
            return e._zid || (e._zid = r++)
        }

        function u(e, t, r, i) {
            t = a(t);
            if (t.ns) var s = f(t.ns);
            return (n[o(e)] || []).filter(function(e) {
                return e && (!t.e || e.e == t.e) && (!t.ns || s.test(e.ns)) && (!r || o(e.fn) === o(r)) && (!i || e.sel == i)
            })
        }

        function a(e) {
            var t = ("" + e).split(".");
            return {
                e: t[0],
                ns: t.slice(1).sort().join(" ")
            }
        }

        function f(e) {
            return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
        }

        function l(t, n, r) {
            e.type(t) != "string" ? e.each(t, r) : t.split(/\s/).forEach(function(e) {
                r(e, n)
            })
        }

        function c(e, t) {
            return e.del && (e.e == "focus" || e.e == "blur") || !!t
        }

        function h(e) {
            return s[e] || e
        }

        function p(t, r, i, u, f, p) {
            var d = o(t),
                v = n[d] || (n[d] = []);
            l(r, i, function(n, r) {
                var i = a(n);
                i.fn = r, i.sel = u, i.e in s && (r = function(t) {
                    var n = t.relatedTarget;
                    if (!n || n !== this && !e.contains(this, n)) return i.fn.apply(this, arguments)
                }), i.del = f && f(r, n);
                var o = i.del || r;
                i.proxy = function(e) {
                    var n = o.apply(t, [e].concat(e.data));
                    return n === !1 && (e.preventDefault(), e.stopPropagation()), n
                }, i.i = v.length, v.push(i), t.addEventListener(h(i.e), i.proxy, c(i, p))
            })
        }

        function d(e, t, r, i, s) {
            var a = o(e);
            l(t || "", r, function(t, r) {
                u(e, t, r, i).forEach(function(t) {
                    delete n[a][t.i], e.removeEventListener(h(t.e), t.proxy, c(t, s))
                })
            })
        }

        function b(t) {
            var n, r = {
                originalEvent: t
            };
            for (n in t) !g.test(n) && t[n] !== undefined && (r[n] = t[n]);
            return e.each(y, function(e, n) {
                r[e] = function() {
                    return this[n] = v, t[e].apply(t, arguments)
                }, r[n] = m
            }), r
        }

        function w(e) {
            if (!("defaultPrevented" in e)) {
                e.defaultPrevented = !1;
                var t = e.preventDefault;
                e.preventDefault = function() {
                    this.defaultPrevented = !0, t.call(this)
                }
            }
        }
        var t = e.zepto.qsa,
            n = {},
            r = 1,
            i = {},
            s = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
        i.click = i.mousedown = i.mouseup = i.mousemove = "MouseEvents", e.event = {
            add: p,
            remove: d
        }, e.proxy = function(t, n) {
            if (e.isFunction(t)) {
                var r = function() {
                    return t.apply(n, arguments)
                };
                return r._zid = o(t), r
            }
            if (typeof n == "string") return e.proxy(t[n], t);
            throw new TypeError("expected function")
        }, e.fn.bind = function(e, t) {
            return this.each(function() {
                p(this, e, t)
            })
        }, e.fn.unbind = function(e, t) {
            return this.each(function() {
                d(this, e, t)
            })
        }, e.fn.one = function(e, t) {
            return this.each(function(n, r) {
                p(this, e, t, null, function(e, t) {
                    return function() {
                        var n = e.apply(r, arguments);
                        return d(r, t, e), n
                    }
                })
            })
        };
        var v = function() {
                return !0
            },
            m = function() {
                return !1
            },
            g = /^([A-Z]|layer[XY]$)/,
            y = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        e.fn.delegate = function(t, n, r) {
            return this.each(function(i, s) {
                p(s, n, r, t, function(n) {
                    return function(r) {
                        var i, o = e(r.target).closest(t, s).get(0);
                        if (o) return i = e.extend(b(r), {
                            currentTarget: o,
                            liveFired: s
                        }), n.apply(o, [i].concat([].slice.call(arguments, 1)))
                    }
                })
            })
        }, e.fn.undelegate = function(e, t, n) {
            return this.each(function() {
                d(this, t, n, e)
            })
        }, e.fn.live = function(t, n) {
            return e(document.body).delegate(this.selector, t, n), this
        }, e.fn.die = function(t, n) {
            return e(document.body).undelegate(this.selector, t, n), this
        }, e.fn.on = function(t, n, r) {
            return !n || e.isFunction(n) ? this.bind(t, n || r) : this.delegate(n, t, r)
        }, e.fn.off = function(t, n, r) {
            return !n || e.isFunction(n) ? this.unbind(t, n || r) : this.undelegate(n, t, r)
        }, e.fn.trigger = function(t, n) {
            if (typeof t == "string" || e.isPlainObject(t)) t = e.Event(t);
            return w(t), t.data = n, this.each(function() {
                "dispatchEvent" in this && this.dispatchEvent(t)
            })
        }, e.fn.triggerHandler = function(t, n) {
            var r, i;
            return this.each(function(s, o) {
                r = b(typeof t == "string" ? e.Event(t) : t), r.data = n, r.target = o, e.each(u(o, t.type || t), function(e, t) {
                    i = t.proxy(r);
                    if (r.isImmediatePropagationStopped()) return !1
                })
            }), i
        }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
            e.fn[t] = function(e) {
                return e ? this.bind(t, e) : this.trigger(t)
            }
        }), ["focus", "blur"].forEach(function(t) {
            e.fn[t] = function(e) {
                return e ? this.bind(t, e) : this.each(function() {
                    try {
                        this[t]()
                    } catch (e) {}
                }), this
            }
        }), e.Event = function(e, t) {
            typeof e != "string" && (t = e, e = t.type);
            var n = document.createEvent(i[e] || "Events"),
                r = !0;
            if (t)
                for (var s in t) s == "bubbles" ? r = !!t[s] : n[s] = t[s];
            return n.initEvent(e, r, !0, null, null, null, null, null, null, null, null, null, null, null, null), n.isDefaultPrevented = function() {
                return this.defaultPrevented
            }, n
        }
    }(Zepto),
    function($) {
        function triggerAndReturn(e, t, n) {
            var r = $.Event(t);
            return $(e).trigger(r, n), !r.defaultPrevented
        }

        function triggerGlobal(e, t, n, r) {
            if (e.global) return triggerAndReturn(t || document, n, r)
        }

        function ajaxStart(e) {
            e.global && $.active++ === 0 && triggerGlobal(e, null, "ajaxStart")
        }

        function ajaxStop(e) {
            e.global && !--$.active && triggerGlobal(e, null, "ajaxStop")
        }

        function ajaxBeforeSend(e, t) {
            var n = t.context;
            if (t.beforeSend.call(n, e, t) === !1 || triggerGlobal(t, n, "ajaxBeforeSend", [e, t]) === !1) return !1;
            triggerGlobal(t, n, "ajaxSend", [e, t])
        }

        function ajaxSuccess(e, t, n) {
            var r = n.context,
                i = "success";
            n.success.call(r, e, i, t), triggerGlobal(n, r, "ajaxSuccess", [t, n, e]), ajaxComplete(i, t, n)
        }

        function ajaxError(e, t, n, r) {
            var i = r.context;
            r.error.call(i, n, t, e), triggerGlobal(r, i, "ajaxError", [n, r, e]), ajaxComplete(t, n, r)
        }

        function ajaxComplete(e, t, n) {
            var r = n.context;
            n.complete.call(r, t, e), triggerGlobal(n, r, "ajaxComplete", [t, n]), ajaxStop(n)
        }

        function empty() {}

        function mimeToDataType(e) {
            return e && (e = e.split(";", 2)[0]), e && (e == htmlType ? "html" : e == jsonType ? "json" : scriptTypeRE.test(e) ? "script" : xmlTypeRE.test(e) && "xml") || "text"
        }

        function appendQuery(e, t) {
            return (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function serializeData(e) {
            e.processData && e.data && $.type(e.data) != "string" && (e.data = $.param(e.data, e.traditional)), e.data && (!e.type || e.type.toUpperCase() == "GET") && (e.url = appendQuery(e.url, e.data))
        }

        function parseArguments(e, t, n, r) {
            var i = !$.isFunction(t);
            return {
                url: e,
                data: i ? t : undefined,
                success: i ? $.isFunction(n) ? n : undefined : t,
                dataType: i ? r || n : n
            }
        }

        function serialize(e, t, n, r) {
            var i, s = $.isArray(t);
            $.each(t, function(t, o) {
                i = $.type(o), r && (t = n ? r : r + "[" + (s ? "" : t) + "]"), !r && s ? e.add(o.name, o.value) : i == "array" || !n && i == "object" ? serialize(e, o, n, t) : e.add(t, o)
            })
        }
        var jsonpID = 0,
            document = window.document,
            key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            scriptTypeRE = /^(?:text|application)\/javascript/i,
            xmlTypeRE = /^(?:text|application)\/xml/i,
            jsonType = "application/json",
            htmlType = "text/html",
            blankRE = /^\s*$/;
        $.active = 0, $.ajaxJSONP = function(e) {
            if ("type" in e) {
                var t = "jsonp" + ++jsonpID,
                    n = document.createElement("script"),
                    r = function() {
                        clearTimeout(o), $(n).remove(), delete window[t]
                    },
                    i = function(n) {
                        r();
                        if (!n || n == "timeout") window[t] = empty;
                        ajaxError(null, n || "abort", s, e)
                    },
                    s = {
                        abort: i
                    },
                    o;
                return ajaxBeforeSend(s, e) === !1 ? (i("abort"), !1) : (window[t] = function(t) {
                    r(), ajaxSuccess(t, s, e)
                }, n.onerror = function() {
                    i("error")
                }, n.src = e.url.replace(/=\?/, "=" + t), $("head").append(n), e.timeout > 0 && (o = setTimeout(function() {
                    i("timeout")
                }, e.timeout)), s)
            }
            return $.ajax(e)
        }, $.ajaxSettings = {
            type: "GET",
            beforeSend: empty,
            success: empty,
            error: empty,
            complete: empty,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript",
                json: jsonType,
                xml: "application/xml, text/xml",
                html: htmlType,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, $.ajax = function(options) {
            var settings = $.extend({}, options || {});
            for (key in $.ajaxSettings) settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
            ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
            var dataType = settings.dataType,
                hasPlaceholder = /=\?/.test(settings.url);
            if (dataType == "jsonp" || hasPlaceholder) return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")), $.ajaxJSONP(settings);
            var mime = settings.accepts[dataType],
                baseHeaders = {},
                protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
                xhr = settings.xhr(),
                abortTimeout;
            settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"), mime && (baseHeaders.Accept = mime, mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime));
            if (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded";
            settings.headers = $.extend(baseHeaders, settings.headers || {}), xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
                    var result, error = !1;
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                        dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")), result = xhr.responseText;
                        try {
                            dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : $.parseJSON(result))
                        } catch (e) {
                            error = e
                        }
                        error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
                    } else ajaxError(null, xhr.status ? "error" : "abort", xhr, settings)
                }
            };
            var async = "async" in settings ? settings.async : !0;
            xhr.open(settings.type, settings.url, async);
            for (name in settings.headers) xhr.setRequestHeader(name, settings.headers[name]);
            return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(), !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function() {
                xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings)
            }, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr)
        }, $.get = function(e, t, n, r) {
            return $.ajax(parseArguments.apply(null, arguments))
        }, $.post = function(e, t, n, r) {
            var i = parseArguments.apply(null, arguments);
            return i.type = "POST", $.ajax(i)
        }, $.getJSON = function(e, t, n) {
            var r = parseArguments.apply(null, arguments);
            return r.dataType = "json", $.ajax(r)
        }, $.fn.load = function(e, t, n) {
            if (!this.length) return this;
            var r = this,
                i = e.split(/\s/),
                s, o = parseArguments(e, t, n),
                u = o.success;
            return i.length > 1 && (o.url = i[0], s = i[1]), o.success = function(e) {
                r.html(s ? $("<div>").html(e.replace(rscript, "")).find(s) : e), u && u.apply(r, arguments)
            }, $.ajax(o), this
        };
        var escape = encodeURIComponent;
        $.param = function(e, t) {
            var n = [];
            return n.add = function(e, t) {
                this.push(escape(e) + "=" + escape(t))
            }, serialize(n, e, t), n.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function(e) {
        e.fn.serializeArray = function() {
            var t = [],
                n;
            return e(Array.prototype.slice.call(this.get(0).elements)).each(function() {
                n = e(this);
                var r = n.attr("type");
                this.nodeName.toLowerCase() != "fieldset" && !this.disabled && r != "submit" && r != "reset" && r != "button" && (r != "radio" && r != "checkbox" || this.checked) && t.push({
                    name: n.attr("name"),
                    value: n.val()
                })
            }), t
        }, e.fn.serialize = function() {
            var e = [];
            return this.serializeArray().forEach(function(t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, e.fn.submit = function(t) {
            if (t) this.bind("submit", t);
            else if (this.length) {
                var n = e.Event("submit");
                this.eq(0).trigger(n), n.defaultPrevented || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function(e, t) {
        function y(e) {
            return b(e.replace(/([a-z])([A-Z])/, "$1-$2"))
        }

        function b(e) {
            return e.toLowerCase()
        }

        function w(e) {
            return r ? r + e : b(e)
        }
        var n = "",
            r, i, s, o = {
                Webkit: "webkit",
                Moz: "",
                O: "o",
                ms: "MS"
            },
            u = window.document,
            a = u.createElement("div"),
            f = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            l, c, h, p, d, v, m, g = {};
        e.each(o, function(e, i) {
            if (a.style[e + "TransitionProperty"] !== t) return n = "-" + b(e) + "-", r = i, !1
        }), l = n + "transform", g[c = n + "transition-property"] = g[h = n + "transition-duration"] = g[p = n + "transition-timing-function"] = g[d = n + "animation-name"] = g[v = n + "animation-duration"] = g[m = n + "animation-timing-function"] = "", e.fx = {
            off: r === t && a.style.transitionProperty === t,
            speeds: {
                _default: 400,
                fast: 200,
                slow: 600
            },
            cssPrefix: n,
            transitionEnd: w("TransitionEnd"),
            animationEnd: w("AnimationEnd")
        }, e.fn.animate = function(t, n, r, i) {
            return e.isPlainObject(n) && (r = n.easing, i = n.complete, n = n.duration), n && (n = (typeof n == "number" ? n : e.fx.speeds[n] || e.fx.speeds._default) / 1e3), this.anim(t, n, r, i)
        }, e.fn.anim = function(n, r, i, s) {
            var o, u = {},
                a, b = "",
                w = this,
                E, S = e.fx.transitionEnd;
            r === t && (r = .4), e.fx.off && (r = 0);
            if (typeof n == "string") u[d] = n, u[v] = r + "s", u[m] = i || "linear", S = e.fx.animationEnd;
            else {
                a = [];
                for (o in n) f.test(o) ? b += o + "(" + n[o] + ") " : (u[o] = n[o], a.push(y(o)));
                b && (u[l] = b, a.push(l)), r > 0 && typeof n == "object" && (u[c] = a.join(", "), u[h] = r + "s", u[p] = i || "linear")
            }
            return E = function(t) {
                if (typeof t != "undefined") {
                    if (t.target !== t.currentTarget) return;
                    e(t.target).unbind(S, E)
                }
                e(this).css(g), s && s.call(this)
            }, r > 0 && this.bind(S, E), this.size() && this.get(0).clientLeft, this.css(u), r <= 0 && setTimeout(function() {
                w.each(function() {
                    E.call(this)
                })
            }, 0), this
        }, a = null
    }(Zepto);
/**
 * #Simply Deferred
 * ###Simplified Deferred Library (jQuery API) for Node and the Browser
 * ####MIT Licensed.
 * Portions of this code are inspired and borrowed from [underscore.js](http://underscorejs.org/) (MIT License)
 * ####[Source (github)](http://github.com/sudhirj/simply-deferred) | [Documentation](https://github.com/sudhirj/simply-deferred#simply-deferred)
 * &copy; Sudhir Jonathan [sudhirjonathan.com](http://www.sudhirjonathan.com)
 */
! function() {
    var n, r, e, t, u, o, i, l, a, c, s, f, p, h, g = [].slice;
    u = "2.4.0", r = "pending", t = "resolved", e = "rejected", a = function(n, r) {
        return null != n ? n.hasOwnProperty(r) : void 0
    }, s = function(n) {
        return a(n, "length") && a(n, "callee")
    }, f = function(n) {
        return a(n, "promise") && "function" == typeof(null != n ? n.promise : void 0)
    }, l = function(n) {
        return s(n) ? l(Array.prototype.slice.call(n)) : Array.isArray(n) ? n.reduce(function(n, r) {
            return Array.isArray(r) ? n.concat(l(r)) : (n.push(r), n)
        }, []) : [n]
    }, o = function(n, r) {
        return 0 >= n ? r() : function() {
            return --n < 1 ? r.apply(this, arguments) : void 0
        }
    }, p = function(n, r) {
        return function() {
            var e;
            return e = [n].concat(Array.prototype.slice.call(arguments, 0)), r.apply(this, e)
        }
    }, i = function(n, r, e) {
        var t, u, o, i, a;
        for (i = l(n), a = [], u = 0, o = i.length; o > u; u++) t = i[u], a.push(t.call.apply(t, [e].concat(g.call(r))));
        return a
    }, n = function() {
        var u, o, a, c, s, p;
        return p = r, c = [], s = [], a = {}, this.promise = function(u) {
            var o, h;
            return u = u || {}, u.state = function() {
                return p
            }, h = function(n, e) {
                return function() {
                    return p === r && e.push.apply(e, l(arguments)), n() && i(arguments, a), u
                }
            }, u.done = h(function() {
                return p === t
            }, c), u.fail = h(function() {
                return p === e
            }, s), u.always = function() {
                var n;
                return (n = u.done.apply(u, arguments)).fail.apply(n, arguments)
            }, o = function(r, e) {
                var t, o;
                return o = new n, t = function(n, r, e) {
                    return e ? u[n](function() {
                        var n, t;
                        return n = 1 <= arguments.length ? g.call(arguments, 0) : [], t = e.apply(null, n), f(t) ? t.done(o.resolve).fail(o.reject) : o[r](t)
                    }) : u[n](o[r])
                }, t("done", "resolve", r), t("fail", "reject", e), o
            }, u.pipe = o, u.then = o, null == u.promise && (u.promise = function() {
                return u
            }), u
        }, this.promise(this), u = this, o = function(n, e, t) {
            return function() {
                return p === r ? (p = n, a = arguments, i(e, a, t), u) : this
            }
        }, this.resolve = o(t, c), this.reject = o(e, s), this.resolveWith = function(n, r) {
            return o(t, c, n).apply(null, r)
        }, this.rejectWith = function(n, r) {
            return o(e, s, n).apply(null, r)
        }, this
    }, h = function() {
        var r, e, t, u, i, a, c;
        if (e = l(arguments), 1 === e.length) return f(e[0]) ? e[0] : (new n).resolve(e[0]).promise();
        if (i = new n, !e.length) return i.resolve().promise();
        for (u = [], t = o(e.length, function() {
                return i.resolve.apply(i, u)
            }), e.forEach(function(n, r) {
                return f(n) ? n.done(function() {
                    var n;
                    return n = 1 <= arguments.length ? g.call(arguments, 0) : [], u[r] = n.length > 1 ? n : n[0], t()
                }) : (u[r] = n, t())
            }), a = 0, c = e.length; c > a; a++) r = e[a], f(r) && r.fail(i.reject);
        return i.promise()
    }, c = function(r) {
        return r.Deferred = function() {
            return new n
        }, r.ajax = p(r.ajax, function(r, e) {
            var t, u, o, i;
            return null == e && (e = {}), u = new n, t = function(n, r) {
                return p(n, function() {
                    var n, e;
                    return e = arguments[0], n = 2 <= arguments.length ? g.call(arguments, 1) : [], e && e.apply(null, n), r.apply(null, n)
                })
            }, e.success = t(e.success, u.resolve), e.error = t(e.error, u.reject), i = r(e), o = u.promise(), o.abort = function() {
                return i.abort()
            }, o
        }), r.when = h
    }, "undefined" != typeof exports ? (exports.Deferred = function() {
        return new n
    }, exports.when = h, exports.installInto = c) : "function" == typeof define && define.amd ? define(function() {
        return Zepto ? c(Zepto) : n
    }) : Zepto ? c(Zepto) : (this.Deferred = function() {
        return new n
    }, this.Deferred.when = h, this.Deferred.installInto = c)
}.call(this);
var Olv = Olv || {};
(function(a) {
    a.init || (a.init = !0, $(function() {
        cave.transition_end(), cave.toolbar_setMode(1), cave.toolbar_setWideButtonMessage(a.Locale.text("olv.portal.offline.post_form")), cave.toolbar_setVisible(!0), a.URL.popURL(), $(window).on("popstate", a.URL.popURL), a.Sound.setup()
    }), a.Router = function() {
        this.routes = [], this.guard = $.Deferred()
    }, $.extend(a.Router.prototype, {
        connect: function(a, b) {
            a instanceof RegExp || (a = new RegExp(a)), this.routes.push([a, b])
        },
        dispatch: function(a) {
            this.guard.resolve(a), this.guard = $.Deferred();
            for (var b, c = a.pathname + a.hash, d = 0; b = this.routes[d]; d++) {
                var e = c.match(b[0]);
                e && b[1].call(this, e, a, this.guard.promise())
            }
        }
    }), a.router = new a.Router, a.Locale = {
        Data: {},
        text: function() {
            var b = Array.prototype.slice.call(arguments);
            return b.splice(1, 0, -1), a.Locale.textN.apply(this, b)
        },
        textN: function(b, c) {
            c = +c || 0;
            var d = a.Locale.Data[b];
            if (!d) return b;
            var e, f, g = d.quanttype || "o",
                h = "1_o" === g && 1 === c || "01_o" === g && (0 === c || 1 === c);
            if (h ? (e = d.text_value_1 || d.value_1, f = d.text_args_1 || d.args_1) : (e = d.text_value || d.value, f = d.text_args || d.args), !f) return e;
            var i = Array.prototype.slice.call(arguments, 2),
                j = 0;
            return e.replace(/%s/g, function() {
                return i[f[j++] - 1]
            })
        }
    }, a.loc = a.Locale.text, a.loc_n = a.Locale.textN, a.URL = {
        pushURL: function(b) {
            $(document).trigger("olv:pagechange:start"), window.history.pushState(null, null, b), a.router.dispatch(location), setTimeout(function() {
                $(document).trigger("olv:pagechange:end"), $(document).trigger("olv:show:post_form")
            }, 500)
        },
        replaceContent: function(a) {
            cave.requestGc(), $(".main-content").each(function() {
                target = $(this), target.attr("id") === a ? target.removeClass("none") : target.addClass("none")
            }), cave.brw_scrollImmediately(0, 0)
        },
        popURL: function() {
            cave.lls_getItem("agree_olv") ? a.router.dispatch(location) : a.URL.pushURL("index.html#guide")
        }
    }, a.Loading = {
        locked_: !1,
        lock: function() {
            this.locked_ || (this.locked_ = !0, cave.transition_begin())
        },
        unlock: function() {
            this.locked_ && (cave.transition_end(), this.locked_ = !1)
        },
        isLocked: function() {
            return this.locked_
        },
        setup: function() {
            $(document).on("olv:pagechange:start", function() {
                a.Loading.lock()
            }), $(document).on("olv:pagechange:end", function() {
                a.Loading.unlock()
            })
        }
    }, a.Loading.setup(), a.alert = function(b, c, d) {
        a.Loading.isLocked() || (arguments.length <= 2 && (d = a.loc("olv.portal.n3ds.ok")), d = String.fromCharCode(57344) + " " + d, cave.dialog_oneButton(b, c, d))
    }, a.confirm = function(b, c, d, e) {
        if (!a.Loading.isLocked()) {
            arguments.length <= 2 && (d = a.loc("olv.portal.cancel"), e = a.loc("olv.portal.n3ds.ok")), e = String.fromCharCode(57344) + " " + e, d = String.fromCharCode(57345) + " " + d;
            var f = cave.dialog_twoButton(b, c, d, e);
            return 1 === f ? !0 : 0 === f ? !1 : null
        }
    }, a.deferredAlert = function() {
        var b = arguments,
            c = $.Deferred();
        return setTimeout(function() {
            a.alert.apply(null, b), c.resolve()
        }, 0), c.promise()
    }, a.deferredConfirm = function() {
        var b = arguments,
            c = $.Deferred();
        return setTimeout(function() {
            var d = a.confirm.apply(null, b);
            c.resolve(d)
        }, 0), c.promise()
    }, a.Browsing = {
        setup: function() {
            function b() {
                return a.PostStorage.getCount() >= 3 ? void a.alert(null, a.Locale.text("olv.portal.offline.post_form.alert")) : void a.URL.pushURL("index.html#post")
            }
            cave.toolbar_setCallback(8, b)
        }
    }, document.addEventListener("DOMContentLoaded", function() {
        a.Browsing.setup()
    }), a.EntryForm = a.EntryForm || {}, a.EntryForm.maxLocalStorageNum = 3, a.EntryForm.Widget = a.EntryForm.Widget || {}, a.EntryForm.Widget.registerEvent = function(b) {
        a.EntryForm.Widget.FeelingSelector.registerEvent(b), a.EntryForm.Widget.TextAreaWithMenu.registerEvent(b), a.EntryForm.Widget.Spoiler.registerEvent(b), a.EntryForm.Widget.ScreenShot.registerEvent(b), a.EntryForm.Widget.Button.registerEvent(b)
    }, a.EntryForm.Widget.initialize = function() {
        a.EntryForm.Widget.FeelingSelector.initialize(0), a.EntryForm.Widget.TextAreaWithMenu.initialize(!0, ""), a.EntryForm.Widget.Spoiler.initialize(!1), a.EntryForm.Widget.ScreenShot.initialize("null")
    }, a.EntryForm.Widget.ScreenShot = {
        dropdown: null,
        initialize: function(a) {
            var b = !1;
            if (cave.sap_exists())
                if (this.isScreenshotAvailable()) {
                    this.dropdown.$el.removeClass("disabled").css("display", "");
                    var c = this.dropdown.$menu.find(".upside");
                    c.css("display", "none");
                    var d = this.dropdown.$menu.find(".downside");
                    d.css("display", "none"), cave.capture_isEnabledEx(0) && (cave.lls_setCaptureImage("upside", 3), this.dropdown.$menu.find(".upside .capture-image").attr("src", cave.lls_getPath("upside")), c.css("display", "")), cave.capture_isEnabledEx(1) && (cave.lls_setCaptureImage("downside", 0), this.dropdown.$menu.find(".downside .capture-image").attr("src", cave.lls_getPath("downside")), d.css("display", "")), this.dropdown.$toggle.removeClass("forbidden-image-selector")
                } else this.dropdown.$el.addClass("disabled").css("display", ""), this.dropdown.$toggle.addClass("forbidden-image-selector"), b = !0;
            else this.dropdown.$el.addClass("disabled").css("display", "none");
            var e = $('input[name="screenshot_type"][value="' + a + '"]');
            if (e.trigger("olv:init:screenshot"), e.prop("checked", !0), b) {
                var f = this.dropdown.$toggle.find(".preview-image");
                f.attr("src", f.attr("data-forbidden-src"))
            }
        },
        isScreenshotAvailable: function() {
            return cave.sap_exists() && (cave.capture_isEnabledEx(0) || cave.capture_isEnabledEx(1)) && void 0 !== cave.sap_programId()
        },
        selectorUpdate: function(a) {
            var b = $(a.currentTarget),
                c = $.proxy(function(a) {
                    var b = $(".dropdown-toggle .preview-image");
                    b.attr("src", null !== a ? cave.lls_getPath(a) : b.attr("data-default-src"))
                }, this);
            switch (b.val()) {
                case "upside":
                    c("upside");
                    break;
                case "downside":
                    c("downside");
                    break;
                case "null":
                    c(null)
            }
        },
        onForbiddenImageSelectorClick: function(b) {
            b.preventDefault(), a.deferredAlert(null, a.loc("olv.portal.post.screenshot_forbidden.for_n3ds"))
        },
        overlaidElements: $(),
        onDropdownOpen: function() {
            var b = a.EntryForm.Widget.ScreenShot;
            b.overlaidElements = $("#bottom-menu input:enabled"), b.overlaidElements.prop("disabled", !0)
        },
        onDropdownClose: function() {
            var b = a.EntryForm.Widget.ScreenShot;
            b.overlaidElements.prop("disabled", !1), b.overlaidElements = $()
        },
        registerEvent: function(b) {
            this.dropdown = new a.Dropdown($(".dropdown"), b);
            var c = a.EntryForm.Widget.ScreenShot;
            $('input[name="screenshot_type"]').on("click olv:init:screenshot", c.selectorUpdate), $(document).on("click", ".forbidden-image-selector", c.onForbiddenImageSelectorClick), $(document).on("olv:dropdown:open", c.onDropdownOpen), $(document).on("olv:dropdown:close", c.onDropdownClose), b.done(function() {
                $('input[name="screenshot_type"]').off("click olv:init:screenshot", c.selectorUpdate), $(document).off("click", ".forbidden-image-selector", c.onForbiddenImageSelectorClick), $(document).off("olv:dropdown:open", c.onDropdownOpen), $(document).off("olv:dropdown:close", c.onDropdownClose)
            })
        }
    }, a.EntryForm.Widget.FeelingSelector = {
        initialize: function(a) {
            var b = $('input[type="radio"][name="feeling_id"][value="' + a + '"]');
            b.prop("checked", !0), b.trigger("olv:init:feeling")
        },
        registerEvent: function(b) {
            var c = $(".feeling-selector");
            c.on("click olv:init:feeling", "input", a.EntryForm.Widget.FeelingSelector.selectorUpdate), b.done(function() {
                c.off("click olv:init:feeling", "input", a.EntryForm.Widget.FeelingSelector.selectorUpdate)
            })
        },
        selectorUpdate: function(b) {
            a.Form.updateParentClass(b.target)
        }
    }, a.EntryForm.Widget.Spoiler = {
        initialize: function(a) {
            var b = $('input[type="checkbox"][name="is_spoiler"]');
            b.prop("checked", a), b.trigger("olv:init:spoiler")
        },
        registerEvent: function(b) {
            var c = $(".checkbox-button");
            c.on("click olv:init:spoiler", "input", a.EntryForm.Widget.Spoiler.checkboxUpdate), b.done(function() {
                c.off("click olv:init:spoiler", "input", a.EntryForm.Widget.Spoiler.checkboxUpdate)
            })
        },
        checkboxUpdate: function(b) {
            var c = b.target;
            a.Form.updateParentClass(c), c.checked ? $(c).attr("data-sound", "SE_OLV_CHECKBOX_CHECK") : $(c).attr("data-sound", "SE_OLV_CHECKBOX_UNCHECK")
        }
    }, a.EntryForm.Widget.TextAreaWithMenu = {
        initialize: function(a, b) {
            var c = $('input[name="body"],textarea[name="body"]');
            c.val(b), this.paintPreviewUpdate(), this.menuUpdate(a)
        },
        registerEvent: function(b) {
            var c = $('input[name="_post_type"]'),
                d = $('input[name="body"],textarea[name="body"]');
            c.on("click", a.EntryForm.Widget.TextAreaWithMenu.onMenuClicked), d.on("input", a.EntryForm.Widget.TextAreaWithMenu.textInput), $(document).on("olv:painting:start", a.EntryForm.Widget.TextAreaWithMenu.paint), $(".textarea-memo-preview").on("click", a.EntryForm.Widget.TextAreaWithMenu.paintTrigger), b.done(function() {
                c.off("click", a.EntryForm.Widget.TextAreaWithMenu.onMenuClicked), d.off("input", a.EntryForm.Widget.TextAreaWithMenu.textInput), $(document).off("olv:painting:start", a.EntryForm.Widget.TextAreaWithMenu.paint), $(".textarea-memo-preview").off("click", a.EntryForm.Widget.TextAreaWithMenu.paintTrigger)
            })
        },
        menuUpdate: function(a) {
            var b = $(".textarea-with-menu"),
                c = $('input[name="body"],textarea[name="body"]'),
                d = $('input[name="painting"]');
            b.toggleClass("active-text", a), b.toggleClass("active-memo", !a), c.prop("disabled", !a), d.prop("disabled", a), a && c.trigger("input")
        },
        onMenuClicked: function(b) {
            var c = $(".textarea-with-menu"),
                d = "body" === $(b.target).val();
            a.EntryForm.Widget.TextAreaWithMenu.menuUpdate(d), d ? a.EntryForm.Widget.TextAreaWithMenu.inputTextBody() : c.trigger("olv:painting:start")
        },
        paint: function() {
            setTimeout(function() {
                cave.memo_open(), a.EntryForm.Widget.TextAreaWithMenu.paintPreviewUpdate()
            }, 0)
        },
        paintTrigger: function() {
            $(".textarea-with-menu").trigger("olv:painting:start")
        },
        textInput: function() {
            var a = $(event.target),
                b = a.val(),
                c = $(".textarea-text-preview");
            c.text(b || a.attr("placeholder")), c.toggleClass("placeholder", !b), $('input[type="submit"]').prop("disabled", !b)
        },
        inputTextBody: function() {
            setTimeout(function() {
                var a = $('input[name="body"],textarea[name="body"]'),
                    b = cave.swkbd_callFullKeyboard(a.val(), +a.attr("maxlength") || 200, 0, !1, !0, !0);
                null != b && (a.val(b), a.trigger("input"))
            }, 0)
        },
        paintPreviewUpdate: function() {
            var a = $(".textarea-memo-preview");
            if (cave.memo_hasValidImage()) {
                var b = cave.memo_getImageBmp(),
                    c = "data:image/bmp;base64," + b;
                a.css("background-image", "url(" + c + ")")
            } else a.css("background-image", "");
            $('input[type="submit"]:disabled').prop("disabled", !cave.memo_hasValidImage())
        }
    }, a.EntryForm.Widget.Button = {
        registerEvent: function(b) {
            $(document).on("submit form", a.EntryForm.Widget.Button.onSubmit), $(".cancel-button").on("click", a.EntryForm.Widget.Button.onCancel), b.done(function() {
                $(document).off("submit form", a.EntryForm.Widget.Button.onSubmit), $(".cancel-button").off("click", a.EntryForm.Widget.Button.onCancel)
            })
        },
        onSubmit: function(b) {
            b.preventDefault();
            var c = $(b.target),
                d = c.find('input[type="radio"][name="feeling_id"]:checked').val(),
                e = c.find('input[type="checkbox"][name="is_spoiler"]').is(":checked"),
                f = c.find('input[name="body"]'),
                g = !f.prop("disabled"),
                h = null,
                i = c.find('input[type="radio"][name="screenshot_type"]:checked').val();
            return f && (h = f.val()), a.PostStorage.getCount() < a.EntryForm.maxLocalStorageNum ? (a.PostStorage.savePost({
                active: g,
                screenShotType: i,
                feeling: d,
                spoiler: e,
                text: h
            }), a.EntryForm.Widget.initialize(), void a.URL.pushURL("index.html")) : void a.deferredAlert(null, a.loc("olv.portal.offline.post_form.alert"))
        },
        onCancel: function() {
            cave.memo_hasValidImage() && cave.memo_clear(), a.EntryForm.Widget.initialize(), a.URL.pushURL("index.html")
        }
    }, a.Form = {
        updateParentClass: function(a) {
            switch (a.type) {
                case "radio":
                    var b;
                    if (a.form) {
                        var c = a.form.elements[a.name];
                        b = $(c.length ? Array.prototype.slice.call(c) : c)
                    } else b = $('input[name="' + a.name + '"]');
                    b.each(function() {
                        $(this).parent().toggleClass("checked", this.checked)
                    });
                    break;
                case "checkbox":
                    $(a).parent().toggleClass("checked", a.checked)
            }
        }
    }, a.Sound = {
        defaultActivationSound: "SE_OLV_OK",
        playActivationSound: function(a) {
            var b = a.attr("data-sound");
            "" !== b && this.playSound(b || this.defaultActivationSound)
        },
        playSound: function(a) {
            cave.snd_playSe(a)
        },
        activationTarget: null,
        onPreActivate: function(a) {
            for (var b = !1, c = a.target, d = document.body; c && c !== d; c = c.parentNode) {
                var e = c.nodeName.toLowerCase();
                if ("a" === e) {
                    b = !!c.href;
                    break
                }
                if ("input" === e) {
                    var f = c.type;
                    b = "text" !== f && "password" !== f && !c.disabled;
                    break
                }
                if ("button" === e) {
                    b = !c.disabled;
                    break
                }
                if ("textarea" === e || "select" === e) break;
                var g = " " + c.className + " ";
                if (g.indexOf(" trigger ") >= 0) {
                    b = g.indexOf(" disabled ") < 0;
                    break
                }
            }
            this.activationTarget = b ? c : null
        },
        playBGM: function() {
            var a = "BGM_CAVE_MAIN_OFFLINE";
            cave.snd_playBgm(a)
        },
        onActivate: function() {
            var a = this.activationTarget;
            this.activationTarget = null, a && this.playActivationSound($(a))
        },
        onScrollElement: function() {
            this.playSound("SE_WAVE_SCROLL_PAGE_LR")
        },
        onScrollDocument: function() {
            this.playSound("SE_WAVE_SCROLL_LIMIT_LR")
        },
        onDropdownOpen: function(a, b) {
            b.$toggle.attr("data-sound", "SE_OLV_BALLOON_OPEN")
        },
        onDropdownClose: function(a, b) {
            b.$toggle.attr("data-sound", "SE_OLV_BALLOON_CLOSE"), this.activationTarget || this.playSound("SE_OLV_BALLOON_CLOSE")
        },
        setup: function() {
            document.addEventListener("click", $.proxy(this.onPreActivate, this), !0), document.addEventListener("click", $.proxy(this.onActivate, this), !1), this.playBGM();
            var a = $(document);
            a.on("olv:keyhandler:scroll:element", $.proxy(this.onScrollElement, this)), a.on("olv:keyhandler:scroll:document", $.proxy(this.onScrollDocument, this)), a.on("olv:dropdown:open", $.proxy(this.onDropdownOpen, this)), a.on("olv:dropdown:close", $.proxy(this.onDropdownClose, this))
        }
    }, a.PostStorage = {
        getAll: function() {
            for (var a = {}, b = cave.lls_getCount(), c = new RegExp("^[0-9]+$"), d = 0, e = 0; b > e; e++) {
                var f = cave.lls_getKeyAt(e);
                c.test(f) && (a[f] = cave.lls_getItem(f), d += 1)
            }
            return [a, d]
        },
        getCount: function() {
            return a.PostStorage.getAll()[1]
        },
        setItem: function(a, b) {
            b || (b = String(cave.getLocalTimeSeconds())), cave.lls_setItem(b, a)
        },
        removeItem: function(a) {
            var b = JSON.parse(cave.lls_getItem(a));
            b && b.screenShotKey && cave.lls_removeItem(b.screenShotKey), b && b.thumnailKey && cave.lls_removeItem(b.thumnailKey), cave.lls_removeItem(a)
        },
        savePost: function(b) {
            var c = String(cave.getLocalTimeSeconds()),
                d = void 0;
            b.active || (d = cave.memo_getImageBmp(), b.text = null);
            var e, f = void 0;
            "null" !== b.screenShotType && (e = c + "screenShot", f = cave.sap_programId(), void 0 !== f && ("upside" === b.screenShotType ? cave.lls_setCaptureImage(e, 3) : cave.lls_setCaptureImage(e, 0))), a.PostStorage.setItem(JSON.stringify({
                feeling: b.feeling,
                spoiler: b.spoiler,
                text: b.text,
                titleID: f,
                screenShotKey: e,
                paint: d
            }), c), cave.memo_clear()
        },
        hasKey: function(a) {
            for (var b = cave.lls_getCount(), c = 0; b > c; c++) {
                var d = cave.lls_getKeyAt(c);
                if (a === d) return !0
            }
            return !1
        },
        sweep: function() {
            var b = a.PostStorage.getAll(),
                c = b[0],
                d = b[1];
            if (d > 0)
                for (var e in c) {
                    var f = JSON.parse(cave.lls_getItem(e)),
                        g = f.screenShotKey;
                    g && !a.PostStorage.hasKey(g) && cave.lls_removeItem(e)
                }
        }
    }, a.Dropdown = function(b, c) {
        this.$el = $(b), this.$toggle = this.$el.find(".dropdown-toggle").first(), this.$menu = this.$el.find(".dropdown-menu").first(), this.isOpen = this.$el.hasClass("open"), this.eventNS = ".olv-dropdown-" + ++a.Dropdown.nsSeed, this.$toggle.on("click" + this.eventNS, $.proxy(this.onToggleClick, this)), c.done($.proxy(function() {
            this.close(), this.$toggle.off(this.eventNS)
        }, this))
    }, a.Dropdown.nsSeed = 0, $.extend(a.Dropdown.prototype, {
        open: function() {
            if (!this.isOpen) {
                this.isOpen = !0, this.$el.addClass("open"), this.$el.trigger("olv:dropdown:open", [this]);
                var a = "click" + this.eventNS,
                    b = $.proxy(this.onBodyClick, this);
                setTimeout(function() {
                    $(document.body).on(a, b)
                })
            }
        },
        close: function() {
            this.isOpen && (this.isOpen = !1, this.$el.removeClass("open"), this.$el.trigger("olv:dropdown:close", [this]), $(document.body).off(this.eventNS))
        },
        isClosableElement: function(a) {
            for (var b = this.$menu[0]; a && a !== b; a = a.parentNode) {
                var c = a.nodeName.toLowerCase();
                if ("input" === c || "button" === c || "a" === c) return !0
            }
            return !1
        },
        onToggleClick: function(a) {
            a.preventDefault(), this.$el.hasClass("disabled") || this.isOpen || this.open()
        },
        onBodyClick: function(a) {
            var b = a.target,
                c = this.$menu[0];
            (c !== b && !$.contains(c, b) || this.isClosableElement(b)) && this.close()
        }
    }), a.ListView = a.ListView || {}, a.ListView.Widget = a.ListView.Widget || {}, a.ListView.initialize = function(b) {
        a.ListView.Post.initialize(), a.ListView.Widget.DeleteButton.registerEvent(b), a.ListView.Widget.KeyHandler.registerEvent(b), a.ListView.Widget.KeyHandler.initialize()
    }, a.ListView.Post = {
        initialize: function() {
            a.PostStorage.sweep();
            var b = a.PostStorage.getAll(),
                c = b[0],
                d = b[1];
            if (d > 0) {
                $(".no-content-window").addClass("none");
                for (var e = 0, f = this.sortPostKeys(c), g = 0; g < f.length; g++) {
                    var h = f[g];
                    this.view(c[h], h, e), e += 1
                }
                for (var g = e; g < a.EntryForm.maxLocalStorageNum; g++) a.ListView.Widget.DeleteButton.clearContent($("#post-" + g))
            } else $(".no-content-window").removeClass("none")
        },
        sortPostKeys: function(a) {
            var b = [];
            for (var c in a) b.push(c);
            return b.sort(function(a, b) {
                return b - a
            }), b
        },
        view: function(b, c, d) {
            var e = JSON.parse(b),
                f = $("#post-" + d);
            f.find(".user-name").text(cave.mii_getName());
            var g = cave.convertTimeToString(Number(c)),
                h = g.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})\s([0-9]{2}):([0-9]{2}):([0-9]{2})/),
                i = a.loc("olv.datetime"),
                j = h[1],
                k = h[2],
                l = h[3],
                m = h[4],
                n = +m,
                o = h[5],
                p = i.match(/M/g);
            1 === p.length && (k = this.toOneDigits(k));
            var q = i.match(/d/g);
            1 === q.length && (l = this.toOneDigits(l));
            var r = i.match(/m/g);
            1 === r.length && (l = this.toOneDigits(o));
            var s = "";
            if (/a/.test(i)) {
                12 > n ? s = " AM" : (s = " PM", n -= 12);
                var t = i.match(/h/g);
                console.log(t), m = 1 === t.length ? this.toOneDigits(n) : this.toTwoDigits(n)
            } else {
                var u = i.match(/H/g);
                1 === u.length && (m = this.toOneDigits(m))
            }
            f.find(".timestamp-container .timestamp").text(a.loc("olv.datetime.n3ds.date", j, k, l) + " " + m + ":" + o + s), f.find(".user-icon").attr("src", cave.mii_getIconBase64(Number(e.feeling)));
            var v = f.find(".screenshot-container");
            if (v.toggleClass("none", !e.screenShotKey), e.screenShotKey) {
                var w = cave.lls_getPath(e.screenShotKey),
                    x = w;
                e.thumnailKey && (x = cave.lls_getPath(e.thumnailKey)), v.find("img").attr("src", x), v.find("a").attr("href", w)
            }
            var y = f.find(".spoiler");
            y.toggleClass("none", !e.spoiler);
            var z = f.find(".post-content"),
                A = z.find(".post-content-text"),
                B = z.find(".post-content-memo");
            if (void 0 !== e.text && null !== e.text) A.text(e.text), A.removeClass("none"), B.addClass("none");
            else {
                var C = "data:image/bmp;base64," + e.paint;
                B.find("img").attr("src", C), B.removeClass("none"), A.addClass("none")
            }
            f.attr("data-ls-key", c), f.removeClass("none")
        },
        toOneDigits: function(a) {
            if (a += "", 2 === a.length) {
                var b = a.match(/^([0-9])([0-9])$/);
                if (b[0] && "0" === b[1]) return b[2]
            }
            return a
        },
        toTwoDigits: function(a) {
            return a += "", 1 === a.length ? "0" + a : a
        }
    }, a.ListView.Widget.DeleteButton = {
        registerEvent: function(b) {
            var c = $(".delete-button");
            c.on("click", a.ListView.Widget.DeleteButton.onDelete), b.done(function() {
                c.off("click", a.ListView.Widget.DeleteButton.onDelete)
            })
        },
        onDelete: function(b) {
            a.deferredConfirm(null, a.loc("olv.portal.offline.post.delete")).done(function(c) {
                if (c) {
                    var d = $(b.target).closest(".post"),
                        e = d.attr("data-ls-key");
                    a.PostStorage.removeItem(e), a.ListView.Widget.DeleteButton.clearContent(d), 0 === a.PostStorage.getCount() && $(".no-content-window").removeClass("none")
                }
            })
        },
        clearContent: function(a) {
            a.addClass("none")
        }
    }, a.ListView.Widget.KeyHandler = {
        initialize: function() {
            this.offset = 224, this.lastScrollTop = 0
        },
        registerEvent: function(b) {
            $(document).on("keydown", a.ListView.Widget.KeyHandler.onKeyDown), b.done(function() {
                $(document).off("keydown", a.ListView.Widget.KeyHandler.onKeyDown)
            })
        },
        onKeyDown: function(b) {
            82 === b.which ? a.ListView.Widget.KeyHandler.scrollToNearestElement(!1) : 76 === b.which && a.ListView.Widget.KeyHandler.scrollToNearestElement(!0)
        },
        scrollToNearestElement: function(a) {
            var b = $(".scroll:not(.none)"),
                c = null,
                d = this,
                e = cave.brw_getScrollTopY(),
                f = document.body.scrollHeight;
            460 >= f - e && f - this.lastScrollTop <= 460 && (e = this.lastScrollTop), b.each(function() {
                var b = $(this).offset().top,
                    f = b - (e + d.offset);
                if (a) {
                    if (f >= 0) return !1;
                    c = $(this)
                } else if (f > 0) return c = $(this), !1
            });
            var g;
            return c ? (g = c.offset().top - d.offset, c.trigger("olv:keyhandler:scroll:element")) : (g = a ? 0 : f, $(document).trigger("olv:keyhandler:scroll:document")), window.scrollTo(0, g), this.lastScrollTop = g, c
        }
    }, a.Guide = a.Guide || {}, a.Guide.Button = function(a) {
        function b() {
            cave.exitApp()
        }
        var c = $(".tutorial-close-button");
        c.on("click", b), a.done(function() {
            c.off("click", b)
        })
    }, a.router.connect("/html/[a-z0-9-]+/index.html#post$", function(b, c, d) {
        a.URL.replaceContent("form-content"), a.EntryForm.Widget.registerEvent(d), a.EntryForm.Widget.initialize(), cave.toolbar_setVisible(!1), cave.home_setEnabled(0)
    }), a.router.connect("/html/[a-z0-9-]+/index.html$", function(b, c, d) {
        a.URL.replaceContent("list-content"), a.ListView.initialize(d), cave.toolbar_setVisible(!0), cave.home_setEnabled(1)
    }), a.router.connect("/html/[a-z0-9-]+/index.html#guide$", function(b, c, d) {
        a.URL.replaceContent("guide-content"), a.Guide.Button(d), cave.toolbar_setVisible(!1), cave.home_setEnabled(1)
    }))
}).call(this, Olv);
Olv.Locale.Data = {
    "olv.datetime": {
        "value": "MM/dd/yyyy h:mm a"
    },
    "olv.datetime.n3ds.date": {
        "args": [2, 3, 1],
        "value": "%s/%s/%s"
    },
    "olv.datetime.n3ds.date %1%2%3": {
        "args": [2, 3, 1],
        "value": "%s/%s/%s"
    },
    "olv.datetime.n3ds.date [_1][_2][_3]": {
        "args": [2, 3, 1],
        "value": "%s/%s/%s"
    },
    "olv.portal.cancel": {
        "value": "Cancel"
    },
    "olv.portal.n3ds.ok": {
        "value": "OK"
    },
    "olv.portal.offline.post.delete": {
        "value": "Do you want to delete this post?"
    },
    "olv.portal.offline.post_form": {
        "value": "Create Post"
    },
    "olv.portal.offline.post_form.alert": {
        "value": "You cannot save any additional posts. Please delete a previously saved post before starting a new one."
    },
    "olv.portal.ok": {
        "value": "OK"
    },
    "olv.portal.post.screenshot_forbidden": {
        "value": "This screenshot cannot be attached."
    },
    "olv.portal.post.screenshot_forbidden.for_n3ds": {
        "value": "This screenshot cannot be attached."
    }
};