import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Header from '../Components/Header/Header';
import { TranslateContextProvider } from '../Context/Context';

const mockLocalStorage: Record<string, string> = {};
const testids = {
  lang: 'lang',
};

beforeEach(() => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn((key, value) => (mockLocalStorage[key] = value)),
    },
    writable: true,
  });
});

test('lang button saves the current lang to the local storage', async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <TranslateContextProvider>
        <Header />
      </TranslateContextProvider>
    </BrowserRouter>
  );

  await waitFor(() => {
    const currentLang = getByTestId(testids.lang) as HTMLDivElement;
    fireEvent.click(currentLang);
    expect(window.localStorage.setItem).toHaveBeenCalled();
    expect(currentLang.textContent).toBe(mockLocalStorage['currentLanguage']);
  });
});

test('lang is changed', async () => {
  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <TranslateContextProvider>
        <Header />
      </TranslateContextProvider>
    </BrowserRouter>
  );
  await waitFor(() => {
    const signInButton = getByText('SignIn');
    expect(signInButton).toBeInTheDocument();
  });

  await waitFor(() => {
    const currentLang = getByTestId(testids.lang) as HTMLDivElement;
    fireEvent.click(currentLang);
  });

  await waitFor(() => {
    const signInRuButton = getByText('Вход');
    expect(signInRuButton).toBeInTheDocument();
  });
});
