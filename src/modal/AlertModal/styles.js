import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  modal: {
    margin: 50,
  },
  mainContainer: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: Colors.lightGrey,
  },
  title: {
    lineHeight: 22,
    textAlign: 'center',
    fontSize: Fonts.size.size_17,
    fontFamily: Fonts.type.medium,
    color: Colors.dark,
  },
  totalScoreStyles: {
    fontSize: 14,
    fontFamily: Fonts.type.regular,
    fontWeight: '400',
    color: Colors.black,
  },
  nassuContainer: {
    width: Metrics.screenWidth - 140,
    flexDirection: 'row',
    marginHorizontal: Metrics.ratio(20),
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalScoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    backgroundColor: Colors.lightMercury,
    borderRadius: Metrics.ratio(4),
  },
  description: {
    marginTop: Metrics.ratio(12),
    marginBottom: Metrics.ratio(17),
    marginHorizontal: 30,
    lineHeight: 18,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_13,
    textAlign: 'center',
    color: Colors.dark,
  },
  button: {
    flex: 1,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderRightColor: Colors.lightGrey,
  },
  nameText: {
    fontSize: 14,
    fontFamily: Fonts.type.regular,
    fontWeight: '400',
    color: Colors.black,
  },
  buttonText: {
    fontSize: Fonts.size.size_17,
    fontFamily: Fonts.type.regular,
    color: Colors.primary,
  },
  buttonTextYes: {
    fontSize: Fonts.size.size_17,
    fontFamily: Fonts.type.bold,
    color: Colors.primary,
  },
  buttonSeparator: {
    width: 0.5,
    backgroundColor: Colors.greyTransRGB,
  },
});
