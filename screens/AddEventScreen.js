import React from 'react';
import {
  Button,
  DatePicker,
  NumberInput,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { Date: null };

const AddEventScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [EventInput, setEventInput] = React.useState('NA');
  const [TextInputvalue2, setTextInputvalue2] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [picker2Value, setPicker2Value] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const shootrSupabaseDBAPIEventsListPostPOST =
    ShootrSupabaseDBAPIApi.useEventsListPostPOST();
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
        {/* Product Form */}
        <View>
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 20,
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
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Event'}
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
              value={textInputValue}
            />
          </View>
          {/* Category */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 20,
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
                  setTextInputvalue2(newTextInputValue);
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
              value={TextInputvalue2}
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
                { borderRadius: 20, flex: 1, marginBottom: 10, marginTop: 10 },
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
                    borderRadius: 20,
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
                      borderRadius: 20,
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
                  await shootrSupabaseDBAPIEventsListPostPOST.mutateAsync({
                    CreatedBy: Constants['Name'],
                    Date: datePickerValue,
                    Event: textInputValue,
                    EventID: Constants['TeamID'] + textInputValue,
                    HomeTeam: Constants['HomeTeam'],
                    Location: TextInputvalue2,
                    TeamID: Constants['TeamID'],
                    Time: numberInputValue,
                  })
                )?.json;
                (
                  await shootrSupabaseDBAPINotificationsPostPOST.mutateAsync({
                    Createdby: Constants['Name'],
                    Notification: 'New Event',
                    TeamID: Constants['TeamID'],
                    TeamName: Constants['HomeTeam'],
                    createdat: '19:18:55',
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
              borderRadius: 20,
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
                  await shootrSupabaseDBAPIEventsListPostPOST.mutateAsync({
                    CreatedBy: Constants['Name'],
                    Date: datePickerValue,
                    Event: textInputValue,
                    EventID:
                      Constants['TeamID'] + (textInputValue + datePickerValue),
                    HomeTeam: Constants['HomeTeam'],
                    Location: TextInputvalue2,
                    TeamID: Constants['TeamID'],
                    Time: numberInputValue,
                  })
                )?.json;
                (
                  await shootrSupabaseDBAPINotificationsPostPOST.mutateAsync({
                    Createdby: Constants['Name'],
                    Notification: 'New Event',
                    TeamID: Constants['TeamID'],
                    TeamName: Constants['HomeTeam'],
                    createdat: '19:18:55',
                  })
                )?.json;
                navigation.navigate('AddEventScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 20,
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
          title={'Save & Add Another'}
        />
        <View />
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddEventScreen);
