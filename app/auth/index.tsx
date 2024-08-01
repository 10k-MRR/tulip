import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Text from "@/components/ui/text";
import { i18n } from "@/utils/i18n";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {},
    });
    if (error === null) {
      router.replace("/auth/otp?email=" + email);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text nueu fontSize={42}>
          {i18n.t("auth.signin")}
        </Text>
        <Text>{i18n.t("auth.enterEmail")}</Text>
        <Input
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <Button title={i18n.t("auth.signin")} onPress={signInWithEmail} />
        <Text fontSize={16} nueu style={styles.separator}>
          {i18n.t("auth.or")}
        </Text>
        <Button title={i18n.t("auth.appleSignin")} onPress={signInWithEmail} />
      </View>
      <Text fontSize={24} nueu style={styles.logo}>
        Tulip
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 18,
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 24,
  },
  logo: {
    textAlign: "center",
  },
  separator: {
    textAlign: "center",
    marginVertical: 12,
  },
});
