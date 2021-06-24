const modal = document.querySelector('#modal')
function renderModal(project) {
    modal.innerHTML = `
    <div class="close">
        <span id="close-modal">close</span>
    </div>
    <h1>${project.title}</h1>
    <div class="modal-image-container">
        <img src=${project.screenshoots[0]} alt="screenshoots aps"/>
    </div>
    <div class="modal-image-container">
        <p>${project.description}</p>
        <a href=${project.link}>To the web Page</a>
        <a href=${project.github}>Git Hub repository</a>

        </div>
        `
    }
    
    function closeModal() {
        modal.style.display = "none"
    }
    
async function toggleModal(project) {
    modal.style.display = "flex"
    await renderModal(project)

    const close =  await document.querySelector('#close-modal')
    await close.addEventListener('click', closeModal)
    }
export default toggleModal