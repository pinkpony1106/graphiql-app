import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import InvalidRoute from '../InvalidRoute';
import { TranslateContextProvider } from '../../../Context/Context';

describe('404.test', () => {
  it('should be rendered', () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <InvalidRoute />
        </TranslateContextProvider>
      </BrowserRouter>
    );
    const title = screen.getByText('Oops!');
    expect(title).toBeInTheDocument();
  });
});
