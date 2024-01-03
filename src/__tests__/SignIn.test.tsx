import { render, screen } from '@testing-library/react';
import SignIn from '../Components/SignIn/SignIn';

test('renders sign in', () => {
  render(<SignIn />);

  const titleElement = screen.getByText('Sign In');
  expect(titleElement).toBeInTheDocument();

  const emailInput = screen.getByPlaceholderText('Email');
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByPlaceholderText('Password');
  expect(passwordInput).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: 'Sign In' });
  expect(submitButton).toBeInTheDocument();
});
