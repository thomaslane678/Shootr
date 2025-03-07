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

const TeamSignUpConfirmationScreen = props => {
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

      <View style={StyleSheet.applyWidth({ height: 200 }, dimensions.width)}>
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'center', fontFamily: 'Inter_600SemiBold' }
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
              { alignSelf: 'center' }
            ),
            dimensions.width
          )}
        >
          {Constants['HomeTeam']}
          {' has been created successfully'}
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
              { alignSelf: 'center' }
            ),
            dimensions.width
          )}
        >
          {'Your Team ID is: (you might want to screenshot this)'}
        </Text>
        {/* Spacer 2 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Text 4 */}
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
                fontSize: 32,
                paddingTop: 10,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {Constants['TeamID']}
        </Text>
        {/* Spacer 3 */}
        <Spacer bottom={8} left={8} right={8} top={8} />
        {/* Text 5 */}
        <Text
          accessible={true}
          selectable={false}
          {...GlobalStyles.TextStyles(theme)['Text 2'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Text 2'].style,
              theme.typography.body1,
              { alignSelf: 'center' }
            ),
            dimensions.width
          )}
        >
          {'Your players use this code to join your team! '}
        </Text>
      </View>
      {/* View 2 */}
      <View>
        <Spacer left={8} right={8} bottom={20} top={20} />
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
          title={'Create Your Profile'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TeamSignUpConfirmationScreen);
