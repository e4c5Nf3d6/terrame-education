import { StyleSheet, Text, View } from 'react-native';

export default function Resources() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resources</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a3312',
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