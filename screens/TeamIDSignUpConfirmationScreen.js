import React from 'react';
import {
  Button,
  ExpoImage,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const TeamIDSignUpConfirmationScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
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

      <View style={StyleSheet.applyWidth({ height: 300 }, dimensions.width)}>
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
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
              }
            ),
            dimensions.width
          )}
        >
          {'Congratulations!'}
        </Text>
        {/* Text 3 */}
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
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {
            "We have added your TeamID details - if the information below doesn't look correct, please go back and review the TeamID you have entered"
          }
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
              theme.typography.body1,
              { alignSelf: 'center', fontFamily: 'Inter_400Regular' }
            ),
            dimensions.width
          )}
        >
          {'Your Team information is'}
        </Text>
        {/* Text 5 */}
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
                fontFamily: 'Inter_700Bold',
                fontSize: 20,
                paddingTop: 10,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'Team: '}
          {Constants['HomeTeam']}
          {' \nLocation: '}
          {Constants['Location']}
          {' \nTeamID: '}
          {Constants['TeamID']}
          {'\nDivision: '}
          {Constants['Grade']}
        </Text>
      </View>
      {/* View 2 */}
      <View>
        <Spacer left={8} right={8} bottom={10} top={10} />
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AddUserScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              theme.typography.button,
              {
                backgroundColor: palettes.App.Peoplebit_Turquoise,
                borderRadius: 12,
                color: palettes.App.Communical_Yellow_Emoticons,
                marginLeft: 40,
                marginRight: 40,
              }
            ),
            dimensions.width
          )}
          title={'Create Profile'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TeamIDSignUpConfirmationScreen);
