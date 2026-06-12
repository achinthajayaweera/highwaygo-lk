import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HighwayGo LK</Text>
      <Text style={styles.subtitle}>Home screen — coming soon</Text>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.logoutText}>Back to Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#071A2F",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5B73",
    marginBottom: 32,
  },
  logoutBtn: {
    backgroundColor: "#1457D9",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 18,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
});
