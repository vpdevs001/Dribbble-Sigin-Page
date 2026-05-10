import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "@/theme/colors";

interface FieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  security: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
}

const Field = ({
  placeholder,
  value,
  onChangeText,
  security,
  iconName,
  label,
}: FieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = Colors.light;

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: theme.textPrimary }]}>{label}</Text>
      <View style={[
        styles.inputContainer,
        { backgroundColor: theme.inputBackground, borderColor: theme.inputBorder },
        isFocused && { borderColor: theme.inputBorderFocused }
      ]}>
        <Ionicons name={iconName} size={20} color={isFocused ? theme.primary : theme.inputIcon} />
        <TextInput
          secureTextEntry={security}
          style={[styles.input, { color: theme.inputText }]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={theme.inputIcon}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {security && (
          <Ionicons name="eye-off-outline" size={20} color={theme.inputIcon} />
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
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  input: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    flex: 1,
  },
  label: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    marginLeft: 8,
  },
});
