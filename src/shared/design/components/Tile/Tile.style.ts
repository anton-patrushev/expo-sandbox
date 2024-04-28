import { StyleSheet } from "react-native";

import { Theme } from "~/shared/design/themes/Theme.types";
import { Sizes } from "~/shared/design/tokens/Sizes.consts";

export const TileStyle = (theme: Theme) =>
  StyleSheet.create({
    tile: {
      backgroundColor: theme.colors.secondary,
      borderRadius: Sizes.borderRadius.s,
      padding: Sizes.spacing.m,
    },
  });
