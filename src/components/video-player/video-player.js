// import {playerIdConfig} from "./video-player.html"

export default class videoPlayer extends HTMLElement {

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("/src/components/video-player/video-player.html")
        
        this.innerHTML = await response.text()
        
        const url = window.location.pathname

        const id = url.split('/')[2]

        const videoPlayer = document.getElementById('video-player')

        videoPlayer.setAttribute('src', "https://www.youtube.com/embed/" + id)


        
    }

}