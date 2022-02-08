import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
};
