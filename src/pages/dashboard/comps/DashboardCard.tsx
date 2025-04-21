type props = {
    stats: {
        users: number,
        orders: number,
        earnings: number,
        balance: number,
    }
}

const DashboardCards = ({ stats }: props) => {
    return (
        <div className="grid grid-cols-4 gap-6 mb-10">
            {Object.entries(stats).map(([label, value]) => (
                <div key={label} className="rounded-xl shadow p-5">
                    <h4 className="text-sm text-gray-500 uppercase">{label}</h4>
                    <p className="text-2xl font-semibold mt-2">
                        {label === "earnings" || label === "balance" ? `$ ${value}` : value}
                    </p>
                </div>
            ))}
        </div>
    );
};





export default DashboardCards;
