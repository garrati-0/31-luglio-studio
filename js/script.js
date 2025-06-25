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