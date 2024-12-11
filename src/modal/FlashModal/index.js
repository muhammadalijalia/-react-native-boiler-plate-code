import React, {useImperativeHandle, useState} from 'react';
import {Image, View} from 'react-native';
import {Util} from '../../utils';
import {ButtonView} from '../../components';
import {Block, Text} from '../../common';
import {Colors, Images} from '../../theme';
import Modal from 'react-native-modal';
import styles from './styles';

const FlashModal = (props, forwardedRef) => {
  const [data, setData] = useState({
    description: undefined,
    isVisible: false,
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

  const {title, duration, type, callback, isVisible} = data;

  return (
    <Modal
      backdropTransitionOutTiming={0}
      style={styles.modal}
      isVisible={isVisible}
      useNativeDriver={Util.isPlatformAndroid()}
      backdropOpacity={0.3}
      hasBackdrop={false}
      coverScreen={false}
      animationIn={'fadeInDown'}
      animationOut={'fadeOutUp'}
      onSwipeComplete={() => hideModal()}
      swipeDirection="right">
      <Block
        style={[
          styles.mainContainer,
          {
            backgroundColor:
              type == 'danger'
                ? Colors.lightRedModal
                : Colors.lightGreenModalBackground,
            borderColor:
              type == 'danger' ? Colors.lightRed : Colors.lightGreenModal,
          },
        ]}>
        <View
          style={[
            styles.imageContainer,
            {
              backgroundColor:
                type == 'danger' ? Colors.lightRed : Colors.green,
            },
          ]}>
          <Image
            source={
              type == 'danger' ? Images.icons.errorIcon : Images.icons.flashIcon
            }
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <ButtonView
          onPress={() => {
            hideModal();
          }}
          style={[styles.button]}>
          <Image source={Images.icons.cancelIcon} />
        </ButtonView>
      </Block>
    </Modal>
  );
};

export default React.forwardRef(FlashModal);
