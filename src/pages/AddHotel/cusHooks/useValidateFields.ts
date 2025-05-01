import useValidate from '../../../cusHooks/useValidate'
import { isNotNull } from "../../../cusHooks/useValidate/validateFuncs";
import IHotelForm from "../../../models/interfaces/IHotelForm";

export default function useValidateFields(formFieldsData: IHotelForm) {
  // This hook is a placeholder for future validation logic
  const nameErrorMsg = useValidate('Name', formFieldsData.name, [isNotNull])
  const cityErrorMsg = useValidate('City', formFieldsData.city, [isNotNull])
  const addressErrorMsg = useValidate('Address', formFieldsData.address, [isNotNull])
  const distanceErrorMsg = useValidate('Distance', formFieldsData.distance, [isNotNull])
  const titleErrorMsg = useValidate('Title', formFieldsData.title, [isNotNull])
  const priceErrorMsg = useValidate('Price', formFieldsData.price, [isNotNull])
  const descErrorMsg = useValidate('Description', formFieldsData.desc, [isNotNull])
  const imagesErrorMsg = useValidate('Images', formFieldsData.images, [isNotNull])
  const roomsErrorMsg = useValidate('Rooms', String(formFieldsData.rooms), [isNotNull])

  return {
    nameErrorMsg, cityErrorMsg, addressErrorMsg, distanceErrorMsg, titleErrorMsg, priceErrorMsg, descErrorMsg, imagesErrorMsg, roomsErrorMsg
  }
}