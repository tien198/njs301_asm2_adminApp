import { Status } from "../../../../components/StatusBage"

export interface ITransaction {
    _id: string
    user: {
        userRef: string
        userName: string
    }
    hotelRef: {
        name: string
    }
    rooms: [
        {
            roomId: string
            roomNumbers: string[]
            _id: string
        }
    ]
    startDate: string
    endDate: string
    price: number
    payment: string
    status: Status

}

// result may undefined if fetch api fail !
export type LoaderResult = ITransaction[] | undefined

export interface ILoader {
    trans: Promise<LoaderResult>
}