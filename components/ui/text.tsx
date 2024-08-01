import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text as ReactNativeText, TextProps } from "react-native";

export type FontSize = 14 | 16 | 24 | 42;

interface IProps extends TextProps {
  nueu?: boolean;
  fontSize?: FontSize;
}

export default function Text({
  style,
  children,
  fontSize = 14,
  nueu = false,
}: IProps) {
  const localStyles = ls(useThemeColor({}, "text"), fontSize, nueu);

  return (
    <ReactNativeText style={[style, localStyles.text]}>
      {children}
    </ReactNativeText>
  );
}

const ls = (textColor: string, fontSize: FontSize, nueu: boolean) =>
  StyleSheet.create({
    text: {
      color: textColor,
      fontSize: fontSize,
      fontFamily: nueu ? "BebasNeue_400Regular" : "System",
    },
  });
