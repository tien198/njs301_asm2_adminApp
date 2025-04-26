import { ReactNode } from "react";

type props = {
    children: ReactNode
}

export default function FieldContainer({ children }: props) {
    return (
        <div className="flex flex-col mb-4 gap-1">
            {children}
        </div>
    );
}

