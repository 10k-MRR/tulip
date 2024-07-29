import { View, StyleSheet, Button } from "react-native";

export default function Index() {
  const onPressHandle = () => {
    console.log("clicked");
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
