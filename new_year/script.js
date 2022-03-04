'use strict'

const timer = () => {
    window.setInterval(function () {
        let date = new Date()
        let greeting = document.getElementById('greeting')
        let today = document.getElementById('today')
        let time = document.getElementById('time')
        let newYear = document.getElementById('newYear')

        let deadLine = '31 december 2022'
        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = date.getHours()
        let timerDay = Math.floor(timeRemaining / 60 / 60 / 24)
        let day = date.getDay();
        let days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


        today.textContent = `Сегодня: ${days[day]}`
        time.textContent = date.toLocaleTimeString('en')
        newYear.textContent = `До нового года осталось ${timerDay} дней`

        const updateClock = () => {
            if (hours > 4 && hours <= 11) {
                return greeting.textContent = 'Доброе утро!'
            } else if (hours > 11 && hours <= 15) {
                return greeting.textContent = 'Добрый день!'
            } else if (hours > 15 && hours <= 23) {
                return greeting.textContent = 'Добрый вечер!'
            } else {
                return greeting.textContent = 'Доброй ночи!'
            }

        }
        updateClock()
    }, 1000);
}

timer()