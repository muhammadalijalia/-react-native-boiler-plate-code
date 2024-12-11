import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    paddingTop: Metrics.ratio(20),
    flex: 1,
    marginHorizontal: Metrics.ratio(16),
    backgroundColor: 'transparent',
  },
  listContainer: {
    // flex: 1,
    paddingTop: Metrics.ratio(10),
    paddingBottom: Metrics.bottomPadding,
    paddingHorizontal: Metrics.ratio(20),
  },
  containerStyle: {
    width: Metrics.screenWidth - 40,
  },
  imageStyle: {
    width: Metrics.ratio(118),
    height: Metrics.ratio(118),
    borderRadius: Metrics.ratio(20),
  },
  imageViewStyle: {
    width: Metrics.ratio(118),
    height: Metrics.ratio(118),
    borderRadius: Metrics.ratio(20),
    alignSelf: 'center',
    marginBottom: Metrics.ratio(50),
  },
  buttonStyle: {
    marginTop: 50,
  },
  titleStyle: {
    fontSize: Fonts.size.size_14,
    color: Colors.GREY,
    fontFamily: Fonts.type.regular,
  },
  nameStyle: {
    fontSize: Fonts.size.size_14,
    color: Colors.blackShade,
    fontFamily: Fonts.type.regular,
    marginLeft: Metrics.ratio(12),
    flex: 1,
  },
  searchTextStyle: {
    fontSize: Fonts.size.size_16,
    color: Colors.grey,
    fontFamily: Fonts.type.light,
    marginLeft: Metrics.ratio(16),
  },
  searchView: {
    flexDirection: 'row',
    width: Metrics.screenWidth * 0.754,
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: Metrics.ratio(58),
    borderRadius: Metrics.ratio(50),
    paddingLeft: Metrics.ratio(20),
    borderWidth: 1,
    borderColor: Colors.whiteShade,
  },
  searchFilterView: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Metrics.ratio(10),
    borderRadius: Metrics.ratio(50),
    borderWidth: 1,
    borderColor: Colors.whiteShade,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  mainSearchView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Metrics.ratio(20),
  },
  marginPageStyle: {
    marginHorizontal: Metrics.ratio(20),
  },
});
