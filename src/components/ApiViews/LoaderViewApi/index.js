import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {Colors, AppStyles} from '../../../theme';
import PropTypes from 'prop-types';

const LoaderViewApi = ({style, size, animating}) => (
  <View style={[AppStyles.containerflex, AppStyles.alignCenterView, style]}>
    <ActivityIndicator {...{size, animating}} color={Colors.orange} />
  </View>
);

LoaderViewApi.propTypes = {
  style: ViewPropTypes.style,
  size: PropTypes.oneOf(['small', 'large']),
  animating: PropTypes.bool,
};

LoaderViewApi.defaultProps = {
  size: 'large',
  animating: true,
};

export default LoaderViewApi;
