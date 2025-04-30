export default interface IOption {
    label?: string
    value: string | boolean
    // the id is used to determine the key of the option Array in jsx
    id?: string
}