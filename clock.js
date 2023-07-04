/* const clockContainer = document.querySelector('.js_clock');
const clockTitle = clockContainer.querySelector('h1');
function get_time(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    get_time();
    setInterval(get_time, 1000);
} 
init();
 */ /* Видны секунды постоянно, можно сделать лучше*/

 const clockContainer = document.querySelector('.js_clock');
const clockTitle = clockContainer.querySelector('h1');
let showSeconds = false;

function get_time() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    if (showSeconds) {
        clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    } else {
        clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    }
}

function showSecondsHandler() {
    showSeconds = true;
    get_time();
}

function hideSecondsHandler() {
    showSeconds = false;
    get_time();
}

function init() {
    get_time();
    setInterval(get_time, 1000);
    clockContainer.addEventListener('mouseenter', showSecondsHandler);
    clockContainer.addEventListener('mouseleave', hideSecondsHandler);
}

init(); /* Исправленный вариант с появлением секунд при наведении */