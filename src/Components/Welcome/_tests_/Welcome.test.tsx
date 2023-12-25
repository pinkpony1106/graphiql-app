import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';
import { TranslateContextProvider } from '../../../Context/Context';
import { BrowserRouter } from 'react-router-dom';

describe('Welcome.test', () => {
  it('should be rendered', () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <Welcome />
        </TranslateContextProvider>
      </BrowserRouter>
    );
    const title = screen.getByText('Ask for what you want');
    expect(title).toBeInTheDocument();
  });
});
