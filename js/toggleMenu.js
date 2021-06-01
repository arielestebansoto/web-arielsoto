const checkbox = document.querySelector('#checkbox')
const menu = document.querySelector('.menu')

checkbox.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (menu.style.transform == "translate(0px, 0px)") {
        menu.style.transform = "translate(0, -100%)"
    } else {
    menu.style.transform = "translate(0px, 0px)"
    }
}

export default toggleMenu