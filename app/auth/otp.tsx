import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Text from "@/components/ui/text";
import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Otp() {
  const [code, setCode] = useState("");

  const { email } = useLocalSearchParams<{ email: string }>();

  async function verifyOtp() {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email: email!,
      token: code,
      type: "email",
    });

    if (error === null && session) {
      router.replace("/");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text nueu fontSize={42}>
          6-digit code
        </Text>
        <Text>A verification code has been sent to {email}</Text>
        <Input
          onChangeText={(text) => setCode(text)}
          value={code}
          placeholder="0123"
          autoComplete="one-time-code"
          keyboardType="number-pad"
          returnKeyType="next"
        />
        <Button title="Verify" onPress={verifyOtp} />
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
