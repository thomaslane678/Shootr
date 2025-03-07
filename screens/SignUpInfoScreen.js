import React from 'react';
import {
  Button,
  ExpoImage,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const SignUpInfoScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [Division, setDivision] = React.useState('TBC');
  const [Location, setLocation] = React.useState('TBC');
  const [PlayerName, setPlayerName] = React.useState('PlayerName');
  const [PlayerUserName, setPlayerUserName] = React.useState('PlayerUsername');
  const [Sport, setSport] = React.useState('');
  const [TeamName, setTeamName] = React.useState('TBC');
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState('customer');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
      <View
        style={StyleSheet.applyWidth({ alignSelf: 'center' }, dimensions.width)}
      >
        <ExpoImage
          allowDownscaling={true}
          cachePolicy={'disk'}
          contentPosition={'center'}
          resizeMode={'cover'}
          source={imageSource(
            'https://static.draftbit.com/images/placeholder-image.png'
          )}
          transitionDuration={300}
          transitionEffect={'cross-dissolve'}
          transitionTiming={'ease-in-out'}
          {...GlobalStyles.ExpoImageStyles(theme)['Image (default)'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ExpoImageStyles(theme)['Image (default)'].style,
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
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Text */}
        <View>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_700Bold',
                fontSize: 22,
              }),
              dimensions.width
            )}
          >
            {'A Game Changing Approach'}
          </Text>
          {/* Text 3 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_600SemiBold',
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {
              '\nThe grassroots game has just changed forever and we want you to be at the forefront of it - \nHere at Shootr we specialise in bringing elite, top flight analytics to every pitch. Ever wonder who your best finishers are? Who brings the physically and gets those turnovers? Which side of the pitch you struggle on? Ever wish at half time you could see where and how the match is being won and lost? Well now you can.\n\nSign up now and bring the Revolution to your club'
            }
          </Text>
          {/* Spacer 2 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Text 4 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_700Bold',
                fontSize: 22,
              }),
              dimensions.width
            )}
          >
            {'Why Choose Shootr?'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_600SemiBold',
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {
              '\n- Our unique Geotagging Technology allows you to \n   accurately map out every action on the pitch\n- We specialise in simplifying advanced analytics in \n   realtime - see your stats during the match to allow \n   you to make informed decisions\n- Track your whole season, match-by-match and \n   season long trends\n- A central hub for your team - get notified about \n   upcoming matches and training sessions'
            }
          </Text>
          <Spacer bottom={8} left={8} right={8} top={8} />
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('AddTeamScreen');
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
                  fontFamily: 'Inter_600SemiBold',
                }
              ),
              dimensions.width
            )}
            title={'Sign Your Team Up Now'}
          />
        </View>
      </SimpleStyleKeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SignUpInfoScreen);
