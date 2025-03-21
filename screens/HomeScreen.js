import React from 'react';
import {
  Circle,
  Divider,
  ExpoImage,
  Icon,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { Username: null };

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [showappointment, setShowappointment] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

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
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
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
          <Circle size={50}>
            <ExpoImage
              allowDownscaling={true}
              cachePolicy={'disk'}
              contentPosition={'center'}
              resizeMode={'cover'}
              transitionDuration={300}
              transitionEffect={'cross-dissolve'}
              transitionTiming={'ease-in-out'}
              source={
                imageSource(Images['shootrredesigninappimage']) ??
                imageSource(`${Constants['UserPic']}`)
              }
              style={StyleSheet.applyWidth(
                { height: 50, width: 50 },
                dimensions.width
              )}
            />
          </Circle>

          <View
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <ShootrSupabaseDBAPIApi.FetchTeamListGetByTeamIDGET
              TeamID={Constants['TeamID']}
            >
              {({ loading, error, data, refetchTeamListGetByTeamID }) => {
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
                    listKey={'Header->View->View->Fetch->List'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    pagingEnabled={false}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Club Name */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontFamily: 'Inter_500Medium',
                                fontSize: 17,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.TeamName}
                          </Text>
                          {/* Club Division */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontFamily: 'Inter_400Regular',
                                fontSize: 12,
                                marginTop: 2,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.Location} {listData?.Division}{' '}
                            {listData?.Sport}
                          </Text>
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                    snapToAlignment={'start'}
                  />
                );
              }}
            </ShootrSupabaseDBAPIApi.FetchTeamListGetByTeamIDGET>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ChooseTeamScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            size={24}
            color={palettes.App.Peoplebit_Turquoise}
            name={'AntDesign/retweet'}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
        </Touchable>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { backgroundColor: palettes.App.Communial_Icon_BG, height: 660 },
          dimensions.width
        )}
      >
        {/* Header */}
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
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.NFT_TIME_Black,
                fontSize: 22,
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            {'Upcoming'}
          </Text>
        </View>
        {/* Next Match Fetch */}
        <ShootrSupabaseDBAPIApi.FetchFixtureListByTeamIDSingleGET
          TeamID={Constants['TeamID']}
        >
          {({ loading, error, data, refetchFixtureListByTeamIDSingle }) => {
            const nextMatchFetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={nextMatchFetchData}
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
                listKey={'Scroll View->Next Match Fetch->List'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                pagingEnabled={false}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Next Match Touchable */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            borderRadius: 12,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 20,
                            paddingBottom: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 20,
                          },
                          dimensions.width
                        )}
                      >
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('FixtureListScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          {/* Title */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Next Match'}
                          </Text>
                          <Icon
                            size={24}
                            color={palettes.App.Communical_Yellow_Emoticons}
                            name={'AntDesign/arrowright'}
                            style={StyleSheet.applyWidth(
                              { position: 'absolute', right: 18 },
                              dimensions.width
                            )}
                          />
                          <Divider
                            {...GlobalStyles.DividerStyles(theme)['Divider']
                              .props}
                            color={palettes.App.Icon_Dark_Gray}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.DividerStyles(theme)['Divider']
                                .style,
                              dimensions.width
                            )}
                          />
                          {/* Opponent */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 14,
                                marginTop: 5,
                                opacity: 0.75,
                              },
                              dimensions.width
                            )}
                          >
                            {'Vs '}
                            {listData?.Opposition}
                            {' @ '}
                            {listData?.Location}
                            {', '}
                            {listData?.Date}
                          </Text>
                        </Touchable>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
              />
            );
          }}
        </ShootrSupabaseDBAPIApi.FetchFixtureListByTeamIDSingleGET>
        {/* Next Training Fetch */}
        <ShootrSupabaseDBAPIApi.FetchEventsListByTeamIDSingleGET
          TeamID={Constants['TeamID']}
        >
          {({ loading, error, data, refetchEventsListByTeamIDSingle }) => {
            const nextTrainingFetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={nextTrainingFetchData}
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
                listKey={'Scroll View->Next Training Fetch->List'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                pagingEnabled={false}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Next Training */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.App.Peoplebit_Turquoise,
                            borderRadius: 12,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 20,
                            paddingBottom: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 20,
                          },
                          dimensions.width
                        )}
                      >
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('EventScheduleScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          {/* Title */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Next Training'}
                          </Text>
                          <Icon
                            size={24}
                            color={palettes.App.Communical_Yellow_Emoticons}
                            name={'AntDesign/arrowright'}
                            style={StyleSheet.applyWidth(
                              { position: 'absolute', right: 18 },
                              dimensions.width
                            )}
                          />
                          <Divider
                            {...GlobalStyles.DividerStyles(theme)['Divider']
                              .props}
                            color={palettes.App.Icon_Dark_Gray}
                            style={StyleSheet.applyWidth(
                              GlobalStyles.DividerStyles(theme)['Divider']
                                .style,
                              dimensions.width
                            )}
                          />
                          {/* Opponent */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 14,
                                marginTop: 5,
                                opacity: 0.75,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.Event}
                            {' @ '}
                            {listData?.Location}
                            {', '}
                            {listData?.Date}
                          </Text>
                        </Touchable>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
              />
            );
          }}
        </ShootrSupabaseDBAPIApi.FetchEventsListByTeamIDSingleGET>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Notifications */}
        <View>
          {/* Header */}
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
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.App.NFT_TIME_Black,
                    fontSize: 22,
                    marginTop: 10,
                  }
                ),
                dimensions.width
              )}
            >
              {'Notifications'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NotificationsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Text  */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.NFT_TIME_Black,
                      fontSize: 18,
                      marginRight: 10,
                      marginTop: 10,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'See All'}
              </Text>
            </Touchable>
          </View>

          <ShootrSupabaseDBAPIApi.FetchNotificationsGetByTeamIDGET
            TeamID={Constants['TeamID']}
          >
            {({ loading, error, data, refetchNotificationsGetByTeamID }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <>
                  {/* FlashList Notifications */}
                  <SimpleStyleFlashList
                    data={fetchData}
                    estimatedItemSize={50}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(flashListNotificationsData, index) =>
                      flashListNotificationsData?.id ??
                      flashListNotificationsData?.uuid ??
                      index?.toString() ??
                      JSON.stringify(flashListNotificationsData)
                    }
                    listKey={
                      'Scroll View->Notifications->Fetch->FlashList Notifications'
                    }
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const flashListNotificationsData = item;
                      return (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: palettes.App.Peoplebit_Turquoise,
                              borderRadius: 12,
                              flexDirection: 'row',
                              marginLeft: 10,
                              marginRight: 10,
                              marginTop: 10,
                              paddingBottom: 10,
                              paddingLeft: 10,
                              paddingRight: 10,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          <Touchable>
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                },
                                dimensions.width
                              )}
                            >
                              <Icon
                                size={24}
                                color={palettes.App.Communical_Yellow_Emoticons}
                                name={'MaterialCommunityIcons/radiobox-marked'}
                              />
                              <Text
                                accessible={true}
                                selectable={false}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      marginLeft: 20,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'New Event: '}
                                {flashListNotificationsData?.Notification}
                                {' added by '}
                                {flashListNotificationsData?.Createdby}
                              </Text>
                            </View>
                          </Touchable>
                        </View>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                    style={StyleSheet.applyWidth(
                      { backgroundColor: palettes.App.NFT_TIME_Light_Gray },
                      dimensions.width
                    )}
                  />
                </>
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchNotificationsGetByTeamIDGET>
        </View>
      </SimpleStyleScrollView>
      {/* Final Menu */}
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
                navigation.navigate('SoccerUserProfileBasicScreen');
              } else {
              }

              if (Constants['SportValue'] === 3) {
                navigation.navigate('RugbyUserProfileBasicScreen');
              } else {
              }

              if (Constants['SportValue'] === 6) {
                navigation.navigate('SoccerUserProfileScreen');
              } else {
              }

              if (Constants['SportValue'] === 7) {
                navigation.navigate('GAAUserProfileScreen');
              } else {
              }

              if (Constants['SportValue'] === 8) {
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

export default withTheme(HomeScreen);
