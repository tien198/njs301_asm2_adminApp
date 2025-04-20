export default interface AuthRes {
    token: string
    user: {
        userName?: string
        fullName?: string
        phoneNumber?: string
        email?: string
        isAdmin: boolean
    }
}