import emptyNote from "../components/empty-note/empty-note.js";

customElements.define('empty-note', emptyNote)

const div = document.createElement("div")

div.classList.add("empty")

document.querySelector('#app').append(div)
    
const main = document.querySelector('.empty')

const frame = document.createElement("empty-note")

main.append(frame)