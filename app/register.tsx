import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Alert,
} from "react-native";
import { router } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    // TODO: connect to API
    Alert.alert("Info", "Registration coming soon");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Join HighwayGo LK and start booking today.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#8A98AA"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#8A98AA"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create password"
          placeholderTextColor="#8A98AA"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
          <Text style={styles.primaryText}>Create Account ›</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.loginLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F4F8FF",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 60,
  },
  header: {
    width: "90%",
    marginBottom: 24,
  },
  backBtn: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1457D9",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#071A2F",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5B73",
    lineHeight: 24,
  },
  card: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 5,
  },
  label: {
    color: "#071A2F",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#D8E2F0",
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    fontSize: 16,
    color: "#071A2F",
    backgroundColor: "#F8FBFF",
  },
  primaryButton: {
    backgroundColor: "#1457D9",
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 6,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },
  loginLink: {
    color: "#1457D9",
    fontSize: 15,
    fontWeight: "800",
    marginTop: 22,
  },
});
