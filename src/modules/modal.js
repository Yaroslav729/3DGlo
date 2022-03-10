const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const popupContent = document.querySelector('.popup-content')
    const width = window.matchMedia("(max-width:768px)")
    let count = -50;
    let idInterval;

    const flyAnimate = () => {
        count++
        idInterval = requestAnimationFrame(flyAnimate)

        if (count < 11) {
            popupContent.style.top = count + '%'
            modal.style.display = 'block'
        } else {
            cancelAnimationFrame(idInterval)
        }
    }

    const flyAnimateClose = () => {
        count--;
        idInterval = requestAnimationFrame(flyAnimateClose);
        if (count > -50) {
            popupContent.style.top = count + '%'
        } else {
            cancelAnimationFrame(idInterval)
            modal.style.display = 'none'
        }
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