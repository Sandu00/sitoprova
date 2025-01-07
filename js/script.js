document.addEventListener('DOMContentLoaded', () => {
    console.log("Sito di prova caricato correttamente!");

    // Funzionalità per i link di navigazione
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetUrl = link.getAttribute('href');
            window.location.href = targetUrl;
        });
    });

    // Funzionalità per la barra di ricerca
    const searchBar = document.querySelector('.search-bar input');
    const sections = document.querySelectorAll('main section');

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        sections.forEach(section => {
            const content = section.textContent.toLowerCase();
            section.style.display = content.includes(query) ? 'block' : 'none';
        });
    });

    // Funzionalità per la navbar mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    const toggleNavbar = () => {
        navbar.classList.toggle('active');
    };

    menuToggle.addEventListener('click', toggleNavbar);
    menuToggle.addEventListener('touchstart', toggleNavbar); // Add touchstart event listener
});