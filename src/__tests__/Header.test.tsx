import { render, screen } from '@testing-library/react';
import Header from '../Components/Header/Header';

describe('Header.test', () => {
  it('should be rendered', () => {
    render(<Header />);
    const gritteng = screen.getByText('Home');
    expect(gritteng).toBeInTheDocument();
  });
});
