document.addEventListener('DOMContentLoaded', function() {

    // --- SMOOTH SCROLL PER I LINK DELLA NAVIGAZIONE ---
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- ANIMAZIONE DEGLI ELEMENTI ALLO SCROLL ---
    const scrollSections = document.querySelectorAll('.scroll-section');
    
    // Animazione per l'hero section all'inizio
    const heroContent = document.querySelectorAll('.fade-in');
    heroContent.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200 + 300); // Ritardo graduale per un effetto più bello
    });

    const observerOptions = {
        root: null, // usa il viewport
        rootMargin: '0px',
        threshold: 0.1 // L'elemento deve essere visibile almeno al 10%
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opzionale: smetti di osservare l'elemento una volta che è visibile
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    scrollSections.forEach(section => {
        observer.observe(section);
    });

});