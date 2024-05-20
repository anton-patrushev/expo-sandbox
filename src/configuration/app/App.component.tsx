import { useAppInitialization } from "~/configuration/app/App.hook";
import { NavigationThemeProvider } from "~/configuration/navigation/contexts/NavigationThemeProvider.component";
import { DesignSystemProvider } from "~/shared/design";

type AppProviderProps = React.PropsWithChildren;

export const AppProvider = ({ children }: AppProviderProps) => {
  const { initialized } = useAppInitialization();

  if (!initialized) return null;

  return (
    <DesignSystemProvider>
      <NavigationThemeProvider>{children}</NavigationThemeProvider>
    </DesignSystemProvider>
  );
};
