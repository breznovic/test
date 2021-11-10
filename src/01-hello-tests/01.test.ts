import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {

    const result = sum(a, b)
    const result2 = sum(a, c)

    expect(result).toBe(3)
    expect(result2).toBe(4)
})

test('multiply should be correct', () => {

    const result = mult(a, b)
    const result2 = mult(a, c)

    expect(result).toBe(2)
    expect(result2).toBe(3)
})

test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friend!'
    const sent2 = 'React is my friend!'

    const result = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result.length).toBe(3)
    expect(result[0]).toBe('hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friend')

    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('react')
    expect(result2[1]).toBe('is')
    expect(result2[2]).toBe('my')
    expect(result2[3]).toBe('friend')

})