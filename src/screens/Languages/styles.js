import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: Metrics.bottomPadding,
  },
  titleStyle: {
    fontSize: Fonts.size.size_14,
    color: Colors.blackShade,
    fontFamily: Fonts.type.regular,
    flex: 1,
  },
  cardView: {
    backgroundColor: Colors.white,
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(16),
    height: Metrics.ratio(60),
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
