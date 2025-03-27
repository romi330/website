document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.classList.add(savedTheme);

    if (savedTheme === 'dark-mode') {
        themeToggle.innerHTML = '🌙';
    } else {
        themeToggle.innerHTML = '☀️';
    }

    function setTheme(theme) {
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark-mode') {
            themeToggle.innerHTML = '🌙';
        } else {
            themeToggle.innerHTML = '☀️';
        }
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }
    });

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    function handleMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';

            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            });

            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.innerHTML = '☰';
                });
            });
        } else {
            mobileMenuToggle.style.display = 'none';
            navMenu.classList.remove('active');
        }
    }

    handleMobileMenu();

    window.addEventListener('resize', handleMobileMenu);
});
