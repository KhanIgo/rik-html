;jQuery(function($) {
if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-prom-furniture__cnt'),
        animItem2 = document.querySelectorAll('.b-prom-furniture__text'),
        animItem3 = document.querySelectorAll('.b-prom-furniture__img-wrpr'),
        ab1 = TweenMax.from(animItem1, 1.5, {opacity:0, x:'-50%'}),
        ab2 = TweenMax.from(animItem2, 1.5, {opacity:0, x:'100%', delay:0.75}),
        ab3 = TweenMax.from(animItem3, 1.5, {opacity:0, x:'-50%', delay:1.5}),
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-prom-furniture>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl),
        sab2 = new ScrollMagic.Scene({triggerElement: '.b-prom-furniture>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab2).addTo(ctrl),
        sab3 = new ScrollMagic.Scene({triggerElement: '.b-prom-furniture>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab3).addTo(ctrl);
}
});