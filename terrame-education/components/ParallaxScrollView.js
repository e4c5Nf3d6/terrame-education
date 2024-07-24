import { Dimensions, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

export default function ParallaxScrollView(props) {

    const scrollRef = useAnimatedRef();
	const scrollOffset = useScrollViewOffset(scrollRef);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
                    )
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-IMG_HEIGHT, 0, IMG_HEIGHT],
                        [2, 1, 1]
                    )
                }
            ]
        }
    });
    
    return (
        <SafeAreaView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} >
                    <Animated.Image
                        source={require("../assets/terrameedu.png")}
                        style={[styles.image, imageAnimatedStyle]}
                    />
                    <View>
                        {props.children}
                    </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2a3312'
	},
	image: {
		width,
		height: width / 2,
        backgroundColor: "#fff"
	}
});