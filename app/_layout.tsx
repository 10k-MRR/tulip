import { connectAccountsForOneTimeAccessListner } from "@/modules/tink-link-native";
import { supabase } from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
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
    });
  }, []);

  useEffect(() => {
    const sub = connectAccountsForOneTimeAccessListner((e) => {
      console.log(e);
    });

    return () => sub.remove();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
