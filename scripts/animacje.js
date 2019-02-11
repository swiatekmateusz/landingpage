
const noReveal = {
    reset: true,
}

const sr = new ScrollReveal(noReveal);
sr.reveal('.animation', {
    beforeReveal: function (el) {
        el.style.animationDelay = el.dataset.delay;
        el.style.animationDuration = el.dataset.duration;
        //el.classList.remove(fadeOut)
        el.classList.add(`${el.dataset.animation}`);
    },
    beforeReset: function (el) {
        el.classList.remove(`${el.dataset.animation}`);
        //el.classList.add(fadeOut)
    },
});