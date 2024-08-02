import { connectAccountsForOneTimeAccessListner } from "@/modules/tink-link-native";
import { supabase } from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    BebasNeue_400Regular,
  });
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session || !session.user) {
        router.replace("/auth/");
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session || !session.user) {
        router.replace("/auth/");
      }
    });

    const sub = connectAccountsForOneTimeAccessListner((e) => {
      console.log(e);
    });

    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

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
