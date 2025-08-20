document.addEventListener('DOMContentLoaded', function () {
    // Navbar shrink function
    const navbar = document.querySelector('#mainNavbar');
    if (navbar) {
        const navbarShrink = () => {
            if (window.scrollY === 0) {
                navbar.classList.remove('navbar-shrink');
            } else {
                navbar.classList.add('navbar-shrink');
            }
        };

        // Shrink the navbar on scroll
        window.addEventListener('scroll', navbarShrink);

        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNavbar');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNavbar',
                offset: 74, // Adjust this value based on navbar height
            });
        }
    }

    // Add a custom style for the shrunken navbar using JavaScript
    const style = document.createElement('style');
    style.innerHTML = `
        .navbar-shrink {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            background-color: rgba(255, 255, 255, 0.95) !important;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
    `;
    document.head.appendChild(style);
});