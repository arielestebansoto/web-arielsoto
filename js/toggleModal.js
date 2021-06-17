const card = document.querySelectorAll('.card')
const close = document.querySelectorAll('#modal-close')

card.forEach(element => {
    element.addEventListener('click', toggleModal)
})
function toggleModal(element) {
    element.stopPropagation()
    let target = element.currentTarget
    let modal = target.childNodes[1]
    modal.style.display = "flex"
}

close.forEach( element => {
    element.addEventListener('click', closeModal)
    }
)
function closeModal(element) {
    element.stopPropagation()
    let target = element.currentTarget
    let modal = target.parentNode.parentNode
    modal.style.display = "none"
}
    
export { toggleModal, closeModal }