import { StyleSheet } from "react-native";

import type { Theme } from "~/shared/design/themes/Theme.types";

export const TextStyle = (theme: Theme) =>
  StyleSheet.create({
    text: { color: theme.colors.text },
  });
