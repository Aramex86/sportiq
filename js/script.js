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
    //Bottom timer

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Sep 10, 2019 00:00:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

                document.getElementById('day').innerText = Math.floor(distance / (day)),
                document.getElementById('hour').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('second').innerText = Math.floor((distance % (minute)) / second),
                //second sale
                document.getElementById('day1').innerText = Math.floor(distance / (day)),
                document.getElementById('hour1').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes1').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('second1').innerText = Math.floor((distance % (minute)) / second),
                //third sale
                document.getElementById('day2').innerText = Math.floor(distance / (day)),
                document.getElementById('hour2').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes2').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('second2').innerText = Math.floor((distance % (minute)) / second);




            //do something later when date is reached
            //if (distance < 0) {
            //  clearInterval(x);
            //  'IT'S MY BIRTHDAY!;
            //}

        }, second);
    //Sale slider
    var right = 0;
    var polosa = $('.polosa');

    $('.bottom-part__special-products--next').click(function (event) {
        event.preventDefault();
        $(polosa).animate({
            right: right += 673,
        });
        if (right > 1300) {
            right = -673
        }
    });
    $('.bottom-part__special-products--prev').click(function (event) {
        event.preventDefault();
        $(polosa).animate({
            right: right += 673,
        });
        if (right > 1300) {
            right = -673
        }
    });
    //Testimonials


    $('.testimonials-wrap__bodywrap--bottom-itembtn').hover(function () {
        $('.testimonials-wrap__bodywrap--bottom-itembtn').removeClass("active");
       $(this).toggleClass("active");
    });
    $('.testimonials-wrap__header--next').click(function (event) {
       event.preventDefault();
       $('.polosa1').animate({
           right: right +=464,
       });
       if (right > 1000){
           $('.polosa1').stop();
       }
    });
    $('.testimonials-wrap__header--prev').click(function (event) {
        event.preventDefault();
        $('.polosa1').animate({
            right: right -=464,
        });
        if (right < 0 ){
            $('.polosa1').stop();
            right=0;
        }
    });
    $('.testimonials-wrap__bodywrap--bottom-item:nth-child(1)').click(function () {
        $('.polosa1').animate({
            right:0,
        });
    });
    $('.testimonials-wrap__bodywrap--bottom-item:nth-child(2)').click(function () {
        $('.polosa1').animate({
            right:464,
        });
    });
    $('.testimonials-wrap__bodywrap--bottom-item:nth-child(3)').click(function () {
        $('.polosa1').animate({
            right:928,
        });
    });
    //Blog slider


    $('.section-news__btns--prev').click(function () {
        $('.polosa2').animate({
            right:right+=400,
        });
        if (right > 800){
            $('.polosa2').stop();
        }
    });
    $('.section-news__btns--next').click(function () {
        $('.polosa2').animate({
            right:right-=400,
        });
        if (right < 0){
            $('.polosa2').stop();
        }
    });







});











