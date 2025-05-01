
export type Status = 'Booked' | 'Checkin' | 'Checkout'


type stateProps = {
    status: Status
}

enum StatusMap {
    Booked = "bg-red-200 text-red-800",
    Checkin = "bg-green-200 text-green-800",
    Checkout = "bg-purple-200 text-purple-800",
};

export default function StatusBadge({ status }: stateProps) {

    return (
        <span className={`px-3 py-1 text-sm rounded-full ${StatusMap[status]}`}>
            {status}
        </span>
    );
};