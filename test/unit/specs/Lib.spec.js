/* eslint no-duplicate-imports:0 */
import {DOMRuler, CanvasRuler} from '@/lib/ruler'
import WebFont from 'webfontloader'

function rulerSpeed (ruler, num, label) {
    console.time(label)
    for (let i = 0; i < num; i++) {
        ruler.getWidth(i + '')
    }
    console.timeEnd(label)
}

describe('Ruler', function () {
    describe('Singleton', function () {
        it('DOMRuler must be a singleton', function () {
            const a = new DOMRuler()
            const b = new DOMRuler()
            expect(a).to.equal(b)
        })

        it('CanvasRuler must be a singleton', function () {
            const a = new CanvasRuler()
            const b = new CanvasRuler()
            expect(a).to.equal(b)
        })
    })

    describe('Width', function () {
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
        it('DOMRuler Spaces', function () {
            const ruler = new DOMRuler()
            expect(ruler.getWidth(' ')).to.equal(5)
            expect(ruler.getWidth('　')).to.equal(11)
        })
        it('CanvasRuler Spaces', function () {
            const ruler = new CanvasRuler()
            expect(ruler.getWidth(' ')).to.equal(5)
            expect(ruler.getWidth('　')).to.equal(11)
        })
        it('Measure DOMRuler Speed', function () {
            this.timeout(10000)
            const ruler = new DOMRuler()
            rulerSpeed(ruler, 10000, 'DOMRuler')
        })
        it('Measure CanvasRuler Speed', function () {
            this.timeout(10000)
            const ruler = new CanvasRuler()
            rulerSpeed(ruler, 10000, 'CanvasRuler')
        })
    })
})
