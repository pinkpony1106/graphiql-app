import { render, screen } from '@testing-library/react';
import AboutTeam from '../AboutTeam';

describe('AboutTeam.test', () => {
  it('should be rendered', () => {
    render(<AboutTeam />);
    const title = screen.getByText('About our development team');
    expect(title).toBeInTheDocument();
  });
});
