interface Props {
    msg: string
    textColor?: string
    className?: string
}

export default function ErrorMsg({ msg, textColor, className }: Props) {
    return (
        <div className={className ?? `h-8' ${textColor || 'text-red-700'} duration-300`}>
            <b className="block"> {msg} </b>
        </div>
    )
}