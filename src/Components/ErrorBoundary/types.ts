import { ErrorInfo, ReactNode } from 'react';

export type ErrorBoundaryPropsType = {
  children: ReactNode;
  fallback: ReactNode;
};

export type ErrorBoundaryStateType = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};
