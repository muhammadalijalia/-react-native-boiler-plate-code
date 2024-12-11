import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationService} from '../utils';
import {
  SignIn,
  Listing,
  SignUp,
  ForgotPassword,
  ChangePassword,
  OTPVerification,
} from '../screens';
import ContentPagesScreen from '../screens/ContentPagesScreen';
import ResetPassword from '../screens/ResetPassword';
import DrawerNavigator from './drawer';
import Languages from '../screens/Languages';

const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={{title: 'Verification'}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{title: 'Change Password'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'Change Password'}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{title: 'Forgot Password'}}
      />
      <Stack.Screen
        name="Listing"
        component={Listing}
        options={{title: 'Listing'}}
      />
      <Stack.Screen
        name="ContentPagesScreen"
        component={ContentPagesScreen}
        options={{title: 'ContentPagesScreen'}}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Languages"
        component={Languages}
        options={{title: 'Change Language'}}
      />
    </Stack.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <StackScreens />
    </NavigationContainer>
  );
};

export default AppContainer;
