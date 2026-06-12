import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OwnerDashboard() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("ownerToken");
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner Dashboard</Text>
      <Text style={styles.subtitle}>Coming soon — owner features</Text>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071A2F",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFD447",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#9FB3C8",
    marginBottom: 32,
  },
  logoutBtn: {
    backgroundColor: "#FFD447",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 18,
  },
  logoutText: {
    color: "#071A2F",
    fontSize: 16,
    fontWeight: "800",
  },
});
