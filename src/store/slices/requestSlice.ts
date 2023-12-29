import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type RequestParamsType = {
  url: string;
  query: string;
  variables?: object;
  headers?: object;
};

type InitialRequestStateType = {
  result: string;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
};

export const fetchResult = createAsyncThunk<string, RequestParamsType>(
  'result',

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (params: RequestParamsType, thunkAPI) => {
    const url = params.url ?? 'https://swapi-graphql.eskerda.vercel.app/';
    const headers = params.headers
      ? { ...params.headers, 'Content-type': 'application/json' }
      : { 'Content-type': 'application/json' };
    const request = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        query: params.query,
        variables: params.variables,
      }),
    });
    const response = await request.json();
    return response;
  }
);

const initialState: InitialRequestStateType = {
  result: '',
  status: 'idle',
};

const requestSlice = createSlice({
  name: 'result2',
  initialState,
  reducers: {
    updateStatusRequest: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchResult.fulfilled, (state, action) => {
      state.result = JSON.stringify(action.payload, null, 2);
      state.status = 'succeeded';
    });
    builder.addCase(fetchResult.rejected, (state) => {
      state.status = 'failed';
    });
    builder.addCase(fetchResult.pending, (state) => {
      state.status = 'pending';
    });
  },
});

export const { updateStatusRequest } = requestSlice.actions;
export default requestSlice.reducer;
