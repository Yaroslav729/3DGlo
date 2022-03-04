const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        console.log(1)
        return {timeRemaining, hours, minutes, seconds}
    }

    const newZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        timerHours.textContent = newZero(getTime.hours)
        timerMinutes.textContent = newZero(getTime.minutes)
        timerSeconds.textContent = newZero(getTime.seconds)

        if (getTime.timeRemaining <= 1) {

            clearInterval(timeInterval)
        }
    }
    updateClock()
    const timeInterval = setInterval(updateClock, 1000)
}

export default timer