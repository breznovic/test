import {users, UserType} from "./08";

beforeEach(() => {
    let users = {
        '0': {id: 101, name: 'Dimych'},
        '1': {id: 3232, name: 'Natasha'},
        '2': {id: 1012, name: 'Valera'},
        '3': {id: 101, name: 'Katya'},
    }
})

test('should choose correct name', () => {
    expect(users[0].name).toBe('Dimych')
    expect(users[1].name).toBe('Natasha')
    expect(users[2].name).toBe('Valera')
    expect(users[3].name).toBe('Katya')
})