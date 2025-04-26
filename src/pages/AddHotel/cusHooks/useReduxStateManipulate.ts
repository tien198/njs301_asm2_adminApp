import { ChangeEvent } from "react"
import { useAppDispath, useAppSeletor } from "../../../cusHooks/reduxHooks"
import IAddProductFormFieldsData, { HotelFeatured, HotelType } from "../../../models/interfaces/IAddHotelFormFieldsData"
import { setName, setType, setCity, setAddress, setDistance, setTitle, setPrice, setDesc, setImages, setFeatured, setRooms } from '../../../store/slices/addProductFormSlice'



export function useHotelFormSelector(): IAddProductFormFieldsData {
    const name = useAppSeletor(({ addProductForm }) => addProductForm.name)
    const type = useAppSeletor(({ addProductForm }) => addProductForm.type)
    const city = useAppSeletor(({ addProductForm }) => addProductForm.city)
    const address = useAppSeletor(({ addProductForm }) => addProductForm.address)
    const distance = useAppSeletor(({ addProductForm }) => addProductForm.distance)
    const title = useAppSeletor(({ addProductForm }) => addProductForm.title)
    const price = useAppSeletor(({ addProductForm }) => addProductForm.price)
    const desc = useAppSeletor(({ addProductForm }) => addProductForm.desc)
    const images = useAppSeletor(({ addProductForm }) => addProductForm.images)
    const featured = useAppSeletor(({ addProductForm }) => addProductForm.featured)
    const rooms = useAppSeletor(({ addProductForm }) => addProductForm.rooms)

    return {
        name, type, city, address, distance, title, price, desc, images, featured, rooms
    }
}



export function useHotelFormDispatch() {
    const dispath = useAppDispath()
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => dispath(setName(e.target.value))
    const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => dispath(setType(e.target.value as HotelType))
    const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => dispath(setCity(e.target.value))
    const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => dispath(setAddress(e.target.value))
    const onChangeDistance = (e: ChangeEvent<HTMLInputElement>) => dispath(setDistance(e.target.value))
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => dispath(setTitle(e.target.value))
    const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => dispath(setPrice(e.target.value))
    const onChangeDesc = (e: ChangeEvent<HTMLInputElement>) => dispath(setDesc(e.target.value))
    const onChangeImages = (e: ChangeEvent<HTMLInputElement>) => dispath(setImages(e.target.value))
    const onChangeFeatured = (e: ChangeEvent<HTMLSelectElement>) => dispath(setFeatured(e.target.value as HotelFeatured))

    return {
        onChangeName, onChangeType, onChangeCity, onChangeAddress, onChangeDistance, onChangeTitle, onChangePrice, onChangeDesc, onChangeImages, onChangeFeatured
    }
}