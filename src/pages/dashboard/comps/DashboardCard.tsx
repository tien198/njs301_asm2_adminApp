import { ReactNode, Suspense } from "react";
import ILoader from "../dataModels/ILoader";
import ReactRouterAwait from "../../../components/ReactRouterAwait";

type props = {
    loader: ILoader
}


export default function DashboardCards({ loader }: props) {
    // titleArr sort by ILoader properties order
    const titleArr = ['Users', 'Orders', 'Earnings', 'Balance']
    // the index of `keys` match to index of `titleArr`
    const keys = Object.keys(loader)
    return (
        <div className="grid grid-cols-4 gap-6 mb-10">
            {titleArr.map((title, i) => (
                <div key={title} className="rounded-xl shadow p-5">
                    <h4 className="text-sm text-gray-500 uppercase">{title}</h4>
                    <ReactRouterAwait resoleve={loader[keys[i]]} >{(val: string) =>
                        <p className="text-2xl font-semibold mt-2">{val}</p>
                    }
                    </ReactRouterAwait>
                </div>
            ))
            }
        </div>
    );
};

