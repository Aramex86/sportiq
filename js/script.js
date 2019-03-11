$(document).ready(function () {

    //Window resize
    //Sale slider 1200px

    $(window).on("resize",function () {
        var win = $(this); //this это window
        if (win.width() >= 901 && win.width() <= 1201){
            document.querySelector('.bottom-part__special-products--next').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa = document.getElementById('polosa');
                left = left - 604.8;
                if (left < -1345.6) {
                    left = 0;
                }
                polosa.style.left = left + 'px';
            }
        }
    });
    // Sale slider 900px
    $(window).on("resize",function () {
        var win = $(this); //this это window
        if (win.width() >=600 && win.width()<=901){
            document.querySelector('.bottom-part__special-products--next').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa = document.getElementById('polosa');
                left = left - 503.8;
                if (left < -1007.6) {
                    left = 0;
                }
                polosa.style.left = left + 'px';
            }
        }
    });
    // Sale slider 600px
    $(window).on("resize",function () {
        var win = $(this); //this это window
        if (win.width() <= 600 ){
            document.querySelector('.bottom-part__special-products--next').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa = document.getElementById('polosa');
                left = left - 567.8;
                if (left < -1136.6) {
                    left = 0;
                }
                polosa.style.left = left + 'px';
            }
        }
    });
    // Sale slider 460px
    $(window).on("resize",function () {
        var win = $(this); //this это window
        var width = $('.view-port-container').outerWidth();
        if (win.width() <= 460 && win.width() >= 360){
            document.querySelector('.bottom-part__special-products--next').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa = document.getElementById('polosa');
                left = left - width -8;
                if (left < -855) {
                    left = 0;
                }
                if (left < - 657){
                    left = 0;
                }
                polosa.style.left = left + 'px';
            }
        }
    });



    //Testimonials 1200px
    $(window).on('resize',function () {
        var win = $(this);
        if (win.width() >= 901 && win.width() <= 1201){
            document.querySelector('.testimonials-wrap__header--prev').onclick = slideLeft1;
            var left = 0;
            function slideLeft1() {
                var polosa1 = document.getElementById('polosa1');
                left = left - 419;
                if (left <= -839){
                    left = 0;
                }
                polosa1.style.left = left + 'px';
            }
        }
    });
    //Testimonials 900px
    $(window).on('resize',function () {
        var win = $(this);
        if (win.width() >=600 && win.width()<=901){
            document.querySelector('.testimonials-wrap__header--prev').onclick = slideLeft1;
            var left = 0;
            function slideLeft1() {
                var polosa1 = document.getElementById('polosa1');
                left = left - 344;
                if (left <= -689){
                    left = 0;
                }
                polosa1.style.left = left + 'px';
            }
        }
    });
    //Testimonials 600px
    $(window).on('resize',function () {
        var win = $(this);
        if (win.width() <=600){
            document.querySelector('.testimonials-wrap__header--prev').onclick = slideLeft1;
            var left = 0;
            function slideLeft1() {
                var polosa1 = document.getElementById('polosa1');
                left = left - 535;
                if (left <= -1071){
                    left = 0;
                }
                polosa1.style.left = left + 'px';
            }
        }
    });
    //Testimonials 459px
    $(window).on('resize',function () {
        var win = $(this);
        var width = $('.testimonials-wrap__bodywrap').outerWidth();
        if (win.width() <= 460 && win.width() >= 360){
            document.querySelector('.testimonials-wrap__header--prev').onclick = slideLeft1;
            var left = 0;
            function slideLeft1() {
                var polosa1 = document.getElementById('polosa1');
                left = left - width;
                if (left <= -803){
                    left = 0;
                }
                polosa1.style.left = left + 'px';
            }
        }
    });
    //News slider 1200
    $(window).on('resize',function () {
       var win = $(this);
       if (win.width() >= 901 && win.width() <= 1201) {
           document.querySelector('.section-news__btns--prev').onclick = slideLeft;
           var left = 0;
           function slideLeft() {
               var polosa2 = document.getElementById('polosa2');
               left = left - 359.95;
               if (left <= -800){
                   left =  0;
               }
               polosa2.style.left = left + 'px';
           }
       }
    });
    ////News slider 900
    $(window).on('resize',function () {
        var win = $(this);
        if (win.width() >=600 && win.width()<=901) {
            document.querySelector('.section-news__btns--prev').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa2 = document.getElementById('polosa2');
                left = left - 299.95;
                if (left <= -600){
                    left =  0;
                }
                polosa2.style.left = left + 'px';
            }
        }
    });
    //News slider 600
    $(window).on('resize',function () {
        var win = $(this);
        if (win.width() <=600 ) {
            document.querySelector('.section-news__btns--prev').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa2 = document.getElementById('polosa2');
                left = left - 399.95;
                if (left <= -799.9){
                    left =  0;
                }
                polosa2.style.left = left + 'px';
            }
        }
    });
    //News slider 460px
    $(window).on('resize',function () {
        var win = $(this);
        var width = $('.section-news__postwrap--post').outerWidth();
        if (win.width() <= 459 && win.width() >= 360) {
            document.querySelector('.section-news__btns--prev').onclick = slideLeft;
            var left = 0;
            function slideLeft() {
                var polosa2 = document.getElementById('polosa2');
                left = left - width ;
               if (left <= -1837){
                   left = 0;
               }
               if (left <= -1441){
                   left = 0;
               } 
                polosa2.style.left = left + 'px';
            }
        }
        console.log(width);
    });






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
        $(".Best-Sellers").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(14).show(500);
        $(".item__wraptop1--item").eq(10).hide(500);
        $(".item__wraptop1--item").eq(15).hide(500);
        $(".item__wraptop1--item").eq(19).show(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Best-Sellers").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(14).hide(500);
        $(".item__wraptop1--item").eq(10).show(500);
        $(".item__wraptop1--item").eq(15).show(500);
        $(".item__wraptop1--item").eq(19).hide(500);
    });
    $(".item-header__btns--prev").click(function () {
        $(".New-Arrivals").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(24).show(500);
        $(".item__wraptop1--item").eq(20).hide(500);
        $(".item__wraptop1--item").eq(25).hide(500);
        $(".item__wraptop1--item").eq(29).show(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".New-Arrivals").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(24).hide(500);
        $(".item__wraptop1--item").eq(20).show(500);
        $(".item__wraptop1--item").eq(25).show(500);
        $(".item__wraptop1--item").eq(29).hide(500);
    });

    $(".item-header__btns--prev").click(function () {
        $(".Featured-products").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(4).show(500);
        $(".item__wraptop1--item").eq(0).hide(500);
        $(".item__wraptop1--item").eq(5).hide(500);
        $(".item__wraptop1--item").eq(9).show(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Featured-products").animate({"left": "-1"}, "slow");
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
        $(".Sports-aceessories").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(34).show(500);
        $(".item__wraptop1--item").eq(30).hide(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Best-Sellers").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(34).hide(500);
        $(".item__wraptop1--item").eq(30).show(500);
    });
    $(".item-header__btns--prev").click(function () {
        $(".New-Arrivals").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(39).show(500);
        $(".item__wraptop1--item").eq(35).hide(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".New-Arrivals").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(39).hide(500);
        $(".item__wraptop1--item").eq(35).show(500);
    });
    $(".item-header__btns--prev").click(function () {
        $(".Featured-products").animate({"left": "-1"}, "slow");
        $(".item__wraptop1--item").eq(44).show(500);
        $(".item__wraptop1--item").eq(40).hide(500);
    });
    $(".item-header__btns--next").click(function () {
        $(".Featured-products").animate({"left": "-1"}, "slow");
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
        x = setInterval(function () {

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

    document.querySelector('.bottom-part__special-products--next').onclick = slideLeft;
    var left = 0;
    function slideLeft() {
        var polosa = document.getElementById('polosa');
        left = left - 672.8;
        if (left < -1345.6) {
            left = 0;
        }
        polosa.style.left = left + 'px';
    }



    //Testimonials

    $('.testimonials-wrap__bodywrap--bottom-itembtn').hover(function () {
        $('.testimonials-wrap__bodywrap--bottom-itembtn').removeClass("active");
        $(this).toggleClass("active");
    });

    document.querySelector('.testimonials-wrap__header--prev').onclick = slideLeft1;
    var left = 0;
    function slideLeft1() {
        var polosa1 = document.getElementById('polosa1');
        left = left - 464;
        if (left <= -929){
            left = 0;
        }
        polosa1.style.left = left + 'px';
    }


    //Blog slider
    function news(){
        document.querySelector('.section-news__btns--prev').onclick = slideLeft;
        var left = 0;
        function slideLeft() {
            var polosa2 = document.getElementById('polosa2');
            left = left - 399.95;
            if (left <= -800){
                left =  0;
            }
            polosa2.style.left = left + 'px';
        }
    }
    news();
    //Brand slider
    $('.brand-slider').bxSlider({
        wrapperClass: 'bx-brand',
        pager: false,
        minSlides: 1,
        maxSlides: 5,
        slideWidth: 277,
        moveSlides: 1,
        slideMargin: 20
    });

    $('.bx-brand div:nth-child(2)').addClass('brand-controls');
    $('.brand-controls div:nth-child(1)').addClass('brand-links-wrap');
    $('.brand-controls div:nth-child(1)').removeClass('bx-controls-direction');
    $('.brand-links-wrap a:nth-child(1)').addClass('brand-prev');
    $('.brand-links-wrap a:nth-child(1)').removeClass('bx-prev');
    $('.brand-links-wrap a:nth-child(2)').addClass('brand-next');
    $('.brand-links-wrap a:nth-child(2)').removeClass('bx-next');

    //mobile menu
    $('.header-mobilewrap__bottom--list').find('.header-mobilewrap__bottom--link:eq(0)').click(function () {
        $('.header-mobilewrap__bottom--list2').slideToggle("slow");
        $(this).find('.mobile-menu-icon').toggleClass('turn');
    });
    $('.header-mobilewrap__bottom--list').find('.header-mobilewrap__bottom--link:eq(1)').click(function () {
        $('.header-mobilewrap__bottom--list2:eq(1)').slideToggle("slow");
        $(this).find('.mobile-menu-icon').toggleClass('turn');
    });
    $('.header-mobilewrap__bottom--list2-link').eq(0).click(function () {
        $('.header-mobilewrap__bottom--list3:eq(0)').slideToggle('slow');
        $(this).find('.mobile-menu-icon').toggleClass('turn');
    });
    $('.header-mobilewrap__bottom--list2-link').eq(1).click(function () {
        $('.header-mobilewrap__bottom--list3:eq(1)').slideToggle('slow');
        $(this).find('.mobile-menu-icon').toggleClass('turn');
    });
    $('.header-mobilewrap__bottom--list2-link').eq(2).click(function () {
        $('.header-mobilewrap__bottom--list3:eq(2)').slideToggle('slow');
        $(this).find('.mobile-menu-icon').toggleClass('turn');
    });

    $('.mobile__btn').click(function () {
        $('.header-mobilewrap__bottom').addClass('show');
        $('.header-mobilewrap__bottom').removeClass('hide');
        $('.mobile__btn').toggleClass('mobile-btn');

        $('.close__btn').toggleClass('mobile-btnclose');

        $('.close__btn').click(function () {
            $('.header-mobilewrap__bottom').removeClass('show');
            $('.header-mobilewrap__bottom').addClass('hide');
            $('.mobile__btn').removeClass('mobile-btn');
            $('.close__btn').removeClass('mobile-btnclose');
        });
    });
//Footer mobile
    function mobileFut(){
        $('.footer-mobilewrap__list--heading:eq(0)').click(function () {
            $('.footer-mobilewrap__list1').slideToggle('slow');
        });
        $('.footer-mobilewrap__list--heading:eq(1)').click(function () {
            $('.footer-mobilewrap__list2').slideToggle('slow');
        });
        $('.footer-mobilewrap__list--heading:eq(2)').click(function () {
            $('.footer-mobilewrap__list3').slideToggle('slow');
        });
        $('.footer-mobilewrap__list--heading:eq(3)').click(function () {
            $('.footer-mobilewrap__list4').slideToggle('slow');
        });
    }
    mobileFut();















});











