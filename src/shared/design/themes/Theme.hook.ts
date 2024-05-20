import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

import type { Theme, ThemeName } from "~/shared/design/themes/Theme.types";
import { DarkTheme } from "~/shared/design/themes/dark/DarkTheme";
import { LightTheme } from "~/shared/design/themes/light/LightTheme";

export const useActiveSystemThemeName = (): ThemeName => {
  const colorScheme = useColorScheme();

  if (colorScheme === "dark") {
    return "dark";
  }

  return "light";
};

export function useActiveSystemTheme(): Theme {
  const themeName = useActiveSystemThemeName();

  return themeName === "dark" ? DarkTheme : LightTheme;
}

export function useActiveSystemNavigationTheme() {
  const themeName = useActiveSystemThemeName();

  return themeName === "dark" ? NavigationDarkTheme : NavigationLightTheme;
}
