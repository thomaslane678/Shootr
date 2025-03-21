import React from 'react';
import {
  Button,
  DatePicker,
  Divider,
  ExpoImage,
  Icon,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { Date: null };

const GAAAddMatchScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [AddOpposition, setAddOpposition] = React.useState('');
  const [AddVenue, setAddVenue] = React.useState('');
  const [EventInput, setEventInput] = React.useState('NA');
  const [TextInputValue1, setTextInputValue1] = React.useState('');
  const [TextInputValue2, setTextInputValue2] = React.useState('');
  const [TextInputValue3, setTextInputValue3] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [picker2Value, setPicker2Value] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
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
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center' },
          dimensions.width
        )}
      >
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          {...GlobalStyles.ExpoImageStyles(theme)['Image 4'].props}
          source={imageSource(Images['shootrredesigninappimage'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ExpoImageStyles(theme)['Image 4'].style,
              { height: 200, width: 200 }
            ),
            dimensions.width
          )}
        />
      </View>

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
            { alignSelf: 'center' },
            dimensions.width
          )}
        >
          <RadioButtonGroup
            onValueChange={newRadioButtonGroupValue => {
              const radioButtonGroupValue = newRadioButtonGroupValue;
              try {
                setRadioButtonGroupValue(newRadioButtonGroupValue);
              } catch (err) {
                console.error(err);
              }
            }}
            direction={'horizontal'}
            value={radioButtonGroupValue}
          >
            <RadioButton
              onPress={() => {
                try {
                  setRadioButtonGroupValue('League');
                } catch (err) {
                  console.error(err);
                }
              }}
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
              onPress={() => {
                try {
                  setRadioButtonGroupValue('Championship');
                } catch (err) {
                  console.error(err);
                }
              }}
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App.Communical_Yellow_Emoticons}
              unselectedColor={palettes.App.Communical_Yellow_Emoticons}
              value={'Championship'}
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
              {'Championship'}
            </Text>
            {/* Radio Button 3 */}
            <RadioButton
              onPress={() => {
                try {
                  setRadioButtonGroupValue('Challenge');
                } catch (err) {
                  console.error(err);
                }
              }}
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={palettes.App.Communical_Yellow_Emoticons}
              unselectedColor={palettes.App.Communical_Yellow_Emoticons}
              value={'Challenge'}
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
              {'Challenge'}
            </Text>
          </RadioButtonGroup>
        </View>
        {/* Product Form */}
        <View>
          {/* View 3 */}
          <View>
            <Divider
              color={theme.colors.border.base}
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 5 }
                ),
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  { fontFamily: 'Inter_600SemiBold' }
                ),
                dimensions.width
              )}
            >
              {'Venue'}
            </Text>
          </View>
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
                  setTextInputValue1(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Venue'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    borderBottomWidth: null,
                    borderLeftWidth: null,
                    borderRightWidth: null,
                    borderTopWidth: null,
                    color: palettes.App.Communical_Yellow_Emoticons,
                    height: 50,
                  }
                ),
                dimensions.width
              )}
              value={TextInputValue1}
            />
          </View>
          {/* View 4 */}
          <View>
            <Divider
              color={theme.colors.border.base}
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 5 }
                ),
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  { fontFamily: 'Inter_600SemiBold' }
                ),
                dimensions.width
              )}
            >
              {'Opposition'}
            </Text>
          </View>
          {/* Name 2 */}
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
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Opposition'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    borderBottomWidth: null,
                    borderLeftWidth: null,
                    borderRadius: 20,
                    borderRightWidth: null,
                    borderTopWidth: null,
                    color: palettes.App.Communical_Yellow_Emoticons,
                    height: 50,
                  }
                ),
                dimensions.width
              )}
              value={TextInputValue2}
            />
          </View>
          {/* View 3 */}
          <View>
            <Divider
              color={theme.colors.border.base}
              {...GlobalStyles.DividerStyles(theme)['Divider'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  { height: 5 }
                ),
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text 2'].style,
                  { fontFamily: 'Inter_600SemiBold' }
                ),
                dimensions.width
              )}
            >
              {'Date                                              Time'}
            </Text>
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
                  borderRadius: 20,
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
                webShowOutline={true}
                {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
                placeholder={'Enter Time (eg 17:00)'}
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
                      Constants['TeamID'] + (TextInputValue2 + datePickerValue),
                    HomeTeam: Constants['HomeTeam'],
                    Location: TextInputValue1,
                    MatchType: radioButtonGroupValue,
                    Opposition: TextInputValue2,
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
                    date: new Date(),
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
          title={'Save & Finish'}
        />
        {/* Action Btn 3 */}
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
                      Constants['TeamID'] + (TextInputValue2 + datePickerValue),
                    HomeTeam: Constants['HomeTeam'],
                    Location: TextInputValue1,
                    MatchType: radioButtonGroupValue,
                    Opposition: TextInputValue2,
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
                    date: new Date(),
                  })
                )?.json;
                navigation.navigate('GAAAddMatchScreen');
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
      </SimpleStyleKeyboardAwareScrollView>
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

export default withTheme(GAAAddMatchScreen);
