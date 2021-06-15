const card = document.querySelector('.card-project')
const modal = document.querySelector('.modal')
card.addEventListener('click', toggleModal)

function toggleModal() {
    console.log(`funcara?`)
    modal.style.display = 'block'
}
export default toggleModal