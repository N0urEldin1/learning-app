export default class TextComponent extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow root to the element.
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Define the inner structure and styles of the component.
        shadowRoot.innerHTML = `
            <style>
                .text-component {
                    margin: 10px 0;
                }
                .title {
                    font-weight: var(--f-bold);
                    font-size: var(--h5);
                    line-height: 1.24;
                    color: var(--color-heading);
                    margin-bottom: 20px;
                }
                .description {
                    font-size: var(--font-size-b3);
                    line-height: var(--line-height-b3);
                }
            </style>
            <div class="text-component">
                <div class="title"></div>
                <div class="description"></div>
            </div>
        `;
    }

    connectedCallback() {
        // Update the content when the component is attached to the DOM.
        this.updateContent();
    }

    static get observedAttributes() {
        return ['title', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // Update the content when attributes change.
        this.updateContent();
    }

    updateContent() {
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';
        this.shadowRoot.querySelector('.title').textContent = title;
        this.shadowRoot.querySelector('.description').textContent = description;
    }
}

// Define the new element
customElements.define('text-component', TextComponent);