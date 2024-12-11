import React from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native';
import {AppButton} from '../../common';
import {ButtonView, TextInputNative} from '../../components';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';

const SignIn = () => {
  const [formObj, emailProps, passwordProps] = useHookForm(
    ['email', 'password'],
    {email: 'abc@abc.com', password: 'password'},
    ValidationSchema.logIn,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('OTPVerification');
  });

  const onForgotPress = () => {
    NavigationService.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    NavigationService.navigate('SignUp');
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TextInputNative
        nextFocusRef={passwordProps.forwardRef}
        title={'Email'}
        customPlaceholder={'Enter your email'}
        topSpaceLarge
        {...emailProps}
      />
      <TextInputNative
        maxLength={30}
        title={'Password'}
        customPlaceholder={'Enter your password'}
        secureTextEntry
        topSpaceLarge
        {...passwordProps}
      />
      <ButtonView style={styles.forgotPassword} onPress={onForgotPress}>
        <Text>{'Forgot Password'}</Text>
      </ButtonView>
      <AppButton
        title="Sign In"
        containerStyle={styles.buttonStyle}
        onPress={submit}
      />
      <ButtonView style={styles.signupText} onPress={onSignUpPress}>
        <Text>{'Already have an account? SignUp'}</Text>
      </ButtonView>
    </ScrollView>
  );
};

export default SignIn;
