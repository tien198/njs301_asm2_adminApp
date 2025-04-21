import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispath } from '../store'

export const useAppSeletor = useSelector.withTypes<RootState>()
export const useAppDispath = useDispatch.withTypes<AppDispath>()