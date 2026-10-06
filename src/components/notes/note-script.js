import {saveContent} from "./note-data.js"

export async function eventListerners() {
        const notes = document.querySelector('.notes')

        notes.addEventListener('input', (e) => {saveContent(e)})
        
        notes.addEventListener('click', (e) => {noteFunctionality(e)})
        
        document.querySelector('.add-topic-btn').addEventListener('click', (e) => {addTopic(e)})


        // Prevent link breaks in topic title
        const editableDiv = document.querySelectorAll('.no-break');
        
        for (let i = 0; i < editableDiv.length; i++) {
            
            editableDiv[i].addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
            e.preventDefault(); // Stop line break
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
        
        // Update progress bar
        updateProgress()   
    }

function addTopic() {
    
    const notes = document.querySelector("#app").querySelector("new-note").querySelector(".notes")
    
    
            notes.insertAdjacentHTML('beforeend', `
                <div class="note flex-column main-stroke">
                    
                    <div class="title-section flex-row">
                      
                        <div class="title-section__left flex-row">
                          <div class="topic-title">
                            <span class="topic-title__unckecked checkmark"></span>
                            <div class="topic-title__ckecked checkmark hidden">
                              <i class="fa-solid fa-circle-check"></i>
                            </div>
                          </div>
                          <div contenteditable="true" spellcheck="false" data-placeholder="Write the topic name" class="topic-title__title no-break" name="" id=""></div>
                        </div>
      
                        <div class="title-section__right flex-row">
                          
                          <button type="button" class="options default">
                            <i class="collapsed-note__ellipsis fa-solid fa-ellipsis"></i>
                          </button>
                          
                          <button type="button" class="accordion default">
                            <i class="collapsed-note__angle fa-solid fa-angle-down"></i>
                          </button>
      
                        </div>
      
                    </div>
      
                    <div class="note-section"> <!-- note-section -->
                          
                          <div class="note-section__note flex-column"> <!-- note-section__note -->
                            <div class="note__frame flex-column"> <!-- note__frame -->
                              
                              <!-- Text editor icons - Feuture feature -->
                              <!-- <div class="note-section-icons">
                                <i class="note-section-icons__icon fa-solid fa-italic"></i>
                                <i class="note-section-icons__icon fa-solid fa-list-ul"></i>
                              </div> -->
      
                              <div contenteditable="true" spellcheck="true" data-placeholder="Start typing your notes..." class="note__text" name="" id=""></div> <!-- note__text -->
                              
                              <!-- TipTap setup - Feuture feature -->
                              <!-- <div class="editor-container">
                                <div class="toolbar" id="toolbar">
                                  <button id="bold-button" data-tiptap-button="bold">Bold</button>
                                  <button data-tiptap-button="italic">Italic</button>
                                  <button data-tiptap-button="strike">Strike</button>
                                  <button data-tiptap-button="code">Code</button>
                                  <button data-tiptap-button="h1">H1</button>
                                  <button data-tiptap-button="h2">H2</button>
                                  <button data-tiptap-button="bulletList">Bullet List</button>
                                  <button data-tiptap-button="orderedList">Ordered List</button>
                                  <button data-tiptap-button="blockquote">Blockquote</button>
                                  <button data-tiptap-button="codeBlock">Code Block</button>
                                </div>
                                <div id="editor"></div>
                              </div> -->
      
                            </div>
                          </div>
                      
                      </div>
      
                    </div>   
            `
            )
    
            // Update progress bar
            updateProgress() 
}