let menuButton = document.querySelector('.header__menu-toggle');

menuButton.onclick = function(e) {
  if (menuButton.checked) {
      menuButton.setAttribute('aria-pressed', true);
      menuButton.setAttribute('aria-expanded', true);
  } else {
      menuButton.setAttribute('aria-pressed', false);
      menuButton.setAttribute('aria-expanded', false);
  }
}
