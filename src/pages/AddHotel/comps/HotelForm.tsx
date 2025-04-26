import { useState } from "react";
import Input from "./Input";
import Select from "./Select";
import FieldContainer from "./FieldContainer";
import IOption from "../dataModels/interfaces/IOption";
import { useHotelFormDispatch, useHotelFormSelector } from "../cusHooks/useReduxStateManipulate";
import { setRooms } from '../../../store/slices/addProductFormSlice'
import useValidateFields from "../cusHooks/useValidateFields";
import ErrorMsg from "../../Authentication/comps/ErrorMsg";



export default function HotelForm() {
  const formFieldsData = useHotelFormSelector()
  const {
    name, type, city, address, distance, title, price, desc, images, featured, rooms
  } = formFieldsData
  const {
    onChangeName, onChangeType, onChangeCity, onChangeAddress, onChangeDistance, onChangeTitle, onChangePrice, onChangeDesc, onChangeImages, onChangeFeatured
  } = useHotelFormDispatch()

  const {
    nameErrorMsg, typeErrorMsg, cityErrorMsg, addressErrorMsg, distanceErrorMsg, titleErrorMsg, priceErrorMsg, descErrorMsg, imagesErrorMsg, featuredErrorMsg, roomsErrorMsg
  } = useValidateFields(formFieldsData)

  const types = ['Apartments', 'Resorts', 'Cabins', 'Hotels', 'Villas']
  const typeOpts: IOption[] = types.map(i => ({ value: i }))

  const featuredOpts: IOption[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ]

  const roomsIn = ['2 Bed Room', '1 Bed Room', 'Basement Double Room', 'Superior basement room', 'Deluxe Room',]
  const roomsOpts: IOption[] = roomsIn.map(i => ({ value: i }))

  const [isSubmit, setIsSubmit] = useState(false)
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmit(true)
    const isValid = useValidateFields(formFieldsData)
    if (isValid) {
      // Handle form submission
      console.log("Form submitted successfully");
    } else {
      console.log("Form has errors");
    }
  }

  return (
    <form onSubmit={onSubmit} className=" grid grid-cols-2 gap-6">
      <FieldContainer>
        <Input label="Name" value={name} onChange={onChangeName} />
        {isSubmit && <ErrorMsg msg={nameErrorMsg && nameErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Select label="Type" value={type} onChange={onChangeType} options={typeOpts} />
        {isSubmit && <ErrorMsg msg={typeErrorMsg && typeErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="City" value={city} onChange={onChangeCity} />
        {isSubmit && <ErrorMsg msg={cityErrorMsg && cityErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Address" value={address} onChange={onChangeAddress} />
        {isSubmit && <ErrorMsg msg={addressErrorMsg && addressErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Distance from City Center" value={distance} onChange={onChangeDistance} />
        {isSubmit && <ErrorMsg msg={distanceErrorMsg && distanceErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Title" value={title} onChange={onChangeTitle} />
        {isSubmit && <ErrorMsg msg={titleErrorMsg && titleErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Price" type="number" value={price} onChange={onChangePrice} />
        {isSubmit && <ErrorMsg msg={priceErrorMsg && priceErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Description" value={desc} onChange={onChangeDesc} />
        {isSubmit && <ErrorMsg msg={descErrorMsg && descErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Images" value={images} onChange={onChangeImages} />
        {isSubmit && <ErrorMsg msg={imagesErrorMsg && imagesErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Select label="Featured" value={featured} onChange={onChangeFeatured} options={featuredOpts} />
        {isSubmit && <ErrorMsg msg={featuredErrorMsg && featuredErrorMsg} />}
      </FieldContainer>

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
