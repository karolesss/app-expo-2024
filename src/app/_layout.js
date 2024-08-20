import { Stack } from "expo-router";
import { AppProvider } from "../hooks";
import { Text } from "react-native";

export default function Layout() {
  return (
    <AppProvider>
      <Stack />
    </AppProvider>
  );
}
