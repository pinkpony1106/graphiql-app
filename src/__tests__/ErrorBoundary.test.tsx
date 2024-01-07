import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import { render } from '@testing-library/react';
import ErrorInfo from '../Components/ErrorBoundary/ErrorInfo';

const Child = () => {
  throw new Error();
};

describe('Error Boundary', () => {
  it(`should render error boundary component when there is an error`, () => {
    const { getByRole } = render(
      <ErrorBoundary fallback={<ErrorInfo />}>
        <Child />
      </ErrorBoundary>
    );
    const errorComponent = getByRole('ErrorInfo');
    expect(errorComponent).toBeDefined();
  });
});
