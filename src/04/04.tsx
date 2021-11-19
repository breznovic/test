const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100]

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {
        title: 'CSS',
        price: 110
    },
    {
        title: 'JS',
        price: 200
    },
    {
        title: 'React',
        price: 150
    }
]

const cheapPredicate = (props: CourseType) => {
return courses.price < 160
}

const cheapCourses = [
    {
        title: 'CSS',
        price: 110
    },
    {
        title: 'React',
        price: 150
    }
]