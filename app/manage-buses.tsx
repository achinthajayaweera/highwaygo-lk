import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Screen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>‹ Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>manage-buses</Text>
      <Text style={styles.placeholder}>Coming in next version...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F8FF", padding: 24, paddingTop: 60 },
  backBtn: { marginBottom: 20 },
  backText: { fontSize: 18, fontWeight: "800", color: "#1457D9" },
  title: { fontSize: 32, fontWeight: "900", color: "#071A2F", marginBottom: 16 },
  placeholder: { fontSize: 16, color: "#9FB3C8", fontWeight: "700" },
});
