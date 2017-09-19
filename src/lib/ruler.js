
export let domRulerInstance
export let canvasRulerInstance

export class DOMRuler {
    constructor () {
        if (!domRulerInstance) {
            const ruler = document.createElement('span')
            ruler.style.visibility = 'hidden'
            ruler.style.position = 'absolute'
            ruler.style.whiteSpace = 'nowrap'
            ruler.style.overflow = 'visible'
            ruler.style.fontFamily = 'Stmr'
            ruler.style.fontSize = '16px'
            ruler.id = 'dom-ruler'
            document.body.appendChild(ruler)
            this.ruler = document.getElementById('dom-ruler')
            domRulerInstance = this
        }
        return domRulerInstance
    }

    getWidth (str) {
        this.ruler.textContent = '.' + str + '.'
        const width = this.ruler.offsetWidth
        this.ruler.style.fontFamily
        return width - 6
    }
}

export class CanvasRuler {
    constructor () {
        if (!canvasRulerInstance) {
            const ruler = document.createElement('canvas')
            ruler.style.visibility = 'hidden'
            ruler.style.position = 'absolute'
            ruler.id = 'canvas-ruler'
            ruler.width = 0
            ruler.height = 0
            document.querySelector('body').appendChild(ruler)
            this.ruler = ruler
            canvasRulerInstance = this
        }
        return canvasRulerInstance
    }

    getWidth (str) {
        if (this.ruler.getContext) {
            const context = this.ruler.getContext('2d')
            context.font = '16px Stmr'
            const metrics = context.measureText(str)
            return metrics.width
        }
        return -1
    }
}
