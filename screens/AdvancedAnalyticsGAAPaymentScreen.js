import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const AdvancedAnalyticsGAAPaymentScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Buy Premium Player Plan 2 */}
      <WebView
        allowFileAccessFromFileURLs={false}
        allowUniversalAccessFromFileURLs={false}
        cacheEnabled={true}
        incognito={false}
        javaScriptCanOpenWindowsAutomatically={false}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        startInLoadingState={false}
        {...GlobalStyles.WebViewStyles(theme)['HTML View'].props}
        source={{
          html: '   <head> \n      <meta name="viewport" content="width=device-width, initial-scale=1"> \n<script async\n  src="https://js.stripe.com/v3/buy-button.js">\n</script>\n\n<stripe-buy-button\n  buy-button-id="buy_btn_1PozJxCFyyPsyKTGU1avodVR"\n  publishable-key="pk_live_51Or3lxCFyyPsyKTGBwUgWF7kao7zBi7advDDGnNzCPqe0hEpQnv9As4SQH7ZZmv1zcH34UqYUuZAnak1jHfx3V0s00gHUpV2LM"\n>\n</stripe-buy-button>',
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.WebViewStyles(theme)['HTML View'].style,
            { alignSelf: 'center' }
          ),
          dimensions.width
        )}
      />
      {/* View 2 */}
      <View>
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AdvancedAnalyticsGAAWelcomeScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          title={'Get Started'}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_700Bold',
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
        />
      </View>
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

export default withTheme(AdvancedAnalyticsGAAPaymentScreen);
