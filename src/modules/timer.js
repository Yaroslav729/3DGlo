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
        return {timeRemaining,
            hours:hours < 0 ? 0 : hours,
            minutes:minutes < 0 ? 0 : minutes,
            seconds:seconds < 0 ? 0 : seconds
        }
    }


    const newZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    const updateClock = (timer) => {
        let getTime = getTimeRemaining()
        timerHours.textContent = newZero(getTime.hours)
        timerMinutes.textContent = newZero(getTime.minutes)
        timerSeconds.textContent = newZero(getTime.seconds)

        if (getTime.timeRemaining < 1) {
            clearInterval(timer)
        }
    }
    const timeInterval = setInterval(updateClock, 1000)
    updateClock(timeInterval)

}

export default timer