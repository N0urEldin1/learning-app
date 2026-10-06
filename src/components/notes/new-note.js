import {saveContent} from "./note-data.js"
import {getData} from "./note-data.js"
import {loadData} from "./note-data.js"
import {eventListerners} from "./note-script.js"

export default class newNote extends HTMLElement {

    async connectedCallback() {

        await this.renderElements()

        const data = await getData()
        
        await loadData(data)

        await saveContent()
        
        await eventListerners()
        
    }
    
    async renderElements() {
        const response = await fetch("/src/components/notes/new-note.html")
        
        this.innerHTML = await response.text()
    }  
}