export type HotelType = 'Apartments' | 'Resorts' | 'Cabins' | 'Hotels' | 'Villas'
export type HotelFeatured = 'true' | 'false'

export default interface IAddHotelFormFieldsData {
    name: string
    type: HotelType
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
