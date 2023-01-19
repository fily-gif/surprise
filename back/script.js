const greeting = document.getElementById("greeting");
const countdown = document.getElementById("countdown");
const birthday = new Date("January 19, 2023 10:25:00");

let intervalId = setInterval(() => {
    let now = new Date();
    let distance = birthday - now;

    if (distance < 0) {
        clearInterval(intervalId);
        countdown.innerHTML = "Happy Birthday!";
        greeting.style.display = "block";
        animateGradient();
    } else {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `[ ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds until the surprise is deployed :) ]`;
    }
}, 1000);

function animateGradient() {
    let i = 0;
    let colors = ["orange", "purple"];
    let intervalId = setInterval(() => {
        document.body.style.background = `linear-gradient(to right, ${colors[i % 2]}, ${colors[(i + 1) % 2]})`;
        i++;
    }, 1000);
}
