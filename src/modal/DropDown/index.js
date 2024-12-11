import React, {useImperativeHandle, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {ButtonView} from '../../components';
import styles from './styles';
import Modal from 'react-native-modal';

const Item = ({
  item,
  onPress,
  disabled = false,
  isSelected = false,
  dataKey,
}) => {
  return (
    <ButtonView
      style={[styles.itemContainer]}
      onPress={() => onPress && onPress(item)}
      disabled={disabled}
      disabledOpacity={1}>
      {item?.image ? (
        <Image source={item.image} style={styles.imageStyle} />
      ) : (
        <></>
      )}
      <Text style={[styles.textStyle, isSelected && styles.selectedTextStyle]}>
        {item?.[dataKey] ? item[dataKey] : item}
      </Text>
    </ButtonView>
  );
};

const DropDown = (props, forwardedRef) => {
  const [data, setData] = useState({
    data: [],
    isVisible: false,
    title: undefined,
    isReport: false,
    buttonDisabled: false,
    isReset: false,
    isEcontract: false,
    isSelected: '',
    key: 'text',
    onResetPress: () => {},
    onPress: () => {},
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

  return (
    <Modal
      backdropTransitionOutTiming={0}
      onBackdropPress={hideModal}
      style={styles.modal}
      isVisible={data.isVisible}>
      <View style={styles.mainContainer}>
        {data.title ? (
          <View style={styles.cancelWithTitleView}>
            <ButtonView onPress={hideModal}>
              <Text style={styles.cancelTitleText}>{'Cancel'}</Text>
            </ButtonView>
            <Text
              style={[styles.titleText, !data.isReset && {marginRight: 40}]}>
              {data.title}
            </Text>
            {data.isReset && (
              <ButtonView
                onPress={() => {
                  hideModal();
                  data?.onResetPress();
                }}>
                <Text style={styles.resetTitleText}>{'Reset'}</Text>
              </ButtonView>
            )}
          </View>
        ) : (
          <ButtonView onPress={hideModal}>
            <Text style={styles.cancelText}>{'Cancel'}</Text>
          </ButtonView>
        )}

        <ScrollView>
          {data.data?.map(item => (
            <React.Fragment key={item.identifier}>
              <Item
                item={item}
                onPress={item => {
                  hideModal();
                  setTimeout(() => {
                    data.onPress && data.onPress(item);
                  }, 300);
                }}
                dataKey={data.key}
                isEcontract={data.isEcontract}
                disabled={data.buttonDisabled}
                isSelected={data?.isSelected === item?.identifier}
              />
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default React.forwardRef(DropDown);
