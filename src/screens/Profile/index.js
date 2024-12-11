import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ImageView, ScrollViewApi} from '../../components';
import {authGetUserProfile, getUserData} from '../../ducks/auth';
import {Images, Metrics} from '../../theme';
import {NavigationService, Util} from '../../utils';
import styles from './styles';

const Profile = ({route, navigation}) => {
  const user = useSelector(getUserData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile',
    });
  }, [navigation]);

  const renderContent = data => {
    return (
      <View>
        <View style={styles.imageViewStyle}>
          <ImageView
            source={{
              uri: UserUtill.image2(data),
            }}
            style={styles.imageStyle}
            placeholderStyle={styles.imageStyle}
            borderRadius={Metrics.ratio(20)}
          />
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 38}]}>
            {'Full Name:'}
          </Text>
          {/* <Text style={styles.nameStyle}>{UserUtill.name(data)}</Text> */}
          <Text style={styles.nameStyle}>{UserUtill.name(data)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 9}]}>
            {'Email Address:'}
          </Text>
          <Text style={styles.nameStyle}>{UserUtill.email(data)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 4}]}>
            {'Phone Number:'}
          </Text>
          <Text style={styles.nameStyle}>{UserUtill.phone(data)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 74}]}>{'DOB:'}</Text>
          <Text style={styles.nameStyle}>{UserUtill.dob(data.patient)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 80}]}>{'Sex:'}</Text>
          <Text style={styles.nameStyle}>{UserUtill.gender(data.patient)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 50}]}>
            {'Address:'}
          </Text>
          <Text style={styles.nameStyle}>{UserUtill.address(data)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 47}]}>
            {'Zip code:'}
          </Text>
          <Text style={styles.nameStyle}>{UserUtill.zip(data)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.titleStyle, {marginRight: 70}]}>{'State:'}</Text>
          <Text style={styles.nameStyle}>{UserUtill.city(data)}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollViewApi
      style={styles.container}
      payload={{id: UserUtill.id(user)}}
      actionType={authGetUserProfile.type}
      requestAction={authGetUserProfile.request}
      selectorData={getUserData}
      content={renderContent}
      showsVerticalScrollIndicator={false}
      bounces={false}
    />
  );
};

export default Profile;
