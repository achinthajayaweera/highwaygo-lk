import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function OwnerLogin() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner Login</Text>
      <Text style={styles.subtitle}>Coming soon — owner auth flow</Text>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>‹ Go Back</Text>
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
  backBtn: {
    backgroundColor: "#FFD447",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 18,
  },
  backText: {
    color: "#071A2F",
    fontSize: 16,
    fontWeight: "800",
  },
});
