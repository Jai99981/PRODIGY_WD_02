let [seconds, minutes, hours, milliseconds] = [0, 0, 0, 0];
let displayTime = document.getElementById("displayTime");
var laps = document.querySelector(".laps");

let timer = null;
function stopwatch() {
    milliseconds++; 
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds; 
    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}


function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function watchStop() {
    clearInterval(timer);
}

function watchReset() {
    [seconds, minutes, hours, milliseconds] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00:00";
    laps.innerHTML="";
}

function lap() {
    if (timer) {
        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds; 
        let lapTime = h + ":" + m + ":" + s + ":" + ms;
        var lapDiv = document.createElement("div");
        lapDiv.textContent = lapTime;
        laps.appendChild(lapDiv);
    }
}