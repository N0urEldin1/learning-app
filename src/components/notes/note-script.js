import {saveContent} from "./note-data.js"
import {loadData} from "./note-data.js"
import {getData} from "./note-data.js"

document.addEventListener("note-ready" , (e) => {start(e)})

async function start(e) {    
    
    const data = await getData()

    if (data != undefined) {
        await loadData(data)
    }

    updateProgress()

    eventListerners(e)
}


export async function eventListerners(e) {

        const target = e.target

        target.addEventListener('input', () => {saveContent()})
        target.addEventListener('click', (e) => {noteFunctionality(e)})

        // Prevent link breaks in topic title
        const editableDiv = document.querySelectorAll('.no-break');
        
        for (let i = 0; i < editableDiv.length; i++) {
            
            editableDiv[i].addEventListener('beforeinput', (e) => {
            if (e.inputType === 'insertLineBreak' || e.inputType === 'insertParagraph') {
            e.preventDefault(); // Stop line break
                }

            if (editableDiv[i].textContent.length === 1) {
                editableDiv[i].innerHTML = '';
                saveContent()
                }
            });
        }
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


function noteFunctionality(e) {
    
    const target = e.target
    
        if (target.closest('.checkmark')) {
            
            const checkMark = target.closest('.checkmark')
        
            if (checkMark.classList.contains('topic-title__unckecked')) {
                checkMark.classList.add('hidden')
                const unCheck = checkMark.nextElementSibling
                unCheck.classList.remove('hidden')
            } else if (checkMark.classList.contains('topic-title__ckecked')) {
                checkMark.classList.add('hidden')
                const unCheck = checkMark.previousElementSibling
                unCheck.classList.remove('hidden')
            }

            // Update progress bar
            updateProgress()   
            saveContent()
        
        }
        
        if (target.closest('button')) {
            
            const btn = target.closest('button')
            
            // Accordion functionality
            if (btn.classList.contains('accordion')) {
                
                const toggleBtn = target.closest('button')
                            
                const note = toggleBtn.closest('.note')
                
                const noteSection = note.querySelector(".note-section")
        
                const icon = note.querySelector('.fa-angle-down')
                
                if (noteSection.classList.contains('active')) {
                    noteSection.classList.remove('active')
                    icon.removeAttribute('style', 'transform: rotate(180deg)')
                } else {
                    noteSection.classList.add('active')
                    icon.setAttribute('style', 'transform: rotate(180deg)')
                }                
            }
        }
        
    }