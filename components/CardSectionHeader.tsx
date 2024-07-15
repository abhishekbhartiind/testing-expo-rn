import React from "react"
import { View, Text, StyleSheet } from "react-native"

const CardSectionHeader = () => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Connectors</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
})

export default CardSectionHeader
