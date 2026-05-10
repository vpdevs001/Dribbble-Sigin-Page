import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/theme/colors";

const Button = ({
  text,
  onPress,
  disabled,
}: {
  text: string;
  onPress: () => void;
  disabled: boolean;
}) => {
  const theme = Colors.light;

  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.button, { backgroundColor: theme.primary, shadowColor: theme.primary }]} 
        onPress={onPress} 
        disabled={disabled}
      >
        <Text style={styles.text}>{text}</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 5,
    marginBottom: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});
