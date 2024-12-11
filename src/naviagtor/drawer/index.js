import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from '../bottom';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
}
