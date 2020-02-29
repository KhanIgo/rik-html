;jQuery(function($) {
    if(scrollAnimationEnabled){
        var staggerItems = document.querySelectorAll('.b-supply-item');    
        var ab = TweenMax.staggerFrom(staggerItems, 0.8, {filter: 'blur(2px)', opacity:0, delay:0.1}, 0.5);
        var sab = new ScrollMagic.Scene({triggerElement: '.b-supply>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab).addTo(ctrl);
    }
    $sliders = $('.b-supply__slider');    
    $sliders.each(function() {
        var w = 0;
        var $slider = $(this);
        $slides = $slider.find('.b-supply-item');
        w = getSliderWidth($slides);
        $slider.css('width', w+'px');
        var t = getTransitionTime(w);
        var winWidth = $(window).innerWidth();
        
        if( winWidth< w){
            if(winWidth<600) t = t*2.5;
            var transition = getTransition(t);
            $slider.css('transition', transition);
            $slider.addClass('moving');
            setInterval(function() {
                $slider.toggleClass('moving');
            }, t*1000);
        }
        else{
            $slider.addClass('not-sliding');
        }
        

    });
});