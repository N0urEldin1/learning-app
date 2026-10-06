import {getDB} from "../../js/indexedDB"

const db = await getDB()

export async function saveContent() {
    
    const transaction = db.transaction("notes", "readwrite")
    const store = transaction.objectStore("notes")

    const url = window.location.pathname
    const videoId = url.split('/')[2]
    
    store.put({ note_id: videoId })

    // save topics in order
    const notesContainer = document.querySelector('.notes')
    const notes = notesContainer.children
    
    for (let i = 0; i < notes.length; i++) {
        const title = notes[0].querySelector(".topic-title__title")
        const text = title.innerText
        
        store.put({note_id: videoId, orders: 1, topic_content: text})
    }   

    const request = store.get(videoId)

    request.onsuccess = () => {
        const note = request.result
        console.log(note) 
    }
}