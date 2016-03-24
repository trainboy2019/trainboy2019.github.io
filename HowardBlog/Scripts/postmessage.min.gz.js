var XD = function() {
    var e, d, b = 1, c, a = this;
    return {
        postMessage: function(f, h, g) {
            if (!h) {
                return 
            }
            g = g || parent;
            if (a.postMessage) {
                g.postMessage(f, h.replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
            } else {
                if (h) {
                    g.location = h.replace(/#.*$/, "") + "#" + ( + new Date) + (b++) + "&" + f
                }
            }
        },
        receiveMessage: function(g, f) {
            if (a.postMessage) {
                if (g) {
                    c = function(h) {
                        if ((typeof f === "string" && h.origin !== f) || (Object.prototype.toString.call(f) === "[object Function]" && f(h.origin)===!1)) {
                            return !1
                        }
                        g(h)
                    }
                }
                if (a.addEventListener) {
                    a[g ? "addEventListener": "removeEventListener"]("message", c, !1)
                } else {
                    a[g ? "attachEvent": "detachEvent"]("onmessage", c)
                }
            } else {
                e && clearInterval(e);
                e = null;
                if (g) {
                    e = setInterval(function() {
                        var i = document.location.hash, h = /^#?\d+&/;
                        if (i !== d && h.test(i)) {
                            d = i;
                            g({
                                data: i.replace(h, "")
                            })
                        }
                    }, 100)
                }
            }
        }
    }
}();

