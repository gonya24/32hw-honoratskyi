function currentTime() {
    // get Hours
    setInterval(() => getTime(new Date().getHours(), '.hours'), 1000);
    // get Minutes
    setInterval(() => getTime(new Date().getMinutes(), '.minutes'), 1000);
    // get Seconds
    setInterval(() => getTime(new Date().getSeconds(), '.seconds'), 1000);

}
function getTime(unit, selector) {
    let arr = ('' + unit).split('')
    if (unit < 10) {
        arr = ('0' + unit).split('')
    }

    for (let i = 0; i < 2; i++) {
        const img = document.querySelector(selector).children[i]
        if ((img.getAttribute('src')) !== `img/${arr[i]}.png`) {
            img.src = `img/${arr[i]}.png`
        }

    }
}

currentTime()   