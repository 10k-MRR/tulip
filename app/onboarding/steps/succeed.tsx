import { View, StyleSheet } from "react-native";
import Text from "@/components/ui/text";
import { router, useLocalSearchParams } from "expo-router";
import { i18n } from "@/utils/i18n";
import LoaderKit from "react-native-loader-kit";
import { useEffect } from "react";
import { supabase } from "@/utils/supabase";

export default function Index() {
  const { name, gender, code } = useLocalSearchParams<{
    name: string;
    gender: string;
    code: string;
  }>();

  console.log(name, gender, code);

  useEffect(() => {
    supabase.auth.getSession().then((res) => {
      supabase
        .from("profiles")
        .update({ updated_at: new Date(), full_name: name, gender: gender })
        .eq("id", res.data.session?.user.id)
        .then((r) => {
          router.replace("/");
        });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text nueu fontSize={42}>
        {i18n.t("onboarding.step4.title")}
      </Text>
      <Text>{i18n.t("onboarding.step4.desc")}</Text>
      <LoaderKit style={styles.loader} name="BallScaleMultiple" color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  button: {
    marginTop: 12,
  },
  loader: {
    height: 72,
    width: 72,
    alignSelf: "center",
    flex: 1,
  },
});
