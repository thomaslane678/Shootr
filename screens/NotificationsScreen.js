import React from 'react';
import {
  Icon,
  ScreenContainer,
  SimpleStyleFlashList,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ShootrSupabaseDBAPIApi.FetchNotificationsGetGET>
        {({ loading, error, data, refetchNotificationsGet }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleFlashList
              data={fetchData}
              estimatedItemSize={50}
              horizontal={false}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ??
                flashListData?.uuid ??
                index?.toString() ??
                JSON.stringify(flashListData)
              }
              listKey={'Fetch->FlashList'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
                return (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.App.Peoplebit_Turquoise,
                        borderRadius: 12,
                        flexDirection: 'row',
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        paddingBottom: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                        paddingTop: 20,
                      },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={imageSource('https://picsum.photos/64')}
                      style={StyleSheet.applyWidth(
                        { borderRadius: 8, height: 64, width: 64 },
                        dimensions.width
                      )}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, marginLeft: 20 },
                        dimensions.width
                      )}
                    >
                      {/* Title */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: palettes.App.Communical_Yellow_Emoticons,
                            fontFamily: 'Inter_500Medium',
                            fontSize: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {null}
                        {' added '}
                        {flashListData?.Notification}
                      </Text>
                      {/* type  */}
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: palettes.App.Communical_Yellow_Emoticons,
                            fontFamily: 'Inter_300Light',
                            fontSize: 12,
                            marginTop: 4,
                            opacity: 0.6,
                          },
                          dimensions.width
                        )}
                      >
                        {'Announcement • '}
                        {flashListData?.created_at}
                      </Text>
                    </View>
                  </View>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              style={StyleSheet.applyWidth(
                { backgroundColor: palettes.App.Communial_Icon_BG, flex: 1 },
                dimensions.width
              )}
            />
          );
        }}
      </ShootrSupabaseDBAPIApi.FetchNotificationsGetGET>
      {/* Updated Menu */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: palettes.App.Peoplebit_Turquoise,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            flexDirection: 'row',
            height: 117,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 30,
            paddingRight: 30,
          },
          dimensions.width
        )}
      >
        {/* Team Tab */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('TeamHomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
          style={StyleSheet.applyWidth(
            { borderColor: palettes.App.Communical_Yellow_Emoticons },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.App.Communical_Yellow_Emoticons}
              name={'MaterialIcons/sports-baseball'}
            />
          </View>
        </Touchable>
        {/* Home Tab */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('HomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            {/* Home Icon */}
            <Icon
              size={24}
              color={palettes.App.Communical_Yellow_Emoticons}
              name={'Entypo/home'}
            />
          </View>
        </Touchable>
        {/* Profile Tab */}
        <Touchable
          onPress={() => {
            try {
              if (Constants['SportValue'] === 2) {
                navigation.navigate('GAAUserProfileBasicScreen');
              } else {
              }

              if (Constants['SportValue'] === 1) {
                navigation.navigate('SoccerUserProfileScreen');
              } else {
              }

              if (Constants['SportValue'] === 3) {
                navigation.navigate('RugbyUserProfileScreen');
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.App.Communical_Yellow_Emoticons}
              name={'AntDesign/user'}
            />
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
