const modal = document.querySelector('#modal')
function renderModal(project) {
    modal.innerHTML = `
    <div class="close">
        <span id="close-modal" class="btn">close</span>
    </div>
    <h3>${project.title}</h3>
    <div class="modal-image-container">
        <img src=${project.screenshoots[0]} alt="screenshoots aps"/>
    </div>
    <div class="modal-text-container">
        <p>${project.description}</p>
        <a href=${project.link} class="btn">To the web Page</a>
        <a href=${project.github} class="btn">Git Hub repository</a>
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