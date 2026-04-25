/* ==============================================
   VIKAS YADAV PORTFOLIO — SCRIPTS
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── MOBILE NAV ── */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  navToggle?.addEventListener('click', () => navMenu.classList.toggle('active'));

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.navbar')) navMenu.classList.remove('active');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') navMenu.classList.remove('active');
  });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
    });
  });

  /* ── NAVBAR SCROLL EFFECTS ── */
  const navbar = document.getElementById('navbar');

  const onScroll = () => {
    const y = window.pageYOffset;

    // shadow on scroll
    navbar.classList.toggle('scrolled', y > 40);

    // active nav link
    let current = '';
    document.querySelectorAll('section[id]').forEach(sec => {
      if (y >= sec.offsetTop - 120) current = sec.id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === '#' + current);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── SCROLL REVEAL ── */
  const revealTargets = [
    '.sk-card', '.proj-card', '.edu-card', '.cert-card',
    '.ct-card', '.tl-item', '.story-card', '.meta-item'
  ];

  revealTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('reveal'));
  });

  const revealObs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 70);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── STAT COUNTERS ── */
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.val, 10);
      let count    = 0;
      const step   = Math.ceil(target / 40);
      const timer  = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count;
        if (count >= target) clearInterval(timer);
      }, 30);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-val]').forEach(el => counterObs.observe(el));

  /* ── LIGHTBOX ── */
  const overlay    = document.getElementById('lbOverlay');
  const lbImg      = document.getElementById('lbImg');
  const lbCaption  = document.getElementById('lbCaption');
  const btnClose   = document.getElementById('lbClose');
  const btnPrev    = document.getElementById('lbPrev');
  const btnNext    = document.getElementById('lbNext');

  let pool  = [];   // all .story-card in current chapter
  let index = 0;

  function openLb(cards, idx) {
    pool  = cards;
    index = idx;
    showSlide();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  function showSlide() {
    const card  = pool[index];
    const img   = card.querySelector('.sc-img img');
    lbImg.src         = img.src;
    lbImg.alt         = img.alt;
    lbCaption.textContent = card.querySelector('.sc-body h4')?.textContent || '';

    btnPrev.style.display = pool.length > 1 ? 'flex' : 'none';
    btnNext.style.display = pool.length > 1 ? 'flex' : 'none';
  }

  // Click on story card → open lightbox with all siblings
  document.querySelectorAll('.journey-chapter').forEach(chapter => {
    const cards = Array.from(chapter.querySelectorAll('.story-card'));
    cards.forEach((card, i) => {
      card.addEventListener('click', () => openLb(cards, i));
    });
  });

  btnClose.addEventListener('click', closeLb);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLb(); });

  btnPrev.addEventListener('click', () => { index = (index - 1 + pool.length) % pool.length; showSlide(); });
  btnNext.addEventListener('click', () => { index = (index + 1) % pool.length; showSlide(); });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowLeft')  { index = (index - 1 + pool.length) % pool.length; showSlide(); }
    if (e.key === 'ArrowRight') { index = (index + 1) % pool.length; showSlide(); }
  });

  /* ── CV DOWNLOAD LOG ── */
  document.querySelectorAll('[href$=".pdf"]').forEach(a =>
    a.addEventListener('click', () => console.log('CV download'))
  );

});
