const weekDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

function setDate() {

    let today = new Date();
    // let month = months[today.getMonth()];
    // let year = today.getFullYear();
    let dayName = weekDays[today.getDay()];
    let day = today.getDate()
    // let currentDay = `Date: ${dayName} , ${day}  - ${month} - ${year}`;
    let currentDay = ` ${dayName} `;
    return currentDay;
}


function setTime() {
    let time = new Date();
    let hour = addZero(time.getUTCHours() * 3600000);
    let minute = addZero(time.getUTCMinutes() * 60000);
    let second = addZero(time.getUTCSeconds() * 1000);
    let millisecond = addZero(time.getUTCMilliseconds());
    let currentTime = hour + minute + second + millisecond
    return currentTime;

}

function addZero(num) {
    return num < 10 ? `0${num}` : num
}

setInterval((date) => {
    weekDay.innerHTML = setDate();
    currentUTCTime.innerHTML = setTime();
}, 100)