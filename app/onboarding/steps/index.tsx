import { View, StyleSheet } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { router } from "expo-router";
import Input from "@/components/ui/input";
import { useState } from "react";
import { i18n } from "@/utils/i18n";

export default function Index() {
  const [name, setName] = useState("");

  function onNextPressed() {
    router.push("/onboarding/steps/gender");
  }

  return (
    <View style={styles.container}>
      <Text nueu fontSize={42}>
        {i18n.t("onboarding.step1.title")}
      </Text>
      <Text>{i18n.t("onboarding.step1.desc")}</Text>
      <Input
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="John Doe"
        autoCapitalize="words"
        autoComplete="name"
        returnKeyType="next"
      />
      <Button
        title={i18n.t("onboarding.step1.button")}
        onPress={onNextPressed}
      />
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
