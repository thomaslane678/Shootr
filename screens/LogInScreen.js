import React from 'react';
import {
  Button,
  CheckboxRow,
  ExpoImage,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as LogInApi from '../apis/LogInApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LogInScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const logInLogInPOST = LogInApi.useLogInPOST();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', height: 150 },
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
            {...GlobalStyles.ExpoImageStyles(theme)['Image (default)'].props}
            source={imageSource(Images['shootrredesigninappimage'])}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ExpoImageStyles(theme)['Image (default)'].style,
                { height: 150, width: 150 }
              ),
              dimensions.width
            )}
          />
        </View>
        {/* Create New Account */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_700Bold',
              fontSize: 28,
            },
            dimensions.width
          )}
        >
          {'Log In'}
        </Text>
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderBottomWidth: 1,
              borderColor: theme.colors.border.brand,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'MaterialCommunityIcons/email'}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter a value...'}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: palettes.App.Communial_White,
                    color: palettes.App.NFT_TIME_Black,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
        </View>
        {/* Password */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderBottomWidth: 1,
              borderColor: theme.colors.border.brand,
              borderLeftWidth: 1,
              borderRadius: 16,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 60,
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'FontAwesome/lock'}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 10, paddingRight: 10 },
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
              editable={true}
              placeholder={'Password'}
              placeholderTextColor={palettes.App['Custom Color_20']}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: palettes.App.Communial_Icon_BG,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
          <Icon
            size={24}
            color={palettes.App.Communical_Yellow_Emoticons}
            name={'Ionicons/eye-off'}
          />
        </View>
        {/* Remember me */}
        <View style={StyleSheet.applyWidth({ width: 165 }, dimensions.width)}>
          <CheckboxRow
            onPress={newCheckboxRowValue => {
              try {
                setCheckboxRowValue(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            color={palettes.App.Communical_Yellow_Emoticons}
            direction={'row-reverse'}
            label={'Remember me'}
            style={StyleSheet.applyWidth({ minHeight: 50 }, dimensions.width)}
            uncheckedColor={palettes.App.Peoplebit_Turquoise}
          />
        </View>
        {/* Log In */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const loginResponseJson = (
                  await logInLogInPOST.mutateAsync({
                    EmailValue: textInputValue,
                    PasswordValue: textInputValue2,
                  })
                )?.json;
                const accessToken = loginResponseJson?.['access_token'];
                const message = loginResponseJson?.['error_description'];
                setGlobalVariableValue({
                  key: 'Error_Message',
                  value: message,
                });
                if (!accessToken) {
                  return;
                }
                setGlobalVariableValue({
                  key: 'Authorization_Header',
                  value: 'Bearer ' + accessToken,
                });
                setGlobalVariableValue({
                  key: 'Username',
                  value: textInputValue,
                });
                navigation.navigate('ChooseTeamScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Turquoise,
              borderRadius: 100,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 58,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Log In'}
        />
        {/* Sign in 2 */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_20'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'New Team? Register your team now!'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('AddTeamChooseSportScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.branding.primary,
                    fontFamily: 'Inter_500Medium',
                    marginLeft: 7,
                  },
                  dimensions.width
                )}
              >
                {'Sign Up'}
              </Text>
            </Touchable>
          </View>
        </Touchable>
        {/* Sign in */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_20'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'New Player? Sign up here!'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('SignUpScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.branding.primary,
                    fontFamily: 'Inter_500Medium',
                    marginLeft: 7,
                  },
                  dimensions.width
                )}
              >
                {'Click Here'}
              </Text>
            </Touchable>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LogInScreen);
