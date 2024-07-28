import { Button, View } from "react-native";

export default function Index() {
  const onClick = () => {
    console.log("clicked !");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="click me" onPress={onClick} />
    </View>
  );
}
