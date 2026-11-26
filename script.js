document.addEventListener('DOMContentLoaded', () => {
    const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    const setActiveLink = () => {
        const y = window.scrollY + 140;
        let activeSection = sections[0];

        sections.forEach((section) => {
            if (section.offsetTop <= y) {
                activeSection = section;
            }
        });

        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${activeSection.id}`;
            link.classList.toggle('active', isActive);
        });
    };

    window.addEventListener('scroll', setActiveLink, { passive: true });
    window.addEventListener('resize', setActiveLink);
    setActiveLink();

    const menu = document.querySelector('#navbarNav');
    if (!menu) return;

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });
});
