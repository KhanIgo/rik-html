;
jQuery($ => {
    $('.js-fade-slider').owlCarousel({
        items: 1
        , margin: 0
        , nav: false
        , dots: false
        , loop: true
        , animateOut: 'fadeOut'
        , animateIn: 'fadeIn'
//        , navSpeed: 5000
        , autoplay: true
        , autoplayHoverPause: true
        , autoplaySpeed: 1500
        , stagePadding: 0
//        , smartSpeed:3500
    , });
});