import {StudentType} from "../02/02_01";
import {addSkill, studentActive, studentRelocate} from "./03";

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Evgeniy',
        age: 33,
        isActive: false,
        address: {
            streetTitle: 'Kirova',
            city: {
                title: 'Moscow',
                countryTitle: 'Russia',
            },
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'JavaScript'
            },
            {
                id: 3,
                title: 'React'
            },
        ]
    }
})

test('new skill should be added', () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "Angular")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('Angular')
})

test('student should become active', () => {
    expect(student.isActive).toBe(false)
    studentActive(student)
    expect(student.isActive).toBe(true)

})

test('student should live in Barcelona', () => {
    expect(student.address.city.title).toBe('Moscow')
    studentRelocate(student)
    expect(student.address.city.title).toBe('Barcelona')

})