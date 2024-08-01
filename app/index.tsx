import { View, StyleSheet, Button } from "react-native";
import { connectAccountsForOneTimeAccess } from "../modules/tink-link-native";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";

export default function Index() {
  const onPressHandle = async () => {
    connectAccountsForOneTimeAccess(
      process.env.EXPO_PUBLIC_TINK_CLIENT_ID!,
      process.env.EXPO_PUBLIC_TINK_REDIRECT_URL!,
    );
  };

  const onPressLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error === null) {
      router.replace("/auth/");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Tink link" onPress={onPressHandle} />
      <Button title="Logout" onPress={onPressLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
