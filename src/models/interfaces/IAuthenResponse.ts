export default interface IAuthRes {
    token: string
    user: IUserInfo
}

export interface IUserInfo {
    userName?: string
    fullName?: string
    phoneNumber?: string
    email?: string
    isAdmin: boolean
}