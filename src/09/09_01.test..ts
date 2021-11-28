function increaseAge(u: UserType) {
    u.age = u.age + 1
}

type UserType = {
    name: string
    age: number
}

test('big test', () => {
    let user = {
        name: 'Dimych',
        age: 32
    }

    increaseAge(user)

    expect(user.age).toBe(33)
})