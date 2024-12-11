import React, {useState} from 'react';
import {Text} from 'react-native';
import {AppButton, Block} from '../../common';
import {ButtonView} from '../../components';
import {NavigationService} from '../../utils';
import {Colors} from '../../theme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';

const CELL_COUNT = 4;

const OTPVerification = ({route}) => {
  const isForgot = route.params?.isForgot ?? false;

  const [value, setValue] = useState('4444');
  const [timer, setTimer] = useState('00');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  function _timer() {
    var count = 15;
    var interval = setInterval(function () {
      setTimer(count < 10 ? '0' + count : count);
      if (count === 0) {
        clearInterval(interval);
        setTimer('00');
      }
      count--;
    }, 1000);
  }

  function renderOTPVerificationContainer() {
    return (
      <>
        <Text p size={14} color={Colors.HEAD_TEXT} style={styles.txtStyle}>
          Enter the email associated with your account & we'll send verification
          code to reset your password.
        </Text>
        <Block middle row style={styles.containerFieldsStyle}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={null}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Block
                middle
                row
                style={[
                  styles.codeFieldStyle,
                  isFocused && styles.focusCellStyle,
                ]}>
                <Text
                  key={index}
                  style={styles.cellStyle}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </Block>
            )}
          />
        </Block>
        <Block middle row style={styles.containerTimerStyle}>
          <Text samiBold size={14} color={Colors.LIGHT_GREY}>
            Expires in:
          </Text>
          <Text samiBold size={14} color={Colors.PRIMARY}>
            {' 0:' + timer}
          </Text>
        </Block>
        <AppButton
          title="Verify"
          containerStyle={styles.btnStyle}
          onPress={() => {
            isForgot
              ? NavigationService.navigate('ResetPassword')
              : NavigationService.navigate('Home');
          }}
        />
        <ButtonView style={styles.btnSendStyle} onPress={() => _timer()}>
          <Text p size={14} color={Colors.black}>
            Didn’t receive code?
          </Text>
          <Text medium size={14} color={Colors.PRIMARY}>
            {' Resend'}
          </Text>
        </ButtonView>
      </>
    );
  }
  return (
    <Block flex style={styles.containerStyle}>
      {renderOTPVerificationContainer()}
    </Block>
  );
};

export default OTPVerification;
