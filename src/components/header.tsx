import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HeaderProps {
    title: string,
    description: string,
}

const Header = ({title, description}: HeaderProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 900,
    },
    description: {
        fontSize: 16,
        fontWeight: 400,
    },
})