const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = document.querySelector('.popup-close')
    const popupContent = document.querySelector('.popup-content')

    let count = -40
    let idInterval

    const flyAnimate = () => {
        count++
        idInterval = requestAnimationFrame(flyAnimate)

        if (count < 11) {
            popupContent.style.top = count + '%'
        }else {
            cancelAnimationFrame(idInterval)
        }
    }
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            flyAnimate()
        })

    })
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        popupContent.style.top = -50 + '%'
    })
}

export default modal