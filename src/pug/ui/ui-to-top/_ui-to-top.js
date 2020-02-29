;jQuery(function($) {
    var $body = $('body'),
        $win = $(window),
        $doc = $(document),
        $topBtn = $('.ui-to-top'),
        winH = $win.innerHeight(),
        bodyH = $body.height(),
        btnH = parseInt($topBtn.height())
    ;
    
    $win.on('scroll', function(e) {
        var top = $(this).scrollTop();
        if(top>winH) $topBtn.addClass('ui-to-top_is-active');
        else $topBtn.removeClass('ui-to-top_is-active');
        initTopWidgetPosition(top);    
    });
    $body.on('click', '.ui-to-top', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, "slow");
    });
    
    function initTopWidgetPosition(top) {
        bodyH = $body.height();
        var offsetTop = (top + winH )/bodyH;
        if(offsetTop>1) offsetTop = 1;
        var pos = winH * offsetTop - btnH;
        
        console.log('winH', winH);
        console.log('winH-70', winH-110);
        if(isMobile){
            if(pos<55) pos = 55;
            if(pos> (winH-70) ) pos = winH-110;
        }
        
        
        $topBtn.css('top', pos+'px');
    }
});