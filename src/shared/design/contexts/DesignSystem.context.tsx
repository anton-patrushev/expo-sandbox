import { PropsWithChildren, createContext, useContext, useMemo } from "react";

import { useActiveSystemTheme } from "~/shared/design/themes/Theme.hook";
import type { Theme } from "~/shared/design/themes/Theme.types";

type DesignSystemContextState = {
  theme: Theme;
};

const DesignSystemContext = createContext<DesignSystemContextState | undefined>(
  undefined
);

type DesignSystemProviderProps = PropsWithChildren;

export const DesignSystemProvider = ({
  children,
}: DesignSystemProviderProps) => {
  const systemTheme = useActiveSystemTheme();

  const contextValue = useMemo(() => ({ theme: systemTheme }), [systemTheme]);

  return (
    <DesignSystemContext.Provider value={contextValue}>
      {children}
    </DesignSystemContext.Provider>
  );
};

const useDesignSystemContext = () => {
  const value = useContext(DesignSystemContext);

  if (!value) {
    throw new Error(
      "useDesignSystemContext must be used within a <DesignSystemProvider />. Make sure your app is wrapped with <DesignSystemProvider />"
    );
  }

  return value;
};

export const useTheme = () => {
  const { theme } = useDesignSystemContext();

  return theme;
};
