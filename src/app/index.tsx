import Button from "@/components/button";
import Field from "@/components/field";
import Header from "@/components/header";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
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
            label={'Email Address'}
            placeholder="elementary221b@gmail.com"
            value={""}
            onChangeText={() => {}}
            security={false}
            iconName="mail-outline"
            focused={true}
          />
          
          <Field
            label={'Password'}
            placeholder="Enter your password..."
            value={""}
            onChangeText={() => {}}
            security={true}
            iconName="lock-closed-outline"
          />

          <Button
            text="Sign In"
            onPress={() => {}}
            disabled={false}
          />
        </View>

        <View style={styles.socialContainer}>
          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color="#1E1E1E" />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#1E1E1E" />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-instagram" size={20} color="#1E1E1E" />
          </Pressable>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <Pressable onPress={() => {}}>
            <Text style={styles.footerLink}>Sign Up.</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => {}}>
          <Text style={styles.forgotPassword}>Forgot your password?</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
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
    marginTop: 40
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
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
    color: "#666",
  },
  footerLink: {
    fontSize: 14,
    color: "#8CC63F",
    fontWeight: "600",
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8CC63F",
  },
});
