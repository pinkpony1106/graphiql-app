import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () =>
  useDispatch<ThunkDispatch<RootState, void, AnyAction>>();

export { useTypeSelector, useAppDispatch };
