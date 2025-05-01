type props = {
    headers: string[]
    children?: React.ReactNode
}

export default function Table({ headers, children }: props) {
    return (
        <table className="w-full text-sm mt-4">
            <thead className="text-left bg-gray-100">
                <tr className="h-14">
                    <th><input type="checkbox" /></th>
                    {headers.map((header) =>
                        <th key={header+Math.random().toFixed(3)}>{header}</th>
                    )}
                </tr>
            </thead>
            <tbody>

                {/* The body will be filled by the child component */}
                {children}
                
            </tbody>
        </table>
    )
}