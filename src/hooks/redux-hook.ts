import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from '../store';

type AppDispatch = typeof store.dispatch;

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useTypeSelector, useAppDispatch };
