import React, {useLayoutEffect} from 'react';
import {Text, View, FlatList, I18nManager} from 'react-native';
import {useDispatch} from 'react-redux';
import {ButtonView} from '../../components';
import {languagesData} from '../../dummy';
import {AppLogger, Util} from '../../utils';
import {useTranslation} from 'react-i18next';
import {updateAppLanguage} from '../../ducks/language';
import styles from './styles';
import RNRestart from 'react-native-restart';
import localizedString from '../../i18n';

const Languages = ({route, navigation}) => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: localizedString('settings.changeLanguage'),
    });
  }, [navigation]);

  const renderItem = ({item}) => {
    const {language, isRtl, title} = item;

    const onPressItem = () => {
      i18n
        .changeLanguage(language)
        .then(() => {
          dispatch(updateAppLanguage(item));
          I18nManager.allowRTL(isRtl);
          I18nManager.forceRTL(isRtl);
          setTimeout(() => {
            RNRestart.Restart();
          }, 100);
        })
        .catch(err => {
          AppLogger('Error While Changing Language', err);
          Util.showMessage('Something went wrong while applying RTL');
        });
    };

    return (
      <ButtonView style={styles.cardView} onPress={onPressItem}>
        <Text style={styles.titleStyle}>{title}</Text>
      </ButtonView>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
        data={languagesData}
      />
    </View>
  );
};

export default Languages;
