import { useMemo } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

import { useThemedStyle } from "~/shared/design/hooks/useThemedStyle.hook";

import { TextStyle } from "./Text.style";

type TextProps = RNTextProps;

export const Text = ({ style, ...props }: TextProps) => {
  const themedTextStyle = useThemedStyle(TextStyle);

  const textStyle = useMemo(
    () => [themedTextStyle.text, style],
    [themedTextStyle, style]
  );

  return <RNText {...props} style={textStyle} />;
};
