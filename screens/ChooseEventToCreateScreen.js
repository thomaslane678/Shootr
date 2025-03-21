import React from 'react';
import { Button, ExpoImage, ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ShootrSupabaseDBAPIApi from '../apis/ShootrSupabaseDBAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ChooseEventToCreateScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [PlayerName, setPlayerName] = React.useState('PlayerName');
  const [PlayerUserName, setPlayerUserName] = React.useState('PlayerUsername');
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState('customer');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const shootrSupabaseDBAPIMatchResultsPostPOST =
    ShootrSupabaseDBAPIApi.useMatchResultsPostPOST();

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
      {/* View 2 */}
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

      <View
        style={StyleSheet.applyWidth(
          { height: '80%', justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Action Btn 2 */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onChangeText={newActionBtn2Value => {
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
            try {
              if (Constants['SportValue'] === 2) {
                navigation.navigate('GAAAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 7) {
                navigation.navigate('GAAAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 1) {
                navigation.navigate('SoccerAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 6) {
                navigation.navigate('SoccerAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 3) {
                navigation.navigate('RugbyAddMatchScreen');
              } else {
              }

              if (Constants['SportValue'] === 8) {
                navigation.navigate('RugbyAddMatchScreen');
              } else {
              }
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 11,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
          title={'Add Match'}
        />
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
            try {
              navigation.navigate('AddEventScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.App.Peoplebit_Sapphire,
              borderRadius: 11,
              color: palettes.App.Communical_Yellow_Emoticons,
              fontFamily: 'System',
              fontSize: 18,
              fontWeight: '600',
              height: 51,
              marginBottom: 20,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
            },
            dimensions.width
          )}
          title={'Add Event'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ChooseEventToCreateScreen);
