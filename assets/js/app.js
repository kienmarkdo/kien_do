/* Portfolio — Nav + Scroll Reveal + Project Filters */
(function () {
  'use strict';

  /* --- Nav scroll effect --- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var check = function () {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
  }

  /* --- Mobile menu toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* --- Scroll reveal --- */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* --- Project filters --- */
  var chips = document.querySelectorAll('.filter-chip');
  var cards = document.querySelectorAll('.proj-card');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('active'); });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      cards.forEach(function (card) {
        var cats = card.getAttribute('data-category').split(' ');
        card.classList.add('fade-out');
        setTimeout(function () {
          if (filter === 'all' || cats.indexOf(filter) !== -1) {
            card.classList.remove('fade-out', 'd-none');
          } else {
            card.classList.add('d-none');
          }
        }, 400);
      });
    });
  });

  /* --- Show More toggle --- */
  var moreBtn = document.querySelector('.btn-more');
  var moreContent = document.querySelector('.exp-more');
  if (moreBtn && moreContent) {
    moreBtn.addEventListener('click', function () {
      var hidden = moreContent.style.display === 'none' || moreContent.style.display === '';
      moreContent.style.display = hidden ? 'flex' : 'none';
      moreBtn.textContent = hidden ? 'Show Less' : 'Show More';
    });
  }
})();
