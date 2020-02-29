;jQuery(function($) {
    if(scrollAnimationEnabled){
        var $bs = document.querySelector('.b-intro');;
        var abs = TweenMax.from($bs, 1.5, {filter: 'blur(2px)', y:-200, opacity:0, delay:1});
        var sabs = new ScrollMagic.Scene({offset: 0, reverse: false}).setTween(abs).addTo(ctrl);
    }
});