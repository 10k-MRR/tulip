import Button from "@/components/ui/button";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet, TextInput, Text, SafeAreaView } from "react-native";

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
        <Text style={styles.title}>Sign in</Text>
        <Text>Enter your email address to sign into your tulip account</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <Button title="Sign in" onPress={signInWithEmail} />
        <Text style={styles.separator}>or</Text>
        <Button title="Sign in with apple" onPress={signInWithEmail} />
      </View>
      <Text style={styles.logo}>Tulip</Text>
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
  input: {
    height: 48,
    borderWidth: 2,
    borderColor: "#EEE",
    borderRadius: 4,
    padding: 12,
    marginVertical: 12,
  },
  title: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 42,
  },
  logo: {
    fontFamily: "BebasNeue_400Regular",
    fontSize: 24,
    textAlign: "center",
  },
  separator: {
    textAlign: "center",
    marginVertical: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
