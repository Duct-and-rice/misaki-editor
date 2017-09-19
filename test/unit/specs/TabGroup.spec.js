import Vue from 'vue'
import TabGroup from '@/components/TabGroup'
import VuePhotonkit from 'vue-photonkit'

describe('TabGroup.vue', function () {
    before(function () {
        Vue.use(VuePhotonkit)
    })
    it('data is a function', function () {
        expect(TabGroup.data).to.be.a('function')
    })
    it('tabs is a array', function () {
        expect(TabGroup.data().tabs).to.be.a('Array')
    })
})
