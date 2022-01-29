import {CourseType} from "./04";

test('should choose old people', () => {
    const ages = [12, 18, 19, 22, 89, 90, 91, 100]
    const predicate = (age: number) => age > 90

    const oldAges = ages.filter(predicate)
    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(91)
})

test('should choose cheap courses', () => {
    const courses = [
        {title: 'HTML', price: 100},
        {title: 'CSS', price: 150},
        {title: 'React', price: 300},
    ]
    const cheapPredicate = (course: CourseType) => course.price < 160

    const cheapCourses = courses.filter(cheapPredicate)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('HTML')
})

test('get only completed tasks', () => {
    // type TaskType = {
    //     id: number
    //     title: string
    //     isDone: boolean
    // }

    const tasks = [
        {id: 1, title: 'Learn', isDone: true},
        {id: 2, title: 'Buy bread', isDone: false},
        {id: 3, title: 'Walk', isDone: false},
    ]

    const completedTasks = tasks.filter(task => task.isDone)
    expect(completedTasks.length).toBe(1)
    expect(completedTasks[0].title).toBe('Learn')
})