document.querySelector(".container").addEventListener('mousemove', eyeball);

function eyeball() {
    const eye = document.querySelectorAll(".eye");
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)";
    });
}

document.querySelector(".left-eyebrow").addEventListener("click", leftAnimated);

function leftAnimated() {
    let leftSide = document.querySelector(".left");
    leftSide.classList.toggle("motionLeft");
}

document.querySelector(".right-eyebrow").addEventListener("click", rightAnimated);

function rightAnimated() {
    let rightSide = document.querySelector(".right");
    rightSide.classList.toggle("motionRight");
}

document.querySelector(".mouth").addEventListener("click", turnPage);

function turnPage() {
    window.scrollBy(0, 100 * window.innerHeight / 100);
}

document.querySelector(".btn-create").addEventListener("click", picturesAnimated);

function picturesAnimated() {
    let firstPic = document.querySelector(".f");
    firstPic.classList.toggle("f-motion");
    let secondPic = document.querySelector(".s");
    secondPic.classList.toggle("s-motion");
    let thirdPic = document.querySelector(".t");
    thirdPic.classList.toggle("t-motion");
}















