export const SPACES = Object.freeze([
    {dots: 1, str: '\u200a', name: 'HAIR SPACE', unicode: true},
    {dots: 2, str: '\u2009', name: 'THIN SPACE', unicode: true},
    {dots: 3, str: '\u2006', name: 'SIX-PER-EM SPACE', unicode: true},
    {dots: 4, str: '\u2005', name: 'FOUR-PER-EM SPACE', unicode: true},
    {dots: 5, str: '\u2004', name: 'THREE-PER-EM SPACE', unicode: true},
    {dots: 5, str: '\u0020', name: 'SPACE', unicode: false},
    {dots: 8, str: '\u2002', name: 'EN SPACE', unicode: true},
    {dots: 10, str: '\u2007', name: 'FIGURE SPACE', unicode: true},
    {dots: 11, str: '\u3000', name: 'IDEOGRAPHIC SPACE', unicode: false},
    {dots: 16, str: '\u2003', name: 'EN SPACE', unicode: true}
])
const HALF_SPACE = '\u0020'

const DOTS_TO_SPACE = Object.freeze((() => {
    const result = []
    for (const space of SPACES) {
        if (space.name === 'SPACE') {
            continue
        }
        result[space.dots] = space
    }
    return result
})())

function generateSpaceFromAH (a, h) {
    if (a < h || a < 0 || h < 0) {
        throw new Error()
    }
    return DOTS_TO_SPACE[11].str.repeat(a - h) + (DOTS_TO_SPACE[11].str + HALF_SPACE).repeat(h)
}

function adjustWithUnicode (adjuster) {
    if (adjuster >= 11) {
        throw new Error()
    }
    let res = ''
    if (adjuster > 5) {
        adjuster -= 5
        res = HALF_SPACE
    }
    res = DOTS_TO_SPACE[adjuster].str + res
    return res
}

export default function widthSpace (sp) {
    if (typeof sp !== 'number') {
        throw new TypeError()
    }
    const mod = sp % 11
    let a = 0
    let h = 0
    if (mod === 0) {
        a = sp / 11
    } else {
        a = (Math.floor(sp / 11) + 1)
        console.log(a)
        while (a * 11 + h * 5 !== sp) {
            a -= 1
            h += 2
            if (a < h) {
                const adjuster = sp - Math.floor(sp / 11) * 11
                return DOTS_TO_SPACE[11].str.repeat(Math.floor(sp / 11)) + adjustWithUnicode(adjuster)
            }
        }
    }
    return generateSpaceFromAH(a, h)
}
