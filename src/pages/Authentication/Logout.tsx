import { redirect } from 'react-router'
import { removeJwt } from '../../utilities/localStorageUtils/authenToken'

export function action() {
    removeJwt()

    return redirect('/')
}