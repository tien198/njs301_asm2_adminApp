import { LoaderFunctionArgs } from "react-router";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import getWithToken from "../../utilities/fetchWithToken";
import TransTable from "./comps/TransTable";
import { ILoader } from "./dataModels/interfaces/ILoader";
import { initialLoaderAdminPages } from "../AdminRoot";

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

export function loader(args: LoaderFunctionArgs): ILoader {
    initialLoaderAdminPages()
    
    const param = args.request.url.split('?')[1]
    const searchParams = new URLSearchParams(param)
    const page = searchParams.get('page') || '0'
    const limit = searchParams.get('limit') || '10'

    const trans = getWithToken(BackendAdminUri.getTransactions + `?page=${page}&limit=${limit}`)

    return { trans }
}