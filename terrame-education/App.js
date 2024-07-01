import { Provider } from "react-redux";

import { store } from "./app/store";
import RootLayout from "./RootLayout";

export default function App() {

    return (
        <Provider store={store}>
            <RootLayout />
        </Provider>
    );
}

