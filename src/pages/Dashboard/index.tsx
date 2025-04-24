import { LoaderFunctionArgs, useLoaderData } from "react-router";

import ILoader from "./dataModels/ILoader";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { getJwtToken } from "../../utilities/localStorageUtils/authenToken";

import DashboardCards from "./comps/DashboardCard";
import TransactionTable from "./comps/TransactionTable";




export default function Dashboard() {
    const loader: ILoader = useLoaderData()
    const lastTransactions = loader.lastTransactions
    return (
        <main className="min-h-screen w-full">
            <DashboardCards loader={loader} />
            <TransactionTable transactions={lastTransactions} />
        </main>
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



