import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Metrics, Fonts, Colors} from '../../../theme';
import {ButtonView} from '../..';
import PropTypes from 'prop-types';

const BottomErrorViewApi = props => {
  const {errorMessage, onPressRetry} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{errorMessage}</Text>
      <ButtonView onPress={onPressRetry} style={styles.retryButton}>
        <Text style={styles.retryMessage}>{'retry'.toLocaleUpperCase()}</Text>
      </ButtonView>
    </View>
  );
};

BottomErrorViewApi.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onPressRetry: PropTypes.func.isRequired,
};

export default BottomErrorViewApi;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    marginHorizontal: Metrics.midMargin,
    textAlign: 'center',
    lineHeight: Metrics.largeMargin,
    fontSize: Fonts.size.size_15,
    // fontFamily: Fonts.type.medium,
  },
  retryMessage: {
    fontSize: Fonts.size.size_14,
    color: Colors.black,
  },
  retryButton: {
    paddingVertical: Metrics.midMargin,
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.ratio(4),
    // backgroundColor: Colors.paleLilac,
  },
});
