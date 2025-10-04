import { Slot } from "expo-router";
import { ClerkProvider } from '@clerk/clerk-expo'
import SafeScreen from "@/components/SafeScreen"

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey="pk_test_Y2hvaWNlLXdhaG9vLTg5LmNsZXJrLmFjY291bnRzLmRldiQ">
      <SafeScreen>
        <Slot/>
      </SafeScreen>
  </ClerkProvider>
  );
}
