import types from './mutation-types'

class Tab {
    constructor (title) {
        this.title = title || 'New Tab'
        this.pages = [new Page()]
    }
}

class Page {
    constructor () {
        this.layers = [new Layer()]
    }
}

class Layer {
}

export function add ({commit}) {
    commit(types.ADD, new Tab())
}

export function select ({commit}, index) {
    commit(types.SELECT, index)
}

export function close ({commit}, index) {
    commit(types.SELECT, 0)
    commit(types.CLOSE, index)
}
