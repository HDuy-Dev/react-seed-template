import { MainError } from '@/components/errors/main-error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient();
export const AppProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {import.meta.env.DEV && <ReactQueryDevtools />}
      <ErrorBoundary FallbackComponent={MainError}>{children}</ErrorBoundary>
    </QueryClientProvider>
  );
};
