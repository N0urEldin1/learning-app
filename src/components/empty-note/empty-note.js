export default class emptyNote extends HTMLElement {

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("/src/components/empty-note/empty-note.html")
        
        this.innerHTML = await response.text()
        
    }

}