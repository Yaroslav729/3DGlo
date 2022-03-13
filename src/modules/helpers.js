function animate(count, modal, popup) {
    let idInterval;
    const flyAnimate = () => {
        idInterval = requestAnimationFrame(flyAnimate)
        count++

        if (count < 11) {
            popup.style.top = count + '%'
            modal.style.display = 'block'
        } else {
            cancelAnimationFrame(idInterval)
        }
    }
    const flyAnimateClose = () => {
        idInterval = requestAnimationFrame(flyAnimateClose);
        count--;
        if (count > -50) {
            popup.style.top = count + '%'
        } else {
            cancelAnimationFrame(idInterval)
            modal.style.display = 'none'
        }
    }
    return {open: flyAnimate, close:flyAnimateClose}
}


export {animate}