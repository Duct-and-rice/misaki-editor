// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
// import * as ruler from './lib/ruler'
import router from './router'
import VuePhotonkit from 'vue-photonkit'
import 'photon/dist/css/photon.css'
import './assets/fonts.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VuePhotonkit)
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

// const domRuler = new ruler.DOMRuler()
// const canvasRuler = new ruler.CanvasRuler()

// console.time('DOM')
// for (let i = 0; i < 10000; i++) {
//     domRuler.getWidth(i + '')
// }
// console.timeEnd('DOM')
// console.time('Canvas')
// for (let i = 0; i < 10000; i++) {
//     canvasRuler.getWidth(i + '')
// }
// console.timeEnd('Canvas')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
