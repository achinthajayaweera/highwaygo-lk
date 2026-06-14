import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="buses" options={{ headerShown: false }} />
        <Stack.Screen name="seat-selection" options={{ headerShown: false }} />
        <Stack.Screen name="payment" options={{ headerShown: false }} />
        <Stack.Screen name="booking-success" options={{ headerShown: false }} />
        <Stack.Screen name="my-bookings" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="live-track" options={{ headerShown: false }} />
        <Stack.Screen name="owner-login" options={{ headerShown: false }} />
        <Stack.Screen name="owner-dashboard" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
