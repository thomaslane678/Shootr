import React from 'react';
import { Button, Divider, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const SoccerMatchActionPlayerSelect4231Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPIMatchStatsPostPOST =
    ShootrSupabaseDBAPIApi.useMatchStatsPostPOST();

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
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['GK UN'],
                    PlayerNameinputvalue7: Constants['GK'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 145,
                marginRight: 150,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['GK']}`}
        />
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          },
          dimensions.width
        )}
      >
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['RB UN'],
                    PlayerNameinputvalue7: Constants['RB'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['RB']}`}
        />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['RCB UN'],
                    PlayerNameinputvalue7: Constants['RCB'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['RCB']}`}
        />
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['LCB UN'],
                    PlayerNameinputvalue7: Constants['LCB'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['LCB']}`}
        />
        {/* Button 4 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['LB UN'],
                    PlayerNameinputvalue7: Constants['LB'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['LB']}`}
        />
      </View>
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
          },
          dimensions.width
        )}
      >
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['R-CDM UN'],
                    PlayerNameinputvalue7: Constants['R-CDM'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['R-CDM']}`}
        />
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['L-CDM UN'],
                    PlayerNameinputvalue7: Constants['L-CDM'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['L-CDM']}`}
        />
      </View>
      {/* View 6 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
          },
          dimensions.width
        )}
      >
        {/* Button 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['RW UN'],
                    PlayerNameinputvalue7: Constants['RW'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['RW']}`}
        />
        {/* Button 4 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['CAM UN'],
                    PlayerNameinputvalue7: Constants['CAM'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['CAM']}`}
        />
        {/* Button 3 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['LW UN'],
                    PlayerNameinputvalue7: Constants['LW'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['CAM']}`}
        />
      </View>
      {/* View 7 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 40,
          },
          dimensions.width
        )}
      >
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                    ActionInputvalue: Constants['Action'],
                    ActionZoneinputvalue: Constants['ActionZone'],
                    HomeTeaminputvalue2: Constants['HomeTeam'],
                    MatchIDinputvalue5: Constants['MatchID'],
                    Oppositioninputvalue3: Constants['Opposition'],
                    PlayerIDinputvalue6: Constants['CF UN'],
                    PlayerNameinputvalue7: Constants['CF'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('SoccerMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                }
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
                color: palettes.App.Communical_Yellow_Emoticons,
                width: 100,
              }
            ),
            dimensions.width
          )}
          title={`${Constants['LCF']}`}
        />
      </View>
      {/* View 8 */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 20, marginRight: 20, marginTop: 10 },
          dimensions.width
        )}
      >
        <Divider
          color={theme.colors.border.base}
          {...GlobalStyles.DividerStyles(theme)['Divider'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.DividerStyles(theme)['Divider'].style,
            dimensions.width
          )}
        />
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: palettes.App.Peoplebit_Turquoise,
              fontFamily: 'Inter_600SemiBold',
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Substitutes'}
        </Text>
      </View>
      {/* View 9 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'space-around' },
          dimensions.width
        )}
      >
        {/* View 10 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Sub1 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub1 UN'],
                      PlayerNameinputvalue7: Constants['Sub1'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub1']}`}
          />
          {/* Sub3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub3 UN'],
                      PlayerNameinputvalue7: Constants['Sub3'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub3']}`}
          />
          {/* Button 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub5 UN'],
                      PlayerNameinputvalue7: Constants['Sub5'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub5']}`}
          />
          {/* Button 4 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub7 UN'],
                      PlayerNameinputvalue7: Constants['Sub7'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub7']}`}
          />
          {/* Button 5 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub9 UN'],
                      PlayerNameinputvalue7: Constants['Sub9'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub9']}`}
          />
          {/* Button 6 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub11 UN'],
                      PlayerNameinputvalue7: Constants['Sub11'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub11']}`}
          />
        </View>
        {/* View 11 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Sub2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub2 UN'],
                      PlayerNameinputvalue7: Constants['Sub2'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub2']}`}
          />
          {/* Sub2 2 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sun4 UN'],
                      PlayerNameinputvalue7: Constants['Sub4'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub4']}`}
          />
          {/* Sub2 3 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub6 UN'],
                      PlayerNameinputvalue7: Constants['Sub6'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub6']}`}
          />
          {/* Sub2 4 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub8 UN'],
                      PlayerNameinputvalue7: Constants['Sub8'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub8']}`}
          />
          {/* Sub2 5 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub10 UN'],
                      PlayerNameinputvalue7: Constants['Sub10'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('SoccerMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('SoccerMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub10']}`}
          />
          {/* Sub2 6 */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPIMatchStatsPostPOST.mutateAsync({
                      ActionInputvalue: Constants['Action'],
                      ActionZoneinputvalue: Constants['ActionZone'],
                      HomeTeaminputvalue2: Constants['HomeTeam'],
                      MatchIDinputvalue5: Constants['MatchID'],
                      Oppositioninputvalue3: Constants['Opposition'],
                      PlayerIDinputvalue6: Constants['Sub12 UN'],
                      PlayerNameinputvalue7: Constants['Sub12'],
                      TeamIDinputvalue4: Constants['TeamID'],
                      XValue: Constants['XAxis'],
                      YValue: Constants['YAxis'],
                    })
                  )?.json;
                  if (Constants['Goal'] === 1000) {
                    navigation.navigate('GAAMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('GAAMatchScreenBottomGoalScreen');
                  }
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
                  color: palettes.App.Communical_Yellow_Emoticons,
                  width: 100,
                }
              ),
              dimensions.width
            )}
            title={`${Constants['Sub12']}`}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SoccerMatchActionPlayerSelect4231Screen);
