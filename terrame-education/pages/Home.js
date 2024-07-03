import { Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return (

        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    
                    <View style={styles.titleContainer}>
                        <Text style={styles.subtitle}>Sons of Gondor, of Rohan, my brothers,</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.text}>I see in your eyes the same fear that would take the heart of me.</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.text}>A day may come when the courage of men fails,</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.text}>when we forsake our friends and break all bonds of fellowship,</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.subtitle}>but it is not this day.</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.text}>An hour of wolves and shattered shields,</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.text}>when the age of men comes crashing down,</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.subtitle}>BUT IT IS NOT THIS DAY!</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.subtitle}>This day we fight!</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.text}>By all that you hold dear on this good Earth,</Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.subtitle}>I bid you stand,</Text>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Men</Text>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>OF THE WEST!</Text>
                    </View>

                    <Image
                        source={require('../assets/stand.png')}
                        style={{margin: 20, width: 350, height: 200}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A11',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        margin: 8,
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 50,
        marginBottom: 40,
        textAlign: "center"
    },
    subtitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        marginBottom: 20,
        textAlign: "center"       
    },
    text: {
        color: "#fff",
        marginBottom: 20,
        fontSize: 15,
        textAlign: "center"
    },

});
