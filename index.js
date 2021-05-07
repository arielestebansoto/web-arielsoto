/* ----- TOGGLE MENU ----- */
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

/* ----- APPEND QUICKPORTFOLIO IMAGES ----- */
/* const quickGalery = document.querySelector('.quickgalery')
const imgDIR = './img/quickgalery/' 
const imgURL = 'quickgaleryimages-'
const imgFORMAT = '.jpg'
const displayPhotos = 23
var i;
for (i = 0; i < displayPhotos; i++) {
    //crear un div
    const div = document.createElement('div')
    //ponerle una clase
    div.classList.add('galerydiv')
    //añadir img
    const IMG = document.createElement('img')
    IMG.src = imgDIR + imgURL + (i+1) + imgFORMAT

    div.appendChild(IMG)
    quickGalery.appendChild(div)
}
/* ----- APPEND PORTFOLIO AV ----- */
/* ----- MENU SOCIAL SVG INLINE ----- */
 