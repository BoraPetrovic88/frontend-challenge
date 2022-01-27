import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { queryClient } from "api/react-query";

const AppProviders: React.FC = ({ children }) => {
  return (
    <ErrorBoundary fallbackRender={(): React.ReactElement => <div>There was an error!</div>}>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
