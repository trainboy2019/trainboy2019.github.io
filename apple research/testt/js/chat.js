/*! Copyright Â© 2005-2016 Apple Inc. All Rights Reserved. */ ! function e(t, n, o) {
    function a(r, s) {
        if (!n[r]) {
            if (!t[r]) {
                var d = "function" == typeof asrequire && asrequire;
                if (!s && d) return d(r, !0);
                if (i) return i(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[r] = {
                exports: {}
            };
            t[r][0].call(l.exports, function (e) {
                var n = t[r][1][e];
                return a(n ? n : e)
            }, l, l.exports, e, t, n, o)
        }
        return n[r].exports
    }
    for (var i = "function" == typeof asrequire && asrequire, r = 0; r < o.length; r++) a(o[r]);
    return a
}({
    1: [function (e, t, n) {
        e("@aos/asi-classes/classes/LivePerson/chat_deployment_global/lp/mtagconfig"), e("@aos/as-legacy/src/shared/chat/WebChat"), e("@aos/as-legacy/src/shared/chat/WebChatBootstrap"), e("@aos/as-legacy/src/shared/chat/IntermediateChat")
    }, {
        "@aos/as-legacy/src/shared/chat/IntermediateChat": 5
        , "@aos/as-legacy/src/shared/chat/WebChat": 6
        , "@aos/as-legacy/src/shared/chat/WebChatBootstrap": 7
        , "@aos/asi-classes/classes/LivePerson/chat_deployment_global/lp/mtagconfig": 8
    }]
    , 2: [function (e, t, n) {
        t.exports = {
            userAgent: function (e) {
                var t = {}
                    , n = /(applewebkit)/i.test(e)
                    , o = /Chrome/.test(e) && /Google Inc/.test(navigator.vendor)
                    , a = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(e)
                    , i = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(e)
                    , r = a ? a : i
                    , s = /os ([\d_]*)/i;
                return t.userAgent = e, t.isMobileIos = /(iphone|ipod)/i.test(e) && n, t.isIpad = /(ipad)/i.test(e), t.iosVersion = t.isMobileIos || t.isIpad ? parseFloat(e.match(s)[1].replace("_", ".")) : 0, t.isIe = !!r, t.ieVersion = r ? parseFloat(RegExp.$1) : 0, t.isPhantom = /Phantom/.test(navigator.userAgent), t.isAndroidMobile = !!e.match(/Android.*Mobile/i) || e.match(/Mobile.*Android/i), t.isAndroidInternet = !!t.isAndroidMobile && !o && n, t.androidVersion = parseFloat(t.isAndroidMobile && e.slice(e.indexOf("Android") + 8), 10), t.isHandheldPhone = t.isMobileIos || t.isAndroidMobile, t.isFirefox = /(Firefox)/i.test(e), t.isChrome = /(Chrome)/i.test(e), t.isSafari = /(Safari)/i.test(e) && !/(Chrome)/i.test(e), t
            }
            , getReferrer: function () {
                return document.referrer
            }
            , doRedirect: function (e) {
                window.location.href = e
            }
            , isOnline: function () {
                return window.navigator.onLine
            }
            , getWindowQueryString: function () {
                return window.location.search
            }
            , getCurrentPathname: function () {
                return window.location.pathname
            }
            , getViewportHeight: function () {
                return window.innerHeight || document.documentElement.clientHeight
            }
            , getViewportWidth: function () {
                return window.innerWidth || document.documentElement.clientWidth
            }
            , submit: function (e) {
                e = "undefined" == typeof e.get ? e : e.get(0), e.submit()
            }
            , getFocused: function () {
                return document.activeElement
            }
            , focus: function (e) {
                e.focus()
            }
            , pixelRatio: window.devicePixelRatio
            , devicePixelRatio: function () {
                return arguments.length ? void(this.pixelRatio = arguments[0]) : this.pixelRatio
            }
            , selectedText: function () {
                var e = ""
                    , t = this.userAgent(navigator.userAgent).isIe
                    , n = this.userAgent(navigator.userAgent).isFirefox;
                if (t) e = document.selection.createRange().htmlText;
                else if (n) {
                    var o = document.activeElement;
                    e = o.value.substring(o.selectionStart, o.selectionEnd)
                }
                else e = window.getSelection().toString();
                return e
            }
            , getCookies: function () {
                return document.cookie || ""
            }
            , setCookie: function (e) {
                document.cookie = e
            }
        }
    }, {}]
    , 3: [function (e, t, n) {
        var o, a = {
            Keyboard: {
                Backspace: 8
                , Tab: 9
                , Clear: 12
                , Return: 13
                , Shift: 16
                , Ctrl: 17
                , Alt: 18
                , Esc: 27
                , ArrowLeft: 37
                , ArrowUp: 38
                , ArrowRight: 39
                , ArrowDown: 40
                , Delete: 46
                , Home: 36
                , End: 35
                , PageUp: 33
                , PageDown: 34
                , Insert: 45
                , CapsLock: 20
                , LeftCommand: 91
                , RightCommand: 93
                , MozillaCommand: 224
                , RightWindowsStart: 92
                , Pause: 19
                , Space: 32
                , Help: 47
                , LeftWindow: 91
                , Select: 93
                , NumPad0: 96
                , NumPad1: 97
                , NumPad2: 98
                , NumPad3: 99
                , NumPad4: 100
                , NumPad5: 101
                , NumPad6: 102
                , NumPad7: 103
                , NumPad8: 104
                , NumPad9: 105
                , NumPadMultiply: 106
                , NumPadPlus: 107
                , NumPadEnter: 108
                , NumPadMinus: 109
                , NumPadPeriod: 110
                , NumPadDivide: 111
                , F1: 112
                , F2: 113
                , F3: 114
                , F4: 115
                , F5: 116
                , F6: 117
                , F7: 118
                , F8: 119
                , F9: 120
                , F10: 121
                , F11: 122
                , F12: 123
                , F13: 124
                , F14: 125
                , F15: 126
                , NumLock: 144
                , ScrollLock: 145
            }
            , Mouse: {
                Left: 1
                , Right: 3
            }
            , isMetaKey: function (e) {
                var t = !1;
                switch (e.keyCode) {
                case a.Keyboard.Tab:
                case a.Keyboard.Clear:
                case a.Keyboard.Return:
                case a.Keyboard.Shift:
                case a.Keyboard.Ctrl:
                case a.Keyboard.Alt:
                case a.Keyboard.Esc:
                case a.Keyboard.Left:
                case a.Keyboard.Up:
                case a.Keyboard.Right:
                case a.Keyboard.Down:
                case a.Keyboard.Home:
                case a.Keyboard.End:
                case a.Keyboard.PageUp:
                case a.Keyboard.PageDown:
                case a.Keyboard.Insert:
                case a.Keyboard.CapsLock:
                case a.Keyboard.LeftCommand:
                case a.Keyboard.RightCommand:
                case a.Keyboard.MozillaCommand:
                case a.Keyboard.RightWindowsStart:
                    t = !0
                }
                return t
            }
            , StandardDeferredInputTimeout: 333
            , isNumpadNumKey: function (e) {
                return 96 <= e.keyCode && e.keyCode <= 111
            }
            , isAlphaNumKey: function (e) {
                return a.isNumpadNumKey(e) || !(e.keyCode in o())
            }
        };
        o = function () {
            if (!o.parsed) {
                var e, t = {};
                for (e in a.Keyboard) a.Keyboard.hasOwnProperty(e) && (t[a.Keyboard[e]] = e);
                return (o = function () {
                    return t
                }).parsed = !0, t
            }
        }, t.exports = a
    }, {}]
    , 4: [function (e, t, n) {
        var o, a, i = e("../env/env")
            , r = e("jquery")
            , s = document && document.documentElement.style
            , d = document.createElement("input")
            , c = document.createElement("textarea")
            , l = i.userAgent(navigator.userAgent)
            , u = l.userAgent
            , h = l.isMobileIos
            , p = l.isIpad
            , g = l.iosVersion
            , f = l.isIe
            , m = l.ieVersion
            , w = l.isPhantom
            , y = l.isAndroidMobile
            , C = l.isAndroidInternet
            , v = l.androidVersion
            , b = l.isHandheldPhone
            , T = l.isSafari
            , k = r("<div>")[0]
            , A = ["", "-webkit-", "-moz-", "-o-", "-ms-", "-khtml-"]
            , S = ["", "Webkit", "Moz", "O", "ms", "Khtml"]
            , B = function (e) {
                return !(!e && "" !== e)
            }
            , L = function (e, t) {
                var n = ""
                    , o = 0;
                r(k).css(e, "");
                var a = r(k).css(e);
                for (o = 0; o < A.length; o++)
                    if (n = A[o] + t, r(k).css(e, n), r(k).css(e) !== a) return r(k).css(e, ""), A[o];
                return null
            }
            , P = function (e) {
                var t, n, o = e.charAt(0).toUpperCase() + e.slice(1);
                for (t = 0; t < S.length; t++)
                    if (n = S[t] + ("" !== S[t] ? o : e), n in s) return n;
                return null
            }
            , _ = function (e, t) {
                if (t) {
                    var n = P(e);
                    if (null !== n) return !0
                }
                return B(k.style[e])
            }
            , E = function () {
                var e, t, n, o = Object.prototype.hasOwnProperty;
                try {
                    return n = !1, o.call(window, "styleMedia") ? n = window.styleMedia.matchMedium("(-webkit-transform-3d)") : o.call(window, "media") && (n = window.media.matchMedium("(-webkit-transform-3d)")), n || ((t = document.getElementById("supportsThreeDStyle")) || (t = document.createElement("style"), t.id = "supportsThreeDStyle", t.textContent = "@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }", document.querySelector("head").appendChild(t)), (e = document.querySelector("#supportsThreeD")) || (e = document.createElement("div"), e.id = "supportsThreeD", document.body.appendChild(e)), n = 3 === e.offsetHeight || void 0 !== t.style.MozTransform || void 0 !== t.style.WebkitTransform), n
                }
                catch (a) {
                    return !1
                }
            }
            , I = function () {
                return /AppleWebKit\/(\d+)/.exec(u) && RegExp.$1
            }
            , D = "windows"
            , x = navigator.appVersion;
        x.indexOf("Mac") !== -1 ? D = "macosx" : x.indexOf("X11") !== -1 ? D = "linux" : x.indexOf("Linux") !== -1 ? D = "linux" : x.indexOf("SunOS") !== -1 && (D = "sunos");
        var M = l.isAndroidMobile;
        ("transition" in s || "MozTransition" in s) && (!M || M && void 0 !== window.ontransitionend) ? (a = "transitionend", o = "animationend") : "msTransition" in s ? (a = "MSTransitionEnd", o = "MSAnimationEnd") : "WebkitTransition" in s && (a = "webkitTransitionEnd", o = "webkitAnimationEnd");
        var N = {
            cssPropertyName: P
            , cssPropertyValuePrefix: L
            , textOverflow: _("textOverflow", !0)
            , inputPlaceholder: "placeholder" in d
            , maxlengthTextarea: "maxLength" in c
            , onInput: "oninput" in d
            , touch: !!("ontouchstart" in window) && !w
            , boxShadow: _("boxShadow", !0)
            , positionSticky: null !== L("position", "sticky")
            , gradient: null !== L("background-image", "linear-gradient(top, black, white)")
            , opacity: _("opacity", !1)
            , overflowScrolling: _("overflowScrolling", !0)
            , backgroundSvg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
            , vhHeight: function () {
                try {
                    k.style.height = "100vh"
                }
                catch (e) {}
                return "100vh" === k.style.height
            }()
            , transform: _("transform", !0)
            , transformProperty: P("transform")
            , threeDTransforms: E()
            , animation: _("animationName", !0)
            , transition: _("transitionProperty", !0)
            , transitionEndName: a
            , animationEndName: o
            , isMobileIos: h
            , isIpad: p
            , isSafari: T
            , iosVersion: g
            , os: D
            , isIe: f
            , ieVersion: m
            , isAndroidMobile: y
            , isAndroidInternet: C
            , androidVersion: v
            , isHandheldPhone: b
            , webkitVersion: I()
            , isMobileOptimized: !1
        };
        t.exports = N, r(function () {
            var e = r("html");
            e.addClass(N.backgroundSvg ? "svg" : "no-svg"), e.addClass(N.touch ? "touch" : "no-touch"), e.addClass(N.isIe && N.ieVersion >= 9 ? "ie" : "no-ie"), e.addClass(N.isIe && N.ieVersion < 9 ? "oldie" : "no-oldie"), e.addClass(N.animation ? "supports-animation" : "no-supports-animation"), e.addClass(_("columns", !0) ? "supports-columns" : "no-supports-columns"), e.addClass(_("backdrop-filter", !0) ? "supports-backdrop-filter" : "no-supports-backdrop-filter")
        })
    }, {
        "../env/env": 2
        , jquery: "jquery"
    }]
    , 5: [function (e, t, n) {
        var o = e("jquery")
            , a = e("can");
        e("can/construct/super/super");
        var i = {}
            , r = e("@aos/as-elements/src/util/env/env");
        i.IntermediateChat = a.Control.extend({
            init: function (e) {
                e[0].infoURL ? (this.options.infoURL = e[0].infoURL, this.requestInfoProps()) : window.console && window.console.log("infoURL not available."), this.options.chatErrorURL = e[0].chatErrorURL
            }
            , requestInfoProps: function () {
                var e, t, n = this
                    , i = o("#chatForm");
                e = a.ajax({
                    url: n.options.infoURL
                    , dataType: "json jsonrpc"
                    , async: !1
                    , timeout: 15e3
                }).done(function (e) {
                    var n, a, s = e.clientInfo;
                    for (n in s) s.hasOwnProperty(n) && (a = s[n], t = o('[name="' + n + '"]'), t && t.attr("value", a));
                    r.submit(i)
                }).fail(function (e) {
                    e = e || "INFO JSON load failure.", window.console && (window.console.log(e + " [" + n.options.infoURL + "]"), r.doRedirect(this.options.chatErrorURL))
                })
            }
        }), window.as.IntermediateChat = i.IntermediateChat, t.exports = i.IntermediateChat
    }, {
        "@aos/as-elements/src/util/env/env": 2
        , can: "can"
        , "can/construct/super/super": "can/construct/super/super"
        , jquery: "jquery"
    }]
    , 6: [function (e, t, n) {
        var o = e("jquery")
            , a = e("can");
        e("can/construct/super/super");
        var i = {}
            , r = e("@aos/as-elements/src/util/support/support")
            , s = e("@aos/as-elements/src/util/event/event")
            , d = e("@aos/as-analytics/src/jquery.AsMetrics")
            , c = e("@aos/as-elements/src/util/env/env");
        i.WebChat = a.Control.extend({
            defaults: {
                drawer: "#concierge-drawer"
                , drawerButtons: ".concierge-drawer .concierge-button"
                , drawerTogglerContainer: "#masthead-chat-view"
                , drawerToggler: "#masthead-chat-button"
                , template: "{{chatForm}}"
                , needhelp: "#needhelp"
                , needhelpLinks: "#needhelp_drawer .box > *"
                , configLoaded: a.compute(!1)
                , drawerOpen: a.compute(!1)
                , chatTypesLoaded: a.compute(!1)
            }
        }, {
            jsonData: null
            , formParams: new a.List
            , chatTypesList: null
            , togglerDisplayed: !1
            , ipsChatInvite: o(".guide-footer .invitation-to-chat")
            , btnIndex: null
            , tracked: null
            , timer: null
            , hoverNodeId: ""
            , chatBtnMap: {
                cchat: "TextChat"
                , htchat: "TextChat"
                , cc2c: "Call"
                , htc2c: "Call"
                , httour: "ScreenCast"
            }
            , jsonKey: {}
            , init: function (e, t) {
                o(this.options.drawerTogglerContainer);
                this.options.drawerOpen(!1), this.btnIndex = 1, r.opacity && o(this.options.drawer).addClass("opacity"), this.requestComplete = a.proxy(this.requestComplete, this), this.requestFail = a.proxy(this.requestFail, this), this.options.btnConfig.disablePageLoadCall !== !0 && this.options.btnConfig.onDemandChatType !== !0 && this.callExpertAdmin(), o(this.options.needhelp).length > 0 && (o("#u_chat").hide(), o(this.options.needhelp).attr("aria-haspopup", "true"), this.needhelpParts = {
                    caslink: "Need help with a product you own?"
                    , orderstatuslink: "Need help with an order you placed?"
                    , chatlink: "Need help buying products you want?"
                })
            }
            , callExpertAdmin: function (e) {
                this.request = a.ajax({
                    url: this.options.btnConfig.availURL
                    , dataType: "json jsonrpc"
                    , data: this.jsonKey
                    , async: "undefined" === e || e
                    , timeout: 15e3
                }).done(this.requestComplete).fail(this.requestFail)
            }
            , openBlankWindow: function () {
                this.blankWindow = window.open("#", "chatWin", "width=375,height=773,menubar=no,location=no,resizable=no,scrollbars=no,status=no")
            }
            , "{drawerToggler} click": "drawerTogglerSelected"
            , "{drawerToggler} touchend": "drawerTogglerSelected"
            , "{drawerToggler} mouseout": "onMouseLeave"
            , "{drawerToggler} keydown": function (e, t) {
                if (t.keyCode === s.Keyboard.ArrowDown && this.options.drawerOpen()) {
                    var n = o("#concierge-drawer .controls div a:visible");
                    n.get(0).focus()
                }
                else t.keyCode !== s.Keyboard.Return && t.keyCode !== s.Keyboard.Space && t.keyCode !== s.Keyboard.ArrowDown || (this.drawerTogglerSelected(e, t), t.preventDefault(), window.setTimeout(function () {
                    var e = o("#concierge-drawer .controls div a:visible");
                    e.get(0).focus()
                }, 280))
            }
            , "{drawer} mouseenter": "onMouseEnter"
            , "{drawer} mouseleave": "onMouseLeave"
            , "{drawer} keydown": "handleKeyDown"
            , "{drawerButtons} click": "toggleDrawer"
            , "{document.body} click": "closeMenu"
            , "{document.body} touchend": "closeMenu"
            , ".cchat click": "handleBtnClick"
            , ".htchat click": "handleBtnClick"
            , ".cc2c click": "handleBtnClick"
            , ".htc2c click": "handleBtnClick"
            , ".httour click": "handleBtnClick"
            , ".chat-ondemand click": "onDemandBtnClick"
            , "{drawerOpen} change": function () {
                this.revealDrawer(), this.enableDrawerBtns()
            }
            , "{configLoaded} change": function () {
                this.createBtnList(), this.createForm()
            }
            , "{chatTypesLoaded} change": function () {
                this.revealDrawerToggler(), this.revealBtns()
            }
            , handleKeyDown: function (e, t) {
                var n = t.keyCode
                    , a = o(this.options.drawerToggler)
                    , i = o("#concierge-drawer .controls div a:visible")
                    , r = i.length;
                n === s.Keyboard.Esc && (this.options.drawerOpen(!1), a.focus()), n === s.Keyboard.Tab ? t.target !== i.get(r - 1) || t.shiftKey ? t.target === i.get(0) && t.shiftKey && (t.preventDefault(), i.get(r - 1).focus()) : (t.preventDefault(), i.get(0).focus()) : t.keyCode === s.Keyboard.ArrowDown ? t.target === i.get(r - 1) ? (t.preventDefault(), i.get(0).focus()) : (t.preventDefault(), i[o.inArray(t.target, i) + 1].focus()) : t.keyCode === s.Keyboard.ArrowUp && (t.target === i.get(0) ? (t.preventDefault(), i.get(r - 1).focus()) : (t.preventDefault(), i[o.inArray(t.target, i) - 1].focus()))
            }
            , requestFail: function (e) {
                e = e || "JSON load failure.", window.console && window.console.log(e + " [" + this.options.btnConfig.availURL + "]"), this.blankWindow && this.blankWindow.close()
            }
            , requestTimeout: function () {
                try {
                    this.request.abort()
                }
                catch (e) {}
            }
            , requestComplete: function (e) {
                this.jsonData = {
                    buttons: e.buttons
                    , url: e.url
                    , chatType: e.chatType
                    , routingConfig: e.webChatRouting
                    , urlMsg: e.urlMsg
                }, this.jsonData.buttons && this.jsonData.url && this.jsonData.routingConfig ? this.options.configLoaded(!0) : this.requestFail("Required properties not found in JSON."), this.calledFromChatLink === !0 && this.drawerChatLinkAction(), this.options.btnConfig.onDemandChatType && (e.urlMsg ? this.openOohWindow() : this.btnSelected(o(this.sender), e.chatType, this.chatBtnMap[e.chatType]))
            }
            , createForm: function () {
                var e, t, n, i, r, s = this.options.config.chat.page
                    , d = this.jsonData.routingConfig
                    , c = this.jsonData.url
                    , l = []
                    , u = function (e, t) {
                        l.push({
                            name: e
                            , id: e
                            , value: t
                            , type: "hidden"
                        })
                    }
                    , h = null;
                r = this.sender ? o(this.sender).attr("data-chat-ui") : null, h = r ? r.split(";") : null;
                for (n in h) h.hasOwnProperty(n) && (n = h[n].split("="), u(n[0], n[1]));
                this.options.configLoaded() && d && s && c && (u("WEB_CHAT_TYPE", ""), u("WEB_CHAT_ROUTING_ID", ""), u("WEB_CHAT_ORIGIN", ""), u("WEB_CHAT_REFER_URL", document.referrer), u("WEB_CHAT_PAGE_URL", document.URL), u("WEB_CHAT_TOP_QS_CAT", ""), u("WEB_CHAT_NI_CHAT_MESSAGE", ""), u("WEB_CHAT_NI_CHAR_TIMER", ""), u("WEB_CHAT_TOP_QS", ""), u("WEB_CHAT_NI_CHAT", ""));
                for (e in s) s.hasOwnProperty(e) && (i = s[e], u(i.name, i.value));
                for (t in d) d.hasOwnProperty(t) && u(t, d[t]);
                this.formParams.replace(l), a.$(document.body).append(a.view(this.options.template, {
                    url: c
                    , inputs: this.formParams
                }))
            }
            , createBtnList: function () {
                var e, t = this.jsonData ? this.jsonData.buttons : "";
                delete t.httour, delete t.htc2c, delete t.cc2c, this.chatTypesList = [];
                for (e in t) t.hasOwnProperty(e) && "true" === t[e].status && this.chatTypesList.push(e);
                this.chatTypesList.length > 0 && this.options.chatTypesLoaded(!0)
            }
            , revealBtns: function () {
                var e = this.chatTypesList
                    , t = this
                    , n = "lpButton";
                e !== this.tracked && (a.each(e, function (a) {
                    var i = o("." + a);
                    i.length > 0 && e !== this.tracked && (i.addClass("chat-online"), i.parent().addClass("online"), i.each(function (e, n) {
                        t.addLink(o(n))
                    }), i.hasClass("concierge-button") ? (i.attr("data-tracking", n + t.btnIndex), t.btnIndex += 1) : i.attr("data-tracking", i.attr("id")))
                }), this.tracked = e)
            }
            , addLink: function (e) {
                if (e.find("a").length <= 0) {
                    var t = e.children(":first");
                    e.is("a, button") || t.wrap('<a href="#"></a>'), t.is("div") && t.hasClass("ui-button") && t.parent("a").html(t.html()).addClass("ui-button")
                }
                e.hasClass("concierge-button") && !e.hasClass("handheld") && e.children(":first").attr("tabindex", "-1")
            }
            , revealDrawerToggler: function () {
                var e = this.options.drawerTogglerContainer
                    , t = this.options.drawerToggler;
                e.length > 0 && t.length > 0 && this.options.chatTypesLoaded && !this.togglerDisplayed && (o(e).addClass("enabled"), o(t).attr("aria-controls", o(this.options.drawer).attr("id")), this.togglerDisplayed = !0)
            }
            , trackBtn: function (e, t, n) {
                var o = "Chat"
                    , a = n ? e + ":" + n : e;
                d && (d.fireMicroEvent({
                    eVar: "prop41"
                    , feature: o
                    , part: t
                    , action: a
                }), "Selected" === e && (t.indexOf("AskNow") !== -1 && (t = "AskNow"), d.fireMicroEvent({
                    eVar: "eVar41"
                    , feature: o
                    , action: t
                })))
            }
            , enableDrawerBtns: function () {
                var e = o(".concierge-button.chat-online a")
                    , t = o(".concierge-button.chat-learn-more a");
                e.length > 0 && e.attr("tabIndex", this.options.drawerOpen() && o(this.options.drawer).hasClass("open-drawer") ? "0" : "-1"), t.length > 0 && t.attr("tabIndex", this.options.drawerOpen() && o(this.options.drawer).hasClass("open-drawer") ? "0" : "-1")
            }
            , handleBtnClick: function (e, t) {
                t && (t.preventDefault(), t.stopImmediatePropagation());
                var n = this;
                n.jsonData.urlMsg ? this.openOohWindow() : o.each(this.chatBtnMap, function (t, o) {
                    e.hasClass(t) && n.btnSelected(e, n.jsonData.chatType, n.chatBtnMap[n.jsonData.chatType])
                })
            }
            , btnSelected: function (e, t, n) {
                var a, i, r = o("#chatForm");
                (e.hasClass("chat-online") || this.options.btnConfig.onDemandChatType) && (e.hasClass("concierge-button") ? (a = n + "-ht", i = "") : (a = "AskNow-lt", i = e.attr("data-tracking")), this.trackBtn("Selected", a, i), r.length > 0 && t && (o('[name="WEB_CHAT_TYPE"]').data("input").attr("value", t), o('[name="WEB_CHAT_ROUTING_ID"]').data("input").attr("value", this.jsonData.buttons[t].WEB_CHAT_ROUTING_ID), o('[name="WEB_CHAT_ORIGIN"]').data("input").attr("value", e.attr("data-tracking")), o('[name="WEB_CHAT_TOP_QS_CAT"]').data("input").attr("value", this.jsonData.buttons[t].WEB_CHAT_TOP_QS_CAT), o('[name="WEB_CHAT_NI_CHAT_MESSAGE"]').data("input").attr("value", this.jsonData.buttons[t].WEB_CHAT_NI_CHAT_MESSAGE), o('[name="WEB_CHAT_NI_CHAR_TIMER"]').data("input").attr("value", this.jsonData.buttons[t].WEB_CHAT_NI_CHAR_TIMER), o('[name="WEB_CHAT_TOP_QS"]').data("input").attr("value", this.jsonData.buttons[t].WEB_CHAT_TOP_QS), o('[name="WEB_CHAT_NI_CHAT"]').data("input").attr("value", this.jsonData.buttons[t].WEB_CHAT_NI_CHAT), this.options.btnConfig.infoURL ? this.requestInfoProps() : this.openChatWin(r)))
            }
            , openChatWin: function (e) {
                this.openBlankWindow(), c.submit(e)
            }
            , requestInfoProps: function () {
                var e, t, n = this
                    , i = o("#chatForm");
                e = a.ajax({
                    url: n.options.btnConfig.infoURL
                    , dataType: "json jsonrpc"
                    , async: !1
                    , timeout: 15e3
                }).done(function (e) {
                    var a, r, s = e.clientInfo;
                    for (a in s) s.hasOwnProperty(a) && (r = s[a], t = o('[name="' + a + '"]').data("input"), t ? t.attr("value", r) : n.formParams.push({
                        name: a
                        , id: a
                        , value: r
                        , type: "hidden"
                    }));
                    n.openChatWin(i)
                }).fail(function (e) {
                    e = e || "INFO JSON load failure.", window.console && window.console.log(e + " [" + n.options.btnConfig.availURL + "]")
                })
            }
            , drawerTogglerSelected: function (e, t) {
                var n = t.target
                    , i = this.timer;
                i && (window.clearTimeout(i), i = null), i = setTimeout(a.proxy(function () {
                    i = null, this.toggleDrawer(), this.options.drawerOpen() && this.trackBtn("Selected", "AskNow-ht", o(this.options.drawerToggler).attr("id"))
                }, this), 150), this.hoverNodeId = n.id
            }
            , onMouseEnter: function (e, t) {
                var n = e.attr("id");
                this.hoverNodeId = n, this.timer && (window.clearTimeout(this.timer), this.timer = null)
            }
            , onMouseLeave: function (e, t) {
                var n = e.attr("id");
                if (n === this.hoverNodeId) {
                    this.timer && (window.clearTimeout(this.timer), this.timer = null);
                    var a = function () {
                        this.timer = null, o(this.options.drawer).length > 0 && this.options.drawerOpen() && this.toggleDrawer()
                    };
                    this.timer = setTimeout(o.proxy(a, this), 2e3), this.hoverNodeId = ""
                }
            }
            , toggleDrawer: function () {
                this.options.drawerOpen(!this.options.drawerOpen())
            }
            , revealDrawer: function () {
                var e = o(this.options.drawer)
                    , t = o(this.options.drawerToggler)
                    , n = o(this.options.drawer).find("p.intro-message");
                e.length > 0 && (this.options.drawerOpen() ? (e.addClass("open-drawer"), t.addClass("on"), e.attr("aria-hidden", "false"), t.attr("aria-expanded", "true"), n.show()) : (e.removeClass("open-drawer"), t.removeClass("on"), e.attr("aria-hidden", "true"), t.attr("aria-expanded", "false")))
            }
            , closeMenu: function (e, t) {
                if (o(this.options.drawer).length > 0 && this.options.drawerOpen()) {
                    var n = t.target || t.srcElement;
                    do {
                        if (n && "concierge-drawer" === n.id || "masthead-chat-button" === n.id) return;
                        n = n.parentNode
                    } while (n && n !== document.body);
                    this.toggleDrawer()
                }
            }
            , "{needhelpLinks} click": function (e, t) {
                var n = this;
                if ("chatlink" === e.prop("id")) {
                    var o = this.needhelpParts.chatlink;
                    o && this.fireMetrics(o), this.options.btnConfig.onDemandChatType ? n.onDemandBtnClick(e, t) : this.options.btnConfig.disablePageLoadCall === !0 && this.options.configLoaded() === !1 ? e.hasClass("chat-loading") || (this.openBlankWindow(), this.calledFromChatLink = !0, this.callExpertAdmin(), e.addClass("chat-loading")) : this.drawerChatLinkAction()
                }
                else this.redirectUrl(e);
                this.blankWindow && (t.preventDefault(), this.blankWindow = void 0)
            }
            , drawerChatLinkAction: function () {
                o("#chatlink").removeClass("chat-loading");
                void 0 === this.jsonData.urlMsg ? this.handleBtnClick(o("." + this.chatTypesList)) : this.openOohWindow()
            }
            , openOohWindow: function () {
                var e = this.jsonData.urlMsg;
                void 0 === this.blankWindow || this.blankWindow.closed === !0 ? window.open(e, "chatWin", "width=375,height=773,menubar=no,location=no,resizable=no,scrollbars=no,status=no,modal=yes") : this.blankWindow.location = e
            }
            , fireMetrics: function (e) {
                var t = (window.s.pageName, "Just ask");
                e || (e = "");
                var n = {
                    eVar: "prop41"
                    , feature: t
                    , action: e
                };
                n && d.fireMicroEvent(n)
            }
            , redirectUrl: function (e) {
                var t, n = e.prop("id")
                    , o = e.prop("href");
                switch (n) {
                case "caslink":
                    t = this.needhelpParts.caslink, t && this.fireMetrics(t), this.blankWindow = window.open(o, "CAS");
                    break;
                case "orderstatuslink":
                    t = this.needhelpParts.orderstatuslink, t && this.fireMetrics(t), window.setTimeout(function () {
                        c.doRedirect(o)
                    }, 150)
                }
            }
            , onDemandBtnClick: function (e, t) {
                t.preventDefault();
                var n, o = null
                    , a = null;
                o = e ? e.attr("data-chat-avail") : null, a = o ? o.split(";") : null;
                for (n in a) a.hasOwnProperty(n) && (n = a[n].split("="), n[0].length > 0 && (this.jsonKey[n[0]] = decodeURIComponent(n[1] || "")));
                this.sender = e, this.callExpertAdmin(!1)
            }
        }), window.as.WebChat = i.WebChat, t.exports = i.WebChat
    }, {
        "@aos/as-analytics/src/jquery.AsMetrics": "@aos/as-analytics/src/jquery.AsMetrics"
        , "@aos/as-elements/src/util/env/env": 2
        , "@aos/as-elements/src/util/event/event": 3
        , "@aos/as-elements/src/util/support/support": 4
        , can: "can"
        , "can/construct/super/super": "can/construct/super/super"
        , jquery: "jquery"
    }]
    , 7: [function (e, t, n) {
        var o = e("jquery");
        e("can");
        e("can/construct/super/super");
        var a = o
            , i = e("./WebChat.js");
        a(function () {
            var e, t = window.chatConfig
                , n = window.chatButtonConfig
                , o = document.body;
            t ? t.chat && n && (e = window.as.isFlex ? {
                btnConfig: n
                , config: t
                , template: "{{chatForm}}"
                , drawerButtons: ".concierge-button"
                , needhelpLinks: ".as-needhelp-links > *"
            } : {
                btnConfig: n
                , config: t
                , template: "{{chatForm}}"
            }, window.as.WebChatInstance = new i(o, e)) : window.console.log("No chat config detected.")
        })
    }, {
        "./WebChat.js": 6
        , can: "can"
        , "can/construct/super/super": "can/construct/super/super"
        , jquery: "jquery"
    }]
    , 8: [function (e, t, n) {
        function o(e) {
            if (!s.lpTagLoaded) {
                "undefined" != typeof e && "object" != typeof e || (e = s.lpMTagSrc ? s.lpMTagSrc : s.lpTagSrv ? s.lpProtocol + "://" + s.lpTagSrv + "/hcp/html/mTag.js" : "/hcp/html/mTag.js"), 0 !== e.indexOf("http") ? e = s.lpProtocol + "://" + s.lpServer + e + "?site=" + s.lpNumber : e.indexOf("site=") < 0 && (e += e.indexOf("?") < 0 ? "?" : "&", e = e + "site=" + s.lpNumber);
                var t = document.createElement("script");
                t.setAttribute("type", "text/javascript"), t.setAttribute("charset", "iso-8859-1"), t.setAttribute("src", e), document.getElementsByTagName("head").item(0).appendChild(t)
            }
        }

        function a(e, t, n) {
            if (t.indexOf("OrderTotal") !== -1 || t.indexOf("OrderNumber") !== -1) {
                if ("" === n || 0 === n) return;
                s.sendCookies = !1
            }
            switch (n = r(n.toString()), t.length > 50 && (t = t.substr(0, 50)), n.length > 50 && (n = n.substr(0, 50)), e) {
            case "page":
                s.pageVar[s.pageVar.length] = escape(t) + "=" + escape(n);
                break;
            case "session":
                s.sessionVar[s.sessionVar.length] = escape(t) + "=" + escape(n);
                break;
            case "visitor":
                s.visitorVar[s.visitorVar.length] = escape(t) + "=" + escape(n)
            }
        }

        function i() {
            var e = document.cookie
                , t = window.lpMTag;
            "IE" == t.lpBrowser && e.length > 1e3 && (s.sendCookies = !1)
        }

        function r(e) {
            return e.replace(/^\s+|\s+$/g, "")
        }
        var s = {
            lpTagLoaded: !1
            , lpTagSrv: "storechat.apple.com"
            , pageStartTime: (new Date).getTime()
            , deploymentID: "1"
            , sendCookies: !1
        };
        s.deploymentConfigPath = s.lpTagSrv + "/visitor/addons/deploy.asp", s.lpLoadScripts = function () {
            o(s.lpProtocol + "://" + s.deploymentConfigPath + "?site=" + s.lpNumber + "&d_id=" + s.deploymentID)
        }, s.calculateSentPageTime = function () {
            var e = (new Date).getTime() - s.pageStartTime;
            a("page", "pageLoadTime", Math.round(e / 1e3) + " sec")
        }, "undefined" == typeof s.pageVar && (s.pageVar = []), "undefined" == typeof s.sessionVar && (s.sessionVar = []), "undefined" == typeof s.visitorVar && (s.visitorVar = []), "undefined" == typeof s.onLoadCode && (s.onLoadCode = []), "undefined" == typeof s.dynButton && (s.dynButton = []), "undefined" == typeof s.ifVisitorCode && (s.ifVisitorCode = []);
        try {
            "undefined" == typeof lpCountryCode && (lpCountryCode = "us"), "undefined" != typeof a && a("page", "lpCountryCode", lpCountryCode), "undefined" == typeof lpSegment && (lpSegment = "consumer"), "undefined" != typeof a && a("page", "lpSegment", lpSegment), "undefined" == typeof lpUnit && (lpUnit = "sales"), "undefined" != typeof a && a("page", "lpUnit", lpUnit), "undefined" == typeof lpLanguage && (lpLanguage = "english"), "undefined" != typeof a && a("session", "lpLanguage", lpLanguage), s.defaultInvite = "chat-" + lpCountryCode + "-" + lpSegment + "-" + lpUnit + "-" + lpLanguage
        }
        catch (d) {}
        s.onLoadCode[s.onLoadCode.length] = i, s.onLoadCode[s.onLoadCode.length] = function () {
            if ("undefined" != typeof s.dynButton)
                for (var e = 0; e < s.dynButton.length; e++) "undefined" != typeof s.dynButton[e].pid && null === document.getElementById(s.dynButton[e].pid) && (s.dynButton.splice(e, 1), e--)
        }, s.onLoadAll = function () {
            s.calculateSentPageTime(), s.lpLoadScripts()
        }, s.dynButton[s.dynButton.length] = {
            name: "chat-" + lpCountryCode + "-" + lpSegment + "-" + lpUnit + "-" + lpLanguage + "-1"
            , pid: "lpButton1"
            , afterStartPage: !0
        }, s.dynButton[s.dynButton.length] = {
            name: "chat-" + lpCountryCode + "-" + lpSegment + "-" + lpUnit + "-" + lpLanguage + "-2"
            , pid: "lpButton2"
            , afterStartPage: !0
        }, s.dynButton[s.dynButton.length] = {
            name: "chat-" + lpCountryCode + "-" + lpSegment + "-" + lpUnit + "-" + lpLanguage + "-3"
            , pid: "lpButton3"
            , afterStartPage: !0
        }, s.dynButton[s.dynButton.length] = {
            name: "chat-" + lpCountryCode + "-" + lpSegment + "-" + lpUnit + "-" + lpLanguage + "-4"
            , pid: "lpButton4"
            , afterStartPage: !0
        }, s.dynButton[s.dynButton.length] = {
            name: "chat-" + lpCountryCode + "-" + lpSegment + "-" + lpUnit + "-" + lpLanguage + "-5"
            , pid: "lpButton5"
            , afterStartPage: !0
        }, "undefined" != typeof s.dynButton && (s.dynButton[s.dynButton.length] = {
            name: "drawer-chat"
            , pid: "ConciergeChat"
            , afterStartPage: !0
            , ovr: "lpMTagConfig.db1"
        }, s.dynButton[s.dynButton.length] = {
            name: "drawer-concierge-call"
            , pid: "ConciergeHighTouchVoice"
            , afterStartPage: !0
            , ovr: "lpMTagConfig.db1"
        }, s.dynButton[s.dynButton.length] = {
            name: "drawer-lowtouch-call"
            , pid: "ConciergeLowTouchVoice"
            , afterStartPage: !0
            , ovr: "lpMTagConfig.db1"
        }, s.dynButton[s.dynButton.length] = {
            name: "drawer-screencast"
            , pid: "ConciergeScreencast"
            , afterStartPage: !0
            , ovr: "lpMTagConfig.db1"
        })
    }, {}]
}, {}, [1]);