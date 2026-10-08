import {saveContent} from "../notes/note-data.js"

export async function eventListerners() {
    document.querySelector('.add-topic-btn').addEventListener('click', (e) => {addTopic(e)})        
}


function updateProgress() {

    const notes = document.querySelectorAll('.note')
    const noteCount = notes.length;
    
    // Count checks
    let checkedCount = 0;
    let unCheckedCount = 0;
    
    for (const note of notes) {
    
        const checks = note.querySelector('.topic-title')
    
        const checked = checks.firstElementChild
        const unChecked = checks.lastElementChild
    
        if (unChecked.classList.contains('hidden')) {
            unCheckedCount++
        }
    
        if (checked.classList.contains('hidden')) {
            checkedCount++
        }
    
    }
    
    
    // Update progress text
    const progressTextElement = document.querySelector("#app").querySelector("progress-bar").querySelector('.progress-bar__text')

    let progressText = progressTextElement.innerText
    
    progressText = `Progress: ${checkedCount}/${noteCount} topics completed`
    
    progressTextElement.innerText = progressText
    
    
    // Update progress line
    const progressLine = document.querySelector("#app").querySelector("progress-bar").querySelector('.line__green')
    
    const width = Math.floor((checkedCount * 100) / noteCount)
    
    progressLine.setAttribute('style', 'width: ' + width + '%')
    
    
    // Update progress percentage
    const percentageTextElement = document.querySelector("#app").querySelector("progress-bar").querySelector('.progress-bar__percentage')
    
    let percentageText = percentageTextElement.innerText
    
    percentageText = `${width}%`
    
    percentageTextElement.innerText = percentageText
    
    return checkedCount
}


function addTopic() {
    
    const notes = document.querySelector(".notes")
    
    const note = document.createElement("new-note")
    notes.append(note)

    document.addEventListener("note-ready" , (e) => {start(e)})
    
}

async function start(e) {    
    
    saveContent()

    updateProgress()
}