import { useThemeColor } from "@/hooks/useThemeColor";
import {
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  PressableProps,
} from "react-native";

interface IProps extends PressableProps {
  title: string;
  style?: ViewStyle;
}

export default function Button({ title, onPress, style }: IProps) {
  const localStyles = ls(
    useThemeColor({}, "buttonText"),
    useThemeColor({}, "buttonBackground"),
  );

  return (
    <Pressable style={[style, localStyles.container]} onPress={onPress}>
      <Text style={localStyles.text}>{title}</Text>
    </Pressable>
  );
}

const ls = (textColor: string, backgroundColor: string) =>
  StyleSheet.create({
    container: {
      height: 42,
      borderRadius: 4,
      backgroundColor: backgroundColor,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: textColor,
    },
  });
