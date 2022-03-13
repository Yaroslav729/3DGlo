import {animate} from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupContent = document.querySelector('.popup-content')
    const width = window.matchMedia("(max-width:768px)")
    let count = -50;
    const animation = animate(-50, modal, popupContent)

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (width.matches) {
                popupContent.style.top = 10 + '%'
                modal.style.display = 'block'
            } else if (!width.matches) {
                animation.open()
            } else {
                animation.close()
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))
            animation.close()
    })

}

export default modal