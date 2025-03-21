import React from 'react';
import {
  Button,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const RugbyConfirmResultScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const shootrSupabaseDBAPIResultPost2POST =
    ShootrSupabaseDBAPIApi.useResultPost2POST();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 150, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image 2'].props}
          source={imageSource(Images['shootrredesigninappimage'])}
          style={StyleSheet.applyWidth(
            GlobalStyles.ImageStyles(theme)['Image 2'].style,
            dimensions.width
          )}
        />
      </View>
      {/* View 2 */}
      <View>
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'].style, {
              fontFamily: 'Inter_600SemiBold',
              fontSize: 36,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Confirm Result'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text 2'].style, {
              fontFamily: 'Inter_600SemiBold',
              fontSize: 14,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Not correct? Please edit the scoreboard on the previous screen'}
        </Text>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
      </View>
      {/* View 3 */}
      <View>
        {/* View 5 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                {
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                }
              ),
              dimensions.width
            )}
          >
            {Constants['HomeTeam']}
          </Text>
          <Spacer bottom={8} left={8} right={8} top={8} />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { fontFamily: 'Inter_600SemiBold', fontSize: 20 }
              ),
              dimensions.width
            )}
          >
            {Constants['HTGoals']}
          </Text>
        </View>
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* View 4 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
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
                {
                  color: palettes.App.NFT_TIME_Black,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 20,
                }
              ),
              dimensions.width
            )}
          >
            {Constants['Opposition']}
          </Text>
          <Spacer bottom={8} left={8} right={8} top={8} />
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text 2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['Text 2'].style,
                { fontFamily: 'Inter_600SemiBold', fontSize: 20 }
              ),
              dimensions.width
            )}
          >
            {Constants['OppGoals']}
          </Text>
        </View>
      </View>
      {/* Spacer 2 */}
      <Spacer bottom={8} left={8} right={8} top={8} />
      {/* View 5 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          },
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
            selectedIcon={'MaterialIcons/radio-button-checked'}
            size={24}
            unselectedIcon={'MaterialIcons/radio-button-unchecked'}
            color={palettes.App.Communical_Yellow_Emoticons}
            unselectedColor={palettes.App.Communical_Yellow_Emoticons}
            value={'WIn'}
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
            {'Win'}
          </Text>
          {/* Radio Button 2 */}
          <RadioButton
            selectedIcon={'MaterialIcons/radio-button-checked'}
            size={24}
            unselectedIcon={'MaterialIcons/radio-button-unchecked'}
            color={palettes.App.Communical_Yellow_Emoticons}
            unselectedColor={palettes.App.Communical_Yellow_Emoticons}
            value={'Draw'}
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
            {'Draw'}
          </Text>
          {/* Radio Button 3 */}
          <RadioButton
            selectedIcon={'MaterialIcons/radio-button-checked'}
            size={24}
            unselectedIcon={'MaterialIcons/radio-button-unchecked'}
            color={palettes.App.Communical_Yellow_Emoticons}
            unselectedColor={palettes.App.Communical_Yellow_Emoticons}
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
            {'Loss'}
          </Text>
        </RadioButtonGroup>
      </View>
      <Spacer bottom={8} left={8} right={8} top={8} />
      {/* View 4 */}
      <View>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                (
                  await shootrSupabaseDBAPIResultPost2POST.mutateAsync({
                    Date: Constants['TodayDate'],
                    HT: Constants['HomeTeam'],
                    HTGoals: Constants['HTGoals'],
                    HTPoints: Constants['HTPoints'],
                    Location: Constants['Location'],
                    MatchID: Constants['MatchID'],
                    MatchResult: radioButtonGroupValue,
                    MatchType: Constants['MatchType'],
                    Opp: Constants['Opposition'],
                    OppGoals: Constants['OppGoals'],
                    OppPoints: Constants['OppPoints'],
                    TeamID: Constants['TeamID'],
                  })
                )?.json;
                navigation.navigate('HomeScreen');
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
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 20,
                color: palettes.App.Communical_Yellow_Emoticons,
                fontFamily: 'Inter_600SemiBold',
                marginLeft: 20,
                marginRight: 20,
              }
            ),
            dimensions.width
          )}
          title={'Confirm'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RugbyConfirmResultScreen);
