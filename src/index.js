import React, {useEffect, useState} from 'react';
import {View, LogBox, I18nManager} from 'react-native';
import {Provider} from 'react-redux';
import {CustomSplashScreen} from './screens';
import {AlertModal, DropDown, FlashModal} from './modal';
import {AppLogger} from './utils';
import configureAppStore from './store';
import DataHandler from './utils/DataHandler';
import NetworkInfo from './utils/NetworkInfo';
import AppNavigator from './naviagtor';
import i18n from './i18n/i18n';

LogBox.ignoreLogs;

const App = () => {
  const [storeState, setStore] = useState(null);
  // when store is configured

  useEffect(() => {
    // configure store
    configureAppStore(onStoreConfigure);

    // unscribe to all things on unmount
    return () => {
      NetworkInfo.removeNetInfoListener();
    };
  }, []);

  const onStoreConfigure = store => {
    //Initialize things

    DataHandler.setStore(store);
    NetworkInfo.addNetInfoListener();

    // Set Initial Language
    handleLangauge();

    // Set Store Instance
    setTimeout(() => {
      setStore(store);
    }, 3000);
  };

  const handleLangauge = () => {
    const appLanguage = DataHandler.getStoreState().language.appLanguage;
    i18n.changeLanguage(appLanguage.language);
    I18nManager.allowRTL(appLanguage.isRtl);
    I18nManager.forceRTL(appLanguage.isRtl);
    AppLogger('App Current Lanague', appLanguage.title);
  };

  if (storeState === null) {
    return <CustomSplashScreen />;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Provider store={storeState}>
        <FlashModal ref={ref => DataHandler.setFlashAlertModalRef(ref)} />
        <DropDown ref={ref => DataHandler.setDropDownModalRef(ref)} />
        <AlertModal ref={ref => DataHandler.setAlertModalRef(ref)} />
        <AppNavigator />
      </Provider>
    </View>
  );
};

export default App;
