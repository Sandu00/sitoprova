document.addEventListener('DOMContentLoaded', () => {
    console.log("Sito di prova caricato correttamente!");

    // Funzionalità per i link di navigazione
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
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
});
