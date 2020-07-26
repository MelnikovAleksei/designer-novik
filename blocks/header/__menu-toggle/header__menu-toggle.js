let menuButton = document.querySelector('.header__menu-toggle');

menuButton.onclick = function(e) {
    if (menuButton.checked) {
        menuButton.setAttribute('aria-pressed', true);
    } else {
        menuButton.setAttribute('aria-pressed', false);
    }
}
