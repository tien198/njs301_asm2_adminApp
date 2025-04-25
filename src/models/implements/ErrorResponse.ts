import IErrorResponse from "../interfaces/IErrorResponse";

export default class ErrorResponse implements IErrorResponse {
    constructor(
        public message: string,
        public status: number,
        public error?: {}
    ) { }
}