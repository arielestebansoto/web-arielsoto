class MyHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow( { mode: "open" } )

        this.linkHome = this.getAttribute('link-home')
    }
    getTemplate() {
        const template = 
        document.createElement('template')
        template.innerHTML = `
            <header>
                <div class="nav-icon">
                    <a href=${this.linkHome}>
                        "a"
                    </a>
                </div>
                <div class="nav-section">
                </div>
                <div class="nav-menu">
                    <input type="checkbox" name="hamburgermenu" id="checkbox">
                    <span>menu</span>
                    <span>close</span>
                </div>
            </header>
            ${this.getStyle()}
            `   
        return template
    }
    getStyle(){
        return `
        <style> 
            header {
                position: absolute;
                z-index: 100;
            }
        </style>
        `
    }
    toggleMenu() {
        const menu = document.querySelector('.menu')

        if (menu.style.transform == "translate(0px, 0px)") {
            menu.style.transform = "translate(0, -100%)"
        } else {
        menu.style.transform = "translate(0px, 0px)"
    } 
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
        this.checkBox = this.shadowRoot.querySelector('#checkbox')
        this.checkBox.addEventListener("click", this.toggleMenu.bind(this))
    }
    disconnectedCallback() {
        this.checkBox.removeEventListener("click", this.checkBox.bind(this))
    }
}
const myHeader = customElements.define('my-header', MyHeader)
export default myHeader