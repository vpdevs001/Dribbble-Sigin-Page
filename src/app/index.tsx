import Button from "@/components/button";
import Field from "@/components/field";
import Header from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Colors } from "@/theme/colors";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          title="Sign In"
          description="Let's experience the joy of telecare AI."
        />

        <View style={styles.formContainer}>
          <Field
            label={"Email Address"}
            placeholder="elementary221b@gmail.com"
            value={email}
            onChangeText={setEmail}
            security={false}
            iconName="mail-outline"
          />

          <Field
            label={"Password"}
            placeholder="Enter your password..."
            value={password}
            onChangeText={setPassword}
            security={true}
            iconName="lock-closed-outline"
          />

          <Button text="Sign In" onPress={() => {}} disabled={false} />
        </View>

        <View style={styles.socialContainer}>
          <Pressable style={[styles.socialButton, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
            <Ionicons name="logo-facebook" size={20} color={theme.textPrimary} />
          </Pressable>
          <Pressable style={[styles.socialButton, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
            <Ionicons name="logo-google" size={20} color={theme.textPrimary} />
          </Pressable>
          <Pressable style={[styles.socialButton, { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder }]}>
            <Ionicons name="logo-instagram" size={20} color={theme.textPrimary} />
          </Pressable>
        </View>

        <View style={styles.footerContainer}>
          <Text style={[styles.footerText, { color: theme.textSecondary }]}>Don't have an account? </Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text style={[styles.footerLink, { color: theme.primary }]}>Sign Up.</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => router.push("/forgotPassword")}>
          <Text style={[styles.forgotPassword, { color: theme.primary }]}>Forgot your password?</Text>
        </Pressable>
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
    marginTop: 40,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 30,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  footerContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
  footerLink: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
  },
});
