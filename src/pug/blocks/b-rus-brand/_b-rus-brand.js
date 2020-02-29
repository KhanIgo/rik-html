;jQuery(function($) {
if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-rus-brand__img-wrpr'),
        animItem2 = document.querySelectorAll('.b-rus-brand__text'),
        ab1 = TweenMax.from(animItem1, 1.5, {opacity:0, x:'-50%'}),
        ab2 = TweenMax.from(animItem2, 1.5, {opacity:0, x:'50%'}),
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-rus-brand>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl),
        sab2 = new ScrollMagic.Scene({triggerElement: '.b-rus-brand>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab2).addTo(ctrl);
}
});