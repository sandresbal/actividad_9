/*var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

$(".btn, a").on(isMobile ? 'touchend' : 'click', function(e) {
    navigator.vibrate(50);
});*/

document.getElementById("btn").addEventListener('click', function(){
  if("vibrate" in navigator){
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;                       
if (navigator.vibrate) {
      navigator.vibrate([100, 200, 300]);    
}    else {
      alert('I forgot to add your browser');
    }
}  else {
    alert("Vibration is not supported in your browser");  
    }
});