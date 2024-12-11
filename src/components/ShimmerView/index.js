import React, {useEffect, useState} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {useSelector} from 'react-redux';
import {getRequestFlag} from '../../ducks/requestFlags';
import LinearGradient from 'react-native-linear-gradient';

export const ShimmerView = ({shimmerStyle, childs}) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const avatarRef = React.createRef();
  const [visible, setVisible] = useState(false);

  const requestFlag = useSelector(getRequestFlag('GET_LIST'));

  useEffect(() => {
    animateShimmer();
    // Util.checkAppStoreVersion()
  }, []);

  const animateShimmer = () => {
    const facebookAnimated = Animated.stagger(400, [
      avatarRef?.current?.getAnimated(),
      Animated.parallel([]),
    ]);
    Animated.loop(facebookAnimated).start();

    // setTimeout(() => {
    //   setVisible(!visible);
    // }, 40000);

    setVisible(!requestFlag.loading);
  };

  return (
    <View>
      <ShimmerPlaceholder
        shimmerStyle={shimmerStyle}
        visible={visible}
        ref={avatarRef}
        stopAutoRun>
        <View style={shimmerStyle}>{childs}</View>
      </ShimmerPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({});
