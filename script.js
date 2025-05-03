document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust background position for parallax
    const content = document.querySelector('.content-wrapper');
    if (content) {
        content.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Slightly move the foreground content
    }
});
