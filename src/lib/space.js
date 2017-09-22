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

export function generateSpaceFromAH (a, h) {
    if (a < h || a < 0 || h < 0) {
        throw new Error('a:' + a + ',h:' + h)
    }
    return DOTS_TO_SPACE[11].str.repeat(a - h) + (DOTS_TO_SPACE[11].str + HALF_SPACE).repeat(h)
}

export function adjustWithUnicode (adjuster) {
    if (adjuster >= 11) {
        throw new Error('Adjuster is ' + adjuster)
    }
    if (adjuster === 0) {
        return ''
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
    let gap = 0
    let adjust = true
    switch (mod) {
    case 0:
        a = Math.floor(sp / 11)
        break
    case 1:
    case 2:
    case 3:
    case 4:
        a = Math.floor(sp / 11)
        h = 1
        gap = 5 - mod
        break
    case 5:
        if (sp === 5) {
            return DOTS_TO_SPACE[5].str
        }
        a = Math.floor(sp / 11)
        h = 1
        adjust = false
        break
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        a = Math.floor(sp / 11)
        gap = 11 - mod
        break
    }

    if (mod !== 0 && mod !== 5 && a * 11 + h * 5 !== sp) {
        if (mod <= 4) {
            // console.log(gap, a - gap, h + 2 * gap)
            if (a - gap >= h + 2 * gap &&
                gap >= 0 &&
                a >= gap
            ) {
                a -= gap
                h += 2 * gap
                adjust = false
            } else {
                h = 0
            }
        } else {
            // console.log('a', gap, a, a - gap, h + 2 * gap)
            if (a - gap >= h + 2 * gap &&
                gap >= 0 &&
                a >= gap
            ) {
                a -= gap
                h += 2 * gap
                if ((a + 1) * 11 + h * 5 === sp) {
                    a++
                }
                adjust = false
            }
        }
    }
    if (a < h) {
    }
    // console.log(a, h, sp, mod)

    return generateSpaceFromAH(a, h) + adjustWithUnicode(adjust ? mod : 0)
}
