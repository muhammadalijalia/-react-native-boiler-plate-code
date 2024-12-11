import React, {useImperativeHandle, useState} from 'react';
import {View, Text} from 'react-native';
import {Util} from '../../utils';
import {ButtonView} from '../../components';
import Modal from 'react-native-modal';
import styles from './styles';

const AlertModal = (props, forwardedRef) => {
  const [data, setData] = useState({
    description: undefined,
    isVisible: false,
    isNassuGame: false,
    holeData: [],
    callback: () => {},
  });

  // hide modal function
  const hideModal = () => {
    setData({...data, isVisible: false});
  };

  // show and hide functions for ref
  useImperativeHandle(forwardedRef, () => ({
    show: (options = data) => {
      setData({...options, isVisible: true});
    },
    hide: hideModal,
  }));

  const {title, description, callback, isVisible} = data;

  return (
    <Modal
      backdropTransitionOutTiming={0}
      style={styles.modal}
      onBackdropPress={hideModal}
      isVisible={isVisible}
      useNativeDriver={Util.isPlatformAndroid()}>
      <View style={styles.mainContainer}>
        <Text style={styles.title} accessibilityLabel={'Logout Img'}>
          {title}
        </Text>
        <Text
          style={[styles.description, data?.isNassuGame && {marginBottom: 10}]}>
          {description}
        </Text>
        <View style={styles.row}>
          <ButtonView
            style={styles.button}
            onPress={hideModal}
            accessibilityLabelKey={'No btn'}>
            <Text style={styles.buttonText}>{'No'}</Text>
          </ButtonView>
          <View style={styles.buttonSeparator} />
          <ButtonView
            style={styles.button}
            onPress={() => {
              hideModal();
              setTimeout(() => {
                callback && callback();
              }, 500);
            }}
            accessibilityLabelKey={'Yes btn'}>
            <Text style={styles.buttonTextYes}>{'Yes'}</Text>
          </ButtonView>
        </View>
      </View>
    </Modal>
  );
};

export default React.forwardRef(AlertModal);
