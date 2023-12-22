import { render, screen } from '@testing-library/react';
import AboutCourse from '../AboutCourse';
import { TranslateContextProvider } from '../../../Context/Context';

describe('AboutCourse.test', () => {
  it('should be rendered', () => {
    render(
      <TranslateContextProvider>
        <AboutCourse />
      </TranslateContextProvider>
    );
    const title = screen.getByText('About the course');
    expect(title).toBeInTheDocument();
  });
});
