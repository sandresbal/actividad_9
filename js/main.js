
function startVibrate(level) {
    navigator.vibrate(level);
}

var vibrateInterval;

function startPeristentVibrate(level, interval) {
    vibrateInterval = setInterval(function () {
        startVibrate(level);
    }, interval);
}

function stopVibrate() {
    if (vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
}