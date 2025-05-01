export interface IHotel {
    _id: string
    name: String
    type: string
    city: string
}

// result may undefined if fetch api fail !
export type LoaderResult = IHotel[] | undefined

export default interface ILoader {
    hotels: Promise<LoaderResult>,
}