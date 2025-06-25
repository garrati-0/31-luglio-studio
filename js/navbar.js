        $(document).ready(function() {
            // Toggle mobile menu
            $('.button-container').click(function() {
                $(this).toggleClass('active');
                $('.overlay').toggleClass('open');
            });

            // Add scrolled class to navbar on scroll
            function handleScroll() {
                var header = $('.desk-nav');
                var scrollPosition = $(window).scrollTop();

                // Add 'scrolled' class if scrolled more than 50px or on specific pages
                // You can customize the scroll distance as needed.
                if (scrollPosition > 50) {
                    header.addClass('scrolled');
                } else {
                    header.removeClass('scrolled');
                }
            }

            // Initial check and on scroll event
            $(window).on('scroll', handleScroll);
            handleScroll();
        });

// --- IMPOSTAZIONE INIZIALE ---
// Selezioniamo TUTTI gli elementi necessari UNA SOLA VOLTA
const menu = document.getElementById('overlay');
const rootHtmlElement = document.documentElement;

// Elementi Desktop
const themeToggleButton = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');

// Elementi Mobile
const themeToggleButtonMobile = document.getElementById('theme-toggle-btn-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');

// Definiamo le proprietà delle icone UNA SOLA VOLTA
const lightThemeIcon = {
    src: "https://img.icons8.com/sf-regular-filled/48/bright-moon.png",
    alt: "Icona della luna per attivare il tema scuro",
    width: "20",
    height: "20"
};

const darkThemeIcon = {
    src: "https://img.icons8.com/ios-filled/30/FFFFFF/sun--v1.png",
    alt: "Icona del sole per attivare il tema chiaro",
    width: "20",
    height: "20"
};

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. SELEZIONE DEGLI ELEMENTI ---
    // Selezioniamo tutti gli elementi necessari dal DOM una sola volta.
    const rootHtmlElement = document.documentElement;

    // Elementi della navigazione Desktop
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');

    // Elementi della navigazione Mobile
    const themeToggleButtonMobile = document.getElementById('theme-toggle-btn-mobile');
    const themeIconMobile = document.getElementById('theme-icon-mobile');


    // --- 2. DATI E CONFIGURAZIONE ---
    // Definiamo i dati per le icone in un unico posto per una facile manutenzione.
    const lightThemeIconData = {
        src: "https://img.icons8.com/sf-regular-filled/48/bright-moon.png",
        alt: "Icona della luna per attivare il tema scuro",
        width: "20",
        height: "20"
    };

    const darkThemeIconData = {
        src: "https://img.icons8.com/ios-filled/30/FFFFFF/sun--v1.png",
        alt: "Icona del sole per attivare il tema chiaro",
        width: "20",
        height: "20"
    };


    // --- 3. FUNZIONI ---
    /**
     * Aggiorna una singola icona con i nuovi dati.
     * @param {HTMLImageElement} iconElement - L'elemento <img> da aggiornare.
     * @param {object} iconData - L'oggetto con i dati (src, alt, width, height).
     */
    function updateIcon(iconElement, iconData) {
        // Controlliamo che l'elemento esista prima di provare a modificarlo
        if (iconElement) {
            iconElement.src = iconData.src;
            iconElement.alt = iconData.alt;
            iconElement.width = iconData.width;
            iconElement.height = iconData.height;
        }
    }

    /**
     * Funzione principale che gestisce il cambio di tema.
     */
    function toggleTheme() {
        // Aggiunge o rimuove la classe '.light-theme' dall'elemento <html>
        rootHtmlElement.classList.toggle('light-theme');

        // Controlla qual è il nuovo stato del tema
        const isLightTheme = rootHtmlElement.classList.contains('light-theme');

        // Seleziona il set di dati corretto per l'icona in base al tema
        const newIconData = isLightTheme ? lightThemeIconData : darkThemeIconData;

        // Aggiorna entrambe le icone (desktop e mobile) con i nuovi dati
        updateIcon(themeIcon, newIconData);
        updateIcon(themeIconMobile, newIconData);
        
        // NOTA: Nessun codice qui per cambiare i colori!
        // Il CSS gestisce tutti i cambiamenti di stile basandosi
        // sulla presenza della classe '.light-theme'.
    }


    // --- 4. EVENT LISTENERS ---
    // Colleghiamo la nostra funzione 'toggleTheme' agli eventi di click.
    // Controlliamo che i pulsanti esistano prima di aggiungere l'evento.
    
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleButtonMobile) {
        themeToggleButtonMobile.addEventListener('click', toggleTheme);
    }
    
});;