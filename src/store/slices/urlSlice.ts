import { createSlice } from '@reduxjs/toolkit';

const initialState = { url: 'https://rickandmortyapi.com/graphql' };

const urlSlice = createSlice({
  name: 'urlValue',
  initialState,
  reducers: {
    updateUrlValue: (state, action: { payload: string }) => {
      state.url = action.payload;
    },
  },
});

export const { updateUrlValue } = urlSlice.actions;
export default urlSlice.reducer;
