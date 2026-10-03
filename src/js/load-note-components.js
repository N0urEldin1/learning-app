// import newNotesPage from "src/pages/notes-page.js"

import newNote from "../components/notes/new-note.js";
import navigationBar from "../components/nav-bar/nav-bar.js";
import progressBar from "../components/progress-bar/progress-bar.js";
import videoPlayer from "../components/video-player/video-player.js";


customElements.define('new-note', newNote)
customElements.define('nav-bar', navigationBar)
customElements.define('progress-bar', progressBar)
customElements.define('video-player', videoPlayer)


const div = document.createElement("div")

div.classList.add("main")

document.querySelector('#app').append(div)
    
const main = document.querySelector('.main')

const nav = document.createElement("nav-bar")
nav.setAttribute('style', "grid-area:nav")

const notes = document.createElement("new-note")
notes.setAttribute('style', "grid-area:note-frame")

const progress = document.createElement("progress-bar")
progress.setAttribute('style', "grid-area:progress-bar")

const video = document.createElement("video-player")
video.setAttribute('style', "grid-area:video-frame;")

main.append(nav)
main.append(notes)
main.append(progress)
main.append(video)