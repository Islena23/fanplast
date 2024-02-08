const plasticmain = document.querySelector('.plasticmain');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(plasticmain)


plasticmain.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != plasticmain  ){

        menu.classList.toggle("spread")

    }
        
})