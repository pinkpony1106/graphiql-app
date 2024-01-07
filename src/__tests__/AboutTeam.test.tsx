import { render, screen } from '@testing-library/react';
import AboutTeam from '../Components/AboutTeam/AboutTeam';
import { TranslateContextProvider } from '../Context/Context';
import { BrowserRouter } from 'react-router-dom';

describe('AboutTeam.test', () => {
  it('should be rendered', () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <AboutTeam />
        </TranslateContextProvider>
      </BrowserRouter>
    );
    const title = screen.getByText('About our development team');
    expect(title).toBeInTheDocument();
  });
});
