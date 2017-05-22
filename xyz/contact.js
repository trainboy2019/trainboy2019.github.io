function FrameBuilder(formId, appendTo, initialHeight, iframeCode) {
    this.formId = formId;
    this.initialHeight = initialHeight;
    this.iframeCode = iframeCode;
    this.frame = null;
    this.timeInterval = 200;
    this.appendTo = appendTo || false;
    this.formSubmitted = 0;
    this.init = function() {
        this.createFrame();
        this.addFrameContent(this.iframeCode);
    };
    this.createFrame = function() {
        var tmp_is_ie = !!window.ActiveXObject;
        var htmlCode = "<" + "iframe onload=\"window.parent.scrollTo(0,0)\" src=\"\" allowtransparency=\"true\" frameborder=\"0\" name=\"" + this.formId + "\" id=\"" + this.formId + "\" style=\"width:100%; height:" + this.initialHeight + "px; border:none;\" scrolling=\"no\"></if" + "rame>";
        if (this.appendTo === false) {
            document.write(htmlCode);
        } else {
            var tmp = document.createElement('div');
            tmp.innerHTML = htmlCode;
            var a = this.appendTo;
            document.getElementById(a).appendChild(tmp.firstChild);
        }
        this.frame = document.getElementById(this.formId);
        if (tmp_is_ie === true) {
            try {
                var iframe = this.frame;
                var doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow.document || iframe.document);
                doc.open();
                doc.write("");
            } catch (err) {
                this.frame.src = "javascript:void((function(){document.open();document.domain=\'" + this.getBaseDomain() + "\';document.close();})())";
            }
        }
        this.addEvent(this.frame, 'load', this.bindMethod(this.setTimer, this));
        var self = this;
        if (window.chrome !== undefined) {
            this.frame.onload = function() {
                try {
                    var doc = this.contentWindow.document;
                    var _jotform = this.contentWindow.JotForm;
                    if (doc !== undefined) {
                        var form = doc.getElementById("" + self.formId);
                        self.addEvent(form, "submit", function() {
                            if (_jotform.validateAll()) {
                                self.formSubmitted = 1;
                            }
                        });
                    }
                } catch (e) {}
            }
        }
    };
    this.addEvent = function(obj, type, fn) {
        if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj[type + fn] = function() {
                obj["e" + type + fn](window.event);
            };
            obj.attachEvent("on" + type, obj[type + fn]);
        } else {
            obj.addEventListener(type, fn, false);
        }
    };
    this.addFrameContent = function(string) {
        string = string.replace(new RegExp('src\\=\\"[^"]*captcha.php\"><\/scr' + 'ipt>', 'gim'), 'src="http://api.recaptcha.net/js/recaptcha_ajax.js"></scr' + 'ipt><' + 'div id="recaptcha_div"><' + '/div>' + '<' + 'style>#recaptcha_logo{ display:none;} #recaptcha_tagline{display:none;} #recaptcha_table{border:none !important;} .recaptchatable .recaptcha_image_cell, #recaptcha_table{ background-color:transparent !important; } <' + '/style>' + '<' + 'script defer="defer"> window.onload = function(){ Recaptcha.create("6Ld9UAgAAAAAAMon8zjt30tEZiGQZ4IIuWXLt1ky", "recaptcha_div", {theme: "clean",tabindex: 0,callback: function (){' + 'if (document.getElementById("uword")) { document.getElementById("uword").parentNode.removeChild(document.getElementById("uword")); } if (window["validate"] !== undefined) { if (document.getElementById("recaptcha_response_field")){ document.getElementById("recaptcha_response_field").onblur = function(){ validate(document.getElementById("recaptcha_response_field"), "Required"); } } } if (document.getElementById("recaptcha_response_field")){ document.getElementsByName("recaptcha_challenge_field")[0].setAttribute("name", "anum"); } if (document.getElementById("recaptcha_response_field")){ document.getElementsByName("recaptcha_response_field")[0].setAttribute("name", "qCap"); }}})' + ' }<' + '/script>');
        string = string.replace(/(type="text\/javascript">)\s+(validate\(\"[^"]*"\);)/, '$1 jTime = setInterval(function(){if("validate" in window){$2clearTimeout(jTime);}}, 1000);');
        if (string.match('#sublabel_litemode')) {
            string = string.replace('class="form-all"', 'class="form-all" style="margin-top:0;"');
        }
        var iframe = this.frame;
        var doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow.document || iframe.document);
        doc.open();
        doc.write(string);
        setTimeout(function() {
            doc.close();
            try {
                if ('JotFormFrameLoaded' in window) {
                    JotFormFrameLoaded();
                }
            } catch (e) {
                console.log("error on frame loading", e);
            }
        }, 200);
    };
    this.setTimer = function() {
        var self = this;
        this.interval = setTimeout(function() {
            self.changeHeight();
        }, this.timeInterval);
    };
    this.getBaseDomain = function() {
        var thn = window.location.hostname;
        var cc = 0;
        var buff = "";
        for (var i = 0; i < thn.length; i++) {
            var chr = thn.charAt(i);
            if (chr == ".") {
                cc++;
            }
            if (cc == 0) {
                buff += chr;
            }
        }
        if (cc == 2) {
            thn = thn.replace(buff + ".", "");
        }
        return thn;
    }
    this.changeHeight = function() {
        var actualHeight = this.getBodyHeight();
        var currentHeight = this.getViewPortHeight();
        if (actualHeight === undefined) {
            this.frame.style.height = this.frameHeight;
            if (!this.frame.style.minHeight) {
                this.frame.style.minHeight = "300px";
            }
        } else if (Math.abs(actualHeight - currentHeight) > 18) {
            this.frame.style.height = (actualHeight) + "px";
        }
        this.setTimer();
    };
    this.bindMethod = function(method, scope) {
        return function() {
            method.apply(scope, arguments);
        };
    };
    this.frameHeight = 0;
    this.getBodyHeight = function() {
        if (this.formSubmitted === 1) {
            return;
        }
        var height;
        var scrollHeight;
        var offsetHeight;
        try {
            if (this.frame.contentWindow.document.height) {
                height = this.frame.contentWindow.document.height;
                if (this.frame.contentWindow.document.body.scrollHeight) {
                    height = scrollHeight = this.frame.contentWindow.document.body.scrollHeight;
                }
                if (this.frame.contentWindow.document.body.offsetHeight) {
                    height = offsetHeight = this.frame.contentWindow.document.body.offsetHeight;
                }
            } else if (this.frame.contentWindow.document.body) {
                var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                if (this.frame.contentWindow.document.body.scrollHeight) {
                    height = scrollHeight = this.frame.contentWindow.document.body.scrollHeight;
                }
                if (isChrome) {
                    height = scrollHeight = this.frame.contentWindow.document.height;
                }
                if (this.frame.contentWindow.document.body.offsetHeight) {
                    height = offsetHeight = this.frame.contentWindow.document.body.offsetHeight;
                }
                if (scrollHeight && offsetHeight) {
                    height = Math.max(scrollHeight, offsetHeight);
                }
            }
        } catch (e) {}
        this.frameHeight = height;
        return height;
    };
    this.getViewPortHeight = function() {
        if (this.formSubmitted === 1) {
            return;
        }
        var height = 0;
        try {
            if (this.frame.contentWindow.window.innerHeight) {
                height = this.frame.contentWindow.window.innerHeight - 18;
            } else if ((this.frame.contentWindow.document.documentElement) && (this.frame.contentWindow.document.documentElement.clientHeight)) {
                height = this.frame.contentWindow.document.documentElement.clientHeight;
            } else if ((this.frame.contentWindow.document.body) && (this.frame.contentWindow.document.body.clientHeight)) {
                height = this.frame.contentWindow.document.body.clientHeight;
            }
        } catch (e) {}
        return height;
    };
    this.init();
}
FrameBuilder.get = [];
var i62875899459180 = new FrameBuilder("62875899459180", false, "", "<!DOCTYPE HTML PUBLIC \"-\/\/W3C\/\/DTD HTML 4.01\/\/EN\" \"http:\/\/www.w3.org\/TR\/html4\/strict.dtd\">\n<html class=\"supernova\"><head>\n<meta http-equiv=\"Content-Type\" content=\"text\/html; charset=utf-8\" \/>\n<link rel=\"alternate\" type=\"application\/json+oembed\" href=\"https:\/\/www.jotform.com\/oembed\/?format=json&amp;url=http%3A%2F%2Fwww.jotform.com%2Fform%2F62875899459180\" title=\"oEmbed Form\"><link rel=\"alternate\" type=\"text\/xml+oembed\" href=\"https:\/\/www.jotform.com\/oembed\/?format=xml&amp;url=http%3A%2F%2Fwww.jotform.com%2Fform%2F62875899459180\" title=\"oEmbed Form\">\n<meta property=\"og:title\" content=\"Contact Us\" >\n<meta property=\"og:url\" content=\"http:\/\/www.jotform.us\/form\/62875899459180\" >\n<meta property=\"og:description\" content=\"Please click the link to complete this form.\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" \/>\n<meta name=\"HandheldFriendly\" content=\"true\" \/>\n<title>Contact Us<\/title>\n<link href=\"https:\/\/cdn.jotfor.ms\/static\/formCss.css?3.3.15244\" rel=\"stylesheet\" type=\"text\/css\" \/>\n<link type=\"text\/css\" rel=\"stylesheet\" href=\"https:\/\/cdn.jotfor.ms\/css\/styles\/nova.css?3.3.15244\" \/>\n<link type=\"text\/css\" media=\"print\" rel=\"stylesheet\" href=\"https:\/\/cdn.jotfor.ms\/css\/printForm.css?3.3.15244\" \/>\n<link type=\"text\/css\" rel=\"stylesheet\" href=\"https:\/\/cdn.jotfor.ms\/themes\/CSS\/566a91c2977cdfcd478b4567.css?\"\/>\n<style type=\"text\/css\">\n    .form-label-left{\n        width:150px !important;\n    }\n    .form-line{\n        padding-top:12px;\n        padding-bottom:12px;\n    }\n    .form-label-right{\n        width:150px !important;\n    }\n    body, html{\n        margin:0;\n        padding:0;\n        background:rgb(255, 255, 255);\n    }\n\n    .form-all{\n        margin:0px auto;\n        padding-top:20px;\n        width:690px;\n        color:rgb(142, 142, 142) !important;\n        font-family:'Bevan';\n        font-size:14px;\n    }\n    .form-radio-item label, .form-checkbox-item label, .form-grading-label, .form-header{\n        color: #555;\n    }\n\n<\/style>\n\n<style type=\"text\/css\" id=\"form-designer-style\" rel=\"stylesheet\" href=\"https:\/\/www.ikerolader.xyz\/files\/themes\/contact.css\"><\/style>\n\n<link type=\"text\/css\" rel=\"stylesheet\" href=\"https:\/\/cdn.jotfor.ms\/css\/styles\/buttons\/form-submit-button-simple_white.css?3.3.15244\"\/>\n<script src=\"https:\/\/www.jotform.com\/static\/encryptedForms.js?3.3.15244\" type=\"text\/javascript\"><\/script>\n<script src=\"https:\/\/cdn.jotfor.ms\/static\/prototype.forms.js\" type=\"text\/javascript\"><\/script>\n<script src=\"https:\/\/cdn.jotfor.ms\/static\/jotform.forms.js?3.3.15244\" type=\"text\/javascript\"><\/script>\n<script type=\"text\/javascript\">\n var jsTime = setInterval(function(){try{\n   JotForm.jsForm = true;\n\n   JotForm.init(function(){\n\tJotForm.clearFieldOnHide=\"disable\";\n\tJotForm.onSubmissionError=\"jumpToFirstError\";\n\tJotEncrypted.setPublicKey(\"-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApzIpNiEQ48Hjdf08amwSz4NRz8m\/C95hQ7N5P0EsbIBVujfc7JHF\/wMOejoGBN+BK21hiXRPXwVWeeVQIySUtd02AcbpuaeE9pKHJ\/tJ+Oj+11Qaee5VmBID+M3cusS+zgfnjR2hQhyWG3VsRHop4e6OIg6RwsWKHvaMhMuxsiK3vRwZ5ocV0xEqaVW5frl6CTEjEORORicn+GrLvzMIPtEN8o7ZXUOQxOoUPxI2moBKFmiIEQqXenUQKQl3CmF3mntLgPaDFB36IscVGNylzViYiU8PXIGmGm9SuzIbaFBBVy7ji4ET+XVaoIJW7zx97EcV3Cjz5RsY3gfdRK1hfQIDAQAB-----END PUBLIC KEY-----\");\n\tJotForm.isEncrypted = true;\n\tJotForm.setFieldsToPreserve([\"email\"]);\n   });\n\n   clearInterval(jsTime);\n }catch(e){}}, 1000);\n<\/script>\n<\/head>\n<body>\n<form class=\"jotform-form\" action=\"https:\/\/submit.jotform.us\/submit\/62875899459180\/\" method=\"post\" name=\"form_62875899459180\" id=\"62875899459180\" accept-charset=\"utf-8\">\n  <input type=\"hidden\" name=\"formID\" value=\"62875899459180\" \/>\n  <div class=\"form-all form-encrypted\">\n    <ul class=\"form-section page-section\">\n      <li class=\"form-line jf-required\" data-type=\"control_fullname\" id=\"id_3\">\n        <label class=\"form-label form-label-left form-label-auto\" id=\"label_3\" for=\"input_3\">\n          Name\n          <span class=\"form-required\">\n            *\n          <\/span>\n        <\/label>\n        <div id=\"cid_3\" class=\"form-input jf-required\">\n          <span class=\"form-sub-label-container\" style=\"vertical-align: top\">\n            <input class=\"form-textbox validate[required]\" type=\"text\" size=\"10\" name=\"q3_name[first]\" id=\"first_3\" \/>\n            <label class=\"form-sub-label\" for=\"first_3\" id=\"sublabel_first\" style=\"min-height: 13px;\"> First Name <\/label>\n          <\/span>\n          <span class=\"form-sub-label-container\" style=\"vertical-align: top\">\n            <input class=\"form-textbox validate[required]\" type=\"text\" size=\"15\" name=\"q3_name[last]\" id=\"last_3\" \/>\n            <label class=\"form-sub-label\" for=\"last_3\" id=\"sublabel_last\" style=\"min-height: 13px;\"> Last Name <\/label>\n          <\/span>\n        <\/div>\n      <\/li>\n      <li class=\"form-line jf-required\" data-type=\"control_email\" id=\"id_4\">\n        <label class=\"form-label form-label-left form-label-auto\" id=\"label_4\" for=\"input_4\">\n          E-mail\n          <span class=\"form-required\">\n            *\n          <\/span>\n        <\/label>\n        <div id=\"cid_4\" class=\"form-input jf-required\">\n          <input type=\"email\" class=\" form-textbox validate[required, Email]\" id=\"input_4\" name=\"q4_email\" size=\"30\" value=\"\" \/>\n        <\/div>\n      <\/li>\n      <li class=\"form-line jf-required\" data-type=\"control_textbox\" id=\"id_5\">\n        <label class=\"form-label form-label-left form-label-auto\" id=\"label_5\" for=\"input_5\">\n          Subject\n          <span class=\"form-required\">\n            *\n          <\/span>\n        <\/label>\n        <div id=\"cid_5\" class=\"form-input jf-required\">\n          <input type=\"text\" class=\" form-textbox validate[required]\" data-type=\"input-textbox\" id=\"input_5\" name=\"q5_subject\" size=\"20\" value=\"\" \/>\n        <\/div>\n      <\/li>\n      <li class=\"form-line jf-required\" data-type=\"control_textarea\" id=\"id_6\">\n        <label class=\"form-label form-label-left form-label-auto\" id=\"label_6\" for=\"input_6\">\n          Message\n          <span class=\"form-required\">\n            *\n          <\/span>\n        <\/label>\n        <div id=\"cid_6\" class=\"form-input jf-required\">\n          <textarea id=\"input_6\" class=\"form-textarea validate[required]\" name=\"q6_message\" cols=\"40\" rows=\"6\"><\/textarea>\n        <\/div>\n      <\/li>\n      <li class=\"form-line jf-required\" data-type=\"control_captcha\" id=\"id_7\">\n        <label class=\"form-label form-label-left form-label-auto\" id=\"label_7\" for=\"input_7\">\n          Enter the message as it's shown\n          <span class=\"form-required\">\n            *\n          <\/span>\n        <\/label>\n        <div id=\"cid_7\" class=\"form-input jf-required\">\n          <script type=\"text\/javascript\" src=\"\/\/www.google.com\/recaptcha\/api\/js\/recaptcha_ajax.js\"><\/script>\n          <div id=\"recaptcha_input_7\">\n          <\/div>\n          <script type=\"text\/javascript\">\n          var rc_script_tag = document.createElement('script'),\n  rc_init_func = function()\n  {\n    Recaptcha.create(\"6Ld9UAgAAAAAAMon8zjt30tEZiGQZ4IIuWXLt1ky\", \"recaptcha_input_7\", {\n      theme: \"clean\",\n      callback: function()\n      {\n        $(\"recaptcha_response_field\").addClassName(\"validate[required]\");\n        JotForm.validator()\n      }\n    });\n  }\nrc_script_tag.src = \"\/\/www.google.com\/recaptcha\/api\/js\/recaptcha_ajax.js\";\nrc_script_tag.type = 'text\/javascript';\nrc_script_tag.onload = function()\n{\n  rc_init_func.call();\n};\nrc_script_tag.onreadystatechange = function()\n{\n  if (rc_script_tag.readyState == 'loaded' || rc_script_tag.readyState == 'complete')\n  {\n    rc_init_func.call();\n  }\n};\n(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(rc_script_tag);\n          <\/script>\n        <\/div>\n      <\/li>\n      <li class=\"form-line\" data-type=\"control_button\" id=\"id_2\">\n        <div id=\"cid_2\" class=\"form-input-wide\">\n          <div style=\"text-align:center\" class=\"form-buttons-wrapper\">\n            <button id=\"input_2\" type=\"submit\" class=\"form-submit-button form-submit-button-simple_white icon-encrypt\">\n              Submit\n            <\/button>\n          <\/div>\n        <\/div>\n      <\/li>\n      <li style=\"display:none\">\n        Should be Empty:\n        <input type=\"text\" name=\"website\" value=\"\" \/>\n      <\/li>\n    <\/ul>\n  <\/div>\n  <script>\n  JotForm.showJotFormPowered = true;\n  <\/script>\n  <input type=\"hidden\" id=\"simple_spc\" name=\"simple_spc\" value=\"62875899459180\" \/>\n  <script type=\"text\/javascript\">\n  document.getElementById(\"si\" + \"mple\" + \"_spc\").value = \"62875899459180-62875899459180\";\n  <\/script>\n<\/form><\/body>\n<\/html>\n");
(function() {
    window.handleIFrameMessage = function(e) {
        var args = e.data.split(":");
        var iframe = document.getElementById("62875899459180");
        if (!iframe) {
            return
        };
        switch (args[0]) {
            case "scrollIntoView":
                if (!("nojump" in FrameBuilder.get)) {
                    iframe.scrollIntoView();
                }
                break;
            case "setHeight":
                iframe.style.height = args[1] + "px";
                break;
            case "collapseErrorPage":
                if (iframe.clientHeight > window.innerHeight) {
                    iframe.style.height = window.innerHeight + "px";
                }
                break;
            case "reloadPage":
                if (iframe) {
                    location.reload();
                }
                break;
            case "removeIframeOnloadAttr":
                iframe.removeAttribute("onload");
                break;
        }
    };
    if (window.addEventListener) {
        window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
        window.attachEvent("onmessage", handleIFrameMessage);
    }
})();