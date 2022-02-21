let btn = document.querySelector(".menu-header")
let boxMenu = document.querySelector(".boxMenu")
let item = document.querySelectorAll(".boxMenu > a > div")


// btn.addEventListener("click", () => {

//     boxMenu.classList.toggle("actived")
//     item.forEach( e => {

//         e.classList.toggle("item")
        
//     })

// })

btn.addEventListener("touchp", () => {

    boxMenu.classList.toggle("actived")
    item.forEach( e => {

        e.classList.toggle("item")
        
    })

})