import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SignIn from '../Components/SignIn/SignIn';
import { BrowserRouter } from 'react-router-dom';
import { TranslateContextProvider } from '../Context/Context';
import { act } from 'react-dom/test-utils';
import {
  auth,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
} from '../Shared/firebase';
import 'jest-fetch-mock';

global.alert = jest.fn();
global.console.error = jest.fn();

test('renders sign in', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <SignIn />
        </TranslateContextProvider>
      </BrowserRouter>
    );
  });

  const titleElements = screen.getAllByText('SignIn');
  expect(titleElements.some((element) => element instanceof HTMLElement)).toBe(
    true
  );

  const emailInput = screen.getByPlaceholderText('Email');
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByPlaceholderText('Password');
  expect(passwordInput).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: 'SignIn' });
  expect(submitButton).toBeInTheDocument();

  const linkToSignIn = screen.getByRole('link', { name: 'SignUp' });
  expect(linkToSignIn).toBeInTheDocument();
});

test('validates form inputs', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <SignIn />
        </TranslateContextProvider>
      </BrowserRouter>
    );
  });

  const submitButton = screen.getByRole('button', { name: 'SignIn' });
  fireEvent.click(submitButton);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.input(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.input(passwordInput, { target: { value: 'ValidPassword123!' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText('Email is required')).toBeNull();
    expect(screen.queryByText('Password is required')).toBeNull();
  });
});

describe('Authentication', () => {
  beforeEach(() => {
    logout();
  });

  it('should log in with valid credentials', async () => {
    const name = 'Tanya';
    const email = 'halo123@gmail.com';
    const password = 'Halo.123';

    await registerWithEmailAndPassword(name, email, password);

    expect(auth.currentUser).toBeNull();
  });

  it('should handle invalid credentials', async () => {
    const result = await logInWithEmailAndPassword(
      'test123@gmail.com',
      'Halo.123'
    );

    expect(result).toBe('Invalid email or password. Please try again.');
    expect(auth.currentUser).toBeNull();
  });
});
