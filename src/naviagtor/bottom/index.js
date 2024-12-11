import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images, Metrics} from '../../theme';
import {Util} from '../../utils';
import {styles} from './styles';
import ContentPagesScreen from '../../screens/ContentPagesScreen/index';
import Listing from '../../screens/Listing';
import Settings from '../../screens/Settings';

const navigationItems = [
  {
    label: 'Home',
    icon: Images.tab.homeIcon,
    component: Listing,
    customIconStyles: {},
  },
  {
    label: 'Terms',
    icon: Images.tab.homeIcon,
    component: ContentPagesScreen,
    customIconStyles: {height: 30, width: 30},
  },
  {
    label: 'Settings',
    icon: Images.tab.homeIcon,
    component: Settings,
    customIconStyles: {},
  },
];

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#BC2F27',
        tabBarStyle: {
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          height: Util.isPlatformIOS()
            ? Metrics.screenHeight * 0.13
            : Metrics.ratio(90),
        },
      }}>
      {navigationItems.map(({label, icon, component, customIconStyles}) => {
        return (
          <Tab.Screen
            key={label}
            name={label}
            component={component}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) =>
                focused ? (
                  <>
                    <Image
                      source={icon}
                      resizeMode="contain"
                      style={[
                        styles.icon,
                        {tintColor: '#BC2F27'},
                        customIconStyles,
                      ]}
                    />
                  </>
                ) : (
                  <Image
                    source={icon}
                    resizeMode="contain"
                    style={[styles.icon, customIconStyles]}
                  />
                ),
              tabBarLabelStyle: {...styles.labelFont},
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
