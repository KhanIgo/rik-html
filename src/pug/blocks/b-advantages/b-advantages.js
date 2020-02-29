;jQuery(function($) {
    if(scrollAnimationEnabled){
        var staggerItems = document.querySelectorAll('.b-advantages-item');
        var ab = TweenMax.staggerFrom(staggerItems, 0.8, {filter: 'blur(2px)', opacity:0, delay:0.1}, 0.5);
        var sab = new ScrollMagic.Scene({triggerElement: '.b-advantages>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab).addTo(ctrl);
    }
});