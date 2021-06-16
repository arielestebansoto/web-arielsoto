const card = document.querySelectorAll('.card')
card.forEach(element => {
    element.addEventListener('click', toggleModal)
})
function toggleModal(element) {
    element.stopPropagation()
    let target = element.currentTarget
    let modal = target.childNodes[1]
    modal.style.display = "flex"
    // let target = element.currentTarget
    // let modal = target.childNode
    // console.log(modal)
}
export default toggleModal