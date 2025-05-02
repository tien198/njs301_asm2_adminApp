import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import ErrorModal from "../components/Modal/ErrorModal"
import { useAppSelector } from "../cusHooks/reduxHooks"


export default function Root() {
    const modalType = useAppSelector(state => state.modal.type)
    return <>
        <Navbar />
        <Outlet />
        {modalType === 'error' && <ErrorModal />}
    </>
}
