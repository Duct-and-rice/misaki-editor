import {CanvasRuler} from '@/lib/ruler'
import {generateSpaceFromAH, adjustWithUnicode, default as widthSpace} from '@/lib/space'
import wasm from '@/lib/space.c'
describe('Space', function () {
    it('Ideographic Space', function () {
        expect(widthSpace(11)).to.equal('　')
    })
    it('Spaces', function () {
        const ruler = new CanvasRuler()
        for (let i = 1; i < 1000; i++) {
            const sp = widthSpace(i)
            expect(ruler.getWidth(sp)).to.equal(i)
            expect(sp.charAt(0)).not.to.equal(' ')
            expect(sp).not.to.include('  ')
        }
    })
    it('Adjust with Unicode', function () {
        const ruler = new CanvasRuler()
        expect(ruler.getWidth(adjustWithUnicode(1))).to.equal(1)
    })
    it('generateSpaceFromAH returns half space', function () {
        expect(generateSpaceFromAH(0, 1)).to.equal(' ')
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
    describe('Wasm', function (done) {
        wasm.initialize().then(module => {
            const result = module._roll_dice()
            console.log(result)
            done()
        })
    })
})
