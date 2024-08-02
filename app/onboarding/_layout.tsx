import { Slot, usePathname } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { PageIndicator } from "react-native-page-indicator";

export default function OnboardingLayout() {
  const pathname = usePathname();
  const routes = [
    "/onboarding/steps",
    "/onboarding/steps/gender",
    "/onboarding/steps/link",
  ];

  return (
    <>
      <SafeAreaView style={styles.header}>
        <PageIndicator
          style={styles.indicators}
          variant="train"
          count={3}
          current={routes.indexOf(pathname)}
        />
      </SafeAreaView>
      <Slot />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  indicators: {
    marginTop: 24,
  },
});
