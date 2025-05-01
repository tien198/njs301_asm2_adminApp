import IAuthenResponse, { IUserInfo } from '../interfaces/IAuthenResponse'

export default class AuthenResponse implements IAuthenResponse {
    constructor(
        public token: string,
        public user: IUserInfo
    ) { }
}