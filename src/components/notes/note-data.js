import {getDB} from "../../js/indexedDB"

const db = await getDB()

const url = window.location.pathname
const videoId = url.split('/')[2]

export async function saveContent() {
    
    const transaction = db.transaction("notes", "readwrite")
    const store = transaction.objectStore("notes")

    // save topics in order
    const notesContainer = document.querySelector('.notes')
    const notes = notesContainer.children
    
    for (let i = 0; i < notes.length; i++) {
        const title = notes[0].querySelector(".topic-title__title")
        const titleText = title.innerText

        const content = notes[0].querySelector(".note__text")
        const contentText = content.innerHTML

        store.put({note_id: videoId, orders: 1, topic_title: titleText, topic_conetnt: contentText})
    }   

    const request = store.get(videoId)

    request.onsuccess = () => {
        const note = request.result
    }
}

export async function getData() {
    
    const transaction = db.transaction("notes", "readwrite")
    const store = transaction.objectStore("notes")

    const request = store.get(videoId)


    return new Promise((resolve, reject) => {
        request.onsuccess = () => {
            resolve(request.result)
        }

        request.onerror = () => {
            reject(request.error)
        }
    })

}

export async function loadData(data) {

    const notesContainer = document.querySelector(".notes")
    const notes = notesContainer.children

    for (let i = 0; i < notes.length; i++) {
        const topicTitle = notes[i].querySelector(".topic-title__title")
        topicTitle.innerText = data.topic_title

        const content = notes[i].querySelector(".note__text")
        content.innerHTML = data.topic_conetnt
    }
}