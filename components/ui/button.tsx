import { useThemeColor } from "@/hooks/useThemeColor";
import {
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
  PressableProps,
} from "react-native";
import LoaderKit from "react-native-loader-kit";

interface IProps extends PressableProps {
  title: string;
  isLoading?: boolean;
  style?: ViewStyle;
}

export default function Button({ title, onPress, isLoading, style }: IProps) {
  const localStyles = ls(
    useThemeColor({}, "buttonText"),
    useThemeColor({}, "buttonBackground"),
  );

  return (
    <Pressable style={[style, localStyles.container]} onPress={onPress}>
      {isLoading && (
        <LoaderKit style={localStyles.loader} name="BallScaleMultiple" />
      )}
      {!isLoading && <Text style={localStyles.text}>{title}</Text>}
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
      fontSize: 16,
    },
    loader: {
      height: 24,
      width: 24,
    },
  });
