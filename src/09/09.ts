export type UserType = {
    id: number
    name: string
    age: number
}

export const u: UserType = {
    id: 101,
    name: 'Dimych',
    age: 32
}

function incAge(u: UserType) {
    u.age++
}