class Tsection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div>
            <p>Test2</p>
        </div>
        `;
    }
}
customElements.define('t-section', Tsection);