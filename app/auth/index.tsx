import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

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
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Text style={styles.logo}>Tulip</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" onPress={() => signInWithEmail()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
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
    borderWidth: 1,
    padding: 10,
  },
  logo: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 72,
  },
});
