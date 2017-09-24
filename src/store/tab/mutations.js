/* eslint no-unused-vars:0 */
import Vue from 'vue'
import * as types from './mutation-types'

export default {
    addTab (state, {tab}) {
        state.tabs.push(tab)
    },

    selectTab (state, {tabIndex}) {
        console.log(tabIndex)
        state.currentIndex = tabIndex
    },

    closeTab (state, {tabIndex}) {
        state.tabs.splice(tabIndex, 1)
    },

    addPage (state, {tabIndex, page}) {
        state.tabs[tabIndex].add(page)
    },

    selectPage (state, {tabIndex, pageIndex}) {
        if (state.tabs[tabIndex]) {
            state.tabs[tabIndex].select(pageIndex)
        }
    },

    closePage (state, {tabIndex, pageIndex}) {
        if (state.tabs[tabIndex]) {
            state.tabs[tabIndex].close(pageIndex)
        }
    },

    addLayer (state, {tabIndex, pageIndex, layer}) {
        state.tabs[tabIndex].children[pageIndex].add(layer)
    },

    selectLayer (state, {tabIndex, pageIndex, layerIndex}) {
        if (state.tabs[tabIndex].children[pageIndex]) {
            state.tabs[tabIndex].children[pageIndex].select(layerIndex)
        }
    },

    closeLayer (state, {tabIndex, pageIndex, layerIndex}) {
        if (state.tabs[tabIndex].children[pageIndex]) {
            state.tabs[tabIndex].children[pageIndex].close(layerIndex)
        }
    },

    editLayer (state, {tabIndex, pageIndex, layerIndex, text}) {
        if (state.tabs[tabIndex].children[pageIndex]) {
            state.tabs[tabIndex].children[pageIndex].children[layerIndex].text = text
        }
    }
}
