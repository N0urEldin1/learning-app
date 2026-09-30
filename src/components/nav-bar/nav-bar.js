export class navigationBar extends HTMLElement {
    // constructor() {
    //     super();
    //     this.shadow = this.attachShadow({mode: "open"});
    // }

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("src/components/nav-bar/nav-bar.html")
        // this.shadow.innerHTML = await response.text()
        this.innerHTML = await response.text()
        console.log("NoteCard connected")
    }

}

customElements.define('nav-bar', navigationBar)