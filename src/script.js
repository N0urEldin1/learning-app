document.querySelector('.notes').addEventListener('click', function(event) {
    
    const target = event.target

    const checkMark = target.closest('.icon')

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
document.querySelector('.notes').addEventListener('click', function(event) {

    const target = event.target;

    if (target.closest('button')) {

        const toggleBtn = target.closest('button')
    
        console.log(toggleBtn)
                        
        const note = toggleBtn.closest('.note')
                    
        const noteSection = note.querySelector(".open-note__note-section")
                        
        if (noteSection.classList.contains('active')) {
            noteSection.classList.remove('active')
        } else {
            noteSection.classList.add('active')
        }                
    }
})


// Add topic update progress
document.querySelector('.add-topic-btn').addEventListener('click', updateProgress)

// Add topic update status
document.querySelector('.add-topic-btn').addEventListener('click', function() {
    let checkedCount = updateProgress()
    updateBadge(checkedCount)
} )
