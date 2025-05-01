type props = {
    children?: React.ReactNode
}

export default function Tr({ children }: props) {
    return (
        <tr className="border-b h-14 hover:bg-gray-50">
            {children}
        </tr>
    )
}