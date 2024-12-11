import React from 'react';
import {Controller} from 'react-hook-form';
import {Image, Text, ScrollView} from 'react-native';
import {AppButton} from '../../common';
import {ButtonView, TextInputNative} from '../../components';
import {Images} from '../../theme';
import {ImagePicker, NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import styles from './styles';

const SignUp = () => {
  const [
    formObj,
    imageProps,
    emailProps,
    phoneProps,
    passwordProps,
    confirmProps,
  ] = useHookForm(
    ['image', 'email', 'phone', 'password', 'confirmPassword'],
    {},
    ValidationSchema.signUp,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('Home');
  });

  const onImageChange = onChange => {
    ImagePicker.showGalleryAndCameraOptions(val => {
      onChange(val.uri);
    });
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Controller
        {...imageProps}
        render={({field: {onChange, value}}) => (
          <ButtonView
            style={styles.imageView}
            onPress={() => onImageChange(onChange)}>
            <Image
              source={value ? {uri: value} : Images.images.imagePlaceholder}
              style={styles.imageStyle}
            />
            <Text style={styles.uploadText}>Upload Photo</Text>
          </ButtonView>
        )}
        defaultValue={''}
      />
      <TextInputNative
        nextFocusRef={phoneProps.forwardRef}
        title={'Email'}
        customPlaceholder={'Enter your email'}
        topSpaceLarge
        {...emailProps}
      />
      <TextInputNative
        nextFocusRef={passwordProps.forwardRef}
        title={'Phone Number'}
        customPlaceholder={'Enter your Phone Number'}
        topSpaceLarge
        isPhoneInput
        {...phoneProps}
      />
      <TextInputNative
        nextFocusRef={confirmProps.forwardRef}
        title={'Password'}
        customPlaceholder={'Enter your password '}
        secureTextEntry
        topSpaceLarge
        {...passwordProps}
      />
      <TextInputNative
        maxLength={30}
        title={'Confitrm Password'}
        customPlaceholder={'Enter your confirm password'}
        secureTextEntry
        topSpaceLarge
        {...confirmProps}
      />
      <AppButton
        title="Sign In"
        containerStyle={styles.buttonStyle}
        onPress={submit}
      />
    </ScrollView>
  );
};

export default SignUp;
