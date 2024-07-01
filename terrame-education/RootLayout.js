import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Test from './components/Test';
import Login from './pages/Login';

import { selectUser } from './features/user/userSlice';

const Stack = createStackNavigator();

export default function RootLayout() {

    const user = useSelector(selectUser)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user.token == null ?
                    <Stack.Screen name="Login" component={Login} options={{ title: 'Log in', headerShown: false }} />
                    :  
                    <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
        </NavigationContainer>            
    );
}