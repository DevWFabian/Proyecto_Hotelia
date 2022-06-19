const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
const barra_nav = document.querySelector('#barra_navegacion_superior')
btn.addEventListener('click',e => {
    menu.classList.toggle('menu-expanded')
    menu.classList.toggle('menu-collapsed')
    document.querySelector('body').classList.toggle('body-expanded')
    document.querySelector('footer').classList.toggle('pie_pagina_expanded')
    barra_nav.classList.toggle('barra_nav_collapsed')
    barra_nav.classList.toggle('barra_nav_expanded')
})

