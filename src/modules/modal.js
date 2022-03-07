const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = document.querySelector('.popup-close')
    const popupContent = document.querySelector('.popup-content')
    const width = document.documentElement.clientWidth

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
                if (width < 768) {
                    modal.style.display = 'block'
                }else if (width >768){
                    flyAnimate()
                }else {
                    flyAnimateClose()
                }
            })

        })
        closeBtn.addEventListener('click', () => {
            flyAnimateClose()
        })
}

export default modal