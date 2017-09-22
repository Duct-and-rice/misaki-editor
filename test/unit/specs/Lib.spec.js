import {DOMRuler, CanvasRuler} from '@/lib/ruler'
import {SPACES, generateSpaceFromAH, adjustWithUnicode, default as widthSpace} from '@/lib/space'
import WebFont from 'webfontloader'

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
        this.timeout(10000)
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
            expect(ruler.getWidth('')).to.equal(0)
            expect(ruler.getWidth(' ')).to.equal(5)
            expect(ruler.getWidth('　')).to.equal(11)
        })
        it('CanvasRuler Spaces', function () {
            const ruler = new CanvasRuler()
            expect(ruler.getWidth('')).to.equal(0)
            expect(ruler.getWidth(' ')).to.equal(5)
            expect(ruler.getWidth('　')).to.equal(11)
        })
        it('Special Spaces', function () {
            const ruler = new CanvasRuler()
            for (const space of SPACES) {
                expect(ruler.getWidth(space.str)).to.equal(space.dots)
            }
        })
        it('Parallel Ruler', function (done) {
            const ruler = new CanvasRuler()
            Promise.all(SPACES.map(space =>
                new Promise(resolve => {
                    expect(ruler.getWidth(space.str)).to.equal(space.dots)
                    resolve()
                })
            )).then(() => done())
        })
    })
})

describe('widthSpace', function () {
    it('Ideographic Space', function () {
        expect(widthSpace(11)).to.equal('　')
    })
    it('Spaces', function () {
        const ruler = new CanvasRuler()
        for (let i = 1; i < 50; i++) {
            const sp = widthSpace(i)
            console.log(i, sp.replace(/ /g, 'H').replace(/\u3000/g, 'A'))
            expect(ruler.getWidth(sp)).to.equal(i)
            expect(sp.charAt(0)).not.to.equal(' ')
            expect(sp).not.to.include('  ')
        }
    })
    it('Adjust with Unicode', function () {
        const ruler = new CanvasRuler()
        expect(ruler.getWidth(adjustWithUnicode(1))).to.equal(1)
    })
    describe('Error Check', function () {
        it('generateSpaceFromAH', function () {
            expect(() => generateSpaceFromAH(-1, -1)).to.throw()
        })
        it('adjustWithUnicode', function () {
            expect(() => adjustWithUnicode(50)).to.throw()
        })
        it('widthSpace', function () {
            expect(() => widthSpace('a')).to.throw()
        })
    })
})
