
import newNote from "../components/notes/new-note.js";
import navigationBar from "../components/nav-bar/nav-bar.js";
import progressBar from "../components/progress-bar/progress-bar.js";
import videoPlayer from "../components/video-player/video-player.js";

export function newNotesPage() {

    const div = document.createElement("div")

    div.classList.add("main")

    document.querySelector('#app').append(div)
    
    const main = document.querySelector('.main')


    const fontAwesomeScript = document.createElement('script');

    fontAwesomeScript.src = "https://kit.fontawesome.com/dcafb63ef6.js"
    fontAwesomeScript.crossOrigin = "anonymous"

    main.appendChild(fontAwesomeScript)

    
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

    // const script = document.createElement('script')

    // script.crossOrigin = "anonymous"
    // script.src = "https://kit.fontawesome.com/dcafb63ef6.js"
    
    // main.append(script)

}
