const ages = [12, 18, 19, 22, 89, 90, 91, 100]

const predicate = (age: number) => age > 90

export const oldAges = [91, 100]

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'HTML', price: 100},
    {title: 'CSS', price: 150},
    {title: 'React', price: 300},
]

export const cheapPredicate = (course: CourseType) => course.price < 160

const cheapCourses = [
    {title: 'HTML', price: 100},
    {title: 'CSS', price: 150},
]