export default interface ITransaction {
    _id: string
    user: {
        userName: string
    }
    hotelRef: {
        name: string
    }
    rooms: [
        { roomNumbers: string[] }
    ]
    startDate: string
    endDate: string
    price: number
    payment: string
    status: string
}