import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require("../assets/images/index-bus.png")}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <Text style={styles.title}>HighwayGo LK</Text>

      <Text style={styles.subtitle}>
        Smart highway bus booking with modern seat selection and secure travel
        experience.
      </Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.primaryText}>Passenger Login ›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.ownerButton} onPress={() => {}}>
        <Text style={styles.ownerText}>Owner Login ›</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F4F8FF",
    paddingBottom: 25,
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    marginBottom: 24,
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#071A2F",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 17,
    color: "#4B5B73",
    textAlign: "center",
    lineHeight: 26,
    paddingHorizontal: 28,
    marginBottom: 22,
  },
  primaryButton: {
    width: "90%",
    backgroundColor: "#1457D9",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 14,
  },
  primaryText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 16,
  },
  ownerButton: {
    width: "90%",
    backgroundColor: "#071A2F",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
  },
  ownerText: {
    color: "#FFD447",
    fontWeight: "900",
    fontSize: 16,
  },
});
