;jQuery(function($) {
if(scrollAnimationEnabled){
    var staggerItems = document.querySelectorAll('.b-service-item');    
    var ab1 = TweenMax.staggerFrom(staggerItems, 0.6, {filter: 'blur(3px)', opacity:0, delay:0.1}, 0.4);
    var sab1 = new ScrollMagic.Scene({triggerElement: '.b-service>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl);
}
});