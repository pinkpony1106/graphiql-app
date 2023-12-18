import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';

describe('Welcome.test', () => {
  it('should be rendered', () => {
    render(<Welcome />);
    const title = screen.getByText('Ask for what you want');
    expect(title).toBeInTheDocument();
  });
});
