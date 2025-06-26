const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const langToggleEventHandler = () => {
    const target = get('.lang_arrow');
    target.addEventListener('click', () => {
        const langBox = get('.lang');
        langBox.classList.toggle('on')
    })
}

const init = () => {
    langToggleEventHandler();
};

init();
