let skillsSection = document.querySelector(".skills");
let skillsProgress = document.querySelectorAll(".progress span")

let statsSection = document.querySelector(".stats");
let statsNumbers = document.querySelectorAll(".stats .number");
let interval = 2000;
let statsAnimated = false;

function increaseStat(number) {
    let startVal = 0;
    let endVal = parseInt(number.dataset.val);
    let duration = Math.floor(interval / endVal);
    let counter = setInterval(() => {
        startVal++;
        number.textContent = startVal;
        if (startVal == endVal) {
            clearInterval(counter);
        }
    }, duration);
}

window.onscroll = () => {
    // Animate Skills Progress On Scroll
    if (window.scrollY >= skillsSection.offsetTop - 100) {
        skillsProgress.forEach(skillProgress => {
            skillProgress.style.width = skillProgress.dataset.progress;
        })
    }
    // Animate Increasing Stats On Scroll
    if (window.scrollY >= statsSection.offsetTop - 100) {
        if (!statsAnimated) {
            statsNumbers.forEach(number => increaseStat(number))
            statsAnimated = true;
        }
    }
}


// The End Of The Year To Countdown To
// 1000 milliseconds = 1 Second
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    dateDiff %= (1000 * 60 * 60 * 24);
    let hours = Math.floor(dateDiff / (1000 * 60 * 60));
    dateDiff %= (1000 * 60 * 60)
    let minutes = Math.floor(dateDiff / (1000 * 60));
    dateDiff %= (1000 * 60);
    let seconds = Math.floor(dateDiff / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 0) {
        clearInterval(counter);
        document.querySelector(".days").innerHTML = '00';
        document.querySelector(".hours").innerHTML = '00';
        document.querySelector(".minutes").innerHTML = '00';
        document.querySelector(".seconds").innerHTML = '00';
    }
}, 1000);