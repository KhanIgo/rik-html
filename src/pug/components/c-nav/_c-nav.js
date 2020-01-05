(function () {
    const link = document.querySelectorAll('.c-nav__link'),
          otherHovers = document.querySelectorAll('.hov-cursor'),
        cursor = document.querySelector('.cursor');
    const animateit = function (e) {
        const span = this.querySelector('span');
        const {
            offsetX: x,
            offsetY: y
        } = e, {
            offsetWidth: width,
            offsetHeight: height
        } = this,
        move = 12,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;
        span.style.transform = `translate( ${xMove}px, ${yMove}px )`;
        if (e.type === 'mousemove'){
            cursor.classList.add('is-hover');
        }
        if (e.type === 'mouseleave'){
            span.style.transform = '';
            cursor.classList.remove('is-hover');
        } 
    };
    const hovCursor = e => {
        console.log(e.type);
//        alert('ss');
        if (e.type === 'mousemove'){
            cursor.classList.add('is-hover');
        }
        if (e.type === 'mouseleave'){
            cursor.classList.remove('is-hover');
        } 
    };
    
    
    const editCursor = e => {
        const {
            clientX: x,
            clientY: y
        } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    }
    
    link.forEach(item => item.addEventListener('mousemove', animateit));
    link.forEach(item => item.addEventListener('mouseleave', animateit));
    
    console.log(otherHovers);
    otherHovers.forEach(item => item.addEventListener('mousemove', hovCursor));
    otherHovers.forEach(item => item.addEventListener('mouseleave', hovCursor));
    
    
    
    window.addEventListener('mousemove', editCursor);


})();


jQuery($ => {


});