import validate, { isNotNull } from "../../../cusHooks/useValidate/validateFuncs";
import IAddProductFormFieldsData from "../../../models/interfaces/IAddProductFormFieldsData";

export default function useValidateFields(formFieldsData: IAddProductFormFieldsData) {
  // This hook is a placeholder for future validation logic
  const nameErrorMsg = validate('Name', formFieldsData.name, [isNotNull])
  const typeErrorMsg = validate('Type', formFieldsData.type, [isNotNull])
  const cityErrorMsg = validate('City', formFieldsData.city, [isNotNull])
  const addressErrorMsg = validate('Address', formFieldsData.address, [isNotNull])
  const distanceErrorMsg = validate('Distance', formFieldsData.distance, [isNotNull])
  const titleErrorMsg = validate('Title', formFieldsData.title, [isNotNull])
  const priceErrorMsg = validate('Price', formFieldsData.price, [isNotNull])
  const descErrorMsg = validate('Description', formFieldsData.desc, [isNotNull])
  const imagesErrorMsg = validate('Images', formFieldsData.images, [isNotNull])
  const featuredErrorMsg = validate('Featured', formFieldsData.featured, [isNotNull])
  const roomsErrorMsg = validate('Rooms', String(formFieldsData.rooms), [isNotNull])

  return {
    nameErrorMsg, typeErrorMsg, cityErrorMsg, addressErrorMsg, distanceErrorMsg, titleErrorMsg, priceErrorMsg, descErrorMsg, imagesErrorMsg, featuredErrorMsg, roomsErrorMsg
  }
}