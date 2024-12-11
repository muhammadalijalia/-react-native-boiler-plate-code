import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';
import {Util} from '../../utils';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-start',
    margin: 15,
    flex: 1,
  },
  mainContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: Util.isPlatformIOS() ? Metrics.ratio(40) : Metrics.ratio(0),
    borderColor: Colors.PRIMARY,
    borderWidth: 1.5,
    // height: Metrics.ratio(100),
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    width: Metrics.ratio(43),
    height: Metrics.ratio(43),
    borderRadius: Metrics.ratio(16),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(60, 60, 67, 0.36)',
  },
  title: {
    lineHeight: 22,
    fontSize: Fonts.size.size_14,
    fontFamily: Fonts.type.regular,
    color: Colors.BLACK,
    width: Metrics.screenWidth * 0.6,
    marginVertical: 5,
  },
  button: {
    height: Metrics.ratio(35),
    width: Metrics.ratio(30),
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
});
