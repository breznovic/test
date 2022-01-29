import {addMoney, CityType, incStaff, repairHouse, returnMoney} from "./03_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100, street: {
                    title: 'White street'
                }
            }
        },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100, street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101, street: {
                        title: 'Happy street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 200, street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    number: 200, street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('new budget for HOSPITAL', () => {
    addMoney(city, 100000)
    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('new budget for FIRE-STATION', () => {
    returnMoney(city, -100000)
    expect(city.governmentBuildings[1].budget).toBe(600000)
})

test('houses must be repaired', () => {
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    incStaff(city.governmentBuildings[1], 2000)
    expect(city.governmentBuildings[1].staffCount).toBe(3000)
})