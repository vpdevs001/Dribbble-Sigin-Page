import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HeaderProps {
    title: string,
    description: string,
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        gap: 8,
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1E1E1E",
    },
    description: {
        fontSize: 14,
        fontWeight: "400",
        color: "#888",
        textAlign: "center",
    },
})