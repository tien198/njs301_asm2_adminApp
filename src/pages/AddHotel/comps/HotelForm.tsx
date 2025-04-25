// components/HotelForm.jsx
import { FaLaptopHouse } from "react-icons/fa";
import use2wayBinding from "../../../cusHooks/use2wayBinding";
import Input from "./Input";
import Select from "./Select";
import FieldContainer from "./FieldContainer";
import IOption from "../dataModels/interfaces/IOption";



export default function HotelForm() {
  const [name, , onChangeName] = use2wayBinding('')
  const [type, , onChangeType] = use2wayBinding('')
  const [city, , onChangeCity] = use2wayBinding('')
  const [address, , onChangeAddress] = use2wayBinding('')
  const [distance, , onChangeDistance] = use2wayBinding('')
  const [title, , onChangeTitle] = use2wayBinding('')
  const [price, , onChangePrice] = use2wayBinding('')
  const [desc, , onChangeDesc] = use2wayBinding('')
  const [images, , onChangeImages] = use2wayBinding('')
  const [featured, , onChangeFeatured] = use2wayBinding(FaLaptopHouse)
  const [rooms, setRooms,] = use2wayBinding([])


  const types = ['Apartments', 'Resorts', 'Cabins', 'Hotels', 'Villas']
  const typeOpts: IOption[] = types.map(i => ({ value: i }))

  const featuredOpts: IOption[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ]

  const roomsIn = ['2 Bed Room', '1 Bed Room', 'Basement Double Room', 'Superior basement room', 'Deluxe Room',]
  const roomsOpts: IOption[] = roomsIn.map(i => ({ value: i }))

  return (
    <form className=" grid grid-cols-2 gap-6">
      <FieldContainer children={
        <Input label="Name" value={name} onChange={onChangeName} />} />

      <FieldContainer children={
        <Select label="Type" value={type} onChange={onChangeType} options={typeOpts} />} />

      <FieldContainer children={
        <Input label="City" value={city} onChange={onChangeCity} />} />

      <FieldContainer children={
        <Input label="Address" value={address} onChange={onChangeAddress} />} />

      <FieldContainer children={
        <Input label="Distance from City Center" value={distance} onChange={onChangeDistance} />} />

      <FieldContainer children={
        <Input label="Title" value={title} onChange={onChangeTitle} />} />

      <FieldContainer children={
        <Input label="Price" type="number" value={price} onChange={onChangePrice} />} />

      <FieldContainer children={
        <Input label="Description" value={desc} onChange={onChangeDesc} />} />

      <FieldContainer children={
        <Input label="Images" value={images} onChange={onChangeImages} />} />

      <FieldContainer children={
        <Select label="Featured" value={featured} onChange={onChangeFeatured} options={featuredOpts} />} />

      <div className="col-span-2">
        <Select label="Rooms"
          multiple value={rooms}
          onChange={e => setRooms(Array.from(e.target.selectedOptions, (option) => option.value))}
          options={roomsOpts}
          className="w-full border border-gray-300 rounded px-3 py-2 h-32"
        />
      </div>

      <div>
        <button className="col-span-2 bg-teal-700 text-white py-2 px-20 rounded mt-4 hover:bg-teal-800">
          Send
        </button>
      </div>
    </form>
  );
}
