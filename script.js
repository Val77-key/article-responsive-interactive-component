const buttons = document.querySelectorAll('.button');
const bottombarOrig = document.querySelector('.bottombar__orig');
const bottombarShare = document.querySelector('.bottombar__share');
const bottombareShareDesk = document.querySelector('.bottombar__share--desktop')


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if(window.innerWidth <= 768) {
        bottombarShare.classList.toggle('hidden');
        } else {
        bottombareShareDesk.classList.toggle('hidden');
        }
});
};

window.addEventListener('resize', () => {
    bottombarOrig.classList.remove('hidden');
    bottombarShare.classList.add('hidden');
    bottombareShareDesk.classList.add('hidden');
});


/* logic to close shared menu on click outside */

document.addEventListener('click', (event) => {
    let clickedButton = false;

    for(let i = 0; i < buttons.length; i++) {
        if (
            buttons[i].contains(event.target)) {
            clickedButton = true;
            break;
        }
    }

    const clickedInsideMobileShare = bottombarShare.contains(event.target);
    const clickedInsideDesktopShare = bottombareShareDesk.contains(event.target);

        if (
            !clickedButton &&
            !clickedInsideMobileShare &&
            !clickedInsideDesktopShare 
        ) {
            bottombarShare.classList.add('hidden');
            bottombareShareDesk.classList.add('hidden');
        }
});
