import {StudentType} from "../02/02_01";

const student: StudentType = {
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

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function studentActive(student: StudentType) {
    student.isActive = true
}

export function studentRelocate(student: StudentType) {
    student.address.city.title = 'Barcelona'
}