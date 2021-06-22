const container = document.querySelector('#project-continer')

async function fetchData() {
    const URL_DATA = '/data/dataProject.json'
    const response = await fetch(URL_DATA)
    const data = await response.json()
    return data
}

async function makeCard() {
    const data = await fetchData()
    
    data.forEach(card => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class="card-project"> 
            <img src=${card.thumbnail} alt="project thumbnail" />
            <div class="card--info">
                <a href=${card.link}>${card.title}</a>
            </div>
        </div>
        `
    })

}