const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const langToggleEventHandler = () => {
    const target = get('.lang_arrow');
    target.addEventListener('click', () => {
        const langBox = get('.lang');
        langBox.classList.toggle('on')
    })
}

const playBgVideo = () => {
    window.addEventListener('scroll', () => {
        const section = get("#section3")
        const video = get("#player")
        const rect = section.getBoundingClientRect();

        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            video.play();
        } else {
            video.pause();
        }
    });
}
const init = () => {
    langToggleEventHandler();
    playBgVideo();
};

init();
