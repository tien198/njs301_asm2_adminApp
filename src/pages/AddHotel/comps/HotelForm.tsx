import { useEffect, useState } from "react";
import Input from "./Input";
import Select from "./Select";
import FieldContainer from "./FieldContainer";
import ErrorMsg from "../../Authentication/comps/ErrorMsg";

import IOption from "../dataModels/interfaces/IOption";

import { useAppDispath } from "../../../cusHooks/reduxHooks";
import { setRooms } from '../../../store/slices/addProductFormSlice'
import { useHotelFormDispatch, useHotelFormSelector } from "../cusHooks/useReduxStateManipulate";
import useValidateFields from "../cusHooks/useValidateFields";
import { useLoaderData } from "react-router";
import ILoader, { IRoom, IType } from "../dataModels/interfaces/Iloader";



export default function HotelForm() {
  const dispatch = useAppDispath()
  const loader: ILoader = useLoaderData()

  const formFieldDatas = useHotelFormSelector()
  const { name, type, city, address, distance, title, price, desc, images, featured, rooms }
    = formFieldDatas

  // 2-way binding. All the field was stored in Redux state
  const { onChangeName, onChangeType, onChangeCity, onChangeAddress, onChangeDistance, onChangeTitle, onChangePrice, onChangeDesc, onChangeImages, onChangeFeatured }
    = useHotelFormDispatch()

  // validate fields
  const { nameErrorMsg, cityErrorMsg, addressErrorMsg, distanceErrorMsg, titleErrorMsg, priceErrorMsg, descErrorMsg, imagesErrorMsg, roomsErrorMsg
  } = useValidateFields(formFieldDatas)


  const [types, setTypes] = useState<IType[]>([{ _id: '', name: '' }])
  useEffect(() => {
    loader.typeNames.
      then(typeNames => setTypes(typeNames))

  }, [loader])
  const typeOpts: IOption[] = types && types.map(i => ({ value: i._id, label: i.name }))


  const featuredOpts: IOption[] = [
    { label: 'Yes', value: true },
    { label: 'No', value: false },
  ]


  const [roomsTiles, setRoomTitles] = useState<IRoom[]>([{ _id: '', title: '' }])
  useEffect(() => {
    loader.roomTitles
      .then(roomTitles => setRoomTitles(roomTitles))
  }, [loader])
  const roomsOpts: IOption[] = roomsTiles.map(i => ({ value: i._id, label: i.title }))

  

  const [isSubmit, setIsSubmit] = useState(false)
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmit(true)
    const isNotValid = nameErrorMsg && cityErrorMsg && addressErrorMsg && distanceErrorMsg && titleErrorMsg && priceErrorMsg && descErrorMsg && imagesErrorMsg && roomsErrorMsg

    if (isNotValid)
      return console.log("Form has errors");
    // Handle form submission
    console.log(formFieldDatas);
  }

  return (
    <form onSubmit={onSubmit} className=" grid grid-cols-2 gap-6">
      <FieldContainer>
        <Input label="Name" value={name} onChange={onChangeName} />
        {isSubmit && <ErrorMsg msg={nameErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Select label="Type" value={type} onChange={onChangeType} options={typeOpts} />
        {isSubmit && <ErrorMsg fontWeight="font-light" fontStyle="italic" msg='Make sure that you choose the type you need before submit' />}
      </FieldContainer>

      <FieldContainer>
        <Input label="City" value={city} onChange={onChangeCity} />
        {isSubmit && <ErrorMsg msg={cityErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Address" value={address} onChange={onChangeAddress} />
        {isSubmit && <ErrorMsg msg={addressErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Distance from City Center" value={distance} onChange={onChangeDistance} />
        {isSubmit && <ErrorMsg msg={distanceErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Title" value={title} onChange={onChangeTitle} />
        {isSubmit && <ErrorMsg msg={titleErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Price" type="number" value={price} onChange={onChangePrice} />
        {isSubmit && <ErrorMsg msg={priceErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Description" value={desc} onChange={onChangeDesc} />
        {isSubmit && <ErrorMsg msg={descErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Input label="Images" value={images} onChange={onChangeImages} />
        {isSubmit && <ErrorMsg msg={imagesErrorMsg} />}
      </FieldContainer>

      <FieldContainer>
        <Select label="Featured" value={featured} onChange={onChangeFeatured} options={featuredOpts} />
        {isSubmit && <ErrorMsg fontWeight="font-light" fontStyle="italic" msg='Make sure the feature that you need before sumit' />}
      </FieldContainer>

      <div className="col-span-2">
        <Select label="Rooms"
          multiple
          value={rooms}
          // dispath Redux reducer function
          onChange={e => dispatch(setRooms(Array.from(e.target.selectedOptions, (option) => option.value)))}
          options={roomsOpts}
          className="w-full border border-gray-300 rounded px-3 py-2 h-32"
        />
        {isSubmit && roomsErrorMsg && <ErrorMsg msg={roomsErrorMsg} />}
        {isSubmit && <ErrorMsg fontWeight="font-light" fontStyle="italic" msg='Make sure the rooms that you have before sumit' />}
      </div>

      <div>
        <button className="col-span-2 bg-teal-700 text-white py-2 px-20 rounded mt-4 hover:bg-teal-800">
          Send
        </button>
      </div>
    </form>
  );
}
