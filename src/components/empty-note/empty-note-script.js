// const formBtn = document.getElementById('formBtn')

// const formFrame = document.querySelector('.empty-note-frame__input-frame')
// const errorElement = document.getElementById('input-error-text')

const youtu = 'youtu'
const youtube = 'youtube'


// Link input form validation
export function formValidation(e) {
    // When clicking the form submit button the this function will work

    const errorElement = document.getElementById('input-error-text')
    const  formFrame = document.querySelector('.empty-note-frame__input-frame')

    const link = document.getElementById('input-1').value.trim()
    
    let messages = [];
    
    // Form validation - Empty submission
    if (link === '' || link == null) {
        messages.push("Youtube video link is required! - Please paste a video link from YouTube.")
    
    // Valid YouTube link
    } else if (link.includes(youtu) || link.includes(youtube)) {
    
        let videoId = getId(link)
    
        newNote(videoId) // submitURL
        // this call helper function which was used to hide the empty notes frame and show the note frame and set the video url
        // what should happen now is that the form need to be submitted
    
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
    
}

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

    console.log("note submitted")

    const url = `/note/` + videoId

    window.location.href = url

}

// Prevent form submission using Enter
export function preventEnterSubmition(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        formValidation(e);
    }
}
