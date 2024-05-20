import { ThemeProvider } from "@react-navigation/native";

import { useActiveSystemNavigationTheme } from "~/shared/design";

type NavigationThemeProviderProps = React.PropsWithChildren;

export const NavigationThemeProvider = ({
  children,
}: NavigationThemeProviderProps) => {
  const theme = useActiveSystemNavigationTheme();

  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};
