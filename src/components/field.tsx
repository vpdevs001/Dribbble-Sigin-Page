import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface FieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  security: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
}

const Field = ({
  placeholder,
  value,
  onChangeText,
  security,
  iconName,
}: FieldProps) => {
  return (
    <View style={styles.inputContainer}>
      {/* Create an icon such that it appears at the beginning of the input inside of it */}

      <Ionicons style={styles.icon} name={iconName} size={20} color="#333" />
      <TextInput
        secureTextEntry={security}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  input: {
    color: "#333",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    paddingLeft: 16,
  },

  icon: {
    position: "absolute",
    left: 16,
    top: 16,
  },
});
