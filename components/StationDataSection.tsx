import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const StationDataSection = ({ connectors2 }: any) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = (event: any) => {
      const top = event.nativeEvent.contentOffset.y
      setIsSticky(top >= 70)
    }

    // const dataScrollView = document.querySelector(".station-data-section")
    // if (dataScrollView) dataScrollView.addEventListener("scroll", handleScroll)
    // return () => {
    //   if (dataScrollView)
    //     dataScrollView.removeEventListener("scroll", handleScroll)
    // }
  }, [])

  return (
    <ScrollView style={styles.scrollView} className="station-data-section">
      <View style={[styles.section, isSticky ? styles.sticky : null]}>
        <Ionicons
          name="location-sharp"
          size={24}
          color="white"
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>
            Station ID - {connectors2?.chargerid}
          </Text>
          <Text style={styles.address}>
            {connectors2?.address?.address1} {connectors2?.address?.city}{" "}
            {connectors2?.address?.state} {connectors2?.address?.country}
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  section: {
    backgroundColor: "blue",
    color: "#fffff",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sticky: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  address: {
    fontSize: 12,
    color: "#ffffff",
  },
})

export default StationDataSection
