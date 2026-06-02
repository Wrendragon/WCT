// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.glass-navbar');
    const overlay = document.querySelector('.nav-overlay');

    if (!toggle || !navbar) return;

    function openMenu() {
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        navbar.classList.add('open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        navbar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    toggle.addEventListener('click', () => {
        toggle.classList.contains('open') ? closeMenu() : openMenu();
    });

    if (overlay) overlay.addEventListener('click', closeMenu);

    // Don't intercept link clicks — let the browser navigate naturally
    // Just clean up the menu state so it doesn't persist on back-navigation
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            document.body.style.overflow = '';
        });
    });
});
