export default class newNote extends HTMLElement {

    async connectedCallback() {

        await this.renderElements()

        this.dispatchEvent(new CustomEvent("note-ready", {bubbles: true}))       
    }
    
    async renderElements() {
        const response = await fetch("/src/components/notes/new-note.html")
        
        this.innerHTML = await response.text()
    }  
}