import React from 'react';
import {ScrollView} from 'react-native';
import {AppButton} from '../../common';
import {TextInputNative} from '../../components';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';

const SignIn = () => {
  const [formObj, emailProps] = useHookForm(
    ['email'],
    {},
    ValidationSchema.forgotPassword,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('OTPVerification', {isForgot: true});
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TextInputNative
        title={'Email'}
        customPlaceholder={'Enter your email'}
        topSpaceLarge
        {...emailProps}
      />

      <AppButton
        title="Forgot Password"
        containerStyle={styles.buttonStyle}
        onPress={submit}
      />
    </ScrollView>
  );
};

export default SignIn;
