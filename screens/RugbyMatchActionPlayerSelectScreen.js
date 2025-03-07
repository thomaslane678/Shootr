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

const RugbyMatchActionPlayerSelectScreen = props => {
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
      <View />
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
                    PlayerIDinputvalue6: Constants['LH Prop UN'],
                    PlayerNameinputvalue7: Constants['LH Prop'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    PlayerIDinputvalue6: Constants['Hooker UN'],
                    PlayerNameinputvalue7: Constants['Hooker'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['FB']}`}
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
                    PlayerIDinputvalue6: Constants['TH Prop UN'],
                    PlayerNameinputvalue7: Constants['TH Prop'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
      </View>
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '77%',
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
                    PlayerIDinputvalue6: Constants['2nd Row UN'],
                    PlayerNameinputvalue7: Constants['2nd Row 1'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['RHB']}`}
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
                    PlayerIDinputvalue6: Constants['2nd Row 2 UN'],
                    PlayerNameinputvalue7: Constants['2nd Row 2'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['CB']}`}
        />
      </View>
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
                    PlayerIDinputvalue6: Constants['BS Flanker UN'],
                    PlayerNameinputvalue7: Constants['BS Flanker'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['MID1']}`}
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
                    PlayerIDinputvalue6: Constants['Number 8 UN'],
                    PlayerNameinputvalue7: Constants['Number 8'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['MID2']}`}
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
                    PlayerIDinputvalue6: Constants['OS Flanker UN'],
                    PlayerNameinputvalue7: Constants['OS Flanker'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['MID2']}`}
        />
      </View>
      {/* View 6 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start',
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
                    PlayerIDinputvalue6: Constants['Scrum Half UN'],
                    PlayerNameinputvalue7: Constants['Scrum Half'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['RHF']}`}
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
                    PlayerIDinputvalue6: Constants['Fly Half UN'],
                    PlayerNameinputvalue7: Constants['Fly Half'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['CF']}`}
        />
      </View>
      {/* View 7 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
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
                    PlayerIDinputvalue6: Constants['Inside Centre UN'],
                    PlayerNameinputvalue7: Constants['Inside Centre'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['RCF']}`}
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
                    PlayerIDinputvalue6: Constants['Fly Half UN'],
                    PlayerNameinputvalue7: Constants['Fly Half'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['FF']}`}
        />
      </View>
      {/* View 10 */}
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
                    PlayerIDinputvalue6: Constants['Ring Wing UN'],
                    PlayerNameinputvalue7: Constants['Right Wing'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['RCF']}`}
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
                    PlayerIDinputvalue6: Constants['Full Back UN'],
                    PlayerNameinputvalue7: Constants['Full Back'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['FF']}`}
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
                    PlayerIDinputvalue6: Constants['Left Wing UN'],
                    PlayerNameinputvalue7: Constants['Left Wing'],
                    TeamIDinputvalue4: Constants['TeamID'],
                    XValue: Constants['XAxis'],
                    YValue: Constants['YAxis'],
                  })
                )?.json;
                if (Constants['Goal'] === 1000) {
                  navigation.navigate('RugbyMatchScreenTopGoalScreen');
                } else {
                  navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
          title={`${Constants['FF']}`}
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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
                    navigation.navigate('RugbyMatchScreenTopGoalScreen');
                  } else {
                    navigation.navigate('RugbyMatchScreenBottomGoalScreen');
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

export default withTheme(RugbyMatchActionPlayerSelectScreen);
