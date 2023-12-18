import { render, screen } from '@testing-library/react';
import AboutCourse from '../AboutCourse';

describe('AboutCourse.test', () => {
  it('should be rendered', () => {
    render(<AboutCourse />);
    const title = screen.getByText('About the course');
    expect(title).toBeInTheDocument();
  });
});
