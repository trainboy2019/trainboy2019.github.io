(function(a) {
    function b(a, b) {
        this.setNotifyMethod(a);
        this.setNotifyContext(b)
    }
    function c(a, b, c) {
        this.name = a;
        this.body = b;
        this.type = c
    }
    function d() {}
    function e() {}
    function f() {
        this.subCommands = [];
        this.initializeMacroCommand()
    }
    function h(a, b) {
        this.mediatorName = a || this.constructor.NAME;
        this.viewComponent = b
    }
    function k(a, b) {
        this.proxyName = a || this.constructor.NAME;
        null != b && this.setData(b)
    }
    function g(a) {
        if (null != g.instanceMap[a])
            throw Error(g.MULTITON_MSG);
        this.initializeNotifier(a);
        g.instanceMap[a] = this;
        this.initializeFacade()
    }
    function l(a) {
        if (null != l.instanceMap[a])
            throw Error(l.MULTITON_MSG);
        this.multitonKey = a;
        l.instanceMap[this.multitonKey] = this;
        this.mediatorMap = [];
        this.observerMap = [];
        this.initializeView()
    }
    function n(a) {
        if (n.instanceMap[a])
            throw Error(n.MULTITON_MSG);
        this.multitonKey = a;
        n.instanceMap[a] = this;
        this.proxyMap = [];
        this.initializeModel()
    }
    function m(a) {
        if (null != m.instanceMap[a])
            throw Error(m.MULTITON_MSG);
        this.multitonKey = a;
        m.instanceMap[this.multitonKey] = this;
        this.commandMap = [];
        this.initializeController()
    }
    function p(a, b, c) {
        a = a.split(".");
        c = c || q.global;
        for (var d, e, f = 0, g = a.length; f < g; f++)
            d = c, e = a[f], c = null == c[e] ? c[e] = {} : c[e];
        return null == b ? c : d[e] = b
    }
    null == a && (a = window);
    if (!a.puremvc) {
        b.prototype.setNotifyMethod = function(a) {
            this.notify = a
        };
        b.prototype.setNotifyContext = function(a) {
            this.context = a
        };
        b.prototype.getNotifyMethod = function() {
            return this.notify
        };
        b.prototype.getNotifyContext = function() {
            return this.context
        };
        b.prototype.notifyObserver = function(a) {
            this.getNotifyMethod().call(this.getNotifyContext(),
            a)
        };
        b.prototype.compareNotifyContext = function(a) {
            return a === this.context
        };
        b.prototype.notify = null;
        b.prototype.context = null;
        c.prototype.getName = function() {
            return this.name
        };
        c.prototype.setBody = function(a) {
            this.body = a
        };
        c.prototype.getBody = function() {
            return this.body
        };
        c.prototype.setType = function(a) {
            this.type = a
        };
        c.prototype.getType = function() {
            return this.type
        };
        c.prototype.toString = function() {
            var a = "Notification Name: " + this.getName(), a = a + ("\nBody:" + (null == this.body ? "null" : this.body.toString()));
            return a +
            ("\nType:" + (null == this.type ? "null" : this.type))
        };
        c.prototype.name = null;
        c.prototype.type = null;
        c.prototype.body = null;
        d.prototype.sendNotification = function(a, b, c) {
            var d = this.getFacade();
            d && d.sendNotification(a, b, c)
        };
        d.prototype.initializeNotifier = function(a) {
            this.multitonKey = "" + a;
            this.facade = this.getFacade()
        };
        d.prototype.getFacade = function() {
            if (null == this.multitonKey)
                throw Error(d.MULTITON_MSG);
            return g.getInstance(this.multitonKey)
        };
        d.prototype.multitonKey = null;
        d.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
        e.prototype = new d;
        e.prototype.constructor = e;
        e.prototype.execute = function() {};
        f.prototype = new d;
        f.prototype.constructor = f;
        f.prototype.subCommands = null;
        f.prototype.initializeMacroCommand = function() {};
        f.prototype.addSubCommand = function(a) {
            this.subCommands.push(a)
        };
        f.prototype.execute = function(a) {
            for (; 0 < this.subCommands.length;) {
                var b = new (this.subCommands.shift());
                b.initializeNotifier(this.multitonKey);
                b.execute(a)
            }
        };
        h.NAME = "Mediator";
        h.prototype = new d;
        h.prototype.constructor = h;
        h.prototype.getMediatorName =
        function() {
            return this.mediatorName
        };
        h.prototype.setViewComponent = function(a) {
            this.viewComponent = a
        };
        h.prototype.getViewComponent = function() {
            return this.viewComponent
        };
        h.prototype.listNotificationInterests = function() {
            return []
        };
        h.prototype.handleNotification = function() {};
        h.prototype.onRegister = function() {};
        h.prototype.onRemove = function() {};
        h.prototype.mediatorName = null;
        h.prototype.viewComponent = null;
        k.NAME = "Proxy";
        k.prototype = new d;
        k.prototype.constructor = k;
        k.prototype.getProxyName = function() {
            return this.proxyName
        };
        k.prototype.setData = function(a) {
            this.data = a
        };
        k.prototype.getData = function() {
            return this.data
        };
        k.prototype.onRegister = function() {};
        k.prototype.onRemove = function() {};
        k.prototype.proxyName = null;
        k.prototype.data = null;
        g.prototype.initializeFacade = function() {
            this.initializeModel();
            this.initializeController();
            this.initializeView()
        };
        g.getInstance = function(a) {
            if (null == a)
                return null;
            null == g.instanceMap[a] && (g.instanceMap[a] = new g(a));
            return g.instanceMap[a]
        };
        g.prototype.initializeController = function() {
            null ==
            this.controller && (this.controller = m.getInstance(this.multitonKey))
        };
        g.prototype.initializeModel = function() {
            null == this.model && (this.model = n.getInstance(this.multitonKey))
        };
        g.prototype.initializeView = function() {
            null == this.view && (this.view = l.getInstance(this.multitonKey))
        };
        g.prototype.registerCommand = function(a, b) {
            this.controller.registerCommand(a, b)
        };
        g.prototype.removeCommand = function(a) {
            this.controller.removeCommand(a)
        };
        g.prototype.hasCommand = function(a) {
            return this.controller.hasCommand(a)
        };
        g.prototype.registerProxy =
        function(a) {
            this.model.registerProxy(a)
        };
        g.prototype.retrieveProxy = function(a) {
            return this.model.retrieveProxy(a)
        };
        g.prototype.removeProxy = function(a) {
            var b = null;
            null != this.model && (b = this.model.removeProxy(a));
            return b
        };
        g.prototype.hasProxy = function(a) {
            return this.model.hasProxy(a)
        };
        g.prototype.registerMediator = function(a) {
            null != this.view && this.view.registerMediator(a)
        };
        g.prototype.retrieveMediator = function(a) {
            return this.view.retrieveMediator(a)
        };
        g.prototype.removeMediator = function(a) {
            var b = null;
            null != this.view && (b = this.view.removeMediator(a));
            return b
        };
        g.prototype.hasMediator = function(a) {
            return this.view.hasMediator(a)
        };
        g.prototype.sendNotification = function(a, b, d) {
            this.notifyObservers(new c(a, b, d))
        };
        g.prototype.notifyObservers = function(a) {
            null != this.view && this.view.notifyObservers(a)
        };
        g.prototype.initializeNotifier = function(a) {
            this.multitonKey = a
        };
        g.hasCore = function(a) {
            return null != g.instanceMap[a]
        };
        g.removeCore = function(a) {
            null != g.instanceMap[a] && (n.removeModel(a), l.removeView(a), m.removeController(a),
            delete g.instanceMap[a])
        };
        g.prototype.controller = null;
        g.prototype.model = null;
        g.prototype.view = null;
        g.prototype.multitonKey = null;
        g.instanceMap = [];
        g.MULTITON_MSG = "Facade instance for this Multiton key already constructed!";
        l.prototype.initializeView = function() {};
        l.getInstance = function(a) {
            if (null == a)
                return null;
            null == l.instanceMap[a] && (l.instanceMap[a] = new l(a));
            return l.instanceMap[a]
        };
        l.prototype.registerObserver = function(a, b) {
            null != this.observerMap[a] ? this.observerMap[a].push(b) : this.observerMap[a] =
            [b]
        };
        l.prototype.notifyObservers = function(a) {
            if (null != this.observerMap[a.getName()]) {
                for (var b = this.observerMap[a.getName()], c = [], d, e = 0; e < b.length; e++)
                    d = b[e], c.push(d);
                for (e = 0; e < c.length; e++)
                    d = c[e], d.notifyObserver(a)
            }
        };
        l.prototype.removeObserver = function(a, b) {
            for (var c = this.observerMap[a], d = 0; d < c.length; d++)
                if (!0 == c[d].compareNotifyContext(b)) {
                    c.splice(d, 1);
                    break
                }
            0 == c.length && delete this.observerMap[a]
        };
        l.prototype.registerMediator = function(a) {
            if (null == this.mediatorMap[a.getMediatorName()]) {
                a.initializeNotifier(this.multitonKey);
                this.mediatorMap[a.getMediatorName()] = a;
                var c = a.listNotificationInterests();
                if (0 < c.length)
                    for (var d = new b(a.handleNotification, a), e = 0; e < c.length; e++)
                        this.registerObserver(c[e], d);
                a.onRegister()
            }
        };
        l.prototype.retrieveMediator = function(a) {
            return this.mediatorMap[a]
        };
        l.prototype.removeMediator = function(a) {
            var b = this.mediatorMap[a];
            if (b) {
                for (var c = b.listNotificationInterests(), d = 0; d < c.length; d++)
                    this.removeObserver(c[d], b);
                delete this.mediatorMap[a];
                b.onRemove()
            }
            return b
        };
        l.prototype.hasMediator = function(a) {
            return null !=
            this.mediatorMap[a]
        };
        l.removeView = function(a) {
            delete l.instanceMap[a]
        };
        l.prototype.mediatorMap = null;
        l.prototype.observerMap = null;
        l.instanceMap = [];
        l.prototype.multitonKey = null;
        l.MULTITON_MSG = "View instance for this Multiton key already constructed!";
        n.prototype.initializeModel = function() {};
        n.getInstance = function(a) {
            if (null == a)
                return null;
            null == n.instanceMap[a] && (n.instanceMap[a] = new n(a));
            return n.instanceMap[a]
        };
        n.prototype.registerProxy = function(a) {
            a.initializeNotifier(this.multitonKey);
            this.proxyMap[a.getProxyName()] =
            a;
            a.onRegister()
        };
        n.prototype.retrieveProxy = function(a) {
            return this.proxyMap[a]
        };
        n.prototype.hasProxy = function(a) {
            return null != this.proxyMap[a]
        };
        n.prototype.removeProxy = function(a) {
            var b = this.proxyMap[a];
            b && (this.proxyMap[a] = null, b.onRemove());
            return b
        };
        n.removeModel = function(a) {
            delete n.instanceMap[a]
        };
        n.prototype.proxyMap = null;
        n.instanceMap = [];
        n.MULTITON_MSG = "Model instance for this Multiton key already constructed!";
        m.prototype.initializeController = function() {
            this.view = l.getInstance(this.multitonKey)
        };
        m.getInstance = function(a) {
            if (null == a)
                return null;
            null == this.instanceMap[a] && (this.instanceMap[a] = new this (a));
            return this.instanceMap[a]
        };
        m.prototype.executeCommand = function(a) {
            var b = this.commandMap[a.getName()];
            null != b && (b = new b, b.initializeNotifier(this.multitonKey), b.execute(a))
        };
        m.prototype.registerCommand = function(a, c) {
            null == this.commandMap[a] && this.view.registerObserver(a, new b(this.executeCommand, this));
            this.commandMap[a] = c
        };
        m.prototype.hasCommand = function(a) {
            return null != this.commandMap[a]
        };
        m.prototype.removeCommand = function(a) {
            this.hasCommand(a) && (this.view.removeObserver(a, this), this.commandMap[a] = null)
        };
        m.removeController = function(a) {
            delete this.instanceMap[a]
        };
        m.prototype.view = null;
        m.prototype.commandMap = null;
        m.prototype.multitonKey = null;
        m.instanceMap = [];
        m.MULTITON_MSG = "controller key for this Multiton key already constructed";
        var q = {
            global: function() {
                return this
            }(),
            extend: function(a, b) {
                if ("function" !== typeof a)
                    throw new TypeError("#extend- child should be Function");
                if ("function" !==
                typeof b)
                    throw new TypeError("#extend- parent should be Function");
                if (b !== a) {
                    var c = new Function;
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    return a.prototype.constructor = a
                }
            },
            decorate: function(a, b) {
                for (var c in b)
                    a[c] = b[c];
                return a
            }
        };
        a.puremvc = {
            View: l,
            Model: n,
            Controller: m,
            SimpleCommand: e,
            MacroCommand: f,
            Facade: g,
            Mediator: h,
            Observer: b,
            Notification: c,
            Notifier: d,
            Proxy: k,
            define: function(a, b, c) {
                a || (a = {});
                var d = a.name, e = a.parent, f = "function" === typeof e, g = a.scope || null;
                if ("parent"in a&&!f)
                    throw new TypeError("Class parent must be Function");
                if (a.hasOwnProperty("constructor")) {
                    if (a = a.constructor, "function" !== typeof a)
                        throw new TypeError("Class constructor must be Function");
                } else 
                    a = f ? function() {
                        e.apply(this, arguments)
                    } : new Function;
                f && q.extend(a, e);
                b && (f = a.prototype, q.decorate(f, b), f.constructor = a);
                c && q.decorate(a, c);
                if (d) {
                    if ("string" !== typeof d)
                        throw new TypeError("Class name must be primitive string");
                    p(d, a, g)
                }
                return a
            },
            declare: p
        }
    }
})(this);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
        return d * (b/=e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
        return - d * (b/=e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
        return 1 > (b/=e / 2) ? d / 2 * b * b + c : - d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
        return d * (b/=e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
        return 1 > (b/=e / 2) ? d / 2 * b * b * b + c :
        d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
        return d * (b/=e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
        return - d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
        return 1 > (b/=e / 2) ? d / 2 * b * b * b * b + c : - d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
        return d * (b/=e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
        return 1 > (b/=e / 2) ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
        return - d * Math.cos(b /
        e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
        return - d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
        return b == e ? c + d : d * ( - Math.pow(2, - 10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : 1 > (b/=e / 2) ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * ( - Math.pow(2, - 10*--b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
        return - d * (Math.sqrt(1 - (b/=e) *
        b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
        return 1 > (b/=e / 2)?-d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
        a = 1.70158;
        var f = 0, h = d;
        if (0 == b)
            return c;
        if (1 == (b/=e))
            return c + d;
        f || (f = 0.3 * e);
        h < Math.abs(d) ? (h = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / h);
        return - (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - a) * 2 * Math.PI / f)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
        a = 1.70158;
        var f = 0, h = d;
        if (0 == b)
            return c;
        if (1 ==
        (b/=e))
            return c + d;
        f || (f = 0.3 * e);
        h < Math.abs(d) ? (h = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, - 10 * b) * Math.sin((b * e - a) * 2 * Math.PI / f) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
        a = 1.70158;
        var f = 0, h = d;
        if (0 == b)
            return c;
        if (2 == (b/=e / 2))
            return c + d;
        f || (f = e * 0.3 * 1.5);
        h < Math.abs(d) ? (h = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b?-0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - a) * 2 * Math.PI / f) + c : 0.5 * h * Math.pow(2, - 10 * (b -= 1)) * Math.sin((b * e - a) * 2 * Math.PI / f) + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
        void 0 ==
        f && (f = 1.70158);
        return d * (b/=e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
        void 0 == f && (f = 1.70158);
        return d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (b/=e / 2) ? d / 2 * b * b * (((f*=1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f*=1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
        return (b/=e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c : b < 2.5 / 2.75 ?
        d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
        return b < e / 2 ? 0.5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : 0.5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + 0.5 * d + c
    }
});
function Class() {}
Class.extend = function(a) {
    function b() {
        !initializing && this.init && this.init.apply(this, arguments)
    }
    initializing=!0;
    var c = new this;
    initializing=!1;
    var d = this.prototype, e;
    for (e in a)
        c[e] = "function" == typeof a[e] && "function" == typeof d[e] && fnTest.test(a[e]) ? function(a, b) {
            return function() {
                var c = this._super;
                this._super = d[a];
                var e = b.apply(this, arguments);
                this._super = c;
                return e
            }
        }(e, a[e]) : a[e];
    b.prototype = c;
    b.prototype.constructor = b;
    b.extend = arguments.callee;
    return b
};
$.fn.isVisible = function() {
    return "visible" === this.css("visibility")
};
$.fn.visible = function() {
    return this.each(function() {
        $(this).css("visibility", "visible")
    })
};
$.fn.setVisible = function(a) {
    return this.each(function() {
        $(this).css("visibility", a ? "visible" : "hidden")
    })
};
$.fn.notVisible = function() {
    return this.each(function() {
        $(this).css("visibility", "hidden")
    })
};
$.fn.stopTranslation = function() {
    clearInterval(this.animationTimer)
};
$.fn.animateOpacity = function(a) {
    var b = a.duration || 0.2, c = a.delay || 0;
    this.css("z-index", a["z-index"]);
    void 0 != PSAppConstants.WEBKIT_TRANSITION_PROPERTY ? (this.css(PSAppConstants.WEBKIT_TRANSITION_PROPERTY, "opacity " + b + "s " + (a.ease || "ease") + " " + c + "s"), this.css("opacity", a.opacity)) : $(this).animate({
        opacity: a.opacity
    }, {
        duration: 1E3 * b,
        queue: !1
    })
};
$.fn.animateTranslation = function(a, b) {
    var c =- 1, d = $(this).position(), e = b.startX || d.left, f = d.top, h = void 0 != b.left ? b.left : e, k = void 0 != b.top ? b.top : f, g = 1E3 / 30, d = b.delay || 0;
    a/=g;
    var l = $.easing[b.ease || "swing"], n = 0, m = this, p = function() {
        c++;
        c >= a && (c = a, clearInterval(m.animationTimer));
        n = l(1, c, 0, 1, a);
        var d = e + (h - e) * n, g = f + (k - f) * n;
        void 0 != PSAppConstants.WEBKIT_TRANSFORM_PROPERTY ? m.css(PSAppConstants.WEBKIT_TRANSFORM_PROPERTY, "translate3D(" + d + "px," + g + "px,0px)") : m.css("left", d + "px").css("top", g + "px");
        c >= a && (!1 !=
        b.removeTranslation && (m.css(WEBKIT_TRANSFORM_PROPERTY, ""), m.css("left", h + "px"), m.css("top", k + "px")), b.complete && b.complete.call(b.calleeContext || m, b.completeParams || []))
    };
    this.css("left", "0px");
    this.css("top", "0px");
    p();
    clearInterval(this.animationTimer);
    clearTimeout(this.animationDelay);
    0 < d ? this.animationDelay = setTimeout(function() {
        p();
        m.animationTimer = setInterval(p, g)
    }, d) : this.animationTimer = setInterval(p, g)
};
$.support.cssProperty = function() {
    return function(a, b, c) {
        var d = (document.body || document.documentElement).style;
        if ("undefined" == typeof d)
            return !1;
        if ("string" == typeof d[a])
            return b ? a : !0;
        v = ["Moz", "Webkit", "Khtml", "Icab"];
        a = a.charAt(0).toUpperCase() + a.substr(1);
        c && v.push("ms", "O");
        for (c = 0; c < v.length; c++)
            if ("string" == typeof d[v[c] + a])
                return b ? v[c] + a : !0
    }
}();
var PSAppConstants = {
    STARTUP: "startup",
    CONFIG_INITIALIZED: "configInit",
    GALLERY_ITEM_CHANGED: "gic",
    GALLERY_INITIALIZED: "gi",
    GALLERY_LENGTH_CHANGED: "glc",
    PARAM_UPDATE: "pu",
    RESIZE: "resize",
    FULLSCREEN_CHANGE: "fullscreenChange",
    WEBKIT_TRANSFORM_PROPERTY: $.support.cssProperty("transform", !0),
    WEBKIT_TRANSITION_PROPERTY: $.support.cssProperty("transition", !0),
    IS_MOBILE_DEVICE: !1,
    FADE_DURATION: 200
};
puremvc.define({
    name: "pstemplate.utils.Stretcher",
    parent: window.Class
}, {}, {
    stretch: function(a, b, c, d, e, f, h) {
        void 0 === h && (h=!1);
        h || (b = Math.min(b, d), c = Math.min(c, e));
        b/=d;
        h = c / e;
        var k = d, g = e;
        switch (f) {
        case "scale":
            b > h ? (k*=h, g*=h) : (k*=b, g*=b);
            break;
        case "scaleCrop":
            b > h ? (k*=b, g*=b) : (k*=h, g*=h);
            k = Math.round(k);
            g = Math.round(g);
            break;
        case "scaleHeight":
            g = c;
            k = Math.round(h * d);
            g = Math.round(g);
            break;
        default:
            k = d, g = e
        }
        a.css({
            width: k + "px",
            height: g + "px"
        })
    }
});
puremvc.define({
    name: "TextUtils",
    parent: window.Class
}, {}, {
    processText: function(a) {
        var b = /"[^"]+":(http:\/\/|www\.)[^ \n\r\t^]+\.[^ \n\r\t^]+/, c = /(http:\/\/|www\.)[^ \n\r\t^]+\.[^ \n\r\t^]+/;
        a = a.replace(/&quot;/g, '"');
        a = a.replace(/\r/g, "");
        var d, e, f, h, k, g, l;
        g = null;
        l = "";
        for (h = 0; c.test(a);) {
            f = b.exec(a);
            e = c.exec(a);
            e = f ? e ? f.index < e.index ? "LABEL" : "URL" : "LABEL" : e ? "URL" : "";
            ++h;
            switch (e) {
            case "LABEL":
                d = b.exec(a);
                e = d.index + d[0].length;
                k = a.substr(0, e);
                a = a.slice(e);
                break;
            case "URL":
                d = c.exec(a), e = d.index + d[0].length,
                k = a.substr(0, e), a = a.slice(e)
            }
            b.test(k) ? (d = b.exec(k), f = 0 < d.index ? k.substring(0, d.index) : "", g = d[0].split(":"), e = null != g[2] ? g[2].charAt([g[2].length - 1]) : g[1].charAt([g[1].length - 1]), - 1 < "`!@#$^*(){}[]\"':;,.~%&<>|?".indexOf(e) ? null != g[2] ? g[2] = g[2].substring(0, g[2].length - 1) : g[1] = g[1].substring(0, g[1].length - 1) : e = "", d = g[0].substring(1, g[0].length - 1), g = null != g[2] ? g[1] + ":" + g[2] : g[1]) : (d = c.exec(k), f = 0 < d.index ? k.substring(0, d.index) : "", e = d[0].charAt([d[0].length - 1]), - 1 < "`!@#$^*(){}[]\"':;,.~%&<>|?".indexOf(e) ?
            d[0] = d[0].substring(0, d[0].length - 1) : e = "", d = g = d[0]);
            - 1 == g.indexOf("http://") && (g = "http://" + g);
            d = '<a href="' + g + '" target="_blank">' + d + "</a>";
            l += f + d + e
        }
        0 == h ? l = a : 0 < a.length && (l += a);
        return l
    }
});
puremvc.define({
    name: "VerifyURL",
    parent: window.Class
}, {}, {
    isValidURL: function(a) {
        return RegExp("((http|https)?://)((([a-zd]([a-zd-]*[a-zd])*).)+[a-z]{2,}|((d{1,3}.){3}d{1,3}))(:d+)?(/[-a-z0-9d%_.~+]*)*([?;&a-zd%_.~+=-]*)?(#[-a-z0-9d_/%_.~+=-]*)?$", "i").test(a)?!0 : !1
    }
});
puremvc.define({
    name: "Skin",
    parent: window.Class,
    constructor: function() {
        this.skin = {}
    }
}, {
    skin: null,
    idSuffix: "",
    prefix: "#ps_",
    initSkin: function(a) {
        this.idSuffix = a
    },
    getSkinComponent: function(a) {
        return this.skin[a]
    },
    getSkinElement: function(a) {
        return this.skin.children(this.prefix + a + "_" + this.idSuffix)
    },
    getSkinElementChild: function(a, b) {
        return this.getSkinElement(a).children(this.prefix + b + "_" + this.idSuffix)
    }
});
puremvc.define({
    name: "Sprite",
    parent: Skin
}, {
    setAlpha: function(a) {
        this.skin.css("opacity", a);
        return this
    },
    getAlpha: function() {
        return parseFloat(this.skin.css("opacity"))
    },
    setVisible: function(a) {
        this.skin.css("visibility", a ? "visible" : "hidden");
        return this
    },
    getVisible: function() {
        return "hidden" !== this.skin.css("visibility")
    },
    setX: function(a) {
        this.skin.css("left", a + "px");
        return this
    },
    getX: function() {
        return this.skin.position().left
    },
    setY: function(a) {
        this.skin.css("top", a + "px");
        return this
    },
    getY: function() {
        return this.skin.position().top
    }
});
puremvc.define({
    name: "LoadManager",
    parent: window.Class,
    constructor: function() {
        this.taskList = [];
        this.hasTask=!1
    }
}, {
    removeAllTasks: function() {
        this.taskList = [];
        this.hasTask=!1
    },
    addTask: function(a) {
        this.taskList.push(a);
        this.hasTask || this.processTask()
    },
    processTask: function() {
        if (0 < this.taskList.length) {
            this.hasTask=!0;
            var a = this.taskList.shift(), b = this;
            void 0 == b.completeHandler && (b.completeHandler = function() {
                b.processComplete()
            });
            $(a).unbind("complete", b.completeHandler);
            $(a).unbind("error", b.completeHandler);
            $(a).bind("complete error", b.completeHandler);
            a.load()
        }
    },
    processComplete: function() {
        this.hasTask=!1;
        this.processTask()
    }
}, {});
puremvc.define({
    name: "GalleryEvent",
    parent: window.Class
}, {}, {
    PREVIOUS: "prv",
    NEXT: "nxt",
    GO_FULLSCREEN: "gf",
    ITEM_CHANGED: "ic",
    CHANGE_ITEM: "ci",
    ITEM_CLICKED: "iclk",
    GOTO_ALBUM: "gta",
    FACEBOOK_CLICK: "fbc",
    TWITTER_CLICK: "twc",
    DIRECT_CLICK: "dlc",
    SHOW_PRELOADER: "sp",
    HIDE_PRELOADER: "hp",
    GALLERY_HIDED: "gh",
    ITEM_OVER: "iov",
    ITEM_OUT: "iou",
    ITEM_MOUSE_DOWN: "imd",
    ITEM_MOUSE_UP: "imu",
    ITEM_MOUSE_MOVE: "imm",
    SHARE_SCREEN_ADDED: "ssa"
});
puremvc.define({
    name: "StartupCommand",
    parent: puremvc.SimpleCommand
}, {
    execute: function(a) {
        a = a.getBody();
        var b = new Config;
        this.facade.registerProxy(b);
        a.config = b;
        b.idSuffix = a.canvasIdentifier;
        b.init(a.albumConfig, a.imageList, a.templateContainer.width(), a.templateContainer.height());
        a.drawLayout()
    }
});
puremvc.define({
    name: "BaseGallery",
    parent: Sprite
}, {
    skin: null,
    imageSkin: null,
    imageContainer: null,
    galleryContainer: null,
    autoSlideshow: !1,
    autoLoad: !0,
    slideShowLoop: !1,
    slideShowDelay: 2E3,
    playTimer: - 1,
    imageList: null,
    loadManager: new LoadManager,
    playing: !1,
    _galleryInfo: null,
    _currentImage: null,
    _olderImage: null,
    _currentImageIndex: 0,
    _temporaryImageIndex: 0,
    _width: 400,
    _height: 400,
    imageWOffset: 0,
    imageHOffset: 0,
    hasDesktopSwipeFunctionality: !0,
    disableClickToAdvance: !1,
    shareScreen: null,
    _showShareScreen: !0,
    hideLastImage: !0,
    callSetSizeOnShareScreenChange: !1,
    originalAutoSlideshow: !1,
    descriptionScreenVisible: !1,
    init: function(a, b, c, d, e) {
        this.galleryContainer = this.skin = a;
        this.idSuffix = c;
        this.maxLoads = 4;
        this._galleryInfo = b;
        this.playing = this.originalAutoSlideshow = this.autoSlideshow;
        this.imageContainer = this.getSkinElement("container");
        this.imageSkin = $(this.imageContainer.children()[0]).remove();
        this.config.descriptionFirst && (this.originalAutoSlideshow && (this.playing = this.autoSlideshow=!1), this.addDescriptionScreen());
        this.setSize(d,
        e)
    },
    addDescriptionScreen: function() {
        this.descriptionScreenVisible=!0;
        var a = this.config, b = $("#" + this.idSuffix), b = $(b).find("#ps_descriptionScreen_" + this.idSuffix);
        if (0 != b.length)
            b.show();
        else {
            var b = "", c = $('<div style="height:100%;" class="ps_descriptionScreen" />').attr("id", "ps_descriptionScreen_" + this.idSuffix);
            a.albumDescription && (b = '<div class="description">' + a.albumDescription + "</div>");
            c.append('<div class="desc_cont"><div class="title">' + a.albumTitle + "</div>" + b + "</div>");
            $("#" + this.idSuffix +
            "_templ").prepend(c);
            this.centerDescriptionScreen();
            isIDevice() ? ($("#" + this.idSuffix).append('<div id="galleryIdevice" style="position:absolute; width: 100%; height: 100%; z-index: 1000000; background-color: transparent;"></div>'), $("#galleryIdevice").data("_this", this).click(this.hideDescriptionScreen)) : $("#" + this.idSuffix).data("_this", this).bind("click", this.hideDescriptionScreen);
            $("head").prepend('<style type="text/css" media="screen">.ps_descriptionScreen{position: absolute; width: 100%; z-index: 100;background-color: rgba(0,0,0,0.7);}.ps_descriptionScreen .desc_cont {top: 50%; position: relative; width: 75%; margin-left: auto; margin-right: auto;}.ps_descriptionScreen .title {text-transform: uppercase; max-height: 79px; font-family: Arial, sans-serif; color:#ffffff; overflow:hidden; font-size: 22px; margin:0 0 2px 0; text-align: center;}.ps_descriptionScreen .description {font-family: Arial, sans-serif; color:#919191; overflow: hidden; font-size: 14px; text-align: center; max-height: 51px;}.ps_descriptionScreen .view_slideshow {margin-left: auto; margin-right: auto; cursor: pointer; width: 123px; height: 29px; box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3); background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAdCAYAAACKahM4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODExODA4M0IxMUVFRERDRDkxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4NzI1REM1OTdDRDQxMUUyOUIwNkMwNjkxRDZGNUE4OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NzI1REM1ODdDRDQxMUUyOUIwNkMwNjkxRDZGNUE4OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgwODNDNkZDRjlCRjc3REEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDY4MDExNzQwNzIwNjgxMTgwODNCMTFFRUREQ0Q5MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6jAt7nAAAZNklEQVR42lxbCdBU1ZU+773u/jcWEfgxiFMsIi6A7OMolqZmdKLWJKNxz2RMlbsSrWiW0sw4LomOjkRwtKaCo2iqJkZAxVEQBNExRsGlyg1RiEvECtExIsi/9PLem/t955zbv9PQ1X93v3fvuWf9ztKV4cOHH3HqaadfPmrUfqclSTIuzwupVDIpy1LSJJFWeJ9lqb5PU2k2mlJKIYmkkoXrcM3AwKD0DOuRZrMlRZ6He3Kp1Wr8u1KtSKuVSzW8Yo2iKPl5tVaVwcG6dHZ2SPhCcn7ekkazKYGm8N2AJEkm1bAHvmu1mlwT9JVFLpKkvC8JNOXhvs7OrkDHgGRpEj7Lwr1JoKcZ3xdFK9BfCc9E/IyNRiPQr+fIA414YL1qpSJFiTPqA+vYl+SFX5tmyid8loY9GvU6acT5QW+WVZTWsBL3CPuCh5VwHx71xmD4RunDGSqVKteohP3DAaSjo4Yj8lypHpf0tlotXjMYru3u7ibfnD6cGzThfOBvlqaffPbnzx5Z88TjdydnnnXOL6vV6kVffvklN2w09GA9PT2yb98+GTVqlOzdu5eHqIfF8QjXB+bpgTs6OsPngyS0r28fD1gL30NoEDAOU+JfIADKgMNiLRV8TgaAQBCNQ4U/qRBUlqLgCQcHB3n4/fffn7RAYGR2OFw9CAy05oHB2L9W6yAz83BvR0dHOE+de0CAoAmfYT8oHB4QTGdnZ6A7IxOxJ/8O10LwoLFaNVrCA0wG7X19fTynP3BGKLUzGvzAA/dhP98TCuIGMWzYMK6D/aBQKqBB0oP7/fOB/n7Sgr3Bn66ubukPn+E9vsf1VPSgdJAfjKUZ+NIVeKoyqsnu3V8syw4/YvoDffv2dTWNEXiCQAgQggEx+AyHwHP48GFkHgQPwWbUbqFGVoOA8F4Z1ySTwEA8QBDux1pYd2CgPzKRHiPsD8aWhXoQZ3puXgJ/gxFtQQXNtzXxHdZPEvVAuAdr0GvAB4W/cS+UFH/jFcrQaDbIONCI8+AV39fDtRAKrzNlxJpKf41Km4dra+Es+Dw3WnEvzucPX9f5B+Hg3CWUw+h0geHehJ6jEvfrpLI2qPCVatV4W+F3zlfwCYqJ73EfaAb9rWC4uBZrwxgCHZOyiRMn3arMH+AiuBiEwC06IwuzElgU3NXQjUAMrhFzm8rQhBvhOjxhtU4gBAfGd3d10Spx2MzcIejAel1dnVzH1/Z11atUuDZe6R7hxgMd0PTM3KNbIfZUT1FQ8O6dEjqGROnBecM70JSa9XR2dZnnKaKCYi28h/Cx575gBLBMrJGZYmAN5WGF/PT7sK7Tg+uGrocn+AOj8v3xxLpYo1arfkWJ8Tn+hgBxjsRct4cbrKG8zCL9WDs8urJDpk27HpqKDVS79EZclBiBQw9erzdinMJGYBbiL9boCkyCdSpDk2i1cHIer/xA0PDEYqRbFITrnkWFmtHDKKNa3I8uPTxwALhmKExurhgaTTqlNIblJuBBxtmE1tbk3xVT6tYQi0X4wFpw/cqHkl7Lw1fFPA2+wZkrQemALVxwNfMYbhxqoS2uAQWBJ2E4o4vt0hAHGmgEVcUD9Fqleo5aNRoBrnGDA50QbJRNeMV3OBs8I3AS9vb3imuC0pEh5gKwIBbR2JXLgGk7NseCmQEfEAXroutjrOwLmxZkNpTBQVhiMY6MNuHrNXUyoKQStChYDQtpjN+wVHyGuAwv09nRaR6nk7ENjChM2zuCQKEoBCfhH8ID6HCvRE8AhWypawOYdCtRD6FW4a4YCqLCVmE1mw3uif2qBoxw/d6Ac7Ae4it5Z0rrZ8U1w4cN53vcA2vDo9ah9NWDUpVUjjzyTRW74F4AWCmtupARI0bwlaCSIaqTSon7sZ7fp/Kp8AzYL6c3atHVA+MFIhWUVelCMmpVkRcGqhoM+kmqBGMxvCcTGf8qZvXkTWRwQhSc0BXBirAOLT1TBC+iN6hg6hbrElUgot/EUKnwXigV7vO47RZC9Mtw0YyeREFVheuoAjdMcRKezcEoGObfuyKrtahbb5lyIK77+0HzHvAyVXqPJu9z0Kn8aZAGrLtn7x5+hjCCYzMGi5gCBWuuVKJnwmegD09wiFgj0N0IigAP0jS+KB0DaoiJGE0a/8FzAGt837b4nDE8pbUEq4ElQZv6+wdIgMZTRZWITRqDm7RMofVUuTAE391NAEBXDm1TFNxUJRFNHQpqnZCIrNIGIWC8u/DUQoiHAdwHutS1hgMHd0zXbeCQ6oLrhhxctTuNQE/drzIUlpebQuB+oHeGooDgCwtVqVklQhI9nKVRUACsUTcP4uDLFVRMOPibuKcoo6eA4jUs3ICnTRpLaS5erxsg5qhE+pI0iXyGMcLKcWCCR+6fk3bQChnhe8UqCfeDEdFAw/VQRMgodQIBityVqSvtCu6xgxtC4xTAZHSHYOiePXvIABx69+7dEW3rhqW5wypjE9ysxg2NZ04A9sI+eE9LtbgEhnqM0rQljYpXmAsB86BYCsoSs+i2ZSHNwh4EnpEJVekJIcIBKUCOxz7oGXnRaBgyN7dOgKhCUSZWY5xMDNm7YsLNQoAQSGnCHwjG07A19fylKhaUD6ieyqSKGPlnANIVolbriGlikiYxW8H5K4a4Pb3bR69VmOfNDGdp2Ml6e8dd3x0O7S5Q3UfCGAJAUa1ULf3piIUKAIsUhRZz15ouKKirBY2SIW6aVltXoaRRcLCqdkxmGgWAFIjMTVnAANABDUUsd9QLWtxiNFY2eV3LXB/ogVU1LJXDXvqaDYmlLbXO8AqNLQ29a/goSZPG34QC9NSQ8dCszuM6FBX06asWTqoGrJhFWL7tmQLWc5po0QODNDTSnmhOjM80+ygNXTtATWihwAq4DvfTa5miqLHUYhqJRROmvR3kYwqwgkMyztBN1elmVOgZXYhrrsb1qtx9911yzDFHUzAgHPfCYp7euEHG9o6V5ffdK2eecQYZe9NNN8jGjU/J+vVP8rlxw3pZ9+QaOfGEE+R3zz8nI/cbScsHY1avfkRWP/ow14QbPeboo+XhVSuMeEX5CAPTpx8h9y+/V9avWytPrV8nd/37nTJt2qEU8AP3L5ezzz6LOSqrY8QQpVzx/UXys5/dxDN8+9unkQ7Q5c9rr7mGCoyz3nrbv8ozmzbKhqfWc308/+fZTTJr1qxw5lzOOP10eXLtGu7/7DNPy09/eq30jh1DQeK62bNnU9eh+PBs9y9fzvMmFnZOD/tvelrX/+1zz8qiRZdTQXqCINeueUJGjhxh6aHIyhUPyarAAwKwIMC5c+fI2rVPUGHVIJusziWW6dSDO4csoCxQZqwL5SFA4w2Iz2Y1jpIVZBS8AcKHAPr7+xg3H354lSxcuJAajRiPexcuPFY2bNggOz/aqfHRCg94LlmyVGbMnBmYNZvPmUfOkg1BMd5++205/LDDqZGTJ02O6d1BB/0FNXny5MnhoA9rfCKyz4hu/+W6f5aHVqzgOlj3zTffkiuv/D4FTMQfFHbAgByUiO7VzkIXF+jbvHmLzJo9h/effPIp0tvbK1decYWmbOG6JUuXyvQZM7nHkUb3li1bZNoh0+TCCy+QSy69TObMnStH/dXRMi7ce8aZZ9DDOfhynAHmo/TqIeb888+Xk076hlx00cVc/+xzzpUpU6bIj3/0IwKrbdu2yZw5c2iZB4fPyZPwnDJ5CoU6derBQQFW8kwaChqM1/CeEF5mWQMzqLIkboqYyF2kCzex4A8tV3ejMaRhqQOuff53L8iCBQuYImFTIL1jj10ozz33W4sdEjbKrdyobm3cuK/JiJEjZfSYsTI2PCHUV155VQ49dBoJnjd/nry4ebO8+OJmWRD+xj7zF8yX7Tu2a5wM/8A4uCmUAz/50ycydmyvjB8/QW6+5RY5+6yzuZ/VLhUMBsWEVnuMwxcVwyQ40377jZIDDhgvfQEcLQ3CPeWUkw0naE49rndcuGY/GTVqf+kddwDPD8+Fku0nn3zK+0HbOeeeK3fcsUQGzfuxWDIEmbv7Rop0TvA6N9xwo7y1dauMHj1adu36k/zgB1fJ179+vEw5eAp5MiUoOQwMirjlpZfkpfCEt4AM582dR54UlnIhlMGSa4ZvEG7BW3hihAfEdWYMCHsKyirUkpqV57we3Bc0zXM4sXTHD7Bxw0Y5/vjjZM2atTL+a+PlwAPHy9ObnomVLi9KgNGXX3YZn/744x93UaO3hgN/73vnMWbPnnUkD4VU84jDD6MrO3TaNHnttTe4H5iFePXnz3eTsbfccjPXeeXVV2X79u0hRKzXciuLEEmslnkdPXH8AOYbGFPP1CfDeobJe++9z+ugSHgsWrSIT3/s2rVLzv3Od4ObXSvf+NsT5dFHVsm7YV/s/fjja+QPH35Ib4LH0iVL5P8/YGtTDz6YigJPhPAFr1itZoHPffLxxx/LpIkTg7fbJued94+ybNk9QbBzKGx4iZkzZgTaemgcb7zxFvFN8FOC7LR/oEXlZN0BaWiudQ14bfABisPyNwEFqlWVzEgqIwoUy6k14dcihAOb1asflWODKwchCxceLStWrjIGZlZ9S2K1benSO+kGj5g+g8+TTjqZ1vP6G2/KYYcdJgdNmCDz588PbvIlutd58+aFGNhLNw8iIRQoH4sIYb3fPPRQcK2zZNk9y8LhmnLxRRfKtddeM6SM2647M1e3ShXLnTgH0LWBMmAQlD4BUr24Agu6/fbFARvMoBuHu//rvzmBvIFBXHzJpTJz5qwQs9fT2yz75X/IqaedSvrwOP+CC8P3R/I+uOqdQZDs0CXqeToCYNq7Zy8Ba9NirkFweenllynQiZMmkicvv/yKvBqsfW4IGWOCR4SBQGHAQE8TIRuAaaxVtxQ2Y7k0V5BYq2rdAoz0Oi61pakoztEvuzEsC9Y1JiLmJYXs+P170hPyb4CK4447Tn4YYk7KvG4g1oG9NUr3EnL57p4sds3wGfLcrVvflrPOOpMHeP/9Dxjf8Lj66qvo0mGdmv9qK7LGAk2TB18XmP3Y6v+WBx/8jawIQOaee/5ThY010JxparXJEgOtiBnK90YFkDty9xkzppOGffu+tE5RR4jj46gcuXXIHJEjZUOqufz++ynEnTt3ypkhZv/qgV9pxzDwZPiIEWS4tLeW119/jZUwxGR4MRY6wrngGSdMOFDeefcdulzw5LSgPKBnx44dUTF/ePXV8sILL9CKEWZRbFFB6lkgp8KqbDEEi2dJVUmZ4Fv+h+IELk6t8O4XajenRuK8XQn38Mgjj8rixbfLHz76SD799H8Z0zzv5b1W/mPObQL29Efz5Eaw5s3yzW/+naxcuZIpDRQB1j0tuHCAlUiHqGUec8wxsmXzCzIjWB2KQXC7U6dOJWM+/ODDmOb4OfAsDMy4InhjgWcP7ydPniTf/YfvyJPr1qEV+JWmTOxnW03hkosvklUrVwQM0kuh94QQgNbrW29ttUKIxmeesywiw4GDUA2777775Oqrrgq4ZD6vmTbtELnuun9iGNq+fQf3AE/+/lvfIghVwNkkT2DxCB1QYq0f5BaqLBVl67ngvl7987IwlSG1OjfiszcqwNhsSLKeW+/ahe855KZNTzOluffee8lUR/NqShLr1Ugt8Bz6uH3xYnnsscfl3Xe38z1iH9F/IGrbtrflxBNPoFv3TAAHAE1rn1zLeH7jjTcEK9H4um3bO3JBcJ15oftfdumlfA7dKzW35q78qKOOClbyfLwGynbrrf9mzYdCLr/8Mj6HPm697Ta5Y8mddOUP/vrX8XPQ+eOf/CTWvr0eAGXPDUd4geOuu+9mQeoXv1gc718R9v75z28Oiqv1b3hNPH4frNorcLB28OSV4OZR7ELGgdd9wTuyipZVrEtYURAKLzswaPWDFrFXMn/BX5beQ9UhhAqJhiXnrTwGe28vqhB1MAGFhP4Q73AP3FZu9fQ9X+ymhY4YMZJNErbvOM2RtC291mllxYKuc5g1DLysia4Y0iG643AwNOI9W8CeYBiqW4lVxtCWxMX4zuvOYrUdgkYDmAB5oFtrzY3YuYMAUQPHUfd88QXBDqdjAlYoTXk7OrqIfLG3T6/knIDJaN0AR1+Ee0ePGUOlA4+QguJ8Xei3pzrRgtIoa/nmtVBTiFjHeA0aegJPvPGD95ziCaETROJ86A2g9GwWZhW9Cit4QOUoNWtWFc6HTljIE0tvz7VyDehAp0hHarWqtfSSWK5DedNza50GqcUWHA6Gao13ZkC4lya92kMttFoxaKzVqhEUscGP6yoZ3R7W1zamAh9WrURr4WAQBwfYOk0iIIOCclwqbeOFRJLY+tQpGN2zZt2yig9hiLZwsZ6Hm6phBI4BgYk2kOFNGq8acljASrbaXVOwCs412UUsY6FEaxb90h2UC3vGUSJ401aTPGjZOXwEymvkfl4f8YISwXt4OVu/05Yq7vcaPXiYHThhwvV0O4a0KbhIeB6JBPFxKIuzX4nNqCkCblpnDMzijBVinE1LOHgggTbbVbWxIw8L3CNV94f7mjYi5OVKCIxMtLKn57OZ1YrbubQYEi1ihywzi2qy3p3SraXW46WQrT+swwkKLF3QwDM8TPgPJS2HdPRSa4hkXrKkpdvARF7YFEtuwxOdWk83pEzEbNhCQ6b2H0Ar6+SmBA6eW+ZJVHm0T0/rtgJOxSaE1HBrWhtBGm3xm7LlAc2KGizWt4FMDPZW9KeLRffGhWRMgJZCQABMamUtfZrAtPWWRmQLhdDJjMx6xnnUYOyn2piSIe4hAD5g8dpwKKP3KEuJKQ2YyDKpFYo6rJ4PK4mDA1b/1rw7ixafmYL67Jv3Cnz4wPv8g/VG7C4llmoiq/DvS1MSrJlGpanRdTswNc5RYXwEzItPrVYb+efWouQZjPeOiZDywRCgGJ20bs1AXMl9yIINnJqGy5RAwtqA4kNxZiVNNvd19gmtSD+ktw9hIT5rhsdg3YcdEotySliWphGhcmyJrlq1mW28oKGwGjCHzKb1Jzq9WZQ29DCgs1bWHoX2qhvXyRIwh8N5A4Pxc2YPcNsdPrwoEbWC0bq/GA6px/tcaaj41nHTWjPmubq1TGmdOdAJZtesVAtPWFq/u2lonpMvEKy5arGcH0rPKRcr4dJDGQ7JrFrpe6gitmfZHACDXzAcek7LlBhakzT2LthixgQLZ7hQjLDEHgyH1vhIDKA9XARmxlo8vKjlIM6aY1HgpgdIaJ1lrBqh3ltla7KIsUldWhELHR4/fYKFsdf634o027R53lwmVvyBsoV7KQxzVxyYsLABD7GPmUYWQaVHI8ca4jU29ucNHxioE3aTCCio1MpsRexQpMGGztM1iDvKODJF4eOszHcVlRNPdGTko4aHInoh4pi6Wr13FSn0TEeeYZ34vmbdQZyFil5vxHYshV+t2rCCTiBJOWSAc/To0dfXLDH3WXHXQhdeKy/aNWd8Z61Ir7zlBkA0rSlid8ddsI8OeWyFS/MUj5ZrRRAwBIJtNBUztCxGO7LFvqAPeSeuVxzRLpBQQSSJwE/jqyqHtlDzOArMoYSmMrluLVjW/7M2JrDpiFgzcMzByR5Hzj5rhxgMb2WzYzxDptblcbsaAa+2kbFWzRSIXiezcAT3bxO0ioPqceRKODdnBS8bg2LxJpEYstyb+iM34J2WceS1EQfY3J2lVgTBoH7B7xR0cKDPAZdZKC0+gqG0HfsBGNj71f63jwb7gCPHayyXZ++80AF+rFexkSd6G6vZI2aq1lke71OklhpqzNfxWjBJCyNldIk+Z0emmqLqyHAeJ119stWZO2jTObmVjHUqJonDirimYWvWbLgBZ+Cok4VIxk+vaBHI6VhXv83K+zwAO3UtK1VjHMvmyaHEPvok5nH1BxNaLvXsoWJZgGdWCGsa9hg+s89zQ5iVIbke25MWz1uONK1Q4IWJ/r7+WDTwgkhRKvgojBEc5MekRLAGdV+K8BvNRizrcd6c81aDOg0p6j2s36olXPsFRmKdq6G4wi2Mr2YhKYbubA5es4UGrTwxFOwK4p6oNNDpFSfPe339PCL9lIbhFmMYlYqquIGtRJaXo3LFnFqTWO8warFF0XectjHv5GEmIV8asc5trcrYXczNe2kqW8bJUygshw4RDjhfl34e3PiYKWHDuQqMJCJoumECpGLIEHxGF+LuXX/Skuu0h/0UxxJm/eWDHahifV510wrE9KdBNnqbt396k3gmYIrGyROzsKEPL/gjfrLh4syzny75DHXDXGBuXuUr1mPhRjt1iWUYEhUis19vuOXDUiFMNDJIc5JEb5faBI7/qoT1f2mHjzb1SRyKdEXykWoNj3mcgqnY4IXPqpWsUdTsJ0WKjRjubJwMYSSrtH/ZUhhvaWit1n9le/fu+WDMmLFdYeODAhHdhY3NqBUX8ZcJXgxxZvlrO67nhujFBgCa0VUxnhbtkV9YnAvDlcXXLG1cd+gUTGlTqawFWCxyVK2eoOSvQ5I0jVUl/+lQZuHGUXycfmVsrMR7ck+ZbI7bCzR1s5jMaHXavQSKc3P0yLyhK5a68ZQ5sYcMT/M4mgS3itq9zQ04us7MYxUWSpm323lTM5q20mRxLb++Ygoaw1uSfBY860MfvP/eHf8nwAD6/1/dv1G3sQAAAABJRU5ErkJggg==);}</style>')
        }
    },
    centerDescriptionScreen: function() {
        setTimeout(function() {
            var a = $(".ps_descriptionScreen").find(".desc_cont"), b = a.height();
            a.css("marginTop", - 1 * Math.floor(b / 2) + "px")
        }, 0)
    },
    hideDescriptionScreen: function() {
        if ($(this).data("_this")) {
            var a = $(this).data("_this");
            if ("none" == $("#" + a.idSuffix).find("#ps_descriptionScreen_" + a.idSuffix).css("display"))
                return !1;
            isIDevice() ? $("#galleryIdevice").remove() : $("#" + a.idSuffix).unbind("click", a.hideDescriptionScreen);
            $("#" + a.idSuffix).find("#ps_descriptionScreen_" + a.idSuffix).fadeOut(function() {
                a.descriptionScreenVisible =
                !1
            });
            a.originalAutoSlideshow && (a.autoSlideshow=!0, a.playing=!0, a.refreshAutoPlay())
        }
        return !1
    },
    showShareScreen: function(a) {
        this._showShareScreen != a && (this._showShareScreen = a, null != this.shareScreen && null != this.imageList && (this._showShareScreen?-1 == this.imageList.indexOf(this.shareScreen) && (this.imageContainer.append(this.shareScreen.skin), this.imageList.push(this.shareScreen), $(this).triggerHandler(GalleryEvent.SHARE_SCREEN_ADDED)) : - 1 != this.imageList.indexOf(this.shareScreen) && (this.getCurrentImage() ==
        this.shareScreen && this.prevImage(), this.shareScreen.skin.detach(), this.imageList.splice(this.imageList.indexOf(this.shareScreen), 1)), this.callSetSizeOnShareScreenChange && this.setSize(this._width, this._height)), this.setShareScreenVisibility(a))
    },
    setShareScreenVisibility: function(a) {},
    addShareScreen: function(a) {
        this.shareScreen = a
    },
    draw: function() {
        this.createSlides();
        this.initAditionalAssets();
        this.hasDesktopSwipeFunctionality && this.addDesktopSwipeFunctionality()
    },
    addDesktopSwipeFunctionality: function() {
        if (!1 ==
        PSAppConstants.IS_MOBILE_DEVICE)
            for (var a = this, b = 0; b < this.imageList.length; b++) {
                $(this.imageList[b]).on(GalleryEvent.ITEM_MOUSE_DOWN, function(b, f) {
                    "1" == f.which && (a.mouseStartPosition = f.pageX, a.mouseMoved=!1, $(this).off(GalleryEvent.ITEM_MOUSE_MOVE, c), $(this).off(GalleryEvent.ITEM_MOUSE_UP, d), $(this).on(GalleryEvent.ITEM_MOUSE_MOVE, c), $(this).on(GalleryEvent.ITEM_MOUSE_UP, d), f.preventDefault())
                });
                var c = function(b, d) {
                    var h = Math.max(Math.min(a.mouseStartPosition - d.pageX, 70), - 70);
                    70 == h ? (a.nextImage(),
                    $(this).off(GalleryEvent.ITEM_MOUSE_MOVE, c)) : - 70 == h && (a.prevImage(), $(this).off(GalleryEvent.ITEM_MOUSE_MOVE, c));
                    a.mouseMoved=!0;
                    d.preventDefault()
                }, d = function(b, d) {
                    $(this).off(GalleryEvent.ITEM_MOUSE_MOVE, c);
                    d.preventDefault();
                    !1 == a.mouseMoved&&!1 == a.disableClickToAdvance && a.nextImage()
                }
            }
    },
    setSize: function(a, b) {
        this._width = a;
        this._height = b;
        this.skin.css({
            width: this._width + "px",
            height: this._height + "px"
        });
        if (this.imageList) {
            for (var c = 0; c < this.imageList.length; c++)
                this.imageList[c].setSize(this._width,
                this._height);
            this.refreshTaskList()
        }
        this.resizeAditionalAssets(a, b);
        this.descriptionScreenVisible && this.centerDescriptionScreen()
    },
    getCurrentImageIndex: function() {
        return this._currentImageIndex
    },
    setCurrentImageIndex: function(a) {
        !0 == this.slideShowLoop ? 0 > a ? a = this.getLength() - 1 : a > this.getLength() - 1 && (a = 0) : 0 > a ? a = 0 : a > this.getLength() - 1 && (a = this.getLength() - 1);
        clearTimeout(this.playTimer);
        this._currentImageIndex !== a || this._currentImage != this.imageList[a] ? this.setCurrentImage(this.imageList[a]) : this.refreshAutoPlay()
    },
    getCurrentImage: function() {
        return this._currentImage
    },
    setCurrentImage: function(a) {
        if (a && a !== this._currentImage)
            if (a.loaded) {
                var b = this._currentImage;
                $(b).off("imageShown");
                this._currentImage = a;
                null != this._olderImage && (b != this._olderImage && this._olderImage != a && this._olderImage.hide(), this._olderImage = null);
                b && (!0 == this.hideLastImage || this._currentImage.index < this.getLength() - 1 ||!1 == this._showShareScreen ? b.hide() : this._olderImage = b);
                var c = this;
                this._currentImage.show();
                this._temporaryImageIndex = this._currentImageIndex =
                this._currentImage.index;
                $(this._currentImage).on("imageShown", function() {
                    c.refreshAutoPlay()
                });
                this.refreshTaskList();
                $(this).triggerHandler(GalleryEvent.ITEM_CHANGED)
            } else 
                c = this, this._temporaryImageIndex = a.index, $(a).on("complete", function(a) {
                    c.imageLoaded(a.currentTarget)
                }), $(this).triggerHandler(GalleryEvent.SHOW_PRELOADER), !1 == this.loadManager.hasTask && (this._currentImageIndex = a.index, this.refreshTaskList())
    },
    getLength: function() {
        return this.imageList ? this.imageList.length : 0
    },
    initAditionalAssets: function() {},
    resizeAditionalAssets: function(a, b) {},
    createSlides: function() {
        this.imageList = [];
        if (this._galleryInfo)
            for (var a = 0; a < this._galleryInfo.numImages; a++) {
                if (!this._galleryInfo.imageList[a].dontLoad) {
                    var b = this.createGalleryItem(a);
                    b.imageWOffset = this.imageWOffset;
                    b.imageHOffset = this.imageHOffset;
                    b.initialize(this.imageSkin.clone(), this._width, this._height, this._galleryInfo.imageList[a]);
                    b.setVisible(!1);
                    this.imageContainer.append(b.skin)
                }
                this.imageList.push(b)
            }
        null != this.shareScreen && (b = this.shareScreen,
        b.index = this.imageList.length, b.initialize(this.shareScreen.skin, this._width, this._height, this._galleryInfo.imageList[a]), b.setVisible(!1), b.load(), !0 == this._showShareScreen && (this.imageContainer.append(b.skin), this.imageList.push(b)));
        this.autoLoad && this.setCurrentImage(this.imageList[this._galleryInfo.startindex || 0])
    },
    createGalleryItem: function(a) {
        return new GalleryItem(a)
    },
    refreshTaskList: function() {
        var a = this.imageList.length, b = Math.min(Math.max(a - this._currentImageIndex + 1, this._currentImageIndex +
        1), this.maxLoads);
        this.loadManager.removeAllTasks();
        this.addTask(this.imageList[this._currentImageIndex]);
        for (var c = 1; c <= b; c++)
            this._currentImageIndex + c < a ? this.addTask(this.imageList[this._currentImageIndex + c]) : !0 == this.slideShowLoop && this.addTask(this.imageList[this._currentImageIndex + c - a]), - 1 < this._currentImageIndex - c ? this.addTask(this.imageList[this._currentImageIndex - c]) : !0 == this.slideShowLoop && this.addTask(this.imageList[a + this._currentImageIndex - c])
        },
    addTask: function(a) {
        a && (a.loadStatus||-1 ===
        this.loadManager.taskList.indexOf(a) && this.loadManager.addTask(a))
    },
    prevImage: function() {
        if (this.descriptionScreenVisible)
            return !1;
        this.setCurrentImageIndex(this._currentImageIndex - 1)
    },
    nextImage: function() {
        if (this.descriptionScreenVisible)
            return !1;
        this.setCurrentImageIndex(this._currentImageIndex + 1)
    },
    jumpToImage: function(a) {
        this.setCurrentImageIndex(a)
    },
    play: function() {
        if (!this.playing) {
            clearTimeout(this.playTimer);
            this.playing=!0;
            var a = this;
            this.playTimer = setTimeout(function() {
                a.playHandler()
            }, this.slideShowSpeed)
        }
    },
    refreshAutoPlay: function() {
        if (this.playing) {
            var a = this;
            clearTimeout(this.playTimer);
            this.playTimer = setTimeout(function() {
                a.playHandler()
            }, this.slideShowDelay)
        }
    },
    pause: function() {
        this.playing && (this.playing=!1, clearTimeout(this.playTimer))
    },
    playHandler: function() {
        var a = this._currentImageIndex + 1;
        a >= this.imageList.length&&!this.slideShowLoop ? $(this).triggerHandler("pause") : this.setCurrentImageIndex(a)
    },
    imageLoaded: function(a) {
        if (a.index == this._temporaryImageIndex || this._currentImageIndex == this._temporaryImageIndex)
            a.index ==
            this._temporaryImageIndex && this.setCurrentImageIndex(this._temporaryImageIndex), $(this).triggerHandler(GalleryEvent.HIDE_PRELOADER)
    },
    getHeight: function() {
        return this._height
    },
    getWidth: function() {
        return this._width
    }
}, {});
function isIDevice() {
    return navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)
}
puremvc.define({
    name: "PSTemplateFacade",
    parent: puremvc.Facade
}, {
    startup: function(a) {
        this.initialized || (this.initialized=!0, this.registerCommand(PSAppConstants.STARTUP, StartupCommand), this.sendNotification(PSAppConstants.STARTUP, a))
    }
}, {
    getInstance: function(a) {
        var b = puremvc.Facade.instanceMap;
        return (instance = b[a]) ? instance : b[a] = new PSTemplateFacade(a)
    },
    NAME: "PSTemplateFacade"
});
puremvc.define({
    name: "Config",
    parent: puremvc.Proxy
}, {
    galleryInfo: null,
    width: 300,
    height: 300,
    scaleMode: "scale",
    allowFullScreen: !1,
    allowBrowserFullScreen: !1,
    sharePost: !0,
    showShareLink: !0,
    showFacebookButton: !0,
    showTwitterButton: !0,
    slideShowLoop: !1,
    showWatermark: !0,
    init: function(a, b, c, d) {
        this.width = c;
        this.height = d;
        for (var e in a)
            this.setParam(e, a[e]);
        this.galleryInfo = new GalleryInfo;
        this.galleryInfo.init(b, this.width, this.height, this.scaleMode, this.startindex);
        this.sendNotification(PSAppConstants.CONFIG_INITIALIZED);
        PSAppConstants.IS_MOBILE_DEVICE = a.isMobileDevice
    },
    setParamValue: function(a, b) {
        this.setParam(a, b);
        this.sendNotification(PSAppConstants.PARAM_UPDATE, a)
    },
    setParam: function(a, b) {
        switch (a) {
        case "showShareLink":
        case "showFacebookButton":
        case "showTwitterButton":
            this[a] = "true" == b ||!0 == b;
            !0 == a && (this.sharePost=!0);
            var c = this.showShareScreen();
            c != this.sharePost && this.setParamValue("sharePost", c);
            break;
        case "displayBorder":
        case "allowFullScreen":
        case "allowBrowserFullScreen":
        case "autoSlideShow":
        case "slideShowLoop":
        case "transparentBackground":
        case "sharePost":
        case "showWatermark":
        case "editMode":
            this[a] =
            "true" == b ||!0 == b;
            break;
        case "slideDelay":
            this[a] = Number(b);
            break;
        case "backgroundColor":
            c = b.toString();
            if ( - 1 != c.indexOf("0x"))
                c = c.substring(2);
            else if ( - 1 == c.indexOf("#"))
                c = b.toString(16);
            else {
                this[a] = c;
                break
            }
            this[a] = "#" + c;
            break;
        default:
            this[a] = b
        }
    },
    showShareScreen: function() {
        return !0 == this.sharePost && (!0 == this.showFacebookButton ||!0 == this.showTwitterButton ||!0 == this.showShareLink)
    }
}, {
    NAME: "ConfigProxy"
});
puremvc.define({
    name: "GalleryItemInfo",
    parent: window.Class,
    constructor: function(a, b) {
        this.index = b;
        this.galleryInfoObj = a
    }
}, {
    galleryInfoObj: null,
    sourceURL: function(a, b, c) {
        return this.galleryInfoObj.getImageURL(this.index, a, b, c || this.scaleMode)
    },
    backupSourceURL: function(a, b, c) {
        return this.galleryInfoObj.getAlternativeURL(this.index, a, b, c || this.scaleMode)
    },
    originalSourceURL: function() {
        return this.galleryInfoObj.getOriginalImagePath(this.index)
    },
    scaleMode: "scale"
});
puremvc.define({
    name: "GalleryInfo",
    parent: window.Class
}, {
    galleryData: null,
    length: 0,
    init: function(a, b, c, d, e) {
        this.imageList = [];
        this.numImages = a.getListLength();
        this.startindex = e;
        this.galleryData = a;
        for (b = 0; b < this.numImages; b++) {
            c = new GalleryItemInfo(a, b);
            c.scaleMode = d;
            c.startindex = e;
            var f = a.getItemAtIndex(b), h;
            for (h in f)
                c[h] = "title" !== h && "description" !== h ? f[h] : TextUtils.processText(f[h]), c.originalDescription = f.description;
            c.albumTitle = a.albumTitle;
            this.imageList.push(c)
        }
        this.length = this.imageList.length
    }
});
puremvc.define({
    name: "Template",
    parent: Class,
    constructor: function(a, b, c, d, e, f) {
        this.templateContainer = a;
        this.albumConfig = b;
        this.imageList = c;
        this.canvasIdentifier = d;
        this.wheelPreloader = e;
        this.facade = PSTemplateFacade.getInstance(PSTemplateFacade.NAME + this.canvasIdentifier);
        this.prepareTemplate();
        this.addBaseMediators();
        this.facade.startup(this);
        this.facade.sendNotification(PSAppConstants.RESIZE)
    }
}, {
    facade: null,
    templateContainer: null,
    wheelPreloader: null,
    albumConfig: null,
    imageList: null,
    config: null,
    canvasIdentifier: "",
    skin: null,
    shareScreenSkin: null,
    gallery: null,
    createGallery: function() {},
    createShareScreenSkin: function() {
        this.shareScreenSkin = new ShareScreenSkin
    },
    createSkin: function() {},
    initSkin: function() {
        this.shareScreenSkin.initSkin(this.config.idSuffix);
        this.skin.initSkin(this.config.idSuffix)
    },
    prepareTemplate: function() {
        this.createShareScreenSkin();
        this.createSkin();
        this.createGallery();
        this.createOtherComponents()
    },
    addMediators: function() {},
    addBaseMediators: function() {
        this.facade.registerMediator(new TemplateMediator(this));
        this.addMediators();
        this.facade.registerMediator(new GalleryMediator(this))
    },
    createOtherComponents: function() {},
    initComponents: function() {},
    drawLayout: function() {},
    resize: function(a, b) {
        this.facade.sendNotification(PSAppConstants.RESIZE)
    },
    getWidth: function() {
        return this.templateContainer.width()
    },
    getHeight: function() {
        return this.templateContainer.height()
    },
    setParamValue: function(a, b) {
        this.config && this.config.setParamValue(a, b)
    },
    fullScreenChange: function(a) {}
}, {});
puremvc.define({
    name: "PSImage",
    parent: Sprite
}, {
    imageInfo: null,
    loaded: !1,
    imageContainer: null,
    imageSkin: null,
    currentImage: null,
    oldImage: null,
    _width: 500,
    _height: 500,
    completeOpacity: 1,
    showOnComplete: !0,
    lastSource: null,
    isOriginalSourceAfterNotResponding: !1,
    errorSent: !1,
    init: function(a, b, c) {
        this.imageContainer = a;
        this.imageSkin = b;
        this.imageInfo = c
    },
    loadComplete: function(a, b) {
        this.currentImage.attr("src", a.src);
        clearTimeout(this.notRespondingTimeout)
    },
    errorLoading: function(a, b, c, d) {
        var e = this;
        0 === e.loadCount &&
        !e.isOriginalSourceAfterNotResponding ? (a.src = e.imageInfo.backupSourceURL(b, c, d), this.notRespondingTimeout = setTimeout(function() {
            e.resizeServerNotResponding(a);
            e.isOriginalSourceAfterNotResponding=!0
        }, 5E3)) : clearTimeout(e.notRespondingTimeout);
        if (e.isOriginalSourceAfterNotResponding&&!e.errorSent)
            return e.errorSent=!0, e.loadCount = 0, $(e).triggerHandler("errorImage"), !1;
        e.loadCount++
    },
    load: function(a, b, c) {
        if (!1 == this.loaded || this._width != a || this._height != b) {
            this._width = a;
            this._height = b;
            var d = this.imageInfo.sourceURL(a,
            b, c);
            if (d != this.lastSource) {
                this.imageInfo.outterIframe && $("#" + this.imageInfo.idSuffix).css({
                    opacity: 0
                });
                this.lastSource = d;
                this.loadCount = 0;
                null != this.currentImage && (!0 == this.currentImage.loaded ? (null != this.oldImage && this.oldImage.remove(), this.oldImage = this.currentImage) : (this.currentImage.remove(), this.currentImage.off("load"), this.currentImage.off("error")));
                this.currentImage = this.imageSkin.clone();
                this.currentImage.css({
                    opacity: 0,
                    visibility: "hidden"
                });
                this.currentImage.removeClass("ps_galleryImage");
                this.imageContainer.append(this.currentImage);
                var e = this, f = new Image;
                f.addEventListener("load", function(a) {
                    e.loadComplete(f, a)
                }, !1);
                f.addEventListener("error", function(d) {
                    e.errorLoading(f, a, b, c)
                }, !1);
                f.src = d;
                this.currentImage.attr("src", "").unbind("load");
                this.currentImage.load(function(a) {
                    e.loaded=!0;
                    e.currentImage.addClass("ps_galleryImage");
                    e.currentImage.loaded=!0;
                    e.completeLoadHandler(a)
                });
                this.loaded=!1;
                null != this.oldImage && this.resizeImage(this.oldImage)
            } else 
                !0 == this.loaded && this.completeLoadHandler()
        } else 
            !0 ==
            this.loaded && this.completeLoadHandler()
    },
    resizeServerNotResponding: function(a) {
        clearTimeout(this.notRespondingTimeout);
        if (this.isOriginalSourceAfterNotResponding)
            return !1;
        a.src = this.imageInfo.originalSourceURL()
    },
    completeLoadHandler: function(a) {
        this.resizeImage(this.currentImage);
        this.currentImage.css("visibility", "");
        if (this.showOnComplete)
            if (this.imageContainer.isVisible()) {
                var b = this;
                this.currentImage.animate({
                    opacity: this.completeOpacity
                }, {
                    duration: PSAppConstants.FADE_DURATION,
                    complete: function() {
                        b.hideOldImage()
                    }
                })
            } else 
                this.currentImage.css("opacity",
                this.completeOpacity), this.hideOldImage();
        "undefined" != typeof this.imageInfo.outterIframe && $("#" + this.imageInfo.idSuffix).triggerHandler("showContainer");
        $(this).triggerHandler("complete")
    },
    hideOldImage: function() {
        this.oldImage && (this.oldImage.remove(), this.imageContainer.append(this.currentImage), this.oldImage = null)
    },
    resizeImage: function(a, b) {
        if (a) {
            a.removeAttr("width");
            a.removeAttr("height");
            a.css({
                width: "auto",
                height: "auto"
            });
            var c = a.width(), d = a.height();
            if (0 == c || 0 == d)
                c = a[0].width, d = a[0].height;
            pstemplate.utils.Stretcher.stretch(a, this._width, this._height, c, d, this.imageInfo.scaleMode, !0);
            this.alignImage(a)
        }
    },
    alignImage: function(a) {
        var b = parseInt(a.css("padding-left")) + parseInt(a.css("borderLeftWidth")), c = parseInt(a.css("padding-top")) + parseInt(a.css("borderTopWidth")), d = 0 == a.width() ? a.width(): a[0].width, e = 0 == a.height() ? a.height(): a[0].height;
        a.css({
            "margin-left": Math.round(0.5*-d) - b + "px",
            "margin-top": Math.round(0.5*-e) - c + "px"
        })
    },
    getWidth: function() {
        return this.currentImage ? this.currentImage.width() :
        this._width
    },
    getHeight: function() {
        return this.currentImage ? this.currentImage.height() : this._height
    },
    setWidth: function(a) {
        this._width = a
    },
    setHeight: function(a) {
        this._height = a
    }
}, {});
puremvc.define({
    name: "ShareScreenSkin",
    parent: Skin
}, {
    initSkin: function(a) {
        this.idSuffix = a;
        this.skin = $("<div id='ps_shareScreen_idSuffix' class='ps_sharescreen_cls_idSuffix'>                                        <div  id='ps_shContainer_idSuffix' class='ps_shContainer_cls_idSuffix'>                                            <a id='ps_watermark_idSuffix' href='http://www.photosnack.com' target='_blank' class='ps_watermarkBack_idSuffix' ></a>                                             <div id='ps_titleContainer_idSuffix' class='ps_titleContainer_cls_idSuffix'>                                                <p class='ps_shareScreenText_cls_idSuffix ps_shareScreenTitle_cls_idSuffix'>SHARE THIS ALBUM</p>                                            </div>                                            <div id='ps_btnsContainer_idSuffix' class='ps_btnContainer_cls_idSuffix'>                                                <div id = 'ps_socialButtonsContainer_idSuffix' class='ps_socialButtonsContainer_cls_idSuffix'>                                                    <div id='ps_facebookBtn_idSuffix' class='ps_share_btns ps_shareScrennBtn_cls_idSuffix ps_facebookBtn_cls_idSuffix'></div>                                                    <div id='ps_twittherBtn_idSuffix' class='ps_share_btns ps_shareScrennBtn_cls_idSuffix ps_twittherBtn_cls_idSuffix'></div>                                                </div>                                                <a id ='ps_shareScreenLink_idSuffix' href='' target='_blank' class ='ps_shareScreenText_cls_idSuffix ps_shareScreenLink_idSuffix' ></a>                                                <div id='ps_gotoAlbumBtn_idSuffix' class='ps_share_btns ps_gotoAlbum_cls_idSuffix'></div>                                            </div>                                        </div>                                      </div>".replace(/idSuffix/g, this.idSuffix));
        a = '<style type="text/css" media="screen">\t\t\t\t\t\t\t\t.ps_share_btns{background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAACUCAYAAACa9/6GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyOTBBREVFQkY3N0ZFMjExQkZBOEFBMUUyRThEMDU3MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyODFEMjc4NTg1QTExMUUyOTUyRkI1MkYzNTEyNjM2NSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyODFEMjc4NDg1QTExMUUyOTUyRkI1MkYzNTEyNjM2NSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjQ2QzQ0OUJBMDg1RTIxMTk2QzVDRUUzQjIwRUJGQzkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjkwQURFRUJGNzdGRTIxMUJGQThBQTFFMkU4RDA1NzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRm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); }                                .ps_shareScrennBtn_cls_idSuffix{cursor:pointer;margin-right:7px; margin-left:7px;display:inline-block; width:116px; height:32px;}                                .ps_sharescreen_cls_idSuffix{ position:absolute;background:rgba(0, 0, 0, 0.7); visibility:hidden;opacity:0; z-index: 100;}\t\t\t\t\t\t\t\t.ps_facebookBtn_cls_idSuffix{width:105px;}\t\t\t\t\t\t\t\t.ps_facebookBtn_cls_idSuffix:hover{background-position: 0px -32px;}\t\t\t\t\t\t\t\t.ps_facebookBtn_cls_idSuffix:active{background-position: 0px -64px;}\t\t\t\t\t\t\t\t.ps_twittherBtn_cls_idSuffix{width: 101px; background-position: -105px 0px; }\t\t\t\t\t\t\t\t.ps_twittherBtn_cls_idSuffix:hover{background-position: -105px -32px;}\t\t\t\t\t\t\t\t.ps_twittherBtn_cls_idSuffix:active{background-position: -105px -64px;}\t\t\t\t\t\t\t\t.ps_facebookSmallBtn_cls_idSuffix{ margin-right:3px; width:26px; height:25px; background-position:-332px 0; }\t\t\t\t\t\t\t\t.ps_facebookSmallBtn_cls_idSuffix:hover {background-position:-358px 0;}\t\t\t\t\t\t\t\t.ps_facebookSmallBtn_cls_idSuffix:active {background-position:-332px 0;}                                .ps_twitterSmallBtn_cls_idSuffix{width:26px; height:25px;margin-left:3px; background-position: -332px -26px; }\t\t\t\t\t\t\t\t.ps_twitterSmallBtn_cls_idSuffix:hover{background-position: -358px -26px;}\t\t\t\t\t\t\t\t.ps_twitterSmallBtn_cls_idSuffix:active{background-position: -332px -26px;}                                .ps_gotoAlbum_cls_idSuffix{cursor:pointer;width: 126px; height: 32px; display:block; background-position: -206px 0px; margin:auto; margin-top:18px;}\t\t\t\t\t\t\t\t.ps_gotoAlbum_cls_idSuffix:hover{background-position: -206px -32px;}\t\t\t\t\t\t\t\t.ps_gotoAlbum_cls_idSuffix:active{background-position: -206px -64px;}\t\t\t\t\t\t\t\t.ps_gotoAlbumSmall_cls_idSuffix{width:102px;height:26px;background-position:0px -96px; margin:auto;margin-top:4px;}\t\t\t\t\t\t\t\t.ps_gotoAlbumSmall_cls_idSuffix:hover{background-position:0px -122px;}\t\t\t\t\t\t\t\t.ps_gotoAlbumSmall_cls_idSuffix:active{background-position:0px -96px;}                                .ps_shContainer_cls_idSuffix{ position:relative; top:50%; margin-top:-87px; z-index: 2; width: 75%; margin-left: auto; margin-right: auto;}\t\t\t\t\t\t\t\t.ps_shContainerSmall_cls_idSuffix{ margin-top:-53px;}                                .ps_btnContainer_cls_idSuffix{text-align: center;}\t\t\t\t\t\t\t\t.ps_socialButtonsContainer_cls_idSuffix{margin:auto;}                                .ps_shareScreenText_cls_idSuffix{ font-family:\'Open Sans\', Arial, sans-serif;font-weight: 400;color:#ffffff;overflow:hidden; white-space:pre;}                                .ps_shareScreenTitle_cls_idSuffix{ font-size:1.5em; margin:0;font-weight: 300; }                                .ps_shareScreenSmallTitle_cls_idSuffix{ font-size:0.9em; }                                .ps_shAlbumTitle_cls_idSuffix{ color:#c0c0c0;font-size:1.2em; margin:0 0 20px 0;}\t\t\t\t\t\t\t\t.ps_shAlbumSmallTitle_cls_idSuffix{ color:#c0c0c0;font-size:0.6em; margin:0 0px 2px 0; }                                .ps_shareScreenLink_idSuffix{ display:block;color:#0084ff; font-size:0.8em; margin:auto;text-align:center; overflow:hidden;margin-top:7px;outline: 0;}\t\t\t\t\t\t\t\t.ps_shareScreenSmallLink_idSuffix{ margin:0px;margin-top:-5px}\t\t\t\t\t\t\t\t.ps_titleContainer_cls_idSuffix{ text-align:center; }\t\t\t\t\t\t\t\t.ps_shadow_idSuffix {box-shadow: 0px 2px 2px rgba(0,0,0,0.3);}\t\t\t\t\t\t\t\t.ps_watermark_idSuffix {}                                .ps_watermarkBack_idSuffix {display:block; margin-left:auto;margin-right:auto; margin-bottom:11px; width:135px;height:20px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAUBAMAAABVOzPUAAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACXRSTlMA7q7UbpA+IQ/SkrKYAAACEklEQVR42p1UTU/bQBQcQrCdIx8t8i0h/YhvNLQVvqXUQH0jNGmaW1ohVG5GPVTcLCpR9cbaien82z6/bSGqakDsYT3rWY/fm/d2gf+NuIf7jfq0muPlDb5IbxFp0D77m8CPb2mlSNC8W8Tl2mFIsrtfITKPKyPxuTI4Po5anDxc5Nx8gBNNPMSbamkUvpQPizCbwO2bEWJyWwF2zDPEeyXhBHk0EzoficiSeBs/h9feWElRK/S/hjyApMcrfCLNxCcLBXV516NfEjGNId6QuYiMsxRBgtqw+7YJd6Yi3GIhUpGfub5pc/2I030Fi2ZoepagrFnSWYPnfAx0gc8hi0KRiEwxnkk6OOESmwgEX1rQyNOLOULnSYNhLl7K/wfMJ0+Blor8wpkpzWxwkQnOcsEKTI2PEksslGulZcFtqMgTdnAoDfOnFpKnzqXzii3wAs7mCS2MiEytyMCkkEjGKnJVEUkOpy/G3kSyYCOJlyWdTDwZwi3+iszUk3LvP57Uey47StSuPflS7loHVoHaCF+lt1/MVafca6sj2IITs8sDJRxbHWp1EORaYrTakpSTWRHtE3UmLjujxApOpVmSa8LonP0kvsuecQfw9hLpPz3VXAtf61Ugh9w2qmAF3vuyf5VwguxIOraVf5SFt5XglK+iKNpt+/m7O09K5fB2Wr6/vLoRJXi4yC3X0YPHvS/G+fEb8zfzG/7LERsAAAAASUVORK5CYII=);}                                .ps_watermarkSmallBack_idSuffix {width:102px;height:15px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAPCAMAAAAh+krCAAABgFBMVEX39/f////39/f5+fn39/f39/f39/f39/f6+vr39/f39/f5+fn6+vr6+vr39/f6+vr39/f39/f39/f39/f5+fn39/f7+/v39/f8/Pz39/f39/f39/f39/f////5+fn39/f39/f5+fn8/Pz39/f39/f39/f39/f39/f39/f////39/f39/f39/f39/f8/Pz39/f7+/v5+fn7+/v39/f39/f8/Pz39/f////39/f5+fn39/f////39/f39/f39/f39/f39/f////39/f39/f39/f////39/f9/f37+/v4+Pj////6+vr7+/v39/f39/f39/f////6+vr4+Pj39/f39/f39/f39/f6+vr////39/f39/f39/f////5+fn39/f9/f339/f39/f////////39/f39/f9/f339/f5+fn39/f7+/v39/f39/f39/f39/f39/f39/f////5+fn////39/f39/f39/f39/f39/f39/f4+Pj////39/f////////39/flXOS1AAAAf3RSTlMAAHgA/AhQjWrwBm+1Ah4hBBEypSjMzesAVcNboQaH0mXZxGvyc1iDCb4Mf/31Wq+dQfV6FZC0oyRhu6pC+r7m+P7dXC4zpph9E04QHt89qwF7jBrYkyzquTfjJunR7RrcFzhHBT6w4uhJK/kCTAMpOi4KVA48L+H+sQD8d3Xmmt/WBAAAA1xJREFUeNqtlPlPIlkQx6sdjnF/YEGCLIfC0JzKkQzniHKL6A7aETAgBFDUiVFEIiruLPn+61vd7e4kTrKZSabS6Vf9Xr/3qapXVSS8lT/om5hK3gy9kcYG/bhsh3O3ivK/mAyw/WbjkzVl/HGMCKtWxQyiu3z4Gov0HcagweObjbp55Ce8cSOvYqS94uoinb1qh0LtbG2qYEziU8Idv1Qw43Hcv6/4HxcNRJdVFAIVovslUQnn4ZI4IfLrZuW4TY6mURe/PPPxFF3HxRUV0xXPaBD66klGRw8H08HoffvrSBDe8eKXUwB6GWNlpTkhY4vH/JhcPCBGen5b/UTHc+DGYUChzhMWAyVyPJZQJVOKV2BzIE+dOtyU/XAuCNNkOp09EATpyiNj4kDEaee/9jV49m16cUSb2DHb4e0+HqGw/iRCU82hUDHsaPTm/uYEGIqBG7SoyhvZkhdWCuZY3u9H6boPe4N6fPog3e710iG+o/PeQHpHS/BukzaFF8MObMSmu0xf4COtBcekwzJREwEy2qHPYOfTzHS7AnCEncg1Imz4/hBVg2buIJpxXAoRODmavc+CcJAtFvemi6QgrX0YCTKmycEtoz65wSGRD66nOSYyz042LGsNYXSIHbTcBTTIB7QVqKtbh9g5I/bEOX7NMDdHLqwjGSPJmHVBeJ+UBGk1qmCsCfkYV+ZGTuglVgqyvWaOBmOCiWWMiVrIEZ0c59E6AU5kTK6CMPO2YD5ExKBiTp1YZlM/nstB21uTPnvO2Zveg4JBrOOwQp/QzBVM05iD/b7sRVnGzCgGy6OtD3flRUwE4Fp5xdiDQ6Q6omYeC54id38dyHzC80YK+Qr1alwru8lFrf3ASrS4q2JkGTYaSnnGUaeOV55JacmPwowqcv7BbnQABcDHKVCRvbOQQ92ZonIYmMPnR59MFl5IF2uj6eD3aHR3+lC7+piWFMzz+jDv7FIwZeHo3TfXiToxazMw41JyOe+4FxzlS/p9MpZTfcvftJHb4lu+LvmIbHars3wq8lfK2tSbus0WUdfipD8X2ZBn1RPi6kwnF1yewl9KClyo1at0pN8UNXihDK+tRqtO3gbv/it5dUarPP/+f/F6iNxfpG+tRi4bvvw6/WL5rnXKfYvr/NfKP4HS6opUKoWHAAAAAElFTkSuQmCC); margin-bottom:0px;}\t\t\t\t\t\t\t</style>'.replace(/idSuffix/g,
        this.idSuffix);
        $("head").prepend(a)
    }
});
puremvc.define({
    name: "GalleryItem",
    parent: Sprite,
    constructor: function(a) {
        this.index = a;
        this.skin = null;
        this._height = this._width = 100;
        this.loaded = this.loadStatus=!1;
        this.loadCount = 0;
        this.imageInfo = null
    }
}, {
    image: null,
    imageWOffset: 0,
    imageHOffset: 0,
    scaleMode: null,
    duration: 700,
    maxLoadingTime: 5,
    getWidth: function() {
        return this._width
    },
    getHeight: function() {
        return this._height
    },
    initialize: function(a, b, c, d) {
        this.skin = a;
        this.imageInfo = d;
        this.image = new PSImage;
        this.image.init(this.skin, this.skin.children("img:first").remove(),
        this.imageInfo);
        var e = this;
        this.setSize(b, c);
        this.skin.on("mouseover", function(a) {
            e.image.currentImage && a.target === e.image.currentImage[0] && $(e).triggerHandler(GalleryEvent.ITEM_OVER, a.target)
        });
        this.skin.on("mouseout", function(a) {
            e.image.currentImage && a.target === e.image.currentImage[0] && $(e).triggerHandler(GalleryEvent.ITEM_OUT, a.target)
        });
        !1 == PSAppConstants.IS_MOBILE_DEVICE && (this.skin.on("mousedown", function(a) {
            e.image.currentImage && a.target === e.image.currentImage[0] && $(e).triggerHandler(GalleryEvent.ITEM_MOUSE_DOWN,
            a)
        }), this.skin.on("mouseup", function(a) {
            e.image.currentImage && a.target === e.image.currentImage[0] && $(e).triggerHandler(GalleryEvent.ITEM_MOUSE_UP, a)
        }), this.skin.on("mousemove", function(a) {
            e.image.currentImage && a.target === e.image.currentImage[0] && $(e).triggerHandler(GalleryEvent.ITEM_MOUSE_MOVE, a)
        }));
        this.initOtherAssets()
    },
    load: function() {
        var a = this;
        this.loaded=!1;
        this.imageInfo.dontLoad || (this.image.load(this._width - this.imageWOffset, this._height - this.imageHOffset, this.scaleMode), this.loadingSeconds =
        0, "photosnack" == this.image.imageInfo.type && this.verifyStatus(), void 0 == this.completeImageHandler && (this.completeImageHandler = function() {
            a.completeLoadHandler()
        }), $(this.image).off("complete", this.completeImageHandler), $(this.image).on("complete", this.completeImageHandler), $(this.image).off("errorImage", this.errorLoadingImage), $(this.image).on("errorImage", this.errorLoadingImage));
        this.loadStatus=!0
    },
    verifyStatus: function() {
        var a = this;
        clearTimeout(a.loadingTimeout);
        !0 != this.loaded && (this.loadingSeconds++,
        this.loadingSeconds > this.maxLoadingTime ? (this.image.currentImage.attr("src", this.image.imageInfo.originalSourceURL()), this.image.load(this._width - this.imageWOffset, this._height - this.imageHOffset, this.scaleMode), $(this.image).off("complete", this.completeImageHandler), $(this.image).on("complete", this.completeImageHandler)) : this.loadingTimeout = setTimeout(function() {
            a.verifyStatus()
        }, 1E3))
    },
    errorLoadingImage: function() {
        $(this).trigger("errorLoadImage")
    },
    completeLoadHandler: function() {
        this.loaded=!0;
        $(this).triggerHandler("complete")
    },
    show: function() {
        this.setVisible(!0);
        var a = this;
        this.skin.animateOpacity({
            opacity: 1,
            duration: this.duration / 1E3,
            "z-index": 9999,
            complete: function() {
                a.shown()
            }
        })
    },
    hide: function(a) {
        var b = this, c = "undefined" == typeof a?!1 : a;
        this.skin.animateOpacity({
            opacity: 0,
            duration: this.duration / 1E3,
            "z-index": 0,
            complete: function() {
                (!b.image.currentImage&&!b.image.loaded || c) && b.setVisible(!1)
            }
        })
    },
    shown: function() {
        if (this.loaded)
            $(this).triggerHandler("imageShown");
        else {
            var a = this;
            $(this).bind("complete error", function() {
                $(a).trigger("imageShown")
            })
        }
    },
    setSize: function(a, b) {
        this._width = a;
        this._height = b;
        this.skin.css({
            width: a + "px",
            height: b + "px"
        });
        this.loadStatus=!1
    },
    initOtherAssets: function() {}
});
puremvc.define({
    name: "ImageSliderGalleryItem",
    parent: GalleryItem
}, {
    scaleMode: "scale",
    initOtherAssets: function() {
        var a = this;
        null != a.imageInfo && "www" == a.imageInfo.originalDescription.substr(0, 3) && (a.imageInfo.originalDescription = "http://" + a.imageInfo.originalDescription);
        var b = null != a.imageInfo && VerifyURL.isValidURL(a.imageInfo.originalDescription);
        b && this.skin.css("cursor", "pointer");
        !0 == b && this.skin.ps_click(function(b) {
            window.location != window.parent.location ? window.parent.location.href = a.imageInfo.originalDescription :
            window.location.href = a.imageInfo.originalDescription;
            b.originalEvent.preventDefault()
        })
    },
    show: function() {
        this.setVisible(!0);
        var a = this;
        this.skin.animateOpacity({
            opacity: 0.999999,
            duration: this.duration / 1E3,
            "z-index": 9999,
            complete: function() {
                a.shown()
            }
        })
    }
}, {});
puremvc.define({
    name: "ImageSliderSkin",
    parent: Skin
}, {
    initSkin: function(a) {
        this.idSuffix = a;
        this.skin = {
            gallery: $("<div id='ps_gallery_idSuffix' class='ps_gallery_idSuffix'>                                    <div id='ps_container_idSuffix'>                                        <div  class='ps_imageContainer_idSuffix'>                                            <img class='ps_image_idSuffix' />                                        </div>                                    </div>                                 </div>".replace(/idSuffix/g, this.idSuffix)),
            navigation: $("<div id='ps_navigation_idSuffix' class='ps_baseComponent_idSuffix ps_navigation_cls_idSuffix'>                                        <div id='ps_prevBtn_idSuffix' class='ps_navButton_idSuffix'>                                            <div id='ps_prevIcon_idSuffix' class='ps_navIcon_idSuffix' ></div>                                        </div>                                        <div id='ps_nextBtn_idSuffix' class='ps_navButton_idSuffix'>                                            <div id='ps_nextIcon_idSuffix' class='ps_navIcon_idSuffix ps_navButton_right_idSuffix' ></div>                                        </div>                                        <div id='ps_fsBtn_idSuffix' class='ps_fsBtn_idSuffix'>                                            <div class ='ps_fsIcon_idSuffix'>                                                <div class ='ps_fsIcon_normal_idSuffix'/>                                            </div>                                            <span style='visibility: visible; position: absolute;'>Full screen<i></i></span>                                            <span style='visibility: hidden; position: absolute;'>Normal screen<i></i></span>                                        </div>                                       </div>\t\t\t\t\t\t\t\t\t\t<div class='ps_descrpition_idSuffix'>\t\t\t\t\t\t\t\t\t\t\t<div class='ps_image_title_idSuffix ps_image_title'></div>\t\t\t\t\t\t\t\t\t\t\t<div class='ps_image_description_idSuffixn ps_image_description'></div>\t\t\t\t\t\t\t\t\t\t\t<div class='ps_image_link_idSuffix ps_image_link'></div>\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t   ".replace(/idSuffix/g,
            this.idSuffix)),
            bulletNav: $("<div id='ps_bulletNav_idSuffix' class='ps_bulletNav_idSuffix'>                                        <ol id='ps_bulletList_idSuffix' class='ps_bulletList_idSuffix'>                                        </ol>                                      </div>".replace(/idSuffix/g, this.idSuffix))
        };
        a = '<style type="text/css" media="screen">                        .ps_baseComponent_idSuffix { position:absolute; }                        .ps_gallery_idSuffix { position:absolute;overflow:hidden; left:40px;top:40px;  }                        .ps_navigation_cls_idSuffix { height:100%; z-index: 10000;}\t\t\t\t\t\t.ps_fsBtn_idSuffix{ position:absolute; z-index: 200;}\t\t\t\t\t\t.ps_fsBtn_idSuffix span{display:none}\t\t\t\t\t\t.ps_fsBtn_idSuffix span i {position: absolute; right: -5px; top: 5px; left: auto; width: 5px; height: 8px; font-size: 0px; line-height: 0px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODExODA4M0IxMUVFRERDRDkxNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NEFBQzEzRjgwMEQxMUUyQTUxMUJBQTZCRDdBNzk2MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NEFBQzEzRTgwMEQxMUUyQTUxMUJBQTZCRDdBNzk2MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgwODNDNkZDRjlCRjc3REEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDY4MDExNzQwNzIwNjgxMTgwODNCMTFFRUREQ0Q5MTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz67wSzUAAAASElEQVR42mJgYGBYAcScDGjgPxBfAmJFdEEQfgvEruiCIPwHiEuZ0Iz6BcSPkFXeA2JdZO27gFgIJsAMxNxAnAjE32CCAAEGAAuEElk1hJY6AAAAAElFTkSuQmCC);}\t\t\t\t\t\t.ps_fsBtn_idSuffix:hover {position: relative;}\t\t\t\t\t\t.ps_fsBtn_idSuffix:hover span{display: block; position:relative; left:-96px; top: 5px; background-color: #000; color:white; font-family:Arial; font-size:11px; padding: 0px 10px; line-height: 18px; white-space: nowrap;}\t\t\t\t\t\t.ps_fsIcon_idSuffix{ width: 30px; height: 30px;}\t\t\t\t\t\t.ps_fsIcon_normal_idSuffix{cursor:pointer; position:absolute;width: 30px; height: 30px; top: 0px;left:0px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NEU0NkQ2QTMyODdFMjExQTc1QUEzQjhERkEwRTAxMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QzJCMUNENDg3MzYxMUUyOEVDRUExODg5NzBERkI0MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QzJCMUNEMzg3MzYxMUUyOEVDRUExODg5NzBERkI0MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdFNDZENkEzMjg3RTIxMUE3NUFBM0I4REZBMEUwMTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFNDZENkEzMjg3RTIxMUE3NUFBM0I4REZBMEUwMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7IXz71AAACHklEQVR42uxXT0sCQRR3w+pgLNEx0sBj0EU0ZP0A4c3UcwidA8HAg8SC4FGXiCDo6jHPe/Fahz5An6APUIsmuq7b+8VsrOOsmilKNfDYmffn92Nm3puZlWzb9i2jrfmW1P4esZ9XSJJ0RJ8Dkg2BPxLimeSB0ydYjCSI6SGGculpGImSyy3Uct1u990WtMFgYFWr1VvyCbsgwtDBJooBFjBHeKYldpEmBLNKeJH/mLjZbOoepF/k8Jk7sWVZpqqqV2RXBKQKbPCZO7FDXi6XrzlyBToR6UzE2K9Go3HfarXeePJKpXJDfvsQ9HlSxCAWGF7Eojr+zCVN0+4ymYyWy+Vq7XbbcIwEZhuG0aWuCUEfOscOX8QgFhjAYmXom1ROMbaXMTaOZLNZFbMwTbNXKpU00sVdEHHoYINPKpW6RAyzDWGNXWpGFuTGEQAKSIfIOVKnBUUTlKa9nehE26bPFsmLh8seSYvk1SfevxW+JGh2QW6MpT6n5SyMWeoCfLyWeprkirKEiLr3d8bkGsKaVMennU7HYOey4pA6NQqCYrFYI9suBH3o3DXMyBVgAAuYPI9ftPzU/Pl8/iwUCu0kk8njQCAgu4ySLMub1F3HGH3oHDt86/X6ha7rh+l0+qTf75vCLV25I3NlLgl2LSpjKkRZ2LXoJJyIFLaFXoteT5/v7vHIkTnhsTdgj71HfsYsZm3ax570/yfx64k/BBgA9Zm7YdsB8vkAAAAASUVORK5CYII=);}\t\t\t\t\t\t.ps_fsIcon_close_idSuffix{cursor: pointer; position:absolute;width:30px;height:30px;top:0px;left:0px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA1xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDM0MiwgMjAxMC8wMS8xMC0xODowNjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NEU0NkQ2QTMyODdFMjExQTc1QUEzQjhERkEwRTAxMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOTJENEM0RTg3MzYxMUUyOTAzRTk0RkQzMzUyNzkxMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOTJENEM0RDg3MzYxMUUyOTAzRTk0RkQzMzUyNzkxMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkVGQkFDOUIzNjg3RTIxMTg4N0U4MENDQTM1MTdBODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFNDZENkEzMjg3RTIxMUE3NUFBM0I4REZBMEUwMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4+SZp9AAACLklEQVR42uyXQUsCQRTH3VXzIGqF126m0sWjX6Gj9CWChAw8RIQS0tWDB8m9d45AiEDw1MUvENm1a9QWSay6bu8fMzKss+u6Rl58sMzOzHv/H87OvHkqlmUFVmHKGjydUJQENUGaf/MlrCjb1JgU/yGbDzkEpSuVyn4sFtug9zYF94W5JDXvNGayfpCaLeq/Cj6Zer1e0HX9m97vae55BoJfLD5kgB6PRqOv8XhskMApjWXYXKbZbJ6n0+kCVgMP3jEm+iAGsdCAFjRnODZogkMtZhBoNBpnHIp+Lpc7YKsVwjvGOBy+6PN4AZ5wA8dKpdKhYRi6JRiEer3eNRe0g2U+3KAFTWg7ghk8VS6Xj+xw0WRgmQ2Hw09oQdN1qe1wBPoFC9BdKUM2yDdJt9vV/IIRyzecZ7C4kfyCxQ3nCUyWdIMu8o0FeNLOkWYuJABqdthZldkLxT0y3z3mKzOT+fbXl4TTUmfZ8qlLLvWE+T55ydW/m8s0zdGymwsaTpvL6Thl3eBewAI0u2gCyXY6nSu/YMQ6Qf8rZaa8JpA/uySg4emSmHct8m8uA2NukWvRflzUeDweUVV1WhKR4FDTtFo+n79stVoX6M+kJxrDHHzgK/pAC5ozR3Ne6cOrj0VKH16FQKNWq53ISp+Q5Fw/U1IIhMNhNRqNRugb3fJci5bmNFux1y4Wiw+82GM+NwSeDAYDo1qt3smKPbfydhPLs2R5O6F4ff1PYqXgHwEGACeaY7uF7Y4QAAAAAElFTkSuQmCC);}                        .ps_navButton_idSuffix{position: absolute; width:40px; height:100%;background: rgba(0, 0, 0, 0);cursor:pointer; z-index: 101;}                        .ps_navIcon_idSuffix{ position:absolute;width:17px;height:27px;top:50%;margin-top:-13px; left:50%;margin-left:-8px; background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAbCAMAAACtKJSuAAAAWlBMVEX///8AAAAAAAAAAAAAAAAAAADa2trOzs4AAAC8vLwAAAACAgIAAAAhISHm5uaqqqry8vKCgoJKSkoAAAB3d3cICAj8/PxAQEATExP8/PwAAAAAAAD29vb///+7kx3pAAAAHXRSTlMAPQlYLRvf10HKE4BHiOnA86uVSaaC/ZKE/Ccq9vtkMakAAAB9SURBVHjajc9JEoAgDATAiIiKWIILipr/f9PlYojlklu65jADQE4k6Ux/0KZRtaDQlSE4GYFHmtHVCZICopokSxDIeOIJlhcYdsinq77gCZj7HQY6UI8WfW/o4qJdMfwgi3in4LoPSlrrPaOjxC9CZzitFcSkmiISWFKjYQNjJAw2gyKpXQAAAABJRU5ErkJggg==);}                        .ps_navButton_right_idSuffix {transform:rotate(7deg);-ms-transform:rotate(180deg); -moz-transform:rotate(180deg); -webkit-transform:rotate(180deg); -o-transform:rotate(180deg);  }                        .ps_imageContainer_idSuffix {opacity:0; position:absolute; overflow:hidden; }                        .ps_image_idSuffix { position:absolute;left:50%;top:50%;opacity:0; }                        .ps_bulletNav_idSuffix {position:absolute;width:100%;top:100%;overflow:hidden;height:18px;margin-top:-32px;list-style-type:none;z-index: 10002;}                        .ps_bulletList_idSuffix {cursor:pointer; width: 100%;position: absolute; z-index: 105; height:14px; margin:0; -webkit-padding-start:0px;padding-left:0; -khtml-padding-start:0px; -moz-padding-start:0px;}                         .ps_bulletList_idSuffix li {display: inline-block; width:12px; height:12px; margin: 3px; padding: 0px; }                        .ps_bulletList_idSuffix li a{border-radius:6px; background:rgba(255, 255, 255, .4);-webkit-box-shadow:inset 0 1px 2px rgba(0, 0, 0, .8);-moz-box-shadow::inset 0 1px 2px rgba(0, 0, 0, .8);box-shadow:inset 0 1px 2px rgba(0, 0, 0, .8); width:12px;height:12px; display: block;}                        .ps_bulletList_idSuffix li:first-child {}                        .ps_bulletList_idSuffix li.active a, .ps_bulletList_idSuffix li:hover a {background:#333;}                        .ps_bulletList_idSuffix li a{   text-indent:-999em;position:absolute;}\t\t\t\t\t\t.ps_descrpition_idSuffix \t\t\t\t\t\t{\t\t\t\t\t\t\tposition:absolute; bottom: 0px; width: 100%; background-color: #555; z-index: 102; \t\t\t\t\t\t\tbackground-color: rgba(256,256,256,0.8);\t\t\t\t\t\t\tpadding: 10px 0 37px;\t\t\t\t\t\t\tdisplay: none;\t\t\t\t\t\t}\t\t\t\t\t\t.ps_image_title {overflow-x: hidden; font-family: Arial,sans-serif; font-size: 16px; color: #000; margin: 0px 16px;}\t\t\t\t\t\t.ps_image_title *, .ps_image_description *  {display: inline-block;}\t\t\t\t\t\t.ps_image_description {overflow-x: hidden; font-family: Arial,sans-serif; font-size: 12px; color: #333; margin: 4px 16px 0px 16px;}\t\t\t\t\t\t.ps_image_link {overflow-x: hidden; margin: 0px 16px;}\t\t\t\t\t\t.ps_image_link a {color: #0084FF; font-family: Arial,sans-serif; font-size: 13px; white-space: pre; width: 100%;}                       </style>'.replace(/idSuffix/g,
        this.idSuffix);
        $("head").prepend(a);
        $("head").prepend("<link href='" + window.location.protocol + "//fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>")
    }
});
puremvc.define({
    name: "ImageSliderGallery",
    parent: BaseGallery
}, {
    createGalleryItem: function(a) {
        return new ImageSliderGalleryItem(a)
    },
    setCurrentImage: function(a) {
        if (a && a !== this._currentImage)
            if (a.loaded) {
                var b = this._currentImage;
                $(b).off("imageShown");
                this._currentImage = a;
                null != this._olderImage && (b != this._olderImage && this._olderImage != a && this._olderImage.hide(), this._olderImage = null);
                b && (!0 == this.hideLastImage || this._currentImage.index < this.getLength() - 1 ||!1 == this._showShareScreen ? b.hide(!0) : this._olderImage =
                b);
                var c = this;
                this._currentImage.show();
                this._currentImageIndex = this._currentImage.index;
                a = this.galleryContainer.parent().find(".ps_descrpition_" + this.idSuffix);
                this._currentImage.isShareScreen ? a.css("zIndex", 99) : a.css("zIndex", 10001);
                this._temporaryImageIndex = this._currentImage.index;
                c.refreshAutoPlay();
                b = this.config;
                b = "undefined" != typeof b.showImageInfo&&!0 == b.showImageInfo?!0 : !1;
                if ("undefined" != typeof this._currentImage.imageInfo && b) {
                    b = $(this._currentImage.image.currentImage);
                    if ("undefined" != typeof this._currentImage.imageInfo.link &&
                    "" != this._currentImage.imageInfo.link) {
                        var d = c._currentImage.imageInfo.link;
                        b.css("cursor", "pointer").data("imageLink", d).unbind("click", jumpToLink).bind("click", jumpToLink)
                    }
                    var e = this._currentImage.imageInfo;
                    a.hide();
                    var b = $(a).find(".ps_image_title"), d = $(a).find(".ps_image_description"), f = $(a).find(".ps_image_link"), h = "undefined" != typeof e.title ? $("<div />").html(e.title).text(): "", k = "undefined" != typeof e.description ? $("<div />").html(e.description).text(): "", e = "undefined" != typeof e.link && "undefined" !=
                    typeof e.showLink&&!0 == e.showLink ? '<a href="' + e.link + '" target="_blank">' + e.link + "</a>": "";
                    b.html(h);
                    d.html(k);
                    f.html(e);
                    "" == h && "" == k && "" == e ? a.hide() : a.fadeIn()
                }
                "undefined" != typeof this._currentImage.isShareScreen && (this._currentImage.isShareScreen && this.config.displayBorder) && this._currentImage.skin.css({
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                });
                this.refreshTaskList();
                $(this).triggerHandler(GalleryEvent.ITEM_CHANGED)
            } else 
                c = this, this._temporaryImageIndex = a.index, $(a).on("complete", function(a) {
                    c.imageLoaded(a.currentTarget)
                }),
                $(this).triggerHandler(GalleryEvent.SHOW_PRELOADER), !1 == this.loadManager.hasTask && (this._currentImageIndex = a.index, this.refreshTaskList())
        },
    hideImageDescription: function() {
        $("#" + this.idSuffix + " .ps_descrpition_" + this.idSuffix).hide()
    },
    showImageDescription: function() {
        if (this._currentImage.imageInfo) {
            var a = this._currentImage.imageInfo, b = "undefined" != typeof a.title ? $("<div />").html(a.title).text(): "", c = "undefined" != typeof a.description ? $("<div />").html(a.description).text(): "", a = "undefined" != typeof a.link &&
            "undefined" != typeof a.showLink&&!0 == a.showLink ? '<a href="' + a.link + '" target="_blank">' + a.link + "</a>": "";
            if ("" != b || "" != c || "" != a) {
                var d = $("#" + this.idSuffix + " .ps_descrpition_" + this.idSuffix), e = $(d).find(".ps_image_title"), f = $(d).find(".ps_image_description"), h = $(d).find(".ps_image_link");
                e.html(b);
                f.html(c);
                h.html(a);
                d.fadeIn()
            }
        }
    }
});
function jumpToLink() {
    "undefined" != typeof $(this).data("imageLink") && window.open(encodeURI($(this).data("imageLink")), "_newtab")
}
puremvc.define({
    name: "ImageSliderNavigation",
    parent: Sprite
}, {
    outAlpha: 0.5,
    isFullScreen: !1,
    navigationButtons: !1,
    init: function(a, b, c, d, e) {
        this.skin = a;
        this.idSuffix = b;
        this.navigationButtons = e;
        this.prevBtn = this.getSkinElement("prevBtn");
        this.nextBtn = this.getSkinElement("nextBtn");
        this.fsBtn = this.getSkinElement("fsBtn");
        var f = this;
        this.prevBtn.ps_click(function() {
            $(f).triggerHandler(GalleryEvent.PREVIOUS)
        });
        this.nextBtn.ps_click(function() {
            $(f).triggerHandler(GalleryEvent.NEXT)
        });
        this.fsBtn.ps_click(function() {
            $(f).triggerHandler(GalleryEvent.GO_FULLSCREEN,
            f.isFullScreen)
        });
        !1 == c ? (this.prevBtn.mouseover(function() {
            clearTimeout(f.prevBtn.timer);
            f.animateBtn(f.prevBtn, 1)
        }), this.nextBtn.mouseover(function() {
            clearTimeout(f.prevBtn.timer);
            f.animateBtn(f.nextBtn, 1)
        }), this.prevBtn.mouseout(function() {
            f.animateBtn(f.prevBtn, f.outAlpha)
        }), this.nextBtn.mouseout(function() {
            f.animateBtn(f.nextBtn, f.outAlpha)
        }), this.fsBtn.mouseover(function() {
            clearTimeout(f.fsBtn.timer);
            f.animateBtn(f.fsBtn, 1)
        }), this.fsBtn.mouseout(function() {
            f.animateBtn(f.fsBtn, f.outAlpha)
        })) :
        (this.prevBtn[0].addEventListener("touchstart", function() {
            f.animateBtn(f.prevBtn, 1)
        }), this.nextBtn[0].addEventListener("touchstart", function() {
            f.animateBtn(f.nextBtn, 1)
        }), this.prevBtn[0].addEventListener("touchend", function() {
            f.hideWithDelay(f.prevBtn)
        }), this.nextBtn[0].addEventListener("touchend", function() {
            f.hideWithDelay(f.nextBtn)
        }));
        f.prevBtn.setVisible(this.navigationButtons);
        f.nextBtn.setVisible(this.navigationButtons);
        f.prevBtn.css("opacity", this.outAlpha);
        f.nextBtn.css("opacity", this.outAlpha);
        f.fsBtn.css("opacity", this.outAlpha);
        f.fsBtn.setVisible(d)
    },
    animateBtn: function(a, b, c) {
        $(a).animate({
            opacity: b
        }, {
            duration: "fast",
            easing: "linear",
            queue: !1,
            complete: c
        })
    },
    hideWithDelay: function(a, b) {
        clearTimeout(a.timer);
        var c = this;
        a.timer = setTimeout(function() {
            clearTimeout(a.timer);
            c.animateBtn(a, c.outAlpha)
        }, b || 1E3)
    },
    setSize: function(a, b) {
        this.nextBtn.css("left", a - this.nextBtn.width());
        this.fsBtn.css("left", a - this.fsBtn.width() - 3);
        this.fsBtn.css("top", 5);
        this.width = a;
        this.height = b
    },
    setControlsVisibility: function(a,
    b, c) {
        if (this.navigationButtons) {
            var d = this;
            a != this.prevBtn.isVisible()&&!0 != c ? this.animateBtn(this.prevBtn, Number(a) * d.outAlpha, function() {
                d.prevBtn.setVisible(a)
            }) : (d.prevBtn.setVisible(a), d.prevBtn.css("opacity", Number(a) * d.outAlpha));
            b != this.nextBtn.isVisible()&&!0 != c ? this.animateBtn(this.nextBtn, Number(b) * d.outAlpha, function() {
                d.nextBtn.setVisible(b)
            }) : (d.nextBtn.setVisible(b), d.nextBtn.css("opacity", Number(b) * d.outAlpha))
        }
    },
    changeFullScreenState: function(a) {
        var b = "ps_fsIcon_normal_" + this.idSuffix,
        c = "ps_fsIcon_close_" + this.idSuffix, d = this.fsBtn.children().children();
        a ? d.removeClass(b).addClass(c) : d.removeClass(c).addClass(b);
        b = $(this.fsBtn.children()[1]);
        c = $(this.fsBtn.children()[2]);
        b.setVisible(!a);
        c.setVisible(a);
        this.setSize(this.width, this.height);
        this.isFullScreen = a
    },
    show: function() {
        this.setVisible(!0);
        this.nextBtn.setVisible(!0);
        this.prevBtn.setVisible(!0);
        this.fsBtn.setVisible(!0);
        this.skin.stop(!0).css("opacity", 0).animate({
            opacity: 1
        }, {
            duration: "fast",
            easing: "linear",
            queue: !1
        })
    },
    hide: function() {
        var a =
        this;
        this.skin.stop(!0).animate({
            opacity: 0
        }, {
            duration: "fast",
            easing: "linear",
            queue: !1,
            complete: function() {
                a.setVisible(!1);
                a.nextBtn.setVisible(!1);
                a.prevBtn.setVisible(!1);
                a.fsBtn.setVisible(!1)
            }
        })
    },
    setAllowFullScreen: function(a) {
        this.fsBtn.setVisible(a)
    }
}, {});
puremvc.define({
    name: "SlideMobileNavigationMediator",
    parent: puremvc.Mediator,
    errorTimer: null,
    constructor: function(a, b) {
        this.navigation = b;
        this.template = a;
        this.mediatorName = SlideMobileNavigationMediator.NAME;
        var c = this;
        $(this.template.gallery).on("errorLoadImageNext", function(a) {
            if (c.template.gallery.descriptionScreenVisible) {
                var b = this;
                c.errorTimer = setTimeout(function() {
                    $(b).triggerHandler("errorLoadImageNext")
                }, 1E3);
                return !1
            }
            clearTimeout(c.errorTimer);
            c.template.gallery.refreshTaskList();
            "undefined" ==
            typeof a.pn || "next" == a.pn ? c.nextHandler() : c.prevHandler()
        });
        $(b).on(GalleryEvent.PREVIOUS, function() {
            c.prevHandler()
        });
        $(b).on(GalleryEvent.NEXT, function() {
            c.nextHandler()
        });
        $(b).on(GalleryEvent.GO_FULLSCREEN, function(a, b) {
            c.fullScreenHandler(b)
        })
    }
}, {
    navigation: null,
    listNotificationInterests: function() {
        return [PSAppConstants.GALLERY_ITEM_CHANGED, PSAppConstants.CONFIG_INITIALIZED, PSAppConstants.GALLERY_LENGTH_CHANGED, PSAppConstants.PARAM_UPDATE, PSAppConstants.FULLSCREEN_CHANGE]
    },
    handleNotification: function(a) {
        switch (a.getName()) {
        case PSAppConstants.CONFIG_INITIALIZED:
        case PSAppConstants.GALLERY_ITEM_CHANGED:
        case PSAppConstants.GALLERY_LENGTH_CHANGED:
            this.setControlsVisibility(a);
            break;
        case PSAppConstants.PARAM_UPDATE:
            switch (a.getBody()) {
            case "allowFullScreen":
                this.navigation.setAllowFullScreen(this.template.config.allowFullScreen && this.template.config.allowBrowserFullScreen);
                break;
            case "slideShowLoop":
                this.setControlsVisibility(a);
                break;
            case "showImageInfo":
                this.template.gallery.config.showImageInfo = "false" == this.template.config.showImageInfo?!1 : !0, !1 == this.template.config.showImageInfo ? this.template.gallery.hideImageDescription() : this.template.gallery.showImageDescription()
            }
            break;
        case PSAppConstants.FULLSCREEN_CHANGE:
            this.navigation.changeFullScreenState(a.getBody())
        }
    },
    setControlsVisibility: function(a) {
        a = a.getName() == PSAppConstants.CONFIG_INITIALIZED;
        !0 != this.template.config.slideShowLoop || 2 > this.template.gallery.getLength() ? this.navigation.setControlsVisibility(0 < this.template.gallery.getCurrentImageIndex(), this.template.gallery.getCurrentImageIndex() < this.template.gallery.getLength() - 1, a) : this.navigation.setControlsVisibility(!0, !0, a)
    },
    prevHandler: function() {
        this.facade.retrieveMediator(GalleryMediator.NAME).previous()
    },
    nextHandler: function() {
        this.facade.retrieveMediator(GalleryMediator.NAME).next()
    },
    fullScreenHandler: function(a) {
        a ? $(this.template.templateContainer).triggerHandler("normalScreen") : $(this.template.templateContainer).triggerHandler("fullScreen");
        this.navigation.changeFullScreenState(!a)
    }
}, {
    NAME: "SlideMobileNavigationMediator"
});
puremvc.define({
    name: "ImageSliderMediator",
    parent: puremvc.Mediator,
    constructor: function(a) {
        this.mediatorName = ImageSliderMediator.NAME;
        this.template = a
    }
}, {
    template: null,
    listNotificationInterests: function() {
        return [PSAppConstants.RESIZE, PSAppConstants.CONFIG_INITIALIZED, PSAppConstants.PARAM_UPDATE, PSAppConstants.GALLERY_INITIALIZED]
    },
    handleNotification: function(a) {
        switch (a.getName()) {
        case PSAppConstants.CONFIG_INITIALIZED:
            var b = this.facade.retrieveMediator(GalleryMediator.NAME);
            this.template.config.isMobileDevice &&
            this.template.templateContainer.ps_swipe({
                swipeLeft: function(a) {
                    b.next()
                },
                swipeRight: function(a) {
                    b.previous()
                }
            });
            var c = this;
            $(this.template.gallery).on(GalleryEvent.SHARE_SCREEN_ADDED, function() {
                c.template.templateContainer.append(c.template.gallery.shareScreen.skin)
            });
            break;
        case PSAppConstants.RESIZE:
        case PSAppConstants.PARAM_UPDATE:
            a = this.template.getWidth();
            var d = this.template.getHeight();
            this.template.navigation.setSize(a, d);
            var e = 80;
            !0 != this.template.config.displayBorder && (e = 0);
            this.template.gallery.setSize(a -
            e, d - e);
            this.template.gallery.setX(e / 2);
            this.template.gallery.setY(e / 2);
            this.template.bulletNavigation.setSize(a, 24)
        }
    }
}, {
    NAME: "SlideMobileMediator"
});
puremvc.define({
    name: "BulletNavigation",
    parent: Sprite
}, {
    _width: 100,
    _height: 24,
    _bulletsNumber: 0,
    activeItem: null,
    itemWidth: 18,
    init: function(a, b, c, d) {
        this.skin = a;
        this.idSuffix = c;
        this.listContainer = this.getSkinElement("bulletList");
        this._bulletsNumber = b;
        var e = this;
        for (a = 0; a < b; a++)
            this.createBullet(a);
        this.listContainer.css("width", this._bulletsNumber * this.itemWidth);
        this.myScroll = new iScroll(this.skin[0], {
            hScrollbar: !1,
            vScroll: !1,
            vScrollbar: !1,
            vScrollbar: !1,
            scrollMultiplier: 10,
            useTransition: !0,
            onTouchEnd: function(a) {
                if ("mouseup" ===
                a.type || "touchend" === a.type)
                    e.moved = this.moved, a.preventDefault(), a.stopImmediatePropagation()
            }
        })
    },
    updateBulletsNumber: function(a) {
        if (this._bulletsNumber != a) {
            if (this._bulletsNumber < a)
                for (var b = this._bulletsNumber; b < a; b++)
                    this.createBullet(b);
            else 
                for (b = this._bulletsNumber - 1; b >= a; b--)
                    $(this.listContainer.children()[b]).remove();
            this._bulletsNumber = a;
            this.listContainer.css("width", this._bulletsNumber * this.itemWidth);
            this.setSize(this._width, this._height)
        }
    },
    createBullet: function(a) {
        a = $("<li><a>" + a + "</a></li>");
        this.listContainer.append(a);
        var b = this;
        a.ps_click(function() {
            $(b).triggerHandler(GalleryEvent.CHANGE_ITEM, $(this).text());
            b.setActiveItem($(this))
        })
    },
    setActiveIndex: function(a) {
        if (a < this._bulletsNumber && 0 <= a) {
            this.setActiveItem($(this.listContainer.children()[a]));
            a = this.activeItem.position().left;
            var b = this.skin.width(), c = this.listContainer.position().left, d = 0;
            a + this.itemWidth + c > b && (d = Math.floor( - a + b / 2), this.myScroll.scrollTo(d, 0, 200, !1));
            a + this.itemWidth + c <= this.itemWidth && (d = Math.floor( - a + b / 2),
            this.myScroll.scrollTo(d, 0, 200, !1))
        }
    },
    setActiveItem: function(a) {
        this.activeItem && this.activeItem.removeClass("active");
        this.activeItem = a;
        this.activeItem.addClass("active")
    },
    setSize: function(a, b) {
        this._width = a;
        this._height = b;
        var c = Math.ceil(Math.floor(0.6 * this._width) / this.itemWidth) * this.itemWidth;
        this.skin.css("width", Math.min(c, this.listContainer.width()));
        this.skin.css("left", (a - this.skin.width()) / 2);
        this.myScroll.refresh();
        this.skin.width() < this.listContainer.width() ? this.listContainer.css("text-align",
        "center") : this.listContainer.css("text-align", "left");
        this.descriptionScreenVisible && this.centerDescriptionScreen()
    }
}, {});
puremvc.define({
    name: "BulletNavigationMediator",
    parent: puremvc.Mediator,
    constructor: function(a, b) {
        this.navigation = b;
        this.template = a;
        this.mediatorName = BulletNavigationMediator.NAME;
        var c = this;
        $(b).on(GalleryEvent.CHANGE_ITEM, function(a, b) {
            c.changeItem(b)
        })
    }
}, {
    navigation: null,
    listNotificationInterests: function() {
        return [PSAppConstants.GALLERY_ITEM_CHANGED, PSAppConstants.GALLERY_LENGTH_CHANGED, PSAppConstants.CONFIG_INITIALIZED]
    },
    handleNotification: function(a) {
        switch (a.getName()) {
        case PSAppConstants.CONFIG_INITIALIZED:
            this.navigation.init(this.template.skin.getSkinComponent("bulletNav"),
            this.template.config.galleryInfo.length + Number(this.template.config.showShareScreen()), this.template.config.idSuffix, this.template.config.isMobileDevice);
        case PSAppConstants.GALLERY_ITEM_CHANGED:
            this.navigation.setActiveIndex(this.template.gallery.getCurrentImageIndex());
            break;
        case PSAppConstants.GALLERY_LENGTH_CHANGED:
            this.navigation.updateBulletsNumber(this.template.gallery.getLength())
        }
    },
    changeItem: function(a) {
        this.template.gallery.jumpToImage(a)
    }
}, {
    NAME: "BulletNavigationMediator"
});
puremvc.define({
    name: "ShareScreenDefiner",
    parent: Class
}, {}, {
    defineShareScreen: function(a, b) {
        return puremvc.define({
            name: a,
            parent: b,
            constructor: function() {}
        }, {
            title: "",
            isShareScreen: !0,
            haveWatermark: !0,
            isSmallSize: !1,
            oldV1: !0,
            oldV2: !0,
            oldV3: !0,
            initialize: function(a, b, e, f) {
                this.skin = a;
                this.image = new PSImage;
                this.imageInfo = f;
                this.setSize(b, e);
                this.initOtherAssets()
            },
            initShareScreen: function(a, b, e, f, h) {
                this.skin = e;
                this.idSuffix = h;
                this.title = a;
                this.haveWatermark = f;
                a = this.getSkinElementChild("shContainer",
                "btnsContainer").children();
                this.socialButtonsContainer = $(a[0]);
                this.facebookBtn = $(this.socialButtonsContainer.children()[0]);
                this.twitterBtn = $(this.socialButtonsContainer.children()[1]);
                this.directLink = $(a[1]);
                this.goBtn = $(a[2]);
                var k = this;
                this.goBtn.ps_click(function() {
                    $(k).triggerHandler(GalleryEvent.GOTO_ALBUM)
                });
                this.facebookBtn.ps_click(function() {
                    $(k).triggerHandler(GalleryEvent.FACEBOOK_CLICK)
                });
                this.twitterBtn.ps_click(function() {
                    $(k).triggerHandler(GalleryEvent.TWITTER_CLICK)
                });
                this.watermarkLogo =
                this.getSkinElementChild("shContainer", "watermark");
                this.watermarkLogo.css("display", f ? "block" : "none");
                this.albumTitle = $("<p class='ps_shareScreenText_cls_" + this.idSuffix + " ps_shAlbumTitle_cls_" + this.idSuffix + "'>" + this.title + "</p>");
                this.getSkinElementChild("shContainer", "titleContainer").append(this.albumTitle);
                this.shareScreenTitle = $(this.getSkinElementChild("shContainer", "titleContainer").children()[0]);
                this.directLink.ps_click(function(a) {
                    $(k).triggerHandler(GalleryEvent.DIRECT_CLICK, a)
                });
                this.setLink(b)
            },
            load: function() {
                this.loaded = this.loadStatus=!0
            },
            setControlsVisibility: function(a, b, e) {
                this.oldV1 = a;
                this.oldV2 = b;
                this.oldV3 = e;
                this.facebookBtn.css("display", a ? "inline-block" : "none");
                this.twitterBtn.css("display", b ? "inline-block" : "none");
                this.directLink.css("display", e ? "block" : "none");
                this.directLink.css("display", e ? "block" : "none");
                a=!(!1 == a&&!1 == b&&!1 == e);
                $(this.getSkinElementChild("shContainer", "titleContainer").children()[0]).css("display", a ? "" : "none")
            },
            setSize: function(a, b, e) {
                this.skin.parent() &&
                this.skin.parent().attr("id") != "ps_container_" + this.idSuffix ? this.skin.css({
                    width: "100%",
                    height: "100%"
                }) : !0 != e ? this.skin.css({
                    width: a + "px",
                    height: b + "px"
                }) : (this.skin.css({
                    width: a + "%",
                    height: b + "%"
                }), a = this.skin.width(), b = this.skin.height());
                this._width = a;
                this._height = b;
                e = "SHARE THIS ALBUM";
                var f = "ps_gotoAlbumSmall_cls_" + this.idSuffix, h = "ps_facebookSmallBtn_cls_" + this.idSuffix, k = "ps_twitterSmallBtn_cls_" + this.idSuffix, g = "ps_shAlbumSmallTitle_cls_" + this.idSuffix, l = "ps_shareScreenSmallLink_" + this.idSuffix,
                n = "ps_shContainerSmall_cls_" + this.idSuffix, m = "ps_shareScreenSmallTitle_cls_" + this.idSuffix, p = "ps_watermarkSmallBack_" + this.idSuffix;
                (this.isSmallSize = 220 > b || 320 > a) ? (e = "SHARE", this.goBtn.addClass(f), this.facebookBtn.addClass(h), this.twitterBtn.addClass(k), this.albumTitle.addClass(g), this.directLink.addClass(l), this.getSkinElement("shContainer").addClass(n), this.shareScreenTitle.addClass(m), this.watermarkLogo.addClass(p), this.setControlsVisibility(this.oldV1, this.oldV2, this.oldV3)) : (e = "SHARE THIS ALBUM",
                this.goBtn.removeClass(f), this.facebookBtn.removeClass(h), this.twitterBtn.removeClass(k), this.albumTitle.removeClass(g), this.directLink.removeClass(l), this.getSkinElement("shContainer").removeClass(n), this.shareScreenTitle.removeClass(m), this.watermarkLogo.removeClass(p));
                this.shareScreenTitle.css("display", this.haveWatermark && 220 > b ? "none" : "block");
                this.shareScreenTitle.html(e);
                Math.min(360, a - 100);
                this.isSmallSize && Math.min(260, a - 100)
            },
            setLink: function(a) {
                this.directLink.text(a);
                this.directLink.attr("href",
                a)
            }
        })
    }
});
puremvc.define({
    name: "ShareScreenMediator",
    parent: puremvc.Mediator,
    constructor: function(a, b) {
        this.template = a;
        this.shareScreen = b;
        var c = this;
        $(b).on(GalleryEvent.GOTO_ALBUM, function() {
            c.gotoAlbum()
        });
        $(b).on(GalleryEvent.FACEBOOK_CLICK, function() {
            c.shareFacebook()
        });
        $(b).on(GalleryEvent.TWITTER_CLICK, function() {
            c.shareTwitter()
        });
        $(b).on(GalleryEvent.DIRECT_CLICK, function(a, b) {
            c.shareDirectLink(a, b)
        })
    }
}, {
    template: null,
    listNotificationInterests: function() {
        return [PSAppConstants.CONFIG_INITIALIZED, PSAppConstants.PARAM_UPDATE]
    },
    handleNotification: function(a) {
        var b=!1;
        switch (a.getName()) {
        case PSAppConstants.CONFIG_INITIALIZED:
            b=!0, this.shareScreen.initShareScreen(this.template.config.albumTitle, this.template.config.shareLink, this.template.shareScreenSkin.skin, this.template.config.showWatermark&&!1 == this.template.config.editMode, this.template.config.idSuffix);
        case PSAppConstants.PARAM_UPDATE:
            switch (a.getBody()) {
            case "sharePost":
            case "showShareLink":
            case "showFacebookButton":
            case "showTwitterButton":
                b=!0;
                break;
            case "displayBorder":
                this.template.config.displayBorder &&
                this.shareScreen.skin.parent().attr("id") != "ps_container_" + this.template.config.idSuffix ? this.shareScreen.skin.css({
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }) : this.shareScreen.skin.css({
                    top: 0,
                    left: 0
                })
            }
        }
        b && (a = this.template.config.showShareScreen(), !0 == a && this.shareScreen.setControlsVisibility(this.template.config.showFacebookButton && a, this.template.config.showTwitterButton && a, this.template.config.showShareLink && a), this.template.gallery.showShareScreen(a ||!0 == this.template.config.showWatermark&&!1 ==
        this.template.config.editMode), this.facade.sendNotification(PSAppConstants.GALLERY_LENGTH_CHANGED))
    },
    gotoAlbum: function() {
        this.facade.retrieveMediator(GalleryMediator.NAME).first()
    },
    shareFacebook: function() {
        var a = $.Event("share");
        a.shareType = "facebook";
        $(this.template.templateContainer).triggerHandler(a)
    },
    shareTwitter: function() {
        var a = $.Event("share");
        a.shareType = "twitter";
        $(this.template.templateContainer).triggerHandler(a)
    },
    shareDirectLink: function(a, b) {
        b.preventDefault();
        var c = $.Event("share");
        c.shareType = "directLink";
        $(this.template.templateContainer).triggerHandler(c)
    }
}, {});
puremvc.define({
    name: "TemplateMediator",
    parent: puremvc.Mediator,
    constructor: function(a) {
        this.mediatorName = TemplateMediator.NAME;
        this.template = a
    }
}, {
    template: null,
    listNotificationInterests: function() {
        return [PSAppConstants.CONFIG_INITIALIZED]
    },
    handleNotification: function(a) {
        switch (a.getName()) {
        case PSAppConstants.CONFIG_INITIALIZED:
            this.template.initSkin(), this.template.initComponents()
        }
    }
}, {
    NAME: "TemplateMediator"
});
puremvc.define({
    name: "GalleryMediator",
    parent: puremvc.Mediator,
    constructor: function(a) {
        this.mediatorName = GalleryMediator.NAME;
        this.template = a;
        var b = this;
        $(document).on("keyup", function(a) {
            b.keyHandler(a)
        })
    }
}, {
    template: null,
    listNotificationInterests: function() {
        return [PSAppConstants.CONFIG_INITIALIZED, PSAppConstants.PARAM_UPDATE]
    },
    handleNotification: function(a) {
        switch (a.getName()) {
        case PSAppConstants.CONFIG_INITIALIZED:
            this.template.gallery.config = this.template.config;
            this.template.gallery.autoSlideshow =
            this.template.config.autoSlideShow;
            this.template.gallery.descriptionFirst = "undefined" != typeof this.template.config.descriptionFirst ? this.template.config.descriptionFirst : !1;
            this.template.gallery.slideShowDelay = 1E3 * this.template.config.slideDelay;
            this.template.gallery.slideShowLoop = this.template.config.slideShowLoop ||!1;
            this.template.gallery._showShareScreen = this.template.config.showShareScreen();
            this.template.gallery.init(this.template.skin.getSkinComponent("gallery"), this.template.config.galleryInfo,
            this.template.config.idSuffix, this.template.config.width, this.template.config.height);
            var b = this;
            $(this.template.gallery).on(GalleryEvent.ITEM_CHANGED, function() {
                b.sendNotification(PSAppConstants.GALLERY_ITEM_CHANGED)
            });
            $(this.template.gallery).on(GalleryEvent.SHOW_PRELOADER, function() {
                b.template.wheelPreloader.show()
            });
            $(this.template.gallery).on(GalleryEvent.HIDE_PRELOADER, function() {
                b.template.wheelPreloader.hide()
            });
            this.sendNotification(PSAppConstants.GALLERY_INITIALIZED);
            this.template.gallery.draw();
            break;
        case PSAppConstants.PARAM_UPDATE:
            switch (a.getBody()) {
            case "autoSlideShow":
                !0 == this.template.config.autoSlideShow ? this.template.gallery.play() : this.template.gallery.pause();
                break;
            case "slideDelay":
                this.template.gallery.slideShowDelay = 1E3 * this.template.config.slideDelay;
                this.template.gallery.refreshAutoPlay();
                break;
            case "slideShowLoop":
                this.template.gallery.slideShowLoop = this.template.config.slideShowLoop, !0 == this.template.config.autoSlideShow && this.template.gallery.refreshAutoPlay()
            }
        }
    },
    keyHandler: function(a) {
        switch (a.keyCode) {
        case 39:
            this.template.gallery.nextImage();
            break;
        case 37:
            this.template.gallery.prevImage()
        }
    },
    next: function() {
        this.template.gallery.nextImage()
    },
    previous: function() {
        this.template.gallery.prevImage()
    },
    first: function() {
        this.template.gallery.setCurrentImageIndex(0)
    }
}, {
    NAME: "GalleryMediator"
});
puremvc.define({
    name: "ImageSlider",
    parent: Template
}, {
    navigation: null,
    bulletNavigation: null,
    createSkin: function() {
        this.skin = new ImageSliderSkin
    },
    createGallery: function() {
        this.gallery = new ImageSliderGallery;
        this.gallery.disableClickToAdvance=!0;
        this.gallery.hideLastImage=!1;
        this.gallery.addShareScreen(new (ShareScreenDefiner.defineShareScreen("ImageSliderShareScreen", ImageSliderGalleryItem)))
    },
    createOtherComponents: function() {
        this.albumConfig.scaleMode = "scale";
        this.navigation = new ImageSliderNavigation;
        this.bulletNavigation = new BulletNavigation
    },
    initComponents: function() {
        this.navigation.init(this.skin.getSkinComponent("navigation"), this.config.idSuffix, this.config.isMobileDevice, this.config.allowFullScreen && this.config.allowBrowserFullScreen, this.config.navigationButtons)
    },
    drawLayout: function() {
        this.templateContainer.append(this.gallery.skin);
        this.navigation.setSize(this.getWidth(), this.getHeight());
        this.templateContainer.append(this.bulletNavigation.skin);
        this.templateContainer.append(this.gallery.shareScreen.skin);
        this.templateContainer.append(this.navigation.skin)
    },
    addMediators: function() {
        this.facade.registerMediator(new ShareScreenMediator(this, this.gallery.shareScreen));
        this.facade.registerMediator(new SlideMobileNavigationMediator(this, this.navigation));
        this.facade.registerMediator(new ImageSliderMediator(this));
        this.facade.registerMediator(new BulletNavigationMediator(this, this.bulletNavigation))
    }
}, {});


