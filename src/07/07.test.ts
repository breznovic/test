import {PropsManType} from "./07";

let props: PropsManType

beforeEach(() => {
    props = {
        name: 'Evgeniy',
        age: 33,
        lessons: [{title: 'React'}, {title: 'JavaScript'}]
    }
})

test('testing data', () => {

    const {age, lessons} = props

    const a = props.age

    const l = props.lessons

    expect(age).toBe(33)
    expect(lessons.length).toBe(2)

    expect(a).toBe(33)
    expect(l.length).toBe(2)
})

test('Destruct array', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('React')
    expect(l2.title).toBe('JavaScript')

    expect(ls1.title).toBe('React')
    expect(ls2.title).toBe('JavaScript')
})