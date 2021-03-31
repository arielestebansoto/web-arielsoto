/* ----- TOGGLE MENU ----- */
const iconMenu = document.querySelector('.icon-menu')
const nav = document.querySelector('.nav')
iconMenu.innerHTML = `<svg height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg" id="fi_1828859"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"></path></svg>`

iconMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
}

/* ----- APPEND QUICKPORTFOLIO IMAGES ----- */
const quickGalery = document.querySelector('.quickgalery')
const imgDIR = '../arc/img/quickgalery/' 
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

/* ----- MENU SOCIAL SVG INLINE ----- */
