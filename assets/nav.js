// GambleClear — header nav: mobile hamburger + click-to-open dropdown groups
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainnav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) closeAllGroups();
    });
  }

  function closeAllGroups(except) {
    document.querySelectorAll('.navgroup.open').forEach(function (g) {
      if (g === except) return;
      g.classList.remove('open');
      var btn = g.querySelector('.navgroup-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  document.querySelectorAll('.navgroup-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var group = btn.parentElement;
      var isOpen = group.classList.contains('open');
      closeAllGroups(isOpen ? null : group);
      group.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navgroup')) {
      closeAllGroups();
    }
    if (nav && toggle && !e.target.closest('.mainnav') && !e.target.closest('.nav-toggle')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllGroups();
      if (nav && toggle) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
