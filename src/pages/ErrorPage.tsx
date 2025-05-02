import { useRouteError } from "react-router";
import IErrorResponse from "../models/interfaces/IErrorResponse";

export default function ErrorPage() {
    const error = useRouteError() as IErrorResponse;
    console.error(error)

    let errorList = []
    for (const err in error.errors) {
        errorList.push(err)
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-7 md:gap-10">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* <i>{error.statusText || error.message }</i> */}
                <i className="font-bold text-5xl">{error.status || error.message}</i>
            </p>
            {/* <p>{error.name}</p> */}
            <div>
                {errorList.map(i => <p>{i}</p>)}
            </div>
        </div>
    );
}