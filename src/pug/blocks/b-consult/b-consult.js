;jQuery(function($) {
    if(scrollAnimationEnabled){
        var staggerItems = document.querySelectorAll('.b-consult__cnt');
        var ab = TweenMax.staggerFrom(staggerItems, 1.5, {x:'-50%', opacity:0, delay:0.1}, 1);
        var sab = new ScrollMagic.Scene({triggerElement: '.b-consult>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab).addTo(ctrl);
    }
});