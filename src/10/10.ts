export type UserType = {
    id: number
    name: string
    age: number
    address: {
        city: string
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export const user: UserType = {
    id: 101,
    name: 'Dimych',
    age: 32,
    address: {
        city: 'Minsk',
        house: 12
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function moveUserToHouse(u: UserWithLaptopType & UserWithBooksType,
                                house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(l: UserWithLaptopType, title: string) {
    return {
        ...l,
        laptop: {
            ...l.laptop,
            title: title
        }
    }
}