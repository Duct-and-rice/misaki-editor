import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TabGroup from '@/components/TabGroup'
import LayerSelectors from '@/components/LayerSelectors'

describe('Main.vue', function () {
    it('data is a function', function () {
        expect(Main.data).to.be.a('function')
    })
})

describe('Header.vue', function () {
    it('data is a function', function () {
        expect(Header.data).to.be.a('function')
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
