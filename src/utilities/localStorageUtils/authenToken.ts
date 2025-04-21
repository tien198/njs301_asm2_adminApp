import StorageEnum from '../enums/storageEnum'
import AuthRes from '../../models/interfaces/IAuthenResponse'


export function addJwt(authRes: AuthRes) {
    localStorage.setItem(StorageEnum.authenToken, authRes.token)
    localStorage.setItem(StorageEnum.userInfor, JSON.stringify(authRes.user))
}

export function getJwtToken() {
    return localStorage.getItem(StorageEnum.authenToken)
}

export function getUserInfor() {
    const inforJson = localStorage.getItem(StorageEnum.userInfor)
    return inforJson
}


export function removeJwt() {
    localStorage.removeItem(StorageEnum.authenToken)
    localStorage.removeItem(StorageEnum.userInfor)
}