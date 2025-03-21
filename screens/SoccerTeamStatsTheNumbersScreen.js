import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Spacer,
  Touchable,
  WebView,
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

const SoccerTeamStatsTheNumbersScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [MbMValue, setMbMValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [selectedTag, setSelectedTag] = React.useState('All');
  const [stepper2Value, setStepper2Value] = React.useState('');
  const [stepper3Value, setStepper3Value] = React.useState('');
  const [stepperValue, setStepperValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const LineGraph = (
          await ShootrSupabaseDBAPIApi.teamMatchStatsLGGetGET(Constants, {
            Action: Constants['ChosenStat'],
            TeamID: Constants['TeamID'],
          })
        )?.json;
        const Opp1 = LineGraph?.[0].Opposition;
        const Opp2 = LineGraph?.[1].Opposition;
        const Opp3 = LineGraph?.[2].Opposition;
        const Opp4 = LineGraph?.[3].Opposition;
        const Opp5 = LineGraph?.[4].Opposition;
        const TotalOpp1 = LineGraph?.[0].Total;
        const TotalOpp2 = LineGraph?.[1].Total;
        const TotalOpp3 = LineGraph?.[2].Total;
        const TotalOpp4 = LineGraph?.[3].Total;
        const TotalOpp5 = LineGraph?.[4].Total;
        setGlobalVariableValue({
          key: 'DrilldownOpposition1',
          value: Opp1,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition2',
          value: Opp2,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition3',
          value: Opp3,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition4',
          value: Opp4,
        });
        setGlobalVariableValue({
          key: 'DrilldownOpposition5',
          value: Opp5,
        });
        undefined;
        undefined;
        setGlobalVariableValue({
          key: 'DrilldownStat3LG',
          value: TotalOpp3,
        });
        setGlobalVariableValue({
          key: 'DrilldownStat4LG',
          value: TotalOpp4,
        });
        setGlobalVariableValue({
          key: 'DrilldownStat5LG',
          value: TotalOpp5,
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
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
          {'Team Dashboard'}
        </Text>

        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: 'center',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('SoccerTeamStatsTheNumbersScreen');
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
                navigation.navigate('SoccerTeamStatsPitchViewAllSeasonScreen');
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
                navigation.navigate('SoccerTeamStatsPitchViewByMatchScreen');
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
          {
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        {/* Dashboard 2 */}
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
          {/* Win - Draw - Loss */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              },
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
                {'Win - Draw - Loss'}
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
                <ShootrSupabaseDBAPIApi.FetchSoccerWDLGET
                  TeamID={Constants['TeamID']}
                >
                  {({ loading, error, data, refetchSoccerWDL }) => {
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
                          'Scroll View->Dashboard 2->Win - Draw - Loss->Total Scored->View->Fetch->List'
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
                                {listData?.Win}
                                {' - '}
                                {listData?.Draw}
                                {' - '}
                                {listData?.Loss}
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
                </ShootrSupabaseDBAPIApi.FetchSoccerWDLGET>
              </View>
            </View>
          </View>
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
                {'Goals'}
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Goal'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Scores & Wides->Total Scored->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
              </View>
            </View>
            {/* Wides */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignContent: 'space-around',
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  flexDirection: 'column',
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
                {'FK - Pen Scored'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Free Goal'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Scores & Wides->Wides->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
              </View>
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Penalty Goal'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Scores & Wides->Wides->View 3->Fetch->List'
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
                                {' - '}
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                {'FK Won - Conceded'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Free Won'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Frees->Frees Won Conceded->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Free Conceded'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Frees->Frees Won Conceded->View->Fetch 2->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                {'Goals Conceded'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Opposition Goal'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Frees->Frees Scored->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                {'Pen Won - Conceded'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Penalty Won'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Restarts->Own Restarts->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Penalty Conceded'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Restarts->Own Restarts->View->Fetch 2->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                {'Offsides'}
              </Text>

              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-evenly' },
                  dimensions.width
                )}
              >
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Offside'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Restarts->Opp Restarts->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Turnover Won'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Turnovers->Turnovers->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Turnover Lost'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Turnovers->Turnovers->View->Fetch 2->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Yellow Card'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Turnovers->Free Scored Wide->View->Fetch->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
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
                <ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET
                  Action={'Red Card'}
                  TeamID={Constants['TeamID']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchTeamSeasonStatsByAction,
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
                          'Scroll View->Dashboard 2->Turnovers->Free Scored Wide->View->Fetch 2->List'
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
                </ShootrSupabaseDBAPIApi.FetchTeamSeasonStatsByActionGET>
              </View>
            </View>
          </View>
        </View>
        {/* Choose Stat */}
        <View>
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 21,
              },
              dimensions.width
            )}
          >
            {'Filter Team By'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <View>
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  try {
                    navigation.navigate('SoccerChooseStatScreen');
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
                      color: palettes.App.Peoplebit_Turquoise,
                      height: 30,
                      width: 150,
                    }
                  ),
                  dimensions.width
                )}
                title={'Choose Stat'}
              />
            </View>
          </View>
        </View>

        <View>
          <View>
            {/* Spacer 2 */}
            <Spacer bottom={8} left={8} right={8} top={8} />
            {/* Spacer 3 */}
            <Spacer bottom={8} left={8} right={8} top={8} />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { color: palettes.App.NFT_TIME_Black, fontSize: 22 }
                ),
                dimensions.width
              )}
            >
              {'Team Leaderboard: '}
              {Constants['ChosenStat']}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>

          <ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsByTeam$ActionGET
            Variable={Constants['TeamID']}
            var2={Constants['ChosenStat']}
          >
            {({
              loading,
              error,
              data,
              refetchPlayerSeasonStatsByTeam$Action,
            }) => {
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
                  listKey={'Scroll View->View->Fetch->FlashList'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <>
                        {/* View 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: palettes.App.Peoplebit_Turquoise,
                              borderRadius: 18,
                              flexDirection: 'row',
                              height: 80,
                            },
                            dimensions.width
                          )}
                        >
                          {/* View 2 */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['Image 2']
                                .props}
                              source={
                                imageSource(
                                  Images['shootrredesigninappimage']
                                ) ?? imageSource(`${Constants['UserPic']}`)
                              }
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['Image 2']
                                    .style,
                                  { height: 80, width: 80 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                          <Spacer bottom={8} left={8} right={8} top={8} />
                          <View
                            style={StyleSheet.applyWidth(
                              { alignSelf: 'center' },
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
                                    color:
                                      palettes.App.Communical_Yellow_Emoticons,
                                    fontSize: 18,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {flashListData?.PlayerName}
                            </Text>
                            <Spacer bottom={8} left={8} right={8} top={8} />
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              selectable={false}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color:
                                      palettes.App.Communical_Yellow_Emoticons,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Total: '}
                              {flashListData?.Total}
                            </Text>
                          </View>
                        </View>
                        <Spacer bottom={8} left={8} right={8} top={8} />
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              );
            }}
          </ShootrSupabaseDBAPIApi.FetchPlayerSeasonStatsByTeam$ActionGET>
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

export default withTheme(SoccerTeamStatsTheNumbersScreen);
