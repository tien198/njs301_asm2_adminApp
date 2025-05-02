import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../cusHooks/reduxHooks";
import IRoomForm from "../../../models/interfaces/IRoomForm";
import { setTitle, setPrice, setMaxPeople, setDesc, setRoomNumbers, setHotelId } from "../../../store/slices/addRoomFormSlice";

export function useRoomSelector(): IRoomForm {
    const title = useAppSelector(state => state.addRoomForm.title)
    const price = useAppSelector(state => state.addRoomForm.price)
    const maxPeople = useAppSelector(state => state.addRoomForm.maxPeople)
    const desc = useAppSelector(state => state.addRoomForm.desc)
    const roomNumbers = useAppSelector(state => state.addRoomForm.roomNumbers)
    const hotelId = useAppSelector(state => state.addRoomForm.hotelId)

    return {
        title, price, maxPeople, desc, roomNumbers, hotelId
    }
}

export function useRoomFormBinding() {
    const dispatch = useAppDispatch()
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => dispatch(setTitle(e.target.value))
    const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => dispatch(setPrice(e.target.value))
    const onChangeMaxPeople = (e: ChangeEvent<HTMLInputElement>) => dispatch(setMaxPeople(e.target.value))
    const onChangeDesc = (e: ChangeEvent<HTMLInputElement>) => dispatch(setDesc(e.target.value))
    const onChangeRoomNumbers = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch(setRoomNumbers(e.target.value))
    const onChangeHotelId = (e: ChangeEvent<HTMLSelectElement>) => dispatch(setHotelId(e.target.value))

    const dispatchHotelId = (val: string) => dispatch(setHotelId(val))
    return {
        onChangeTitle, onChangePrice, onChangeMaxPeople, onChangeDesc, onChangeRoomNumbers, onChangeHotelId,
        dispatchHotelId
    }
}