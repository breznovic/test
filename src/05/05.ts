export type StreetType = {
    title: string
}

export type AddressType = {
    number: number
    street: StreetType
}

export type HouseType = {
    id?: number
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

export const govStreets = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const streetTitle = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: Array<HouseType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}!`)
}