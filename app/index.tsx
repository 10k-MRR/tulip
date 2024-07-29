import { View, StyleSheet, Button } from "react-native";
import { startTinkLinkSDK, succeedListener } from "../modules/tink-link-native";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const sub = succeedListener((e) => {
      console.log(e.authCode);
    });

    return () => sub.remove();
  }, []);

  const onPressHandle = async () => {
    startTinkLinkSDK(
      process.env.EXPO_PUBLIC_TINK_CLIENT_ID!,
      process.env.EXPO_PUBLIC_TINK_REDIRECT_URL!,
    );
  };

  return (
    <View style={styles.container}>
      <Button title="click me" onPress={onPressHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
