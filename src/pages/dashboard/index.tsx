import { LoaderFunctionArgs } from "react-router";

export default function Dashboard() {
    return (
        <div className="h-screen flex justify-center items-center bg-amber-200">
            Hello
        </div>
    );
}

export function loader(args: LoaderFunctionArgs) {

}