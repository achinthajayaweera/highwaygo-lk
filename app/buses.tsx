import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Buses() {
  const { from, to, date, passengers } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Text style={styles.backText}>‹ Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Bus Results</Text>
      <Text style={styles.route}>{from} → {to}</Text>
      <Text style={styles.info}>Date: {date}  |  Passengers: {passengers}</Text>
      <Text style={styles.placeholder}>Bus listings coming in next version...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FF",
    padding: 24,
    paddingTop: 60,
  },
  backBtn: { marginBottom: 20 },
  backText: { fontSize: 18, fontWeight: "800", color: "#1457D9" },
  title: { fontSize: 32, fontWeight: "900", color: "#071A2F", marginBottom: 8 },
  route: { fontSize: 20, fontWeight: "900", color: "#1457D9", marginBottom: 6 },
  info: { fontSize: 15, color: "#667085", marginBottom: 24 },
  placeholder: { fontSize: 16, color: "#9FB3C8", fontWeight: "700" },
});
