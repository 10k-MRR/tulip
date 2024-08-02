import { View, StyleSheet, Pressable } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { useState } from "react";
import { i18n } from "@/utils/i18n";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Gender() {
  const [maleSelected, setMaleSelected] = useState(false);
  const [femaleSelected, setFemaleSelected] = useState(false);

  const { name } = useLocalSearchParams<{ name: string }>();

  const localStyles = ls(
    useThemeColor({}, "bg"),
    useThemeColor({}, "cardBg"),
    useThemeColor({}, "select1"),
    useThemeColor({}, "select2"),
  );

  function onNextPressed() {
    let gender = "skip";
    if (maleSelected) {
      gender = "male";
    } else if (femaleSelected) {
      gender = "female";
    }
    router.push(`/onboarding/steps/link?name=${name}&gender=${gender}`);
  }

  function onMalePressed() {
    setMaleSelected(!maleSelected);
    setFemaleSelected(false);
  }

  function onFemalePressed() {
    setFemaleSelected(!femaleSelected);
    setMaleSelected(false);
  }

  return (
    <View style={localStyles.container}>
      <Text nueu fontSize={42}>
        {i18n.t("onboarding.step2.title")}
      </Text>
      <Text>{i18n.t("onboarding.step2.desc")}</Text>
      <View style={localStyles.genderContainer}>
        <Pressable style={{ flex: 1, height: 220 }} onPress={onMalePressed}>
          <View
            style={[
              localStyles.genderCard,
              maleSelected && localStyles.maleSelected,
            ]}
          >
            <Image
              style={localStyles.image}
              source={require("../../../assets/images/male_gender.png")}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <Text style={{ marginTop: 8 }} nueu fontSize={16}>
            {i18n.t("onboarding.step2.male")}
          </Text>
        </Pressable>
        <Pressable style={{ flex: 1, height: 220 }} onPress={onFemalePressed}>
          <View
            style={[
              localStyles.genderCard,
              femaleSelected && localStyles.femaleSelected,
            ]}
          >
            <Image
              style={localStyles.image2}
              source={require("../../../assets/images/woman_gender.png")}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <Text style={{ marginTop: 8 }} nueu fontSize={16}>
            {i18n.t("onboarding.step2.female")}
          </Text>
        </Pressable>
      </View>
      <Button
        title={
          !maleSelected && !femaleSelected
            ? i18n.t("onboarding.step2.skip")
            : i18n.t("onboarding.step2.button")
        }
        onPress={onNextPressed}
      />
    </View>
  );
}

const ls = (bg: string, cardBg: string, select1: string, select2: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: bg,
    },
    wrapper: {
      alignItems: "center",
      justifyContent: "center",
    },
    genderContainer: {
      flexDirection: "row",
      marginVertical: 12,
      gap: 12,
    },
    genderCard: {
      backgroundColor: cardBg,
      flex: 1,
      borderRadius: 8,
      height: 220,
    },
    maleSelected: {
      backgroundColor: select1,
    },
    femaleSelected: {
      backgroundColor: select2,
    },
    image: {
      flex: 1,
      borderRadius: 8,
      width: "100%",
      margin: "auto",
    },
    image2: {
      flex: 1,
      borderRadius: 8,
      width: "90%",
      margin: "auto",
    },
  });
