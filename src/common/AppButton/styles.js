import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

export default StyleSheet.create({
  text: {padding: 30},
  buttonStyle: {
    backgroundColor: Colors.black,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.ratio(46, 46, true),
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: Metrics.generatedFontSize(16, 16, true),
  },
});
