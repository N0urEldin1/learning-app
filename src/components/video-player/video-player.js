import loadCSS from "/home/noureldin/code/learning-app/src/js/util/load-css.js"

export default class videoPlayer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.render()
    }


    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("src/components/video-player/video-player.html")
        
        this.shadowRoot.innerHTML = await response.text()
        
        loadCSS('src/components/video-player/video-player.css', this.shadowRoot);
        // loadIcons("https://kit.fontawesome.com/dcafb63ef6.js", this.shadowRoot);

        // this.shadowRoot.querySelector('.notes').addEventListener('click', (e) => {this.functionality(e)})

    }

}