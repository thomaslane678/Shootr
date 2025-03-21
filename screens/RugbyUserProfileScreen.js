import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
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

const RugbyUserProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textAreaValue, setTextAreaValue] = React.useState('');
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
      {/* Dashboard */}
      <View>
        {/* Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'center',
              color: theme.colors.text.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 21,
            },
            dimensions.width
          )}
        >
          {'Player Dashboard'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('RugbyUserProfileScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  borderRadius: null,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: '33%',
                }
              ),
              dimensions.width
            )}
            title={'The Numbers'}
          />
          {/* Button 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('RugbyAdvancedAnalyticsAllSeasonScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  borderRadius: null,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: '33%',
                }
              ),
              dimensions.width
            )}
            title={'Pitch View\nAll Season'}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('RugbyAdvancedAnalyticsByMatchScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  borderRadius: null,
                  color: palettes.App.Peoplebit_Turquoise,
                  fontFamily: 'Inter_600SemiBold',
                  width: '33%',
                }
              ),
              dimensions.width
            )}
            title={'Pitch View\nBy Match'}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Divider
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            color={palettes.App.Peoplebit_Turquoise}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5, width: '33%' }
              ),
              dimensions.width
            )}
          />
          {/* Divider 2 */}
          <Divider
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            color={theme.colors.background.base}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5, width: '33%' }
              ),
              dimensions.width
            )}
          />
          {/* Divider 3 */}
          <Divider
            color={theme.colors.border.base}
            {...GlobalStyles.DividerStyles(theme)['Divider'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.DividerStyles(theme)['Divider'].style,
                { height: 5, width: '33%' }
              ),
              dimensions.width
            )}
          />
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
          { height: '150%', opacity: 1 },
          dimensions.width
        )}
      >
        {/* User Details */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 15, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* User Details */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', height: 100 },
              dimensions.width
            )}
          >
            {/* User Image */}
            <View>
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image 2'].props}
                source={imageSource(Images['shootrredesigninappimage'])}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Image 2'].style,
                  dimensions.width
                )}
              />
            </View>
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                {
                  height: '100%',
                  justifyContent: 'space-around',
                  paddingLeft: 16,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App.NFT_TIME_Black,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 19,
                  },
                  dimensions.width
                )}
              >
                {Constants['Name']}
              </Text>
              {/* Role */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App['Custom Color_30'],
                    fontFamily: 'Poppins_400Regular',
                  },
                  dimensions.width
                )}
              >
                {Constants['Position']}
                {' @ '}
                {/* Company */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App.NFT_TIME_Black,
                      fontFamily: 'Inter_600SemiBold',
                    },
                    dimensions.width
                  )}
                >
                  {Constants['HomeTeam']}
                </Text>
              </Text>
              {/* Tagline */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.App.NFT_TIME_Black,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 13,
                  },
                  dimensions.width
                )}
              >
                {Constants['Location']} {Constants['Grade']}{' '}
                {Constants['Sport']}
              </Text>
            </View>
          </View>
        </View>
        {/* Player Stats Dashboard */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'column',
              justifyContent: 'space-around',
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              }),
              dimensions.width
            )}
          >
            {'Player Dashboard'}
          </Text>
          {/* Spacer 4 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Scores & Wides */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-around' },
              dimensions.width
            )}
          >
            {/* Total Scored */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  height: 50,
                  width: 160,
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
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      opacity: 1,
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Tries'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Try'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Scores & Wides->Total Scored->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
            {/* Wides */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  flexWrap: 'nowrap',
                  height: 50,
                  width: 160,
                },
                dimensions.width
              )}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Pens Scored - Wide'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Pen Scored'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Scores & Wides->Wides->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'].style,
                      {
                        color: palettes.App.Communical_Yellow_Emoticons,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'-'}
                </Text>
                {/* Fetch 2 */}
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Pen Missed'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Scores & Wides->Wides->View->Fetch 2->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
          </View>
          {/* Frees */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Frees Won Conceded */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  height: 50,
                  width: 160,
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
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Pen Won - Conceded'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Penalty Won'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Frees->Frees Won Conceded->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: palettes.App.Communical_Yellow_Emoticons,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'-'}
                </Text>
                {/* Fetch 2 */}
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Penalty Conceded'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Frees->Frees Won Conceded->View->Fetch 2->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
            {/* Frees Scored */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  flexWrap: 'nowrap',
                  height: 50,
                  width: 160,
                },
                dimensions.width
              )}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Tackle Won - Missed'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Tackle Won'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Frees->Frees Scored->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'].style,
                      {
                        color: palettes.App.Communical_Yellow_Emoticons,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'-'}
                </Text>
                {/* Fetch 2 */}
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Tackle Missed'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Frees->Frees Scored->View->Fetch 2->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
          </View>
          {/* Restarts */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Own Restarts */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  height: 50,
                  width: 160,
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
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Carry - Offload'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Carry'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Restarts->Own Restarts->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: palettes.App.Communical_Yellow_Emoticons,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'-'}
                </Text>
                {/* Fetch 2 */}
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Offload'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Restarts->Own Restarts->View->Fetch 2->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
            {/* Opp Restarts */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  flexWrap: 'nowrap',
                  height: 50,
                  width: 160,
                },
                dimensions.width
              )}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 12,
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Penalty Conceded'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Penalty Conceded'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Restarts->Opp Restarts->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
          </View>
          {/* Turnovers */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Turnovers */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  flexWrap: 'nowrap',
                  height: 50,
                  width: 160,
                },
                dimensions.width
              )}
            >
              {/* Text 2 */}
              <Text
                accessible={true}
                selectable={false}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Turnover Won - Lost'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Turnover Won'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Turnovers->Turnovers->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: palettes.App.Communical_Yellow_Emoticons,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'-'}
                </Text>
                {/* Fetch 2 */}
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Turnover Lost'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Turnovers->Turnovers->View->Fetch 2->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
            {/* Free Scored Wide */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  height: 50,
                  width: 160,
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
                      color: palettes.App.Communical_Yellow_Emoticons,
                      fontFamily: 'Inter_600SemiBold',
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Yellow - Red Cards'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Yellow Card'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
                  }) => {
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Turnovers->Free Scored Wide->View->Fetch->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: palettes.App.Communical_Yellow_Emoticons,
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 20,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'-'}
                </Text>
                {/* Fetch 2 */}
                <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET
                  Action={'Red Card'}
                  PlayerID={Constants['Username']}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchPlayerSeasonStatsDashboard,
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
                        listKey={
                          'Scroll View->Player Stats Dashboard->Turnovers->Free Scored Wide->View->Fetch 2->List'
                        }
                        nestedScrollEnabled={false}
                        numColumns={1}
                        onEndReachedThreshold={0.5}
                        pagingEnabled={false}
                        renderItem={({ item, index }) => {
                          const listData = item;
                          return (
                            <>
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
                                      alignSelf: 'center',
                                      color:
                                        palettes.App
                                          .Communical_Yellow_Emoticons,
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 25,
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.Total}
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
                </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsDashboardGET>
              </View>
            </View>
          </View>
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AddNewTeamIDScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Add New TeamID'}
        />
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('DeleteTeamIDScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: palettes.App.NFT_TIME_Red,
                borderRadius: 12,
                color: palettes.App.NFT_White_v2,
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Delete TeamID'}
        />
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

export default withTheme(RugbyUserProfileScreen);
