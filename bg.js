const body = document.querySelector('body');
const IMG_NUM = 2;

function showImage(number) {
    const img = new Image();
    img.src = `img/${number + 1}.jpg`;
    img.classList.add('bgIimg');
    body.prepend(img);
}

function getRandom() {
    const num = Math.floor(Math.random() * IMG_NUM);
    return num
}
function init() {
    const randomNum = getRandom();
    showImage(randomNum);
}

init();