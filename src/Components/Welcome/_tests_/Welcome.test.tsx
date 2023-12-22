import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';
import { TranslateContextProvider } from '../../../Context/Context';

describe('Welcome.test', () => {
  it('should be rendered', () => {
    render(
      <TranslateContextProvider>
        <Welcome />
      </TranslateContextProvider>
    );
    const title = screen.getByText('Ask for what you want');
    expect(title).toBeInTheDocument();
  });
});
