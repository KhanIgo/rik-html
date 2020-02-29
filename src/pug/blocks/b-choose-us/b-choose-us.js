;jQuery(function($) {
    if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-choose-us__cnt'),
        animItem2 = document.querySelectorAll('.b-choose-us__items'),
        ab1 = TweenMax.from(animItem1, 1, {opacity:0, y:100}),
        ab2 = TweenMax.from(animItem2, 1, {opacity:0, y:-50, delay:0.5}),
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-choose-us .sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl),
        sab2 = new ScrollMagic.Scene({triggerElement: '.b-choose-us .sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab2).addTo(ctrl);
    }
    
    
    $sliders = $('.b-choose-us__slider');
    $sliders.each(function() {
        var w = 0;
        var $slider = $(this);
        $slides = $slider.find('.b-choose-us-item');
        w = getSliderWidth($slides);
        $slider.css('width', w+'px');
        var t = getTransitionTime(w);
        var winWidth = $(window).innerWidth();
        
        if(winWidth<600) t = t*2.5;
        var transition = getTransition(t);
        $slider.css('transition', transition);
        $slider.addClass('moving');
        setInterval(function() {
            $slider.toggleClass('moving');
        }, t*1000);

    });
});