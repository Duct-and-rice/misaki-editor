import Vue from 'vue'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VuePhotonkit from 'vue-photonkit'

describe('Main.vue', function () {
    before(function () {
        Vue.use(VuePhotonkit)
        Vue.component('app-header', Header)
        Vue.component('app-footer', Footer)
    })
    it('should render correct contents at the header', function () {
        const Constructor = Vue.extend(Main)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.main header .title').textContent)
            .to.equal('Misaki Editor')
    })
})
