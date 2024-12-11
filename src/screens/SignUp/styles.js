import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.ratio(20),
  },
  buttonStyle: {
    marginTop: 50,
  },
  imageView: {
    marginTop: Metrics.ratio(35),
  },
  uploadText: {
    marginTop: Metrics.ratio(6),
    color: Colors.black,
  },
  imageStyle: {
    height: Metrics.ratio(80),
    width: Metrics.ratio(80),
    borderRadius: Metrics.ratio(40),
  },
});
