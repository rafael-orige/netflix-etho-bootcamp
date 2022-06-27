import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { Store, AppDispatch } from '../store/store.type';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
