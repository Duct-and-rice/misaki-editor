/* eslint no-unused-vars:0 */
import Vue from 'vue'
import * as types from './mutation-types'

export default {
    addTab (state, tab) {
        state.tabs.push(tab)
    },

    selectTab (state, index) {
        state.current = index
    }
}
