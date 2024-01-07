import { render, screen, fireEvent, getByText } from '@testing-library/react';
import { logout } from '../Shared/firebase';
import LogOut from '../Components/LogOut/LogOut';
import { signOut } from 'firebase/auth';
import { TranslateContextProvider } from '../Context/Context';
import { act } from 'react-dom/test-utils';

jest.mock('firebase/auth', () => ({
    signOut: jest.fn(),
    getAuth: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));
test('logout function should call signOut', () => {
    logout();
    expect(signOut).toHaveBeenCalled();
});

describe('LogOut component', () => {
    it('button log out', async () => {
        await act(async () => {
            render(
                <TranslateContextProvider>
                    <LogOut />
                </TranslateContextProvider>
            );
        });

        const submitButton = screen.getByRole('button', { name: 'LogOut' });
        expect(submitButton).toBeInTheDocument();
        expect(signOut).toHaveBeenCalled();
    });
});