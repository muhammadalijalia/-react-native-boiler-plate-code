import {StyleSheet} from 'react-native';
import {Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.ratio(20),
  },
  buttonStyle: {
    marginTop: 50,
  },
  forgotPassword: {
    marginTop: Metrics.ratio(10),
    alignSelf: 'flex-end',
  },
  signupText: {
    marginTop: Metrics.ratio(10),
    alignSelf: 'center',
  },
});
