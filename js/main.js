var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

$(".btn, a").on(isMobile ? 'touchend' : 'click', function(e) {
    navigator.vibrate(50);
});