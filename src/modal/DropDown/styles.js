import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const ImageContainer = Metrics.screenWidth * 0.32;
const ImageHeight = Metrics.screenWidth * 0.27;

export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  mainContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: Metrics.ratio(10),
    paddingBottom: Metrics.bottomPadding,
    maxHeight: Metrics.screenHeight * 0.55,
  },
  itemContainer: {
    height: 51,
    flexDirection: 'row',
    marginHorizontal: Metrics.ratio(30),
  },
  halfContainer: {
    height: ImageContainer / 2,
  },
  textStyle: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_16,
    color: Colors.blackShade,
  },
  selectedTextStyle: {
    fontFamily: Fonts.type.semiBold,
    color: Colors.primary,
  },
  imageStyle: {
    marginRight: Metrics.ratio(20),
  },
  descriptionStyle: {marginVertical: 12},
  crossContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 7,
  },
  cancelText: {
    marginVertical: 0,
    marginVertical: 30,
    marginLeft: 30,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_16,
    color: Colors.grey,
  },
  cancelWithTitleView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginVertical: 0,
    marginVertical: 30,
    backgroundColor: '',
  },
  titleText: {
    fontFamily: Fonts.type.semiBold,
    fontSize: Fonts.size.size_18,
    color: Colors.blackShade,
    textAlign: 'center',
    flex: 0.88,
  },
  cancelTitleText: {
    marginLeft: 30,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_16,
    color: Colors.grey,
  },
  resetTitleText: {
    // marginRight: 30,
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.size_16,
    color: Colors.grey,
  },
  imageContainer: {
    position: 'absolute',
    left: 50,
    right: 50,
    alignItems: 'center',
  },
  imageBorderContainer: {
    height: ImageContainer,
    width: ImageContainer,
    borderWidth: Metrics.ratio(11),
    borderRadius: ImageContainer / 2,
    borderColor: 'white',
    overflow: 'hidden',
  },
  image: {
    height: ImageHeight,
    width: ImageHeight,
    borderRadius: ImageHeight / 2,
  },
  buttonTextStyle: {
    color: Colors.purply,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.size_20,
  },
  buttonStyle: {
    marginBottom: Metrics.ratio(10),
    marginHorizontal: Metrics.ratio(20),
    borderWidth: 1,
    borderColor: Colors.purply,
  },
});
