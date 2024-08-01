import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Text from "@/components/ui/text";
import { i18n } from "@/utils/i18n";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";

export default function Index() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {},
    });
    if (error === null) {
      setLoading(false);
      router.replace("/auth/otp?email=" + email);
    }
  }

  async function signInWithApple() {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });

    if (credential.identityToken) {
      const { error } = await supabase.auth.signInWithIdToken({
        provider: "apple",
        token: credential.identityToken,
      });

      if (!error) {
        router.replace("/");
      }
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
        <Button
          isLoading={loading}
          title={i18n.t("auth.signin")}
          onPress={signInWithEmail}
        />
        <Text fontSize={16} nueu style={styles.separator}>
          {i18n.t("auth.or")}
        </Text>
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={
            AppleAuthentication.AppleAuthenticationButtonType.CONTINUE
          }
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={4}
          style={styles.appleButton}
          onPress={signInWithApple}
        />
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
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  card: {
    padding: 24,
  },
  logo: {
    textAlign: "center",
  },
  separator: {
    textAlign: "center",
    marginVertical: 12,
  },
  appleButton: {
    height: 42,
  },
});
