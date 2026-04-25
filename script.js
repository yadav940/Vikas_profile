/* ============================================
   VIKAS YADAV PORTFOLIO – INTERACTIVE SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    /* ---- Mobile Nav ---- */
    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.getElementById('navMenu');
    const navLinks  = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') navMenu.classList.remove('active');
    });

    /* ---- Smooth scroll ---- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 68, behavior: 'smooth' });
            }
        });
    });

    /* ---- Active nav on scroll ---- */
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section[id]').forEach(sec => {
            if (window.pageYOffset >= sec.offsetTop - 160) current = sec.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });

        // navbar shadow on scroll
        const navbar = document.querySelector('.navbar');
        navbar.style.boxShadow = window.pageYOffset > 50
            ? '0 4px 24px rgba(0,0,0,0.25)'
            : '0 2px 16px rgba(0,0,0,0.18)';
    });

    /* ---- Scroll-reveal animations ---- */
    const animatable = [
        '.skill-card', '.project-card', '.education-card',
        '.certification-item', '.contact-card', '.timeline-item',
        '.gallery-item', '.info-item'
    ];
    animatable.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.classList.add('animate-on-scroll'));
    });

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

    /* ---- Stat counters ---- */
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-value'), 10);
            let count = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                count = Math.min(count + step, target);
                el.textContent = count;
                if (count >= target) clearInterval(timer);
            }, 30);
            counterObserver.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-value]').forEach(el => counterObserver.observe(el));

    /* ---- Gallery Tabs ---- */
    const tabs   = document.querySelectorAll('.gallery-tab');
    const panels = document.querySelectorAll('.gallery-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const panel = document.getElementById('tab-' + target);
            if (panel) panel.classList.add('active');

            // re-trigger reveal for newly shown items
            panel && panel.querySelectorAll('.gallery-item').forEach((el, i) => {
                el.classList.remove('visible');
                setTimeout(() => el.classList.add('visible'), i * 60 + 50);
            });
        });
    });

    /* ---- Lightbox ---- */
    const lightbox       = document.getElementById('lightbox');
    const lightboxImg    = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const btnClose       = document.getElementById('lightboxClose');
    const btnPrev        = document.getElementById('lightboxPrev');
    const btnNext        = document.getElementById('lightboxNext');

    let currentItems = [];
    let currentIndex = 0;

    function openLightbox(items, index) {
        currentItems = items;
        currentIndex = index;
        showLightboxSlide();
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    function showLightboxSlide() {
        const item = currentItems[currentIndex];
        lightboxImg.src    = item.getAttribute('data-src');
        lightboxImg.alt    = item.querySelector('img').getAttribute('alt') || '';
        lightboxCaption.textContent = item.getAttribute('data-caption') || '';

        btnPrev.style.display = currentItems.length > 1 ? 'flex' : 'none';
        btnNext.style.display = currentItems.length > 1 ? 'flex' : 'none';
    }

    document.querySelectorAll('.gallery-panel').forEach(panel => {
        panel.addEventListener('click', e => {
            const item = e.target.closest('.gallery-item');
            if (!item) return;
            const items = Array.from(panel.querySelectorAll('.gallery-item'));
            openLightbox(items, items.indexOf(item));
        });
    });

    btnClose.addEventListener('click', closeLightbox);

    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
        showLightboxSlide();
    });

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentItems.length;
        showLightboxSlide();
    });

    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape')      closeLightbox();
        if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length; showLightboxSlide(); }
        if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentItems.length; showLightboxSlide(); }
    });

    /* ---- CV download log ---- */
    document.querySelectorAll('[href$=".pdf"]').forEach(link => {
        link.addEventListener('click', () => console.log('CV download initiated'));
    });

});
