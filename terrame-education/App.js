import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";

import { store } from "./app/store";
import Test from './components/Test';
import Login from './pages/Login';

const Stack = createStackNavigator();

const user = null

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user == null ?
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{
                                title: 'Log in',
                                headerShown: false
                            }}
                        />
                        :  
                        <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
                    }
                </Stack.Navigator>
            </NavigationContainer>            
        </Provider>
    );
}
