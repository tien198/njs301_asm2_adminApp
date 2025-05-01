import StorageEnum from '../enums/storageEnum'
import AuthRes, { IUserInfo } from '../../models/interfaces/IAuthenResponse'


export function addJwt(authRes: AuthRes) {
    localStorage.setItem(StorageEnum.authenToken, authRes.token)
    localStorage.setItem(StorageEnum.userInfor, JSON.stringify(authRes.user))
}

export function getJwtToken() {
    return localStorage.getItem(StorageEnum.authenToken) || ''
}

export function getUserInfor(): IUserInfo {
    const inforJson = localStorage.getItem(StorageEnum.userInfor)
    const userInfor = JSON.parse(inforJson!)
    return userInfor
}

    export function removeJwt() {
        localStorage.removeItem(StorageEnum.authenToken)
        localStorage.removeItem(StorageEnum.userInfor)
    }