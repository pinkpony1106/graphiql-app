import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App.test', () => {
  it('should be rendered', () => {
    render(<App />);
    const gritteng = screen.getByText('Hello world!');
    expect(gritteng).toBeInTheDocument();
  });
});
