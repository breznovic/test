export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export const addMoney = (city: CityType, budget: number) => {
    city.governmentBuildings[0].budget += budget
}

export const returnMoney = (city: CityType, budget: number) => {
    city.governmentBuildings[1].budget -= budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const incStaff = (governmentBuildingsType: GovernmentBuildingsType, hireStaff: number) => {
    governmentBuildingsType.staffCount += hireStaff

}