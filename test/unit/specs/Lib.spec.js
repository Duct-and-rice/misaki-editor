/* eslint no-duplicate-imports:0 */
import {DOMRuler, CanvasRuler} from '@/lib/ruler'
import WebFont from 'webfontloader'

describe('Ruler', () => {
    describe('Singleton', () => {
        it('DOMRuler must be a singleton', () => {
            const a = new DOMRuler()
            const b = new DOMRuler()
            expect(a).to.equal(b)
        })

        it('CanvasRuler must be a singleton', () => {
            const a = new CanvasRuler()
            const b = new CanvasRuler()
            expect(a).to.equal(b)
        })
    })

    describe('Width', () => {
        before(done => {
            WebFont.load({
                custom: {
                    families: ['Stmr']
                },
                fontactive: () => {
                    done()
                }
            })
        })
        it('DOMRuler Spaces', done => {
            const ruler = new DOMRuler()
            expect(ruler.getWidth(' ')).to.equal(5)
            expect(ruler.getWidth('　')).to.equal(11)
            done()
        })
        it('CanvasRuler Spaces', done => {
            const ruler = new CanvasRuler()
            expect(ruler.getWidth(' ')).to.equal(5)
            expect(ruler.getWidth('　')).to.equal(11)
            done()
        })
    })
})
