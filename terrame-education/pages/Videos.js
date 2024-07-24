import { View, StyleSheet } from 'react-native';

import ParallaxScrollView from '../components/ParallaxScrollView';
import VideoPlayer from '../components/VideoPlayer';

export default function Videos() {
    
    return (
        <View style={styles.container}>
            <ParallaxScrollView>
                <View style={styles.container}>
                    <VideoPlayer />
                    <VideoPlayer />
                    <VideoPlayer />
                </View>
            </ParallaxScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2a3312'
	},
});