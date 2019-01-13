$(document).ready(function () {
    $(".side-menu").hide();
    $(".search-barwrap__nav").click(function () {
        $(".side-menu").slideToggle();
    });
    $('.slider').bxSlider({
        pager: false,
        maxslide: 1,
        minslide: 1,
        moveslide: 1,
        auto: true,
        autoHover: true
    });
    $(".bx-wrapper").css("border", "none");
    $(".section-item__header--item").eq(0).addClass("orange");

    $(".section-item__header--item").click(function () {
        $(".section-item__header--item").eq(0).removeClass("orange");
        $(".section-item__header--item").eq(1).removeClass("orange");
        $(".section-item__header--item").eq(2).removeClass("orange");
        $(this).toggleClass("orange");
    });


});











