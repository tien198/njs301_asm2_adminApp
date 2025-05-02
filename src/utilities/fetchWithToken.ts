import IErrorResponse from "../models/interfaces/IErrorResponse"
import store from "../store"
import { reInitState } from "../store/slices/modalSlice"
import { getJwtToken } from "./localStorageUtils/authenToken"

export default function getWithToken(uri: string, requestInit?: RequestInit) {
    const jwtToken = getJwtToken()
    if (!jwtToken)
        return Promise.resolve(undefined)

    const reqInit = requestInit ?? { headers: { 'authorization': jwtToken } }

    return fetch(uri, reqInit)
        .then(res => {
            if (res.ok)
                return res.json()

            return res.json()
                .then(err => { throw err })
        }
        ).catch(err => {
            console.error(err)
            store.dispatch(reInitState({
                hiddenClass: '',
                modalInfors: err as IErrorResponse,
                type: 'error'
            }))
            return Promise.resolve(undefined)
        })
}