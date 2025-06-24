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