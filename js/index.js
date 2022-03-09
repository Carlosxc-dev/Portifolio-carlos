let show = true
const conteinerToggle = document.querySelector('.conteiner-toggle')
const btn = conteinerToggle.querySelector('button')
const links = conteinerToggle.querySelectorAll('.menu > a')

btn.addEventListener('touchstart', ()=> {

    document.body.style.overflow = show ? 'hidden':'initial'
    conteinerToggle.classList.toggle('on', show)
    show = !show

})


links.forEach(element => {

    element.addEventListener('touchstart', ()=>{

        conteinerToggle.classList.remove('on')
        document.body.style.overflow ='initial'

    })
    
});
