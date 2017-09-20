import mutations from '../../../src/store/mutations'
import * as actions from '../../../src/store/actions'
import types from '../../../src/store/mutation-types'

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
