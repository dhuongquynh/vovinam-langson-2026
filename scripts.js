/* ============================================================
   VOVINAM LẠNG SƠN — Landing v2 (Editorial Magazine)
   Motion + interactions, no dependencies.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* ---------- Counter animation (stats) ---------- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const duration = 1400;
        const start = performance.now();
        const easeOut = (t) => 1 - Math.pow(1 - t, 3);
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const val = Math.floor(target * easeOut(p));
          el.textContent = prefix + val.toLocaleString('vi-VN') + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else {
            el.classList.add('pop');
            setTimeout(() => el.classList.remove('pop'), 400);
          }
        }
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Magnetic hover on .magnetic ---------- */
  document.querySelectorAll('.magnetic').forEach((el) => {
    el.addEventListener('mousemove', (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left - r.width / 2) / 8;
      const y = (ev.clientY - r.top - r.height / 2) / 8;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* ---------- Apply saved object-positions from image-positions.json ---------- */
  fetch('image-positions.json').then((r) => r.ok ? r.json() : {}).then((positions) => {
    if (!positions || Object.keys(positions).length === 0) return;
    document.querySelectorAll('img.slot').forEach((img) => {
      const src = img.getAttribute('src') || '';
      // Extract slot name from filename: e.g. "img/hero-vo-sinh-da.jpg" -> "hero-vo-sinh-da"
      const m = src.match(/img\/([^.?]+)/);
      if (!m) return;
      const slot = m[1];
      if (positions[slot]) img.style.objectPosition = positions[slot];
    });
  }).catch(() => { /* ignore */ });

  /* ---------- Image slot fallback: show label when src missing ---------- */
  document.querySelectorAll('img.slot').forEach((img) => {
    function showFallback() {
      const parent = img.parentElement;
      if (!parent) return;
      if (parent.querySelector('.ph-fallback')) return;
      const fb = document.createElement('div');
      fb.className = 'ph ph-fallback';
      fb.style.cssText = 'position:absolute;inset:0;border-radius:inherit;';
      const label = img.dataset.label || img.alt || 'Ảnh';
      fb.innerHTML = '<span class="ph-label">' + label + '</span>';
      if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
      parent.appendChild(fb);
      img.style.visibility = 'hidden';
    }
    img.addEventListener('error', showFallback);
    if (!img.getAttribute('src') || img.getAttribute('src').includes('placeholder')) {
      img.addEventListener('load', () => {
        if (img.naturalWidth < 10) showFallback();
      });
    }
    if (img.complete && img.naturalWidth === 0) showFallback();
  });

  /* ---------- Lead form thanks state ---------- */
  document.querySelectorAll('.lead-card form').forEach((form) => {
    form.addEventListener('submit', () => {
      const card = form.closest('.lead-card');
      if (card) setTimeout(() => card.classList.add('sent'), 250);
    });
  });

  /* ---------- Parallax for hero photos (subtle) ---------- */
  const heroPhotos = document.querySelector('.hero-photos');
  if (heroPhotos && window.matchMedia('(prefers-reduced-motion: no-preference)').matches && window.innerWidth > 920) {
    const main = heroPhotos.querySelector('.ph-main');
    const side = heroPhotos.querySelector('.ph-side');
    const tiny = heroPhotos.querySelector('.ph-tiny');
    heroPhotos.addEventListener('mousemove', (e) => {
      const r = heroPhotos.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      if (main) main.style.transform = `rotate(2deg) translate(${x * -10}px, ${y * -10}px)`;
      if (side) side.style.transform = `rotate(-5deg) translate(${x * 14}px, ${y * 14}px)`;
      if (tiny) tiny.style.transform = `translate(${x * -18}px, ${y * -18}px)`;
    });
    heroPhotos.addEventListener('mouseleave', () => {
      if (main) main.style.transform = '';
      if (side) side.style.transform = '';
      if (tiny) tiny.style.transform = '';
    });
  }

  /* ---------- Carousel with nav arrows + dots ---------- */
  document.querySelectorAll('.carousel').forEach((root) => {
    const track = root.querySelector('.carousel-track');
    const slides = track ? track.querySelectorAll('.carousel-slide') : [];
    const prevBtn = root.querySelector('.carousel-btn.prev');
    const nextBtn = root.querySelector('.carousel-btn.next');
    const dotsWrap = root.querySelector('.carousel-dots');
    if (!track || !slides.length) return;

    function getStep() {
      const first = slides[0];
      const gap = parseFloat(getComputedStyle(track).columnGap || '14') || 14;
      return first.getBoundingClientRect().width + gap;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => track.scrollBy({ left: -getStep(), behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () => track.scrollBy({ left: getStep(), behavior: 'smooth' }));

    if (dotsWrap) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Ảnh ' + (i + 1));
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => track.scrollTo({ left: i * getStep(), behavior: 'smooth' }));
        dotsWrap.appendChild(dot);
      });
      track.addEventListener('scroll', () => {
        const idx = Math.round(track.scrollLeft / getStep());
        dotsWrap.querySelectorAll('button').forEach((b, i) => b.classList.toggle('active', i === idx));
      }, { passive: true });
    }
  });

  /* ---------- Mobile nav hamburger toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('menu-open');
    });
    nav.querySelectorAll('.links a').forEach((a) => {
      a.addEventListener('click', () => nav.classList.remove('menu-open'));
    });
  }

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
