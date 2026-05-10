import Field from "@/components/field";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ height: 150, width: 150 }}
      />
      <Text>Sign In</Text>

      <Field
        placeholder="Email"
        value={""}
        onChangeText={() => {}}
        security={false}
        iconName="mail-outline"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    gap: 16,
  },

  heading: {
    fontSize: 40,
    fontWeight: 900,
  },
});
