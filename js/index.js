let btn = document.querySelector(".menu-header");
let boxMenu = document.querySelector(".boxMenu");
let item = document.querySelectorAll(".boxMenu > a > div");
let a = document.querySelectorAll('.boxMenu > a > div')

//evento thouc mobile
btn.addEventListener("touch", () => {

    boxMenu.classList.toggle("actived")
    item.forEach(elem => {
        elem.classList.toggle("item")
    })
});

//evento click desck top
btn.addEventListener("click", () => {
    boxMenu.classList.toggle("actived")
    item.forEach(elem => {
        elem.classList.toggle("item")
    })
})


