;jQuery(function($) {
if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-tech-proc__cnt-title'),
        animItem2 = document.querySelectorAll('.b-tech-proc__img-wrpr'),
        animItem3 = document.querySelectorAll('.b-tech-proc__desc'),
        animItem4 = document.querySelectorAll('.b-tech-proc__cnt-text'),
        ab1 = TweenMax.from(animItem1, 1.5, {opacity:0, x:'50%'}),
        ab2 = TweenMax.from(animItem2, 1.5, {opacity:0, x:'50%', delay:0.75}),
        ab3 = TweenMax.from(animItem3, 1.5, {opacity:0, x:'-50%', delay:1.5}),
        ab4 = TweenMax.from(animItem4, 1.5, {opacity:0, y:'50%', delay:0.5}),
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-tech-proc>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl),
        sab2 = new ScrollMagic.Scene({triggerElement: '.b-tech-proc>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab2).addTo(ctrl),
        sab3 = new ScrollMagic.Scene({triggerElement: '.b-tech-proc>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab3).addTo(ctrl),
        sab4 = new ScrollMagic.Scene({triggerElement: '.b-tech-proc>.sm-trigger-2', triggerHook: 1, reverse: false}).setTween(ab4).addTo(ctrl);
}
});