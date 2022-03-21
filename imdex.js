setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")

function setClock () {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60/**This action was undertaken to slow down the minute hand and same as the hour hand below, so iit will not move at it's own pace */
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12   /**12 was used here bcos there are 12 hrs on the hand of a clock, not 60 */
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock();