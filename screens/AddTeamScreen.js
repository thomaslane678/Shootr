import React from 'react';
import {
  Button,
  ExpoImage,
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
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import showAlertUtil from '../utils/showAlert';
import useWindowDimensions from '../utils/useWindowDimensions';

const AddTeamScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [Division, setDivision] = React.useState('TBC');
  const [Location, setLocation] = React.useState('TBC');
  const [PlayerName, setPlayerName] = React.useState('PlayerName');
  const [PlayerUserName, setPlayerUserName] = React.useState('PlayerUsername');
  const [Sport, setSport] = React.useState('');
  const [TeamID, setTeamID] = React.useState('');
  const [TeamName, setTeamName] = React.useState('TBC');
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState('customer');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPIMatchResultsPostPOST =
    ShootrSupabaseDBAPIApi.useMatchResultsPostPOST();
  const shootrSupabaseDBAPITeamListPostPOST =
    ShootrSupabaseDBAPIApi.useTeamListPostPOST();

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

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <View>
          <Spacer bottom={8} left={8} right={8} top={8} />
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {"Welcome to Shootr!\n\nPlease fill in your Club's details below"}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                fontFamily: 'Inter_600SemiBold',
                fontSize: 14,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Please note that apostrophes are not allowed'}
          </Text>
          {/* Spacer 2 */}
          <Spacer bottom={8} left={8} right={8} top={8} />
        </View>
        {/* Product Form */}
        <View>
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
          {/* TeamName */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setTeamName(newTextInputValue);
                  setGlobalVariableValue({
                    key: 'HomeTeam',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Team Name'}
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
            {'Team ID'}
          </Text>
          {/* TeamName 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                  setTeamID(newTextInputValue);
                  setGlobalVariableValue({
                    key: 'TeamID',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'TeamID'}
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

          <View
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'center',
                backgroundColor: palettes.App.Communial_Icon_BG,
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
                  {
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 12,
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {
                'Your TeamID must be unique - this is the code you share with Players to allow them to join your squad, so please choose carefully'
              }
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
            {'Location'}
          </Text>
          {/* TeamName 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                    key: 'Location',
                    value: newTextInputValue,
                  });
                  setLocation(newTextInputValue);
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
                },
                dimensions.width
              )}
            />
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
            {'Division'}
          </Text>
          {/* TeamName 4 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
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
                    key: 'Grade',
                    value: newTextInputValue,
                  });
                  setDivision(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Division'}
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
        </View>
        {/* Action Btn */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onChangeText={newActionBtnValue => {
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
                const TeamListPost = (
                  await shootrSupabaseDBAPITeamListPostPOST.mutateAsync({
                    Division: Constants['Grade'],
                    Location: Constants['Location'],
                    Sport: Sport,
                    TeamID: TeamID,
                    TeamName: TeamName,
                  })
                )?.json;

                showAlertUtil({
                  title: 'Team Added Successfully',
                  message: undefined,
                  buttonText: undefined,
                });

                navigation.navigate('TeamSignUpConfirmationScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 12,
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
          title={'save'}
        />
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddTeamScreen);
