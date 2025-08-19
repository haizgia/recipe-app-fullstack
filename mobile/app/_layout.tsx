import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import SafeScreen from "@/components/SafeScreen";
import { Provider } from "react-redux";
import { store } from "@/features/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ClerkProvider tokenCache={tokenCache}>
        <SafeScreen>
          <Slot />
        </SafeScreen>
      </ClerkProvider>
    </Provider>
  );
}