import { View, StyleSheet } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { useLocalSearchParams } from "expo-router";
import { i18n } from "@/utils/i18n";

export default function Index() {
  const { name, gender } = useLocalSearchParams<{
    name: string;
    gender: string;
  }>();

  console.log(name, gender);

  function onLinkPressed() {
    console.log("Link");
  }

  return (
    <View style={styles.container}>
      <Text nueu fontSize={42}>
        {i18n.t("onboarding.step1.title")}
      </Text>
      <Text>{i18n.t("onboarding.step1.desc")}</Text>
      <Button
        title={i18n.t("onboarding.step1.button")}
        onPress={onLinkPressed}
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
