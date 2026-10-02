export default  class progressBar extends HTMLElement {

    async connectedCallback() {
        await this.render();
    }

    async render() {
        const response = await fetch("src/components/progress-bar/progress-bar.html")
        
        this.innerHTML = await response.text()
        
    }

}