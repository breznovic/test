import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
        id: 1,
        name: 'Evgen',
        age: 33,
        isActive: false,
        address: {
            country: 'Russia',
            city: {
                title: 'Moscow',
                street: '1905 goda'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'React'
            },
            {
                id: 2,
                title: 'TypeScript'
            },
            {
                id: 3,
                title: 'JavaScript'
            }
        ]
    }
})

test('student should be made active', () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test('student lives in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow')
    let result2 = doesStudentLiveIn(student, 'Minsk')
    expect(result1).toBe(true)
    expect(result1).toBe(false)
})