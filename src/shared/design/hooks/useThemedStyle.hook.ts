import { useMemo } from "react";
import type { StyleSheet } from "react-native";

import { useTheme } from "~/shared/design/contexts/DesignSystem.context";
import type { Theme } from "~/shared/design/themes/Theme.types";

type NamedStyle<T> = StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>;

type StyleFactory<T> = (theme: Theme) => T;

export function useThemedStyle<Style extends NamedStyle<Style>>(
  styleFactory: StyleFactory<Style>,
): Style {
  const theme = useTheme();

  const style = useMemo(() => {
    return styleFactory(theme);
  }, [styleFactory, theme]);

  return style;
}
