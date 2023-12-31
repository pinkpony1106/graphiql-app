import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queryText: `query NewQuery {character(id: 1) { name } }`,
};

const queryTextSlice = createSlice({
  name: 'queryTextValue',
  initialState,
  reducers: {
    updateQueryTextValue: (state, action: { payload: string }) => {
      state.queryText = action.payload;
    },
  },
});

export const { updateQueryTextValue } = queryTextSlice.actions;
export default queryTextSlice.reducer;
