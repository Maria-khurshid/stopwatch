let minutes = 0;
let hours = 0;
let seconds = 0;
let realSeconds = 0;
let realMinutes = 0;
let realHours = 0;
let interval = null;
let watchStatus = "stopped";
let isRunning = false;



function startWatch() {


    if (seconds === 59) {
        seconds = 0;

        if (minutes === 59) {
            minutes = 0;
            hours++;
        } else {
            minutes++;
        }
    } else {
        seconds++;
    }
    document.querySelector(".watch").innerHTML = `${hours}:${minutes} : ${seconds}`;

    //  adding 0 to seconds
    /*if (seconds < 10) {
            seconds = "0" + seconds;
        } else {
            seconds = seconds;
        }
        //adding 0 to minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        } else {
            minutes = minutes;
        }
        //adding 0 to huors
        if (hours < 10) {
            hours = "0" + hours;
        } else {
            hours = hours;
    
        }*/

}




function start() {
    if (isRunning === false) {
        interval = setInterval(startWatch, 15);
        isRunning = true;

    }
}

function stop() {
    clearInterval(interval);
    isRunning = false;

}

function resetWatch() {

    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector(".watch").innerHTML = "00:00:00";
    document.querySelector("#startStopSys").innerHTML = "Start";
}

// timer coding

function countTimer() {
    let today = new Date();
    let timerDate = new Date("2019, 00:00:00");

    let currentTime = today.getTime();
    let timerTime = timerDate.getTime();

    let newTime = currentTime - timerTime;

    let sec = Math.floor(newTime / 1000);
    let mints = Math.floor(sec / 60);
    let hurs = Math.floor(mints / 60);


    hurs = hurs % 24;
    mints %= 60;
    sec %= 60;

    hurs = (hurs < 10) ? ' 0 ' + hurs : hurs;
    mints = (mints < 10) ? '0' + mints : mints;
    sec = (sec < 10) ? ' 0' + sec : sec;

    document.querySelector("#hrs").innerHTML = hurs;
    document.querySelector("#mint").innerHTML = mints;
    document.querySelector("#sec").innerHTML = sec;
    setTimeout(countTimer, 1000);
}
countTimer();

// timer setting function