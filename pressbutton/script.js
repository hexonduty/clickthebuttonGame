    const getScore = document.querySelector('.AppNumber');
    const number = document.querySelector('.number');
    const scoreButton = document.querySelector('.scoreButton');
    const appText = document.querySelector('.AppText');
    const buttonSpace = document.querySelector('.spaceButton');
    const buttonMouse = document.querySelector('.mouseButton');
    const musicButton = document.querySelector('.audioButton');

    function shake(element){
        element.classList.add('shake-animation');
        setTimeout(()=>{
            element.classList.remove('shake-animation')
        }, 200)
    }

    let score = 0;

    document.addEventListener('keydown', function(event) {
        const key = event.key;
    
        if (key === ' ' || key === 'Space' || key === 'Spacebar' || event.keyCode === 32) {
          if (!event.repeat) {
            score += 1;
            number.value = score;
            shake(number);
            shake(scoreButton);
          }
        }
    });
    
    scoreButton.addEventListener('click', function() {
        score += 1;
        number.value = score;
        shake(scoreButton);
        shake(number);
    });

    const audio = new Audio("./audio/Kavinsky - Nightcall (Drive Original Movie Soundtrack).mp3");
    const desiredVolume = 0.2;
    function playMusic() {
        if (audio.paused) {
            audio.volume = desiredVolume;
            audio.play();
        } else {
            audio.pause();
        }
    }
