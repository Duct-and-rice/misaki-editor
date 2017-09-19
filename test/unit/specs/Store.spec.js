import { mutations } from '../../../src/store'

const { ADD_TAB } = mutations
describe('Store', function () {
    describe('Mutations', function () {
        it('mutations has ADD_TAB', function () {
            const store = []
            ADD_TAB(store, {title: 'test'})
            expect(store[0]).to.have.property('title', 'test')
        })
    })
})
