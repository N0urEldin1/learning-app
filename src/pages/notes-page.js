
import { newNote } from "../components/notes/new-note.js";
import { navigationBar } from "../components/nav-bar/nav-bar.js";
import { progressBar } from "../components/progress-bar/progress-bar.js";
import { videoPlayer } from "../components/video-player/video-player.js";

export function newNotesPage() {

    const div = document.createElement("div")

    div.classList.add("main")

    document.querySelector('#app').append(div)
    
    const nav = document.createElement("nav-bar")
    nav.setAttribute('style', "grid-area:nav")

    const notes = document.createElement("new-note")
    notes.setAttribute('style', "grid-area:note-frame")
    
    const progress = document.createElement("progress-bar")
    progress.setAttribute('style', "grid-area:progress-bar")

    const video = document.createElement("video-player")
    video.setAttribute('style', "grid-area:video-frame;")

    document.querySelector('.main').append(nav)
    document.querySelector('.main').append(notes)
    document.querySelector('.main').append(progress)
    document.querySelector('.main').append(video)

    const body = document.body

    const script = document.createElement('script')

    script.type = "module"
    script.src = "/src/script.js"

    body.append(script)
}
