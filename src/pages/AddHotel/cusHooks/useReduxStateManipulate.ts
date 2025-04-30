import { ChangeEvent } from "react"
import { useAppDispath, useAppSeletor } from "../../../cusHooks/reduxHooks"
import IAddProductFormFieldsData, { HotelFeatured } from "../../../models/interfaces/IHotelForm"
import { setName, setType, setCity, setAddress, setDistance, setTitle, setPrice, setDesc, setImages, setFeatured, setRooms } from '../../../store/slices/addHotelFormSlice'



export function useHotelSelector(): IAddProductFormFieldsData {
    const name = useAppSeletor(state => state.addHotelForm.name)
    const type = useAppSeletor(state => state.addHotelForm.type)
    const city = useAppSeletor(state => state.addHotelForm.city)
    const address = useAppSeletor(state => state.addHotelForm.address)
    const distance = useAppSeletor(state => state.addHotelForm.distance)
    const title = useAppSeletor(state => state.addHotelForm.title)
    const price = useAppSeletor(state => state.addHotelForm.price)
    const desc = useAppSeletor(state => state.addHotelForm.desc)
    const images = useAppSeletor(state => state.addHotelForm.images)
    const featured = useAppSeletor(state => state.addHotelForm.featured)
    const rooms = useAppSeletor(state => state.addHotelForm.rooms)

    return {
        name, type, city, address, distance, title, price, desc, images, featured, rooms
    }
}


/**
 * 2-way binding to redux state properties
 */
export function useHotelFormBinding() {
    const dispath = useAppDispath()
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => dispath(setName(e.target.value))
    const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => dispath(setType(e.target.value))
    const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => dispath(setCity(e.target.value))
    const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => dispath(setAddress(e.target.value))
    const onChangeDistance = (e: ChangeEvent<HTMLInputElement>) => dispath(setDistance(e.target.value))
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => dispath(setTitle(e.target.value))
    const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => dispath(setPrice(e.target.value))
    const onChangeDesc = (e: ChangeEvent<HTMLInputElement>) => dispath(setDesc(e.target.value))
    const onChangeImages = (e: ChangeEvent<HTMLInputElement>) => dispath(setImages(e.target.value))
    const onChangeFeatured = (e: ChangeEvent<HTMLSelectElement>) => dispath(setFeatured(e.target.value as HotelFeatured))

    const dispatchType =(e:string)=> dispath(setType(e))

    return {
        onChangeName, onChangeType, onChangeCity, onChangeAddress, onChangeDistance, onChangeTitle, onChangePrice, onChangeDesc, onChangeImages, onChangeFeatured,
        dispatchType
    }
}