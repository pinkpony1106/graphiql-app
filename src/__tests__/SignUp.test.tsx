import { render, screen } from '@testing-library/react';
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
});
