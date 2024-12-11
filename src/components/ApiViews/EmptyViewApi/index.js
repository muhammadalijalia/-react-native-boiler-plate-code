import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AppStyles, Metrics, Fonts, Colors} from '../../../theme';
import PropTypes from 'prop-types';

const EmptyViewApi = props => {
  const {emptyMessage} = props;
  return (
    <View style={[AppStyles.container, AppStyles.alignCenterView]}>
      <Text style={styles.message}>{emptyMessage}</Text>
    </View>
  );
};

EmptyViewApi.propTypes = {
  emptyMessage: PropTypes.string,
};

EmptyViewApi.defaultProps = {
  emptyMessage: 'No Result Found',
};

export default EmptyViewApi;

const styles = StyleSheet.create({
  message: {
    width: '80%',
    textAlign: 'center',
    lineHeight: Metrics.ratio(24),
    marginTop: Metrics.ratio(-20),
    fontSize: Fonts.size.size_18,
    color: Colors.orange,
  },
  image: {
    //  marginTop: Metrics.ratio(-100)
  },
});
