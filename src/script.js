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
})


// Progress bar

// Total
const notes = document.querySelectorAll('.note')
const noteCount = notes.length;

// Checked
const isChecked = document.querySelectorAll('h')


// const checkMarks = document.getElementsByClassName('topic-title')

// console.log(checkMarks)

// let checkedCount = 0;

// for (let unCheckedNote of unChecked) {

//     let checkedCount = 0;

//     if (!unCheckedNote.classList.contains('hidden')) {
//         checkedCount += 1
//     }

// }

// console.log(checkedCount)
// console.log(unChecked.length)


// Green line logic
const progressLine = document.querySelector('.line__green')

const value = noteCount * 10

progressLine.setAttribute('style', 'width: ' + value + '%')

// progress text logic


// percentage text logic

const percentageTextElement = document.querySelector('.progress-bar__percentage')

let percentageText = percentageTextElement.innerText

percentageText = `${value}%`

percentageTextElement.innerText = percentageText

// console.log(percentageText)