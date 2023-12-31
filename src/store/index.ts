import { configureStore } from '@reduxjs/toolkit';
import requestValueReducer from './slices/requestSlice';
import variablesValueReducer from './slices/variablesSlice';
import headersValueReducer from './slices/headersSlice';
import urlValueReducer from './slices/urlSlice';
import queryTextValueReducer from './slices/queryTextSlice';
import openVariablesHeadersReducer from './slices/openVarsHeadersSlice';

const store = configureStore({
  reducer: {
    urlValue: urlValueReducer,
    queryTextValue: queryTextValueReducer,
    variablesValue: variablesValueReducer,
    headersValue: headersValueReducer,
    requestValue: requestValueReducer,
    openVariablesHeaders: openVariablesHeadersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
