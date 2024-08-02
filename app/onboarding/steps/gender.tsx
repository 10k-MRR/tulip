import { View, StyleSheet, Pressable } from "react-native";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";
import { router } from "expo-router";
import { Image } from "expo-image";
import { useState } from "react";

export default function Gender() {
  const [maleSelected, setMaleSelected] = useState(false);
  const [femaleSelected, setFemaleSelected] = useState(false);

  function onNextPressed() {
    router.push("/onboarding/steps/link");
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
    <View style={styles.container}>
      <Text nueu fontSize={42}>
        What's your gender ?
      </Text>
      <Text>
        How you want us to call you ? it can be your real name or one you always
        dreamed to have
      </Text>
      <View style={styles.genderContainer}>
        <Pressable style={{ flex: 1, height: 220 }} onPress={onMalePressed}>
          <View
            style={[styles.genderCard, maleSelected && styles.maleSelected]}
          >
            <Image
              style={styles.image}
              source={require("../../../assets/images/male_gender.png")}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <Text style={{ marginTop: 8 }} nueu fontSize={16}>
            Male
          </Text>
        </Pressable>
        <Pressable style={{ flex: 1, height: 220 }} onPress={onFemalePressed}>
          <View
            style={[styles.genderCard, femaleSelected && styles.femaleSelected]}
          >
            <Image
              style={styles.image2}
              source={require("../../../assets/images/woman_gender.png")}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <Text style={{ marginTop: 8 }} nueu fontSize={16}>
            Female
          </Text>
        </Pressable>
      </View>
      <Button
        title="next"
        onPress={onNextPressed}
        disabled={!maleSelected && !femaleSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
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
    backgroundColor: "#EEE",
    flex: 1,
    borderRadius: 8,
    height: 220,
  },
  maleSelected: {
    backgroundColor: "#8ADAB2",
  },
  femaleSelected: {
    backgroundColor: "#FCC8D1",
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
