import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBarIcon } from "./TabBarIcon";
import Home from "../pages/Home";
import Videos from "../pages/Videos";
import Profile from "../pages/Profile";
import Resources from "../pages/Resources";
import Header from "./Header";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#94A168",
                tabBarStyle: {
                    backgroundColor: 'black'
                },
                headerStyle: {
                    height: 250
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon iconName={focused ? "home" : "home-outline"} color={color} />
                    ),
                    headerTitle: () => <Header />
                }} 
            />
            <Tab.Screen 
                name="Videos" 
                component={Videos} 
                options={{
                    title: "Videos",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon iconName={focused ? "videocam" : "videocam-outline"} color={color} />
                    ),
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="Resources" 
                component={Resources} 
                options={{
                    title: "Resources",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon iconName={focused ? "book" : "book-outline"} color={color} />
                    ),
                    headerShown: false
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon iconName={focused ? "person" : "person-outline"} color={color} />
                    ),
                    headerShown: false
                }} 
            />
        </Tab.Navigator>
    );
}
