import Button from "@/components/button";
import Header from "@/components/header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "@/theme/colors";

export default function ForgotPassword() {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState("2fa");
  const theme = Colors.light;

  return (
    <SafeAreaProvider style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Pressable style={[styles.backButton, { backgroundColor: theme.iconContainer }]} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color={theme.textPrimary} />
          </Pressable>
        </View>

        <Header
          title="Forgot Password"
          description="Select which methods you'd like to reset."
        />

        <View style={styles.methodsContainer}>
          <Pressable 
            style={[
              styles.methodCard, 
              { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder },
              selectedMethod === "email" && { borderColor: theme.primary, shadowColor: theme.primary }
            ]}
            onPress={() => setSelectedMethod("email")}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme.iconContainer }, selectedMethod === "email" && { backgroundColor: theme.iconContainerSelected }]}>
              <Ionicons name="mail" size={20} color={selectedMethod === "email" ? theme.primary : theme.inputIcon} />
            </View>
            <View style={styles.methodTextContainer}>
              <Text style={[styles.methodTitle, { color: theme.textPrimary }]}>Email Address</Text>
              <Text style={[styles.methodSubtitle, { color: theme.textSecondary }]}>Send via email address securely.</Text>
            </View>
          </Pressable>

          <Pressable 
            style={[
              styles.methodCard, 
              { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder },
              selectedMethod === "2fa" && { borderColor: theme.primary, shadowColor: theme.primary }
            ]}
            onPress={() => setSelectedMethod("2fa")}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme.iconContainer }, selectedMethod === "2fa" && { backgroundColor: theme.iconContainerSelected }]}>
              <Ionicons name="phone-portrait" size={20} color={selectedMethod === "2fa" ? theme.primary : theme.inputIcon} />
            </View>
            <View style={styles.methodTextContainer}>
              <Text style={[styles.methodTitle, { color: theme.textPrimary }]}>2 Factor Authentication</Text>
              <Text style={[styles.methodSubtitle, { color: theme.textSecondary }]}>Send via 2FA securely.</Text>
            </View>
          </Pressable>

          <Pressable 
            style={[
              styles.methodCard, 
              { backgroundColor: theme.cardBackground, borderColor: theme.cardBorder },
              selectedMethod === "auth" && { borderColor: theme.primary, shadowColor: theme.primary }
            ]}
            onPress={() => setSelectedMethod("auth")}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme.iconContainer }, selectedMethod === "auth" && { backgroundColor: theme.iconContainerSelected }]}>
              <Ionicons name="lock-closed" size={20} color={selectedMethod === "auth" ? theme.primary : theme.inputIcon} />
            </View>
            <View style={styles.methodTextContainer}>
              <Text style={[styles.methodTitle, { color: theme.textPrimary }]}>Google Authenticator</Text>
              <Text style={[styles.methodSubtitle, { color: theme.textSecondary }]}>Send via authenticator securely.</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.buttonContainer}>
          <Button text="Reset Password" onPress={() => {}} disabled={false} />
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
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  topBar: {
    width: "100%",
    marginBottom: 30,
    alignItems: "flex-start",
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  methodsContainer: {
    width: "100%",
    gap: 16,
    marginTop: 30,
    marginBottom: 40,
  },
  methodCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  methodTextContainer: {
    flex: 1,
    gap: 4,
  },
  methodTitle: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  methodSubtitle: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  buttonContainer: {
    width: "100%",
  },
});
