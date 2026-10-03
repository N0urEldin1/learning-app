export default class videoPlayer extends HTMLElement {

    async connectedCallback() {
        this.style.visibility = "hidden";

        await this.render();

        this.style.visibility = "visible";
    }

    async render() {
        const response = await fetch("/src/components/video-player/video-player.html")
        
        this.innerHTML = await response.text()
        
    }

}