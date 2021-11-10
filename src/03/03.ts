import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(sum(1, 2), sum(1, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true
}

export function doesStudentLiveIn(student: StudentType, cityName: string) {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, stuffCountToFire: number) => {
    building.staffCount -= stuffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, stuffCountToHire: number) => {
    building.staffCount += stuffCountToHire
}

export const createMessage = (city: CityType) => {
return `Hello ${city.title}citizens! All ${city.citizenNumber}men.`
}

