import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';

const AddUserScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [Division, setDivision] = React.useState('TBC');
  const [Location, setLocation] = React.useState('TBC');
  const [PlayerName, setPlayerName] = React.useState('PlayerName');
  const [PlayerUserName, setPlayerUserName] = React.useState('PlayerUsername');
  const [Sport, setSport] = React.useState('TBC');
  const [TeamID, setTeamID] = React.useState('TBC');
  const [TeamName, setTeamName] = React.useState('TBC');
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState('customer');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [radiobuttonvalue2, setRadiobuttonvalue2] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPIMatchResultsPostPOST =
    ShootrSupabaseDBAPIApi.useMatchResultsPostPOST();
  const shootrSupabaseDBAPIAddUserPOST =
    ShootrSupabaseDBAPIApi.useAddUserPOST();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={false}
      scrollable={true}
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
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
                marginLeft: 15,
                marginRight: 15,
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {'Please fill in your information below'}
          </Text>
        </View>
        {/* Product Form */}
        <View>
          {/* User Type 2 */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 10, marginTop: 10 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 18,
                  paddingLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Profile Type'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
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
                      key: 'AccountType',
                      value: 'Player',
                    });
                    setGlobalVariableValue({
                      key: 'AccountStatus',
                      value: 100,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                activeOpacity={50}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                      color: palettes.App.Peoplebit_Turquoise,
                      width: 120,
                    }
                  ),
                  dimensions.width
                )}
                title={'Player'}
              />
              {/* Button 2 */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'AccountType',
                      value: 'Admin',
                    });
                    setGlobalVariableValue({
                      key: 'AccountStatus',
                      value: 101,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                activeOpacity={50}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'].style,
                    {
                      backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                      color: palettes.App.Peoplebit_Turquoise,
                      width: 120,
                    }
                  ),
                  dimensions.width
                )}
                title={'Admin'}
              />
            </View>
          </View>

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
            {'Name'}
          </Text>
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderRadius: 20,
                marginBottom: 10,
                marginLeft: 40,
                marginRight: 40,
                marginTop: 10,
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setPlayerName(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Player Name'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
            />
          </View>
          {/* Text 2 */}
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
            {'Email Address'}
          </Text>
          {/* Username */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderLeftWidth: 40,
                borderRadius: 20,
                borderRightWidth: 40,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setPlayerUserName(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Email Address'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 29,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </View>
          {/* Text 3 */}
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
            {'Team Name'}
          </Text>
          {/* Team Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderLeftWidth: 40,
                borderRadius: 20,
                borderRightWidth: 40,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'HomeTeam',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Team Name'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </View>
          {/* Text 4 */}
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
            {'TeamID'}
          </Text>
          {/* TeamID */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderLeftWidth: 40,
                borderRadius: 20,
                borderRightWidth: 40,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'TeamID',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'TeamID'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </View>

          <View>
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
                    color: palettes.App.NFT_TIME_Black,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 12,
                    marginLeft: 15,
                    marginRight: 15,
                    textAlign: 'auto',
                  }
                ),
                dimensions.width
              )}
            >
              {
                "Your Team ID is the unique code created by whoever set up your Team's account"
              }
            </Text>
          </View>
          {/* Text 5 */}
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
            {'Location'}
          </Text>
          {/* Location */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderLeftWidth: 40,
                borderRadius: 20,
                borderRightWidth: 40,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'Location',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Location'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </View>
          {/* Text 6 */}
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
            {'Division'}
          </Text>
          {/* Division */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderLeftWidth: 40,
                borderRadius: 20,
                borderRightWidth: 40,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setDivision(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Division'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </View>
          {/* Text 8 */}
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
            {'Position'}
          </Text>
          {/* Username 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderLeftWidth: 40,
                borderRadius: 20,
                borderRightWidth: 40,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'Position',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Position'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 20,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Action Btn 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onChangeText={newActionBtn2Value => {
            const handler = async () => {
              try {
                (await shootrSupabaseDBAPIMatchResultsPostPOST.mutateAsync({}))
                  ?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIAddUserPOST.mutateAsync({
                    Basic: Constants['AccountType'],
                    Grade: Constants['Grade'],
                    Location: Location,
                    Player: Constants['AccountType'],
                    PlayerName: PlayerName,
                    Sport: Sport,
                    Sportcode: Constants['SportValue'],
                    Team: TeamName,
                    TeamID: TeamID,
                    Username: PlayerUserName,
                    position: Constants['Position'],
                    rolecode: Constants['AccountStatus'],
                  })
                )?.json;

                showAlertUtil({
                  title: 'User Added Successfully',
                  message: undefined,
                  buttonText: undefined,
                });

                setGlobalVariableValue({
                  key: 'HomeTeam',
                  value: TeamName,
                });
                setGlobalVariableValue({
                  key: 'TeamID',
                  value: TeamID,
                });
                setGlobalVariableValue({
                  key: 'Name',
                  value: PlayerName,
                });
                setGlobalVariableValue({
                  key: 'Username',
                  value: PlayerUserName,
                });
                setGlobalVariableValue({
                  key: 'Location',
                  value: Location,
                });
                setGlobalVariableValue({
                  key: 'Grade',
                  value: Division,
                });
                setGlobalVariableValue({
                  key: 'Sport',
                  value: Sport,
                });
                navigation.navigate('PlayerSignUpConfirmationScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 20,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
          title={'Save & Finish'}
        />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddUserScreen);
