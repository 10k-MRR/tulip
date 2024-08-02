import { View, StyleSheet } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { router } from "expo-router";
import Input from "@/components/ui/input";
import { useState } from "react";

export default function Gender() {
  const [name, setName] = useState("");

  function onNextPressed() {
    router.push("/onboarding/steps/link");
  }

  return (
    <View style={styles.container}>
      <Text nueu fontSize={42}>
        what's your name ?
      </Text>
      <Text>
        How you want us to call you ? it can be your real name or one you always
        dreamed to have
      </Text>
      <Input
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="John Doe"
        autoCapitalize="words"
        autoComplete="name"
        returnKeyType="next"
      />
      <Button title="next" onPress={onNextPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
});
