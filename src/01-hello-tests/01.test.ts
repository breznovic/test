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

    const result1 = sum(a, b)
    const result2 = sum(a, c)
    const result3 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(4)
    expect(result3).toBe(5)

})

test('multiply should be correct', () => {

    const result1 = mult(a, b)
    const result2 = mult(a, c)
    const result3 = mult(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(3)
    expect(result3).toBe(6)

})

test('splitting in to words should be correct', () => {

    const sent1 = 'Hello, amigo'
    const sent2 = 'Hello, comrade'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('Hello')
    expect(result2.length).toBe(3)
    expect(result2[2]).toBe('friend')
})