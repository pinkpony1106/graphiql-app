import { createSlice } from '@reduxjs/toolkit';

const initialState = { headers: '' };

const headersSlice = createSlice({
  name: 'headersValue',
  initialState,
  reducers: {
    updateHeadersValue: (state, action: { payload: string }) => {
      state.headers = action.payload;
    },
  },
});

export const { updateHeadersValue } = headersSlice.actions;
export default headersSlice.reducer;
