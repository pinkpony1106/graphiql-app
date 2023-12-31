import { render, screen } from '@testing-library/react';
import AboutTeam from '../AboutTeam';
import { TranslateContextProvider } from '../../../Context/Context';

describe('AboutTeam.test', () => {
  it('should be rendered', () => {
    render(
      <TranslateContextProvider>
        <AboutTeam />
      </TranslateContextProvider>
    );
    const title = screen.getByText('About our development team');
    expect(title).toBeInTheDocument();
  });
});
