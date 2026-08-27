// GambleClear — header nav: hamburger toggle + dropdown groups (mouse, touch, keyboard)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainnav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) {
        nav.querySelectorAll('.navgroup.open').forEach(function (g) {
          g.classList.remove('open');
        });
      }
    });
  }

  document.querySelectorAll('.navgroup-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var group = btn.parentElement;
      var isOpen = group.classList.contains('open');
      document.querySelectorAll('.navgroup.open').forEach(function (g) {
        if (g !== group) g.classList.remove('open');
      });
      group.classList.toggle('open', !isOpen);
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navgroup')) {
      document.querySelectorAll('.navgroup.open').forEach(function (g) {
        g.classList.remove('open');
      });
    }
    if (nav && toggle && !e.target.closest('.mainnav') && !e.target.closest('.nav-toggle')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.navgroup.open').forEach(function (g) {
        g.classList.remove('open');
      });
      if (nav && toggle) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
