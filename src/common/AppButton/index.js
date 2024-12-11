import React from 'react';
import {Text} from 'react-native';
import {ButtonView} from '../../components';
import PropTypes from 'prop-types';
import styles from './styles';

const AppButton = ({title, containerStyle, textStyle, onPress, disabled}) => {
  return (
    <ButtonView
      style={[styles.buttonStyle, containerStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonTextStyle, textStyle]}>{title}</Text>
    </ButtonView>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
};

AppButton.defaultProps = {
  title: '',
  containerStyle: {},
  textStyle: {},
  onPress: () => {},
  disabled: false,
};

export default AppButton;
