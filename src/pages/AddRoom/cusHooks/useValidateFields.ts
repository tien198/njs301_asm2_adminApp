import useValidate from "../../../cusHooks/useValidate";
import { isNotNull } from "../../../cusHooks/useValidate/validateFuncs";
import IRoomForm from "../../../models/interfaces/IRoomForm";

export default function useValidateFields(formFieldsData: IRoomForm) {
  // This hook is a placeholder for future validation logic
  const titleErrorMsg = useValidate('Title', formFieldsData.title, [isNotNull])
  const descErrorMsg = useValidate('Description', formFieldsData.desc, [isNotNull])
  const priceErrorMsg = useValidate('Price', formFieldsData.price, [isNotNull])
  const maxPeopleErrorMsg = useValidate('Max People', String(formFieldsData.maxPeople), [isNotNull])
  const roomNumbersErrorMsg = useValidate('Room Numbers', String(formFieldsData.roomNumbers), [isNotNull])

  return {
    titleErrorMsg, descErrorMsg, priceErrorMsg, maxPeopleErrorMsg, roomNumbersErrorMsg
  }
}