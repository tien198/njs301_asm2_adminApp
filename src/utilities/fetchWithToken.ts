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
        return Promise.resolve(undefined)
        })
}