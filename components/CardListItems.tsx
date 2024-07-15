import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from "react-native"

interface Connector {
  status: string
  img1: string
  type: string
  price: number
  slot1: string
  slot2: string
  slot3: string
  available: boolean
  sessionFee1: string
  sessionFee: string
  parkingFee: string
}

interface Props {
  connectors: Connector[]
  openModal: (connector: Connector) => void
}

const CardListItems: React.FC<Props> = ({ connectors, openModal }) => {
  const renderItem: ListRenderItem<Connector> = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        item.status === "Available" && styles.boxShadow,
        item.status === "Faulted" && styles.borderFaulted,
      ]}
      onPress={() => openModal(item)}
    >
      {item.status === "Available" ? (
        <View style={styles.spacer} />
      ) : (
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.statusText,
              item.status === "In use" && styles.statusInUse,
              item.status === "Faulted" && styles.statusFaulted,
              item.status === "Fast charger" && styles.statusFastCharger,
            ]}
          >
            {item.status === "Fast charger" ? (
              <Image
                style={styles.statusIcon}
                source={require("../assets/payu/imgpsh_fullsize_anim.png")}
                resizeMode="contain"
              />
            ) : null}
            {item.status}
          </Text>
        </View>
      )}
      <View
        style={[
          styles.connectorInfo,
          item.available ? styles.borderAvailable : styles.opacity,
        ]}
      >
        <Image
          source={require("../assets/payu/card1.png")}
          style={styles.connectorImage}
          resizeMode="contain"
        />
        <Text style={styles.connectorType}>{item.type}</Text>
        <Text style={styles.connectorPrice}>${item.price}</Text>
        <Text style={styles.connectorSlot}>
          {item.slot1} • {item.slot2} • {item.slot3}
        </Text>
      </View>
      <View
        style={[
          styles.feeContainer,
          item.available ? styles.borderAvailable : styles.opacity,
        ]}
      >
        <Text style={styles.feeText}>
          {item.sessionFee1} {item.sessionFee}
        </Text>
        <View style={styles.divider} />
        <Text style={styles.parkingFee}>{item.parkingFee}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={connectors}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.grid}
    />
  )
}

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 16,
    marginBottom: 64,
  },
  card: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    margin: 8,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  borderFaulted: {
    borderColor: "red",
    borderWidth: 1,
  },
  statusContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  statusText: {
    marginTop: 4,
    fontSize: 12,
    padding: 4,
    borderRadius: 18,
  },
  statusInUse: {
    backgroundColor: "#5D5E60",
    color: "white",
  },
  statusFaulted: {
    backgroundColor: "#ff2a2a",
    color: "white",
  },
  statusFastCharger: {
    borderColor: "#FFDA44",
    backgroundColor: "white",
    color: "#FFDA44",
  },
  statusIcon: {
    height: 16,
    marginRight: 4,
  },
  spacer: {
    marginTop: 16,
    width: "100%",
  },
  connectorInfo: {
    marginHorizontal: 16,
    marginBottom: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  borderAvailable: {
    borderColor: "#F5F5F5",
    borderWidth: 1,
  },
  opacity: {
    opacity: 0.5,
  },
  connectorImage: {
    height: 76,
    width: 76,
    marginBottom: 16,
  },
  connectorType: {
    height: 21,
    width: "100%",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
  },
  connectorPrice: {
    height: 16,
    width: "100%",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  connectorSlot: {
    marginTop: 8,
    padding: 4,
    color: "white",
    fontWeight: "400",
    fontSize: 12,
    textAlign: "center",
    backgroundColor: "rgba(60, 185, 80, 1)",
    borderRadius: 12,
  },
  feeContainer: {
    backgroundColor: "#f0f0f0",
    marginTop: 16,
    paddingVertical: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  feeText: {
    fontWeight: "600",
    fontSize: 12,
    color: "#3C4043",
  },
  divider: {
    width: "50%",
    height: 1,
    backgroundColor: "#3C4043",
    marginVertical: 4,
  },
  parkingFee: {
    fontWeight: "600",
    fontSize: 12,
    color: "#3C4043",
  },
})

export default CardListItems
