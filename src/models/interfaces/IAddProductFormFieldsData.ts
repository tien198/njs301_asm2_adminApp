export default interface IAddProductFormFieldsData {
    name: string
    type: string
    city: string
    address: string
    distance: string
    title: string
    price: string
    desc: string
    images: string
    featured: 'true' | 'false'
    rooms: string[]
}
