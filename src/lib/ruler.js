
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
            this.isLock = false
            domRulerInstance = this
        }
        return domRulerInstance
    }

    getWidth (str) {
        if (this.isLock) {
            throw new Error('Locked')
        }
        this.isLock = true
        this.ruler.textContent = '.' + str + '.'
        const width = this.ruler.offsetWidth
        this.isLock = false
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
            this.isLock = false
            canvasRulerInstance = this
        }
        return canvasRulerInstance
    }

    getWidth (str) {
        if (this.isLock) {
            throw new Error('Locked')
        }
        if (this.ruler.getContext) {
            this.isLock = true
            const context = this.ruler.getContext('2d')
            context.font = '16px Stmr'
            const metrics = context.measureText(str)
            this.isLock = false
            return metrics.width
        }
    }
}
