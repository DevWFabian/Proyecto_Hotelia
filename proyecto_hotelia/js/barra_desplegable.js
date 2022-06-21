const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
const brNavSup = document.querySelector('#barra_navegacion_superior')
const pie_pag = document.querySelector('#pie_pagina')
btn.addEventListener('click',e => {
    menu.classList.toggle('menu-expanded')
    menu.classList.toggle('menu-collapsed')
    document.querySelector('body').classList.toggle('body-expanded')
    brNavSup.classList.toggle('barra_nav_collapsed')
    brNavSup.classList.toggle('barra_navegacion_superior_expanded')
    pie_pag.classList.toggle('pie_pagina_collapsed')
    pie_pag.classList.toggle('pie_pagina_expanded')
})

