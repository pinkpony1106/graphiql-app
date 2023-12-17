import { render, screen } from '@testing-library/react';
import AboutGraphi from '../AboutGraphl';

describe('AboutGraphi.test', () => {
  it('should be rendered', () => {
    render(<AboutGraphi />);
    const title = screen.getByText('A query language for your API');
    expect(title).toBeInTheDocument();
  });
});
