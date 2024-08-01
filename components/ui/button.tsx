import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, Pressable, ViewStyle } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
  styles?: ViewStyle;
}

export default function Button({ title, onPress, styles }: IProps) {
  const localStyles = ls(
    useThemeColor({}, "buttonText"),
    useThemeColor({}, "buttonBackground"),
  );

  return (
    <Pressable style={[styles, localStyles.container]} onPress={onPress}>
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
