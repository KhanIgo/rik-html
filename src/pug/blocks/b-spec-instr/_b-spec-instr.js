;jQuery(function($) {
if(scrollAnimationEnabled){
    var animItem1 = document.querySelectorAll('.b-spec-instr__cnt_title'),
        animItem2 = document.querySelectorAll('.b-spec-instr__cnt_data'),
        ab1 = TweenMax.from(animItem1, 1.5, {opacity:0, x:'-50%'}),
        ab2 = TweenMax.from(animItem2, 1.5, {opacity:0, x:'50%', delay:0.75}),
        sab1 = new ScrollMagic.Scene({triggerElement: '.b-spec-instr>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab1).addTo(ctrl),
        sab2 = new ScrollMagic.Scene({triggerElement: '.b-spec-instr>.sm-trigger', triggerHook: 0.9, reverse: false}).setTween(ab2).addTo(ctrl);
}
});