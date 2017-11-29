import {DOMRuler, CanvasRuler} from '@/lib/ruler'
import {SPACES} from '@/lib/space'
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
        before(function (done) {
            WebFont.load({
                custom: {
                    families: ['Stmr']
                },
                loading: function () {
                    console.log('loading')
                },
                active: function () {
                    console.log('active')
                    done()
                },
                inactive: function () {
                    console.log('inactive')
                    done()
                },
                fontloading: function (familyName, fvd) {
                    console.log('fontloading', familyName, fvd)
                },
                fontactive: function (familyName, fvd) {
                    console.log('fontactive', familyName, fvd)
                },
                fontinactive: function (familyName, fvd) {
                    console.log('fontinactive', familyName, fvd)
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
    describe('Locking', function () {
        it('DOMRuler Spaces', function () {
            const ruler = new DOMRuler()
            ruler.isLock = true
            expect(() => ruler.getWidth('')).to.throw()
            ruler.isLock = false
        })
        it('CanvasRuler Spaces', function () {
            const ruler = new CanvasRuler()
            ruler.isLock = true
            expect(() => ruler.getWidth('')).to.throw()
            ruler.isLock = false
        })
    })
})
