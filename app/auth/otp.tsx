import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Text from "@/components/ui/text";
import { i18n } from "@/utils/i18n";
import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Otp() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const { email } = useLocalSearchParams<{ email: string }>();

  async function verifyOtp() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email: email!,
      token: code,
      type: "email",
    });

    if (error === null && session) {
      setLoading(false);
      router.replace("/");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text nueu fontSize={42}>
          {i18n.t("auth.digit")}
        </Text>
        <Text>
          {i18n.t("auth.enterCode")} {email}
        </Text>
        <Input
          onChangeText={(text) => setCode(text)}
          value={code}
          placeholder="012345"
          autoComplete="one-time-code"
          keyboardType="number-pad"
          returnKeyType="next"
        />
        <Button
          isLoading={loading}
          title={i18n.t("auth.verify")}
          onPress={verifyOtp}
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
});
