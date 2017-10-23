export function currentTabIndex (state) {
    return state.currentIndex
}

export function currentTab (state, getters) {
    return state.tabs[getters.currentTabIndex]
}

export function tabsLength (state) {
    return state.tabs.length
}

export function currentPageIndex (state, getters) {
    return getters.currentTab.currentIndex
}

export function currentPage (state, getters) {
    return getters.currentTab.current
}

export function currentLayerIndex (state, getters) {
    return getters.currentPage.currentIndex
}

export function currentLayer (state, getters) {
    return getters.currentPage.current
}

export function currentIndexes (state, getters) {
    return {tabIndex: getters.currentTabIndex,
        pageIndex: getters.currentPageIndex,
        layerIndex: getters.currentLayerIndex
    }
}
