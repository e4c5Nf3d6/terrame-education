import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Resources() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resources</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A11',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 50,
        marginBottom: 40
    },
});