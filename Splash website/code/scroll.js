const nav = document.querySelector('.nav');
const navHeight = 90;
const navFixed = document.querySelector('.nav-fixed')

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > navHeight) {
        navFixed.classList.remove('none');
    } else {
        navFixed.classList.add('none');
    }
})
