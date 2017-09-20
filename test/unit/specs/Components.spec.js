import Vue from 'vue'
import Vuex from 'vuex'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabGroup from '@/components/TabGroup'
import store from '@/store'
import VuePhotonkit from 'vue-photonkit'
import LayerSelectors from '@/components/LayerSelectors'

function getInstance (Component, propsData) {
    const vm = new Vue({
        template: '<test></test>',
        store,
        components: {
            'test': Component
        }
    }).$mount()
    return vm
}

describe('Components', function () {
    before(function () {
        Vue.use(Vuex)
        Vue.use(VuePhotonkit)
        Vue.component('app-header', Header)
        Vue.component('app-footer', Footer)
    })
    describe('Main.vue', function () {
        it('data is a function', function () {
            expect(Main.data).to.be.a('function')
        })
        it('content', function () {
            const vm = getInstance(Main)
            expect(vm.$el.querySelector('h1.title').textContent)
                .to.equal('Misaki Editor')
        })
    })

    describe('Header.vue', function () {
        it('data is a function', function () {
            expect(Header.data).to.be.a('function')
        })
        it('default header title', function () {
            const vm = getInstance(Header)
            expect(vm.$el.querySelector('.title').textContent)
                .to.equal('Misaki Editor')
        })
    })

    describe('Footer.vue', function () {
        it('data is a function', function () {
            expect(Footer.data).to.be.a('function')
        })
    })

    describe('TabGroup.vue', function () {
        it('data is a function', function () {
            expect(TabGroup.data).to.be.a('function')
        })
    })
    describe('LayerSelectors.vue', function () {
        it('data is a function', function () {
            expect(LayerSelectors.data).to.be.a('function')
        })
    })
})
