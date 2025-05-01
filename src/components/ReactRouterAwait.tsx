import { ReactNode, Suspense } from "react"
import Fallback from "./Fallback"
import { Await } from "react-router"

type awaitProps = {
    resoleve: Promise<any>,
    fallback?: ReactNode,
    children: ReactNode | ((val: any) => ReactNode | ReactNode[])
}


export default function ReactRouterAwait({ resoleve, fallback, children }: awaitProps) {
    return <Suspense fallback={fallback ?? <Fallback />}>
        <Await resolve={resoleve}>
            {children}
        </Await>
    </Suspense>
}