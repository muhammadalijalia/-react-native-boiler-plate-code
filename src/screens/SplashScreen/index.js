import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View, Text} from 'react-native';
import {Images} from '../../theme';
import LottieView from 'lottie-react-native';
import styles from './styles';
import SplashScreen from 'react-native-splash-screen';
import VersionInfo from 'react-native-version-info';

export default function CustomSplashScreen() {
  const animationProgress = useRef(new Animated.Value(0));
  const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

  useEffect(() => {
    SplashScreen.hide();
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedLottieView
        style={styles.lottieStyle}
        source={Images.lottie.splash}
        progress={animationProgress.current}
      />
      <View style={styles.versionContainer}>
        <Text style={styles.version}>Version: {VersionInfo.appVersion}</Text>
      </View>
    </View>
  );
}
