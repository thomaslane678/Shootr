import React from 'react';
import {
  Button,
  DatePicker,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
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
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { Date: null };

const RugbyAddMatchScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [AddOpposition, setAddOpposition] = React.useState('');
  const [AddVenue, setAddVenue] = React.useState('');
  const [EventInput, setEventInput] = React.useState('NA');
  const [TextInputvalue2, setTextInputvalue2] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const shootrSupabaseDBAPIFixtureListPostPOST =
    ShootrSupabaseDBAPIApi.useFixtureListPostPOST();
  const shootrSupabaseDBAPINotificationsPostPOST =
    ShootrSupabaseDBAPIApi.useNotificationsPostPOST();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasBottomSafeArea={false}
      scrollable={true}
    >
      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        viewIsInsideTabBar={false}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.App.Communial_Icon_BG,
            height: '100%',
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignContent: 'space-around', alignSelf: 'center' },
            dimensions.width
          )}
        >
          <RadioButtonGroup
            onValueChange={newRadioButtonGroupValue => {
              const radioButtonGroupValue = newRadioButtonGroupValue;
              try {
                setRadioButtonGroupValue2(newRadioButtonGroupValue);
              } catch (err) {
                console.error(err);
              }
            }}
            direction={'horizontal'}
            value={radioButtonGroupValue2}
          >
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App.Communical_Yellow_Emoticons}
              unselectedColor={palettes.App.Communical_Yellow_Emoticons}
              value={'League'}
            />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                dimensions.width
              )}
            >
              {'League'}
            </Text>
            {/* Radio Button 2 */}
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App.Communical_Yellow_Emoticons}
              unselectedColor={palettes.App.Communical_Yellow_Emoticons}
              value={'Cup'}
            />
            {/* Text 2 */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                dimensions.width
              )}
            >
              {'Cup'}
            </Text>
            {/* Radio Button 3 */}
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App.Communical_Yellow_Emoticons}
              unselectedColor={palettes.App.Communical_Yellow_Emoticons}
              value={'Friendly'}
            />
            {/* Text 3 */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                dimensions.width
              )}
            >
              {'Friendly'}
            </Text>
          </RadioButtonGroup>
        </View>
        {/* Product Form */}
        <View>
          {/* Name */}
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
                  setAddOpposition(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Opposition'}
              placeholderTextColor={palettes.App.Communical_Yellow_Emoticons}
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
            />
          </View>
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
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
                  setAddVenue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Location'}
              placeholderTextColor={palettes.App.Communical_Yellow_Emoticons}
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
            />
          </View>
          {/* Stock & Unit */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Stock */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginBottom: 10, marginTop: 10 },
                dimensions.width
              )}
            >
              <DatePicker
                autoDismissKeyboard={true}
                disabled={false}
                hideLabel={false}
                inline={false}
                label={'Date'}
                leftIconMode={'inset'}
                mode={'date'}
                onDateChange={newDatePickerValue => {
                  const date = newDatePickerValue;
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                type={'solid'}
                date={datePickerValue}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.App.Peoplebit_Turquoise,
                    color: palettes.App.Communical_Yellow_Emoticons,
                  },
                  dimensions.width
                )}
              />
            </View>
            {/* Unit */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flex: 1,
                  flexDirection: 'row',
                  marginBottom: 10,
                  marginLeft: 16,
                  marginTop: 10,
                  width: '50%',
                },
                dimensions.width
              )}
            >
              <NumberInput
                changeTextDelay={500}
                onChangeText={newNumberInputValue => {
                  const numberInputValue = newNumberInputValue;
                  try {
                    setNumberInputValue(newNumberInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Enter a number...'}
                webShowOutline={true}
                {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                    {
                      backgroundColor: palettes.App.Peoplebit_Turquoise,
                      borderRadius: null,
                      color: palettes.App.Communical_Yellow_Emoticons,
                      height: 62,
                    }
                  ),
                  dimensions.width
                )}
                value={numberInputValue}
              />
            </View>
          </View>
        </View>
        {/* Action Btn */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIFixtureListPostPOST.mutateAsync({
                    CreatedBy: Constants['Name'],
                    Date: datePickerValue,
                    FixtureID:
                      Constants['TeamID'] + (AddOpposition + datePickerValue),
                    HomeTeam: Constants['HomeTeam'],
                    Location: AddVenue,
                    MatchType: radioButtonGroupValue2,
                    Opposition: AddOpposition,
                    TeamID: Constants['TeamID'],
                    Time: numberInputValue,
                  })
                )?.json;
                (
                  await shootrSupabaseDBAPINotificationsPostPOST.mutateAsync({
                    Createdby: Constants['Name'],
                    Notification: 'New Match',
                    TeamID: Constants['TeamID'],
                    TeamName: Constants['HomeTeam'],
                    createdat: new Date(),
                  })
                )?.json;
                navigation.navigate('TeamHomeScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Turquoise,
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
          title={'save & publish'}
        />
        {/* Action Btn 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIFixtureListPostPOST.mutateAsync({
                    CreatedBy: Constants['Name'],
                    Date: datePickerValue,
                    FixtureID:
                      Constants['TeamID'] + (AddOpposition + datePickerValue),
                    HomeTeam: Constants['HomeTeam'],
                    Location: AddVenue,
                    MatchType: radioButtonGroupValue2,
                    Opposition: AddOpposition,
                    TeamID: Constants['TeamID'],
                    Time: numberInputValue,
                  })
                )?.json;
                (
                  await shootrSupabaseDBAPINotificationsPostPOST.mutateAsync({
                    Createdby: Constants['Name'],
                    Notification: 'New Match',
                    TeamID: Constants['TeamID'],
                    TeamName: Constants['HomeTeam'],
                    createdat: new Date(),
                  })
                )?.json;
                navigation.navigate('RugbyAddMatchScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Turquoise,
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
          title={'save & Finish'}
        />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RugbyAddMatchScreen);
