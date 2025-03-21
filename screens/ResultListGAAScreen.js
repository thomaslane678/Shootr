import React from 'react';
import {
  ExpoImage,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import formatCurrency from '../global-functions/formatCurrency';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ResultListGAAScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const formatCurrency = value => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(value);
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      <ShootrSupabaseDBAPIApi.FetchMatchResultsByTeamIDGET
        Variable={Constants['TeamID']}
      >
        {({ loading, error, data, refetchMatchResultsByTeamID }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleFlatList
              data={fetchData}
              decelerationRate={'normal'}
              horizontal={false}
              inverted={false}
              keyExtractor={(listData, index) =>
                listData?.id ??
                listData?.uuid ??
                index?.toString() ??
                JSON.stringify(listData)
              }
              keyboardShouldPersistTaps={'never'}
              listKey={'Fetch->List'}
              nestedScrollEnabled={false}
              numColumns={1}
              onEndReachedThreshold={0.5}
              pagingEnabled={false}
              renderItem={({ item, index }) => {
                const listData = item;
                return (
                  <>
                    <Touchable>
                      <Surface
                        elevation={3}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            borderRadius: 12,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            {/* Date */}
                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '400',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.Date}
                            </Text>
                            {/* Opposition */}
                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 20,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.HomeTeam}
                              {' v '}
                              {listData?.Opposition}
                            </Text>
                            <Spacer left={8} right={8} bottom={3} top={3} />
                            {/* Score */}
                            <Text
                              accessible={true}
                              selectable={false}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 16,
                                  fontWeight: '600',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.HomeTeamGoals}
                              {'-'}
                              {listData?.HomeTeamPoints}
                              {' - '}
                              {listData?.OppositionGoals}
                              {'-'}
                              {listData?.OppositionPoints}{' '}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderRadius: 8,
                                marginLeft: 8,
                                overflow: 'hidden',
                              },
                              dimensions.width
                            )}
                          >
                            <ExpoImage
                              allowDownscaling={true}
                              cachePolicy={'disk'}
                              contentPosition={'center'}
                              resizeMode={'cover'}
                              transitionDuration={300}
                              transitionEffect={'cross-dissolve'}
                              transitionTiming={'ease-in-out'}
                              source={
                                imageSource(
                                  Images['shootrredesigninappimage']
                                ) ?? imageSource(`${listData?.image_thumb}`)
                              }
                              style={StyleSheet.applyWidth(
                                { height: 80, width: 80 },
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        <Spacer left={8} right={8} bottom={6} top={6} />
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={palettes.App.Communical_Yellow_Emoticons}
                              name={'Ionicons/location-outline'}
                              size={18}
                            />
                            {/* Location */}
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                  marginLeft: 6,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.Location}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={palettes.App.Communical_Yellow_Emoticons}
                              name={'Ionicons/time-outline'}
                              size={20}
                            />
                            {/* Time */}
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color:
                                    palettes.App.Communical_Yellow_Emoticons,
                                  fontFamily: 'System',
                                  fontSize: 12,
                                  fontWeight: '600',
                                  marginLeft: 8,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.Time}
                            </Text>
                          </View>
                        </View>
                      </Surface>
                    </Touchable>
                    <Spacer left={8} right={8} bottom={12} top={12} />
                  </>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              snapToAlignment={'start'}
              style={StyleSheet.applyWidth(
                {
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 24,
                },
                dimensions.width
              )}
            />
          );
        }}
      </ShootrSupabaseDBAPIApi.FetchMatchResultsByTeamIDGET>
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

export default withTheme(ResultListGAAScreen);
