import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryPropsType, ErrorBoundaryStateType } from './types';

class ErrorBoundary extends Component<
  ErrorBoundaryPropsType,
  ErrorBoundaryStateType
> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
