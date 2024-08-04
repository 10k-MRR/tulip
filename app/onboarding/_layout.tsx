import { Slot, usePathname } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { PageIndicator } from "react-native-page-indicator";
import Text from "@/components/ui/text";

export default function OnboardingLayout() {
  const pathname = usePathname();
  const routes = [
    "/onboarding/steps",
    "/onboarding/steps/gender",
    "/onboarding/steps/link",
    "/onboarding/steps/succeed",
  ];

  return (
    <>
      <SafeAreaView style={styles.header}>
        <PageIndicator
          style={styles.indicators}
          variant="train"
          count={4}
          current={routes.indexOf(pathname)}
        />
      </SafeAreaView>
      <Slot />
      <SafeAreaView style={styles.header}>
        <Text fontSize={24} nueu>
          Tulip
        </Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  indicators: {
    marginTop: 24,
  },
});
