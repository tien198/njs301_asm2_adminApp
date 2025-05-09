export type HotelFeatured = 'true' | 'false'

export default interface IHotelForm {
    name: string
    type: string
    city: string
    address: string
    distance: string
    title: string
    price: string
    desc: string
    images: string
    featured: HotelFeatured
    rooms: string[]
}
