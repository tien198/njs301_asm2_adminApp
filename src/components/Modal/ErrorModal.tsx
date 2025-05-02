import { useNavigate } from "react-router"
import IErrorResponse from "../../models/interfaces/IErrorResponse"
import Modal from "./Modal"
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri"
import Button from "../formLayout/Button"
import { useAppDispatch, useAppSelector } from "../../cusHooks/reduxHooks"
import { setModalHidden } from "../../store/slices/modalSlice"


export default function ErrorModal() {
    const errorRes = useAppSelector(state =>state.modal.modalInfors) as IErrorResponse

    return (
        <Modal>
            <div className="w-full p-10 shadow flex flex-col items-center justify-center gap-7">
                <span className="text-lg font-bold">{errorRes.status}</span>
                <span>{errorRes.message}</span>
                {errorRes.status === 401 && <LoginRedirector  />}
            </div>
        </Modal>
    )
}


function LoginRedirector() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handLogIn = () => {
        dispatch(setModalHidden('fading-hidden'))
        navigate(AdminAppUri_Absolute.login)
    }

    const handCancel = () => dispatch(setModalHidden('fading-hidden'))

    return (
        <div className="flex justify-between gap-10">
            <span><Button onClick={handLogIn}>Log In</Button></span>
            <span><Button isBgWhite onClick={handCancel}>Cancel</Button></span>
        </div>
    )
}