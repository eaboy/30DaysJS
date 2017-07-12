var keys = document.getElementsByClassName('key');

function keyPressed(event) {
    var key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (key) {
        key.classList.add('playing');
        playSound(event.keyCode);
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

function playSound(keyCode) {
    var audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

window.addEventListener('keydown', keyPressed);

for (var i = 0 ; i < keys.length ; i++ ) {
    keys[i].addEventListener('transitionend', function(){this.classList.remove('playing')});
}