import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { TranslateContextProvider } from '../Context/Context';
import SignUp from '../Components/SignUp/SignUp';

test('renders sign up', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <SignUp />
        </TranslateContextProvider>
      </BrowserRouter>
    );
  });

  const titleElements = screen.getAllByText('SignUp');
  expect(titleElements.some((element) => element instanceof HTMLElement)).toBe(
    true
  );

  const nameInput = screen.getByPlaceholderText('Your Name');
  expect(nameInput).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText('Email');
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByPlaceholderText('Password');
  expect(passwordInput).toBeInTheDocument();

  const passwordAgainInput = screen.getByPlaceholderText('Password Again');
  expect(passwordAgainInput).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: 'SignUp' });
  expect(submitButton).toBeInTheDocument();

  const linkToSignIn = screen.getByRole('link', { name: 'SignIn' });
  expect(linkToSignIn).toBeInTheDocument();
});

test('validates form inputs', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <SignUp />
        </TranslateContextProvider>
      </BrowserRouter>
    );
  });

  const submitButton = screen.getByRole('button', { name: 'SignUp' });
  fireEvent.click(submitButton);
  const nameInput = screen.getByPlaceholderText('Your Name');
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.input(nameInput, { target: { value: 'Tanya' } });
  fireEvent.input(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.input(passwordInput, { target: { value: 'ValidPassword123!' } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText('Email is required')).toBeNull();
    expect(screen.queryByText('Password is required')).toBeNull();
  });
});
