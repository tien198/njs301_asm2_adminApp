import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import ErrorModal from "../components/Modal/ErrorModal"


export default function Root() {

    return <>
        <Navbar />
        <Outlet />
        <ErrorModal/>
    </>
}
