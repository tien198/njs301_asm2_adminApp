// components/HotelForm.jsx
import FormField from "./FormField";
import SelectField from "./SelectField";
import { useState } from "react";

export default function HotelForm() {
  const [form, setForm] = useState({
    name: "",
    type: "hotel",
    city: "",
    address: "",
    distance: "",
    title: "",
    price: "",
    desc: "",
    images: "",
    featured: false,
    rooms: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="p-6 grid grid-cols-2 gap-6">
      <FormField label="Name" value={form.name} onChange={handleChange} name="name" />
      <FormField label="Type" value={form.type} onChange={handleChange} name="type" />
      <FormField label="City" value={form.city} onChange={handleChange} name="city" />
      <FormField label="Address" value={form.address} onChange={handleChange} name="address" />
      <FormField label="Distance from City Center" value={form.distance} onChange={handleChange} name="distance" />
      <FormField label="Title" value={form.title} onChange={handleChange} name="title" />
      <FormField label="Price" type="number" value={form.price} onChange={handleChange} name="price" />
      <FormField label="Description" value={form.desc} onChange={handleChange} name="desc" />
      <FormField label="Images" value={form.images} onChange={handleChange} name="images" />
      <SelectField
        label="Featured"
        value={form.featured}
        onChange={handleChange}
        options={[{ label: "Yes", value: true }, { label: "No", value: false }]}
        name="featured"
      />
      <div className="col-span-2">
        <label className="font-medium mb-1 block">Rooms</label>
        <select
          name="rooms"
          multiple
          value={form.rooms}
          onChange={(e) =>
            setForm({ ...form, rooms: Array.from(e.target.selectedOptions, (option) => option.value) })
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
      <button type="submit" className="col-span-2 bg-teal-700 text-white py-2 rounded mt-4 hover:bg-teal-800">
        Send
      </button>
    </form>
  );
}
