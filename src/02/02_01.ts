export type CityStudentType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityStudentType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>

}

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