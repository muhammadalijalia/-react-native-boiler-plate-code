import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: Metrics.bottomPadding,
  },
  buttonStyle: {
    marginTop: 50,
  },
  titleStyle: {
    fontSize: Fonts.size.size_14,
    color: Colors.blackShade,
    fontFamily: Fonts.type.regular,
    flex: 1,
  },
  imageView: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    borderRadius: Metrics.ratio(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    transform: [{rotate: '180deg'}],
  },
  cardView: {
    backgroundColor: Colors.white,
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(16),
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
