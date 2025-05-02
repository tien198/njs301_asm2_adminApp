import { MouseEventHandler, ReactNode } from 'react'

type props = {
    value?: string
    children?: ReactNode
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ value, children, className, onClick }: props) {
    return (
        <button
            onClick={onClick}
            className={className ?? 'bg-teal-700 text-white py-2 px-20 rounded mt-4 hover:bg-teal-800'}>
            {value ?? children ?? 'send'}
        </button>
    )
}