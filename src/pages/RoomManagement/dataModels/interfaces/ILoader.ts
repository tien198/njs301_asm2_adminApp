export interface IRoom {
    _id: string
    desc: string
    maxPeople: number
    price: number
    roomNumbers: string[],
    title: string
}

// result may undefined if fetch api fail !
export type LoaderResult = IRoom[] | undefined

export default interface ILoader {
    rooms: Promise<LoaderResult>
}