// Main JavaScript File

document.addEventListener('DOMContentLoaded', (event) => {
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add fade-in effect to main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 100);
});