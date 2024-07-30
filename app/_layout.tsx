import { connectAccountsForOneTimeAccessListner } from "@/modules/tink-link-native";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const sub = connectAccountsForOneTimeAccessListner((e) => {
      console.log(e);
    });

    return () => sub.remove();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
