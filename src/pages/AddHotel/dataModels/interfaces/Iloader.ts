export default interface ILoader {
    roomTitles: Promise<IRoom[]>
    typeNames: Promise<IType[]>
}

export interface IRoom {
    _id: string
    title: string
}

export interface IType {
    _id: string
    name: string
}