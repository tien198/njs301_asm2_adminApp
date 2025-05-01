import styleCSS from './Table.module.scss'

type props = {
    headers: string[]
    children?: React.ReactNode
}

export default function Table({ headers, children }: props) {
    return (
        <table className={styleCSS.table}>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    {headers.map((header) =>
                        <th key={header+Math.random().toFixed(3)}>{header}</th>
                    )}
                </tr>
            </thead>

                {/* children is <tbody> and <tfoot> */}
                {children}
                
        </table>
    )
}