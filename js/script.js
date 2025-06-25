 $(document).ready(function() {
            $('.button-container').click(function() {
                $(this).toggleClass('active');
                $('.overlay').toggleClass('open');
            });

            function handleScroll() {
                var header = $('.desk-nav');
                var scrollPosition = $(window).scrollTop();
                if (scrollPosition > 50) { header.addClass('scrolled'); } 
                else { header.removeClass('scrolled'); }
            }
            $(window).on('scroll', handleScroll);
            handleScroll();
        });
        
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 15, speed: 400, glare: true, "max-glare": 0.1,
        });

        /* --- SCRIPT PER PLAYER AUDIO --- */
        document.addEventListener('DOMContentLoaded', () => {
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                const audio = card.querySelector('.audio-source');
                const playPauseBtn = card.querySelector('.play-pause-btn');
                const playIcon = card.querySelector('.play-icon');
                const pauseIcon = card.querySelector('.pause-icon');
                const progressBarContainer = card.querySelector('.progress-bar-container');
                const progressBar = card.querySelector('.progress-bar');

                playPauseBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isPlaying = card.classList.contains('playing');
                    
                    if (isPlaying) {
                        audio.pause();
                    } else {
                        document.querySelectorAll('.audio-source').forEach(otherAudio => {
                            if (otherAudio !== audio) {
                                otherAudio.pause();
                            }
                        });
                        audio.play();
                    }
                });

                audio.addEventListener('play', () => {
                    projectCards.forEach(otherCard => {
                        if (otherCard !== card) {
                           otherCard.classList.remove('playing');
                        }
                    });
                    card.classList.add('playing');
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                });

                audio.addEventListener('pause', () => {
                    card.classList.remove('playing');
                    playIcon.style.display = 'block';
                    pauseIcon.style.display = 'none';
                });

                audio.addEventListener('timeupdate', () => {
                    const { currentTime, duration } = audio;
                    if (duration) {
                        const progressPercent = (currentTime / duration) * 100;
                        progressBar.style.width = `${progressPercent}%`;
                    }
                });
                
                 audio.addEventListener('ended', () => {
                    card.classList.remove('playing');
                    progressBar.style.width = `0%`;
                 });

                progressBarContainer.addEventListener('click', function(e) {
                    const width = this.clientWidth;
                    const clickX = e.offsetX;
                    const duration = audio.duration;
                    if (duration) {
                        audio.currentTime = (clickX / width) * duration;
                    }
                });
            });
        });
        
    // Funzione per il countdown
    (function () {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;

        // Imposta la data di destinazione (Anno, Mese (0-11), Giorno, Ora, Minuto, Secondo)
        const targetDate = new Date(2025, 6, 5, 19, 0, 0).getTime();

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.innerHTML = "<h3 style='color: var(--text-color); font-family: var(--font-display);'>RILASCIATO!</h3>";
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.innerText = days.toString().padStart(2, '0');
            hoursEl.innerText = hours.toString().padStart(2, '0');
            minutesEl.innerText = minutes.toString().padStart(2, '0');
            secondsEl.innerText = seconds.toString().padStart(2, '0');
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Chiamata iniziale per non aspettare 1 secondo
    })();
