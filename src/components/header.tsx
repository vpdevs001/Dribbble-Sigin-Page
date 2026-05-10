import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/theme/colors'

interface HeaderProps {
    title: string,
    description: string,
}

const Header = ({title, description}: HeaderProps) => {
  const theme = Colors.light;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.textPrimary }]}>{title}</Text>
      <Text style={[styles.description, { color: theme.textSecondary }]}>{description}</Text>
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
        fontFamily: "Poppins-Bold",
    },
    description: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        textAlign: "center",
    },
})
