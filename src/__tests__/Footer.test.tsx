import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { TranslateContextProvider } from '../Context/Context';

describe('Footer.test', () => {
  it('should be rendered', () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <Footer />
        </TranslateContextProvider>
      </BrowserRouter>
    );
    const title = screen.getByText('@copyright 2023');
    expect(title).toBeInTheDocument();
  });
});
