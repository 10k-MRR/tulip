import { View, StyleSheet } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { router } from "expo-router";

export default function Index() {
  function onNextPressed() {
    router.push("/onboarding/");
  }

  return (
    <View style={styles.container}>
      <Text>Link</Text>
      <Button title="next" onPress={onNextPressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
