import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";

const Button = ({text, onPress, disabled}: {text: string, onPress: () => void, disabled: boolean}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{text}</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" />
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 5,
        marginBottom: 15
    },
    button: {
        backgroundColor: "#8CC63F",
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 30,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        shadowColor: "#8CC63F",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        fontWeight: "600",
        textAlign: "center",
    },
})