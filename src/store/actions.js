import types from './mutation-types'

class Tab {
    constructor (title) {
        this.title = title || 'New Tab'
    }
}

export function addNewTab ({commit}) {
    commit(types.ADD_TAB, new Tab())
}
