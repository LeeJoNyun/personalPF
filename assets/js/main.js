const get = (target) => document.querySelector(target)
const getAll = (target) => document.querySelectorAll(target)



const scroll = (e) => {
    const topBanner = get('.top_banner')
    if (window.scrollY === 0 && e.deltaY < 0) {
        topBanner.classList.add('on')
    } else {
        topBanner.classList.remove('on')
    }
}


const init = () => {

}

init();