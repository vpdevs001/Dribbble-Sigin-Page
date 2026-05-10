import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    color: "#1E1E1E",
  },
  description: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#888",
    textAlign: "center",
  },
});
