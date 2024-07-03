import Ionicons from '@expo/vector-icons/Ionicons';

export function TabBarIcon({ iconName, color }) {
    return <Ionicons name={iconName} size={28} style={{ marginBottom: -3 }} color={color} />;
}

