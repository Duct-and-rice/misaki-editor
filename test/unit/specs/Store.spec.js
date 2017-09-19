import { mutations } from '../../../src/store'

describe('Store', function () {
    describe('Mutations', function () {
        it('mutations has ADD_TAB', function () {
            expect(mutations).to.have.property('ADD_TAB', 'addTab')
        })
    })
})
