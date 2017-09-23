/* eslint no-unused-vars:0 */
import Vue from 'vue'
import * as types from './mutation-types'

export default {
    add (state, tab) {
        state.tabs.push(tab)
    },

    select (state, index) {
        state.current = index
    },

    close (state, index) {
        state.tabs.splice(index, 1)
    }
}
