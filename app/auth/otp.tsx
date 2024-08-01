import { supabase } from "@/utils/supabase";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

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
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCode(text)}
          value={code}
          placeholder="0123"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" onPress={() => verifyOtp()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
