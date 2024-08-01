import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface IProps extends TextInputProps {}

export default function Input({
  style,
  value,
  onChangeText,
  placeholder,
  autoComplete,
  keyboardType,
  returnKeyType,
}: IProps) {
  const localStyles = ls(useThemeColor({}, "border"));

  return (
    <TextInput
      style={[style, localStyles.input]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      autoCapitalize="none"
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
    />
  );
}

const ls = (borderColor: string) =>
  StyleSheet.create({
    input: {
      height: 48,
      borderWidth: 2,
      borderColor: borderColor,
      borderRadius: 4,
      padding: 12,
      marginVertical: 12,
    },
  });
