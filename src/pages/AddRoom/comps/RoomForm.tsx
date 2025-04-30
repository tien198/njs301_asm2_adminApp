import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ErrorMsg from "../../../components/ErrorMsg";
import Button from "../../../components/formLayout/Button";
import FieldContainer from "../../../components/formLayout/FieldContainer";
import Input from "../../../components/formLayout/Input";
import Select from "../../../components/formLayout/Select";
import TextArea from "../../../components/formLayout/TextArea";
import ILoader from "../dataModels/interfaces/ILoader";
import IOption from "../../../models/interfaces/IOption";
import { useRoomFormBinding, useRoomSelector } from "../cusHooks/useReduxStateManipulate";

export default function RoomForm() {
    const loader: ILoader = useLoaderData()

    const roomFormData = useRoomSelector()
    const { title, price, maxPeople, desc, roomNumbers, hotelId } = roomFormData

    // 2-way binding. All the field was stored in Redux state
    const {
        onChangeTitle, onChangePrice, onChangeMaxPeople, onChangeDesc, onChangeRoomNumbers, onChangeHotelId, dispatchHotelId
    } = useRoomFormBinding()


    const [hotelOptions, setHotelOptions] = useState<IOption[]>([{ label: '', value: '' }])
    useEffect(() => {
        loader.hotels.then(hotels => {
            const opts: IOption[] = hotels.map(h => ({ label: h.name, value: h._id, id: h._id }))
            setHotelOptions(opts)
            dispatchHotelId(opts[0].id!)
        })
    }, [loader])

    const [isSubmited, setIsSubmitted] = useState(false)

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitted(true)
        console.log(roomFormData)
    }

    return (
        <form onSubmit={onSubmit} className=" grid grid-cols-2 gap-6">
            <FieldContainer>
                <Input label="Title" value={title} onChange={onChangeTitle} />
                {/* {isSubmited && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Input label="Description" value={desc} onChange={onChangeDesc} />
                {/* {isSubmited && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Input label="Price" type="number" value={price} onChange={onChangePrice} />
                {/* {isSubmited && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Input label="Max People" type="number" value={maxPeople} onChange={onChangeMaxPeople} />
                {/* {isSubmited && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <TextArea label="Rooms" value={roomNumbers} onChange={onChangeRoomNumbers} />
                {/* {isSubmited && <ErrorMsg msg={nameErrorMsg} />} */}
            </FieldContainer>

            <FieldContainer>
                <Select label="Choose a hotel" value={hotelId} onChange={onChangeHotelId} options={hotelOptions} />
                {/* {isSubmited && <ErrorMsg fontWeight="font-light" fontStyle="italic" msg='Make sure that you choose the type you need before submit' />} */}
            </FieldContainer>

            <div>
                <Button>Send</Button>
            </div>
        </form>
    )
}