import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../../theme';

const BottomLoaderViewApi = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={Colors.orange} />
    </View>
  );
};

BottomLoaderViewApi.propTypes = {};

export default BottomLoaderViewApi;

const styles = StyleSheet.create({
  container: {
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
