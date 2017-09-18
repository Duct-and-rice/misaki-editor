import DOMRuler from '@/lib/ruler'

describe('DOMRuler', () => {
    it('DOMRuler must be a singleton', () => {
        let a = new DOMRuler()
        let b = new DOMRuler()
        expect(a).to.equal(b)
    })
})
