import { tinkLinkBankAggregationSucceedListner } from "@/modules/tink-link-native";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  useEffect(() => {
    const sub = tinkLinkBankAggregationSucceedListner((e) => {
      console.log(e.authCode);
    });

    return () => sub.remove();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
