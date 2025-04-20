import { LoaderFunctionArgs } from "react-router";
import { BackendAdminUri } from "../../utilities/enums/backendUri";

export default function Dashboard() {
    return (
        <div className="h-screen flex justify-center items-center bg-amber-200">
            Hello
        </div>
    );
}

export function loader(args: LoaderFunctionArgs) {
    // get infor from `BackendAdminUri`
    // const getUsersTotal = fetch(BackendAdminUri.getUsersTotal,{
    //     method:'get',
    //     headers:{
    //         'authorization': // create login page and jwtUtilities
    //     }
    // })
}