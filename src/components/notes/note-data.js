import {getDB} from "../../js/indexedDB"

const db = await getDB()

const url = window.location.pathname
const videoId = url.split('/')[2]

export async function saveContent() {

    const transaction = db.transaction("notes", "readwrite")
    const store = transaction.objectStore("notes")

    // save topics in order
    const notes = document.querySelectorAll("new-note")
    
    const topics = []
    for (let i = 0; i < notes.length; i++) {
        const title = notes[i].querySelector(".topic-title__title")
        const titleText = title.innerText
        
        const content = notes[i].querySelector(".note__text")
        const contentText = content.innerHTML

        topics.push({topic_order: i, topic_title: titleText, topic_conetnt: contentText})
    }   
    
    store.put({video_id: videoId, topics: topics})
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

    const notes = document.querySelectorAll("new-note")

    for (let i = 0; i < notes.length; i++) {
        const topicTitle = notes[i].querySelector(".topic-title__title")
        topicTitle.innerText = data.topics[i].topic_title
        
        const content = notes[i].querySelector(".note__text")
        content.innerHTML = data.topics[i].topic_conetnt
    }
}