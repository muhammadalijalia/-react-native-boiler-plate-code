import React, {useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Images} from '../../theme';

export const ListView = ({
  data,
  renderItem,
  onRefresh,
  refreshing,
  loadMore,
  onEndReached,
  showScrollTopButton,
}) => {
  const listRef = useRef();

  useEffect(() => {}, []);

  return (
    <View>
      <FlatList
        ref={listRef}
        onEndReached={onEndReached}
        indicatorStyle="white"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        refreshing={true}
        data={data}
        renderItem={renderItem}
        ListFooterComponent={() => {
          return (
            <View>
              <ActivityIndicator animating={loadMore} size={'small'} />
            </View>
          );
        }}
      />
      {showScrollTopButton && (
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              listRef?.current?.scrollToOffset({animated: true, offset: 0});
            }}>
            <Image
              source={Images.general.topArrow}
              style={{height: 30, width: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
