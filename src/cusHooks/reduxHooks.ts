import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispath } from '../store'

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispath>()