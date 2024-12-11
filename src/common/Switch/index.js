import React from 'react';
import SwitchToggle from 'react-native-switch-toggle';
import PropTypes from 'prop-types';
import styles from './styles';
import {Colors} from '../../theme';

const Switch = ({value, onChange, disabled, toggleColor}) => {
  const onPressToggle = () => {
    onChange(!value);
  };

  return (
    <SwitchToggle
      switchOn={value}
      onPress={onPressToggle}
      // duration={500}
      containerStyle={styles.containerStyle}
      circleStyle={styles.circleStyle}
      circleColorOff={Colors.white}
      circleColorOn={Colors.white}
      backgroundColorOn={toggleColor ? toggleColor : Colors.grey}
      {...{disabled}}
    />
  );
};

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Switch.defaultProps = {
  disabled: false,
};
export default Switch;
