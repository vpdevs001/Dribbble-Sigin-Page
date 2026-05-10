import Button from "@/components/button";
import Field from "@/components/field";
import Header from "@/components/header";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Colors } from "@/theme/colors";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const theme = Colors.light;

  return (
    <SafeAreaProvider style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={{ height: 100, width: 100 }}
            resizeMode="contain"
          />
        </View>

        <Header
          title="Sign Up For Free"
          description="Sign up in 1 minute for free!"
        />

        <View style={styles.formContainer}>
          <Field
            label={"Email Address"}
            placeholder="Enter your email..."
            value={email}
            onChangeText={setEmail}
            security={false}
            iconName="mail-outline"
          />

          <Field
            label={"Password"}
            placeholder="*****************"
            value={password}
            onChangeText={setPassword}
            security={true}
            iconName="lock-closed-outline"
          />

          <Field
            label={"Password Confirmation"}
            placeholder="*****************"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            security={true}
            iconName="lock-closed-outline"
          />

          <Button text="Sign Up" onPress={() => {}} disabled={false} />
        </View>

        <View style={styles.footerContainer}>
          <Text style={[styles.footerText, { color: theme.textSecondary }]}>Already have an account? </Text>
          <Pressable onPress={() => router.back()}>
            <Text style={[styles.footerLink, { color: theme.primary }]}>Sign In.</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logoContainer: {
    marginBottom: 24,
  },
  formContainer: {
    width: "100%",
    gap: 20,
    marginBottom: 30,
    marginTop: 20,
  },
  footerContainer: {
    flexDirection: "row",
    marginTop: 'auto',
    marginBottom: 40,
  },
  footerText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  footerLink: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
});
