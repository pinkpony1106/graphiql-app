import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { TranslateContextProvider } from '../Context/Context';

describe('Testing routing ', () => {
  test('navigation to Main pages', () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <App />
        </TranslateContextProvider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Home'));
    const homeElement = screen.getByText('Ask for what you want');
    expect(homeElement).toBeInTheDocument();
  });
});
