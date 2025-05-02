import IErrorResponse from "./IErrorResponse"

// infors display in modal
export type ModalInfors = IErrorResponse | {}

export default interface IModalData {
    hiddenClass: string
    modalInfors: ModalInfors
}