import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  errorText: {
    fontSize: Fonts.size.size_12,
    color: Colors.errorInput,
    marginTop: Metrics.ratio(8),
    marginLeft: Metrics.ratio(10),
  },
});
