import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { store } from "./app/store";
import RootLayout from "./RootLayout";

export default function App() {

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar backgroundColor="#fff" />
                <RootLayout />
            </SafeAreaProvider>
        </Provider>
    );
}

