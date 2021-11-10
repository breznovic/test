type LocalCityType = {
    title: string
    street: string
}

type AddressType = {
    country: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
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