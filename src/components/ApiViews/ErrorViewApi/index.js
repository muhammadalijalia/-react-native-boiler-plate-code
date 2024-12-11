import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AppStyles, Metrics, Colors, Fonts} from '../../../theme';
import {ButtonView} from '../..';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';

const ErrorViewApi = props => {
  const {errorMessage, onPressRetry, containerStyle, onWhite} = props;
  return (
    <View
      style={[
        AppStyles.container,
        AppStyles.alignCenterView,
        {backgroundColor: Colors.white},
        containerStyle,
      ]}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <ButtonView onPress={onPressRetry} style={styles.retryButton}>
        <Text style={styles.retryMessage}>{'retry'.toLocaleUpperCase()}</Text>
      </ButtonView>
    </View>
  );
};

ErrorViewApi.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onPressRetry: PropTypes.func.isRequired,
  containerStyle: ViewPropTypes.style,
};

ErrorViewApi.defaultProps = {containerStyle: {}};

export default ErrorViewApi;

const styles = StyleSheet.create({
  errorMessage: {
    width: '80%',
    textAlign: 'center',
    lineHeight: Metrics.ratio(24),
    marginTop: Metrics.ratio(32),
    marginBottom: Metrics.ratio(24),
    fontSize: Fonts.size.size_17,
    color: Colors.black,
  },
  retryMessage: {
    fontSize: Fonts.size.size_14,
    color: Colors.black,
  },
  retryButton: {
    paddingVertical: Metrics.midMargin,
    paddingHorizontal: Metrics.baseMargin * 2,
    borderRadius: Metrics.ratio(4),
    backgroundColor: Colors.paleLilac,
  },
  image: {marginTop: Metrics.ratio(-50)},
});
