import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schema: [],
  loading: true,
  error: null,
  selectedField: null,
};

const schemaSlice = createSlice({
  name: 'schema',
  initialState,
  reducers: {
    setSchema: (state, action) => {
      state.schema = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedField: (state, action) => {
      state.selectedField = action.payload;
    },
  },
});

export const { setSchema, setLoading, setError, setSelectedField } =
  schemaSlice.actions;
export default schemaSlice.reducer;
