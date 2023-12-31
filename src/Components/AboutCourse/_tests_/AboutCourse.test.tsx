import { render, screen } from '@testing-library/react';
import AboutCourse from '../AboutCourse';
import { TranslateContextProvider } from '../../../Context/Context';
import { BrowserRouter } from 'react-router-dom';

describe('AboutCourse.test', () => {
  it('should be rendered', () => {
    render(
      <BrowserRouter>
        <TranslateContextProvider>
          <AboutCourse />
        </TranslateContextProvider>
      </BrowserRouter>
    );
    const title = screen.getByText('About the course');
    expect(title).toBeInTheDocument();
  });
});
