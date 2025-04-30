import { MouseEventHandler, ReactNode } from 'react'

type props = {
    value?: string
    children?: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ value, children, onClick }: props) {
    return (
        <button
            onClick={onClick}
            className='bg-teal-700 text-white py-2 px-20 rounded mt-4 hover:bg-teal-800'>
            {value ?? children ?? 'send'}
        </button>
    )
}