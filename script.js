const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('load', () => {
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);
