const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".header__menu");
const menuBack = document.querySelector(".menu-back");

toggle.addEventListener("click", () => {
    const isOpen = nav.hasAttribute("hidden");

    if (isOpen) {
        nav.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
    } else {
        nav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
    }
});

if (menuBack) {
    menuBack.addEventListener("click", () => {
        nav.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
    });
}

// Coloration automatique des termes du glossaire
const glossaryTerms = [
    'NASA',
    'Apollo 11',
    'Logiciel',
    'Software',
    'Bug',
    'Algorithme',
    'MIT',
    'Programmation',
    'Ingénierie logicielle',
    'Module Lunaire',
    'LEM',
    'Effet Matilda',
    'STEM',
    'Ségrégation raciale',
    'Discrimination de genre'
];

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightGlossaryTerms);
} else {
    highlightGlossaryTerms();
}

function highlightGlossaryTerms() {
    // Sélectionner tous les paragraphes (sauf ceux du glossaire lui-même)
    const paragraphs = document.querySelectorAll('p:not(.glossaire__definition)');

    paragraphs.forEach(paragraph => {
        let html = paragraph.innerHTML;

        glossaryTerms.forEach(term => {
            // Créer une regex pour matcher le terme entier (avec limites de mots)
            const regex = new RegExp(`\\b(${term})\\b`, 'gi');
            html = html.replace(regex, '<span class="glossary-highlight">$1</span>');
        });

        paragraph.innerHTML = html;
    });
}