import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({text, onPress, disabled}: {text: string, onPress: () => void, disabled: boolean}) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5352ED",
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 10,
    },

    text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        textAlign: "center",
    },
})