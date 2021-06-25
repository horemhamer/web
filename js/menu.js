const btnMenu = document.querySelector('.hamburger');
const menuNav = document.querySelector('.menu-navegacion');
console.log(menuNav);
console.log(btnMenu);

btnMenu.addEventListener('click',()=>{
   menuNav.classList.toggle("spread");
})


window.addEventListener('click', e=>{
    if(menuNav.classList.contains('spread') && e.target!=menuNav && e.target!=btnMenu){
        menuNav.classList.toggle("spread");
    }
})