import { BackendAdminUri } from "../../utilities/enums/backendUri";
import getWithToken from "../../utilities/fetchWithToken";
import TransTable from "./comps/TransTable";
import { ILoader } from "./dataModels/interfaces/ILoader";

export default function TransManagement() {

    return (
        <>
            <div className="flex justify-between ">
                <h1 className="text-gray-500 text-2xl">Hotel List</h1>
            </div>
            <TransTable />
        </>
    );
}

export function loader(): ILoader {
    const trans = getWithToken(BackendAdminUri.getTransactions)
    
    return {
        trans
    }
}