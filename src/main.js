// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import router from './router'
import VuePhotonkit from 'vue-photonkit'
import 'photon/dist/css/photon.css'
import './assets/fonts.css'
import wasm from './lib/space.cpp'
// import {DOMRuler} from './lib/ruler.js'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VuePhotonkit)
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
// const ruler = new DOMRuler()
wasm.initialize().then(module => console.log((module.UTF8ToString(module._test()))))

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    store
})
