import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabGroup from '@/components/TabGroup'
import AAArea from '@/components/AAArea'
import store from '@/store'
import VuePhotonkit from 'vue-photonkit'

function getInstance (Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({propsData, store}).$mount()
    return vm
}

const baseState = Object.freeze(_.cloneDeep(store.state))

describe('Components', function () {
    before(function () {
        Vue.use(Vuex)
        Vue.use(VuePhotonkit)
        Vue.component('app-header', Header)
        Vue.component('app-footer', Footer)
        store.replaceState(null)
        store.replaceState(baseState)
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
        it('currentTab', function () {
            const vm = getInstance(Main)
            vm.$store.dispatch('tab/addTab')
            vm.$store.dispatch('tab/addTab')
            vm.currentTabIndex = 1
            expect(vm.$store.state.tab.currentIndex).to.equal(1)
        })
        it('closeTab', function () {
            const vm = getInstance(Main)
            vm.$store.state.tab.tabs.length = 1
            vm.$store.dispatch('tab/addTab')
            vm.$store.dispatch('tab/addTab')
            vm.closeTab({tabIndex: 1})
            expect(vm.$store.state.tab.tabs.length).to.equal(2)
        })
        it('close page', function () {
            const vm = getInstance(Main)
            vm.addAtCurrentTab()
            vm.addAtCurrentTab()
            vm.closePage({tabIndex: 0, pageIndex: 2})
            expect(vm.currentTab.size).to.equal(2)
        })
        it('set text', function () {
            const vm = getInstance(Main)
            vm.text = 'x'
            expect(vm.currentLayer.text).to.equal('x')
        })
        it('select layer', function () {
            const vm = getInstance(Main)
            vm.addAtCurrentPage()
            vm.currentLayerIndex = 1
            expect(vm.currentPage.currentIndex).to.equal(1)
        })
        it('select page', function () {
            const vm = getInstance(Main)
            vm.addAtCurrentTab()
            vm.currentPageIndex = 1
            expect(vm.currentTab.currentIndex).to.equal(1)
        })
        it('close layer', function () {
            const vm = getInstance(Main)
            vm.currentPage.children.length = 1
            vm.addAtCurrentPage()
            vm.addAtCurrentPage()
            vm.closeLayer({tabIndex: 0, pageIndex: 0, layerIndex: 1})
            expect(vm.currentPage.size).to.equal(2)
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
        it('click', function (done) {
            const vm = getInstance(TabGroup, {tabs: [{title: ''}, {title: ''}]})
            vm.$on('update:current', value => {
                expect(value).to.equal(1)
                done()
            })
            vm.onClick(1)
        })
        it('add', function (done) {
            const vm = getInstance(TabGroup, {tabs: [{title: ''}, {title: ''}]})
            vm.$on('add', () => {
                done()
            })
            vm.addNew()
        })
        it('close', function (done) {
            const vm = getInstance(TabGroup, {tabs: [{title: ''}, {title: ''}]})
            vm.$on('close', value => {
                expect(value).to.equal(1)
                done()
            })
            vm.onClickClose(1)
        })
    })

    describe('AAArea.vue', function () {
        it('update', function (done) {
            let page = 'a'
            const vm = getInstance(AAArea, {'value': page})
            vm.$on('update:value', value => {
                expect(value).to.equal(page)
                done()
            })
            vm.$el.dispatchEvent(new Event('input'))
        })
    })
})
