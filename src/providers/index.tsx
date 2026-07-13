import type { ReactNode } from "react";

type AppProvidersProps = {
  children: ReactNode;
};

/**
 * Root provider composition. Add global providers here as the app grows.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return <>{children}</>;
}
