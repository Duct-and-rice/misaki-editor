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

export default function (sp) {
    if (typeof sp !== 'number') {
        throw new TypeError()
    }
    console.log(DOTS_TO_SPACE)
    const mod = sp % 11
    if (mod === 0) {
        return DOTS_TO_SPACE[11].str.repeat(sp / 11)
    }
    console.log(sp)
    return ''
}
