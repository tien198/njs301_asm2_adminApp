import { ReactNode, Suspense } from "react"
import Fallback from "./Fallback"
import { Await } from "react-router"

type awaitProps = {
    resoleve: Promise<any>,
    children: ReactNode | ((val: any) => ReactNode) | ReactNode[] | ((val: any) => ReactNode[])
}


export default function ReactRouterAwait({ resoleve, children }: awaitProps) {
    return <Suspense fallback={<Fallback />}>
        <Await resolve={resoleve}>
            {children}
        </Await>
    </Suspense>
}