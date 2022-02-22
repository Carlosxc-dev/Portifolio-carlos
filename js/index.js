let btn = document.querySelector(".menu-header");
let boxMenu = document.querySelector(".boxMenu");
let item = document.querySelectorAll(".boxMenu > a > div");
let eventos = "touchstart click mauseover"



function multiplosEventos(e){
    
    e.split(' ').forEach(event => {
        
        btn.addEventListener(event, () => {

            boxMenu.classList.toggle("actived")

            item.forEach(elem => {

                elem.classList.toggle("item")
            })
        });
    })
}

multiplosEventos(eventos);
