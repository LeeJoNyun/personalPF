const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const scrollTop = () => {
    const topBanner = get('.top_banner');
    window.addEventListener('wheel', (e) => {
        if (window.scrollY === 0 && e.deltaY < 0) {
            topBanner.classList.add('on');
        } else if (window.scrollY > 480) {
            topBanner.classList.remove('on');
        }
    });
};

const scrollDown = () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('on');
        } else {
            header.classList.remove('on');
        }
    });
};

const init = () => {
    scrollTop();
    scrollDown();
};

init();
