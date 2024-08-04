import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
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

export default function Button({
  title,
  onPress,
  isLoading,
  style,
  disabled = false,
}: IProps) {
  const localStyles = ls(
    useThemeColor({}, "buttonText"),
    useThemeColor({}, "buttonBackground"),
    useThemeColor({}, "buttonDisabled"),
  );

  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={[
        style,
        localStyles.container,
        disabled && localStyles.disabled,
        pressed && localStyles.pressed,
      ]}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
    >
      {isLoading && (
        <LoaderKit style={localStyles.loader} name="BallScaleMultiple" />
      )}
      {!isLoading && <Text style={[localStyles.text]}>{title}</Text>}
    </Pressable>
  );
}

const ls = (
  textColor: string,
  backgroundColor: string,
  backgroundDisabledColor: string,
) =>
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
    disabled: {
      backgroundColor: backgroundDisabledColor,
    },
    pressed: {
      opacity: 0.5,
    },
  });
