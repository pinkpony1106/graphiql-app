import { render, screen } from '@testing-library/react';
import AboutGraphi from '../Components/AboutGraphl/AboutGraphl';
import { TranslateContextProvider } from '../Context/Context';

describe('AboutGraphi.test', () => {
  it('should be rendered', () => {
    render(
      <TranslateContextProvider>
        <AboutGraphi />
      </TranslateContextProvider>
    );
    const title = screen.getByText('A query language for your API');
    expect(title).toBeInTheDocument();
  });
});
