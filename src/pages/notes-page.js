export function newNotesPage() {

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

}
