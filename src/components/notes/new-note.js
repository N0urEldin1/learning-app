import {noteFunctionality} from "./note-script"
import {addTopic} from "./note-script"

import {getDB} from "../../js/indexedDB"

export default class newNote extends HTMLElement {

    async connectedCallback() {
        const url = window.location.pathname
        const videoId = url.split('/')[2]

        await this.getData(videoId);

    }

    async render() {
        const response = await fetch("/src/components/notes/new-note.html")
        
        this.innerHTML = await response.text()

        await this.functions()
    }

    async getData(videoId) {
        const db = await getDB()
        console.log(db)

        const transaction = db.transaction("notes", "readwrite")
        const store = transaction.objectStore("notes")
        
        store.put({ note_id: videoId })
        
        const request = store.get(videoId)

        console.log(request)
        
        request.onsuccess = () => {
            const note = request.result
            
            if(!note) {
                console.log("Note not found")
                return;
            } else {
                
                console.log("Success")
                this.render() // this should be after the getData function is done
            }

            console.log(request.result)
        }
    }

    async functions() {
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

// Database things
// get the url using window.location.href then split the result to get the id part
// create and call a loadData function and pass the id to it
// in the leadData function, import the dbPromise, create a transaction,
// create a store by calling the objectstore, request the data by getting it using store.get(id), 
// if the requset is onsucces create a noteData const using the result