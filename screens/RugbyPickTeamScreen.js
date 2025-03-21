import React from 'react';
import {
  Button,
  Divider,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const RugbyPickTeamScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPINotificationsPostPOST =
    ShootrSupabaseDBAPIApi.useNotificationsPostPOST();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: palettes.App.Communial_Icon_BG },
        dimensions.width
      )}
    >
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <View>
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  (
                    await shootrSupabaseDBAPINotificationsPostPOST.mutateAsync({
                      Createdby: Constants['Username'],
                      Notification: 'Started Match',
                      TeamID: Constants['TeamID'],
                      TeamName: Constants['HomeTeam'],
                      date: new Date(),
                    })
                  )?.json;
                  navigation.navigate('ChooseGoalScreen');
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
                  backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                  borderRadius: 12,
                  color: palettes.App.Peoplebit_Turquoise,
                  position: 'absolute',
                  right: 1,
                }
              ),
              dimensions.width
            )}
            title={'Start Match'}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 45,
            },
            dimensions.width
          )}
        >
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'LH Prop',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'LH Prop UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Hooker',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Hooker UN',
                  value: Constants['FB UN'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'TH Prop',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'TH Prop UN',
                  value: Constants['LCB UN'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: '2nd Row 1',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: '2nd Row UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: '2nd Row 2',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: '2nd Row 2 UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'OS Flanker',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'OS Flanker UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Number 8',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Number 8 UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'BS Flanker',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'BS Flanker UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Scrum Half',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Scrum Half UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Fly Half',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Fly Half UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.goBack();
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
              try {
                setGlobalVariableValue({
                  key: 'Inside Centre',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Inside Centre UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Outside Centre',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Outside Centre UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Right Wing',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Ring Wing UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Full Back',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Full Back UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
              try {
                setGlobalVariableValue({
                  key: 'Left Wing',
                  value: Constants['SelectedPlayer'],
                });
                setGlobalVariableValue({
                  key: 'Left Wing UN',
                  value: Constants['SelectedPlayerUsername'],
                });
                navigation.navigate('RugbyTeamListScreen');
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
            { marginLeft: 20, marginRight: 20, marginTop: 40 },
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
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub1',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub1 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub1']}`}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub3',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub3 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    marginTop: 5,
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
                try {
                  setGlobalVariableValue({
                    key: 'Sub5',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub5 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    marginTop: 5,
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
                try {
                  setGlobalVariableValue({
                    key: 'Sub7',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub7 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    marginTop: 5,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub7']}`}
            />
            {/* Button 6 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub9',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub9 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    marginTop: 5,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub9']}`}
            />
            {/* Button 5 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub11',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub11 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    marginTop: 5,
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
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub2',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub2 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub2']}`}
            />
            {/* Button 2 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub4',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sun4 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub4']}`}
            />
            {/* Button 3 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub6',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub6 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub6']}`}
            />
            {/* Button 4 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub8',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub8 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub8']}`}
            />
            {/* Button 6 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub10',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub10 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
                    color: palettes.App.Communical_Yellow_Emoticons,
                    width: 100,
                  }
                ),
                dimensions.width
              )}
              title={`${Constants['Sub10']}`}
            />
            {/* Button 5 */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Sub12',
                    value: Constants['SelectedPlayer'],
                  });
                  setGlobalVariableValue({
                    key: 'Sub12 UN',
                    value: Constants['SelectedPlayerUsername'],
                  });
                  navigation.navigate('RugbyTeamListScreen');
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
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RugbyPickTeamScreen);
