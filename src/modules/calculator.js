const calculator = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')

    const formName = document.querySelectorAll('form input[type=text]')
    const formMail = document.querySelectorAll('form input[type=email]')
    const formPhone = document.querySelectorAll('form input[type=tel]')

    console.log(calcSquare.value)

    calcSquare.addEventListener('input', () => {
        calcSquare.value = calcSquare.value.replace(/\D/g, "")
    })
    calcCount.addEventListener('input', () => {
        calcCount.value = calcCount.value.replace(/\D/g, "")
    })
    calcDay.addEventListener('input', () => {
        calcDay.value = calcDay.value.replace(/\D/g, "")
    })

    for (let i = 0; i < formName.length; i++) {
        formName[i].addEventListener('input', () => {
            formName[i].value = formName[i].value.replace(/[^а-яА-ЯЁё\-\s]/g, "")
        })
    }

    for (let i = 0; i < formMail.length; i++) {
        formMail[i].addEventListener('input', () => {
            formMail[i].value = formMail[i].value.replace(/[^a-zA-Z0-9@_.!~*'\-]/g, "")
        })
    }
    for (let i = 0; i < formPhone.length; i++) {
        formPhone[i].addEventListener('input', () => {
            formPhone[i].value = formPhone[i].value.replace(/[^0-9()\-]/, "")
        })
    }
}
export default calculator