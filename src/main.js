// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Header from './components/Header'
import Footer from './components/Footer'
import router from './router'
import VuePhotonkit from 'vue-photonkit'
import 'photon/dist/css/photon.css'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VuePhotonkit)
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App, 'app-header': Header }
})
