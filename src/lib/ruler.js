export let instance
export default class DOMRuler {
    constructor () {
        if (!instance) {
            const ruler = document.createElement('span')
            ruler.style.visibility = 'hidden'
            ruler.style.position = 'absolute'
            ruler.style.whiteSpace = 'nowrap'
            ruler.id = 'ruler'
            document.querySelector('body').appendChild(ruler)
            this.ruler = ruler
            instance = this
        }
        return instance
    }

    getWidth (str) {
        this.ruler.textContent(str)
    }
}
