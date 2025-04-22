import { LoaderFunctionArgs, redirect, useLoaderData } from "react-router";

import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import { getJwtToken } from "../../utilities/localStorageUtils/authenToken";

import Sidebar from "./comps/Sidebar";
import DashboardCards from "./comps/DashboardCard";
import TransactionTable from "./comps/TransactionTable";

import ILoader from "./dataModels/ILoader";



export default function Dashboard() {
    const loader: ILoader = useLoaderData()
    const lastTransactions = loader.lastTransactions
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-64 p-8 min-h-screen w-full">
                <DashboardCards loader={loader} />
                <TransactionTable transactions={lastTransactions} />
            </main>
        </div>
    );
}


export function loader(args: LoaderFunctionArgs): ILoader {
    const jwtToken = getJwtToken()

    function getWithUri(uri: BackendAdminUri) {
        return fetch(uri, { headers: { 'authorization': jwtToken! } })
            .then(res => {
                if (res.ok)
                    return res.json()

                return res.json()
                    .then(err => { throw err })
            }
            ).catch(err => {
                console.error(err)
                return NaN
            })
    }
    // get infor from `BackendAdminUri`
    const usersTotal = getWithUri(BackendAdminUri.getUsersTotal)
    const transactionsTotal = getWithUri(BackendAdminUri.getTransactionsTotal)
    const revenueTotal = getWithUri(BackendAdminUri.getRevenueTotal)
    const balance = getWithUri(BackendAdminUri.getBalance)
    const lastTransactions = getWithUri(BackendAdminUri.lastTransactions)

    return {
        usersTotal, transactionsTotal, revenueTotal, balance, lastTransactions
    }
}



