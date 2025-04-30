import { ChangeEvent } from "react";

type props = {
    label: string;
    rows?: number;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({ label, rows = 2, value, onChange }: props) {
    return (
        <>
            <label className="font-medium">{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                className="border border-gray-400 p-2 rounded"
                rows={rows}
                placeholder="give comma between room numbers."
            />
        </>
    );
}