import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {

    const video = React.useRef(null);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Video</Text>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: "https://d2wji4pp7hnb73.cloudfront.net/Hello%20Darkness%20Ending.mp4",
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#ffffff",
        flexDirection: "row",
        fontSize: 30
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        textAlign: "center"
    },
    video: {
        alignSelf: "center",
        width: 350,
        height: 400,
    },
});
