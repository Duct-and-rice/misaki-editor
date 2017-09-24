export function currentTabIndex (state) {
    return state.currentIndex
}

export function currentTab (state, getters) {
    console.log(getters.currentTabIndex, state.tabs)
    return state.tabs[getters.currentTabIndex]
}

export function tabsLength (state) {
    return state.tabs.length
}

export function currentPageIndex (state, getters) {
    console.log(getters.currentTab)
    return getters.currentTab.currentIndex
}

export function currentPage (state, getters) {
    return getters.currentTab.children[getters.currentPageIndex]
}

export function currentLayerIndex (state, getters) {
    return getters.currentPage.currentIndex
}

export function currentLayer (state, getters) {
    return getters.currentPage.children[getters.currentLayerIndex]
}

export function currentIndexes (state, getters) {
    return {tabIndex: getters.currentTabIndex,
        pageIndex: getters.currentPageIndex,
        layerIndex: getters.currentLayerIndex
    }
}
