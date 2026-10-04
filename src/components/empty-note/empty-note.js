import {formValidation} from "./empty-note-script"
import {preventEnterSubmition} from "./empty-note-script"

export default class emptyNote extends HTMLElement {

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("/src/components/empty-note/empty-note.html")
        
        this.innerHTML = await response.text()

        this.querySelector('#formBtn').addEventListener('click' , (e) => {formValidation(e)})
        
        this.querySelector('.empty-note-frame__input-frame').addEventListener('keydown', (e) => {preventEnterSubmition(e)})
    }

}