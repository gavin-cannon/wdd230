/*OBEJCT OBSERVER*/
let imagesToLoad = document.querySelectorAll('img[data-src]');

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
    img.removeAttribute('data-src');
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    }), imgOptions
})

imagesToLoad.forEach(image => {
    imgObserver.observe(image);
})

/* attmpet at the date thing*/
// const todayDisplay = document.querySelector(".today");

// todayDisplay.textContent = Date.now();

// millis = Date.now();

// function millisToMinutesAndSeconds(millis) {
//     var minutes = Math.floor(millis / 60000);
//     var seconds = ((millis % 60000) / 1000).toFixed(0);
//     return (
//         seconds == 60 ?
//         (minutes + 1) + ":00" :
//         minutes + ":" + (seconds < 10 ? "0" : "") + seconds
//     );
// }