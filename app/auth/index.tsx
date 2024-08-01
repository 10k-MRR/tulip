import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";

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
        <Text>Enter your email address to sign in into your tulip account</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
        />
        <Pressable style={styles.button} onPress={signInWithEmail}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
        <Text style={styles.separator}>or</Text>
        <Pressable style={styles.button} onPress={signInWithEmail}>
          <Text style={styles.buttonText}>Sign in with apple</Text>
        </Pressable>
      </View>
      <View style={styles.spacer}>
        <Text style={styles.logo}>Tulip</Text>
      </View>
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
  button: {
    height: 42,
    borderRadius: 4,
    backgroundColor: "#000",
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
  },
  input: {
    height: 48,
    borderWidth: 2,
    borderColor: "#EEE",
    borderRadius: 4,
    padding: 12,
    marginTop: 12,
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
  spacer: {},
  separator: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },
});
