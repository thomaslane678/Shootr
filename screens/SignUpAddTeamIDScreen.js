import React from 'react';
import {
  Button,
  ExpoImage,
  ScreenContainer,
  Spacer,
  TextInput,
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

const SignUpAddTeamIDScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* View 2 */}
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
      {/* View 3 */}
      <View>
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              {
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_700Bold',
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'Find Your Team'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              {
                alignSelf: 'center',
                color: palettes.App.NFT_TIME_Black,
                fontFamily: 'Inter_400Regular',
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'Enter the TeamID supplied by your Team Admin below'}
        </Text>
      </View>
      <Spacer bottom={8} left={8} right={8} top={8} />
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.App.Peoplebit_Turquoise,
            borderRadius: 20,
            height: 50,
            marginLeft: 40,
            marginRight: 40,
          },
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
              setTextInputValue(textInputValue);
              setGlobalVariableValue({
                key: 'TeamID',
                value: newTextInputValue,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          placeholderTextColor={palettes.App.Communical_Yellow_Emoticons}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextInputStyles(theme)['Text Input'].style,
              theme.typography.body2,
              { color: palettes.App.Communical_Yellow_Emoticons, height: 50 }
            ),
            dimensions.width
          )}
          value={textInputValue}
        />
      </View>
      {/* Spacer 2 */}
      <Spacer bottom={8} left={8} right={8} top={8} />
      {/* View 4 */}
      <View>
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const API = (
                  await ShootrSupabaseDBAPIApi.teamListGetByTeamIDGET(
                    Constants,
                    { TeamID: Constants['TeamID'] }
                  )
                )?.json;
                const APILocation = API && API[0]?.Location;
                setGlobalVariableValue({
                  key: 'Location',
                  value: API && API[0]?.Location,
                });
                const APIGrade = API && API[0]?.Division;
                setGlobalVariableValue({
                  key: 'Grade',
                  value: API && API[0]?.Division,
                });
                const APITeamName = API && API[0]?.TeamName;
                setGlobalVariableValue({
                  key: 'HomeTeam',
                  value: API && API[0]?.TeamName,
                });
                navigation.navigate('TeamIDSignUpConfirmationScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {
                backgroundColor: palettes.App.Communical_Yellow_Emoticons,
                borderRadius: 20,
                color: palettes.App.Peoplebit_Turquoise,
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
          title={'Continue'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SignUpAddTeamIDScreen);
