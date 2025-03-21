import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const GAAAdvancedAnalyticsAllSeasonScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [FoulsConcededTotal, setFoulsConcededTotal] = React.useState(7);
  const [FoulsWonTotal, setFoulsWonTotal] = React.useState(8);
  const [GoalsTotal, setGoalsTotal] = React.useState(5);
  const [LineData1, setLineData1] = React.useState(0);
  const [LineData10, setLineData10] = React.useState(0);
  const [LineData2, setLineData2] = React.useState(0);
  const [LineData3, setLineData3] = React.useState(0);
  const [LineData4, setLineData4] = React.useState(0);
  const [LineData5, setLineData5] = React.useState(0);
  const [LineData6, setLineData6] = React.useState(0);
  const [LineData7, setLineData7] = React.useState(0);
  const [LineData8, setLineData8] = React.useState(0);
  const [LineData9, setLineData9] = React.useState(0);
  const [MbMValue, setMbMValue] = React.useState('');
  const [Opp1, setOpp1] = React.useState('Opp1');
  const [Opp10, setOpp10] = React.useState('Opp10');
  const [Opp2, setOpp2] = React.useState('Opp2');
  const [Opp3, setOpp3] = React.useState('Opp3');
  const [Opp4, setOpp4] = React.useState('Opp4');
  const [Opp5, setOpp5] = React.useState('Opp5');
  const [Opp6, setOpp6] = React.useState('Opp6');
  const [Opp7, setOpp7] = React.useState('Opp7');
  const [Opp8, setOpp8] = React.useState('Opp8');
  const [Opp9, setOpp9] = React.useState('Opp9');
  const [PointsTotal, setPointsTotal] = React.useState(10);
  const [TurnoversTotal, setTurnoversTotal] = React.useState(5);
  const [X3, setX3] = React.useState('');
  const [Y10, setY10] = React.useState('');
  const [Y3, setY3] = React.useState('');
  const [Y6, setY6] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const PlayerMatchStats = (
          await ShootrSupabaseDBAPIApi.playerMatchStatsLGGET(Constants, {
            Action: Constants['ChosenStat'],
            PlayerID: Constants['Username'],
            Variable: Constants['TeamID'],
          })
        )?.json;
        const AAOpp1 = PlayerMatchStats?.[0].Opposition;
        const AAOpp2 = PlayerMatchStats?.[1].Opposition;
        const AAOpp3 = PlayerMatchStats?.[2].Opposition;
        const AAOpp4 = PlayerMatchStats?.[3].Opposition;
        const AAOpp5 = PlayerMatchStats?.[4].Opposition;
        const AATot1 = PlayerMatchStats?.[0].Total;
        const AATot2 = PlayerMatchStats?.[1].Total;
        const AATot3 = PlayerMatchStats?.[2].Total;
        const AATot4 = PlayerMatchStats?.[3].Total;
        const AATot5 = PlayerMatchStats?.[4].Total;
        setGlobalVariableValue({
          key: 'AAOpp1',
          value: AAOpp1,
        });
        setGlobalVariableValue({
          key: 'AAOpp2',
          value: AAOpp2,
        });
        setGlobalVariableValue({
          key: 'AAOpp3',
          value: AAOpp3,
        });
        setGlobalVariableValue({
          key: 'AAOpp4',
          value: AAOpp4,
        });
        setGlobalVariableValue({
          key: 'AAOpp5',
          value: AAOpp5,
        });
        setGlobalVariableValue({
          key: 'AATot1',
          value: AATot1,
        });
        setGlobalVariableValue({
          key: 'AATot2',
          value: AATot2,
        });
        setGlobalVariableValue({
          key: 'AATot3',
          value: AATot3,
        });
        setGlobalVariableValue({
          key: 'AATot4',
          value: AATot4,
        });
        setGlobalVariableValue({
          key: 'AATot5',
          value: AATot5,
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
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
                navigation.navigate('GAAUserProfileScreen');
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
                navigation.navigate('GAAAdvancedAnalyticsAllSeasonScreen');
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
                navigation.navigate('GAAAdvancedAnalyticsByMatchScreen');
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
            color={theme.colors.background.base}
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
            color={palettes.App.Peoplebit_Turquoise}
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
        style={StyleSheet.applyWidth({ height: '400%' }, dimensions.width)}
      >
        {/* Pitch View */}
        <View
          style={StyleSheet.applyWidth(
            { height: 800, width: 390 },
            dimensions.width
          )}
        >
          <View>
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'center', fontFamily: 'Inter_600SemiBold' }
                ),
                dimensions.width
              )}
            >
              {'Attack Top Goal'}
            </Text>
            <Spacer bottom={8} left={8} right={8} top={8} />
          </View>
          {/* Choose Stat Buttons */}
          <>
            {!Constants['Stat_Options'] ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-around' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      width: 220,
                    },
                    dimensions.width
                  )}
                >
                  {/* Choose Stat & Refresh API Button */}
                  <Button
                    accessible={true}
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'X1',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X2',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X3',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X4',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X5',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X6',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X7',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X8',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X9',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X10',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X11',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X12',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X13',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X14',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X15',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X16',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X17',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X18',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X19',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'X20',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y1',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y2',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y3',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y4',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y5',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y6',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y7',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y8',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y9',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y10',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y11',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y12',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y13',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y14',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y15',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y16',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y17',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y18',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y19',
                          value: 1,
                        });
                        setGlobalVariableValue({
                          key: 'Y20',
                          value: 1,
                        });
                        navigation.navigate('GAAChooseStatScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Button'].style,
                        {
                          backgroundColor:
                            palettes.App.Communical_Yellow_Emoticons,
                          color: palettes.App.Peoplebit_Turquoise,
                          width: 100,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Choose Stat'}
                  />
                </View>
                {/* View 2 */}
                <View>
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        { fontFamily: 'Inter_600SemiBold', fontSize: 16 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Currently Showing:'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    selectable={false}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          alignSelf: 'center',
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 18,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {Constants['ChosenStat']}
                    {'s'}
                  </Text>
                </View>
              </View>
            )}
          </>
          {/* Spacer 2 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Update Button */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  const API1 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: FoulsConcededTotal,
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 0,
                      }
                    )
                  )?.json;
                  const X1 = API1?.[0].X;
                  const Y1 = API1?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X1',
                    value: X1,
                  });
                  setGlobalVariableValue({
                    key: 'Y1',
                    value: Y1,
                  });
                  const API2 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 1,
                      }
                    )
                  )?.json;
                  const X2 = API2?.[0].X;
                  const Y2 = API2?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X2',
                    value: X2,
                  });
                  setGlobalVariableValue({
                    key: 'Y2',
                    value: Y2,
                  });
                  const API3 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 2,
                      }
                    )
                  )?.json;
                  const X3 = API3?.[0].X;
                  const Y3 = API3?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X3',
                    value: X3,
                  });
                  setGlobalVariableValue({
                    key: 'Y3',
                    value: Y3,
                  });
                  const API4 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 3,
                      }
                    )
                  )?.json;
                  const X4 = API4?.[0].X;
                  const Y4 = API4?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X4',
                    value: X4,
                  });
                  setGlobalVariableValue({
                    key: 'Y4',
                    value: Y4,
                  });
                  const API5 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 4,
                      }
                    )
                  )?.json;
                  const X5 = API5?.[0].X;
                  const Y5 = API5?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X5',
                    value: X5,
                  });
                  setGlobalVariableValue({
                    key: 'Y5',
                    value: Y5,
                  });
                  const API6 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 5,
                      }
                    )
                  )?.json;
                  const X6 = API6?.[0].X;
                  const Y6 = API6?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X6',
                    value: X6,
                  });
                  setGlobalVariableValue({
                    key: 'Y6',
                    value: Y6,
                  });
                  const API7 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 6,
                      }
                    )
                  )?.json;
                  const X7 = API7?.[0].X;
                  const Y7 = API7?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X7',
                    value: X7,
                  });
                  setGlobalVariableValue({
                    key: 'Y7',
                    value: Y7,
                  });
                  const API8 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 7,
                      }
                    )
                  )?.json;
                  const X8 = API8?.[0].X;
                  const Y8 = API8?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X8',
                    value: X8,
                  });
                  setGlobalVariableValue({
                    key: 'Y8',
                    value: Y8,
                  });
                  const API9 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 8,
                      }
                    )
                  )?.json;
                  const X9 = API9?.[0].X;
                  const Y9 = API9?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X9',
                    value: X9,
                  });
                  setGlobalVariableValue({
                    key: 'Y9',
                    value: Y9,
                  });
                  const API10 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 9,
                      }
                    )
                  )?.json;
                  const X10 = API10?.[0].X;
                  const Y10 = API10?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X10',
                    value: X10,
                  });
                  setGlobalVariableValue({
                    key: 'Y10',
                    value: Y10,
                  });
                  const API11 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 10,
                      }
                    )
                  )?.json;
                  const X11 = API11?.[0].X;
                  const Y11 = API11?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X11',
                    value: X11,
                  });
                  setGlobalVariableValue({
                    key: 'Y11',
                    value: Y11,
                  });
                  const API12 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 11,
                      }
                    )
                  )?.json;
                  const X12 = API12?.[0].X;
                  const Y12 = API12?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X12',
                    value: X12,
                  });
                  setGlobalVariableValue({
                    key: 'Y12',
                    value: Y12,
                  });
                  const API13 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 12,
                      }
                    )
                  )?.json;
                  const X13 = API13?.[0].X;
                  const Y13 = API13?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X13',
                    value: X13,
                  });
                  setGlobalVariableValue({
                    key: 'Y13',
                    value: Y13,
                  });
                  const API14 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 13,
                      }
                    )
                  )?.json;
                  const X14 = API14?.[0].X;
                  const Y14 = API14?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X14',
                    value: X14,
                  });
                  setGlobalVariableValue({
                    key: 'X14',
                    value: X14,
                  });
                  const API15 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 14,
                      }
                    )
                  )?.json;
                  const X15 = API15?.[0].X;
                  const Y15 = API15?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X15',
                    value: X15,
                  });
                  setGlobalVariableValue({
                    key: 'Y15',
                    value: Y15,
                  });
                  const API16 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 15,
                      }
                    )
                  )?.json;
                  const X16 = API16?.[0].X;
                  const Y16 = API16?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X16',
                    value: X16,
                  });
                  setGlobalVariableValue({
                    key: 'Y16',
                    value: Y16,
                  });
                  const API17 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 16,
                      }
                    )
                  )?.json;
                  const X17 = API17?.[0].X;
                  const Y17 = API17?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X17',
                    value: X17,
                  });
                  setGlobalVariableValue({
                    key: 'Y17',
                    value: Y17,
                  });
                  const API18 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 17,
                      }
                    )
                  )?.json;
                  const X18 = API18?.[0].X;
                  const Y18 = API18?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X18',
                    value: X18,
                  });
                  setGlobalVariableValue({
                    key: 'Y18',
                    value: Y18,
                  });
                  const API19 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 18,
                      }
                    )
                  )?.json;
                  const X19 = API19?.[0].X;
                  const Y19 = API19?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X19',
                    value: X19,
                  });
                  setGlobalVariableValue({
                    key: 'Y19',
                    value: Y19,
                  });
                  const API20 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 19,
                      }
                    )
                  )?.json;
                  const X20 = API20?.[0].X;
                  const Y20 = API20?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X20',
                    value: X20,
                  });
                  setGlobalVariableValue({
                    key: 'Y20',
                    value: Y20,
                  });
                  const API21 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 0,
                      }
                    )
                  )?.json;
                  const X21 = API21?.[0].X;
                  const Y21 = API21?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X21',
                    value: X21,
                  });
                  setGlobalVariableValue({
                    key: 'Y21',
                    value: Y21,
                  });
                  const API22 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 1,
                      }
                    )
                  )?.json;
                  const X22 = API22?.[0].X;
                  const Y22 = API22?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X22',
                    value: X22,
                  });
                  setGlobalVariableValue({
                    key: 'Y22',
                    value: Y22,
                  });
                  const API23 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 2,
                      }
                    )
                  )?.json;
                  const X23 = API23?.[0].X;
                  const Y23 = API23?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X23',
                    value: X23,
                  });
                  setGlobalVariableValue({
                    key: 'Y23',
                    value: Y23,
                  });
                  const API24 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 3,
                      }
                    )
                  )?.json;
                  const X24 = API24?.[0].X;
                  const Y24 = API24?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X24',
                    value: X24,
                  });
                  setGlobalVariableValue({
                    key: 'Y24',
                    value: Y24,
                  });
                  const API25 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 4,
                      }
                    )
                  )?.json;
                  const X25 = API25?.[0].X;
                  const Y25 = API25?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X25',
                    value: X25,
                  });
                  setGlobalVariableValue({
                    key: 'Y25',
                    value: Y25,
                  });
                  const API26 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 5,
                      }
                    )
                  )?.json;
                  const X26 = API26?.[0].X;
                  const Y26 = API26?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X26',
                    value: X26,
                  });
                  setGlobalVariableValue({
                    key: 'Y26',
                    value: Y26,
                  });
                  const API27 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 6,
                      }
                    )
                  )?.json;
                  const X27 = API27?.[0].X;
                  const Y27 = API27?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X27',
                    value: X27,
                  });
                  setGlobalVariableValue({
                    key: 'Y27',
                    value: Y27,
                  });
                  const API28 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 7,
                      }
                    )
                  )?.json;
                  const X28 = API28?.[0].X;
                  const Y28 = API28?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X28',
                    value: X28,
                  });
                  setGlobalVariableValue({
                    key: 'Y28',
                    value: Y28,
                  });
                  const API29 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 8,
                      }
                    )
                  )?.json;
                  const X29 = API29?.[0].X;
                  const Y29 = API29?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X29',
                    value: X29,
                  });
                  setGlobalVariableValue({
                    key: 'Y29',
                    value: Y29,
                  });
                  const API30 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 9,
                      }
                    )
                  )?.json;
                  const X30 = API30?.[0].X;
                  const Y30 = API30?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X30',
                    value: X30,
                  });
                  setGlobalVariableValue({
                    key: 'Y30',
                    value: Y30,
                  });
                  const API31 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 10,
                      }
                    )
                  )?.json;
                  const X31 = API31?.[0].X;
                  const Y31 = API31?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X31',
                    value: X31,
                  });
                  setGlobalVariableValue({
                    key: 'Y31',
                    value: Y31,
                  });
                  const API32 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 11,
                      }
                    )
                  )?.json;
                  const X32 = API32?.[0].X;
                  const Y32 = API32?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X32',
                    value: X32,
                  });
                  setGlobalVariableValue({
                    key: 'Y32',
                    value: Y32,
                  });
                  const API33 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 12,
                      }
                    )
                  )?.json;
                  const X33 = API33?.[0].X;
                  const Y33 = API33?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X33',
                    value: X33,
                  });
                  setGlobalVariableValue({
                    key: 'Y33',
                    value: Y33,
                  });
                  const API34 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 13,
                      }
                    )
                  )?.json;
                  const X34 = API34?.[0].X;
                  const Y34 = API34?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X34',
                    value: X34,
                  });
                  setGlobalVariableValue({
                    key: 'Y34',
                    value: Constants['Y34'],
                  });
                  const API35 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 14,
                      }
                    )
                  )?.json;
                  const X35 = API35?.[0].X;
                  const Y35 = API35?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X35',
                    value: X35,
                  });
                  setGlobalVariableValue({
                    key: 'Y35',
                    value: Y35,
                  });
                  const API36 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 15,
                      }
                    )
                  )?.json;
                  const X36 = API36?.[0].X;
                  const Y36 = API36?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X36',
                    value: X36,
                  });
                  setGlobalVariableValue({
                    key: 'Y36',
                    value: Y36,
                  });
                  const API37 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 16,
                      }
                    )
                  )?.json;
                  const X37 = API37?.[0].X;
                  const Y37 = API37?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X37',
                    value: X37,
                  });
                  setGlobalVariableValue({
                    key: 'Y37',
                    value: Y37,
                  });
                  const API38 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 17,
                      }
                    )
                  )?.json;
                  const X38 = API38?.[0].X;
                  const Y38 = API38?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X38',
                    value: X38,
                  });
                  setGlobalVariableValue({
                    key: 'Y38',
                    value: Y38,
                  });
                  const API39 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 18,
                      }
                    )
                  )?.json;
                  const X39 = API39?.[0].X;
                  const Y39 = API39?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X39',
                    value: X39,
                  });
                  setGlobalVariableValue({
                    key: 'Y39',
                    value: Y39,
                  });
                  const API40 = (
                    await ShootrSupabaseDBAPIApi.matchActionCoordAllSeasonPlayerGET(
                      Constants,
                      {
                        Action: Constants['ChosenStat2'],
                        PlayerID: Constants['Username'],
                        TeamID: Constants['TeamID'],
                        page: 19,
                      }
                    )
                  )?.json;
                  const X40 = API40?.[0].X;
                  const Y40 = API40?.[0].Y;
                  setGlobalVariableValue({
                    key: 'X40',
                    value: X40,
                  });
                  setGlobalVariableValue({
                    key: 'Y40',
                    value: Y40,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderRadius: 12,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  marginLeft: 40,
                  marginRight: 40,
                }
              ),
              dimensions.width
            )}
            title={'Update'}
          />
          <View
            style={StyleSheet.applyWidth({ height: 550 }, dimensions.width)}
          >
            <WebView
              allowFileAccessFromFileURLs={false}
              allowUniversalAccessFromFileURLs={false}
              cacheEnabled={true}
              incognito={false}
              javaScriptCanOpenWindowsAutomatically={false}
              javaScriptEnabled={true}
              mediaPlaybackRequiresUserAction={false}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              startInLoadingState={false}
              {...GlobalStyles.WebViewStyles(theme)['HTML View'].props}
              source={{
                html: `<!DOCTYPE html>
   <head> 
      <meta name="viewport" content="width=device-width, initial-scale=1"> 
<html>
<body>

<svg height="510" width="390" xmlns="http://www.w3.org/2000/svg">

 <rect width="390" height="510" fill="forestgreen" />

<line x1="0" y1="48" x2="390" y2="48" style="stroke:white;stroke-width:2" />
<line x1="0" y1="74" x2="390" y2="74" style="stroke:white;stroke-width:2" />
<line x1="0" y1="169" x2="390" y2="169" style="stroke:white;stroke-width:2" />
<line x1="0" y1="234" x2="390" y2="234" style="stroke:white;stroke-width:2" />
<line x1="0" y1="276" x2="390" y2="276" style="stroke:white;stroke-width:2" />
<line x1="0" y1="342" x2="390" y2="342" style="stroke:white;stroke-width:2" />
<line x1="0" y1="437" x2="390" y2="437" style="stroke:white;stroke-width:2" />
<line x1="0" y1="462" x2="390" y2="462" style="stroke:white;stroke-width:2" />
<line x1="160" y1="255" x2="230" y2="255" style="stroke:white;stroke-width:2" />
<line x1="180" y1="20" x2="210" y2="20" style="stroke:white;stroke-width:2" />
<line x1="180" y1="490" x2="210" y2="490" style="stroke:white;stroke-width:2" />
<line x1="180" y1="0" x2="180" y2="20" style="stroke:white;stroke-width:2" />
<line x1="210" y1="0" x2="210" y2="20" style="stroke:white;stroke-width:2" />
<line x1="180" y1="510" x2="180" y2="490" style="stroke:white;stroke-width:2" />
<line x1="210" y1="510" x2="210" y2="490" style="stroke:white;stroke-width:2" />
<line x1="160" y1="510" x2="160" y2="480" style="stroke:white;stroke-width:2" />
<line x1="230" y1="510" x2="230" y2="480" style="stroke:white;stroke-width:2" />
<line x1="160" y1="480" x2="230" y2="480" style="stroke:white;stroke-width:2" />
<line x1="230" y1="0" x2="230" y2="30" style="stroke:white;stroke-width:2" />
<line x1="160" y1="0" x2="160" y2="30" style="stroke:white;stroke-width:2" />
<line x1="160" y1="30" x2="230" y2="30" style="stroke:white;stroke-width:2" />

  <circle r="5" cx="${Constants['X1']}" cy="${Constants['Y1']}" fill="gold" />
<circle r="5" cx="${Constants['X2']}" cy="${Constants['Y2']}" fill="gold" />
  <circle r="5" cx="${Constants['X3']}" cy="${Constants['Y3']}" fill="gold" />
<circle r="5" cx="${Constants['X4']}" cy="${Constants['Y4']}" fill="gold" />
<circle r="5" cx="${Constants['X5']}" cy="${Constants['Y5']}" fill="gold" />
<circle r="5" cx="${Constants['X6']}" cy="${Constants['Y6']}" fill="gold" />
  <circle r="5" cx="${Constants['X7']}" cy="${Constants['Y7']}" fill="gold" />
<circle r="5" cx="${Constants['X8']}" cy="${Constants['Y8']}" fill="gold" />
  <circle r="5" cx="${Constants['X9']}" cy="${Constants['Y9']}" fill="gold" />
<circle r="5" cx="${Constants['X10']}" cy="${Y10}" fill="gold" />
  <circle r="5" cx="${Constants['X11']}” cy="${Constants['Y11']}” fill="gold" />
<circle r="5" cx="${Constants['X12']}" cy="${Constants['Y12']}" fill="gold" />
  <circle r="5" cx="${Constants['X13']}" cy="${Constants['Y13']}" fill="gold" />
<circle r="5" cx="${Constants['X14']}" cy="${Constants['Y14']}" fill="gold" />
<circle r="5" cx="${Constants['X15']}" cy="${Constants['Y15']}" fill="gold" />
<circle r="5" cx="${Constants['X16']}" cy="${Constants['Y16']}" fill="gold" />
  <circle r="5" cx="${Constants['X17']}" cy="${Constants['Y17']}" fill="gold" />
<circle r="5" cx="${Constants['X18']}" cy="${Constants['Y18']}" fill="gold" />
  <circle r="5" cx="${Constants['X19']}" cy="${Constants['Y19']}" fill="gold" />
<circle r="5" cx="${Constants['X20']}" cy="${Constants['Y20']}" fill="gold" />

  <circle r="5" cx="${Constants['X21']}" cy="${Constants['Y21']}" fill=“red” />
<circle r="5" cx="${Constants['X22']}" cy="${Constants['Y22']}" fill="red" />
  <circle r="5" cx="${Constants['X23']}" cy="${Constants['Y23']}" fill="red" />
<circle r="5" cx="${Constants['X24']}" cy="${Constants['Y24']}" fill="red" />
<circle r="5" cx="${Constants['X25']}" cy="${Constants['Y25']}" fill="red" />
<circle r="5" cx="${Constants['X26']}" cy="${Constants['Y26']}" fill="red" />
  <circle r="5" cx="${Constants['X27']}" cy="${Constants['Y27']}" fill="red" />
<circle r="5" cx="${Constants['X28']}" cy="${Constants['Y28']}" fill="red" />
  <circle r="5" cx="${Constants['X29']}" cy="${Constants['Y29']}" fill="red" />
<circle r="5" cx="${Constants['X30']}" cy="${Constants['Y30']}" fill="red" />
  <circle r="5" cx="${Constants['X31']}” cy="${Constants['Y31']}” fill="red" />
<circle r="5" cx="${Constants['X32']}" cy="${Constants['Y32']}" fill=“red” />
  <circle r="5" cx="${Constants['X33']}" cy="${Constants['Y33']}" fill="red" />
<circle r="5" cx="${Constants['X34']}" cy="${Constants['Y34']}" fill="red" />
<circle r="5" cx="${Constants['X35']}" cy="${Constants['Y35']}" fill="red" />
<circle r="5" cx="${Constants['X36']}" cy="${Constants['Y36']}" fill="red" />
  <circle r="5" cx="${Constants['X37']}" cy="${Constants['Y37']}" fill="red" />
<circle r="5" cx="${Constants['X38']}" cy="${Constants['Y38']}" fill="red" />
  <circle r="5" cx="${Constants['X39']}" cy="${Constants['Y39']}" fill="red" />
<circle r="5" cx="${Constants['X40']}" cy="${Constants['Y40']}" fill="red" />

</svg> 
 
</body>
</html>
`,
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.WebViewStyles(theme)['HTML View'].style,
                  { height: 510, width: 390 }
                ),
                dimensions.width
              )}
            />
          </View>
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
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

export default withTheme(GAAAdvancedAnalyticsAllSeasonScreen);
