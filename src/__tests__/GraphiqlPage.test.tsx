import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TranslateContextProvider } from '../Context/Context';
import GraphlPage from '../Pages/GraphlPage/GraphlPage';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import schemaReducer from '../store/slices/schemaSlice';
import urlValueReducer from '../store/slices/urlSlice';
import queryTextValueReducer from '../store/slices/queryTextSlice';
import headersValueReducer from '../store/slices/headersSlice';
import variablesValueReducer from '../store/slices/variablesSlice';
import requestValueReducer from '../store/slices/requestSlice';
import openVariablesHeadersReducer from '../store/slices/openVarsHeadersSlice';

const mockGetAuth = jest.fn();
const onAuthStateChanged = jest.fn();

jest.mock('firebase/auth', () => {
  return {
    getAuth: () => mockGetAuth,
    onAuthStateChanged: () => onAuthStateChanged,
  };
});

describe('GraphiqlPage.test', () => {
  it('should be rendered', () => {
    const store = configureStore({
      reducer: {
        schema: schemaReducer,
        urlValue: urlValueReducer,
        queryTextValue: queryTextValueReducer,
        headersValue: headersValueReducer,
        variablesValue: variablesValueReducer,
        requestValue: requestValueReducer,
        openVariablesHeaders: openVariablesHeadersReducer,
      },
      preloadedState: {
        schema: {
          schema: [],
          loading: false,
          error: null,
          selectedField: null,
        },
        urlValue: {
          url: 'https://rickandmortyapi.com/graphql',
        },
        queryTextValue: {
          queryText: '',
        },
        headersValue: {
          headers: '',
        },
        variablesValue: {
          variables: '',
        },
        openVariablesHeaders: {
          openVariables: false,
          openHeaders: false,
        },
        requestValue: {
          result: '',
          status: 'idle',
        },
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TranslateContextProvider>
            <GraphlPage />
          </TranslateContextProvider>
        </BrowserRouter>
      </Provider>
    );
    const requestEditor = screen.getByTestId('requestEditor');
    expect(requestEditor).toBeInTheDocument();
  });
});
