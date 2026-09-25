document.querySelector('.notes').addEventListener('click', function(event) {
    
    const target = event.target
    
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
    let checkedCount = updateProgress()

    updateBadge(checkedCount)

})


// Total notes count
// const notes = document.querySelectorAll('.note')
// const noteCount = notes.length;


// Update progress function
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
    const progressTextElement = document.querySelector('.progress-bar__text')

    let progressText = progressTextElement.innerText

    progressText = `Progress: ${checkedCount}/${noteCount} topics completed`

    progressTextElement.innerText = progressText


    // Update progress line
    const progressLine = document.querySelector('.line__green')

    const width = Math.floor((checkedCount * 100) / noteCount)

    progressLine.setAttribute('style', 'width: ' + width + '%')


    // Update progress percentage
    const percentageTextElement = document.querySelector('.progress-bar__percentage')

    let percentageText = percentageTextElement.innerText

    percentageText = `${width}%`

    percentageTextElement.innerText = percentageText

    return checkedCount

}


// Update badge functiong
function updateBadge(checkedCount) {

    const notes = document.querySelectorAll('.note')
    const total = notes.length

    // Update status padge 
    const statusBadgeFrame = document.querySelector('.heading-badge')
    const statusBadgeEllipse = document.querySelector('.status-frame__ellipse')
    const statusBadgeText = document.querySelector('.status-frame__status')

    // Not started
    if (checkedCount == 0) {
        
        statusBadgeFrame.removeAttribute('style')
        statusBadgeFrame.setAttribute('style', 'border-color: var(--main-stroke-color);')

        statusBadgeEllipse.removeAttribute('style')
        statusBadgeEllipse.setAttribute('style', 'background-color: var(--text-color-inactive);')
        
        let newStatusText = statusBadgeText.innerText

        newStatusText = "Not started"

        statusBadgeText.innerText = newStatusText

    } else if (checkedCount == total) {
        
        statusBadgeFrame.removeAttribute('style')
        statusBadgeFrame.setAttribute('style', 'border-color: var(--green-stroke-color);')

        statusBadgeEllipse.removeAttribute('style')
        statusBadgeEllipse.setAttribute('style', 'background-color: var(--text-color-green);')

        let newStatusText = statusBadgeText.innerText

        newStatusText = "Completed"

        statusBadgeText.innerText = newStatusText

    } else {

        statusBadgeFrame.removeAttribute('style')
        statusBadgeFrame.setAttribute('style', 'border-color: var(--yellow-stroke-color);')

        statusBadgeEllipse.removeAttribute('style')
        statusBadgeEllipse.setAttribute('style', 'background-color: var(--text-color-yellow);')

        let newStatusText = statusBadgeText.innerText

        newStatusText = "In progress"

        statusBadgeText.innerText = newStatusText
    }
}


// Accordion functionality
// document.querySelector('.notes').addEventListener('click', function(event) {

//     const target = event.target;

//     const btn = target.closest('button')

//     if (btn.classList.contains('accordion')) {

//         const toggleBtn = target.closest('button')
    
//         console.log(toggleBtn)
                        
//         const note = toggleBtn.closest('.note')
                    
//         const noteSection = note.querySelector(".open-note__note-section")
                        
//         if (noteSection.classList.contains('active')) {
//             noteSection.classList.remove('active')
//         } else {
//             noteSection.classList.add('active')
//         }                
//     }
// })


// Add topic update progress
document.querySelector('.add-topic-btn').addEventListener('click', updateProgress)

// Add topic update status
document.querySelector('.add-topic-btn').addEventListener('click', function() {
    let checkedCount = updateProgress()
    updateBadge(checkedCount)
} )


// Custome text editor script setup - Feuture feature
// document.querySelector('.notes').addEventListener('mouseup', () => {

//     const selection = window.getSelection()
//     const start = selection.focusOffset
//     const end = selection.anchorOffset
//     const parent = window.getSelection().anchorNode.parentElement

//     const line = parent.innerText

//     console.log(selection)
//     console.log(parent)
//     console.log(line)
//     console.log(start)
//     console.log(end)

//     const wordLength = end - start
//     const div = [...line]

//     const newDiv = div.splice(start, wordLength)
//     console.log(newDiv)

//     // for (let i = start; i < end; i++) {
//     //     Div[i] - line[i]
//     // }
//     // const string = Div.toString()

//     const newString = ''
//     let final = newDiv.array.forEach(element => {
//         if (element != ',') {
//             newString += element
//         }
//     });

//     console.log(final)
//     // if (selection) {}


//     }
// )


// Tiptap script setup - Feuture feature
// import { Editor } from '@tiptap/core'
// import StarterKit from '@tiptap/starter-kit'

// new Editor({
//   element: document.querySelector('#editor'),
//   extensions: [StarterKit],
//   content: '<p>Hello World!</p>',
// })



// // Listen for clicks and call editor commands
// document.querySelector('#bold-button').addEventListener('click', () => {
//   Editor.chain().focus().toggleBold().run()
// })

// // Check if a mark or node is active to style the button
// const isBold = Editoritor.isActive('bold')
// const isHeading1 = Editor.isActive('heading', { level: 1 })
// const isBulletList = Editor.isActive('bulletList')

// // Update button active state on selection change
// Editor.on('selectionUpdate', () => {
//   document.querySelector('#bold-button').classList.toggle('is-active', Editor.isActive('bold'))
// })

const formBtn = document.getElementById('formBtn')

const formFrame = document.querySelector('.empty-note-frame__input-frame')
const errorElement = document.getElementById('input-error-text')

const youtu = 'youtu'
const youtube = 'youtube'

// Link input form validation
formBtn.addEventListener('click' , (e) => {

    const link = document.getElementById('input-1').value.trim()
    
    let messages = [];

    // Form validation - Empty submission
    if (link === '' || link == null) {
        messages.push("Youtube video link is required! - Please paste a video link from YouTube.")

    // Valid YouTube link
    } else if (link.includes(youtu) || link.includes(youtube)) {

        let videoId = getId(link)

        newNote(videoId)

    // Invalid link
    } else {
        messages.push("Youtube video link is invalid - Please paste a valid Youtube video link") 
    }

    // Show error message
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        formFrame.setAttribute('style', 'border-color: var(--failure-color)')
    }

})

// YouTube video Id extraction form url
function getId(link) {

    let videoId;

        if (link.includes(youtube)) {
            let firstPart;
            firstPart = link.split("=")[1]
            videoId = firstPart.split("&")[0]
        } else if (link.includes(youtu)) {
            let firstPart;
            firstPart = link.split("/")[3]
            videoId = firstPart.split("?")[0]
        }

    return videoId
}

// New note functionality - Set the video player src and unhide the main frame
function newNote(videoId) {

    const mainFrame = document.querySelector('.main-frame')
    const emptyNoteFrame = document.querySelector('.empty-note-frame')
    const videoPlayer = document.getElementById('video-player')

    videoPlayer.setAttribute('src', "https://www.youtube.com/embed/" + videoId)

    emptyNoteFrame.classList.add('hidden')
    mainFrame.classList.remove('hidden')

}

// Prevent link breaks in topic title and heading content editable divs
const editableDiv = document.querySelectorAll('.no-break');

for (let i = 0; i < editableDiv.length; i++) {
    
    editableDiv[i].addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    e.preventDefault(); // Stop line break
    }
});
}