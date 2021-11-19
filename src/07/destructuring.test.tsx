test('', () => {
    let props = {
        name: 'Evgen',
        age: 33,
        lessons: [{title: '1'},{title: '2'}]
    }

    const {age, lessons} = props

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

})