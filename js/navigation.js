$(document).ready(function() {
    // Toggle per il menu mobile
    $('.button-container').click(function() {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('open');
    });

    // Aggiunge la classe 'scrolled' alla navbar desktop durante lo scroll
    function handleScroll() {
        var header = $('.desk-nav');
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > 50) {
            header.addClass('scrolled');
        } else {
            header.removeClass('scrolled');
        }
    }

    $(window).on('scroll', handleScroll);
    handleScroll(); // Controlla lo stato al caricamento della pagina
});