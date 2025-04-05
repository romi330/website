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

    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        mobileMenuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    }

    function handleMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuToggle.style.display = 'block';

            mobileMenuToggle.removeEventListener('click', toggleMobileMenu);
            mobileMenuToggle.addEventListener('click', toggleMobileMenu);

            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.removeEventListener('click', closeMobileMenu);
                link.addEventListener('click', closeMobileMenu);
            });
        } else {
            
            mobileMenuToggle.style.display = 'none';
            navMenu.classList.remove('active');
            mobileMenuToggle.innerHTML = '☰';
        }
    }

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        mobileMenuToggle.innerHTML = '☰';
    }

    handleMobileMenu();

    window.addEventListener('resize', handleMobileMenu);
});

document.querySelectorAll('.no-uri-change').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
