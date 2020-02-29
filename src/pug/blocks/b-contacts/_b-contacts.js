;jQuery(function($) {
if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-contacts__cnt')
        ab1 = TweenMax.from(animItem1, 1.5, {opacity:0, y:100})
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-contacts>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl);
}
});