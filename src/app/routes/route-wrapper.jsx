import { MainError } from '@/components/errors/main-error';
import { ErrorBoundary } from 'react-error-boundary';

export const RouterWrapper = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={MainError}>{children}</ErrorBoundary>
  );
};
