import {saveContent} from "./note-data.js"
import {getData} from "./note-data.js"
import {eventListerners} from "./note-script.js"

export default class newNote extends HTMLElement {

    async connectedCallback() {

        await this.renderElements()

        const data = await getData()

        console.log(data)
        
        // await getData()

        // await loadData(data) data is returned from get data

        await saveContent()
        
        await eventListerners()
        
    }
    
    async renderElements() {
        const response = await fetch("/src/components/notes/new-note.html")
        
        this.innerHTML = await response.text()
    }  
}