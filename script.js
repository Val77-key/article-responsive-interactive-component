const buttons = document.querySelectorAll('.button');
const bottombarOrig = document.querySelector('.bottombar__orig');
const bottombarShare = document.querySelector('.bottombar__share');
const bottombareShareDesk = document.querySelector('.bottombar__share--desktop');
const lightButton = document.querySelector('.button-image').parentElement;
const darkButton = document.querySelector('.button-image-dark').parentElement;
const canHover = window.matchMedia("(hover: hover)");
const isMobile = window.matchMedia('(max-width:48rem)');
const isDesktop = window.matchMedia('(min-width:48rem)');


for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if(isMobile.matches) {
        bottombarShare.classList.toggle('hidden');
        } else {
        bottombareShareDesk.classList.toggle('hidden');
        for (let y = 0; y < 2; y++) {
            buttons[y].classList.toggle('hidden');
        };
        }
});
};

window.addEventListener('resize', () => {
    bottombarOrig.classList.remove('hidden');
    bottombarShare.classList.add('hidden');
    bottombareShareDesk.classList.add('hidden');
    lightButton.classList.remove('hidden');
    darkButton.classList.add('hidden');
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

            if (isDesktop.matches)  {
                lightButton.classList.remove('hidden');
                darkButton.classList.add('hidden');
            }
        }
});

lightButton.addEventListener('mouseenter', () => {
    if (canHover.matches) {
        lightButton.classList.add('hidden');
        darkButton.classList.remove('hidden');
    }
});

darkButton.addEventListener('mouseleave', () => {
    if (canHover.matches &&
        bottombareShareDesk.classList.contains('hidden')) {

        darkButton.classList.add('hidden');
        lightButton.classList.remove('hidden');
    }
});