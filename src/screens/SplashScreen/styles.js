import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export default StyleSheet.create({
  version: {
    fontWeight: '400',
  },
  versionContainer: {
    position: 'absolute',
    bottom: 20,
    // flex: 1,
    // backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieStyle: {
    height: 150,
    aspectRatio: 1,
  },
});
