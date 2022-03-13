const animate = (count, modal, popupContent) => {
    let idInterval;
    count++
        if (count < 11) {
            popupContent.style.top = count + '%'
            modal.style.display = 'block'
        } else {
            cancelAnimationFrame(idInterval)
        }

    count--;
    idInterval = requestAnimationFrame(flyAnimateClose);
    if (count > -50) {
        popupContent.style.top = count + '%'
    } else {
        cancelAnimationFrame(idInterval)
        modal.style.display = 'none'
    }
}



export {animate}