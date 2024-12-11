//Initial Screen after Splash > you can use as login screen also [Testing Screen]
import React, {useState} from 'react';
import {Text, View, ScrollView, FlatList, Image} from 'react-native';
import {AppButton} from '../../common';
import {NavigationService} from '../../utils';
import {useHookForm, ValidationSchema} from '../../utils/ValidationUtil';
import {ShimmerView} from '../../components/ShimmerView';
import {ShimmerTextView} from '../../components/ShimmerTextView';
import {Metrics} from '../../theme';
import {ListView} from '../../components/ListView';
import {useDispatch, useSelector} from 'react-redux';
import {getList} from '../../ducks/testPost';
import TextInputNative from '../../components/TextInputNative';
import FlatListApi from '../../components/FlatListApi';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const Listing = () => {
  const dispatch = useDispatch();
  const gitData = useSelector(state => state.testPost.gitUsers);

  const [formObj, emailProps, passwordProps] = useHookForm(
    ['email', 'password'],
    {},
    ValidationSchema.logIn,
  );

  const submit = formObj.handleSubmit(values => {
    NavigationService.navigate('Home');
  });

  const [data, setData] = useState([
    {
      name: 'Imran',
      phone: '+1123231231231',
      email: 'imran@yopmail.com',
    },
    {
      name: 'Hassam',
      phone: '+1123231231231',
      email: 'hassam@yopmail.com',
    },
    {
      name: 'Waiz',
      phone: '+1123231231231',
      email: 'waiz@yopmail.com',
    },
    {
      name: 'Saif',
      phone: '+1123231231231',
      email: 'saif@yopmail.com',
    },
    {
      name: 'Usman',
      phone: '+1123231231231',
      email: 'usman@yopmail.com',
    },
    {
      name: 'Imran',
      phone: '+1123231231231',
      email: 'imran@yopmail.com',
    },
    {
      name: 'Hassam',
      phone: '+1123231231231',
      email: 'hassam@yopmail.com',
    },
    {
      name: 'Waiz',
      phone: '+1123231231231',
      email: 'waiz@yopmail.com',
    },
    {
      name: 'Saif',
      phone: '+1123231231231',
      email: 'saif@yopmail.com',
    },
    {
      name: 'Usman',
      phone: '+1123231231231',
      email: 'usman@yopmail.com',
    },
  ]);

  const renderSignInContainer = () => {
    return (
      <ScrollView>
        <TextInputNative
          nextFocusRef={passwordProps.forwardRef}
          title={'Email'}
          customPlaceholder={'Enter your email'}
          topSpaceLarge
          {...emailProps}
        />
        <TextInputNative
          maxLength={30}
          title={'Password'}
          customPlaceholder={'Enter your password'}
          secureTextEntry
          topSpaceLarge
          {...passwordProps}
        />
        <AppButton
          title="Sign In"
          containerStyle={styles.buttonStyle}
          onPress={() => {
            submit();
            // crashlytics().crash();
          }}
        />
      </ScrollView>
    );
  };

  const renderShimmer = item => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <ShimmerView
            shimmerStyle={{
              width: Metrics.screenWidth - 40,
              height: 100,
              backgroundColor: 'rgba(0,0,255,0.4)',
              justifyContent: 'center',
            }}
            childs={
              <View
                style={{
                  alignSelf: 'center',
                }}>
                <Text>{'Name: ' + item?.name}</Text>
                <Text>{'Phone: ' + item?.phone}</Text>
                <Text>{'Email: ' + item?.email}</Text>
              </View>
            }
          />
        </View>
      </View>
    );
  };

  const renderShimmerTemplate1 = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                // justifyContent:'center',
                alignItems: 'center',
                marginTop: 10,
                // backgroundColor:'red'
              }}>
              <View>
                <ShimmerView
                  shimmerStyle={{
                    width: Metrics.screenWidth - 40,
                    height: 100,
                    borderRadius: 20,
                    backgroundColor: 'rgba(255,255,255,1)',
                    justifyContent: 'center',
                  }}
                  childs={
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: 70 / 2,
                          backgroundColor: 'rgba(0,0,0,0.5)',
                          marginLeft: 10,
                        }}></View>
                      <View
                        style={{
                          marginLeft: 10,
                        }}>
                        <Text>{'Name: ' + item?.name}</Text>
                        <Text>{'Phone: ' + item?.phone}</Text>
                        <Text>{'Email: ' + item?.email}</Text>
                      </View>
                    </View>
                  }
                />
              </View>
            </View>
          );
        }}
      />
    );
  };

  const renderShimmerTemplate2 = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <ShimmerView
          shimmerStyle={{
            width: 70,
            height: 70,
            borderRadius: 70 / 2,
            backgroundColor: 'rgba(0,0,0,0.5)',
            marginLeft: 10,
          }}
        />
        <View
          style={{
            marginLeft: 10,
          }}>
          <ShimmerTextView text={'Name: Imran'} />
          <ShimmerTextView
            shimmerStyle={{marginTop: 5}}
            text={'Phone: +312312312312313'}
          />
          <ShimmerTextView
            shimmerStyle={{marginTop: 5}}
            text={'Email: imran@yopmail.com'}
          />
        </View>
      </View>
    );
  };

  const itemHeight = 70;

  const renderItemX = ({item, index}) => {
    const {login, id, node_id, avatar_url} = item;

    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          // justifyContent:'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <ShimmerView
            shimmerStyle={{
              width: Metrics.screenWidth - 40,
              height: 100,
              borderRadius: 20,
              backgroundColor: 'rgba(255,255,255,1)',
              justifyContent: 'center',
            }}
            childs={
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Image
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 70 / 2,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    source={{uri: avatar_url}}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Text>{'Name: ' + login}</Text>
                  <Text>{'Id: ' + id}</Text>
                  <Text>{'Node Id: ' + node_id}</Text>
                </View>
              </View>
            }
          />
        </View>
      </View>
    );
  };

  const renderItemHeight = 80;

  const renderItem = ({item, index}) => {
    const {login, id, node_id, avatar_url} = item;

    const imageHeight = renderItemHeight * 0.7;

    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          // justifyContent:'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <View
            style={{
              width: Metrics.screenWidth - 40,
              height: renderItemHeight,
              borderRadius: 20,
              backgroundColor: 'rgba(255,255,255,1)',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <FastImage
                  style={{
                    width: imageHeight,
                    height: imageHeight,
                    borderRadius: imageHeight / 2,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  }}
                  source={{uri: avatar_url}}
                />
              </View>
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text>{'Name: ' + login}</Text>
                <Text>{'Id: ' + id}</Text>
                <Text>{'Node Id: ' + node_id}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const [refreshing, setRefreshing] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const renderListView = () => {
    return (
      <ListView
        showScrollTopButton={true}
        data={data}
        renderItem={renderItem}
        onRefresh={() => {
          setRefreshing(!refreshing);

          setTimeout(() => {
            setData([...data, ...data]);
            setRefreshing(false);
          }, 1000);
        }}
        refreshing={refreshing}
        loadMore={loadMore}
        onEndReached={() => {
          let limit = itemHeight * data.length;
          let height = Metrics.screenHeight - 40 - 180;

          if (limit > height) {
            setLoadMore(true);

            // setTimeout(() => {
            const newData = data;
            newData.push(...data);
            setData(newData);
            setLoadMore(false);
            // }, 2000);
          }
        }}
      />
    );
  };

  const renderFlatlistApi = () => {
    return (
      <FlatListApi
        payload={{
          q: 'imran',
        }}
        actionType={'GET_LIST'}
        selectorData={state => state?.testPost?.gitUsers}
        requestAction={getList.request}
        renderItem={renderItem}
        skeletonViewHeight={renderItemHeight}
        keyExtractor={(item, index) => `${item.id + index}`}
        // skeletonView={() => {
        //   return <View
        //   style={{
        //     height:100,
        //     backgroundColor:'yellow'
        //   }}
        //   />
        // }}
      />
    );
  };

  return (
    <View style={{flex: 1, margin: 20}}>
      {renderFlatlistApi()}
      {/* {renderListView()} */}
      {/* {renderShimmerTemplate2()} */}
      {/* {renderShimmerTemplate1()} */}
      {/* {renderSignInContainer()} */}
    </View>
  );
};

export default Listing;
