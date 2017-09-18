/* eslint no-duplicate-imports:0 */
import DOMRuler from '@/lib/ruler'
import DOMRuler2 from '@/lib/ruler'

describe('DOMRuler', () => {
    it('DOMRuler must be a singleton', () => {
        let a = new DOMRuler()
        let b = new DOMRuler2()
        expect(a).to.equal(b)
    })
})
