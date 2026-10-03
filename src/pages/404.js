export function page404() {

    const div = document.createElement("div")

    div.classList.add("main")

    document.querySelector('#app').append(div)
    
    const title = document.createElement("h1")

    title.innerText = "404 Page"

    document.querySelector('.main').appendChild(title)

    return div

}