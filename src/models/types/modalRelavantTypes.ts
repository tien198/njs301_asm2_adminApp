import IConfirm from "../interfaces/IDeleleteConfirm"
import IErrorResponse from "../interfaces/IErrorResponse"

/** HiddenState is css class that defind display of Modal */
export type HiddenState = 'hidden' | 'fading-hidden' | ''

/** infors display in modal */
export type ModalInfors = IErrorResponse | IConfirm

/** modalType to specify what's the Modal type to show */
export type ModalType = 'error' | 'confirm' | ''