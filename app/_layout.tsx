import { supabase } from "@/utils/supabase";
import { SplashScreen, Stack, router, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";
import { Session } from "@supabase/supabase-js";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const pathname = usePathname();
  const [loaded, error] = useFonts({
    BebasNeue_400Regular,
  });
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();

      supabase.auth.onAuthStateChange((_event, session) => {
        if ((!session || !session.user) && pathname !== "/auth/") {
          router.replace("/auth/");
        } else {
          setSession(session);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, error]);

  useEffect(() => {
    supabase
      .from("profiles")
      .select()
      .eq("id", session?.user.id)
      .single()
      .then((value) => {
        if (value.data && value.data["updated_at"] === null) {
          router.replace("/onboarding/");
        }
      });
  }, [session]);

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
