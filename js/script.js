$(document).ready(function () {
    $(".side-menu").hide();
   $(".search-barwrap__nav").click(function () {
       $(".side-menu").slideToggle();
   });
    $('.slider').bxSlider({
        pager:false,
        maxslide:1,
        minslide:1,
        moveslide:1,
        auto:true
    });
    $(".bx-wrapper").css("border","none");

});











