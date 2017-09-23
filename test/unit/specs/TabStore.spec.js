import mutations from '../../../src/store/tab/mutations'
import * as actions from '../../../src/store/tab/actions'
import types from '../../../src/store/tab/mutation-types'

describe('Store', function () {
    describe('Mutations', function () {
        it('addTab', function () {
            const store = {tabs: []}
            mutations.addTab(store, {title: 'test'})
            expect(store.tabs[0]).to.have.property('title', 'test')
        })
    })
    describe('Actions', function () {
        it('addNewTab', function (done) {
            const commit = (type, newTab) => {
                expect(type).to.equal(types.ADD_TAB)
                expect(newTab).to.have.property('title', 'New Tab')
                done()
            }
            actions.addNewTab({commit})
        })
    })
})
