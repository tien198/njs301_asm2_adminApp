type props = {
    msg: string
    textColor?: string
    fontWeight?: 'font-bold' | 'font-light'
    fontStyle?: 'italic' | 'underline'
    className?: string
}

export default function ErrorMsg({ msg, textColor, fontWeight="font-bold", fontStyle, className }: props) {
    return (
        <div className={className ?? `h-8 pt-1 ${textColor || 'text-red-700'}`}>
            <span className={fontWeight + ' ' + fontStyle}>{msg}</span>
        </div>
    )
}