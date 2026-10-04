import {noteFunctionality} from "./note-script"
import {addTopic} from "./note-script"

export default class newNote extends HTMLElement {

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("/src/components/notes/new-note.html")
        
        this.innerHTML = await response.text()
        
        this.querySelector('.notes').addEventListener('click', (e) => {noteFunctionality(e)})

        this.querySelector('.add-topic-btn').addEventListener('click', (e) => {addTopic(e)})

        // Prevent link breaks in topic title
        const editableDiv = document.querySelectorAll('.no-break');
        
        for (let i = 0; i < editableDiv.length; i++) {
            
            editableDiv[i].addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
            e.preventDefault(); // Stop line break
            }
        });
        }
        
    }
    
} 
