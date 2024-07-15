import { Banner } from "@/components/banner"
import { Header } from "@/components/header"
import React, { useState } from "react"
import { ScrollView, View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import StationDataSection from "@/components/StationDataSection"
import CardSectionHeader from "@/components/CardSectionHeader"
import CardListItems from "@/components/CardListItems"
import { Connectors } from "@/constants/Connectors"

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  const [connectors, setConnectors] = useState<any[]>(Connectors)
  const [connectors2, setConnectors2] = useState<any>({
    chargerid: "UZX67CH0943",
    address: {
      address1: "21 Avenue, Metropolitan Mall, Downtown, New York City",
    },
  })

  const openModal = (connector: any) => {
    // Modal handling code
  }

  return (
    <ScrollView className="bg-slate-200 flex-1">
      <View className="w-full" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
      </View>
      <View style={styles.container}>
        <StationDataSection connectors2={connectors2} />
        <CardSectionHeader />
        <CardListItems connectors={connectors} openModal={openModal} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
})
