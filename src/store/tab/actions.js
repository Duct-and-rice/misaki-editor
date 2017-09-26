import types from './mutation-types'

class Structure {
    get current () {
        return this.children[this.currentIndex]
    }

    add (content) {
        this.children.push(content)
    }

    select (index) {
        this.currentIndex = index
    }

    close (index) {
        this.children.splice(index, 1)
    }

}

class Tab extends Structure {
    constructor (title) {
        super()
        this.title = title || 'New Tab'
        this.children = [new Page()]
        this.currentIndex = 0
    }
}

class Page extends Structure {
    constructor (title) {
        super()
        this.title = title || 'Page'
        this.children = [new Layer()]
        this.currentIndex = 0
    }
}

class Layer {
    constructor () {
        this.title = 'Layer'
        this.text = ''
    }
}

export function addTab ({commit, getters}) {
    commit(types.ADD_TAB, {tab: new Tab()})
    commit(types.SELECT_TAB, {tabIndex: getters.tabsLength - 1})
}

export function selectTab ({commit}, {tabIndex}) {
    commit(types.SELECT_TAB, {tabIndex})
}

export function closeTab ({commit, getters}, {tabIndex}) {
    commit(types.SELECT_TAB, {tabIndex: 0})
    commit(types.CLOSE_TAB, {tabIndex})
}

export function addPage ({commit}, {tabIndex}) {
    commit(types.ADD_PAGE, {tabIndex, page: new Page()})
}

export function selectPage ({commit}, {tabIndex, pageIndex}) {
    commit(types.SELECT_PAGE, {tabIndex, pageIndex})
}

export function closePage ({commit}, {tabIndex, pageIndex}) {
    commit(types.SELECT_PAGE, {tabIndex, pageIndex: 0})
    commit(types.CLOSE_PAGE, {tabIndex, pageIndex})
}

export function addLayer ({commit}, {tabIndex, pageIndex}) {
    commit(types.ADD_LAYER, {tabIndex, pageIndex, layer: new Layer()})
}

export function selectLayer ({commit}, {tabIndex, pageIndex, layerIndex}) {
    commit(types.SELECT_LAYER, {tabIndex, pageIndex, layerIndex})
}

export function closeLayer ({commit}, {tabIndex, pageIndex, layerIndex}) {
    commit(types.SELECT_LAYER, {tabIndex, pageIndex, layerIndex: 0})
    commit(types.CLOSE_LAYER, {tabIndex, pageIndex, layerIndex})
}

export function editLayer ({commit}, {tabIndex, pageIndex, layerIndex, text}) {
    commit(types.EDIT_LAYER, {tabIndex, pageIndex, layerIndex, text})
}
