// components/HotelForm.jsx
import { FaLaptopHouse } from "react-icons/fa";
import use2wayBinding from "../../../cusHooks/use2wayBinding";
import Input from "./Input";
import SelectField from "./SelectField";
import { ChangeEvent, useState } from "react";



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

  return (
    <form className=" grid grid-cols-2 gap-6">
      <Input label="Name" value={name} onChange={onChangeName} />
      <Input label="Type" value={type} onChange={onChangeType} />
      <Input label="City" value={city} onChange={onChangeCity} />
      <Input label="Address" value={address} onChange={onChangeAddress} />
      <Input label="Distance from City Center" value={distance} onChange={onChangeDistance} />
      <Input label="Title" value={title} onChange={onChangeTitle} />
      <Input label="Price" type="number" value={price} onChange={onChangePrice} />
      <Input label="Description" value={desc} onChange={onChangeDesc} />
      <Input label="Images" value={images} onChange={onChangeImages} />
      <SelectField
        label="Featured"
        value={featured}
        onChange={onChangeFeatured}
        options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
        name="featured"
      />
      <div className="col-span-2">
        <label className="font-medium mb-1 block">Rooms</label>
        <select
          name="rooms"
          multiple
          value={rooms}
          onChange={
            e => setRooms(Array.from(e.target.selectedOptions, (option) => option.value))
          }
          className="w-full border border-gray-300 rounded px-3 py-2 h-32"
        >
          <option>2 Bed Room</option>
          <option>1 Bed Room</option>
          <option>Basement Double Room</option>
          <option>Superior basement room</option>
          <option>Deluxe Room</option>
        </select>
      </div>
      <div>
        <button className="col-span-2 bg-teal-700 text-white py-2 px-20 rounded mt-4 hover:bg-teal-800">
          Send
        </button>
      </div>
    </form>
  );
}
