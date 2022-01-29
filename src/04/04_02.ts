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

export function demolishHouses(city: CityType, street: string) {
city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildStaffGreaterThen(buildings: Array<GovernmentBuildingsType>,
                                         staff: number) {
    return buildings.filter(b => b.staffCount > staff)
}