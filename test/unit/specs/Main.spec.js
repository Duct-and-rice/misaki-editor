import Vue from 'vue'
import Vuex from 'vuex'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VuePhotonkit from 'vue-photonkit'

describe('Main.vue', function () {
    before(function () {
        Vue.use(VuePhotonkit)
        Vue.use(Vuex)
        Vue.component('app-header', Header)
        Vue.component('app-footer', Footer)
    })
})
