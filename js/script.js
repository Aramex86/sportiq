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
//item Top
    $(".section-item__header--item").eq(0).addClass("orange");
    $(".section-item__header--item").click(function () {
        $(".section-item__header--item").eq(0).removeClass("orange");
        $(".section-item__header--item").eq(1).removeClass("orange");
        $(".section-item__header--item").eq(2).removeClass("orange");
        $(this).toggleClass("orange");
    });

    $(".Best-Sellers,.New-Arrivals").hide();
    $(".section-item__header--item").eq(0).click(function () {
        $(".Featured-products").show();
        $(".Best-Sellers,.New-Arrivals").hide();
    });
    $(".section-item__header--item").eq(1).click(function () {
        $(".Best-Sellers").show();
        $(".Featured-products,.New-Arrivals").hide();
    });
    $(".section-item__header--item").eq(2).click(function () {
        $(".New-Arrivals").show();
        $(".Featured-products,.Best-Sellers").hide();
    });
    $(".item-header__btns--prev").click(function () {
        $(".Best-Sellers").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(14).show(500);
        $(".item__wraptop1--item").eq(10).hide(500);
        $(".item__wraptop1--item").eq(15).hide(500);
        $(".item__wraptop1--item").eq(19).show(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Best-Sellers").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(14).hide(500);
        $(".item__wraptop1--item").eq(10).show(500);
        $(".item__wraptop1--item").eq(15).show(500);
        $(".item__wraptop1--item").eq(19).hide(500);
    });
    $(".item-header__btns--prev").click(function () {
        $(".New-Arrivals").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(24).show(500);
        $(".item__wraptop1--item").eq(20).hide(500);
        $(".item__wraptop1--item").eq(25).hide(500);
        $(".item__wraptop1--item").eq(29).show(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".New-Arrivals").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(24).hide(500);
        $(".item__wraptop1--item").eq(20).show(500);
        $(".item__wraptop1--item").eq(25).show(500);
        $(".item__wraptop1--item").eq(29).hide(500);
    });

    $(".item-header__btns--prev").click(function () {
       $(".Featured-products").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(4).show(500);
        $(".item__wraptop1--item").eq(0).hide(500);
        $(".item__wraptop1--item").eq(5).hide(500);
        $(".item__wraptop1--item").eq(9).show(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Featured-products").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(4).hide(500);
        $(".item__wraptop1--item").eq(0).show(500);
        $(".item__wraptop1--item").eq(5).show(500);
        $(".item__wraptop1--item").eq(9).hide(500);
    });
    //item Bottom
    $(".section-itembottom__header--item").eq(0).addClass("orange");
    $(".section-itembottom__header--item").click(function () {
        $(".section-itembottom__header--item").eq(0).removeClass("orange");
        $(".section-itembottom__header--item").eq(1).removeClass("orange");
        $(".section-itembottom__header--item").eq(2).removeClass("orange");
        $(this).toggleClass("orange");
    });

    $(".Outdoor-Sports,.Biribol").hide();
    $(".section-itembottom__header--item").eq(0).click(function () {
        $(".Sports-aceessories").show();
        $(".Outdoor-Sports,.Biribol").hide();
    });
    $(".section-itembottom__header--item").eq(1).click(function () {
        $(".Outdoor-Sports").show();
        $(".Sports-aceessories,.Biribol").hide();
    });
    $(".section-itembottom__header--item").eq(2).click(function () {
        $(".Biribol").show();
        $(".Sports-aceessories,.Outdoor-Sports").hide();
    });
    $(".item-header__btns--prev").click(function () {
        $(".Sports-aceessories").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(34).show(500);
        $(".item__wraptop1--item").eq(30).hide(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Best-Sellers").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(34).hide(500);
        $(".item__wraptop1--item").eq(30).show(500);
    });
    $(".item-header__btns--prev").click(function () {
        $(".New-Arrivals").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(39).show(500);
        $(".item__wraptop1--item").eq(35).hide(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".New-Arrivals").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(39).hide(500);
        $(".item__wraptop1--item").eq(35).show(500);
    });
    $(".item-header__btns--prev").click(function () {
        $(".Featured-products").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(44).show(500);
        $(".item__wraptop1--item").eq(40).hide(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Featured-products").animate({"left":"-1"},"slow");
        $(".item__wraptop1--item").eq(44).hide(500);
        $(".item__wraptop1--item").eq(40).show(500);
    });
    /////////////////////
    //Bottom slider






});











