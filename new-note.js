
const form = document.getElementById('link-input')
const errorElement = document.getElementById('input-error-text')

form.addEventListener('submit' , (e) => {
    
    let messages = [];

    if (link.value === '' || link.value == null) {
        messages.push("Youtube video link is required! - Please paste a video link from YouTube")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
    
    
    

let link;

function newNote() {

    console.log("Submeted")

    link = document.getElementById("input-1").value
    
    console.log(link)
}