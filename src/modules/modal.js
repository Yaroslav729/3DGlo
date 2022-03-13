import {animate} from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupContent = document.querySelector('.popup-content')
    const width = window.matchMedia("(max-width:768px)")
    let count = -50;


    const flyAnimate = () => {

        idInterval = requestAnimationFrame(flyAnimate)

    }

    const flyAnimateClose = () => {

    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (width.matches) {
                popupContent.style.top = 10 + '%'
                modal.style.display = 'block'
            } else if (!width.matches) {
                flyAnimate()
            } else {
                flyAnimateClose()
            }
        })

    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close'))
            flyAnimateClose()
    })

}

export default modal