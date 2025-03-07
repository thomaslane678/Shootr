import React from 'react';
import {
  Circle,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const TeamHomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
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
            <Image
              resizeMode={'cover'}
              source={imageSource(`${Constants['UserPic']}`)}
              style={StyleSheet.applyWidth(
                { height: 50, width: 50 },
                dimensions.width
              )}
            />
          </Circle>

          <View
            style={StyleSheet.applyWidth({ marginLeft: 10 }, dimensions.width)}
          >
            <ShootrSupabaseDBAPIApi.FetchTeamListGetByUsernameGET
              TeamID={Constants['TeamID']}
            >
              {({ loading, error, data, refetchTeamListGetByUsername }) => {
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
            </ShootrSupabaseDBAPIApi.FetchTeamListGetByUsernameGET>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ChooseEventToCreateScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            size={24}
            color={palettes.App.Peoplebit_Turquoise}
            name={'AntDesign/pluscircleo'}
            style={StyleSheet.applyWidth({ opacity: 0.5 }, dimensions.width)}
          />
        </Touchable>
      </View>
      {/* Quick Links (To Be Defined) */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginTop: 30,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Quick Links'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Squad List */}
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'chatdoc',
                  value: false,
                });
                navigation.navigate('MessagesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.App.Communical_Yellow_Emoticons}
                name={'MaterialCommunityIcons/message-plus'}
                size={62}
                style={StyleSheet.applyWidth(
                  { backgroundColor: palettes.App.Peoplebit_Turquoise },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_700Bold',
                    fontSize: 12,
                    marginTop: 5,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Messages'}
              </Text>
            </View>
          </Touchable>
          {/* Squad List */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('MyTeamScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.App.Communical_Yellow_Emoticons}
                name={'AntDesign/team'}
                size={62}
                style={StyleSheet.applyWidth(
                  { backgroundColor: palettes.App.Peoplebit_Turquoise },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_700Bold',
                    fontSize: 12,
                    marginTop: 5,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Squad List'}
              </Text>
            </View>
          </Touchable>
          {/* Chat Doctor */}
          <Touchable
            onPress={() => {
              try {
                if (Constants['SportValue'] === 2) {
                  navigation.navigate('GAATeamStatsTheNumbersScreen');
                } else {
                }

                if (Constants['SportValue'] === 1) {
                  navigation.navigate('SoccerTeamStatsTheNumbersScreen');
                } else {
                }

                if (Constants['SportValue'] === 3) {
                  navigation.navigate('RugbyTeamStatsTheNumbersScreen');
                } else {
                }
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.App.Communical_Yellow_Emoticons}
                name={'Ionicons/stats-chart-outline'}
                size={62}
                style={StyleSheet.applyWidth(
                  { backgroundColor: palettes.App.Peoplebit_Sapphire },
                  dimensions.width
                )}
              />
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_700Bold',
                    fontSize: 12,
                    marginTop: 5,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Team Stats'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { backgroundColor: palettes.App.Communial_Icon_BG },
          dimensions.width
        )}
      >
        <ShootrSupabaseDBAPIApi.FetchMatchResultsByTeamIDSingleGET
          Variable={Constants['TeamID']}
        >
          {({ loading, error, data, refetchMatchResultsByTeamIDSingle }) => {
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
                listKey={'Scroll View->Fetch->List'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                pagingEnabled={false}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Last Result Touchable */}
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
                              if (Constants['SportValue'] === 1) {
                                navigation.navigate('ResultListScreen');
                              } else {
                              }

                              if (Constants['SportValue'] === 3) {
                                navigation.navigate('ResultListScreen');
                              } else {
                              }

                              if (Constants['SportValue'] === 6) {
                                navigation.navigate('ResultListScreen');
                              } else {
                              }

                              if (Constants['SportValue'] === 8) {
                                navigation.navigate('ResultListScreen');
                              } else {
                              }

                              if (Constants['SportValue'] === 2) {
                                navigation.navigate('ResultListGAAScreen');
                              } else {
                              }

                              if (Constants['SportValue'] === 7) {
                                navigation.navigate('ResultListGAAScreen');
                              } else {
                              }
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
                                fontFamily: 'Inter_500Medium',
                                fontSize: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Last Result'}
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
                                fontFamily: 'Inter_700Bold',
                                fontSize: 14,
                                marginTop: 5,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.MatchType}
                            {' Vs '}
                            {listData?.Opposition}
                          </Text>
                          {/* Opponent 2 */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                alignSelf: 'stretch',
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_600SemiBold',
                                fontSize: 12,
                                marginTop: 5,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.MatchResult}
                            {':'}
                            {listData?.HomeTeamGoals}
                            {'-'}
                            {listData?.HomeTeamPoints}
                            {' - '}
                            {listData?.OppositionGoals}
                            {'-'}
                            {listData?.OppositionPoints}
                          </Text>
                        </Touchable>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                snapToAlignment={'start'}
                initialNumToRender={1}
              />
            );
          }}
        </ShootrSupabaseDBAPIApi.FetchMatchResultsByTeamIDSingleGET>
        {/* Fetch 2 */}
        <ShootrSupabaseDBAPIApi.FetchEventsListByHomeTeamGetOneByDate2GET
          TeamID={Constants['TeamID']}
        >
          {({
            loading,
            error,
            data,
            refetchEventsListByHomeTeamGetOneByDate2,
          }) => {
            const fetch2Data = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={fetch2Data}
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
                listKey={'Scroll View->Fetch 2->List'}
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
                                fontFamily: 'Inter_500Medium',
                                fontSize: 18,
                              },
                              dimensions.width
                            )}
                          >
                            {'Next Event'}
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
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.Event}
                            {' @ '}
                            {listData?.Location}
                          </Text>
                          {/* Opponent 2 */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: palettes.App.Communical_Yellow_Emoticons,
                                fontFamily: 'Inter_300Light',
                                fontSize: 12,
                                marginTop: 5,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.Date} {listData?.Time}
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
        </ShootrSupabaseDBAPIApi.FetchEventsListByHomeTeamGetOneByDate2GET>
        <View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
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
                    fontFamily: 'Inter_500Medium',
                    fontSize: 24,
                    marginLeft: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {'Upcoming Matches\n'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('FixtureListScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Inter_500Medium', marginRight: 20 }
                  ),
                  dimensions.width
                )}
              >
                {'See All'}
              </Text>
            </Touchable>
          </View>

          <View>
            <ShootrSupabaseDBAPIApi.FetchFixtureListGetByHomeTeamGET
              TeamID={Constants['TeamID']}
            >
              {({ loading, error, data, refetchFixtureListGetByHomeTeam }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <>
                    {/* FlashList Upcoming Matches */}
                    <SimpleStyleFlashList
                      data={fetchData}
                      estimatedItemSize={50}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(flashListUpcomingMatchesData, index) =>
                        flashListUpcomingMatchesData?.id ??
                        flashListUpcomingMatchesData?.uuid ??
                        index?.toString() ??
                        JSON.stringify(flashListUpcomingMatchesData)
                      }
                      listKey={
                        'Scroll View->View->View->Fetch->FlashList Upcoming Matches'
                      }
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const flashListUpcomingMatchesData = item;
                        return (
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('FixtureListScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={StyleSheet.applyWidth(
                              { borderRadius: 12 },
                              dimensions.width
                            )}
                          >
                            {/* View 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flexDirection: 'column' },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    backgroundColor:
                                      palettes.App.Peoplebit_Turquoise,
                                    borderRadius: 12,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
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
                                {/* View 2 */}
                                <View>
                                  <Icon
                                    color={
                                      palettes.App.Communical_Yellow_Emoticons
                                    }
                                    name={'MaterialIcons/radio-button-checked'}
                                    size={18}
                                  />
                                </View>

                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignContent: 'center',
                                      alignItems: 'center',
                                      alignSelf: 'stretch',
                                      justifyContent: 'center',
                                      left: 40,
                                    },
                                    dimensions.width
                                  )}
                                >
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
                                          color:
                                            palettes.App
                                              .Communical_Yellow_Emoticons,
                                          fontFamily: 'Inter_600SemiBold',
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {flashListUpcomingMatchesData?.HomeTeam}
                                    {' vs '}
                                    {flashListUpcomingMatchesData?.Opposition}
                                  </Text>
                                  {/* Text 2 */}
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
                                          alignSelf: 'flex-start',
                                          color:
                                            palettes.App
                                              .Communical_Yellow_Emoticons,
                                          fontSize: 10,
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {flashListUpcomingMatchesData?.Location}
                                    {'  '}
                                    {flashListUpcomingMatchesData?.Date}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </>
                );
              }}
            </ShootrSupabaseDBAPIApi.FetchFixtureListGetByHomeTeamGET>
          </View>
        </View>
      </SimpleStyleScrollView>
      {/* Menu Tab */}
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

export default withTheme(TeamHomeScreen);
