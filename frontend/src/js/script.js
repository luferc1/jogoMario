const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';

    // Congela o Mario exatamente onde ele estava (altura real do momento)
    mario.style.bottom = `${marioPosition}px`;
    mario.style.left = `${pipePosition}px`; // alinha na lateral do cano

    mario.src = './images/game-over.png';
    mario.style.width = '75px';

    clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);