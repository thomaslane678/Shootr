import React from 'react';
import {
  Button,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
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
  const [radioButtonGroupValue3, setRadioButtonGroupValue3] =
    React.useState('');
  const [radiobuttonvalue2, setRadiobuttonvalue2] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPIMatchResultsPostPOST =
    ShootrSupabaseDBAPIApi.useMatchResultsPostPOST();
  const shootrSupabaseDBAPIAddUser4POST =
    ShootrSupabaseDBAPIApi.useAddUser4POST();

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
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-evenly' },
                dimensions.width
              )}
            >
              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  const radioButtonGroupValue = newRadioButtonGroupValue;
                  try {
                    setRadioButtonGroupValue3(newRadioButtonGroupValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                direction={'horizontal'}
                value={radioButtonGroupValue3}
              >
                <RadioButton
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'AccountStatus',
                        value: 100,
                      });
                      setGlobalVariableValue({
                        key: 'AccountType',
                        value: 'Player',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  size={24}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={palettes.App.Communical_Yellow_Emoticons}
                  unselectedColor={palettes.App.Communical_Yellow_Emoticons}
                  value={100}
                />
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'].style,
                      theme.typography.body1,
                      {}
                    ),
                    dimensions.width
                  )}
                >
                  {'Player'}
                </Text>
                <Spacer bottom={8} top={8} left={100} right={16} />
                {/* Radio Button 2 */}
                <RadioButton
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'AccountStatus',
                        value: 101,
                      });
                      setGlobalVariableValue({
                        key: 'AccountType',
                        value: 'Admin',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  size={24}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={palettes.App.Communical_Yellow_Emoticons}
                  unselectedColor={palettes.App.Communical_Yellow_Emoticons}
                  value={101}
                />
                {/* Text 2 */}
                <Text
                  accessible={true}
                  selectable={false}
                  {...GlobalStyles.TextStyles(theme)['Text 2'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text 2'].style,
                      theme.typography.body1,
                      {}
                    ),
                    dimensions.width
                  )}
                >
                  {'Admin'}
                </Text>
              </RadioButtonGroup>
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
              placeholderTextColor={palettes.App.Communical_Yellow_Emoticons}
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
            {'Username'}
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
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  theme.typography.body1,
                  { alignSelf: 'center' }
                ),
                dimensions.width
              )}
            >
              {Constants['Username']}
            </Text>
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
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  theme.typography.body1,
                  { alignSelf: 'center' }
                ),
                dimensions.width
              )}
            >
              {Constants['HomeTeam']}
            </Text>
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
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  theme.typography.body1,
                  { alignSelf: 'center' }
                ),
                dimensions.width
              )}
            >
              {Constants['TeamID']}
            </Text>
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
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  theme.typography.body1,
                  { alignSelf: 'center' }
                ),
                dimensions.width
              )}
            >
              {Constants['Location']}
            </Text>
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
                justifyContent: 'center',
                marginBottom: 10,
                marginTop: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  theme.typography.body1,
                  { alignSelf: 'center' }
                ),
                dimensions.width
              )}
            >
              {Constants['Grade']}
            </Text>
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
              placeholderTextColor={palettes.App.Communical_Yellow_Emoticons}
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
                  await shootrSupabaseDBAPIAddUser4POST.mutateAsync({
                    Basic: 'Basic',
                    Grade: Constants['Grade'],
                    Location: Constants['Location'],
                    Player: Constants['AccountStatus'],
                    PlayerName: Constants['Name'],
                    Sport: Constants['Sport'],
                    Sportcode: Constants['SportValue'],
                    Team: Constants['HomeTeam'],
                    TeamID: Constants['TeamID'],
                    Username: Constants['Username'],
                    position: Constants['Position'],
                    rolecode: Constants['AccountStatus'],
                  })
                )?.json;

                showAlertUtil({
                  title: 'User Added Successfully',
                  message: undefined,
                  buttonText: undefined,
                });

                navigation.navigate('HomeScreen');
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
