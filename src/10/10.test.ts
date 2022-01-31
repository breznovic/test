import {moveUser, moveUserToHouse, upgradeUserLaptop, user, UserWithBooksType, UserWithLaptopType} from "./10";


test('change address', () => {

    let user: UserWithLaptopType = {
        id: 101,
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Krasnodar')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Krasnodar')
    expect(user.laptop).toBe(movedUser.laptop)
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType = {
        id: 101,
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userCopy = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('MacBook')
    expect(user.laptop.title).toBe('ZenBook')
})

test('upgrade laptop to macbook', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        id: 101,
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS', 'React', 'Angular', 'TypeScript']
    }

    const userCopy = moveUserToHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.laptop.title).toBe(user.laptop.title)
    expect(userCopy.address.house).toBe(99)
})