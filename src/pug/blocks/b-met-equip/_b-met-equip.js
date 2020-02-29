;jQuery(function($) {
    if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-met-equip__title'),
        animItem2 = document.querySelectorAll('.b-met-equip__desc'),
        animItem3 = document.querySelectorAll('.b-met-equip__items'),
        ab1 = TweenMax.from(animItem1, 1, {opacity:0, y:100}),
        ab2 = TweenMax.from(animItem2, 1, {opacity:0, y:-50, delay:0.5}),
        ab3 = TweenMax.from(animItem3, 1.5, {opacity:0, y:'50%', delay:0.75}),
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-met-equip .sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl),
        sab2 = new ScrollMagic.Scene({triggerElement: '.b-met-equip .sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab2).addTo(ctrl)
        sab3 = new ScrollMagic.Scene({triggerElement: '.b-met-equip .sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab3).addTo(ctrl);
    }
});