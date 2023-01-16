// burger
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuClose = document.querySelector('.header-nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    })
}());