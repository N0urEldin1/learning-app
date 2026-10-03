export default class navigationBar extends HTMLElement {

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("/src/components/nav-bar/nav-bar.html")
        
        this.innerHTML = await response.text()
        
    }

}