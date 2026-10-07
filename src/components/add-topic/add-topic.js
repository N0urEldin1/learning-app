import {eventListerners} from "./add-topic-script.js"

export default class addTopic extends HTMLElement {

    async connectedCallback() {

        await this.renderElements()
        
        await eventListerners()
        
    }
    
    async renderElements() {
        const response = await fetch("/src/components/add-topic/add-topic.html")
        
        this.innerHTML = await response.text()
    }  
}