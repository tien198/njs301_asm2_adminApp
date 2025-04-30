type Hotel = {
    _id: string
    name: string
}

export default interface ILoader {
    hotels: Promise<Hotel[]>
}