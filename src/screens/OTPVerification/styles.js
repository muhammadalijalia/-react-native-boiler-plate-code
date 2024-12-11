import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  txtStyle: {
    marginTop: Metrics.ratio(10),
    lineHeight: Metrics.ratio(24),
    color: Colors.black,
  },
  cellStyle: {
    // ...Fonts.inter.regular,
    fontSize: Fonts.size.size_12,
    color: Colors.GREY,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    lineHeight: Metrics.ratio(50),
  },
  focusCellStyle: {
    borderColor: Colors.black,
    backgroundColor: Colors.PRIMARY_INPUT,
  },
  containerFieldsStyle: {
    marginTop: Metrics.ratio(20),
  },
  codeFieldStyle: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    borderRadius: 10,
    borderColor: Colors.PRIMARY_INPUT,
    borderWidth: 1,
    marginRight: Metrics.ratio(8),
    backgroundColor: Colors.PRIMARY_INPUT,
  },
  containerTimerStyle: {marginTop: Metrics.ratio(10)},
  txtTimerStyle: {marginLeft: Metrics.ratio(6)},
  btnSendStyle: {
    marginTop: Metrics.ratio(30),
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 1,
  },
  btnStyle: {
    marginTop: Metrics.ratio(120),
  },
});
