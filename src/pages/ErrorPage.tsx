import { useRouteError } from "react-router";
import IErrorResponse from "../models/interfaces/IErrorResponse";

export default function ErrorPage() {
    const error = useRouteError() as IErrorResponse;
    console.error(error)

    let errorList = []
    for (const er in error.errors) {
        errorList.push(er)
    }

    return (
        <div className="flex flex-col justify-center items-center w-screen">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {/* <i>{error.statusText || error.message }</i> */}
                <i>{error.status || error.message}</i>
            </p>
            {/* <p>{error.name}</p> */}
            <div>
                {errorList.map(i => <p>{i}</p>)}
            </div>
        </div>
    );
}