/**
 * Scroll Reveal — Intersection Observer
 * Adds 'visible' class when elements scroll into view.
 */
(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 });

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    targets.forEach(function (el) { observer.observe(el); });
  });
})();