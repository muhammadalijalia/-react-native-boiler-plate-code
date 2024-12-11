import React from 'react';
import {ScrollView} from 'react-native';
import {AppButton} from '../../common';
import {TextInputNative} from '../../components';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';

const ChangePassword = () => {
  const [formObj, oldPasswordProps, newPasswordProps, confirmPasswordProps] =
    useHookForm(
      ['oldPassword', 'newPassword', 'confirmPassword'],
      {},
      ValidationSchema.changePassword,
    );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('Home');
  });

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <TextInputNative
        nextFocusRef={newPasswordProps.forwardRef}
        title={'Old Password'}
        customPlaceholder={'Enter your new password'}
        topSpaceLarge
        secureTextEntry
        {...oldPasswordProps}
      />
      <TextInputNative
        maxLength={30}
        nextFocusRef={confirmPasswordProps.forwardRef}
        title={'New Password'}
        customPlaceholder={'Enter your new password'}
        secureTextEntry
        topSpaceLarge
        {...newPasswordProps}
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

export default ChangePassword;
