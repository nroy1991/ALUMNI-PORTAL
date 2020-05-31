! function(a) {
    "use strict";

    function e() { a(".small-device-menu .large-nav > ul").css("max-height", a(window).height() - a(".main-nav").height() - 20 + "px"), a(window).width() <= 1024 ? (a(".main-nav").addClass("small-device-menu"), a(".hide_menu_item").css("display", "none")) : a(window).width() > 1024 && (a(".main-nav").removeClass("small-device-menu"), a(".hide_menu_item").css("display", "block"), h.show()) }

    function i() {
        a(".counter").appear(function() {
            var e = a(this);
            e.countTo({ from: 0, to: e.html(), speed: 1300, refreshInterval: 60 })
        })
    }

    function s(a, e) { a.height(e.height()), a.css({ "line-height": e.height() + "px" }) }

    function t() {
        a(".js-stick").sticky({ topSpacing: 0 }), s(a(".nav-wrapper ul > li > a"), a(".main-nav")), s(f, a(".main-nav")), f.css({ width: a(".main-nav").height() + "px" }), a(".main-nav").hasClass("transparent") && a(".main-nav").addClass("stick-visible"), a(window).scroll(function() { a(window).scrollTop() > 10 ? (a(".stick-visible").removeClass("transparent"), a(".main-nav, .header-logo-wrap .logo, .mobile-nav").addClass("small-height")) : (a(".stick-visible").addClass("transparent"), a(".main-nav, .header-logo-wrap .logo, .mobile-nav").removeClass("small-height")) }), f.on("click", function() { h.hasClass("menu-opened") ? (h.slideUp("slow", "easeOutExpo").removeClass("menu-opened"), a(this).removeClass("active")) : (h.slideDown("slow", "easeOutQuart").addClass("menu-opened"), a(this).addClass("active")) }), h.find("a:not(.menu-down)").click(function() { f.hasClass("active") && (h.slideUp("slow", "easeOutExpo").removeClass("menu-opened"), f.removeClass("active")) });
        var e, i = a(".menu-down");
        a(".small-device-menu .menu-down").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), i.on("click", function() { return a(".main-nav").hasClass("small-device-menu") ? (e = a(this).parent("li:first"), e.hasClass("menu-opened") ? e.find(".nav-sub:first").slideUp(function() { e.removeClass("menu-opened"), e.find(".menu-down").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down") }) : (a(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), e.addClass("menu-opened"), e.find(".nav-sub:first").slideDown()), !1) : !1 }), e = i.parent("li"), e.hover(function() { a(".main-nav").hasClass("small-device-menu") || a(this).find(".nav-sub:first").stop(!0, !0).slideToggle(300, "linear") }, function() { a(".main-nav").hasClass("small-device-menu") || a(this).find(".nav-sub:first").stop(!0, !0).slideToggle(300, "linear") })
    }

    function l() {
        var a = 500;
        jQuery(".scroll-to-top").on("click", function(e) { return e.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, a), !1 })
    }

    function n() { a.browser.safari || a.browser.chrome || a(window).width() >= 1024 && 0 == u && (a(".parallax-1").parallax("50%", .1), a(".parallax-2").parallax("50%", .2), a(".parallax-3").parallax("50%", .3), a(".parallax-4").parallax("50%", .4), a(".parallax-5").parallax("50%", .5), a(".parallax-6").parallax("50%", .6), a(".parallax-7").parallax("50%", .7), a(".parallax-8").parallax("50%", .8), a(".parallax-9").parallax("50%", .9), a(".parallax-10").parallax("50%", .5), a(".parallax-11").parallax("50%", .05)) }

    function o() { a(".work-lightbox").magnificPopup({ gallery: { enabled: !0 }, mainClass: "mfp-fade" }), a(".gallery-lightbox").magnificPopup({ gallery: { enabled: !0 }, mainClass: "mfp-fade" }), a(".lightbox").magnificPopup() }

    function r() { smoothScroll.init({ speed: 400, easing: "easeInOutCubic", offset: 40, updateURL: !1, callbackBefore: function() {}, callbackAfter: function() {} }) }

    function m() {! function(a) { a(".home").height(a(window).height()), a(".fullheight").height(a(window).height()) }(jQuery) }

    function d() {! function(a) { a(window).width() >= 1024 && 0 == u && (a(".animated-item").each(function() { a(this).find(".ai-descr").prepend(a(this).find(".ai-intro").html()) }), p.on("click", function() { a("html").hasClass("mobile") && (a(this).hasClass("js-active") ? a(this).removeClass("js-active") : a(this).addClass("js-active")) })) }(jQuery) }

    function c() {
        ! function(a) {
            var e = 0;
            a(window).width() >= 767 && (p.each(function() { a(this).css("height", "auto"), a(this).height() > e && (e = a(this).height()) }), p.height(e > .9 * p.width() ? e : .9 * p.width()));
            var i, s;
            w.each(function() { i = a(this).height() / 2, s = a(this).parent(".ai-inner").find(".ai-intro").height() / 2, a(this).parent(".ai-inner").find(".ai-intro").css("top", i + "px"), a(this).parent(".ai-inner").find(".ai-descr").css("top", -s + "px") }), a(".split-section-content").css("height", "auto"), a(window).width() > 992 && a(".split-section-content").equalHeights()
        }(jQuery)
    }
    a.browser.chrome = a.browser.webkit && !!window.chrome, a.browser.safari = a.browser.webkit && !window.chrome;
    var u;
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (u = !0, a("body").addClass("mobile")) : (u = !1, a("body").addClass("no-mobile")), a.browser.chrome && a("body").addClass("chrome"), a.browser.safari && a("body").addClass("safari"), a("body").hasClass("safari"), a(window).load(function() { a(window).trigger("scroll"), a(window).trigger("resize") }), a(document).ready(function() {
        a(window).trigger("resize"), t(), window.scrollReveal = new scrollReveal, r(), m(), n(), o(), i(), l(), d(), c(), a(".slidingDiv1").hide(), a(".show_hide_section").show(800), a(".show_hide_section").click(function() { a(".slidingDiv1").slideToggle("slow", function() {}) }), a(".owl-latest-project").owlCarousel({ navigation: !0, pagination: !1, autoPlay: 5e3, items: 3, itemsDesktop: [1199, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-services").owlCarousel({ navigation: !0, pagination: !0, autoPlay: 5e3, items: 3, itemsDesktop: [3e3, 3], itemsDesktopSmall: [1440, 3], itemsTablet: [1024, 2], itemsTabletSmall: [768, 1], itemsMobile: [480, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-product-shop").owlCarousel({ navigation: !0, pagination: !1, autoPlay: 5e3, items: 3, itemsDesktop: [1199, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-gallery-slider").owlCarousel({ navigation: !0, pagination: !1, autoPlay: 5e3, items: 3, itemsDesktop: [1e3, 2], itemsDesktopSmall: [900, 2], itemsTablet: [600, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-gallery-slider2").owlCarousel({ navigation: !0, slideSpeed: 300, paginationSpeed: 400, singleItem: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a(".owl-content-slider").owlCarousel({ navigation: !0, slideSpeed: 300, paginationSpeed: 400, singleItem: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#index7-slider").owlCarousel({ navigation: !1, pagination: !0, items: 1, navigationText: !1, autoPlay: 4e3, itemsDesktop: [3e3, 1], itemsDesktopSmall: [1440, 1], itemsTablet: [1024, 1], itemsTabletSmall: [600, 1], itemsMobile: [360, 1], transitionStyle: "fadeUp" }), a("#owl-service-slider").owlCarousel({ navigation: !1, pagination: !0, responsive: !0, touchDrag: !0, mouseDrag: !0, autoHeight: !0, items: 1, autoPlay: !1, itemsDesktop: [3e3, 1], itemsDesktopSmall: [1440, 1], itemsTablet: [1024, 1], itemsTabletSmall: [600, 1], itemsMobile: [360, 1], transitionStyle: "fade" }), a("#owl-ps-slider").owlCarousel({ pagination: !0, autoPlay: 4e3, items: 1, itemsDesktop: [1199, 1], itemsTabletSmall: [768, 1], itemsMobile: [480, 1], navigation: !1 }), a("#owl-ps-slider2").owlCarousel({ pagination: !0, autoPlay: 4e3, items: 5, itemsDesktop: [1199, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigation: !1 }), a("#owl-client-slider").owlCarousel({ pagination: !0, autoPlay: 4e3, items: 5, itemsDesktop: [1199, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigation: !1, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a(".home-showcase-carousel").owlCarousel({ navigation: !0, pagination: !1, autoPlay: 5e3, items: 2, itemsDesktop: [1199, 2], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-testimonial-slider").owlCarousel({ pagination: !0, autoPlay: 4e3, items: 1, itemsDesktop: [1e3, 1], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1], navigation: !1 }), a("#owl-history-slider").owlCarousel({ pagination: !0, autoPlay: 4e3, items: 1, itemsDesktop: [1e3, 1], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1], navigation: !1 }), a("#owl-quote-slider").owlCarousel({ pagination: !1, autoPlay: 4e3, items: 1, itemsDesktop: [1e3, 1], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1], navigation: !1, transitionStyle: "fade" }), a("#quotes-slider").owlCarousel({ pagination: !1, autoPlay: 4e3, items: 1, itemsDesktop: [1e3, 1], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1], navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#quotes-slider-style2").owlCarousel({ pagination: !0, autoPlay: 5e3, items: 1, itemsDesktop: [1e3, 1], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1], navigation: !0, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-lightbox-gallery").owlCarousel({ navigation: !1, pagination: !1, autoPlay: 5e3, items: 3, itemsDesktop: [1199, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigationText: !1 }), a("#owl-team-slider").owlCarousel({ navigation: !0, pagination: !0, autoPlay: 5e3, items: 3, itemsDesktop: [1199, 3], itemsTabletSmall: [768, 2], itemsMobile: [480, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }), a("#owl-portfolio-slider").owlCarousel({ navigation: !1, slideSpeed: 300, autoPlay: 5e3, singleItem: !0 }), a("#owl-portfolio-slider2").owlCarousel({ navigation: !1, slideSpeed: 300, autoPlay: 5e3, singleItem: !0 }), a("#owl-blockquotes").owlCarousel({ navigation: !1, pagination: !1, slideSpeed: 300, autoPlay: 5e3, singleItem: !0 }), jQuery("#subscribe-submit").on("click", function() {
            a(".subscribe-error-field").hide();
            var e = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                i = a("#subscribe-email").val();
            if ("" == i || "Email Address *" == i) return a(".subscribe-error-field").html('<i class="fa fa-exclamation"></i>Your email address is required.').fadeIn(), !1;
            if (!e.test(i)) return a(".subscribe-error-field").html('<i class="fa fa-exclamation"></i>Invalid email address.').fadeIn(), !1;
            var s = a(".subscribe-form").serialize();
            return a(".btn-subscribe").hide(), a("#subscribe-loading").fadeIn(), a(".subscribe-error-field").fadeOut(), a.ajax({ type: "POST", url: "subscribe.php", data: s, success: function() { a(".subscribe-empty").hide(), a(".subscribe-message").html('<i class="fa fa-check contact-success"></i><div>Thank you! You have been subscribed.<div>').fadeIn() }, error: function() { a(".subscribe-empty").hide(), a(".subscribe-message").html('<i class="fa fa-exclamation contact-error"></i><div>Something went wrong, please try again later.<div>').fadeIn() } }), !1
        })
    }), a(window).resize(function() { e(), m(), c(), a(".home-showcase-carousel").owlCarousel({ navigation: !0, pagination: !1, autoPlay: 5e3, items: 2, itemsDesktop: [1e3, 2], itemsDesktopSmall: [900, 1], itemsTablet: [600, 1], navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] }) });
    var g = a(".page-section, .gallery-slider .slide, .home-showcase-carousel .item, .blog-section, .swiper-slide, .home-flexslider2 .top_slider .slide1");
    g.each(function() { a(this).attr("data-background") && a(this).css("background-image", "url(" + a(this).data("background") + ")") });
    var f = a(".mobile-nav"),
        h = a(".large-nav"),
        p = a(".animated-item"),
        w = p.find(".ai-descr");
    ! function(a) {
        a.fn.equalHeights = function() {
            var e = 0,
                i = a(this);
            return i.each(function() {
                var i = a(this).innerHeight();
                i > e && (e = i)
            }), i.css("height", e)
        }, a("[data-equal]").each(function() {
            var e = a(this),
                i = e.data("equal");
            e.find(i).equalHeights()
        })
    }(jQuery)
}(jQuery);