import { StyleSheet, Button, SafeAreaView } from "react-native";
import { supabase } from "@/utils/supabase";
import { router } from "expo-router";

export default function Index() {
  const onPressLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error === null) {
      router.replace("/auth/");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Logout" onPress={onPressLogout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
