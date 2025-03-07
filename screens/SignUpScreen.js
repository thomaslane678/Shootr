import React from 'react';
import {
  Button,
  ExpoImage,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSignUpApi from '../apis/ShootrSignUpApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const SignUpScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [NewEmailValue, setNewEmailValue] = React.useState('');
  const [NewPasswordValue, setNewPasswordValue] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const shootrSignUpUserManagementSignUpPOST =
    ShootrSignUpApi.useUserManagementSignUpPOST();

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
            source={imageSource(Images['ShootrBigLogoTransparent'])}
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
              alignSelf: 'center',
              color: palettes.App.Peoplebit_Turquoise,
              fontFamily: 'Inter_700Bold',
              fontSize: 28,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Sign Up'}
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
                try {
                  setNewEmailValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={'Email'}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: palettes.App.Communical_Yellow_Emoticons,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
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
                  setNewPasswordValue(newTextInputValue);
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
        {/* Sign up */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const SignupResponse = (
                  await shootrSignUpUserManagementSignUpPOST.mutateAsync({
                    SignUpEmail: NewEmailValue,
                    SignUpPassword: NewPasswordValue,
                  })
                )?.json;
                const message = SignupResponse?.msg;
                setGlobalVariableValue({
                  key: 'Error_Message',
                  value: message,
                });
                if (message) {
                  return;
                }
                navigation.navigate('AddUserChooseSportScreen');
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
          title={'Sign Up'}
        />
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
              {'Already have an account?'}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('LogInScreen');
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
                    color: palettes.App.Peoplebit_Turquoise,
                    fontFamily: 'Inter_500Medium',
                    marginLeft: 7,
                  },
                  dimensions.width
                )}
              >
                {'Sign in'}
              </Text>
            </Touchable>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SignUpScreen);
