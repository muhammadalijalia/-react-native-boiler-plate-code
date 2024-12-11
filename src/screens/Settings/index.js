import React, {useState, useLayoutEffect} from 'react';
import {Image, Text, View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {Switch} from '../../common';
import {ButtonView} from '../../components';
import {settingData} from '../../dummy';
import {Colors, Images} from '../../theme';
import {DataHandler, NavigationService, Util} from '../../utils';
import styles from './styles';

const Settings = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Settings',
    });
  }, [navigation]);

  const renderItem = ({item, index}) => {
    const onPressItem = () => {
      if (item?.label === 'Logout') {
        DataHandler.getAlertModalRef().show({
          title: 'Log out',
          description: 'Are you sure you want to logout?',
          callback: () => {
            // dispatch(
            //   authUserLogout.request({
            //     payloadApi: {},
            //     cb: () => {
            //       NavigationService.reset('SignIn');
            //     },
            //   }),
            // );
            Util.showMessage('User logged out successfully', 'success');
            NavigationService.navigate('SignIn');
          },
        });
      } else if (item?.route) {
        NavigationService.navigate(item?.route);
      }
    };

    return (
      <ButtonView
        style={styles.cardView}
        onPress={onPressItem}
        accessibilityLabelKey={item.testLabel}>
        <Text
          style={[
            styles.titleStyle,
            item.label === 'Logout' && {color: Colors.red},
          ]}>
          {item.label}
        </Text>
        <View style={styles.imageView}>
          {item.label !== 'Delete Account' && item.label !== 'Logout' && (
            <Image source={Images.icons.headerBackIcon} />
          )}
        </View>
      </ButtonView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <Text style={styles.titleStyle}>{'Dark Mode'}</Text>
        <Switch
          value={isDark}
          onChange={setIsDark}
          toggleColor={Colors.secondary}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
        data={settingData}
      />
    </View>
  );
};

export default Settings;
