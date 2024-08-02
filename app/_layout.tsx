import { connectAccountsForOneTimeAccessListner } from "@/modules/tink-link-native";
import { supabase } from "@/utils/supabase";
import { SplashScreen, Stack, router, usePathname } from "expo-router";
import { useEffect } from "react";
import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const pathname = usePathname();
  const [loaded, error] = useFonts({
    BebasNeue_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();

      supabase.auth.onAuthStateChange((_event, session) => {
        if ((!session || !session.user) && pathname !== "/auth/") {
          router.replace("/auth/");
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, error]);

  useEffect(() => {
    const sub = connectAccountsForOneTimeAccessListner((e) => {
      console.log(e);
    });

    return () => sub.remove();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
