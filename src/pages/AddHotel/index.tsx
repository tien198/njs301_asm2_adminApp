import HotelForm from "./comps/HotelForm";

export default function AddHotel() {
    return (
        <>
            <div className="shadow p-6 my-5 font-semibold text-gray-400">
                Add New Product
            </div>
            <div className="p-10 rounded-xl shadow">
                <HotelForm />
            </div>
        </>
    )
}