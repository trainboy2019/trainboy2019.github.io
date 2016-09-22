/*
    Functions
    (c) krmax44 - https://krmax44.de
*/

function preload(e) {
    $(e).each(function() {
        $("<img/>")[0].src = this
    })
}
function darkMode() {
    null === localStorage.getItem("darkMode") || "off" == localStorage.getItem("darkMode") ? (localStorage.setItem("darkMode", "on"), $("body").addClass("dark-mode"), $("#heart-dark").hide(), $("#heart-light").show()) : (localStorage.setItem("darkMode", "off"), $("body").removeClass("dark-mode"), $("#heart-dark").show(), $("#heart-light").hide())
}
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length)
                return $("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
        }
    })
}), $(document).ready(function() {
    "on" == localStorage.getItem("darkMode") ? ($("body").addClass("dark-mode"), $("#heart-dark").hide()) : $("#heart-light").hide()
});

