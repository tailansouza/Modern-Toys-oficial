let abrirMenu = document.getElementById('abrirMenu');
let menuMobile = document.getElementById('menu-mobile');
let fecharMenu = document.getElementById('fecharMenu');
let overlay = document.querySelector('.overlay-menu');




abrirMenu.addEventListener('click',()=>{
    menuMobile.classList.add('menu-visivel')
    overlay.style.display = 'block'
   

})
fecharMenu.addEventListener('click',()=>{
    menuMobile.classList.remove('menu-visivel')
    overlay.style.display = 'none'
    
})


