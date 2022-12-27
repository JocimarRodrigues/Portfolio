// Scroll Suave
const menuLinks = document.querySelectorAll('#nav-menu a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event) {
    event.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 120;
    nativeScroll(distanceFromTheTop);

}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

// Animação no nome

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 75 * i)
        console.log(i)
    })
    
}

const nome = document.querySelector('#apresentacao span');
typeWriter(nome);


