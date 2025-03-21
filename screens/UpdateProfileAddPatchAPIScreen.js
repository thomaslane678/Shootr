import React from 'react';
import {
  Button,
  RadioButton,
  RadioButtonGroup,
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

const UpdateProfileAddPatchAPIScreen = props => {
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
        {/* Product Form */}
        <View>
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
          {/* Phone Number */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                marginBottom: 10,
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
                  setGlobalVariableValue({
                    key: 'Name',
                    value: newTextInputValue,
                  });
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
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                },
                dimensions.width
              )}
              value={Constants['Name']}
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
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setGlobalVariableValue({
                    key: 'Username',
                    value: newTextInputValue,
                  });
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
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={Constants['Username']}
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
          {/* Name 6 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setTeamName(newTextInputValue);
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
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={Constants['HomeTeam']}
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
          {/* Name 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setTeamID(newTextInputValue);
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
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={Constants['TeamID']}
            />
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
          {/* Name 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
              placeholder={Constants['Location'].toString()}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={Constants['Location']}
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
          {/* Name 4 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setGlobalVariableValue({
                    key: 'Grade',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Divison'}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={Constants['Grade']}
            />
          </View>
          {/* Text 7 */}
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
            {'Sport'}
          </Text>
          {/* Name 5 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setSport(newTextInputValue);
                  setGlobalVariableValue({
                    key: 'Sport',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={Constants['Sport'].toString()}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: palettes.App.Peoplebit_Turquoise,
                  borderBottomWidth: 1,
                  borderColor: palettes.App.ViewBG,
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  height: 50,
                  paddingLeft: 16,
                  width: '100%',
                },
                dimensions.width
              )}
              value={Constants['Sport']}
            />
          </View>
          {/* User Type */}
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
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  paddingLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Profile Type'}
            </Text>

            <RadioButtonGroup
              onValueChange={newRadioButtonGroupValue => {
                try {
                  setRadioButtonGroupValue(newRadioButtonGroupValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
              value={radioButtonGroupValue}
            >
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', paddingLeft: 8 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { alignItems: 'center', flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <RadioButton
                    selectedIcon={'MaterialIcons/radio-button-checked'}
                    size={24}
                    unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                    color={palettes.App.Communical_Yellow_Emoticons}
                    unselectedColor={palettes.App.Communial_Icon_BG}
                    value={'customer'}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      { color: theme.colors.text.strong, paddingLeft: 8 },
                      dimensions.width
                    )}
                  >
                    {'Player'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      marginLeft: 16,
                    },
                    dimensions.width
                  )}
                >
                  <RadioButton
                    selectedIcon={'MaterialIcons/radio-button-checked'}
                    size={24}
                    unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                    color={theme.colors.branding.secondary}
                    unselectedColor={theme.colors.text.light}
                    value={'vendor'}
                  />
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      { color: theme.colors.text.strong, paddingLeft: 8 },
                      dimensions.width
                    )}
                  >
                    {'Admin'}
                  </Text>
                </View>
              </View>
            </RadioButtonGroup>
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
                    Basic: 'Basic',
                    Grade: 'Grade',
                    Location: 'Location',
                    PlayerName: PlayerName,
                    Sport: 'Sport',
                    Sportcode: 1,
                    Team: TeamName,
                    TeamID: TeamID,
                    Username: PlayerUserName,
                    position: 'Forward',
                    rolecode: 101,
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
                navigation.navigate('HomeScreen');
                (await ShootrSupabaseDBAPIApi.actionListGetGET(Constants))
                  ?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 11,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
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

export default withTheme(UpdateProfileAddPatchAPIScreen);
