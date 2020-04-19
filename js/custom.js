$(function () {
    $('.all-slide').slick({
        dots: true,
        speed: 500,
        arrows: false,
    });

    $('.slick-dots li:nth-child(1) button').html('<i class="fa fa-home" aria-hidden="true"></i>')




    $('.slide_all').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 5,
    });




    $('.venobox').venobox({
        numeratio: true,
        infinigall: true,
        spinner: 'wave',
    });



    // user_slide
    $('.fb_slide_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fb_img_slide'
    });
    $('.fb_img_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fb_slide_active',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        centerPadding: 0,
    });




    // preloader
    $(window).load(function () {
        $('.preload').delay(3000).fadeOut();
    });


    // sticky manu start


    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 400) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }






    });
















});