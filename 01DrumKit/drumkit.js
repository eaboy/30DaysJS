var keys = document.getElementsByClassName('key');

window.addEventListener('keydown', keyPressed);
window.addEventListener('keyup', keyReleased);

function keyPressed(event) {
    var index = isADrumKey(event.keyCode);
    if (index !== false) {
        keys[isADrumKey(event.keyCode)].classList.add('playing');
        playSound(event.keyCode);
    }
}

function keyReleased(event) {
    if (isADrumKey(event.keyCode) !== false) {
        keys[isADrumKey(event.keyCode)].classList.remove('playing');
    }
}

function isADrumKey (keyCode) {
    for (var i = 0 ; i < keys.length ; i++ ) {
        if (keyCode === parseInt(keys[i].getAttribute('data-key'))) {
            return i;
        }
    }
    return false;
}

function playSound(key) {
    var audios = document.querySelectorAll('audio');
    for (var i = 0 ; i < audios.length ; i++ ) {
        if (key === parseInt(audios[i].getAttribute('data-key'))) {
            audios[i].pause();
            audios[i].currentTime = 0;
            audios[i].play();
        }
    }
}