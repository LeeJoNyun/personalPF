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

        // if (rect.top < 680) {
        //     video.play();
        // } else {
        //     video.pause();
        // }
    });
}
const init = () => {
    langToggleEventHandler();
    playBgVideo();
};

init();
