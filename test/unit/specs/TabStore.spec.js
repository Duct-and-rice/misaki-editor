import mutations from '../../../src/store/tab/mutations'
import * as actions from '../../../src/store/tab/actions'
import types from '../../../src/store/tab/mutation-types'

describe('Store', function () {
    describe('Mutations', function () {
        it('addTab', function () {
            const store = {tabs: []}
            mutations.addTab(store, {tab: {title: 'test'}})
            expect(store.tabs[0]).to.have.property('title', 'test')
        })

        it('selectTab', function () {
            const store = {tabs: []}
            mutations.selectTab(store, {tabIndex: 0})
            expect(store.currentIndex).to.equal(0)
        })

        it('selectTab', function () {
            const store = {tabs: []}
            mutations.addTab(store, {tab: {title: 'test'}})
            mutations.selectTab(store, {tabIndex: 0})
            expect(store.tabs.length).to.equal(1)
        })
    })
    describe('Actions', function () {
        it('addTab', function (done) {
            const commit = (type, {tab: newTab}) => {
                expect(type).to.equal(types.ADD_TAB)
                expect(newTab).to.have.property('title', 'New Tab')
                done()
            }
            actions.addTab({commit})
        })

        it('select', function (done) {
            const commit = (type, {tabIndex}) => {
                expect(type).to.equal(types.SELECT_TAB)
                expect(tabIndex).to.equal(0)
                done()
            }
            actions.selectTab({commit}, {tabIndex: 0})
        })

        it('close', function (done) {
            const commit = (type, {tabIndex}) => {
                expect(type).to.satisfy(type => type === types.CLOSE_TAB || type === types.SELECT_TAB)
                expect(tabIndex).to.equal(0)
                done()
            }
            actions.closeTab({commit}, {tabIndex: 0})
        })
    })
})
