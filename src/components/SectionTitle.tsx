type props = {
    title: string
}

export default function SectionTitle({ title }: props) {
    return (
        <div className='shadow p-6 my-5 font-semibold text-gray-400'>
            {title}
        </div>
    )
}