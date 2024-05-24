var lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Downscroll code here
            } else {
                // Upscroll code here
                document.querySelectorAll('.carding').forEach(card => {
                    card.style.transition = 'transform 0.3s ease';
                    card.style.transform = 'translateX(20px)';
                });
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, false);