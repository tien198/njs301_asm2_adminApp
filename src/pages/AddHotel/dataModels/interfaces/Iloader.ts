export default interface ILoader {
    roomTitles: Promise<IRoom[] | undefined>
    typeNames: Promise<IType[] | undefined>
}

export interface IRoom {
    _id: string
    title: string
}

export interface IType {
    _id: string
    name: string
}