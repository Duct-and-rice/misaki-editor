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

export function addNewTab ({commit}) {
    commit(types.ADD_TAB, new Tab())
}

export function selectTab ({commit}, index) {
    commit(types.SELECT_TAB, index)
}
