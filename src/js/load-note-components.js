// import newNotesPage from "src/pages/notes-page.js"
import {getDB} from "./indexedDB.js"

const db = await getDB()

const url = window.location.pathname
const videoId = url.split('/')[2]

const transaction = db.transaction("notes", "readwrite")
const store = transaction.objectStore("notes")

const request = store.get(videoId)


import newNote from "../components/notes/new-note.js";
import navigationBar from "../components/nav-bar/nav-bar.js";
import progressBar from "../components/progress-bar/progress-bar.js";
import videoPlayer from "../components/video-player/video-player.js";
import addTopic from "../components/add-topic/add-topic.js";


customElements.define('new-note', newNote)
customElements.define('nav-bar', navigationBar)
customElements.define('progress-bar', progressBar)
customElements.define('video-player', videoPlayer)
customElements.define('add-topic', addTopic)


const div = document.createElement("div")

div.classList.add("main")

document.querySelector('#app').append(div)
    
const main = document.querySelector('.main')

const nav = document.createElement("nav-bar")
nav.setAttribute('style', "grid-area:nav")

const notesFrame = document.createElement('div')
notesFrame.setAttribute('class', 'notes-frame flex-column')
notesFrame.setAttribute('style', 'grid-area: notes-frame')

const notes = document.createElement('div')
notes.setAttribute('class', 'notes flex-column')

// notes.setAttribute('style', "grid-area:note-frame")

const addTopicBtn = document.createElement("add-topic")
// addTopicBtn.setAttribute('style', "grid-area:add-topic")

const progress = document.createElement("progress-bar")
progress.setAttribute('style', "grid-area:progress-bar")

const video = document.createElement("video-player")
video.setAttribute('style', "grid-area:video-frame;")

main.append(nav)
main.append(notesFrame)
notesFrame.append(notes)
// const note = document.createElement("new-note")
// notes.append(note)


let length;
request.onsuccess = () => {
    length = request.result.topics.length
    
    if (length == 0) {
        const note = document.createElement("new-note")
        notes.append(note)
    } else {
        for (let i = 0; i < length; i++) {
            const note = document.createElement("new-note")
            notes.append(note)
        }
    }

}



notesFrame.append(addTopicBtn)
main.append(progress)
main.append(video)