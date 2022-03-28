let show = true
const conteinerToggle = document.querySelector('.conteiner-toggle')
const btn = conteinerToggle.querySelector('button')
const links = conteinerToggle.querySelectorAll('.menu > a')

btn.addEventListener('touchstart', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'
    conteinerToggle.classList.toggle('on', show)
    show = !show

    links.forEach(element => {

        element.addEventListener('touchstart', () => {

            document.body.style.overflow = 'initial'
            show = !show
            conteinerToggle.classList.toggle('on', show)

        })

    });

})

// 
// animacoes com rolagem de tela
// 

// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
const textBlock = document.querySelector('.anime');
const anime = 'on'

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
            textBlock.classList.add(anime)
        } else {
            element.classList.remove(animationClass);
            textBlock.classList.remove(anime)
        }
    })
}

animeScroll();

if (target.length) {
    window.addEventListener('scroll', debounce(function () {
        animeScroll();
    }, 200));
}


const btnIcon = document.querySelector('.icon-theme')
const sol = document.querySelector('.icon-theme > .sol')
const lua = document.querySelector('.icon-theme > .lua')
const body = document.querySelector('body')
const iconDark = document.querySelector('.dark')
let showw = false

btnIcon.addEventListener('click', ()=>{

    body.classList.toggle('dark', showw)
    showw = !showw
    lua.classList.toggle('on')
    sol.classList.toggle('off')



})



