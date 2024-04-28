import { useMemo } from "react";
import { View as RNView, ViewProps as RNViewProps } from "react-native";

import { useThemedStyle } from "~/shared/design/hooks/useThemedStyle.hook";

import { TileStyle } from "./Tile.style";

type TileProps = RNViewProps;

export const Tile = ({ style, ...props }: TileProps) => {
  const themedTileStyle = useThemedStyle(TileStyle);

  const tileStyle = useMemo(
    () => [themedTileStyle.tile, style],
    [themedTileStyle, style]
  );

  return <RNView {...props} style={tileStyle} />;
};
