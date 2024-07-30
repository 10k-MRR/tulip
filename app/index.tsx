import { View, StyleSheet, Button } from "react-native";
import { connectAccountsForOneTimeAccess } from "../modules/tink-link-native";

export default function Index() {
  const onPressHandle = async () => {
    connectAccountsForOneTimeAccess(
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
