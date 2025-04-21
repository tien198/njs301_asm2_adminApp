import { LoaderFunctionArgs, redirect } from "react-router";

import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import { getJwtToken } from "../../utilities/localStorageUtils/authenToken";

import Sidebar from "./comps/Sidebar";
import DashboardCards from "./comps/DashboardCard";
import TransactionTable from "./comps/TransactionTable";


import { dashboardStats, transactions } from "./data";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="ml-64 p-8 min-h-screen w-full">
                <DashboardCards stats={dashboardStats} />
                <TransactionTable transactions={transactions} />
            </main>
        </div>
    );
}

export function loader(args: LoaderFunctionArgs) {
    const jwtToken = getJwtToken()
    if (!jwtToken) {
        alert('Unauthorize! Please login admin user!')
        return redirect(AdminAppUri_Absolute.login)
    }
    // get infor from `BackendAdminUri`
    const getUsersTotal = fetch(BackendAdminUri.getUsersTotal, {
        method: 'get',
        headers: {
            'authorization': jwtToken!
        }
    })
}