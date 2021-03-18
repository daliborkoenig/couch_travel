function getRandomImage() {
    let num = Math.ceil(Math.random()*20)
    let randomImage = `url(./assets/background/background_${num}.jpg)`;
    return randomImage;
};

function randomImg() {
    document.body.style.background = getRandomImage();
    document.getElementById('mobile').style.background = getRandomImage();
}



