const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const scroll = (e) => {
    const topBanner = get('.top_banner');
    window.addEventListener('wheel', (e) => {
        if (window.scrollY === 0 && e.deltaY < 0) {
            topBanner.classList.add('on');
        } else if (window.scrollY > 480) {
            topBanner.classList.remove('on');
        }
    });
};

const init = () => {
    scroll();
};

init();
