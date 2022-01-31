import {UserType} from "./09";

function incAge(user: UserType) {
    user.age++
}

test('should increase age', () => {

    let user = {
        id: 101,
        name: 'Dimych',
        age: 32
    }

    incAge(user)

    expect(user.age).toBe(33)
})