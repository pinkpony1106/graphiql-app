import { createSlice } from '@reduxjs/toolkit';

const initialState = { openVariables: false, openHeaders: false };

const openVariablesHeadersSlice = createSlice({
  name: 'openVariablesHeaders',
  initialState,
  reducers: {
    updateOpenVariables: (state, action: { payload: boolean }) => {
      state.openVariables = action.payload;
    },
    updateOpenHeaders: (state, action: { payload: boolean }) => {
      state.openHeaders = action.payload;
    },
  },
});

export const { updateOpenVariables, updateOpenHeaders } =
  openVariablesHeadersSlice.actions;
export default openVariablesHeadersSlice.reducer;
