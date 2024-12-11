import React from 'react';
import {ScrollView} from 'react-native';
import {AppButton} from '../../common';
import {TextInputNative} from '../../components';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';

const ResetPassword = () => {
  const [formObj, passwordProps, confirmPasswordProps] = useHookForm(
    ['password', 'confirmPassword'],
    {},
    ValidationSchema.resetPassword,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('SignIn');
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TextInputNative
        maxLength={30}
        nextFocusRef={passwordProps.forwardRef}
        title={'Password'}
        customPlaceholder={'Enter your new password'}
        secureTextEntry
        topSpaceLarge
        {...passwordProps}
      />
      <TextInputNative
        maxLength={30}
        title={'Confirm Password'}
        customPlaceholder={'Enter your confirm password'}
        secureTextEntry
        topSpaceLarge
        {...confirmPasswordProps}
      />
      <AppButton
        title="Update"
        containerStyle={styles.buttonStyle}
        onPress={submit}
      />
    </ScrollView>
  );
};

export default ResetPassword;
