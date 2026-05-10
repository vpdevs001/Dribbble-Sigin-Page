import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface FieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  security: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  focused?: boolean;
}

const Field = ({
  placeholder,
  value,
  onChangeText,
  security,
  iconName,
  label,
  focused
}: FieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, focused && styles.inputContainerFocused]}>
        <Ionicons name={iconName} size={20} color={focused ? "#8CC63F" : "#999"} />
        <TextInput
          secureTextEntry={security}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#999"
        />
        {security && (
          <Ionicons name="eye-off-outline" size={20} color="#999" />
        )}
      </View>
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  inputContainer: {
    borderRadius: 30,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  inputContainerFocused: {
    borderColor: "#8CC63F",
  },
  input: {
    color: "#333",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1E1E1E",
    marginLeft: 8,
  },
});
