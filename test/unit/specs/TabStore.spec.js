import mutations from '../../../src/store/tab/mutations'
import * as actions from '../../../src/store/tab/actions'
import types from '../../../src/store/tab/mutation-types'

describe('Store', function () {
    describe('Mutations', function () {
        it('add', function () {
            const store = {tabs: []}
            mutations.add(store, {title: 'test'})
            expect(store.tabs[0]).to.have.property('title', 'test')
        })

        it('select', function () {
            const store = {tabs: []}
            mutations.select(store, 0)
            expect(store.current).to.equal(0)
        })

        it('select', function () {
            const store = {tabs: []}
            mutations.add(store, {title: 'test'})
            mutations.select(store, 0)
            expect(store.tabs.length).to.equal(1)
        })
    })
    describe('Actions', function () {
        it('add', function (done) {
            const commit = (type, newTab) => {
                expect(type).to.equal(types.ADD)
                expect(newTab).to.have.property('title', 'New Tab')
                done()
            }
            actions.add({commit})
        })

        it('select', function (done) {
            const commit = (type, index) => {
                expect(type).to.equal(types.SELECT)
                expect(index).to.equal(0)
                done()
            }
            actions.select({commit}, 0)
        })

        it('close', function (done) {
            const commit = (type, index) => {
                expect(type).to.satisfy(type => type === types.CLOSE || type === types.SELECT)
                expect(index).to.equal(0)
                done()
            }
            actions.close({commit}, 0)
        })
    })
})
