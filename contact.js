/*
    Contact page script
    (c) krmax44 - https://krmax44.de
*/

function resize() {
    var e = window.innerHeight - $(".navbar-top").height();
    $(".visualnovel").css("height", e + "px"), $(".contactform").css("min-height", e + "px")
}
function padding() {
    var e = $(document).scrollTop();
    $(".visualnovel").css("margin-top", e + "px")
}
function reply(e, n) {
    switch (n) {
    case 0:
        switch (e) {
        case 0:
            nextquestion(["Yes", "No"], 10, "Have you read all of the information on the Bug Reporting page?", start + "suspicious.png");
            break;
        case 1:
            nextquestion(["18 or older", "Under 18"], 11, "How old are you?", start + "suspicious.png")
        }
        break;
    case 10:
        0 == e ? goodend('Okay! Here is YandereDev\'s e-mail: yanderedev@mail.com<br><br>Please put the word "Bug" in the subject of your e-mail.') : badend("You should go read the&nbsp;<a href='bug-reporting/'>Bug Reporting</a>&nbsp;page.");
        break;
    case 11:
        0 == e ? nextquestion(["Yes", "No"], 20, "Have you read all of the information on the Volunteer page?", start + "angry.png") : badend("Sorry, YandereDev can only accept help from people who are 18 or older.", !0);
        break;
    case 20:
        0 == e ? goodend("Okay! Here is YandereDev's e-mail: yanderedev@mail.com<br><br>Please remember that the subject of your e-mail needs to follow the instructions on the Volunteer page.") : badend("You should go read the&nbsp;<a href='volunteer/'>Volunteer</a>&nbsp;page.")
    }
}
function nextquestion(e, n, o, a) {
    for (var r = "", t = 0; t < e.length; t++)
        r += '<a href="javascript:reply(' + t + ", " + n + ');" class="btn yanbtn btn-block">' + e[t] + "</a>";
    $("#options").html(r), $("#yanderespeak").text(o), $(".visualnovel").css("background-image", "url('" + a + "')"), $(window).trigger("resize")
}
function goodend(e, n) {
    n === !0 ? $(".visualnovel").css("background-image", "url('" + start + "business.png')") : $(".visualnovel").css("background-image", "url('" + start + "happy.png')"), $("#yanderespeak").html(e), $(".option").slideUp(500, function() {
        $(window).trigger("resize")
    })
}
function badend(e, n, o) {
    n === !0 ? $(".visualnovel").css("background-image", "url('" + start + "apology.png')") : o === !0 ? $(".visualnovel").css("background-image", "url('" + start + "angry.png')") : $(".visualnovel").css("background-image", "url('" + start + "violent.png')"), $("#yanderespeak").html(e), $(".option").slideUp(500, function() {
        $(window).trigger("resize")
    })
}
function dumbend() {
    $(".visualnovel").css("background-image", "url('" + start + "violent.png')"), $(".understand-btn").hide(), $("#warning > .well").hide(), $(".snap").show(), $(".eye-catcher").css("background"), $(".navbar-top").css({
        background: "linear-gradient(to bottom, #000000 " + ($("#logo").height() + 15) + "px,#d00000 100%)",
        "border-color": "#d00000"
    }), $(".eye-catcher h1").css({
        color: "#000000",
        "text-shadow": "none"
    }), $(".eye-catcher h3").css({
        color: "#000000",
        "text-shadow": "none"
    }), $(".eye-catcher").css({
        background: "linear-gradient(to bottom, #d00000 0%,#FF0000 100%)",
        "border-color": "#FF0000"
    }), $(".yanbtn").css({
        "background-color": "#920000",
        color: "#000000"
    }), $("#logo").attr("src", "img/logo-dark.png"), $(".navbar-default .navbar-nav > li > a").css({
        color: "#ffffff",
        "text-shadow": "none"
    }), $("body").css("background-color", "#FF0000"), $(".contactform").css("background", "#D30000"), $(".snap").show(), $(".yanderespeak").hide(), $(".option").hide()
}
function understand() {
    $("#warning").hide(), $("#further").show(), $(".visualnovel").css("background-image", "url('" + start + "happy.png')")
}
var time = 0,
    tries = 0;
$(document).ready(function() {
    preload(["img/contact/angry.png", "img/contact/apology.png", "img/contact/business.png", "img/contact/happy.png", "img/contact/suspicious.png", "img/contact/violent.png"]), window.innerWidth > 768 && ($(window).on("resize", function() {
        resize()
    }).trigger("resize"), $(document).scroll(function() {
        padding()
    }).trigger("scroll")), setTimeout(function() {
        $(window).trigger("resize")
    }, 1)
});
var start = "img/contact/";

