import { useAppSelector } from "../../cusHooks/reduxHooks";
import Modal from "./Modal";


export default function AlertModal() {
    const alertInfor = useAppSelector(state => state.modal.modalInfors)
    return (
        <Modal>
            <div className="w-full p-10 shadow flex flex-col items-center justify-center gap-7">
                <span className="text-lg font-bold">{alertInfor.status}</span>
                <span>{alertInfor.message}</span>
                {alertInfor.status === 401 && <LoginRedirector />}
            </div>
        </Modal>
    )
}