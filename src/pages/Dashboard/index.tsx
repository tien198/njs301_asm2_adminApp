import { LoaderFunctionArgs, useLoaderData } from "react-router";

import ILoader from "./dataModels/ILoader";
import { BackendAdminUri } from "../../utilities/enums/backendUri";

import DashboardCards from "./comps/DashboardCard";
import TransactionTable from "./comps/TransactionTable";
import getWithToken from "../../utilities/fetchWithToken";




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

    // get infor from `BackendAdminUri`
    const usersTotal = getWithToken(BackendAdminUri.getUsersTotal)
    const transactionsTotal = getWithToken(BackendAdminUri.getTransactionsTotal)
    const revenueTotal = getWithToken(BackendAdminUri.getRevenueTotal)
    const balance = getWithToken(BackendAdminUri.getBalance)
    const lastTransactions = getWithToken(BackendAdminUri.lastTransactions)

    return {
        usersTotal, transactionsTotal, revenueTotal, balance, lastTransactions
    }
}



