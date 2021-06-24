import toggleModal  from "./toggleModal.js"
const card = document.querySelectorAll('.card')

card.forEach(element => {
    element.addEventListener('click', Modal)
})
async function fetchData() {
    const URL_DATA = '/data/dataProjects.json'
    const response = await fetch(URL_DATA)
    const data = await response.json()
    return data
}
function getAttribute(element) {
    element.stopPropagation()
    const target = element.currentTarget
    const attribute = target.getAttribute('data-id')
    return attribute
}
async function Modal(element) {
    let result
    const projectId = getAttribute(element)
    const data = await fetchData()
    await data.forEach( project => {
        if (project.id === projectId) {
            return result = project
        } 
    })
    if (!result) {
        throw Error
    }
    toggleModal(result)
}
export default Modal