import { View, StyleSheet } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { router, useLocalSearchParams } from "expo-router";
import { i18n } from "@/utils/i18n";
import {
  connectAccountsForOneTimeAccess,
  connectAccountsForOneTimeAccessListner,
} from "@/modules/tink-link-native";
import { useEffect } from "react";

export default function Index() {
  const { name, gender } = useLocalSearchParams<{
    name: string;
    gender: string;
  }>();

  useEffect(() => {
    const sub = connectAccountsForOneTimeAccessListner((e) => {
      console.log(e.authCode);
      if (e.authCode !== null) {
        router.push(
          `/onboarding/steps/succeed?name=${name}&gender=${gender}&code=${e.authCode}`,
        );
      }
    });

    return () => sub.remove();
  }, []);

  function onLinkPressed() {
    connectAccountsForOneTimeAccess(
      process.env.EXPO_PUBLIC_TINK_CLIENT_ID!,
      process.env.EXPO_PUBLIC_TINK_REDIRECT_URL!,
    );
  }

  return (
    <View style={styles.container}>
      <Text nueu fontSize={42}>
        {i18n.t("onboarding.step3.title")}
      </Text>
      <Text>{i18n.t("onboarding.step3.desc")}</Text>
      <Button
        style={styles.button}
        title={i18n.t("onboarding.step3.button")}
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
  button: {
    marginTop: 12,
  },
});
