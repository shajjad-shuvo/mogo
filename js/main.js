$(function () {
    'use strict';
    
    
   $(window).on('scroll',function(){
       var scrolling = $(this).scrollTop();
        
        if(scrolling  > 1020){
            $('.navbar').addClass('sticky-nav');
        }else{
            $('.navbar').removeClass('sticky-nav');
        }
    });
    // banner slider;
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay : true,
        dots : true,
    });
    // banner slider ends ;
});