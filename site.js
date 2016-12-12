function init() {
    window.addEventListener('scroll', function (e) {
            var distanceY = window.scrollY;
            var shrinkOn = 100;
            var header = document.getElementById("top");
        
        console.log(distanceY);
        
            if (distanceY > shrinkOn) {
                header.classList.add('smaller');
            } else {
                if( header.classList.contains('smaller') ){
                    header.classList.remove('smaller');
                }
            }
    });
}
window.onload = init();