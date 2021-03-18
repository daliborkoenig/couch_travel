
function randomImg() {
    let num = Math.ceil(Math.random()*20)
    let randomImage = `url(./assets/background/background_${num}.jpg)`;
    document.body.style.background = randomImage;
    document.getElementById('mobile').style.background = randomImage;
}
