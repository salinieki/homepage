(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var moreBtn = document.querySelector('[data-news-more]');
  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      var hidden = document.querySelectorAll('.news-list-item.is-hidden');
      for (var k = 0; k < 5 && k < hidden.length; k++) {
        hidden[k].classList.remove('is-hidden');
      }
      if (document.querySelectorAll('.news-list-item.is-hidden').length === 0) {
        moreBtn.style.display = 'none';
      }
    });
  }

  var hero = document.querySelector('.hero[data-slide-interval]');
  if (!hero) return;
  var slides = hero.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var interval = parseInt(hero.dataset.slideInterval, 10) || 6000;
  var i = 0;
  setInterval(function () {
    slides[i].classList.remove('is-active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-active');
  }, interval);
})();
