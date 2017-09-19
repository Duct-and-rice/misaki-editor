import mutations from '../../../src/store/mutations'

const { addTab } = mutations
describe('Store', function () {
    describe('Mutations', function () {
        it('addTab', function () {
            const store = {tabs: []}
            addTab(store, {title: 'test'})
            expect(store.tabs[0]).to.have.property('title', 'test')
        })
    })
})
