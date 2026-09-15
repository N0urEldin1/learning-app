document.querySelector('.notes').addEventListener('click', function(event) {
    
    const target = event.target

    const nextSibling = target.nextElementSibling;

    const parent = target.parentElement;

    const grandParent = parent.parentElement;

    const previuosParentSibling = grandParent.previousElementSibling;

    const previuosSibling = parent.previousElementSibling


    if (target.matches('.topic-title__unckecked')) {
        if (target.classList.contains('hidden')) {
            target.classList.remove('hidden')
            if (nextSibling.classList.contains('topic-title__ckecked')) {
                nextSibling.classList.add('hidden')
            }
        } else {
            target.classList.add('hidden')
            if (nextSibling.classList.contains('topic-title__ckecked')) {
                nextSibling.classList.remove('hidden')
            }
        }
    }

    if (target.matches('svg')) {
        if (parent.classList.contains('topic-title__unckecked')) {
            if (parent.classList.contains('hidden')) {
                parent.classList.remove('hidden')
                previuosSibling.classList.add('hidden')
            } else {
                parent.classList.add('hidden')
                previuosSibling.classList.remove('hidden')
            }
        }
    }
    
    if (target.matches('path')) {
        if (previuosParentSibling.classList.contains('topic-title__unckecked')) {
            if (previuosParentSibling.classList.contains('hidden')) {
                previuosParentSibling.classList.remove('hidden')
                grandParent.classList.add('hidden')
            } else {
                previuosParentSibling.classList.add('hidden')
                grandParent.classList.remove('hidden')
            } 
        }
    } 

    // Update progress bar
    let checkedCount = updateProgress()

    updateBadge(checkedCount)

})


// Total notes count
const notes = document.querySelectorAll('.note')
const noteCount = notes.length;


// Update progress function
function updateProgress() {

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