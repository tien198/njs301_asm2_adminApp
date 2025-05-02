
/**
 * Inform pass to Redux store to open confirm modal
 * @param {string} confirmMsg - the message display in Modal
 * @param {string} id - Id of the deleted item
 */
export default interface IConfirm {
    confirmMsg: string
    id: string
}