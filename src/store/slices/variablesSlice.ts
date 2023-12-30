import { createSlice } from '@reduxjs/toolkit';

const initialState = { variables: '' };

const variablesSlice = createSlice({
  name: 'variablesValue',
  initialState,
  reducers: {
    updateVariablesValue: (state, action: { payload: string }) => {
      state.variables = action.payload;
    },
  },
});

export const { updateVariablesValue } = variablesSlice.actions;
export default variablesSlice.reducer;
